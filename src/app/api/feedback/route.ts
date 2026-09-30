import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { sendFeedbackNotificationToStudent } from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      booking_id,
      coding_rating,
      communication_rating,
      system_design_rating,
      strengths,
      improvements,
      overall_notes,
    } = body;

    if (!booking_id || !coding_rating || !communication_rating || !system_design_rating) {
      return NextResponse.json(
        { error: 'Missing required feedback ratings (coding, communication, system design)' },
        { status: 400 }
      );
    }

    // Verify booking belongs to this mentor
    const { data: booking, error: bookingErr } = await supabase
      .from('bookings')
      .select('*, student:profiles!bookings_student_id_fkey(full_name, email)')
      .eq('id', booking_id)
      .eq('mentor_id', user.id)
      .single();

    if (bookingErr || !booking) {
      return NextResponse.json(
        { error: 'Booking not found or you are not authorized to submit feedback for this session.' },
        { status: 403 }
      );
    }

    // 1. Insert feedback
    const { data: feedback, error: feedbackErr } = await supabase
      .from('feedback')
      .insert({
        booking_id,
        mentor_id: user.id,
        student_id: booking.student_id,
        coding_rating: Number(coding_rating),
        communication_rating: Number(communication_rating),
        system_design_rating: Number(system_design_rating),
        strengths: strengths || '',
        improvements: improvements || '',
        overall_notes: overall_notes || '',
      })
      .select()
      .single();

    if (feedbackErr) {
      console.error('Feedback Insert Error:', feedbackErr);
      return NextResponse.json({ error: feedbackErr.message }, { status: 500 });
    }

    // 2. Mark booking as completed
    await supabase
      .from('bookings')
      .update({ status: 'completed' })
      .eq('id', booking_id);

    // 3. Send email to student via Resend
    const student = booking.student as any;
    const { data: mentorProfile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single();

    if (student?.email) {
      try {
        await sendFeedbackNotificationToStudent({
          studentEmail: student.email,
          studentName: student.full_name || 'Student',
          mentorName: mentorProfile?.full_name || 'Mentor',
          bookingId: booking_id,
        });
      } catch (emailErr) {
        console.error('Non-critical email error on feedback:', emailErr);
      }
    }

    return NextResponse.json({ success: true, feedback });
  } catch (err: any) {
    console.error('Feedback API error:', err);
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 });
  }
}

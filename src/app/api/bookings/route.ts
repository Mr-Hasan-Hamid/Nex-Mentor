import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import {
  sendBookingConfirmationToStudent,
  sendBookingNotificationToMentor,
} from '@/lib/resend';

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
      mentor_id,
      starts_at,
      ends_at,
      resume_url,
      focus_areas,
      notes,
      meeting_url,
      cal_booking_id,
    } = body;

    if (!mentor_id || !starts_at || !ends_at || !focus_areas || !Array.isArray(focus_areas)) {
      return NextResponse.json(
        { error: 'Missing required booking details (mentor_id, starts_at, ends_at, focus_areas)' },
        { status: 400 }
      );
    }

    // Default meeting link fallback to Jitsi if none provided by Cal.com
    const roomName = `campusmentor-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 7)}`;
    const finalMeetingUrl = meeting_url || `https://meet.jit.si/${roomName}`;

    // 1. Insert booking in Supabase
    const { data: booking, error: insertError } = await supabase
      .from('bookings')
      .insert({
        student_id: user.id,
        mentor_id,
        cal_booking_id,
        starts_at,
        ends_at,
        resume_url,
        focus_areas,
        notes,
        meeting_url: finalMeetingUrl,
        status: 'confirmed',
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database Booking Insert Error:', insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // 2. Fetch student and mentor profiles for email notifications
    const { data: studentProfile } = await supabase
      .from('profiles')
      .select('full_name, email')
      .eq('id', user.id)
      .single();

    const { data: mentorData } = await supabase
      .from('profiles')
      .select('full_name, email, mentor_profiles(company, job_title)')
      .eq('id', mentor_id)
      .single();

    const mentorCompany = (mentorData as any)?.mentor_profiles?.[0]?.company || 'Tech Company';

    // 3. Fire Resend email notifications (non-blocking if email fails)
    try {
      if (studentProfile?.email && mentorData) {
        await Promise.all([
          sendBookingConfirmationToStudent({
            studentEmail: studentProfile.email,
            studentName: studentProfile.full_name || 'Student',
            mentorName: mentorData.full_name || 'Mentor',
            mentorCompany,
            startsAt: starts_at,
            meetingUrl: finalMeetingUrl,
            focusAreas,
          }),
          sendBookingNotificationToMentor({
            mentorEmail: mentorData.email,
            mentorName: mentorData.full_name || 'Mentor',
            studentName: studentProfile.full_name || 'Student',
            studentEmail: studentProfile.email,
            startsAt: starts_at,
            meetingUrl: finalMeetingUrl,
            resumeUrl,
            focusAreas,
          }),
        ]);
      }
    } catch (emailErr) {
      console.error('Non-critical email error on booking:', emailErr);
    }

    return NextResponse.json({ success: true, booking });
  } catch (err: any) {
    console.error('Server Booking Error:', err);
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');

    let query = supabase
      .from('bookings')
      .select(
        `
        *,
        student:profiles!bookings_student_id_fkey(full_name, email, avatar_url),
        mentor:profiles!bookings_mentor_id_fkey(full_name, email, avatar_url, mentor_profiles(*))
      `
      )
      .order('starts_at', { ascending: true });

    if (role === 'mentor') {
      query = query.eq('mentor_id', user.id);
    } else {
      query = query.eq('student_id', user.id);
    }

    const { data: bookings, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ bookings });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'Internal server error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import {
  sendBookingConfirmationToStudent,
  sendBookingNotificationToMentor,
  sendFeedbackNotificationToStudent,
} from '@/lib/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, payload } = body;

    if (!type || !payload) {
      return NextResponse.json({ error: 'Missing type or payload' }, { status: 400 });
    }

    let result;

    switch (type) {
      case 'booking_confirmation_student':
        result = await sendBookingConfirmationToStudent(payload);
        break;

      case 'booking_notification_mentor':
        result = await sendBookingNotificationToMentor(payload);
        break;

      case 'feedback_notification_student':
        result = await sendFeedbackNotificationToStudent(payload);
        break;

      default:
        return NextResponse.json({ error: `Unknown email type: ${type}` }, { status: 400 });
    }

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error('Email API Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
  }
}

import { Resend } from 'resend';
import {
  renderStudentBookingHtml,
  renderMentorNotificationHtml,
  renderFeedbackReadyHtml,
} from './emailTemplates';

const resendApiKey = process.env.RESEND_API_KEY || '';
export const resend = resendApiKey ? new Resend(resendApiKey) : null;
const FROM_EMAIL = process.env.FROM_EMAIL || 'NeXMentor <notifications@nexmentor.dev>';

export async function sendBookingConfirmationToStudent(props: {
  studentEmail: string;
  studentName: string;
  mentorName: string;
  mentorCompany: string;
  startsAt: string;
  meetingUrl?: string;
  focusAreas: string[];
}) {
  if (!resend) return { success: false, message: 'Resend not configured' };
  try {
    const formattedDate = new Date(props.startsAt).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const html = renderStudentBookingHtml({ ...props, formattedDate });
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: props.studentEmail,
      subject: `Confirmed: Mock Interview with ${props.mentorName} (${props.mentorCompany})`,
      html,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export async function sendBookingNotificationToMentor(props: {
  mentorEmail: string;
  mentorName: string;
  studentName: string;
  studentEmail: string;
  startsAt: string;
  meetingUrl?: string;
  resumeUrl?: string;
  focusAreas: string[];
}) {
  if (!resend) return { success: false, message: 'Resend not configured' };
  try {
    const formattedDate = new Date(props.startsAt).toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const html = renderMentorNotificationHtml({ ...props, formattedDate });
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: props.mentorEmail,
      subject: `New Student Booking: ${props.studentName} for Mock Interview`,
      html,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export async function sendFeedbackNotificationToStudent(props: {
  studentEmail: string;
  studentName: string;
  mentorName: string;
  bookingId: string;
}) {
  if (!resend) return { success: false, message: 'Resend not configured' };
  try {
    const html = renderFeedbackReadyHtml(props);
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: props.studentEmail,
      subject: `Interview Feedback Available from ${props.mentorName}`,
      html,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

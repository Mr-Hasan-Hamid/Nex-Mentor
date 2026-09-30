export function renderStudentBookingHtml({
  studentName,
  mentorName,
  mentorCompany,
  formattedDate,
  meetingUrl,
  focusAreas,
}: {
  studentName: string;
  mentorName: string;
  mentorCompany: string;
  formattedDate: string;
  meetingUrl?: string;
  focusAreas: string[];
}) {
  return `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111; background: #fff; border-radius: 8px; border: 1px solid #eaeaea;">
      <h2 style="margin-top: 0; font-size: 20px;">Mock Interview Confirmed 🎉</h2>
      <p>Hi <strong>${studentName}</strong>, your 30-minute session is confirmed.</p>
      <div style="background: #fafafa; border-left: 3px solid #000; padding: 14px; margin: 16px 0;">
        <p style="margin: 0 0 6px;"><strong>Mentor:</strong> ${mentorName} (${mentorCompany})</p>
        <p style="margin: 0 0 6px;"><strong>Date & Time:</strong> ${formattedDate}</p>
        <p style="margin: 0 0 6px;"><strong>Focus:</strong> ${focusAreas.join(', ')}</p>
        ${meetingUrl ? `<p style="margin: 10px 0 0;"><a href="${meetingUrl}" style="background: #000; color: #fff; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 13px;">Join Meeting</a></p>` : ''}
      </div>
      <p style="color: #666; font-size: 12px;">Sent by NeXMentor</p>
    </div>
  `;
}

export function renderMentorNotificationHtml({
  mentorName,
  studentName,
  studentEmail,
  formattedDate,
  meetingUrl,
  resumeUrl,
  focusAreas,
}: {
  mentorName: string;
  studentName: string;
  studentEmail: string;
  formattedDate: string;
  meetingUrl?: string;
  resumeUrl?: string;
  focusAreas: string[];
}) {
  return `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111; background: #fff; border-radius: 8px; border: 1px solid #eaeaea;">
      <h2 style="margin-top: 0; font-size: 20px;">New Student Booking 🗓️</h2>
      <p>Hi <strong>${mentorName}</strong>, a student booked a 30-minute mock interview.</p>
      <div style="background: #fafafa; border-left: 3px solid #000; padding: 14px; margin: 16px 0;">
        <p style="margin: 0 0 6px;"><strong>Student:</strong> ${studentName} (${studentEmail})</p>
        <p style="margin: 0 0 6px;"><strong>Time:</strong> ${formattedDate}</p>
        <p style="margin: 0 0 6px;"><strong>Focus Areas:</strong> ${focusAreas.join(', ')}</p>
        ${resumeUrl ? `<p style="margin: 6px 0;"><a href="${resumeUrl}" style="color: #0070f3;">View Résumé PDF</a></p>` : ''}
        ${meetingUrl ? `<p style="margin: 10px 0 0;"><a href="${meetingUrl}" style="background: #000; color: #fff; padding: 8px 16px; text-decoration: none; border-radius: 6px; font-size: 13px;">Join Meeting</a></p>` : ''}
      </div>
      <p style="color: #666; font-size: 12px;">Submit feedback after the call to update your mentorship stats.</p>
    </div>
  `;
}

export function renderFeedbackReadyHtml({
  studentName,
  mentorName,
}: {
  studentName: string;
  mentorName: string;
}) {
  return `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111; background: #fff; border-radius: 8px; border: 1px solid #eaeaea;">
      <h2 style="margin-top: 0; font-size: 20px;">Interview Feedback Ready 📊</h2>
      <p>Hi <strong>${studentName}</strong>,</p>
      <p>Mentor <strong>${mentorName}</strong> has submitted your mock interview evaluation rubric (Coding, Communication, System Design).</p>
      <p style="color: #666; font-size: 12px;">Log in to your NeXMentor student dashboard to view ratings and notes.</p>
    </div>
  `;
}

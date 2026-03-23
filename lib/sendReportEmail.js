import nodemailer from "nodemailer";

export async function sendReportEmail({ to, pdfBuffer, subject = "Your Weekly AdPulse AI Report" }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  await transporter.sendMail({
    from: `AdPulse AI <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: `<h2>Your report is ready</h2><p>Need help? hi@adpulseai.com · 918142140696</p>`,
    attachments: [{ filename: "adpulse-weekly-report.pdf", content: pdfBuffer }]
  });
}

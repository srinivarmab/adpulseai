import { generateWeeklyReport } from "@/lib/reportGenerator";
import { sendReportEmail } from "@/lib/sendReportEmail";
export async function POST() {
  const reportData = { totalSpend: 54200, totalRevenue: 168400, roas: 3.11, conversions: 126, insights: ["Search Campaign is performing strongly and can be scaled.", "Review low-performing products and wasted search terms."] };
  const pdfBuffer = await generateWeeklyReport(reportData, { companyName: "AdPulse AI", email: "hi@adpulseai.com", phone: "918142140696" });
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) await sendReportEmail({ to: "hi@adpulseai.com", pdfBuffer });
  return Response.json({ success: true });
}

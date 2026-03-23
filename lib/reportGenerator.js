import PDFDocument from "pdfkit";

export async function generateWeeklyReport(data, branding = { companyName: "AdPulse AI", email: "hi@adpulseai.com", phone: "918142140696" }) {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 40 });
    const chunks = [];
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));

    doc.fontSize(20).text(branding.companyName, { align: "center" });
    doc.moveDown(0.5);
    doc.fontSize(14).text("Weekly Performance Report", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Spend: ₹${data.totalSpend}`);
    doc.text(`Revenue: ₹${data.totalRevenue}`);
    doc.text(`ROAS: ${data.roas}`);
    doc.text(`Conversions: ${data.conversions}`);
    doc.moveDown();
    doc.fontSize(14).text("AI Insights");
    (data.insights || []).forEach((i, idx) => doc.fontSize(12).text(`${idx + 1}. ${i}`));
    doc.moveDown();
    doc.fontSize(12).text(`Contact: ${branding.email} · ${branding.phone}`);
    doc.end();
  });
}

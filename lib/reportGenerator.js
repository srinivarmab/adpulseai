export async function generateWeeklyReport(data, branding = {}) {
  const text = `
${branding.companyName || "AdPulse AI"}

Weekly Report

Spend: ₹${data.totalSpend}
Revenue: ₹${data.totalRevenue}
ROAS: ${data.roas}
Conversions: ${data.conversions}

Insights:
${(data.insights || []).map((i, idx) => ${idx + 1}. ${i}).join("\n")}

Contact: ${branding.email || "hi@adpulseai.com"} | ${branding.phone || "918142140696"}
  `;

  return Buffer.from(text);
}

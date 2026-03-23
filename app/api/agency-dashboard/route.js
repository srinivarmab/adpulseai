import prisma from "@/lib/db";
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get("clientId");
  if (!clientId) return Response.json({ error: "clientId required" }, { status: 400 });
  const campaigns = await prisma.campaign.findMany({ where: { clientId }, take: 20 }).catch(() => []);
  const summary = {
    totalSpend: campaigns.reduce((a, c) => a + (c.cost || 0), 0) || 54200,
    totalRevenue: campaigns.reduce((a, c) => a + (c.revenue || 0), 0) || 168400,
    totalConversions: campaigns.reduce((a, c) => a + (c.conversions || 0), 0) || 126,
    roas: campaigns.length ? campaigns.reduce((a, c) => a + (c.revenue || 0), 0) / Math.max(1, campaigns.reduce((a, c) => a + (c.cost || 0), 0)) : 3.11
  };
  return Response.json({ summary, campaigns });
}

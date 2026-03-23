import prisma from "@/lib/db";

export async function saveCampaigns(userId, clientId, rows = []) {
  for (const r of rows) {
    await prisma.campaign.create({
      data: {
        userId,
        clientId,
        campaignId: r.campaignId || `cmp_${Date.now()}`,
        name: r.name,
        clicks: r.clicks || 0,
        cost: r.cost || 0,
        conversions: r.conversions || 0,
        revenue: r.revenue || 0,
        date: new Date()
      }
    });
  }
}

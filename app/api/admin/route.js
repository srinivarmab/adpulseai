import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId");

    if (!clientId) {
      return Response.json({ error: "clientId required" }, { status: 400 });
    }

    const [campaigns, searchTerms, products, geos, devices] = await Promise.all([
      prisma.campaign.findMany({
        where: { clientId },
        orderBy: { date: "desc" },
        take: 20
      }),
      prisma.searchTerm.findMany({
        where: { clientId },
        orderBy: { date: "desc" },
        take: 20
      }),
      prisma.productPerformance.findMany({
        where: { clientId },
        orderBy: { date: "desc" },
        take: 20
      }),
      prisma.geoPerformance.findMany({
        where: { clientId },
        orderBy: { date: "desc" },
        take: 20
      }),
      prisma.devicePerformance.findMany({
        where: { clientId },
        orderBy: { date: "desc" },
        take: 20
      })
    ]);

    const totalSpend = campaigns.reduce((a, c) => a + (c.cost || 0), 0);
    const totalRevenue = campaigns.reduce((a, c) => a + (c.revenue || 0), 0);
    const totalConversions = campaigns.reduce((a, c) => a + (c.conversions || 0), 0);
    const roas = totalSpend > 0 ? totalRevenue / totalSpend : 0;

    return Response.json({
      summary: {
        totalSpend,
        totalRevenue,
        totalConversions,
        roas
      },
      campaigns,
      searchTerms,
      products,
      geos,
      devices
    });
  } catch (error) {
    console.error("Agency dashboard API error:", error);
    return Response.json(
      { error: "Agency dashboard API failed" },
      { status: 500 }
    );
  }
}

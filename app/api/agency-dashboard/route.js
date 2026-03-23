export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    summary: {
      totalSpend: 0,
      totalRevenue: 0,
      totalConversions: 0,
      roas: 0
    },
    campaigns: [],
    searchTerms: [],
    products: [],
    geos: [],
    devices: []
  });
}

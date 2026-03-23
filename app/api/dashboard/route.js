export async function GET() {
  return Response.json([
    { date: "2026-03-18", name: "Search Campaign", clicks: 230, cost: 1200, conversions: 32, revenue: 2600 },
    { date: "2026-03-19", name: "Shopping Campaign", clicks: 180, cost: 900, conversions: 25, revenue: 2200 }
  ]);
}

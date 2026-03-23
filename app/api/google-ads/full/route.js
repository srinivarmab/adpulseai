export async function GET() {
  return Response.json({
    campaigns: [
      { name: "Search Campaign", clicks: 230, spend: 1200, conversions: 32, roas: 2.1 },
      { name: "Shopping Campaign", clicks: 180, spend: 900, conversions: 25, roas: 2.5 }
    ],
    adGroups: [
      { name: "Shoes", campaign: "Search Campaign", clicks: 90, spend: 400, cpa: 40, roas: 2.2 }
    ],
    products: [
      { title: "Running Shoe", clicks: 45, spend: 180, revenue: 500, roas: 2.7 }
    ],
    searchTerms: [
      { term: "cheap shoes", clicks: 40, spend: 120, conversions: 0 },
      { term: "buy running shoes", clicks: 30, spend: 100, conversions: 5 }
    ]
  });
}

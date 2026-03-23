export async function POST(req) {
  const body = await req.json();
  const campaigns = body.campaigns || [];
  const insights = campaigns.length ? ["Search Campaign is performing strongly — consider scaling.", "Review low-converting search terms to reduce wasted spend."] : ["Connect Google Ads data to receive AI insights."];
  return Response.json({ insights });
}

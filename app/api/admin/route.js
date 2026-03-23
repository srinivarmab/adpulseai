export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    users: 0,
    paidUsers: 0,
    mrr: 0,
    churn: 0,
    userList: []
  });
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST() {
  return Response.json({
    success: true,
    message: "Weekly reports temporarily disabled"
  });
}

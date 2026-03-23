export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  return Response.redirect(
    process.env.NEXT_PUBLIC_BASE_URL || "/dashboard"
  );
}

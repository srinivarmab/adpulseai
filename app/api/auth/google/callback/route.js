import prisma from "@/lib/db";
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  if (!code) return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/dashboard`);
  const res = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: process.env.GOOGLE_CLIENT_ID, client_secret: process.env.GOOGLE_CLIENT_SECRET, code, grant_type: "authorization_code", redirect_uri: process.env.GOOGLE_REDIRECT_URI }) });
  const data = await res.json();
  const user = await prisma.user.findFirst().catch(() => null);
  if (user && data.access_token) await prisma.googleAdsAccount.upsert({ where: { userId: user.id }, update: { accessToken: data.access_token, refreshToken: data.refresh_token || "" }, create: { userId: user.id, accessToken: data.access_token, refreshToken: data.refresh_token || "", customerId: "" } }).catch(() => null);
  return Response.redirect(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/dashboard`);
}

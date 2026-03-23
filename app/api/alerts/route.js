import prisma from "@/lib/db";
export async function POST(req) {
  const body = await req.json();
  const user = await prisma.user.findUnique({ where: { email: body.email || "demo@adpulseai.com" } }).catch(() => null);
  if (!user) return Response.json({ error: "User not found" }, { status: 404 });
  const rule = await prisma.alertRule.create({ data: { userId: user.id, metric: body.metric, condition: body.condition, threshold: Number(body.threshold) } }).catch(() => body);
  return Response.json(rule);
}

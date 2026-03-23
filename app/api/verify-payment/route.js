import prisma from "@/lib/db";
export async function POST(req) {
  const { paymentId, orderId, plan, userEmail } = await req.json();
  const user = await prisma.user.findUnique({ where: { email: userEmail || "demo@adpulseai.com" } }).catch(() => null);
  const now = new Date();
  const endDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  if (user) {
    await prisma.subscription.upsert({ where: { userId: user.id }, update: { plan, status: "active", paymentId, orderId, startDate: now, endDate }, create: { userId: user.id, plan, status: "active", paymentId, orderId, startDate: now, endDate } }).catch(() => null);
    await prisma.user.update({ where: { id: user.id }, data: { plan, subscriptionStatus: "active", planStart: now, planEnd: endDate } }).catch(() => null);
  }
  return Response.json({ success: true, plan, endDate });
}

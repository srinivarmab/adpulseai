import prisma from "@/lib/db";
export async function GET() {
  const user = await prisma.user.findFirst({ include: { clients: { orderBy: { createdAt: "desc" } } } }).catch(() => null);
  return Response.json(user?.clients || [{ id: "demo-client", name: "Demo Client" }]);
}
export async function POST(req) {
  const body = await req.json();
  const user = await prisma.user.findFirst().catch(() => null);
  const client = await prisma.client.create({ data: { userId: user?.id || "demo-user", name: body.name, email: body.email || null, website: body.website || null, customerId: body.customerId || null } }).catch(() => ({ id: String(Date.now()), ...body }));
  return Response.json(client);
}

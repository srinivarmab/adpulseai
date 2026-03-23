import prisma from "@/lib/db";
export async function GET() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } }).catch(() => []);
  return Response.json(leads);
}

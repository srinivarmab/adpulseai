import prisma from "@/lib/db";
export async function POST(req) {
  const body = await req.json();
  const lead = await prisma.lead.create({ data: { name: body.name, email: body.email, website: body.website || null, budget: body.budget || null, goal: body.goal || null, gclid: body.gclid || null } }).catch(() => body);
  return Response.json(lead);
}

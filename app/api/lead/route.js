import prisma from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// ✅ GET (for browser testing)
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const name = searchParams.get("name") || "Demo";
  const email = searchParams.get("email") || "demo@gmail.com";

  const lead = await prisma.lead.create({
    data: { name, email },
  });

  return Response.json(lead);
}

// ✅ POST (for real app)
export async function POST(req) {
  const body = await req.json();

  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      email: body.email,
      website: body.website || null,
    },
  });

  return Response.json(lead);
}

import Razorpay from "razorpay";
export async function POST(req) {
  const body = await req.json();
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) return Response.json({ id: "order_demo_123", amount: (body.amount || 1999) * 100, currency: "INR" });
  const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
  const order = await razorpay.orders.create({ amount: (body.amount || 1999) * 100, currency: "INR" });
  return Response.json(order);
}

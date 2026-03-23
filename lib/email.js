export async function sendAppEmail(payload) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/reports/weekly`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
}

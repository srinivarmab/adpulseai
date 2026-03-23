export async function queryGoogleAds({ customerId, accessToken, query }) {
  const res = await fetch(`https://googleads.googleapis.com/v14/customers/${customerId}/googleAds:search`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "developer-token": process.env.GOOGLE_DEVELOPER_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
  return res.json();
}

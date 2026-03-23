"use client";
import { useEffect, useState } from "react";

export default function AgencyPage() {
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => { fetch("/api/clients").then((r) => r.json()).then((list) => { setClients(list); if (list[0]) setClientId(list[0].id); }); }, []);
  useEffect(() => { if (!clientId) return; fetch(`/api/agency-dashboard?clientId=${clientId}`).then((r) => r.json()).then(setData); }, [clientId]);

  return (
    <div style={{ padding: 24, maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 20 }}>
        <div><h1>Agency Client Dashboard</h1><p style={{ color: "#64748b" }}>Switch between clients and review performance from one place.</p></div>
        <div style={{ minWidth: 260 }}><label style={{ display: "block", marginBottom: 8 }}>Select Client</label><select value={clientId} onChange={(e) => setClientId(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1" }}>{clients.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></div>
      </div>
      <form onSubmit={async (e) => { e.preventDefault(); const form = new FormData(e.target); await fetch("/api/clients", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) }); window.location.reload(); }} style={{ display: "grid", gap: 12, maxWidth: 500, marginTop: 24 }}>
        <input name="name" placeholder="Client Name" required style={inputStyle} />
        <input name="email" placeholder="Client Email" style={inputStyle} />
        <input name="website" placeholder="Website" style={inputStyle} />
        <input name="customerId" placeholder="Google Ads Customer ID" style={inputStyle} />
        <button type="submit" style={{ padding: 12, borderRadius: 10, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700 }}>Add Client</button>
      </form>
      {data && <div style={{ marginTop: 28 }}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}><Metric title="Spend" value={`₹${data.summary.totalSpend.toFixed(2)}`} /><Metric title="Revenue" value={`₹${data.summary.totalRevenue.toFixed(2)}`} /><Metric title="Conversions" value={data.summary.totalConversions} /><Metric title="ROAS" value={data.summary.roas.toFixed(2)} /></div><div style={{ marginTop: 24, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}><h3>White-label reports ready</h3><p style={{ color: "#64748b" }}>Reports can be branded with your agency details, phone 918142140696, and email hi@adpulseai.com.</p></div></div>}
    </div>
  );
}
function Metric({ title, value }) { return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}><div style={{ color: "#64748b" }}>{title}</div><div style={{ fontSize: 28, fontWeight: 800, marginTop: 8 }}>{value}</div></div>; }
const inputStyle = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1" };

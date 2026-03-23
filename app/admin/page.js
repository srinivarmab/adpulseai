"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch("/api/admin").then((r) => r.json()).then(setData); }, []);
  if (!data) return <div style={{ padding: 24 }}>Loading...</div>;
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1>Admin Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}>
        <Card title="Users" value={data.users} />
        <Card title="Paid Users" value={data.paidUsers} />
        <Card title="MRR" value={`₹${data.mrr}`} />
        <Card title="Churn" value={`${data.churn}%`} />
      </div>
      <div style={{ marginTop: 28, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}>
        <h3>Recent Users</h3>
        {data.userList.map((u) => <div key={u.id} style={{ padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>{u.email} — {u.plan} — {u.subscriptionStatus}</div>)}
      </div>
    </div>
  );
}
function Card({ title, value }) { return <div style={{ padding: 20, background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb" }}><h4>{title}</h4><p style={{ fontSize: 24, fontWeight: 700 }}>{value}</p></div>; }

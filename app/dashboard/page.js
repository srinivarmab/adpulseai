"use client";
import { useEffect, useState } from "react";
import FeatureLock from "@/components/FeatureLock";
import { hasFeature, PLANS } from "@/lib/plans";

export default function Dashboard() {
  const [tab, setTab] = useState("campaigns");
  const [plan, setPlan] = useState("trial");
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ campaigns: [], adGroups: [], products: [], searchTerms: [] });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) window.location.href = "/login";
    setPlan(localStorage.getItem("userPlan") || "trial");
  }, []);

  useEffect(() => {
    fetch("/api/google-ads/full").then((r) => r.json()).then(setData).catch(() => {});
  }, []);

  if (loading) return <Centered title="Running AI Audit..." text="Analyzing campaigns, search terms, wasted spend, and growth opportunities." />;
  if (!connected) return <Centered title="Connect Your Google Ads Account" text="Securely connect your account to unlock AI-powered Google Ads insights." buttonText="Connect Google Ads" onClick={() => { setLoading(true); setTimeout(() => { setConnected(true); setLoading(false); }, 1600); }} />;

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: 24 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div><h1 style={{ margin: 0 }}>Dashboard</h1><p style={{ color: "#64748b" }}>👋 Welcome back. Here’s your Google Ads performance snapshot.</p></div>
          <button onClick={() => { localStorage.clear(); window.location.href = "/login"; }} style={ghostBtn}>Logout</button>
        </div>
        <div style={{ background: "#fef3c7", padding: 12, borderRadius: 10, margin: "16px 0" }}>📊 Showing last {PLANS[plan]?.days || 7} days data. Upgrade to unlock deeper insights.</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}>
          <Stat title="Spend" value="₹54,200" /><Stat title="Revenue" value="₹1,68,400" /><Stat title="ROAS" value="3.11x" /><Stat title="Conversions" value="126" />
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>{["campaigns","search","products","geo","device"].map((t) => <button key={t} onClick={() => setTab(t)} style={{ ...tabBtn, background: tab === t ? "#2563eb" : "#e5e7eb", color: tab === t ? "#fff" : "#000" }}>{t.toUpperCase()}</button>)}</div>
        <div style={{ marginTop: 20 }}>
          {tab === "campaigns" && <TableCard title="Campaigns" headers={["Campaign","Clicks","Spend","Conversions","ROAS"]} rows={data.campaigns.map(c => [c.name,c.clicks,`₹${c.spend}`,c.conversions,c.roas?.toFixed?.(2) || c.roas])} />}
          <FeatureLock locked={!hasFeature(plan, "searchTerms")}>{tab === "search" && <TableCard title="Search Terms" headers={["Search Term","Clicks","Spend","Conversions","Action"]} rows={data.searchTerms.map(s => [s.term,s.clicks,`₹${s.spend}`,s.conversions,s.conversions === 0 && s.clicks > 20 ? "Add Negative" : "Review"])} />}</FeatureLock>
          <FeatureLock locked={!hasFeature(plan, "products")}>{tab === "products" && <TableCard title="Products" headers={["Product","Clicks","Spend","Revenue","ROAS"]} rows={data.products.map(p => [p.title,p.clicks,`₹${p.spend}`,`₹${p.revenue}`,p.roas?.toFixed?.(2) || p.roas])} />}</FeatureLock>
          <FeatureLock locked={!hasFeature(plan, "products")}>{tab === "geo" && <SimpleCard title="Geo Performance"><p>India — ROAS 3.5x</p><p>USA — ROAS 2.1x</p></SimpleCard>}</FeatureLock>
          <FeatureLock locked={!hasFeature(plan, "products")}>{tab === "device" && <SimpleCard title="Device Performance"><p>Mobile — ROAS 2.2x</p><p>Desktop — ROAS 3.8x</p></SimpleCard>}</FeatureLock>
        </div>
      </div>
    </div>
  );
}
function Centered({ title, text, buttonText, onClick }) { return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "linear-gradient(180deg,#f8fafc,#eef2ff)" }}><div style={{ width: "100%", maxWidth: 640, background: "#fff", borderRadius: 20, padding: 40, textAlign: "center", border: "1px solid #e2e8f0" }}><h1>{title}</h1><p style={{ color: "#64748b", lineHeight: 1.7 }}>{text}</p>{buttonText ? <button onClick={onClick} style={{ marginTop: 20, padding: "15px 28px", background: "#2563eb", color: "#fff", borderRadius: 12, border: "none", fontWeight: 700 }}>{buttonText}</button> : null}<p style={{ marginTop: 16, color: "#94a3b8", fontSize: 13 }}>Demo flow for now — real OAuth can be connected next.</p></div></div>; }
function Stat({ title, value }) { return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}><div style={{ color: "#64748b", fontSize: 14 }}>{title}</div><div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>{value}</div></div>; }
function TableCard({ title, headers, rows }) { return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, overflowX: "auto" }}><h3 style={{ marginTop: 0 }}>{title}</h3><table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr>{headers.map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={td}>{c}</td>)}</tr>)}</tbody></table></div>; }
function SimpleCard({ title, children }) { return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 }}><h3 style={{ marginTop: 0 }}>{title}</h3>{children}</div>; }
const th = { textAlign: "left", padding: 12, borderBottom: "1px solid #e5e7eb" };
const td = { padding: 12, borderBottom: "1px solid #f1f5f9" };
const ghostBtn = { padding: "12px 18px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", cursor: "pointer" };
const tabBtn = { padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 };

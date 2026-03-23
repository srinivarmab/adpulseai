export default function HeroPreview() {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 24, boxShadow: "0 20px 40px rgba(15,23,42,0.06)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
        <Metric title="Spend" value="₹54.2K" />
        <Metric title="Revenue" value="₹1.68L" />
        <Metric title="ROAS" value="3.11x" />
        <Metric title="Conversions" value="126" />
      </div>
    </div>
  );
}
function Metric({ title, value }) { return <div style={{ background: "#f8fafc", borderRadius: 14, padding: 14 }}><div style={{ color: "#64748b", fontSize: 13 }}>{title}</div><div style={{ marginTop: 8, fontWeight: 800, fontSize: 22 }}>{value}</div></div>; }

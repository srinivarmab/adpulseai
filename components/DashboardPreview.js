export default function DashboardPreview() {
  const rows = [
    ["Search Campaign", "₹22,000", "52", "3.2x"],
    ["Shopping Campaign", "₹18,000", "44", "2.9x"],
    ["Brand Campaign", "₹14,200", "30", "3.5x"]
  ];
  return (
    <div style={{ background: "#020617", color: "#fff", padding: 20, borderRadius: 20, boxShadow: "0 30px 80px rgba(0,0,0,0.35)" }}>
      <h3 style={{ marginTop: 0 }}>Performance Snapshot</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr><th style={th}>Campaign</th><th style={th}>Spend</th><th style={th}>Conv</th><th style={th}>ROAS</th></tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} style={td}>{c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}
const th = { textAlign: "left", color: "#94a3b8", padding: "10px 0", borderBottom: "1px solid #1e293b" };
const td = { padding: "12px 0", borderBottom: "1px solid #0f172a" };

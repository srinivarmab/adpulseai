"use client";

export default function UpgradeModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 }}>
      <div style={{ background: "#fff", borderRadius: 16, padding: 28, width: "90%", maxWidth: 420, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", cursor: "pointer", fontSize: 18 }}>✕</button>
        <h2>Unlock Full Insights</h2>
        <p style={{ color: "#64748b" }}>Upgrade to access deeper data, AI insights, alerts, and premium reports.</p>
        <ul style={{ lineHeight: 1.9 }}>
          <li>30–180 days data analysis</li>
          <li>Search term & product insights</li>
          <li>ROAS alerts</li>
          <li>White-label agency reports</li>
        </ul>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <a href="/#pricing" style={{ padding: "12px 18px", background: "#2563eb", color: "#fff", borderRadius: 10, textDecoration: "none" }}>Upgrade Now</a>
          <a href="https://wa.me/918142140696?text=Hi%20I%20want%20to%20upgrade%20AdPulse%20AI" style={{ padding: "12px 18px", background: "#22c55e", color: "#111", borderRadius: 10, textDecoration: "none" }}>Talk to Expert</a>
        </div>
        <p style={{ color: "#475569", marginTop: 16 }}>Need help? 918142140696 · hi@adpulseai.com</p>
      </div>
    </div>
  );
}

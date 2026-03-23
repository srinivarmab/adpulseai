"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 1000, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ textDecoration: "none", fontWeight: 800, fontSize: 22 }}><span style={{ color: "#0f172a" }}>AdPulse</span> <span style={{ color: "#2563eb" }}>AI</span></a>
        <nav className="desktop-menu" style={{ gap: 20 }}>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Login</a>
        </nav>
        <button className="menu-btn" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>☰</button>
      </div>
      {open && (
        <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 14, borderTop: "1px solid #e5e7eb", background: "#fff" }}>
          <a href="/#features" onClick={() => setOpen(false)}>Features</a>
          <a href="/#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/dashboard" onClick={() => setOpen(false)}>Dashboard</a>
          <a href="/login" onClick={() => setOpen(false)}>Login</a>
        </div>
      )}
    </header>
  );
}

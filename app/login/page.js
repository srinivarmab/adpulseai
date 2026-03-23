"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter email and password");
    setLoading(true);
    localStorage.setItem("user", email);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPlan", localStorage.getItem("userPlan") || "trial");
    setTimeout(() => router.push("/dashboard"), 700);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "linear-gradient(180deg,#f8fafc,#eef2ff)" }}>
      <div style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 20px 60px rgba(15,23,42,0.08)", border: "1px solid #e2e8f0" }}>
        <h1 style={{ marginTop: 0 }}>Login to AdPulse AI</h1>
        <p style={{ color: "#64748b" }}>Access your Google Ads dashboard, insights, and profit optimization recommendations.</p>
        <button type="button" style={{ width: "100%", padding: 14, borderRadius: 12, border: "1px solid #cbd5e1", background: "#fff", fontWeight: 600, marginBottom: 14 }}>Continue with Google</button>
        <form onSubmit={handleLogin} style={{ display: "grid", gap: 14 }}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          <button type="submit" style={{ width: "100%", padding: 15, borderRadius: 14, border: "none", background: "#2563eb", color: "#fff", fontSize: 16, fontWeight: 700 }}>{loading ? "Logging in..." : "Login"}</button>
        </form>
        <p style={{ marginTop: 18, textAlign: "center", color: "#64748b" }}>Don’t have an account? <a href="/signup" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Sign up</a></p>
      </div>
    </div>
  );
}
const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 12, border: "1px solid #cbd5e1", fontSize: 15, outline: "none" };

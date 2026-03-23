"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Fill all required fields");
    localStorage.setItem("user", email);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPlan", "trial");
    localStorage.setItem("trialStart", new Date().toISOString());
    router.push("/dashboard");
  };
  return <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}><div style={{ width: "100%", maxWidth: 460, background: "#fff", borderRadius: 20, padding: 32, border: "1px solid #e2e8f0" }}><h1>Create your account</h1><p style={{ color: "#64748b" }}>Start your 15-day trial.</p><form onSubmit={handleSignup} style={{ display: "grid", gap: 14 }}><input placeholder="Full name" value={name} onChange={(e)=>setName(e.target.value)} style={inputStyle} /><input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={inputStyle} /><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={inputStyle} /><button type="submit" style={{ width: "100%", padding: 15, borderRadius: 14, border: "none", background: "#2563eb", color: "#fff", fontWeight: 700 }}>Start Free Trial</button></form></div></div>;
}
const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 12, border: "1px solid #cbd5e1", fontSize: 15, outline: "none" };

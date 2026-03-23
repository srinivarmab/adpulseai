"use client";
import { useState } from "react";
import UpgradeModal from "@/components/UpgradeModal";

export default function FeatureLock({ locked, children }) {
  const [open, setOpen] = useState(false);
  if (!locked) return children;
  return (
    <>
      <div onClick={() => setOpen(true)} style={{ position: "relative", cursor: "pointer" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ background: "#fff", padding: "8px 12px", borderRadius: 10, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}>🔒 Upgrade to unlock</span>
        </div>
        <div style={{ filter: "blur(4px)", pointerEvents: "none" }}>{children}</div>
      </div>
      <UpgradeModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

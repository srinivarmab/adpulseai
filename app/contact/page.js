export default function ContactPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 20px" }}>
      <h1>Contact Us</h1>
      <div style={{ marginTop: 24, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, boxShadow: "0 8px 24px rgba(15,23,42,0.04)" }}>
        <p><strong>Email:</strong> hi@adpulseai.com</p>
        <p><strong>WhatsApp / Mobile:</strong> +91 8142140696</p>
        <p><strong>Business:</strong> AdPulse AI</p>
        <a href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20help" style={{ display: "inline-block", marginTop: 18, padding: "12px 20px", background: "#25D366", color: "#fff", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>Chat on WhatsApp</a>
      </div>
    </div>
  );
}

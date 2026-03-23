import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AdPulse AI",
  description: "AI-powered Google Ads profit optimization platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
      </head>
      <body>
        <Navbar />
        {children}
        <footer style={{ marginTop: 40, padding: 20, borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
          <div style={{ marginBottom: 10 }}><strong>AdPulse AI</strong></div>
          <div style={{ marginBottom: 10, color: "#475569" }}>📞 918142140696 · ✉️ hi@adpulseai.com</div>
          <div style={{ display: "flex", gap: 15, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/">Home</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a>
          </div>
        </footer>
        <a href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20management" target="_blank" style={{ position: "fixed", right: 20, bottom: 20, background: "#25D366", color: "#fff", textDecoration: "none", padding: "12px 18px", borderRadius: 999, zIndex: 9999 }}>💬 Chat</a>
      </body>
    </html>
  );
}

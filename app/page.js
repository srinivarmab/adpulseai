import HeroPreview from "@/components/HeroPreview";
import DashboardPreview from "@/components/DashboardPreview";

const features = [
  ["AI Google Ads Audit", "Spot account issues, wasted spend, and hidden blockers in seconds."],
  ["Wasted Spend Detection", "Catch weak keywords, search terms, and underperforming campaigns."],
  ["Geo + Device ROAS", "See which locations and devices deserve more or less budget."],
  ["Time ROAS Analysis", "Understand which hours and days generate better profitability."],
  ["Negative Keyword Suggestions", "Automatically surface expensive irrelevant search queries."],
  ["Bid Suggestions", "Receive practical bid and budget optimization recommendations."]
];
const plans = [["Basic","₹999","Last 7 days"],["Professional","₹1,999","Last 30 days"],["Growth","₹4,999","Last 90 days"],["Agency","₹14,999","White-label + 180 days"]];

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">AI-powered Google Ads intelligence</span>
            <h1>We don’t optimize campaigns.<br /><span style={{ color: "#22c55e" }}>We optimize your profits.</span></h1>
            <p>AdPulse AI helps you eliminate wasted ad spend, improve ROAS, and make smarter Google Ads decisions with AI + real performance expertise.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/login">Start Free Audit</a>
              <a className="btn btn-secondary" href="#preview">See Dashboard</a>
            </div>
            <div style={{ marginTop: 25, fontSize: 14, color: "#64748b" }}>15+ years experience · $6M+ revenue managed · SelectBlinds experience</div>
          </div>
          <HeroPreview />
        </div>
      </section>

      <section style={{ padding: 18, background: "#0f172a", color: "#fff", textAlign: "center" }}>
        ✅ 15+ Years in Digital Advertising · ✅ Trusted by Performance-Focused Brands · ✅ AI + Human Strategy
      </section>

      <section style={{ padding: "50px 20px", background: "#f8fafc" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Built by a Performance Marketer with 15+ Years of Experience</h2>
          <p className="lead" style={{ margin: "0 auto" }}>AdPulse AI is built from real Google Ads and ecommerce growth experience — not theory. Experience working on large-scale ecommerce growth systems including brands like SelectBlinds.</p>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h2>Designed to convert advertisers into long-term users</h2>
          <p className="lead">AdPulse AI combines auditing, optimization signals, and decision-ready recommendations into one clean SaaS product built for marketers, brands, and agencies.</p>
          <div className="grid-3">
            {features.map(([title, text], i) => (
              <div className="card" key={title}>
                <div className="icon-box">{i + 1}</div>
                <h3>{title}</h3>
                <p style={{ color: "#64748b", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="preview">
        <div className="container">
          <h2>Professional dashboard preview</h2>
          <p className="lead">Show clear business value fast with health score, recommendations, alerts, and opportunity tracking.</p>
          <DashboardPreview />
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <h2>Simple pricing that supports growth</h2>
          <p className="lead">Based on features and data depth — last 7, 30, 90, and 180 days.</p>
          <div className="grid-4">
            {plans.map(([name, price, text]) => (
              <div className="card" key={name} style={name === "Professional" ? { border: "2px solid #2563eb", transform: "scale(1.03)" } : {}}>
                <h3 style={{ marginTop: 0 }}>{name}</h3>
                <div style={{ color: "#64748b" }}>{text}</div>
                <div style={{ margin: "16px 0", fontSize: 34, fontWeight: 800 }}>{price}<span style={{ fontSize: 14, color: "#64748b" }}>/mo</span></div>
                <a className="btn btn-primary" href="/login">Choose {name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", background: "linear-gradient(135deg,#0f172a,#1e293b)", color: "#fff", borderRadius: 20, margin: "40px auto 0", maxWidth: 1200 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Fully Managed Google Ads (Done For You)</h2>
          <p style={{ color: "#cbd5f5" }}>We don’t optimize campaigns — we optimize your profits.</p>
          <div className="card" style={{ marginTop: 30, background: "#111827", color: "#fff", border: "1px solid #334155" }}>
            <h3 style={{ marginTop: 0 }}>Premium Managed Plan</h3>
            <p style={{ color: "#94a3b8" }}>Best for brands spending $1,000+/month on ads</p>
            <ul style={{ lineHeight: 1.9, listStyle: "none", padding: 0 }}>
              <li>✔ Full Google Ads Account Setup</li>
              <li>✔ Weekly Optimization & Scaling</li>
              <li>✔ Conversion Tracking Setup</li>
              <li>✔ Negative Keyword Optimization</li>
              <li>✔ ROAS Improvement Strategy</li>
              <li>✔ Dedicated Expert Support</li>
            </ul>
            <a href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20management" style={{ display: "inline-block", padding: "12px 24px", background: "#22c55e", color: "#000", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>Book Strategy Call</a>
          </div>
        </div>
      </section>

      <section className="section" id="lead-form">
        <div className="container">
          <div className="card" style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2 style={{ marginTop: 0 }}>Request a Free Ads Growth Review</h2>
            <p className="lead">Tell us about your business and Google Ads budget. We’ll review your setup and get back to you.</p>
            <form action="https://formsubmit.co/hi@adpulseai.com" method="POST" style={{ display: "grid", gap: 16, marginTop: 20 }}>
              <input type="hidden" name="_subject" value="New AdPulse Lead 🚀" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://adpulse-webd.vercel.app/" />
              <input name="name" type="text" placeholder="Your Name" style={inputStyle} required />
              <input name="email" type="email" placeholder="Your Email" style={inputStyle} required />
              <input name="website" type="text" placeholder="Website URL" style={inputStyle} />
              <select name="budget" style={inputStyle} defaultValue="" required>
                <option value="" disabled>Select Monthly Ad Spend</option>
                <option>Less than $500</option><option>$500 - $1,000</option><option>$1,000 - $5,000</option><option>$5,000+</option>
              </select>
              <textarea name="goal" placeholder="Tell us your Google Ads goal (ROAS, leads, scaling, etc.)" rows="5" style={inputStyle} required />
              <button className="btn btn-primary" type="submit">Get Free Growth Review</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle = { width: "100%", padding: "14px 16px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, outline: "none" };

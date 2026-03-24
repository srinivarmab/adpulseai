import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="text-2xl font-bold">
            AdPulse <span className="text-blue-600">AI</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/admin" className="text-sm font-medium text-slate-700 hover:text-slate-950">
              Admin
            </Link>
            <Link href="/agency" className="text-sm font-medium text-slate-700 hover:text-slate-950">
              Agency
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 p-8 text-white shadow-xl sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
            AI for Google Ads
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            We don’t optimize campaigns.
            <br />
            We optimize your profits.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            Detect wasted spend, improve ROAS, and scale faster with a clean AI-powered dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950"
            >
              Open Dashboard
            </Link>

            <Link
              href="/admin"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white"
            >
              Admin View
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="AI Audit"
            desc="Find wasted spend and underperforming campaigns fast."
          />
          <FeatureCard
            title="Recommendations"
            desc="Get simple, actionable growth suggestions."
          />
          <FeatureCard
            title="Agency Ready"
            desc="Manage clients, dashboards, and reporting from one place."
          />
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

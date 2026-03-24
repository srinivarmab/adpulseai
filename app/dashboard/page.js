export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">AdPulse AI Dashboard</h1>
          <p className="mt-2 text-slate-500">Optimize campaigns. Maximize ROAS.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Total Spend" value="$12,430" />
          <Card title="Conversions" value="320" />
          <Card title="ROAS" value="4.8x" accent="text-emerald-600" />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-slate-900">AI Recommendations</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-slate-50 p-4">Increase budget on Campaign A</div>
            <div className="rounded-xl bg-slate-50 p-4">Pause low-performing keywords</div>
            <div className="rounded-xl bg-slate-50 p-4">Improve landing page conversion rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, accent = "text-slate-900" }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="text-sm text-slate-500">{title}</div>
      <div className={mt-4 text-4xl font-bold ${accent}}>{value}</div>
    </div>
  );
}

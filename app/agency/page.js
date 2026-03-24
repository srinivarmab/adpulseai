function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-4 text-4xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Agency Dashboard</h1>
          <p className="mt-2 text-slate-500">
            Manage clients, opportunities, and campaign growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard title="Clients" value="0" />
          <StatCard title="Campaigns" value="0" />
          <StatCard title="Opportunities" value="3" />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-slate-900">AI Recommendations</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-slate-50 p-4">Scale high ROAS campaigns</div>
            <div className="rounded-xl bg-slate-50 p-4">Review wasted search terms</div>
            <div className="rounded-xl bg-slate-50 p-4">Improve landing page speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

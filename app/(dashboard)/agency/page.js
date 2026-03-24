export default function AgencyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900">Agency Dashboard</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Stat title="Clients" value="0" />
        <Stat title="Campaigns" value="0" />
        <Stat title="Opportunities" value="3" />
      </div>

      <div className="rounded-2xl bg-white p-5 shadow">
        <h2 className="mb-4 text-xl font-semibold">Agency Insights</h2>
        <div className="space-y-3">
          <div className="rounded-xl bg-slate-50 p-4">Scale high ROAS campaigns</div>
          <div className="rounded-xl bg-slate-50 p-4">Review wasted search terms</div>
          <div className="rounded-xl bg-slate-50 p-4">Improve landing page speed</div>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <div className="mt-4 text-3xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

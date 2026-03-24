function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-4 text-4xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="mt-2 text-slate-500">Platform overview and revenue metrics.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard title="Users" value="0" />
          <StatCard title="Paid Users" value="0" />
          <StatCard title="MRR" value="₹0" />
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-slate-900">System Summary</h2>
          <p className="mt-3 text-slate-600">
            Your admin dashboard is live. Next step is connecting real Neon and Prisma data.
          </p>
        </div>
      </div>
    </div>
  );
}

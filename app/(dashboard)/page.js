export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AdPulse AI Dashboard</h1>
        <p className="text-gray-500">Optimize campaigns. Maximize ROAS.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-gray-500">Total Spend</p>
          <h2 className="text-2xl font-bold">$12,430</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-gray-500">Conversions</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>

        <div className="rounded-xl bg-white p-4 shadow">
          <p className="text-gray-500">ROAS</p>
          <h2 className="text-2xl font-bold text-green-600">4.8x</h2>
        </div>
      </div>

      <div className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-3 text-xl font-semibold">AI Recommendations</h2>
        <ul className="space-y-2">
          <li className="rounded bg-gray-50 p-3">Increase budget on Campaign A</li>
          <li className="rounded bg-gray-50 p-3">Pause low-performing keywords</li>
          <li className="rounded bg-gray-50 p-3">Improve landing page conversion rate</li>
        </ul>
      </div>
    </div>
  );
}

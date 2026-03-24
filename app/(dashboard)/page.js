export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">AdPulse AI Dashboard</h1>
        <p className="text-gray-500">Optimize campaigns. Maximize ROAS.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">Total Spend</p>
          <h2 className="text-2xl font-bold">$12,430</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">Conversions</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">ROAS</p>
          <h2 className="text-2xl font-bold text-green-600">4.8x</h2>
        </div>

      </div>

      {/* AI Recommendations */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-3">🤖 AI Recommendations</h2>

        <ul className="space-y-2">
          <li className="p-3 bg-gray-50 rounded">
            Increase budget on Campaign A (High ROAS)
          </li>
          <li className="p-3 bg-gray-50 rounded">
            Pause low-performing keywords
          </li>
          <li className="p-3 bg-gray-50 rounded">
            Improve landing page for higher conversions
          </li>
        </ul>
      </div>

      {/* Leads Table */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-3">Leads</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td>John</td>
              <td>john@gmail.com</td>
              <td>New</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

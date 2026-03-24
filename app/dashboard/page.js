import Link from "next/link";

export default function DashboardPage() {
  const accent = "text-blue-600";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          
          <div className="text-2xl font-bold">
            AdPulse <span className="text-blue-600">AI</span>
          </div>

          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/agency">Agency</Link>
          </nav>

        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        
        <div className="rounded-2xl bg-white p-6 shadow">

          <div className="text-sm text-slate-500">Dashboard</div>

          {/* ✅ CORRECT FIX */}
          <div className={`mt-4 text-4xl font-bold ${accent}`}>
            Dashboard Working 🚀
          </div>

        </div>

      </main>
    </div>
  );
}

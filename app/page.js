import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold">
            AdPulse <span className="text-blue-600">AI</span>
          </div>
          <nav className="flex gap-4">
            <Link href="/admin">Admin</Link>
            <Link href="/agency">Agency</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold">AI-powered Google Ads Optimization</h1>
        <p className="mt-4 text-slate-600">
          Detect wasted spend, improve ROAS, and scale faster.
        </p>
      </main>
    </div>
  );
}

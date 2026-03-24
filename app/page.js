import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold">
            AdPulse <span className="text-blue-600">AI</span>
          </h1>

          <div className="flex gap-4">
            <Link href="/admin">Admin</Link>
            <Link href="/agency">Agency</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl font-bold">
          AI-powered Google Ads Optimization
        </h2>
        <p className="mt-4 text-slate-600">
          Detect wasted spend, improve ROAS, and scale faster.
        </p>
      </main>
    </div>
  );
}

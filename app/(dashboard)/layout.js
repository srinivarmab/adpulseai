import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 bg-slate-950 text-white lg:block">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
              AdPulse AI
            </div>
            <div className="mt-2 text-2xl font-bold">Control Center</div>
          </div>

          <nav className="space-y-2 px-4 py-6">
            <SidebarLink href="/dashboard" label="Dashboard" />
            <SidebarLink href="/admin" label="Admin" />
            <SidebarLink href="/agency" label="Agency" />
          </nav>

          <div className="px-6 py-6 text-sm text-slate-400">
            <div>hi@adpulseai.com</div>
            <div>918142140696</div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div className="text-2xl font-bold">
                AdPulse <span className="text-blue-600">AI</span>
              </div>
              <div className="text-sm text-slate-500">Performance Dashboard</div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
    >
      {label}
    </Link>
  );
}

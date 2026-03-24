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
            <div className="mt-2 text-2xl font-bold">
              We optimize profits
            </div>
          </div>

          <nav className="space-y-2 px-4 py-6">
            <SidebarLink href="/agency" label="Agency Dashboard" />
            <SidebarLink href="/admin" label="Admin Dashboard" />
            <SidebarLink href="/pricing" label="Pricing" />
            <SidebarLink href="/dashboard" label="User Dashboard" />
            <SidebarLink href="/contact" label="Contact" />
          </nav>

          <div className="mt-auto px-6 py-6 text-sm text-slate-400">
            <div>hi@adpulseai.com</div>
            <div>918142140696</div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <div>
                <div className="text-sm text-slate-500">AdPulse AI</div>
                <h1 className="text-xl font-semibold text-slate-900">
                  Recommendation-first dashboard
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/918142140696?text=Hi%20I%20want%20Google%20Ads%20help"
                  className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft transition hover:opacity-90"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

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

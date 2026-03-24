"use client";

import { useEffect, useState } from "react";

export default function AgencyPage() {
  const [logs, setLogs] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadLogs() {
    const res = await fetch("/api/recommendations/logs", { cache: "no-store" });
    const data = await res.json();
    setLogs(Array.isArray(data) ? data : []);
  }

  async function loadRecommendations() {
    const payload = {
      campaigns: [
        { id: "c1", name: "Search Campaign", spend: 4000, revenue: 3200, conversions: 2 },
        { id: "c2", name: "Shopping Campaign", spend: 5500, revenue: 1800, conversions: 1 }
      ],
      keywords: [
        { id: "k1", name: "buy shoes", spend: 1200, conversions: 1, roas: 0.8 }
      ],
      searchTerms: [
        { id: "st1", term: "free shoes", spend: 2300, clicks: 44, conversions: 0, roas: 0 },
        { id: "st2", term: "cheap sneakers", spend: 1400, clicks: 29, conversions: 0, roas: 0 }
      ],
      geos: [
        { id: "g1", name: "California", spend: 1500, roas: 0.9 }
      ],
      devices: [
        { id: "d1", name: "Mobile", spend: 2000, roas: 0.7 }
      ],
      products: []
    };

    const res = await fetch("/api/ai-insights", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setRecommendations(data.recommendations || []);
    setSummary(data.summary || null);
  }

  useEffect(() => {
    async function init() {
      setLoading(true);
      await Promise.all([loadRecommendations(), loadLogs()]);
      setLoading(false);
    }
    init();
  }, []);

  async function handleApply(rec) {
    const res = await fetch("/api/automation/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rec)
    });

    const data = await res.json();
    alert(data.message || "Applied");
    loadLogs();
  }

  async function handleIgnore(rec) {
    await fetch("/api/recommendations/ignore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(rec)
    });

    alert("Ignored");
    loadLogs();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white shadow-soft">
        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Agency AI Summary
        </div>
        <h2 className="mt-2 text-3xl font-bold">
          We don’t optimize campaigns. We optimize your profits.
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          Surface wasted spend, spot scaling opportunities, and take one-click actions from a clean, premium dashboard.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Potential Waste" value="₹4,200" subtitle="Detected this week" />
          <StatCard title="High Priority Fixes" value={String(recommendations.filter(r => r.priority === "high").length)} subtitle="Ready to apply" />
          <StatCard title="Applied Fixes" value={String(logs.filter(l => l.status === "applied").length)} subtitle="Logged successfully" />
          <StatCard title="Ignored Fixes" value={String(logs.filter(l => l.status === "ignored").length)} subtitle="Stored for review" />
        </div>
      </section>

      {summary && (
        <section className="grid gap-4 lg:grid-cols-3">
          <SummaryBox title="Executive Summary" text={summary.headline} />
          <SummaryBox title="Top Risk" text={summary.topRisk} />
          <SummaryBox title="Top Opportunity" text={summary.topOpportunity} />
        </section>
      )}

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              AI Recommendations
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Apply safe, high-impact fixes directly from this view.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-sm text-slate-500">Loading recommendations...</div>
        ) : recommendations.length === 0 ? (
          <div className="text-sm text-slate-500">No recommendations available.</div>
        ) : (
          <div className="grid gap-4 xl:grid-cols-2">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="rounded-2xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      {rec.entityLevel} · {rec.type}
                    </div>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">
                      {rec.title}
                    </h4>
                  </div>

                  <span className={priorityClass(rec.priority)}>
                    {rec.priority}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {rec.reason}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <MetricMini label="Impact" value={rec.impact} />
                  <MetricMini
                    label="Confidence"
                    value={`${Math.round((rec.confidence || 0) * 100)}%`}
                  />
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => handleApply(rec)}
                    className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => handleIgnore(rec)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Ignore
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-slate-900">
            Recommendation Activity
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Applied and ignored actions are tracked here.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Action</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Created</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-sm text-slate-500">
                    No activity yet.
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="rounded-2xl bg-slate-50 text-sm text-slate-700">
                    <td className="rounded-l-2xl px-3 py-3">{log.title}</td>
                    <td className="px-3 py-3">{log.type}</td>
                    <td className="px-3 py-3">{log.action}</td>
                    <td className="px-3 py-3">
                      <span className={statusClass(log.status)}>{log.status}</span>
                    </td>
                    <td className="rounded-r-2xl px-3 py-3">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="text-sm text-slate-300">{title}</div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-slate-400">{subtitle}</div>
    </div>
  );
}

function SummaryBox({ title, text }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-soft">
      <div className="text-xs uppercase tracking-wide text-slate-400">{title}</div>
      <div className="mt-3 text-sm leading-6 text-slate-700">{text}</div>
    </div>
  );
}

function MetricMini({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <div className="text-xs uppercase tracking-wide text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function priorityClass(priority) {
  if (priority === "high") {
    return "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase text-red-700";
  }
  if (priority === "medium") {
    return "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase text-amber-700";
  }
  return "rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase text-blue-700";
}

function statusClass(status) {
  if (status === "applied") {
    return "rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase text-emerald-700";
  }
  if (status === "ignored") {
    return "rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase text-slate-700";
  }
  if (status === "failed") {
    return "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase text-red-700";
  }
  return "rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase text-amber-700";
}

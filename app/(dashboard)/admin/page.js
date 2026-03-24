"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [logs, setLogs] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    async function load() {
      const [logsRes, leadsRes] = await Promise.all([
        fetch("/api/recommendations/logs", { cache: "no-store" }),
        fetch("/api/leads", { cache: "no-store" })
      ]);

      const logsData = await logsRes.json();
      const leadsData = await leadsRes.json();

      setLogs(Array.isArray(logsData) ? logsData : []);
      setLeads(Array.isArray(leadsData) ? leadsData : []);
    }

    load();
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white shadow-soft">
        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Admin Control Tower
        </div>
        <h2 className="mt-2 text-3xl font-bold">Platform Overview</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
          Monitor leads, recommendation activity, and system behavior from one premium admin workspace.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Metric title="Total Leads" value={String(leads.length)} />
        <Metric title="Recommendation Logs" value={String(logs.length)} />
        <Metric title="Applied Actions" value={String(logs.filter((l) => l.status === "applied").length)} />
      </section>

      <section className="rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-xl font-semibold text-slate-900">Recent Leads</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Email</th>
                <th className="px-3 py-2">Website</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-sm text-slate-500">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="bg-slate-50 text-sm text-slate-700">
                    <td className="rounded-l-2xl px-3 py-3">{lead.name}</td>
                    <td className="px-3 py-3">{lead.email}</td>
                    <td className="px-3 py-3">{lead.website || "-"}</td>
                    <td className="rounded-r-2xl px-3 py-3">{lead.status}</td>
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

function Metric({ title, value }) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-soft">
      <div className="text-xs uppercase tracking-wide text-slate-400">{title}</div>
      <div className="mt-3 text-3xl font-bold text-slate-900">{value}</div>
    </div>
  );
}

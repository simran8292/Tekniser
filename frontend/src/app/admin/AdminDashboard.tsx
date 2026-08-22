"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogOut, Inbox, CheckCircle2, Clock, Archive, RefreshCw, Shield, Globe } from "lucide-react";
import type { JWTPayload } from "@/lib/auth";

interface Inquiry {
  id: string;
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

const STATUS_CONFIG = {
  PENDING: { label: "Pending", color: "text-amber-400 bg-amber-500/15 border-amber-500/30", icon: Clock },
  IN_REVIEW: { label: "In Review", color: "text-sky-400 bg-sky-500/15 border-sky-500/30", icon: RefreshCw },
  RESPONDED: { label: "Responded", color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30", icon: CheckCircle2 },
  ARCHIVED: { label: "Archived", color: "text-slate-400 bg-slate-500/15 border-slate-500/30", icon: Archive },
};

export default function AdminDashboard({ session }: { session: JWTPayload }) {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.status === 401) { router.push("/admin/login"); return; }
      const data = await res.json();
      setInquiries(data.inquiries || []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }, [router]);

  useEffect(() => { fetchInquiries(); }, [fetchInquiries]);

  const handleStatusChange = async (id: string, status: string) => {
    setUpdating(id);
    try {
      await fetch(`/api/admin/inquiries?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      await fetchInquiries();
      if (selected?.id === id) setSelected((s) => s ? { ...s, status } : null);
    } finally { setUpdating(null); }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const filtered = filter === "ALL" ? inquiries : inquiries.filter((i) => i.status === filter);
  const counts = Object.fromEntries(
    ["ALL", ...Object.keys(STATUS_CONFIG)].map((s) => [s, s === "ALL" ? inquiries.length : inquiries.filter((i) => i.status === s).length])
  );

  return (
    <div className="min-h-screen bg-[#090d16] pt-0">
      {/* Admin Header */}
      <header className="bg-slate-900/80 border-b border-white/10 backdrop-blur-md px-6 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-48 bg-white rounded flex items-center justify-center px-3 py-1">
            <Image src="/logo123.png" alt="TAKNISER" fill className="object-contain p-0.5" />
          </div>
          <div className="h-5 w-px bg-white/20" />
          <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Admin Portal</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-400 hidden sm:block">
            Logged in as <span className="text-slate-200 font-semibold">{session.email}</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold hover:text-red-400 hover:border-red-500/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {(["ALL", "PENDING", "IN_REVIEW", "RESPONDED", "ARCHIVED"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`glass-panel rounded-xl p-4 border text-center transition-all ${filter === s ? "border-sky-500/50 bg-sky-500/10" : "border-white/10 hover:border-white/20"}`}
            >
              <div className={`text-2xl font-extrabold font-mono ${filter === s ? "text-sky-400" : "text-white"}`}>{counts[s]}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">{s === "ALL" ? "Total" : s.replace("_", " ")}</div>
            </button>
          ))}
        </div>

        {/* Inquiries List + Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* List */}
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Inbox className="w-4 h-4 text-sky-400" />
                <span>Contact Inquiries</span>
              </div>
              <button onClick={fetchInquiries} className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
            <div className="divide-y divide-white/5 overflow-y-auto max-h-[600px]">
              {loading ? (
                <div className="py-16 text-center text-slate-400 text-sm">Loading inquiries...</div>
              ) : filtered.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">No inquiries found.</div>
              ) : (
                filtered.map((inq) => {
                  const cfg = STATUS_CONFIG[inq.status as keyof typeof STATUS_CONFIG];
                  return (
                    <button
                      key={inq.id}
                      onClick={() => setSelected(inq)}
                      className={`w-full text-left px-5 py-4 hover:bg-white/5 transition-colors ${selected?.id === inq.id ? "bg-sky-500/10 border-l-2 border-sky-500" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="font-semibold text-sm text-white truncate">{inq.fullName}</div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${cfg?.color}`}>
                          {cfg?.label}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 truncate">{inq.company} — {inq.country}</div>
                      <div className="text-xs text-slate-500 mt-0.5 truncate">{inq.subject}</div>
                      <div className="text-xs text-slate-600 mt-1">{new Date(inq.createdAt).toLocaleDateString()}</div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Detail Panel */}
          {selected ? (
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
              <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
                <span className="text-sm font-bold text-white">Inquiry Detail</span>
                <button onClick={() => setSelected(null)} className="text-xs text-slate-400 hover:text-slate-200 transition-colors">Close</button>
              </div>
              <div className="p-5 space-y-5 overflow-y-auto max-h-[600px]">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { label: "Full Name", val: selected.fullName },
                    { label: "Company", val: selected.company },
                    { label: "Email", val: selected.email },
                    { label: "Phone", val: selected.phone || "—" },
                    { label: "Country", val: selected.country },
                    { label: "Submitted", val: new Date(selected.createdAt).toLocaleString() },
                  ].map((f) => (
                    <div key={f.label}>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-0.5">{f.label}</div>
                      <div className="text-slate-200 font-medium truncate">{f.val}</div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Subject</div>
                  <div className="text-sm text-slate-200 font-semibold">{selected.subject}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Message</div>
                  <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap bg-slate-800/50 rounded-xl p-4 border border-white/10">{selected.message}</div>
                </div>

                {/* Status Update */}
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Update Status</div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(STATUS_CONFIG).map(([s, cfg]) => (
                      <button
                        key={s}
                        disabled={updating === selected.id || selected.status === s}
                        onClick={() => handleStatusChange(selected.id, s)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${selected.status === s ? cfg.color : "border-slate-700 text-slate-400 hover:border-slate-500"}`}
                      >
                        <cfg.icon className="w-3.5 h-3.5" />
                        {cfg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel rounded-2xl border border-white/10 flex flex-col items-center justify-center py-20 text-center space-y-4">
              <Globe className="w-12 h-12 text-slate-700" />
              <div className="text-sm text-slate-400">Select an inquiry to view details</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

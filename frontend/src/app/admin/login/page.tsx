"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Loader2, AlertCircle, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) { setError("Email and password are required."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Invalid credentials."); }
      else { router.push("/admin"); router.refresh(); }
    } catch {
      setError("Network error. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090d16] bg-grid-pattern px-4">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="relative h-14 w-52 mx-auto mb-6">
            <Image src="/brand/logo.svg" alt="TAKNISER ONE GLOBE" fill className="object-contain" />
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm mb-2">
            <Lock className="w-4 h-4 text-sky-400" />
            <span>Secure Administrative Portal</span>
          </div>
          <h1 className="text-2xl font-extrabold text-white">Admin Access</h1>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 border border-white/10 space-y-5">
          {error && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="admin-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              id="admin-email" type="email" value={form.email} autoComplete="email"
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="admin@takniser.de"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/60 transition-all"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              id="admin-password" type="password" value={form.password} autoComplete="current-password"
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/60 transition-all"
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg shadow-sky-600/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.02]"
          >
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Authenticating...</span></> : <><Lock className="w-4 h-4" /><span>Sign In to Admin Portal</span></>}
          </button>

          <p className="text-center text-xs text-slate-500">
            This portal is restricted to authorized TAKNISER corporate administrators.
          </p>
        </form>
      </div>
    </div>
  );
}

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
    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Invalid credentials.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000e1a] px-4 relative overflow-hidden">
      {/* Decorative Brand Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#36b39c]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="relative h-14 w-56 mx-auto mb-5">
            <Image
              src="/brand/logo.svg"
              alt="TAKNISER ONE GLOBE"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-2 font-bold">
            <Lock className="w-3.5 h-3.5 text-[#36b39c]" />
            <span>Secure Administrative Portal</span>
          </div>
          <h1 className="text-3xl font-bold font-serif text-white tracking-wide">
            Admin Access
          </h1>
        </div>

        {/* Login Form Panel */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#001822] p-8 border border-slate-800 space-y-6 shadow-2xl rounded-none"
        >
          {/* Smoothly animated Error Alert Box */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              error ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2.5 p-3.5 bg-red-500/10 border border-red-500/35 text-red-400 text-xs font-semibold rounded-none">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          </div>

          <div>
            <label
              htmlFor="admin-email"
              className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"
            >
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              value={form.email}
              autoComplete="email"
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="admin@takniser.de"
              className="w-full px-4 py-3 rounded-none bg-[#00111a] border border-slate-800 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-[#36b39c] focus:ring-1 focus:ring-[#36b39c]/30 transition-all font-medium"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={form.password}
              autoComplete="current-password"
              onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
              placeholder="••••••••••••"
              className="w-full px-4 py-3 rounded-none bg-[#00111a] border border-slate-800 text-slate-100 text-sm placeholder-slate-600 focus:outline-none focus:border-[#36b39c] focus:ring-1 focus:ring-[#36b39c]/30 transition-all font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none bg-[#36b39c] hover:bg-[#2d9683] text-white shadow-lg shadow-[#36b39c]/10 transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>Sign In to Admin Portal</span>
              </>
            )}
          </button>

          <p className="text-center text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">
            This portal is restricted to authorized TAKNISER corporate administrators.
          </p>
        </form>
      </div>
    </div>
  );
}

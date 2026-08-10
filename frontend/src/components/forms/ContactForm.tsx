"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const COUNTRIES = [
  "Germany", "United States", "United Kingdom", "Australia", "Canada", "India", "Singapore",
  "UAE", "Saudi Arabia", "South Africa", "Japan", "China", "Brazil", "Mexico", "France",
  "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark",
  "Ghana", "Kenya", "Chile", "Panama", "Hong Kong", "Türkiye", "Other"
];

const SUBJECTS = [
  "Industrial Equipment Sourcing", "Global Procurement Partnership", "EPC Project Supply",
  "Engineering Consulting", "Supply Chain Management", "International Logistics",
  "Business Division Inquiry", "Distribution Partnership", "Technology Solutions",
  "General Corporate Inquiry", "Media & Press", "Investor Relations"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "", company: "", email: "", phone: "", country: "", subject: "", message: "", consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName || formData.fullName.length < 2) newErrors.fullName = "Full name must be at least 2 characters.";
    if (!formData.company || formData.company.length < 2) newErrors.company = "Company name is required.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
    if (!formData.country) newErrors.country = "Please select a country.";
    if (!formData.subject) newErrors.subject = "Please select a subject.";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    if (!formData.consent) newErrors.consent = "You must accept our privacy policy to submit.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setServerMessage(data.error || "An error occurred. Please try again.");
        if (data.details) {
          const fieldErrors: Record<string, string> = {};
          Object.entries(data.details).forEach(([k, v]) => { fieldErrors[k] = Array.isArray(v) ? v[0] : String(v); });
          setErrors(fieldErrors);
        }
      } else {
        setStatus("success");
        setServerMessage(data.message || "Your inquiry has been submitted.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-panel rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center space-y-5">
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-emerald-500/20 border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white">Inquiry Submitted</h2>
        <p className="text-slate-300 max-w-md mx-auto">{serverMessage}</p>
        <p className="text-sm text-slate-400">Our corporate representative will review your inquiry and respond shortly. Reference your submitted email for follow-up.</p>
        <button
          onClick={() => { setStatus("idle"); setFormData({ fullName: "", company: "", email: "", phone: "", country: "", subject: "", message: "", consent: false }); }}
          className="px-6 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold hover:bg-slate-700 transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Name + Company Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange}
            placeholder="Dr. John Smith"
            className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all ${errors.fullName ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
          />
          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Company / Organization <span className="text-red-400">*</span>
          </label>
          <input
            id="company" name="company" type="text" value={formData.company} onChange={handleChange}
            placeholder="Global Energy Holdings GmbH"
            className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all ${errors.company ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
          />
          {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      {/* Email + Phone Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Business Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email" name="email" type="email" value={formData.email} onChange={handleChange}
            placeholder="j.smith@company.com"
            className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all ${errors.email ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-slate-500">(Optional)</span>
          </label>
          <input
            id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange}
            placeholder="+49 69 98765432"
            className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-slate-700 text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/60 transition-all"
          />
        </div>
      </div>

      {/* Country + Subject Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Country <span className="text-red-400">*</span>
          </label>
          <select
            id="country" name="country" value={formData.country} onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none ${errors.country ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
          >
            <option value="" className="bg-slate-900">Select your country</option>
            {COUNTRIES.map((c) => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
          {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Subject / Inquiry Type <span className="text-red-400">*</span>
          </label>
          <select
            id="subject" name="subject" value={formData.subject} onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all appearance-none ${errors.subject ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
          >
            <option value="" className="bg-slate-900">Select inquiry type</option>
            {SUBJECTS.map((s) => <option key={s} value={s} className="bg-slate-900">{s}</option>)}
          </select>
          {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
          placeholder="Please describe your requirements, project scope, or inquiry in detail..."
          className={`w-full px-4 py-3 rounded-xl bg-slate-800/70 border text-slate-100 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none ${errors.message ? "border-red-500/60 bg-red-500/5" : "border-slate-700 focus:border-sky-500/60"}`}
        />
        <div className="flex justify-between mt-1">
          {errors.message ? <p className="text-red-400 text-xs">{errors.message}</p> : <span />}
          <span className="text-xs text-slate-500">{formData.message.length}/3000</span>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className={`flex items-start gap-3 cursor-pointer group ${errors.consent ? "text-red-400" : "text-slate-300"}`}>
          <input
            type="checkbox" name="consent" checked={formData.consent} onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-sky-500 focus:ring-sky-500/50 cursor-pointer"
          />
          <span className="text-xs leading-relaxed">
            I consent to TAKNISER ONE GLOBE storing and processing my personal data submitted above for the purpose of responding to this business inquiry, in accordance with our{" "}
            <a href="/privacy" className="text-sky-400 hover:underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && <p className="text-red-400 text-xs mt-1">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-blue-500 text-white shadow-xl shadow-sky-600/30 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Submit Corporate Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}

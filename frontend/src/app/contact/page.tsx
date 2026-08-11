import type { Metadata } from "next";
import { Globe, Shield, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — TAKNISER ONE GLOBE Corporate Inquiries",
  description:
    "Submit your industrial, procurement, engineering, or partnership inquiry to TAKNISER ONE GLOBE. Our global corporate team will respond to your inquiry.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#070b14] text-slate-100">
      {/* Hero */}
      <section className="relative py-20 bg-grid-pattern overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sky-400 text-xs font-bold tracking-wider uppercase mb-6">
            <Mail className="w-3.5 h-3.5" />
            <span>Corporate Contact Portal</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Contact <span className="gradient-text-blue">TAKNISER</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar: Quick Info */}
            <div className="space-y-6">
              <div className="glass-panel-dark rounded-2xl p-6 border border-white/10 space-y-5">
                <h2 className="text-base font-bold text-white">Corporate Contact Information</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">Global Headquarters</div>
                      <div className="text-slate-400">TAKNISER GmbH</div>
                      <div className="text-slate-400">Hesse (Hessen), Germany</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">Global Network</div>
                      <div className="text-slate-400">29 Regional Headquarters</div>
                      <div className="text-slate-400">190+ Countries & Territories</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-200">Response Commitment</div>
                      <div className="text-slate-400">Corporate inquiries are reviewed by our regional specialists within 1–3 business days.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel-dark rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5 space-y-3">
                <h3 className="text-sm font-bold text-amber-400">Inquiry Areas</h3>
                <ul className="space-y-2">
                  {[
                    "Industrial Equipment Sourcing", "Global Procurement", "EPC Project Supply",
                    "Engineering Consulting", "Distribution Partnerships", "Technology Solutions",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel-dark rounded-2xl p-6 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white">Global Logistics Hub</h3>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Our JAFZA Logistics Hub in UAE serves as the primary global distribution & free zone logistics center for Middle East, Africa, and Asia operations.
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel-dark rounded-3xl p-7 sm:p-9 border border-white/10">
                <div className="mb-7">
                  <h2 className="text-xl font-bold text-white">Submit Your Corporate Inquiry</h2>
                  <p className="text-sm text-slate-400 mt-1.5">
                    All fields marked with <span className="text-red-400">*</span> are required. Your information is processed in accordance with our Privacy Policy.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

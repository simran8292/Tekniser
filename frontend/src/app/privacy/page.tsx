import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  FileText,
  Building2,
  Database,
  ShieldCheck,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — TAKNISER ONE GLOBE",
  description:
    "Official Privacy Policy of TAKNISER GmbH (Hesse, Germany) governing personal data handling under EU GDPR and German data protection regulations.",
};

const SECTIONS = [
  {
    num: "1",
    title: "Data Controller",
    icon: Building2,
    content:
      "TAKNISER GmbH, headquartered in Hesse (Hessen), Germany, is the data controller responsible for the personal data collected through this platform.",
  },
  {
    num: "2",
    title: "Data We Collect",
    icon: Database,
    content:
      "When you submit a contact inquiry, we collect: full name, company name, business email address, phone number (optional), country, subject, and message content. We also collect your IP address for security and spam prevention purposes.",
  },
  {
    num: "3",
    title: "Purpose of Processing",
    icon: FileText,
    content:
      "Your data is collected solely for the purpose of responding to your corporate inquiry, communicating relevant TAKNISER products and services, and maintaining our business relationship.",
  },
  {
    num: "4",
    title: "Data Retention",
    icon: Clock,
    content:
      "Corporate inquiry data is retained for a period necessary to fulfil the inquiry and maintain appropriate business records, in accordance with applicable German and international data protection regulations.",
  },
  {
    num: "5",
    title: "Your Rights",
    icon: ShieldCheck,
    content:
      "Under GDPR and applicable data protection law, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, submit a request through our corporate contact portal.",
  },
  {
    num: "6",
    title: "Contact",
    icon: Mail,
    content:
      "For any data protection enquiries, please contact TAKNISER GmbH through our corporate contact portal at ",
    linkText: "takniser.com/contact",
    linkHref: "/contact",
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          HERO SECTION (Siemens Executive Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b12_1px,transparent_1px),linear-gradient(to_bottom,#002d3b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Lock className="w-3.5 h-3.5 text-[#009999]" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Privacy <span className="text-[#009999]">Policy</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            TAKNISER GmbH is committed to protecting your personal data in strict compliance with the European General Data Protection Regulation (GDPR) and German federal data protection statutes.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Controller: TAKNISER GmbH (Hesse, Germany)
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Regulation: EU GDPR / BDSG
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          POLICY SECTIONS (Clean White Cards with Perfect Icon Design)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider">
                DATA PROTECTION STATUTE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase tracking-tight mt-0.5">
                Official Provisions
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              6 ARTICLES
            </span>
          </div>

          <div className="space-y-5">
            {SECTIONS.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div
                  key={sec.num}
                  className="bg-white border border-slate-200 p-6 sm:p-8 hover:border-[#009999] hover:shadow-md transition-all rounded-none flex items-start gap-4 sm:gap-6"
                >
                  {/* Perfect Icon Container */}
                  <div className="p-3 sm:p-3.5 bg-[#002d3b] text-[#009999] shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-[#002d3b] tracking-tight">
                      {sec.num}. {sec.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {sec.content}
                      {sec.linkText && sec.linkHref && (
                        <Link
                          href={sec.linkHref}
                          className="text-[#009999] font-bold hover:text-[#002d3b] underline transition-colors"
                        >
                          {sec.linkText}
                        </Link>
                      )}
                      {sec.linkText && "."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Assistance Card */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight">
                Questions Regarding Data Privacy?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Submit an inquiry directly to our corporate data protection team.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 shrink-0"
            >
              <span>Contact Data Protection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Verbatim Document Stamp */}
          <div className="text-center text-xs text-slate-500 font-mono pt-6">
            TAKNISER ONE GLOBE — Complete Website Content Reference
          </div>

        </div>
      </section>

    </div>
  );
}

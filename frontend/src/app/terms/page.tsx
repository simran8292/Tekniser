import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  FileCheck,
  Shield,
  Award,
  Scale,
  Landmark,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use — TAKNISER ONE GLOBE",
  description:
    "Official Terms of Use governing access to and engagement with the TAKNISER ONE GLOBE platform under the laws of the Federal Republic of Germany.",
};

const TERMS_SECTIONS = [
  {
    num: "1",
    title: "Acceptance of Terms",
    icon: FileCheck,
    content:
      "By accessing and using the TAKNISER ONE GLOBE platform, you agree to be bound by these Terms of Use and all applicable laws and regulations governing TAKNISER GmbH, a company incorporated in Germany.",
  },
  {
    num: "2",
    title: "Use of Platform",
    icon: Shield,
    content:
      "This platform is designed for corporate business inquiries, information dissemination, and engagement with TAKNISER ONE GLOBE's global industrial operations. Unauthorized commercial use, data scraping, or any attempt to compromise platform security is strictly prohibited.",
  },
  {
    num: "3",
    title: "Intellectual Property",
    icon: Award,
    content:
      "All content, logos, brand assets, text, and design on this platform are the exclusive intellectual property of TAKNISER GmbH. Unauthorized reproduction, distribution, or modification is prohibited.",
  },
  {
    num: "4",
    title: "Limitation of Liability",
    icon: Scale,
    content:
      "TAKNISER GmbH provides this platform 'as is' for informational and business enquiry purposes. Information herein does not constitute a legally binding commercial offer unless confirmed by a formal contract executed by authorized TAKNISER representatives.",
  },
  {
    num: "5",
    title: "Governing Law",
    icon: Landmark,
    content:
      "These Terms shall be governed by the laws of the Federal Republic of Germany. Any disputes arising shall be subject to the jurisdiction of the competent courts of Hesse, Germany.",
  },
];

export default function TermsPage() {
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
            Terms <span className="text-[#009999]">of Use</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Legal terms, platform guidelines, and governing conditions for engaging with the TAKNISER ONE GLOBE digital platform.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Entity: TAKNISER GmbH
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Jurisdiction: Hesse, Germany
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TERMS SECTIONS (Clean White Structured Cards with Icons)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider">
                LEGAL FRAMEWORK
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase tracking-tight mt-0.5">
                Terms of Use
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              5 ARTICLES
            </span>
          </div>

          <div className="space-y-5">
            {TERMS_SECTIONS.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div
                  key={sec.num}
                  className="bg-white border border-slate-200 p-6 sm:p-8 hover:border-[#009999] hover:shadow-md transition-all rounded-none flex items-start gap-4 sm:gap-6"
                >
                  {/* Prominent Icon Container */}
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
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Inquiry Card */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight">
                Corporate Legal Enquiries
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                For commercial agreements, procurement terms, or legal questions, reach our corporate team.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 shrink-0"
            >
              <span>Contact Legal &amp; Corporate</span>
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

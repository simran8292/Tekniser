import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  Leaf,
  Handshake,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vision 2046 Roadmap — TAKNISER ONE GLOBE",
  description:
    "TAKNISER's strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate.",
};

const MISSION_PILLARS = [
  {
    text: "Deliver world-class products and technologies.",
  },
  {
    text: "Build sustainable global supply chains.",
  },
  {
    text: "Create long-term value for customers and partners.",
  },
  {
    text: "Promote innovation across every business division.",
  },
  {
    text: "Support governments and industries through reliable infrastructure solutions.",
  },
  {
    text: "Develop future-ready technologies for the next generation.",
  },
  {
    text: "Expand TAKNISER's presence across every major international market.",
  },
];

const STRATEGIC_PILLARS = [
  {
    title: "Innovation",
    desc: "Continuous investment in advanced technologies, digital capabilities, and next-generation engineering talent.",
    icon: Cpu,
  },
  {
    title: "Sustainability",
    desc: "Building responsible supply chains, environmentally conscious operations, and long-term ecological commitments.",
    icon: Leaf,
  },
  {
    title: "Global Expansion",
    desc: "Strengthening our presence across every major international market through strategic RHQ expansion and partnerships.",
    icon: Globe,
  },
  {
    title: "Technology Leadership",
    desc: "Investing in Industry 4.0, AI robotics, space economy, digital transformation, and smart infrastructure.",
    icon: Zap,
  },
  {
    title: "Trusted Partnerships",
    desc: "Creating long-term value for customers, partners, employees, industries, and society through trusted relationships.",
    icon: Handshake,
  },
  {
    title: "Integrated Network",
    desc: "One integrated global industrial ecosystem connecting engineering, manufacturing, sourcing, logistics, and trade.",
    icon: Sparkles,
  },
];

const ROADMAP_PILLARS = [
  {
    title: "ONE GLOBAL NETWORK",
    desc: "A connected network of regional headquarters, operating companies, strategic partners, manufacturers, distributors, and customers — working together as one global ecosystem.",
  },
  {
    title: "ONE INDUSTRIAL ECOSYSTEM",
    desc: "Integrating engineering, manufacturing, sourcing, procurement, logistics, technology, and distribution to create more efficient and resilient global supply chains.",
  },
  {
    title: "ONE DIGITAL CONNECTED WORLD",
    desc: "Using digital technologies, intelligent systems, data, and automation to connect markets, operations, customers, and partners in real time.",
  },
  {
    title: "ONE STANDARD OF EXCELLENCE",
    desc: "Carrying forward the principles that shaped TAKNISER from its earliest roots — Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen — while continuously raising the standard for a changing world.",
  },
  {
    title: "ONE RESPONSIBLE FUTURE",
    desc: "Building growth that creates lasting value for people, communities, industries, and the planet — with sustainability and responsible business embedded into the TAKNISER ecosystem.",
  },
  {
    title: "ONE GLOBE, SHARED OPPORTUNITY",
    desc: "Breaking down traditional boundaries between markets and industries to create new opportunities for collaboration, innovation, investment, and sustainable economic development.",
  },
];

export default function Vision2046Page() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION (Siemens Executive Dark with Faded Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainable_earth_slide.jpg"
            alt="Vision 2046 Global Outlook"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">

          {/* Label from verbatim document */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>Strategic Vision</span>
          </div>

          {/* Heading from verbatim document */}
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight [font-feature-settings:'lnum'_1] [font-variant-numeric:lining-nums]">
            VISION <span className="text-[#009999] [font-feature-settings:'lnum'_1] [font-variant-numeric:lining-nums] inline-block">2046</span>
          </h1>

          {/* Description from verbatim document */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            TAKNISER’s strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              100+ Years Heritage
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              Target Horizon 2046
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              One Connected Ecosystem
            </span>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE OFFICIAL VISION STATEMENT (Pure White & Clean Card)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              CORPORATE MANDATE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
              The Official Vision Statement
            </h2>
          </div>

          {/* Verbatim Vision Statement Box (No rectangular grid) */}
          <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-14 shadow-sm">
            <blockquote className="text-lg sm:text-2xl font-semibold text-[#002d3b] italic leading-relaxed text-center border-l-4 border-[#009999] pl-4 sm:pl-8">
              &ldquo;To build TAKNISER into one of the world&apos;s most respected industrial, technology, manufacturing, sourcing, distribution, and global trading conglomerates by delivering innovative, sustainable, and reliable solutions across every major continent while connecting businesses, industries, and communities through one integrated global network.&rdquo;
            </blockquote>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OUR MISSION PILLARS (Clean Light Canvas - No Serial Numbers)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              STRATEGIC EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              Our Mission Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Foundational commitments guiding every operational strategy and corporate decision worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MISSION_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 flex items-start gap-4 hover:border-[#009999] hover:shadow-md transition-all rounded-none"
              >
                <div className="w-2.5 h-2.5 mt-1.5 bg-[#009999] shrink-0" />
                <p className="text-sm font-bold text-[#002d3b] leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STRATEGIC PILLARS (Clean Pure White Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              Strategic Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Six transformative disciplines propelling TAKNISER toward Vision 2046 across global industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#f8fafc] border border-slate-200 p-7 flex flex-col justify-between hover:border-[#009999] hover:bg-white hover:shadow-lg transition-all rounded-none"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#002d3b] text-[#009999] w-fit">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#002d3b] uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>PILLAR MANDATE</span>
                    <span className="text-[#009999]">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OUR VISION FOR 2046 (Detailed Commitments Roadmap - No Serial Numbers)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              LONG-TERM BLUEPRINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              Our Vision for <span className="text-[#009999]">2046</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Core commitments shaping the integrated global industrial platform of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROADMAP_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 sm:p-7 space-y-3 hover:border-[#009999] hover:shadow-md transition-all rounded-none"
              >
                <div className="w-8 h-1 bg-[#009999] mb-4" />
                <h3 className="text-base font-extrabold text-[#002d3b] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2046 AND BEYOND & CALL TO ACTION (Siemens Dark Petrol Climax)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70">
              <span>CENTURY OUTLOOK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              2046 <span className="text-[#009999]">and Beyond</span>
            </h2>
          </div>

          {/* Narrative Panel */}
          <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 text-left bg-[#002d3b]/80 p-8 sm:p-10 border border-slate-700/80 shadow-2xl">
            <p className="font-bold text-white">
              TAKNISER ONE GLOBE is not simply a destination. It is an evolving global platform.
            </p>
            <p>
              By 2046, we aim to create an organization where geographical boundaries no longer define what is possible — where expertise from one part of the world can create opportunity in another, where technology connects capability with demand, and where global partnerships accelerate progress.
            </p>
            <p>
              From our German engineering heritage to our vision of a connected global future, the TAKNISER journey continues with the same fundamental belief:
            </p>

            <div className="p-4 bg-[#001822] border-l-4 border-[#009999] text-white font-bold text-sm sm:text-base uppercase tracking-wider">
              Build with precision. Operate with integrity. Connect without boundaries. Create lasting value.
            </div>
          </div>

          {/* Brand Seal */}
          <div className="space-y-2 pt-2">
            <div className="text-lg sm:text-xl font-mono font-bold text-[#009999] uppercase tracking-widest">
              TAKNISER ONE GLOBE — One Heritage. One Global Ecosystem. One Future.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>Partner for Vision 2046</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/divisions"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              Explore Business Divisions
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

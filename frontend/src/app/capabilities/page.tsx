import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  RefreshCw,
  Cpu,
  Zap,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "INNOVATION — TAKNISER ONE GLOBE",
  description:
    "Exploring what's next. Building what matters. Discover the TAKNISER continuous innovation flywheel and technological capabilities.",
};

const FLYWHEEL_STEPS = [
  {
    title: "EXPLORE",
    desc: "We look beyond today's boundaries.",
    icon: Compass,
  },
  {
    title: "DISCOVER",
    desc: "We identify technologies, opportunities and ideas with transformative potential.",
    icon: Sparkles,
  },
  {
    title: "BUILD",
    desc: "We turn promising ideas into products, businesses, prototypes and solutions.",
    icon: Cpu,
  },
  {
    title: "SCALE",
    desc: "We connect successful innovations with capital, capabilities, markets and global networks.",
    icon: Zap,
  },
  {
    title: "REGENERATE",
    desc: "We create solutions that strengthen people, communities, economies and the natural world.",
    icon: RefreshCw,
  },
];

const PRINCIPLES = [
  {
    title: "CURIOUS",
    desc: "We question what is known and explore what is possible.",
  },
  {
    title: "BOLD",
    desc: "We pursue opportunities others may overlook.",
  },
  {
    title: "CONNECTED",
    desc: "We bring together people, knowledge, technology and markets.",
  },
  {
    title: "RESPONSIBLE",
    desc: "We innovate with consideration for people, society and the planet.",
  },
  {
    title: "EXPERIMENTAL",
    desc: "We test ideas in the real world and learn quickly.",
  },
  {
    title: "LONG-TERM",
    desc: "We build for decades—not merely for the next quarter.",
  },
  {
    title: "IMPACT-DRIVEN",
    desc: "We measure innovation by what it changes.",
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">

      {/* Hero Section - Siemens Precision Dark with Themed Faded Background */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/platform_robotics.jpg"
            alt="Advanced Innovation and Robotics"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase rounded-none bg-[#002d3b]/60 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999] animate-pulse" />
            <span>INNOVATION</span>
          </div>

          {/* Main Hero Title */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight text-white">
              EXPLORING WHAT&apos;S NEXT. <br />
              <span className="text-[#009999]">BUILDING WHAT MATTERS.</span>
            </h1>
            <p className="text-base sm:text-xl text-[#00cccc] font-semibold italic max-w-2xl mx-auto">
              Innovating across the frontiers of humanity, technology and nature.
            </p>
          </div>

          {/* Precision Narrative Card */}
          <div className="max-w-4xl mx-auto space-y-5 text-slate-200 text-sm sm:text-base leading-relaxed text-left bg-[#002d3b]/85 p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
            <p className="text-base sm:text-lg font-bold text-white border-l-2 border-[#009999] pl-3">
              At TAKNISER, innovation is not a department.
            </p>
            <p className="text-slate-300">
              It is a way of thinking, a way of building, and a commitment to shaping the future.
            </p>
            <p className="text-slate-300">
              We explore emerging technologies, scientific breakthroughs, natural resources, changing human needs and new possibilities across the world. We connect ideas with expertise, technology with opportunity, and discovery with execution.
            </p>

            {/* Focal Highlight Ribbon */}
            <div className="p-4 bg-[#001822] border-l-4 border-[#009999] text-[#009999] font-black text-sm sm:text-base uppercase tracking-wider">
              From Space to Earth. From Resources to Life. From Intelligence to Impact.
            </div>

            <p className="text-slate-300">
              TAKNISER is building an interconnected innovation ecosystem designed to discover what comes next—and turn the most promising possibilities into scalable solutions for a better future.
            </p>
          </div>

          {/* Continuous Flow Stepper Indicator */}
          <div className="pt-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-3 font-semibold">
              The Innovation Pipeline
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold">
              {["EXPLORE", "DISCOVER", "BUILD", "SCALE", "REGENERATE"].map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-3.5 py-2 bg-[#002d3b] border border-[#009999]/60 text-white tracking-widest hover:border-[#009999] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#009999] rounded-full inline-block" />
                    <span>{step}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="text-[#009999] font-bold text-base">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INNOVATION WITHOUT BORDERS & PRINCIPLES (WITH PICTORIAL SHOWCASE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Pictorial Visual Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/platform_robotics.jpg"
                alt="AI Robotics and Autonomous Engineering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  Breakthrough Tech
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  Intelligent Robotics
                </div>
              </div>
            </div>

            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/about_conglomerate_hq.jpg"
                alt="Global Innovation and Research Operations Hub"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  Global Operations
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  Connected Innovation Hub
                </div>
              </div>
            </div>

            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/platform_space.jpg"
                alt="Next-Generation Space Observation and Earth Intelligence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  Next Horizon
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  Space &amp; Earth Observation
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* Column 1: Innovation Without Borders */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 space-y-6">
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
                  GLOBAL PERSPECTIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                  INNOVATION WITHOUT BORDERS
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  The next breakthrough may come from a laboratory in Europe, a university in Asia, a technology company in North America, a resource discovery in Africa, a farm in India—or from an idea that does not yet exist.
                </p>
                <p className="font-bold text-[#002d3b]">
                  TAKNISER operates with a global perspective and an open horizon.
                </p>
                <p>
                  We believe innovation flourishes when disciplines, cultures, technologies and markets come together.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 text-xs sm:text-sm font-bold text-[#009999] uppercase tracking-wide">
                One world. Many possibilities. Infinite opportunities to innovate.
              </div>
            </div>

            {/* Column 2: Our Innovation Principles */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 space-y-6">
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
                  FOUNDATIONAL PILLARS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                  OUR INNOVATION PRINCIPLES
                </h3>
              </div>

              <div className="space-y-2.5">
                {PRINCIPLES.map((pr) => (
                  <div
                    key={pr.title}
                    className="p-3 bg-white border border-slate-200 hover:border-[#009999] transition-colors flex flex-col sm:flex-row sm:items-baseline gap-2"
                  >
                    <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider shrink-0 min-w-[120px]">
                      {pr.title}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {pr.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The TAKNISER Innovation Flywheel */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white border-t border-slate-800 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

          {/* Flywheel Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase bg-[#002d3b]/50">
              <RefreshCw className="w-3.5 h-3.5 text-[#009999]" />
              <span>CONTINUOUS INNOVATION CYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              THE TAKNISER <span className="text-[#009999]">INNOVATION FLYWHEEL</span>
            </h2>
            <div className="text-base sm:text-xl text-[#00cccc] font-semibold italic">
              One Discovery Can Transform an Entire Ecosystem.
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our innovation model is designed to create a continuous cycle of discovery, execution and impact.
            </p>
          </div>

          {/* Sequential Flywheel Steps with Connectors */}
          <div className="max-w-2xl mx-auto space-y-3">
            {FLYWHEEL_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center">

                  {/* Step Card */}
                  <div className="w-full bg-[#002d3b] border border-slate-700/80 p-5 sm:p-6 text-left flex items-start gap-4 hover:border-[#009999] transition-all group">
                    <div className="p-3 bg-[#001822] border border-[#009999]/40 text-[#009999] shrink-0 group-hover:border-[#009999] transition-colors">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                        CYCLE STAGE
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Downward Connector */}
                  {idx < FLYWHEEL_STEPS.length - 1 && (
                    <div className="my-1.5 flex flex-col items-center justify-center">
                      <div className="w-0.5 h-3 bg-[#009999]/40" />
                      <ArrowDown className="w-4 h-4 text-[#009999]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closed Loop Regeneration Indicator */}
          <div className="flex justify-center items-center gap-2 text-xs font-mono text-[#009999] uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>Closed-Loop Innovation Cycle: Regenerate Feeds Back into Explore</span>
          </div>

          {/* Grand Finale Result Banner */}
          <div className="text-center bg-[#002d3b] border-2 border-[#009999] p-6 sm:p-10 space-y-3 max-w-2xl mx-auto shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-[#009999] font-mono font-bold">
              The result:
            </div>
            <div className="text-xl sm:text-3xl font-black text-white uppercase tracking-wide">
              Innovation that compounds. <br className="hidden sm:inline" />
              <span className="text-[#009999]">Impact that scales.</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 text-sm font-bold tracking-wider uppercase"
            >
              <span>Connect with Our Innovation Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/global-network"
              className="px-6 py-3 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              Explore Global Network
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

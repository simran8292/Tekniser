import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  Rocket,
  Layers,
  Sprout,
  HeartPulse,
  Bot,
  Globe,
  RefreshCw,
  Cpu,
  Zap,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Innovation & Capabilities — TAKNISER ONE GLOBE",
  description:
    "Exploring what's next. Building what matters. Discover the TAKNISER Innovation Ecosystem across seven interconnected platforms and the continuous innovation flywheel.",
};

const SYNERGIES = [
  {
    icon: Rocket,
    text: "Space intelligence can transform agriculture.",
  },
  {
    icon: Layers,
    text: "Critical minerals enable the technologies of tomorrow.",
  },
  {
    icon: Bot,
    text: "Robotics can transform industry.",
  },
  {
    icon: Cpu,
    text: "AI can accelerate scientific discovery.",
  },
  {
    icon: HeartPulse,
    text: "Life sciences can extend human potential.",
  },
  {
    icon: Globe,
    text: "Global trade can take breakthrough solutions from one market to the world.",
  },
];

const PLATFORMS = [
  {
    code: "01",
    title: "SPACE ECONOMY",
    tagline: "Explore Beyond Boundaries",
    icon: Rocket,
    image: "/platform_space.jpg",
    lead: "We look beyond Earth to understand, connect and enable the world beneath us.",
    description:
      "Satellite intelligence, space technologies, Earth observation, connectivity and emerging space applications can unlock new ways to understand our planet, manage resources and create entirely new opportunities.",
    footer: "From Earth observation to the next frontier of space-enabled industries.",
  },
  {
    code: "02",
    title: "MINING & MINERALS",
    tagline: "Power the Future Responsibly",
    icon: Layers,
    image: "/platform_mining.jpg",
    lead: "The technologies transforming tomorrow require the resources of today.",
    description:
      "TAKNISER explores critical minerals, advanced extraction, processing, recycling, resource efficiency and circular models that can help build more resilient global supply chains.",
    footer: "Turning resources into responsible pathways for progress.",
  },
  {
    code: "03",
    title: "AGTECH",
    tagline: "Feed the Future",
    icon: Sprout,
    image: "/platform_agtech.jpg",
    lead: "Food security is one of humanity's defining challenges.",
    description:
      "We explore precision agriculture, smart irrigation, regenerative farming, agricultural technology, controlled environments, data-driven cultivation and next-generation food systems.",
    footer: "Growing more. Wasting less. Restoring more.",
  },
  {
    code: "04",
    title: "LIFECARE",
    tagline: "Improve Human Life",
    icon: HeartPulse,
    image: "/platform_lifecare.jpg",
    lead: "The future of healthcare is moving from treatment toward prevention, personalization and human longevity.",
    description:
      "TAKNISER explores healthcare technologies, biotechnology, wellness, diagnostics, preventive solutions and emerging life-science opportunities that can improve the quality and potential of human life.",
    footer: "Technology with one purpose: a better life.",
  },
  {
    code: "05",
    title: "LIFESTYLE",
    tagline: "Enable Better Living",
    icon: Sparkles,
    image: "/platform_lifestyle.jpg",
    lead: "Innovation should ultimately improve how people live.",
    description:
      "We explore sustainable products, intelligent environments, new experiences, responsible consumption and technologies that make everyday life more connected, efficient, comfortable and meaningful.",
    footer: "Better products. Better experiences. Better living.",
  },
  {
    code: "06",
    title: "ROBOTICS",
    tagline: "Augment Human Potential",
    icon: Bot,
    image: "/platform_robotics.jpg",
    lead: "The next industrial revolution will not simply replace human capability — it will amplify it.",
    description:
      "TAKNISER explores intelligent machines, industrial automation, robotics, AI-enabled systems and technologies designed to perform complex, repetitive or hazardous tasks.",
    footer: "Machines that extend what humanity can achieve.",
  },
  {
    code: "07",
    title: "GLOBAL TRADING",
    tagline: "Connect Global Value",
    icon: Globe,
    image: "/platform_trading.jpg",
    lead: "Great innovation has little impact if it cannot reach the world.",
    description:
      "TAKNISER's global trading platform connects manufacturers, technologies, resources, markets and customers across borders — creating pathways for innovation to move from discovery to deployment.",
    footer: "Connecting ideas, products and possibilities with the markets that need them.",
  },
];

const FLYWHEEL_STEPS = [
  {
    step: "01",
    title: "EXPLORE",
    desc: "We look beyond today's boundaries.",
    icon: Compass,
  },
  {
    step: "02",
    title: "DISCOVER",
    desc: "We identify technologies, opportunities and ideas with transformative potential.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "BUILD",
    desc: "We turn promising ideas into products, businesses, prototypes and solutions.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "SCALE",
    desc: "We connect successful innovations with capital, capabilities, markets and global networks.",
    icon: Zap,
  },
  {
    step: "05",
    title: "REGENERATE",
    desc: "We create solutions that strengthen people, communities, economies and the natural world.",
    icon: RefreshCw,
  },
];

import fs from "fs";
import path from "path";

const ASSET_FILES: Record<string, string> = {
  "platform_space.jpg": "space_economy_platform_1789193878039.jpg",
  "platform_mining.jpg": "mining_and_minerals_quarry_1789193016830.jpg",
  "platform_agtech.jpg": "agtech_precision_farming_1789193900223.jpg",
  "platform_lifecare.jpg": "lifecare_biotech_lab_1789193928146.jpg",
  "platform_lifestyle.jpg": "lifestyle_smart_home_1789193955960.jpg",
  "platform_robotics.jpg": "robotics_automation_arms_1789193988070.jpg",
  "platform_trading.jpg": "global_trading_port_1789194428457.jpg",
};

export default function CapabilitiesPage() {
  const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\4745b516-61b1-4d56-a83f-6b4fdc3156a3";
  const publicDir = path.join(process.cwd(), "public");

  Object.entries(ASSET_FILES).forEach(([destName, srcName]) => {
    const destPath = path.join(publicDir, destName);
    if (!fs.existsSync(destPath)) {
      const srcPath = path.join(brainDir, srcName);
      try {
        if (fs.existsSync(srcPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      } catch {}
    }
  });

  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">

      {/* Hero Section - Siemens Precision Dark with Deep Petrol Atmosphere */}
      <section className="relative py-20 lg:py-28 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Subtle cybernetic backdrop glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b10_1px,transparent_1px),linear-gradient(to_bottom,#002d3b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

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
                  <div className="px-3.5 py-2 bg-[#002d3b] border border-[#009999]/60 text-white tracking-widest hover:border-[#009999] transition-colors">
                    <span className="text-[#009999] mr-1.5">0{idx + 1}.</span>
                    {step}
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

      {/* The TAKNISER Innovation Ecosystem - Seven Platforms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#009999] tracking-widest uppercase">
              <span>Interconnected Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              THE TAKNISER <span className="text-[#009999]">INNOVATION ECOSYSTEM</span>
            </h2>
            <div className="text-lg sm:text-xl font-bold text-[#002d3b] uppercase tracking-wide">
              Seven Platforms. One Connected Vision.
            </div>
          </div>

          {/* Interconnected Synergy Nexus */}
          <div className="bg-[#f4f5f6] border-2 border-slate-200 p-6 sm:p-10 space-y-6">
            <div className="border-b border-slate-300 pb-4">
              <h3 className="text-lg sm:text-xl font-black text-[#002d3b]">
                The world&apos;s greatest opportunities do not exist in isolation.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SYNERGIES.map((syn, idx) => {
                const IconComponent = syn.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 p-4 flex items-start gap-3.5 hover:border-[#009999] transition-all"
                  >
                    <div className="p-2 bg-[#002d3b] text-[#009999] shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                      {syn.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-300">
              <p className="font-bold text-[#002d3b] text-sm sm:text-base">
                TAKNISER brings these possibilities together through <span className="text-[#009999]">seven interconnected business platforms</span>.
              </p>
            </div>
          </div>

          {/* The 7 Platforms Grid */}
          <div className="space-y-8">
            <div className="border-b-2 border-[#009999] pb-3 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase">
                The Seven Business Platforms
              </h3>
              <span className="text-xs font-mono font-bold text-[#009999] tracking-wider uppercase">
                07 Strategic Ecosystems
              </span>
            </div>

            <div className="space-y-6">
              {PLATFORMS.map((plat, idx) => {
                const IconComp = plat.icon;
                const isEven = idx % 2 === 1;

                return (
                  <div
                    key={plat.code}
                    className="bg-white border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      {/* Content Column (7 cols) */}
                      <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="space-y-4">
                          {/* Top Tag & Code */}
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2.5 bg-[#002d3b] text-[#009999]">
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-xs font-mono font-bold text-[#009999] tracking-widest">
                                  PLATFORM {plat.code}
                                </div>
                                <h4 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase tracking-tight">
                                  {plat.title}
                                </h4>
                              </div>
                            </div>
                            <span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-xs font-bold text-[#009999] uppercase tracking-wider">
                              {plat.tagline}
                            </span>
                          </div>

                          {/* Lead text */}
                          <p className="text-base sm:text-lg font-bold text-[#002d3b] leading-relaxed">
                            {plat.lead}
                          </p>

                          {/* Full detailed description */}
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {plat.description}
                          </p>
                        </div>

                        {/* Footer Mandate & Action */}
                        <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#009999]">
                            <span className="w-2 h-2 bg-[#009999] rounded-full inline-block shrink-0" />
                            <span>{plat.footer}</span>
                          </div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002d3b] hover:text-[#009999] transition-colors uppercase tracking-wider group"
                          >
                            <span>Explore Platform</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Image Column (5 cols) */}
                      <div className={`relative min-h-[260px] sm:min-h-[320px] lg:min-h-full lg:col-span-5 overflow-hidden bg-slate-900 group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                        <Image
                          src={plat.image}
                          alt={plat.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
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
                        PHASE {step.step}
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

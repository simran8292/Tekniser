import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Globe,
  Layers,
  Wheat,
  Droplets,
  HeartPulse,
  Bot,
  Zap,
  Trees,
  ArrowLeftRight,
  Building2,
  Briefcase,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Compass,
  Search,
  Lightbulb,
  Users,
  FlaskConical,
  TrendingUp,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "12 Global Innovation Frontiers — TAKNISER ONE GLOBE",
  description:
    "Where we believe the next great opportunities will emerge. Explore TAKNISER's 12 Innovation Frontiers, Global Explorer & Research Team, and Signal to Scale engine.",
};

const FRONTIERS = [
  {
    code: "01",
    title: "SPACE",
    tagline: "Understand more. Explore further.",
    desc: "Space technologies and Earth observation are creating unprecedented ways to understand our planet and expand human capability beyond it.",
    icon: Rocket,
  },
  {
    code: "02",
    title: "CLIMATE",
    tagline: "Build resilience. Accelerate transition.",
    desc: "Innovating for a world that must become more resilient, efficient and sustainable.",
    icon: Globe,
  },
  {
    code: "03",
    title: "RESOURCES",
    tagline: "Secure what the future requires.",
    desc: "Critical minerals, circularity, recycling, advanced extraction and resource efficiency.",
    icon: Layers,
  },
  {
    code: "04",
    title: "FOOD",
    tagline: "Feed a growing world.",
    desc: "Technology-driven, resilient and regenerative food systems designed for tomorrow's challenges.",
    icon: Wheat,
  },
  {
    code: "05",
    title: "WATER",
    tagline: "Protect the world's most essential resource.",
    desc: "Water security, conservation, purification, reuse and intelligent water management.",
    icon: Droplets,
  },
  {
    code: "06",
    title: "HEALTH",
    tagline: "Extend human potential.",
    desc: "Healthcare, biotechnology, prevention, diagnostics, wellness and longevity.",
    icon: HeartPulse,
  },
  {
    code: "07",
    title: "AI & ROBOTICS",
    tagline: "Augment human capability.",
    desc: "Intelligent systems, autonomous machines and automation for increasingly complex environments.",
    icon: Bot,
  },
  {
    code: "08",
    title: "ENERGY",
    tagline: "Power progress sustainably.",
    desc: "Exploring technologies that can make energy cleaner, more reliable, accessible and efficient.",
    icon: Zap,
  },
  {
    code: "09",
    title: "NATURE",
    tagline: "Restore what sustains us.",
    desc: "Biodiversity, ecosystems, forests, oceans, soil and nature-positive technologies.",
    icon: Trees,
  },
  {
    code: "10",
    title: "TRADE & SUPPLY CHAINS",
    tagline: "Make global commerce smarter.",
    desc: "Building more transparent, resilient and intelligent pathways for products, resources and technologies to move around the world.",
    icon: ArrowLeftRight,
  },
  {
    code: "11",
    title: "SOCIETY",
    tagline: "Design a better tomorrow.",
    desc: "Innovation across education, connectivity, mobility, safety, infrastructure and quality of life.",
    icon: Building2,
  },
  {
    code: "12",
    title: "LIVELIHOODS",
    tagline: "Create opportunity at scale.",
    desc: "New businesses, skills, jobs, entrepreneurship and inclusive economic opportunities for a changing world.",
    icon: Briefcase,
  },
];

const EXPLORATION_STAGES = [
  {
    stage: "01 — EXPLORE",
    title: "Scan the horizon.",
    desc: "We continuously monitor emerging technologies, scientific discoveries, markets, resources, companies, patents, regulations and changing societal needs.",
    icon: Compass,
  },
  {
    stage: "02 — RESEARCH",
    title: "Understand the signal.",
    desc: "We investigate technologies, companies, scientific developments, business models, intellectual property and global trends.",
    icon: Search,
  },
  {
    stage: "03 — DISCOVER",
    title: "Find the opportunity.",
    desc: "We identify ideas with the potential to become TAKNISER businesses, products, technologies, partnerships or investments.",
    icon: Lightbulb,
  },
  {
    stage: "04 — CONNECT",
    title: "Bring the right minds together.",
    desc: "We build relationships with scientists, universities, entrepreneurs, innovators, governments, institutions, investors and strategic partners.",
    icon: Users,
  },
  {
    stage: "05 — EXPERIMENT",
    title: "Turn possibility into evidence.",
    desc: "Promising ideas move into prototypes, pilots, proof-of-concepts, feasibility studies and real-world experiments.",
    icon: FlaskConical,
  },
  {
    stage: "06 — SCALE",
    title: "Take what works to the world.",
    desc: "Successful innovations are connected to TAKNISER's global capabilities, business platforms, markets and networks.",
    icon: TrendingUp,
  },
];

const SIGNAL_STEPS = [
  {
    name: "SIGNAL",
    detail: "A new discovery, technology or emerging need.",
  },
  {
    name: "INSIGHT",
    detail: "Research reveals its potential.",
  },
  {
    name: "OPPORTUNITY",
    detail: "A commercial or societal application emerges.",
  },
  {
    name: "EXPERIMENT",
    detail: "The idea is tested in the real world.",
  },
  {
    name: "INNOVATION",
    detail: "A viable solution is created.",
  },
  {
    name: "SCALE",
    detail: "The solution reaches markets and communities.",
  },
  {
    name: "GLOBAL IMPACT",
    detail: "Transformative worldwide value.",
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

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (Deep Siemens Dark with Subtle Architecture)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.14),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b10_1px,transparent_1px),linear-gradient(to_bottom,#002d3b10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>FUTURE HORIZONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            12 GLOBAL <br className="hidden sm:inline" />
            <span className="text-[#009999]">INNOVATION FRONTIERS</span>
          </h1>

          <p className="text-base sm:text-xl text-[#00cccc] font-semibold uppercase tracking-wide">
            Where We Believe the Next Great Opportunities Will Emerge
          </p>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            TAKNISER continuously explores twelve interconnected frontiers that have the potential to redefine industries and improve life on Earth.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 12 FRONTIERS GRID (CLEAN WHITE & LIGHT CANVAS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f5f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-300 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider">
                EXPLORATION PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                The Twelve Strategic Frontiers
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              12 ACTIVE FOCUS AREAS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FRONTIERS.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.code}
                  className="bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#009999] hover:shadow-lg transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* Header: Code & Icon */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold text-[#009999] tracking-widest">
                        FRONTIER {item.code}
                      </span>
                      <div className="p-2.5 bg-[#f4f5f6] text-[#009999] border border-slate-200">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-lg font-black text-[#002d3b] uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <div className="text-xs font-bold text-[#009999] mt-1">
                        {item.tagline}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-semibold text-slate-400">
                    <span>STRATEGIC DOMAIN</span>
                    <span className="text-[#009999]">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TAKNISER RESEARCH TEAM (PURE WHITE & CLEAN EDITORIAL)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              <Radio className="w-3.5 h-3.5 text-[#009999]" />
              <span>INTELLIGENCE & RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              TAKNISER GLOBAL EXPLORER <br />
              <span className="text-[#009999]">&amp; RESEARCH TEAM</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 uppercase tracking-wider">
              24×7 INNOVATION INTELLIGENCE FOR A CHANGING WORLD
            </p>
          </div>

          {/* Clean Editorial Box */}
          <div className="bg-[#f8fafc] border border-slate-200 p-6 sm:p-10 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg font-bold text-[#002d3b] border-l-4 border-[#009999] pl-3">
                The future does not arrive all at once.
              </p>
              <p>
                It emerges through thousands of signals—a scientific paper, a patent, a new material, a startup, a breakthrough technology, a changing regulation, a new resource discovery, a shifting consumer need or an entirely new business model.
              </p>
              <p>
                The TAKNISER Global Explorer &amp; Research Team exists to identify these signals before they become obvious.
              </p>
              <p>
                Our global innovation engine continuously explores, researches, discovers, connects, experiments and scales opportunities across industries, technologies and geographies.
              </p>
            </div>

            {/* Signature Creed Callout */}
            <div className="p-5 bg-white border border-slate-200 border-l-4 border-l-[#009999] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-sm sm:text-base font-black text-[#002d3b] uppercase tracking-wider">
                We don&apos;t wait for the future.
              </span>
              <span className="text-sm sm:text-base font-black text-[#009999] uppercase tracking-wider">
                We actively search for it.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SIX-STAGE EXPLORATION ENGINE (LIGHT INDUSTRIAL CANVAS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f5f6] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              STRUCTURED METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              THE SIX-STAGE <span className="text-[#009999]">EXPLORATION ENGINE</span>
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              How our discovery engine systematically transforms early market signals into scalable global operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPLORATION_STAGES.map((st) => {
              const StageIcon = st.icon;
              return (
                <div
                  key={st.stage}
                  className="bg-white border border-slate-200 p-6 space-y-3 hover:border-[#009999] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold text-[#009999]">
                        {st.stage}
                      </span>
                      <div className="p-2 bg-[#f4f5f6] text-[#009999]">
                        <StageIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#002d3b]">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    ENGINE DIRECTIVE
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: FROM SIGNAL TO SCALE (DEEP CONTRAST DARK SECTION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#001822] text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              PIPELINE FRAMEWORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              FROM SIGNAL <span className="text-[#009999]">TO SCALE</span>
            </h2>
            <div className="text-base sm:text-lg font-bold text-[#00cccc] uppercase tracking-wide">
              How an Idea Becomes Impact
            </div>
          </div>

          {/* Sequential Step Architecture */}
          <div className="max-w-2xl mx-auto space-y-3">
            {SIGNAL_STEPS.map((step, idx) => (
              <div key={step.name} className="flex flex-col items-center">
                
                {/* Step Card */}
                <div className="w-full bg-[#002d3b] border border-slate-700/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#009999] transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 bg-[#001822] border border-[#009999]/50 text-[#009999] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white uppercase tracking-tight">
                        {step.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-xs font-mono text-[#009999] font-bold">
                    STEP 0{idx + 1}
                  </div>
                </div>

                {/* Downward flow connector */}
                {idx < SIGNAL_STEPS.length - 1 && (
                  <div className="my-1 flex flex-col items-center justify-center">
                    <div className="w-0.5 h-3 bg-[#009999]/40" />
                    <ArrowDown className="w-4 h-4 text-[#009999]" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: INNOVATION WITHOUT BORDERS & PRINCIPLES (CLEAN WHITE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: FROM EXPLORATION TO IMPACT (GRAND FINALE & CTA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10 text-center">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/60">
              <span>MANIFESTO FOR PROGRESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              FROM EXPLORATION <span className="text-[#009999]">TO IMPACT</span>
            </h2>
            <div className="text-base sm:text-xl font-bold text-slate-200">
              TAKNISER&apos;s ambition is not simply to predict the future. <br />
              <span className="text-[#009999]">It is to participate in creating it.</span>
            </div>
          </div>

          {/* 5 Action Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 max-w-3xl mx-auto text-xs font-mono font-bold text-slate-300">
            <div className="p-3 bg-[#002d3b] border border-slate-700">We explore the unknown.</div>
            <div className="p-3 bg-[#002d3b] border border-slate-700">We discover the possible.</div>
            <div className="p-3 bg-[#002d3b] border border-slate-700">We build the valuable.</div>
            <div className="p-3 bg-[#002d3b] border border-slate-700">We scale the successful.</div>
            <div className="p-3 bg-[#002d3b] border border-slate-700 text-[#009999]">And we strive to regenerate what sustains us.</div>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#002d3b]/60 p-6 border border-slate-700">
            <p>
              Across <span className="text-white font-bold">Space, Resources, Food, Health, Lifestyle, Robotics and Global Trade</span>, our innovation ecosystem is designed to connect today&apos;s capabilities with tomorrow&apos;s opportunities.
            </p>
            <p className="text-base font-bold text-white uppercase tracking-wider">
              The future belongs to those willing to explore it.
            </p>
          </div>

          {/* Brand Seal */}
          <div className="space-y-2 pt-4">
            <div className="text-2xl sm:text-3xl font-black uppercase tracking-widest text-[#009999]">
              TAKNISER
            </div>
            <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 uppercase">
              Explore. Discover. Build. Scale. Regenerate.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>Connect with Research Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/capabilities"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              View Innovation Ecosystem
            </Link>
          </div>

          {/* Verbatim Document Stamp */}
          <div className="text-center text-xs text-slate-500 font-mono pt-8">
            TAKNISER ONE GLOBE — Complete Website Content Reference
          </div>

        </div>
      </section>

    </div>
  );
}

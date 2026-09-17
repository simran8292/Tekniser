import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "T1G IMPACTS — 12 Global Frontiers | TAKNISER ONE GLOBE",
  description:
    "Where we believe the next great opportunities will emerge. Explore TAKNISER's T1G IMPACTS across 12 Global Frontiers, Global Explorer & Research Team, and Signal to Scale engine.",
};

const FRONTIERS = [
  {
    code: "01",
    title: "SPACE",
    tagline: "Understand more. Explore further.",
    desc: "Space technologies and Earth observation are creating unprecedented ways to understand our planet and expand human capability beyond it.",
    icon: Rocket,
    image: "/platform_space.jpg",
  },
  {
    code: "02",
    title: "CLIMATE",
    tagline: "Build resilience. Accelerate transition.",
    desc: "Innovating for a world that must become more resilient, efficient and sustainable.",
    icon: Globe,
    image: "/sustainable_earth_slide.jpg",
  },
  {
    code: "03",
    title: "RESOURCES",
    tagline: "Secure what the future requires.",
    desc: "Critical minerals, circularity, recycling, advanced extraction and resource efficiency.",
    icon: Layers,
    image: "/mining_quarry_platform.jpg",
  },
  {
    code: "04",
    title: "FOOD",
    tagline: "Feed a growing world.",
    desc: "Technology-driven, resilient and regenerative food systems designed for tomorrow's challenges.",
    icon: Wheat,
    image: "/platform_agtech.jpg",
  },
  {
    code: "05",
    title: "WATER",
    tagline: "Protect the world's most essential resource.",
    desc: "Water security, conservation, purification, reuse and intelligent water management.",
    icon: Droplets,
    image: "/vision_pillar_2.jpg",
  },
  {
    code: "06",
    title: "HEALTH",
    tagline: "Extend human potential.",
    desc: "Healthcare, biotechnology, prevention, diagnostics, wellness and longevity.",
    icon: HeartPulse,
    image: "/platform_lifecare.jpg",
  },
  {
    code: "07",
    title: "AI & ROBOTICS",
    tagline: "Augment human capability.",
    desc: "Intelligent systems, autonomous machines and automation for increasingly complex environments.",
    icon: Bot,
    image: "/clean_robotics.jpg",
  },
  {
    code: "08",
    title: "ENERGY",
    tagline: "Power progress sustainably.",
    desc: "Exploring technologies that can make energy cleaner, more reliable, accessible and efficient.",
    icon: Zap,
    image: "/hero_industrial_bg.png",
  },
  {
    code: "09",
    title: "NATURE",
    tagline: "Restore what sustains us.",
    desc: "Biodiversity, ecosystems, forests, oceans, soil and nature-positive technologies.",
    icon: Trees,
    image: "/about_hesse_heritage.jpg",
  },
  {
    code: "10",
    title: "TRADE & SUPPLY CHAINS",
    tagline: "Make global commerce smarter.",
    desc: "Building more transparent, resilient and intelligent pathways for products, resources and technologies to move around the world.",
    icon: ArrowLeftRight,
    image: "/about_logistics_port.jpg",
  },
  {
    code: "11",
    title: "SOCIETY",
    tagline: "Design a better tomorrow.",
    desc: "Innovation across education, connectivity, mobility, safety, infrastructure and quality of life.",
    icon: Building2,
    image: "/about_conglomerate_hq.jpg",
  },
  {
    code: "12",
    title: "LIVELIHOODS",
    tagline: "Create opportunity at scale.",
    desc: "New businesses, skills, jobs, entrepreneurship and inclusive economic opportunities for a changing world.",
    icon: Briefcase,
    image: "/platform_lifestyle.jpg",
  },
];

const EXPLORATION_STAGES = [
  {
    code: "01",
    stage: "EXPLORE",
    title: "Scan the horizon.",
    desc: "We continuously monitor emerging technologies, scientific discoveries, markets, resources, companies, patents, regulations and changing societal needs.",
    icon: Compass,
    image: "/engine_stage_1_explore.jpg",
  },
  {
    code: "02",
    stage: "RESEARCH",
    title: "Understand the signal.",
    desc: "We investigate technologies, companies, scientific developments, business models, intellectual property and global trends.",
    icon: Search,
    image: "/platform_lifecare.jpg",
  },
  {
    code: "03",
    stage: "DISCOVER",
    title: "Find the opportunity.",
    desc: "We identify ideas with the potential to become TAKNISER businesses, products, technologies, partnerships or investments.",
    icon: Lightbulb,
    image: "/engine_stage_3_discover.jpg",
  },
  {
    code: "04",
    stage: "CONNECT",
    title: "Bring the right minds together.",
    desc: "We build relationships with scientists, universities, entrepreneurs, innovators, governments, institutions, investors and strategic partners.",
    icon: Users,
    image: "/engine_stage_4_connect.jpg",
  },
  {
    code: "05",
    stage: "EXPERIMENT",
    title: "Turn possibility into evidence.",
    desc: "Promising ideas move into prototypes, pilots, proof-of-concepts, feasibility studies and real-world experiments.",
    icon: FlaskConical,
    image: "/engine_stage_5_experiment.jpg",
  },
  {
    code: "06",
    stage: "SCALE",
    title: "Take what works to the world.",
    desc: "Successful innovations are connected to TAKNISER's global capabilities, business platforms, markets and networks.",
    icon: TrendingUp,
    image: "/about_logistics_port.jpg",
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

export default function IndustriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO (Deep Siemens Dark with Themed Faded Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/platform_space.jpg"
            alt="Space & Global Frontiers"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>T1G IMPACTS</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            T1G IMPACTS: <br className="hidden sm:inline" />
            <span className="text-[#009999]">12 GLOBAL FRONTIERS</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#00cccc] font-semibold uppercase tracking-wide">
            Where We Believe the Next Great Opportunities Will Emerge
          </p>

          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            TAKNISER continuously explores twelve interconnected frontiers that have the potential to redefine industries and create transformative global impact on Earth and beyond.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: 12 FRONTIERS GRID (MODERN EXPLORATION PORTFOLIO WITH IMAGES)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Section Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2.5px] bg-[#009999] inline-block rounded-full" />
                <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                  EXPLORATION PORTFOLIO
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#002d3b] tracking-tight uppercase">
                THE TWELVE <span className="text-[#009999]">STRATEGIC FRONTIERS</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
                We work across a diverse range of industries and sectors, helping organizations unlock new opportunities, drive innovation, and achieve sustainable growth.
              </p>
            </div>
          </div>

          {/* Main Grid: 12 Frontier Cards (Left 9 cols) + Explorer Summit Pillar (Right 3 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Left Column: 12 Frontier Cards in a 4-col responsive layout */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {FRONTIERS.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.code}
                      className="group relative min-h-[290px] sm:min-h-[310px] h-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-4 sm:p-4.5 border border-slate-200/70 hover:border-[#009999]/60"
                    >
                      {/* Card Background Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />

                      {/* Cinematic Multi-layered Dark Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00131d] via-[#00131d]/85 to-[#00131d]/20 opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-[#009999]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Bottom Content Area */}
                      <div className="relative z-10 space-y-2">
                        {/* Icon + Title */}
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 text-teal-300 shrink-0">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-tight">
                            {item.title}
                          </h3>
                        </div>

                        {/* Full Tagline */}
                        <div className="text-[11.5px] font-semibold text-teal-300 leading-snug">
                          {item.tagline}
                        </div>

                        {/* Full Description */}
                        <div className="pt-1.5 border-t border-white/10">
                          <p className="text-[11px] text-slate-200 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Hero Banner "Diverse Industries. One Purpose." */}
            <div className="lg:col-span-3 flex flex-col">
              <div className="h-full bg-gradient-to-b from-[#eaf4f7] via-[#f0f7f9] to-[#00141e] rounded-2xl rounded-tr-[48px] overflow-hidden border border-slate-200/80 shadow-md flex flex-col justify-between">
                {/* Header Content */}
                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="w-8 h-1 bg-[#009999] rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#002d3b] tracking-tight leading-snug">
                    Diverse Industries. <br />
                    <span className="text-[#009999]">One Purpose.</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    TAKNISER brings together expertise, insights and innovation to create lasting value across industries and geographies.
                  </p>
                </div>

                {/* Bottom Panoramic Explorer Summit Image */}
                <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] xl:flex-1 min-h-[300px] overflow-hidden">
                  <Image
                    src="/frontiers_explorer_summit.jpg"
                    alt="Diverse Industries One Purpose Explorer"
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top blend overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#f0f7f9]/50 pointer-events-none" />
                </div>
              </div>
            </div>

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

          {/* Clean Editorial Box with Pictorial Visual Representation */}
          <div className="bg-[#f8fafc] border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Pictorial Side Banner */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-slate-200">
                <Image
                  src="/sustainable_earth_slide.jpg"
                  alt="Global Explorer & Research Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/85 via-[#002d3b]/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#00cccc]">
                    Global Research Command
                  </div>
                  <div className="text-base font-black uppercase">
                    Continuous Planetary Intelligence
                  </div>
                  <p className="text-xs text-slate-300">
                    Multidisciplinary laboratory networks and market telemetry scanning worldwide frontiers.
                  </p>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
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
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SIX-STAGE EXPLORATION ENGINE (MODERN METHODOLOGY WITH PHOTOGRAPHY)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header (Left-aligned as in reference mockup) */}
          <div className="space-y-2 border-b border-slate-200 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2.5px] bg-[#009999] inline-block rounded-full" />
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                STRUCTURED METHODOLOGY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#002d3b] tracking-tight uppercase">
              THE SIX-STAGE <span className="text-[#009999]">EXPLORATION ENGINE</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed pt-1">
              How our discovery engine systematically transforms early market signals into scalable global operations.
            </p>
          </div>

          {/* Cards Grid: 2-Column Responsive Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {EXPLORATION_STAGES.map((st) => {
              const StageIcon = st.icon;
              return (
                <div
                  key={st.code}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 group"
                >
                  {/* Left Content Side */}
                  <div className="flex-1 flex flex-col justify-between h-full space-y-4 w-full">
                    <div className="space-y-3">
                      {/* Top: Circular Icon Badge + Stage Number & Name */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#009999]/10 text-[#009999] flex items-center justify-center border border-[#009999]/20 shrink-0">
                          <StageIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#009999] tracking-wider uppercase">
                          {st.stage}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#002d3b] tracking-tight">
                        {st.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009999] hover:text-[#007a7a] transition-colors group/link"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Image Side */}
                  <div className="relative w-full sm:w-[220px] md:w-[240px] lg:w-[250px] h-[180px] sm:h-[190px] rounded-xl overflow-hidden shrink-0 border border-slate-200/60 shadow-sm">
                    <Image
                      src={st.image}
                      alt={st.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
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
                    <div className="w-2.5 h-2.5 bg-[#009999] shrink-0" />
                    <div>
                      <h4 className="text-base font-black text-white uppercase tracking-tight">
                        {step.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-xs font-mono text-[#009999] font-bold uppercase tracking-wider">
                    EXECUTION PHASE
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

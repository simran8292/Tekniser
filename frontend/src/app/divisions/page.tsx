import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Globe,
  Rocket,
  Pickaxe,
  Sprout,
  HeartPulse,
  Home,
  Bot,
  Sparkles,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Business Divisions — TAKNISER ONE GLOBE",
  description:
    "Seven transformative sectors, one integrated global platform. Explore Space Economy, Mining & Minerals, AgTech, LifeCare, Lifestyle, Robotics, and Global Trading.",
};

const ECOSYSTEM_PLATFORMS = [
  {
    title: "Space Intelligence",
    desc: "Space intelligence can transform agriculture, helping to monitor crop health, soil quality and land use.",
    icon: Rocket,
    color: "bg-[#009999]",
    href: "#space-economy",
  },
  {
    title: "Critical Minerals",
    desc: "Critical minerals enable the technologies of tomorrow, powering clean energy, EVs and advanced manufacturing.",
    icon: Layers,
    color: "bg-[#1e40af]",
    href: "#mining-minerals",
  },
  {
    title: "AI & Robotics",
    desc: "AI can accelerate scientific discovery, optimize operations and create smarter, safer industries.",
    icon: Bot,
    color: "bg-[#6366f1]",
    href: "#robotics",
  },
  {
    title: "Life Sciences",
    desc: "Life sciences can extend human potential, improving health, longevity and quality of life.",
    icon: HeartPulse,
    color: "bg-[#0f766e]",
    href: "#lifecare",
  },
  {
    title: "Global Trade",
    desc: "Global trade can take breakthrough solutions from one market to the world, creating shared prosperity.",
    icon: Globe,
    color: "bg-[#0284c7]",
    href: "#global-trading",
  },
  {
    title: "Technology & Innovation",
    desc: "Technology and innovation connect people, systems and ideas—building a smarter, more resilient future.",
    icon: Cpu,
    color: "bg-[#7c3aed]",
    href: "#robotics",
  },
  {
    title: "Sustainability",
    desc: "Sustainability ensures progress today without compromising tomorrow, balancing growth with a healthier planet.",
    icon: Sprout,
    color: "bg-[#059669]",
    href: "#agtech",
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
    image: "/clean_robotics.jpg",
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

interface DivisionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string;
  categories: string[];
}

const DIVISIONS: DivisionItem[] = [
  {
    id: "space-economy",
    slug: "space-economy",
    title: "Space Economy",
    tagline:
      "Driving the future beyond Earth through advanced space technologies and global aerospace partnerships.",
    description:
      "Specialized engineering, satellite components, launch support systems, and orbital electronics empowering next-generation space exploration and communication networks.",
    icon: Rocket,
    image: "/platform_space.jpg",
    categories: [
      "Satellite Components",
      "Space Communications",
      "Earth Observation",
      "Space Electronics",
      "Launch Support Technologies",
    ],
  },
  {
    id: "mining-minerals",
    slug: "mining-minerals",
    title: "Mining & Minerals",
    tagline:
      "Supporting the world's industrial growth through responsible mining, processing, sourcing, and global trading of strategic minerals.",
    description:
      "Global strategic sourcing and critical mineral supply chains supplying essential metals and rare earth elements for green transition, electronics, and global heavy industry.",
    icon: Pickaxe,
    image: "/platform_mining.jpg",
    categories: [
      "Copper",
      "Lithium",
      "Nickel",
      "Rare Earth Elements",
      "Aluminum",
      "Graphite",
      "Critical Mineral Trading",
      "Coal",
    ],
  },
  {
    id: "agtech",
    slug: "agtech",
    title: "AgTech",
    tagline:
      "Building sustainable agriculture through modern farming technologies, food processing, and global Agri supply chains.",
    description:
      "Advanced precision irrigation, high-yield seeds, eco-friendly fertilizers, and automated food processing equipment ensuring global food security.",
    icon: Sprout,
    image: "/platform_agtech.jpg",
    categories: [
      "Irrigation Systems",
      "Fertilizers",
      "Seeds",
      "Agricultural Machinery",
      "Food Processing",
    ],
  },
  {
    id: "lifecare",
    slug: "lifecare",
    title: "LifeCare",
    tagline:
      "Delivering innovative healthcare technologies that improve lives worldwide.",
    description:
      "Precision medical diagnostic systems, hospital infrastructure equipment, biotechnology integration, and high-purity pharmaceutical sourcing.",
    icon: HeartPulse,
    image: "/platform_lifecare.jpg",
    categories: [
      "Medical Devices",
      "Hospital Equipment",
      "Pharmaceuticals",
      "Biotechnology",
      "Diagnostics Equipment",
    ],
  },
  {
    id: "lifestyle",
    slug: "lifestyle",
    title: "Lifestyle",
    tagline:
      "Enhancing everyday living through quality consumer products and smart lifestyle solutions.",
    description:
      "High-grade consumer appliances, smart home automation hubs, wellness technology, and engineered textiles for premium global markets.",
    icon: Home,
    image: "/platform_lifestyle.jpg",
    categories: [
      "Consumer Appliances",
      "Smart Home",
      "Personal Care",
      "Wellness",
      "Fabric",
    ],
  },
  {
    id: "robotics",
    slug: "robotics",
    title: "Robotics",
    tagline:
      "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.",
    description:
      "State-of-the-art industrial arm robots, Autonomous Mobile Robots (AMRs), smart warehouse automation, and factory-wide cyber-physical integration.",
    icon: Bot,
    image: "/clean_robotics.jpg",
    categories: [
      "Industrial Robots",
      "Warehouse Automation",
      "AI Robotics",
      "AMRs (Autonomous Mobile Robots)",
      "Factory Automation",
    ],
  },
  {
    id: "global-trading",
    slug: "global-trading",
    title: "Global Trading",
    tagline:
      "Connecting manufacturers, industries, governments, and global markets through an integrated international trading ecosystem.",
    description:
      "Cross-border multi-commodity supply chains, energy trading, defence & aerospace procurement, and strategic industrial component distribution.",
    icon: Globe,
    image: "/platform_trading.jpg",
    categories: [
      "Energy",
      "Electrical",
      "Electronics",
      "Defence & Aerospace",
      "Agri Trade",
      "Metal",
    ],
  },
];

export default function DivisionsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION (Siemens Executive Dark with Themed Faded Background)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_industrial_bg.png"
            alt="TAKNISER Core Divisions Platform"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">

          {/* Label from verbatim document */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>TAKNISER Conglomerate Portfolio</span>
          </div>

          {/* Heading from verbatim document */}
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            Our <span className="text-[#009999]">Business Divisions</span>
          </h1>

          {/* Description from verbatim document */}
          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Seven transformative sectors, one integrated global platform. TAKNISER ONE GLOBE connects industrial manufacturing, space economy, strategic minerals, AgTech, LifeCare, intelligent robotics, and international trade.
          </p>

          {/* Sector Quick-Nav Jump Pills */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto">
            {DIVISIONS.map((div) => (
              <a
                key={div.id}
                href={`#${div.id}`}
                className="px-3.5 py-1.5 text-xs font-semibold bg-[#002d3b]/80 border border-slate-700 text-slate-300 hover:text-white hover:border-[#009999] transition-all rounded-none"
              >
                {div.title}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE TAKNISER INNOVATION ECOSYSTEM - SEVEN PLATFORMS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

            {/* Left Column (Header, 7 Cards Grid, Bottom Callout) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#009999] tracking-widest uppercase">
                <span className="w-6 h-0.5 bg-[#009999]" />
                <span>Interconnected Vision</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#002d3b] uppercase tracking-tight leading-tight">
                THE TAKNISER{" "}
                <span className="text-[#009999]">
                  INNOVATION ECOSYSTEM
                </span>
              </h2>

              {/* Subheading & Lead */}
              <div className="space-y-2.5">
                <p className="text-xs sm:text-sm font-extrabold text-[#002d3b] uppercase tracking-wider">
                  SEVEN PLATFORMS. ONE CONNECTED VISION.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl">
                  The world&apos;s greatest opportunities do not exist in isolation. TAKNISER brings together seven interconnected business platforms, creating a powerful ecosystem of innovation, technology and sustainable growth.
                </p>
              </div>

              {/* 7 Cards Grid (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {ECOSYSTEM_PLATFORMS.map((card, idx) => {
                  const IconComp = card.icon;
                  return (
                    <a
                      key={idx}
                      href={card.href}
                      className="bg-white border border-slate-200/90 p-3.5 sm:p-4 rounded-xl flex flex-col justify-between hover:border-[#009999] hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg ${card.color} text-white flex items-center justify-center shrink-0 shadow-sm`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-[0.825rem] font-bold text-[#002d3b] group-hover:text-[#009999] transition-colors">
                            {card.title}
                          </span>
                        </div>
                        <span className="text-slate-400 group-hover:text-[#009999] group-hover:translate-x-0.5 transition-all text-sm">
                          &rarr;
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-2.5">
                        {card.desc}
                      </p>
                    </a>
                  );
                })}
              </div>

              {/* Bottom Callout Banner */}
              <div className="bg-[#f0fdfa] border border-[#ccfbf1] p-3.5 sm:p-4 rounded-xl flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#99f6e4] text-[#009999] flex items-center justify-center shrink-0 shadow-sm text-lg font-bold">
                    &infin;
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#009999] uppercase tracking-wider block">
                      Together, These Platforms
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#002d3b]">
                      Power a Smarter, Healthier, More Sustainable Future.
                    </p>
                  </div>
                </div>
                <a
                  href="#divisions"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-[#99f6e4] text-xs font-bold text-[#009999] hover:bg-[#009999] hover:text-white transition-all rounded-lg shrink-0 shadow-sm"
                >
                  <span>Learn More</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column (Visual Artwork + Crisp HTML Dark Banner) */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center lg:items-end">
              <div className="w-full max-w-[620px] space-y-4">
                {/* Visual Artwork with Curved Panels & Photo Tiles */}
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group bg-slate-50">
                  <Image
                    src="/innovation_ecosystem_artwork.jpg"
                    alt="The TAKNISER Innovation Ecosystem - Interconnected Platforms"
                    width={1058}
                    height={1076}
                    priority
                    className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                {/* Crisp Dark Navy Callout Banner (100% Vector HTML Typography) */}
                <div className="bg-[#002230] text-white p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-8">
                    <div className="sm:w-5/12 border-b sm:border-b-0 sm:border-r border-slate-700/80 pb-3 sm:pb-0 sm:pr-6">
                      <span className="w-7 h-1 bg-[#009999] block mb-2.5" />
                      <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                        Multiple Industries.
                        <br />
                        One Ecosystem.
                      </h4>
                    </div>
                    <div className="sm:w-7/12">
                      <p className="text-xs sm:text-[0.825rem] text-slate-300 leading-relaxed font-normal">
                        By connecting innovation, expertise and global partnerships, TAKNISER creates solutions that drive progress across industries and generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          UNIFIED BUSINESS DIVISIONS & PLATFORMS SECTION
      ───────────────────────────────────────────────────────────── */}
      <section id="divisions" className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Section Header */}
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                CONGLOMERATE ARCHITECTURE &bull; STRATEGIC ECOSYSTEMS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                The Business Divisions &amp; Platforms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md text-left sm:text-right">
              Integrated operational entities delivering specialized capabilities, strategic ecosystems, and worldwide industrial supply chains.
            </p>
          </div>

          {/* Unified Cards Stack - Merges Vision Lead, Core Descriptions, Category Tags & Exploration CTA */}
          <div className="space-y-12">
            {DIVISIONS.map((division, idx) => {
              const IconComponent = division.icon;
              const plat = PLATFORMS[idx] || PLATFORMS.find(p => p.title.toLowerCase() === division.title.toLowerCase()) || PLATFORMS[0];

              return (
                <div
                  key={division.id}
                  id={division.id}
                  className="bg-white border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all duration-300 rounded-none overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

                    {/* Left Column: Visual Representation & Brand Identity */}
                    <div className="lg:col-span-5 p-7 sm:p-9 bg-slate-50/90 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Division Image Banner */}
                        <div className="relative w-full h-52 overflow-hidden border border-slate-200 bg-slate-900 group">
                          <Image
                            src={division.image}
                            alt={division.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/85 via-[#002d3b]/20 to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-[#002d3b] text-[#009999] border border-slate-700">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white drop-shadow-sm">
                                Strategic Platform
                              </span>
                            </div>
                            <span className="px-2.5 py-1 bg-[#002d3b]/90 border border-slate-700 text-[10px] font-bold text-[#00cccc] uppercase tracking-wider">
                              {plat.tagline}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                          {division.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-sm font-semibold text-[#009999] leading-snug">
                          {division.tagline}
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/divisions/${division.slug}`}
                          className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5"
                        >
                          <span>Explore {division.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-2 border border-slate-300 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          Division Inquiry
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Strategic Narrative, Scope & Product Categories */}
                    <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-white">

                      <div className="space-y-5">
                        {/* Lead Thought / Ecosystem Vision */}
                        <div className="p-4 bg-[#f8fafc] border-l-4 border-[#009999] space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#009999]">
                            Platform Strategic Mandate
                          </div>
                          <p className="text-sm sm:text-base font-bold text-[#002d3b] leading-relaxed">
                            {plat.lead}
                          </p>
                        </div>

                        {/* Description 1: Platform Ecosystem Overview */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                            Ecosystem Overview
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {plat.description}
                          </p>
                        </div>

                        {/* Description 2: Sector Capabilities */}
                        <div className="space-y-1.5">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                            Operational Capabilities
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                            {division.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Segment: Product & Service Categories + Strategic Footer Note */}
                      <div className="pt-4 border-t border-slate-100 space-y-4">
                        <div className="space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#002d3b]">
                            Product &amp; Service Categories
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {division.categories.map((cat) => (
                              <span
                                key={cat}
                                className="text-xs font-medium px-2.5 py-1 bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] hover:bg-white transition-all rounded-none"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Strategic Platform Footer Motto */}
                        <div className="pt-2 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs font-bold text-[#009999]">
                          <span className="w-2 h-2 bg-[#009999] rounded-full inline-block shrink-0" />
                          <span>{plat.footer}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL INTEGRATION STATEMENT (Executive Cross-Sector Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4 text-[#009999]" />
            <span>INTEGRATED VALUE CHAIN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
            One Connected Industrial Ecosystem
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            By unifying space infrastructure, strategic mineral sourcing, agricultural technology, life sciences, consumer lifestyle, intelligent robotics, and global trade, TAKNISER provides comprehensive, cross-sector industrial solutions across 190+ countries.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto text-left">
            <div className="p-4 bg-[#f8fafc] border border-slate-200">
              <div className="text-2xl font-black text-[#002d3b]">7</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">Core Sectors</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200">
              <div className="text-2xl font-black text-[#002d3b]">190+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">Countries Served</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200">
              <div className="text-2xl font-black text-[#002d3b]">30+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">Operating Entities</div>
            </div>
            <div className="p-4 bg-[#f8fafc] border border-slate-200">
              <div className="text-2xl font-black text-[#002d3b]">100+</div>
              <div className="text-xs text-slate-500 uppercase font-mono mt-1">Years Heritage</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CALL TO ACTION (Siemens Dark Petrol Footer Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#001822] text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Partner with Our <span className="text-[#009999]">Business Divisions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our division leadership to explore joint ventures, industrial supply agreements, cross-border procurement, and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>Contact Business Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/global-network"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              Explore Global Network
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

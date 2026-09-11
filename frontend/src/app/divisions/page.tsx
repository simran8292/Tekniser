import type { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Business Divisions — TAKNISER ONE GLOBE",
  description:
    "Seven transformative sectors, one integrated global platform. Explore Space Economy, Mining & Minerals, AgTech, LifeCare, Lifestyle, Robotics, and Global Trading.",
};

interface DivisionItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
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
          PAGE HERO SECTION (Siemens Modern Executive Dark)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b12_1px,transparent_1px),linear-gradient(to_bottom,#002d3b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          {/* Label from verbatim document */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>TAKNISER Conglomerate Portfolio</span>
          </div>

          {/* Heading from verbatim document */}
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Our <span className="text-[#009999]">Business Divisions</span>
          </h1>

          {/* Description from verbatim document */}
          <p className="text-slate-200 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
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
          THE BUSINESS DIVISIONS (Clean, High-Readability White Cards)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header (without the red 7) */}
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                CONGLOMERATE ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                The Business Divisions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md text-left sm:text-right">
              Integrated operational entities delivering specialized capabilities across essential worldwide industries.
            </p>
          </div>

          {/* Division Cards Stack */}
          <div className="space-y-8">
            {DIVISIONS.map((division) => {
              const IconComponent = division.icon;
              return (
                <div
                  key={division.id}
                  id={division.id}
                  className="bg-white border border-slate-200 hover:border-[#009999] hover:shadow-xl transition-all duration-300 rounded-none overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    {/* Left Column: Sector Identity */}
                    <div className="lg:col-span-5 p-7 sm:p-9 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        {/* Icon & Sector Badge */}
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 bg-[#002d3b] text-[#009999]">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#009999]">
                            Strategic Sector
                          </span>
                        </div>

                        {/* Title (Only Title, No "Division 001:" red text) */}
                        <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                          {division.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-sm font-semibold text-[#009999] leading-snug">
                          {division.tagline}
                        </p>
                      </div>

                      {/* Action Button to Division Detail */}
                      <div className="pt-2">
                        <Link
                          href={`/divisions/${division.slug}`}
                          className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-2.5"
                        >
                          <span>Explore {division.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Description & Product/Service Categories */}
                    <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-white">
                      
                      {/* Description */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
                          Sector Scope &amp; Capabilities
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {division.description}
                        </p>
                      </div>

                      {/* Product & Service Categories */}
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        <div className="text-xs font-bold uppercase tracking-wider text-[#002d3b]">
                          Product &amp; Service Categories
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {division.categories.map((cat) => (
                            <span
                              key={cat}
                              className="text-xs font-medium px-3 py-1.5 bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] hover:bg-white transition-all rounded-none"
                            >
                              {cat}
                            </span>
                          ))}
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
              <div className="text-2xl font-black text-[#002d3b]">29+</div>
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

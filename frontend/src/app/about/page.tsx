import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Globe, Landmark, Layers, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "German Engineering Heritage — 100+ Years of Industrial Excellence | TAKNISER",
  description:
    "Discover the century-long heritage of TAKNISER, beginning in Hesse (Hessen), Germany — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define who we are.",
};

const TIMELINE_PAST = [
  {
    period: "Early 20th Century",
    title: "The German Foundation",
    image: "/about_hesse_heritage.jpg",
    imageAlt: "Historic German engineering and precision machinery workshop in Hesse",
    description:
      "The TAKNISER story traces its roots to Hesse (Hessen), Germany, during a defining era of European industrial transformation. Built upon the principles of precision, reliability, and engineering excellence, TAKNISER developed expertise in diesel power generation systems, supporting the continuous operation of factories, transportation networks, public infrastructure, and essential industries.",
    conclusion:
      "This foundation established a philosophy that would remain central to TAKNISER for generations: engineering with purpose, reliability without compromise.",
  },
  {
    period: "Mid 20th Century",
    title: "Industrial Manufacturing Expansion",
    image: "/about_midcentury_factory.jpg",
    imageAlt: "Mid-20th century industrial manufacturing and heavy machinery plant",
    description:
      "As industries evolved, so did TAKNISER. Guided by the principle of “Qualität vor Quantität” — Quality before Quantity, the organization expanded its industrial capabilities across a broader range of manufacturing and engineering applications.",
    conclusion:
      "Meticulous craftsmanship, disciplined execution, technical expertise, and precision became hallmarks of the TAKNISER approach — creating solutions designed not merely to perform, but to endure.",
  },
  {
    period: "Late 20th Century",
    title: "International Sourcing & Procurement",
    image: "/about_logistics_port.jpg",
    imageAlt: "Global container terminal and international multimodal logistics network",
    description:
      "The changing global economy opened new possibilities beyond traditional engineering and manufacturing. TAKNISER evolved into international sourcing, procurement, supply chain management, technology integration, and global logistics, connecting manufacturers, suppliers, and markets across continents.",
    conclusion:
      "Strategic trading corridors spanning Europe, Asia, and the Americas strengthened TAKNISER's ability to connect industrial demand with reliable sources of products, technologies, and expertise.",
  },
  {
    period: "Early 21st Century",
    title: "Diversified Global Conglomerate",
    image: "/clean_corporate_hq_branded.jpg",
    imageAlt: "Modern global conglomerate headquarters and technology operations complex",
    description:
      "Entering the new millennium, TAKNISER expanded beyond individual industries and markets to develop a more diversified global operating model. Through strategic partnerships, acquisitions, international sourcing, and market development, TAKNISER established a growing network of regional operations and international relationships — bringing engineering, manufacturing, trade, logistics, technology, and commercial expertise together within one increasingly connected organization.",
    conclusion:
      "Today, this evolution forms the foundation for TAKNISER's next chapter: a truly integrated global industrial ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Page Hero - Siemens Executive Dark with Clear Background Image */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-[#001822] text-white border-b border-slate-800">
        {/* Clear Background Imagery with Legibility Fade */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hesse_heritage.jpg"
            alt="German Engineering Heritage"
            fill
            priority
            className="object-cover opacity-60 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase rounded-none bg-[#002d3b]/70 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 text-[#009999]" />
            <span>Corporate Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            A CENTURY OF <span className="text-[#009999]">GERMAN HERITAGE</span>
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-normal">
            For more than a century, TAKNISER has embodied the enduring spirit of German engineering — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define not simply how we work, but who we are.
          </p>
        </div>
      </section>

      {/* Heritage Statement - Solid White Background with Integrated Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#009999] font-bold text-xs uppercase tracking-wider">
                <Landmark className="w-4 h-4 text-[#009999]" />
                <span>Hesse (Hessen), Germany — Early 20th Century</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] leading-tight uppercase">
                Where German Engineering Excellence Was Born
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  The TAKNISER story traces its roots back more than a century to Hesse (Hessen), Germany — a region shaped by industrial ingenuity, engineering craftsmanship, and technological advancement. It was here that generations of engineers established a tradition of uncompromising quality, technical expertise, and dependable industrial solutions.
                </p>
                <p>
                  During one of Europe’s defining eras of industrial transformation, TAKNISER was dedicated to the engineering, modernization, maintenance, and technical support of diesel power generation systems. Its work helped deliver dependable power to factories, transportation networks, public infrastructure, and other essential industries — supporting the foundations of a rapidly evolving industrial society.
                </p>
                <p>
                  From the outset, TAKNISER embraced the German philosophy of <strong className="text-[#002d3b]">&ldquo;Qualität vor Quantität&rdquo;</strong> — Quality before Quantity. Every solution was guided by meticulous craftsmanship, disciplined execution, engineering precision, and an unwavering commitment to reliability.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Heritage Image */}
              <div className="relative h-64 sm:h-72 w-full border border-slate-200 overflow-hidden shadow-sm">
                <Image
                  src="/about_hesse_heritage.jpg"
                  alt="Historic Hesse German precision engineering workshop"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#002d3b]/90 via-[#002d3b]/50 to-transparent p-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#009999] uppercase">
                    Hesse, Germany &bull; Early 20th Century
                  </span>
                </div>
              </div>

              <div className="bg-[#f4f5f6] border border-slate-200 p-6 rounded-none">
                <blockquote className="text-base sm:text-lg font-semibold text-[#002d3b] italic leading-relaxed border-l-4 border-[#009999] pl-4">
                  &ldquo;These principles were never simply standards of engineering. They became the foundation upon which TAKNISER was built — and the enduring DNA of the brand.&rdquo;
                </blockquote>
              </div>

              {/* Rectangular Grids: 30+ RHQ and 7 Core Divisions */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Heritage", value: "100+ Years", icon: Landmark },
                  { label: "Origin", value: "Hesse, Germany", icon: Shield },
                  { label: "Territories", value: "190+", icon: Globe },
                  { label: "Regional HQs", value: "30+ RHQ", icon: Building2 },
                  { label: "Core Divisions", value: "7 Core Divisions", icon: Layers },
                ].map((stat, sIdx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`bg-[#f4f5f6] border border-slate-200 rounded-none p-4 text-center shadow-none ${sIdx === 4 ? "col-span-2 sm:col-span-2" : ""
                        }`}
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1 text-[#009999]">
                        <Icon className="w-4 h-4" />
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#009999]">{stat.value}</span>
                      </div>
                      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-20 bg-[#f4f5f6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase">
              A Century of <span className="text-[#009999]">Industrial Evolution</span>
            </h2>
            <p className="text-slate-650 font-medium text-base sm:text-lg max-w-3xl mx-auto">
              The TAKNISER corporate journey across more than 100 years — from German engineering foundations to a connected global industrial ecosystem.
            </p>
          </div>

          <div className="space-y-12">
            {TIMELINE_PAST.map((item, idx) => (
              <div
                key={item.period}
                className="bg-white border border-slate-200 rounded-none shadow-none overflow-hidden transition-all duration-300 hover:border-[#009999]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch`}>
                  {/* Integrated Era Image */}
                  <div
                    className={`relative min-h-[260px] lg:min-h-full lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute bottom-3 left-4 right-4 z-10 lg:hidden">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#009999] bg-[#002d3b]/90 px-2.5 py-1">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Content (No serial numbers) */}
                  <div
                    className={`p-7 sm:p-9 lg:col-span-7 flex flex-col justify-between space-y-5 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <div className="space-y-3">
                      <div className="border-b border-slate-100 pb-3">
                        <span className="text-xs font-bold text-[#009999] uppercase tracking-widest">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#002d3b]">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 bg-[#f8fafc] -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-6 border-l-4 border-l-[#009999]">
                      <p className="text-xs sm:text-sm font-semibold text-[#002d3b] leading-relaxed">
                        {item.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Actions Bar - Dark Blue Banner */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 text-white">
          <h2 className="text-2xl sm:text-4xl font-black uppercase">
            Discover the TAKNISER Ecosystem
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Connecting engineering, manufacturing, sourcing, logistics, and technology across 190+ countries through 30+ Regional Headquarters and 7 Core Divisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/divisions"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>Explore 7 Core Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/global-network"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#009999]" />
              <span>Explore Global Network (30+ RHQ)</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


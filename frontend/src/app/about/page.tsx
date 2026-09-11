import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Landmark, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About TAKNISER — 100+ Years of German Engineering Heritage",
  description:
    "Discover the century-long heritage of TAKNISER, beginning in Hesse (Hessen), Germany — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define who we are.",
};

const TIMELINE_PAST = [
  {
    period: "Early 20th Century",
    title: "The German Foundation",
    description:
      "The TAKNISER story traces its roots to Hesse (Hessen), Germany, during a defining era of European industrial transformation. Built upon the principles of precision, reliability, and engineering excellence, TAKNISER developed expertise in diesel power generation systems, supporting the continuous operation of factories, transportation networks, public infrastructure, and essential industries.",
    conclusion:
      "This foundation established a philosophy that would remain central to TAKNISER for generations: engineering with purpose, reliability without compromise.",
  },
  {
    period: "Mid 20th Century",
    title: "Industrial Manufacturing Expansion",
    description:
      "As industries evolved, so did TAKNISER. Guided by the principle of “Qualität vor Quantität” — Quality before Quantity, the organization expanded its industrial capabilities across a broader range of manufacturing and engineering applications.",
    conclusion:
      "Meticulous craftsmanship, disciplined execution, technical expertise, and precision became hallmarks of the TAKNISER approach — creating solutions designed not merely to perform, but to endure.",
  },
  {
    period: "Late 20th Century",
    title: "International Sourcing & Procurement",
    description:
      "The changing global economy opened new possibilities beyond traditional engineering and manufacturing. TAKNISER evolved into international sourcing, procurement, supply chain management, technology integration, and global logistics, connecting manufacturers, suppliers, and markets across continents.",
    conclusion:
      "Strategic trading corridors spanning Europe, Asia, and the Americas strengthened TAKNISER's ability to connect industrial demand with reliable sources of products, technologies, and expertise.",
  },
  {
    period: "Early 21st Century",
    title: "Diversified Global Conglomerate",
    description:
      "Entering the new millennium, TAKNISER expanded beyond individual industries and markets to develop a more diversified global operating model. Through strategic partnerships, acquisitions, international sourcing, and market development, TAKNISER established a growing network of regional operations and international relationships — bringing engineering, manufacturing, trade, logistics, technology, and commercial expertise together within one increasingly connected organization.",
    conclusion:
      "Today, this evolution forms the foundation for TAKNISER's next chapter: a truly integrated global industrial ecosystem.",
  },
];

const VISION_2046_PILLARS = [
  {
    code: "01",
    title: "ONE GLOBAL NETWORK",
    desc: "A connected network of regional headquarters, operating companies, strategic partners, manufacturers, distributors, and customers — working together as one global ecosystem.",
  },
  {
    code: "02",
    title: "ONE INDUSTRIAL ECOSYSTEM",
    desc: "Integrating engineering, manufacturing, sourcing, procurement, logistics, technology, and distribution to create more efficient and resilient global supply chains.",
  },
  {
    code: "03",
    title: "ONE DIGITAL CONNECTED WORLD",
    desc: "Using digital technologies, intelligent systems, data, and automation to connect markets, operations, customers, and partners in real time.",
  },
  {
    code: "04",
    title: "ONE STANDARD OF EXCELLENCE",
    desc: "Carrying forward the principles that shaped TAKNISER from its earliest roots — Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen — while continuously raising the standard for a changing world.",
  },
  {
    code: "05",
    title: "ONE RESPONSIBLE FUTURE",
    desc: "Building growth that creates lasting value for people, communities, industries, and the planet — with sustainability and responsible business embedded into the TAKNISER ecosystem.",
  },
  {
    code: "06",
    title: "ONE GLOBE, SHARED OPPORTUNITY",
    desc: "Breaking down traditional boundaries between markets and industries to create new opportunities for collaboration, innovation, investment, and sustainable economic development.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#f4f5f6] text-slate-800">
      {/* Page Hero - Siemens Dark Blue panel */}
      <section className="relative py-20 overflow-hidden bg-[#002d3b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase mb-6 rounded-none bg-transparent">
            <Shield className="w-3.5 h-3.5 text-[#009999]" />
            <span>Corporate Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            About <span className="text-[#009999]">TAKNISER</span>
          </h1>
          <p className="text-slate-200 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            For more than a century, TAKNISER has embodied the enduring spirit of German engineering — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define not simply how we work, but who we are.
          </p>
        </div>
      </section>

      {/* Heritage Statement - Solid White Background */}
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
              <div className="bg-[#f4f5f6] border border-slate-200 p-8 rounded-none">
                <blockquote className="text-lg sm:text-xl font-semibold text-[#002d3b] italic leading-relaxed border-l-4 border-[#009999] pl-5">
                  &ldquo;These principles were never simply standards of engineering. They became the foundation upon which TAKNISER was built — and the enduring DNA of the brand.&rdquo;
                </blockquote>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Heritage", value: "100+ Years" },
                  { label: "Origin", value: "Hesse, Germany" },
                  { label: "Territories", value: "190+" },
                  { label: "Regional HQs", value: "29" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#f4f5f6] border border-slate-200 rounded-none p-4 text-center shadow-none">
                    <div className="text-2xl font-bold text-[#009999] font-mono">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-20 bg-[#f4f5f6] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase">
              A Century of <span className="text-[#009999]">Industrial Evolution</span>
            </h2>
            <p className="text-slate-650 font-medium text-base sm:text-lg max-w-3xl mx-auto">
              The TAKNISER corporate journey across more than 100 years — from German engineering foundations to a connected global industrial ecosystem.
            </p>
          </div>

          <div className="relative">
            {/* Timeline vertical bar */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-300" />

            <div className="space-y-12">
              {/* Timeline Items 1 to 4 */}
              {TIMELINE_PAST.map((item, idx) => (
                <div key={idx} className="relative flex gap-6 pl-16">
                  {/* Dot */}
                  <div className="absolute left-4 top-3 w-5 h-5 bg-[#002d3b] border-2 border-[#009999] rounded-none shrink-0" />

                  <div className="bg-white p-7 sm:p-8 border border-slate-200 flex-1 rounded-none shadow-none text-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold text-[#009999] uppercase tracking-widest">{item.period}</span>
                      <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#002d3b] mb-1">{item.title}</h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    <p className="pt-2 border-t border-slate-100 text-xs sm:text-sm font-semibold text-[#002d3b] leading-relaxed">
                      {item.conclusion}
                    </p>
                  </div>
                </div>
              ))}

              {/* Milestone 5: Vision 2046: TAKNISER ONE GLOBE (Full Verbatim Content) */}
              <div className="relative flex gap-6 pl-16">
                {/* Dot */}
                <div className="absolute left-4 top-3 w-5 h-5 bg-[#009999] border-2 border-white shadow-md rounded-none shrink-0" />

                <div className="bg-white p-8 sm:p-10 border-2 border-[#009999] flex-1 rounded-none shadow-sm text-slate-800 space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-[#009999] uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#009999]" />
                      Vision 2046
                    </span>
                    <span className="text-xs font-mono font-bold text-[#009999]">05</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase">
                      Vision 2046: <span className="text-[#009999]">TAKNISER ONE GLOBE</span>
                    </h3>
                    <div className="text-sm font-bold text-[#009999] uppercase tracking-wider mt-1">
                      One Globe. One Ecosystem. One Future.
                    </div>
                  </div>

                  <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                    <p>
                      TAKNISER ONE GLOBE is our long-term vision for 2046 — a globally integrated industrial ecosystem where people, products, technology, capital, knowledge, and opportunity move seamlessly across borders.
                    </p>
                    <p>
                      Our vision extends beyond geographic expansion. It is about creating a connected organization in which every market, capability, and partnership contributes to a greater global network.
                    </p>
                    <p>
                      By 2046, TAKNISER envisions an ecosystem where engineering, manufacturing, sourcing, procurement, logistics, technology, distribution, and international trade operate as interconnected parts of one global platform.
                    </p>
                  </div>

                  {/* Our Vision for 2046 (01 to 06 Pillars) */}
                  <div className="pt-6 border-t border-slate-200 space-y-6">
                    <div className="border-b border-slate-200 pb-2">
                      <h4 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase">
                        Our Vision for <span className="text-[#009999]">2046</span>
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {VISION_2046_PILLARS.map((item) => (
                        <div key={item.code} className="bg-[#f4f5f6] border border-slate-200 p-5 space-y-2 rounded-none">
                          <div className="text-lg font-mono font-black text-[#009999]">{item.code}</div>
                          <h5 className="text-sm font-black text-[#002d3b] uppercase">{item.title}</h5>
                          <p className="text-xs text-slate-650 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2046 and Beyond Section */}
                  <div className="pt-6 border-t border-slate-200 space-y-5">
                    <h4 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase">
                      2046 <span className="text-[#009999]">and Beyond</span>
                    </h4>

                    <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                      <p className="font-semibold text-[#002d3b]">
                        TAKNISER ONE GLOBE is not simply a destination. It is an evolving global platform.
                      </p>
                      <p>
                        By 2046, we aim to create an organization where geographical boundaries no longer define what is possible — where expertise from one part of the world can create opportunity in another, where technology connects capability with demand, and where global partnerships accelerate progress.
                      </p>
                      <p>
                        From our German engineering heritage to our vision of a connected global future, the TAKNISER journey continues with the same fundamental belief:
                      </p>
                      <div className="p-4 bg-[#001822] border-l-4 border-[#009999] text-white font-bold text-base sm:text-lg italic uppercase tracking-wide">
                        Build with precision. Operate with integrity. Connect without boundaries. Create lasting value.
                      </div>
                      <div className="pt-2 text-center">
                        <div className="text-xl font-black text-[#002d3b] uppercase tracking-tight">
                          TAKNISER ONE GLOBE
                        </div>
                        <div className="text-sm font-bold text-[#009999] uppercase tracking-widest mt-0.5">
                          One Heritage. One Global Ecosystem. One Future.
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Actions Bar - Dark Blue Banner */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 text-white">
          <h2 className="text-2xl sm:text-4xl font-black uppercase">
            Experience TAKNISER ONE GLOBE
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Connecting engineering, manufacturing, sourcing, logistics, and technology across 190+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/vision-2046"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>Explore Vision 2046 Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/global-network"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#009999]" />
              <span>Explore Global Network</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

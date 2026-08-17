import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Globe, Landmark } from "lucide-react";
import { CORPORATE_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About TAKNISER — 100+ Years of German Engineering Heritage",
  description:
    "Discover the century-long heritage of TAKNISER, beginning in Hesse (Hessen), Germany. From diesel power generation systems to a global industrial conglomerate serving 190+ countries.",
};

const TIMELINE = [
  { period: "Early 20th Century", title: "The German Foundation", description: "The TAKNISER story began in Hesse (Hessen), Germany. Engineers built a reputation for uncompromising quality in diesel power generation systems, ensuring uninterrupted power for factories, transport networks, and public infrastructure across Europe." },
  { period: "Mid 20th Century", title: "Industrial Manufacturing Expansion", description: "Following the philosophy of 'Qualität vor Quantität', TAKNISER expanded into broader industrial manufacturing, meticulous craftsmanship, disciplined execution, and precision engineering across multiple sectors." },
  { period: "Late 20th Century", title: "International Sourcing & Procurement", description: "The organization evolved into international sourcing, procurement, supply chain management, technology integration, and global logistics — establishing trading corridors across Europe, Asia, and the Americas." },
  { period: "Early 21st Century", title: "Diversified Global Conglomerate", description: "TAKNISER transformed into a diversified industrial organization, building 29+ Regional Headquarters and operational presence in 190+ countries across 6 continents through strategic partnerships and acquisitions." },
  { period: "Vision 2046", title: "TAKNISER ONE GLOBE", description: "Operating under the banner of TAKNISER ONE GLOBE — one integrated global industrial ecosystem where engineering, manufacturing, sourcing, logistics, technology, and international trade operate seamlessly without geographical boundaries." },
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
          <p className="text-slate-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            For more than a century, TAKNISER has represented the enduring legacy of German engineering — built upon the timeless principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen.
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
                  The TAKNISER story began more than 100 years ago in the historic state of Hesse (Hessen), Germany, where generations of engineers built a reputation for uncompromising quality, technical expertise, and dependable industrial solutions.
                </p>
                <p>
                  During one of Europe&apos;s most significant periods of industrial growth, TAKNISER specialized in the engineering, modernization, maintenance, and technical support of diesel power generation systems — ensuring uninterrupted power for factories, transportation networks, public infrastructure, and essential industries.
                </p>
                <p>
                  From the very beginning, TAKNISER embraced the German philosophy of <strong className="text-[#002d3b]">&ldquo;Qualität vor Quantität&rdquo;</strong> — Quality before Quantity. Every engineering solution reflected meticulous craftsmanship, disciplined execution, precision manufacturing, and an unwavering commitment to reliability.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#f4f5f6] border border-slate-200 p-6 rounded-none">
                <blockquote className="text-xl font-semibold text-[#002d3b] italic leading-relaxed border-l-4 border-[#009999] pl-5">
                  &ldquo;These values became more than engineering principles — they became the DNA of the TAKNISER brand.&rdquo;
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

      {/* Corporate Timeline - Light Gray Panel */}
      <section className="py-20 bg-[#f4f5f6] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase">
              A Century of <span className="text-[#009999]">Industrial Evolution</span>
            </h2>
            <p className="text-slate-650 mt-4 font-medium">The TAKNISER corporate journey across more than 100 years</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-300" />

            <div className="space-y-10">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative flex gap-6 pl-16">
                  {/* Dot */}
                  <div className="absolute left-4 top-2.5 w-5 h-5 bg-[#002d3b] border-2 border-[#009999] rounded-none shrink-0" />
                  
                  <div className="glass-panel bg-white p-6 border border-slate-200 flex-1 rounded-none shadow-none text-slate-800">
                    <div className="text-xs font-bold text-[#009999] uppercase tracking-wider mb-1">{item.period}</div>
                    <h3 className="text-lg font-bold text-[#002d3b] mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Today - Solid White */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase">
            Our Legacy. Our Scale. <span className="text-[#009999]">Our Future.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {CORPORATE_INFO.vision2046.split("while")[0]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vision-2046"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>Vision 2046 Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/global-network"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-dark flex items-center justify-center gap-2"
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

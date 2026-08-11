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
    <div className="pt-24 min-h-screen bg-[#070b14] text-slate-100">
      {/* Page Hero */}
      <section className="relative py-20 overflow-hidden bg-grid-pattern">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full german-badge text-xs font-bold tracking-wider uppercase mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>Corporate Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            About <span className="gradient-text-blue">TAKNISER</span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            For more than a century, TAKNISER has represented the enduring legacy of German engineering — built upon the timeless principles of Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen.
          </p>
        </div>
      </section>

      {/* Heritage Statement */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Hesse (Hessen), Germany — Early 20th Century</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Where German Engineering Excellence Was Born
              </h2>
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  The TAKNISER story began more than 100 years ago in the historic state of Hesse (Hessen), Germany, where generations of engineers built a reputation for uncompromising quality, technical expertise, and dependable industrial solutions.
                </p>
                <p>
                  During one of Europe&apos;s most significant periods of industrial growth, TAKNISER specialized in the engineering, modernization, maintenance, and technical support of diesel power generation systems — ensuring uninterrupted power for factories, transportation networks, public infrastructure, and essential industries.
                </p>
                <p>
                  From the very beginning, TAKNISER embraced the German philosophy of <strong className="text-white">&ldquo;Qualität vor Quantität&rdquo;</strong> — Quality before Quantity. Every engineering solution reflected meticulous craftsmanship, disciplined execution, precision manufacturing, and an unwavering commitment to reliability.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-panel-dark rounded-2xl p-6 border border-white/10">
                <blockquote className="text-xl font-semibold text-white italic leading-relaxed border-l-4 border-amber-400 pl-5">
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
                  <div key={stat.label} className="glass-panel-dark rounded-xl p-4 border border-white/10 text-center">
                    <div className="text-2xl font-extrabold text-sky-400 font-mono">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline */}
      <section className="py-20 bg-[#0b1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              A Century of <span className="gradient-text-gold">Industrial Evolution</span>
            </h2>
            <p className="text-slate-400 mt-4">The TAKNISER corporate journey across more than 100 years</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-sky-400 to-transparent" />

            <div className="space-y-10">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative flex gap-6 pl-16">
                  {/* Dot */}
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-slate-900 border-2 border-amber-400 shadow-lg shadow-amber-400/30 shrink-0" />
                  
                  <div className="glass-panel-dark rounded-2xl p-6 border border-white/10 flex-1">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">{item.period}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Today */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Our Legacy. Our Scale. <span className="gradient-text-blue">Our Future.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {CORPORATE_INFO.vision2046.split("while")[0]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/vision-2046" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 hover:scale-105 transition-all group shadow-lg shadow-amber-500/30">
              <span>Vision 2046 Roadmap</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/global-network" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl glass-panel glass-panel-hover text-slate-200 border border-white/10">
              <Globe className="w-5 h-5 text-sky-400" />
              <span>Explore Global Network</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

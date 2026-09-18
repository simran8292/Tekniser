import Image from "next/image";
import { CAPABILITIES } from "@/lib/data";
import {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Compass, Factory, Search, ShoppingCart, HardHat, Network,
  Ship, Share2, Cpu, Zap, Landmark, Wrench,
};

const capabilityImages: Record<number, string> = {
  0: "/chain_card_1_engineering.jpg",
  1: "/clean_robotics.jpg",
  2: "/vision_pillar_1.jpg",
  3: "/about_logistics_port.jpg",
  4: "/chain_card_5_epc.jpg",
  5: "/chain_card_6_truck.jpg",
  6: "/platform_trading.jpg",
  7: "/chain_card_7_warehouse.jpg",
  8: "/vision_pillar_3.jpg",
  9: "/engine_stage_3_discover.jpg",
  10: "/vision_pillar_5.jpg",
  11: "/vision_pillar_4.jpg",
};

export default function CapabilitiesSection() {
  const displayCapabilities = CAPABILITIES;

  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-[#009999] inline-block rounded-full" />
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                END-TO-END INDUSTRIAL VALUE CHAIN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#002d3b] tracking-tight">
              Complete Innovation &amp; <br className="hidden sm:inline" />
              <span className="text-[#009999]">Value Chain</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1 max-w-2xl">
              From breakthrough innovation, engineering and manufacturing through to logistics and digital transformation — TAKNISER delivers across the full industrial value chain.
            </p>
          </div>
        </div>

        {/* Main Value Chain Grid: 63% Cards (Left) + 37% Hero Showcase (Right) - Perfect Height Balance */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Left: 63% Width - All 12 Split Cards in 2 Columns */}
          <div className="w-full xl:w-[63%] 2xl:w-[64%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {displayCapabilities.map((cap, idx) => {
                const IconComponent = iconMap[cap.icon] || Compass;
                const cardImg = capabilityImages[idx] || "/clean_robotics.jpg";
                return (
                  <div
                    key={cap.title}
                    className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,153,153,0.12)] hover:border-[#009999]/40 transition-all duration-300 flex items-stretch justify-between gap-3 group cursor-pointer"
                  >
                    {/* Left Text Side */}
                    <div className="flex-1 flex flex-col justify-between min-w-0 pr-1">
                      <div className="space-y-1.5">
                        {/* Icon Badge */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#e6f7f7] text-[#009999] flex items-center justify-center border border-[#009999]/20 shrink-0 group-hover:bg-[#009999] group-hover:text-white transition-colors duration-300">
                          <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[13px] sm:text-[14px] font-bold text-[#002230] leading-snug tracking-tight group-hover:text-[#009999] transition-colors pt-0.5">
                          {cap.title}
                        </h3>

                        {/* Description - Full visibility without clipping */}
                        <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Image Side */}
                    <div className="relative w-[110px] sm:w-[130px] md:w-[135px] h-full min-h-[95px] rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm self-stretch">
                      <Image
                        src={cardImg}
                        alt={cap.title}
                        fill
                        sizes="(max-width: 640px) 120px, 150px"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: 37% Width - Exact Hero Showcase Visual from Reference (Sticky on Desktop) */}
          <div className="w-full xl:w-[37%] 2xl:w-[36%] xl:sticky xl:top-24 flex flex-col">
            <div className="relative w-full rounded-3xl xl:rounded-[36px] overflow-hidden shadow-xl border border-slate-200/80 bg-[#00141e] group">
              <Image
                src="/exact_right_hero_clean.jpg"
                alt="Complete Industrial Value Chain &amp; Logistics Network"
                width={860}
                height={1184}
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
              />

              {/* Bottom Real HTML Dark Card - Razor Sharp & Crystal Clear */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-10 bg-[#001824]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-white/15 text-white shadow-2xl">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-[2px] bg-[#00cccc]" />
                    <span className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#00cccc] uppercase tracking-wider">
                      FROM INNOVATION TO IMPACT
                    </span>
                  </div>
                  <h3 className="text-[15px] sm:text-[17px] font-serif font-bold text-white tracking-tight leading-snug">
                    Building a Smarter, <br />
                    <span className="text-[#00cccc]">More Connected</span> <br />
                    Industrial Future.
                  </h3>
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-slate-200 leading-relaxed border-t border-white/10 pt-2.5 mt-2">
                  By integrating technology, expertise and global partnerships, TAKNISER creates end-to-end solutions that move industries forward &mdash; responsibly and sustainably.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

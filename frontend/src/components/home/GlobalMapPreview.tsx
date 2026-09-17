"use client";

import { useState } from "react";
import Image from "next/image";
import { GLOBAL_NETWORK_LOCATIONS } from "@/lib/data";

const REGION_COLORS: Record<string, string> = {
  Europe: "#009999",
  "North America": "#00cccc",
  "Latin America": "#10b981",
  Africa: "#d97706",
  "Middle East": "#009999",
  Asia: "#8b5cf6",
  Oceania: "#06b6d4",
};

export default function GlobalMapPreview() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    title: string;
    region: string;
    type?: string;
    desc?: string;
  } | null>(null);

  const regions = [...new Set(GLOBAL_NETWORK_LOCATIONS.map((l) => l.region))];
  const filteredLocations = activeRegion
    ? GLOBAL_NETWORK_LOCATIONS.filter((l) => l.region === activeRegion)
    : GLOBAL_NETWORK_LOCATIONS;

  return (
    <section className="py-24 bg-[#002d3b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-wider uppercase rounded-none bg-transparent">
            <span>Global Operational Presence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-wide uppercase">
            One Globe. <span className="font-bold text-[#009999]">One Network.</span>
          </h2>
          <p className="text-slate-200 text-base">
            TAKNISER ONE GLOBE operates through 30 Regional Headquarters, strategic logistics hubs, and business offices across 190+ countries and 6 continents.
          </p>
        </div>

        {/* Region Filter Tabs - Siemens Square Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveRegion(null)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none border ${
              !activeRegion
                ? "bg-[#009999] border-[#009999] text-white"
                : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white bg-transparent"
            }`}
          >
            All Regions
          </button>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(activeRegion === region ? null : region)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-none border"
              style={
                activeRegion === region
                  ? { backgroundColor: "#009999", borderColor: "#009999", color: "#ffffff" }
                  : { borderColor: "rgba(255,255,255,0.15)", color: "#cbd5e1", backgroundColor: "transparent" }
              }
            >
              {region}
            </button>
          ))}
        </div>

        {/* SVG World Map Wrapper - Flat Rectangular */}
        <div className="relative bg-[#001822] border border-slate-800 overflow-hidden p-2 sm:p-4 rounded-none shadow-none">
          <div className="relative w-full aspect-[2/1] bg-[#001b24] rounded-none overflow-hidden">
            {/* Real world map background image */}
            <Image
              src="/world_map_dark.png"
              alt="TAKNISER Global Operational Map"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Interactive SVG overlay */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full z-10"
              style={{ background: "transparent" }}
            >

              {/* Location Markers */}
              {filteredLocations.map((loc, idx) => {
                const cx = (loc.coordinates.x / 100) * 1000;
                const cy = (loc.coordinates.y / 100) * 500;
                const color = REGION_COLORS[loc.region] || "#009999";
                const isHQ = loc.type === "HQ";
                const isLogistics = loc.type === "LOGISTICS_HUB";

                return (
                  <g
                    key={idx}
                    className="cursor-pointer group"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.closest("svg")!.getBoundingClientRect();
                      const svgX = (cx / 1000) * rect.width;
                      const svgY = (cy / 500) * rect.height;
                      setTooltip({
                        x: svgX,
                        y: svgY,
                        title: loc.title,
                        region: loc.region,
                        type: loc.type,
                        desc: loc.description,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  >
                    {/* Pulse ring for HQ */}
                    {isHQ && (
                      <>
                        <circle cx={cx} cy={cy} r="18" fill={color + "1A"} stroke={color} strokeWidth="1" opacity="0.6" />
                        <circle cx={cx} cy={cy} r="10" fill={color + "22"} stroke={color} strokeWidth="1.5" opacity="0.8" />
                      </>
                    )}

                    {/* Vector Office Building Pin Graphic for Points */}
                    {isHQ ? (
                      <g transform={`translate(${cx - 26}, ${cy - 44})`}>
                        {/* Global HQ Prominent Vector Building */}
                        <image
                          href="/office_vector_transparent.png"
                          width="52"
                          height="44"
                          className="invert brightness-150"
                        />
                      </g>
                    ) : (
                      <g transform={`translate(${cx - 19}, ${cy - 30})`}>
                        {/* Regional Office Enhanced Vector Building */}
                        <image
                          href="/office_vector_transparent.png"
                          width="38"
                          height="30"
                          className="invert brightness-125 opacity-90 group-hover:opacity-100 group-hover:scale-115 transition-transform"
                        />
                      </g>
                    )}

                    {/* Base Pin Indicator Dot */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHQ ? 4 : 3}
                      fill={color}
                      stroke="#001822"
                      strokeWidth={1}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Rich Hover Tooltip with Office Vector */}
            {tooltip && (
              <div
                className="absolute z-20 bg-[#001822]/95 backdrop-blur-md border border-[#009999] rounded-none p-3 text-xs shadow-2xl pointer-events-none flex items-center gap-3"
                style={{
                  left: `${Math.min(Math.max(tooltip.x, 20), 80)}%`,
                  top: `${Math.max(tooltip.y - 15, 8)}%`,
                  transform: "translate(-50%, -100%)",
                  whiteSpace: "nowrap",
                }}
              >
                {/* Office Vector Thumbnail inside Tooltip */}
                <div className="w-14 h-12 relative shrink-0 bg-[#002d3b] border border-slate-700 p-1 flex items-center justify-center">
                  <Image
                    src="/office_vector_transparent.png"
                    alt="Office Vector"
                    fill
                    className="object-contain filter invert brightness-125 p-0.5"
                  />
                </div>
                <div>
                  <div className="font-bold text-white text-xs mb-0.5">{tooltip.title}</div>
                  <div className="text-[11px] font-mono" style={{ color: REGION_COLORS[tooltip.region] || "#00cccc" }}>
                    {tooltip.region} • {tooltip.type}
                  </div>
                  {tooltip.desc && (
                    <div className="text-[10px] text-slate-300 font-normal max-w-xs truncate mt-0.5">
                      {tooltip.desc}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row - Flat rectangular containers */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
          {[
            { label: "Global HQ", value: "1", color: "text-white" },
            { label: "Regional HQs", value: "30", color: "text-[#009999]" },
            { label: "Countries & Territories", value: "190+", color: "text-[#009999]" },
            { label: "Continents", value: "6", color: "text-white" },
            { label: "Logistics Hubs", value: "3+", color: "text-[#009999]" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#001822] border border-slate-800 rounded-none p-4 text-center shadow-none">
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color} font-mono`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Location List */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:hidden">
          {filteredLocations.slice(0, 9).map((loc, idx) => (
            <div key={idx} className="bg-[#001822] border border-slate-800 rounded-none p-3 shadow-none">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 shrink-0"
                  style={{ backgroundColor: REGION_COLORS[loc.region] || "#009999" }}
                />
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{loc.title}</div>
                  <div className="text-[11px] text-slate-400">{loc.region} • {loc.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

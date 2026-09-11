"use client";

import { useState, useMemo } from "react";
import {
  MapPin,
  Building2,
  Ship,
  Search,
  CheckCircle2,
  Globe2,
} from "lucide-react";

export interface NetworkHubItem {
  name: string;
  country: string;
  region: string;
  role: string;
  type: "HQ" | "RHQ" | "LOGISTICS HUB";
}

export const NETWORK_HUBS: NetworkHubItem[] = [
  {
    name: "Global HQ – TAKNISER GmbH",
    country: "Germany",
    region: "Europe",
    role: "Global Headquarters & Central Engineering Center (Hesse, Germany)",
    type: "HQ",
  },
  {
    name: "European RHQ Network (10 RHQs)",
    country: "Germany",
    region: "Europe",
    role: "10 Strategic Regional Headquarters covering Western & Eastern Europe",
    type: "RHQ",
  },
  {
    name: "TAKNISER Sterling Americana LLC",
    country: "United States",
    region: "North America",
    role: "North American Regional HQ & Strategic Procurement Division",
    type: "RHQ",
  },
  {
    name: "TAKNISER Latin America – Mexico Hub",
    country: "Mexico",
    region: "Latin America",
    role: "Manufacturing & North-South Logistics Coordination",
    type: "RHQ",
  },
  {
    name: "TAKNISER Panama Regional Office",
    country: "Panama",
    region: "Latin America",
    role: "Maritime Trade & Canal Logistics Center",
    type: "RHQ",
  },
  {
    name: "TAKNISER Chile Mineral Operations",
    country: "Chile",
    region: "Latin America",
    role: "Mining & Critical Minerals Sourcing Hub",
    type: "RHQ",
  },
  {
    name: "TAKNISER Brazil Operations",
    country: "Brazil",
    region: "Latin America",
    role: "AgTech & Industrial Sourcing Headquarters",
    type: "RHQ",
  },
  {
    name: "TAKNISER West Africa Hub",
    country: "Ghana",
    region: "Africa",
    role: "Infrastructure & Mineral Trade Office",
    type: "RHQ",
  },
  {
    name: "TAKNISER East Africa Hub",
    country: "Kenya",
    region: "Africa",
    role: "Energy & Agricultural Technology Division",
    type: "RHQ",
  },
  {
    name: "TAKNISER Southern Africa RHQ",
    country: "South Africa",
    region: "Africa",
    role: "Industrial Equipment & Mining Supply Hub",
    type: "RHQ",
  },
  {
    name: "JAFZA Logistics Hub & Middle East RHQ",
    country: "UAE",
    region: "Middle East",
    role: "Primary Global Distribution & Free Zone Logistics Center",
    type: "LOGISTICS HUB",
  },
  {
    name: "TAKNISER Saudi Arabia Operations",
    country: "Saudi Arabia",
    region: "Middle East",
    role: "Infrastructure, EPC & Energy Trade Headquarters",
    type: "RHQ",
  },
  {
    name: "TAKNISER South Asia RHQ",
    country: "India",
    region: "Asia",
    role: "Engineering Center & Industrial Sourcing Office",
    type: "RHQ",
  },
  {
    name: "TAKNISER Southeast Asia RHQ",
    country: "Singapore",
    region: "Asia",
    role: "Financial & International Global Trading Center",
    type: "RHQ",
  },
  {
    name: "TAKNISER Greater China Hub",
    country: "China",
    region: "Asia",
    role: "Manufacturing & Supply Chain Coordination",
    type: "RHQ",
  },
  {
    name: "TAKNISER Hong Kong Trading",
    country: "Hong Kong",
    region: "Asia",
    role: "Trade Finance & Asia Logistics Office",
    type: "RHQ",
  },
  {
    name: "TAKNISER Japan Robotics Office",
    country: "Japan",
    region: "Asia",
    role: "Robotics & High-Tech Components Division",
    type: "RHQ",
  },
  {
    name: "TAKNISER Eurasia Bridge Hub",
    country: "Türkiye",
    region: "Asia",
    role: "Eurasian Cross-Border Trade & Logistics Center",
    type: "RHQ",
  },
  {
    name: "TAKNISER Oceania RHQ",
    country: "Australia",
    region: "Oceania",
    role: "Mining & Heavy Equipment Operations Hub",
    type: "RHQ",
  },
];

const REGIONS = [
  "All",
  "Europe",
  "North America",
  "Latin America",
  "Africa",
  "Middle East",
  "Asia",
  "Oceania",
];

export default function RegionalHeadquartersList() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHubs = useMemo(() => {
    return NETWORK_HUBS.filter((hub) => {
      const matchesRegion =
        selectedRegion === "All" || hub.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        hub.name.toLowerCase().includes(q) ||
        hub.country.toLowerCase().includes(q) ||
        hub.role.toLowerCase().includes(q) ||
        hub.region.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search & Region Tabs */}
      <div className="bg-white border border-slate-200 p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search hubs, countries, or capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-slate-300 focus:border-[#009999] focus:outline-none bg-slate-50 text-slate-800 rounded-none placeholder:text-slate-400"
            />
          </div>

          <div className="text-xs font-mono text-slate-500 self-center md:self-auto">
            Showing <span className="font-bold text-[#002d3b]">{filteredHubs.length}</span> of {NETWORK_HUBS.length} Strategic Hubs
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {REGIONS.map((region) => {
            const count =
              region === "All"
                ? NETWORK_HUBS.length
                : NETWORK_HUBS.filter((h) => h.region === region).length;
            const isSelected = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none border ${
                  isSelected
                    ? "bg-[#002d3b] border-[#002d3b] text-white"
                    : "bg-[#f8fafc] border-slate-200 text-slate-600 hover:border-[#009999] hover:text-[#002d3b]"
                }`}
              >
                {region} <span className="ml-1 text-[11px] font-mono opacity-80">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hubs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredHubs.map((hub) => {
          const isHQ = hub.type === "HQ";
          const isLogistics = hub.type === "LOGISTICS HUB";

          return (
            <div
              key={hub.name}
              className={`p-6 border flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
                isHQ
                  ? "bg-white border-[#009999] ring-1 ring-[#009999]/30"
                  : "bg-white border-slate-200 hover:border-[#009999]"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Location & Badge */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#009999] shrink-0" />
                    <span>{hub.country}, Region: {hub.region}</span>
                  </div>

                  {/* Type Badge */}
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider shrink-0 uppercase border ${
                      isHQ
                        ? "bg-[#002d3b] text-[#00cccc] border-[#009999]"
                        : isLogistics
                        ? "bg-[#009999]/10 text-[#009999] border-[#009999]"
                        : "bg-slate-100 text-slate-700 border-slate-300"
                    }`}
                  >
                    [Type: {hub.type}]
                  </span>
                </div>

                {/* Hub Title */}
                <div>
                  <h3 className="text-base font-black text-[#002d3b] uppercase tracking-tight leading-snug">
                    {hub.name}
                  </h3>
                </div>

                {/* Role / Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {hub.role}
                </p>
              </div>

              {/* Bottom Operational Status */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Active Operation
                </span>
                <span className="text-[#009999] font-bold">TAKNISER ONE</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredHubs.length === 0 && (
        <div className="text-center py-12 bg-white border border-slate-200 space-y-2">
          <Globe2 className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-sm font-bold text-[#002d3b]">No regional hubs found</div>
          <p className="text-xs text-slate-500">Try adjusting your search query or region filter.</p>
        </div>
      )}
    </div>
  );
}

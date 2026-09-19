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
import { useLanguage } from "@/lib/LanguageContext";

export interface NetworkHubItem {
  name: string;
  country: string;
  city?: string;
  address?: string;
  region: string;
  role: string;
  coverage?: string;
  flag?: string;
  type: "HQ" | "RHQ" | "LOGISTICS HUB";
  contactPerson?: string;
  contactRole?: string;
}

export const NETWORK_HUBS: NetworkHubItem[] = [
  // ─── GLOBAL HEADQUARTERS ───
  {
    name: "TAKNISER GmbH",
    city: "Dillenburg",
    country: "Germany",
    region: "Europe",
    coverage: "Global Headquarters",
    role: "Global Headquarters & Central Engineering Center (Dillenburg, Germany)",
    flag: "🌐",
    type: "HQ",
  },

  // ─── EUROPE (10 RHQs) ───
  {
    name: "TAKNISER AB",
    city: "Stockholm",
    country: "Sweden",
    region: "Europe",
    coverage: "Scandinavia",
    role: "Scandinavia Regional Headquarters & Strategic Distribution Hub",
    flag: "🇸🇪",
    type: "RHQ",
  },
  {
    name: "TAKNISER MEYER BALTIQUE OÜ",
    city: "Tallinn",
    country: "Estonia",
    region: "Europe",
    coverage: "Baltic States",
    role: "Baltic States Regional Headquarters & Northern European Operations",
    flag: "🇪🇪",
    type: "RHQ",
  },
  {
    name: "TAKNISER GmbH",
    city: "Dillenburg",
    country: "Germany",
    region: "Europe",
    coverage: "Central Europe",
    role: "Central Europe Regional Headquarters & Advanced Engineering Hub",
    flag: "🇩🇪",
    type: "RHQ",
  },
  {
    name: "TAKNISER BERNARD LAURENT SARL",
    city: "Paris",
    country: "France",
    region: "Europe",
    coverage: "Francophone Europe",
    role: "Francophone Europe Regional Headquarters & Industrial Solutions",
    flag: "🇫🇷",
    type: "RHQ",
  },
  {
    name: "TAKNISER VRIES BENELUX B.V.",
    city: "Rotterdam",
    country: "Netherlands",
    region: "Europe",
    coverage: "Benelux & European Logistics",
    role: "Benelux & European Maritime Logistics Coordination Hub",
    flag: "🇳🇱",
    type: "RHQ",
  },
  {
    name: "TAKNISER VENETO INDUSTRIALE S.R.L.",
    city: "Milan",
    country: "Italy",
    region: "Europe",
    coverage: "Southern Europe",
    role: "Southern Europe Regional Headquarters & High-Precision Automation",
    flag: "🇮🇹",
    type: "RHQ",
  },
  {
    name: "TAKNISER VELASCO IBERIA S.L.",
    city: "Madrid",
    country: "Spain",
    region: "Europe",
    coverage: "Iberia",
    role: "Iberia Regional Headquarters & Mediterranean Supply Operations",
    flag: "🇪🇸",
    type: "RHQ",
  },
  {
    name: "TAKNISER FREDRIKSON HELLAS I.K.E.",
    city: "Athens",
    country: "Greece",
    region: "Europe",
    coverage: "Balkans",
    role: "Balkans Regional Headquarters & Maritime Infrastructure Center",
    flag: "🇬🇷",
    type: "RHQ",
  },
  {
    name: "TAKNISER ANTTONEN OY",
    city: "Helsinki",
    country: "Finland",
    region: "Europe",
    coverage: "Finland & Central Asia",
    role: "Finland & Central Asia Regional Headquarters & High-Tech Division",
    flag: "🇫🇮",
    type: "RHQ",
  },
  {
    name: "TAKNISER ROTHS UK LIMITED",
    city: "London",
    country: "UK",
    region: "Europe",
    coverage: "UK & Ireland",
    role: "UK & Ireland Regional Headquarters & Strategic Procurement Hub",
    flag: "🇬🇧",
    type: "RHQ",
  },

  // ─── NORTH AMERICA ───
  {
    name: "TAKNISER STERLING AMERICANA LLC",
    city: "Texas",
    country: "USA",
    region: "North America",
    coverage: "USA & Canada",
    role: "North American Regional HQ & Strategic Procurement Division",
    flag: "🇺🇸",
    type: "RHQ",
  },

  // ─── LATIN AMERICA ───
  {
    name: "TAKNISER LEMANN MEXICANA S. DE R.L. DE C.V.",
    city: "Mexico City",
    country: "Mexico",
    region: "Latin America",
    coverage: "Mexico",
    role: "Manufacturing & North-South Logistics Coordination",
    flag: "🇲🇽",
    type: "RHQ",
  },
  {
    name: "TAKNISER ORTEGA PANAMÁ S.A.",
    city: "Panama City",
    country: "Panama",
    region: "Latin America",
    coverage: "Central America & Caribbean",
    role: "Maritime Trade & Canal Logistics Center",
    flag: "🇵🇦",
    type: "RHQ",
  },
  {
    name: "TAKNISER PINO ANDINA SpA",
    city: "Santiago",
    country: "Chile",
    region: "Latin America",
    coverage: "Andean Region",
    role: "Mining & Critical Minerals Sourcing Hub",
    flag: "🇨🇱",
    type: "RHQ",
  },
  {
    name: "TAKNISER SANTOS AMAZONIA LTDA.",
    city: "São Paulo",
    country: "Brazil",
    region: "Latin America",
    coverage: "South America",
    role: "AgTech & Industrial Sourcing Headquarters",
    flag: "🇧🇷",
    type: "RHQ",
  },

  // ─── AFRICA ───
  {
    name: "TAKNISER PINAULT AOF LIMITED",
    city: "Accra",
    country: "Ghana",
    address: "Atlantic Tower, Plot #16, Near Kotoka Airport, Accra, Ghana",
    region: "Africa",
    coverage: "West Africa",
    role: "West Africa Regional Operations & Strategic Trade Hub",
    flag: "🇬🇭",
    type: "RHQ",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },
  {
    name: "TAKNISER MENARD KENYA LIMITED",
    city: "Nairobi",
    country: "Kenya",
    address: "Times Tower, Haile Selassie Avenue, Nairobi, Kenya",
    region: "Africa",
    coverage: "East & Central Africa",
    role: "East & Central Africa Regional Operations & AgTech Hub",
    flag: "🇰🇪",
    type: "RHQ",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },
  {
    name: "TAKNISER RATCLIFF SAVANNA (PTY) LIMITED",
    city: "Johannesburg",
    country: "South Africa",
    address: "Sandton Towers, 164 5th St, CBD, Johannesburg, South Africa",
    region: "Africa",
    coverage: "Southern Africa",
    role: "Southern Africa Industrial Equipment & Mining Supply Hub",
    flag: "🇿🇦",
    type: "RHQ",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },

  // ─── MIDDLE EAST ───
  {
    name: "TAKNISER GMBH TRD L.L.C.",
    city: "Dubai",
    country: "UAE",
    address: "Regal Tower, Business Bay, Dubai, United Arab Emirates",
    region: "Middle East",
    coverage: "Gulf & Middle East",
    role: "Middle East & Regional Commercial Operations Headquarters",
    flag: "🇦🇪",
    type: "RHQ",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },
  {
    name: "TAKNISER HOFFMANN ARABIA LLC.",
    city: "Dammam",
    country: "Saudi Arabia",
    address: "Dammam 2nd Industrial City, Dammam, Kingdom of Saudi Arabia",
    region: "Middle East",
    coverage: "Saudi Arabia & Levant",
    role: "Infrastructure, EPC & Energy Industrial Supply Operations",
    flag: "🇸🇦",
    type: "RHQ",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },
  {
    name: "TAKNISER SARL E&ET FZCO",
    city: "JAFZA, Dubai",
    country: "UAE",
    address: "JAFZA 26, Jafza South, Jebel Ali Industrial Area, United Arab Emirates",
    region: "Middle East",
    coverage: "Global Distribution & Logistics",
    role: "Primary Global Distribution & Free Zone Logistics Center",
    flag: "🇦🇪",
    type: "LOGISTICS HUB",
    contactPerson: "Mohammed Ammar",
    contactRole: "Business Head - MEA",
  },

  // ─── ASIA ───
  {
    name: "TAKNISER AB INDIA PRIVATE LIMITED",
    city: "Ahmedabad",
    country: "India",
    region: "Asia",
    coverage: "South Asia",
    role: "Engineering Center & Industrial Sourcing Office",
    flag: "🇮🇳",
    type: "RHQ",
  },
  {
    name: "TAKNISER MERLION SINGAPORE PTE. LTD.",
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    coverage: "ASEAN",
    role: "Financial & International Global Trading Center",
    flag: "🇸🇬",
    type: "RHQ",
  },
  {
    name: "TAKNISER SHULIANG CHINA CO., LTD.",
    city: "Guangzhou",
    country: "China",
    region: "Asia",
    coverage: "China",
    role: "Manufacturing & Supply Chain Coordination",
    flag: "🇨🇳",
    type: "RHQ",
  },
  {
    name: "TAKNISER SHĀNSHĀN HK LIMITED",
    city: "Hong Kong SAR",
    country: "Hong Kong",
    region: "Asia",
    coverage: "North Asia & Global Sourcing",
    role: "Trade Finance & Asia Logistics Office",
    flag: "🇭🇰",
    type: "RHQ",
  },
  {
    name: "TAKNISER TAKEMITSU JAPAN K.K.",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    coverage: "Japan",
    role: "Robotics & High-Tech Components Division",
    flag: "🇯🇵",
    type: "RHQ",
  },
  {
    name: "TAKNISER SAHENK TURK A.Ş.",
    city: "Istanbul",
    country: "Türkiye",
    region: "Asia",
    coverage: "Türkiye & Caucasus",
    role: "Eurasian Cross-Border Trade & Logistics Center",
    flag: "🇹🇷",
    type: "RHQ",
  },

  // ─── OCEANIA ───
  {
    name: "TAKNISER PALLMER PACIFIC PTY LTD",
    city: "Melbourne",
    country: "Australia",
    region: "Oceania",
    coverage: "Oceania",
    role: "Mining & Heavy Equipment Operations Hub",
    flag: "🇦🇺",
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
  const { currentLanguage } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const regionNames: Record<string, string> = {
    "All": currentLanguage === 'de' ? "Alle" : currentLanguage === 'ar' ? "الكل" : "All",
    "Europe": currentLanguage === 'de' ? "Europa" : currentLanguage === 'ar' ? "أوروبا" : "Europe",
    "Middle East": currentLanguage === 'de' ? "Mittlerer Osten" : currentLanguage === 'ar' ? "الشرق الأوسط" : "Middle East",
    "Africa": currentLanguage === 'de' ? "Afrika" : currentLanguage === 'ar' ? "أفريقيا" : "Africa",
    "North America": currentLanguage === 'de' ? "Nordamerika" : currentLanguage === 'ar' ? "أمريكا الشمالية" : "North America",
    "Latin America": currentLanguage === 'de' ? "Lateinamerika" : currentLanguage === 'ar' ? "أمريكا اللاتينية" : "Latin America",
    "Asia": currentLanguage === 'de' ? "Asien" : currentLanguage === 'ar' ? "آسيا" : "Asia",
    "Oceania": currentLanguage === 'de' ? "Ozeanien" : currentLanguage === 'ar' ? "أوقيانوسيا" : "Oceania",
  };

  const filteredHubs = useMemo(() => {
    return NETWORK_HUBS.filter((hub) => {
      const matchesRegion =
        selectedRegion === "All" || hub.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        hub.name.toLowerCase().includes(q) ||
        hub.country.toLowerCase().includes(q) ||
        (hub.city && hub.city.toLowerCase().includes(q)) ||
        (hub.coverage && hub.coverage.toLowerCase().includes(q)) ||
        hub.role.toLowerCase().includes(q) ||
        hub.region.toLowerCase().includes(q);
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <div className={`space-y-8 ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>
      {/* Controls Bar: Search & Region Tabs */}
      <div className="bg-white border border-slate-200 p-4 sm:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${currentLanguage === 'ar' ? 'right-3.5' : 'left-3.5'}`} />
            <input
              type="text"
              placeholder={currentLanguage === 'de' ? "Hauptsitze, Länder, Städte oder Abdeckung durchsuchen..." : currentLanguage === 'ar' ? "بحث في المراكز، الدول، المدن، أو مناطق التغطية..." : "Search hubs, countries, cities, or coverage..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-2 text-xs sm:text-sm border border-slate-300 focus:border-[#009999] focus:outline-none bg-slate-50 text-slate-800 rounded-none placeholder:text-slate-400 ${currentLanguage === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
            />
          </div>

          <div className="text-xs font-mono text-slate-500 self-center md:self-auto">
            {currentLanguage === 'de' ? (
              <>Zeige <span className="font-bold text-[#002d3b]">{filteredHubs.length}</span> von {NETWORK_HUBS.length} strategischen Hubs</>
            ) : currentLanguage === 'ar' ? (
              <>عرض <span className="font-bold text-[#002d3b]">{filteredHubs.length}</span> من أصل {NETWORK_HUBS.length} مركزاً استراتيجياً</>
            ) : (
              <>Showing <span className="font-bold text-[#002d3b]">{filteredHubs.length}</span> of {NETWORK_HUBS.length} Strategic Hubs</>
            )}
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
            const displayName = regionNames[region] || region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none border ${isSelected
                  ? "bg-[#002d3b] border-[#002d3b] text-white"
                  : "bg-[#f8fafc] border-slate-200 text-slate-600 hover:border-[#009999] hover:text-[#002d3b]"
                  }`}
              >
                {displayName} <span className="ml-1 text-[11px] font-mono opacity-80">({count})</span>
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
              key={`${hub.name}-${hub.country}-${hub.coverage || ""}`}
              className={`p-6 border flex flex-col justify-between transition-all duration-200 hover:shadow-md ${isHQ
                ? "bg-white border-[#009999] ring-1 ring-[#009999]/30"
                : "bg-white border-slate-200 hover:border-[#009999]"
                }`}
            >
              <div className="space-y-4">
                {/* Header: Location & Badge */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700">
                    {hub.flag && <span className="text-base leading-none">{hub.flag}</span>}
                    <span>{hub.city ? `${hub.city}, ` : ""}{hub.country}</span>
                    <span className="text-slate-400 font-normal">({hub.region})</span>
                  </div>

                  {/* Type Badge */}
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 tracking-wider shrink-0 uppercase border ${isHQ
                      ? "bg-[#002d3b] text-[#00cccc] border-[#009999]"
                      : isLogistics
                        ? "bg-[#009999]/10 text-[#009999] border-[#009999]"
                        : "bg-slate-100 text-slate-700 border-slate-300"
                      }`}
                  >
                    {currentLanguage === 'de' ? `[Typ: ${hub.type}]` : currentLanguage === 'ar' ? `[النوع: ${hub.type}]` : `[Type: ${hub.type}]`}
                  </span>
                </div>

                {/* Coverage Pill */}
                {hub.coverage && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-[#002d3b] text-[11px] font-mono font-semibold border border-slate-200">
                    <span className="text-[#009999]">●</span>
                    <span>{currentLanguage === 'de' ? 'Abdeckung:' : currentLanguage === 'ar' ? 'التغطية:' : 'Coverage:'} {hub.coverage}</span>
                  </div>
                )}

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

                {/* Physical Address if available */}
                {hub.address && (
                  <div className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-slate-400">
                        {currentLanguage === 'de' ? 'Offizielle Büroadresse' : currentLanguage === 'ar' ? 'العنوان الرسمي للمكتب' : 'Official Office Address'}
                      </div>
                      <div className="font-semibold text-[#002d3b] leading-relaxed">{hub.address}</div>
                    </div>
                  </div>
                )}

                {/* Regional Leadership if available */}
                {hub.contactPerson && (
                  <div className="text-[11px] font-mono font-bold text-[#009999] bg-[#002d3b]/5 px-2.5 py-1 border border-[#009999]/20 inline-flex items-center gap-1.5">
                    <span>{currentLanguage === 'de' ? 'Geschäftsführung / Kontakt:' : currentLanguage === 'ar' ? 'الاتصال والقيادة:' : 'Executive Liaison:'}</span>
                    <span className="text-[#002d3b]">{hub.contactPerson}</span>
                    <span className="text-slate-500 font-normal">({hub.contactRole})</span>
                  </div>
                )}
              </div>

              {/* Bottom Operational Status */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {currentLanguage === 'de' ? 'Aktiver Betrieb' : currentLanguage === 'ar' ? 'تشغيل نشط ومستمر' : 'Active Operation'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredHubs.length === 0 && (
        <div className="text-center py-12 bg-white border border-slate-200 space-y-2">
          <Globe2 className="w-8 h-8 text-slate-400 mx-auto" />
          <div className="text-sm font-bold text-[#002d3b]">
            {currentLanguage === 'de' ? 'Keine regionalen Hubs gefunden' : currentLanguage === 'ar' ? 'لم يتم العثور على مراكز إقليمية' : 'No regional hubs found'}
          </div>
          <p className="text-xs text-slate-500">
            {currentLanguage === 'de' ? 'Passen Sie Ihre Suchanfrage oder den Regionsfilter an.' : currentLanguage === 'ar' ? 'يرجى تعديل مصطلح البحث أو تصفية المناطق.' : 'Try adjusting your search query or region filter.'}
          </p>
        </div>
      )}
    </div>
  );
}

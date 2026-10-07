"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Mail,
  Copy,
  Check,
  Building2,
  Globe,
  Sparkles,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Briefcase,
  Table,
  LayoutGrid,
} from "lucide-react";
import {
  CORPORATE_FUNCTIONAL_CONTACTS,
  INDUSTRY_DIVISION_CONTACTS,
  REGIONAL_HQ_CONTACTS,
  CorporateFunctionalContact,
  IndustryDivisionContact,
  RegionalHQContact,
} from "@/lib/directoryData";
import { useLanguage } from "@/lib/LanguageContext";

export default function GlobalEmailDirectory() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "corporate" | "divisions" | "rhq">("all");
  const [selectedContinent, setSelectedContinent] = useState<string>("All");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };


  // Filtered Corporate Functional
  const filteredCorporate = useMemo(() => {
    return CORPORATE_FUNCTIONAL_CONTACTS.filter((c) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        c.functionName.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        (c.officerName && c.officerName.toLowerCase().includes(q)) ||
        (c.description && c.description.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Filtered Divisions
  const filteredDivisions = useMemo(() => {
    return INDUSTRY_DIVISION_CONTACTS.filter((d) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        d.divisionName.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        d.sector.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Filtered RHQ
  const filteredRHQ = useMemo(() => {
    return REGIONAL_HQ_CONTACTS.filter((r) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesContinent =
        selectedContinent === "All" || r.continent === selectedContinent;
      if (!matchesContinent) return false;
      if (!q) return true;
      return (
        r.company.toLowerCase().includes(q) ||
        r.headquarters.toLowerCase().includes(q) ||
        r.regionalContact.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.continent.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedContinent]);

  const totalResultsCount =
    (activeTab === "all" || activeTab === "corporate" ? filteredCorporate.length : 0) +
    (activeTab === "all" || activeTab === "divisions" ? filteredDivisions.length : 0) +
    (activeTab === "all" || activeTab === "rhq" ? filteredRHQ.length : 0);

  const continents = ["All", "Europe", "Americas", "Africa", "Middle East", "Asia", "Oceania"];

  return (
    <div id="email-directory" className="w-full space-y-8">
      {/* ─────────────────────────────────────────────────────────────
          OFFICIAL DIRECTORY BANNER & HEADER (MATCHES USER DOCUMENT)
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#001822] text-white p-6 sm:p-10 border-t-4 border-[#009999] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#009999]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="border-b border-slate-800 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009999]/20 border border-[#009999]/40 text-[#00cccc] text-[11px] font-mono font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00cccc]" />
                <span>{isDe ? "Offizielles E-Mail-Verzeichnis" : isAr ? "دليل البريد الإلكتروني الرسمي" : "Official Global Email Directory"}</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-2">
                TAKNISER <span className="text-[#00cccc] font-light">(Global Email Directory)</span>
              </h1>
            </div>
          </div>

          {/* Subheader: Enterprise Matrix Organization (External Utility) */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-xl font-bold text-slate-200 uppercase tracking-wide">
              {isDe ? "Enterprise-Matrixorganisation (Externes Dienstprogramm)" : isAr ? "منظمة مصفوفة المؤسسات (خدمة خارجية)" : "Enterprise Matrix Organization (External Utility)"}
            </h2>
            <p className="text-xs sm:text-sm text-[#00cccc] font-mono font-medium tracking-wide flex flex-wrap items-center gap-2">
              <span>{isDe ? "Professionelles Unternehmensverzeichnis" : isAr ? "دليل الشركات الاحترافي" : "Professional Corporate Directory"}</span>
              <span className="text-slate-600">•</span>
              <span>{isDe ? "Globale Geschäftsbereiche" : isAr ? "قطاعات الأعمال العالمية" : "Global Business Divisions"}</span>
              <span className="text-slate-600">•</span>
              <span>{isDe ? "Regionale HQ-Kontakte" : isAr ? "جهات اتصال المقرات الإقليمية" : "Regional HQ Contacts"}</span>
            </p>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SEARCH & FILTER CONTROL BAR
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-white p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Real-time Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                isDe
                  ? "Suchen nach Funktion, Division, Gesellschaft, Stadt oder E-Mail..."
                  : isAr
                  ? "ابحث بالوظيفة، القطاع، الشركة، المقر أو البريد الإلكتروني..."
                  : "Search function, division, company, HQ city, or email..."
              }
              className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#009999] focus:bg-white transition-colors font-medium rounded-none placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold px-1.5 py-0.5"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <span className="text-xs font-mono text-slate-500 uppercase mr-1">
              {isDe ? "Ansicht:" : isAr ? "العرض:" : "View:"}
            </span>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`p-2 text-xs border transition-all ${
                viewMode === "table"
                  ? "bg-[#002d3b] text-[#00cccc] border-[#002d3b]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
              title="Official Table View"
            >
              <Table className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`p-2 text-xs border transition-all ${
                viewMode === "grid"
                  ? "bg-[#002d3b] text-[#00cccc] border-[#002d3b]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
              title="Cards Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                activeTab === "all"
                  ? "bg-[#009999] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {isDe ? "Alle Verzeichnisse" : isAr ? "كافة الدلائل" : "All Sections"} (61)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("corporate")}
              className={`px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                activeTab === "corporate"
                  ? "bg-[#009999] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Building2 className="w-3.5 h-3.5 inline mr-1.5" />
              {isDe ? "Zentrale HQ-Funktionen" : isAr ? "وظائف المقر الرئيسي" : "Corporate Functional (HQ)"} (13)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("divisions")}
              className={`px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                activeTab === "divisions"
                  ? "bg-[#009999] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 inline mr-1.5" />
              {isDe ? "Industrie- & Geschäftsbereiche" : isAr ? "القطاعات الصناعية" : "Industry Divisions"} (23)
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("rhq")}
              className={`px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none ${
                activeTab === "rhq"
                  ? "bg-[#009999] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Globe className="w-3.5 h-3.5 inline mr-1.5" />
              {isDe ? "Regionale HQ-Verzeichnis" : isAr ? "دليل المقرات الإقليمية" : "Regional HQ Directory"} (25)
            </button>
          </div>

          {/* Continent Filter for RHQ tab */}
          {(activeTab === "rhq" || activeTab === "all") && (
            <div className="flex items-center gap-1.5 text-xs">
              <Filter className="w-3 h-3 text-slate-400" />
              <span className="font-mono text-slate-500 uppercase text-[11px]">
                {isDe ? "Region:" : isAr ? "القارة:" : "Region:"}
              </span>
              <select
                value={selectedContinent}
                onChange={(e) => setSelectedContinent(e.target.value)}
                aria-label={isDe ? "Region filtern" : isAr ? "تصفية القارة" : "Filter by region"}
                className="bg-[#f8fafc] border border-slate-200 text-slate-700 text-xs px-2 py-1 font-medium focus:outline-none focus:border-[#009999]"
              >
                {continents.map((cont) => (
                  <option key={cont} value={cont}>
                    {cont}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Search Results Summary */}
        {searchQuery && (
          <div className="text-xs font-mono text-slate-500 pt-1">
            {isDe ? "Gefundene Einträge:" : isAr ? "النتائج المطابقة:" : "Matching entries:"}{" "}
            <span className="font-bold text-[#002d3b]">{totalResultsCount}</span>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: CORPORATE FUNCTIONAL CONTACTS (HQ)
      ───────────────────────────────────────────────────────────── */}
      {(activeTab === "all" || activeTab === "corporate") && (
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#002d3b] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#009999]">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#00cccc]" />
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  {isDe ? "Zentrale Unternehmenskontakte (HQ)" : isAr ? "جهات الاتصال الوظيفية للمقر الرئيسي" : "Corporate Functional Contacts (HQ)"}
                </h3>
                <p className="text-[11px] font-mono text-slate-300">
                  {isDe ? "Vorstand, Exekutive & globale Unternehmensfunktionen" : isAr ? "المكتب التنفيذي والإدارات الوظيفية العامة" : "Executive Board, Directorate & Corporate Functions"}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#001822] text-[#00cccc] text-xs font-mono font-bold border border-slate-700">
              {filteredCorporate.length} Channels
            </span>
          </div>

          {viewMode === "table" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#f1f5f9] text-[#002d3b] font-mono text-xs uppercase tracking-wider border-b border-slate-300">
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/2">
                      {isDe ? "Funktion / Bereich" : isAr ? "الوظيفة / الإدارة" : "Function"}
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/2">
                      {isDe ? "Offizielle E-Mail-Adresse" : isAr ? "البريد الإلكتروني المعتمد" : "Email"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredCorporate.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-[#002d3b] text-sm">
                          {item.functionName}
                        </div>
                        {item.officerName && (
                          <div className="text-xs font-medium text-[#009999]">
                            {item.officerName}
                          </div>
                        )}
                        {item.description && (
                          <div className="text-[11px] text-slate-500 font-sans mt-0.5">
                            {item.description}
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <a
                            href={`mailto:${item.email}`}
                            className="font-mono text-sm font-semibold text-[#009999] hover:text-[#002d3b] hover:underline flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.email}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.email)}
                            className="p-1 text-slate-400 hover:text-[#009999] hover:bg-slate-100 transition-colors rounded"
                            title="Copy Email"
                          >
                            {copiedEmail === item.email ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredCorporate.length === 0 && (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-slate-400 text-xs font-mono">
                        {isDe ? "Keine Ergebnisse für diese Suche gefunden." : isAr ? "لم يتم العثور على نتائج." : "No matching corporate functional contacts found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCorporate.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-md transition-all space-y-2"
                >
                  <div className="font-bold text-[#002d3b] text-sm">
                    {item.functionName}
                  </div>
                  {item.officerName && (
                    <div className="text-xs font-medium text-[#009999]">
                      {item.officerName}
                    </div>
                  )}
                  {item.description && (
                    <div className="text-xs text-slate-500 font-sans leading-snug">
                      {item.description}
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <a
                      href={`mailto:${item.email}`}
                      className="font-mono text-xs font-bold text-[#009999] hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{item.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.email)}
                      className="p-1 text-slate-400 hover:text-[#009999]"
                      title="Copy"
                    >
                      {copiedEmail === item.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: INDUSTRY DIVISION CONTACTS
      ───────────────────────────────────────────────────────────── */}
      {(activeTab === "all" || activeTab === "divisions") && (
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#002d3b] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#009999]">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#00cccc]" />
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  {isDe ? "Kontakte der Industrie- & Geschäftsbereiche" : isAr ? "جهات اتصال القطاعات الصناعية والتجارية" : "Industry Division Contacts"}
                </h3>
                <p className="text-[11px] font-mono text-slate-300">
                  {isDe ? "23 spezialisierte Industrie-, Fertigungs- & Handelsdivisionen" : isAr ? "23 قطاعاً متخصصاً في الصناعة والتصنيع والتجارة" : "23 Specialized Industrial, Technology, Trading & Infrastructure Divisions"}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#001822] text-[#00cccc] text-xs font-mono font-bold border border-slate-700">
              {filteredDivisions.length} Divisions
            </span>
          </div>

          {viewMode === "table" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#f1f5f9] text-[#002d3b] font-mono text-xs uppercase tracking-wider border-b border-slate-300">
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/2">
                      {isDe ? "Geschäftsbereich / Industriezweig" : isAr ? "قطاع الأعمال" : "Business Division"}
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/2">
                      {isDe ? "Offizielle E-Mail-Adresse" : isAr ? "البريد الإلكتروني المعتمد" : "Email"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredDivisions.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-bold text-[#002d3b] text-sm">
                          {item.divisionName}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {item.sector}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <a
                            href={`mailto:${item.email}`}
                            className="font-mono text-sm font-semibold text-[#009999] hover:text-[#002d3b] hover:underline flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.email}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.email)}
                            className="p-1 text-slate-400 hover:text-[#009999] hover:bg-slate-100 transition-colors rounded"
                            title="Copy Email"
                          >
                            {copiedEmail === item.email ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredDivisions.length === 0 && (
                    <tr>
                      <td colSpan={2} className="py-8 text-center text-slate-400 text-xs font-mono">
                        {isDe ? "Keine Ergebnisse für diese Suche gefunden." : isAr ? "لم يتم العثور على نتائج." : "No matching industry divisions found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDivisions.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-md transition-all space-y-2"
                >
                  <div className="font-bold text-[#002d3b] text-sm">
                    {item.divisionName}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {item.sector}
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <a
                      href={`mailto:${item.email}`}
                      className="font-mono text-xs font-bold text-[#009999] hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{item.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.email)}
                      className="p-1 text-slate-400 hover:text-[#009999]"
                      title="Copy"
                    >
                      {copiedEmail === item.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: TAKNISER RHQ CONTACT DIRECTORY
      ───────────────────────────────────────────────────────────── */}
      {(activeTab === "all" || activeTab === "rhq") && (
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#002d3b] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#009999]">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#00cccc]" />
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wide">
                  {isDe ? "TAKNISER RHQ-Kontaktverzeichnis" : isAr ? "دليل الاتصال بالمقرات الإقليمية (RHQ)" : "TAKNISER RHQ Contact Directory"}
                </h3>
                <p className="text-[11px] font-mono text-slate-300">
                  {isDe ? "Regionale Hauptsitze & autorisierte operative Gesellschaften" : isAr ? "المقرات الإقليمية والكيانات التشغيلية المعتمدة عالمياً" : "Regional Headquarters & Authorized Operating Corporate Entities"}
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-[#001822] text-[#00cccc] text-xs font-mono font-bold border border-slate-700">
              {filteredRHQ.length} Regional Hubs
            </span>
          </div>

          {viewMode === "table" ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#f1f5f9] text-[#002d3b] font-mono text-xs uppercase tracking-wider border-b border-slate-300">
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/4">
                      {isDe ? "Gesellschaft" : isAr ? "الشركة" : "Company"}
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/4">
                      {isDe ? "Hauptsitz / Stadt" : isAr ? "المقر / المدينة" : "Headquarters"}
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/4">
                      {isDe ? "Regionaler Kontakt" : isAr ? "جهة الاتصال الإقليمية" : "Regional Contact"}
                    </th>
                    <th className="py-3 px-4 sm:px-6 font-bold w-1/4">
                      {isDe ? "E-Mail" : isAr ? "البريد الإلكتروني" : "Email"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredRHQ.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50 transition-colors group"
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{item.flag}</span>
                          <span className="font-bold text-[#002d3b] text-sm">
                            {item.company}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-700">
                        {item.headquarters}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-[#002d3b] text-xs font-mono font-semibold border border-slate-200">
                          {item.regionalContact}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${item.email}`}
                            className="font-mono text-xs sm:text-sm font-semibold text-[#009999] hover:text-[#002d3b] hover:underline flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5 shrink-0" />
                            <span>{item.email}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.email)}
                            className="p-1 text-slate-400 hover:text-[#009999] hover:bg-slate-100 transition-colors rounded"
                            title="Copy Email"
                          >
                            {copiedEmail === item.email ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredRHQ.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400 text-xs font-mono">
                        {isDe ? "Keine Ergebnisse für diese Suche gefunden." : isAr ? "لم يتم العثور على نتائج." : "No matching RHQs found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRHQ.map((item) => (
                <div
                  key={item.id}
                  className="p-5 bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.flag}</span>
                      <div className="font-mono text-xs font-bold text-slate-500 uppercase">
                        {item.continent}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-white border border-slate-200 text-[#002d3b]">
                      {item.regionalContact}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#002d3b] text-sm">
                      {item.company}
                    </h4>
                    <div className="text-xs text-slate-600 font-medium mt-0.5">
                      {item.headquarters}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <a
                      href={`mailto:${item.email}`}
                      className="font-mono text-xs font-bold text-[#009999] hover:underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{item.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.email)}
                      className="p-1 text-slate-400 hover:text-[#009999]"
                      title="Copy"
                    >
                      {copiedEmail === item.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          FOOTER UTILITY NOTE
      ───────────────────────────────────────────────────────────── */}
      <div className="p-4 bg-slate-100 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono">
          <ShieldCheck className="w-4 h-4 text-[#009999]" />
          <span>
            {isDe
              ? "Offizielle Verzeichnisdaten • TAKNISER Enterprise Matrix"
              : isAr
              ? "بيانات الدليل المعتمدة • مصفوفة تاكنيسر للمؤسسات"
              : "Official Directory Data • TAKNISER Enterprise Matrix Utility"}
          </span>
        </div>
        <div className="text-[11px] font-mono text-slate-500">
          Domain: <span className="text-[#002d3b] font-bold">@takniser.com</span>
        </div>
      </div>
    </div>
  );
}

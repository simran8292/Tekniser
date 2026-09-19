"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";
import GlobalMapPreview from "@/components/home/GlobalMapPreview";
import RegionalHeadquartersList from "@/components/network/RegionalHeadquartersList";
import { useLanguage } from "@/lib/LanguageContext";

const GLOBAL_STATS_DE = [
  { label: "Globaler Hauptsitz", value: "1 (Hessen, Deutschland)", desc: "Zentrales Ingenieurzentrum & Konzernsitz" },
  { label: "Regionale Hauptsitze", value: "30", desc: "Aktiv in weltweiten strategischen Hubs" },
  { label: "Länder & Gebiete", value: "190+", desc: "Weltweite kommerzielle Reichweite" },
  { label: "Aktive Kontinente", value: "6", desc: "Kontinentübergreifende Industrieoperationen" },
  { label: "Integriertes Logistiknetzwerk", value: "Global", desc: "Multimodale Luft-, See- und Landkorridore" },
  { label: "Weltweite Beschaffung & Einkauf", value: "Aktiv", desc: "Direkter Zugang zu strategischen Rohstoffen" },
  { label: "Fertigungs- & OEM-Partnerschaften", value: "Multikontinental", desc: "Zertifizierte europäische & globale Produktion" },
  { label: "Internationaler Vertrieb", value: "Aktiv", desc: "Zuverlässige grenzüberschreitende Handelspipelines" },
  { label: "Globale Geschäftspartner", value: "Wachsend", desc: "Regierungen, EPCs und Industriekonzerne" },
  { label: "Nachhaltige Wachstumsstrategie", value: "Vision 2046", desc: "Industrielle Jahrhundert-Roadmap" },
];

const GLOBAL_STATS_EN = [
  { label: "Global Headquarters", value: "1 (Hesse, Germany)", desc: "Central Engineering Center & Group HQ" },
  { label: "Regional Headquarters", value: "30", desc: "Operational across global hubs" },
  { label: "Countries & Territories", value: "190+", desc: "Worldwide commercial reach" },
  { label: "Continents Active", value: "6", desc: "Cross-continental industrial operations" },
  { label: "Integrated Logistics Network", value: "Global", desc: "Multi-modal air, sea & land corridors" },
  { label: "Worldwide Sourcing & Procurement", value: "Active", desc: "Direct access to strategic materials" },
  { label: "Manufacturing & OEM Partnerships", value: "Multi-continent", desc: "Certified European & global production" },
  { label: "International Distribution", value: "Active", desc: "Reliable cross-border trade pipelines" },
  { label: "Global Business Partners", value: "Growing", desc: "Governments, EPCs, and conglomerates" },
  { label: "Sustainable Growth Strategy", value: "Vision 2046", desc: "Centennial industrial roadmap" },
];

const GLOBAL_STATS_AR = [
  { label: "المقر الرئيسي العالمي", value: "1 (هسن، ألمانيا)", desc: "مركز الهندسة المركزي ومقر المجموعة" },
  { label: "المقرات الإقليمية", value: "30", desc: "تعمل عبر أهم المراكز الاستراتيجية عالمياً" },
  { label: "الدول والأقاليم", value: "190+", desc: "نطاق تجاري يغطي مختلف قارات العالم" },
  { label: "القارات النشطة", value: "6", desc: "عمليات صناعية عابرة للقارات" },
  { label: "الشبكة اللوجستية المتكاملة", value: "عالمية", desc: "ممرات نقل جوي وبحري وبري متعدد الوسائط" },
  { label: "التوريد والمشتريات الدولية", value: "نشطة", desc: "وصول مباشر للمواد الخام الاستراتيجية" },
  { label: "شراكات التصنيع وOEM", value: "متعددة القارات", desc: "إنتاج معتمد بالمعايير الأوروبية والعالمية" },
  { label: "التوزيع الدولي", value: "نشط", desc: "قنوات تجارة دولية موثوقة ومستدامة" },
  { label: "شركاء الأعمال العالميون", value: "متزايد", desc: "حكومات، مقاولو EPC، وتكتلات صناعية" },
  { label: "استراتيجية النمو المستدام", value: "رؤية 2046", desc: "خارطة طريق صناعية مئوية" },
];

export default function GlobalNetworkContent() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const stats = isDe ? GLOBAL_STATS_DE : isAr ? GLOBAL_STATS_AR : GLOBAL_STATS_EN;

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_logistics_port.jpg"
            alt="TAKNISER Global Logistics & Operations Network"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "GLOBALE OPERATIVE PRÄSENZ" : isAr ? "الانتشار العملياتي العالمي" : "Global Operational Presence"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {isDe ? (
              <>Globales <span className="text-[#009999]">Netzwerk</span></>
            ) : isAr ? (
              <>الشبكة <span className="text-[#009999]">العالمية</span></>
            ) : (
              <>Global <span className="text-[#009999]">Network</span></>
            )}
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {isDe
              ? "Eine Welt. Ein Netzwerk. Eine Zukunft. — TAKNISER agiert über ein strategisch positioniertes weltweites Netzwerk aus 30 regionalen Hauptsitzen, Logistikhubs, Ingenieurzentren und Geschäftsstellen in über 190 Ländern."
              : isAr
              ? "عالم واحد. شبكة واحدة. مستقبل واحد. — تعمل تاكنيسر عبر شبكة عالمية استراتيجية تتألف من 30 مقراً إقليمياً ومراكز لوجستية ومراكز هندسية في أكثر من 190 دولة."
              : "One Globe. One Network. One Future. — TAKNISER operates through a strategically positioned global network of 30 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "1 Globaler HQ (Deutschland)" : isAr ? "1 مقر عالمي (ألمانيا)" : "1 Global HQ (Germany)"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "30 Regionale Hauptsitze" : isAr ? "30 مقراً إقليمياً" : "30 Regional Headquarters"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "190+ Länder weltweit bedient" : isAr ? "+190 دولة نخدمها" : "190+ Countries Served"}
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          INTERACTIVE WORLD MAP
      ───────────────────────────────────────────────────────────── */}
      <GlobalMapPreview />

      {/* ─────────────────────────────────────────────────────────────
          REGIONAL HEADQUARTERS NETWORK
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="border-b border-slate-300 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                {isDe ? "STRATEGISCHE INFRASTRUKTUR" : isAr ? "البنية التحتية الاستراتيجية" : "STRATEGIC INFRASTRUCTURE"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                {isDe ? "Netzwerk der regionalen Hauptsitze" : isAr ? "شبكة المقرات الإقليمية" : "Regional Headquarters Network"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md text-left sm:text-right">
              {isDe
                ? "Erkunden Sie unsere regionalen Hauptsitze, maritimen Logistikzentren und Ingenieurhubs auf allen Hauptkontinenten."
                : isAr
                ? "استكشف مقراتنا الإقليمية العاملة ومراكز الخدمات اللوجستية البحرية والمراكز الهندسية عبر جميع القارات."
                : "Explore our operating regional headquarters, maritime logistics centers, and engineering hubs across every major continent."}
            </p>
          </div>

          <RegionalHeadquartersList />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          GLOBAL FOOTPRINT STATISTICS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "MESSBARE INTERNATIONALE REICHWEITE" : isAr ? "نطاق دولي قابل للقياس" : "MEASURABLE INTERNATIONAL REACH"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? "Statistiken zum globalen Fußabdruck" : isAr ? "إحصاءات البصمة العالمية" : "Global Footprint Statistics"}
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              {isDe
                ? "Verifizierbare Skalierung und strategische operative Präsenz zur Verankerung unserer industriellen Lieferketten und des internationalen Handels."
                : isAr
                ? "حجم موثق وبصمة تشغيلية استراتيجية ترسخ سلاسل التوريد الصناعية والتجارة الدولية عبر الحدود."
                : "Verifiable scale and strategic operational footprint anchoring our industrial supply chains and cross-border trade."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-[#f8fafc] border border-slate-200 p-5 flex flex-col justify-between hover:border-[#009999] hover:bg-white transition-all rounded-none"
              >
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-black text-[#002d3b] tracking-tight leading-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 text-[11px] text-slate-500 font-sans">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

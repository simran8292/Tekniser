"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf, Globe, Zap, Recycle, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CONTENT = {
  de: {
    heroBadge: "NACHHALTIGE ERDE",
    heroTitle: "Industrie im Einklang",
    heroHighlight: "mit unserem Planeten.",
    heroDesc:
      "Die Vision 2046 verpflichtet uns zu einer industriellen Transformation, die technologische Spitzenleistung mit strengem Klimaschutz, Ressourcenschonung und Kreislaufwirtschaft verbindet.",
    introKicker: "ÖKOLOGISCHE TRANSFORMATION",
    introTitle: "Verantwortung für Erde und Klima",
    introText:
      "Industrieller Fortschritt und Umweltschutz dürfen keine Gegensätze sein. Bei TAKNISER ONE GLOBE setzen wir auf nachhaltige Lieferketten, CO2-neutrale Logistik und ressourceneffiziente Technologien.",
    targets: [
      {
        val: "100%",
        label: "Konformität mit EU-Umweltstandards",
        desc: "Strenge Einhaltung höchster europäischer Umwelt- und Energiestandards.",
      },
      {
        val: "2046",
        label: "Klimaneutralitäts-Zielpfad",
        desc: "Gezielte Reduktion der Treibhausgasemissionen über die gesamte Wertschöpfungskette.",
      },
      {
        val: "30+",
        label: "Grüne Logistik-Hubs",
        desc: "Optimierte multimodale Transportrouten zur Minimierung von Frachtemissionen.",
      },
    ],
    pillars: [
      {
        icon: Zap,
        title: "Erneuerbare Energien & Effizienz",
        desc: "Einsatz sauberer Energieträger und moderner Energieeffizienzsysteme in allen Fertigungs- und Betriebsanlagen.",
      },
      {
        icon: Recycle,
        title: "Zirkuläre Materialwirtschaft",
        desc: "Förderung von Recyclingkreisläufen bei strategischen Industriemineralien, Metallen und technischen Kunststoffen.",
      },
      {
        icon: Globe,
        title: "Grüne Handelskorridore",
        desc: "Entwicklung emissionsarmer maritimer und intermodaler Transportrouten über weltweite Frachtknotenpunkte.",
      },
      {
        icon: Shield,
        title: "Biodiversität & Naturschutz",
        desc: "Schutz lokaler Ökosysteme und verantwortungsvolle Rohstoffgewinnung unter strengsten ökologischen Auflagen.",
      },
    ],
    ctaBack: "Zurück zu Verantwortung",
    ctaVision: "Vision 2046 entdecken",
  },
  en: {
    heroBadge: "SUSTAINABLE EARTH",
    heroTitle: "Industry in Harmony",
    heroHighlight: "with Our Planet.",
    heroDesc:
      "Vision 2046 commits us to an industrial transformation that pairs technological excellence with rigorous climate action, resource preservation, and circular economy principles.",
    introKicker: "ECOLOGICAL TRANSFORMATION",
    introTitle: "Stewardship for Earth and Climate",
    introText:
      "Industrial growth and environmental integrity must never be mutually exclusive. At TAKNISER ONE GLOBE, we champion sustainable supply chains, low-carbon logistics, and resource-efficient engineering.",
    targets: [
      {
        val: "100%",
        label: "EU Environmental Compliance",
        desc: "Rigorous alignment with the highest European environmental and energy guidelines.",
      },
      {
        val: "2046",
        label: "Climate Neutrality Roadmap",
        desc: "Systematic greenhouse gas reduction across all divisions and cross-border trade pipelines.",
      },
      {
        val: "30+",
        label: "Green Logistics Hubs",
        desc: "Optimized multimodal transport corridors minimizing intercontinental freight emissions.",
      },
    ],
    pillars: [
      {
        icon: Zap,
        title: "Renewable Energy & Efficiency",
        desc: "Integration of clean power and advanced energy management across all operational and manufacturing facilities.",
      },
      {
        icon: Recycle,
        title: "Circular Materials Economy",
        desc: "Closed-loop recycling pathways for critical industrial minerals, metals, and engineering polymers.",
      },
      {
        icon: Globe,
        title: "Green Trade Corridors",
        desc: "Pioneering low-emission maritime and intermodal transport channels across strategic global hubs.",
      },
      {
        icon: Shield,
        title: "Biodiversity & Preservation",
        desc: "Protecting sensitive ecosystems and upholding responsible mineral extraction practices globally.",
      },
    ],
    ctaBack: "Back to Responsibility",
    ctaVision: "Discover Vision 2046",
  },
  ar: {
    heroBadge: "الأرض المستدامة",
    heroTitle: "الصناعة في تناغم",
    heroHighlight: "مع كوكبنا.",
    heroDesc:
      "تلزمنا رؤية 2046 بتحول صناعي يجمع بين الريادة الهندسية والالتزام البيئي الصارم وصون الموارد وتطبيق الاقتصاد الدائري.",
    introKicker: "التحول البيئي المستدام",
    introTitle: "المسؤولية تجاه كوكب الأرض والمناخ",
    introText:
      "لا ينبغي أن يتعارض النمو الصناعي مع حماية البيئة. في تاكنيسر ون غلوب، نبني سلاسل توريد مستدامة ولوجستيات خضراء وحلولاً هندسية كفؤة.",
    targets: [
      {
        val: "100%",
        label: "الامتثال للمعايير الأوروبية",
        desc: "تطبيق صارم لأعلى معايير البيئة والطاقة المعتمدة أوروبياً.",
      },
      {
        val: "2046",
        label: "مسار الحياد المناخي",
        desc: "خفض مدروس للانبعاثات الكربونية في كافة القطاعات وعمليات التجارة الدولية.",
      },
      {
        val: "30+",
        label: "مراكز لوجستية خضراء",
        desc: "ممرات شحن متعددة الوسائط مصممة لتقليل الانبعاثات الناتجة عن النقل الدولي.",
      },
    ],
    pillars: [
      {
        icon: Zap,
        title: "الطاقة المتجددة والكفاءة",
        desc: "الاعتماد على مصادر الطاقة النظيفة وأنظمة الإدارة الذكية في منشآت الإنتاج.",
      },
      {
        icon: Recycle,
        title: "اقتصاد المواد الدائري",
        desc: "تطوير مسارات إعادة تدوير المعادن الاستراتيجية والمواد الهندسية.",
      },
      {
        icon: Globe,
        title: "ممرات التجارة الخضراء",
        desc: "تطوير مسارات نقل بحري وبري منخفضة الانبعاثات تربط أهم المراكز العالمية.",
      },
      {
        icon: Shield,
        title: "حماية التنوع الحيوي",
        desc: "حماية النظم البيئية الحيوية والتعدين المسؤول وفق أكثر المعايير البيئية صرامة.",
      },
    ],
    ctaBack: "العودة إلى المسؤولية",
    ctaVision: "اكتشف رؤية 2046",
  },
};

export default function SustainableEarthContent() {
  const { currentLanguage } = useLanguage();
  const c = CONTENT[currentLanguage as "de" | "en" | "ar"] || CONTENT.de;
  const isAr = currentLanguage === "ar";

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_logistics_port.jpg"
            alt="Sustainable Earth"
            fill
            priority
            className="object-cover opacity-45 filter contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/85 via-[#001822]/70 to-[#001822]/95" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Leaf className="w-3.5 h-3.5 text-[#009999]" />
            <span>{c.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-serif">
            {c.heroTitle} <br />
            <span className="text-[#009999]">{c.heroHighlight}</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {c.heroDesc}
          </p>
        </div>
      </section>

      {/* Targets Row */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.targets.map((item, idx) => (
              <div key={idx} className="bg-[#f8fafc] border border-slate-200 p-6 space-y-2">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#009999]">
                  {item.val}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#002d3b]">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
            {c.introKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
            {c.introTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
            {c.introText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {c.pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 p-8 space-y-3 hover:border-[#009999] transition-all">
                <Icon className="w-8 h-8 text-[#009999]" />
                <h3 className="text-xl font-bold text-[#002d3b] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
          <Link
            href="/responsibility"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#009999] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            <span>{c.ctaBack}</span>
          </Link>
          <Link
            href="/vision-2046"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#009999] hover:bg-[#008080] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>{c.ctaVision}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}

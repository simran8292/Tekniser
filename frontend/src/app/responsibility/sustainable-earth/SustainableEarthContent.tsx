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
        tag: "ENERGIEWENDE",
        metric: "100% Regenerativ-Ziel",
        title: "Erneuerbare Energien & Effizienz",
        desc: "Beschleunigung der vollständigen industriellen Dekarbonisierung durch werkseigene Photovoltaikanlagen, windgestützte Micro-Grids und KI-gesteuerte Energiemanagementsysteme zur Reduzierung von Spitzenlasten.",
        highlights: [
          "Industrielle Solar-PV & Batteriespeicher (BESS)",
          "ISO 50001 zertifiziertes Energiemanagement",
          "Gebäudeautomation senkt HLK-Verbrauch um 35%",
          "Grünstrom-Lieferverträge (PPAs) mit Tier-1-Versorgern",
        ],
      },
      {
        icon: Recycle,
        tag: "KREISLAUFWIRTSCHAFT",
        metric: "92% Rückgewinnungsquote",
        title: "Zirkuläre Materialwirtschaft",
        desc: "Aufbau geschlossener Rohstoffkreisläufe für kritische Industriemineralien, Lithium-Ionen-Batterierecycling, hochfesten Aluminiumschrott und Hochleistungspolymere zur Minimierung primärer Erzförderung.",
        highlights: [
          "Hydrometallurgisches Batterierecycling (>95% Li/Ni)",
          "Abfallfreies Aluminium-Umschmelzen spart 95% Energie",
          "Rezyklierte Kunststoffe nach EU REACH & RoHS",
          "Digitale Produktpässe für transparente Rückverfolgbarkeit",
        ],
      },
      {
        icon: Globe,
        tag: "GRÜNE LOGISTIK",
        metric: "IMO 2030 / 2050 Konform",
        title: "Grüne Handelskorridore",
        desc: "Pionierarbeit bei emissionsarmen Seeschifffahrtsrouten und elektrifizierten multimodalen Schienenkorridoren, die europäische Industriezentren mit globalen Umschlagshäfen verbinden.",
        highlights: [
          "Gecharterte Bio-LNG- & Methanol-Containerschiffe",
          "Verlagerung auf Schiene senkt Straßengüterverkehr um 45%",
          "Smarte Routing-Algorithmen vermeiden Leerfahrten",
          "Landstromversorgung (Cold Ironing) an Terminal-Piers",
        ],
      },
      {
        icon: Shield,
        tag: "BIODIVERSITÄT",
        metric: "Net-Positive Ökobilanz",
        title: "Biodiversität & Naturschutz",
        desc: "Strenge Umweltauflagen, Zero-Deforestation-Richtlinien und Renaturierungsprogramme an allen Rohstoffgewinnungsstandorten, Logistikdrehkreuzen und Forschungszentren weltweit.",
        highlights: [
          "IRMA-zertifizierte verantwortungsvolle Rohstoffbeschaffung",
          "Vollständiger Schutz von Grundwasser & Regenwäldern",
          "Bodenrekultivierung und Aufforstungsprojekte",
          "Satellitengestützte Biodiversitäts-Echtzeitüberwachung",
        ],
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
        tag: "CLEAN POWER TRANSITION",
        metric: "100% Renewable Off-Grid Target",
        title: "Renewable Energy & Efficiency",
        desc: "Accelerating the complete decarbonization of industrial operations through on-site solar photovoltaic arrays, grid-tied wind micro-turbines, and AI-driven automated energy management systems reducing facility peak loads.",
        highlights: [
          "High-efficiency industrial solar PV & battery energy storage (BESS)",
          "ISO 50001 certified energy management across manufacturing plants",
          "Smart building automation reducing HVAC power consumption by 35%",
          "Power Purchase Agreements (PPAs) with tier-1 green energy utilities",
        ],
      },
      {
        icon: Recycle,
        tag: "CLOSED-LOOP RECOVERY",
        metric: "92% Recycled Metal Yield",
        title: "Circular Materials Economy",
        desc: "Pioneering closed-loop supply chains for critical industrial minerals, lithium-ion battery black mass, aerospace-grade aluminum scrap, and engineering polymers to eliminate virgin extraction dependence.",
        highlights: [
          "Hydrometallurgical battery cell recycling with >95% lithium & nickel recovery",
          "Zero-waste industrial aluminum remelting delivering 95% energy savings",
          "Recycled engineering polymers compliant with EU REACH & RoHS",
          "Digital Material Passports tracking origin and recycling lifecycles",
        ],
      },
      {
        icon: Globe,
        tag: "DECARBONIZED LOGISTICS",
        metric: "IMO 2030 / 2050 Aligned",
        title: "Green Trade Corridors",
        desc: "Developing low-emission maritime shipping lanes and electrified multimodal freight corridors connecting European industrial hubs with key Asian and American distribution networks.",
        highlights: [
          "Chartered bio-LNG and dual-fuel methanol maritime container vessels",
          "Rail-first intermodal overland routing reducing road freight by 45%",
          "Optimized smart freight routing algorithms minimizing empty backhauls",
          "Shore-to-ship cold ironing clean electricity at port terminals",
        ],
      },
      {
        icon: Shield,
        tag: "ECOSYSTEM STEWARDSHIP",
        metric: "Net-Positive Biodiversity",
        title: "Biodiversity & Preservation",
        desc: "Implementing strict environmental safeguards, zero-deforestation mandates, and habitat restoration programs across all raw material extraction sites, logistics gateways, and corporate facilities.",
        highlights: [
          "IRMA (Initiative for Responsible Mining Assurance) certified operations",
          "Zero-deforestation and water table conservation mandates",
          "Comprehensive soil remediation and post-operational reforestation",
          "Real-time acoustic and satellite biodiversity monitoring networks",
        ],
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
        tag: "التحول نحو الطاقة النظيفة",
        metric: "هدف 100% طاقة متجددة",
        title: "الطاقة المتجددة والكفاءة",
        desc: "تسريع إزالة الكربون من العمليات الصناعية عبر محطات الطاقة الشمسية الميدانية، توربينات الرياح، وأنظمة إدارة الطاقة الذكية.",
        highlights: [
          "أنظمة طاقة شمسية صناعية مع بطاريات تخزين متقدمة (BESS)",
          "إدارة الطاقة المعتمدة وفق معيار ISO 50001",
          "خفض استهلاك أنظمة التكييف والتهوية بنسبة 35%",
          "اتفاقيات شراء الطاقة المتجددة (PPAs) مع كبرى المرافق",
        ],
      },
      {
        icon: Recycle,
        tag: "الاقتصاد الدائري للمواد",
        metric: "معدل استرجاع 92%",
        title: "اقتصاد المواد الدائري",
        desc: "تطوير سلاسل إمداد مغلقة للمعادن الاستراتيجية، تدوير بطاريات الليثيوم، وإعادة صهر خردة الألمنيوم والبوليمرات الهندسية.",
        highlights: [
          "تدوير كيميائي مائي لبطاريات الليثيوم بنسبة استرداد >95%",
          "إعادة صهر الألمنيوم دون نفايات وتوفير 95% من الطاقة",
          "بوليمرات هندسية معاد تدويرها متوافقة مع لوائح EU REACH",
          "جوازات سفر رقمية للمواد لتتبع سلاسل إعادة التدوير",
        ],
      },
      {
        icon: Globe,
        tag: "اللوجستيات منخفضة الكربون",
        metric: "متوافق مع معايير IMO",
        title: "ممرات التجارة الخضراء",
        desc: "تطوير خطوط شحن بحري وبري منخفضة الانبعاثات تربط المراكز الصناعية الأوروبية بموانئ التوزيع الاستراتيجية حول العالم.",
        highlights: [
          "سفن حاويات بحرية تعمل بالغاز الحيوي والميثانول المزدوج",
          "الاعتماد على شبكات السكك الحديدية لتقليل النقل البري بنسبة 45%",
          "خوارزميات ذكية لتحسين مسارات الشحن وتجنب الرحلات الفارغة",
          "تزويد السفن بالطاقة الكهربائية النظيفة أثناء الرسو بالموانئ",
        ],
      },
      {
        icon: Shield,
        tag: "صون النظم البيئية",
        metric: "توازن بيئي إيجابي",
        title: "حماية التنوع الحيوي",
        desc: "تطبيق ضوابط بيئية صارمة، ومنع إزالة الغابات، وبرامج إعادة تأهيل النظم البيئية في مواقع التعدين ومراكز اللوجستيات.",
        highlights: [
          "عمليات توريد معادن معتمدة وفق معايير مبادرة IRMA الدولية",
          "حظر إزالة الغابات وحماية مصادر المياه الجوفية",
          "معالجة متكاملة للتربة وبرامج إعادة تشجير شاملة",
          "مراقبة آنية للتنوع البيولوجي باستخدام الأقمار الصناعية",
        ],
      },
    ],
    ctaBack: "العودة إلى المسؤولية",
    ctaVision: "اكتشف رؤية 2046",
  },
};

const PILLAR_IMAGES = [
  "/sustainable_earth_slide.jpg", // Renewable Energy & Efficiency
  "/value_chain_hero_new.jpg",     // Circular Materials Economy
  "/green_trade_port.jpg",         // Green Trade Corridors
  "/impact_nature_clean.jpg",      // Biodiversity & Preservation
];

export default function SustainableEarthContent() {
  const { currentLanguage } = useLanguage();
  const c = CONTENT[currentLanguage as "de" | "en" | "ar"] || CONTENT.en;
  const isAr = currentLanguage === "ar";

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/susta_e.webp"
            alt="Sustainable Earth"
            fill
            priority
            quality={95}
            className="object-cover opacity-85 filter contrast-105 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/75 via-[#001822]/50 to-[#001822]/80" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#00cccc] text-xs font-mono font-bold tracking-widest uppercase bg-[#001822]/85 backdrop-blur-md shadow-lg">
            <Leaf className="w-3.5 h-3.5 text-[#00cccc]" />
            <span>{c.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight font-serif drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
            {c.heroTitle} <br />
            <span className="text-[#00cccc] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">{c.heroHighlight}</span>
          </h1>

          <p className="text-slate-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {c.pillars.map((item: any, idx: number) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 flex flex-col justify-between hover:border-[#009999] hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                {/* Image Header */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-slate-200 bg-slate-900">
                  <Image
                    src={PILLAR_IMAGES[idx] || "/impact_nature_clean.jpg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/30 pointer-events-none" />
                  
                  {/* Floating Pill Tag */}
                  <div className={`absolute top-4 ${isAr ? "right-4" : "left-4"} z-10`}>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cccc] bg-[#001822]/90 px-3 py-1.5 border border-[#009999]/60 backdrop-blur-md shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Top Opposite Icon */}
                  <div className={`absolute top-4 ${isAr ? "left-4" : "right-4"} z-10 p-2.5 bg-[#001822]/90 border border-[#009999]/60 backdrop-blur-md text-[#00cccc] shadow-md`}>
                    <Icon className="w-5 h-5 text-[#00cccc]" />
                  </div>

                  {/* Bottom Metric Badge */}
                  <div className={`absolute bottom-4 ${isAr ? "right-4" : "left-4"} z-10`}>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00cccc] bg-[#002d3b]/95 px-3 py-1.5 border border-slate-700 shadow-sm">
                      {item.metric}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-[#002d3b] uppercase tracking-tight group-hover:text-[#009999] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Key Technical Standards / Strategic Initiatives */}
                    <div className="pt-2 border-t border-slate-100 space-y-2.5">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        {isAr ? "المعايير والمبادرات الاستراتيجية" : currentLanguage === "de" ? "Wichtigste Initiativen & Standards" : "Key Standards & Strategic Initiatives"}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.highlights?.map((point: string, hIdx: number) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 bg-[#f8fafc] p-2.5 border border-slate-200 text-xs text-slate-700 leading-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Rocket,
  Pickaxe,
  Sprout,
  HeartPulse,
  Home,
  Bot,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { DIVISION_CATEGORIES_DATA, CategoryDetail } from "@/lib/divisionSectionsData";

const divisionImages: Record<string, string> = {
  "space-economy": "/platform_space.jpg",
  "mining-minerals": "/platform_mining.jpg",
  "agtech": "/platform_agtech.jpg",
  "lifecare": "/platform_lifecare.jpg",
  "lifestyle": "/platform_lifestyle.jpg",
  "robotics": "/clean_robotics.jpg",
  "global-trading": "/value_chain_hero_port.jpg",
};

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Pickaxe,
  Sprout,
  HeartPulse,
  Home,
  Bot,
  Globe,
};

const LOCALIZED_DIVISIONS: Record<string, Record<string, {
  title: string;
  tagline: string;
  description: string;
  icon: string;
  categories: string[];
}>> = {
  de: {
    "space-economy": {
      title: "Raumfahrtwirtschaft",
      tagline: "Die Zukunft über die Erde hinaus vorantreiben durch fortschrittliche Raumfahrttechnologien und globale Raumfahrt-Partnerschaften.",
      description: "Spezialisierte Ingenieurskunst, Satellitenkomponenten, Startunterstützungssysteme und Orbitalelektronik für zukunftsweisende Raumfahrt- und Kommunikationsnetzwerke.",
      icon: "Rocket",
      categories: [
        "Satellitenkomponenten",
        "Weltraumkommunikation",
        "Erdbeobachtung",
        "Weltraumelektronik",
        "Startunterstützungstechnologien",
      ],
    },
    "mining-minerals": {
      title: "Bergbau & Rohstoffe",
      tagline: "Das industrielle Wachstum der Welt durch verantwortungsvolle Rohstoffgewinnung, Veredelung und weltweiten Mineralienhandel sichern.",
      description: "Globale strategische Beschaffung und Versorgungsketten für lebenswichtige Metalle und Seltene Erden für grüne Transformation, Elektronik und Schwerindustrie.",
      icon: "Pickaxe",
      categories: [
        "Kupfer",
        "Lithium",
        "Nickel",
        "Seltene Erden",
        "Aluminium",
        "Graphit",
        "Handel mit kritischen Mineralien",
        "Kohle",
      ],
    },
    "agtech": {
      title: "AgTech",
      tagline: "Nachhaltige Landwirtschaft durch moderne Anbautechnologien, Lebensmittelverarbeitung und globale Agrarlieferketten aufbauen.",
      description: "Fortschrittliche Bewässerungssysteme, ertragreiche Saatgüter, umweltfreundliche Düngemittel und automatisierte Lebensmittelverarbeitungsanlagen für globale Ernährungssicherheit.",
      icon: "Sprout",
      categories: [
        "Bewässerungssysteme",
        "Düngemittel",
        "Saatgut",
        "Landwirtschaftliche Maschinen",
        "Lebensmittelverarbeitung",
      ],
    },
    "lifecare": {
      title: "LifeCare",
      tagline: "Innovative Gesundheitstechnologien liefern, die das menschliche Leben weltweit verbessern und verlängern.",
      description: "Präzisionsdiagnostik, Krankenhausinfrastruktur, biotechnologische Integration und weltweite Beschaffung hochreiner Pharmazeutika.",
      icon: "HeartPulse",
      categories: [
        "Medizinprodukte",
        "Krankenhausausstattung",
        "Pharmazeutika",
        "Biotechnologie",
        "Diagnostikgeräte",
      ],
    },
    "lifestyle": {
      title: "Lifestyle",
      tagline: "Den Alltag durch hochwertige Konsumgüter und intelligente Lifestyle-Lösungen bereichern.",
      description: "Hochwertige Haushaltsgeräte, Smart-Home-Automatisierung, Wellness-Technologie und technische Textilien für globale Märkte.",
      icon: "Home",
      categories: [
        "Haushaltsgeräte",
        "Smart Home",
        "Körperpflege",
        "Wellness",
        "Textilien",
      ],
    },
    "robotics": {
      title: "Robotik",
      tagline: "Industrie 4.0 mit intelligenter Automatisierung und KI-gestützten Industrielösungen beschleunigen.",
      description: "Modernste Industrieroboterarme, Autonome Mobile Roboter (AMR), intelligente Lagerhausautomatisierung und cyber-physische Fabrikintegration.",
      icon: "Bot",
      categories: [
        "Industrieroboter",
        "Lagerautomation",
        "KI-Robotik",
        "AMRs (Autonome Mobile Roboter)",
        "Fabrikautomation",
      ],
    },
    "global-trading": {
      title: "Globaler Handel",
      tagline: "Hersteller, Industrien, Regierungen und Märkte über ein integriertes internationales Handelsnetzwerk verbinden.",
      description: "Grenzüberschreitende Rohstofflieferketten, Energiehandel, Beschaffung für Verteidigung und Luft- und Raumfahrt sowie strategische Komponentenverteilung.",
      icon: "Globe",
      categories: [
        "Energie",
        "Elektrotechnik",
        "Elektronik",
        "Verteidigung & Raumfahrt",
        "Agrarhandel",
        "Metall",
      ],
    },
  },
  en: {
    "space-economy": {
      title: "Space Economy",
      tagline: "Driving the future beyond Earth through advanced space technologies and global aerospace partnerships.",
      description: "Specialized engineering, satellite components, launch support systems, and orbital electronics empowering next-generation space exploration and communication networks.",
      icon: "Rocket",
      categories: [
        "Satellite Components",
        "Space Communications",
        "Earth Observation",
        "Space Electronics",
        "Launch Support Technologies",
      ],
    },
    "mining-minerals": {
      title: "Mining & Minerals",
      tagline: "Supporting the world's industrial growth through responsible mining, processing, sourcing, and global trading of strategic minerals.",
      description: "Global strategic sourcing and critical mineral supply chains supplying essential metals and rare earth elements for green transition, electronics, and global heavy industry.",
      icon: "Pickaxe",
      categories: [
        "Copper",
        "Lithium",
        "Nickel",
        "Rare Earth Elements",
        "Aluminum",
        "Graphite",
        "Critical Mineral Trading",
        "Coal",
      ],
    },
    "agtech": {
      title: "AgTech",
      tagline: "Building sustainable agriculture through modern farming technologies, food processing, and global Agri supply chains.",
      description: "Advanced precision irrigation, high-yield seeds, eco-friendly fertilizers, and automated food processing equipment ensuring global food security.",
      icon: "Sprout",
      categories: [
        "Irrigation Systems",
        "Fertilizers",
        "Seeds",
        "Agricultural Machinery",
        "Food Processing",
      ],
    },
    "lifecare": {
      title: "LifeCare",
      tagline: "Delivering innovative healthcare technologies that improve lives worldwide.",
      description: "Precision medical diagnostic systems, hospital infrastructure equipment, biotechnology integration, and high-purity pharmaceutical sourcing.",
      icon: "HeartPulse",
      categories: [
        "Medical Devices",
        "Hospital Equipment",
        "Pharmaceuticals",
        "Biotechnology",
        "Diagnostics Equipment",
      ],
    },
    "lifestyle": {
      title: "Lifestyle",
      tagline: "Enhancing everyday living through quality consumer products and smart lifestyle solutions.",
      description: "High-grade consumer appliances, smart home automation hubs, wellness technology, and engineered textiles for premium global markets.",
      icon: "Home",
      categories: [
        "Consumer Appliances",
        "Smart Home",
        "Personal Care",
        "Wellness",
        "Fabric",
      ],
    },
    "robotics": {
      title: "Robotics",
      tagline: "Accelerating Industry 4.0 with intelligent automation and AI-driven industrial solutions.",
      description: "State-of-the-art industrial arm robots, Autonomous Mobile Robots (AMRs), smart warehouse automation, and factory-wide cyber-physical integration.",
      icon: "Bot",
      categories: [
        "Industrial Robots",
        "Warehouse Automation",
        "AI Robotics",
        "AMRs (Autonomous Mobile Robots)",
        "Factory Automation",
      ],
    },
    "global-trading": {
      title: "Global Trading",
      tagline: "Connecting manufacturers, industries, governments, and global markets through an integrated international trading ecosystem.",
      description: "Cross-border multi-commodity supply chains, energy trading, defence & aerospace procurement, and strategic industrial component distribution.",
      icon: "Globe",
      categories: [
        "Energy",
        "Electrical",
        "Electronics",
        "Defence & Aerospace",
        "Agri Trade",
        "Metal",
      ],
    },
  },
  ar: {
    "space-economy": {
      title: "اقتصاد الفضاء",
      tagline: "قيادة المستقبل لما وراء كوكب الأرض عبر تقنيات فضائية متقدمة وشراكات طيران عالمية.",
      description: "هندسة تصنيع متخصصة، ومكونات الأقمار الصناعية، وأنظمة دعم الإطلاق، وإلكترونيات المدارات الفضائية لشبكات الاستكشاف والاتصالات.",
      icon: "Rocket",
      categories: [
        "مكونات الأقمار الصناعية",
        "اتصالات الفضاء",
        "مراقبة الأرض",
        "إلكترونيات الفضاء",
        "تقنيات دعم الإطلاق",
      ],
    },
    "mining-minerals": {
      title: "التعدين والمعادن",
      tagline: "دعم النمو الصناعي العالمي عبر التعدين المسؤول والمعالجة وتجارة المعادن الاستراتيجية.",
      description: "سلاسل إمداد وتوريد دولية للمعادن الأساسية والعناصر الأرضية النادرة للصناعات الثقيلة والتحول الأخضر.",
      icon: "Pickaxe",
      categories: [
        "النحاس",
        "الليثيوم",
        "النيكل",
        "العناصر الأرضية النادرة",
        "الألومنيوم",
        "الجرافيت",
        "تجارة المعادن الحيوية",
        "الفحم",
      ],
    },
    "agtech": {
      title: "التكنولوجيا الزراعية",
      tagline: "بناء زراعة مستدامة من خلال تقنيات الزراعة الحديثة وتصنيع الأغذية وسلاسل التوريد العالمية.",
      description: "أنظمة ري متقدمة، وبذور عالية الإنتاجية، وأسمدة صديقة للبيئة، ومعدات معالجة الأغذية المؤتمتة لضمان الأمن الغذائي.",
      icon: "Sprout",
      categories: [
        "أنظمة الري الحديثة",
        "الأسمدة الزراعية",
        "البذور المحسنة",
        "الآلات الزراعية",
        "معالجة الأغذية",
      ],
    },
    "lifecare": {
      title: "الرعاية الصحية",
      tagline: "تقديم تقنيات رعاية صحية مبتكرة تعزز وتحسن حياة المجتمعات حول العالم.",
      description: "أنظمة تشخيص طبي دقيقة، ومعدات المستشفيات الحديثة، والحلول الحيوية، وتوريد الأدوية والمستحضرات المعتمدة عالمياً.",
      icon: "HeartPulse",
      categories: [
        "الأجهزة الطبية",
        "معدات المستشفيات",
        "المستحضرات الدوائية",
        "التكنولوجيا الحيوية",
        "أجهزة التشخيص الدقيقة",
      ],
    },
    "lifestyle": {
      title: "أسلوب الحياة",
      tagline: "الارتقاء بالحياة اليومية من خلال منتجات استهلاكية راقية وحلول الحياة الذكية.",
      description: "أجهزة استهلاكية عالية الجودة، وأنظمة المنازل الذكية، وتقنيات العافية، والمنسوجات الهندسية للأسواق العالمية.",
      icon: "Home",
      categories: [
        "الأجهزة المنزلية",
        "المنازل الذكية",
        "العناية الشخصية",
        "العافية والراحة",
        "المنسوجات والأقمشة",
      ],
    },
    "robotics": {
      title: "الروبوتات والأتمتة",
      tagline: "تسريع الثورة الصناعية الرابعة من خلال الأتمتة الذكية والحلول الصناعية المعتمدة على الذكاء الاصطناعي.",
      description: "أذرع روبوتية صناعية متطورة، وروبوتات متنقلة ذاتية القيادة (AMR)، وأتمتة المستودعات والمصانع المتكاملة.",
      icon: "Bot",
      categories: [
        "الروبوتات الصناعية",
        "أتمتة المستودعات",
        "روبوتات الذكاء الاصطناعي",
        "الروبوتات المتنقلة المستقلة",
        "أتمتة المصانع الشاملة",
      ],
    },
    "global-trading": {
      title: "التجارة الدولية",
      tagline: "ربط المصنعين والصناعات والحكومات والأسواق الدولية عبر منظومة تجارية عالمية متكاملة.",
      description: "سلاسل إمداد متعددة السلع، وتجارة الطاقة، ومشتريات الدفاع والفضاء، وتوزيع المكونات الصناعية الاستراتيجية.",
      icon: "Globe",
      categories: [
        "قطاع الطاقة",
        "الأنظمة الكهربائية",
        "الإلكترونيات المتقدمة",
        "الدفاع وصناعات الفضاء",
        "التجارة الزراعية",
        "المعادن الصناعية",
      ],
    },
  },
};

const UI_TEXT: Record<string, {
  allDivisions: string;
  strategicSector: string;
  requestInquiry: string;
  facilityOps: string;
  platform: string;
  overview: string;
  productsServices: string;
  countriesServed: string;
  productCategories: string;
  yearsHeritage: string;
  capabilitiesSectionBadge: string;
  capabilitiesSectionTitle: string;
  capabilitiesSectionDesc: string;
  processHeading: string;
  keySpecsLabel: string;
  inquireCategory: string;
}> = {
  de: {
    allDivisions: "Alle Geschäftsbereiche",
    strategicSector: "Strategischer Sektor",
    requestInquiry: "Bereichsanfrage stellen",
    facilityOps: "Sektor-Anlagen & Betrieb",
    platform: "Plattform",
    overview: "Bereichs-Überblick",
    productsServices: "Produkte & Dienstleistungen",
    countriesServed: "Belieferte Länder",
    productCategories: "Produktkategorien",
    yearsHeritage: "Deutsche Tradition",
    capabilitiesSectionBadge: "INGENIEURSARCHITEKTUR & LEISTUNGSSPEKTRUM",
    capabilitiesSectionTitle: "Operative Vertikalen & Technische Prozesse",
    capabilitiesSectionDesc: "Detaillierte Aufschlüsselung der Kernproduktlinien, technischen Spezifikationen und des mehrstufigen Qualitätslebenszyklus in unserem weltweiten Netzwerk.",
    processHeading: "Ingenieurs- & Lieferprozess",
    keySpecsLabel: "Wichtige technische Standards & Fähigkeiten",
    inquireCategory: "Für diesen Bereich anfragen",
  },
  en: {
    allDivisions: "All Business Divisions",
    strategicSector: "Strategic Sector",
    requestInquiry: "Request Division Inquiry",
    facilityOps: "Sector Facility & Operations",
    platform: "Platform",
    overview: "Division Overview",
    productsServices: "Products & Services",
    countriesServed: "Countries Served",
    productCategories: "Product Categories",
    yearsHeritage: "German Heritage",
    capabilitiesSectionBadge: "ENGINEERING ARCHITECTURE & CAPABILITIES",
    capabilitiesSectionTitle: "Operational Verticals & Technical Processes",
    capabilitiesSectionDesc: "Detailed breakdown of core product lines, key engineering specifications, and the multi-stage quality lifecycle deployed across our global network.",
    processHeading: "Engineering & Delivery Process",
    keySpecsLabel: "Key Technical Standards & Capabilities",
    inquireCategory: "Inquire for this Vertical",
  },
  ar: {
    allDivisions: "جميع قطاعات الأعمال",
    strategicSector: "قطاع استراتيجي",
    requestInquiry: "تقديم استفسار عن القطاع",
    facilityOps: "مرافق القطاع وعملياته",
    platform: "منصة",
    overview: "نظرة عامة على القطاع",
    productsServices: "المنتجات والخدمات",
    countriesServed: "دولة حول العالم",
    productCategories: "فئات المنتجات",
    yearsHeritage: "هندسة ألمانية",
    capabilitiesSectionBadge: "الهندسة المعمارية والقدرات التشغيلية",
    capabilitiesSectionTitle: "القطاعات التشغيلية والعمليات الفنية",
    capabilitiesSectionDesc: "تفصيل شامل لخطوط الإنتاج الأساسية والمواصفات الهندسية ودورة الجودة متعددة المراحل المطبقة عبر شبكتنا العالمية.",
    processHeading: "مسار الهندسة والتسليم",
    keySpecsLabel: "المعايير الفنية والقدرات الرئيسية",
    inquireCategory: "استفسر عن هذا القطاع",
  },
};

const SLUG_ORDER = [
  "space-economy",
  "mining-minerals",
  "agtech",
  "lifecare",
  "lifestyle",
  "robotics",
  "global-trading",
];

export default function DivisionDetailContent({ slug }: { slug: string }) {
  const { currentLanguage } = useLanguage();
  const langKey = currentLanguage in LOCALIZED_DIVISIONS ? currentLanguage : "de";
  const divMap = LOCALIZED_DIVISIONS[langKey] || LOCALIZED_DIVISIONS["de"];
  const ui = UI_TEXT[langKey] || UI_TEXT["de"];

  const division = divMap[slug] || divMap["space-economy"];
  const IconComponent = iconMap[division.icon] || Globe;

  const currentIdx = SLUG_ORDER.indexOf(slug);
  const prevSlug = currentIdx > 0 ? SLUG_ORDER[currentIdx - 1] : null;
  const nextSlug = currentIdx < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIdx + 1] : null;

  const prevDivision = prevSlug ? divMap[prevSlug] : null;
  const nextDivision = nextSlug ? divMap[nextSlug] : null;

  const categoryDetails: CategoryDetail[] =
    DIVISION_CATEGORIES_DATA[currentLanguage]?.[slug] ||
    DIVISION_CATEGORIES_DATA["en"]?.[slug] ||
    [];

  return (
    <div className={`pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 bg-[#f4f5f6]">
        <Link
          href="/divisions"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
        >
          <ArrowLeft className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
          <span>{ui.allDivisions}</span>
        </Link>
      </div>

      {/* Division Hero */}
      <section className="relative py-24 lg:py-28 bg-[#001822] text-white overflow-hidden mt-4 border-y border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src={divisionImages[slug] || "/hero_industrial_bg.png"}
            alt={division.title}
            fill
            priority
            quality={95}
            className="object-cover opacity-85 filter contrast-105 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/75 via-[#001822]/50 to-[#001822]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#001822]/85 border border-[#009999] rounded-none text-[#00cccc] backdrop-blur-md shadow-lg">
                  <IconComponent className="w-8 h-8 text-[#00cccc]" />
                </div>
                <span className="font-mono font-bold text-sm uppercase tracking-widest text-[#00cccc] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  {ui.strategicSector}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                {division.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">{division.tagline}</p>
              <Link
                href="/contact"
                className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 max-w-fit rounded-none font-bold text-sm uppercase tracking-wider shadow-lg"
              >
                <span>{ui.requestInquiry}</span>
                <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Division Info Card & Visual Representation */}
            <div className="bg-slate-50 border border-slate-200 rounded-none overflow-hidden space-y-0 text-slate-800 shadow-none">
              <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-slate-200">
                <Image
                  src={divisionImages[slug] || "/hero_industrial_bg.png"}
                  alt={division.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00cccc]">
                    {ui.facilityOps}
                  </div>
                  <div className="text-lg font-black uppercase">
                    {division.title} {ui.platform}
                  </div>
                </div>
              </div>

              <div className="p-7 space-y-5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-3">
                  {ui.overview}
                </div>
                <p className="text-slate-650 text-sm leading-relaxed">{division.description}</p>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                    <span>{ui.productsServices}</span>
                    <span className="text-[9px] font-mono text-[#009999] lowercase">jump to section ↓</span>
                  </div>
                  <ul className="space-y-1.5">
                    {division.categories.map((cat, idx) => {
                      const detail = categoryDetails[idx];
                      const targetId = detail ? detail.id : `cat-${idx}`;
                      return (
                        <li key={cat}>
                          <a
                            href={`#${targetId}`}
                            className="flex items-center justify-between p-1.5 px-2 rounded-none hover:bg-slate-100 transition-colors group"
                          >
                            <span className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 group-hover:text-[#009999] font-medium transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 group-hover:scale-110 transition-transform" />
                              <span>{cat}</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#009999] group-hover:translate-x-1 transition-all" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          DEDICATED CATEGORY SECTIONS WITH CONTENT, IMAGES & PROCESS
      ───────────────────────────────────────────────────────────── */}
      {categoryDetails.length > 0 && (
        <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-3xl mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002d3b]/5 border border-[#009999]/30 text-[#009999] text-xs font-mono font-bold tracking-widest uppercase">
                <Workflow className="w-3.5 h-3.5 text-[#009999]" />
                <span>{ui.capabilitiesSectionBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#002d3b] tracking-tight uppercase leading-tight">
                {division.title} — {ui.capabilitiesSectionTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {ui.capabilitiesSectionDesc}
              </p>
            </div>

            {/* Category Cards Stack */}
            <div className="space-y-20 lg:space-y-24">
              {categoryDetails.map((cat, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={cat.id}
                    id={cat.id}
                    className="scroll-mt-28 bg-[#f8fafc] border border-slate-200 hover:border-[#009999]/50 transition-all duration-300 shadow-sm overflow-hidden"
                  >
                    {/* Top Header Strip */}
                    <div className="bg-[#001822] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#00cccc] uppercase tracking-widest font-semibold">
                          {cat.badge}
                        </span>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
                        {cat.metricBadge}
                      </span>
                    </div>

                    {/* Main Grid: Content + Image */}
                    <div className="p-6 sm:p-10 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        {/* Info Column */}
                        <div className={`space-y-6 ${isEven ? "lg:col-span-7 lg:order-1" : "lg:col-span-7 lg:order-2"}`}>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight mb-2">
                              {cat.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#009999] uppercase tracking-wider font-mono">
                              {cat.badge}
                            </p>
                          </div>

                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            {cat.description}
                          </p>

                          {/* Key Technical Standards & Capabilities */}
                          <div className="pt-2">
                            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-[#009999]" />
                              <span>{ui.keySpecsLabel}</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {cat.keyFeatures.map((feat, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="flex items-start gap-2 bg-white p-3 border border-slate-200 text-xs sm:text-[13px] text-slate-700 leading-normal"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#009999] shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action CTA */}
                          <div className="pt-4">
                            <Link
                              href={`/contact?interest=${encodeURIComponent(cat.title)}`}
                              className="inline-flex items-center gap-2 px-6 py-3 bg-[#002d3b] hover:bg-[#009999] text-white transition-colors duration-200 text-xs font-bold uppercase tracking-wider group"
                            >
                              <span>{ui.inquireCategory}</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Visual Image Column */}
                        <div className={`relative min-h-[280px] sm:min-h-[340px] lg:h-[380px] overflow-hidden border border-slate-200 group ${isEven ? "lg:col-span-5 lg:order-2" : "lg:col-span-5 lg:order-1"}`}>
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/85 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <div className="text-[11px] font-mono text-[#00cccc] uppercase tracking-wider font-bold">
                              {cat.metricBadge}
                            </div>
                            <div className="text-sm font-bold uppercase tracking-tight">
                              {cat.title}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Process Flow Strip */}
                      <div className="mt-10 pt-8 border-t border-slate-200">
                        <div className="flex items-center gap-2 mb-6">
                          <Workflow className="w-4 h-4 text-[#009999]" />
                          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#002d3b]">
                            {ui.processHeading} — {cat.title}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {cat.process.map((pStep, pIdx) => (
                            <div
                              key={pIdx}
                              className="relative bg-white p-5 border border-slate-200 hover:border-[#009999]/60 hover:shadow-sm transition-all duration-200 space-y-2 flex flex-col justify-between"
                            >
                              <h5 className="text-xs font-bold uppercase text-[#002d3b] tracking-tight leading-snug">
                                {pStep.title}
                              </h5>
                              <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                                {pStep.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Navigation between Divisions */}
      <section className="py-8 bg-white border-t border-slate-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevDivision && prevSlug ? (
              <Link
                href={`/divisions/${prevSlug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
              >
                <ArrowLeft className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
                <span>{prevDivision.title}</span>
              </Link>
            ) : <div />}
            <Link
              href="/divisions"
              className="text-[10px] font-bold text-slate-400 hover:text-[#009999] transition-colors uppercase tracking-wider"
            >
              {ui.allDivisions}
            </Link>
            {nextDivision && nextSlug ? (
              <Link
                href={`/divisions/${nextSlug}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#009999] transition-colors"
              >
                <span>{nextDivision.title}</span>
                <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
}

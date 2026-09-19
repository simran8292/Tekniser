"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowDown,
  RefreshCw,
  Cpu,
  Zap,
  Compass,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CAPABILITIES_DATA: Record<string, {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    sub: string;
    p1: string;
    p2: string;
    p3: string;
    ribbon: string;
    p4: string;
    pipeline: string;
  };
  steps: string[];
  features: {
    badge1: string;
    title1: string;
    badge2: string;
    title2: string;
    badge3: string;
    title3: string;
  };
  global: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    footer: string;
  };
  principles: {
    kicker: string;
    title: string;
    items: { title: string; desc: string }[];
  };
  flywheel: {
    kicker: string;
    title: string;
    titleHighlight: string;
    sub: string;
    desc: string;
    stageLabel: string;
    loop: string;
    resultKicker: string;
    resultTitle1: string;
    resultTitle2: string;
    cta1: string;
    cta2: string;
    items: { title: string; desc: string; icon: React.ElementType }[];
  };
}> = {
  de: {
    hero: {
      badge: "INNOVATION",
      title1: "DAS NÄCHSTE ERFORSCHEN.",
      title2: "BAUEN, WAS ZÄHLT.",
      sub: "Innovation an den Grenzen von Menschheit, Technologie und Natur.",
      p1: "Bei TAKNISER ist Innovation keine Abteilung.",
      p2: "Es ist eine Denkweise, eine Art des Bauens und die feste Verpflichtung, die Zukunft aktiv zu gestalten.",
      p3: "Wir erforschen neue Technologien, wissenschaftliche Durchbrüche, natürliche Ressourcen, sich verändernde menschliche Bedürfnisse und neue Möglichkeiten auf der ganzen Welt. Wir verbinden Ideen mit Fachwissen, Technologie mit Chancen und Entdeckung mit Umsetzung.",
      ribbon: "Vom Weltraum zur Erde. Von Ressourcen zum Leben. Von Intelligenz zu Wirkung.",
      p4: "TAKNISER baut ein vernetztes Innovations-Ökosystem auf, um zu entdecken, was als Nächstes kommt – und die vielversprechendsten Möglichkeiten in skalierbare Lösungen für eine bessere Zukunft zu verwandeln.",
      pipeline: "Die Innovations-Pipeline",
    },
    steps: ["ERFORSCHEN", "ENTDECKEN", "BAUEN", "SKALIEREN", "REGENERIEREN"],
    features: {
      badge1: "Durchbruch-Technologie",
      title1: "Intelligente Robotik",
      badge2: "Globale Operationen",
      title2: "Vernetzter Innovations-Hub",
      badge3: "Nächster Horizont",
      title3: "Raumfahrt & Erdbeobachtung",
    },
    global: {
      kicker: "GLOBALE PERSPEKTIVE",
      title: "INNOVATION OHNE GRENZEN",
      p1: "Der nächste Durchbruch kann aus einem Labor in Europa stammen, einer Universität in Asien, einem Technologieunternehmen in Nordamerika, einer Ressourcenentdeckung in Afrika, einer Farm in Indien – oder aus einer Idee, die es noch gar nicht gibt.",
      p2: "TAKNISER agiert mit globaler Perspektive und offenem Horizont.",
      p3: "Wir glauben, dass Innovation dort am stärksten gedeiht, wo Disziplinen, Kulturen, Technologien und Märkte zusammenkommen.",
      footer: "Eine Welt. Viele Möglichkeiten. Unendliche Chancen für Innovation.",
    },
    principles: {
      kicker: "FUNDAMENTALE SÄULEN",
      title: "UNSERE INNOVATIONSPRINZIPIEN",
      items: [
        { title: "NEUGIERIG", desc: "Wir hinterfragen das Bekannte und erforschen das Mögliche." },
        { title: "MUTIG", desc: "Wir verfolgen Chancen, die andere leicht übersehen." },
        { title: "VERNETZT", desc: "Wir bringen Menschen, Wissen, Technologie und Märkte zusammen." },
        { title: "VERANTWORTUNGSVOLL", desc: "Wir innovieren mit Rücksicht auf Mensch, Gesellschaft und Planeten." },
        { title: "EXPERIMENTELL", desc: "Wir testen Ideen in der realen Welt und lernen zügig." },
        { title: "LANGFRISTIG", desc: "Wir bauen für Jahrzehnte – nicht bloß für das nächste Quartal." },
        { title: "WIRKUNGSORIENTIERT", desc: "Wir messen Innovation an dem, was sie tatsächlich verändert." },
      ],
    },
    flywheel: {
      kicker: "KONTINUIERLICHER INNOVATIONSZYKLUS",
      title: "DAS TAKNISER",
      titleHighlight: "INNOVATIONS-SCHWUNGRAD",
      sub: "Eine Entdeckung kann ein ganzes Ökosystem transformieren.",
      desc: "Unser Innovationsmodell ist darauf ausgelegt, einen kontinuierlichen Zyklus aus Entdeckung, Umsetzung und Wirkung zu schaffen.",
      stageLabel: "ZYKLUSPHASE",
      loop: "Geschlossener Innovationszyklus: Regenerieren speist sich zurück in Erforschen",
      resultKicker: "Das Ergebnis:",
      resultTitle1: "Innovation, die sich vervielfacht.",
      resultTitle2: "Wirkung, die skaliert.",
      cta1: "Mit Innovationsteam verbinden",
      cta2: "Globales Netzwerk erkunden",
      items: [
        { title: "ERFORSCHEN", desc: "Wir blicken über die Grenzen von heute hinaus.", icon: Compass },
        { title: "ENTDECKEN", desc: "Wir identifizieren Technologien, Chancen und Ideen mit transformativem Potenzial.", icon: Sparkles },
        { title: "BAUEN", desc: "Wir verwandeln vielversprechende Ideen in Produkte, Unternehmen, Prototypen und Lösungen.", icon: Cpu },
        { title: "SKALIEREN", desc: "Wir verbinden erfolgreiche Innovationen mit Kapital, Fähigkeiten, Märkten und globalen Netzwerken.", icon: Zap },
        { title: "REGENERIEREN", desc: "Wir schaffen Lösungen, die Menschen, Gemeinschaften, Volkswirtschaften und die Natur stärken.", icon: RefreshCw },
      ],
    },
  },
  en: {
    hero: {
      badge: "INNOVATION",
      title1: "EXPLORING WHAT'S NEXT.",
      title2: "BUILDING WHAT MATTERS.",
      sub: "Innovating across the frontiers of humanity, technology and nature.",
      p1: "At TAKNISER, innovation is not a department.",
      p2: "It is a way of thinking, a way of building, and a commitment to shaping the future.",
      p3: "We explore emerging technologies, scientific breakthroughs, natural resources, changing human needs and new possibilities across the world. We connect ideas with expertise, technology with opportunity, and discovery with execution.",
      ribbon: "From Space to Earth. From Resources to Life. From Intelligence to Impact.",
      p4: "TAKNISER is building an interconnected innovation ecosystem designed to discover what comes next—and turn the most promising possibilities into scalable solutions for a better future.",
      pipeline: "The Innovation Pipeline",
    },
    steps: ["EXPLORE", "DISCOVER", "BUILD", "SCALE", "REGENERATE"],
    features: {
      badge1: "Breakthrough Tech",
      title1: "Intelligent Robotics",
      badge2: "Global Operations",
      title2: "Connected Innovation Hub",
      badge3: "Next Horizon",
      title3: "Space & Earth Observation",
    },
    global: {
      kicker: "GLOBAL PERSPECTIVE",
      title: "INNOVATION WITHOUT BORDERS",
      p1: "The next breakthrough may come from a laboratory in Europe, a university in Asia, a technology company in North America, a resource discovery in Africa, a farm in India—or from an idea that does not yet exist.",
      p2: "TAKNISER operates with a global perspective and an open horizon.",
      p3: "We believe innovation flourishes when disciplines, cultures, technologies and markets come together.",
      footer: "One world. Many possibilities. Infinite opportunities to innovate.",
    },
    principles: {
      kicker: "FOUNDATIONAL PILLARS",
      title: "OUR INNOVATION PRINCIPLES",
      items: [
        { title: "CURIOUS", desc: "We question what is known and explore what is possible." },
        { title: "BOLD", desc: "We pursue opportunities others may overlook." },
        { title: "CONNECTED", desc: "We bring together people, knowledge, technology and markets." },
        { title: "RESPONSIBLE", desc: "We innovate with consideration for people, society and the planet." },
        { title: "EXPERIMENTAL", desc: "We test ideas in the real world and learn quickly." },
        { title: "LONG-TERM", desc: "We build for decades—not merely for the next quarter." },
        { title: "IMPACT-DRIVEN", desc: "We measure innovation by what it changes." },
      ],
    },
    flywheel: {
      kicker: "CONTINUOUS INNOVATION CYCLE",
      title: "THE TAKNISER",
      titleHighlight: "INNOVATION FLYWHEEL",
      sub: "One Discovery Can Transform an Entire Ecosystem.",
      desc: "Our innovation model is designed to create a continuous cycle of discovery, execution and impact.",
      stageLabel: "CYCLE STAGE",
      loop: "Closed-Loop Innovation Cycle: Regenerate Feeds Back into Explore",
      resultKicker: "The result:",
      resultTitle1: "Innovation that compounds.",
      resultTitle2: "Impact that scales.",
      cta1: "Connect with Our Innovation Team",
      cta2: "Explore Global Network",
      items: [
        { title: "EXPLORE", desc: "We look beyond today's boundaries.", icon: Compass },
        { title: "DISCOVER", desc: "We identify technologies, opportunities and ideas with transformative potential.", icon: Sparkles },
        { title: "BUILD", desc: "We turn promising ideas into products, businesses, prototypes and solutions.", icon: Cpu },
        { title: "SCALE", desc: "We connect successful innovations with capital, capabilities, markets and global networks.", icon: Zap },
        { title: "REGENERATE", desc: "We create solutions that strengthen people, communities, economies and the natural world.", icon: RefreshCw },
      ],
    },
  },
  ar: {
    hero: {
      badge: "الابتكار الشامل",
      title1: "استكشاف ما هو قادم.",
      title2: "بناء ما يهم البشرية.",
      sub: "الابتكار عبر آفاق الإنسانية والتكنولوجيا والطبيعة.",
      p1: "في تاكنيسر، الابتكار ليس مجرد قسم مستقل.",
      p2: "إنه أسلوب تفكير، وطريقة بناء، والتزام استراتيجي راسخ بصياغة المستقبل.",
      p3: "نستكشف التقنيات الناشئة، والاكتشافات العلمية، والموارد الطبيعية، واحتياجات الإنسان المتجددة. نربط الأفكار بالخبرة، والتقنية بالفرص، والاكتشاف بالتنفيذ.",
      ribbon: "من الفضاء إلى الأرض. من الموارد إلى الحياة. من الذكاء إلى الأثر الإيجابي.",
      p4: "تبني تاكنيسر منظومة ابتكار مترابطة ومصممة لاكتشاف المستقبل وتحويل أكثر الإمكانيات الواعدة إلى حلول قابلة للتطوير.",
      pipeline: "سلسلة مراحل الابتكار",
    },
    steps: ["الاستكشاف", "الاكتشاف", "البناء", "التوسع", "التجدد"],
    features: {
      badge1: "تقنيات رائدة",
      title1: "الروبوتات الذكية",
      badge2: "عمليات عالمية",
      title2: "مركز الابتكار المتصل",
      badge3: "الآفاق المستقبلية",
      title3: "مراقبة الفضاء والأرض",
    },
    global: {
      kicker: "منظور عالمي",
      title: "ابتكار بلا حدود",
      p1: "قد ينطلق الإنجاز التالي من مختبر في أوروبا، أو جامعة في آسيا، أو شركة تقنية في أمريكا الشمالية، أو اكتشاف موارد في أفريقيا، أو مزرعة في الهند، أو من فكرة لم تولد بعد.",
      p2: "تعمل تاكنيسر بمنظور عالمي وأفق مفتوح على كل الاحتمالات.",
      p3: "نؤمن بأن الابتكار يزدهر عندما تتلاقى التخصصات والثقافات والتقنيات والأسواق معاً.",
      footer: "عالم واحد. إمكانيات متعددة. فرص لا متناهية للابتكار.",
    },
    principles: {
      kicker: "الركائز الأساسية",
      title: "مبادئنا في الابتكار",
      items: [
        { title: "الفضول المعرفي", desc: "نسائل ما هو معروف ونستكشف ما هو ممكن ومتاح." },
        { title: "الجرأة", desc: "نقتنص الفرص التي قد يغفل عنها الآخرون." },
        { title: "الترابط", desc: "نجمع بين الكفاءات والمعرفة والتكنولوجيا والأسواق." },
        { title: "المسؤولية", desc: "نبتكر مع مراعاة الإنسان والمجتمع وحماية الكوكب." },
        { title: "التجريب العلمي", desc: "نختبر الأفكار في بيئات واقعية ونتعلم بسرعة." },
        { title: "الرؤية بعيدة المدى", desc: "نبني لعقود قادمة وليس لمجرد نتائج ربع سنوية." },
        { title: "الأثر الملموس", desc: "نقيس نجاح الابتكار بما يحدثه من تحول إيجابي حقيقي." },
      ],
    },
    flywheel: {
      kicker: "دورة الابتكار المستمرة",
      title: "عجلة تاكنيسر",
      titleHighlight: "للابتكار المتسارع",
      sub: "اكتشاف واحد قادر على تحويل منظومة كاملة.",
      desc: "نموذج الابتكار لدينا مصمم لخلق دورة مستمرة من الاكتشاف والتنفيذ والتأثير الإيجابي.",
      stageLabel: "مرحلة الدورة",
      loop: "دورة ابتكار مغلقة: التجدد يغذي الاستكشاف مجدداً",
      resultKicker: "النتيجة:",
      resultTitle1: "ابتكار يتضاعف أثره.",
      resultTitle2: "وقوة تتوسع عالمياً.",
      cta1: "تواصل مع فريق الابتكار",
      cta2: "استكشف الشبكة العالمية",
      items: [
        { title: "الاستكشاف", desc: "نتطلع إلى ما وراء حدود اليوم وتحدياته.", icon: Compass },
        { title: "الاكتشاف", desc: "نحدد التقنيات والأفكار ذات الإمكانات التحويلية الكبرى.", icon: Sparkles },
        { title: "البناء", desc: "نحول الأفكار الواعدة إلى نماذج أولية وحلول قابلة للتطبيق.", icon: Cpu },
        { title: "التوسع", desc: "نربط الابتكارات الناجحة برأس المال والأسواق والشبكات الدولية.", icon: Zap },
        { title: "التجدد", desc: "نبتكر حلولاً تدعم المجتمعات والاقتصادات والطبيعة.", icon: RefreshCw },
      ],
    },
  },
};

export default function CapabilitiesContent() {
  const { currentLanguage } = useLanguage();
  const data = CAPABILITIES_DATA[currentLanguage] || CAPABILITIES_DATA["de"] || CAPABILITIES_DATA["en"];

  return (
    <div className={`pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clean_robotics.jpg"
            alt="Advanced Innovation and Robotics"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)] pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase rounded-none bg-[#002d3b]/60 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999] animate-pulse" />
            <span>{data.hero.badge}</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-white">
              {data.hero.title1} <br />
              <span className="text-[#009999]">{data.hero.title2}</span>
            </h1>
            <p className="text-sm sm:text-lg text-[#00cccc] font-semibold italic max-w-2xl mx-auto">
              {data.hero.sub}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5 text-slate-200 text-sm sm:text-base leading-relaxed bg-[#002d3b]/85 p-6 sm:p-10 border border-slate-700/80 shadow-2xl">
            <p className={`text-base sm:text-lg font-bold text-white pl-3 ${currentLanguage === 'ar' ? 'border-r-2 pr-3 border-[#009999]' : 'border-l-2 pl-3 border-[#009999]'}`}>
              {data.hero.p1}
            </p>
            <p className="text-slate-300">
              {data.hero.p2}
            </p>
            <p className="text-slate-300">
              {data.hero.p3}
            </p>

            <div className={`p-4 bg-[#001822] text-[#009999] font-black text-sm sm:text-base uppercase tracking-wider ${currentLanguage === 'ar' ? 'border-r-4 border-[#009999]' : 'border-l-4 border-[#009999]'}`}>
              {data.hero.ribbon}
            </div>

            <p className="text-slate-300">
              {data.hero.p4}
            </p>
          </div>

          {/* Continuous Flow Stepper Indicator */}
          <div className="pt-2">
            <div className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-3 font-semibold">
              {data.hero.pipeline}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono font-bold">
              {data.steps.map((step, idx, arr) => (
                <div key={step} className="flex items-center gap-2 sm:gap-3">
                  <div className="px-3.5 py-2 bg-[#002d3b] border border-[#009999]/60 text-white tracking-widest hover:border-[#009999] transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#009999] rounded-full inline-block" />
                    <span>{step}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <span className={`text-[#009999] font-bold text-base ${currentLanguage === 'ar' ? 'rotate-180' : ''}`}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Showcase Visual Feature Grid */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/clean_robotics.jpg"
                alt="AI Robotics and Autonomous Engineering"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  {data.features.badge1}
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  {data.features.title1}
                </div>
              </div>
            </div>

            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/clean_corporate_hq_branded.jpg"
                alt="Global Innovation and Research Operations Hub"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  {data.features.badge2}
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  {data.features.title2}
                </div>
              </div>
            </div>

            <div className="relative h-64 border border-slate-200 overflow-hidden shadow-sm group">
              <Image
                src="/platform_space.jpg"
                alt="Next-Generation Space Observation and Earth Intelligence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001822]/90 via-[#001822]/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-[10px] font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  {data.features.badge3}
                </span>
                <div className="text-white font-black text-lg uppercase tracking-tight">
                  {data.features.title3}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Column 1: Innovation Without Borders */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 space-y-6">
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
                  {data.global.kicker}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                  {data.global.title}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{data.global.p1}</p>
                <p className="font-bold text-[#002d3b]">{data.global.p2}</p>
                <p>{data.global.p3}</p>
              </div>

              <div className="pt-6 border-t border-slate-200 text-xs sm:text-sm font-bold text-[#009999] uppercase tracking-wide">
                {data.global.footer}
              </div>
            </div>

            {/* Column 2: Innovation Principles */}
            <div className="bg-[#f8fafc] border border-slate-200 p-8 sm:p-10 space-y-6">
              <div className="space-y-2 border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-[#009999] tracking-widest uppercase">
                  {data.principles.kicker}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight">
                  {data.principles.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {data.principles.items.map((pr) => (
                  <div
                    key={pr.title}
                    className="p-3 bg-white border border-slate-200 hover:border-[#009999] transition-colors flex flex-col sm:flex-row sm:items-baseline gap-2"
                  >
                    <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider shrink-0 min-w-[120px]">
                      {pr.title}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">
                      {pr.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-bold tracking-widest uppercase bg-[#002d3b]/50">
              <RefreshCw className="w-3.5 h-3.5 text-[#009999]" />
              <span>{data.flywheel.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {data.flywheel.title} <span className="text-[#009999]">{data.flywheel.titleHighlight}</span>
            </h2>
            <div className="text-base sm:text-xl text-[#00cccc] font-semibold italic">
              {data.flywheel.sub}
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {data.flywheel.desc}
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {data.flywheel.items.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center">
                  <div className="w-full bg-[#002d3b] border border-slate-700/80 p-5 sm:p-6 flex items-start gap-4 hover:border-[#009999] transition-all group">
                    <div className="p-3 bg-[#001822] border border-[#009999]/40 text-[#009999] shrink-0 group-hover:border-[#009999] transition-colors">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                        {data.flywheel.stageLabel}
                      </div>
                      <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {idx < data.flywheel.items.length - 1 && (
                    <div className="my-1.5 flex flex-col items-center justify-center">
                      <div className="w-0.5 h-3 bg-[#009999]/40" />
                      <ArrowDown className="w-4 h-4 text-[#009999]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-2 text-xs font-mono text-[#009999] uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>{data.flywheel.loop}</span>
          </div>

          <div className="text-center bg-[#002d3b] border-2 border-[#009999] p-6 sm:p-10 space-y-3 max-w-2xl mx-auto shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-[#009999] font-mono font-bold">
              {data.flywheel.resultKicker}
            </div>
            <div className="text-xl sm:text-3xl font-black text-white uppercase tracking-wide">
              {data.flywheel.resultTitle1} <br className="hidden sm:inline" />
              <span className="text-[#009999]">{data.flywheel.resultTitle2}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 text-sm font-bold tracking-wider uppercase"
            >
              <span>{data.flywheel.cta1}</span>
              <ArrowRight className={`w-4 h-4 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
            <Link
              href="/global-network"
              className="px-6 py-3 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              {data.flywheel.cta2}
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Zap,
  Leaf,
  Handshake,
  Cpu,
  Settings,
  Link2,
  Users,
  Lightbulb,
  Landmark,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const MISSION_PILLARS_DE = [
  { text: "Erstklassige Produkte und Technologien liefern.", icon: Settings },
  { text: "Nachhaltige globale Lieferketten aufbauen.", icon: Link2 },
  { text: "Langfristigen Mehrwert für Kunden und Partner schaffen.", icon: Users },
  { text: "Innovation in allen Geschäftsbereichen fördern.", icon: Lightbulb },
  { text: "Regierungen und Industrien mit verlässlicher Infrastruktur unterstützen.", icon: Landmark },
  { text: "Zukunftsfähige Technologien für die nächste Generation entwickeln.", icon: Cpu },
  { text: "Die Präsenz von TAKNISER in allen wichtigen internationalen Märkten ausbauen.", icon: Globe },
];

const MISSION_PILLARS_EN = [
  { text: "Deliver world-class products and technologies.", icon: Settings },
  { text: "Build sustainable global supply chains.", icon: Link2 },
  { text: "Create long-term value for customers and partners.", icon: Users },
  { text: "Promote innovation across every business division.", icon: Lightbulb },
  { text: "Support governments and industries through reliable infrastructure solutions.", icon: Landmark },
  { text: "Develop future-ready technologies for the next generation.", icon: Cpu },
  { text: "Expand TAKNISER's presence across every major international market.", icon: Globe },
];

const MISSION_PILLARS_AR = [
  { text: "تقديم منتجات وتقنيات عالمية المستوى.", icon: Settings },
  { text: "بناء سلاسل توريد عالمية مستدامة.", icon: Link2 },
  { text: "خلق قيمة طويلة الأجل للعملاء والشركاء.", icon: Users },
  { text: "تعزيز الابتكار في جميع قطاعات الأعمال.", icon: Lightbulb },
  { text: "دعم الحكومات والصناعات عبر حلول بنية تحتية موثوقة.", icon: Landmark },
  { text: "تطوير تقنيات جاهزة للمستقبل تلبي تطلعات الأجيال القادمة.", icon: Cpu },
  { text: "توسيع تواجد تاكنيسر في كل سوق دولي رئيسي.", icon: Globe },
];

const STRATEGIC_PILLARS_DE = [
  { title: "Innovation", desc: "Kontinuierliche Investition in Zukunftstechnologien, digitale Fähigkeiten und Ingenieurtalente.", icon: Cpu },
  { title: "Nachhaltigkeit", desc: "Aufbau verantwortungsvoller Lieferketten, umweltbewusster Prozesse und ökologischer Verpflichtungen.", icon: Leaf },
  { title: "Globale Expansion", desc: "Stärkung unserer Präsenz in allen Schlüsselmärkten durch regionale Hauptsitze und Partnerschaften.", icon: Globe },
  { title: "Technologieführerschaft", desc: "Investition in Industrie 4.0, KI-Robotik, Raumfahrtwirtschaft und intelligente Infrastruktur.", icon: Zap },
  { title: "Verlässliche Partnerschaften", desc: "Langfristige Wertschöpfung für Kunden, Partner und Industrie durch vertrauensvolle Beziehungen.", icon: Handshake },
  { title: "Integriertes Netzwerk", desc: "Ein globales Industrie-Ökosystem, das Ingenieurwesen, Fertigung, Beschaffung und Handel verbindet.", icon: Sparkles },
];

const STRATEGIC_PILLARS_EN = [
  { title: "Innovation", desc: "Continuous investment in advanced technologies, digital capabilities, and next-generation engineering talent.", icon: Cpu },
  { title: "Sustainability", desc: "Building responsible supply chains, environmentally conscious operations, and long-term ecological commitments.", icon: Leaf },
  { title: "Global Expansion", desc: "Strengthening our presence across every major international market through strategic RHQ expansion and partnerships.", icon: Globe },
  { title: "Technology Leadership", desc: "Investing in Industry 4.0, AI robotics, space economy, digital transformation, and smart infrastructure.", icon: Zap },
  { title: "Trusted Partnerships", desc: "Creating long-term value for customers, partners, employees, industries, and society through trusted relationships.", icon: Handshake },
  { title: "Integrated Network", desc: "One integrated global industrial ecosystem connecting engineering, manufacturing, sourcing, logistics, and trade.", icon: Sparkles },
];

const STRATEGIC_PILLARS_AR = [
  { title: "الابتكار", desc: "استثمار مستمر في التقنيات المتقدمة والقدرات الرقمية والمواهب الهندسية الواعدة.", icon: Cpu },
  { title: "الاستدامة", desc: "بناء سلاسل توريد مسؤولة وعمليات صديقة للبيئة والتزامات إيكولوجية راسخة.", icon: Leaf },
  { title: "التوسع العالمي", desc: "تعزيز حضورنا في كل سوق دولي رئيسي من خلال التوسع الإقليمي الاستراتيجي والشراكات.", icon: Globe },
  { title: "الريادة التكنولوجية", desc: "الاستثمار في الثورة الصناعية الرابعة وروبوتات الذكاء الاصطناعي واقتصاد الفضاء والبنية التحتية الذكية.", icon: Zap },
  { title: "شراكات موثوقة", desc: "خلق قيمة طويلة الأجل للعملاء والشركاء والصناعات والمجتمعات من خلال علاقات موثوقة.", icon: Handshake },
  { title: "شبكة متكاملة", desc: "منظومة صناعية عالمية موحدة تربط الهندسة والتصنيع والتوريد واللوجستيات والتجارة.", icon: Sparkles },
];

const ROADMAP_PILLARS_DE = [
  {
    title: "EINE GLOBALE VERNETZUNG",
    desc: "Ein zusammenhängendes Netzwerk aus regionalen Hauptsitzen, Betriebsgesellschaften, Herstellern, Distributoren und Kunden – vereint in einem weltweiten Ökosystem.",
    image: "/vision_pillar_1.jpg",
  },
  {
    title: "EIN INDUSTRIELLES ÖKOSYSTEM",
    desc: "Integration von Ingenieurwesen, Fertigung, Beschaffung, Logistik, Technologie und Vertrieb für effizientere und widerstandsfähigere globale Lieferketten.",
    image: "/vision_pillar_2.jpg",
  },
  {
    title: "EINE DIGITALE VERNETZTE WELT",
    desc: "Einsatz digitaler Technologien, intelligenter Systeme, Datenanalytik und Automatisierung zur Echtzeit-Vernetzung von Märkten, Betriebsabläufen und Partnern.",
    image: "/vision_pillar_3.jpg",
  },
  {
    title: "EIN STANDARD DER EXZELLENZ",
    desc: "Weiterführung der Grundsätze, die TAKNISER seit den frühesten Anfängen geprägt haben – Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst und Vertrauen.",
    image: "/vision_pillar_4.jpg",
  },
  {
    title: "EINE VERANTWORTUNGSVOLLE ZUKUNFT",
    desc: "Wachstum, das dauerhaften Nutzen für Mensch, Industrie und Umwelt stiftet – mit Nachhaltigkeit und Integrität als Kern der TAKNISER-DNA.",
    image: "/vision_pillar_5.jpg",
  },
  {
    title: "EINE WELT – GEMEINSAME CHANCEN",
    desc: "Überwindung traditioneller Grenzen zwischen Märkten und Sektoren zur Erschließung neuer Möglichkeiten für Innovation, Investition und Wohlstand.",
    image: "/vision_pillar_6.jpg",
  },
];

const ROADMAP_PILLARS_EN = [
  {
    title: "ONE GLOBAL NETWORK",
    desc: "A connected network of regional headquarters, operating companies, strategic partners, manufacturers, distributors, and customers — working together as one global ecosystem.",
    image: "/vision_pillar_1.jpg",
  },
  {
    title: "ONE INDUSTRIAL ECOSYSTEM",
    desc: "Integrating engineering, manufacturing, sourcing, procurement, logistics, technology, and distribution to create more efficient and resilient global supply chains.",
    image: "/vision_pillar_2.jpg",
  },
  {
    title: "ONE DIGITAL CONNECTED WORLD",
    desc: "Using digital technologies, intelligent systems, data, and automation to connect markets, operations, customers, and partners in real time.",
    image: "/vision_pillar_3.jpg",
  },
  {
    title: "ONE STANDARD OF EXCELLENCE",
    desc: "Carrying forward the principles that shaped TAKNISER from its earliest roots — Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen — while continuously raising the standard for a changing world.",
    image: "/vision_pillar_4.jpg",
  },
  {
    title: "ONE RESPONSIBLE FUTURE",
    desc: "Building growth that creates lasting value for people, communities, industries, and the planet — with sustainability and responsible business embedded into the TAKNISER ecosystem.",
    image: "/vision_pillar_5.jpg",
  },
  {
    title: "ONE GLOBE, SHARED OPPORTUNITY",
    desc: "Breaking down traditional boundaries between markets and industries to create new opportunities for collaboration, innovation, investment, and sustainable economic development.",
    image: "/vision_pillar_6.jpg",
  },
];

const ROADMAP_PILLARS_AR = [
  {
    title: "شبكة عالمية واحدة",
    desc: "شبكة مترابطة من المقرات الإقليمية والشركات التشغيلية والشركاء والمصنعين والموزعين والعملاء — تعمل معاً كمنظومة عالمية متكاملة.",
    image: "/vision_pillar_1.jpg",
  },
  {
    title: "منظومة صناعية موحدة",
    desc: "دمج الهندسة والتصنيع والتوريد والمشتريات والخدمات اللوجستية والتكنولوجيا والتوزيع لبناء سلاسل توريد عالمية أكثر كفاءة ومرونة.",
    image: "/vision_pillar_2.jpg",
  },
  {
    title: "عالم رقمي مترابط",
    desc: "توظيف التقنيات الرقمية والأنظمة الذكية والبيانات والأتمتة لربط الأسواق والعمليات والعملاء والشركاء في الوقت الفعلي.",
    image: "/vision_pillar_3.jpg",
  },
  {
    title: "معيار واحد للتميز",
    desc: "مواصلة تجسيد المبادئ الراسخة التي صاغت تاكنيسر منذ نشأتها — الدقة، الجودة، الموثوقية، التميز الهندسي، والثقة.",
    image: "/vision_pillar_4.jpg",
  },
  {
    title: "مستقبل مسؤول",
    desc: "بناء نمو يحقق قيمة دائمة للمجتمعات والصناعات وكوكب الأرض — مع ترسيخ الاستدامة وممارسات الأعمال المسؤولة في صلب المنظومة.",
    image: "/vision_pillar_5.jpg",
  },
  {
    title: "عالم واحد، فرص مشتركة",
    desc: "تجاوز الحواجز التقليدية بين الأسواق والقطاعات لخلق فرص جديدة للتعاون والابتكار والاستثمار والتنمية الاقتصادية المستدامة.",
    image: "/vision_pillar_6.jpg",
  },
];

export default function VisionContent() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const missionPillars = isDe ? MISSION_PILLARS_DE : isAr ? MISSION_PILLARS_AR : MISSION_PILLARS_EN;
  const strategicPillars = isDe ? STRATEGIC_PILLARS_DE : isAr ? STRATEGIC_PILLARS_AR : STRATEGIC_PILLARS_EN;
  const roadmapPillars = isDe ? ROADMAP_PILLARS_DE : isAr ? ROADMAP_PILLARS_AR : ROADMAP_PILLARS_EN;

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainable_earth_slide.jpg"
            alt="Vision 2046 Global Outlook"
            fill
            priority
            className="object-cover opacity-55 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "STRATEGISCHE VISION" : isAr ? "الرؤية الاستراتيجية" : "Strategic Vision"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            VISION <span className="text-[#009999] inline-block">2046</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            {isDe
              ? "Die strategische Jahrhundertvision von TAKNISER weist den Weg von der hessischen Ingenieurstradition zu einem weltweit angesehenen Industrie-, Technologie- und Handelskonglomerat."
              : isAr
              ? "ترسم رؤية تاكنيسر المئوية المسار من التراث الهندسي في ولاية هسن إلى تكتل صناعي وتكنولوجي وتجاري موثوق عالمياً."
              : "TAKNISER’s strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "100+ Jahre Tradition" : isAr ? "+100 عام من التراث" : "100+ Years Heritage"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "Zielhorizont 2046" : isAr ? "الهدف الاستراتيجي 2046" : "Target Horizon 2046"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "Ein vernetztes Ökosystem" : isAr ? "منظومة واحدة مترابطة" : "One Connected Ecosystem"}
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE OFFICIAL VISION STATEMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-white border-y border-slate-200 overflow-hidden">
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[56%] xl:w-[54%] pointer-events-none select-none z-0">
          <Image
            src="/vision_global_network.jpg"
            alt="Global Interconnected Network - Vision 2046"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-28 sm:w-40 lg:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-white/90 sm:bg-white/70 lg:hidden z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
            <span className="text-xs sm:text-sm font-bold text-[#009999] uppercase tracking-wider block mb-2.5">
              {isDe ? "UNTERNEHMENSMANDAT" : isAr ? "التكليف المؤسسي" : "CORPORATE MANDATE"}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-black text-[#002d3b] uppercase tracking-tight mb-6 sm:mb-8 leading-tight">
              {isDe ? "Die offizielle Visionserklärung" : isAr ? "بيان الرؤية الرسمي" : "The Official Vision Statement"}
            </h2>

            <div className={`border-l-4 border-[#009999] ${isAr ? "border-l-0 border-r-4 pr-5 sm:pr-7" : "pl-5 sm:pl-7"} py-1`}>
              <blockquote className="text-base sm:text-lg lg:text-[1.125rem] font-semibold text-[#002d3b] italic leading-relaxed sm:leading-[1.75]">
                {isDe
                  ? "„TAKNISER zu einem der weltweit angesehensten Industrie-, Technologie-, Fertigungs-, Beschaffungs-, Distributions- und Handelskonglomerate auszubauen, indem wir innovative, nachhaltige und verlässliche Lösungen über alle Hauptkontinente hinweg bereitstellen und Unternehmen, Industrien und Gemeinschaften durch ein integriertes globales Netzwerk verbinden.“"
                  : isAr
                  ? "«بناء تاكنيسر لتصبح واحدة من أكثر التكتلات الصناعية والتكنولوجية والتصنيعية والتوريدية والتجارية احتراماً وموثوقية في العالم من خلال تقديم حلول مبتكرة ومستدامة عبر كل قارة رئيسية وربط قطاعات الأعمال والمجتمعات عبر منظومة عالمية متكاملة.»"
                  : "“To build TAKNISER into one of the world's most respected industrial, technology, manufacturing, sourcing, distribution, and global trading conglomerates by delivering innovative, sustainable, and reliable solutions across every major continent while connecting businesses, industries, and communities through one integrated global network.”"}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OUR MISSION PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-full lg:w-[42%] xl:w-[40%] pointer-events-none select-none z-0">
          <Image
            src="/mission_smart_factory.jpg"
            alt="Smart Manufacturing Facility - Vision 2046"
            fill
            priority
            className="object-cover object-left sm:object-[10%_top]"
          />
          <div className="absolute inset-y-0 right-0 w-28 sm:w-44 lg:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-white/90 sm:bg-white/75 lg:hidden z-10" />
        </div>

        <div className="relative z-10 max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="lg:ml-auto lg:w-[64%] xl:w-[65%]">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-bold text-[#009999] uppercase tracking-wider block mb-1.5 font-sans">
                {isDe ? "STRATEGISCHE UMSETZUNG" : isAr ? "التنفيذ الاستراتيجي" : "STRATEGIC EXECUTION"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-black text-[#002d3b] uppercase tracking-tight mb-2.5 leading-tight">
                {isDe ? "Unsere Missionssäulen" : isAr ? "ركائز رسالتنا" : "Our Mission Pillars"}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                {isDe
                  ? "Grundlegende Verpflichtungen, die jede operative Entscheidung und Geschäftsstrategie weltweit leiten."
                  : isAr
                  ? "التزامات جوهرية توجه كل استراتيجية تشغيلية وقرار مؤسسي حول العالم."
                  : "Foundational commitments guiding every operational strategy and corporate decision worldwide."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {missionPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-start hover:border-[#009999] hover:shadow-md transition-all rounded-none group min-h-[115px] sm:min-h-[125px]"
                  >
                    {IconComp && (
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#009999] mb-3 stroke-[2.2] group-hover:scale-110 transition-transform" />
                    )}
                    <p className="text-xs sm:text-[0.825rem] font-semibold text-[#002d3b] leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          STRATEGIC PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              {isDe ? "KERNKOMPETENZEN" : isAr ? "القدرات الأساسية" : "CORE CAPABILITIES"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? "Strategische Säulen" : isAr ? "الركائز الاستراتيجية" : "Strategic Pillars"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {isDe
                ? "Sechs transformative Disziplinen, die TAKNISER auf dem Weg zur Vision 2046 antreiben."
                : isAr
                ? "ستة قطاعات تحويلية تقود تاكنيسر نحو تحقيق رؤية 2046 عبر الممرات الصناعية العالمية."
                : "Six transformative disciplines propelling TAKNISER toward Vision 2046 across global industrial corridors."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#f8fafc] border border-slate-200 p-7 flex flex-col justify-between hover:border-[#009999] hover:bg-white hover:shadow-lg transition-all rounded-none"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-[#002d3b] text-[#009999] w-fit">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#002d3b] uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OUR VISION FOR 2046
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16 lg:space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              {isDe ? "LANGFRISTIGER LEITFADEN" : isAr ? "المخطط طويل الأجل" : "LONG-TERM BLUEPRINT"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Unsere Vision für <span className="text-[#009999]">2046</span></>
              ) : isAr ? (
                <>رؤيتنا لعام <span className="text-[#009999]">2046</span></>
              ) : (
                <>Our Vision for <span className="text-[#009999]">2046</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {isDe
                ? "Grundlegende Verpflichtungen, die die integrierte globale Industrieplattform von morgen prägen."
                : isAr
                ? "التزامات أساسية تصوغ المنصة الصناعية العالمية الموحدة للغد."
                : "Core commitments shaping the integrated global industrial platform of tomorrow."}
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {roadmapPillars.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 shadow-sm hover:border-[#009999]/70 hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[300px] sm:min-h-[340px]">
                    <div
                      className={`relative min-h-[240px] sm:min-h-[280px] lg:min-h-full lg:col-span-6 overflow-hidden ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div
                        className={`hidden lg:block absolute inset-y-0 w-24 pointer-events-none z-10 ${
                          isEven
                            ? "right-0 bg-gradient-to-l from-white via-white/50 to-transparent"
                            : "left-0 bg-gradient-to-r from-white via-white/50 to-transparent"
                        }`}
                      />
                    </div>

                    <div
                      className={`p-7 sm:p-10 lg:p-14 lg:col-span-6 flex flex-col justify-center ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-serif font-black text-[#002d3b] uppercase tracking-tight mb-4 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2046 AND BEYOND
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#001822] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,153,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70">
              <span>{isDe ? "JAHRHUNDERT-AUSBLICK" : isAr ? "نظرة مستقبلية مئوية" : "CENTURY OUTLOOK"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              2046 <span className="text-[#009999]">{isDe ? "und darüber hinaus" : isAr ? "وما بعدها" : "and Beyond"}</span>
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 text-left bg-[#002d3b]/80 p-8 sm:p-10 border border-slate-700/80 shadow-2xl">
            {isDe ? (
              <>
                <p className="font-bold text-white">
                  TAKNISER ONE GLOBE ist nicht bloß ein Ziel. Es ist eine sich ständig weiterentwickelnde weltweite Plattform.
                </p>
                <p>
                  Bis 2046 wollen wir eine Organisation schaffen, in der geografische Grenzen das Machbare nicht mehr einschränken – wo Fachwissen aus einem Teil der Welt Chancen in einem anderen schafft, wo Technologie Leistungsfähigkeit mit Nachfrage verbindet und globale Partnerschaften den Fortschritt beschleunigen.
                </p>
                <p>
                  Von unserer deutschen Ingenieurstradition bis zu unserer Vision einer vernetzten globalen Zukunft setzen wir den Weg von TAKNISER mit derselben fundamentalen Überzeugung fort:
                </p>
                <div className="p-4 bg-[#001822] border-l-4 border-[#009999] text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                  Mit Präzision bauen. Mit Integrität handeln. Grenzenlos verbinden. Bleibenden Wert schaffen.
                </div>
              </>
            ) : isAr ? (
              <>
                <p className="font-bold text-white">
                  تاكنيسر ون غلوب ليست مجرد وجهة نهائية، بل هي منصة عالمية مستمرة في التطور والنمو.
                </p>
                <p>
                  بحلول عام 2046، نهدف إلى بناء مؤسسة لا تقيد فيها الحدود الجغرافية إمكانات التقدم — حيث تخلق الخبرات في جزء من العالم فرصاً في جزء آخر، وتسرع الشراكات العالمية وتيرة الإنجاز.
                </p>
                <p>
                  من تراثنا الهندسي الألماني إلى رؤيتنا لمستقبل عالمي مترابط، تواصل تاكنيسر مسيرتها بنفس المبادئ الراسخة:
                </p>
                <div className="p-4 bg-[#001822] border-r-4 border-[#009999] text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                  البناء بدقة. العمل بنزاهة. التواصل بلا حدود. وصناعة قيمة مستدامة.
                </div>
              </>
            ) : (
              <>
                <p className="font-bold text-white">
                  TAKNISER ONE GLOBE is not simply a destination. It is an evolving global platform.
                </p>
                <p>
                  By 2046, we aim to create an organization where geographical boundaries no longer define what is possible — where expertise from one part of the world can create opportunity in another, where technology connects capability with demand, and where global partnerships accelerate progress.
                </p>
                <p>
                  From our German engineering heritage to our vision of a connected global future, the TAKNISER journey continues with the same fundamental belief:
                </p>
                <div className="p-4 bg-[#001822] border-l-4 border-[#009999] text-white font-bold text-sm sm:text-base uppercase tracking-wider">
                  Build with precision. Operate with integrity. Connect without boundaries. Create lasting value.
                </div>
              </>
            )}
          </div>

          <div className="space-y-2 pt-2">
            <div className="text-lg sm:text-xl font-mono font-bold text-[#009999] uppercase tracking-widest">
              TAKNISER ONE GLOBE — One Heritage. One Global Ecosystem. One Future.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              <span>{isDe ? "Partner für Vision 2046 werden" : isAr ? "كن شريكاً في رؤية 2046" : "Partner for Vision 2046"}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </Link>
            <Link
              href="/divisions"
              className="px-6 py-3.5 border border-slate-600 text-slate-300 hover:text-white hover:border-[#009999] transition-colors text-sm font-bold uppercase tracking-wider text-center w-full sm:w-auto"
            >
              {isDe ? "Geschäftsbereiche erkunden" : isAr ? "استكشف قطاعات الأعمال" : "Explore Business Divisions"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

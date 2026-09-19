"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Globe, Landmark, Layers, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const TIMELINE_DE = [
  {
    period: "Frühes 20. Jahrhundert",
    title: "Das deutsche Fundament",
    image: "/about_hesse_heritage.jpg",
    imageAlt: "Historische deutsche Werkstatt für Präzisionsmaschinenbau in Hessen",
    description:
      "Die Wurzeln von TAKNISER reichen über ein Jahrhundert zurück nach Hessen in eine prägende Ära der europäischen Industrialisierung. Aufgebaut auf den Werten Präzision, Zuverlässigkeit und Ingenieurskunst entwickelte TAKNISER Fachwissen in Diesel-Energieerzeugungssystemen zur Unterstützung von Fabriken, Verkehrsnetzen und öffentlicher Infrastruktur.",
    conclusion:
      "Dieses Fundament schuf eine Philosophie, die für Generationen im Zentrum von TAKNISER stehen sollte: Ingenieurskunst mit Zweck, Zuverlässigkeit ohne Kompromisse.",
  },
  {
    period: "Mitte des 20. Jahrhunderts",
    title: "Industrielle Fertigungsexpansion",
    image: "/about_midcentury_factory.jpg",
    imageAlt: "Industrielle Fertigungsanlage und Schwermaschinenbau aus der Mitte des 20. Jahrhunderts",
    description:
      "Mit der Weiterentwicklung der Industrie wuchs auch TAKNISER. Geleitet vom Grundsatz „Qualität vor Quantität“ erweiterte die Organisation ihre industriellen Fähigkeiten über ein breites Spektrum an Fertigungs- und Ingenieuranwendungen.",
    conclusion:
      "Sorgfältige Handwerkskunst, disziplinierte Ausführung und technische Präzision wurden zum Markenzeichen von TAKNISER – Lösungen geschaffen, um dauerhaft zu bestehen.",
  },
  {
    period: "Spätes 20. Jahrhundert",
    title: "Internationale Beschaffung & Einkauf",
    image: "/about_logistics_port.jpg",
    imageAlt: "Globales Containerterminal und internationales multimodales Logistiknetzwerk",
    description:
      "Die globale Wirtschaft eröffnete neue Möglichkeiten über die traditionelle Fertigung hinaus. TAKNISER entwickelte sich zu einem führenden Partner für internationale Beschaffung, Lieferkettenmanagement, Technologieintegration und weltweite Logistik.",
    conclusion:
      "Strategische Handelskorridore zwischen Europa, Asien und Amerika stärkten die Fähigkeit von TAKNISER, industrielle Nachfrage mit verlässlichen Quellen für Produkte und Technologien zu verbinden.",
  },
  {
    period: "Frühes 21. Jahrhundert",
    title: "Diversifizierter globaler Konzern",
    image: "/clean_corporate_hq_branded.jpg",
    imageAlt: "Moderne Konzernzentrale und Technologie-Betriebszentrum",
    description:
      "Im neuen Jahrtausend baute TAKNISER ein vernetztes globales Betriebsmodell auf. Durch strategische Partnerschaften, weltweite Beschaffung und Markterschließung entstand ein umfassendes Netzwerk aus regionalen Niederlassungen.",
    conclusion:
      "Heute bildet diese Evolution das Fundament für das nächste Kapitel von TAKNISER: ein voll integriertes weltweites Industrie-Ökosystem.",
  },
];

const TIMELINE_EN = [
  {
    period: "Early 20th Century",
    title: "The German Foundation",
    image: "/about_hesse_heritage.jpg",
    imageAlt: "Historic German engineering and precision machinery workshop in Hesse",
    description:
      "The TAKNISER story traces its roots to Hesse (Hessen), Germany, during a defining era of European industrial transformation. Built upon the principles of precision, reliability, and engineering excellence, TAKNISER developed expertise in diesel power generation systems, supporting the continuous operation of factories, transportation networks, public infrastructure, and essential industries.",
    conclusion:
      "This foundation established a philosophy that would remain central to TAKNISER for generations: engineering with purpose, reliability without compromise.",
  },
  {
    period: "Mid 20th Century",
    title: "Industrial Manufacturing Expansion",
    image: "/about_midcentury_factory.jpg",
    imageAlt: "Mid-20th century industrial manufacturing and heavy machinery plant",
    description:
      "As industries evolved, so did TAKNISER. Guided by the principle of “Qualität vor Quantität” — Quality before Quantity, the organization expanded its industrial capabilities across a broader range of manufacturing and engineering applications.",
    conclusion:
      "Meticulous craftsmanship, disciplined execution, technical expertise, and precision became hallmarks of the TAKNISER approach — creating solutions designed not merely to perform, but to endure.",
  },
  {
    period: "Late 20th Century",
    title: "International Sourcing & Procurement",
    image: "/about_logistics_port.jpg",
    imageAlt: "Global container terminal and international multimodal logistics network",
    description:
      "The changing global economy opened new possibilities beyond traditional engineering and manufacturing. TAKNISER evolved into international sourcing, procurement, supply chain management, technology integration, and global logistics, connecting manufacturers, suppliers, and markets across continents.",
    conclusion:
      "Strategic trading corridors spanning Europe, Asia, and the Americas strengthened TAKNISER's ability to connect industrial demand with reliable sources of products, technologies, and expertise.",
  },
  {
    period: "Early 21st Century",
    title: "Diversified Global Conglomerate",
    image: "/clean_corporate_hq_branded.jpg",
    imageAlt: "Modern global conglomerate headquarters and technology operations complex",
    description:
      "Entering the new millennium, TAKNISER expanded beyond individual industries and markets to develop a more diversified global operating model. Through strategic partnerships, acquisitions, international sourcing, and market development, TAKNISER established a growing network of regional operations and international relationships — bringing engineering, manufacturing, trade, logistics, technology, and commercial expertise together within one increasingly connected organization.",
    conclusion:
      "Today, this evolution forms the foundation for TAKNISER's next chapter: a truly integrated global industrial ecosystem.",
  },
];

const TIMELINE_AR = [
  {
    period: "أوائل القرن العشرين",
    title: "الأساس الهندسي الألماني",
    image: "/about_hesse_heritage.jpg",
    imageAlt: "ورشة هندسة ومعدات دقيقة تاريخية في هسن بألمانيا",
    description:
      "تعود جذور قصة تاكنيسر إلى هسن بألمانيا خلال حقبة مفصلية من التحول الصناعي الأوروبي. انطلاقاً من مبادئ الدقة والموثوقية والتميز الهندسي، طورت تاكنيسر خبرة عميقة في أنظمة توليد الطاقة بالديزل لدعم المصانع وشبكات النقل والبنية التحتية العامة.",
    conclusion:
      "أرست هذه البدايات فلسفة ظلت جوهرية لتاكنيسر عبر الأجيال: هندسة هادفة وموثوقية بلا مساومة.",
  },
  {
    period: "منتصف القرن العشرين",
    title: "توسع التصنيع الصناعي",
    image: "/about_midcentury_factory.jpg",
    imageAlt: "منشأة تصنيع صناعي ومعدات ثقيلة في منتصف القرن العشرين",
    description:
      "مع تطور الصناعات، تطورت تاكنيسر. مسترشدة بمبدأ 'الجودة قبل الكمية' (Qualität vor Quantität)، وسعت المنظمة قدراتها الصناعية عبر مجموعة واسعة من التطبيقات التصنيعية والهندسية.",
    conclusion:
      "أصبحت الحرفية الدقيقة والتنفيذ المنضبط والتميز التقني سمات أساسية لنهج تاكنيسر في تقديم حلول صممت لتدوم.",
  },
  {
    period: "أواخر القرن العشرين",
    title: "التوريد والمشتريات الدولية",
    image: "/about_logistics_port.jpg",
    imageAlt: "محطة حاويات دولية وشبكة لوجستية عالمية متعددة الوسائط",
    description:
      "فتح الاقتصاد العالمي آفاقاً جديدة تتجاوز الهندسة التقليدية. تطورت تاكنيسر نحو التوريد الدولي والمشتريات وإدارة سلاسل الإمداد والتكامل التكنولوجي والخدمات اللوجستية العالمية عبر القارات.",
    conclusion:
      "عززت ممرات التجارة الاستراتيجية بين أوروبا وآسيا والأمريكتين قدرة تاكنيسر على ربط الطلب الصناعي بمصادر موثوقة.",
  },
  {
    period: "أوائل القرن الحادي والعشرين",
    title: "تكتل عالمي متنوع",
    image: "/clean_corporate_hq_branded.jpg",
    imageAlt: "مقر رئيسي متطور ومجمع عمليات تكنولوجية لتكتل عالمي",
    description:
      "مع مطلع الألفية الجديدة، تطورت تاكنيسر لتشكل نموذج عمليات عالمي متنوع من خلال الشراكات الاستراتيجية والتوريد الدولي وتطوير الأسواق، موحدة الهندسة والتصنيع والتجارة واللوجستيات في منظومة متكاملة.",
    conclusion:
      "يشكل هذا التطور اليوم الأساس للفصل القادم من مسيرة تاكنيسر: منظومة صناعية عالمية متكاملة حقاً.",
  },
];

export default function AboutContent() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const timeline = isDe ? TIMELINE_DE : isAr ? TIMELINE_AR : TIMELINE_EN;

  return (
    <div className={`pt-24 min-h-screen bg-[#f4f5f6] text-slate-800 ${isAr ? "text-right" : "text-left"}`}>
      {/* Page Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-[#001822] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hesse_heritage.jpg"
            alt="German Engineering Heritage"
            fill
            priority
            className="object-cover opacity-60 filter contrast-110 brightness-95 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/80 via-[#001822]/60 to-[#001822]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,24,34,0.7)_90%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase rounded-none bg-[#002d3b]/70 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 text-[#009999]" />
            <span>
              {isDe
                ? "UNTERNEHMENSÜBERLIEFERUNG"
                : isAr
                ? "التراث المؤسسي"
                : "Corporate Heritage"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            {isDe ? (
              <>
                EIN JAHRHUNDERT <span className="text-[#009999]">DEUTSCHE TRADITION</span>
              </>
            ) : isAr ? (
              <>
                قرن من <span className="text-[#009999]">الإرث الألماني</span>
              </>
            ) : (
              <>
                A CENTURY OF <span className="text-[#009999]">GERMAN HERITAGE</span>
              </>
            )}
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed font-normal">
            {isDe
              ? "Seit über einem Jahrhundert verkörpert TAKNISER den beständigen Geist deutscher Ingenieurskunst – wo Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst und Vertrauen definieren, wer wir sind."
              : isAr
              ? "لأكثر من قرن من الزمان، جسدت تاكنيسر الروح الراسخة للهندسة الألمانية — حيث تحدد مبادئ الدقة والجودة والموثوقية والتميز الهندسي والثقة جوهر هويتنا وطريقة عملنا."
              : "For more than a century, TAKNISER has embodied the enduring spirit of German engineering — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define not simply how we work, but who we are."}
          </p>
        </div>
      </section>

      {/* Heritage Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className={`flex items-center gap-2 text-[#009999] font-bold text-xs uppercase tracking-wider ${isAr ? "flex-row-reverse" : ""}`}>
                <Landmark className="w-4 h-4 text-[#009999]" />
                <span>
                  {isDe
                    ? "Hessen, Deutschland — Frühes 20. Jahrhundert"
                    : isAr
                    ? "هسن، ألمانيا — أوائل القرن العشرين"
                    : "Hesse (Hessen), Germany — Early 20th Century"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] leading-tight uppercase">
                {isDe
                  ? "Wo deutsche Ingenieurskunst geboren wurde"
                  : isAr
                  ? "حيث ولدت الريادة الهندسية الألمانية"
                  : "Where German Engineering Excellence Was Born"}
              </h2>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                {isDe ? (
                  <>
                    <p>
                      Die Geschichte von TAKNISER hat ihre Wurzeln vor mehr als hundert Jahren in Hessen – einer Region, die durch industriellen Erfindungsgeist, ingenieurmäßige Handwerkskunst und technologischen Fortschritt geprägt wurde. Hier begründeten Generationen von Ingenieuren eine Tradition kompromissloser Qualität, fundierter Fachkenntnis und verlässlicher Industrielösungen.
                    </p>
                    <p>
                      In einer der bedeutendsten Epochen der europäischen Industrialisierung widmete sich TAKNISER dem Engineering, der Modernisierung, der Wartung und der technischen Unterstützung von Diesel-Energieerzeugungssystemen. Diese Arbeit sicherte die verlässliche Energieversorgung von Fabriken, Verkehrsnetzen und öffentlicher Infrastruktur.
                    </p>
                    <p>
                      Von Beginn an lebte TAKNISER den deutschen Grundsatz <strong className="text-[#002d3b]">„Qualität vor Quantität“</strong>. Jede Lösung basierte auf akribischer Handwerkskunst, disziplinierter Ausführung und unerschütterlicher Zuverlässigkeit.
                    </p>
                  </>
                ) : isAr ? (
                  <>
                    <p>
                      تعود جذور تاكنيسر لأكثر من قرن في ولاية هسن بألمانيا — وهي منطقة ارتبط اسمها بالابتكار الصناعي والحرفية الهندسية والتقدم التكنولوجي. هناك أرسى أجيال من المهندسين تقاليد الجودة التي لا تقبل المساومة.
                    </p>
                    <p>
                      خلال إحدى الحقب الصناعية الكبرى في أوروبا، كرست تاكنيسر جهودها لهندسة وتحديث وصيانة أنظمة توليد الطاقة بالديزل، مما ساهم في إمداد المصانع وشبكات النقل والمرافق العامة بالطاقة الموثوقة.
                    </p>
                    <p>
                      منذ بداياتها، تبنت تاكنيسر المبدأ الألماني الراسخ <strong className="text-[#002d3b]">„الجودة قبل الكمية“ (Qualität vor Quantität)</strong>. وكان كل حل هندسي يرتكز على الحرفية الدقيقة والتنفيذ المنضبط.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The TAKNISER story traces its roots back more than a century to Hesse (Hessen), Germany — a region shaped by industrial ingenuity, engineering craftsmanship, and technological advancement. It was here that generations of engineers established a tradition of uncompromising quality, technical expertise, and dependable industrial solutions.
                    </p>
                    <p>
                      During one of Europe’s defining eras of industrial transformation, TAKNISER was dedicated to the engineering, modernization, maintenance, and technical support of diesel power generation systems. Its work helped deliver dependable power to factories, transportation networks, public infrastructure, and other essential industries — supporting the foundations of a rapidly evolving industrial society.
                    </p>
                    <p>
                      From the outset, TAKNISER embraced the German philosophy of <strong className="text-[#002d3b]">&ldquo;Qualität vor Quantität&rdquo;</strong> — Quality before Quantity. Every solution was guided by meticulous craftsmanship, disciplined execution, engineering precision, and an unwavering commitment to reliability.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 sm:h-72 w-full border border-slate-200 overflow-hidden shadow-sm">
                <Image
                  src="/about_hesse_heritage.jpg"
                  alt="Historic Hesse German precision engineering workshop"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#002d3b]/90 via-[#002d3b]/50 to-transparent p-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#009999] uppercase">
                    {isDe ? "Hessen, Deutschland • Frühes 20. Jahrhundert" : isAr ? "هسن، ألمانيا • أوائل القرن العشرين" : "Hesse, Germany • Early 20th Century"}
                  </span>
                </div>
              </div>

              <div className="bg-[#f4f5f6] border border-slate-200 p-6 rounded-none">
                <blockquote className="text-base sm:text-lg font-semibold text-[#002d3b] italic leading-relaxed border-l-4 border-[#009999] pl-4">
                  {isDe
                    ? "„Diese Grundsätze waren nie bloße technische Standards. Sie wurden zum Fundament, auf dem TAKNISER aufgebaut wurde – und zur bleibenden DNA der Marke.“"
                    : isAr
                    ? "«لم تكن هذه المبادئ مجرد معايير هندسية فحسب، بل أصبحت الأساس الذي بنيت عليه تاكنيسر والحمض النووي الدائم لعلامتنا التجارية.»"
                    : "“These principles were never simply standards of engineering. They became the foundation upon which TAKNISER was built — and the enduring DNA of the brand.”"}
                </blockquote>
              </div>

              {/* Rectangular Grids */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: isDe ? "Tradition" : isAr ? "التراث" : "Heritage", value: isDe ? "100+ Jahre" : isAr ? "+100 عام" : "100+ Years", icon: Landmark },
                  { label: isDe ? "Ursprung" : isAr ? "المنشأ" : "Origin", value: isDe ? "Hessen, DE" : isAr ? "هسن، ألمانيا" : "Hesse, Germany", icon: Shield },
                  { label: isDe ? "Territorien" : isAr ? "الدول" : "Territories", value: "190+", icon: Globe },
                  { label: isDe ? "Regionale HQs" : isAr ? "المقرات الإقليمية" : "Regional HQs", value: "30+ RHQ", icon: Building2 },
                  { label: isDe ? "Kernbereiche" : isAr ? "القطاعات الأساسية" : "Core Divisions", value: isDe ? "7 Kernbereiche" : isAr ? "7 قطاعات أساسية" : "7 Core Divisions", icon: Layers },
                ].map((stat, sIdx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`bg-[#f4f5f6] border border-slate-200 rounded-none p-4 text-center shadow-none ${
                        sIdx === 4 ? "col-span-2 sm:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center gap-1.5 mb-1 text-[#009999]">
                        <Icon className="w-4 h-4" />
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#009999]">{stat.value}</span>
                      </div>
                      <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Timeline Section */}
      <section className="py-20 bg-[#f4f5f6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase">
              {isDe ? (
                <>Ein Jahrhundert <span className="text-[#009999]">Industrielle Evolution</span></>
              ) : isAr ? (
                <>قرن من <span className="text-[#009999]">التطور الصناعي</span></>
              ) : (
                <>A Century of <span className="text-[#009999]">Industrial Evolution</span></>
              )}
            </h2>
            <p className="text-slate-650 font-medium text-base sm:text-lg max-w-3xl mx-auto">
              {isDe
                ? "Der Weg von TAKNISER über mehr als 100 Jahre – von deutschen Ingenieursfundamenten zu einem vernetzten globalen Industrie-Ökosystem."
                : isAr
                ? "مسيرة تاكنيسر عبر أكثر من قرن من الزمان — من الأسس الهندسية الألمانية إلى منظومة صناعية عالمية متكاملة."
                : "The TAKNISER corporate journey across more than 100 years — from German engineering foundations to a connected global industrial ecosystem."}
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={item.period}
                className="bg-white border border-slate-200 rounded-none shadow-none overflow-hidden transition-all duration-300 hover:border-[#009999]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div
                    className={`relative min-h-[260px] lg:min-h-full lg:col-span-5 ${
                      idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002d3b]/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute bottom-3 left-4 right-4 z-10 lg:hidden">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#009999] bg-[#002d3b]/90 px-2.5 py-1">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-7 sm:p-9 lg:col-span-7 flex flex-col justify-between space-y-5 ${
                      idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="border-b border-slate-100 pb-3">
                        <span className="text-xs font-bold text-[#009999] uppercase tracking-widest">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#002d3b]">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 bg-[#f8fafc] -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-6 border-l-4 border-l-[#009999]">
                      <p className="text-xs sm:text-sm font-semibold text-[#002d3b] leading-relaxed">
                        {item.conclusion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Actions Bar */}
      <section className="py-16 bg-[#002d3b] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 text-white">
          <h2 className="text-2xl sm:text-4xl font-black uppercase">
            {isDe ? "Das TAKNISER-Ökosystem entdecken" : isAr ? "استكشف منظومة تاكنيسر" : "Discover the TAKNISER Ecosystem"}
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            {isDe
              ? "Verbindung von Ingenieurwesen, Fertigung, Beschaffung, Logistik und Technologie in über 190 Ländern durch 30 regionale Hauptsitze und 7 Kernbereiche."
              : isAr
              ? "ربط الهندسة والتصنيع والتوريد واللوجستيات والتكنولوجيا عبر أكثر من 190 دولة من خلال 30 مقراً إقليمياً و7 قطاعات أساسية."
              : "Connecting engineering, manufacturing, sourcing, logistics, and technology across 190+ countries through 30+ Regional Headquarters and 7 Core Divisions."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/divisions"
              className="w-full sm:w-auto btn-siemens btn-siemens-primary flex items-center justify-center gap-2"
            >
              <span>{isDe ? "7 Kernbereiche erkunden" : isAr ? "استكشف 7 قطاعات أساسية" : "Explore 7 Core Divisions"}</span>
              <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            </Link>
            <Link
              href="/global-network"
              className="w-full sm:w-auto btn-siemens btn-siemens-outline-white flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#009999]" />
              <span>{isDe ? "Globales Netzwerk erkunden (30+ RHQ)" : isAr ? "استكشف الشبكة العالمية (30+ مقراً)" : "Explore Global Network (30+ RHQ)"}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

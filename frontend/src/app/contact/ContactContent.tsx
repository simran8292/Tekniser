"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Mail,
  MapPin,
  Clock,
  Ship,
  Sparkles,
  ArrowRight,
  Building2,
  UserCheck,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import CareerForm from "@/components/forms/CareerForm";
import { OFFICIAL_REGIONAL_ENTITIES } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const INQUIRY_AREAS_DE = [
  "Industrielle Beschaffung & Ausrüstung",
  "Globale Beschaffung & Einkauf",
  "EPC-Projektversorgung",
  "Ingenieurberatung & Planung",
  "Vertriebspartnerschaften",
  "Technologielösungen & Robotik",
];

const INQUIRY_AREAS_EN = [
  "Industrial Equipment Sourcing",
  "Global Procurement",
  "EPC Project Supply",
  "Engineering Consulting",
  "Distribution Partnerships",
  "Technology Solutions",
];

const INQUIRY_AREAS_AR = [
  "توريد المعدات الصناعية",
  "المشتريات العالمية",
  "توريد مشاريع الهندسة والمشتريات والبناء",
  "الاستشارات الهندسية",
  "شراكات التوزيع",
  "الحلول التكنولوجية",
];

const BENEFITS_DE = [
  { title: "Deutsche Ingenieurstradition", desc: "Disziplinierte Ausführung und höchste Qualitätsmaßstäbe mit Wurzeln in Hessen." },
  { title: "Multinationale Mobilität", desc: "Perspektiven an 30+ regionalen Hauptsitzen auf 6 Kontinenten." },
  { title: "Zukunftsweisende Fachbereiche", desc: "KI-Robotik, Raumfahrttechnologie, Rohstoffe, Agrartechnologie & saubere Energie." },
  { title: "Lebenslange Weiterentwicklung", desc: "Kontinuierliche berufliche Förderung in hochleistungsfähigen Teams." },
];

const BENEFITS_EN = [
  { title: "German Engineering Heritage", desc: "Disciplined execution and highest quality benchmarks rooted in Hesse." },
  { title: "Multinational Mobility", desc: "Opportunities spanning 30+ Regional Headquarters across 6 continents." },
  { title: "Cutting-Edge Disciplines", desc: "AI Robotics, Space Technologies, Critical Resources, AgTech & Clean Energy." },
  { title: "Lifelong Development", desc: "Continuous professional advancement within high-performance teams." },
];

const BENEFITS_AR = [
  { title: "التراث الهندسي الألماني", desc: "تنفيذ منضبط وأعلى معايير الجودة المتجذرة في هسن." },
  { title: "المرونة العالمية", desc: "فرص وظيفية عبر أكثر من 30 مقراً إقليمياً في 6 قارات." },
  { title: "تخصصات رائدة ومستقبلية", desc: "روبوتات الذكاء الاصطناعي، تقنيات الفضاء، الموارد الحرجة، والزراعة الحديثة." },
  { title: "التطوير المستمر", desc: "ارتقاء مهني مستمر ضمن فرق عمل عالية الكفاءة." },
];

export default function ContactContent() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const inquiryAreas = isDe ? INQUIRY_AREAS_DE : isAr ? INQUIRY_AREAS_AR : INQUIRY_AREAS_EN;
  const benefits = isDe ? BENEFITS_DE : isAr ? BENEFITS_AR : BENEFITS_EN;

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* ─────────────────────────────────────────────────────────────
          PAGE HERO SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/clean_corporate_hq_branded.jpg"
            alt="TAKNISER Corporate Operations"
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
            <span>
              {isDe
                ? "PORTAL FÜR UNTERNEHMENSANFRAGEN"
                : isAr
                ? "بوابة الاتصال المؤسسي"
                : "Corporate Contact Portal"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {isDe ? (
              <>
                TAKNISER <span className="text-[#009999]">KONTAKTIEREN</span>
              </>
            ) : isAr ? (
              <>
                اتصل بـ <span className="text-[#009999]">تاكنيسر</span>
              </>
            ) : (
              <>
                Contact <span className="text-[#009999]">TAKNISER</span>
              </>
            )}
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {isDe
              ? "Ob Sie Hersteller, Behörde, EPC-Generalunternehmer, OEM oder institutioneller Einkäufer sind – unser weltweites Unternehmensteam steht bereit, Ihre Anfrage schnell und präzise zu bearbeiten."
              : isAr
              ? "سواء كنت جهة تصنيع، هيئة حكومية، مقاول هندسة ومشتريات وبناء، أو مشترياً مؤسسياً — فإن فريقنا العالمي جاهز للرد على استفسارك بأعلى درجات الكفاءة."
              : "Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry."}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "Globaler Hauptsitz: Hessen, Deutschland" : isAr ? "المقر العالمي: هسن، ألمانيا" : "Global HQ: Hesse, Germany"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "30+ Regionale Hauptsitze" : isAr ? "30+ مقراً إقليمياً" : "30+ Regional Headquarters"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "Globale Karriere & Personalwesen" : isAr ? "الموارد البشرية والوظائف العالمية" : "Global Careers & HR Liaison"}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {isDe ? "1–3 Tage Antwortgarantie" : isAr ? "التزام بالرد خلال 1-3 أيام" : "1–3 Days Response Commitment"}
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT SECTION
      ───────────────────────────────────────────────────────────── */}
      <section id="inquiry-form" className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Corporate Contact Information */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    {isDe ? "OFFIZIELLES VERZEICHNIS" : isAr ? "الدليل الرسمي" : "OFFICIAL DIRECTORY"}
                  </span>
                  <h2 className="text-xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    {isDe ? "Unternehmenskontaktinformationen" : isAr ? "معلومات الاتصال المؤسسية" : "Corporate Contact Information"}
                  </h2>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Global Headquarters */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {isDe ? "Globaler Hauptsitz" : isAr ? "المقر الرئيسي العالمي" : "Global Headquarters"}
                      </div>
                      <div className="font-bold text-[#002d3b] text-base">
                        TAKNISER GmbH
                      </div>
                      <div className="text-slate-600 font-medium text-xs sm:text-sm">
                        {isDe ? "Hessen, Deutschland" : isAr ? "هسن، ألمانيا" : "Hesse (Hessen), Germany"}
                      </div>
                    </div>
                  </div>

                  {/* Global Network */}
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {isDe ? "Globales Netzwerk" : isAr ? "الشبكة العالمية" : "Global Network"}
                      </div>
                      <div className="font-bold text-[#002d3b] text-base">
                        {isDe ? "30+ Regionale Hauptsitze" : isAr ? "30+ مقراً إقليمياً" : "30+ Regional Headquarters"}
                      </div>
                      <div className="text-slate-600 font-medium text-xs sm:text-sm">
                        {isDe ? "in über 190 Ländern & Territorien" : isAr ? "عبر أكثر من 190 دولة وإقليم" : "across 190+ Countries & Territories"}
                      </div>
                    </div>
                  </div>

                  {/* Regional Leadership */}
                  <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                    <div className="p-2.5 bg-[#009999] text-white shrink-0">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {isDe ? "Regionale Führung (MEA)" : isAr ? "القيادة الإقليمية (الشرق الأوسط وأفريقيا)" : "Regional Leadership (MEA)"}
                      </div>
                      <div className="font-bold text-[#002d3b] text-base">
                        MOHAMMED AMMAR
                      </div>
                      <div className="text-slate-600 font-medium text-xs sm:text-sm">
                        {isDe ? "Leiter Geschäftsentwicklung — Naher Osten & Afrika" : isAr ? "رئيس قطاع الأعمال — الشرق الأوسط وأفريقيا" : "Business Head — Middle East & Africa"}
                      </div>
                      <div className="pt-1.5">
                        <a
                          href="#regional-directory"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#009999] hover:text-[#002d3b] transition-colors"
                        >
                          <span>{isDe ? "6 regionale Einheiten ansehen" : isAr ? "عرض 6 كيانات تشغيلية إقليمية" : "View 6 Regional Operating Entities"}</span>
                          <ArrowRight className={`w-3 h-3 ${isAr ? "rotate-180" : ""}`} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Response Commitment */}
                  <div className="flex items-start gap-4 pt-2">
                    <div className="p-2.5 bg-[#002d3b] text-[#009999] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        {isDe ? "Antwortzusage" : isAr ? "التزام الاستجابة" : "Response Commitment"}
                      </div>
                      <div className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                        {isDe ? (
                          <>Unternehmensanfragen werden von unseren regionalen Spezialisten innerhalb von <span className="font-bold text-[#002d3b]">1–3 Werktagen</span> geprüft.</>
                        ) : isAr ? (
                          <>تتم مراجعة الاستفسارات المؤسسية من قبل خبرائنا خلال <span className="font-bold text-[#002d3b]">1–3 أيام عمل</span>.</>
                        ) : (
                          <>Corporate inquiries are reviewed by our regional specialists within <span className="font-bold text-[#002d3b]">1–3 business days</span>.</>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Inquiry Areas */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-4 shadow-sm">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-sm font-mono font-bold text-[#009999] uppercase tracking-widest">
                    {isDe ? "Anfragenbereiche" : isAr ? "مجالات الاستفسار" : "Inquiry Areas"}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {inquiryAreas.map((area) => (
                    <span
                      key={area}
                      className="text-xs font-medium px-3 py-1.5 bg-[#f8fafc] border border-slate-200 text-slate-700 hover:border-[#009999] hover:text-[#002d3b] hover:bg-white transition-all rounded-none"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: Global Logistics Hub */}
              <div className="bg-white p-7 sm:p-8 border border-slate-200 space-y-3 shadow-sm border-l-4 border-l-[#009999]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                  <Ship className="w-4 h-4 text-[#009999]" />
                  <span>{isDe ? "Globaler Logistikhub" : isAr ? "المركز اللوجستي العالمي" : "Global Logistics Hub"}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-medium">
                  {isDe ? (
                    <>Unser <span className="font-bold text-[#002d3b]">globaler Logistikhub in den VAE</span> dient als primäres globales Distributions- und Freizonen-Logistikzentrum für Operationen im Nahen Osten, in Afrika und Asien.</>
                  ) : isAr ? (
                    <>يعد <span className="font-bold text-[#002d3b]">مركزنا اللوجستي العالمي في الإمارات</span> مركز التوزيع الرئيسي للخدمات اللوجستية في المنطقة الحرة لعمليات الشرق الأوسط وأفريقيا وآسيا.</>
                  ) : (
                    <>Our <span className="font-bold text-[#002d3b]">Global Logistics Hub in UAE</span> serves as the primary global distribution & free zone logistics center for Middle East, Africa, and Asia operations.</>
                  )}
                </p>
                <div className="pt-2">
                  <Link
                    href="/global-network"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009999] hover:text-[#002d3b] transition-colors uppercase tracking-wider"
                  >
                    <span>{isDe ? "Logistikhub im globalen Netzwerk ansehen" : isAr ? "عرض المركز اللوجستي في الشبكة العالمية" : "View Logistics Hub in Global Network"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-5">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    {isDe ? "DIREKTER ANFRAGENKANAL" : isAr ? "قناة الاستفسار المباشرة" : "DIRECT INQUIRY CHANNEL"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    {isDe ? "Unternehmensanfrage einreichen" : isAr ? "تقديم طلب الاستفسار المؤسسي" : "Submit Your Corporate Inquiry"}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
                    {isDe
                      ? "Alle mit * gekennzeichneten Felder sind Pflichtfelder. Ihre Daten werden gemäß unserer Datenschutzerklärung geschützt."
                      : isAr
                      ? "جميع الحقول المميزة بـ * إلزامية. تتم معالجة معلوماتك وفقاً لسياسة الخصوصية."
                      : "All fields marked with * are required. Your information is processed in accordance with our Privacy Policy."}
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          REGIONAL DIRECTORY & OPERATING ENTITIES
      ───────────────────────────────────────────────────────────── */}
      <section id="regional-directory" className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "REGIONALES VERZEICHNIS & BETRIEBSGESELLSCHAFTEN" : isAr ? "الدليل الإقليمي والكيانات التشغيلية" : "REGIONAL DIRECTORY & OPERATING ENTITIES"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Netzwerk für <span className="text-[#009999]">Naher Osten & Afrika</span></>
              ) : isAr ? (
                <>شبكة <span className="text-[#009999]">الشرق الأوسط وأفريقيا</span></>
              ) : (
                <>Middle East &amp; Africa <span className="text-[#009999]">Network</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Offizielle juristische Unternehmensgesellschaften, lizenzierte regionale Tochtergesellschaften und engagierte Führungskräfte für Industrie-, EPC- und Logistikpartnerschaften."
                : isAr
                ? "الكيانات الرسمية المرخصة والقيادة الإقليمية المتخصصة في ربط الشراكات التجارية والصناعية ومشاريع EPC والخدمات اللوجستية عبر الشرق الأوسط وأفريقيا."
                : "Official corporate entities, licensed regional subsidiaries, and dedicated leadership connecting commercial, industrial, EPC, and logistics partnerships across the Middle East & Africa."}
            </p>
          </div>

          {/* Regional Leadership Spotlight Card */}
          <div className="bg-[#001822] text-white p-8 sm:p-10 border-l-4 border-[#009999] shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#009999]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#009999]/20 border border-[#009999]/40 text-[#00cccc] text-[11px] font-mono font-bold uppercase tracking-widest">
                  <UserCheck className="w-3.5 h-3.5 text-[#00cccc]" />
                  <span>{isDe ? "Führungsspitze — Naher Osten & Afrika" : isAr ? "القيادة الرئيسية — الشرق الأوسط وأفريقيا" : "Key Leadership — Middle East & Africa"}</span>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    MOHAMMED AMMAR
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-[#00cccc] mt-1">
                    {isDe ? "Leiter Geschäftsentwicklung — Naher Osten & Afrika" : isAr ? "رئيس قطاع الأعمال — الشرق الأوسط وأفريقيا" : "Business Head — Middle East & Africa"}
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                  {isDe
                    ? "Verantwortlich für Geschäftsentwicklung, regionale Handelsoperationen, grenzüberschreitende Beschaffung, EPC-Projektabwicklung und staatliche Industrieallianzen in den VAE, Saudi-Arabien, Südafrika, Kenia, Ghana und umliegenden Korridoren."
                    : isAr
                    ? "الإشراف على تطوير الأعمال والعمليات التجارية والمشتريات ومشاريع EPC والتحالفات الحكومية في الإمارات والسعودية وجنوب أفريقيا وكينيا وغانا."
                    : "Overseeing corporate business development, regional commercial operations, cross-border sourcing, EPC project delivery, and governmental alliances across the UAE, Saudi Arabia, South Africa, Kenya, Ghana, and regional trading corridors."}
                </p>

                <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono text-slate-300">
                  <span className="px-2.5 py-1 bg-[#002d3b] border border-slate-700">
                    {isDe ? "6 strategische Hubs" : isAr ? "6 مراكز استراتيجية" : "6 Strategic Operating Hubs"}
                  </span>
                  <span className="px-2.5 py-1 bg-[#002d3b] border border-slate-700">
                    {isDe ? "Kommerzielle & EPC-Beschaffung" : isAr ? "توريد تجاري ومشاريع EPC" : "Commercial & EPC Sourcing"}
                  </span>
                  <span className="px-2.5 py-1 bg-[#002d3b] border border-slate-700">
                    {isDe ? "Zolllager & Freizonenlogistik" : isAr ? "لوجستيات المناطق الحرة" : "Free Zone Bonded Logistics"}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end justify-center">
                <a
                  href="#inquiry-form"
                  className="btn-siemens btn-siemens-primary inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3.5 text-center w-full sm:w-auto"
                >
                  <span>{isDe ? "Kontakt mit MEA-Leitung" : isAr ? "التواصل مع قيادة الشرق الأوسط" : "Connect with MEA Leadership"}</span>
                  <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <div className="text-[11px] font-mono text-slate-400 lg:text-right">
                  {isDe ? "Offizieller Verbindungskanal • Schnelle Bearbeitung" : isAr ? "قناة اتصال رسمية • استجابة سريعة" : "Official Liaison Channel • Fast Response"}
                </div>
              </div>
            </div>
          </div>

          {/* 6 Official Operating Entities Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="text-xs font-mono font-bold text-[#002d3b] uppercase tracking-wider">
                {isDe ? "Offiziell registrierte Betriebsgesellschaften & Hubs" : isAr ? "الكيانات التشغيلية المسجلة رسمياً والمراكز الرئيسية" : "Official Registered Operating Entities & Physical Hubs"}
              </div>
              <div className="text-xs font-mono text-slate-500">
                {isDe ? "6 verifizierte Standorte" : isAr ? "6 مكاتب معتمدة" : "6 Verified Corporate Offices"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OFFICIAL_REGIONAL_ENTITIES.map((entity) => (
                <div
                  key={entity.id}
                  className="bg-[#f8fafc] border border-slate-200 hover:border-[#009999] hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                      <span className="text-xl leading-none">{entity.flag}</span>
                      <span className="text-xs font-mono font-bold text-[#002d3b] uppercase tracking-wider">
                        {entity.country}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight group-hover:text-[#009999] transition-colors leading-snug">
                        {entity.companyName}
                      </h4>
                    </div>

                    <div className="p-3.5 bg-white border border-slate-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#009999] uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 text-[#009999] shrink-0" />
                        <span>{isDe ? "Eingetragene Adresse" : isAr ? "عنوان المقر المسجل" : "Registered Office Address"}</span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 leading-relaxed pl-5">
                        {entity.address}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="text-slate-700 font-medium leading-relaxed">
                        {entity.role}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        <span className="font-semibold text-slate-700">{isDe ? "Bereich: " : isAr ? "النطاق: " : "Scope: "}</span>
                        {entity.divisionScope}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-end text-[11px] font-mono">
                    <a
                      href="#inquiry-form"
                      className="text-[#009999] hover:text-[#002d3b] font-bold inline-flex items-center gap-1 group-hover:underline"
                    >
                      <span>{isDe ? "Anfrage" : isAr ? "استفسار" : "Inquiry"}</span>
                      <ArrowRight className={`w-3 h-3 ${isAr ? "rotate-180" : ""}`} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          OPPORTUNITIES & CAREER SECTION
      ───────────────────────────────────────────────────────────── */}
      <section id="careers" className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/5">
              <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
              <span>{isDe ? "GLOBALES TALENTNETZWERK" : isAr ? "شبكة الكفاءات العالمية" : "GLOBAL TALENT NETWORK"}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#002d3b] uppercase tracking-tight">
              {isDe ? (
                <>Perspektiven & <span className="text-[#009999]">Karriere</span></>
              ) : isAr ? (
                <>الفرص و<span className="text-[#009999]">الوظائف</span></>
              ) : (
                <>Opportunities &amp; <span className="text-[#009999]">Careers</span></>
              )}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isDe
                ? "Werden Sie Teil eines weltweiten Industrie-, Technologie- und Handelskonglomerats in über 190 Ländern. Bewerben Sie sich direkt bei unserem HR-Team für internationale Positionen."
                : isAr
                ? "انضم إلى تكتل صناعي وتكنولوجي وتجاري عالمي يمتد عبر أكثر من 190 دولة. تواصل مباشرة مع فريق الموارد البشرية وقدم سيرتك الذاتية."
                : "Join an international industrial, technology, and trading conglomerate spanning 190+ countries. Connect directly with our Human Resources leadership and submit your resume for global engineering, operational, and commercial positions."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: HR Culture */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#f8fafc] p-7 sm:p-8 border border-slate-200 space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    {isDe ? "ARBEITEN BEI TAKNISER" : isAr ? "العمل في تاكنيسر" : "WORKING AT TAKNISER"}
                  </span>
                  <h3 className="text-xl font-bold text-[#002d3b] uppercase tracking-tight mt-1">
                    {isDe ? "Präzision, Innovation & Globale Wirkung" : isAr ? "الدقة والابتكار والأثر العالمي" : "Precision, Innovation & Global Impact"}
                  </h3>
                </div>
                <p className="text-sm text-slate-650 leading-relaxed">
                  {isDe
                    ? "Wir bieten Ingenieuren, Technologen und internationalen Spezialisten das Umfeld, um anspruchsvolle industrielle Herausforderungen in 7 Kernbereichen zu meistern."
                    : isAr
                    ? "نمكّن المهندسين والتقنيين وخبراء سلاسل التوريد لمواجهة التحديات الصناعية المعقدة عبر قطاعاتنا السبعة."
                    : "We empower engineers, technologists, international supply specialists, and strategic operators to tackle complex industrial challenges across 7 core divisions."}
                </p>

                <div className="space-y-3 pt-2">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="p-3.5 bg-white border border-slate-200">
                      <div className="text-xs font-bold text-[#002d3b] uppercase">{benefit.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{benefit.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct HR Liaison Note */}
              <div className="p-6 bg-[#001822] text-white border-l-4 border-[#009999] space-y-2">
                <div className="text-xs font-mono font-bold text-[#00cccc] uppercase tracking-widest">
                  {isDe ? "HR TALENT DESK" : isAr ? "مكتب الموارد البشرية" : "HR TALENT DESK"}
                </div>
                <div className="text-sm font-bold text-white">
                  {isDe ? "Direktes Personalportal" : isAr ? "بوابة الموارد البشرية المباشرة" : "Direct Human Resources Portal"}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isDe
                    ? "Alle eingereichten Profile werden in unseren globalen Kandidatenpool aufgenommen und von regionalen HR-Partnern für passende Projekt- und Bereichsstellen geprüft."
                    : isAr
                    ? "يتم إدراج جميع السير الذاتية المرفوعة في قاعدة بيانات الكفاءات العالمية لدينا لمراجعتها من قبل مسؤولي التوظيف الإقليميين."
                    : "All uploaded resumes are ingested directly into our global candidate pool and reviewed by regional HR partners based on matching project and divisional openings."}
                </p>
              </div>
            </div>

            {/* Right: Career Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#f8fafc] p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
                    {isDe ? "BEWERBEREINREICHUNG" : isAr ? "تقديم طلب التوظيف" : "CANDIDATE SUBMISSION"}
                  </span>
                  <h3 className="text-2xl font-black text-[#002d3b] uppercase tracking-tight mt-1">
                    {isDe ? "Mit HR verbinden & Lebenslauf einreichen" : isAr ? "التواصل مع الموارد البشرية وتقديم السيرة الذاتية" : "Connect with HR & Submit Resume"}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {isDe
                      ? "Füllen Sie das untenstehende Profil aus und hängen Sie Ihren Lebenslauf im PDF- oder Word-Format an."
                      : isAr
                      ? "يرجى تعبئة ملف المرشح أدناه وإرفاق سيرتك الذاتية بصيغة PDF أو Word."
                      : "Fill out the candidate profile below and attach your CV or resume in PDF or Word format."}
                  </p>
                </div>

                <CareerForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Leaf, ArrowRight, Sparkles, Globe, Users, Award } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CONTENT = {
  de: {
    heroBadge: "UNTERNEHMENSVERANTWORTUNG & ESG",
    heroTitle: "Verantwortung für Generationen",
    heroHighlight: "und unseren Planeten",
    heroDesc:
      "Geleitet von unseren hessischen Wurzeln und einem unerschütterlichen Bekenntnis zu Ethik, Qualität und Zukunftsfähigkeit vereint TAKNISER ONE GLOBE unternehmerischen Erfolg mit sozialer und ökologischer Verantwortung.",
    pillarKicker: "STRATEGISCHE SÄULEN",
    pillarTitle: "Unsere beiden Kerninitiativen",
    familyTitle: "TAKNISER ONE GLOBE Familie",
    familyTag: "MENSCH & GEMEINSCHAFT",
    familyDesc:
      "Unsere Mitarbeiter, Partner und Gemeinschaften weltweit stehen im Mittelpunkt unseres Handelns. Wir fördern Vielfalt, Chancengleichheit und langfristige Partnerschaften über alle Kontinente hinweg.",
    familyBtn: "Familien-Initiative erkunden",
    earthTitle: "Nachhaltige Erde",
    earthTag: "ÖKOLOGIE & KLIMA",
    earthDesc:
      "Verantwortungsvoller Umgang mit natürlichen Ressourcen, saubere Energien, grüne Logistikkorridore und kreislauforientierte Industrieprozesse als integraler Bestandteil der Vision 2046.",
    earthBtn: "Nachhaltigkeits-Roadmap ansehen",
    principlesKicker: "UNSERE VERPFLICHTUNGEN",
    principlesTitle: "Feste Grundsätze unseres Handelns",
    principles: [
      {
        icon: ShieldCheck,
        title: "Integrität & Compliance",
        desc: "Strikte Einhaltung deutscher und internationaler Gesetze, transparente Governance und Null-Toleranz gegenüber unethischem Verhalten.",
      },
      {
        icon: Leaf,
        title: "Ökologisches Gleichgewicht",
        desc: "Reduzierung des CO2-Fußabdrucks in Produktion und Logistik durch innovative Technologien und regenerative Ressourcen.",
      },
      {
        icon: Users,
        title: "Globale Gemeinschaft",
        desc: "Förderung lokaler Talente und nachhaltiger Industrieinfrastruktur in den über 190 Ländern unseres Netzwerks.",
      },
      {
        icon: Award,
        title: "Qualität vor Quantität",
        desc: "Unsere über 100-jährige deutsche Tradition lehrt uns: Dauerhafter Wert entsteht nur durch höchste Sorgfalt und Beständigkeit.",
      },
    ],
  },
  en: {
    heroBadge: "CORPORATE RESPONSIBILITY & ESG",
    heroTitle: "Responsibility for Generations",
    heroHighlight: "and Our Planet",
    heroDesc:
      "Guided by our Hesse engineering roots and an unwavering commitment to ethics, quality, and future readiness, TAKNISER ONE GLOBE unites commercial excellence with social and environmental stewardship.",
    pillarKicker: "STRATEGIC PILLARS",
    pillarTitle: "Our Two Core Initiatives",
    familyTitle: "TAKNISER ONE GLOBE Family",
    familyTag: "PEOPLE & COMMUNITY",
    familyDesc:
      "Our employees, partners, and communities worldwide are at the heart of our mission. We champion diversity, equal opportunity, and long-term relationships across every continent.",
    familyBtn: "Explore Family Initiative",
    earthTitle: "Sustainable Earth",
    earthTag: "ECOLOGY & CLIMATE",
    earthDesc:
      "Responsible stewardship of natural resources, clean energy, green maritime corridors, and circular industrial practices integral to Vision 2046.",
    earthBtn: "View Sustainability Roadmap",
    principlesKicker: "OUR COMMITMENTS",
    principlesTitle: "Guiding Principles of Our Actions",
    principles: [
      {
        icon: ShieldCheck,
        title: "Integrity & Compliance",
        desc: "Strict adherence to German and international legal standards, transparent governance, and zero tolerance for unethical conduct.",
      },
      {
        icon: Leaf,
        title: "Ecological Balance",
        desc: "Carbon footprint reduction across manufacturing and supply chains powered by next-generation clean technologies.",
      },
      {
        icon: Users,
        title: "Global Community",
        desc: "Empowering local talent and sustainable industrial infrastructure across our footprint in 190+ countries.",
      },
      {
        icon: Award,
        title: "Quality Before Quantity",
        desc: "Our centennial heritage proves that enduring value is forged only through meticulous precision and long-term vision.",
      },
    ],
  },
  ar: {
    heroBadge: "المسؤولية المؤسسية والاستدامة البيئية",
    heroTitle: "المسؤولية عبر الأجيال",
    heroHighlight: "ولكوكبنا",
    heroDesc:
      "مسترشدين بجذورنا الهندسية في هسن والتزامنا الراسخ بالأخلاق والجودة، تجمع تاكنيسر ون غلوب بين النجاح التجاري والريادة الاجتماعية والبيئية.",
    pillarKicker: "المحاور الاستراتيجية",
    pillarTitle: "مبادرتانا الأساسيتان",
    familyTitle: "عائلة تاكنيسر ون غلوب",
    familyTag: "الإنسان والمجتمع",
    familyDesc:
      "موظفونا وشركاؤنا ومجتمعاتنا حول العالم هم جوهر رسالتنا. ندعم التنوع وتكافؤ الفرص والشراكات المستدامة عبر جميع القارات.",
    familyBtn: "استكشف مبادرة العائلة",
    earthTitle: "الأرض المستدامة",
    earthTag: "البيئة والمناخ",
    earthDesc:
      "الإدارة المسؤولة للموارد الطبيعية والطاقة النظيفة والخدمات اللوجستية الخضراء والممارسات الصناعية الدائرية المتوافقة مع رؤية 2046.",
    earthBtn: "عرض خارطة طريق الاستدامة",
    principlesKicker: "التزاماتنا",
    principlesTitle: "المبادئ التوجيهية لأعمالنا",
    principles: [
      {
        icon: ShieldCheck,
        title: "النزاهة والامتثال",
        desc: "الالتزام الصارم بالمعايير القانونية الألمانية والدولية والحوكمة الشفافة ومكافحة الممارسات غير الأخلاقية.",
      },
      {
        icon: Leaf,
        title: "التوازن البيئي",
        desc: "خفض الانبعاثات الكربونية في التصنيع وسلاسل التوريد بالاعتماد على تقنيات الطاقة النظيفة المتطورة.",
      },
      {
        icon: Users,
        title: "المجتمع العالمي",
        desc: "تمكين الكفاءات المحلية ودعم البنية التحتية الصناعية المستدامة في أكثر من 190 دولة نعمل بها.",
      },
      {
        icon: Award,
        title: "الجودة قبل الكمية",
        desc: "تاريخنا الممتد لأكثر من قرن يبرهن أن القيمة الحقيقية لا تبنى إلا بالإتقان الدقيق والنظرة طويلة المدى.",
      },
    ],
  },
};

export default function ResponsibilityContent() {
  const { currentLanguage } = useLanguage();
  const c = CONTENT[currentLanguage as "de" | "en" | "ar"] || CONTENT.de;
  const isAr = currentLanguage === "ar";

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hesse_heritage.jpg"
            alt="TAKNISER Corporate Responsibility"
            fill
            priority
            className="object-cover opacity-50 filter contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/85 via-[#001822]/70 to-[#001822]/95" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#009999]" />
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

      {/* Two Pillars Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
            {c.pillarKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
            {c.pillarTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Family Card */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-[#009999] hover:shadow-xl transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#009999] bg-[#009999]/10 px-3 py-1 border border-[#009999]/30">
                  {c.familyTag}
                </span>
                <HeartHandshake className="w-8 h-8 text-[#009999]" />
              </div>
              <h3 className="text-2xl font-black text-[#002d3b] uppercase tracking-tight group-hover:text-[#009999] transition-colors">
                {c.familyTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {c.familyDesc}
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/responsibility/family"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002d3b] text-white hover:bg-[#009999] transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <span>{c.familyBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sustainable Earth Card */}
          <div className="bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:border-[#009999] hover:shadow-xl transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#009999] bg-[#009999]/10 px-3 py-1 border border-[#009999]/30">
                  {c.earthTag}
                </span>
                <Leaf className="w-8 h-8 text-[#009999]" />
              </div>
              <h3 className="text-2xl font-black text-[#002d3b] uppercase tracking-tight group-hover:text-[#009999] transition-colors">
                {c.earthTitle}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {c.earthDesc}
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/responsibility/sustainable-earth"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#002d3b] text-white hover:bg-[#009999] transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <span>{c.earthBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
              {c.principlesKicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
              {c.principlesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8fafc] border border-slate-200 p-6 space-y-3 hover:border-[#009999] hover:bg-white transition-all"
                >
                  <Icon className="w-7 h-7 text-[#009999]" />
                  <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

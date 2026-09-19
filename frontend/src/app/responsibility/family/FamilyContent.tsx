"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Users, ShieldCheck, Award, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const CONTENT = {
  de: {
    heroBadge: "TAKNISER ONE GLOBE FAMILIE",
    heroTitle: "Unsere Menschen.",
    heroHighlight: "Unsere weltweite Gemeinschaft.",
    heroDesc:
      "Seit unseren Anfängen in Hessen steht das Wohl unserer Mitarbeitenden, Partner und deren Familien an erster Stelle. Ein Familienunternehmen im Geiste – ein weltweiter Industriekonzern in der Tat.",
    introKicker: "UNSERE WERTE",
    introTitle: "Ein Bund des Vertrauens über 6 Kontinente",
    introText:
      "Bei TAKNISER verstehen wir globale Zusammenarbeit nicht als bloße Transaktion, sondern als gelebte Partnerschaft. Mehr als 30 regionale Hauptsitze arbeiten vernetzt als eine gemeinsame Familie zusammen.",
    pillars: [
      {
        title: "Förderung & Weiterbildung",
        desc: "Gezielte Programme zur beruflichen Weiterentwicklung, Ingenieurausbildung und Führungsförderung für junge Talente weltweit.",
      },
      {
        title: "Sicherheit & Gesundheit",
        desc: "Höchste deutsche Sicherheits- und Arbeitsschutzstandards an allen Standorten, Fertigungsstätten und Logistikknotenpunkten.",
      },
      {
        title: "Vielfalt & Chancengleichheit",
        desc: "Eine Kultur des gegenseitigen Respekts, in der Menschen unterschiedlicher Herkunft, Nationalität und Disziplin gemeinsam Großes bewirken.",
      },
      {
        title: "Gesellschaftliches Engagement",
        desc: "Unterstützung lokaler Gemeinschaften und Bildungsprojekte in den Regionen, in denen wir tätig sind.",
      },
    ],
    quote: "„Wahrer industrieller Erfolg bemisst sich nicht nur am Ertrag, sondern am bleibenden Wert, den wir für Menschen und zukünftige Generationen schaffen.“",
    ctaBack: "Zurück zu Verantwortung",
    ctaContact: "Karriere bei TAKNISER",
  },
  en: {
    heroBadge: "TAKNISER ONE GLOBE FAMILY",
    heroTitle: "Our People.",
    heroHighlight: "Our Global Community.",
    heroDesc:
      "Since our origins in Hesse, the well-being of our people, partners, and their families has been our highest priority. A family company in spirit — a global industrial conglomerate in practice.",
    introKicker: "OUR VALUES",
    introTitle: "A Bond of Trust Spanning 6 Continents",
    introText:
      "At TAKNISER, global collaboration is never merely transactional; it is an enduring partnership. Over 30 Regional Headquarters collaborate seamlessly as one unified family.",
    pillars: [
      {
        title: "Development & Empowerment",
        desc: "Tailored career pathways, engineering apprenticeships, and leadership development programs for talent worldwide.",
      },
      {
        title: "Safety & Well-being",
        desc: "German industrial safety and occupational health benchmarks instituted across all regional hubs and logistics points.",
      },
      {
        title: "Diversity & Inclusion",
        desc: "A culture of mutual respect where professionals from diverse backgrounds and cultures unite to build impactful solutions.",
      },
      {
        title: "Community Outreach",
        desc: "Direct support for local communities, educational institutions, and social initiatives across our operating territories.",
      },
    ],
    quote: "“True industrial excellence is measured not only by commercial output, but by the enduring value created for people and generations to come.”",
    ctaBack: "Back to Responsibility",
    ctaContact: "Careers at TAKNISER",
  },
  ar: {
    heroBadge: "عائلة تاكنيسر ون غلوب",
    heroTitle: "كوادرنا البشرية.",
    heroHighlight: "مجتمعنا العالمي الموحد.",
    heroDesc:
      "منذ انطلاقتنا في هسن، ظل ازدهار موظفينا وشركائنا وعائلاتهم أولويتنا القصوى. روح العائلة في جوهرنا وتكتل صناعي عالمي في أدائنا.",
    introKicker: "قيمنا الجوهرية",
    introTitle: "رابطة ثقة تمتد عبر 6 قارات",
    introText:
      "في تاكنيسر، لا يقتصر التعاون الدولي على الصفقات التجارية، بل نراه شراكة ممتدة وراسخة. تعمل مقراتنا الـ 30 كعائلة واحدة متكاملة.",
    pillars: [
      {
        title: "التطوير والتمكين المهني",
        desc: "مسارات تدريب وتأهيل مهني وهندسي مخصصة لصقل الكفاءات والقيادات الشابة عالمياً.",
      },
      {
        title: "السلامة والصحة المهنية",
        desc: "تطبيق أعلى معايير السلامة الصناعية الألمانية في كافة مواقع الإنتاج والمراكز اللوجستية.",
      },
      {
        title: "التنوع والشمول",
        desc: "ثقافة قوامها الاحترام المتبادل تجمع كفاءات من مختلف الثقافات لصناعة حلول هندسية رائدة.",
      },
      {
        title: "المسؤولية المجتمعية",
        desc: "دعم المجتمعات المحلية والمبادرات التعليمية في الدول التي نتشرف بالعمل فيها.",
      },
    ],
    quote: "«النجاح الصناعي الحقيقي لا يقاس فقط بالعوائد الاقتصادية، بل بالقيمة المستدامة التي نتركها للإنسان والأجيال القادمة.»",
    ctaBack: "العودة إلى المسؤولية",
    ctaContact: "الوظائف في تاكنيسر",
  },
};

export default function FamilyContent() {
  const { currentLanguage } = useLanguage();
  const c = CONTENT[currentLanguage as "de" | "en" | "ar"] || CONTENT.de;
  const isAr = currentLanguage === "ar";

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${isAr ? "text-right" : "text-left"}`}>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hesse_heritage.jpg"
            alt="TAKNISER Family"
            fill
            priority
            className="object-cover opacity-45 filter contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001822]/85 via-[#001822]/70 to-[#001822]/95" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-[#009999]" />
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

      {/* Intro & Quote */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
            {c.introKicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002d3b] uppercase tracking-tight">
            {c.introTitle}
          </h2>
          <p className="text-slate-600 text-base max-w-3xl mx-auto leading-relaxed pt-2">
            {c.introText}
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-[#002d3b] border-l-4 border-[#009999] p-8 sm:p-10 text-white space-y-2">
          <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-slate-100">
            {c.quote}
          </p>
          <span className="text-xs font-mono uppercase tracking-wider text-[#00cccc] block pt-2">
            — TAKNISER ONE GLOBE Leadership
          </span>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {c.pillars.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 space-y-2.5 hover:border-[#009999] transition-all">
              <div className="flex items-center gap-2 text-[#009999] font-mono text-sm font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#009999]" />
                <span>0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-[#002d3b] uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
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
            href="/contact#careers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#009999] hover:bg-[#008080] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>{c.ctaContact}</span>
            <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>
    </div>
  );
}

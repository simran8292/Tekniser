"use client";

import Link from "next/link";
import {
  Lock,
  FileCheck,
  Shield,
  Award,
  Scale,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const TERMS_DATA: Record<string, {
  badge: string;
  title1: string;
  title2: string;
  desc: string;
  entityTag: string;
  jurisdictionTag: string;
  sectionKicker: string;
  sectionTitle: string;
  articleCount: string;
  sections: {
    num: string;
    title: string;
    content: string;
  }[];
  legalTitle: string;
  legalDesc: string;
  legalBtn: string;
}> = {
  de: {
    badge: "RECHT & COMPLIANCE",
    title1: "Nutzungs",
    title2: "bedingungen",
    desc: "Rechtliche Bedingungen, Plattformrichtlinien und geltende Bestimmungen für die Nutzung der digitalen Plattform von TAKNISER ONE GLOBE.",
    entityTag: "Unternehmen: TAKNISER GmbH",
    jurisdictionTag: "Gerichtsstand: Hessen, Deutschland",
    sectionKicker: "RECHTLICHER RAHMEN",
    sectionTitle: "Nutzungsbedingungen",
    articleCount: "5 ARTIKEL",
    sections: [
      {
        num: "1",
        title: "Anerkennung der Bedingungen",
        content: "Durch den Zugriff auf und die Nutzung der Plattform TAKNISER ONE GLOBE erklären Sie sich mit diesen Nutzungsbedingungen sowie allen anwendbaren Gesetzen und Vorschriften einverstanden, die für die TAKNISER GmbH mit Sitz in Deutschland gelten.",
      },
      {
        num: "2",
        title: "Nutzung der Plattform",
        content: "Diese Plattform dient geschäftlichen Unternehmensanfragen, der Informationsbereitstellung und der Interaktion mit den globalen Industrieoperationen von TAKNISER ONE GLOBE. Eine unbefugte kommerzielle Nutzung, Data Scraping oder der Versuch, die Plattformsicherheit zu gefährden, ist strengstens untersagt.",
      },
      {
        num: "3",
        title: "Geistiges Eigentum",
        content: "Sämtliche Inhalte, Logos, Markenwerte, Texte, Bildwerke und Designelemente auf dieser Plattform sind das ausschließliche geistige Eigentum der TAKNISER GmbH. Die unbefugte Vervielfältigung, Verbreitung oder Veränderung ist untersagt.",
      },
      {
        num: "4",
        title: "Haftungsbeschränkung",
        content: "Die TAKNISER GmbH stellt diese Plattform 'wie besehen' zu Informations- und geschäftlichen Kontaktzwecken zur Verfügung. Die hierin enthaltenen Informationen stellen kein rechtsverbindliches kommerzielles Angebot dar, es sei denn, dies wird durch einen formellen Vertrag bestätigt, der von bevollmächtigten TAKNISER-Vertretern unterzeichnet wurde.",
      },
      {
        num: "5",
        title: "Anwendbares Recht & Gerichtsstand",
        content: "Diese Bedingungen unterliegen dem Recht der Bundesrepublik Deutschland. Für alle Streitigkeiten, die sich aus oder im Zusammenhang mit dieser Plattform ergeben, sind ausschließlich die zuständigen Gerichte in Hessen, Deutschland, zuständig.",
      },
    ],
    legalTitle: "Rechtliche Unternehmensanfragen",
    legalDesc: "Für kommerzielle Vereinbarungen, Beschaffungsbedingungen oder Rechtsfragen wenden Sie sich an unser Rechtsteam.",
    legalBtn: "Recht & Unternehmen kontaktieren",
  },
  en: {
    badge: "LEGAL & COMPLIANCE",
    title1: "Terms",
    title2: "of Use",
    desc: "Legal terms, platform guidelines, and governing conditions for engaging with the TAKNISER ONE GLOBE digital platform.",
    entityTag: "Entity: TAKNISER GmbH",
    jurisdictionTag: "Jurisdiction: Hesse, Germany",
    sectionKicker: "LEGAL FRAMEWORK",
    sectionTitle: "Terms of Use",
    articleCount: "5 ARTICLES",
    sections: [
      {
        num: "1",
        title: "Acceptance of Terms",
        content: "By accessing and using the TAKNISER ONE GLOBE platform, you agree to be bound by these Terms of Use and all applicable laws and regulations governing TAKNISER GmbH, a company incorporated in Germany.",
      },
      {
        num: "2",
        title: "Use of Platform",
        content: "This platform is designed for corporate business inquiries, information dissemination, and engagement with TAKNISER ONE GLOBE's global industrial operations. Unauthorized commercial use, data scraping, or any attempt to compromise platform security is strictly prohibited.",
      },
      {
        num: "3",
        title: "Intellectual Property",
        content: "All content, logos, brand assets, text, and design on this platform are the exclusive intellectual property of TAKNISER GmbH. Unauthorized reproduction, distribution, or modification is prohibited.",
      },
      {
        num: "4",
        title: "Limitation of Liability",
        content: "TAKNISER GmbH provides this platform 'as is' for informational and business enquiry purposes. Information herein does not constitute a legally binding commercial offer unless confirmed by a formal contract executed by authorized TAKNISER representatives.",
      },
      {
        num: "5",
        title: "Governing Law",
        content: "These Terms shall be governed by the laws of the Federal Republic of Germany. Any disputes arising shall be subject to the jurisdiction of the competent courts of Hesse, Germany.",
      },
    ],
    legalTitle: "Corporate Legal Enquiries",
    legalDesc: "For commercial agreements, procurement terms, or legal questions, reach our corporate team.",
    legalBtn: "Contact Legal & Corporate",
  },
  ar: {
    badge: "الشؤون القانونية والامتثال",
    title1: "شروط",
    title2: "الاستخدام والأحكام",
    desc: "الشروط القانونية والضوابط المنظمة للوصول والتعامل مع المنصة الرقمية الرسمية لمجموعة تاكنيسر ون جلوب.",
    entityTag: "الجهة: تاكنيسر ذ.م.م (TAKNISER GmbH)",
    jurisdictionTag: "الاختصاص القضائي: ولاية هيسن، جمهورية ألمانيا الاتحادية",
    sectionKicker: "الإطار القانوني الرسمي",
    sectionTitle: "شروط الاستخدام",
    articleCount: "5 بنود ومواد",
    sections: [
      {
        num: "1",
        title: "الموافقة على الشروط",
        content: "من خلال الوصول إلى منصة تاكنيسر ون جلوب واستخدامها، فإنكم توافقون على الالتزام بشروط الاستخدام هذه وكافة القوانين واللوائح المعمول بها والمنظمة لشركة تاكنيسر ذ.م.م المؤسسة في ألمانيا.",
      },
      {
        num: "2",
        title: "استخدام المنصة",
        content: "هذه المنصة مخصصة للاستفسارات التجارية المؤسسية ونشر المعلومات والتعامل مع العمليات الصناعية لتاكنيسر حول العالم. يُحظر تماماً الاستخدام التجاري غير المصرح به أو استخراج البيانات الآلي أو محاولة اختراق أمن المنصة.",
      },
      {
        num: "3",
        title: "الملكية الفكرية",
        content: "جميع المحتويات والشعارات والعلامات التجارية والنصوص والتصميمات على هذه المنصة هي ملكية فكرية حصرية لشركة تاكنيسر ذ.م.م. يُمنع منعاً باتاً استنساخها أو توزيعها أو تعديلها دون إذن خطي مسبق.",
      },
      {
        num: "4",
        title: "حدود المسؤولية القانونية",
        content: "تقدم تاكنيسر هذه المنصة 'كما هي' لأغراض المعلومات والاستفسارات التجارية. لا تشكل المعلومات الواردة هنا عرضاً تجارياً ملزماً قانونياً ما لم يتم تأكيده بموجب عقد رسمي موقع من ممثلي تاكنيسر المعتمدين.",
      },
      {
        num: "5",
        title: "القانون الواجب التطبيق والاختصاص القضائي",
        content: "تخضع هذه الشروط وتفسر وفقاً لقوانين جمهورية ألمانيا الاتحادية. وتخضع أي نزاعات تنشأ عنها للاختصاص القضائي الحصري للمحاكم المختصة في ولاية هيسن، ألمانيا.",
      },
    ],
    legalTitle: "الاستفسارات القانونية والتجارية",
    legalDesc: "للاتفاقيات التجارية أو شروط التوريد أو الاستفسارات القانونية، تواصل مع فريقنا القانوني.",
    legalBtn: "تواصل مع الشؤون القانونية",
  },
};

const iconList = [FileCheck, Shield, Award, Scale, Landmark];

export default function TermsContent() {
  const { currentLanguage } = useLanguage();
  const data = TERMS_DATA[currentLanguage] || TERMS_DATA["de"] || TERMS_DATA["en"];

  return (
    <div className={`pt-24 min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#009999] selection:text-white ${currentLanguage === 'ar' ? 'rtl text-right' : 'text-left'}`}>
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-24 bg-[#001822] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(0,153,153,0.15),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#002d3b12_1px,transparent_1px),linear-gradient(to_bottom,#002d3b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#009999] text-[#009999] text-xs font-mono font-bold tracking-widest uppercase bg-[#002d3b]/70 backdrop-blur-sm">
            <Lock className="w-3.5 h-3.5 text-[#009999]" />
            <span>{data.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {data.title1} <span className="text-[#009999]">{data.title2}</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {data.desc}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {data.entityTag}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {data.jurisdictionTag}
            </span>
          </div>
        </div>
      </section>

      {/* TERMS SECTIONS */}
      <section className="py-20 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-wider">
                {data.sectionKicker}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#002d3b] uppercase tracking-tight mt-0.5">
                {data.sectionTitle}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {data.articleCount}
            </span>
          </div>

          <div className="space-y-5">
            {data.sections.map((sec, idx) => {
              const IconComponent = iconList[idx] || FileCheck;
              return (
                <div
                  key={sec.num}
                  className="bg-white border border-slate-200 p-6 sm:p-8 hover:border-[#009999] hover:shadow-md transition-all rounded-none flex items-start gap-4 sm:gap-6"
                >
                  <div className="p-3 sm:p-3.5 bg-[#002d3b] text-[#009999] shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="space-y-2 flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-black text-[#002d3b] tracking-tight">
                      {sec.num}. {sec.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {sec.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Inquiry Card */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight">
                {data.legalTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {data.legalDesc}
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 shrink-0"
            >
              <span>{data.legalBtn}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

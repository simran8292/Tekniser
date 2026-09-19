"use client";

import Link from "next/link";
import {
  Lock,
  FileText,
  Building2,
  Database,
  ShieldCheck,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const PRIVACY_DATA: Record<string, {
  badge: string;
  title1: string;
  title2: string;
  desc: string;
  controllerTag: string;
  regulationTag: string;
  sectionKicker: string;
  sectionTitle: string;
  articleCount: string;
  sections: {
    num: string;
    title: string;
    content: string;
    linkText?: string;
    linkHref?: string;
  }[];
  helpTitle: string;
  helpDesc: string;
  helpBtn: string;
}> = {
  de: {
    badge: "RECHT & COMPLIANCE",
    title1: "Datenschutz",
    title2: "erklärung",
    desc: "Die TAKNISER GmbH verpflichtet sich zum Schutz Ihrer personenbezogenen Daten in strikter Übereinstimmung mit der europäischen Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).",
    controllerTag: "Verantwortlicher: TAKNISER GmbH (Hessen, Deutschland)",
    regulationTag: "Rechtsgrundlage: EU-DSGVO / BDSG",
    sectionKicker: "DATENSCHUTZSTATUT",
    sectionTitle: "Offizielle Bestimmungen",
    articleCount: "6 ARTIKEL",
    sections: [
      {
        num: "1",
        title: "Verantwortliche Stelle",
        content: "Die TAKNISER GmbH mit Hauptsitz in Hessen, Deutschland, ist die verantwortliche Stelle für die Erhebung und Verarbeitung personenbezogener Daten über diese Plattform.",
      },
      {
        num: "2",
        title: "Erfasste Daten",
        content: "Wenn Sie eine Kontaktanfrage einreichen, erfassen wir: Vollständiger Name, Unternehmensname, geschäftliche E-Mail-Adresse, Telefonnummer (optional), Land, Betreff und Nachrichteninhalt. Zudem erfassen wir Ihre IP-Adresse zu Sicherheits- und Spamschutzzwecken.",
      },
      {
        num: "3",
        title: "Zweck der Datenverarbeitung",
        content: "Ihre Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Unternehmensanfrage, der Bereitstellung relevanter Informationen zu Produkten und Dienstleistungen von TAKNISER und der Pflege der Geschäftsbeziehung verarbeitet.",
      },
      {
        num: "4",
        title: "Speicherdauer",
        content: "Daten aus geschäftlichen Anfragen werden so lange aufbewahrt, wie dies zur Bearbeitung der Anfrage und zur ordnungsgemäßen Führung von Geschäftsunterlagen gemäß den geltenden deutschen und internationalen Aufbewahrungsfristen erforderlich ist.",
      },
      {
        num: "5",
        title: "Ihre Rechte",
        content: "Gemäß der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Um diese Rechte auszuüben, stellen Sie bitte eine Anfrage über unser Kontaktportal.",
      },
      {
        num: "6",
        title: "Kontakt & Datenschutzbeauftragter",
        content: "Für alle Fragen zum Thema Datenschutz wenden Sie sich bitte über unser Unternehmensportal an die TAKNISER GmbH unter ",
        linkText: "takniser.com/contact",
        linkHref: "/contact",
      },
    ],
    helpTitle: "Fragen zum Datenschutz?",
    helpDesc: "Senden Sie eine direkte Anfrage an unser Datenschutzteam.",
    helpBtn: "Datenschutz kontaktieren",
  },
  en: {
    badge: "LEGAL & COMPLIANCE",
    title1: "Privacy",
    title2: "Policy",
    desc: "TAKNISER GmbH is committed to protecting your personal data in strict compliance with the European General Data Protection Regulation (GDPR) and German federal data protection statutes.",
    controllerTag: "Controller: TAKNISER GmbH (Hesse, Germany)",
    regulationTag: "Regulation: EU GDPR / BDSG",
    sectionKicker: "DATA PROTECTION STATUTE",
    sectionTitle: "Official Provisions",
    articleCount: "6 ARTICLES",
    sections: [
      {
        num: "1",
        title: "Data Controller",
        content: "TAKNISER GmbH, headquartered in Hesse (Hessen), Germany, is the data controller responsible for the personal data collected through this platform.",
      },
      {
        num: "2",
        title: "Data We Collect",
        content: "When you submit a contact inquiry, we collect: full name, company name, business email address, phone number (optional), country, subject, and message content. We also collect your IP address for security and spam prevention purposes.",
      },
      {
        num: "3",
        title: "Purpose of Processing",
        content: "Your data is collected solely for the purpose of responding to your corporate inquiry, communicating relevant TAKNISER products and services, and maintaining our business relationship.",
      },
      {
        num: "4",
        title: "Data Retention",
        content: "Corporate inquiry data is retained for a period necessary to fulfil the inquiry and maintain appropriate business records, in accordance with applicable German and international data protection regulations.",
      },
      {
        num: "5",
        title: "Your Rights",
        content: "Under GDPR and applicable data protection law, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, submit a request through our corporate contact portal.",
      },
      {
        num: "6",
        title: "Contact",
        content: "For any data protection enquiries, please contact TAKNISER GmbH through our corporate contact portal at ",
        linkText: "takniser.com/contact",
        linkHref: "/contact",
      },
    ],
    helpTitle: "Questions Regarding Data Privacy?",
    helpDesc: "Submit an inquiry directly to our corporate data protection team.",
    helpBtn: "Contact Data Protection",
  },
  ar: {
    badge: "الشؤون القانونية والامتثال",
    title1: "سياسة",
    title2: "الخصوصية وحماية البيانات",
    desc: "تلتزم شركة تاكنيسر ذ.م.م (TAKNISER GmbH) بحماية بياناتكم الشخصية وفقاً للائحة العامة لحماية البيانات في الاتحاد الأوروبي (GDPR) والقوانين الفيدرالية الألمانية.",
    controllerTag: "المسؤول عن البيانات: تاكنيسر ذ.م.م (هيسن، ألمانيا)",
    regulationTag: "اللوائح التنظيمية: EU GDPR / BDSG",
    sectionKicker: "نظام حماية البيانات",
    sectionTitle: "الأحكام والبنود الرسمية",
    articleCount: "6 مواد قانونية",
    sections: [
      {
        num: "1",
        title: "جهة التحكم في البيانات",
        content: "شركة تاكنيسر ذ.م.م (TAKNISER GmbH)، ومقرها الرئيسي في ولاية هيسن، ألمانيا، هي الجهة المسؤولة عن معالجة البيانات الشخصية التي يتم جمعها عبر هذه المنصة.",
      },
      {
        num: "2",
        title: "البيانات التي نجمعها",
        content: "عند تقديم استفسار تجاري، نجمع: الاسم الكامل، اسم الشركة، البريد الإلكتروني المهني، رقم الهاتف (اختياري)، الدولة، وموضوع الرسالة ومحتواها. كما نسجل عنوان IP لضمان الأمان ومكافحة الرسائل غير المرغوب فيها.",
      },
      {
        num: "3",
        title: "الغرض من المعالجة",
        content: "يتم جمع بياناتكم حصرياً لغرض الرد على استفساراتكم المؤسسية، وتقديم المعلومات المتعلقة بمنتجات وخدمات تاكنيسر، والحفاظ على العلاقات التجارية المشتركة.",
      },
      {
        num: "4",
        title: "فترة الاحتفاظ بالبيانات",
        content: "يتم الاحتفاظ ببيانات الاستفسارات المؤسسية للمدة اللازمة للاستجابة للاستفسار وحفظ السجلات التجارية المعتمدة وفقاً للقوانين الألمانية والدولية ذات الصلة.",
      },
      {
        num: "5",
        title: "حقوقكم القانونية",
        content: "بموجب اللائحة العامة لحماية البيانات (GDPR)، يحق لكم طلب الوصول إلى بياناتكم الشخصية، أو تصحيحها، أو حذفها، أو تقييد معالجتها. لممارسة هذه الحقوق، يرجى تقديم طلب عبر بوابة الاتصال الخاصة بنا.",
      },
      {
        num: "6",
        title: "الاتصال ومسؤول حماية البيانات",
        content: "لأي استفسارات تتعلق بحماية البيانات، يرجى التواصل مع شركة تاكنيسر ذ.م.م عبر بوابة الاتصال المؤسسية على ",
        linkText: "takniser.com/contact",
        linkHref: "/contact",
      },
    ],
    helpTitle: "هل لديكم استفسارات بخصوص حماية البيانات؟",
    helpDesc: "قدم استفسارك مباشرة إلى فريق حماية البيانات المؤسسي.",
    helpBtn: "تواصل مع فريق حماية البيانات",
  },
};

const iconList = [Building2, Database, FileText, Clock, ShieldCheck, Mail];

export default function PrivacyContent() {
  const { currentLanguage } = useLanguage();
  const data = PRIVACY_DATA[currentLanguage] || PRIVACY_DATA["de"] || PRIVACY_DATA["en"];

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
              {data.controllerTag}
            </span>
            <span className="px-3 py-1 bg-[#002d3b] border border-slate-700 text-[#00cccc]">
              {data.regulationTag}
            </span>
          </div>
        </div>
      </section>

      {/* POLICY SECTIONS */}
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
              const IconComponent = iconList[idx] || FileText;
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
                      {sec.linkText && sec.linkHref && (
                        <Link
                          href={sec.linkHref}
                          className="text-[#009999] font-bold hover:text-[#002d3b] underline transition-colors"
                        >
                          {sec.linkText}
                        </Link>
                      )}
                      {sec.linkText && "."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Assistance Card */}
          <div className="bg-white border border-slate-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-black text-[#002d3b] uppercase tracking-tight">
                {data.helpTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {data.helpDesc}
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-siemens btn-siemens-primary inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-6 py-3 shrink-0"
            >
              <span>{data.helpBtn}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${currentLanguage === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

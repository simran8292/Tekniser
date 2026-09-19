"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { currentLanguage } = useLanguage();

  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";

  const title = isDe
    ? "Seite nicht gefunden"
    : isAr
    ? "الصفحة غير موجودة"
    : "Page Not Found";

  const desc = isDe
    ? "Die gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfen Sie die URL oder kehren Sie zur Plattform von TAKNISER ONE GLOBE zurück."
    : isAr
    ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يرجى التحقق من الرابط أو العودة إلى منصة تاكنيسر ون جلوب."
    : "The page you are looking for does not exist or has been moved. Please check the URL or navigate back to the TAKNISER ONE GLOBE platform.";

  const homeBtn = isDe ? "Zur Startseite zurückkehren" : isAr ? "العودة إلى الصفحة الرئيسية" : "Return to Home";
  const contactBtn = isDe ? "TAKNISER kontaktieren" : isAr ? "تواصل مع تاكنيسر" : "Contact TAKNISER";

  return (
    <div className={`min-h-screen flex items-center justify-center bg-[#090d16] px-4 ${isAr ? "rtl text-right" : "text-left"}`}>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#009999]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="text-center space-y-8 relative z-10">
        <div className="text-[8rem] sm:text-[12rem] font-extrabold text-slate-800 leading-none font-mono select-none">404</div>
        <div className="-mt-8 space-y-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h1>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            {desc}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold bg-[#009999] hover:bg-[#008080] text-white transition-all rounded-none"
          >
            <Home className="w-4 h-4" />
            <span>{homeBtn}</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 border border-slate-700 hover:border-[#009999] transition-all rounded-none"
          >
            <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            <span>{contactBtn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

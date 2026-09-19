"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle2, Upload, FileText, X, Briefcase, UserCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const DEPARTMENTS_DE = [
  "Ingenieurwesen & Technisches Design",
  "Fertigungsbetrieb & Qualitätssicherung",
  "Globale Lieferkette & Logistik",
  "Internationaler Handel & Beschaffung",
  "Informationstechnologie & KI-Robotik",
  "Unternehmensstrategie & Finanzen",
  "Regionales Hauptsitzmanagement",
  "Personalwesen & Talentakquise",
  "Nachhaltigkeit & Umweltmanagement",
];

const DEPARTMENTS_EN = [
  "Engineering & Technical Design",
  "Manufacturing Operations & Quality Assurance",
  "Global Supply Chain & Logistics",
  "International Trading & Procurement",
  "Information Technology & AI Robotics",
  "Corporate Strategy & Finance",
  "Regional Headquarters Management",
  "Human Resources & Talent Acquisition",
  "Sustainability & Environmental Management",
];

const DEPARTMENTS_AR = [
  "الهندسة والتصميم الفني",
  "عمليات التصنيع وضمان الجودة",
  "سلاسل التوريد والخدمات اللوجستية العالمية",
  "التجارة الدولية والمشتريات",
  "تكنولوجيا المعلومات وروبوتات الذكاء الاصطناعي",
  "الاستراتيجية المؤسسية والمالية",
  "إدارة المقرات الإقليمية",
  "الموارد البشرية واستقطاب الكفاءات",
  "الاستدامة والإدارة البيئية",
];

const EXPERIENCE_DE = [
  "Berufseinsteiger / Absolvent (0-2 Jahre)",
  "Fachkraft mit mittlerer Erfahrung (3-5 Jahre)",
  "Senior Spezialist / Leitung (6-10 Jahre)",
  "Führungskraft / Direktor (10+ Jahre)",
];

const EXPERIENCE_EN = [
  "Entry Level / Graduate (0-2 years)",
  "Mid-Level Professional (3-5 years)",
  "Senior Specialist / Lead (6-10 years)",
  "Executive / Director (10+ years)",
];

const EXPERIENCE_AR = [
  "مستوى مبتدئ / خريج (0-2 سنوات)",
  "مهني متوسط الخبرة (3-5 سنوات)",
  "أخصائي أول / قيادي (6-10 سنوات)",
  "تنفيذي / مدير (10+ سنوات)",
];

export default function CareerForm() {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";
  const departments = isDe ? DEPARTMENTS_DE : isAr ? DEPARTMENTS_AR : DEPARTMENTS_EN;
  const experienceLevels = isDe ? EXPERIENCE_DE : isAr ? EXPERIENCE_AR : EXPERIENCE_EN;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    department: "",
    experience: "",
    linkedin: "",
    coverNote: "",
    consent: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setFileError(
          isDe
            ? "Nur PDF-, DOC- oder DOCX-Dateien sind zulässig."
            : isAr
            ? "يسمح فقط بملفات PDF أو DOC أو DOCX."
            : "Only PDF, DOC, or DOCX files are allowed."
        );
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError(
          isDe
            ? "Dateigröße darf 10 MB nicht überschreiten."
            : isAr
            ? "يجب ألا يتجاوز حجم الملف 10 ميجابايت."
            : "File size must not exceed 10MB."
        );
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = isDe
        ? "Bitte geben Sie Ihren vollständigen Namen an."
        : isAr
        ? "يرجى تقديم اسمك القانوني الكامل."
        : "Please provide your full legal name.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isDe
        ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
        : isAr
        ? "يرجى إدخال عنوان بريد إلكتروني صالح."
        : "Please enter a valid email address.";
    }
    if (!formData.country.trim()) {
      newErrors.country = isDe
        ? "Bitte geben Sie Ihr Land oder Ihren aktuellen Standort an."
        : isAr
        ? "يرجى تحديد بلدك أو موقعك الحالي."
        : "Please specify your country or current location.";
    }
    if (!formData.department) {
      newErrors.department = isDe
        ? "Bitte wählen Sie einen Fachbereich oder ein Interessensgebiet."
        : isAr
        ? "يرجى اختيار مجال الاهتمام أو التخصص."
        : "Please select an area of expertise or interest.";
    }
    if (!formData.experience) {
      newErrors.experience = isDe
        ? "Bitte wählen Sie Ihre Berufserfahrungsstufe."
        : isAr
        ? "يرجى اختيار مستوى خبرتك المهنية."
        : "Please select your professional experience level.";
    }
    if (!selectedFile) {
      newErrors.resume = isDe
        ? "Bitte fügen Sie Ihren Lebenslauf / CV bei (PDF, DOC, DOCX)."
        : isAr
        ? "يرجى إرفاق سيرتك الذاتية (PDF, DOC, DOCX)."
        : "Please attach your CV / Resume (PDF, DOC, DOCX).";
    }
    if (!formData.consent) {
      newErrors.consent = isDe
        ? "Sie müssen der Datenverarbeitung zur Bewerberprüfung zustimmen."
        : isAr
        ? "يجب عليك الموافقة على معالجة البيانات للتقييم الوظيفي."
        : "You must agree to data processing for career evaluation.";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="border border-[#009999]/30 bg-[#001822] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#002d3b] border-2 border-[#009999] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#00cccc]" />
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
            {isDe ? "BEWERBUNG EINGEGANGEN" : isAr ? "تم استلام الطلب" : "APPLICATION RECEIVED"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {isDe
              ? "Profil erfolgreich an TAKNISER Talent Acquisition übermittelt"
              : isAr
              ? "تم إرسال الملف الشخصي إلى فريق استقطاب الكفاءات في تاكنيسر"
              : "Profile Submitted to TAKNISER Talent Acquisition"}
          </h3>
        </div>
        <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
          {isDe ? (
            <>
              Vielen Dank, <span className="font-bold text-white">{formData.fullName}</span>. Ihr Lebenslauf (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) wurde an unser globales Talentmanagement-Team für den Bereich{" "}
              <span className="font-bold text-white">{formData.department}</span> weitergeleitet.
            </>
          ) : isAr ? (
            <>
              شكراً لك، <span className="font-bold text-white">{formData.fullName}</span>. تم توجيه سيرتك الذاتية (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) إلى فريق إدارة الكفاءات العالمي لقسم{" "}
              <span className="font-bold text-white">{formData.department}</span>.
            </>
          ) : (
            <>
              Thank you, <span className="font-bold text-white">{formData.fullName}</span>. Your resume (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) has been routed to our Global Talent Management team for the{" "}
              <span className="font-bold text-white">{formData.department}</span> division.
            </>
          )}
        </p>
        <div className="p-4 bg-[#002d3b]/80 border border-slate-700 text-xs font-mono text-slate-300 text-left max-w-md mx-auto space-y-1">
          <div>&bull; {isDe ? "Hauptkontakt" : isAr ? "جهة الاتصال" : "Primary Contact"}: {formData.email}</div>
          <div>&bull; {isDe ? "Erfahrungsstufe" : isAr ? "المستوى" : "Level"}: {formData.experience}</div>
          <div>&bull; {isDe ? "Prüfungszeitraum" : isAr ? "فترة المراجعة" : "Review Horizon"}: {isDe ? "3–5 Werktage" : isAr ? "3-5 أيام عمل" : "3–5 business days"}</div>
        </div>
        <button
          onClick={() => {
            setStatus("idle");
            setSelectedFile(null);
            setFormData({
              fullName: "",
              email: "",
              phone: "",
              country: "",
              department: "",
              experience: "",
              linkedin: "",
              coverNote: "",
              consent: false,
            });
          }}
          className="btn-siemens btn-siemens-secondary text-xs uppercase tracking-wider font-bold px-6 py-3"
        >
          {isDe ? "Weiteren Antrag einreichen" : isAr ? "تقديم طلب آخر" : "Submit Another Application"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "Vollständiger Name" : isAr ? "الاسم القانوني الكامل" : "Full Legal Name"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder={isDe ? "z. B. Alexander Schmidt" : isAr ? "مثال: ألكسندر شميت" : "e.g., Alexander Schmidt"}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "E-Mail-Adresse" : isAr ? "عنوان البريد الإلكتروني" : "Email Address"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={isDe ? "z. B. alexander.schmidt@beispiel.de" : "e.g., alexander.schmidt@example.com"}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>
      </div>

      {/* Phone and Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "Telefon / WhatsApp (Optional)" : isAr ? "الهاتف / واتساب (اختياري)" : "Phone / WhatsApp (Optional)"}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 170 1234567"
            className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "Aktuelles Land / Standort" : isAr ? "البلد / الموقع الحالي" : "Current Country / Location"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder={isDe ? "z. B. Deutschland, VAE, Schweiz, Österreich" : isAr ? "مثال: الإمارات، السعودية، ألمانيا" : "e.g., Germany, UAE, United States, Singapore"}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.country ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.country && <p className="text-xs text-red-600 font-medium">{errors.country}</p>}
        </div>
      </div>

      {/* Department & Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "Bevorzugter Bereich / Fachbereich" : isAr ? "القطاع / المجال المفضل" : "Preferred Division / Area"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.department ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          >
            <option value="">
              {isDe ? "Interessensgebiet auswählen..." : isAr ? "اختر مجال الاهتمام..." : "Select an area of interest..."}
            </option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && <p className="text-xs text-red-600 font-medium">{errors.department}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            {isDe ? "Erfahrungsstufe" : isAr ? "مستوى الخبرة" : "Experience Level"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.experience ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          >
            <option value="">
              {isDe ? "Erfahrungsstufe auswählen..." : isAr ? "اختر مستوى الخبرة..." : "Select experience level..."}
            </option>
            {experienceLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
          {errors.experience && <p className="text-xs text-red-600 font-medium">{errors.experience}</p>}
        </div>
      </div>

      {/* LinkedIn Profile */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          {isDe ? "LinkedIn / Portfolio-URL (Optional)" : isAr ? "رابط لينكد إن / ملف الأعمال (اختياري)" : "LinkedIn / Portfolio URL (Optional)"}
        </label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/username"
          className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none"
        />
      </div>

      {/* Resume File Upload Box */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          {isDe ? "Lebenslauf / CV hochladen" : isAr ? "تحميل السيرة الذاتية" : "Upload CV / Resume"}{" "}
          <span className="text-red-500">*</span>
        </label>

        <div className="border-2 border-dashed border-slate-300 hover:border-[#009999] bg-[#f8fafc] p-6 transition-colors text-center relative">
          <input
            ref={fileInputRef}
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {selectedFile ? (
            <div className="flex items-center justify-between p-3 bg-white border border-[#009999] text-left">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 bg-[#002d3b] text-[#00cccc]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-[#002d3b] truncate">{selectedFile.name}</p>
                  <p className="text-[10px] text-slate-500 font-mono">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB &bull; {isDe ? "Bereit zum Senden" : isAr ? "جاهز للإرسال" : "Ready to submit"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                title="Remove file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-2 pointer-events-none">
              <div className="flex justify-center">
                <div className="p-3 bg-white border border-slate-200 text-[#009999]">
                  <Upload className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm font-bold text-[#002d3b]">
                {isDe ? "Klicken oder Datei hierher ziehen, um Lebenslauf hochzuladen" : isAr ? "انقر أو اسحب لإرفاق سيرتك الذاتية" : "Click or drag & drop to upload your resume"}
              </p>
              <p className="text-xs text-slate-500">
                {isDe ? "Unterstützte Formate: PDF, DOC, DOCX (Max. Größe: 10 MB)" : isAr ? "الصيغ المدعومة: PDF, DOC, DOCX (الحد الأقصى: 10 ميجابايت)" : "Supported formats: PDF, DOC, DOCX (Max size: 10MB)"}
              </p>
            </div>
          )}
        </div>
        {fileError && <p className="text-xs text-red-600 font-medium">{fileError}</p>}
        {errors.resume && <p className="text-xs text-red-600 font-medium">{errors.resume}</p>}
      </div>

      {/* Cover Note / Candidate Statement */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          {isDe ? "Zusammenfassung / Wichtigste Erfolge (Optional)" : isAr ? "ملخص المرشح / الإنجازات الرئيسية (اختياري)" : "Candidate Summary / Key Achievements (Optional)"}
        </label>
        <textarea
          name="coverNote"
          rows={4}
          value={formData.coverNote}
          onChange={handleChange}
          placeholder={
            isDe
              ? "Beschreiben Sie kurz Ihre technischen Spezialgebiete, bemerkenswerte Erfolge und Ihre Motivation, bei TAKNISER ONE GLOBE einzusteigen..."
              : isAr
              ? "وضح بإيجاز تخصصاتك الفنية وإنجازاتك ودوافعك للانضمام إلى تاكنيسر ون غلوب..."
              : "Briefly highlight your technical specialties, notable engineering or commercial achievements, and what motivates you to join TAKNISER ONE GLOBE..."
          }
          className="w-full px-4 py-3 bg-[#f8fafc] border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none resize-y"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded-none border-slate-300 text-[#009999] focus:ring-[#009999]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            {isDe
              ? "Ich stimme zu, dass die TAKNISER GmbH und ihre regionalen HR-Partner meine personenbezogenen Daten und meinen Lebenslauf für Karriere- und Beschäftigungsmöglichkeiten gemäß der Datenschutzerklärung verarbeiten. *"
              : isAr
              ? "أوافق على قيام تاكنيسر ذ.م.م والشركات التابعة للموارد البشرية بتخزين ومعالجة بياناتي الشخصية وسيرتي الذاتية لفرص العمل وفقاً لسياسة الخصوصية. *"
              : "I consent to TAKNISER GmbH and its regional human resources affiliates storing and processing my personal data and resume for career and employment opportunities in accordance with the corporate Privacy Policy. *"}
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 font-medium">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-siemens btn-siemens-primary w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase disabled:opacity-50"
        >
          {status === "loading" ? (
            <span>{isDe ? "Bewerbung wird übermittelt..." : isAr ? "جارٍ إرسال الطلب..." : "Transmitting Application..."}</span>
          ) : (
            <>
              <span>{isDe ? "Bewerbung an Personalabteilung senden" : isAr ? "إرسال السيرة الذاتية للموارد البشرية" : "Submit Resume to HR"}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

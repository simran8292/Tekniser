"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, Upload, FileText, X, Briefcase, MapPin, Phone, Mail, User, Globe, Linkedin, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const EXPERIENCE_DE = [
  "Berufseinsteiger / Absolvent (0–2 Jahre)",
  "Fachkraft mit mittlerer Erfahrung (3–5 Jahre)",
  "Senior Spezialist / Leitung (6–10 Jahre)",
  "Führungskraft / Direktor (10+ Jahre)",
];

const EXPERIENCE_EN = [
  "0–2 Years (Entry / Graduate)",
  "3–5 Years (Mid-Level Professional)",
  "6–10 Years (Senior / Lead)",
  "10+ Years (Executive / Principal)",
];

const EXPERIENCE_AR = [
  "0-2 سنوات (مستوى مبتدئ / خريج)",
  "3-5 سنوات (مهني متوسط الخبرة)",
  "6-10 سنوات (أخصائي أول / قيادي)",
  "10+ سنوات (تنفيذي / مدير)",
];

const POPULAR_POSITIONS = [
  "Lead Autonomous Robotics Architect (Berlin, Germany)",
  "VP Global Supply Chain & Logistics (Dubai, UAE)",
  "Senior Satellite & Orbital Payload Engineer (Munich, Germany)",
  "Global Commodity Trading Director (Geneva / Singapore)",
  "Precision Agriculture Systems Lead (Zurich, Switzerland)",
  "Graduate Engineer — Fast-Track Leadership (Frankfurt, Germany)",
  "Senior ESG & Decarbonization Strategist (Amsterdam, Netherlands)",
  "General / Speculative Application (Open Requisition)",
];

interface CareerFormProps {
  initialPosition?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export default function CareerForm({ initialPosition = "", onSuccess, isModal = false }: CareerFormProps) {
  const { currentLanguage } = useLanguage();
  const isDe = currentLanguage === "de";
  const isAr = currentLanguage === "ar";
  const experienceLevels = isDe ? EXPERIENCE_DE : isAr ? EXPERIENCE_AR : EXPERIENCE_EN;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    positionAppliedFor: initialPosition || "",
    yearsExperience: "",
    linkedin: "",
    coverLetter: "",
    consent: false,
  });

  useEffect(() => {
    if (initialPosition) {
      setFormData((prev) => ({ ...prev, positionAppliedFor: initialPosition }));
    }
  }, [initialPosition]);

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
      if (errors.resume) {
        setErrors((prev) => ({ ...prev, resume: "" }));
      }
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

    // 1. Full Name
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = isDe
        ? "Bitte geben Sie Ihren vollständigen Namen an."
        : isAr
        ? "يرجى تقديم اسمك القانوني الكامل."
        : "Please provide your full legal name.";
    }

    // 2. Email
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isDe
        ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
        : isAr
        ? "يرجى إدخال عنوان بريد إلكتروني صالح."
        : "Please enter a valid email address.";
    }

    // 3. Phone / WhatsApp
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = isDe
        ? "Bitte geben Sie eine gültige Telefon-/WhatsApp-Nummer an."
        : isAr
        ? "يرجى إدخال رقم هاتف أو واتساب صالح."
        : "Please enter a valid Phone / WhatsApp number.";
    }

    // 4. Current Location
    if (!formData.currentLocation.trim()) {
      newErrors.currentLocation = isDe
        ? "Bitte geben Sie Ihren aktuellen Standort (Stadt, Land) an."
        : isAr
        ? "يرجى تحديد موقعك الحالي (المدينة، الدولة)."
        : "Please specify your current location (City, Country).";
    }

    // 5. Position Applied For
    if (!formData.positionAppliedFor.trim()) {
      newErrors.positionAppliedFor = isDe
        ? "Bitte geben Sie die angestrebte Position an."
        : isAr
        ? "يرجى تحديد المسمى الوظيفي المتقدم إليه."
        : "Please specify the position you are applying for.";
    }

    // 6. Years of Experience
    if (!formData.yearsExperience) {
      newErrors.yearsExperience = isDe
        ? "Bitte wählen Sie Ihre Jahre an Berufserfahrung."
        : isAr
        ? "يرجى اختيار عدد سنوات الخبرة."
        : "Please select your years of experience.";
    }

    // 8. CV upload
    if (!selectedFile) {
      newErrors.resume = isDe
        ? "Bitte fügen Sie Ihren Lebenslauf / CV bei (PDF, DOC, DOCX)."
        : isAr
        ? "يرجى إرفاق سيرتك الذاتية (PDF, DOC, DOCX)."
        : "Please attach your CV / Resume (PDF, DOC, DOCX).";
    }

    // 10. Consent / Privacy acceptance
    if (!formData.consent) {
      newErrors.consent = isDe
        ? "Sie müssen der Datenverarbeitung und den Datenschutzbestimmungen zustimmen."
        : isAr
        ? "يجب عليك الموافقة على معالجة البيانات وسياسة الخصوصية."
        : "You must accept the privacy policy & consent to data processing.";
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
      if (onSuccess) onSuccess();
    }, 1200);
  };

  if (status === "success") {
    return (
      <div className="border border-[#009999]/30 bg-[#001822] text-white p-6 sm:p-10 text-center space-y-6 shadow-xl">
        <div className="flex justify-center">
          <div className="w-14 h-14 bg-[#002d3b] border-2 border-[#009999] flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-[#00cccc]" />
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#009999] uppercase tracking-widest">
            {isDe ? "BEWERBUNG EINGEGANGEN" : isAr ? "تم استلام الطلب" : "APPLICATION RECEIVED"}
          </span>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            {isDe
              ? "Bewerbung erfolgreich an TAKNISER Talent Acquisition übermittelt"
              : isAr
              ? "تم إرسال الطلب بنجاح إلى فريق استقطاب الكفاءات في تاكنيسر"
              : "Application Submitted to TAKNISER Talent Acquisition"}
          </h3>
        </div>
        <p className="text-slate-300 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
          {isDe ? (
            <>
              Vielen Dank, <span className="font-bold text-white">{formData.fullName}</span>. Ihre Bewerbung für{" "}
              <span className="text-[#00cccc] font-bold">{formData.positionAppliedFor}</span> inklusive Lebenslauf (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) wurde erfolgreich registriert.
            </>
          ) : isAr ? (
            <>
              شكراً لك، <span className="font-bold text-white">{formData.fullName}</span>. تم تسجيل طلبك لوظيفة{" "}
              <span className="text-[#00cccc] font-bold">{formData.positionAppliedFor}</span> مع سيرتك الذاتية (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) بنجاح.
            </>
          ) : (
            <>
              Thank you, <span className="font-bold text-white">{formData.fullName}</span>. Your application for{" "}
              <span className="text-[#00cccc] font-bold">{formData.positionAppliedFor}</span> along with your CV (
              <span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) has been routed to our recruitment directors.
            </>
          )}
        </p>
        <div className="p-4 bg-[#002d3b]/80 border border-slate-700 text-xs font-mono text-slate-300 text-left max-w-md mx-auto space-y-1">
          <div>&bull; {isDe ? "Position" : isAr ? "الوظيفة" : "Position"}: {formData.positionAppliedFor}</div>
          <div>&bull; {isDe ? "E-Mail" : isAr ? "البريد الإلكتروني" : "Email"}: {formData.email}</div>
          <div>&bull; {isDe ? "Telefon" : isAr ? "الهاتف" : "Phone"}: {formData.phone}</div>
          <div>&bull; {isDe ? "Standort" : isAr ? "الموقع" : "Location"}: {formData.currentLocation}</div>
          <div>&bull; {isDe ? "Erfahrung" : isAr ? "الخبرة" : "Experience"}: {formData.yearsExperience}</div>
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
              currentLocation: "",
              positionAppliedFor: initialPosition || "",
              yearsExperience: "",
              linkedin: "",
              coverLetter: "",
              consent: false,
            });
          }}
          className="btn-siemens btn-siemens-secondary text-xs uppercase tracking-wider font-bold px-6 py-2.5"
        >
          {isDe ? "Weiteren Antrag einreichen" : isAr ? "تقديم طلب آخر" : "Submit Another Application"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 1. Full Name & 2. Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <User className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Vollständiger Name" : isAr ? "الاسم الكامل" : "Full Name"}</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder={isDe ? "z. B. Dr. Alexander Schmidt" : isAr ? "مثال: د. ألكسندر شميت" : "e.g., Alexander Schmidt"}
            className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <Mail className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "E-Mail-Adresse" : isAr ? "البريد الإلكتروني" : "Email"}</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alexander.schmidt@example.com"
            className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>
      </div>

      {/* 3. Phone / WhatsApp & 4. Current Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <Phone className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Telefon / WhatsApp" : isAr ? "الهاتف / واتساب" : "Phone / WhatsApp"}</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 170 1234567 / +971 50 1234567"
            className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.phone && <p className="text-xs text-red-600 font-medium">{errors.phone}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <MapPin className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Aktueller Standort" : isAr ? "الموقع الحالي" : "Current Location"}</span>
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            placeholder={isDe ? "z. B. München, Deutschland / Dubai, VAE" : isAr ? "مثال: دبي، الإمارات / برلين، ألمانيا" : "e.g., Munich, Germany / Dubai, UAE / London, UK"}
            className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.currentLocation ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          />
          {errors.currentLocation && <p className="text-xs text-red-600 font-medium">{errors.currentLocation}</p>}
        </div>
      </div>

      {/* 5. Position Applied For & 6. Years of Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <Briefcase className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Angestrebte Position" : isAr ? "الوظيفة المتقدم إليها" : "Position Applied For"}</span>
            <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="positionAppliedFor"
              list="positions-list"
              value={formData.positionAppliedFor}
              onChange={handleChange}
              placeholder={isDe ? "Position eingeben oder auswählen..." : isAr ? "أدخل الوظيفة أو اختر..." : "Enter position or select..."}
              className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
                errors.positionAppliedFor ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
            />
            <datalist id="positions-list">
              {POPULAR_POSITIONS.map((pos) => (
                <option key={pos} value={pos} />
              ))}
            </datalist>
          </div>
          {errors.positionAppliedFor && <p className="text-xs text-red-600 font-medium">{errors.positionAppliedFor}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            <Globe className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Berufserfahrung (Jahre)" : isAr ? "سنوات الخبرة" : "Years of Experience"}</span>
            <span className="text-red-500">*</span>
          </label>
          <select
            name="yearsExperience"
            value={formData.yearsExperience}
            onChange={handleChange}
            className={`w-full px-3.5 py-2.5 bg-[#f8fafc] border text-sm text-slate-900 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${
              errors.yearsExperience ? "border-red-500 bg-red-50/20" : "border-slate-300"
            }`}
          >
            <option value="">
              {isDe ? "Jahre auswählen..." : isAr ? "اختر سنوات الخبرة..." : "Select years of experience..."}
            </option>
            {experienceLevels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
          {errors.yearsExperience && <p className="text-xs text-red-600 font-medium">{errors.yearsExperience}</p>}
        </div>
      </div>

      {/* 7. LinkedIn / Portfolio */}
      <div className="space-y-1.5">
        <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          <Linkedin className="w-3.5 h-3.5 text-[#009999]" />
          <span>{isDe ? "LinkedIn / Portfolio" : isAr ? "لينكد إن / ملف الأعمال" : "LinkedIn / Portfolio"}</span>
          <span className="text-slate-400 text-[10px] font-mono uppercase ml-1">({isDe ? "Optional" : "Optional"})</span>
        </label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/username or https://github.com/..."
          className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none"
        />
      </div>

      {/* 8. CV Upload */}
      <div className="space-y-2">
        <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          <div className="flex items-center gap-1">
            <Upload className="w-3.5 h-3.5 text-[#009999]" />
            <span>{isDe ? "Lebenslauf / CV hochladen" : isAr ? "تحميل السيرة الذاتية" : "CV Upload"}</span>
            <span className="text-red-500">*</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 font-normal">PDF, DOC, DOCX (Max 10MB)</span>
        </label>

        <div className="border-2 border-dashed border-slate-300 hover:border-[#009999] bg-[#f8fafc] p-5 transition-colors text-center relative">
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
            <div className="space-y-1.5 pointer-events-none">
              <div className="flex justify-center">
                <div className="p-2.5 bg-white border border-slate-200 text-[#009999]">
                  <Upload className="w-5 h-5" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#002d3b]">
                {isDe ? "Klicken oder Datei hierher ziehen, um CV hochzuladen" : isAr ? "انقر أو اسحب لإرفاق سيرتك الذاتية" : "Click or drag & drop to upload CV"}
              </p>
              <p className="text-[11px] text-slate-500">
                {isDe ? "PDF, DOC, DOCX bis zu 10 MB" : "Supported: PDF, DOC, DOCX up to 10 MB"}
              </p>
            </div>
          )}
        </div>
        {fileError && <p className="text-xs text-red-600 font-medium">{fileError}</p>}
        {errors.resume && <p className="text-xs text-red-600 font-medium">{errors.resume}</p>}
      </div>

      {/* 9. Cover Letter */}
      <div className="space-y-1.5">
        <label className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#002d3b]">
          <FileText className="w-3.5 h-3.5 text-[#009999]" />
          <span>{isDe ? "Anschreiben / Cover Letter" : isAr ? "خطاب التقديم" : "Cover Letter"}</span>
          <span className="text-slate-400 text-[10px] font-mono uppercase ml-1">({isDe ? "Optional" : "Optional"})</span>
        </label>
        <textarea
          name="coverLetter"
          rows={3}
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder={
            isDe
              ? "Beschreiben Sie kurz Ihre wichtigsten Qualifikationen, Erfolge und Motivation..."
              : isAr
              ? "وضح بإيجاز أهم مؤهلاتك وإنجازاتك ودوافعك للانضمام..."
              : "Introduce yourself, highlight key achievements, and explain why you want to join TAKNISER ONE GLOBE..."
          }
          className="w-full px-3.5 py-2.5 bg-[#f8fafc] border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none resize-y"
        />
      </div>

      {/* 10. Consent / Privacy Acceptance */}
      <div className="space-y-1 pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded-none border-slate-300 text-[#009999] focus:ring-[#009999]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            {isDe
              ? "Ich stimme der Verarbeitung meiner personenbezogenen Daten und Bewerbungsunterlagen gemäß der TAKNISER Datenschutzrichtlinie für Stellenbesetzungsverfahren zu. *"
              : isAr
              ? "أوافق على معالجة وتخزين بياناتي الشخصية ومستندات التقديم الخاصة بي وفقاً لسياسة الخصوصية الخاصة بشركة تاكنيسر. *"
              : "I accept the Privacy Policy and consent to TAKNISER GmbH and its regional entities processing my personal data and CV for employment evaluation. *"}
          </span>
        </label>
        {errors.consent && <p className="text-xs text-red-600 font-medium">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-siemens btn-siemens-primary w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2 text-xs font-bold tracking-wider uppercase disabled:opacity-50"
        >
          {status === "loading" ? (
            <span>{isDe ? "Bewerbung wird übermittelt..." : isAr ? "جارٍ إرسال الطلب..." : "Submitting Application..."}</span>
          ) : (
            <>
              <span>{isDe ? "Bewerbung einreichen" : isAr ? "إرسال طلب التقديم" : "Submit Application"}</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

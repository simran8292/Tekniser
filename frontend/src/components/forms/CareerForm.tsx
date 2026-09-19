"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle2, Upload, FileText, X, Briefcase, UserCheck } from "lucide-react";

const DEPARTMENTS = [
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

const EXPERIENCE_LEVELS = [
  "Entry Level / Graduate (0-2 years)",
  "Mid-Level Professional (3-5 years)",
  "Senior Specialist / Lead (6-10 years)",
  "Executive / Director (10+ years)",
];

export default function CareerForm() {
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
        setFileError("Only PDF, DOC, or DOCX files are allowed.");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File size must not exceed 10MB.");
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
      newErrors.fullName = "Please provide your full legal name.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Please specify your country or current location.";
    }
    if (!formData.department) {
      newErrors.department = "Please select an area of expertise or interest.";
    }
    if (!formData.experience) {
      newErrors.experience = "Please select your professional experience level.";
    }
    if (!selectedFile) {
      newErrors.resume = "Please attach your CV / Resume (PDF, DOC, DOCX).";
    }
    if (!formData.consent) {
      newErrors.consent = "You must agree to data processing for career evaluation.";
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
    // Simulate high-assurance upload & review submission
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
            APPLICATION RECEIVED
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Profile Submitted to TAKNISER Talent Acquisition
          </h3>
        </div>
        <p className="text-slate-300 max-w-lg mx-auto text-sm leading-relaxed">
          Thank you, <span className="font-bold text-white">{formData.fullName}</span>. Your resume (<span className="text-[#00cccc] font-mono">{selectedFile?.name}</span>) has been routed to our Global Talent Management team for the <span className="font-bold text-white">{formData.department}</span> division.
        </p>
        <div className="p-4 bg-[#002d3b]/80 border border-slate-700 text-xs font-mono text-slate-300 text-left max-w-md mx-auto space-y-1">
          <div>&bull; Primary Contact: {formData.email}</div>
          <div>&bull; Level: {formData.experience}</div>
          <div>&bull; Review Horizon: 3–5 business days</div>
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
          Submit Another Application
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
            Full Legal Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g., Alexander Schmidt"
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${errors.fullName ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., alexander.schmidt@example.com"
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${errors.email ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
          />
          {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>
      </div>

      {/* Phone and Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            Phone / WhatsApp (Optional)
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
            Current Country / Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="e.g., Germany, UAE, United States, Singapore"
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${errors.country ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
          />
          {errors.country && <p className="text-xs text-red-600 font-medium">{errors.country}</p>}
        </div>
      </div>

      {/* Department & Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            Preferred Division / Area <span className="text-red-500">*</span>
          </label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${errors.department ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
          >
            <option value="">Select an area of interest...</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          {errors.department && <p className="text-xs text-red-600 font-medium">{errors.department}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#002d3b]">
            Experience Level <span className="text-red-500">*</span>
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-[#f8fafc] border text-sm text-slate-900 focus:outline-none focus:border-[#009999] transition-colors rounded-none ${errors.experience ? "border-red-500 bg-red-50/20" : "border-slate-300"
              }`}
          >
            <option value="">Select experience level...</option>
            {EXPERIENCE_LEVELS.map((lvl) => (
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
          LinkedIn / Portfolio URL (Optional)
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
          Upload CV / Resume <span className="text-red-500">*</span>
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
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB &bull; Ready to submit
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
                Click or drag &amp; drop to upload your resume
              </p>
              <p className="text-xs text-slate-500">
                Supported formats: PDF, DOC, DOCX (Max size: 10MB)
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
          Candidate Summary / Key Achievements (Optional)
        </label>
        <textarea
          name="coverNote"
          rows={4}
          value={formData.coverNote}
          onChange={handleChange}
          placeholder="Briefly highlight your technical specialties, notable engineering or commercial achievements, and what motivates you to join TAKNISER ONE GLOBE..."
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
            I consent to TAKNISER GmbH and its regional human resources affiliates storing and processing my personal data and resume for career and employment opportunities in accordance with the corporate Privacy Policy. <span className="text-red-500">*</span>
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
            <span>Transmitting Application...</span>
          ) : (
            <>
              <span>Submit Resume to HR</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

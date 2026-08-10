import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — TAKNISER ONE GLOBE" };

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#090d16]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-slate-400 text-sm">Last updated: {new Date().getFullYear()}</p>
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Data Controller</h2>
            <p>TAKNISER GmbH, headquartered in Hesse (Hessen), Germany, is the data controller responsible for the personal data collected through this platform.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Data We Collect</h2>
            <p>When you submit a contact inquiry, we collect: full name, company name, business email address, phone number (optional), country, subject, and message content. We also collect your IP address for security and spam prevention purposes.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Purpose of Processing</h2>
            <p>Your data is collected solely for the purpose of responding to your corporate inquiry, communicating relevant TAKNISER products and services, and maintaining our business relationship.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Data Retention</h2>
            <p>Corporate inquiry data is retained for a period necessary to fulfil the inquiry and maintain appropriate business records, in accordance with applicable German and international data protection regulations.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Your Rights</h2>
            <p>Under GDPR and applicable data protection law, you have the right to access, correct, delete, or restrict processing of your personal data. To exercise these rights, submit a request through our corporate contact portal.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">6. Contact</h2>
            <p>For any data protection enquiries, please contact TAKNISER GmbH through our corporate contact portal at <a href="/contact" className="text-sky-400 hover:underline">takniser.com/contact</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

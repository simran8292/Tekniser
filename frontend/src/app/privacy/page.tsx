import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — TAKNISER ONE GLOBE",
  description:
    "Official Privacy Policy of TAKNISER GmbH (Hesse, Germany) governing personal data handling under EU GDPR and German data protection regulations.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

import type { Metadata } from "next";
import FamilyContent from "./FamilyContent";

export const metadata: Metadata = {
  title: "TAKNISER ONE GLOBE Family — Corporate Responsibility",
  description:
    "Discover the TAKNISER family philosophy: human-centric values, workforce development, safety, and community empowerment across 190+ countries.",
};

export default function FamilyPage() {
  return <FamilyContent />;
}

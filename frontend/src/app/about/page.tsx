import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "German Engineering Heritage — 100+ Years of Industrial Excellence | TAKNISER",
  description:
    "Discover the century-long heritage of TAKNISER, beginning in Hesse (Hessen), Germany — where Präzision, Qualität, Zuverlässigkeit, Ingenieurskunst, and Vertrauen define who we are.",
};

export default function AboutPage() {
  return <AboutContent />;
}

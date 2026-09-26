import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers at TAKNISER — Build Your Future Across Global Industries",
  description:
    "Build your career across industries, technologies, and markets with TAKNISER ONE GLOBE. Explore global opportunities, graduate programs, and submit your CV to join our 190+ country network.",
  openGraph: {
    title: "Careers at TAKNISER — Global Engineering & Industrial Opportunities",
    description:
      "Join 100+ years of German engineering excellence. Explore open positions in engineering, robotics, supply chain, international trade, and space economy.",
    images: [{ url: "/takniser_careers_hero.jpg", width: 1920, height: 1080, alt: "Careers at TAKNISER" }],
  },
};

export default function CareersPage() {
  return <CareersContent />;
}

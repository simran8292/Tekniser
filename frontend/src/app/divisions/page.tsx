import type { Metadata } from "next";
import DivisionsContent from "./DivisionsContent";

export const metadata: Metadata = {
  title: "Our Business Divisions — TAKNISER ONE GLOBE",
  description:
    "Seven transformative sectors, one integrated global platform. Explore Space Economy, Mining & Minerals, AgTech, LifeCare, Lifestyle, Robotics, and Global Trading.",
};

export default function DivisionsPage() {
  return <DivisionsContent />;
}

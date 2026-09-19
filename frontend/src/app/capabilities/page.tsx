import type { Metadata } from "next";
import CapabilitiesContent from "./CapabilitiesContent";

export const metadata: Metadata = {
  title: "INNOVATION — TAKNISER ONE GLOBE",
  description:
    "Exploring what's next. Building what matters. Discover the TAKNISER continuous innovation flywheel and technological capabilities.",
};

export default function CapabilitiesPage() {
  return <CapabilitiesContent />;
}

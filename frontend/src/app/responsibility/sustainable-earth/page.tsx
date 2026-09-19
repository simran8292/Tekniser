import type { Metadata } from "next";
import SustainableEarthContent from "./SustainableEarthContent";

export const metadata: Metadata = {
  title: "Sustainable Earth — TAKNISER ONE GLOBE",
  description:
    "Explore TAKNISER ONE GLOBE's commitment to ecological transformation, clean energy, decarbonized supply chains, and circular industrial systems.",
};

export default function SustainableEarthPage() {
  return <SustainableEarthContent />;
}

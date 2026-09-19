import type { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
  title: "T1G IMPACTS — 12 Global Frontiers | TAKNISER ONE GLOBE",
  description:
    "Where we believe the next great opportunities will emerge. Explore TAKNISER's T1G IMPACTS across 12 Global Frontiers, Global Explorer & Research Team, and Signal to Scale engine.",
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}

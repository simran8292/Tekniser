import type { Metadata } from "next";
import GlobalNetworkContent from "./GlobalNetworkContent";

export const metadata: Metadata = {
  title: "Global Network — TAKNISER ONE GLOBE",
  description:
    "One Globe. One Network. One Future. Explore TAKNISER's strategically positioned global network of 30 Regional Headquarters, logistics hubs, engineering centers, and business offices across 190+ countries.",
};

export default function GlobalNetworkPage() {
  return <GlobalNetworkContent />;
}

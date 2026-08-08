import type { MetadataRoute } from "next";
import { BUSINESS_DIVISIONS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://takniser.com";
  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/vision-2046`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/divisions`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/capabilities`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/industries`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/global-network`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];
  const divisionPages = BUSINESS_DIVISIONS.map((div) => ({
    url: `${base}/divisions/${div.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  return [...staticPages, ...divisionPages];
}

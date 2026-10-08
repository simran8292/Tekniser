import type { Metadata } from "next";
import NewsMediaContent from "./NewsMediaContent";

export const metadata: Metadata = {
  title: "News & Media — Official Press Releases, Speeches & Media Hub | TAKNISER ONE GLOBE",
  description:
    "Explore TAKNISER's official News & Media hub. Discover breaking company announcements, executive speeches, in-depth feature stories, high-resolution media galleries, and publications across 190+ countries.",
  openGraph: {
    title: "News & Media — TAKNISER ONE GLOBE Corporate Press Center",
    description:
      "Latest announcements, executive keynotes, high-resolution photo archives, and global industrial innovation stories from TAKNISER GmbH.",
    images: [
      {
        url: "/clean_corporate_hq_branded.jpg",
        width: 1920,
        height: 1080,
        alt: "TAKNISER News & Media Hub",
      },
    ],
  },
};

export default function NewsMediaPage() {
  return <NewsMediaContent />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS_DIVISIONS } from "@/lib/data";
import DivisionDetailContent from "./DivisionDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BUSINESS_DIVISIONS.map((div) => ({ slug: div.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = BUSINESS_DIVISIONS.find((d) => d.slug === slug);
  if (!division) return { title: "Division Not Found" };
  return {
    title: `${division.title} — TAKNISER ONE GLOBE`,
    description: division.description,
  };
}

export default async function DivisionDetailPage({ params }: Props) {
  const { slug } = await params;
  const division = BUSINESS_DIVISIONS.find((d) => d.slug === slug);
  if (!division) notFound();

  return <DivisionDetailContent slug={slug} />;
}

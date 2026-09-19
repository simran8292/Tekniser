import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Use — TAKNISER ONE GLOBE",
  description:
    "Official Terms of Use governing access to and engagement with the TAKNISER ONE GLOBE platform under the laws of the Federal Republic of Germany.",
};

export default function TermsPage() {
  return <TermsContent />;
}

import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact TAKNISER — Corporate Contact Portal",
  description:
    "Whether you are a manufacturer, government body, EPC contractor, OEM, or institutional buyer — our global corporate team is ready to respond to your inquiry.",
};

export default function ContactPage() {
  return <ContactContent />;
}

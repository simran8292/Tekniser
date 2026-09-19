import type { Metadata } from "next";
import VisionContent from "./VisionContent";

export const metadata: Metadata = {
  title: "Vision 2046 Roadmap — TAKNISER ONE GLOBE",
  description:
    "TAKNISER's strategic century vision charts the course from a Hessen engineering heritage to a globally respected industrial, technology and trading conglomerate.",
};

export default function Vision2046Page() {
  return <VisionContent />;
}

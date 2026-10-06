import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const artifactDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\4179838a-da07-4562-89f6-21229ef597a2";
  const publicDir = "E:\\websites\\Tekniser\\frontend\\public";

  const list = [
    { src: "cat_minerals_lithium_1791285618696.jpg", dst: "cat_minerals_lithium.jpg" },
    { src: "cat_minerals_copper_1791285641794.jpg", dst: "cat_minerals_copper.jpg" },
    { src: "cat_minerals_aluminum_1791285663607.jpg", dst: "cat_minerals_aluminum.jpg" },
    { src: "cat_lifecare_pharma_1791285684884.jpg", dst: "cat_lifecare_pharma.jpg" },
    { src: "cat_lifecare_hospital_1791285709521.jpg", dst: "cat_lifecare_hospital.jpg" },
    { src: "cat_agtech_machinery_1791285731992.jpg", dst: "cat_agtech_machinery.jpg" },
    { src: "cat_robotics_amr_1791285755422.jpg", dst: "cat_robotics_amr.jpg" },
  ];

  const copied: string[] = [];
  for (const item of list) {
    const s = path.join(artifactDir, item.src);
    const d = path.join(publicDir, item.dst);
    if (fs.existsSync(s)) {
      fs.copyFileSync(s, d);
      copied.push(item.dst);
    }
  }

  return NextResponse.json({
    success: true,
    copied,
    time: Date.now()
  });
}

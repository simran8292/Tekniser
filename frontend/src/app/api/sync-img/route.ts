import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
  const pubDir = path.join(process.cwd(), "public");
  const hq = path.join(brainDir, "corporate_global_hq_1789627716297.jpg");
  const bot = path.join(brainDir, "advanced_clean_robotics_1789628848467.jpg");

  const results: Record<string, string> = {};

  try {
    if (fs.existsSync(hq)) {
      fs.copyFileSync(hq, path.join(pubDir, "clean_corporate_hq.jpg"));
      fs.copyFileSync(hq, path.join(pubDir, "about_conglomerate_hq.jpg"));
      results["hq"] = "copied successfully";
    } else {
      results["hq"] = "hq not found in brain";
    }

    if (fs.existsSync(bot)) {
      fs.copyFileSync(bot, path.join(pubDir, "clean_robotics.jpg"));
      fs.copyFileSync(bot, path.join(pubDir, "platform_robotics.jpg"));
      results["robotics"] = "copied successfully";
    } else {
      results["robotics"] = "bot not found in brain";
    }
  } catch (err: any) {
    results["error"] = err.message;
  }

  return NextResponse.json(results);
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const pubDir = path.join(process.cwd(), "public");
  const newHq = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\be87c960-0cf0-4552-b96f-56aebe0b8aae\\takniser_corporate_hq_1789815073416.jpg";
  
  const results: Record<string, any> = {};

  try {
    if (fs.existsSync(newHq)) {
      fs.copyFileSync(newHq, path.join(pubDir, "clean_corporate_hq.jpg"));
      fs.copyFileSync(newHq, path.join(pubDir, "about_conglomerate_hq.jpg"));
      fs.copyFileSync(newHq, path.join(pubDir, "clean_corporate_hq_branded.jpg"));

      const stats = fs.statSync(path.join(pubDir, "clean_corporate_hq.jpg"));
      results["status"] = "success";
      results["size"] = stats.size;
      results["dest"] = path.join(pubDir, "clean_corporate_hq.jpg");
    } else {
      results["status"] = "error";
      results["message"] = `File not found: ${newHq}`;
    }
  } catch (err: any) {
    results["status"] = "error";
    results["error"] = err.message;
  }

  return NextResponse.json(results);
}

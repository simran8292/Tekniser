import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const srcPath = "C:/Users/UPL/.gemini/antigravity-ide/brain/be87c960-0cf0-4552-b96f-56aebe0b8aae/takniser_corporate_hq_1789815073416.jpg";
    const pubDir = path.join(process.cwd(), "public");
    const dest1 = path.join(pubDir, "clean_corporate_hq.jpg");
    const dest2 = path.join(pubDir, "about_conglomerate_hq.jpg");
    const dest3 = path.join(pubDir, "clean_corporate_hq_branded.jpg");

    const exists = fs.existsSync(srcPath);
    if (!exists) {
      return NextResponse.json({ success: false, error: `Source not found: ${srcPath}` });
    }

    fs.copyFileSync(srcPath, dest1);
    fs.copyFileSync(srcPath, dest2);
    fs.copyFileSync(srcPath, dest3);

    const stat = fs.statSync(dest1);
    return NextResponse.json({
      success: true,
      copiedBytes: stat.size,
      dest1,
      dest2,
      dest3,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message, stack: err.stack }, { status: 200 });
  }
}

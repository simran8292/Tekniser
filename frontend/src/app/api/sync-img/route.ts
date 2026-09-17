import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const brainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
  const userUp = path.join(brainDir, ".user_uploaded");
  const pubDir = path.join(process.cwd(), "public");
  
  const hq = path.join(brainDir, "corporate_global_hq_1789627716297.jpg");
  const bot = path.join(brainDir, "advanced_clean_robotics_1789628848467.jpg");
  const officeImg = path.join(userUp, "media_1789636660689.png");

  const results: Record<string, string> = {};

  try {
    if (fs.existsSync(hq)) {
      fs.copyFileSync(hq, path.join(pubDir, "clean_corporate_hq.jpg"));
      fs.copyFileSync(hq, path.join(pubDir, "about_conglomerate_hq.jpg"));
      results["hq"] = "copied successfully";
    }

    if (fs.existsSync(bot)) {
      fs.copyFileSync(bot, path.join(pubDir, "clean_robotics.jpg"));
      fs.copyFileSync(bot, path.join(pubDir, "platform_robotics.jpg"));
      results["robotics"] = "copied successfully";
    }

    if (fs.existsSync(officeImg)) {
      // Use sharp to remove background and watermarked footer
      const sharp = (await import("sharp")).default;
      
      const image = sharp(officeImg);
      const metadata = await image.metadata();
      const width = metadata.width || 1024;
      const height = metadata.height || 1024;

      // The stock photo watermark / footer is at the bottom ~8% of the image (above the reflection)
      // Building is positioned between y = 140 to y = 620
      // Let's extract the clean building area and make all white/light pixels transparent
      const { data, info } = await sharp(officeImg)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Threshold: any pixel where R > 215, G > 215, B > 215 or in the bottom footer area becomes 100% transparent
      const channels = info.channels;
      // Building ground base is around y = 620
      // Cut off everything below y = 625 so reflections and bottom watermarks are completely removed
      const bottomBuildingBase = Math.round(info.height * 0.612);

      for (let y = 0; y < info.height; y++) {
        for (let x = 0; x < info.width; x++) {
          const idx = (y * info.width + x) * channels;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // If below building ground line, completely remove reflection & watermarks
          if (y > bottomBuildingBase) {
            data[idx + 3] = 0;
            continue;
          }

          // If background is white, off-white, or watermark grey
          if (r > 190 && g > 190 && b > 190) {
            data[idx + 3] = 0;
          } else if (r > 130 && g > 130 && b > 130 && (Math.abs(r - g) < 20 && Math.abs(g - b) < 20)) {
            // Watermark text in sky or background
            data[idx + 3] = 0;
          } else {
            // Building wall, window frame, or architectural line
            data[idx + 3] = 255;
          }
        }
      }

      await sharp(data, {
        raw: {
          width: info.width,
          height: info.height,
          channels: info.channels,
        },
      })
        .trim() // trim transparent edges around the building
        .png()
        .toFile(path.join(pubDir, "office_vector_transparent.png"));

      results["office"] = `processed perfectly into office_vector_transparent.png`;
    }
  } catch (err: any) {
    results["error"] = err.message;
  }

  return NextResponse.json(results);
}

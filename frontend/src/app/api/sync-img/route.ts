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
  const genHero = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\be87c960-0cf0-4552-b96f-56aebe0b8aae\\value_chain_hero_1789807371109.jpg";
  if (fs.existsSync(genHero)) {
    fs.copyFileSync(genHero, path.join(pubDir, "value_chain_hero_new.jpg"));
    results["new_hero"] = "copied value_chain_hero_new.jpg successfully";
  }

  const refImg = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\be87c960-0cf0-4552-b96f-56aebe0b8aae\\.user_uploaded\\media_1789805323516.jpg";
  try {
    const sharp = (await import("sharp")).default;
    if (fs.existsSync(refImg)) {
      const meta = await sharp(refImg).metadata();
      const width = meta.width!;
      const height = meta.height!;

      // In refImg (1024x592), the left cards end at x=584.
      // The curve starts from x=664 at y=0, swoops left down to x=600 at y=160,
      // and down to x=614 at the bottom.
      // If we crop from x = 596 to width (1024):
      const cropLeft = 596;
      const cropWidth = width - cropLeft; // 428px

      const { data, info } = await sharp(refImg)
        .extract({ left: cropLeft, top: 0, width: cropWidth, height })
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      const channels = info.channels;

      // 1. Perfectly remove top sky text "INNOVATION -> MANUFACTURING -> LOGISTICS -> GLOBAL IMPACT"
      // The text is located at y: 22 to 38, x: 140 to 420 in crop
      // Let's replace with the vertical gradient of clean sky at x: 130
      for (let y = 20; y <= 40; y++) {
        for (let x = 140; x < cropWidth - 10; x++) {
          const idx = (y * cropWidth + x) * channels;
          // Interpolate sky color from y=16 and y=44 at this x
          const topIdx = (16 * cropWidth + x) * channels;
          const botIdx = (44 * cropWidth + x) * channels;
          const factor = (y - 16) / (44 - 16);
          
          data[idx] = Math.round(data[topIdx] * (1 - factor) + data[botIdx] * factor);
          data[idx + 1] = Math.round(data[topIdx + 1] * (1 - factor) + data[botIdx + 1] * factor);
          data[idx + 2] = Math.round(data[topIdx + 2] * (1 - factor) + data[botIdx + 2] * factor);
          data[idx + 3] = 255;
        }
      }

      // 2. Make all pixels outside the curve (on the left) 100% transparent
      // In the original 1024x592 image (cropped from x=596, width 428):
      // The curve starts around x = 68 at y=0, goes to x = 0 around y=200,
      // and for the card below y=416, the card starts around x = 18.
      // Any pixel before hitting the colored image (sky/port/card) where r>230, g>230, b>230 should be transparent.
      // Also at the bottom (y > 416), anything to the left of the dark card (where r>50 or g>50 or b>50 before hitting the card) should be transparent!
      for (let y = 0; y < height; y++) {
        let hitImage = false;
        for (let x = 0; x < cropWidth; x++) {
          const idx = (y * cropWidth + x) * channels;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          if (!hitImage) {
            // If below y = 416 (card region), the card background is very dark (r < 25, g < 45, b < 60)
            if (y >= 415 && y <= 540) {
              if (r < 30 && g < 50 && b < 65) {
                hitImage = true;
              } else {
                data[idx + 3] = 0; // Transparent
              }
            } else if (y > 540) {
              // Foliage at the bottom
              if (r > 230 && g > 230 && b > 230) {
                data[idx + 3] = 0;
              } else if (g > r && g > b) {
                hitImage = true;
              } else if (r < 50 && g < 50 && b < 50) {
                hitImage = true;
              } else {
                data[idx + 3] = 0;
              }
            } else {
              // Upper region (sky, map, port)
              if (r > 235 && g > 235 && b > 235) {
                data[idx + 3] = 0; // Transparent
              } else if (x < 70 && r > 215 && g > 215 && b > 215) {
                data[idx + 3] = 0;
              } else {
                hitImage = true;
              }
            }
          }
        }
      }

      const outPath = path.join(pubDir, "curved_hero_perfect.png");
      await sharp(data, {
        raw: {
          width: cropWidth,
          height: height,
          channels: channels,
        },
      })
        .png()
        .toFile(outPath);

      results["curved_hero_perfect"] = `Saved to curved_hero_perfect.png (${cropWidth}x${height})`;
    }
  } catch (e: any) {
    results["sharp_error"] = e.message;
  }

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

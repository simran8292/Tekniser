import fs from "fs";
import path from "path";

const src = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\4745b516-61b1-4d56-a83f-6b4fdc3156a3\\mining_and_minerals_quarry_1789193016830.jpg";
const dest = path.join(process.cwd(), "public", "mining_minerals_ecosystem.jpg");

try {
  fs.copyFileSync(src, dest);
  console.log("Successfully copied to:", dest);
} catch (err) {
  console.error("Error copying file:", err);
}

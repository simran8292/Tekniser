import fs from "fs";
import path from "path";

const src = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\45a3c682-d4f5-4300-bee4-77ede293761b\\sustainable_earth_future_1789455695010.jpg";
const dest = path.join(process.cwd(), "public", "sustainable_earth_slide.jpg");

try {
  fs.copyFileSync(src, dest);
  console.log("Successfully copied to:", dest);
} catch (err) {
  console.error("Error copying file:", err);
}

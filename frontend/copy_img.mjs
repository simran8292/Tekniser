import fs from "fs";
import path from "path";

const currentBrainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\d7ac31b6-3e1a-4d1f-8622-3ba4c2a1ec17";
const publicDir = "e:\\websites\\Tekniser\\frontend\\public";
const src = path.join(currentBrainDir, "takniser_workstation_logo_1790414408271.jpg");
const dest = path.join(publicDir, "takniser_workstation_desk.jpg");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log("Successfully copied to takniser_workstation_desk.jpg");
} else {
  console.log("Source not found:", src);
}

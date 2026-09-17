import fs from "fs";
import path from "path";

const currentBrainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
const publicDir = "e:\\websites\\Tekniser\\frontend\\public";
const src = path.join(currentBrainDir, "corporate_global_hq_1789627716297.jpg");
const dest = path.join(publicDir, "global_corporate_campus.jpg");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log("Successfully copied to global_corporate_campus.jpg");
} else {
  console.log("Source not found:", src);
}

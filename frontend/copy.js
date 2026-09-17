const fs = require('fs');
const path = require('path');

const currentBrainDir = "C:\\Users\\UPL\\.gemini\\antigravity-ide\\brain\\580ed72c-eea2-4d60-a445-854ff94bea2d";
const publicDir = "e:\\websites\\Tekniser\\frontend\\public";
const src = path.join(currentBrainDir, "corporate_global_hq_1789627716297.jpg");
const dest1 = path.join(publicDir, "clean_corporate_hq.jpg");
const dest2 = path.join(publicDir, "about_conglomerate_hq.jpg");

fs.copyFileSync(src, dest1);
fs.copyFileSync(src, dest2);
console.log("Copied clean image to both names!");

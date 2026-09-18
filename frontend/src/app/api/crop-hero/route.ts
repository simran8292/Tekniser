import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export const dynamic = "force-dynamic";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public");
  const imgPath = path.join(publicDir, "exact_right_hero_clean.jpg");
  const backupPath = path.join(publicDir, "exact_right_hero_clean.backup.jpg");
  const psPath = "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe";

  if (!fs.existsSync(backupPath) && fs.existsSync(imgPath)) {
    fs.copyFileSync(imgPath, backupPath);
  }

  const psScript = `
Add-Type -AssemblyName System.Drawing
$srcPath = '${backupPath.replace(/'/g, "''")}'
$dstPath = '${imgPath.replace(/'/g, "''")}'
$img = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $img.Width
$h = $img.Height

$newBmp = New-Object System.Drawing.Bitmap($w, $h)

for ($y = 0; $y -lt $h; $y++) {
  $firstNonWhite = -1
  for ($x = 0; $x -lt [int]($w * 0.45); $x++) {
    $c = $img.GetPixel($x, $y)
    if ($c.R -lt 225 -or $c.G -lt 225 -or $c.B -lt 225) {
      $firstNonWhite = $x
      break
    }
  }

  if ($firstNonWhite -gt 0) {
    if ($y -ge 460) {
      # Bottom area is the dark card: fill smoothly with dark navy #001824
      $cardColor = [System.Drawing.Color]::FromArgb(0, 24, 36)
      for ($x = 0; $x -le $firstNonWhite + 2; $x++) {
        $newBmp.SetPixel($x, $y, $cardColor)
      }
      for ($x = $firstNonWhite + 3; $x -lt $w; $x++) {
        $newBmp.SetPixel($x, $y, $img.GetPixel($x, $y))
      }
    } else {
      # Sky and landscape: mirror texture naturally
      $safeStart = [Math]::Min($firstNonWhite + 3, $w - 1)
      for ($x = 0; $x -le $firstNonWhite + 2; $x++) {
        $dist = ($firstNonWhite + 2) - $x
        $mirrorX = [Math]::Min($safeStart + $dist, $w - 1)
        $newBmp.SetPixel($x, $y, $img.GetPixel($mirrorX, $y))
      }
      for ($x = $firstNonWhite + 3; $x -lt $w; $x++) {
        $newBmp.SetPixel($x, $y, $img.GetPixel($x, $y))
      }
    }
  } else {
    for ($x = 0; $x -lt $w; $x++) {
      $newBmp.SetPixel($x, $y, $img.GetPixel($x, $y))
    }
  }
}

$img.Dispose()

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]98)
$newBmp.Save($dstPath, $encoder, $encoderParams)
$newBmp.Dispose()

Write-Output "SUCCESS: Removed white curved border from image"
`;

  const scriptFile = path.join(process.cwd(), "remove_border.ps1");
  fs.writeFileSync(scriptFile, psScript, "utf8");
  try {
    const out = execSync(`"${psPath}" -ExecutionPolicy Bypass -File "${scriptFile}"`, { encoding: "utf8" });
    try { fs.unlinkSync(scriptFile); } catch {}
    return NextResponse.json({ result: out.trim() });
  } catch (e: any) {
    return NextResponse.json({ error: e.message });
  }
}



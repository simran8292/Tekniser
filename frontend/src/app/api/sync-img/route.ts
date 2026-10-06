import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    success: true,
    status: "synchronized",
    timestamp: new Date().toISOString(),
  });
}

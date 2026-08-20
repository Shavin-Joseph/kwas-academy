import { NextResponse } from "next/server";
import { ROADMAPS } from "@/content/roadmaps";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: ROADMAPS.length,
    roadmaps: ROADMAPS,
  });
}

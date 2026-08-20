import { NextResponse } from "next/server";
import { PRACTICE_PROBLEMS } from "@/content/practice";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: PRACTICE_PROBLEMS.length,
    problems: PRACTICE_PROBLEMS,
  });
}

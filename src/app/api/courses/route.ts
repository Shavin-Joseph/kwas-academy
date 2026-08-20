import { NextResponse } from "next/server";
import { COURSES } from "@/content/courses";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: COURSES.length,
    courses: COURSES,
  });
}

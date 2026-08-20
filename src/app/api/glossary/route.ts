import { NextResponse } from "next/server";
import { GLOSSARY_TERMS } from "@/content/glossary";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: GLOSSARY_TERMS.length,
    terms: GLOSSARY_TERMS,
  });
}

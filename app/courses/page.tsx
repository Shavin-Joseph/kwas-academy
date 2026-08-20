import type { Metadata } from "next";
import { CoursesOverviewClient } from "@/components/CoursesOverviewClient";

export const metadata: Metadata = {
  title: "All Developer Courses & Roadmaps (A–Z) — KWAS Academy",
  description:
    "Explore complete software engineering curriculums from beginner to high-level architecture: JavaScript, TypeScript, Python, REST APIs, Next.js, Android, Kotlin, and Linux DevOps.",
  alternates: {
    canonical: "https://academy.kwas.tech/courses",
  },
};

export default function CoursesCatalogPage() {
  return <CoursesOverviewClient />;
}

import type { MetadataRoute } from "next";
import { COURSES } from "@/lib/coursesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://academy.kwas.tech";
  const staticRoutes = [
    "",
    "/courses",
    "/playground",
    "/about",
    "/privacy",
    "/terms",
  ];

  // Dynamic Course & Lesson Routes for SEO
  const courseRoutes: string[] = [];
  COURSES.forEach((course) => {
    courseRoutes.push(`/courses/${course.slug}`);
    course.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        courseRoutes.push(`/courses/${course.slug}/${lesson.slug}`);
      });
    });
  });

  const allRoutes = [...staticRoutes, ...courseRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/playground" || route === "/courses"
        ? "daily"
        : "weekly",
    priority:
      route === ""
        ? 1.0
        : route === "/courses" || route === "/playground"
        ? 0.95
        : route.startsWith("/courses/")
        ? 0.9
        : 0.8,
  }));
}

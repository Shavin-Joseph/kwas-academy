import { MetadataRoute } from "next";
import { COURSES } from "@/content/courses";
import { ROADMAPS } from "@/content/roadmaps";
import { PROJECTS } from "@/content/projects";
import { PRACTICE_PROBLEMS } from "@/content/practice";

const BASE_URL = "https://academy.kwas.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/technologies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/roadmaps`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/playground`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    // Company & Legal Pages (AdSense Compliance)
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic Course Routes (18+ Tracks)
  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${BASE_URL}/learn/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Dynamic Lesson Routes (198+ In-depth lessons)
  const lessonRoutes: MetadataRoute.Sitemap = COURSES.flatMap((course) =>
    course.modules.flatMap((mod) =>
      mod.lessons.map((lesson) => ({
        url: `${BASE_URL}/learn/${course.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }))
    )
  );

  // Dynamic Roadmap Routes (12 Career paths)
  const roadmapRoutes: MetadataRoute.Sitemap = ROADMAPS.map((roadmap) => ({
    url: `${BASE_URL}/roadmaps/${roadmap.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Project Blueprint Routes
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Practice Arena Problem Routes
  const practiceRoutes: MetadataRoute.Sitemap = PRACTICE_PROBLEMS.map((problem) => ({
    url: `${BASE_URL}/practice/${problem.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...lessonRoutes,
    ...roadmapRoutes,
    ...projectRoutes,
    ...practiceRoutes,
  ];
}

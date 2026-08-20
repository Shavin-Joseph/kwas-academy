import type { Metadata } from "next";
import { CoursesOverviewClient } from "@/components/CoursesOverviewClient";
import { COURSES } from "@/lib/coursesData";

export const metadata: Metadata = {
  title: "KWAS Academy — Free Coding Courses & Interactive Code Practice (A-Z)",
  description:
    "Learn Full-Stack Web Development, JavaScript, TypeScript, Python, REST APIs, Next.js, Android, Kotlin, and Linux from scratch with free in-browser interactive code sandboxes.",
  alternates: {
    canonical: "https://academy.kwas.tech",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Academy", item: "https://academy.kwas.tech" },
        ],
      },
      {
        "@type": "ItemList",
        name: "KWAS Academy Free Developer Courses",
        itemListElement: COURSES.map((course, idx) => ({
          "@type": "Course",
          position: idx + 1,
          name: course.title,
          description: course.description,
          provider: {
            "@type": "Organization",
            name: "KWAS Technologies (Key Web App Solutions Technologies)",
            sameAs: "https://kwas.tech",
          },
          url: `https://academy.kwas.tech/courses/${course.slug}`,
          isAccessibleForFree: true,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesOverviewClient />
    </>
  );
}

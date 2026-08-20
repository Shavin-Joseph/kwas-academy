import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/coursesData";
import { LessonViewer } from "@/components/LessonViewer";

interface LessonPageProps {
  params: {
    courseSlug: string;
    lessonSlug: string;
  };
}

export async function generateStaticParams() {
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  COURSES.forEach((course) => {
    course.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        params.push({
          courseSlug: course.slug,
          lessonSlug: lesson.slug,
        });
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const course = COURSES.find((c) => c.slug === params.courseSlug);
  if (!course) return {};

  const lesson = course.modules.flatMap((m) => m.lessons).find((l) => l.slug === params.lessonSlug);
  if (!lesson) return {};

  return {
    title: `${lesson.title} — ${course.shortTitle} | KWAS Academy`,
    description: `${lesson.tagline}. Learn ${lesson.title} with interactive code examples, practice challenges, and quizzes.`,
    keywords: [...lesson.seoKeywords, ...course.seoKeywords],
    alternates: {
      canonical: `https://academy.kwas.tech/courses/${course.slug}/${lesson.slug}`,
    },
    openGraph: {
      title: `${lesson.title} — KWAS Academy`,
      description: lesson.tagline,
      url: `https://academy.kwas.tech/courses/${course.slug}/${lesson.slug}`,
      type: "article",
    },
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const course = COURSES.find((c) => c.slug === params.courseSlug);
  if (!course) {
    notFound();
  }

  const lesson = course.modules.flatMap((m) => m.lessons).find((l) => l.slug === params.lessonSlug);
  if (!lesson) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://academy.kwas.tech" },
          { "@type": "ListItem", position: 2, name: "Courses", item: "https://academy.kwas.tech/courses" },
          { "@type": "ListItem", position: 3, name: course.shortTitle, item: `https://academy.kwas.tech/courses/${course.slug}` },
          { "@type": "ListItem", position: 4, name: lesson.title, item: `https://academy.kwas.tech/courses/${course.slug}/${lesson.slug}` },
        ],
      },
      {
        "@type": "TechArticle",
        headline: lesson.title,
        description: lesson.tagline,
        proficiencyLevel: lesson.level,
        author: {
          "@type": "Organization",
          name: "KWAS Technologies (Key Web App Solutions Technologies)",
          url: "https://kwas.tech",
        },
        publisher: {
          "@type": "Organization",
          name: "KWAS Technologies",
          url: "https://kwas.tech",
        },
        isPartOf: {
          "@type": "Course",
          name: course.title,
          url: `https://academy.kwas.tech/courses/${course.slug}`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LessonViewer course={course} currentLesson={lesson} />
    </>
  );
}

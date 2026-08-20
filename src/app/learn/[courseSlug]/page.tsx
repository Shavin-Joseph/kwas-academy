import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCourseBySlug, COURSES } from "@/content/courses";
import { BookOpen, Clock, Award, CheckCircle2, ArrowRight, Layers, FileCode } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export function generateStaticParams() {
  return COURSES.map((c) => ({
    courseSlug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return {
      title: "Course Not Found | KWAS Academy",
    };
  }

  return {
    title: `${course.title} — Free Complete Documentation & Curriculum | KWAS Academy`,
    description: course.description,
    keywords: [
      course.title,
      course.category,
      "software engineering tutorial",
      "free programming documentation",
      ...course.skillsGained,
    ],
    openGraph: {
      title: `${course.title} | KWAS Academy`,
      description: course.tagline,
      type: "article",
      url: `https://academy.kwas.tech/learn/${course.slug}`,
      siteName: "KWAS Academy",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.tagline,
    },
    alternates: {
      canonical: `https://academy.kwas.tech/learn/${course.slug}`,
    },
  };
}

export default async function CourseOverviewPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    notFound();
  }

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const firstLesson = course.modules[0]?.lessons[0];

  // Structured JSON-LD Graph for Course & FAQ (SEO / AEO / GEO / AIO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "Organization",
          "name": "KWAS Academy",
          "sameAs": "https://academy.kwas.tech",
        },
        "educationalLevel": course.level,
        "isAccessibleForFree": true,
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What will I learn in the ${course.title} course?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${course.description} Skills gained include: ${course.skillsGained.join(", ")}.`,
            },
          },
          {
            "@type": "Question",
            "name": `Is the ${course.title} course free?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, all ${course.modules.length} modules and ${totalLessons} lessons in ${course.title} are 100% free with interactive code playgrounds on KWAS Academy.`,
            },
          },
          {
            "@type": "Question",
            "name": `What are the prerequisites for ${course.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Prerequisites: ${course.prerequisites.join(", ")}.`,
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Courses",
            "item": "https://academy.kwas.tech/courses",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": course.title,
            "item": `https://academy.kwas.tech/learn/${course.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      {/* Inject JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Courses", href: "/courses" },
            { label: course.title },
          ]}
        />

        {/* Hero Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <DifficultyBadge level={course.level} />
              <Badge variant="primary">{course.category}</Badge>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> ~{course.estimatedHours} Hours
              </span>
              <span className="flex items-center gap-1">
                <FileCode className="h-3.5 w-3.5" /> {totalLessons} Lessons
              </span>
              <span className="text-emerald-600 font-semibold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                100% Free
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {course.title}
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {course.tagline}
            </p>
          </div>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {course.description}
          </p>

          {/* Quick Action */}
          {firstLesson && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <Link href={`/learn/${course.slug}/${firstLesson.slug}`}>
                <Button size="lg" variant="primary" className="font-semibold text-sm">
                  Start Course (Lesson 1) <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Skills Gained & Prerequisites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono flex items-center gap-2">
              <Award className="h-4 w-4 text-blue-600" />
              What You Will Learn
            </h3>
            <ul className="space-y-2.5">
              {course.skillsGained.map((skill, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 font-mono flex items-center gap-2">
              <Layers className="h-4 w-4 text-purple-600" />
              Prerequisites & Environment
            </h3>
            <ul className="space-y-2.5">
              {course.prerequisites.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Complete Syllabus Breakdown (10+ Modules) */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-mono">
              Complete Course Curriculum ({course.modules.length} Modules)
            </h2>
            <span className="text-xs font-mono text-slate-500">
              {totalLessons} In-Depth Lessons
            </span>
          </div>

          <div className="space-y-6">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="rounded-lg border border-slate-200 dark:border-slate-800 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                      Module {mIdx < 9 ? `0${mIdx + 1}` : mIdx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                      {mod.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {mod.lessons.length} Lessons
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {mod.description}
                </p>

                <div className="divide-y divide-slate-100 dark:divide-slate-800 pt-2">
                  {mod.lessons.map((l, lIdx) => (
                    <Link
                      key={l.id}
                      href={`/learn/${course.slug}/${l.slug}`}
                      className="py-2.5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 rounded-md transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-slate-400">
                          {mIdx + 1}.{lIdx + 1}
                        </span>
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {l.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        {l.durationMinutes}m &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

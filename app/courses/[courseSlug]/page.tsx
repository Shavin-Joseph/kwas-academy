import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COURSES, Course } from "@/lib/coursesData";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Zap,
  Layers,
  Code2,
  ChevronRight,
} from "lucide-react";

interface CoursePageProps {
  params: {
    courseSlug: string;
  };
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    courseSlug: course.slug,
  }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = COURSES.find((c) => c.slug === params.courseSlug);
  if (!course) return {};

  return {
    title: `${course.title} | Free Online Course — KWAS Academy`,
    description: course.seoDescription,
    keywords: course.seoKeywords,
    alternates: {
      canonical: `https://academy.kwas.tech/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} — KWAS Academy`,
      description: course.tagline,
      url: `https://academy.kwas.tech/courses/${course.slug}`,
      type: "article",
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = COURSES.find((c) => c.slug === params.courseSlug);
  if (!course) {
    notFound();
  }

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const firstLessonSlug = allLessons[0]?.slug || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://academy.kwas.tech" },
          { "@type": "ListItem", position: 2, name: "Courses", item: "https://academy.kwas.tech/courses" },
          { "@type": "ListItem", position: 3, name: course.shortTitle, item: `https://academy.kwas.tech/courses/${course.slug}` },
        ],
      },
      {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "KWAS Technologies (Key Web App Solutions Technologies)",
          sameAs: "https://kwas.tech",
        },
        url: `https://academy.kwas.tech/courses/${course.slug}`,
        isAccessibleForFree: true,
        timeRequired: course.duration,
        educationalCredentialAwarded: "KWAS Academy Certificate of Completion",
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: course.duration,
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
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted mb-4">
            <Link href="/" className="hover:text-amber transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-amber transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-fg font-medium">{course.shortTitle}</span>
          </div>

          {/* Hero Banner */}
          <div className="rounded-3xl border border-line bg-panel p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-mono text-xs font-semibold mb-4 w-fit bg-panel2 border-line text-amber">
              <GraduationCap size={14} />
              <span>{course.category} Track</span>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl leading-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted max-w-3xl">
              {course.description}
            </p>

            {/* Meta stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-line/60 pt-6 text-xs font-mono text-faint">
              <span className="flex items-center gap-1.5 text-fg">
                <Clock size={15} className="text-amber" />
                {course.duration} Total Duration
              </span>
              <span className="flex items-center gap-1.5 text-fg">
                <BookOpen size={15} className="text-emerald-400" />
                {allLessons.length} Comprehensive Lessons
              </span>
              <span className="flex items-center gap-1.5 text-fg">
                <Zap size={15} className="text-blue-400" />
                100% Free Live Practice
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/courses/${course.slug}/${firstLessonSlug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3.5 font-mono text-sm font-bold text-ink hover:opacity-90 transition-opacity shadow-lg"
              >
                <span>Start Course From Chapter 1</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/playground"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel2 px-5 py-3.5 font-mono text-xs font-semibold text-fg hover:border-amber/40 transition-colors"
              >
                <Code2 size={15} className="text-amber" />
                <span>Open Live Code Sandbox</span>
              </Link>
            </div>
          </div>

          {/* Learning Outcomes & Prerequisites Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-amber" />
                What You Will Master:
              </h2>
              <div className="flex flex-col gap-3">
                {course.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              <h2 className="font-display text-lg font-bold text-fg mb-4 flex items-center gap-2">
                <Layers size={18} className="text-blue-400" />
                Prerequisites &amp; Setup:
              </h2>
              <div className="flex flex-col gap-3">
                {course.prerequisites.map((prereq, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-400" />
                    <span>{prereq}</span>
                  </div>
                ))}
                <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs font-mono text-emerald-400">
                  🎉 <strong>Zero Local Setup Required:</strong> Every chapter includes an embedded in-browser code editor and runner so you can learn anywhere on any device.
                </div>
              </div>
            </div>
          </div>

          {/* Complete Module Syllabus Roadmap */}
          <div className="mt-12 flex flex-col gap-6">
            <div className="border-b border-line pb-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                Course Syllabus &amp; Learning Roadmap
              </h2>
              <p className="mt-1 text-sm font-mono text-muted">
                Step-by-step progressive learning from foundational basics to enterprise production.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {course.modules.map((mod, modIdx) => (
                <div key={mod.id} className="rounded-2xl border border-line bg-panel overflow-hidden">
                  <div className="flex flex-col gap-2 border-b border-line bg-panel2/60 p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber uppercase tracking-wider">
                        Module {modIdx + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold text-fg mt-0.5">{mod.title}</h3>
                      <p className="font-mono text-xs text-muted mt-1">{mod.description}</p>
                    </div>
                    <span className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-muted w-fit">
                      {mod.level}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col gap-3">
                    {mod.lessons.map((lesson, lesIdx) => (
                      <Link
                        key={lesson.slug}
                        href={`/courses/${course.slug}/${lesson.slug}`}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-line/60 bg-panel2/40 p-4 transition-all hover:border-amber/40 hover:bg-panel2"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-panel border border-line font-mono text-xs font-bold text-amber">
                            {lesIdx + 1}
                          </div>
                          <div>
                            <h4 className="font-display text-sm font-bold text-fg group-hover:text-amber transition-colors">
                              {lesson.title}
                            </h4>
                            <p className="font-mono text-xs text-muted mt-0.5">{lesson.tagline}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-auto shrink-0 font-mono text-xs text-faint">
                          <span>{lesson.duration}</span>
                          <ChevronRight size={16} className="text-amber group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

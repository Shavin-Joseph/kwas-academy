import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getLessonBySlug, COURSES } from "@/content/courses";
import { LessonSidebar } from "@/components/learn/LessonSidebar";
import { RightToc } from "@/components/learn/RightToc";
import { MobileLessonNav } from "@/components/learn/MobileLessonNav";
import { CodeBlock } from "@/components/code/CodeBlock";
import { CodeRunner } from "@/components/code/CodeRunner";
import { MistakeAlert } from "@/components/learn/MistakeAlert";
import { BestPracticeBox } from "@/components/learn/BestPracticeBox";
import { ChallengeBox } from "@/components/learn/ChallengeBox";
import { QuizComponent } from "@/components/learn/QuizComponent";
import { LessonNavigation } from "@/components/learn/LessonNavigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Callout } from "@/components/ui/Callout";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Clock, CheckCircle2, BookOpen, Layers } from "lucide-react";

export function generateStaticParams() {
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  for (const course of COURSES) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        params.push({
          courseSlug: course.slug,
          lessonSlug: lesson.slug,
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}): Promise<Metadata> {
  const { courseSlug, lessonSlug } = await params;
  const result = getLessonBySlug(courseSlug, lessonSlug);

  if (!result) {
    return {
      title: "Lesson Not Found | KWAS Academy",
    };
  }

  const { course, lesson } = result;

  return {
    title: `${lesson.title} — ${course.title} | KWAS Academy`,
    description: lesson.description,
    keywords: [
      lesson.title,
      course.title,
      course.category,
      "software engineering tutorial",
      "interactive code playground",
      ...lesson.whatYouWillLearn,
    ],
    openGraph: {
      title: `${lesson.title} | ${course.title}`,
      description: lesson.description,
      type: "article",
      url: `https://academy.kwas.tech/learn/${course.slug}/${lesson.slug}`,
      siteName: "KWAS Academy",
    },
    twitter: {
      card: "summary_large_image",
      title: lesson.title,
      description: lesson.description,
    },
    alternates: {
      canonical: `https://academy.kwas.tech/learn/${course.slug}/${lesson.slug}`,
    },
  };
}

export default async function LessonDocumentationPage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, lessonSlug } = await params;
  const result = getLessonBySlug(courseSlug, lessonSlug);

  if (!result) {
    notFound();
  }

  const { course, module: currentModule, lesson } = result;

  // JSON-LD TechArticle & BreadcrumbList Schema for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": lesson.title,
        "description": lesson.description,
        "inLanguage": "en",
        "author": {
          "@type": "Organization",
          "name": "KWAS Academy Engineering",
          "url": "https://academy.kwas.tech",
        },
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Academy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://academy.kwas.tech/favicon.svg",
          },
        },
        "mainEntityOfPage": `https://academy.kwas.tech/learn/${course.slug}/${lesson.slug}`,
        "proficiencyLevel": lesson.difficulty,
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What is ${lesson.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": lesson.description,
            },
          },
          {
            "@type": "Question",
            "name": `Why does ${lesson.title} matter in software engineering?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": lesson.whyItMatters,
            },
          },
          {
            "@type": "Question",
            "name": `What are the core concepts covered in ${lesson.title}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": lesson.whatYouWillLearn.join("; "),
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": currentModule.title,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": lesson.title,
            "item": `https://academy.kwas.tech/learn/${course.slug}/${lesson.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white dark:bg-slate-950">
      {/* Inject Structured JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Mobile Drawer Trigger for Course Syllabus & TOC */}
      <MobileLessonNav
        course={course}
        currentLesson={lesson}
        currentModuleName={currentModule.title}
      />

      {/* 3-Column Documentation Container */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto flex">
        {/* LEFT COLUMN: Course Sidebar Syllabus */}
        <div className="hidden md:block w-72 lg:w-80 shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200 dark:border-slate-800">
          <LessonSidebar course={course} currentLessonSlug={lesson.slug} />
        </div>

        {/* CENTER COLUMN: Main Structured Lesson Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Breadcrumb
              items={[
                { label: "Courses", href: "/courses" },
                { label: course.title, href: `/learn/${course.slug}` },
                { label: currentModule.title },
                { label: lesson.title },
              ]}
            />
          </div>

          {/* Lesson Title & Header Metadata */}
          <div className="pb-6 border-b border-slate-200 dark:border-slate-800 mb-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <DifficultyBadge level={lesson.difficulty} />
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {lesson.durationMinutes} min read
              </span>
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                Module: {currentModule.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {lesson.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {lesson.description}
            </p>
          </div>

          {/* SECTION 1: What You'll Learn */}
          <section id="what-you-will-learn" className="mb-10 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              What You Will Learn in This Lesson
            </h2>
            <ul className="space-y-2">
              {lesson.whatYouWillLearn.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 2: Introduction */}
          <section id="introduction" className="mb-10 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Introduction & Core Concept
            </h2>
            <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {lesson.introduction}
            </div>
          </section>

          {/* SECTION 3: Why Does This Matter? */}
          <section id="why-it-matters" className="mb-10 space-y-4">
            <Callout type="concept" title="WHY DOES THIS MATTER IN THE REAL WORLD?">
              <p className="text-sm leading-relaxed">{lesson.whyItMatters}</p>
            </Callout>
          </section>

          {/* SECTION 4: Syntax (if applicable) */}
          {lesson.syntax && (
            <section id="syntax" className="mb-10 space-y-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-mono">
                Syntax & Structure
              </h2>
              <CodeBlock
                code={lesson.syntax}
                language={lesson.mainExample.language}
                showLineNumbers={false}
              />
            </section>
          )}

          {/* SECTION 5: Working Code Example */}
          <section id="code-example" className="mb-10 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {lesson.mainExample.title || "Working Code Example"}
              </h2>
              <span className="text-xs font-mono text-slate-500 uppercase">
                {lesson.mainExample.language}
              </span>
            </div>

            <CodeBlock
              code={lesson.mainExample.code}
              language={lesson.mainExample.language}
              showLineNumbers={true}
            />
          </section>

          {/* SECTION 6: Line-by-Line Breakdown */}
          <section id="explanation" className="mb-10 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-mono">
              Line-by-Line Technical Breakdown
            </h2>
            <div className="space-y-2.5">
              {lesson.detailedExplanation.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-100 dark:bg-blue-950 px-1.5 py-0.5 rounded shrink-0">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: Try It Yourself (Interactive Sandbox) */}
          <section id="try-it-yourself" className="mb-12 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Try It Yourself (Interactive Editor)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Modify the code in real-time and click Run to test live browser output and console logs.
                </p>
              </div>
            </div>

            <CodeRunner
              initialCode={lesson.interactiveCode?.initialCode || lesson.mainExample.code}
              language={lesson.interactiveCode?.language || lesson.mainExample.language}
              html={lesson.interactiveCode?.html}
              css={lesson.interactiveCode?.css}
              js={lesson.interactiveCode?.js}
            />
          </section>

          {/* SECTION 8: Common Mistakes */}
          {lesson.commonMistakes.length > 0 && (
            <section id="common-mistakes" className="mb-10">
              <MistakeAlert mistakes={lesson.commonMistakes} />
            </section>
          )}

          {/* SECTION 9: Best Practices */}
          {lesson.bestPractices.length > 0 && (
            <section id="best-practices" className="mb-10">
              <BestPracticeBox practices={lesson.bestPractices} />
            </section>
          )}

          {/* SECTION 10: Real-World Enterprise Example */}
          {lesson.realWorldExample && (
            <section id="real-world-example" className="mb-12 space-y-4">
              <div className="p-6 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-900 text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2">
                  <Layers className="h-4 w-4" />
                  Real-World Enterprise Scenario
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-100">
                  {lesson.realWorldExample.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {lesson.realWorldExample.scenario}
                </p>
                <CodeBlock
                  code={lesson.realWorldExample.code}
                  language={lesson.realWorldExample.language}
                  showLineNumbers={true}
                />
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 font-mono">
                  <span className="font-bold text-slate-200">Key Takeaway: </span>
                  {lesson.realWorldExample.takeaway}
                </div>
              </div>
            </section>
          )}

          {/* SECTION 11: Challenge */}
          {lesson.challenge && (
            <section id="challenge" className="mb-12">
              <ChallengeBox challenge={lesson.challenge} lessonId={lesson.id} />
            </section>
          )}

          {/* SECTION 12: Quiz */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <section id="quiz" className="mb-12">
              <QuizComponent quizId={`quiz-${lesson.slug}`} questions={lesson.quiz} />
            </section>
          )}

          {/* SECTION 13: Summary */}
          <section id="summary" className="mb-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 font-mono uppercase tracking-wider">
              Lesson Summary & Core Takeaways
            </h2>
            <ul className="space-y-2">
              {lesson.summary.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{pt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 14: Next / Prev Lesson Navigation */}
          <LessonNavigation
            courseSlug={course.slug}
            lessonSlug={lesson.slug}
            prevLesson={lesson.prevLesson}
            nextLesson={lesson.nextLesson}
          />
        </main>

        {/* RIGHT COLUMN: On this Page Table of Contents */}
        <div className="hidden xl:block w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] p-6 overflow-y-auto border-l border-slate-200 dark:border-slate-800">
          <RightToc lesson={lesson} />
        </div>
      </div>
    </div>
  );
}

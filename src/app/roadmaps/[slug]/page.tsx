import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getRoadmapBySlug, ROADMAPS } from "@/content/roadmaps";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Map, Clock, CheckCircle2, ArrowRight, BookOpen, Layers, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return ROADMAPS.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    return {
      title: "Roadmap Not Found | KWAS Academy",
    };
  }

  return {
    title: `${roadmap.title} — Career Roadmap & Milestones | KWAS Academy`,
    description: roadmap.description,
    keywords: [
      roadmap.title,
      roadmap.targetRole,
      "developer roadmap 2026",
      "learning milestones",
      "software engineering guide",
      ...roadmap.sections.flatMap((s) => s.nodes.map((n) => n.title)),
    ],
    openGraph: {
      title: `${roadmap.title} | KWAS Academy`,
      description: roadmap.description,
      type: "article",
      url: `https://academy.kwas.tech/roadmaps/${roadmap.slug}`,
    },
    alternates: {
      canonical: `https://academy.kwas.tech/roadmaps/${roadmap.slug}`,
    },
  };
}

export default async function RoadmapDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  const totalMilestones = roadmap.sections.reduce((acc, s) => acc + s.nodes.length, 0);

  const roadmapSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": roadmap.title,
        "description": roadmap.description,
        "author": {
          "@type": "Organization",
          "name": "KWAS Academy Engineering",
        },
        "publisher": {
          "@type": "Organization",
          "name": "KWAS Academy",
          "url": "https://academy.kwas.tech",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Roadmaps",
            "item": "https://academy.kwas.tech/roadmaps",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": roadmap.title,
            "item": `https://academy.kwas.tech/roadmaps/${roadmap.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      {/* Inject Structured JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roadmapSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Roadmaps", href: "/roadmaps" },
            { label: roadmap.title },
          ]}
        />

        {/* Roadmap Header Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded">
              Target Career: {roadmap.targetRole}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Estimated Duration: {roadmap.estimatedDuration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {roadmap.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {roadmap.description}
          </p>

          <div className="pt-3 flex items-center gap-4 text-xs font-mono text-slate-500">
            <span>{roadmap.sections.length} Major Phases</span>
            <span>•</span>
            <span>{totalMilestones} Key Milestones</span>
          </div>
        </div>

        {/* Interactive Visual Flowchart Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 md:before:left-6 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {roadmap.sections.map((section, sIdx) => (
            <div key={section.id} className="relative pl-9 sm:pl-12 md:pl-16 space-y-6">
              {/* Section Milestone Marker */}
              <div className="absolute -left-0.5 sm:-left-1 top-0 flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-600 text-white font-mono font-bold text-[10px] sm:text-xs shadow-md ring-4 ring-slate-50 dark:ring-slate-950">
                0{sIdx + 1}
              </div>

              {/* Section Header */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {section.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {section.description}
                </p>
              </div>

              {/* Section Nodes Grid */}
              <div className="space-y-4">
                {section.nodes.map((node) => (
                  <div
                    key={node.id}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-4 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <DifficultyBadge level={node.level === "Optional" ? "Beginner" : node.level} />
                        <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                          {node.title}
                        </h3>
                      </div>
                      {node.courseSlug && (
                        <Link
                          href={node.lessonSlug ? `/learn/${node.courseSlug}/${node.lessonSlug}` : `/learn/${node.courseSlug}`}
                          className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <BookOpen className="h-3.5 w-3.5" /> Open Lesson &rarr;
                        </Link>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {node.description}
                    </p>

                    {/* Sub topics */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Topics to Master:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {node.topics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Project Blueprint */}
                    {node.recommendedProjects && node.recommendedProjects.length > 0 && (
                      <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-blue-900 dark:text-blue-200">
                          <FolderKanban className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span>Recommended Project: <strong>{node.recommendedProjects[0]}</strong></span>
                        </div>
                        <Link href="/projects" className="font-mono text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                          View Project &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

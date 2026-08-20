import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { PROJECTS } from "@/content/projects";
import { FolderKanban, Clock, Layers, ArrowRight } from "lucide-react";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Real-World Software Engineering Projects & Architecture Blueprints | KWAS Academy",
  description:
    "Build production-grade full-stack portfolios, REST API microservices, and SaaS web applications from scratch with step-by-step architectural blueprints, code snippets, and deployment guides.",
  keywords: [
    "software engineering projects",
    "full stack project ideas 2026",
    "react nextjs saas project",
    "rest api nodejs postgresql project",
    "portfolio project blueprints",
    "developer portfolio guide",
  ],
  openGraph: {
    title: "Software Engineering Project Blueprints | KWAS Academy",
    description: "Step-by-step production projects: frontend, backend, database schemas, and cloud deployment guides.",
    url: "https://academy.kwas.tech/projects",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/projects",
  },
};

export default function ProjectsDirectoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Production Software Projects — KWAS Academy",
    "description": "Step-by-step real-world project blueprints for developers.",
    "url": "https://academy.kwas.tech/projects",
    "numberOfItems": PROJECTS.length,
    "itemListElement": PROJECTS.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.title,
      "description": p.tagline,
      "url": `https://academy.kwas.tech/projects/${p.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      {/* Inject CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <FolderKanban className="h-3.5 w-3.5" /> PRACTICAL SOFTWARE ENGINEERING BLUEPRINTS
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Real-World Project Blueprints
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Build production-grade applications from scratch with step-by-step architectures, requirements, code snippets, testing plans, and deployment guides.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <DifficultyBadge level={project.difficulty} />
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> ~{project.estimatedHours}h
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <Link href={`/projects/${project.slug}`}>
                  <Button variant="outline" size="sm" className="w-full text-xs font-mono">
                    View Complete Blueprint <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

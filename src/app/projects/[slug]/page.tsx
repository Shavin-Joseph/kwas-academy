import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/content/projects";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/code/CodeBlock";
import {
  FolderKanban,
  Clock,
  CheckCircle2,
  Layers,
  Server,
  Database,
  Shield,
  Rocket,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Projects", href: "/projects" },
            { label: project.title },
          ]}
        />

        {/* Project Header Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <DifficultyBadge level={project.difficulty} />
              <Badge variant="primary">{project.category}</Badge>
            </div>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> Estimated Time: ~{project.estimatedHours} Hours
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            {project.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-relaxed">
            {project.overview}
          </p>

          {/* Tech stack badges */}
          <div className="pt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Functional Requirements
            </h3>
            <ul className="space-y-2">
              {project.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-500" />
              System Architecture
            </h3>
            <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-mono">
              {project.architecture.frontend && (
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Frontend: </span>
                  <span className="font-semibold">{project.architecture.frontend}</span>
                </div>
              )}
              {project.architecture.backend && (
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Backend: </span>
                  <span className="font-semibold">{project.architecture.backend}</span>
                </div>
              )}
              {project.architecture.database && (
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Database: </span>
                  <span className="font-semibold">{project.architecture.database}</span>
                </div>
              )}
              {project.architecture.auth && (
                <div className="p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Auth: </span>
                  <span className="font-semibold">{project.architecture.auth}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step-by-Step Implementation */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-mono">
            Step-by-Step Implementation
          </h2>

          <div className="space-y-6">
            {project.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>

                {step.codeSnippet && (
                  <CodeBlock
                    code={step.codeSnippet}
                    language={step.language || "typescript"}
                    showLineNumbers={true}
                  />
                )}

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Rationale: </span>
                  {step.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing & Deployment Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-500" />
              Testing & Quality Guidelines
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {project.testingGuidelines.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Rocket className="h-4 w-4 text-blue-500" />
              Deployment Instructions
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {project.deploymentGuide.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

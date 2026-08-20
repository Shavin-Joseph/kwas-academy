import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ROADMAPS } from "@/content/roadmaps";
import { Map, ArrowRight, Clock, Layers, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Developer Career Roadmaps (Frontend, Backend, AI, DevOps) | KWAS Academy",
  description:
    "Explore 12 interactive software engineering career roadmaps: Frontend Developer, Backend Engineer, Full-Stack Architect, DevOps & Cloud, AI/ML Specialist, and Database Engineer with milestone checklists.",
  keywords: [
    "developer roadmaps 2026",
    "frontend roadmap",
    "backend roadmap",
    "full stack engineer career path",
    "devops engineer roadmap",
    "ai ml engineer roadmap",
    "software engineering milestones",
  ],
  openGraph: {
    title: "Developer Career Roadmaps | KWAS Academy",
    description: "Step-by-step career milestones and skill trees for modern software engineering disciplines.",
    url: "https://academy.kwas.tech/roadmaps",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/roadmaps",
  },
};

export default function RoadmapsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Developer Career Roadmaps — KWAS Academy",
    "description": "Interactive milestone-based learning roadmaps for modern software engineering careers.",
    "url": "https://academy.kwas.tech/roadmaps",
    "numberOfItems": ROADMAPS.length,
    "itemListElement": ROADMAPS.map((r, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": r.title,
      "description": r.description,
      "url": `https://academy.kwas.tech/roadmaps/${r.slug}`,
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
            <Map className="h-3.5 w-3.5" /> ENGINEERING CAREER PATHS & SKILL TREES
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Developer Career Roadmaps
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Step-by-step career path guides with milestone nodes, prerequisites, topics, and direct links to KWAS Academy course lessons.
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROADMAPS.map((roadmap) => {
            const totalNodes = roadmap.sections.reduce((acc, s) => acc + s.nodes.length, 0);

            return (
              <div
                key={roadmap.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                      {roadmap.targetRole}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {roadmap.estimatedDuration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {roadmap.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {roadmap.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-slate-400" /> {roadmap.sections.length} Phases
                    </span>
                    <span>•</span>
                    <span>{totalNodes} Skills / Milestones</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link href={`/roadmaps/${roadmap.slug}`}>
                    <Button variant="outline" size="sm" className="w-full text-xs font-mono">
                      Open Interactive Roadmap <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

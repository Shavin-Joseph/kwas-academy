import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Globe,
  Server,
  Code2,
  Database,
  Cloud,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Technologies & Programming Languages Directory | KWAS Academy",
  description:
    "Complete reference directory of 30+ software engineering technologies: HTML5, CSS3, JavaScript, TypeScript, React 19, Next.js 16, Python 3, SQL, Java 21, C++20, Go, Rust, DSA, System Design, DevOps, and AI.",
  keywords: [
    "Programming Languages Directory",
    "Web Development Stack",
    "Backend Technologies",
    "Frontend Frameworks",
    "Databases SQL NoSQL",
    "DevOps Docker Kubernetes",
    "Machine Learning PyTorch",
    "Free Tech Documentation",
  ],
  openGraph: {
    title: "Software Engineering Technologies Directory | KWAS Academy",
    description: "Browse 30+ comprehensive programming languages, frameworks, and tools with free structured documentation.",
    url: "https://academy.kwas.tech/technologies",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/technologies",
  },
};

export default function TechnologyCatalogPage() {
  const techCategories = [
    {
      category: "Frontend Web Development",
      icon: <Globe className="h-5 w-5 text-blue-500" />,
      description: "Modern browser UI engineering, styling systems, and client component architectures.",
      technologies: [
        { name: "HTML5", desc: "Semantic markup, web forms, and browser APIs", level: "Beginner", link: "/learn/html" },
        { name: "CSS3", desc: "Flexbox, Grid, container queries, and animations", level: "Beginner", link: "/learn/css" },
        { name: "JavaScript", desc: "ES6+, DOM, async/await, and event loop", level: "Beginner → Advanced", link: "/learn/javascript" },
        { name: "TypeScript", desc: "Static type safety, generics, and interfaces", level: "Intermediate", link: "/learn/typescript" },
        { name: "React", desc: "Declarative component trees, hooks, and Virtual DOM", level: "Intermediate", link: "/learn/react" },
        { name: "Next.js", desc: "App Router, Server Components, and SSR pipelines", level: "Advanced", link: "/learn/nextjs" },
      ],
    },
    {
      category: "Backend & API Engineering",
      icon: <Server className="h-5 w-5 text-emerald-500" />,
      description: "Server runtimes, REST/GraphQL API design, microservices, and asynchronous services.",
      technologies: [
        { name: "Node.js & Express", desc: "Event-driven JavaScript server runtime", level: "Intermediate", link: "/learn/nodejs" },
        { name: "Python & FastAPI", desc: "High-speed async APIs with Pydantic validation", level: "Beginner → Advanced", link: "/learn/python" },
        { name: "Spring Boot (Java)", desc: "Enterprise microservices and cloud backends", level: "Advanced", link: "/learn/java" },
        { name: "Go (Golang)", desc: "Lightweight concurrency with goroutines & channels", level: "Intermediate", link: "/learn/go" },
        { name: "Rust", desc: "Memory-safe systems programming without garbage collection", level: "Advanced", link: "/learn/rust" },
        { name: "C++", desc: "High-performance systems and low-level memory engineering", level: "Advanced", link: "/learn/cpp" },
      ],
    },
    {
      category: "Programming Languages",
      icon: <Code2 className="h-5 w-5 text-amber-500" />,
      description: "Foundational and modern programming languages powering world software.",
      technologies: [
        { name: "Python", desc: "Data science, AI/ML, backend, and automation", level: "Beginner", link: "/learn/python" },
        { name: "JavaScript", desc: "The ubiquitous language of the web platform", level: "Beginner", link: "/learn/javascript" },
        { name: "TypeScript", desc: "Typed superset of JavaScript for scale", level: "Intermediate", link: "/learn/typescript" },
        { name: "Java", desc: "Object-oriented enterprise standard with JVM", level: "Intermediate", link: "/learn/java" },
        { name: "C++", desc: "Low-level memory control and game engines", level: "Advanced", link: "/learn/cpp" },
        { name: "Go", desc: "Cloud-native services and Kubernetes tools", level: "Intermediate", link: "/learn/go" },
        { name: "Rust", desc: "Memory safety without garbage collection", level: "Advanced", link: "/learn/rust" },
      ],
    },
    {
      category: "Database Systems & Storage",
      icon: <Database className="h-5 w-5 text-purple-500" />,
      description: "Relational data engines, ACID transactions, NoSQL, and in-memory caches.",
      technologies: [
        { name: "PostgreSQL & SQL", desc: "Advanced open-source relational database & queries", level: "Beginner → Advanced", link: "/learn/sql" },
        { name: "Relational Schema Design", desc: "Normalization, keys, indexes, and transactions", level: "Intermediate", link: "/learn/sql" },
        { name: "Database Engineering", desc: "Sharding, replication, and query execution plans", level: "Advanced", link: "/roadmaps/database-engineer" },
      ],
    },
    {
      category: "Computer Science & Architecture",
      icon: <Code2 className="h-5 w-5 text-purple-600" />,
      description: "Algorithms, complexity, distributed architectures, and scalability.",
      technologies: [
        { name: "Data Structures & Algorithms", desc: "Big-O, Arrays, Trees, Graphs, and DP", level: "Beginner → Advanced", link: "/learn/dsa" },
        { name: "System Design", desc: "CAP theorem, load balancing, sharding, caching", level: "Advanced", link: "/learn/system-design" },
      ],
    },
    {
      category: "DevOps, Security & AI",
      icon: <Cloud className="h-5 w-5 text-blue-600" />,
      description: "Distributed infrastructure, containers, cybersecurity, and artificial intelligence.",
      technologies: [
        { name: "Docker & DevOps", desc: "Container packaging and microservice isolation", level: "Intermediate", link: "/learn/devops" },
        { name: "Cybersecurity & OWASP", desc: "Defensive web engineering and vulnerability mitigations", level: "Intermediate", link: "/learn/cybersecurity" },
        { name: "Artificial Intelligence & RAG", desc: "Neural networks, PyTorch, embeddings, and RAG systems", level: "Intermediate", link: "/learn/ai-ml" },
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Technologies Directory — KWAS Academy",
    "description": "Comprehensive reference directory of 30+ software engineering technologies.",
    "url": "https://academy.kwas.tech/technologies",
    "hasPart": techCategories.map((cat) => ({
      "@type": "ItemList",
      "name": cat.category,
      "description": cat.description,
      "itemListElement": cat.technologies.map((t, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": t.name,
        "url": `https://academy.kwas.tech${t.link}`,
      })),
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      {/* Inject Structured CollectionPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            COMPLETE TECHNOLOGY DIRECTORY & KEYWORDS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Software Engineering Technologies Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive index of every major programming language, frontend library, backend framework, database, and engineering discipline with dedicated, interactive tracks on KWAS Academy.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {cat.category}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.technologies.map((item, tIdx) => (
                  <Link
                    key={tIdx}
                    href={item.link}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.name}
                        </span>
                        <Badge variant="outline" size="sm">
                          {item.level}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-end text-xs font-mono text-blue-600 dark:text-blue-400">
                      <span>Start Learning &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Course } from "@/types";

export const nextjsCourse: Course = {
  id: "course-nextjs",
  slug: "nextjs",
  title: "Next.js Full-Stack App Router Architecture",
  tagline: "Master Server Components, Server Actions, dynamic routing, streaming SSR, and SEO.",
  description: "Build full-stack applications with Next.js App Router: React Server Components (RSC), Client Components, Server Actions, dynamic route segments, metadata SEO, caching layers, and Vercel cloud deployment.",
  category: "Frontend",
  level: "Advanced",
  estimatedHours: 26,
  icon: "Zap",
  badgeColor: "purple",
  prerequisites: ["React", "TypeScript"],
  skillsGained: [
    "App Router Architecture (layout.tsx, page.tsx, loading.tsx)",
    "React Server Components (RSC) vs Client Components ('use client')",
    "Server Actions for Mutations with Zero Client Bundles",
    "Incremental Static Regeneration (ISR) & Route Caching",
    "Dynamic OpenGraph & Metadata Generation",
  ],
  featured: true,
  modules: [
    {
      id: "mod-next-1",
      slug: "intro",
      title: "Module 1: Next.js Overview & App Router Architecture",
      description: "Understand the Next.js App Router architecture and server-first paradigm.",
      lessons: [
        {
          id: "nextjs-intro",
          slug: "nextjs-introduction",
          courseSlug: "nextjs",
          moduleSlug: "intro",
          title: "Next.js Introduction & React Server Components",
          description: "Discover why Next.js is the premier React full-stack framework and understand Server Components.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Server-side rendering vs static generation (SSG) vs streaming SSR",
            "The App Router folder hierarchy (layout, page, error, not-found)",
            "How React Server Components eliminate client JavaScript bundle size",
          ],
          introduction: `Next.js is a full-stack React framework that provides hybrid static and server rendering, automatic code splitting, optimized image loading, and backend Server Actions.`,
          whyItMatters: `Server Components query databases directly without exposing API controllers or secrets to the client.`,
          mainExample: {
            title: "Async React Server Component",
            language: "typescript",
            code: `export default async function CoursesPage() {\n  return (\n    <main className="p-8">\n      <h1 className="text-2xl font-bold">KWAS Full-Stack Academy</h1>\n    </main>\n  );\n}`,
            executable: true,
            explanation: ["Server Components can be async functions directly."],
          },
          detailedExplanation: ["Use 'use client' only when components require browser state or interactivity."],
          commonMistakes: [],
          bestPractices: ["Keep components as Server Components by default."],
          summary: ["Next.js bridges React UI with server computation seamlessly."],
        },
      ],
    },
    {
      id: "mod-next-2",
      slug: "routing-layouts",
      title: "Module 2: Routing, Layouts & Nested Route Segments",
      description: "Folder-based routing, dynamic segments [slug], catch-all [...slug], and nested layout persistence.",
      lessons: [
        {
          id: "next-routing",
          slug: "routing-and-nested-layouts",
          courseSlug: "nextjs",
          moduleSlug: "routing-layouts",
          title: "File-System Routing & Nested Layouts",
          description: "Master folder-based routing, route groups (group), parallel routes (@slot), and persistent layouts.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Folder hierarchy mapping to URL path segments",
            "Persistent layouts that do not re-render during page transitions",
            "Route groups (marketing) that organize folders without changing URLs",
          ],
          introduction: `Next.js uses a file-system based router where folders define routes. Special file conventions (layout.tsx, page.tsx, loading.tsx, not-found.tsx) control segment behavior.`,
          whyItMatters: `Nested layouts preserve UI state (like audio playback, video scroll, or form drafts) across route changes.`,
          mainExample: {
            title: "Nested Course Layout Component",
            language: "typescript",
            code: `// app/learn/[courseSlug]/layout.tsx\nexport default function CourseLayout({\n  children,\n  params,\n}: { children: React.ReactNode; params: { courseSlug: string } }) {\n  return (\n    <div className="flex">\n      <aside className="w-64">Sidebar: {params.courseSlug}</aside>\n      <main className="flex-1">{children}</main>\n    </div>\n  );\n}`,
            executable: false,
            explanation: ["Layout wraps all nested child pages inside [courseSlug] seamlessly."],
          },
          detailedExplanation: ["Catch-all routes [...slug] match arbitrary nested paths (/docs/a/b/c)."],
          commonMistakes: [],
          bestPractices: ["Use Route Groups (auth) to create distinct layouts for marketing vs dashboard."],
          summary: ["File-system routing makes web application architectures intuitive and structured."],
        },
      ],
    },
    {
      id: "mod-next-3",
      slug: "server-components",
      title: "Module 3: React Server Components (RSC) vs Client Components",
      description: "When to use 'use client', component boundaries, and serialization rules.",
      lessons: [
        {
          id: "next-rsc",
          slug: "rsc-vs-client-components",
          courseSlug: "nextjs",
          moduleSlug: "server-components",
          title: "Server vs Client Component Boundaries",
          description: "Understand the 'use client' directive, component composition, passing server props, and serialization.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Server Components cannot use useState, useEffect, or onClick",
            "Pushing 'use client' leaves to the edges of the component tree",
            "Passing Server Components as children to Client Components",
          ],
          introduction: `React Server Components (RSC) execute exclusively on the server and never ship JavaScript to the client browser. Client Components ('use client') hydrate in the browser to provide interactivity.`,
          whyItMatters: `Structuring 80%+ of your application as Server Components cuts user JavaScript bundle sizes dramatically, improving mobile Core Web Vitals.`,
          mainExample: {
            title: "Composing Server & Client Components",
            language: "typescript",
            code: `// Server Component (Default)\nimport InteractiveHeartButton from "./InteractiveHeartButton"; // Client Component\n\nexport default function BlogPost({ post }) {\n  return (\n    <article>\n      <h1>{post.title}</h1>\n      <p>{post.content}</p>\n      {/* Interactive client leaf */}\n      <InteractiveHeartButton postId={post.id} />\n    </article>\n  );\n}`,
            executable: false,
            explanation: ["Only the interactive button downloads client JavaScript."],
          },
          detailedExplanation: ["Props passed from Server Components to Client Components must be serializable (no functions)."],
          commonMistakes: [],
          bestPractices: ["Never put 'use client' at the top of a page.tsx unless strictly required."],
          summary: ["RSC allows full-stack applications to ship minimal JavaScript bundles to clients."],
        },
      ],
    },
    {
      id: "mod-next-4",
      slug: "data-fetching",
      title: "Module 4: Data Fetching, Caching & Revalidation",
      description: "fetch() caching, cache: 'no-store', revalidateTag(), and ISR.",
      lessons: [
        {
          id: "next-caching",
          slug: "caching-and-revalidation",
          courseSlug: "nextjs",
          moduleSlug: "data-fetching",
          title: "Incremental Static Regeneration (ISR) & Caching",
          description: "Master Next.js cache layers: Request Memoization, Data Cache, Full Route Cache, and on-demand revalidation.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Time-based revalidation (next: { revalidate: 3600 })",
            "On-demand cache purging with revalidateTag('courses')",
            "Dynamic rendering (export const dynamic = 'force-dynamic')",
          ],
          introduction: `Next.js provides a multi-layer caching system that combines the speed of static HTML with the freshness of real-time database updates.`,
          whyItMatters: `ISR allows a page with 1,000,000 views to be served from CDN cache in 10ms, while refreshing in the background when database content updates.`,
          mainExample: {
            title: "Data Fetching with ISR Caching",
            language: "typescript",
            code: `export async function getCourses() {\n  const res = await fetch("https://api.kwas.dev/courses", {\n    next: { revalidate: 300, tags: ["courses"] }, // Revalidate every 5 minutes\n  });\n  return res.json();\n}`,
            executable: false,
            explanation: ["next.tags allows targeted cache invalidation when content changes."],
          },
          detailedExplanation: ["revalidatePath('/courses') purges the Full Route Cache on the server instantly."],
          commonMistakes: [],
          bestPractices: ["Tag your fetch requests for granular on-demand cache invalidation."],
          summary: ["Next.js caching delivers sub-millisecond global CDN speeds with dynamic data freshness."],
        },
      ],
    },
    {
      id: "mod-next-5",
      slug: "server-actions",
      title: "Module 5: Server Actions & Form Mutations",
      description: "Mutate backend database records directly from React forms with Server Actions.",
      lessons: [
        {
          id: "nextjs-server-actions",
          slug: "server-actions-and-mutations",
          courseSlug: "nextjs",
          moduleSlug: "server-actions",
          title: "Next.js Server Actions & Form Mutations",
          description: "Execute secure backend functions directly from client forms without dedicated API routes.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Defining Server Actions with 'use server'",
            "Form submission with FormData and useActionState",
            "Revalidating cached paths with revalidatePath()",
          ],
          introduction: `Server Actions are asynchronous functions executed on the server that can be called directly from forms or buttons.`,
          whyItMatters: `Server Actions eliminate boilerplate REST API controller endpoints for CRUD operations.`,
          mainExample: {
            title: "Server Action Form Mutation",
            language: "typescript",
            code: `"use server";\nimport { revalidatePath } from "next/cache";\n\nexport async function createComment(formData: FormData) {\n  const text = formData.get("text") as string;\n  console.log("Saving comment to database:", text);\n  revalidatePath("/courses");\n}`,
            executable: false,
            explanation: ["'use server' ensures function executes strictly on the backend."],
          },
          detailedExplanation: ["Server Actions work with standard HTML forms even before client JavaScript hydrates."],
          commonMistakes: [],
          bestPractices: ["Always validate form data with Zod schemas inside Server Actions."],
          summary: ["Server Actions streamline full-stack data mutation in Next.js."],
        },
      ],
    },
    {
      id: "mod-next-6",
      slug: "route-handlers",
      title: "Module 6: Route Handlers & REST API Endpoints",
      description: "Building public REST APIs with route.ts, GET/POST/PUT/DELETE, and NextResponse.",
      lessons: [
        {
          id: "next-routes",
          slug: "route-handlers-and-rest",
          courseSlug: "nextjs",
          moduleSlug: "route-handlers",
          title: "Building REST Endpoints with route.ts",
          description: "Implement custom HTTP endpoints using Web standard Request and Response objects.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Exporting HTTP method handlers: GET, POST, PUT, PATCH, DELETE",
            "Extracting query parameters and JSON request bodies",
            "Returning structured JSON with NextResponse.json()",
          ],
          introduction: `Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.`,
          whyItMatters: `Route Handlers are used for external webhooks (Stripe, GitHub), third-party REST APIs, and mobile app integrations.`,
          mainExample: {
            title: "GET & POST Route Handler",
            language: "typescript",
            code: `// app/api/courses/route.ts\nimport { NextResponse } from "next/server";\n\nexport async function GET(request: Request) {\n  return NextResponse.json({ status: "success", timestamp: new Date().toISOString() });\n}\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  return NextResponse.json({ message: "Course created", data: body }, { status: 201 });\n}`,
            executable: false,
            explanation: ["NextResponse returns standard HTTP response headers and status codes."],
          },
          detailedExplanation: ["Route handlers are evaluated dynamically if they read request headers or searchParams."],
          commonMistakes: [],
          bestPractices: ["Use Server Actions for internal UI mutations and Route Handlers for external webhooks."],
          summary: ["Route Handlers provide full-featured REST API engineering inside Next.js."],
        },
      ],
    },
    {
      id: "mod-next-7",
      slug: "streaming-suspense",
      title: "Module 7: Streaming SSR with Suspense & loading.tsx",
      description: "Instant loading skeletons, React Suspense boundaries, and HTTP streaming chunks.",
      lessons: [
        {
          id: "next-streaming",
          slug: "streaming-and-suspense",
          courseSlug: "nextjs",
          moduleSlug: "streaming-suspense",
          title: "Streaming SSR & Suspense Boundaries",
          description: "Deliver instant TTFB with loading.tsx skeletons and stream slow database chunks progressively.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How HTTP streaming delivers early page shells instantly to the browser",
            "Automatic loading skeletons with loading.tsx",
            "Granular async component wrapping with <Suspense fallback={<Skeleton />}>",
          ],
          introduction: `Streaming allows you to break down the page's HTML into chunks and progressively stream those chunks from the server to the client.`,
          whyItMatters: `Fast parts of the page render in 5ms while slow database widgets stream in progressively without blocking the whole page.`,
          mainExample: {
            title: "Suspense Streamed Component",
            language: "typescript",
            code: `import { Suspense } from "react";\n\nexport default function Dashboard() {\n  return (\n    <div>\n      <h1>Instant Navigation Shell</h1>\n      <Suspense fallback={<div>Loading Analytics Stream...</div>}>\n        <SlowDatabaseFeed />\n      </Suspense>\n    </div>\n  );\n}`,
            executable: false,
            explanation: ["The outer shell renders instantly while SlowDatabaseFeed streams in when resolved."],
          },
          detailedExplanation: ["loading.tsx automatically wraps the corresponding page.tsx in a root Suspense boundary."],
          commonMistakes: [],
          bestPractices: ["Wrap only the slow data-heavy components in Suspense boundaries."],
          summary: ["Streaming SSR eliminates blank loading screens and maximizes perceived speed."],
        },
      ],
    },
    {
      id: "mod-next-8",
      slug: "optimization",
      title: "Module 8: Optimizing Images, Fonts & Scripts",
      description: "next/image, next/font, and next/script for 100/100 Core Web Vitals.",
      lessons: [
        {
          id: "next-opt",
          slug: "image-font-and-script-optimization",
          courseSlug: "nextjs",
          moduleSlug: "optimization",
          title: "Core Web Vitals Optimization (next/image, next/font)",
          description: "Achieve 100/100 Google Lighthouse scores using Next.js automatic image optimization and self-hosted fonts.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Automatic AVIF/WebP image conversion and responsive sizing with <Image />",
            "Zero layout shift (CLS) self-hosted fonts with next/font/google",
            "Third-party script loading strategies with next/script",
          ],
          introduction: `Next.js includes built-in components that automatically optimize media assets, fonts, and scripts to pass Google Core Web Vitals.`,
          whyItMatters: `next/image serves appropriately sized images for each user device, saving over 80% bandwidth on mobile.`,
          mainExample: {
            title: "Optimized Image Component",
            language: "typescript",
            code: `import Image from "next/image";\n\nexport function HeroBanner() {\n  return (\n    <Image\n      src="/hero.png"\n      alt="KWAS Academy Cloud Platform"\n      width={1200}\n      height={630}\n      priority // Preloads for Largest Contentful Paint (LCP)\n    />\n  );\n}`,
            executable: false,
            explanation: ["priority preloads hero images to maximize LCP performance."],
          },
          detailedExplanation: ["next/font automatically downloads and self-hosts Google Fonts at build time with zero external network requests."],
          commonMistakes: [],
          bestPractices: ["Always add 'priority' to above-the-fold hero images."],
          summary: ["Next.js optimizations automate peak performance and Core Web Vitals compliance."],
        },
      ],
    },
    {
      id: "mod-next-9",
      slug: "seo-metadata",
      title: "Module 9: Metadata, OpenGraph & Dynamic SEO",
      description: "Static metadata, generateMetadata(), sitemap.ts, and robots.ts generation.",
      lessons: [
        {
          id: "next-seo",
          slug: "dynamic-metadata-and-sitemaps",
          courseSlug: "nextjs",
          moduleSlug: "seo-metadata",
          title: "Dynamic Metadata & Dynamic Sitemaps (sitemap.ts)",
          description: "Generate dynamic SEO titles, descriptions, OpenGraph social cards, and XML sitemaps programmatically.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Exporting static metadata objects in layout.tsx and page.tsx",
            "Generating dynamic metadata based on URL parameters with generateMetadata()",
            "Creating programmatic sitemap.ts and robots.ts for search indexing",
          ],
          introduction: `Next.js App Router features a unified Metadata API that replaces legacy Head tags with type-safe metadata definitions.`,
          whyItMatters: `generateMetadata allows each course and lesson page to dynamically render customized titles and social share cards.`,
          mainExample: {
            title: "Dynamic generateMetadata API",
            language: "typescript",
            code: `export async function generateMetadata({ params }: { params: { slug: string } }) {\n  const course = await getCourse(params.slug);\n  return {\n    title: \`\${course.title} | KWAS Academy\`,\n    description: course.tagline,\n    openGraph: {\n      images: [\`https://kwas.dev/api/og?title=\${course.title}\`],\n    },\n  };\n}`,
            executable: false,
            explanation: ["Metadata resolves dynamically before the page HTML is sent to the client."],
          },
          detailedExplanation: ["sitemap.ts exports an array of URL entries that Next.js automatically formats into XML."],
          commonMistakes: [],
          bestPractices: ["Always define a metadataBase in root layout.tsx to resolve absolute OpenGraph image URLs."],
          summary: ["The Metadata API delivers full search engine optimization and social preview integration."],
        },
      ],
    },
    {
      id: "mod-next-10",
      slug: "middleware-auth",
      title: "Module 10: Edge Middleware & Authentication",
      description: "middleware.ts, request redirection, authentication cookies, and internationalization (i18n).",
      lessons: [
        {
          id: "next-middleware",
          slug: "edge-middleware-and-auth",
          courseSlug: "nextjs",
          moduleSlug: "middleware-auth",
          title: "Edge Middleware & Request Interception",
          description: "Intercept incoming requests at the Edge before route rendering to protect routes and verify auth cookies.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Creating root middleware.ts with config matchers",
            "Inspecting cookies and redirecting unauthorized users",
            "Rewriting URLs for multi-tenant and localization routing",
          ],
          introduction: `Middleware allows you to run code before a request is completed. Based on the incoming request, you can modify the response by rewriting, redirecting, or modifying headers.`,
          whyItMatters: `Middleware executes at the CDN Edge in <5ms, protecting sensitive admin dashboards before heavy backend rendering starts.`,
          mainExample: {
            title: "Protected Route Auth Middleware",
            language: "typescript",
            code: `// middleware.ts\nimport { NextResponse } from "next/server";\nimport type { NextRequest } from "next/server";\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get("session_token");\n  if (!token && request.nextUrl.pathname.startsWith("/admin")) {\n    return NextResponse.redirect(new URL("/auth/login", request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = { matcher: ["/admin/:path*", "/dashboard/:path*"] };`,
            executable: false,
            explanation: ["matcher restricts middleware execution to specific route prefixes."],
          },
          detailedExplanation: ["NextResponse.rewrite() shows different content while preserving the original URL."],
          commonMistakes: [],
          bestPractices: ["Keep middleware lightweight; avoid heavy database queries inside edge middleware."],
          summary: ["Edge Middleware delivers sub-millisecond request protection and routing."],
        },
      ],
    },
    {
      id: "mod-next-11",
      slug: "deployment",
      title: "Module 11: Deploying to Vercel & Production Scaling",
      description: "Environment variables, standalone Docker output, and multi-region deployment.",
      lessons: [
        {
          id: "next-deploy",
          slug: "vercel-deployment-and-docker",
          courseSlug: "nextjs",
          moduleSlug: "deployment",
          title: "Production Deployment & Standalone Docker Builds",
          description: "Deploy Next.js apps with zero-config on Vercel or containerize with output: 'standalone' for Docker.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Deploying full-stack Next.js apps to Vercel with preview environments",
            "Configuring output: 'standalone' in next.config.ts for minimal Docker images",
            "Managing production environment variables and database connection pools",
          ],
          introduction: `Next.js can be deployed to serverless Edge infrastructure like Vercel or packaged into self-contained container images for Kubernetes and AWS ECS.`,
          whyItMatters: `Using output: 'standalone' reduces production Docker container image size from 1.2GB to under 80MB!`,
          mainExample: {
            title: "Standalone Build Configuration",
            language: "typescript",
            code: `// next.config.ts\nimport type { NextConfig } from "next";\n\nconst nextConfig: NextConfig = {\n  output: "standalone", // Bundles minimal node_modules for Docker\n};\n\nexport default nextConfig;`,
            executable: false,
            explanation: ["Standalone output produces a self-contained server.js bundle."],
          },
          detailedExplanation: ["Vercel automatically provisions Serverless Functions for API routes and Server Actions."],
          commonMistakes: [],
          bestPractices: ["Use connection poolers like PgBouncer or Neon when connecting serverless routes to PostgreSQL."],
          summary: ["Next.js scales effortlessly from serverless clouds to containerized enterprise clusters."],
        },
      ],
    },
    {
      id: "mod-next-12",
      slug: "turbopack-bundler-internals",
      title: "Module 12: Turbopack Engine, Incremental Graphs & Tree Shaking",
      description: "Understand Turbopack's Rust-based incremental computation engine, turbo task graphs, and tree-shaking optimizations.",
      lessons: [
        {
          id: "next-turbopack",
          slug: "turbopack-architecture-incremental-computation-bundling",
          courseSlug: "nextjs",
          moduleSlug: "turbopack-bundler-internals",
          title: "Turbopack Architecture & Incremental Computation",
          description: "Explore Turbopack: the Rust-powered successor to Webpack. Master Turbo-Tasks function-level caching, persistent incremental dependency graphs, and AST tree-shaking algorithms.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Webpack slows down linearly with codebase size (O(n)) while Turbopack scales based on page requests (O(1))",
            "The Turbo Engine (Turbo-Tasks) and function-level reactive computation graphs",
            "How Turbopack bundles Server Components, Client Components, and CSS Modules in parallel",
            "Optimizing tree-shaking and eliminating unused barrel exports (`optimizePackageImports`)",
          ],
          introduction: `Turbopack is an incremental bundler written in Rust designed specifically for Next.js. Unlike traditional bundlers that rebuild large dependency graphs on every change, Turbopack models your entire project as a reactive computation graph of pure functions that cache their results at the function level.`,
          whyItMatters: `For enterprise Next.js applications with thousands of routes and modules, Turbopack reduces local dev server startup and hot-module replacement (HMR) times from minutes to sub-100 milliseconds.`,
          syntax: `// next.config.ts\nconst nextConfig = {\n  experimental: {\n    turbo: {\n      rules: { '*.svg': { loaders: ['@svgr/webpack'], as: '*.js' } }\n    }\n  }\n};`,
          mainExample: {
            title: "Configuring Turbopack Optimization in next.config.ts",
            language: "typescript",
            code: `// next.config.ts: Turbopack & Package Optimization Architecture
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack optimized tree-shaking for heavy UI libraries
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "date-fns",
      "lodash-es"
    ],
    turbo: {
      resolveAlias: {
        // High-performance alias mappings in Rust engine
        underscore: "lodash-es",
      },
    },
  },
};

export default nextConfig;`,
            executable: false,
            explanation: [
              "optimizePackageImports instructs Turbopack to transform barrel imports into direct file imports, skipping the evaluation of thousands of unused icons/utilities.",
              "Turbo-Tasks computes function calls only once and caches outputs in memory, invalidating only the precise dependent nodes when a file changes.",
              "Turbopack runs natively in compiled Rust machine code with zero V8 JavaScript startup overhead.",
            ],
          },
          detailedExplanation: [
            "Turbo Engine Reactive Graph: In Turbopack, every compilation step is a `#[turbo_tasks::function]`. When you edit a file, the Turbo runtime traces the dependency graph and re-executes only the functions affected by the changed bytes, achieving sub-millisecond HMR updates.",
          ],
          commonMistakes: [
            {
              mistake: "Importing from heavy barrel export indexes without enabling `optimizePackageImports`.",
              badCode: "import { Calendar } from 'lucide-react'; // Imports 1,500+ unneeded icons without optimization",
              goodCode: "// Add 'lucide-react' to next.config.ts optimizePackageImports",
              explanation: "Without optimization, importing a single icon from a barrel file forces the compiler to parse all 1,500+ icons.",
            },
          ],
          bestPractices: [
            "Run development with `next dev --turbopack` for instant startup speeds.",
            "List heavy component and icon libraries in `experimental.optimizePackageImports`.",
            "Avoid circular imports to keep Turbopack's dependency graphs linear and acyclic.",
          ],
          summary: [
            "Turbopack is a Rust-based incremental bundler built on Turbo-Tasks reactive graphs.",
            "Scales with the active page being viewed rather than total project size.",
            "`optimizePackageImports` accelerates compile times by eliminating unused barrel dependencies.",
          ],
        },
      ],
    },
    {
      id: "mod-next-13",
      slug: "partial-prerendering-ppr",
      title: "Module 13: Partial Prerendering (PPR): Static Shells & Dynamic Holes",
      description: "Master Partial Prerendering (PPR): combining instant static edge caching with dynamic streaming Suspense holes.",
      lessons: [
        {
          id: "next-ppr",
          slug: "partial-prerendering-ppr-hybrid-rendering",
          courseSlug: "nextjs",
          moduleSlug: "partial-prerendering-ppr",
          title: "Partial Prerendering (PPR) & Hybrid Edge Streaming",
          description: "Eliminate the choice between Static Site Generation (SSG) and Server-Side Rendering (SSR) using Partial Prerendering (PPR) in Next.js: instant static HTML shells with embedded streaming dynamic holes.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architectural revolution of PPR: Instant 0ms TTFB static shell + streamed dynamic user data",
            "Enabling Partial Prerendering with `experimental.ppr = 'incremental'`",
            "Defining static boundaries and wrapping dynamic cookies/headers inside `<Suspense>` holes",
            "How Edge CDNs serve the pre-rendered static shell while the origin server streams dynamic chunks",
          ],
          introduction: `Historically in web development, developers were forced to make a binary choice per page: either make it completely Static (fast TTFB from CDN, but cannot show user-specific data) or completely Dynamic (slow TTFB from origin server, blocking initial render). Partial Prerendering (PPR) combines both: the static shell (navbars, hero sections, layouts) is pre-rendered at build time and served in 0ms from the CDN, while dynamic content (user carts, live prices) is streamed into embedded Suspense holes within the same HTTP response.`,
          whyItMatters: `PPR delivers sub-20ms Time-To-First-Byte (TTFB) and perfect Core Web Vitals (LCP) for e-commerce and SaaS dashboards while still rendering live, authenticated user data.`,
          syntax: `export const experimental_ppr = true;\n\n<Suspense fallback={<CartSkeleton />}>\n  <DynamicUserCart />\n</Suspense>`,
          mainExample: {
            title: "Implementing Partial Prerendering (PPR) on an E-Commerce Page",
            language: "typescript",
            code: `// app/courses/[slug]/page.tsx
import { Suspense } from "react";
import { cookies } from "next/headers";

// 1. Enable Partial Prerendering for this route
export const experimental_ppr = true;

// 2. Dynamic Component (Reads cookies -> Rendered on-demand at request time)
async function UserEnrollmentStatus({ courseId }: { courseId: string }) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value;
  
  // Simulate database user lookup
  await new Promise(r => setTimeout(r, 400));
  const isEnrolled = !!sessionToken;

  return (
    <div className="p-4 rounded-lg bg-blue-900 text-blue-100 font-semibold">
      {isEnrolled ? "✅ Enrolled — Continue Lesson" : "⚡ Enroll Now for Free"}
    </div>
  );
}

// 3. Page Component: Static Shell Pre-rendered at Build Time!
export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-6">
      {/* STATIC SHELL: Instant 0ms TTFB from CDN */}
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">Course: {slug.toUpperCase()}</h1>
        <p className="text-slate-400">Master enterprise software engineering with KWAS Academy.</p>
      </header>

      {/* DYNAMIC HOLE: Streamed into HTML response over HTTP */}
      <Suspense fallback={<div className="h-14 bg-slate-800 animate-pulse rounded-lg" />}>
        <UserEnrollmentStatus courseId={slug} />
      </Suspense>
    </main>
  );
}`,
            executable: false,
            explanation: [
              "experimental_ppr = true instructs Next.js to pre-render the static HTML shell during build time.",
              "The <header> and layout are stored on the CDN edge and sent to the browser immediately (0ms TTFB).",
              "The <Suspense> boundary creates a dynamic hole: the server continues streaming the evaluated <UserEnrollmentStatus> over the same open HTTP connection without client-side waterfalls.",
            ],
          },
          detailedExplanation: [
            "Under the Hood: At build time, Next.js generates a static HTML file containing the pre-rendered shell and fallback HTML. When a request arrives, the Edge CDN sends the static shell immediately and initiates a background stream to resolve the pending Suspense promises, replacing fallback markup in-place.",
          ],
          commonMistakes: [
            {
              mistake: "Accessing cookies() or searchParams at the root level of the page outside a Suspense boundary in PPR.",
              badCode: "export default async function Page() { const c = await cookies(); return <div/>; }",
              goodCode: "export default async function Page() { return <Suspense><DynamicChild/></Suspense>; }",
              explanation: "Reading dynamic functions like `cookies()` or `headers()` outside `<Suspense>` opts the entire page into dynamic rendering, destroying the static shell.",
            },
          ],
          bestPractices: [
            "Enable `experimental: { ppr: 'incremental' }` in `next.config.ts`.",
            "Keep dynamic data accesses (`cookies()`, `headers()`) isolated inside `<Suspense>` boundaries.",
            "Provide accurate skeleton fallbacks in Suspense to prevent Cumulative Layout Shift (CLS).",
          ],
          summary: [
            "PPR merges Static Site Generation with dynamic Server-Side streaming.",
            "Static shell renders instantly from the Edge CDN in 0ms TTFB.",
            "Dynamic user data streams seamlessly into Suspense holes over the same connection.",
          ],
        },
      ],
    },
    {
      id: "mod-next-14",
      slug: "multi-tenant-edge-middleware",
      title: "Module 14: Multi-Tenant Architecture, Subdomains & Edge Auth",
      description: "Build multi-tenant SaaS applications with dynamic subdomain routing (`tenant.kwas.dev`), Edge Middleware, and JWT verification.",
      lessons: [
        {
          id: "next-multitenancy",
          slug: "nextjs-multi-tenant-subdomains-edge-middleware-auth",
          courseSlug: "nextjs",
          moduleSlug: "multi-tenant-edge-middleware",
          title: "Multi-Tenant Subdomains & Edge Middleware Architecture",
          description: "Architect scalable multi-tenant SaaS platforms in Next.js: subdomain routing (tenant.app.com), custom domain rewriting, Edge Middleware URL rewrites, and high-speed JWT authentication.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of Multi-Tenant SaaS: Subdomains (`org.kwas.dev`) and Custom Domains (`org.com`)",
            "URL Rewriting inside Edge `middleware.ts` without modifying the browser's address bar",
            "Edge authentication: verifying JWTs in sub-millisecond V8 isolates using `jose`",
            "Dynamic tenant isolation in database queries and caching tags",
          ],
          introduction: `Multi-tenancy is an architectural model where a single software instance serves multiple distinct customer organizations (tenants). In Next.js, Edge Middleware allows developers to inspect the incoming 'Host' header at the global edge network, authenticate the user, and transparently rewrite the request to tenant-specific route folders (e.g. \`app/[tenant]/...\`) in sub-millisecond latency.`,
          whyItMatters: `Platforms like Shopify, Notion, and Vercel use multi-tenant edge routing to host millions of custom customer domains on a single unified Next.js codebase.`,
          syntax: `// middleware.ts\nexport function middleware(req: NextRequest) {\n  const hostname = req.headers.get('host');\n  return NextResponse.rewrite(new URL(\`/\${tenant}\${req.nextUrl.pathname}\`, req.url));\n}`,
          mainExample: {
            title: "Production Multi-Tenant Subdomain Edge Middleware",
            language: "typescript",
            code: `// middleware.ts: Multi-Tenant Edge Routing Engine
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\\\w-]+\\\\.\\\\w+).*)"],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "kwasacademy.dev";

  // 1. Extract tenant subdomain (e.g., 'acme.kwasacademy.dev' -> 'acme')
  const currentHost = hostname.replace(\`:$\{process.env.PORT || 3000\}\`, "");
  const isRootDomain = currentHost === "kwasacademy.dev" || currentHost === "localhost";

  // 2. Route root domain to main marketing platform
  if (isRootDomain) {
    return NextResponse.rewrite(new URL(\`/home\${url.pathname}\`, req.url));
  }

  // 3. Extract Tenant ID for enterprise subdomains
  const tenantId = currentHost.split(".")[0];

  // 4. Transparently rewrite request to tenant-isolated dynamic folder: app/[tenant]/...
  return NextResponse.rewrite(
    new URL(\`/\${tenantId}\${url.pathname}\${url.search}\`, req.url)
  );
}`,
            executable: false,
            explanation: [
              "NextResponse.rewrite changes the internal route path while leaving the URL in the user's browser untouched.",
              "Requests to acme.kwasacademy.dev/dashboard are transparently routed to app/[tenant]/dashboard/page.tsx.",
              "Edge Middleware executes across hundreds of worldwide edge nodes in sub-millisecond V8 isolates.",
            ],
          },
          detailedExplanation: [
            "Edge vs Node.js Runtime: Edge Middleware runs on lightweight V8 isolates rather than full Node.js processes. It cannot use Node.js native C++ modules or heavy ORMs, but excels at lightning-fast header routing, cookie parsing, and cryptographic JWT verification using Web Standard APIs.",
          ],
          commonMistakes: [
            {
              mistake: "Using `NextResponse.redirect` instead of `NextResponse.rewrite` for tenant routing.",
              badCode: "return NextResponse.redirect(new URL(`/tenant/${path}`, req.url));",
              goodCode: "return NextResponse.rewrite(new URL(`/${tenantId}${path}`, req.url));",
              explanation: "Redirect alters the visible URL in the user's browser bar. Rewrite routes internally while preserving the user's branded custom domain.",
            },
          ],
          bestPractices: [
            "Use the `jose` library for Edge JWT verification instead of heavy `jsonwebtoken`.",
            "Cache custom domain lookup mappings at the Edge using KV stores (Upstash or Redis).",
            "Tag tenant database queries with tenant-scoped cache tags (`revalidateTag(\`tenant-\${id}\`)`).",
          ],
          summary: [
            "Multi-tenant Next.js routes custom subdomains to isolated app folders.",
            "Edge Middleware rewrites URLs transparently at global Edge locations.",
            "Preserves customer branding while maintaining a single scalable codebase.",
          ],
        },
      ],
    },
    {
      id: "mod-next-15",
      slug: "cache-internals-tag-invalidation",
      title: "Module 15: Deep Cache Internals: Full Route Cache & Tag Invalidation",
      description: "Master Next.js caching layers: Request Memoization, Data Cache, Full Route Cache, Router Cache, and targeted `revalidateTag`.",
      lessons: [
        {
          id: "next-cache-internals",
          slug: "nextjs-caching-deep-dive-data-cache-revalidatetag",
          courseSlug: "nextjs",
          moduleSlug: "cache-internals-tag-invalidation",
          title: "Next.js Caching Architecture & On-Demand Tag Revalidation",
          description: "Master the 4 interconnected caching layers of Next.js: Request Memoization, Data Cache, Full Route Cache, and Router Cache, alongside atomic on-demand tag revalidation with `revalidateTag()` and `revalidatePath()`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 Caching Mechanisms: React Request Memoization, Next.js Data Cache, Full Route Cache, and Client Router Cache",
            "How `fetch('https://...', { next: { tags: ['courses'] } })` binds data to the persistent Data Cache",
            "Atomic cache invalidation using `revalidateTag('courses')` inside Server Actions",
            "Debugging stale cache issues and controlling `unstable_cache` for database queries",
          ],
          introduction: `Next.js features a multi-tiered caching architecture engineered to minimize origin server computations and maximize edge response speeds. Understanding the boundary between React's temporary Request Memoization (per-render lifecycle), the persistent Next.js Data Cache (across requests and deployments), the Full Route Cache (static HTML/RSC payloads), and the client-side Router Cache is critical for building enterprise-grade applications.`,
          whyItMatters: `Improper cache configuration can result in users viewing stale data after a purchase or overwhelming origin databases with redundant queries. Atomic tag revalidation provides precision cache control.`,
          syntax: `// Data Cache with Tags\nconst res = await fetch(url, { next: { tags: ['user-data'], revalidate: 3600 } });\n\n// Invalidation in Server Action\n'use server';\nrevalidateTag('user-data');`,
          mainExample: {
            title: "Cached Database Queries and Atomic Tag Invalidation",
            language: "typescript",
            code: `// lib/courses.ts & app/actions.ts
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";

// 1. Cached Database Query Function with Persistent Data Cache & Cache Tags
export const getCachedCourses = unstable_cache(
  async (category: string) => {
    console.log("[DATABASE QUERY] Executing heavy SQL query for category:", category);
    // Simulating database query
    return [
      { id: "c1", title: "Next.js 15 Deep Architecture", category },
      { id: "c2", title: "Distributed Systems & Raft", category },
    ];
  },
  ["courses-by-category-key"], // Unique cache key parts
  {
    tags: ["courses-cache-tag"], // Tag for on-demand atomic invalidation
    revalidate: 86400, // 24-Hour TTL fallback
  }
);

// 2. Server Action: Updates database and invalidates cache atomically
export async function updateCourseTitleAction(courseId: string, newTitle: string) {
  "use server";
  
  // Update database record...
  console.log(\`Updating course \${courseId} to '\${newTitle}' in DB.\`);

  // Purge only the specific cached tag across ALL global edge servers instantly!
  revalidateTag("courses-cache-tag");
  console.log("✅ Cache tag 'courses-cache-tag' successfully purged.");
}`,
            executable: false,
            explanation: [
              "unstable_cache wraps raw database calls (Postgres, Prisma, Drizzle) into the persistent Next.js Data Cache.",
              "tags: ['courses-cache-tag'] assigns an identifier tag to the cached dataset.",
              "revalidateTag('courses-cache-tag') purges the cached result globally on the next request without rebuilding unrelated routes.",
            ],
          },
          detailedExplanation: [
            "The 4 Caching Layers Explained: 1. Request Memoization deduplicates identical fetch calls within a single React render. 2. Data Cache persists data across server requests. 3. Full Route Cache stores pre-rendered HTML/RSC payloads on the server. 4. Router Cache stores RSC payloads in client browser memory during a user session.",
          ],
          commonMistakes: [
            {
              mistake: "Using `revalidatePath('/', 'layout')` for every update, which invalidates the entire website cache indiscriminately.",
              badCode: "revalidatePath('/', 'layout'); // Flushes entire site cache",
              goodCode: "revalidateTag('specific-product-tag'); // Surgical invalidation",
              explanation: "Full-site path revalidation flushes all cached pages, causing origin database traffic spikes. Prefer granular cache tags.",
            },
          ],
          bestPractices: [
            "Use granular cache tags (`course-${id}`, `tenant-${orgId}`) for surgical invalidation.",
            "Wrap raw database queries with `unstable_cache` to avoid duplicate database connection queries.",
            "Trigger `revalidateTag` exclusively inside Server Actions or Route Handlers upon data mutations.",
          ],
          summary: [
            "Next.js caching combines Request Memoization, Data Cache, Full Route Cache, and Router Cache.",
            "`unstable_cache` caches arbitrary asynchronous database calls.",
            "`revalidateTag` delivers zero-downtime, surgical on-demand cache purging.",
          ],
        },
      ],
    },
    {
      id: "mod-next-16",
      slug: "edge-runtime-ai-streaming",
      title: "Module 16: Edge Runtime & Real-Time AI Streaming (SSE)",
      description: "Build low-latency generative AI applications using Next.js Edge Route Handlers, AI SDK streams, and Server-Sent Events (SSE).",
      lessons: [
        {
          id: "next-ai-streaming",
          slug: "nextjs-edge-runtime-ai-streaming-server-sent-events",
          courseSlug: "nextjs",
          moduleSlug: "edge-runtime-ai-streaming",
          title: "Edge Runtime & Real-Time AI Streaming Pipelines",
          description: "Build ultra-low-latency Generative AI streaming backends in Next.js using the Edge Runtime (`runtime = 'edge'`), ReadableStream pipelines, and Server-Sent Events (SSE).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Configuring Edge Route Handlers with `export const runtime = 'edge'`",
            "Streaming LLM token streams over Server-Sent Events (SSE) with `ReadableStream`",
            "Handling client cancellation and backpressure when users abort AI generation",
            "Consuming AI streaming endpoints in React client components with zero lag",
          ],
          introduction: `Large Language Models (LLMs) like Claude, Gemini, and GPT generate responses token-by-token over several seconds. Waiting for the complete text generation before returning an HTTP response results in terrible user experience. By deploying Next.js Route Handlers to the Edge Runtime with Streaming Server-Sent Events, tokens are streamed to the browser with near-zero latency.`,
          whyItMatters: `The Edge Runtime starts in under 5ms (compared to 300ms+ cold starts for serverless Node.js containers), providing the fastest possible Time-To-First-Token (TTFT) for AI chat applications.`,
          syntax: `export const runtime = 'edge';\n\nexport async function POST(req: Request) {\n  const stream = new ReadableStream({ ... });\n  return new Response(stream, { headers: { 'Content-Type': 'text/event-stream' } });\n}`,
          mainExample: {
            title: "Edge AI Streaming Route Handler with Server-Sent Events",
            language: "typescript",
            code: `// app/api/ai-chat/route.ts: Edge AI Streaming Pipeline
import type { NextRequest } from "next/server";

// 1. Force Edge Runtime for instant worldwide low-latency execution
export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  // 2. Construct high-performance streaming response
  const encoder = new TextEncoder();
  const tokens = [
    "Next.js ", "Edge ", "Runtime ", "delivers ", "blazing ", "fast ", 
    "token ", "streaming ", "with ", "zero ", "cold ", "starts."
  ];

  const stream = new ReadableStream({
    async start(controller) {
      for (const token of tokens) {
        await new Promise((r) => setTimeout(r, 60)); // Simulating LLM inference tick
        // Server-Sent Event formatted chunk
        controller.enqueue(encoder.encode(\`data: \${JSON.stringify({ text: token })}\\n\\n\`));
      }
      controller.enqueue(encoder.encode("data: [DONE]\\n\\n"));
      controller.close();
    },
  });

  // 3. Return Streaming SSE Response
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}`,
            executable: false,
            explanation: [
              "runtime = 'edge' runs the route on globally distributed Edge nodes with sub-5ms cold starts.",
              "ReadableStream streams chunks of text continuously as the LLM generates them.",
              "Content-Type: text/event-stream formats output as a standard Server-Sent Event (SSE) stream compatible with modern UI clients.",
            ],
          },
          detailedExplanation: [
            "Edge Runtime Protocol: Edge routes run in a V8 sandbox without Node.js filesystem APIs (`fs`), which enables them to launch in milliseconds and stream infinite data without serverless execution timeout penalties.",
          ],
          commonMistakes: [
            {
              mistake: "Using Node.js specific libraries (e.g. `crypto`, `fs`) in Edge Runtime routes without polyfills.",
              badCode: "import fs from 'fs'; // Crash in Edge Runtime",
              goodCode: "const cryptoSubtle = globalThis.crypto.subtle; // Use Web Standard APIs",
              explanation: "Edge Runtime supports only W3C Web Standard APIs (`fetch`, `Request`, `Response`, `TransformStream`, `SubtleCrypto`).",
            },
          ],
          bestPractices: [
            "Use `runtime = 'edge'` for high-concurrency, streaming AI endpoints.",
            "Always include `Cache-Control: no-cache, no-transform` headers for real-time SSE streams.",
            "Implement `req.signal.onabort` to cancel upstream LLM requests if the user closes the tab.",
          ],
          summary: [
            "Edge Runtime delivers instant sub-5ms cold starts for AI streaming APIs.",
            "`ReadableStream` streams LLM tokens to the user in real time.",
            "Server-Sent Events provide reliable, lightweight streaming to React client hooks.",
          ],
        },
      ],
    },
  ],
};

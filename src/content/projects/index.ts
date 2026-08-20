import { ProjectBlueprint } from "@/types";

export const PROJECTS: ProjectBlueprint[] = [
  {
    id: "project-portfolio",
    slug: "portfolio-website",
    title: "Accessible Developer Portfolio",
    tagline: "Build a high-speed, SEO-optimized, accessible portfolio website with dark mode and contact forms.",
    category: "Frontend",
    difficulty: "Beginner",
    estimatedHours: 8,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "WCAG"],
    overview: "Every software engineer needs a clean, professional online presence showcasing their skills, projects, and contact channels. In this project, you will build a fully responsive, semantic, and dark-mode ready portfolio from scratch.",
    requirements: [
      "Semantic HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>)",
      "Fully responsive grid/flexbox layout that adapts to mobile, tablet, and desktop",
      "Interactive dark mode theme toggle with localStorage persistence",
      "Project showcase grid with live demo and source code links",
      "Accessible contact form with client-side validation",
    ],
    architecture: {
      frontend: "HTML5, Modern CSS Variables, Vanilla JS DOM",
      backend: "Static hosting on Vercel / GitHub Pages",
      auth: "None (Public showcase)",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Semantic HTML Scaffold",
        description: "Set up the document structure with viewport meta tags, navigation links, hero section, skills list, project showcase, and footer.",
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alex Developer — Full Stack Engineer</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav aria-label="Main Navigation">
      <a href="#about" class="logo">AD.</a>
      <div class="links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <button id="theme-toggle" aria-label="Toggle Theme">🌙</button>
      </div>
    </nav>
  </header>
  <!-- Main content sections -->
</body>
</html>`,
        language: "html",
        explanation: "Establishing clean HTML landmarks first guarantees screen reader accessibility and solid SEO structure.",
      },
      {
        stepNumber: 2,
        title: "Design System & CSS Variables",
        description: "Configure CSS custom properties for light and dark color schemes, typography, and responsive container constraints.",
        codeSnippet: `:root {
  --bg: #ffffff;
  --text: #0f172a;
  --accent: #2563eb;
  --card-bg: #f8fafc;
  --border: #e2e8f0;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --text: #f8fafc;
  --accent: #3b82f6;
  --card-bg: #1e293b;
  --border: #334155;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: -apple-system, sans-serif;
  transition: background-color 0.2s, color 0.2s;
}`,
        language: "css",
        explanation: "CSS variables make switching themes seamless without needing complex stylesheet swapping.",
      },
    ],
    testingGuidelines: [
      "Test responsive breakpoints at 375px (mobile), 768px (tablet), and 1200px (desktop).",
      "Run Google Lighthouse in Chrome DevTools to ensure 95+ scores in Performance, Accessibility, and SEO.",
      "Verify keyboard tab navigation cycles logically through all interactive links and buttons.",
    ],
    deploymentGuide: [
      "Push your repository to GitHub.",
      "Import repository into Vercel or GitHub Pages.",
      "Verify custom domain and SSL certificate installation.",
    ],
    advancedImprovements: [
      "Add interactive 3D canvas animations or particle backgrounds.",
      "Implement a blog markdown engine with dynamic reading times.",
      "Integrate Web3 or GitHub GraphQL API to show live contribution stats.",
    ],
  },
  {
    id: "project-rest-api",
    slug: "rest-api-service",
    title: "Secure Enterprise REST API with JWT Auth",
    tagline: "Build a production-grade REST API with Node.js, Express, PostgreSQL, Prisma ORM, JWT, and rate limiting.",
    category: "Backend",
    difficulty: "Intermediate",
    estimatedHours: 14,
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Bcrypt"],
    overview: "Build a robust backend API service featuring user authentication, role-based access control (RBAC), database migrations with Prisma, input validation with Zod, and rate-limiting middleware.",
    requirements: [
      "User registration and login endpoints with bcrypt password hashing",
      "JWT authentication middleware for protected routes",
      "CRUD endpoints for resource management with pagination and filtering",
      "Database transactions for multi-step financial or inventory updates",
      "Global error handling middleware with standardized JSON error payloads",
    ],
    architecture: {
      frontend: "Swagger / OpenAPI Documentation UI",
      backend: "Node.js + Express with TypeScript",
      database: "PostgreSQL with Prisma ORM",
      auth: "JSON Web Tokens (JWT) + Bcrypt",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Prisma Schema Modeling",
        description: "Define User, Role, and Resource entities with relations and indexes in schema.prisma.",
        codeSnippet: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  role      String   @default("USER")
  createdAt DateTime @default(now())
  posts     Post[]
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
}`,
        language: "prisma",
        explanation: "Prisma generates fully type-safe TypeScript clients based on the declarative data model.",
      },
    ],
    testingGuidelines: [
      "Write integration tests using Supertest and Jest covering /auth/register and /auth/login.",
      "Verify that unauthenticated requests to protected endpoints return 401 Unauthorized.",
      "Test invalid inputs and verify 400 Bad Request with descriptive validation errors.",
    ],
    deploymentGuide: [
      "Containerize the application with a multi-stage Dockerfile.",
      "Deploy PostgreSQL instance on Supabase, AWS RDS, or Render.",
      "Deploy Docker container to Railway, Render, or AWS ECS.",
    ],
    advancedImprovements: [
      "Add Redis caching for high-frequency GET queries.",
      "Implement refresh tokens and token blacklisting.",
      "Add Prometheus metrics and OpenTelemetry tracing.",
    ],
  },
  {
    id: "project-fullstack-saas",
    slug: "fullstack-saas-platform",
    title: "Full-Stack SaaS Platform (Next.js & Stripe)",
    tagline: "Build a complete subscription SaaS platform with Next.js App Router, Tailwind, PostgreSQL, and Stripe checkout.",
    category: "Full Stack",
    difficulty: "Advanced",
    estimatedHours: 25,
    technologies: ["Next.js 14+", "React Server Components", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
    overview: "Build an end-to-end commercial software product: user onboarding, subscription billing tiers, customer dashboard, API key generation, and webhook processing.",
    requirements: [
      "Next.js App Router with Server Components and Server Actions",
      "Stripe Checkout and Customer Portal integration",
      "Stripe Webhook handler with signature verification for automated tier provisioning",
      "Role-based organization workspaces and invite team members",
    ],
    architecture: {
      frontend: "Next.js App Router, Tailwind CSS, Lucide Icons",
      backend: "Next.js Server Actions & API Route Handlers",
      database: "PostgreSQL with Prisma",
      auth: "NextAuth / Iron Session / JWT",
    },
    steps: [
      {
        stepNumber: 1,
        title: "Stripe Webhook Ingestion Engine",
        description: "Process checkout.session.completed and customer.subscription.updated events securely.",
        codeSnippet: `import { headers } from "next/headers";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-10-16" });

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return new Response(\`Webhook Error: \${err.message}\`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // Upgrade user subscription tier in database
  }

  return new Response("OK", { status: 200 });
}`,
        language: "typescript",
        explanation: "Constructing the event with the cryptographic signature ensures no unauthorized entity can trigger fake subscription updates.",
      },
    ],
    testingGuidelines: [
      "Use the Stripe CLI to trigger mock webhook events locally (stripe listen --forward-to localhost:3000/api/webhooks).",
      "Verify subscription lifecycle: trial -> active -> past_due -> canceled.",
    ],
    deploymentGuide: [
      "Deploy to Vercel with production environment variables.",
      "Configure production Stripe webhook endpoint with SSL.",
    ],
    advancedImprovements: [
      "Add usage-based metered billing with Redis counters.",
      "Add team audit logs and multi-factor authentication (MFA).",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectBlueprint | undefined {
  return PROJECTS.find((p) => p.slug === slug || p.id === slug);
}

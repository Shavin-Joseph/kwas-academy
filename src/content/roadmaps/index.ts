import { Roadmap } from "@/types";

export const ROADMAPS: Roadmap[] = [
  {
    id: "roadmap-frontend",
    slug: "frontend",
    title: "Frontend Developer Roadmap",
    description: "Step-by-step path to becoming a professional modern frontend engineer from HTML & CSS to React, TypeScript, Performance, and Micro-frontends.",
    targetRole: "Frontend Engineer / UI Developer",
    estimatedDuration: "6 Months (10 hrs/week)",
    icon: "Layout",
    color: "blue",
    sections: [
      {
        id: "fe-sec-1",
        title: "1. The Web Foundation",
        description: "Master the fundamental building blocks of all browser interfaces.",
        nodes: [
          {
            id: "fe-html",
            title: "HTML5 & Semantic Web",
            description: "Document structures, semantic landmarks, forms, accessibility (WCAG), canvas, and SEO meta tags.",
            level: "Beginner",
            courseSlug: "html",
            lessonSlug: "html-introduction",
            topics: ["Document Tree", "Semantic Elements", "Forms & Validation", "ARIA Roles", "Web Storage"],
            recommendedProjects: ["Accessible Personal Portfolio"],
          },
          {
            id: "fe-css",
            title: "CSS3 & Layout Engines",
            description: "Box model, Flexbox, CSS Grid, responsive design, media queries, CSS variables, transitions, and modern container queries.",
            level: "Beginner",
            courseSlug: "css",
            lessonSlug: "css-box-model",
            topics: ["Box Sizing", "Flexbox", "CSS Grid", "Media Queries", "Container Queries", "Animations"],
            recommendedProjects: ["Responsive SaaS Landing Page"],
          },
        ],
      },
      {
        id: "fe-sec-2",
        title: "2. JavaScript & Modern TypeScript",
        description: "Programmatic interactivity, asynchronous operations, and type safety.",
        nodes: [
          {
            id: "fe-js",
            title: "JavaScript (ES6+)",
            description: "Core syntax, closures, prototypes, event loop, promises, async/await, DOM APIs, and Fetch requests.",
            level: "Intermediate",
            courseSlug: "javascript",
            lessonSlug: "js-introduction",
            topics: ["ES6 Syntax", "DOM Manipulation", "Async/Await", "Event Loop", "Closures"],
            recommendedProjects: ["Interactive Task Dashboard", "Weather App"],
          },
          {
            id: "fe-ts",
            title: "TypeScript",
            description: "Static typing, interfaces, generics, utility types, type narrowing, and tsconfig configurations.",
            level: "Intermediate",
            courseSlug: "typescript",
            lessonSlug: "typescript-introduction",
            topics: ["Type Annotations", "Interfaces & Types", "Generics", "Narrowing", "Utility Types"],
            recommendedProjects: ["Type-Safe Component Library"],
          },
        ],
      },
      {
        id: "fe-sec-3",
        title: "3. Component Frameworks & Full-Stack UI",
        description: "Declarative UI engineering, state management, and server rendering.",
        nodes: [
          {
            id: "fe-react",
            title: "React & Hooks",
            description: "Components, JSX, hooks (useState, useEffect, useMemo, useCallback), context API, and component lifecycles.",
            level: "Intermediate",
            courseSlug: "react",
            lessonSlug: "react-introduction",
            topics: ["Components & Props", "Hooks", "Context API", "State Architecture", "React Fiber"],
            recommendedProjects: ["E-Commerce Web App"],
          },
          {
            id: "fe-nextjs",
            title: "Next.js (App Router)",
            description: "Server Components (RSC), Server Actions, static generation (SSG), routing, metadata, and deployment.",
            level: "Advanced",
            courseSlug: "nextjs",
            lessonSlug: "nextjs-introduction",
            topics: ["App Router", "Server Components", "Server Actions", "SEO & Optimization", "Vercel Deployments"],
            recommendedProjects: ["Full-Stack SaaS Application"],
          },
        ],
      },
      {
        id: "fe-sec-4",
        title: "4. Testing, Performance & Architecture",
        description: "Master enterprise frontend engineering practices.",
        nodes: [
          {
            id: "fe-testing",
            title: "Frontend Testing & Quality",
            description: "Unit testing with Vitest/Jest, component testing with React Testing Library, and E2E with Playwright.",
            level: "Advanced",
            courseSlug: "typescript",
            topics: ["Unit Tests", "Component Mocks", "E2E Playwright", "Accessibility Audits"],
          },
          {
            id: "fe-perf",
            title: "Performance & Core Web Vitals",
            description: "Largest Contentful Paint (LCP), Interaction to Next Paint (INP), code splitting, bundle analyzers, and CDN caching.",
            level: "Advanced",
            courseSlug: "nextjs",
            topics: ["Core Web Vitals", "LCP / INP / CLS", "Tree Shaking", "Virtual DOM Optimization"],
          },
        ],
      },
    ],
  },
  {
    id: "roadmap-backend",
    slug: "backend",
    title: "Backend Developer Roadmap",
    description: "Master server architecture, relational & NoSQL databases, REST/GraphQL APIs, caching, authentication, and microservices.",
    targetRole: "Backend Engineer / Distributed Systems Developer",
    estimatedDuration: "6 Months (10 hrs/week)",
    icon: "Server",
    color: "emerald",
    sections: [
      {
        id: "be-sec-1",
        title: "1. Language & Runtimes",
        description: "Choose and master a solid server-side runtime.",
        nodes: [
          {
            id: "be-node",
            title: "Node.js & Express",
            description: "Asynchronous I/O, event loop, HTTP servers, and Express REST APIs.",
            level: "Beginner",
            courseSlug: "nodejs",
            lessonSlug: "nodejs-introduction",
            topics: ["Async I/O", "File System", "HTTP Server", "Express"],
          },
          {
            id: "be-py",
            title: "Python & FastAPI",
            description: "Python backend, asynchronous endpoints, and Pydantic validation.",
            level: "Beginner",
            courseSlug: "python",
            lessonSlug: "python-introduction",
            topics: ["Python 3", "FastAPI", "AsyncIO", "Pydantic"],
          },
        ],
      },
      {
        id: "be-sec-2",
        title: "2. Relational & NoSQL Databases",
        description: "Data modeling, transactions, query optimization, and persistent storage.",
        nodes: [
          {
            id: "be-sql",
            title: "PostgreSQL & SQL Mastery",
            description: "Schema design, normalization, ACID transactions, complex joins, CTEs, indexing, and query plans.",
            level: "Intermediate",
            courseSlug: "sql",
            lessonSlug: "sql-introduction",
            topics: ["Schemas", "Transactions", "Indexes", "Query Optimization", "PostgreSQL"],
          },
          {
            id: "be-nosql",
            title: "Redis & NoSQL Caching",
            description: "Key-value caching, Redis pub/sub, MongoDB document stores, and session state caching.",
            level: "Intermediate",
            courseSlug: "sql",
            topics: ["Redis Caching", "Cache Invalidation Strategies", "Document Databases"],
          },
        ],
      },
      {
        id: "be-sec-3",
        title: "3. API Design & Security",
        description: "Build robust, authenticated, and rate-limited API endpoints.",
        nodes: [
          {
            id: "be-api",
            title: "REST, GraphQL & WebSockets",
            description: "HTTP verbs, status codes, OpenAPI/Swagger specifications, real-time bi-directional sockets.",
            level: "Intermediate",
            courseSlug: "nodejs",
            topics: ["REST Architecture", "JWT & OAuth2", "Rate Limiting", "WebSockets"],
          },
        ],
      },
      {
        id: "be-sec-4",
        title: "4. System Architecture & Scalability",
        description: "Design distributed, fault-tolerant backends.",
        nodes: [
          {
            id: "be-sys",
            title: "Distributed Systems & Queues",
            description: "Message brokers (Kafka, RabbitMQ), load balancing, horizontal scaling, database sharding, and microservices.",
            level: "Advanced",
            courseSlug: "system-design",
            lessonSlug: "system-design-introduction",
            topics: ["Message Queues", "Microservices", "Load Balancing", "CAP Theorem"],
          },
        ],
      },
    ],
  },
  {
    id: "roadmap-fullstack",
    slug: "full-stack",
    title: "Full Stack Developer Roadmap",
    description: "Complete end-to-end curriculum bridging frontend UI, backend services, databases, CI/CD, and production deployment.",
    targetRole: "Full Stack Software Engineer",
    estimatedDuration: "8 Months (12 hrs/week)",
    icon: "Layers",
    color: "purple",
    sections: [
      {
        id: "fs-sec-1",
        title: "1. Core Web Stack",
        description: "HTML, CSS, JavaScript, and TypeScript foundations.",
        nodes: [
          { id: "fs-n1", title: "HTML & CSS Mastery", description: "Semantic markup and responsive layouts.", level: "Beginner", courseSlug: "html", lessonSlug: "html-introduction", topics: ["HTML5", "CSS Grid", "Flexbox"] },
          { id: "fs-n2", title: "JavaScript & TypeScript", description: "Core language, asynchronous code, and static typing.", level: "Intermediate", courseSlug: "javascript", lessonSlug: "js-introduction", topics: ["ES6+", "TypeScript", "Async/Await"] },
        ],
      },
      {
        id: "fs-sec-2",
        title: "2. Full Stack Frameworks",
        description: "Next.js, Node.js, Express, and modern React architectures.",
        nodes: [
          { id: "fs-n3", title: "React & Next.js App Router", description: "SSR, SSG, Server Actions, and UI components.", level: "Intermediate", courseSlug: "nextjs", lessonSlug: "nextjs-introduction", topics: ["React Hooks", "Next.js", "Server Actions"] },
          { id: "fs-n4", title: "APIs & Databases (SQL + Prisma)", description: "PostgreSQL, Prisma ORM, REST endpoints, and authentication.", level: "Intermediate", courseSlug: "sql", lessonSlug: "sql-introduction", topics: ["PostgreSQL", "Prisma ORM", "Auth (JWT/Sessions)"] },
        ],
      },
      {
        id: "fs-sec-3",
        title: "3. DevOps & Cloud Deployment",
        description: "Docker, CI/CD pipelines, and cloud hosting.",
        nodes: [
          { id: "fs-n5", title: "Docker & Containerization", description: "Dockerfiles, compose, multi-stage builds.", level: "Advanced", courseSlug: "devops", lessonSlug: "docker-introduction", topics: ["Docker", "Docker Compose", "Vercel/AWS Deploy"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-ai-ml",
    slug: "ai-engineer",
    title: "AI & Machine Learning Engineer Roadmap",
    description: "From Python data foundations (NumPy, Pandas) to Deep Learning, LLM APIs, Vector Databases, and RAG Architecture.",
    targetRole: "AI Engineer / Machine Learning Developer",
    estimatedDuration: "7 Months (10 hrs/week)",
    icon: "Brain",
    color: "amber",
    sections: [
      {
        id: "ai-sec-1",
        title: "1. Mathematics & Python Foundation",
        description: "Linear algebra, probability, calculus, and Python data tools.",
        nodes: [
          { id: "ai-n1", title: "Python for Data Science", description: "Python 3, NumPy vectorization, and Pandas dataframes.", level: "Beginner", courseSlug: "python", lessonSlug: "python-introduction", topics: ["Python", "NumPy", "Pandas", "Matplotlib"] },
        ],
      },
      {
        id: "ai-sec-2",
        title: "2. Classical Machine Learning & GenAI",
        description: "Embeddings, vector databases, and Retrieval-Augmented Generation.",
        nodes: [
          { id: "ai-n2", title: "Vector Embeddings & RAG", description: "Semantic search, pgvector, prompt engineering, and autonomous agents.", level: "Intermediate", courseSlug: "ai-ml", lessonSlug: "ai-and-rag-introduction", topics: ["Embeddings", "Cosine Similarity", "RAG Systems", "Vector DBs"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-devops",
    slug: "devops",
    title: "DevOps & Cloud Engineer Roadmap",
    description: "Linux, Git, Docker, Kubernetes, CI/CD, Terraform, AWS/GCP, and Site Reliability Engineering.",
    targetRole: "DevOps / SRE / Cloud Engineer",
    estimatedDuration: "6 Months (10 hrs/week)",
    icon: "Cloud",
    color: "blue",
    sections: [
      {
        id: "dev-sec-1",
        title: "1. Containers & Orchestration",
        description: "Docker and Kubernetes at scale.",
        nodes: [
          { id: "dev-n1", title: "Docker & Containerization", description: "Containers, pods, deployments, services, ingress, and Helm charts.", level: "Intermediate", courseSlug: "devops", lessonSlug: "docker-introduction", topics: ["Docker", "Kubernetes", "Helm", "Service Mesh"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-cybersecurity",
    slug: "cybersecurity",
    title: "Cybersecurity Fundamentals Roadmap",
    description: "Defensive engineering, OWASP Top 10, cryptographic protocols, secure auth, threat modeling, and network defense.",
    targetRole: "Cybersecurity Analyst / AppSec Engineer",
    estimatedDuration: "5 Months (8 hrs/week)",
    icon: "Shield",
    color: "red",
    sections: [
      {
        id: "sec-sec-1",
        title: "1. Web Security & OWASP Defenses",
        description: "Defend against modern web vulnerabilities.",
        nodes: [
          { id: "sec-n1", title: "OWASP Top 10 Defense", description: "Mitigating SQL injection, Cross-Site Scripting (XSS), CSRF, SSRF, and security headers (CSP).", level: "Intermediate", courseSlug: "cybersecurity", lessonSlug: "owasp-top-10", topics: ["OWASP Top 10", "SQLi Prevention", "XSS Defenses", "CORS & CSP"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-software-engineer",
    slug: "software-engineer",
    title: "Software Engineering Core Roadmap",
    description: "Data structures, algorithms, design patterns, clean architecture, SOLID principles, testing, and system design.",
    targetRole: "Software Engineer / Systems Architect",
    estimatedDuration: "8 Months (12 hrs/week)",
    icon: "Cpu",
    color: "purple",
    sections: [
      {
        id: "se-sec-1",
        title: "1. Algorithms & Complexity",
        description: "Big-O notation, fundamental structures, and algorithmic paradigms.",
        nodes: [
          { id: "se-n1", title: "Data Structures & Big-O", description: "Arrays, Linked Lists, Trees, Graphs, Hash Maps, and asymptotic complexity analysis.", level: "Beginner", courseSlug: "dsa", lessonSlug: "big-o-notation", topics: ["Big-O Analysis", "Trees & Graphs", "Dynamic Programming"] },
        ],
      },
      {
        id: "se-sec-2",
        title: "2. Large-Scale System Design",
        description: "Architect systems handling millions of requests per second.",
        nodes: [
          { id: "se-n2", title: "System Design & Distributed Systems", description: "Load balancing, sharding, caching, message queues, CAP theorem, and microservices.", level: "Advanced", courseSlug: "system-design", lessonSlug: "system-design-introduction", topics: ["Scalability", "CAP Theorem", "Sharding", "Microservices"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-mobile",
    slug: "mobile",
    title: "Mobile App Developer Roadmap",
    description: "Kotlin, Android Compose, Flutter, React Native, and mobile architecture.",
    targetRole: "Mobile Engineer",
    estimatedDuration: "6 Months",
    icon: "Smartphone",
    color: "emerald",
    sections: [
      {
        id: "mob-sec-1",
        title: "1. Cross-Platform & Native Foundations",
        description: "React Native and modern component ecosystems.",
        nodes: [
          { id: "mob-n1", title: "React Native & Mobile UI", description: "Mobile components, navigation, AsyncStorage, native device APIs, and app store deployment.", level: "Intermediate", courseSlug: "react", lessonSlug: "react-introduction", topics: ["React Native", "Expo", "Navigation", "Push Notifications"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-python-dev",
    slug: "python-developer",
    title: "Python Developer Roadmap",
    description: "From Python fundamentals to FastAPI, Django, AsyncIO, Pytest, and microservice backends.",
    targetRole: "Python Software Developer",
    estimatedDuration: "5 Months",
    icon: "Terminal",
    color: "amber",
    sections: [
      {
        id: "pyd-sec-1",
        title: "1. Python Language & Ecosystem",
        description: "Core language mastery and backend frameworks.",
        nodes: [
          { id: "pyd-n1", title: "Advanced Python & FastAPI", description: "Generators, context managers, async/await, Pydantic, SQLAlchemy, and FastAPI REST APIs.", level: "Intermediate", courseSlug: "python", lessonSlug: "python-introduction", topics: ["OOP Python", "AsyncIO", "FastAPI", "SQLAlchemy"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-database-eng",
    slug: "database-engineer",
    title: "Database Engineer Roadmap",
    description: "RDBMS, NoSQL, query tuning, indexing internals, replication, and distributed transactions.",
    targetRole: "Database Administrator / Data Platform Engineer",
    estimatedDuration: "6 Months",
    icon: "Database",
    color: "purple",
    sections: [
      {
        id: "dbe-sec-1",
        title: "1. Storage Engines & Optimization",
        description: "PostgreSQL internals, indexing structures, and high availability.",
        nodes: [
          { id: "dbe-n1", title: "PostgreSQL Mastery & SQL", description: "B-Trees, WAL logs, MVCC concurrency, partition pruning, and indexes.", level: "Advanced", courseSlug: "sql", lessonSlug: "sql-introduction", topics: ["MVCC", "B-Tree Internals", "Partitioning", "Replication"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-data-scientist",
    slug: "data-scientist",
    title: "Data Analyst & Scientist Roadmap",
    description: "SQL analytics, Python data stack, statistical modeling, data visualization, and business intelligence.",
    targetRole: "Data Scientist / Business Intelligence Analyst",
    estimatedDuration: "6 Months",
    icon: "BarChart3",
    color: "blue",
    sections: [
      {
        id: "ds-sec-1",
        title: "1. Data Extraction & Analytics",
        description: "SQL data warehousing and Pandas analytics.",
        nodes: [
          { id: "ds-n1", title: "SQL for Analytics & Python", description: "Window functions, cohorts, retention analysis, Pandas aggregations, and data visualization.", level: "Intermediate", courseSlug: "sql", lessonSlug: "sql-introduction", topics: ["Window Functions", "Pandas", "Cohort Analysis", "Data Storytelling"] },
        ],
      },
    ],
  },
  {
    id: "roadmap-java-dev",
    slug: "java-developer",
    title: "Java & Enterprise Architecture Roadmap",
    description: "Core Java, JVM internals, Spring Boot microservices, Hibernate JPA, and enterprise cloud systems.",
    targetRole: "Enterprise Java Developer",
    estimatedDuration: "7 Months",
    icon: "Coffee",
    color: "red",
    sections: [
      {
        id: "jv-sec-1",
        title: "1. Java Core & Spring Boot",
        description: "Java 21+, OOP, Records, Spring Boot, and REST microservices.",
        nodes: [
          { id: "jv-n1", title: "Spring Boot Microservices & Java", description: "Spring Boot, Dependency Injection, Spring Data JPA, Spring Security, and Maven.", level: "Intermediate", courseSlug: "java", lessonSlug: "java-introduction", topics: ["Java 21", "Spring Boot", "JPA / Hibernate", "Maven"] },
        ],
      },
    ],
  },
];

export function getRoadmapBySlug(slug: string): Roadmap | undefined {
  return ROADMAPS.find((r) => r.slug === slug);
}

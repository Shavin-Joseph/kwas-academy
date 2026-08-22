import { Course } from "@/types";

export const nodejsCourse: Course = {
  id: "course-nodejs",
  slug: "nodejs",
  title: "Node.js & Express REST API Engineering",
  tagline: "Build scalable, asynchronous backend services, middleware pipelines, and secure REST APIs.",
  description: "Master Node.js runtime and Express: asynchronous I/O, event loop, file system, streams, HTTP servers, Express routing, middleware, JWT auth, rate limiting, error handling, and Prisma ORM integration.",
  category: "Backend",
  level: "Intermediate",
  estimatedHours: 26,
  icon: "Server",
  badgeColor: "emerald",
  prerequisites: ["JavaScript Fundamentals"],
  skillsGained: [
    "Node.js Event Loop & Non-Blocking Asynchronous I/O",
    "Express Routing & Middleware Pipeline Architecture",
    "RESTful API Design Standards & HTTP Status Codes",
    "JWT Authentication & Password Hashing with Bcrypt",
    "Database Integration with PostgreSQL & Prisma ORM",
  ],
  featured: true,
  modules: [
    {
      id: "mod-node-1",
      slug: "intro",
      title: "Module 1: Node.js Runtime & Libuv Event Loop",
      description: "How Node.js executes JavaScript on the server with V8 and libuv.",
      lessons: [
        {
          id: "node-intro",
          slug: "nodejs-introduction",
          courseSlug: "nodejs",
          moduleSlug: "intro",
          title: "Node.js Introduction & Server Architecture",
          description: "Understand Node.js runtime, event loop, and build a fast HTTP REST server with Express.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How Node.js executes JavaScript on the server via the V8 engine",
            "The non-blocking event-driven architecture and libuv thread pool",
            "Creating Express REST route handlers with JSON responses",
          ],
          introduction: `Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine. It uses an event-driven, non-blocking I/O model.`,
          whyItMatters: `Node.js powers millions of microservices across companies like Netflix, PayPal, LinkedIn, and NASA.`,
          mainExample: {
            title: "Express REST Server",
            language: "javascript",
            code: `const express = require("express");\nconst app = express();\n\napp.use(express.json());\napp.get("/api/health", (req, res) => res.json({ status: "healthy" }));\napp.listen(4000, () => console.log("Server online on port 4000"));`,
            executable: false,
            explanation: ["Express simplifies HTTP server creation and routing."],
          },
          detailedExplanation: ["The single-threaded event loop delegates file and network operations to libuv."],
          commonMistakes: [],
          bestPractices: ["Avoid blocking the main thread with heavy CPU calculations in Node.js."],
          summary: ["Node.js delivers high-throughput backend services using JavaScript."],
        },
      ],
    },
    {
      id: "mod-node-2",
      slug: "core-modules",
      title: "Module 2: Core Modules (fs, path, events, os)",
      description: "Interacting with the operating system, file system promises, and EventEmitter.",
      lessons: [
        {
          id: "node-fs-events",
          slug: "fs-path-and-eventemitter",
          courseSlug: "nodejs",
          moduleSlug: "core-modules",
          title: "File System (fs/promises) & EventEmitter",
          description: "Read and write files asynchronously with fs/promises, resolve cross-platform paths with path, and publish custom events.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Reading/writing files asynchronously with fs.promises",
            "Resolving cross-platform file paths using path.join and path.resolve",
            "Building event-driven architectures with EventEmitter",
          ],
          introduction: `Node.js comes bundled with core standard library modules for interacting directly with the filesystem, operating system, and process environment.`,
          whyItMatters: `Using fs.promises avoids blocking the event loop while reading files from disk.`,
          mainExample: {
            title: "Async File Reading with fs/promises",
            language: "javascript",
            code: `const fs = require("fs/promises");\nconst path = require("path");\n\nasync function loadConfig() {\n  const configPath = path.join(__dirname, "config.json");\n  const rawData = await fs.readFile(configPath, "utf-8");\n  return JSON.parse(rawData);\n}\nconsole.log("File system utilities loaded.");`,
            executable: false,
            explanation: ["path.join safely handles both Windows (\\) and POSIX (/) path separators."],
          },
          detailedExplanation: ["EventEmitter enables decoupled pub/sub architectures across backend subsystems."],
          commonMistakes: [],
          bestPractices: ["Never use synchronous methods like fs.readFileSync in production servers."],
          summary: ["Core modules provide native access to the operating system and filesystem."],
        },
      ],
    },
    {
      id: "mod-node-3",
      slug: "streams-buffers",
      title: "Module 3: Buffers, Streams & Binary Data",
      description: "Handling multi-gigabyte files with readable, writable, and transform streams.",
      lessons: [
        {
          id: "node-streams",
          slug: "streams-and-buffers",
          courseSlug: "nodejs",
          moduleSlug: "streams-buffers",
          title: "Node.js Streams & Memory Optimization (pipeline)",
          description: "Process massive datasets without memory overflow using Readable, Writable, and Transform streams.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why loading a 2GB file into memory with readFile() crashes the process",
            "Piping streams with stream.pipeline to prevent memory leaks",
            "Transform streams for real-time gzip compression and cryptography",
          ],
          introduction: `Streams are collections of data—just like arrays or strings. The difference is that streams might not be available all at once and don't have to fit in memory.`,
          whyItMatters: `Using streams allows a Node server with 512MB RAM to process 10GB video files smoothly without out-of-memory crashes.`,
          mainExample: {
            title: "Stream Pipeline with Gzip Compression",
            language: "javascript",
            code: `const fs = require("fs");\nconst zlib = require("zlib");\nconst { pipeline } = require("stream/promises");\n\nasync function compressFile(input, output) {\n  await pipeline(\n    fs.createReadStream(input),\n    zlib.createGzip(),\n    fs.createWriteStream(output)\n  );\n  console.log("File compressed successfully.");\n}`,
            executable: false,
            explanation: ["pipeline automatically manages stream backpressure and error destruction."],
          },
          detailedExplanation: ["Backpressure prevents fast read streams from overwhelming slow network write streams."],
          commonMistakes: [],
          bestPractices: ["Always use stream.pipeline instead of .pipe() for robust error cleanup."],
          summary: ["Streams enable memory-efficient processing of massive datasets."],
        },
      ],
    },
    {
      id: "mod-node-4",
      slug: "http-networking",
      title: "Module 4: HTTP Server & Networking Fundamentals",
      description: "The native http/https module, request headers, status codes, and WebSockets.",
      lessons: [
        {
          id: "node-http",
          slug: "native-http-and-websockets",
          courseSlug: "nodejs",
          moduleSlug: "http-networking",
          title: "Native HTTP Server & Real-Time WebSockets",
          description: "Build HTTP servers from scratch using the native 'http' module and establish bidirectional WebSocket connections.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Building low-level HTTP servers with http.createServer",
            "Parsing incoming URL queries and request headers",
            "Establishing persistent bidirectional WebSocket connections (ws)",
          ],
          introduction: `The Node.js 'http' module allows Node to transfer data over the Hyper Text Transfer Protocol (HTTP). WebSockets upgrade HTTP connections to full-duplex real-time channels.`,
          whyItMatters: `Real-time chat apps, multiplayer games, and live stock tickers rely on persistent WebSocket connections.`,
          mainExample: {
            title: "Native HTTP Server",
            language: "javascript",
            code: `const http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "application/json" });\n  res.end(JSON.stringify({ message: "Native Node.js Server Response" }));\n});\n\nserver.listen(5000, () => console.log("HTTP server ready."));`,
            executable: false,
            explanation: ["http.createServer handles incoming sockets and constructs request/response streams."],
          },
          detailedExplanation: ["WebSockets upgrade HTTP 1.1 handshake to persistent TCP binary streams."],
          commonMistakes: [],
          bestPractices: ["Use Express or Fastify for production REST apps and 'ws' for WebSocket servers."],
          summary: ["HTTP and WebSockets power web communication and real-time streaming."],
        },
      ],
    },
    {
      id: "mod-node-5",
      slug: "express-routing",
      title: "Module 5: Express Framework & Routing Architecture",
      description: "Express application instance, router chaining, and parameterized routes (:id).",
      lessons: [
        {
          id: "node-express-routes",
          slug: "express-router-and-controllers",
          courseSlug: "nodejs",
          moduleSlug: "express-routing",
          title: "Express Router & MVC Controller Architecture",
          description: "Organize large backend codebases using Express.Router(), modular controllers, and service layers.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Splitting routes with express.Router() into separate files",
            "Route parameters (:courseSlug) and query strings (req.query)",
            "The Model-View-Controller (MVC) architectural pattern",
          ],
          introduction: `Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
          whyItMatters: `Using Express.Router() allows teams to partition large API codebases into clean feature modules (/users, /courses, /payments).`,
          mainExample: {
            title: "Modular Express Router",
            language: "javascript",
            code: `// routes/courseRoutes.js\nconst express = require("express");\nconst router = express.Router();\n\nrouter.get("/", (req, res) => res.json({ courses: [] }));\nrouter.get("/:id", (req, res) => {\n  const { id } = req.params;\n  res.json({ id, title: "HTML5 Architecture" });\n});\n\nmodule.exports = router;`,
            executable: false,
            explanation: ["router mounts cleanly under app.use('/api/courses', courseRouter)."],
          },
          detailedExplanation: ["Controllers hold business logic while routes define endpoint contracts."],
          commonMistakes: [],
          bestPractices: ["Keep route files thin and delegate logic to controller functions."],
          summary: ["Express Router structures backend endpoints cleanly and modularly."],
        },
      ],
    },
    {
      id: "mod-node-6",
      slug: "middleware-errors",
      title: "Module 6: Middleware Pipelines & Global Error Handling",
      description: "The (req, res, next) pipeline, third-party middleware, and centralized error handlers.",
      lessons: [
        {
          id: "node-middleware",
          slug: "middleware-and-global-errors",
          courseSlug: "nodejs",
          moduleSlug: "middleware-errors",
          title: "Middleware Pipelines & Centralized Error Handlers",
          description: "Chain request middleware (req, res, next) and build centralized 4-parameter error handlers (err, req, res, next).",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How Express executes middleware functions in sequential order",
            "Writing custom authentication and request logging middleware",
            "Centralized error handling middleware with 4 parameters",
          ],
          introduction: `Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function in the application’s request-response cycle.`,
          whyItMatters: `Centralized error middleware prevents duplicated try/catch blocks across 50+ route controllers.`,
          mainExample: {
            title: "Global Error Handling Middleware",
            language: "javascript",
            code: `// Centralized Error Middleware (must have 4 arguments)\napp.use((err, req, res, next) => {\n  console.error("Unhandled API Error:", err.stack);\n  const status = err.statusCode || 500;\n  res.status(status).json({\n    error: {\n      message: err.message || "Internal Server Error",\n      status,\n    },\n  });\n});`,
            executable: false,
            explanation: ["4 parameters signal to Express that this is an error handler."],
          },
          detailedExplanation: ["Call next(error) inside any controller to jump directly to the global error middleware."],
          commonMistakes: [],
          bestPractices: ["Always place the global error handling middleware as the last app.use() statement."],
          summary: ["Middleware pipelines orchestrate request processing and centralized error recovery."],
        },
      ],
    },
    {
      id: "mod-node-7",
      slug: "rest-apis",
      title: "Module 7: REST API Standards & Request Validation",
      description: "RESTful HTTP status codes, Zod schema validation, and OpenAPI documentation.",
      lessons: [
        {
          id: "node-validation",
          slug: "rest-standards-and-zod-validation",
          courseSlug: "nodejs",
          moduleSlug: "rest-apis",
          title: "RESTful API Standards & Schema Validation with Zod",
          description: "Design clean RESTful resources, enforce HTTP status codes (200, 201, 400, 404, 500), and validate payloads with Zod.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Proper HTTP status code usage (201 Created, 204 No Content, 422 Unprocessable)",
            "Validating req.body and req.query with Zod schemas",
            "Preventing malformed or malicious payload injections",
          ],
          introduction: `REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web. Schema validation guarantees data integrity before reaching your database.`,
          whyItMatters: `Validating inputs with Zod stops invalid email formats or missing fields before SQL queries execute.`,
          mainExample: {
            title: "Zod Schema Validation Middleware",
            language: "javascript",
            code: `const { z } = require("zod");\n\nconst RegisterSchema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8),\n  name: z.string().min(2),\n});\n\nfunction validateRegister(req, res, next) {\n  const result = RegisterSchema.safeParse(req.body);\n  if (!result.success) {\n    return res.status(400).json({ errors: result.error.errors });\n  }\n  req.validatedBody = result.data;\n  next();\n}`,
            executable: false,
            explanation: ["safeParse validates inputs without throwing runtime exceptions."],
          },
          detailedExplanation: ["Return HTTP 400 Bad Request with explicit validation error messages."],
          commonMistakes: [],
          bestPractices: ["Always validate incoming request data at the controller boundary."],
          summary: ["Schema validation ensures secure, predictable RESTful API operations."],
        },
      ],
    },
    {
      id: "mod-node-8",
      slug: "auth-jwt",
      title: "Module 8: Authentication with JWT & Bcrypt Hashing",
      description: "Password salting with bcrypt, signed JSON Web Tokens, and auth guard middleware.",
      lessons: [
        {
          id: "node-auth-jwt",
          slug: "jwt-authentication",
          courseSlug: "nodejs",
          moduleSlug: "auth-jwt",
          title: "JWT Authentication & Password Security",
          description: "Implement secure user registration, bcrypt password hashing, and stateless JSON Web Tokens.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why plain text passwords must never be stored",
            "Salting and hashing passwords with bcrypt",
            "Signing and verifying JWT access tokens",
          ],
          introduction: `JSON Web Tokens (JWT) are an open standard for securely transmitting information between parties as a JSON object.`,
          whyItMatters: `Stateless JWT authentication enables horizontal scaling across dozens of distributed server containers.`,
          mainExample: {
            title: "User Sign-In & JWT Generation",
            language: "javascript",
            code: `const jwt = require("jsonwebtoken");\nconst bcrypt = require("bcryptjs");\n\nasync function handleLogin(email, password, userRecord) {\n  const isMatch = await bcrypt.compare(password, userRecord.hashedPassword);\n  if (!isMatch) throw new Error("Invalid credentials");\n  const token = jwt.sign({ userId: userRecord.id }, process.env.JWT_SECRET, { expiresIn: "2h" });\n  return { token };\n}`,
            executable: false,
            explanation: ["bcrypt.compare verifies passwords securely without exposing plain text."],
          },
          detailedExplanation: ["Tokens are sent in the Authorization header: Bearer <token>."],
          commonMistakes: [],
          bestPractices: ["Always store JWT secret keys in environment variables (.env)."],
          summary: ["JWT tokens provide secure, stateless identity verification."],
        },
      ],
    },
    {
      id: "mod-node-9",
      slug: "database-orm",
      title: "Module 9: Database ORM with PostgreSQL & Prisma",
      description: "Relational database modeling with Prisma schema, migrations, and type-safe queries.",
      lessons: [
        {
          id: "node-prisma",
          slug: "postgresql-and-prisma-orm",
          courseSlug: "nodejs",
          moduleSlug: "database-orm",
          title: "PostgreSQL & Type-Safe Prisma ORM",
          description: "Model relational database schemas, run migrations with Prisma CLI, and execute type-safe queries.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Defining Prisma data models and 1-to-many relationships",
            "Running database migrations (prisma migrate dev)",
            "Executing CRUD operations with Prisma Client (findMany, create, update)",
          ],
          introduction: `Prisma is a next-generation Node.js and TypeScript ORM that provides an intuitive schema modeling language, automated migrations, and type-safe database queries.`,
          whyItMatters: `Prisma eliminates SQL typos and guarantees that database query results match TypeScript types perfectly.`,
          mainExample: {
            title: "Prisma Query in Express Route",
            language: "typescript",
            code: `// services/courseService.ts\nimport { PrismaClient } from "@prisma/client";\nconst prisma = new PrismaClient();\n\nexport async function getFeaturedCourses() {\n  return prisma.course.findMany({\n    where: { featured: true },\n    include: { modules: true },\n  });\n}`,
            executable: false,
            explanation: ["include: { modules: true } performs an optimized SQL JOIN automatically."],
          },
          detailedExplanation: ["Prisma Client manages connection pooling and query optimization under the hood."],
          commonMistakes: [],
          bestPractices: ["Reuse a single PrismaClient singleton instance across your application."],
          summary: ["Prisma delivers type-safe, ergonomic database access in Node.js applications."],
        },
      ],
    },
    {
      id: "mod-node-10",
      slug: "security",
      title: "Module 10: Rate Limiting, CORS & AppSec Hardening",
      description: "express-rate-limit, cors configuration, helmet security headers, and sanitization.",
      lessons: [
        {
          id: "node-security",
          slug: "rate-limiting-cors-and-helmet",
          courseSlug: "nodejs",
          moduleSlug: "security",
          title: "Production Hardening (Helmet, CORS, Rate Limiting)",
          description: "Protect Express servers against brute-force attacks, unauthorized origins, and cross-site scripting.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Enabling security HTTP headers with helmet()",
            "Configuring strict Cross-Origin Resource Sharing (CORS) whitelists",
            "Rate limiting authentication endpoints with express-rate-limit",
          ],
          introduction: `Securing Node.js APIs requires defense-in-depth: rate limiting against DDoS/brute-force, strict CORS headers against cross-origin data theft, and security headers against clickjacking.`,
          whyItMatters: `Unprotected login routes can be brute-forced with 100,000 dictionary attempts in minutes without rate limiting.`,
          mainExample: {
            title: "Security Middleware Configuration",
            language: "javascript",
            code: `const helmet = require("helmet");\nconst cors = require("cors");\nconst rateLimit = require("express-rate-limit");\n\napp.use(helmet());\napp.use(cors({ origin: "https://kwasacademy.dev" }));\napp.use("/api/auth", rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 5,\n  message: "Too many attempts. Try again in 15 minutes.",\n}));`,
            executable: false,
            explanation: ["helmet sets essential security headers (HSTS, CSP, X-Frame-Options)."],
          },
          detailedExplanation: ["CORS whitelisting blocks unauthorized third-party websites from making credentialed API calls."],
          commonMistakes: [],
          bestPractices: ["Never use cors({ origin: '*' }) on authenticated private API endpoints."],
          summary: ["AppSec hardening insulates backend APIs from exploits and abuse."],
        },
      ],
    },
    {
      id: "mod-node-11",
      slug: "production",
      title: "Module 11: Logging, Clustering & Production PM2/Docker",
      description: "Structured logging with Winston, multi-core clustering, PM2 process management, and health checks.",
      lessons: [
        {
          id: "node-production",
          slug: "clustering-pm2-and-logging",
          courseSlug: "nodejs",
          moduleSlug: "production",
          title: "Multi-Core Clustering, PM2 & Structured Logging",
          description: "Utilize all CPU cores with cluster / PM2 and emit structured JSON logs with Winston.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why single-threaded Node.js uses only 1 CPU core by default",
            "Spawning worker processes across all CPU cores with PM2 Cluster Mode",
            "Structured JSON logging with Winston for cloud monitoring (Datadog/CloudWatch)",
          ],
          introduction: `In production, Node.js applications run across multiple worker processes managed by process managers like PM2 or Docker Kubernetes replicas.`,
          whyItMatters: `PM2 Cluster mode automatically multiplies throughput by 4x to 16x by utilizing all available CPU cores on the host machine.`,
          mainExample: {
            title: "PM2 Ecosystem Config",
            language: "javascript",
            code: `// ecosystem.config.js\nmodule.exports = {\n  apps: [{\n    name: "kwas-api",\n    script: "dist/server.js",\n    instances: "max", // Utilize all CPU cores\n    exec_mode: "cluster",\n    env_production: {\n      NODE_ENV: "production",\n    },\n  }],\n};`,
            executable: false,
            explanation: ["instances: 'max' spawns one process per CPU core with automatic load balancing."],
          },
          detailedExplanation: ["PM2 monitors worker health and restarts crashed processes in milliseconds."],
          commonMistakes: [],
          bestPractices: ["Always log in structured JSON format in production environments."],
          summary: ["Clustering and process managers ensure high availability and maximum hardware throughput."],
        },
      ],
    },
    {
      id: "mod-node-12",
      slug: "libuv-internals-threadpool",
      title: "Module 12: libuv Internals: Event Demux, Thread Pool & epoll/kqueue",
      description: "Master Node.js asynchronous I/O internals: libuv event loop phases, OS I/O multiplexers (epoll/kqueue/IOCP), and thread pool tuning.",
      lessons: [
        {
          id: "node-libuv",
          slug: "libuv-event-demultiplexer-threadpool-epoll-kqueue",
          courseSlug: "nodejs",
          moduleSlug: "libuv-internals-threadpool",
          title: "libuv Architecture: Event Demux & The Thread Pool",
          description: "Explore the internal architecture of libuv: OS event demultiplexers (Linux epoll, macOS kqueue, Windows IOCP), the 4-thread default libuv pool (`UV_THREADPOOL_SIZE`), and asynchronous system calls.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How Node.js achieves non-blocking I/O using the libuv C library",
            "Why network sockets use OS kernel notification queues (epoll/kqueue) without threads",
            "Which operations use the libuv thread pool (`fs`, `crypto.pbkdf2`, `dns.lookup`, `zlib`)",
            "Tuning `process.env.UV_THREADPOOL_SIZE` for high-throughput disk and crypto operations",
          ],
          introduction: `libuv is the multi-platform C library that powers Node.js's asynchronous I/O engine. Contrary to popular belief, Node.js does NOT execute every asynchronous operation on a background thread. For network sockets, libuv registers file descriptors directly with OS kernel event multiplexers (epoll on Linux, kqueue on macOS). Only operations unsupported by OS async APIs (file system I/O, DNS resolution, CPU-intensive crypto) are dispatched to the internal libuv worker thread pool.`,
          whyItMatters: `By default, the libuv thread pool contains only 4 threads. If 4 crypto or file operations run simultaneously, a 5th operation blocks entirely. Tuning \`UV_THREADPOOL_SIZE\` prevents latency spikes in production.`,
          syntax: `process.env.UV_THREADPOOL_SIZE = '16';\nconst crypto = require('crypto');\ncrypto.pbkdf2('pass', 'salt', 100000, 64, 'sha512', cb);`,
          mainExample: {
            title: "Demonstrating libuv Thread Pool Bottlenecks and Parallel Execution",
            language: "javascript",
            code: `// libuv Thread Pool Benchmark Demonstration
const crypto = require('crypto');

// Set threadpool size before any async calls are dispatched
process.env.UV_THREADPOOL_SIZE = 4;

console.log("=== libuv Thread Pool Benchmark (Default: 4 Threads) ===");
const startTime = Date.now();

// Dispatch 8 heavy cryptographic hashing tasks
for (let i = 1; i <= 8; i++) {
  crypto.pbkdf2('kwas-secret-key', 'salt-2026', 100000, 64, 'sha512', () => {
    const elapsed = Date.now() - startTime;
    console.log(\`Task \${i} finished in \${elapsed}ms\`);
    // Tasks 1-4 finish in ~200ms; Tasks 5-8 must wait for threads 1-4 to free up!
  });
}`,
            executable: true,
            explanation: [
              "crypto.pbkdf2 is executed by libuv's internal worker threads, not the main JavaScript V8 thread.",
              "With UV_THREADPOOL_SIZE = 4, tasks 1 through 4 occupy all available worker threads.",
              "Tasks 5 through 8 wait in the libuv work queue until the first batch completes.",
            ],
          },
          detailedExplanation: [
            "epoll/kqueue vs Thread Pool: Network sockets (HTTP, TCP, UDP) do NOT consume libuv worker threads. They are non-blocking file descriptors monitored by the OS kernel using `epoll_wait()`. Thousands of concurrent WebSocket or HTTP connections consume 0 worker threads.",
          ],
          commonMistakes: [
            {
              mistake: "Setting `process.env.UV_THREADPOOL_SIZE` inside JavaScript after other async modules have already loaded.",
              badCode: "const fs = require('fs'); process.env.UV_THREADPOOL_SIZE = 16; // Too late! Thread pool initialized.",
              goodCode: "// Set before starting node in bash: UV_THREADPOOL_SIZE=16 node server.js",
              explanation: "libuv initializes its thread pool when the first async native call is made. Modifying the environment variable in JS afterwards has no effect.",
            },
          ],
          bestPractices: [
            "Set `UV_THREADPOOL_SIZE` in your container environment to match available CPU cores.",
            "Use `dns.resolve` instead of `dns.lookup` for high-concurrency HTTP clients (bypasses thread pool `getaddrinfo`).",
            "Offload heavy data processing to dedicated Worker Threads rather than blocking libuv.",
          ],
          summary: [
            "libuv provides cross-platform asynchronous I/O via epoll, kqueue, and IOCP.",
            "Network I/O is handled by kernel event queues with 0 thread overhead.",
            "Disk and crypto I/O rely on the libuv thread pool, configurable via `UV_THREADPOOL_SIZE`.",
          ],
        },
      ],
    },
    {
      id: "mod-node-13",
      slug: "memory-profiling-napi-c-addons",
      title: "Module 13: Memory Profiling, Heap Dumps & N-API C++ Addons",
      description: "Diagnose V8 heap memory leaks, inspect core dumps with Chrome DevTools, and build native C++ addons with Node-API (N-API).",
      lessons: [
        {
          id: "node-profiling-napi",
          slug: "node-memory-profiling-heapdumps-napi-cpp-addons",
          courseSlug: "nodejs",
          moduleSlug: "memory-profiling-napi-c-addons",
          title: "V8 Heap Profiling & Native N-API C++ Addons",
          description: "Diagnose production Node.js memory leaks with V8 Heap Snapshots, inspect memory retaining trees, and write high-speed native C++ addons using the ABI-stable Node-API (N-API).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Generating on-demand V8 Heap Snapshots using `v8.writeHeapSnapshot()`",
            "Analyzing Retaining Paths and Shallow vs Retained Size in Chrome DevTools",
            "The architecture of Node-API (N-API): ABI stability across Node.js major versions",
            "Compiling native C++ routines using `node-gyp` and calling them from JavaScript",
          ],
          introduction: `When Node.js microservices experience creeping memory consumption that leads to Out-Of-Memory (OOM) fatal crashes, developers must take V8 heap snapshots to find the root retaining objects. For tasks demanding pure raw CPU speed (like image transformations or custom compression), Node-API (N-API) allows developers to write compiled C/C++ extensions that link directly with Node.js.`,
          whyItMatters: `Node-API is Application Binary Interface (ABI) stable. Native C++ addons compiled against N-API run across Node.js v18, v20, and v22 without recompilation.`,
          syntax: `const v8 = require('v8');\nv8.writeHeapSnapshot('dump.heapsnapshot');\n// N-API in C++\n#include <napi.h>`,
          mainExample: {
            title: "Automated On-Demand V8 Heap Snapshot Generator",
            language: "javascript",
            code: `// Automated Production Memory Leak Snapshot Generator
const v8 = require('v8');
const fs = require('fs');

class DiagnosticMemoryMonitor {
  constructor(thresholdPercent = 85) {
    this.thresholdPercent = thresholdPercent;
    this.isDumping = false;
  }

  checkMemory() {
    const heapStats = v8.getHeapStatistics();
    const usedMb = (heapStats.used_heap_size / 1024 / 1024).toFixed(2);
    const totalMb = (heapStats.heap_size_limit / 1024 / 1024).toFixed(2);
    const usagePercent = (heapStats.used_heap_size / heapStats.heap_size_limit) * 100;

    console.log(\`[Heap Monitor] Used: \${usedMb}MB / Limit: \${totalMb}MB (\${usagePercent.toFixed(1)}%)\`);

    if (usagePercent > this.thresholdPercent && !this.isDumping) {
      this.isDumping = true;
      console.warn("⚠️ Memory threshold breached! Generating V8 Heap Snapshot...");
      
      const filename = \`heap-\${Date.now()}.heapsnapshot\`;
      const snapshotPath = v8.writeHeapSnapshot(filename);
      console.log(\`✅ Heap snapshot written to: \${snapshotPath}\`);
      console.log("Load this file into Chrome DevTools Memory Tab to inspect retaining paths.");
    }
  }
}

const monitor = new DiagnosticMemoryMonitor(80);
monitor.checkMemory();`,
            executable: true,
            explanation: [
              "v8.getHeapStatistics() inspects live V8 heap limits and active memory consumption.",
              "v8.writeHeapSnapshot() generates a complete memory graph file without requiring external profilers.",
              "Opening the snapshot in Chrome DevTools reveals the exact variable retaining leaked memory in the Retainers graph.",
            ],
          },
          detailedExplanation: [
            "Node-API (N-API) C++ Integration: N-API provides C primitives (`napi_create_function`, `napi_get_cb_info`) that insulate native addons from changes in V8 engine internals. C++ code compiled into `.node` binaries loads via standard `require('./addon.node')`.",
          ],
          commonMistakes: [
            {
              mistake: "Generating heap snapshots synchronously during peak production traffic spikes.",
              badCode: "v8.writeHeapSnapshot(); // Freezes the V8 event loop during multi-gigabyte serialization",
              goodCode: "// Offload snapshot generation to a child process or take the server out of load balancer rotation",
              explanation: "Writing a multi-gigabyte heap snapshot pauses the V8 main thread for several seconds.",
            },
          ],
          bestPractices: [
            "Monitor `v8.getHeapSpaceStatistics()` to detect Old Space fragmentation.",
            "Use N-API (`node-addon-api`) for CPU-heavy tasks that exceed V8 performance limits.",
            "Inspect DevTools 'Distance' metric in heap snapshots: lower distance means closer to GC root.",
          ],
          summary: [
            "`v8.writeHeapSnapshot()` captures complete heap graphs for memory leak debugging.",
            "Chrome DevTools Memory tab visualizes retainers and detached DOM/closure references.",
            "N-API delivers ABI-stable native C++ execution with zero recompilation across Node.js versions.",
          ],
        },
      ],
    },
    {
      id: "mod-node-14",
      slug: "zero-copy-streams-backpressure",
      title: "Module 14: Zero-Copy Streams, Buffers & Backpressure Flow Control",
      description: "Master Node.js Streams v3, pipeline error propagation, zero-copy buffer pooling, and backpressure management.",
      lessons: [
        {
          id: "node-streams-backpressure",
          slug: "nodejs-zero-copy-streams-backpressure-pipeline",
          courseSlug: "nodejs",
          moduleSlug: "zero-copy-streams-backpressure",
          title: "Zero-Copy Streams, Buffer Pooling & Backpressure",
          description: "Master high-throughput streaming in Node.js: stream states (`flowing` vs `paused`), handling backpressure with `stream.write() === false`, zero-copy Buffer pooling (`Buffer.allocUnsafe`), and robust error handling with `stream.pipeline`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 stream types: Readable, Writable, Duplex, and Transform (Streams v3)",
            "What Backpressure is and why ignoring `writable.write() === false` exhausts server RAM",
            "How `stream.pipeline()` eliminates stream memory leaks and handles destroy events safely",
            "Node.js Buffer internals: Buffer.poolSize (8KB) and zero-copy allocation with `Buffer.allocUnsafe`",
          ],
          introduction: `When transmitting large multi-gigabyte files or high-frequency API responses in Node.js, buffering data into memory crashes the process with out-of-memory errors. Node.js Streams process data chunk-by-chunk with constant memory footprint. Backpressure is the mechanism that signals a fast readable source to pause when a slow writable consumer cannot keep pace.`,
          whyItMatters: `Without backpressure handling, streaming a 10GB file to a slow 3G mobile client forces Node.js to buffer gigabytes in RAM, crashing your cloud servers.`,
          syntax: `const { pipeline } = require('stream/promises');\nawait pipeline(readable, transform, writable);`,
          mainExample: {
            title: "Safe Stream Pipeline with Backpressure and Gzip Compression",
            language: "javascript",
            code: `// High-Performance Stream Pipeline with Backpressure
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');
const { Readable } = require('stream');

async function executeStreamPipeline() {
  console.log("=== Node.js Zero-Copy Stream Pipeline ===");

  // 1. Custom Readable Stream generating binary data chunks
  let chunkCount = 0;
  const sourceStream = new Readable({
    highWaterMark: 16 * 1024, // 16KB internal buffer threshold
    read() {
      if (chunkCount >= 5) {
        this.push(null); // Signal EOF (End of Stream)
        return;
      }
      chunkCount++;
      const buffer = Buffer.alloc(16 * 1024, "KWAS-STREAM-DATA-");
      console.log(\`[Readable] Emitting Chunk #\${chunkCount} (16KB)\`);
      this.push(buffer);
    }
  });

  // 2. Transform Stream: Compressing data on the fly with Gzip
  const gzipStream = zlib.createGzip({ level: 6 });

  // 3. pipeline() automatically manages backpressure, drain events, and cleanup!
  const destination = fs.createWriteStream('/dev/null'); // Or output.gz

  try {
    await pipeline(sourceStream, gzipStream, destination);
    console.log("✅ Stream pipeline completed with perfect backpressure and zero memory leaks.");
  } catch (err) {
    console.error("Pipeline failed safely (all streams destroyed):", err);
  }
}

executeStreamPipeline();`,
            executable: true,
            explanation: [
              "pipeline() automatically wires up 'drain' and 'pause/resume' events between streams.",
              "highWaterMark controls the memory buffer limit before backpressure is asserted.",
              "If any stream in the pipeline errors, pipeline() automatically destroys all streams, closing file descriptors and preventing socket leaks.",
            ],
          },
          detailedExplanation: [
            "Buffer.allocUnsafe vs Buffer.alloc: `Buffer.alloc(size)` allocates zero-filled memory. `Buffer.allocUnsafe(size)` allocates memory from Node's pre-allocated 8KB internal slab (`Buffer.poolSize`) without zeroing out old bytes. It is significantly faster but must be immediately overwritten to prevent exposing sensitive uninitialized RAM.",
          ],
          commonMistakes: [
            {
              mistake: "Using legacy `readable.pipe(writable)` which does NOT forward errors, causing hanging file descriptors.",
              badCode: "readable.pipe(writable); // If readable errors, writable never closes!",
              goodCode: "await stream.pipeline(readable, writable);",
              explanation: "The legacy `.pipe()` method does not clean up destination streams on error. Always use `stream.pipeline` or `stream/promises`.",
            },
          ],
          bestPractices: [
            "Always use `stream.pipeline()` (or `stream/promises`) for composing streams.",
            "Tune `highWaterMark` according to your application throughput and packet sizes.",
            "Never use `Buffer.allocUnsafe()` unless you immediately fill every single byte.",
          ],
          summary: [
            "Streams v3 process data with constant O(1) memory usage.",
            "Backpressure stops fast producers from overwhelming slow consumers.",
            "`stream.pipeline` guarantees complete error propagation and resource cleanup.",
          ],
        },
      ],
    },
    {
      id: "mod-node-15",
      slug: "clustering-worker-threads-shared-memory",
      title: "Module 15: High-Concurrency: Cluster Mode, Worker Threads & Atomics",
      description: "Scale Node.js across multi-core CPUs with the Cluster module, Worker Threads, SharedArrayBuffer, and thread messaging.",
      lessons: [
        {
          id: "node-cluster-workers",
          slug: "nodejs-clustering-worker-threads-shared-memory-atomics",
          courseSlug: "nodejs",
          moduleSlug: "clustering-worker-threads-shared-memory",
          title: "Multi-Core Scaling: Cluster Mode & Worker Threads",
          description: "Maximize server throughput: distributing network traffic with the Node.js `cluster` module (Master/Worker IPC) and executing parallel CPU tasks with `worker_threads` and `SharedArrayBuffer`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Process-based parallelism (`cluster`) vs Thread-based parallelism (`worker_threads`)",
            "How the Primary process shares TCP server sockets across Cluster workers using Round-Robin (Linux SO_REUSEPORT)",
            "Offloading CPU algorithms to `worker_threads` without blocking the main event loop",
            "Lockless synchronization across threads using `SharedArrayBuffer` and `Atomics`",
          ],
          introduction: `Because Node.js runs on a single event loop thread, a standard Node.js server utilizes only 1 CPU core, leaving 90%+ of modern multi-core servers idle. Node.js provides two distinct scaling paradigms: 1. The 'cluster' module, which spawns independent OS processes sharing the same TCP port; and 2. The 'worker_threads' module, which spawns lightweight threads sharing memory space inside the same process.`,
          whyItMatters: `Cluster mode multiplies HTTP throughput across all CPU cores, while Worker Threads execute heavy calculations (e.g. PDF generation, ML embeddings) without dropping a single incoming network packet.`,
          syntax: `const { Worker, isMainThread, parentPort } = require('worker_threads');\nconst cluster = require('cluster');\nif (cluster.isPrimary) cluster.fork();`,
          mainExample: {
            title: "Multi-Threaded Parallel Prime Calculator with Worker Threads",
            language: "javascript",
            code: `// Multi-Threaded Node.js Worker Architecture
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) {
  console.log("=== Node.js Worker Threads Concurrency Engine ===");
  console.log(\`[Main Thread PID: \${process.pid}] Spawning background worker thread...\`);

  // Spawn Worker Thread passing serializable workerData
  const worker = new Worker(__filename, {
    workerData: { rangeStart: 2, rangeEnd: 50000 }
  });

  worker.on('message', (result) => {
    console.log(\`✅ [Main Thread] Received computed result from Worker: \${result.primesFound} primes found.\`);
  });

  worker.on('error', (err) => console.error("Worker error:", err));
  worker.on('exit', (code) => console.log(\`Worker thread terminated with exit code \${code}\`));

  console.log("[Main Thread] Event loop remains completely unblocked for HTTP traffic!");
} else {
  // Worker Thread Execution Scope
  const { rangeStart, rangeEnd } = workerData;
  let primesCount = 0;

  for (let i = rangeStart; i <= rangeEnd; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) { isPrime = false; break; }
    }
    if (isPrime) primesCount++;
  }

  // Send result back to Main Thread
  parentPort.postMessage({ primesFound: primesCount });
}`,
            executable: true,
            explanation: [
              "isMainThread differentiates between the main orchestrator thread and worker execution contexts.",
              "workerData passes initialization configuration to the worker thread upon instantiation.",
              "parentPort.postMessage communicates results back to the main thread asynchronously.",
            ],
          },
          detailedExplanation: [
            "Cluster vs Worker Threads Decision Guide: Use `cluster` for I/O-bound web servers (distributes HTTP sockets across processes). Use `worker_threads` for CPU-bound computations (calculating hashes, processing images, compiling templates) that need to share memory buffers via `SharedArrayBuffer`.",
          ],
          commonMistakes: [
            {
              mistake: "Spawning a new Worker Thread for every individual incoming HTTP request.",
              badCode: "app.get('/compute', (req, res) => { new Worker('./worker.js'); }); // High startup overhead",
              goodCode: "// Create a persistent Worker Pool (piscina) and reuse threads across requests",
              explanation: "Creating a new worker thread instantiates a new V8 isolate and libuv environment, which carries significant CPU overhead. Always use a thread pool library (like Piscina).",
            },
          ],
          bestPractices: [
            "Use Piscina or generic-pool to maintain a warm thread pool.",
            "Use `cluster` mode in Docker containers only if running without an orchestrator like Kubernetes.",
            "Use `SharedArrayBuffer` and `Atomics` when high-frequency data sharing is required between threads.",
          ],
          summary: [
            "`cluster` scales web servers by sharing TCP sockets across multiple OS processes.",
            "`worker_threads` executes CPU-intensive calculations without freezing the event loop.",
            "Persistent thread pools maximize throughput while minimizing V8 isolate initialization overhead.",
          ],
        },
      ],
    },
    {
      id: "mod-node-16",
      slug: "opentelemetry-asynclocalstorage",
      title: "Module 16: OpenTelemetry Tracing & AsyncLocalStorage Context",
      description: "Master distributed tracing with OpenTelemetry, context propagation across async calls with `AsyncLocalStorage`, and metrics.",
      lessons: [
        {
          id: "node-opentelemetry",
          slug: "nodejs-opentelemetry-distributed-tracing-asynclocalstorage",
          courseSlug: "nodejs",
          moduleSlug: "opentelemetry-asynclocalstorage",
          title: "OpenTelemetry Distributed Tracing & AsyncLocalStorage",
          description: "Trace microservice requests end-to-end: automatic context propagation across asynchronous callbacks using `AsyncLocalStorage`, W3C Trace Context headers, and OpenTelemetry instrumentation.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How `AsyncLocalStorage` maintains execution context (Request ID, User ID) across deeply nested async calls without prop-drilling",
            "The architecture of OpenTelemetry (OTel): Traces, Spans, Metrics, and Exporters",
            "W3C TraceContext headers (`traceparent`, `tracestate`) for cross-service distributed tracing",
            "Building automatic logging middleware that attaches correlation IDs to every database query",
          ],
          introduction: `In asynchronous Node.js applications, a single thread handles hundreds of concurrent requests simultaneously. When logging or tracing an error inside a deeply nested helper function, passing the 'requestId' through every function signature (prop-drilling) pollutes codebases. 'AsyncLocalStorage' (from the \`async_hooks\` module) acts as thread-local storage for Node.js, preserving request context across promises, timeouts, and I/O callbacks.`,
          whyItMatters: `OpenTelemetry and AsyncLocalStorage allow engineering teams to trace an HTTP request across 20 distributed microservices, instantly pinpointing which database query caused a 500ms latency spike.`,
          syntax: `const { AsyncLocalStorage } = require('async_hooks');\nconst storage = new AsyncLocalStorage();\nstorage.run({ requestId: 'req_123' }, () => { ... });`,
          mainExample: {
            title: "Thread-Local Request Tracing with AsyncLocalStorage",
            language: "javascript",
            code: `// AsyncLocalStorage Context Propagation Architecture
const { AsyncLocalStorage } = require('async_hooks');

const requestContextStorage = new AsyncLocalStorage();

// Simulated Database Helper (Deep in codebase, no request object passed!)
async function queryDatabase(sql) {
  // Retrieve the current async execution context automatically
  const context = requestContextStorage.getStore();
  const requestId = context ? context.requestId : "NO_CTX";
  const userId = context ? context.userId : "ANON";

  console.log(\`[DB Query] [\${requestId}] [User: \${userId}] Executing: \${sql}\`);
  await new Promise(r => setTimeout(r, 50)); // Simulating network latency
  return { status: "SUCCESS" };
}

// Simulated Web Server Request Handler
function handleIncomingRequest(reqId, uId, route) {
  // Wrap entire request lifecycle in AsyncLocalStorage context
  requestContextStorage.run({ requestId: reqId, userId: uId }, async () => {
    console.log(\`--> Incoming Request to \${route}\`);
    
    // Call business logic functions without passing reqId manually!
    await queryDatabase("SELECT * FROM courses WHERE active = true");
    await queryDatabase("UPDATE user_metrics SET last_active = NOW()");
    
    console.log(\`<-- Completed Request: \${reqId}\\n\`);
  });
}

console.log("=== Node.js Context Propagation Engine ===");
// Simulate two concurrent requests interleaved in the event loop
handleIncomingRequest("REQ_ALPHA_001", "usr_99", "/api/learn/nodejs");
handleIncomingRequest("REQ_BETA_002", "usr_42", "/api/learn/react");`,
            executable: true,
            explanation: [
              "AsyncLocalStorage.run() establishes an isolated context store for the duration of the synchronous and asynchronous callback tree.",
              "queryDatabase() retrieves the active store via getStore() without needing the request ID passed as an argument.",
              "Even when multiple asynchronous operations run concurrently, each callback chain maintains its own separate context.",
            ],
          },
          detailedExplanation: [
            "OpenTelemetry Auto-Instrumentation: OpenTelemetry Node.js SDK hooks into `AsyncLocalStorage` to automatically propagate W3C `traceparent` headers into outgoing `fetch` and `http.request` calls, creating continuous trace spans across microservice boundaries.",
          ],
          commonMistakes: [
            {
              mistake: "Storing mutable objects in AsyncLocalStorage and modifying them across branches, creating race conditions.",
              badCode: "const store = storage.getStore(); store.data = mutatedValue;",
              goodCode: "storage.run(Object.freeze({ requestId, traceId }), async () => { ... });",
              explanation: "Always keep AsyncLocalStorage context objects immutable to prevent cross-callback state contamination.",
            },
          ],
          bestPractices: [
            "Use `AsyncLocalStorage` for logging correlation IDs, multi-tenant IDs, and security user contexts.",
            "Initialize OpenTelemetry SDK before loading any other modules (using `--require ./tracing.js`).",
            "Export OpenTelemetry traces via OTLP/gRPC to Tempo, Jaeger, or Datadog.",
          ],
          summary: [
            "`AsyncLocalStorage` preserves request context across asynchronous execution trees.",
            "Eliminates prop-drilling of correlation and trace IDs in complex microservices.",
            "OpenTelemetry provides standardized distributed tracing and metric instrumentation.",
          ],
        },
      ],
    },
  ],
};

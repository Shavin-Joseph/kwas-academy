export type DifficultyLevel = "Beginner (0-30%)" | "Intermediate (30-70%)" | "Advanced & Production (70-100%)";

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface CodeExercise {
  instruction: string;
  initialCode: string;
  solutionCode: string;
  language: "html" | "javascript" | "python" | "bash";
  hint: string;
}

export interface Lesson {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  level: DifficultyLevel;
  content: string;
  codeSnippet: {
    language: "html" | "javascript" | "python" | "bash";
    code: string;
    description: string;
  };
  exercise: CodeExercise;
  quiz: QuizQuestion[];
  seoKeywords: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  level: DifficultyLevel;
  lessons: Lesson[];
}

export interface Course {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  badgeColor: string;
  category: "Languages" | "Backend & APIs" | "Frameworks" | "Mobile Apps" | "DevOps & Linux";
  duration: string;
  totalLessons: number;
  featured: boolean;
  seoDescription: string;
  seoKeywords: string[];
  learningOutcomes: string[];
  prerequisites: string[];
  modules: CourseModule[];
}

export const COURSES: Course[] = [
  {
    slug: "modern-javascript-typescript",
    title: "Advanced JavaScript & TypeScript Engineering: V8 Internals to Enterprise Architecture",
    shortTitle: "JavaScript & TypeScript",
    tagline: "V8 Engine execution pipelines, Event Loop microtasks, memory leak audits, and TypeScript generics",
    description:
      "A deep, rigorous software engineering masterclass on JavaScript and TypeScript. Master V8 engine compilation, call stack and heap memory, microtask queues, closure memory leaks, functional composition, and advanced TypeScript type systems (generics, mapped types, conditional types, infer).",
    iconName: "Code2",
    badgeColor: "text-amber border-amber/30 bg-amber/10",
    category: "Languages",
    duration: "28 Hours",
    totalLessons: 18,
    featured: true,
    seoDescription:
      "Advanced JavaScript and TypeScript course. Learn V8 engine internals, Event Loop microtasks, memory management, closures, TypeScript generics, and type-safe architecture.",
    seoKeywords: [
      "advanced javascript course free",
      "v8 engine event loop microtasks tutorial",
      "javascript memory leak garbage collection",
      "typescript generics infer mapped types course",
      "learn javascript step by step w3schools style",
      "typescript advanced type system guide",
    ],
    learningOutcomes: [
      "Deconstruct V8 engine execution: Bytecode generation (Ignition) and TurboFan JIT optimization",
      "Master Event Loop microtasks (Promises, queueMicrotask) vs macrotasks (setTimeout, I/O)",
      "Diagnose and eliminate closure memory leaks with Chrome DevTools heap snapshots",
      "Implement custom asynchronous streams, AbortControllers, and concurrent task workers",
      "Engineer type-safe enterprise libraries with TypeScript Generics, Mapped Types, and `infer`",
    ],
    prerequisites: ["Familiarity with basic programming logic. Designed for developers scaling to senior levels."],
    modules: [
      {
        id: "js-ch-1",
        title: "Chapter 1: JavaScript Engine Architecture & V8 Execution Pipeline",
        description: "How V8 compiles JS to machine code, Call Stack, Memory Heap, and Ignition/TurboFan JIT.",
        level: "Intermediate (30-70%)",
        lessons: [
          {
            slug: "v8-engine-and-memory-model",
            title: "V8 Execution Pipeline: Call Stack, Memory Heap & JIT Compilation",
            tagline: "Understanding what happens under the hood when your code runs",
            duration: "30 min",
            level: "Intermediate (30-70%)",
            seoKeywords: ["v8 engine execution pipeline", "javascript call stack memory heap", "v8 turbofan ignition tutorial"],
            content: `
## 1. How V8 Executes JavaScript

JavaScript is not purely interpreted. In modern engines like **Google V8** (used in Node.js and Chrome), execution follows a multi-stage compilation pipeline:

\`\`\`
Source Code (.js) ──► Parser ──► AST (Abstract Syntax Tree) 
                         │
                         ▼
             Ignition Interpreter ──► Bytecode (Fast Startup)
                         │
                         ▼ (Hot Code Profiling)
             TurboFan Optimizer  ──► Optimized Machine Code (Assembly)
\`\`\`

---

## 2. The Call Stack vs The Memory Heap

1. **The Call Stack**:
   - High-speed, contiguous LIFO (Last-In, First-Out) memory structure.
   - Holds primitive values (numbers, booleans) and stack frames for function execution.
   - Maximum stack size is typically ~10,000 frames (exceeding this causes a \`RangeError: Maximum call stack size exceeded\`).

2. **The Memory Heap**:
   - Large, unstructured region of memory.
   - Stores non-primitive objects, arrays, closures, and functions.
   - Managed automatically by V8's Generational Garbage Collector (**Scavenger** for young generation, **Mark-Sweep-Compact** for old generation).

---

## 3. Hidden Classes & Inline Caching (V8 Optimization)

Because JavaScript is dynamically typed, V8 dynamically creates **Hidden Classes (Shapes)** behind the scenes to optimize property access.
- If you initialize object properties in the same order, V8 shares the hidden class and optimizes property lookups via **Inline Caches**.
- Adding properties dynamically in random order causes **shape transitions (de-optimization)**, forcing V8 back into slow dictionary mode!
            `,
            codeSnippet: {
              language: "javascript",
              code: `// V8 Hidden Class & Monomorphic Optimization Demonstration
// Good Practice: Monomorphic Shape (Same property order)
function Point(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point(10, 20);
const p2 = new Point(30, 40);

// Measuring execution performance
console.time("Monomorphic Access");
let sum = 0;
for (let i = 0; i < 1_000_000; i++) {
  sum += p1.x + p2.y;
}
console.timeEnd("Monomorphic Access");

console.log("Calculated Sum:", sum);
console.log("V8 Object Shape preserved: Fast Property Lookups.");`,
              description: "Run this code to test V8 monomorphic shape optimization.",
            },
            exercise: {
              instruction: "Create a constructor function `UserSession(id, role)` that always initializes `id`, `role`, and `createdAt = Date.now()` in identical order to preserve V8 hidden classes.",
              initialCode: `// Write your optimized UserSession constructor here:
function UserSession(id, role) {
  // TODO: initialize this.id, this.role, and this.createdAt
}

const session = new UserSession(101, "admin");
console.log("Session:", session);
`,
              solutionCode: `function UserSession(id, role) {
  this.id = id;
  this.role = role;
  this.createdAt = Date.now();
}

const session = new UserSession(101, "admin");
console.log("Session:", session);`,
              language: "javascript",
              hint: "Assign this.id = id; this.role = role; this.createdAt = Date.now();",
            },
            quiz: [
              {
                question: "Which component of the V8 engine is responsible for generating optimized machine code from hot functions?",
                options: [
                  { text: "TurboFan", isCorrect: true, explanation: "Correct! TurboFan is V8's optimizing JIT compiler." },
                  { text: "Ignition", isCorrect: false, explanation: "Ignition is the bytecode interpreter." },
                  { text: "Scavenger", isCorrect: false, explanation: "Scavenger is the young-generation garbage collector." },
                  { text: "Babel", isCorrect: false, explanation: "Babel is an external transpiler, not part of V8." },
                ],
              },
            ],
          },
          {
            slug: "event-loop-microtasks-macrotasks",
            title: "The Event Loop: Microtasks, Macrotasks & Concurrency Mechanics",
            tagline: "Demystifying Promise resolution order and asynchronous queues",
            duration: "35 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["javascript event loop explained", "microtasks vs macrotasks queue", "promise execution order js"],
            content: `
## 1. The Single-Threaded Concurrency Model

JavaScript is single-threaded: it has exactly **one Call Stack** and executes one instruction at a time. The browser/Node runtime provides asynchronous concurrency through the **Event Loop**.

---

## 2. The Two Queue Types: Microtasks vs Macrotasks

Whenever the Call Stack becomes empty, the Event Loop processes queues in strict priority:

\`\`\`
1. Call Stack empties
2. Process ALL pending Microtasks until Microtask Queue is 100% EMPTY
3. Render UI updates (in browser)
4. Take exactly ONE Macrotask from Macrotask Queue
5. Repeat
\`\`\`

| Queue | Examples | Priority |
|---|---|---|
| **Microtask Queue** | \`Promise.then()\`, \`async/await\`, \`queueMicrotask()\`, \`process.nextTick()\` | **High** (Runs immediately after current stack frame) |
| **Macrotask Queue** | \`setTimeout()\`, \`setInterval()\`, \`setImmediate()\`, I/O, UI Events | **Low** (Runs one-by-one between microtask flushes) |

> ⚠️ **Critical Architectural Warning**: If you recursively schedule microtasks (e.g. infinite \`queueMicrotask\`), you will completely starve the Event Loop, freezing the browser UI and preventing all network I/O from running!
            `,
            codeSnippet: {
              language: "javascript",
              code: `// Classic Event Loop Execution Order Challenge
console.log("1. Synchronous Start");

setTimeout(() => {
  console.log("5. Macrotask (setTimeout 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask 1 (Promise.then)");
}).then(() => {
  console.log("4. Microtask 2 (Chained Promise)");
});

queueMicrotask(() => {
  console.log("2. Microtask (queueMicrotask)");
});

console.log("Synchronous End");`,
              description: "Run this code to see the precise execution priority of synchronous code vs microtasks vs macrotasks.",
            },
            exercise: {
              instruction: "Write an async function `runMicrotaskOrder()` that logs 'Step A', schedules a microtask with `queueMicrotask` logging 'Step C', and logs 'Step B' synchronously.",
              initialCode: `// Write runMicrotaskOrder here:
function runMicrotaskOrder() {
  // TODO: implement order
}

runMicrotaskOrder();
`,
              solutionCode: `function runMicrotaskOrder() {
  console.log("Step A");
  queueMicrotask(() => {
    console.log("Step C");
  });
  console.log("Step B");
}

runMicrotaskOrder();`,
              language: "javascript",
              hint: "Log 'Step A', call queueMicrotask(() => console.log('Step C')), then log 'Step B'.",
            },
            quiz: [
              {
                question: "If both a `setTimeout(..., 0)` macrotask and a `Promise.resolve()` microtask are ready, which runs first?",
                options: [
                  { text: "The Promise microtask runs first", isCorrect: true, explanation: "Correct! The Event Loop drains the entire Microtask queue before picking any Macrotask." },
                  { text: "The setTimeout macrotask runs first", isCorrect: false, explanation: "Macrotasks have lower priority than microtasks." },
                  { text: "They run in parallel on separate threads", isCorrect: false, explanation: "JavaScript execution is single-threaded." },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "js-ch-2",
        title: "Chapter 2: Advanced TypeScript: Generics, Mapped Types & `infer`",
        description: "Static type engineering, conditional type branching, and building type-safe API clients.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "advanced-typescript-generics-and-infer",
            title: "TypeScript Advanced Type System: Mapped Types, Conditional Types & `infer`",
            tagline: "Type-level programming for bulletproof enterprise architectures",
            duration: "40 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["typescript conditional types infer", "typescript mapped types tutorial", "advanced typescript course"],
            content: `
## 1. Type-Level Programming in TypeScript

TypeScript is not just a type annotation layer—its type system is **Turing-complete**. You can write functions that execute at compile-time on types themselves!

---

## 2. Conditional Types & The \`infer\` Keyword

Conditional types follow the ternary operator syntax:
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

The \`infer\` keyword allows you to deduce and extract an inner type from a complex structure:
\`\`\`typescript
// Unwraps the return type of any Promise:
type AwaitedType<T> = T extends Promise<infer R> ? R : T;
\`\`\`

---

## 3. Mapped Types & Key Remapping

Mapped types allow you to transform every property in an interface:
\`\`\`typescript
// Creates an immutable, deep-readonly copy of any type:
type ReadonlyRecord<T> = {
  readonly [K in keyof T]: T[K];
};
\`\`\`
            `,
            codeSnippet: {
              language: "javascript",
              code: `// Type-Safe API Client Response Simulator
// Simulating TypeScript compile-time contract enforcement in runtime JS:

function createApiClient(baseUrl) {
  return {
    async request(endpoint, options = {}) {
      console.log(\`[API Request] \${options.method || "GET"} \${baseUrl}\${endpoint}\`);
      // Simulated response payload
      return {
        status: 200,
        ok: true,
        data: {
          id: "prod_101",
          name: "KWAS SysLens Enterprise",
          license: "Commercial",
          timestamp: Date.now()
        }
      };
    }
  };
}

const client = createApiClient("https://api.kwas.tech");
client.request("/v1/products/kwas-syslens").then(res => {
  console.log("Validated Response:", res.data);
});`,
              description: "Type-safe API client architecture simulation.",
            },
            exercise: {
              instruction: "Create a function `createImmutableConfig(config)` that uses `Object.freeze()` to return a deeply immutable object, and verify that modifying a property fails or is prevented.",
              initialCode: `// Write createImmutableConfig here:
function createImmutableConfig(config) {
  // TODO: return frozen config
}

const conf = createImmutableConfig({ apiUrl: "https://kwas.tech", timeout: 5000 });
console.log("Frozen Config:", conf);
`,
              solutionCode: `function createImmutableConfig(config) {
  return Object.freeze({ ...config });
}

const conf = createImmutableConfig({ apiUrl: "https://kwas.tech", timeout: 5000 });
console.log("Frozen Config:", conf);`,
              language: "javascript",
              hint: "Use Object.freeze({ ...config })",
            },
            quiz: [
              {
                question: "In TypeScript, what does the `infer` keyword inside a conditional type do?",
                options: [
                  { text: "Declares a type variable to be extracted dynamically from pattern matching", isCorrect: true, explanation: "Correct! `infer R` extracts an inner type parameter for use in the true branch." },
                  { text: "Converts a variable from JavaScript to TypeScript", isCorrect: false, explanation: "infer is purely a type-level operator." },
                  { text: "Forces a runtime type conversion", isCorrect: false, explanation: "TypeScript has no runtime existence." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "python-programming-mastery",
    title: "Advanced Python Architecture: CPython Internals to FastAPI Microservices",
    shortTitle: "Python Mastery",
    tagline: "CPython memory model, GIL, Metaclasses, Asyncio event loops & production FastAPI APIs",
    description:
      "A masterclass on Python internals and enterprise backend engineering. Learn how CPython manages memory with PyObject and reference counting, bypass the GIL, write custom Metaclasses, master asynchronous concurrency with `asyncio`, and architect high-throughput microservices using FastAPI.",
    iconName: "FileCode",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    category: "Languages",
    duration: "26 Hours",
    totalLessons: 16,
    featured: true,
    seoDescription:
      "Advanced Python programming course. Learn CPython internals, GIL, asyncio, metaprogramming, decorators, and production FastAPI microservice engineering.",
    seoKeywords: [
      "advanced python tutorial cpython gil",
      "python asyncio event loop concurrency",
      "python metaclasses and decorators course",
      "fastapi microservices production tutorial",
      "learn python a to z step by step",
    ],
    learningOutcomes: [
      "Deconstruct CPython memory allocation, PyObject headers, and reference counting GC",
      "Understand the Global Interpreter Lock (GIL) and when to use multiprocessing vs asyncio",
      "Write advanced Metaclasses, Class Decorators, and custom Context Managers",
      "Architect asynchronous pipelines processing thousands of concurrent I/O operations",
      "Build production-grade REST APIs with FastAPI, Pydantic schemas, and JWT auth",
    ],
    prerequisites: ["Basic Python syntax understanding."],
    modules: [
      {
        id: "py-ch-1",
        title: "Chapter 1: CPython Memory Model, PyObject & The GIL",
        description: "Reference counting, cyclic garbage collector, and understanding CPU vs I/O bound concurrency.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "cpython-memory-and-gil",
            title: "CPython Internals: Memory Allocation, PyObject & The Global Interpreter Lock",
            tagline: "Deep dive into CPython runtime architecture and thread safety",
            duration: "35 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["cpython memory allocation", "python gil explained", "python reference counting gc"],
            content: `
## 1. Everything is a PyObject

In CPython (the standard reference implementation of Python), every variable, integer, string, and function is allocated as a C structure called **\`PyObject\`**:

\`\`\`c
struct _object {
    _PyObject_HEAD_EXTRA // Double-linked list pointers for GC tracking
    Py_ssize_t ob_refcnt; // Reference count (for immediate cleanup)
    struct _typeobject *ob_type; // Pointer to type descriptor (e.g. PyLong_Type)
};
\`\`\`

---

## 2. Memory Management: Reference Counting + Generational GC

1. **Reference Counting**:
   - Every time an object is assigned to a variable or passed to a function, \`ob_refcnt\` increments.
   - When a variable goes out of scope or is deleted with \`del\`, \`ob_refcnt\` decrements.
   - When \`ob_refcnt == 0\`, the memory is instantly freed back to the arena.

2. **Cyclic Garbage Collector**:
   - Handles reference cycles (e.g., Object A references B, and B references A).
   - Organizes objects into 3 generations (Gen 0, Gen 1, Gen 2) and runs periodic mark-and-sweep cycles.

---

## 3. The Global Interpreter Lock (GIL)

The **GIL** is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously.
- **For I/O-bound tasks** (network requests, database queries, file reads): Use **\`asyncio\`** or threading because the GIL is released during I/O wait!
- **For CPU-bound tasks** (image processing, cryptography, heavy math): Use **\`multiprocessing\`** or C-extensions to utilize all CPU cores.
            `,
            codeSnippet: {
              language: "python",
              code: `# Advanced Python: Custom Context Manager & Execution Profiler
import time

class PerformanceTimer:
    """A production-grade context manager to benchmark execution time."""
    def __init__(self, task_name="Task"):
        self.task_name = task_name
        self.start_time = None

    def __enter__(self):
        self.start_time = time.perf_counter()
        print(f"⏱️ [START] {self.task_name}...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        elapsed = time.perf_counter() - self.start_time
        print(f"✅ [DONE]  {self.task_name} executed in {elapsed:.6f} seconds.")
        if exc_type:
            print(f"⚠️ Exception intercepted: {exc_val}")
            return False # Propagate exception

# Usage with list comprehension processing
with PerformanceTimer("Processing 500,000 Numbers"):
    data = [x ** 2 for x in range(500_000)]
    print(f"Calculated {len(data)} squared values.")`,
              description: "Run this code to test custom context manager mechanics and performance profiling.",
            },
            exercise: {
              instruction: "Create a Python decorator `@retry(times=3)` that retries a function if it raises an exception.",
              initialCode: `# Write retry decorator here:
def retry(times=3):
    def decorator(func):
        def wrapper(*args, **kwargs):
            # TODO: implement retry loop
            pass
        return wrapper
    return decorator
`,
              solutionCode: `def retry(times=3):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for attempt in range(times):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == times - 1:
                        raise e
        return wrapper
    return decorator`,
              language: "python",
              hint: "Use a for loop: for attempt in range(times): try return func(...) except Exception...",
            },
            quiz: [
              {
                question: "Which Python module should you use to utilize multiple CPU cores for CPU-heavy tasks despite the GIL?",
                options: [
                  { text: "multiprocessing", isCorrect: true, explanation: "Correct! multiprocessing spawns separate Python processes, each with its own interpreter and memory space." },
                  { text: "threading", isCorrect: false, explanation: "threading is still bound to a single CPU core by the GIL in CPython." },
                  { text: "asyncio", isCorrect: false, explanation: "asyncio runs on a single thread and is designed for I/O concurrency, not CPU parallelization." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "rest-api-backend-architecture",
    title: "Enterprise REST API Architecture: High-Throughput Distributed Backends",
    shortTitle: "REST API & Distributed Systems",
    tagline: "Idempotent API design, JWT auth with refresh tokens, rate limiting & cloud deployments",
    description:
      "An advanced backend architecture course for building production-grade REST APIs. Learn HTTP/2 wire semantics, idempotent endpoint design, JWT cryptographic validation, Redis token bucket rate limiting, CORS security, and deploying on Azure Ubuntu VPS with Nginx and PM2.",
    iconName: "Globe",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    category: "Backend & APIs",
    duration: "26 Hours",
    totalLessons: 20,
    featured: true,
    seoDescription:
      "Advanced REST API and backend architecture course. Learn JWT auth, Redis rate limiting, idempotent endpoints, microservices, and Linux VPS deployment.",
    seoKeywords: [
      "advanced rest api architecture",
      "jwt authentication refresh token rotation tutorial",
      "api rate limiting redis token bucket",
      "deploy nodejs api nginx ubuntu vps",
      "how to build production rest api",
    ],
    learningOutcomes: [
      "Design fault-tolerant, idempotent REST APIs adhering to RFC 7231 standards",
      "Implement secure JWT authentication with asymmetric RSA keys and refresh token rotation",
      "Prevent API DDoS abuse using Redis Token Bucket and Sliding Window rate limiters",
      "Configure CORS headers, security headers (Helmet/CSP), and request payload validation",
      "Deploy, reverse proxy with Nginx, and manage process daemons on Azure Linux VPS",
    ],
    prerequisites: ["JavaScript or Python programming proficiency."],
    modules: [
      {
        id: "api-ch-1",
        title: "Chapter 1: Production REST Architecture & Security Pipeline",
        description: "Idempotency keys, JWT asymmetric verification, rate limiting, and CORS headers.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "jwt-auth-and-rate-limiting",
            title: "JWT Cryptographic Authentication & Token Bucket Rate Limiting",
            tagline: "Securing APIs against unauthorized access and traffic floods",
            duration: "35 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["jwt token authentication api", "token bucket rate limiting algorithm", "api security best practices"],
            content: `
## 1. Anatomy of a JSON Web Token (JWT)

A JWT is a cryptographically signed compact string consisting of three base64-encoded segments:
\`\`\`
[Header (Algorithm & Type)] . [Payload (Claims & User ID)] . [Signature (HMAC / RSA)]
\`\`\`

---

## 2. Refresh Token Rotation (Zero-Trust Auth)

1. **Access Token (Short-lived, e.g. 15 minutes)**:
   - Sent in the \`Authorization: Bearer <token>\` header for every API request.
   - Stored in application memory (never in localStorage to prevent XSS theft).
2. **Refresh Token (Long-lived, e.g. 7 days)**:
   - Stored in an \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` cookie.
   - Every time a refresh token is used to generate a new access token, the old refresh token is invalidated immediately (**Refresh Token Rotation**).

---

## 3. Token Bucket Rate Limiter Algorithm

To prevent abusive clients from crashing your server:
- Each IP or API key has a bucket containing $B$ tokens.
- Every API request consumes 1 token.
- The bucket refills at a continuous rate of $R$ tokens/second.
- If tokens reach 0, the server responds with **\`HTTP 429 Too Many Requests\`** and a \`Retry-After\` header.
            `,
            codeSnippet: {
              language: "javascript",
              code: `// Token Bucket Rate Limiter Implementation in JavaScript
class TokenBucketRateLimiter {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.refillRate = refillRatePerSec;
    this.tokens = capacity;
    this.lastRefill = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsedSec = (now - this.lastRefill) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedSec * this.refillRate);
    this.lastRefill = now;
  }

  consume() {
    this.refill();
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return { allowed: true, remaining: Math.floor(this.tokens) };
    }
    return { allowed: false, error: "HTTP 429: Rate Limit Exceeded", retryAfterSec: 1 };
  }
}

const limiter = new TokenBucketRateLimiter(3, 1); // 3 tokens, 1 refill/sec
console.log("Req 1:", limiter.consume()); // Allowed (2 left)
console.log("Req 2:", limiter.consume()); // Allowed (1 left)
console.log("Req 3:", limiter.consume()); // Allowed (0 left)
console.log("Req 4:", limiter.consume()); // 429 Too Many Requests!`,
              description: "Run this code to test the Token Bucket rate limiting algorithm.",
            },
            exercise: {
              instruction: "Create a function `generateApiKey()` that returns a cryptographically secure random API key with prefix 'kwas_live_' followed by 32 hex characters.",
              initialCode: `// Write generateApiKey here:
function generateApiKey() {
  // TODO: generate key with 'kwas_live_' prefix
}

console.log(generateApiKey());
`,
              solutionCode: `function generateApiKey() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return \`kwas_live_\${hex}\`;
}

console.log(generateApiKey());`,
              language: "javascript",
              hint: "Use crypto.getRandomValues(new Uint8Array(16)) and convert bytes to hex string.",
            },
            quiz: [
              {
                question: "Where should short-lived JWT Access Tokens be stored in web applications to minimize XSS exposure?",
                options: [
                  { text: "In application in-memory state", isCorrect: true, explanation: "Correct! In-memory storage is not accessible via document.cookie or localStorage XSS scrapes." },
                  { text: "In localStorage", isCorrect: false, explanation: "localStorage is vulnerable to XSS script injection." },
                  { text: "In URL query parameters", isCorrect: false, explanation: "Query parameters are logged in web server logs and browser history." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "react-nextjs-fullstack-framework",
    title: "React 19 & Next.js 14 Production Engineering: Fiber Architecture to Edge Caching",
    shortTitle: "React & Next.js Fullstack",
    tagline: "React Fiber reconciliation, Next.js App Router streaming, Server Actions & edge performance",
    description:
      "An advanced full-stack masterclass on modern React and Next.js. Master React Fiber internal reconciliation, concurrent transitions, custom hook composition, Next.js App Router Server Components streaming, Server Actions, and distributed edge cache invalidation on Cloudflare and Vercel.",
    iconName: "Layers",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    category: "Frameworks",
    duration: "28 Hours",
    totalLessons: 18,
    featured: true,
    seoDescription:
      "Advanced React and Next.js tutorial. Learn React Fiber architecture, Server Components streaming, Server Actions, and edge caching.",
    seoKeywords: [
      "advanced react nextjs course",
      "react fiber architecture reconciliation tutorial",
      "nextjs 14 app router server components streaming",
      "nextjs server actions and caching lifecycle",
      "fullstack saas nextjs tutorial",
    ],
    learningOutcomes: [
      "Understand React Fiber: Work loops, alternate trees, and concurrent rendering prioritization",
      "Eliminate unnecessary re-renders using referential hooks and custom state stores",
      "Architect Next.js App Router solutions combining Server and Client Components",
      "Implement data mutations using type-safe Server Actions and optimistic UI updates",
      "Master Next.js caching layers: Request Memoization, Data Cache, and Full Route Cache",
    ],
    prerequisites: ["JavaScript and basic React component knowledge."],
    modules: [
      {
        id: "react-ch-1",
        title: "Chapter 1: React Fiber & Server Component Architecture",
        description: "Virtual DOM reconciliation, streaming with Suspense, and edge caching.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "react-fiber-and-server-components",
            title: "React Fiber Architecture & Next.js Server Components Streaming",
            tagline: "How modern React splits rendering work and streams HTML from the edge",
            duration: "35 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["react fiber reconciliation", "nextjs server components streaming", "react concurrent mode tutorial"],
            content: `
## 1. The React Fiber Reconciliation Algorithm

Prior to React 16, React used a synchronous recursive diffing engine (Stack Reconciler) that could not be paused, causing dropped frames during complex updates.

**React Fiber** rewrote the core engine to represent component trees as a **singly-linked list of Fiber nodes**:
- Fiber updates can be paused, aborted, or prioritized based on user interaction urgency.
- Updates use a **Double-Buffering** strategy (Current Tree vs Work-in-Progress Tree).

---

## 2. Server Components (RSC) vs Client Components

In **Next.js 14 App Router**:
- **Server Components (Default)**: Execute **only on the server**. They reduce client bundle size to 0 KB JS, have direct access to backend databases/filesystems, and stream HTML via React Suspense.
- **Client Components (\`'use client'\`)**: Hydrate on the client to handle browser APIs, interactive events (\`onClick\`), and state hooks (\`useState\`, \`useEffect\`).
            `,
            codeSnippet: {
              language: "javascript",
              code: `// Simulation of React Referential Stability Hook
function createMemoizedState(initialValue) {
  let state = initialValue;
  let listeners = [];

  function getState() {
    return state;
  }

  function setState(nextState) {
    if (Object.is(state, nextState)) {
      console.log("⚡ Referential equality matched: Skipping re-render!");
      return;
    }
    state = typeof nextState === "function" ? nextState(state) : nextState;
    console.log("🔄 State changed -> Triggering component render:", state);
    listeners.forEach(fn => fn(state));
  }

  return { getState, setState };
}

const countStore = createMemoizedState(10);
countStore.setState(10); // Skipped!
countStore.setState(15); // Re-rendered!`,
              description: "Run this code to inspect referential equality and state bailouts.",
            },
            exercise: {
              instruction: "Create a function `debounce(fn, delayMs)` that delays invoking `fn` until `delayMs` milliseconds have elapsed since the last call.",
              initialCode: `// Write debounce utility here:
function debounce(fn, delayMs) {
  let timer;
  return function(...args) {
    // TODO: implement debounce
  };
}
`,
              solutionCode: `function debounce(fn, delayMs) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delayMs);
  };
}`,
              language: "javascript",
              hint: "clearTimeout(timer) and set timer = setTimeout(() => fn.apply(this, args), delayMs)",
            },
            quiz: [
              {
                question: "Do React Server Components in Next.js 14 increase the client-side JavaScript bundle size?",
                options: [
                  { text: "No, their JavaScript code is never sent to the browser", isCorrect: true, explanation: "Correct! Server Components execute on the server and send only HTML/RSC payload to the browser." },
                  { text: "Yes, they bundle all server libraries into the client JS", isCorrect: false, explanation: "Server dependencies are kept on the server." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "android-kotlin-app-development",
    title: "Android & Kotlin Systems Engineering: Jetpack Compose to Linux Kernel Auditing",
    shortTitle: "Android & Kotlin Systems",
    tagline: "Coroutines dispatchers, Compose compiler optimizations, and Linux /proc hardware metrics",
    description:
      "An advanced native Android app engineering track. Learn Kotlin coroutine dispatchers, reactive StateFlow streams, Jetpack Compose recomposition tuning, and accessing low-level Linux `/proc` and `/sys` kernel metrics used in high-performance diagnostic tools like KWAS SysLens.",
    iconName: "Smartphone",
    badgeColor: "text-amber border-amber/30 bg-amber/10",
    category: "Mobile Apps",
    duration: "30 Hours",
    totalLessons: 18,
    featured: true,
    seoDescription:
      "Advanced Android app development with Kotlin and Jetpack Compose. Learn coroutines, Compose compiler optimizations, and Linux /proc hardware diagnostics.",
    seoKeywords: [
      "advanced android development kotlin",
      "jetpack compose recomposition optimization",
      "android linux /proc parsing syslens tutorial",
      "kotlin coroutines stateflow reactive course",
    ],
    learningOutcomes: [
      "Master Kotlin Coroutine Dispatchers (`Dispatchers.IO`, `Main`, `Default`) and structured cancellation",
      "Optimize Jetpack Compose recompositions with `@Stable`, `@Immutable`, and `derivedStateOf`",
      "Read and parse low-level Android Linux kernel files (`/proc/cpuinfo`, `/proc/meminfo`, `/proc/stat`)",
      "Architect enterprise Android applications with Clean Architecture, MVVM, and Room migrations",
      "Profile CPU memory allocations and leak prevention using Android Studio Memory Profiler",
    ],
    prerequisites: ["Kotlin basics or Java programming knowledge."],
    modules: [
      {
        id: "android-ch-1",
        title: "Chapter 1: Linux Kernel Metrics Parsing on Android (The SysLens Architecture)",
        description: "Reading /proc virtual filesystem, calculating real CPU load, and battery discharge rates.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "linux-proc-parsing-android",
            title: "Parsing Linux `/proc` Tables for Low-Level Hardware Auditing",
            tagline: "How KWAS SysLens extracts real-time CPU frequencies, memory, and kernel metrics",
            duration: "35 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["android /proc parsing kotlin", "calculate cpu usage /proc/stat android", "kwas syslens architecture"],
            content: `
## 1. The Virtual Filesystem (\`/proc\`) on Android

Android is built on top of the **Linux Kernel**. Hardware metrics and kernel state are exposed as pseudo-files in the \`/proc\` and \`/sys\` virtual filesystems.

---

## 2. Calculating Real CPU Utilization from \`/proc/stat\`

The \`/proc/stat\` file contains cumulative CPU ticks across user, nice, system, idle, iowait, irq, and softirq:
\`\`\`
cpu  4705 356 584 36417 512 0 12 0 0 0
\`\`\`

To calculate real-time CPU percentage without root:
1. Take sample $T_1$: Calculate $\\text{Total}_1$ ticks and $\\text{Idle}_1$ ticks.
2. Wait $\\Delta t = 500\\text{ms}$.
3. Take sample $T_2$: Calculate $\\text{Total}_2$ ticks and $\\text{Idle}_2$ ticks.
4. Calculate CPU Load:
$$\\text{CPU \\%} = \\left(1 - \\frac{\\text{Idle}_2 - \\text{Idle}_1}{\\text{Total}_2 - \\text{Total}_1}\\right) \\times 100$$
            `,
            codeSnippet: {
              language: "javascript",
              code: `// Simulation of KWAS SysLens /proc/stat CPU Calculation Algorithm
function calculateCpuUsage(sample1, sample2) {
  const total1 = sample1.reduce((a, b) => a + b, 0);
  const idle1 = sample1[3]; // 4th field is idle ticks

  const total2 = sample2.reduce((a, b) => a + b, 0);
  const idle2 = sample2[3];

  const totalDelta = total2 - total1;
  const idleDelta = idle2 - idle1;

  const usagePercent = (1 - (idleDelta / totalDelta)) * 100;
  return Math.max(0, Math.min(100, usagePercent));
}

// Sample 1 (User, Nice, System, Idle, IOWait)
const s1 = [1000, 200, 400, 8000, 100];
// Sample 2 (Taken 500ms later)
const s2 = [1050, 210, 430, 8100, 110];

const cpuLoad = calculateCpuUsage(s1, s2);
console.log(\`KWAS SysLens Real CPU Load: \${cpuLoad.toFixed(2)}%\`);`,
              description: "Run this code to test the exact mathematical formula used in KWAS SysLens for CPU auditing.",
            },
            exercise: {
              instruction: "Create a function `parseMemInfo(rawText)` that extracts `MemTotal` and `MemAvailable` in MB from simulated `/proc/meminfo` text.",
              initialCode: `// Write parseMemInfo here:
function parseMemInfo(rawText) {
  // TODO: parse MemTotal and MemAvailable
}

const mockMem = "MemTotal:        8192000 kB\\nMemAvailable:    4096000 kB";
console.log(parseMemInfo(mockMem));
`,
              solutionCode: `function parseMemInfo(rawText) {
  const totalMatch = rawText.match(/MemTotal:\\s+(\\d+)/);
  const availMatch = rawText.match(/MemAvailable:\\s+(\\d+)/);
  const totalMb = totalMatch ? Math.round(Number(totalMatch[1]) / 1024) : 0;
  const availMb = availMatch ? Math.round(Number(availMatch[1]) / 1024) : 0;
  return { totalMb, availMb, usedMb: totalMb - availMb };
}

const mockMem = "MemTotal:        8192000 kB\\nMemAvailable:    4096000 kB";
console.log(parseMemInfo(mockMem));`,
              language: "javascript",
              hint: "Use regex match /MemTotal:\\s+(\\d+)/ and divide kB by 1024.",
            },
            quiz: [
              {
                question: "Why can applications on Android read `/proc/stat` and `/proc/meminfo` without needing root permissions?",
                options: [
                  { text: "They are world-readable virtual files exposed by the Linux kernel", isCorrect: true, explanation: "Correct! The Linux kernel exposes non-sensitive system counters with public read permissions." },
                  { text: "Because Android does not use Linux permissions", isCorrect: false, explanation: "Android strictly enforces Linux DAC and SELinux." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "html5-css3-tailwind-mastery",
    title: "Modern Web UI Engineering: CSS Grid, Animations & Tailwind Design Systems",
    shortTitle: "HTML, CSS & Tailwind",
    tagline: "CSS Grid architecture, subgrid, container queries, hardware-accelerated animations & Tailwind",
    description:
      "Master the presentation layer of the modern web. Learn CSS Grid 2D layouts, CSS subgrid, container queries, hardware-accelerated GPU transitions, accessibility (WCAG/ARIA), and scalable design systems with Tailwind CSS.",
    iconName: "Palette",
    badgeColor: "text-rose-400 border-rose-400/30 bg-rose-400/10",
    category: "Languages",
    duration: "20 Hours",
    totalLessons: 15,
    featured: false,
    seoDescription:
      "Modern HTML5, CSS Grid, Container Queries, and Tailwind CSS design systems tutorial. Master responsive web design and performance.",
    seoKeywords: [
      "css grid subgrid container queries tutorial",
      "tailwind css design system masterclass",
      "responsive web layout step by step w3schools style",
      "hardware accelerated css animations",
    ],
    learningOutcomes: [
      "Build complex 2D responsive magazine layouts using CSS Grid and subgrid",
      "Create modular components that adapt to parent containers with CSS Container Queries",
      "Optimize CSS rendering performance avoiding layout thrashing with `transform` and `opacity`",
      "Build scalable utility-first design systems and theme tokens with Tailwind CSS",
    ],
    prerequisites: ["Basic HTML understanding."],
    modules: [
      {
        id: "html-ch-1",
        title: "Chapter 1: Modern Layouts: CSS Grid & Container Queries",
        description: "2D layout systems, auto-fit/auto-fill, and container-responsive design.",
        level: "Intermediate (30-70%)",
        lessons: [
          {
            slug: "css-grid-and-container-queries",
            title: "CSS Grid 2D Layouts & Container Queries (\`@container\`)",
            tagline: "Component-driven responsive design beyond viewport media queries",
            duration: "25 min",
            level: "Intermediate (30-70%)",
            seoKeywords: ["css grid auto fit auto fill", "css container queries tutorial", "modern responsive web design"],
            content: `
## 1. The Power of CSS Grid

While Flexbox is 1-dimensional (row OR column), **CSS Grid** is fully 2-dimensional (rows AND columns simultaneously).

\`\`\`css
.grid-container {
  display: grid;
  /* Automatically wraps columns to fit available width without media queries! */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
\`\`\`

---

## 2. Container Queries: The Future of Modular CSS

Media queries (\`@media\`) check the **entire viewport width**. But modern UI design is built from reusable components that should adapt to the width of their **parent container**!

\`\`\`css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 450px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`
            `,
            codeSnippet: {
              language: "html",
              code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0b0f17; color: #f1f5f9; padding: 24px; }
    .grid-layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }
    .grid-item {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 20px;
      border-radius: 12px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .grid-item:hover {
      transform: translateY(-4px);
      border-color: #f59e0b;
    }
    .badge { color: #f59e0b; font-size: 11px; font-weight: bold; font-family: monospace; }
  </style>
</head>
<body>
  <div class="grid-layout">
    <div class="grid-item">
      <span class="badge">ACADEMY</span>
      <h3>JavaScript</h3>
      <p>V8 &amp; Event Loop</p>
    </div>
    <div class="grid-item">
      <span class="badge">ACADEMY</span>
      <h3>Python</h3>
      <p>CPython &amp; FastAPI</p>
    </div>
    <div class="grid-item">
      <span class="badge">ACADEMY</span>
      <h3>REST APIs</h3>
      <p>JWT &amp; Rate Limits</p>
    </div>
  </div>
</body>
</html>`,
              description: "Live responsive CSS Grid interactive playground render.",
            },
            exercise: {
              instruction: "Add a 4th card for 'Android Systems' to the `.grid-layout` with badge 'ACADEMY' and text 'Kernel & /proc'.",
              initialCode: `<div class="grid-layout">
  <div class="grid-item">
    <span class="badge">ACADEMY</span>
    <h3>JavaScript</h3>
  </div>
  <!-- TODO: Add 4th item -->
</div>`,
              solutionCode: `<div class="grid-layout">
  <div class="grid-item">
    <span class="badge">ACADEMY</span>
    <h3>JavaScript</h3>
  </div>
  <div class="grid-item">
    <span class="badge">ACADEMY</span>
    <h3>Android Systems</h3>
    <p>Kernel & /proc</p>
  </div>
</div>`,
              language: "html",
              hint: "Add a new <div class='grid-item'>...</div> inside .grid-layout.",
            },
            quiz: [
              {
                question: "Which CSS Grid function dynamically generates columns that adjust based on min/max constraints without requiring media queries?",
                options: [
                  { text: "repeat(auto-fit, minmax(...))", isCorrect: true, explanation: "Correct! auto-fit with minmax calculates the maximum number of flexible tracks that fit." },
                  { text: "grid-column-span", isCorrect: false, explanation: "grid-column-span sets the track width of a specific child item." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "linux-cli-bash-devops-mastery",
    title: "Linux Systems, Bash Automation & Azure VPS DevOps",
    shortTitle: "Linux & DevOps",
    tagline: "Linux VFS, Bash automation, signal traps, systemd services & Nginx SSL reverse proxies",
    description:
      "Master the operating system that powers global internet infrastructure. Learn Linux Virtual File System internals, advanced Bash scripting with signal trapping, managing systemd daemon unit files, SSH key hardening, UFW firewalls, and configuring Nginx reverse proxies on Azure Ubuntu VPS.",
    iconName: "Terminal",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    category: "DevOps & Linux",
    duration: "24 Hours",
    totalLessons: 16,
    featured: false,
    seoDescription:
      "Linux terminal, Bash scripting, and Cloud DevOps masterclass. Learn systemd, Nginx reverse proxy, and Azure Ubuntu VPS administration.",
    seoKeywords: [
      "linux terminal bash scripting tutorial a to z",
      "systemd service unit file configuration guide",
      "nginx reverse proxy ssl setup ubuntu",
      "azure ubuntu vps administration course",
    ],
    learningOutcomes: [
      "Understand Linux Virtual File System (VFS), file descriptors, inodes, and permission bitmasks",
      "Write automated production Bash scripts with error handling, traps, and arguments",
      "Create, enable, and monitor background system daemons using systemd unit files",
      "Configure Nginx reverse proxies with SSL termination, HTTP/2, and security headers on Azure VPS",
    ],
    prerequisites: ["None. Beginner to Advanced progression."],
    modules: [
      {
        id: "linux-ch-1",
        title: "Chapter 1: Linux VFS & Production Bash Automation",
        description: "Inodes, standard streams, signal traps, and systemd daemons.",
        level: "Advanced & Production (70-100%)",
        lessons: [
          {
            slug: "bash-automation-and-systemd",
            title: "Production Bash Scripting with Signal Traps & Custom Systemd Daemons",
            tagline: "Automating server operations and managing long-running background services",
            duration: "30 min",
            level: "Advanced & Production (70-100%)",
            seoKeywords: ["bash script signal traps", "create systemd service unit file", "linux server automation tutorial"],
            content: `
## 1. Robust Bash Scripting Standards

Production bash scripts must fail fast and clean up temporary resources on exit. Always start production scripts with **strict mode**:
\`\`\`bash
#!/bin/bash
set -euo pipefail # -e: exit on error, -u: error on unset var, -o pipefail: fail pipelines
\`\`\`

### Signal Trapping (\`trap\`)
The \`trap\` built-in registers cleanup handlers that execute whenever the script exits or receives a termination signal (\`SIGINT\`, \`SIGTERM\`):
\`\`\`bash
cleanup() {
  echo "🧹 Removing temporary build artifacts..."
  rm -f /tmp/build_*.sock
}
trap cleanup EXIT INT TERM
\`\`\`

---

## 2. Managing Services with Systemd (\`.service\` Unit)

To run your API or tool as a permanent background service that auto-restarts on server reboot, create \`/etc/systemd/system/kwas-api.service\`:
\`\`\`ini
[Unit]
Description=KWAS Technologies Backend API Service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/var/www/kwas-tech
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
\`\`\`
            `,
            codeSnippet: {
              language: "bash",
              code: `#!/bin/bash
# KWAS Server Automated Health Diagnostic Script
set -euo pipefail

echo "=========================================="
echo "🛡️ KWAS AZURE VPS HEALTH AUDIT REPORT"
echo "=========================================="
echo "Hostname:    $(hostname)"
echo "Kernel:      $(uname -r)"
echo "Uptime:      $(uptime -p)"
echo "Architecture: $(uname -m)"
echo "Disk Free:   $(df -h / | awk 'NR==2{print $4 " available (" $5 " used)"}')"
echo "Status:      100% Operational & Secure"
echo "=========================================="`,
              description: "Run this code to inspect production bash script execution.",
            },
            exercise: {
              instruction: "Write a bash command to enable and start a systemd service named 'kwas-api'.",
              initialCode: `# Write bash command:
# TODO: enable and start kwas-api service
`,
              solutionCode: `sudo systemctl enable --now kwas-api`,
              language: "bash",
              hint: "Use sudo systemctl enable --now kwas-api (or enable then start).",
            },
            quiz: [
              {
                question: "What does `set -e` at the start of a Bash script do?",
                options: [
                  { text: "Causes the script to exit immediately if any command returns a non-zero exit status", isCorrect: true, explanation: "Correct! set -e prevents cascading errors by stopping execution on failure." },
                  { text: "Encrypts the bash script", isCorrect: false, explanation: "set -e is an error handling flag." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

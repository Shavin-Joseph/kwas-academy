import { Course } from "@/types";

export const javascriptCourse: Course = {
  id: "course-javascript",
  slug: "javascript",
  title: "JavaScript Complete Professional Reference",
  tagline: "Master modern ECMAScript from core syntax to closures, asynchronous programming, event loop, and web APIs.",
  description: "The complete JavaScript curriculum: variables, data types, scoping, functions, array methods, DOM manipulation, promises, async/await, closures, prototypes, event loop mechanics, and modular software architecture.",
  category: "Programming Languages",
  level: "Beginner",
  estimatedHours: 30,
  icon: "Code2",
  badgeColor: "amber",
  prerequisites: ["HTML & CSS Fundamentals"],
  skillsGained: [
    "Modern ES6+ Syntax (let/const, arrow functions, destructuring)",
    "Asynchronous JS (Promises, async/await, Fetch API)",
    "DOM & Event-Driven Architecture",
    "Closures & Scope Chain Execution Contexts",
    "The Event Loop, Microtasks & Macrotasks",
    "Object-Oriented & Functional JavaScript Patterns",
  ],
  featured: true,
  modules: [
    {
      id: "mod-js-1",
      slug: "intro",
      title: "Module 1: JavaScript Engine & V8 Architecture",
      description: "How V8 parses, compiles (JIT), and executes JavaScript code.",
      lessons: [
        {
          id: "js-intro",
          slug: "js-introduction",
          courseSlug: "javascript",
          moduleSlug: "intro",
          title: "JavaScript Introduction & Execution Engine",
          description: "Understand how JavaScript runs inside the browser and Node.js runtime engines.",
          durationMinutes: 12,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "How the V8 JavaScript engine parses and compiles code",
            "Variable declarations: const vs let vs var",
            "Template literals and string interpolation",
          ],
          introduction: `JavaScript is the ubiquitous programming language of the web platform. It executes inside web browsers, server environments, and mobile runtimes.`,
          whyItMatters: `JavaScript transforms static documents into living, interactive applications.`,
          mainExample: {
            title: "Modern JavaScript Script",
            language: "javascript",
            code: `const platform = "KWAS Academy";\nconst studentCount = 12000;\n\nfunction getWelcomeMessage(user) {\n  return \`Welcome to \${platform}, \${user}! Join \${studentCount.toLocaleString()} engineers.\`;\n}\n\nconsole.log(getWelcomeMessage("Alex Developer"));`,
            executable: true,
            explanation: ["const declares block-scoped variables.", "Template literals interpolate values."],
          },
          detailedExplanation: ["JavaScript engines use JIT compilation to optimize hot code paths during runtime."],
          commonMistakes: [],
          bestPractices: ["Use const by default for all variable declarations."],
          summary: ["JavaScript powers the interactive computing layer of the web."],
        },
      ],
    },
    {
      id: "mod-js-2",
      slug: "variables-types",
      title: "Module 2: Variables, Data Types & Immutability",
      description: "Primitives, heap references, memory pointers, type coercion, and immutability.",
      lessons: [
        {
          id: "js-variables",
          slug: "js-variables",
          courseSlug: "javascript",
          moduleSlug: "variables-types",
          title: "Primitives vs References & Immutability",
          description: "Deep dive into 7 primitive types, reference pointers, memory management, and immutability.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The 7 JavaScript primitives",
            "How reference types (objects, arrays) point to heap memory",
            "Cloning objects immutably using spread and structuredClone()",
          ],
          introduction: `Data in JavaScript is divided into stack-stored Primitives and heap-stored Reference Types.`,
          whyItMatters: `Accidentally mutating a reference object in React or Vue state causes bugs where UI fails to re-render.`,
          mainExample: {
            title: "Immutable Array & Object Updates",
            language: "javascript",
            code: `const original = { user: "Alex", tasks: ["HTML", "CSS"] };\nconst updated = { ...original, tasks: [...original.tasks, "JS"] };\nconsole.log("Original tasks:", original.tasks.length);\nconsole.log("Updated tasks:", updated.tasks.length);`,
            executable: true,
            explanation: ["Spread operator creates shallow clones, preserving original immutability."],
          },
          detailedExplanation: ["Primitives are compared by value; reference types by memory address."],
          commonMistakes: [],
          bestPractices: ["Always use strict equality === instead of loose ==."],
          summary: ["Understanding memory references is essential for state-driven application development."],
        },
      ],
    },
    {
      id: "mod-js-3",
      slug: "control-flow",
      title: "Module 3: Operators, Conditionals & Control Flow",
      description: "Arithmetic, logical short-circuiting, ternary operator, switch, and loops.",
      lessons: [
        {
          id: "js-control",
          slug: "operators-and-control-flow",
          courseSlug: "javascript",
          moduleSlug: "control-flow",
          title: "Logical Short-Circuiting & Modern Control Flow",
          description: "Master ternary operators, nullish coalescing (??), optional chaining (?.), and modern loops.",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Short-circuit evaluation with && and ||",
            "Nullish coalescing (??) vs OR (||) fallback",
            "Safe property access with optional chaining (?.)",
          ],
          introduction: `Modern JavaScript provides expressive operators for safe property navigation and default fallback handling.`,
          whyItMatters: `Optional chaining (?.) prevents fatal 'Cannot read properties of undefined' crashes when navigating nested API payloads.`,
          mainExample: {
            title: "Optional Chaining & Nullish Coalescing",
            language: "javascript",
            code: `const userResponse = { profile: { name: "Alex" } };\nconst city = userResponse.profile?.address?.city ?? "Remote / Unknown";\nconsole.log("City:", city);`,
            executable: true,
            explanation: ["Optional chaining prevents crashes on missing address object."],
          },
          detailedExplanation: ["?? only falls back for null or undefined, preserving valid values like 0 or false."],
          commonMistakes: [],
          bestPractices: ["Use ?? instead of || when default numeric 0 or boolean false values are valid."],
          summary: ["Modern operators streamline conditional logic and prevent null pointer crashes."],
        },
      ],
    },
    {
      id: "mod-js-4",
      slug: "functions-scope",
      title: "Module 4: Functions, Arrow Syntax & Scopes",
      description: "Function declarations, expressions, arrow functions, lexical this, and default parameters.",
      lessons: [
        {
          id: "js-functions",
          slug: "functions-and-arrow-syntax",
          courseSlug: "javascript",
          moduleSlug: "functions-scope",
          title: "Functions, Arrow Functions & Lexical 'this'",
          description: "Understand higher-order functions, arrow syntax, rest parameters, and lexical 'this' binding.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Standard function declarations vs concise arrow functions",
            "How arrow functions inherit 'this' from surrounding lexical scope",
            "Rest parameters (...args) and default argument values",
          ],
          introduction: `Functions are first-class citizens in JavaScript: they can be assigned to variables, passed as arguments, and returned from other functions.`,
          whyItMatters: `Arrow functions simplify functional programming methods like .map(), .filter(), and .reduce().`,
          mainExample: {
            title: "Higher-Order Function with Arrow Syntax",
            language: "javascript",
            code: `const calculateTotal = (taxRate = 0.08, ...prices) => {\n  const subtotal = prices.reduce((acc, p) => acc + p, 0);\n  return subtotal * (1 + taxRate);\n};\n\nconsole.log("Total: $" + calculateTotal(0.08, 100, 50, 25).toFixed(2));`,
            executable: true,
            explanation: ["Rest parameters (...prices) gather arguments into an array."],
          },
          detailedExplanation: ["Arrow functions do not have their own 'this', 'arguments', or 'prototype' bindings."],
          commonMistakes: [],
          bestPractices: ["Use arrow functions for callbacks and pure utility helpers."],
          summary: ["First-class functions empower functional programming patterns in JavaScript."],
        },
      ],
    },
    {
      id: "mod-js-5",
      slug: "data-structures",
      title: "Module 5: Objects, Arrays & Modern ES6+ Methods",
      description: "Array iteration (map, filter, reduce, find), Sets, Maps, and object destructuring.",
      lessons: [
        {
          id: "js-arrays-objects",
          slug: "arrays-maps-and-sets",
          courseSlug: "javascript",
          moduleSlug: "data-structures",
          title: "Array Methods (map/filter/reduce), Maps & Sets",
          description: "Transform collections with map, filter, and reduce, and leverage high-performance Map and Set collections.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Data transformation pipelines with .map(), .filter(), and .reduce()",
            "Unique collections with Set for O(1) deduplication",
            "Key-value indexing with Map supporting non-string keys",
          ],
          introduction: `Modern JavaScript provides high-performance data structures: Arrays for ordered sequences, Sets for unique values, and Maps for arbitrary key-value mappings.`,
          whyItMatters: `Deduplicating an array with new Set(arr) runs in O(n) time compared to O(n²) nested loop searches.`,
          mainExample: {
            title: "Array Transformation & Set Deduplication",
            language: "javascript",
            code: `const rawTags = ["react", "nextjs", "react", "typescript", "nextjs"];\nconst uniqueTags = [...new Set(rawTags)];\nconsole.log("Unique Tags:", uniqueTags);\n\nconst scores = [85, 92, 78, 96];\nconst avg = scores.reduce((acc, s) => acc + s, 0) / scores.length;\nconsole.log("Average Score:", avg);`,
            executable: true,
            explanation: ["new Set() automatically removes duplicate values."],
          },
          detailedExplanation: ["Map and Set provide O(1) average time complexity for insertions and lookups."],
          commonMistakes: [],
          bestPractices: ["Use Map over plain objects when keys are dynamic or non-string types."],
          summary: ["Collections and functional methods enable concise, expressive data transformations."],
        },
      ],
    },
    {
      id: "mod-js-6",
      slug: "dom-events",
      title: "Module 6: DOM Manipulation & Event-Driven Programming",
      description: "querySelector, element creation, event bubbling, capturing, and delegation.",
      lessons: [
        {
          id: "js-dom",
          slug: "dom-manipulation-and-events",
          courseSlug: "javascript",
          moduleSlug: "dom-events",
          title: "DOM Traversal & Event Delegation Architecture",
          description: "Manipulate DOM nodes, listen for user interactions, and optimize event listeners with event delegation.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Traversing and mutating DOM nodes efficiently",
            "Event bubbling and capturing phases",
            "Event delegation to manage 1,000+ dynamic child elements with 1 listener",
          ],
          introduction: `The Document Object Model (DOM) is an object-oriented representation of the web page. JavaScript uses events to react to user clicks, keyboard strokes, and scroll interactions.`,
          whyItMatters: `Event delegation attaches a single listener to a parent element rather than attaching hundreds of listeners to individual children, saving significant memory.`,
          mainExample: {
            title: "Event Delegation on Dynamic List",
            language: "javascript",
            code: `// Single listener on parent\ndocument.getElementById("todo-list")?.addEventListener("click", (e) => {\n  const target = e.target;\n  if (target.matches("button.delete-btn")) {\n    target.closest("li")?.remove();\n    console.log("Task deleted.");\n  }\n});`,
            executable: false,
            explanation: ["Event bubbles up from button to parent ul, triggering the delegated handler."],
          },
          detailedExplanation: ["Event delegation works automatically for newly inserted dynamic elements."],
          commonMistakes: [],
          bestPractices: ["Always prefer addEventListener over inline onclick attributes."],
          summary: ["Event delegation provides scalable, high-performance DOM event handling."],
        },
      ],
    },
    {
      id: "mod-js-7",
      slug: "async-js",
      title: "Module 7: Asynchronous JavaScript, Promises & Async/Await",
      description: "The Event Loop, Microtasks, Promises, and async/await error handling.",
      lessons: [
        {
          id: "js-async-await",
          slug: "async-await-and-promises",
          courseSlug: "javascript",
          moduleSlug: "async-js",
          title: "Promises, Async/Await & Error Handling",
          description: "Understand asynchronous programming, Promise states (pending, fulfilled, rejected), and clean async/await try/catch patterns.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How asynchronous operations avoid freezing the main browser thread",
            "Promise chaining vs modern async/await syntax",
            "Robust error handling with try/catch blocks",
          ],
          introduction: `JavaScript is single-threaded. To perform time-consuming tasks like network requests without freezing the UI, JavaScript relies on asynchronous Promises.`,
          whyItMatters: `Async/await is the industry standard for communicating with backend APIs and databases.`,
          mainExample: {
            title: "Async API Request with try/catch",
            language: "javascript",
            code: `async function fetchUserProfile(userId) {\n  try {\n    console.log(\`Fetching profile for user \${userId}...\`);\n    const mockUser = { id: userId, name: "Alex Dev" };\n    return mockUser;\n  } catch (error) {\n    console.error("Network request failed:", error.message);\n  }\n}`,
            executable: true,
            explanation: ["await pauses execution of the async function until the promise settles."],
          },
          detailedExplanation: ["Promises exist in 1 of 3 states: Pending, Fulfilled, or Rejected."],
          commonMistakes: [],
          bestPractices: ["Always wrap await calls in try/catch blocks to handle network failures."],
          summary: ["async/await provides clean, readable asynchronous JavaScript code."],
        },
      ],
    },
    {
      id: "mod-js-8",
      slug: "closures",
      title: "Module 8: Closures, Lexical Scope & Private Variables",
      description: "Execution contexts, call stack, closures, and data encapsulation.",
      lessons: [
        {
          id: "js-closures",
          slug: "closures-and-scope",
          courseSlug: "javascript",
          moduleSlug: "closures",
          title: "Closures, Lexical Scope & Private Variables",
          description: "Master lexical scope, closure mechanics, function factories, and encapsulating private state.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "What a closure is and how it preserves its lexical scope chain",
            "Creating encapsulated private state without classes",
            "Memory lifecycle and avoiding closure memory leaks",
          ],
          introduction: `A closure is the combination of a function bundled together with references to its surrounding state.`,
          whyItMatters: `Closures power React hooks (like useState), currying, and private state across modern JavaScript architectures.`,
          mainExample: {
            title: "Private Counter with Closure",
            language: "javascript",
            code: `function createAccount(initialBalance) {\n  let balance = initialBalance; // Private encapsulated variable\n  return {\n    deposit(amount) {\n      balance += amount;\n      return \`Balance: $\${balance}\`;\n    },\n    getBalance() { return balance; }\n  };\n}\n\nconst acc = createAccount(100);\nconsole.log(acc.deposit(50)); // $150\nconsole.log(acc.balance); // undefined (Private)`,
            executable: true,
            explanation: ["balance is encapsulated securely in the closure."],
          },
          detailedExplanation: ["Inner functions retain references to outer scope variables even after the outer function finishes."],
          commonMistakes: [],
          bestPractices: ["Use closures for private state encapsulation and memoization."],
          summary: ["Closures enable powerful state encapsulation in JavaScript."],
        },
      ],
    },
    {
      id: "mod-js-9",
      slug: "oop-prototypes",
      title: "Module 9: Object-Oriented JS, Prototypes & Classes",
      description: "Prototype chain, ES6 class syntax, inheritance, getters/setters, and static methods.",
      lessons: [
        {
          id: "js-classes",
          slug: "classes-and-prototypes",
          courseSlug: "javascript",
          moduleSlug: "oop-prototypes",
          title: "ES6 Classes, Inheritance & Prototype Chains",
          description: "Design modular object-oriented systems with ES6 classes, super constructors, and static methods.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How JavaScript's prototypal inheritance works under the hood",
            "Class syntax: constructor, methods, getters, and setters",
            "Extending base classes with extends and super()",
          ],
          introduction: `JavaScript classes provide clean syntactic sugar over prototype-based inheritance. Classes allow you to define structured blueprints for creating object instances.`,
          whyItMatters: `Classes are widely used in backend ORMs, game development, and enterprise data models.`,
          mainExample: {
            title: "Class Hierarchy with Inheritance",
            language: "javascript",
            code: `class User {\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n  }\n  getInfo() {\n    return \`\${this.name} (\${this.email})\`;\n  }\n}\n\nclass AdminUser extends User {\n  constructor(name, email, permissions) {\n    super(name, email);\n    this.permissions = permissions;\n  }\n}\n\nconst admin = new AdminUser("Kenneth", "ken@kwas.dev", ["ALL"]);\nconsole.log(admin.getInfo());`,
            executable: true,
            explanation: ["super() calls the parent constructor, establishing inheritance."],
          },
          detailedExplanation: ["Every JavaScript object has an internal [[Prototype]] link to its parent prototype object."],
          commonMistakes: [],
          bestPractices: ["Use class syntax over manual Object.prototype mutation."],
          summary: ["Classes provide clean, structured blueprints for object-oriented systems."],
        },
      ],
    },
    {
      id: "mod-js-10",
      slug: "web-apis",
      title: "Module 10: Web APIs, Fetch & Browser Storage",
      description: "Fetch API, AbortController, URLSearchParams, IntersectionObserver, and Web Workers.",
      lessons: [
        {
          id: "js-fetch-apis",
          slug: "fetch-api-and-browser-features",
          courseSlug: "javascript",
          moduleSlug: "web-apis",
          title: "The Fetch API, AbortController & Web APIs",
          description: "Perform HTTP network requests, cancel requests with AbortController, and observe element visibility with IntersectionObserver.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Making GET/POST requests with fetch() and headers",
            "Canceling stale requests with AbortController",
            "IntersectionObserver for infinite scroll and lazy loading",
          ],
          introduction: `Browsers provide powerful Web APIs for networking, device sensor access, audio manipulation, and background multithreading.`,
          whyItMatters: `Using AbortController prevents race conditions in search input autocomplete where fast typers receive out-of-order responses.`,
          mainExample: {
            title: "Cancellable Fetch Request with AbortController",
            language: "javascript",
            code: `const controller = new AbortController();\n\nasync function searchData(query) {\n  try {\n    // Cancel previous pending request\n    controller.abort();\n    console.log("Searching for:", query);\n  } catch (err) {\n    console.log("Request aborted safely.");\n  }\n}\n\nsearchData("TypeScript");`,
            executable: true,
            explanation: ["AbortController cancels in-flight network requests cleanly."],
          },
          detailedExplanation: ["IntersectionObserver notifies your script when elements enter the screen without polling onScroll."],
          commonMistakes: [],
          bestPractices: ["Always check response.ok on fetch calls before parsing JSON."],
          summary: ["Web APIs expand JavaScript with high-performance browser platform capabilities."],
        },
      ],
    },
    {
      id: "mod-js-11",
      slug: "modules-performance",
      title: "Module 11: Modular JavaScript, Tooling & Performance",
      description: "ES Modules (import/export), tree-shaking, memory leak prevention, and performance profiling.",
      lessons: [
        {
          id: "js-modules",
          slug: "es-modules-and-performance",
          courseSlug: "javascript",
          moduleSlug: "modules-performance",
          title: "ES Modules & Memory Optimization",
          description: "Organize large software systems with ES Modules (import/export), avoid memory leaks, and profile execution performance.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Named exports vs default exports in ES Modules",
            "How bundlers (Webpack, Vite, Turbopack) perform tree-shaking to eliminate dead code",
            "Identifying and fixing memory leaks (dangling event listeners, detached DOM nodes)",
          ],
          introduction: `ES Modules (ESM) are the official standard module format in JavaScript. They allow codebases to be partitioned into independent, reusable files with explicit dependency trees.`,
          whyItMatters: `Static import/export syntax allows modern bundlers to remove unused functions (tree-shaking), reducing client bundle size by up to 70%.`,
          mainExample: {
            title: "ES Module Named Exports",
            language: "javascript",
            code: `// mathUtils.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n\n// main.js\n// import { add } from './mathUtils.js';\nconsole.log("Modules enable isolated, reusable software packages.");`,
            executable: true,
            explanation: ["Named exports allow bundlers to tree-shake and include only imported functions."],
          },
          detailedExplanation: ["Always remove event listeners when components unmount to avoid detached DOM node memory leaks."],
          commonMistakes: [],
          bestPractices: ["Favor named exports over default exports for better refactoring tools and autocompletion."],
          summary: ["Modular architecture and memory hygiene ensure fast, maintainable applications."],
        },
      ],
    },
    {
      id: "mod-js-12",
      slug: "v8-engine-turbofan-hidden-classes",
      title: "Module 12: V8 Engine Internals: Bytecode, TurboFan JIT & Hidden Classes",
      description: "Understand the V8 JavaScript engine: Ignition bytecode interpreter, TurboFan optimizing JIT compiler, and Hidden Classes (Shapes/Maps).",
      lessons: [
        {
          id: "js-v8-internals",
          slug: "v8-engine-ignition-turbofan-hidden-classes",
          courseSlug: "javascript",
          moduleSlug: "v8-engine-turbofan-hidden-classes",
          title: "V8 Engine Architecture: Ignition, TurboFan & Hidden Classes",
          description: "Discover how Google's V8 engine executes JavaScript: AST parsing, Ignition bytecode, Inline Caches (IC), TurboFan JIT compilation, and keeping object shapes monomorphic.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The V8 execution pipeline: JavaScript source → AST → Ignition Bytecode → TurboFan JIT Machine Code",
            "How V8 generates Hidden Classes (Shapes/Maps) to optimize dynamic property lookups",
            "Inline Caching (IC) and why Monomorphic call sites run up to 10x faster than Megamorphic sites",
            "Preventing JIT de-optimizations (bailouts) caused by mutating object property order",
          ],
          introduction: `JavaScript is dynamically typed, but modern JavaScript engines like Google V8 execute code at near-C++ speed. V8 achieves this using two compilation tiers: Ignition (a fast bytecode interpreter) and TurboFan (an optimizing Just-In-Time compiler) that speculatively compiles hot functions into native CPU machine instructions based on observed runtime type feedback.`,
          whyItMatters: `Writing code that cooperates with the V8 engine prevents unexpected JIT de-optimizations. Understanding Hidden Classes and Inline Caches is essential for performance-critical libraries, gaming engines, and high-throughput Node.js microservices.`,
          syntax: `// Monomorphic object creation\nfunction Point(x, y) {\n  this.x = x;\n  this.y = y;\n}`,
          mainExample: {
            title: "Monomorphic vs Megamorphic Object Shapes in V8",
            language: "javascript",
            code: `// V8 Engine Hidden Classes (Shapes/Maps) Optimization

// 1. Monomorphic Constructor: Always initializes properties in identical order
class MonomorphicUser {
  constructor(id, username, role) {
    this.id = id;         // Transition -> Shape 1
    this.username = username; // Transition -> Shape 2
    this.role = role;     // Transition -> Shape 3
  }
}

// 2. High-Performance Hot Function
function calculateUserHash(user) {
  // TurboFan inlines property offsets directly from the shared Hidden Class
  return user.id.length + user.username.length + user.role.length;
}

// Benchmark Setup
const users = [];
for (let i = 0; i < 100000; i++) {
  users.push(new MonomorphicUser("usr_" + i, "AlexDev", "Lead Architect"));
}

console.time("V8 Monomorphic Execution");
let total = 0;
for (let i = 0; i < users.length; i++) {
  total += calculateUserHash(users[i]);
}
console.timeEnd("V8 Monomorphic Execution");
console.log("Total Hash Sum:", total);`,
            executable: true,
            explanation: [
              "Every time MonomorphicUser is instantiated with properties added in identical order, all instances share the exact same V8 Hidden Class (Map).",
              "TurboFan generates optimized machine code with Inline Caches, reading properties directly via fixed memory offsets rather than performing hash-table lookups.",
              "If properties were deleted (`delete user.id`) or added dynamically in random order, V8 would fall back into slow dictionary mode.",
            ],
          },
          detailedExplanation: [
            "Inline Caching (IC) States: A call site is Monomorphic when it has observed only 1 Hidden Class (fastest, direct memory offset). It becomes Polymorphic when observing 2 to 4 shapes. It becomes Megamorphic when observing 5+ shapes, forcing V8 to abandon fast inline caching and perform slow hash table lookups.",
          ],
          commonMistakes: [
            {
              mistake: "Using the `delete` operator on high-frequency objects, forcing V8 into slow dictionary mode.",
              badCode: "delete user.temporaryToken; // Degrades object to slow hash table",
              goodCode: "user.temporaryToken = null; // Preserves Hidden Class shape",
              explanation: "The `delete` operator alters the object's transition tree and destroys its Hidden Class, slowing down all subsequent property accesses.",
            },
          ],
          bestPractices: [
            "Always initialize all object properties in constructors in the exact same order.",
            "Avoid using `delete` on hot objects; assign `null` or `undefined` instead.",
            "Keep functions monomorphic by passing objects with consistent shapes.",
          ],
          summary: [
            "V8 compiles JavaScript into bytecode via Ignition and hot native machine code via TurboFan.",
            "Hidden Classes (Maps) assign fixed memory offsets to object properties.",
            "Monomorphic functions enable Inline Caching for near-native execution speed.",
          ],
        },
      ],
    },
    {
      id: "mod-js-13",
      slug: "memory-gc-weakref",
      title: "Module 13: Memory Management: GC Generational Model & WeakRef",
      description: "Master V8 garbage collection (Scavenge, Mark-Sweep-Compact), WeakRef, FinalizationRegistry, and memory leak elimination.",
      lessons: [
        {
          id: "js-memory-gc",
          slug: "javascript-memory-management-gc-weakref-finalization",
          courseSlug: "javascript",
          moduleSlug: "memory-gc-weakref",
          title: "Memory Management, Generational GC & WeakRef",
          description: "Master V8 memory management: Young Generation (Scavenge/Semi-space) vs Old Generation (Mark-Sweep-Compact), weak memory references with `WeakRef`, and cleanup listeners with `FinalizationRegistry`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Generational Garbage Collection hypothesis: Young Generation vs Old Generation spaces",
            "How Minor GC (Scavenger Cheney algorithm) quickly reclaims short-lived objects",
            "Creating non-retaining memory caches using `WeakRef` and `WeakMap`",
            "Registering automatic resource cleanup callbacks using `FinalizationRegistry`",
          ],
          introduction: `JavaScript provides automatic memory management through tracing garbage collection. The V8 engine partitions heap memory into generations: the Young Generation (holding ephemeral, short-lived allocations) and the Old Generation (holding persistent long-lived objects). Modern ES2021+ introduces 'WeakRef' and 'FinalizationRegistry', giving developers fine-grained control over memory without preventing garbage collection.`,
          whyItMatters: `Unintended memory leaks (such as retained closures in event listeners or global cache maps) consume gigabytes of RAM, causing mobile browser crashes and Node.js server out-of-memory restarts.`,
          syntax: `const ref = new WeakRef(targetObject);\nconst target = ref.deref();\nconst registry = new FinalizationRegistry((heldValue) => { ... });`,
          mainExample: {
            title: "Zero-Memory-Leak Cache with WeakRef & FinalizationRegistry",
            language: "javascript",
            code: `// High-Performance Weak Cache Architecture
class MemorySafeCache {
  constructor() {
    this.cache = new Map();
    // FinalizationRegistry triggers cleanup when object is garbage-collected
    this.cleanupRegistry = new FinalizationRegistry((key) => {
      console.log(\`[GC Event] Reclaimed key '\${key}' from memory.\`);
      this.cache.delete(key);
    });
  }

  set(key, obj) {
    // Store a WeakRef: Does NOT prevent garbage collection!
    this.cache.set(key, new WeakRef(obj));
    // Register object with its key for post-mortem notification
    this.cleanupRegistry.register(obj, key);
  }

  get(key) {
    const weakRef = this.cache.get(key);
    if (!weakRef) return undefined;

    const value = weakRef.deref(); // Safely retrieve object if still alive
    if (value) {
      return value;
    } else {
      this.cache.delete(key);
      return undefined;
    }
  }
}

// Usage Simulation
const safeCache = new MemorySafeCache();
let heavyData = { title: "KWAS Architecture Report", payload: new Uint8Array(1024) };

safeCache.set("report_101", heavyData);
console.log("Cached Item Exists:", safeCache.get("report_101")?.title);

// Simulating unreferencing the object
heavyData = null; // Object is now eligible for GC reclamation!
console.log("Safe cache allows GC to free memory automatically without manual eviction policies.");`,
            executable: true,
            explanation: [
              "new WeakRef(obj) holds a weak reference to an object, allowing the garbage collector to reclaim its memory if no strong references remain.",
              "weakRef.deref() returns the referenced target object if it is still alive in memory, or undefined if it was collected.",
              "FinalizationRegistry registers a post-mortem callback that fires after the object has been destroyed by the GC.",
            ],
          },
          detailedExplanation: [
            "Young vs Old Generation in V8: Most allocated objects die young. V8 allocates new objects into the Young Space (1-64MB). A fast Minor GC (Scavenge) copies surviving objects between two semi-spaces. Objects that survive two Minor GC cycles are promoted to the Old Generation, which is managed by a Major GC (Mark-Sweep-Compact) running concurrently in the background.",
          ],
          commonMistakes: [
            {
              mistake: "Using standard Map as a global in-memory cache without an eviction strategy, leaking memory indefinitely.",
              badCode: "const globalCache = new Map(); globalCache.set(user, userMetadata);",
              goodCode: "const globalCache = new WeakMap(); globalCache.set(user, userMetadata);",
              explanation: "Standard Map holds strong references to both keys and values. WeakMap holds weak references to keys, allowing keys to be collected when no longer in use.",
            },
          ],
          bestPractices: [
            "Use `WeakMap` when associating metadata with DOM nodes or object instances.",
            "Use `WeakRef` for memory-sensitive caching where values can be safely recreated if evicted.",
            "Audit memory consumption using Chrome DevTools Heap Snapshots and Allocation Timelines.",
          ],
          summary: [
            "V8 partitions memory into Young Generation (Scavenge) and Old Generation (Mark-Sweep-Compact).",
            "`WeakRef` allows referencing objects without preventing garbage collection.",
            "`FinalizationRegistry` triggers cleanup actions after garbage collection.",
          ],
        },
      ],
    },
    {
      id: "mod-js-14",
      slug: "event-loop-microtasks-macrotasks",
      title: "Module 14: Event Loop Internals: Microtasks, Macrotasks & libuv Queues",
      description: "Master event loop phases, microtask checkpoints, `queueMicrotask()`, `requestAnimationFrame`, and `process.nextTick`.",
      lessons: [
        {
          id: "js-event-loop-internals",
          slug: "javascript-event-loop-microtasks-macrotasks-libuv",
          courseSlug: "javascript",
          moduleSlug: "event-loop-microtasks-macrotasks",
          title: "Event Loop Architecture: Microtasks, Macrotasks & Queues",
          description: "Explore the precise execution order of the JavaScript Event Loop: Call Stack, Microtask Queue (Promises, queueMicrotask), Macrotask Queue (Timers, I/O), and Rendering Frames.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The exact execution order of Synchronous code, Microtasks, Render Steps, and Macrotasks",
            "Why the Microtask queue completely drains before any next Macrotask or Render frame can execute",
            "Scheduling custom high-priority microtasks with `queueMicrotask()`",
            "Comparing browser event loop phases with Node.js libuv phases (Timers, Poll, Check/setImmediate)",
          ],
          introduction: `JavaScript executes on a single-threaded event loop. Understanding the deterministic hierarchy of how synchronous frames, microtasks (Promise continuations), render steps (requestAnimationFrame), and macrotasks (setTimeout, I/O) are scheduled is essential for mastering asynchronous JavaScript.`,
          whyItMatters: `Microtask starvation occurs when recursive Promise resolution freezes the main thread, preventing UI rendering and user click events from firing. Knowing how queues are prioritized prevents performance bottlenecks.`,
          syntax: `queueMicrotask(() => { ... });\nrequestAnimationFrame((time) => { ... });\nsetTimeout(() => { ... }, 0);`,
          mainExample: {
            title: "Predicting Execution Order Across Event Loop Queues",
            language: "javascript",
            code: `// Event Loop Priority Execution Sequence

console.log("1. [Synchronous] Main script start");

// 1. Macrotask (Timer Queue)
setTimeout(() => {
  console.log("6. [Macrotask] setTimeout callback executed");
}, 0);

// 2. Microtask via Promise
Promise.resolve().then(() => {
  console.log("3. [Microtask] Promise.then callback");
});

// 3. Microtask via queueMicrotask API
queueMicrotask(() => {
  console.log("4. [Microtask] Explicit queueMicrotask callback");
});

// 4. Nested Microtask scheduled from within a Microtask
Promise.resolve().then(() => {
  console.log("5. [Microtask] Chained microtask executed BEFORE any macrotask!");
});

console.log("2. [Synchronous] Main script end");

// Output Order:
// 1. [Synchronous] Main script start
// 2. [Synchronous] Main script end
// 3. [Microtask] Promise.then callback
// 4. [Microtask] Explicit queueMicrotask callback
// 5. [Microtask] Chained microtask executed BEFORE any macrotask!
// 6. [Macrotask] setTimeout callback executed`,
            executable: true,
            explanation: [
              "Synchronous code runs to completion first (Steps 1 & 2).",
              "Before yielding control to the Macrotask queue or browser paint engine, the Call Stack completely drains ALL pending Microtasks (Steps 3, 4 & 5).",
              "Only after the microtask queue is completely empty does the event loop pick the oldest task from the Macrotask queue (Step 6).",
            ],
          },
          detailedExplanation: [
            "Rendering Pipeline Intersection: In web browsers, the rendering pipeline (Style Recalculation, Layout, Paint, Compositing) runs between macrotasks—ONLY if a frame refresh is due (e.g. 60Hz/120Hz display tick). Microtasks run immediately after JavaScript execution, before layout and paint.",
          ],
          commonMistakes: [
            {
              mistake: "Creating infinite recursive microtasks (e.g., recursive Promise loops), starving the UI thread and freezing the page.",
              badCode: "function starve() { Promise.resolve().then(starve); }\nstarve();",
              goodCode: "function processChunks() { setTimeout(processNextChunk, 0); }",
              explanation: "Because microtasks must drain completely before the browser can render or process user clicks, recursive microtasks completely freeze the browser.",
            },
          ],
          bestPractices: [
            "Use `queueMicrotask()` when state updates must execute immediately after current synchronous code but before DOM rendering.",
            "Use `requestAnimationFrame()` for visual layout measurements and canvas animations.",
            "Use `setTimeout(fn, 0)` or `scheduler.yield()` to break long tasks into discrete chunks and keep UI responsive.",
          ],
          summary: [
            "Execution priority: Synchronous Stack → Microtasks → Render Pipeline → Macrotasks.",
            "Microtasks completely drain before the event loop advances to the next task.",
            "Break long computational tasks into macrotask chunks to avoid UI freezing.",
          ],
        },
      ],
    },
    {
      id: "mod-js-15",
      slug: "metaprogramming-proxy-reflect",
      title: "Module 15: Metaprogramming with Proxy, Reflect, Symbol & Private Brands",
      description: "Intercept and customize fundamental language operations with Proxy traps, Reflect methods, Well-Known Symbols, and brand checks.",
      lessons: [
        {
          id: "js-proxy-reflect",
          slug: "metaprogramming-proxy-reflect-symbols-brand-checks",
          courseSlug: "javascript",
          moduleSlug: "metaprogramming-proxy-reflect",
          title: "Metaprogramming with Proxy, Reflect & Brand Checking",
          description: "Customize fundamental JavaScript behavior: trap property access and mutations with Proxy, preserve receiver bindings with Reflect, and enforce private brand checks with `#privateField in obj`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Creating reactive state proxies using Proxy traps (`get`, `set`, `deleteProperty`, `apply`)",
            "Why `Reflect.get(target, prop, receiver)` is required to preserve prototype getter `this` contexts",
            "Customizing language semantics with Well-Known Symbols (`Symbol.iterator`, `Symbol.toPrimitive`, `Symbol.hasInstance`)",
            "Safe private brand checks using modern `#field in object` syntax",
          ],
          introduction: `Metaprogramming is the ability of code to inspect, intercept, and modify its own runtime behavior. JavaScript provides powerful metaprogramming primitives through the 'Proxy' and 'Reflect' APIs, allowing developers to build reactive state systems (like Vue 3 Reactivity), transparent RPC proxies, and validated domain models.`,
          whyItMatters: `Modern frontend frameworks (like Vue 3, MobX, and Solid) use Proxies to automatically track dependencies and trigger surgical DOM updates when properties change.`,
          syntax: `const proxy = new Proxy(target, {\n  get(target, prop, receiver) {\n    return Reflect.get(target, prop, receiver);\n  }\n});`,
          mainExample: {
            title: "Reactive Observable Store with Proxy and Reflect",
            language: "javascript",
            code: `// Reactive State Engine with Proxy & Reflect

function createObservableStore(initialState, onStateChange) {
  const handler = {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      // Recursively wrap nested objects to enable deep reactivity
      if (typeof value === 'object' && value !== null) {
        return new Proxy(value, handler);
      }
      return value;
    },

    set(target, prop, value, receiver) {
      const oldValue = target[prop];
      const result = Reflect.set(target, prop, value, receiver);

      if (oldValue !== value) {
        onStateChange(prop, value, oldValue);
      }
      return result;
    }
  };

  return new Proxy(initialState, handler);
}

// Demonstration
const store = createObservableStore(
  { user: { name: "Alex", points: 100 }, status: "ACTIVE" },
  (prop, newVal, oldVal) => {
    console.log(\`[Reactive Update] Property '\${prop}' changed from '\${oldVal}' -> '\${newVal}'\`);
  }
);

store.status = "VERIFIED";
store.user.points = 150; // Deep nested reactivity triggered!`,
            executable: true,
            explanation: [
              "new Proxy(initialState, handler) intercepts all read and write operations.",
              "Reflect.set ensures standard internal slot operations execute properly and returns a boolean indicating success.",
              "Passing the 'receiver' argument to Reflect ensures getters that use 'this' reference the proxy instance, not the raw target object.",
            ],
          },
          detailedExplanation: [
            "Private Brand Checks: Modern JavaScript classes support private fields (`#privateField`). To verify whether an arbitrary object is an authentic instance of a class without throwing an error, use `#privateField in object` (Brand Checking), providing foolproof encapsulation.",
          ],
          commonMistakes: [
            {
              mistake: "Using direct target[prop] access inside Proxy traps instead of Reflect.get(target, prop, receiver).",
              badCode: "get(target, prop) { return target[prop]; }",
              goodCode: "get(target, prop, receiver) { return Reflect.get(target, prop, receiver); }",
              explanation: "Direct target[prop] breaks prototype getters that rely on 'this' pointing to the proxy (the receiver).",
            },
          ],
          bestPractices: [
            "Always forward operations in Proxy traps using corresponding `Reflect` methods with the `receiver` argument.",
            "Use `Symbol.for('app.key')` to create global cross-realm symbols across iframes and workers.",
            "Use `#privateField in obj` for high-performance class brand checks.",
          ],
          summary: [
            "`Proxy` intercepts fundamental operations (get, set, apply, construct).",
            "`Reflect` provides standard default implementations and preserves receiver bindings.",
            "Well-Known Symbols allow overriding language behavior like iteration and type coercion.",
          ],
        },
      ],
    },
    {
      id: "mod-js-16",
      slug: "web-workers-transferable-shared-memory",
      title: "Module 16: Multi-Threading: Web Workers, Transferables & Atomics",
      description: "Achieve true multithreaded JavaScript with dedicated Web Workers, zero-copy Transferable Objects, and SharedArrayBuffer synchronization.",
      lessons: [
        {
          id: "js-web-workers-multithread",
          slug: "javascript-multithreading-web-workers-transferable-objects",
          courseSlug: "javascript",
          moduleSlug: "web-workers-transferable-shared-memory",
          title: "Multi-Threading: Web Workers & Transferable Objects",
          description: "Execute CPU-heavy algorithms in parallel without blocking the main UI thread using Web Workers, zero-copy ArrayBuffer transfer semantics, and Comlink RPC.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of Dedicated Web Workers vs Shared Workers",
            "Structured Cloning overhead vs Zero-Copy Transferable Objects (`postMessage(data, [data.buffer])`)",
            "OffscreenCanvas for hardware-accelerated 3D and chart rendering off the main thread",
            "Designing a parallel Worker Pool for load-balanced background tasks",
          ],
          introduction: `While JavaScript's main execution context is single-threaded, web browsers provide true multi-core parallel processing through Web Workers. Workers run in separate OS threads with their own memory heap, event loop, and global scope. By transferring binary ArrayBuffers rather than copying them, data can be passed between threads with zero memory duplication.`,
          whyItMatters: `Heavy computations (like image filtering, PDF generation, or cryptography) executed on the main thread block user interactions and cause UI lag. Web Workers offload these tasks to background CPU cores.`,
          syntax: `const worker = new Worker('worker.js', { type: 'module' });\nworker.postMessage(buffer, [buffer]); // Zero-copy transfer!`,
          mainExample: {
            title: "Zero-Copy Memory Transfer Between Main Thread and Worker",
            language: "javascript",
            code: `// Main Thread Script: Zero-Copy Binary Transfer Demonstration

// 1. Create a 32MB Binary Image Buffer on Main Thread
const imageSize = 32 * 1024 * 1024; // 32 Megabytes
const imageBuffer = new ArrayBuffer(imageSize);
const view = new Uint8Array(imageBuffer);
view.fill(255); // Fill buffer with test pixel bytes

console.log("Main Thread Buffer Length BEFORE Transfer:", imageBuffer.byteLength);

// 2. Simulated Web Worker Script (inlined as Blob)
const workerCode = \`
  self.onmessage = (event) => {
    const buffer = event.data;
    console.log("[Worker Thread] Received buffer. Processing on background core...");
    
    // Simulate image inversion calculation
    const u8 = new Uint8Array(buffer);
    for (let i = 0; i < u8.length; i += 4) {
      u8[i] = 255 - u8[i];
    }

    // Transfer modified buffer BACK to main thread with ZERO memory copy!
    self.postMessage(buffer, [buffer]);
  };
\`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));

// 3. Post Message with TRANSFER list: Transmits memory pointer ownership instantly!
worker.postMessage(imageBuffer, [imageBuffer]);

// Memory on main thread is instantly detached (neutered) -> 0 bytes!
console.log("Main Thread Buffer Length AFTER Transfer (Neutered):", imageBuffer.byteLength);

worker.onmessage = (event) => {
  const processedBuffer = event.data;
  console.log("✅ Main Thread received processed buffer back! Length:", processedBuffer.byteLength);
};`,
            executable: true,
            explanation: [
              "worker.postMessage(imageBuffer, [imageBuffer]) transfers the underlying memory buffer pointer directly to the worker thread in O(1) time.",
              "The original ArrayBuffer on the main thread is immediately 'neutered' (byteLength becomes 0), preventing simultaneous memory access races.",
              "This allows transferring hundreds of megabytes between threads with zero CPU copying overhead.",
            ],
          },
          detailedExplanation: [
            "OffscreenCanvas: The `OffscreenCanvas` API allows canvas rendering contexts (2D and WebGL/WebGPU) to be detached from the DOM and transferred to a Web Worker, allowing complex 3D scenes or high-frequency charting to be rendered entirely off the main thread.",
          ],
          commonMistakes: [
            {
              mistake: "Passing massive data structures to workers without transfer lists, triggering expensive structured cloning copies.",
              badCode: "worker.postMessage(massiveArrayBuffer); // Performs deep memory clone",
              goodCode: "worker.postMessage(massiveArrayBuffer, [massiveArrayBuffer]); // O(1) transfer",
              explanation: "Standard postMessage clones memory byte-by-byte, causing high RAM usage and CPU pauses.",
            },
          ],
          bestPractices: [
            "Always include the buffer in the second array parameter (`[buffer]`) for zero-copy ownership transfer.",
            "Use `OffscreenCanvas` to render complex animations and WebGL graphics on background worker threads.",
            "Implement a Worker Pool to reuse a fixed number of workers matching `navigator.hardwareConcurrency`.",
          ],
          summary: [
            "Web Workers execute tasks in parallel on separate OS background threads.",
            "Transferable Objects pass memory ownership instantly in O(1) time without copying.",
            "`OffscreenCanvas` decouples heavy graphical rendering from the main UI thread.",
          ],
        },
      ],
    },
  ],
};

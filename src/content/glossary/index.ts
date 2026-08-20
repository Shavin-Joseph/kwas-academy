import { GlossaryTerm } from "@/types";

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "term-api",
    slug: "api",
    term: "API (Application Programming Interface)",
    shortDefinition: "A set of protocols and definitions that allows two software programs to communicate.",
    technicalDefinition: "An architectural interface providing standardized endpoints (REST, GraphQL, gRPC) allowing client programs to access server resources and execute operations without direct database or internal engine access.",
    category: "Architecture & Protocols",
    codeSnippet: {
      code: `// Fetching data from a REST API
const res = await fetch("https://api.kwasacademy.dev/courses");
const data = await res.json();`,
      language: "javascript",
    },
    relatedConcepts: ["REST", "HTTP", "JSON", "Endpoints", "SDK"],
    relatedCourses: [
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    id: "term-http",
    slug: "http",
    term: "HTTP / HTTPS (Hypertext Transfer Protocol)",
    shortDefinition: "The underlying protocol used by the World Wide Web to transmit data.",
    technicalDefinition: "An application-layer protocol for distributed, collaborative, hypermedia information systems. HTTPS layers Transport Layer Security (TLS/SSL) encryption on top of TCP to protect payload confidentiality and integrity.",
    category: "Networking & Security",
    codeSnippet: {
      code: `// HTTP Request Headers
GET /api/v1/user HTTP/1.1
Host: api.kwasacademy.dev
Authorization: Bearer <jwt_token>
Accept: application/json`,
      language: "http",
    },
    relatedConcepts: ["TLS/SSL", "TCP/IP", "DNS", "Status Codes", "Headers"],
    relatedCourses: [
      { name: "HTML", slug: "html" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    id: "term-dom",
    slug: "dom",
    term: "DOM (Document Object Model)",
    shortDefinition: "The tree-like data representation of the HTML document rendered by the browser.",
    technicalDefinition: "A language-independent object-oriented representation of the web page where each HTML tag becomes a node object exposing properties and methods for programmatic manipulation.",
    category: "Web Development",
    codeSnippet: {
      code: `// Manipulating the DOM
const heading = document.querySelector("h1");
heading.textContent = "Master Modern Web Development";
heading.classList.add("highlight");`,
      language: "javascript",
    },
    relatedConcepts: ["HTML", "Virtual DOM", "Events", "Rendering Tree"],
    relatedCourses: [
      { name: "HTML", slug: "html" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    id: "term-crud",
    slug: "crud",
    term: "CRUD (Create, Read, Update, Delete)",
    shortDefinition: "The four basic operations of persistent storage.",
    technicalDefinition: "The foundational actions performed on database entities, mapping directly to SQL operations (INSERT, SELECT, UPDATE, DELETE) and standard HTTP methods (POST, GET, PUT/PATCH, DELETE).",
    category: "Databases & Backend",
    codeSnippet: {
      code: `-- CRUD in SQL:
-- Create: INSERT INTO users (name) VALUES ('Alex');
-- Read:   SELECT * FROM users WHERE id = 1;
-- Update: UPDATE users SET name = 'Kenneth' WHERE id = 1;
-- Delete: DELETE FROM users WHERE id = 1;`,
      language: "sql",
    },
    relatedConcepts: ["REST", "SQL", "Databases", "HTTP Methods"],
    relatedCourses: [
      { name: "SQL", slug: "sql" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    id: "term-jwt",
    slug: "jwt",
    term: "JWT (JSON Web Token)",
    shortDefinition: "A compact, URL-safe means of representing claims securely between two parties.",
    technicalDefinition: "An open standard (RFC 7519) consisting of Header, Payload, and Signature separated by dots. Used for stateless user authentication and authorization across distributed microservices.",
    category: "Security & Auth",
    codeSnippet: {
      code: `// JWT Structure: header.payload.signature
const token = jwt.sign(
  { userId: "usr_123", role: "admin" },
  process.env.JWT_SECRET,
  { expiresIn: "2h" }
);`,
      language: "javascript",
    },
    relatedConcepts: ["Authentication", "Sessions", "OAuth2", "Cryptography"],
    relatedCourses: [
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    id: "term-acid",
    slug: "acid",
    term: "ACID (Atomicity, Consistency, Isolation, Durability)",
    shortDefinition: "A set of properties of database transactions intended to guarantee validity even in the event of errors.",
    technicalDefinition: "A transaction standard in RDBMS ensuring: Atomicity (all or nothing), Consistency (preserves valid states), Isolation (concurrent operations do not interfere), and Durability (committed data survives crashes).",
    category: "Databases",
    codeSnippet: {
      code: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
      language: "sql",
    },
    relatedConcepts: ["Transactions", "PostgreSQL", "Isolation Levels", "Write-Ahead Log"],
    relatedCourses: [{ name: "SQL", slug: "sql" }],
  },
  {
    id: "term-cap-theorem",
    slug: "cap-theorem",
    term: "CAP Theorem (Consistency, Availability, Partition Tolerance)",
    shortDefinition: "A distributed system can deliver at most two of the three properties simultaneously.",
    technicalDefinition: "In a network-partitioned distributed data store, the system must choose between guaranteeing Consistency (every read receives the most recent write or an error) vs Availability (every request receives a non-error response, without guaranteeing it contains the most recent write).",
    category: "System Design",
    relatedConcepts: ["Distributed Systems", "Partition Tolerance", "Eventual Consistency", "NoSQL"],
    relatedCourses: [{ name: "SQL", slug: "sql" }],
  },
  {
    id: "term-closure",
    slug: "closure",
    term: "Closure",
    shortDefinition: "A function bundled together with references to its surrounding lexical state.",
    technicalDefinition: "A feature in JavaScript where an inner function retains access to the outer enclosing function's variables even after the outer function has completed execution and returned.",
    category: "Programming Languages",
    codeSnippet: {
      code: `function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier; // multiplier is closed over
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10`,
      language: "javascript",
    },
    relatedConcepts: ["Lexical Scope", "Execution Context", "Encapsulation", "Higher-Order Functions"],
    relatedCourses: [{ name: "JavaScript", slug: "javascript" }],
  },
  {
    id: "term-docker",
    slug: "docker",
    term: "Docker & Containerization",
    shortDefinition: "A platform for building, shipping, and running distributed applications in isolated containers.",
    technicalDefinition: "An OS-level virtualization technology utilizing Linux namespaces and cgroups to package code, runtime, system tools, and libraries into portable container images that execute consistently across all environments.",
    category: "DevOps & Cloud",
    codeSnippet: {
      code: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "dist/server.js"]`,
      language: "dockerfile",
    },
    relatedConcepts: ["Kubernetes", "Virtual Machines", "CI/CD", "Images & Containers"],
    relatedCourses: [{ name: "Python", slug: "python" }],
  },
  {
    id: "term-rag",
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    shortDefinition: "Enhancing AI language models with external factual knowledge retrieved at query time.",
    technicalDefinition: "An AI architecture that converts user queries into vector embeddings, performs semantic similarity search against a vector database (e.g. pgvector, Pinecone), and injects the retrieved contextual chunks into the LLM prompt window to produce accurate, hallucination-free answers.",
    category: "AI & Machine Learning",
    codeSnippet: {
      code: `// Retrieve relevant knowledge embeddings
const queryEmbedding = await generateEmbedding(userQuestion);
const contextChunks = await vectorDb.search(queryEmbedding, { limit: 3 });

const prompt = \`Context: \${contextChunks.join("\\n")}\\n\\nQuestion: \${userQuestion}\`;
const answer = await llm.complete(prompt);`,
      language: "javascript",
    },
    relatedConcepts: ["LLM", "Vector Embeddings", "Cosine Similarity", "Prompt Engineering"],
    relatedCourses: [{ name: "Python", slug: "python" }],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug || t.id === slug);
}

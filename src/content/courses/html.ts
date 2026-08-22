import { Course } from "@/types";

export const htmlCourse: Course = {
  id: "course-html",
  slug: "html",
  title: "HTML5 Documentation & Architecture",
  tagline: "The foundation of the World Wide Web — master semantics, forms, accessibility, and modern browser APIs.",
  description: "Comprehensive HTML5 curriculum: syntax, document object trees, semantic elements, modern forms, accessible markup (ARIA), canvas 2D, SVG, media streaming, web storage, and SEO optimization.",
  category: "Frontend",
  level: "Beginner",
  estimatedHours: 18,
  icon: "FileCode2",
  badgeColor: "orange",
  prerequisites: ["None — suitable for complete beginners."],
  skillsGained: [
    "Semantic HTML5 Markup & Document Trees",
    "Forms & HTML5 Validation Engines",
    "Web Accessibility (WCAG 2.2 / ARIA)",
    "Canvas 2D & Graphics Rendering",
    "Web Storage APIs (LocalStorage/SessionStorage/IndexedDB)",
    "SEO Meta Architecture & Open Graph Protocols",
  ],
  featured: true,
  modules: [
    {
      id: "mod-html-1",
      slug: "fundamentals",
      title: "Module 1: Getting Started & Web Platform Architecture",
      description: "Understand the web browser engine, document tree, doctype, and foundational tags.",
      lessons: [
        {
          id: "html-intro",
          slug: "html-introduction",
          courseSlug: "html",
          moduleSlug: "fundamentals",
          title: "HTML Introduction & The Web Platform",
          description: "Discover what HTML is, how web browsers render document trees, and write your first valid HTML5 document.",
          durationMinutes: 10,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "What HTML (HyperText Markup Language) is and how it powers the web",
            "The role of the DOM (Document Object Model) and browser rendering engines",
            "The required structure of a standards-compliant HTML5 document",
            "How to write and run your first HTML webpage",
          ],
          introduction: `HTML (HyperText Markup Language) is the standard markup language used to structure web pages. When you navigate to any website, your browser receives an HTML document, parses its elements into a tree structure called the Document Object Model (DOM), and paints the pixels on your screen.`,
          whyItMatters: `Every web application in existence—from simple blogs to enterprise platforms like Google Docs and Netflix—relies on HTML as its structural backbone. Clean, valid HTML ensures your application is fast, accessible to screen readers, and easily indexed by search engines.`,
          syntax: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Page Title</title>\n  </head>\n  <body>\n    <!-- Visible content goes here -->\n  </body>\n</html>`,
          mainExample: {
            title: "A Complete Valid HTML5 Webpage",
            language: "html",
            code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Welcome to KWAS Academy</title>\n</head>\n<body>\n  <header>\n    <h1>KWAS Academy</h1>\n    <p>Learn. Build. Master.</p>\n  </header>\n  <main>\n    <h2>Start Your Developer Journey</h2>\n    <p>Master programming from zero to software engineering.</p>\n  </main>\n  <footer>\n    <p>&copy; 2026 KWAS Academy. All rights reserved.</p>\n  </footer>\n</body>\n</html>`,
            executable: true,
            explanation: [
              "<!DOCTYPE html> tells the browser engine to render in modern standards mode.",
              "<html lang='en'> represents the root element of the document.",
              "<head> contains metadata, viewport instructions, stylesheets, and page title.",
              "<meta name='viewport' content='width=device-width, initial-scale=1.0'> enables mobile responsiveness.",
              "<body> holds all visual content rendered inside the browser viewport.",
            ],
          },
          detailedExplanation: [
            "Line 1: <!DOCTYPE html> is an instruction to the web browser about what version of HTML the page is written in.",
            "Line 2: <html lang='en'> is the root container. The lang attribute helps search engines and screen readers parse pronunciation correctly.",
            "Lines 3-7: <head> holds non-visual configurations such as charset encoding UTF-8.",
            "Lines 8-22: <body> contains the document body. Browsers construct the DOM hierarchy based on nested parent-child relationships here.",
          ],
          commonMistakes: [],
          bestPractices: [
            "Always include <!DOCTYPE html> as the very first line of your document.",
            "Always define the lang attribute on the <html> root element.",
          ],
          realWorldExample: {
            title: "Production Application Shell",
            scenario: "High-performance SaaS web application template with SEO meta tags and accessible landmarks.",
            language: "html",
            code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>KWAS Academy</title>\n</head>\n<body>\n  <main id="main-content">\n    <h1>Master Engineering</h1>\n  </main>\n</body>\n</html>`,
            takeaway: "Clean landmarks guarantee rapid page rendering and screen reader traversal.",
          },
          summary: ["HTML structures the web through hierarchical element trees called the DOM."],
        },
      ],
    },
    {
      id: "mod-html-2",
      slug: "text-and-structure",
      title: "Module 2: Document Structure, Headings & Text Formatting",
      description: "H1-H6 hierarchy, paragraphs, lists, quotations, and inline text formatting.",
      lessons: [
        {
          id: "html-headings",
          slug: "headings-paragraphs-lists",
          courseSlug: "html",
          moduleSlug: "text-and-structure",
          title: "Headings, Paragraphs & Ordered/Unordered Lists",
          description: "Establish strong typographic hierarchy with h1-h6 headings, paragraphs, and nested lists.",
          durationMinutes: 12,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Proper h1 through h6 heading hierarchy for SEO",
            "Paragraphs, line breaks (<br>), and thematic breaks (<hr>)",
            "Ordered (<ol>), unordered (<ul>), and description lists (<dl>)",
          ],
          introduction: `Text is the core carrier of information on the web. Search engine bots and screen readers rely on heading hierarchy to generate table-of-contents outlines for your web pages.`,
          whyItMatters: `Skipping heading levels (e.g. going from h1 directly to h4) breaks accessibility navigation for blind users and penalizes search engine rankings.`,
          mainExample: {
            title: "Semantic Text & List Structure",
            language: "html",
            code: `<article>\n  <h1>Modern Web Development</h1>\n  <p>Web engineering combines structure, styling, and logic.</p>\n  \n  <h2>Core Technologies</h2>\n  <ul>\n    <li>HTML5 for Structure</li>\n    <li>CSS3 for Presentation</li>\n    <li>JavaScript for Behavior</li>\n  </ul>\n</article>`,
            executable: true,
            explanation: ["H1 is the primary page title.", "H2 represents major sub-sections."],
          },
          detailedExplanation: ["Always have only one <h1> per page representing the central topic."],
          commonMistakes: [],
          bestPractices: ["Never use headings just to make text bigger; use CSS for sizing."],
          summary: ["Headings create the logical outline of web documents."],
        },
      ],
    },
    {
      id: "mod-html-3",
      slug: "semantics",
      title: "Module 3: Semantic Landmarks & Document Outline",
      description: "Master header, nav, main, section, article, aside, and footer for accessibility and SEO.",
      lessons: [
        {
          id: "html-semantics",
          slug: "html-semantics",
          courseSlug: "html",
          moduleSlug: "semantics",
          title: "Semantic Elements & Landmark Navigation",
          description: "Master header, nav, main, section, article, aside, and footer for accessibility and SEO.",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Why semantic elements are superior to div soup",
            "The distinct purpose of section, article, aside, and nav",
            "How screen readers navigate landmarks",
          ],
          introduction: `Semantic HTML refers to tags that carry meaning rather than just appearance. Elements like <article>, <section>, <nav>, and <aside> communicate the type of content they contain.`,
          whyItMatters: `Accessible landmarks allow visually impaired users to jump directly to main content or navigation sections without tabbing through 50 repetitive links.`,
          mainExample: {
            title: "Semantic Page Architecture",
            language: "html",
            code: `<header>\n  <nav aria-label="Primary Navigation">\n    <a href="/">Home</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>Semantic Web Design</h1>\n  </article>\n</main>`,
            executable: true,
            explanation: ["<article> represents a standalone document.", "<nav> holds primary links."],
          },
          detailedExplanation: ["<main> should only appear once per document and contains the central content."],
          commonMistakes: [],
          bestPractices: ["Always prefer semantic tags over generic <div> containers."],
          summary: ["Semantic elements clarify structure for search bots and screen readers."],
        },
      ],
    },
    {
      id: "mod-html-4",
      slug: "hyperlinks",
      title: "Module 4: Links, Anchors & URL Navigation",
      description: "Anchor tags, relative vs absolute paths, target blank security, and fragment identifiers.",
      lessons: [
        {
          id: "html-links",
          slug: "hyperlinks-and-anchors",
          courseSlug: "html",
          moduleSlug: "hyperlinks",
          title: "Hyperlinks, Relative Paths & Target Security",
          description: "Connect web documents with href anchors, mailto links, deep page fragments, and secure target='_blank'.",
          durationMinutes: 12,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Creating links with the <a> anchor element",
            "Relative paths (/about) vs absolute URLs (https://...)",
            "Preventing security vulnerabilities with rel='noopener noreferrer'",
          ],
          introduction: `Hyperlinks are what transform isolated documents into the World Wide Web. The <a> tag creates links to external sites, internal routes, downloadable files, email addresses, and specific section IDs on the same page.`,
          whyItMatters: `Opening external links with target='_blank' without rel='noopener noreferrer' exposes your site to tab-nabbing vulnerabilities.`,
          mainExample: {
            title: "Secure Hyperlinks & Jump Anchors",
            language: "html",
            code: `<!-- Internal Navigation -->\n<a href="/courses">Explore Courses</a>\n\n<!-- Secure External Link -->\n<a href="https://github.com" target="_blank" rel="noopener noreferrer">\n  Visit GitHub (Opens in new tab)\n</a>\n\n<!-- Page Fragment Jump -->\n<a href="#faq-section">Jump to FAQs</a>`,
            executable: true,
            explanation: ["rel='noopener noreferrer' prevents the opened page from hijacking window.opener."],
          },
          detailedExplanation: ["Fragment anchors (#id) scroll the browser window directly to an element with matching id."],
          commonMistakes: [],
          bestPractices: ["Always use meaningful link text rather than 'click here'."],
          summary: ["Anchors link the world's knowledge with accessible, secure references."],
        },
      ],
    },
    {
      id: "mod-html-5",
      slug: "multimedia",
      title: "Module 5: Multimedia, Images, Audio & Video Streaming",
      description: "Responsive images, srcset, picture element, lazy loading, audio, and video codecs.",
      lessons: [
        {
          id: "html-media",
          slug: "responsive-images-audio-video",
          courseSlug: "html",
          moduleSlug: "multimedia",
          title: "Responsive Images, Lazy Loading & Native Media",
          description: "Deliver high-performance media: <img> alt attributes, loading='lazy', srcset, <picture>, and <video>.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Descriptive alt text for accessibility and SEO",
            "Native lazy loading (loading='lazy') for instant Core Web Vitals speed",
            "Adaptive responsive images with <picture> and srcset",
          ],
          introduction: `Modern web pages rely heavily on images and streaming video. HTML5 provides built-in media elements with hardware-accelerated playback and responsive image resolution switching.`,
          whyItMatters: `Unoptimized images account for over 60% of total page weight. Using loading='lazy' and proper width/height attributes prevents Cumulative Layout Shift (CLS).`,
          mainExample: {
            title: "Responsive Picture Element & Lazy Loading",
            language: "html",
            code: `<picture>\n  <source srcset="hero-large.webp" media="(min-width: 1024px)">\n  <source srcset="hero-medium.webp" media="(min-width: 640px)">\n  <img src="hero-small.webp" alt="KWAS Academy Developer Terminal" loading="lazy" width="800" height="450">\n</picture>`,
            executable: true,
            explanation: ["Browser chooses the optimal image format and resolution automatically."],
          },
          detailedExplanation: ["Always specify width and height attributes to reserve aspect ratio layout space."],
          commonMistakes: [],
          bestPractices: ["Always provide descriptive alt text for non-decorative images."],
          summary: ["Native HTML5 media elements enable rich, responsive multimedia experiences."],
        },
      ],
    },
    {
      id: "mod-html-6",
      slug: "tables",
      title: "Module 6: Tables & Tabular Data Representation",
      description: "Accessible tabular data: table, thead, tbody, th, tr, td, colgroup, and caption.",
      lessons: [
        {
          id: "html-tables",
          slug: "accessible-html-tables",
          courseSlug: "html",
          moduleSlug: "tables",
          title: "Accessible Data Tables & Column Groups",
          description: "Structure complex datasets with accessible tables, captions, headers, and column scopes.",
          durationMinutes: 14,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "When to use tables (tabular data) and when not to (page layout)",
            "The role of <caption>, <thead>, <tbody>, and <tfoot>",
            "Scope attributes (scope='col', scope='row') for screen readers",
          ],
          introduction: `HTML tables are designed specifically to display multi-dimensional tabular data, such as financial reports, schedules, leaderboards, and data grids.`,
          whyItMatters: `Proper table markup with scope='col' allows screen readers to announce both the column header and row cell simultaneously as users navigate through cells.`,
          mainExample: {
            title: "Accessible Product Pricing Table",
            language: "html",
            code: `<table>\n  <caption>KWAS Academy Course Catalog Summary</caption>\n  <thead>\n    <tr>\n      <th scope="col">Course Title</th>\n      <th scope="col">Level</th>\n      <th scope="col">Hours</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">HTML5 Architecture</th>\n      <td>Beginner</td>\n      <td>18h</td>\n    </tr>\n  </tbody>\n</table>`,
            executable: true,
            explanation: ["scope='col' identifies column headers.", "caption provides an accessible title."],
          },
          detailedExplanation: ["Never use tables for page layout; use CSS Flexbox or Grid instead."],
          commonMistakes: [],
          bestPractices: ["Always include a <caption> to describe the table content."],
          summary: ["Tables present relational data clearly when paired with accessible header scopes."],
        },
      ],
    },
    {
      id: "mod-html-7",
      slug: "forms",
      title: "Module 7: Forms, Inputs & Constraint Validation",
      description: "Build robust, accessible user input forms with validation, labels, input types, and submission handlers.",
      lessons: [
        {
          id: "html-forms",
          slug: "html-forms",
          courseSlug: "html",
          moduleSlug: "forms",
          title: "HTML Forms & Constraint Validation",
          description: "Build accessible forms with labels, fieldsets, input types (text, email, password, number), and client constraint validation.",
          durationMinutes: 20,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Form attributes: action, method (GET vs POST), and enctype",
            "Binding <label for='...'> with input id for accessibility",
            "HTML5 validation: required, pattern, min, max, type='email'",
          ],
          introduction: `Forms are the foundation of interactive web applications. They allow users to enter data, submit searches, upload files, and authenticate.`,
          whyItMatters: `Proper form markup guarantees that mobile phones automatically show specialized keyboards (e.g. numeric keypad for phone numbers or @ keyboard for email).`,
          mainExample: {
            title: "Accessible Registration Form",
            language: "html",
            code: `<form action="/api/register" method="POST">\n  <div>\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username" required minlength="3">\n  </div>\n  <button type="submit">Create Account</button>\n</form>`,
            executable: true,
            explanation: ["<label for='...'> explicitly connects label text to the input id."],
          },
          detailedExplanation: ["HTML5 forms prevent submission and show native error bubbles if required constraints fail."],
          commonMistakes: [],
          bestPractices: ["Always include visible <label> tags paired to inputs with the for attribute."],
          summary: ["Forms capture user input securely with native constraint validation."],
        },
      ],
    },
    {
      id: "mod-html-8",
      slug: "accessibility",
      title: "Module 8: Web Accessibility (WCAG 2.2 / ARIA)",
      description: "Master ARIA roles, live regions, focus management, and accessibility testing.",
      lessons: [
        {
          id: "html-accessibility",
          slug: "web-accessibility-and-aria",
          courseSlug: "html",
          moduleSlug: "accessibility",
          title: "Web Accessibility (WCAG 2.2) & ARIA States",
          description: "Master accessible web applications: ARIA roles, aria-expanded, aria-live, tabindex, and focus management.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The 4 WCAG Principles: Perceivable, Operable, Understandable, Robust (POUR)",
            "When and why to use ARIA roles and attributes",
            "Managing keyboard focus and tab navigation",
          ],
          introduction: `Web Accessibility (a11y) ensures that websites are usable by everyone, including people with visual, auditory, motor, or cognitive disabilities.`,
          whyItMatters: `Building accessible web apps is a legal requirement in many jurisdictions and universally improves UX for all users.`,
          mainExample: {
            title: "Accessible Collapsible Accordion",
            language: "html",
            code: `<button aria-expanded="false" aria-controls="panel-1" id="accordion-btn">\n  What is KWAS Academy?\n</button>\n<div id="panel-1" role="region" aria-labelledby="accordion-btn" hidden>\n  <p>KWAS Academy is a modern engineering platform.</p>\n</div>`,
            executable: true,
            explanation: ["aria-expanded communicates open/closed state to screen readers."],
          },
          detailedExplanation: ["First rule of ARIA: Do not use ARIA if a native HTML element already exists."],
          commonMistakes: [],
          bestPractices: ["Always use native HTML buttons and anchor links instead of clickable divs."],
          summary: ["Accessibility guarantees inclusive software experiences for all users."],
        },
      ],
    },
    {
      id: "mod-html-9",
      slug: "canvas-svg",
      title: "Module 9: HTML5 Canvas 2D & SVG Vector Graphics",
      description: "Render dynamic 2D graphics, games, charts, and scalable vector graphics.",
      lessons: [
        {
          id: "html-canvas",
          slug: "canvas-and-svg-graphics",
          courseSlug: "html",
          moduleSlug: "canvas-svg",
          title: "Canvas 2D API & Scalable Vector Graphics (SVG)",
          description: "Draw dynamic raster graphics via JavaScript Canvas 2D and render crisp scalable SVG vectors.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Canvas 2D context (ctx.fillRect, ctx.arc, requestAnimationFrame)",
            "Inline SVG elements (<circle>, <path>, <rect>) and CSS styling",
            "Choosing between Canvas (pixels/games) vs SVG (crisp resolution-independent icons/charts)",
          ],
          introduction: `HTML5 provides two distinct graphic systems: <canvas> for scriptable bitmap pixel drawing (charts, game rendering) and <svg> for scalable XML vector graphics.`,
          whyItMatters: `SVGs scale infinitely without losing quality on high-DPI Retina displays, making them ideal for logos, icons, and UI charts.`,
          mainExample: {
            title: "Inline SVG Vector Icon & Canvas 2D Box",
            language: "html",
            code: `<!-- Scalable Vector Graphic -->\n<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">\n  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>\n</svg>\n\n<!-- 2D Canvas Target -->\n<canvas id="myCanvas" width="300" height="150"></canvas>`,
            executable: true,
            explanation: ["SVG renders crisp vector lines.", "Canvas allows pixel-by-pixel rendering via JavaScript."],
          },
          detailedExplanation: ["Canvas is procedural (raster); SVG is declarative (DOM-based)."],
          commonMistakes: [],
          bestPractices: ["Use SVG for UI icons and data charts; use Canvas for particle systems and games."],
          summary: ["Canvas and SVG provide complete 2D visual rendering capabilities in the browser."],
        },
      ],
    },
    {
      id: "mod-html-10",
      slug: "storage-apis",
      title: "Module 10: Web Storage, Cookies & Client Persistence",
      description: "Persist client data with LocalStorage, SessionStorage, Cookies, and IndexedDB.",
      lessons: [
        {
          id: "html-storage",
          slug: "local-storage-and-indexeddb",
          courseSlug: "html",
          moduleSlug: "storage-apis",
          title: "Web Storage APIs (LocalStorage & IndexedDB)",
          description: "Store persistent user preferences with localStorage and structured relational datasets with IndexedDB.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "localStorage (persists across sessions) vs sessionStorage (tab lifetime)",
            "Synchronous key-value limits (5MB-10MB)",
            "IndexedDB for asynchronous, large-scale offline storage",
          ],
          introduction: `Web Storage APIs allow web applications to store up to several megabytes of key-value data directly in the user's browser, eliminating redundant network round-trips for user preferences.`,
          whyItMatters: `LocalStorage allows you to preserve user theme preferences (light/dark mode) and offline drafts instantly.`,
          mainExample: {
            title: "Theme Preference Persistence with LocalStorage",
            language: "javascript",
            code: `// Save preference\nlocalStorage.setItem("kwas_theme", "dark");\n\n// Retrieve preference\nconst savedTheme = localStorage.getItem("kwas_theme") || "light";\nconsole.log("Current Active Theme:", savedTheme);`,
            executable: true,
            explanation: ["localStorage data persists even when the browser is closed and reopened."],
          },
          detailedExplanation: ["Never store sensitive authentication passwords or credit cards in localStorage due to XSS risks."],
          commonMistakes: [],
          bestPractices: ["Always handle JSON.parse errors when reading complex objects from localStorage."],
          summary: ["Client storage enables offline support, caching, and personalized application states."],
        },
      ],
    },
    {
      id: "mod-html-11",
      slug: "seo-performance",
      title: "Module 11: SEO Metadata, OpenGraph & Performance Optimization",
      description: "Master meta tags, OpenGraph cards, Twitter cards, canonical links, and Core Web Vitals.",
      lessons: [
        {
          id: "html-seo",
          slug: "seo-metadata-and-opengraph",
          courseSlug: "html",
          moduleSlug: "seo-performance",
          title: "SEO Metadata, OpenGraph Cards & Web Vitals",
          description: "Optimize HTML for search engines and social sharing with meta tags, OpenGraph, Twitter cards, and JSON-LD schema.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Essential meta tags (description, canonical, robots)",
            "Open Graph protocol (og:title, og:image, og:description) for social media previews",
            "JSON-LD structured data schema for rich Google search snippets",
          ],
          introduction: `Search Engine Optimization (SEO) in HTML involves structuring metadata and document semantics so search engines like Google can crawl, understand, and rank your content effectively.`,
          whyItMatters: `Pages with proper OpenGraph metadata receive over 40% higher click-through rates when shared across Twitter, LinkedIn, and Discord.`,
          mainExample: {
            title: "Complete Production SEO Head Section",
            language: "html",
            code: `<head>\n  <meta charset="UTF-8">\n  <title>KWAS Academy — Learn Software Engineering</title>\n  <meta name="description" content="Master programming from beginner to advanced with interactive sandboxes.">\n  <link rel="canonical" href="https://kwasacademy.dev/learn">\n  \n  <!-- OpenGraph Social Cards -->\n  <meta property="og:title" content="KWAS Academy">\n  <meta property="og:description" content="Learn. Build. Master.">\n  <meta property="og:image" content="https://kwasacademy.dev/og-cover.png">\n  <meta property="og:type" content="website">\n</head>`,
            executable: true,
            explanation: [
              "Canonical link prevents duplicate content penalties.",
              "OpenGraph tags control link preview images on social apps.",
            ],
          },
          detailedExplanation: ["JSON-LD scripts embedded in the head provide structured schemas for Courses, Articles, and FAQs."],
          commonMistakes: [],
          bestPractices: ["Keep meta descriptions between 140 and 160 characters for maximum search engine snippet visibility."],
          summary: ["Search engine visibility begins with clean, standards-compliant HTML head metadata."],
        },
      ],
    },
    {
      id: "mod-html-12",
      slug: "webassembly-shared-array-buffer",
      title: "Module 12: WebAssembly Integration, SharedArrayBuffer & Atomics",
      description: "Embed high-performance C++/Rust binaries in HTML using WebAssembly, SharedArrayBuffer memory, and multithreaded Atomics.",
      lessons: [
        {
          id: "html-wasm-sab",
          slug: "webassembly-sharedarraybuffer-atomics-html",
          courseSlug: "html",
          moduleSlug: "webassembly-shared-array-buffer",
          title: "WebAssembly Integration, SharedArrayBuffer & Browser Atomics",
          description: "Execute compiled near-native bytecode in the browser via HTML WebAssembly APIs, cross-origin isolation headers (COOP/COEP), and low-level memory synchronization with Atomics.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How HTML loads and instantiates WebAssembly binary modules (`.wasm`) via streaming compilation",
            "Configuring Cross-Origin Isolation headers (COOP & COEP) required for SharedArrayBuffer",
            "Low-level memory synchronization across Web Workers using `Atomics.wait()` and `Atomics.notify()`",
            "Zero-copy linear memory management between JavaScript and compiled WebAssembly code",
          ],
          introduction: `WebAssembly (Wasm) is a low-level binary format designed to execute high-performance code in modern web browsers at near-native speed. By coupling WebAssembly with HTML and Web Workers through SharedArrayBuffer, web applications can achieve multithreaded parallel computing for video encoding, 3D physics engines, and machine learning models directly in the browser tab.`,
          whyItMatters: `Standard JavaScript execution runs on a single main UI thread. For computationally intensive tasks (like audio DSP or image processing in Figma/Canva), WebAssembly and SharedArrayBuffer prevent frame drops and keep the HTML interface at 120 FPS.`,
          syntax: `WebAssembly.instantiateStreaming(fetch('module.wasm'), importObject)\nconst sharedMem = new SharedArrayBuffer(1024);\nAtomics.store(new Int32Array(sharedMem), 0, 42);`,
          mainExample: {
            title: "Streaming WebAssembly Compilation and Shared Memory Allocation",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebAssembly & SharedArrayBuffer Architecture</title>
</head>
<body>
  <h1>KWAS Academy WebAssembly Runtime</h1>
  <button id="computeBtn">Execute Parallel Computation</button>
  <div id="output">Status: Idle</div>

  <script>
    // 1. Allocate a 1MB SharedArrayBuffer accessible by Main Thread and Web Workers
    const sharedBuffer = new SharedArrayBuffer(1024 * 1024);
    const int32View = new Int32Array(sharedBuffer);

    // 2. Stream and instantiate WebAssembly module
    async function initWasmEngine() {
      try {
        const importObject = {
          env: {
            memory: new WebAssembly.Memory({ initial: 256, maximum: 512, shared: true }),
            logProgress: (val) => console.log("Wasm Computation Progress:", val)
          }
        };

        const wasmModule = await WebAssembly.instantiateStreaming(
          fetch('/engine.wasm'),
          importObject
        );

        document.getElementById('output').textContent = "WebAssembly Engine Initialized Successfully!";
      } catch (err) {
        console.warn("Wasm Streaming Fallback (Local Simulation):", err.message);
        document.getElementById('output').textContent = "Wasm Ready (Simulation Mode Active)";
      }
    }

    document.getElementById('computeBtn').addEventListener('click', initWasmEngine);
  </script>
</body>
</html>`,
            executable: true,
            explanation: [
              "WebAssembly.instantiateStreaming compiles and instantiates bytecode simultaneously while the network stream downloads.",
              "SharedArrayBuffer allows multiple Web Workers and Wasm instances to read and write to the exact same physical memory block.",
              "Cross-Origin Isolation headers (Cross-Origin-Opener-Policy: same-origin) are mandatory security prerequisites for SharedArrayBuffer.",
            ],
          },
          detailedExplanation: [
            "Spectre Mitigation & Cross-Origin Isolation: Following the Spectre hardware CPU vulnerability, browsers restricted SharedArrayBuffer. To enable it, servers must send `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` HTTP headers.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to use SharedArrayBuffer on servers without COOP/COEP security headers.",
              badCode: "const mem = new SharedArrayBuffer(1024); // Throws ReferenceError: SharedArrayBuffer is not defined",
              goodCode: "// Send headers in server response:\n// Cross-Origin-Opener-Policy: same-origin\n// Cross-Origin-Embedder-Policy: require-corp",
              explanation: "Browsers completely disable SharedArrayBuffer in unisolated execution contexts to prevent side-channel timing attacks.",
            },
          ],
          bestPractices: [
            "Always prefer `WebAssembly.instantiateStreaming` over manual arrayBuffer parsing for faster startup.",
            "Use `Atomics` operations when reading or writing shared memory across workers to prevent race conditions.",
            "Export memory allocations cleanly from Wasm modules using standard linear memory buffers.",
          ],
          summary: [
            "WebAssembly executes compiled C++/Rust/Go bytecode in browsers with near-native efficiency.",
            "SharedArrayBuffer enables shared-memory multithreading between the main thread and background workers.",
            "Cross-Origin Isolation headers are required to activate high-resolution timers and shared buffers.",
          ],
        },
      ],
    },
    {
      id: "mod-html-13",
      slug: "web-components-internals",
      title: "Module 13: Web Components: Custom Elements, Shadow DOM & Templates",
      description: "Build framework-agnostic UI component libraries using Custom Elements v1, Shadow DOM encapsulation, and <template> tags.",
      lessons: [
        {
          id: "html-web-components",
          slug: "web-components-custom-elements-shadow-dom",
          courseSlug: "html",
          moduleSlug: "web-components-internals",
          title: "Custom Elements v1, Shadow DOM & Template Cloning",
          description: "Create native, reusable, and framework-independent UI widgets using HTML5 Custom Elements, encapsulated Shadow DOM styles, and declarative templates.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The 3 pillars of Web Components: Custom Elements, Shadow DOM, and HTML Templates",
            "Encapsulating CSS styles to prevent global stylesheet leakage using `attachShadow({ mode: 'open' })`",
            "Managing custom element lifecycle callbacks: `connectedCallback`, `disconnectedCallback`, and `attributeChangedCallback`",
            "Declarative Shadow DOM (`<template shadowrootmode='open'>`) for Server-Side Rendering (SSR)",
          ],
          introduction: `Web Components are a suite of browser-native technologies that allow developers to create custom, reusable, and encapsulated HTML tags (like <kwas-video-player>) that work natively across React, Angular, Vue, or vanilla HTML without framework dependencies.`,
          whyItMatters: `Enterprise design systems built on Web Components survive framework obsolescence. Components written today will continue to work unchanged for decades across all web browsers.`,
          syntax: `class CustomCard extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: 'open' });\n  }\n}\ncustomElements.define('kwas-card', CustomCard);`,
          mainExample: {
            title: "A Complete Encapsulated Web Component with Shadow DOM",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Custom Elements & Shadow DOM Architecture</title>
</head>
<body>
  <!-- Declarative Custom Element Instance -->
  <kwas-badge variant="pro" label="Enterprise Architecture"></kwas-badge>

  <!-- Component Template -->
  <template id="kwas-badge-template">
    <style>
      :host {
        display: inline-block;
        font-family: system-ui, sans-serif;
      }
      .badge-container {
        padding: 4px 12px;
        border-radius: 9999px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: #ffffff;
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
      }
    </style>
    <span class="badge-container" part="badge">
      <slot name="prefix"></slot>
      <span class="badge-text"></span>
    </span>
  </template>

  <script>
    class KwasBadge extends HTMLElement {
      static get observedAttributes() { return ['label']; }

      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('kwas-badge-template');
        shadow.appendChild(template.content.cloneNode(true));
      }

      connectedCallback() {
        this.updateLabel();
      }

      attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'label' && oldVal !== newVal) {
          this.updateLabel();
        }
      }

      updateLabel() {
        const textElem = this.shadowRoot.querySelector('.badge-text');
        if (textElem) {
          textElem.textContent = this.getAttribute('label') || 'Default Badge';
        }
      }
    }

    customElements.define('kwas-badge', KwasBadge);
  </script>
</body>
</html>`,
            executable: true,
            explanation: [
              "customElements.define registers the custom HTML tag name (which must contain a hyphen).",
              "this.attachShadow({ mode: 'open' }) creates an isolated DOM subtree where internal styles cannot leak out and external styles cannot leak in.",
              "template.content.cloneNode(true) provides high-speed DOM instantiation without re-parsing HTML strings.",
            ],
          },
          detailedExplanation: [
            "Declarative Shadow DOM: Modern browsers support `<template shadowrootmode='open'>`. This allows server-side rendered HTML (from Next.js or Astro) to stream pre-rendered Shadow DOM trees to the client before JavaScript hydrates.",
          ],
          commonMistakes: [
            {
              mistake: "Naming a custom element without a hyphen (e.g., customElements.define('badge', Badge)).",
              badCode: "customElements.define('mybadge', MyBadge);",
              goodCode: "customElements.define('my-badge', MyBadge);",
              explanation: "The W3C specification strictly requires custom elements to include at least one hyphen to avoid collisions with future native HTML elements.",
            },
          ],
          bestPractices: [
            "Always include a hyphen in custom element names (e.g. `app-card`, `kwas-player`).",
            "Use `<slot>` elements to provide flexible content projection points.",
            "Use the `::part()` pseudo-element to expose styled micro-components safely to parent stylesheets.",
          ],
          summary: [
            "Web Components deliver framework-independent, reusable native HTML widgets.",
            "Shadow DOM guarantees 100% style and DOM encapsulation.",
            "Lifecycle callbacks manage component mounting, unmounting, and attribute changes cleanly.",
          ],
        },
      ],
    },
    {
      id: "mod-html-14",
      slug: "browser-streams-webcodecs",
      title: "Module 14: Browser Streams API & WebCodecs Processing",
      description: "Process real-time streaming data, chunked network payloads, and low-latency audio/video with WebCodecs.",
      lessons: [
        {
          id: "html-streams-codecs",
          slug: "browser-streams-api-webcodecs-processing",
          courseSlug: "html",
          moduleSlug: "browser-streams-webcodecs",
          title: "ReadableStreams, TransformStreams & WebCodecs API",
          description: "Master chunked data processing directly in HTML using ReadableStream, TransformStream pipelines, and frame-by-frame hardware video decoding with WebCodecs.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Consuming chunked HTTP responses in real time with `ReadableStream` and `getReader()`",
            "Transforming data on the fly with `TransformStream` (e.g. TextDecoderStream, CompressionStream)",
            "Hardware-accelerated video decoding with the `VideoDecoder` API in WebCodecs",
            "Applying backpressure to prevent buffer overflows during high-throughput network streaming",
          ],
          introduction: `Historically, web applications had to download entire files into RAM before parsing their contents. The modern HTML5 Streams API allows browsers to read, transform, and write data chunk-by-chunk in real time as packets arrive over the network, drastically reducing peak memory consumption.`,
          whyItMatters: `For AI chatbots streaming tokenized text (like ChatGPT), live video analytics, and multi-gigabyte file downloads, the Streams API enables instant visual feedback without freezing the user's browser.`,
          syntax: `const response = await fetch('/api/stream');\nconst reader = response.body.getReader();\nconst { value, done } = await reader.read();`,
          mainExample: {
            title: "Streaming AI Token Generator with Streams API",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Browser Streams API Architecture</title>
</head>
<body>
  <h1>AI Token Streaming Pipeline</h1>
  <button id="startStream">Start Token Stream</button>
  <div id="terminal" style="font-family: monospace; white-space: pre-wrap; background: #0f172a; color: #38bdf8; padding: 16px; border-radius: 8px;"></div>

  <script>
    // Simulated chunked stream generator
    function createTokenStream() {
      const tokens = ["KWAS ", "Academy ", "delivers ", "deep ", "architectural ", "knowledge ", "for ", "software ", "engineers."];
      return new ReadableStream({
        async start(controller) {
          for (const token of tokens) {
            await new Promise(r => setTimeout(r, 120)); // Simulates packet latency
            controller.enqueue(new TextEncoder().encode(token));
          }
          controller.close();
        }
      });
    }

    document.getElementById('startStream').addEventListener('click', async () => {
      const output = document.getElementById('terminal');
      output.textContent = "";

      const stream = createTokenStream();
      // Pipe through native TextDecoderStream
      const decodedStream = stream.pipeThrough(new TextDecoderStream());
      const reader = decodedStream.getReader();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        output.textContent += value;
      }
    });
  </script>
</body>
</html>`,
            executable: true,
            explanation: [
              "ReadableStream encapsulates an asynchronous source of data chunks.",
              "pipeThrough(new TextDecoderStream()) chains an intermediate transform stream that decodes binary bytes into UTF-8 text.",
              "reader.read() processes each incoming chunk with zero buffering delays.",
            ],
          },
          detailedExplanation: [
            "WebCodecs Architecture: The WebCodecs API provides low-level access to the browser's native hardware video and audio encoders and decoders (`VideoEncoder`, `VideoDecoder`, `AudioDecoder`), allowing developers to manipulate individual video frames (`VideoFrame`) on HTML Canvas elements with sub-millisecond latency.",
          ],
          commonMistakes: [
            {
              mistake: "Calling reader.read() without checking the 'done' boolean property, causing infinite loops.",
              badCode: "while(true) { const { value } = await reader.read(); process(value); }",
              goodCode: "while(true) { const { value, done } = await reader.read(); if (done) break; process(value); }",
              explanation: "When a stream terminates, reader.read() returns { value: undefined, done: true }. Always break immediately when done is true.",
            },
          ],
          bestPractices: [
            "Use `pipeThrough` to compose modular transformation chains cleanly.",
            "Always release stream locks with `reader.releaseLock()` if abandoning a stream early.",
            "Leverage `CompressionStream('gzip')` to compress uploaded payloads on the fly.",
          ],
          summary: [
            "Streams API processes data chunk-by-chunk in real time without storing entire files in memory.",
            "TransformStreams cleanly pipeline data conversions like decompression and decoding.",
            "WebCodecs provides hardware-accelerated access to video and audio frame buffers.",
          ],
        },
      ],
    },
    {
      id: "mod-html-15",
      slug: "pwa-service-workers",
      title: "Module 15: Progressive Web Apps (PWA) & Service Worker Cache",
      description: "Build offline-capable web applications using Web App Manifests, Service Worker cache strategies, and Background Sync.",
      lessons: [
        {
          id: "html-pwa-sw",
          slug: "progressive-web-apps-service-workers-offline-cache",
          courseSlug: "html",
          moduleSlug: "pwa-service-workers",
          title: "Progressive Web Apps, Service Workers & Offline Caching",
          description: "Transform HTML websites into installable offline-capable Progressive Web Apps using manifest.json, Service Worker lifecycle events, and CacheStorage caching patterns.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The anatomy of a Progressive Web App (PWA): manifest.json, HTTPS, and Service Workers",
            "Service Worker lifecycles: `install`, `activate`, and `fetch` event interception",
            "Caching strategies: Cache-First (Static Assets), Network-First (API Data), and Stale-While-Revalidate",
            "Registering background sync with `SyncManager` for guaranteed offline form submission",
          ],
          introduction: `Progressive Web Apps (PWAs) leverage modern browser APIs to deliver native app-like experiences directly through HTML. A Service Worker acts as a client-side programmable proxy server sitting between your web application and the network, enabling instant offline loading, background sync, and push notifications.`,
          whyItMatters: `Users on flaky mobile connections frequently experience offline disconnections. PWAs with robust Service Worker caching load instantly from cache, providing a seamless offline experience and boosting user retention.`,
          syntax: `navigator.serviceWorker.register('/sw.js');\nself.addEventListener('fetch', (event) => {\n  event.respondWith(caches.match(event.request));\n});`,
          mainExample: {
            title: "Registering a Service Worker and Stale-While-Revalidate Caching",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#3b82f6">
  <title>KWAS Academy PWA</title>
</head>
<body>
  <h1>KWAS Academy Offline-First Platform</h1>
  <p id="network-status">Network Status: Online</p>

  <script>
    // 1. Register Service Worker on window load
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log("Service Worker registered with scope:", registration.scope);
        } catch (err) {
          console.error("Service Worker registration failed:", err);
        }
      });
    }

    // 2. Monitor network connection state
    window.addEventListener('online', () => {
      document.getElementById('network-status').textContent = "Network Status: Online (Connected)";
    });
    window.addEventListener('offline', () => {
      document.getElementById('network-status').textContent = "Network Status: Offline (Serving cached docs)";
    });
  </script>
</body>
</html>`,
            executable: true,
            explanation: [
              "link rel='manifest' registers metadata (app name, icons, display mode) required for native device installation.",
              "navigator.serviceWorker.register installs the background proxy worker script.",
              "The Service Worker intercepts fetch requests to serve cached responses when the device is disconnected from the internet.",
            ],
          },
          detailedExplanation: [
            "Cache Strategies: Cache-First serves immediately from CacheStorage and falls back to network (best for fonts, icons, images). Network-First queries network first and falls back to cache (best for live market data). Stale-While-Revalidate serves cached content immediately while silently updating the cache in the background.",
          ],
          commonMistakes: [
            {
              mistake: "Caching API mutation requests (POST/PUT/DELETE) inside CacheStorage.",
              badCode: "if (event.request.method === 'POST') { caches.put(event.request, response); }",
              goodCode: "if (event.request.method === 'GET') { event.respondWith(caches.match(event.request)); }",
              explanation: "CacheStorage only supports caching idempotent GET requests. POST requests should be queued in IndexedDB via Background Sync.",
            },
          ],
          bestPractices: [
            "Version cache names (`kwas-cache-v1`) to automatically delete obsolete assets during the `activate` event.",
            "Use Stale-While-Revalidate for documentation content to ensure instant rendering and fresh background updates.",
            "Always serve PWAs exclusively over secure HTTPS connections.",
          ],
          summary: [
            "PWAs make web applications installable and operable offline.",
            "Service Workers intercept network traffic and manage CacheStorage.",
            "Stale-While-Revalidate balances zero-latency rendering with background data freshness.",
          ],
        },
      ],
    },
    {
      id: "mod-html-16",
      slug: "content-security-policy-trusted-types",
      title: "Module 16: Content Security Policy (CSP3), Trusted Types & SRI",
      description: "Hardening HTML applications against Cross-Site Scripting (XSS) using CSP Level 3, Trusted Types, and Subresource Integrity.",
      lessons: [
        {
          id: "html-csp-trusted-types",
          slug: "content-security-policy-trusted-types-sri-hardening",
          courseSlug: "html",
          moduleSlug: "content-security-policy-trusted-types",
          title: "Content Security Policy Level 3 & Trusted Types Hardening",
          description: "Defend HTML applications against DOM-based Cross-Site Scripting (XSS) and code injection using CSP3 nonces, Trusted Types policies, and Subresource Integrity (SRI) hashes.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Writing strict Content Security Policy Level 3 headers with cryptographic nonces",
            "Eliminating DOM XSS vulnerabilities by enforcing the Trusted Types API (`require-trusted-types-for 'script'`)",
            "Verifying CDN asset integrity with Subresource Integrity (SRI) SHA-384 hashes",
            "Restricting framing and clickjacking attacks using `frame-ancestors 'none'`",
          ],
          introduction: `HTML applications are subject to injection vulnerabilities when untrusted user input is parsed as code. Content Security Policy (CSP Level 3) and the W3C Trusted Types API represent the highest standard of client-side web security, forcing the browser to reject untrusted scripts, inline styles, and unverified DOM string injections at the parser level.`,
          whyItMatters: `Cross-Site Scripting (XSS) is historically among the most exploited web vulnerabilities. Enforcing strict CSP nonces and Trusted Types guarantees that even if an attacker injects a malicious <script> tag into your HTML, the browser will refuse to execute it.`,
          syntax: `<meta http-equiv="Content-Security-Policy" content="script-src 'nonce-rAnd0m' 'strict-dynamic';">\n<script src="https://cdn.example.com/lib.js" integrity="sha384-..." crossorigin="anonymous"></script>`,
          mainExample: {
            title: "Securing HTML with Cryptographic Nonce CSP and SRI Hashes",
            language: "html",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- Content Security Policy Level 3 Meta Definition -->
  <meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'nonce-kwasSecureRandom2026' https://cdn.jsdelivr.net;
    style-src 'self' 'unsafe-inline';
    object-src 'none';
    base-uri 'self';
    frame-ancestors 'none';
    require-trusted-types-for 'script';
  ">
  <title>KWAS Academy Security Baseline</title>

  <!-- External Library with Subresource Integrity (SRI) Hash -->
  <script 
    src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js" 
    integrity="sha384-O6jQJ9hO2hT3oYnI6q+zK9a7Gv8wE4uC+J7uV6QxO+H7E4E9I5Q7G3x0z8E3B6" 
    crossorigin="anonymous">
  </script>
</head>
<body>
  <h1>Hardened Enterprise HTML Environment</h1>
  <div id="secure-content">Strict CSP Active</div>

  <!-- Valid Nonce: Browser Executes Safely -->
  <script nonce="kwasSecureRandom2026">
    console.log("✅ Authenticated script executed with valid cryptographic nonce.");
  </script>

  <!-- Missing Nonce: Browser Blocks and Reports Violation -->
  <!-- <script>alert('Blocked by browser CSP!');</script> -->
</body>
</html>`,
            executable: true,
            explanation: [
              "script-src 'nonce-...' instructs the browser to execute only scripts carrying the exact matching random cryptographic nonce token generated per-request.",
              "integrity='sha384-...' verifies that the CDN file has not been tampered with or modified by a malicious third party.",
              "require-trusted-types-for 'script' locks down dangerous sinks like element.innerHTML and eval().",
              "object-src 'none' disables legacy Flash and Java applet plugins completely.",
            ],
          },
          detailedExplanation: [
            "Trusted Types API: When Trusted Types is enabled, assigning raw strings to `element.innerHTML` throws a TypeError. Developers must create a sanitization policy (`trustedTypes.createPolicy(...)`) that explicitly validates and sanitizes input before passing it into DOM sinks.",
          ],
          commonMistakes: [
            {
              mistake: "Using 'unsafe-inline' and 'unsafe-eval' in script-src directives, defeating CSP protection.",
              badCode: "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
              goodCode: "script-src 'self' 'nonce-RANDOM_VALUE' 'strict-dynamic';",
              explanation: "'unsafe-inline' allows any injected <script> tag to execute freely, rendering CSP ineffective against XSS.",
            },
          ],
          bestPractices: [
            "Generate unique, cryptographically random nonces on the server for every single HTTP response.",
            "Always attach SRI `integrity` hashes to external CDN script tags.",
            "Use `report-uri` or `report-to` directives to log CSP violation telemetry to your security monitoring service.",
          ],
          summary: [
            "CSP Level 3 uses cryptographic nonces to defeat Cross-Site Scripting (XSS).",
            "Trusted Types prevents DOM-based injection vulnerabilities at dangerous DOM sinks.",
            "Subresource Integrity (SRI) guarantees external CDN binaries have not been altered.",
          ],
        },
      ],
    },
  ],
};

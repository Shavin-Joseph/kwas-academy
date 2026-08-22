import { Course } from "@/types";

export const cssCourse: Course = {
  id: "course-css",
  slug: "css",
  title: "CSS3 Architecture, Flexbox & Grid Mastery",
  tagline: "Master modern styling, responsive layouts, CSS Grid, Flexbox, transitions, and container queries.",
  description: "Deep dive into CSS: box model, specificity, Flexbox alignment, CSS Grid 2D layouts, responsive typography, custom properties (CSS variables), animations, transforms, and modern container queries.",
  category: "Frontend",
  level: "Beginner",
  estimatedHours: 20,
  icon: "Palette",
  badgeColor: "blue",
  prerequisites: ["HTML Fundamentals"],
  skillsGained: [
    "The CSS Box Model & Sizing Mechanics",
    "Flexbox 1D Layout System",
    "CSS Grid 2D Layout System",
    "Responsive Design & Media Queries",
    "Container Queries (@container)",
    "CSS Variables & Theming",
  ],
  featured: true,
  modules: [
    {
      id: "mod-css-1",
      slug: "intro",
      title: "Module 1: Introduction to CSS & Syntax Rules",
      description: "CSS selectors, element targeting, inline vs internal vs external stylesheets.",
      lessons: [
        {
          id: "css-intro",
          slug: "css-introduction-and-syntax",
          courseSlug: "css",
          moduleSlug: "intro",
          title: "CSS Syntax, Selectors & Rule Sets",
          description: "Learn how CSS rule sets attach styling declarations to HTML DOM elements.",
          durationMinutes: 12,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "CSS selector types: type, class, id, and attribute selectors",
            "Property-value declarations and semicolon terminators",
            "Connecting stylesheets with <link rel='stylesheet'>",
          ],
          introduction: `CSS (Cascading Style Sheets) is the design language of the web. It describes how HTML elements are displayed on screen, paper, or in other media.`,
          whyItMatters: `CSS completely decouples visual presentation from HTML document structure, allowing you to redesign an entire website without touching HTML.`,
          mainExample: {
            title: "Basic CSS Rule Set",
            language: "css",
            code: `/* Class Selector */\n.btn-primary {\n  background-color: #2563eb;\n  color: #ffffff;\n  padding: 12px 24px;\n  border-radius: 8px;\n  border: none;\n  font-weight: 600;\n  cursor: pointer;\n}`,
            executable: true,
            explanation: [".btn-primary selects all elements with class='btn-primary'."],
          },
          detailedExplanation: ["External stylesheets are cached by browsers, maximizing page load speed across subsequent visits."],
          commonMistakes: [],
          bestPractices: ["Always use external stylesheets linked via the <head>."],
          summary: ["CSS rule sets bind visual styles to targeted DOM selectors."],
        },
      ],
    },
    {
      id: "mod-css-2",
      slug: "cascade-specificity",
      title: "Module 2: The Cascade, Specificity & Inheritance",
      description: "How browsers resolve style conflicts, calculate specificity weights, and inherit values.",
      lessons: [
        {
          id: "css-specificity",
          slug: "cascade-and-specificity",
          courseSlug: "css",
          moduleSlug: "cascade-specificity",
          title: "The Cascade & Specificity Hierarchy",
          description: "Master specificity calculation: inline styles (1000) > IDs (100) > Classes (10) > Elements (1).",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "How the Cascade algorithm resolves conflicting properties",
            "The 4-column specificity matrix (Inline, ID, Class, Type)",
            "Why !important should be avoided in scalable codebases",
          ],
          introduction: `When multiple conflicting CSS rules target the same element, the browser uses specificity and the cascade order to determine which style wins.`,
          whyItMatters: `Understanding specificity prevents fragile codebases where developers resort to adding '!important' everywhere to override stubborn styles.`,
          mainExample: {
            title: "Specificity Resolution",
            language: "css",
            code: `/* Specificity: 0-0-0-1 (Element) */\nbutton { color: black; }\n\n/* Specificity: 0-0-1-0 (Class wins over element) */\n.action-btn { color: blue; }\n\n/* Specificity: 0-1-0-0 (ID wins over class) */\n#submit-btn { color: green; }`,
            executable: true,
            explanation: ["Higher specificity rules override lower specificity declarations regardless of order."],
          },
          detailedExplanation: ["If two selectors have equal specificity, the rule written last in the stylesheet takes precedence."],
          commonMistakes: [],
          bestPractices: ["Keep specificity low and uniform using single class selectors (BEM methodology)."],
          summary: ["Specificity and source order resolve all CSS style declarations deterministically."],
        },
      ],
    },
    {
      id: "mod-css-3",
      slug: "box-model",
      title: "Module 3: The Box Model & Sizing Mechanics",
      description: "Content, padding, border, margin, margin collapsing, and universal border-box reset.",
      lessons: [
        {
          id: "css-box-model",
          slug: "css-box-model",
          courseSlug: "css",
          moduleSlug: "box-model",
          title: "The CSS Box Model & Box Sizing",
          description: "Master the fundamental building block of all web layouts: content, padding, border, margin, and box-sizing.",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The 4 distinct layers of the CSS Box Model",
            "Why box-sizing: border-box is industry standard",
            "Margin collapsing mechanics and how to prevent it",
          ],
          introduction: `In CSS, every visible element on the page is treated as a rectangular box. The CSS Box Model describes the layers of space surrounding the content: Content -> Padding -> Border -> Margin.`,
          whyItMatters: `By default (content-box), adding padding or borders expands the physical rendered width of an element, causing unexpected overflow bugs.`,
          syntax: `*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}`,
          mainExample: {
            title: "Universal Box-Sizing Reset & Card Layout",
            language: "css",
            code: `.card {\n  box-sizing: border-box;\n  width: 350px;\n  padding: 24px;\n  border: 2px solid #2563eb;\n  background-color: #ffffff;\n  border-radius: 8px;\n}`,
            executable: true,
            explanation: ["Total computed width remains exactly 350px."],
          },
          detailedExplanation: ["border-box includes padding and border within the declared width/height."],
          commonMistakes: [],
          bestPractices: ["Always include the universal border-box reset at the top of your stylesheet."],
          summary: ["The Box Model comprises Content, Padding, Border, and Margin."],
        },
      ],
    },
    {
      id: "mod-css-4",
      slug: "typography",
      title: "Module 4: Typography, Web Fonts & Responsive Units",
      description: "rem vs em vs px, font-family, font-display: swap, and line-height.",
      lessons: [
        {
          id: "css-typography",
          slug: "responsive-typography-units",
          courseSlug: "css",
          moduleSlug: "typography",
          title: "Responsive Typography & Relative Units (rem, em, ch)",
          description: "Scale typography cleanly across mobile and desktop displays using rem, em, line-height, and clamp().",
          durationMinutes: 14,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Why rem units respect user browser accessibility font settings",
            "Using clamp() for fluid, responsive typography without media queries",
            "Optimizing web fonts with font-display: swap",
          ],
          introduction: `Typography is the cornerstone of content consumption. Using relative units like rem (relative to root font size) ensures text scales dynamically when visually impaired users increase default browser zoom.`,
          whyItMatters: `Hardcoded px font sizes ignore user accessibility preferences and break on mobile screens.`,
          mainExample: {
            title: "Fluid Typography with clamp()",
            language: "css",
            code: `h1 {\n  /* Minimum 1.75rem, Scales with viewport 4vw, Maximum 3.5rem */\n  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n}`,
            executable: true,
            explanation: ["clamp() smoothly scales font size between mobile and 4K displays seamlessly."],
          },
          detailedExplanation: ["1rem equals 16px by default in standard browser environments."],
          commonMistakes: [],
          bestPractices: ["Use rem for font sizes and padding; use clamp() for fluid headings."],
          summary: ["Relative units guarantee scalable, accessible typography across all screen sizes."],
        },
      ],
    },
    {
      id: "mod-css-5",
      slug: "colors",
      title: "Module 5: Colors, Gradients & Modern Color Spaces",
      description: "HEX, RGB, HSL, modern OKLCH color spaces, alpha channels, and linear/radial gradients.",
      lessons: [
        {
          id: "css-colors",
          slug: "modern-color-spaces-and-gradients",
          courseSlug: "css",
          moduleSlug: "colors",
          title: "Modern Color Spaces (OKLCH, HSL) & Gradients",
          description: "Design accessible, vibrant color palettes using modern CSS OKLCH, alpha transparency, and gradients.",
          durationMinutes: 14,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Perceptually uniform color spaces (OKLCH) vs sRGB",
            "Creating smooth multi-stop linear and radial gradients",
            "Ensuring WCAG AA 4.5:1 text contrast ratios",
          ],
          introduction: `Modern CSS supports advanced color gamuts like OKLCH and Display P3, delivering richer and perceptually uniform color adjustments.`,
          whyItMatters: `OKLCH ensures that adjusting color lightness produces predictable perceived brightness across all hues.`,
          mainExample: {
            title: "OKLCH Theme Colors & Mesh Gradient",
            language: "css",
            code: `:root {\n  --brand-primary: oklch(0.55 0.22 260);\n  --brand-accent: oklch(0.70 0.18 150);\n}\n.hero {\n  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));\n}`,
            executable: true,
            explanation: ["OKLCH delivers vivid wide-gamut colors on modern displays."],
          },
          detailedExplanation: ["Always verify contrast using WCAG 2.2 color contrast analyzers."],
          commonMistakes: [],
          bestPractices: ["Use CSS custom properties to manage design system color tokens."],
          summary: ["Modern color models give developers precise control over hue, chroma, and lightness."],
        },
      ],
    },
    {
      id: "mod-css-6",
      slug: "flexbox",
      title: "Module 6: Flexbox 1D Layout Engine",
      description: "Main axis vs cross axis, justify-content, align-items, flex-grow, flex-shrink, and wrap.",
      lessons: [
        {
          id: "css-flexbox",
          slug: "css-flexbox",
          courseSlug: "css",
          moduleSlug: "flexbox",
          title: "Flexbox 1D Alignment Mastery",
          description: "Master main vs cross axis, justify-content, align-items, flex-grow, flex-shrink, and flex-basis.",
          durationMinutes: 20,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The Main Axis and Cross Axis concepts in Flexbox",
            "Aligning content with justify-content and align-items",
            "Sizing items dynamically with flex: 1 1 auto",
          ],
          introduction: `Flexbox (Flexible Box Layout) is a 1-dimensional CSS layout model designed to distribute space and align items along a single axis.`,
          whyItMatters: `Flexbox revolutionized web styling by making vertical centering and navigation bars effortless.`,
          mainExample: {
            title: "Navigation Bar with Flexbox",
            language: "css",
            code: `.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  background: #0f172a;\n  color: white;\n}`,
            executable: true,
            explanation: ["display: flex activates the flex formatting context."],
          },
          detailedExplanation: ["Main Axis is aligned via justify-content; Cross Axis via align-items."],
          commonMistakes: [],
          bestPractices: ["Use gap for spacing flex items instead of margins."],
          summary: ["Flexbox excels at 1D component alignment and distribution."],
        },
      ],
    },
    {
      id: "mod-css-7",
      slug: "css-grid",
      title: "Module 7: CSS Grid 2D Layout Engine",
      description: "Grid tracks, fractional units (fr), grid-template-areas, and auto-fit responsive patterns.",
      lessons: [
        {
          id: "css-grid",
          slug: "css-grid-architecture",
          courseSlug: "css",
          moduleSlug: "css-grid",
          title: "CSS Grid 2D Layouts & Auto-Fit Grids",
          description: "Build complex two-dimensional page layouts: grid-template-columns, fr units, minmax(), and auto-fit responsive patterns.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "2D grid systems: rows and columns simultaneously",
            "The fr (fractional) unit and minmax() sizing",
            "Creating responsive card grids without media queries",
          ],
          introduction: `CSS Grid is a 2-dimensional layout system designed for rows and columns simultaneously.`,
          whyItMatters: `With CSS Grid, you can create fully responsive multi-column layouts that automatically adapt from mobile to desktop with a single line of CSS.`,
          mainExample: {
            title: "Auto-Fit Responsive Card Grid",
            language: "css",
            code: `.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}`,
            executable: true,
            explanation: ["repeat(auto-fit, minmax(280px, 1fr)) creates adaptive column counts automatically."],
          },
          detailedExplanation: ["fr unit distributes available free space across column tracks."],
          commonMistakes: [],
          bestPractices: ["Use Grid for overall page layouts and Flexbox for micro-components."],
          summary: ["CSS Grid is the standard 2D layout tool in modern web architecture."],
        },
      ],
    },
    {
      id: "mod-css-8",
      slug: "responsive-design",
      title: "Module 8: Responsive Design, Media & Container Queries",
      description: "Mobile-first breakpoints, @media queries, and modern @container queries.",
      lessons: [
        {
          id: "css-container-queries",
          slug: "container-queries-and-responsive-design",
          courseSlug: "css",
          moduleSlug: "responsive-design",
          title: "Container Queries (@container) & Responsive Design",
          description: "Style components based on their parent container width rather than the global viewport with @container.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Mobile-first responsive design philosophy",
            "Why Container Queries (@container) supersede viewport media queries for design systems",
            "Declaring container-type: inline-size",
          ],
          introduction: `While media queries inspect the entire browser window width, Container Queries allow components to adapt based on the size of their parent container.`,
          whyItMatters: `A card component placed in a narrow sidebar can display vertically, while the same card in a wide main area displays horizontally, automatically!`,
          mainExample: {
            title: "Modern Container Query Component",
            language: "css",
            code: `.card-container {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card {\n    display: flex;\n    flex-direction: row;\n  }\n}`,
            executable: true,
            explanation: ["The card adapts based on its container, enabling truly modular design system components."],
          },
          detailedExplanation: ["Container queries make components independently responsive anywhere on the page."],
          commonMistakes: [],
          bestPractices: ["Use container queries for self-contained UI widgets."],
          summary: ["Container queries deliver component-driven responsive layouts."],
        },
      ],
    },
    {
      id: "mod-css-9",
      slug: "css-variables",
      title: "Module 9: CSS Custom Properties & Dynamic Theming",
      description: "CSS variables, cascade scoping, dark/light theme switching, and JavaScript manipulation.",
      lessons: [
        {
          id: "css-vars",
          slug: "custom-properties-and-theming",
          courseSlug: "css",
          moduleSlug: "css-variables",
          title: "CSS Variables (--custom-prop) & Dynamic Theming",
          description: "Build robust dark/light themes and parameterized design tokens with native CSS variables.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Declaring custom properties with --prefix in :root",
            "Dynamic runtime overriding for dark mode ([data-theme='dark'])",
            "Manipulating CSS variables dynamically with JavaScript",
          ],
          introduction: `CSS Custom Properties (commonly called CSS variables) allow you to store values in one place and reuse them across your entire stylesheet.`,
          whyItMatters: `Unlike Sass/SCSS variables which compile away, CSS variables exist live at runtime in the browser DOM.`,
          mainExample: {
            title: "Dark / Light Mode Theming System",
            language: "css",
            code: `:root {\n  --bg-primary: #ffffff;\n  --text-primary: #0f172a;\n}\n[data-theme="dark"] {\n  --bg-primary: #0f172a;\n  --text-primary: #f8fafc;\n}\nbody {\n  background-color: var(--bg-primary);\n  color: var(--text-primary);\n}`,
            executable: true,
            explanation: ["Switching the data-theme attribute updates the entire UI palette instantly."],
          },
          detailedExplanation: ["CSS variables cascade down the DOM tree, allowing contextual overrides inside specific components."],
          commonMistakes: [],
          bestPractices: ["Organize variables into semantic tokens (--color-bg-card) rather than literal values."],
          summary: ["CSS variables make dynamic theming and design systems simple and performant."],
        },
      ],
    },
    {
      id: "mod-css-10",
      slug: "animations",
      title: "Module 10: Transitions, Keyframe Animations & View Transitions",
      description: "Hardware-accelerated transforms, transitions, cubic-bezier, keyframes, and View Transitions API.",
      lessons: [
        {
          id: "css-motion",
          slug: "transitions-and-keyframe-animations",
          courseSlug: "css",
          moduleSlug: "animations",
          title: "Hardware-Accelerated Transitions & Keyframes",
          description: "Create smooth 60fps animations using transform, opacity, @keyframes, and transition curves.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Hardware-accelerated properties: transform and opacity",
            "Why animating width/margin causes layout thrashing and jank",
            "Defining multi-step keyframe animations with @keyframes",
          ],
          introduction: `CSS animations bring web interfaces to life with micro-interactions, modal reveals, and smooth state transitions. Modern browser engines offload transform and opacity animations directly to the GPU.`,
          whyItMatters: `Animating layout properties (like width or top) triggers expensive Reflow and Repaint operations, causing frame drops on mobile devices.`,
          mainExample: {
            title: "60fps Card Hover Lift Animation",
            language: "css",
            code: `.card {\n  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease;\n  will-change: transform;\n}\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 24px -6px rgba(0,0,0,0.15);\n}`,
            executable: true,
            explanation: ["translateY animates on the GPU compositor thread without triggering layout reflow."],
          },
          detailedExplanation: ["Always stick to transform (translate, scale, rotate) and opacity for buttery smooth 60fps motion."],
          commonMistakes: [],
          bestPractices: ["Respect user motion preferences with @media (prefers-reduced-motion: reduce)."],
          summary: ["Hardware-accelerated CSS transforms deliver smooth 60fps interface animations."],
        },
      ],
    },
    {
      id: "mod-css-11",
      slug: "css-architecture",
      title: "Module 11: CSS Architecture, BEM & Modern Layout Patterns",
      description: "BEM naming conventions, utility-first CSS, CSS Modules, and layout scalability.",
      lessons: [
        {
          id: "css-arch",
          slug: "bem-and-css-architecture",
          courseSlug: "css",
          moduleSlug: "css-architecture",
          title: "Scalable CSS Architecture & BEM Methodology",
          description: "Structure large enterprise stylesheets cleanly using Block Element Modifier (BEM) and CSS Modules.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "BEM syntax: .block__element--modifier",
            "Preventing selector collision in large team codebases",
            "Integrating CSS Modules with modern React/Next.js frameworks",
          ],
          introduction: `As web applications grow to hundreds of components, organizing CSS prevents namespace clashes, dead code accumulation, and specificity wars.`,
          whyItMatters: `BEM (Block, Element, Modifier) creates self-documenting class names that make component relationships instantly clear.`,
          mainExample: {
            title: "BEM Component Structure",
            language: "css",
            code: `/* Block */\n.card { border-radius: 8px; }\n\n/* Element */\n.card__title { font-size: 1.25rem; }\n.card__body { padding: 16px; }\n\n/* Modifier */\n.card--featured { border: 2px solid #2563eb; }`,
            executable: true,
            explanation: ["BEM ensures every selector has equal (single-class) specificity."],
          },
          detailedExplanation: ["In modern Next.js/React applications, CSS Modules automatically scope class names locally."],
          commonMistakes: [],
          bestPractices: ["Keep selector nesting to a maximum of 1 level to avoid high specificity."],
          summary: ["Structured CSS architecture guarantees maintainable, scalable design systems."],
        },
      ],
    },
    {
      id: "mod-css-12",
      slug: "css-houdini-paint-api-typed-om",
      title: "Module 12: CSS Houdini: Paint API, Typed OM & Worklets",
      description: "Extend the browser's CSS rendering engine with CSS Houdini Paint Worklets, Typed OM, and `@property` custom property registration.",
      lessons: [
        {
          id: "css-houdini-paint",
          slug: "css-houdini-paint-api-typed-om-worklets",
          courseSlug: "css",
          moduleSlug: "css-houdini-paint-api-typed-om",
          title: "CSS Houdini Paint API, Typed OM & Worklets",
          description: "Hook directly into the browser's rasterization and styling pipelines with CSS Houdini: registering typed custom properties, writing paint worklets, and high-performance Typed OM.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of CSS Houdini: Typed OM, Paint API, Layout API, and Animation Worklet",
            "Registering typed custom properties using `@property` with syntax, inheritance, and initial values",
            "Authoring a custom Canvas-like procedural background using `CSS.paintWorklet.addModule()`",
            "Eliminating string parsing overhead using the CSS Typed Object Model (CSSOM)",
          ],
          introduction: `CSS Houdini is a collection of low-level browser APIs that expose the inner workings of the browser's CSS rendering engine. Rather than waiting years for browser vendors to adopt new CSS features, Houdini allows developers to write custom Paint Worklets and Typed Object Model routines that execute directly inside the browser's render pipeline.`,
          whyItMatters: `Standard CSS custom properties cannot be smoothly animated when interpolating gradients or geometric shapes. Houdini's '@property' rule teaches the browser how to smoothly transition previously un-animatable properties at 60/120 FPS.`,
          syntax: `@property --gradient-angle {\n  syntax: '<angle>';\n  inherits: false;\n  initial-value: 0deg;\n}\nbackground: paint(smooth-ripple);`,
          mainExample: {
            title: "Smooth Gradient Rotation with CSS Houdini @property",
            language: "css",
            code: `/* CSS Houdini Typed Property Registration */
@property --glow-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@property --glow-opacity {
  syntax: '<number>';
  inherits: false;
  initial-value: 0.8;
}

/* High-Performance Rotating Conic Glow */
.houdini-glow-card {
  --glow-angle: 0deg;
  --glow-opacity: 0.8;
  position: relative;
  border-radius: 16px;
  padding: 2px;
  background: conic-gradient(
    from var(--glow-angle),
    #3b82f6,
    #8b5cf6,
    #ec4899,
    #3b82f6
  );
  animation: rotateGlow 4s linear infinite;
}

.houdini-glow-card__inner {
  background: #0f172a;
  color: #ffffff;
  padding: 24px;
  border-radius: 14px;
}

/* Smooth GPU-interpolated angle transition */
@keyframes rotateGlow {
  to {
    --glow-angle: 360deg;
  }
}`,
            executable: true,
            explanation: [
              "@property --glow-angle registers the custom property with syntax '<angle>', enabling the browser's compositor to interpolate degrees smoothly.",
              "conic-gradient smoothly rotates because the browser understands the mathematical transition from 0deg to 360deg.",
              "CSS Typed OM replaces error-prone string parsing (like '16px') with typed objects (CSS.px(16)).",
            ],
          },
          detailedExplanation: [
            "Paint Worklet Lifecycle: A Paint Worklet executes in a lightweight separate thread without DOM access. The `paint(ctx, geom, properties)` function receives a 2D drawing context and container geometry, rendering custom procedural graphics directly onto the element's background box.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to animate an unregistered custom property without @property declaration.",
              badCode: ".card { --angle: 0deg; transition: --angle 1s; }\n.card:hover { --angle: 180deg; }",
              goodCode: "@property --angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }",
              explanation: "Unregistered custom properties are treated as raw strings. The browser cannot interpolate between two arbitrary strings without an explicit typed syntax definition.",
            },
          ],
          bestPractices: [
            "Use `@property` to register typed CSS variables for smooth gradient and color transitions.",
            "Use CSS Typed OM (`element.attributeStyleMap.set('opacity', 0.5)`) for high-speed JS style mutations.",
            "Check for feature support using `CSS.registerProperty` or `@supports (background: paint(x))`.",
          ],
          summary: [
            "CSS Houdini exposes low-level hooks into browser styling and rendering pipelines.",
            "`@property` gives CSS variables types, inheritance rules, and smooth animation support.",
            "Paint Worklets generate procedural background graphics directly on the GPU rasterizer.",
          ],
        },
      ],
    },
    {
      id: "mod-css-13",
      slug: "view-transitions-api",
      title: "Module 13: View Transitions API & Multi-Page Navigation Motion",
      description: "Build seamless, native-like page transitions and morph animations across Single Page Apps and Multi-Page HTML navigations.",
      lessons: [
        {
          id: "css-view-transitions",
          slug: "view-transitions-api-spa-mpa-animations",
          courseSlug: "css",
          moduleSlug: "view-transitions-api",
          title: "View Transitions API & Seamless DOM Morphing",
          description: "Create fluid cross-fade, shared-element morphing, and native app transitions between DOM states using `document.startViewTransition()` and `@view-transition` CSS rules.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The architecture of the View Transitions API: Old Snapshot vs New Snapshot pseudo-element tree",
            "Triggering DOM state transitions using `document.startViewTransition()`",
            "Shared element transitions using `view-transition-name: item-hero`",
            "Multi-Page Application (MPA) cross-document transitions using `@view-transition { navigation: auto; }`",
          ],
          introduction: `Historically, animating state transitions between different views or pages required complex JavaScript libraries (Framer Motion, FLIP calculations) that manually measured bounding boxes. The View Transitions API enables native, hardware-accelerated animations between DOM states with just a few lines of CSS.`,
          whyItMatters: `Seamless view transitions bridge the UX gap between web pages and native mobile applications. Users perceive morphing cards and persistent headers as instantaneous and fluid.`,
          syntax: `::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 300ms;\n}\n.hero-card { view-transition-name: selected-card; }`,
          mainExample: {
            title: "Shared Element Morphing with View Transitions",
            language: "css",
            code: `/* View Transitions Global Configuration */
@view-transition {
  navigation: auto; /* Enables seamless cross-document multi-page transitions */
}

/* Custom Morphing Element */
.course-card-thumbnail {
  view-transition-name: active-course-thumbnail;
  contain: layout;
}

.course-detail-header-image {
  view-transition-name: active-course-thumbnail;
}

/* Custom Cross-Fade & Scale Animation */
::view-transition-old(root) {
  animation: 250ms ease-out both fadeOut;
}

::view-transition-new(root) {
  animation: 250ms ease-in both fadeIn;
}

@keyframes fadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.98); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
}`,
            executable: true,
            explanation: [
              "@view-transition { navigation: auto; } enables native cross-page animations for standard multi-page MPA navigation.",
              "view-transition-name: active-course-thumbnail pairs the thumbnail on the catalog page with the header on the lesson page, automatically morphing size and position.",
              "::view-transition-old and ::view-transition-new control the cross-fade animation between incoming and outgoing snapshots.",
            ],
          },
          detailedExplanation: [
            "Pseudo-Element Snapshot Tree: When a transition begins, the browser creates a top-level `::view-transition` pseudo-element containing `::view-transition-group(name)`, which holds `::view-transition-image-pair(name)` with the old and new captured raster snapshots.",
          ],
          commonMistakes: [
            {
              mistake: "Assigning the same view-transition-name to multiple elements simultaneously on the same page.",
              badCode: ".card { view-transition-name: card-item; } /* Error: duplicate name */",
              goodCode: ".card.is-active { view-transition-name: active-card; }",
              explanation: "view-transition-name must be unique across the current DOM. If two visible elements share the same name, the transition will abort.",
            },
          ],
          bestPractices: [
            "Dynamically assign `view-transition-name` in JavaScript to only the clicked element right before transitioning.",
            "Respect user motion preferences with `@media (prefers-reduced-motion: reduce)` to disable transitions.",
            "Use `contain: layout` on morphing elements to optimize snapshot bounding box calculations.",
          ],
          summary: [
            "View Transitions API creates native app-quality view morphing with minimal CSS.",
            "`view-transition-name` links shared elements across different DOM states.",
            "Pseudo-elements (`::view-transition-new`) allow full keyframe animation customization.",
          ],
        },
      ],
    },
    {
      id: "mod-css-14",
      slug: "subgrid-anchor-positioning",
      title: "Module 14: Subgrid, Anchor Positioning API & Advanced Multi-Axis Layout",
      description: "Master CSS Subgrid for nested grid alignment and the CSS Anchor Positioning API for tooltips and floating popovers.",
      lessons: [
        {
          id: "css-subgrid-anchors",
          slug: "subgrid-anchor-positioning-api",
          courseSlug: "css",
          moduleSlug: "subgrid-anchor-positioning",
          title: "CSS Subgrid & Anchor Positioning API",
          description: "Eliminate floating layout bugs using CSS Subgrid for nested alignment and the modern CSS Anchor Positioning API (`anchor()`, `position-anchor`) for tethered tooltips and popovers.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How `grid-template-rows: subgrid` allows nested children to participate in parent track sizing",
            "Tethering floating dialogs, menus, and tooltips using `position-anchor: --my-anchor`",
            "Calculating dynamic offsets with the `anchor()` function (e.g. `top: anchor(bottom)`)",
            "Automatic collision detection and positioning fallbacks with `@position-try`",
          ],
          introduction: `Historically, nested card components inside CSS Grid could not align their internal headers and footers with neighboring cards because each child established an independent layout context. CSS Subgrid solves this by letting nested elements snap directly to parent tracks. Additionally, the new CSS Anchor Positioning API eliminates third-party libraries (like Popper.js or Floating UI) by tethering floating popovers to anchor elements purely in CSS.`,
          whyItMatters: `Misaligned card buttons and overflowing dropdown menus have plagued web design for decades. Subgrid and Anchor Positioning deliver pixel-perfect cross-component alignment with zero JavaScript overhead.`,
          syntax: `grid-template-rows: subgrid;\nposition: absolute;\nposition-anchor: --menu-btn;\ntop: anchor(bottom);\nleft: anchor(left);`,
          mainExample: {
            title: "Subgrid Alignment and Anchor Positioning Tooltip",
            language: "css",
            code: `/* 1. CSS Subgrid Card Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: auto 1fr auto; /* Row 1: Header, Row 2: Body, Row 3: Actions */
  gap: 24px;
}

.card-item {
  display: grid;
  grid-row: span 3; /* Spans 3 parent rows */
  grid-template-rows: subgrid; /* Snaps internal elements to parent rows! */
  padding: 20px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

/* 2. Anchor Positioning API: Tooltip Tethered to Anchor Button */
.anchor-trigger-btn {
  anchor-name: --docs-info-btn;
}

.tethered-tooltip {
  position: absolute;
  position-anchor: --docs-info-btn;
  top: anchor(bottom);
  left: anchor(center);
  transform: translateX(-50%) translateY(8px);
  padding: 8px 14px;
  border-radius: 6px;
  background: #0f172a;
  color: #f8fafc;
  font-size: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position-try-fallbacks: --flip-above;
}

@position-try --flip-above {
  bottom: anchor(top);
  top: unset;
}`,
            executable: true,
            explanation: [
              "grid-row: span 3 + grid-template-rows: subgrid allows card titles, descriptions, and action buttons to align horizontally across all columns regardless of text length.",
              "anchor-name: --docs-info-btn registers the button as a named anchor target.",
              "position-anchor and anchor(bottom) bind the tooltip's top coordinate directly to the bottom edge of the button in pure CSS.",
              "@position-try --flip-above flips the tooltip above the button automatically if it overflows the viewport.",
            ],
          },
          detailedExplanation: [
            "Collision Detection with `@position-try`: When using `position-try-fallbacks`, the browser calculates if the popover overflows the viewport. If overflow occurs, the browser automatically applies the fallback rule (e.g. flipping top/bottom or aligning to right) without JavaScript window resize listeners.",
          ],
          commonMistakes: [
            {
              mistake: "Forgetting to specify `grid-row: span N` when activating `grid-template-rows: subgrid` on a child element.",
              badCode: ".child { grid-template-rows: subgrid; }",
              goodCode: ".child { grid-row: span 3; grid-template-rows: subgrid; }",
              explanation: "Subgrid requires knowing how many parent tracks the subgrid child spans.",
            },
          ],
          bestPractices: [
            "Use Subgrid for multi-card catalogs to ensure uniform title heights and bottom-aligned action buttons.",
            "Use CSS Anchor Positioning for tooltips, custom select menus, and floating popovers.",
            "Always include `@position-try` fallbacks to handle edge-of-screen viewport boundaries.",
          ],
          summary: [
            "Subgrid aligns nested elements to parent grid tracks across sibling components.",
            "Anchor Positioning binds floating elements to target anchors in pure CSS.",
            "`@position-try` provides automated, zero-JS viewport collision resolution.",
          ],
        },
      ],
    },
    {
      id: "mod-css-15",
      slug: "scroll-driven-animations",
      title: "Module 15: Scroll-Driven Animations & Composite Layer Tuning",
      description: "Master CSS scroll-driven animations (`animation-timeline: scroll()`), view timelines, and 120 FPS GPU composite layer optimization.",
      lessons: [
        {
          id: "css-scroll-animations",
          slug: "css-scroll-driven-animations-view-timelines-gpu",
          courseSlug: "css",
          moduleSlug: "scroll-driven-animations",
          title: "Scroll-Driven Animations & GPU Composite Performance",
          description: "Build scroll-linked progress bars, parallax effects, and element reveal animations in pure CSS using `animation-timeline: scroll()` and `view()`, optimized for 120 FPS GPU compositing.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The architecture of CSS Scroll-Driven Animations: Scroll Progress Timelines vs View Progress Timelines",
            "Building page reading progress indicators using `animation-timeline: scroll()`",
            "Revealing and animating elements as they enter the viewport using `animation-timeline: view()`",
            "GPU composite layer optimization: `will-change`, transform, and opacity rendering pipelines",
          ],
          introduction: `Traditionally, creating scroll-linked animations required attaching JavaScript 'window.addEventListener("scroll", ...)' handlers that triggered frequent DOM layout recalculations, causing frame drops and battery drain. Modern CSS Scroll-Driven Animations link keyframe animations directly to the scroll offset on the compositor thread with zero JavaScript execution.`,
          whyItMatters: `Scroll animations executed on the browser's GPU compositor thread run at butter-smooth 120 FPS even when the JavaScript main thread is completely busy executing complex calculations.`,
          syntax: `animation: growProgressBar linear;\nanimation-timeline: scroll(root block);\nanimation-range: entry 0% exit 100%;`,
          mainExample: {
            title: "Pure CSS Reading Progress Bar and Scroll-Reveal Cards",
            language: "css",
            code: `/* 1. Global Reading Progress Indicator (Pure CSS) */
.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
  transform-origin: left;
  transform: scaleX(0);
  animation: expandProgressBar linear both;
  animation-timeline: scroll(root block);
  z-index: 9999;
}

@keyframes expandProgressBar {
  to {
    transform: scaleX(1);
  }
}

/* 2. Scroll-Reveal Cards using View Progress Timeline */
.scroll-reveal-card {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  animation: revealOnScroll ease-out both;
  animation-timeline: view();
  animation-range: entry 10% cover 30%;
  will-change: transform, opacity;
}

@keyframes revealOnScroll {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}`,
            executable: true,
            explanation: [
              "animation-timeline: scroll(root block) binds the progress bar animation progress (0% to 100%) to the page's vertical scroll distance.",
              "animation-timeline: view() links the animation progress to the exact moment the card enters and traverses the viewport.",
              "animation-range: entry 10% cover 30% specifies the exact scroll window when the reveal animation begins and completes.",
              "will-change: transform, opacity promotes the element to a dedicated GPU compositing layer, preventing layout repaints.",
            ],
          },
          detailedExplanation: [
            "Pixel Pipeline (Layout vs Paint vs Composite): Animations modifying `top`, `left`, `width`, or `height` force the browser to trigger expensive Layout recalculations. Animations modifying `transform` and `opacity` bypass Layout and Paint entirely, executing directly on the GPU Compositor thread.",
          ],
          commonMistakes: [
            {
              mistake: "Animating layout properties like 'width' for progress bars instead of GPU-accelerated 'transform: scaleX()'.",
              badCode: "@keyframes expand { from { width: 0%; } to { width: 100%; } }",
              goodCode: "@keyframes expand { from { transform: scaleX(0); } to { transform: scaleX(1); } }",
              explanation: "Animating 'width' forces CPU layout reflows on every frame. Animating 'transform: scaleX()' is executed entirely on the GPU compositor.",
            },
          ],
          bestPractices: [
            "Animate only `transform` and `opacity` for smooth 120 FPS performance.",
            "Use `animation-range: entry` and `exit` to fine-tune when elements trigger as they scroll into view.",
            "Promote performance-critical animated cards with `will-change: transform, opacity`.",
          ],
          summary: [
            "CSS Scroll-Driven Animations run directly on the compositor thread with zero JS overhead.",
            "`scroll()` tracks container scroll distance; `view()` tracks element visibility in the viewport.",
            "Stick to `transform` and `opacity` to maintain 120 FPS GPU hardware acceleration.",
          ],
        },
      ],
    },
    {
      id: "mod-css-16",
      slug: "container-queries-style-queries",
      title: "Module 16: Container Queries, Style Queries & Micro-Component Architecture",
      description: "Build truly responsive micro-components that adapt based on parent container width (`@container`) and computed styles.",
      lessons: [
        {
          id: "css-container-queries",
          slug: "container-queries-container-style-queries",
          courseSlug: "css",
          moduleSlug: "container-queries-style-queries",
          title: "Container Queries, Style Queries & Component Responsiveness",
          description: "Move beyond global viewport media queries using CSS Container Queries (`@container (min-width: ...)`), container style queries, and container query length units (cqw, cqh).",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why Media Queries (`@media`) fail in modular component-driven design systems",
            "Declaring containment contexts with `container-type: inline-size`",
            "Writing modular layout rules with `@container (min-width: 400px)`",
            "Using Container Query Length Units (`cqw`, `cqh`, `cqi`, `cqb`) for proportional typography",
          ],
          introduction: `For over a decade, Responsive Web Design relied exclusively on Viewport Media Queries (@media (min-width: 768px)). However, modern web applications are built from modular components placed inside sidebars, modal dialogs, and dynamic grid cards. CSS Container Queries allow components to adapt their layout based on the size of their parent container rather than the global screen width.`,
          whyItMatters: `A product card placed in a narrow 300px sidebar should render vertically, while the exact same product card placed in an 800px main content area should render horizontally. Container queries make components truly autonomous and reusable anywhere.`,
          syntax: `container-type: inline-size;\ncontainer-name: card-wrapper;\n@container (min-width: 450px) {\n  .card-inner { flex-direction: row; }\n}`,
          mainExample: {
            title: "Adaptive Autonomous Card with CSS Container Queries",
            language: "css",
            code: `/* 1. Define Container Parent Context */
.component-slot {
  container-type: inline-size;
  container-name: component-wrapper;
}

/* 2. Base (Default) Vertical Mobile-First Card */
.adaptive-product-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
}

.adaptive-product-card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  object-fit: cover;
}

.adaptive-product-card__title {
  /* Fluid typography proportional to container width! */
  font-size: clamp(1rem, 4cqi, 1.5rem);
  font-weight: 700;
  color: #0f172a;
}

/* 3. Container Query: Triggers when parent container width exceeds 500px */
@container component-wrapper (min-width: 500px) {
  .adaptive-product-card {
    flex-direction: row;
    align-items: center;
    padding: 24px;
  }

  .adaptive-product-card__image {
    width: 180px;
    aspect-ratio: 1 / 1;
  }

  .adaptive-product-card__content {
    flex: 1;
  }
}`,
            executable: true,
            explanation: [
              "container-type: inline-size establishes a containment context measuring the parent's horizontal width.",
              "@container component-wrapper (min-width: 500px) modifies card layout only when its parent slot has 500px or more available.",
              "4cqi represents 4% of the container's inline width, enabling fluid scaling typography.",
            ],
          },
          detailedExplanation: [
            "Container Style Queries: Modern CSS also supports `@container style(--theme: dark)` and `@container style(color: red)`. This allows components to adapt their internal child styles based on computed custom properties of the parent container.",
          ],
          commonMistakes: [
            {
              mistake: "Applying @container rules directly to the element that defines container-type.",
              badCode: ".card { container-type: inline-size; }\n@container (min-width: 400px) { .card { background: red; } }",
              goodCode: ".card-wrapper { container-type: inline-size; }\n@container (min-width: 400px) { .card { background: red; } }",
              explanation: "An element cannot query its own container size (to avoid infinite layout loops). Container queries must query ancestor containers.",
            },
          ],
          bestPractices: [
            "Default to `container-type: inline-size` for responsive component slots.",
            "Use container query units (`cqi`) for proportional padding and fluid typography.",
            "Combine container queries with CSS Grid for flexible design system layouts.",
          ],
          summary: [
            "Container Queries allow components to adapt to their parent container dimensions.",
            "`container-type: inline-size` establishes width containment contexts.",
            "Enables truly modular, autonomous design systems that render cleanly in sidebars, modals, or main grids.",
          ],
        },
      ],
    },
  ],
};

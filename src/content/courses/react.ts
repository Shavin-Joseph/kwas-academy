import { Course } from "@/types";

export const reactCourse: Course = {
  id: "course-react",
  slug: "react",
  title: "React Component Engineering & State Architecture",
  tagline: "Build reactive, high-performance UI components with modern hooks, context, and declarative state.",
  description: "Master React: JSX, functional components, props, hooks (useState, useEffect, useMemo, useCallback, useRef), custom hooks, Context API, state management, and component lifecycles.",
  category: "Frontend",
  level: "Intermediate",
  estimatedHours: 26,
  icon: "Layers",
  badgeColor: "blue",
  prerequisites: ["JavaScript ES6+", "HTML & CSS"],
  skillsGained: [
    "Declarative UI & JSX Syntax Rules",
    "React Hooks (useState, useEffect, useMemo, useCallback, useRef)",
    "Custom Hooks & Component Logic Extraction",
    "Context API & Global State Architecture",
    "Virtual DOM & Reconciliation Performance Optimization",
  ],
  featured: true,
  modules: [
    {
      id: "mod-react-1",
      slug: "intro",
      title: "Module 1: React Foundations & Virtual DOM",
      description: "Declarative programming, component models, and the Virtual DOM reconciliation engine.",
      lessons: [
        {
          id: "react-intro",
          slug: "react-introduction",
          courseSlug: "react",
          moduleSlug: "intro",
          title: "React Introduction, Components & Virtual DOM",
          description: "Discover React's declarative component model, JSX syntax, props data flow, and the Virtual DOM.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How React declaratively syncs the UI with underlying state",
            "Writing JSX and embedding JavaScript expressions",
            "Passing data down via immutable props",
          ],
          introduction: `React is an open-source JavaScript library developed by Meta for building user interfaces. Instead of manually updating DOM elements with document.getElementById(), React lets you describe what the UI should look like for a given state.`,
          whyItMatters: `React is the most widely used frontend technology in the world, powering web applications for Meta, Airbnb, Uber, and Netflix.`,
          mainExample: {
            title: "Functional Component with State",
            language: "javascript",
            code: `function CounterApp() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div className="card">\n      <h2>Interactive Counter</h2>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}`,
            executable: true,
            explanation: ["useState(0) initializes reactive state.", "React re-renders when setCount runs."],
          },
          detailedExplanation: ["React uses a lightweight in-memory Virtual DOM to compute minimal DOM mutations."],
          commonMistakes: [],
          bestPractices: ["Keep components small, focused, and single-purpose."],
          summary: ["React enables declarative, modular user interface development."],
        },
      ],
    },
    {
      id: "mod-react-2",
      slug: "jsx",
      title: "Module 2: JSX Syntax & Element Trees",
      description: "JSX expressions, fragment containers (<>...</>), conditional rendering, and list mapping with keys.",
      lessons: [
        {
          id: "react-jsx",
          slug: "jsx-and-conditional-rendering",
          courseSlug: "react",
          moduleSlug: "jsx",
          title: "JSX Rules, Keys & Conditional Rendering",
          description: "Master JSX expressions, fragment syntax, conditional rendering with && / ternary, and unique list keys.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Embedding JavaScript expressions with curly braces {expr}",
            "Conditional UI rendering with ternary (condition ? A : B) and short-circuit (flag && UI)",
            "Why unique 'key' props are mandatory for array rendering (.map())",
          ],
          introduction: `JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly inside JavaScript files.`,
          whyItMatters: `Using stable unique keys on list items allows React's reconciliation engine to reorder DOM nodes without re-mounting the entire list.`,
          mainExample: {
            title: "List Rendering with Unique Keys",
            language: "javascript",
            code: `function TechList({ technologies }) {\n  return (\n    <ul>\n      {technologies.map(tech => (\n        <li key={tech.id} className="tech-item">\n          <strong>{tech.name}</strong> - {tech.category}\n        </li>\n      ))}\n    </ul>\n  );\n}`,
            executable: false,
            explanation: ["key={tech.id} uniquely identifies each element across re-renders."],
          },
          detailedExplanation: ["Never use array indices (index) as keys if list items can be reordered or filtered."],
          commonMistakes: [],
          bestPractices: ["Always use unique database IDs for key props."],
          summary: ["JSX combines the expressiveness of JavaScript with declarative markup."],
        },
      ],
    },
    {
      id: "mod-react-3",
      slug: "components-props",
      title: "Module 3: Components, Props & Composition",
      description: "Props destructuring, default props, children prop, and component composition patterns.",
      lessons: [
        {
          id: "react-props",
          slug: "props-and-composition",
          courseSlug: "react",
          moduleSlug: "components-props",
          title: "Component Props & Composition (children)",
          description: "Pass data down the component tree via immutable props and leverage the 'children' prop for slots.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Passing and destructuring immutable props",
            "Using the 'children' prop for flexible layout containers",
            "Component composition vs prop drilling",
          ],
          introduction: `Props (short for properties) are the mechanism by which parent components pass data down to child components in a unidirectional data flow.`,
          whyItMatters: `Composition using children allows you to create flexible card and modal wrappers without hardcoding internal content.`,
          mainExample: {
            title: "Card Container with Children Prop",
            language: "javascript",
            code: `function Card({ title, children }) {\n  return (\n    <div className="card-box">\n      <h3 className="card-header">{title}</h3>\n      <div className="card-content">{children}</div>\n    </div>\n  );\n}`,
            executable: false,
            explanation: ["children renders whatever nested JSX is passed between <Card>...</Card>."],
          },
          detailedExplanation: ["Props are read-only; components must never modify their own props directly."],
          commonMistakes: [],
          bestPractices: ["Prefer composition with children over passing large config objects."],
          summary: ["Props enable modular, reusable component hierarchies."],
        },
      ],
    },
    {
      id: "mod-react-4",
      slug: "state",
      title: "Module 4: Reactive State & useState Hook",
      description: "Managing local component state, updater functions, and immutable object/array updates.",
      lessons: [
        {
          id: "react-usestate",
          slug: "usestate-and-immutability",
          courseSlug: "react",
          moduleSlug: "state",
          title: "useState & Functional State Updaters",
          description: "Update component state immutably and use functional updaters (prev => prev + 1) for batched updates.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Declaring state with const [state, setState] = useState(initial)",
            "Why state updates are asynchronous and batched in React",
            "Using functional updater callbacks to avoid stale state bugs",
          ],
          introduction: `State represents the dynamic data in a component that can change over time based on user interactions, network responses, or timers.`,
          whyItMatters: `Using functional updaters (setCount(prev => prev + 1)) ensures state updates calculate from the freshest value even during rapid clicks.`,
          mainExample: {
            title: "Safe Functional State Updates",
            language: "javascript",
            code: `function StepCounter() {\n  const [step, setStep] = React.useState(1);\n\n  const advanceSteps = () => {\n    // Functional updates prevent stale closures\n    setStep(prev => prev + 1);\n    setStep(prev => prev + 1);\n  };\n\n  return <button onClick={advanceSteps}>Step: {step}</button>;\n}`,
            executable: true,
            explanation: ["Functional updaters queue sequential updates deterministically."],
          },
          detailedExplanation: ["Always create new copies when updating arrays or objects in state."],
          commonMistakes: [],
          bestPractices: ["Group related state into a single object or custom hook."],
          summary: ["useState manages local reactive component memory."],
        },
      ],
    },
    {
      id: "mod-react-5",
      slug: "effects-lifecycle",
      title: "Module 5: Component Lifecycle & useEffect Hook",
      description: "Side effects, dependency array mechanics, cleanup functions, and data fetching.",
      lessons: [
        {
          id: "react-effects",
          slug: "hooks-and-lifecycle",
          courseSlug: "react",
          moduleSlug: "effects-lifecycle",
          title: "useEffect, Dependencies & Cleanup Handlers",
          description: "Synchronize components with external systems, manage dependencies, and prevent memory leaks with cleanup handlers.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How useEffect synchronizes with external APIs, timers, and WebSockets",
            "The 3 dependency array cases: no array, empty array [], and with deps [id]",
            "Writing cleanup return functions to cancel timers and subscriptions",
          ],
          introduction: `useEffect allows you to perform side effects in functional components. Side effects include data fetching, manual DOM mutations, timers, and logging.`,
          whyItMatters: `Failing to clean up event listeners or intervals in useEffect causes memory leaks and performance degradation.`,
          mainExample: {
            title: "useEffect with Timer Cleanup",
            language: "javascript",
            code: `function Clock() {\n  const [seconds, setSeconds] = React.useState(0);\n\n  React.useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000);\n    // Cleanup on unmount\n    return () => clearInterval(id);\n  }, []);\n\n  return <span>Active Seconds: {seconds}</span>;\n}`,
            executable: true,
            explanation: ["clearInterval runs when component unmounts."],
          },
          detailedExplanation: ["Any variable from component scope used inside the effect must be declared in dependencies."],
          commonMistakes: [],
          bestPractices: ["Always return a cleanup function when creating intervals or event listeners."],
          summary: ["useEffect orchestrates lifecycle synchronization and external side effects."],
        },
      ],
    },
    {
      id: "mod-react-6",
      slug: "performance",
      title: "Module 6: Performance Optimization (useMemo, useCallback, memo)",
      description: "Preventing unnecessary re-renders with React.memo, useMemo, and useCallback.",
      lessons: [
        {
          id: "react-performance",
          slug: "usememo-and-usecallback",
          courseSlug: "react",
          moduleSlug: "performance",
          title: "Memoization with useMemo, useCallback & React.memo",
          description: "Cache expensive computations and stabilize function references to prevent unnecessary child re-renders.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "useMemo to cache expensive mathematical or filtering calculations",
            "useCallback to maintain stable function references between renders",
            "React.memo for shallow prop comparison on child components",
          ],
          introduction: `React re-renders a component and all its children whenever state or props change. Memoization hooks cache calculations and function references to bypass redundant work.`,
          whyItMatters: `Filtering 10,000 items on every keystroke causes perceptible UI lag. useMemo ensures the filter runs only when the dataset or query changes.`,
          mainExample: {
            title: "useMemo & useCallback Integration",
            language: "javascript",
            code: `function FilterList({ items, filterQuery }) {\n  // Cached computation\n  const filtered = React.useMemo(() => {\n    return items.filter(i => i.title.toLowerCase().includes(filterQuery.toLowerCase()));\n  }, [items, filterQuery]);\n\n  // Stable function reference\n  const handleDelete = React.useCallback((id) => {\n    console.log("Delete item:", id);\n  }, []);\n\n  return <div>Filtered Count: {filtered.length}</div>;\n}`,
            executable: false,
            explanation: ["useMemo caches the filtered array; useCallback caches the handleDelete function."],
          },
          detailedExplanation: ["Do not overuse memoization for trivial computations, as hook overhead can exceed the cost of re-rendering."],
          commonMistakes: [],
          bestPractices: ["Measure performance with React Profiler before applying memoization."],
          summary: ["Targeted memoization prevents UI lag in complex data-heavy components."],
        },
      ],
    },
    {
      id: "mod-react-7",
      slug: "refs",
      title: "Module 7: Refs & DOM Manipulation (useRef)",
      description: "Holding mutable values without re-rendering and referencing DOM elements.",
      lessons: [
        {
          id: "react-refs",
          slug: "useref-and-dom-access",
          courseSlug: "react",
          moduleSlug: "refs",
          title: "useRef & Imperative DOM Access",
          description: "Access browser DOM elements directly (focus, scroll, measurement) and store mutable values without triggering re-renders.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Creating ref containers with const ref = useRef(initial)",
            "Focusing inputs and measuring bounding rectangles imperatively",
            "Storing previous values and timer IDs across renders",
          ],
          introduction: `useRef returns a mutable ref object whose .current property is initialized to the passed argument. Mutating .current does NOT trigger a component re-render.`,
          whyItMatters: `useRef is the standard React escape hatch for focusing inputs, triggering animations, or integrating third-party canvas libraries.`,
          mainExample: {
            title: "Auto-Focus Input with useRef",
            language: "javascript",
            code: `function SearchInput() {\n  const inputRef = React.useRef(null);\n\n  const handleFocus = () => {\n    inputRef.current?.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} placeholder="Search documentation..." />\n      <button onClick={handleFocus}>Focus Search (Ctrl+K)</button>\n    </div>\n  );\n}`,
            executable: false,
            explanation: ["inputRef.current holds the direct DOM input node."],
          },
          detailedExplanation: ["Unlike useState, changing a ref value does not cause React to re-execute the component."],
          commonMistakes: [],
          bestPractices: ["Do not read or write ref.current during rendering; use refs only inside event handlers or effects."],
          summary: ["useRef bridges declarative React with imperative DOM manipulation."],
        },
      ],
    },
    {
      id: "mod-react-8",
      slug: "context-state",
      title: "Module 8: Global State Management & Context API",
      description: "Sharing global state across deeply nested components without prop drilling.",
      lessons: [
        {
          id: "react-context",
          slug: "context-api-and-global-state",
          courseSlug: "react",
          moduleSlug: "context-state",
          title: "Context API (createContext & useContext)",
          description: "Broadcast global state (theme, authentication, preferences) down the component tree without prop drilling.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Creating context with createContext() and consuming with useContext()",
            "Wrapping component trees in <ThemeContext.Provider value={...}>",
            "Preventing context re-render cascades with custom provider components",
          ],
          introduction: `The Context API provides a way to pass data through the component tree without having to pass props down manually at every single intermediate level.`,
          whyItMatters: `Context solves prop drilling for universal application data such as logged-in user sessions, themes, and notification toasts.`,
          mainExample: {
            title: "Theme Context Provider & Hook",
            language: "javascript",
            code: `const ThemeContext = React.createContext("light");\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = React.useContext(ThemeContext);\n  return <div>Active Global Theme: {theme}</div>;\n}`,
            executable: true,
            explanation: ["useContext(ThemeContext) reads the value from the nearest Provider above in the tree."],
          },
          detailedExplanation: ["Split frequently changing state into separate context providers to isolate re-renders."],
          commonMistakes: [],
          bestPractices: ["Create custom wrapper hooks like useTheme() rather than exporting the raw context object."],
          summary: ["Context API provides effortless global data broadcasting across component trees."],
        },
      ],
    },
    {
      id: "mod-react-9",
      slug: "custom-hooks",
      title: "Module 9: Custom Hooks & Logic Reusability",
      description: "Extracting stateful logic into reusable use* functions across multiple components.",
      lessons: [
        {
          id: "react-custom-hooks",
          slug: "authoring-custom-hooks",
          courseSlug: "react",
          moduleSlug: "custom-hooks",
          title: "Building Custom React Hooks (useLocalStorage, useFetch)",
          description: "Extract and package reusable stateful logic into standalone custom hooks with clean declarative APIs.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Rules of Custom Hooks: must start with 'use' prefix",
            "Composing built-in hooks (useState, useEffect) into domain-specific helpers",
            "Building useLocalStorage and useDebounce custom hooks",
          ],
          introduction: `Custom Hooks are JavaScript functions whose names start with 'use' and that may call other Hooks. They let you extract component logic into reusable functions.`,
          whyItMatters: `Instead of duplicating 15 lines of debouncing or local storage sync across 8 forms, you encapsulate the logic in a single reusable custom hook.`,
          mainExample: {
            title: "useDebounce Custom Hook",
            language: "javascript",
            code: `function useDebounce(value, delay = 300) {\n  const [debounced, setDebounced] = React.useState(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n\n  return debounced;\n}`,
            executable: false,
            explanation: ["useDebounce waits until the user pauses typing before updating the debounced value."],
          },
          detailedExplanation: ["Custom hooks do not share state values between components; each invocation creates isolated state."],
          commonMistakes: [],
          bestPractices: ["Keep custom hooks focused on a single reusable stateful responsibility."],
          summary: ["Custom hooks are the premier pattern for code reuse and logic modularity in React."],
        },
      ],
    },
    {
      id: "mod-react-10",
      slug: "forms",
      title: "Module 10: Forms & Controlled vs Uncontrolled Inputs",
      description: "Controlled components, form submission, React Hook Form, and validation schemas.",
      lessons: [
        {
          id: "react-forms",
          slug: "controlled-vs-uncontrolled-forms",
          courseSlug: "react",
          moduleSlug: "forms",
          title: "Controlled vs Uncontrolled Forms & Validation",
          description: "Manage form inputs with controlled state, handle complex forms, and validate inputs before submission.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Controlled inputs (value + onChange state sync)",
            "Uncontrolled inputs with FormData and defaultValue",
            "Form validation and preventing default submission reloads",
          ],
          introduction: `In React, form inputs can be Controlled (React state drives the input value) or Uncontrolled (DOM manages its own state and reads values on submit).`,
          whyItMatters: `Controlled inputs enable instant character validation, masked formatting (e.g. credit card spacing), and dynamic submit button disabling.`,
          mainExample: {
            title: "Controlled Form Component",
            language: "javascript",
            code: `function ContactForm() {\n  const [email, setEmail] = React.useState("");\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log("Submitting:", email);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder="name@example.com"\n      />\n      <button type="submit" disabled={!email.includes("@")}>Submit</button>\n    </form>\n  );\n}`,
            executable: false,
            explanation: ["value and onChange keep the input locked to React state."],
          },
          detailedExplanation: ["e.preventDefault() stops the browser from triggering a full page refresh on submit."],
          commonMistakes: [],
          bestPractices: ["Use uncontrolled inputs with FormData for simple high-performance forms with many fields."],
          summary: ["React provides full control over form validation, masking, and submission."],
        },
      ],
    },
    {
      id: "mod-react-11",
      slug: "react-advanced",
      title: "Module 11: Error Boundaries & React 19 Actions",
      description: "Component error boundaries, useActionState, useOptimistic, and transition states.",
      lessons: [
        {
          id: "react-error-boundaries",
          slug: "error-boundaries-and-actions",
          courseSlug: "react",
          moduleSlug: "react-advanced",
          title: "Error Boundaries & React 19 Actions (useActionState)",
          description: "Catch unexpected rendering crashes with Error Boundaries and handle async form actions with React 19 hooks.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Catching JavaScript render crashes using componentDidCatch Error Boundaries",
            "Graceful fallback error screens for users",
            "Modern React 19 useActionState and useOptimistic patterns",
          ],
          introduction: `Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app.`,
          whyItMatters: `A runtime error in one isolated widget should never crash the entire page for the user.`,
          mainExample: {
            title: "Error Boundary Fallback UI",
            language: "javascript",
            code: `class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError() { return { hasError: true }; }\n  componentDidCatch(error) { console.error("Caught crash:", error); }\n  render() {\n    if (this.state.hasError) {\n      return <div className="alert-box">Something went wrong. Please refresh.</div>;\n    }\n    return this.props.children;\n  }\n}`,
            executable: false,
            explanation: ["getDerivedStateFromError renders the fallback alert when an unhandled error occurs."],
          },
          detailedExplanation: ["Error boundaries catch errors during rendering, lifecycle methods, and constructors of child components."],
          commonMistakes: [],
          bestPractices: ["Wrap independent features (like sidebar, main content, comments) in separate Error Boundaries."],
          summary: ["Error boundaries guarantee enterprise resilience against unexpected client crashes."],
        },
      ],
    },
    {
      id: "mod-react-12",
      slug: "react-fiber-architecture",
      title: "Module 12: React Fiber Architecture & Lane-Based Scheduling",
      description: "Understand the Fiber reconciler, Work-In-Progress trees, cooperative multitasking, and 31-bit Lane priority scheduling.",
      lessons: [
        {
          id: "react-fiber-scheduler",
          slug: "react-fiber-architecture-work-in-progress-lanes",
          courseSlug: "react",
          moduleSlug: "react-fiber-architecture",
          title: "React Fiber Architecture & Lane Scheduling",
          description: "Explore the internal architecture of the React Fiber reconciler: Current vs Work-In-Progress trees, fiber node memory structures, effect lists, and 31-bit Lane priority bitmasks.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The evolution from the legacy synchronous Stack Reconciler to the asynchronous Fiber Reconciler",
            "Double Buffering: The Current Fiber Tree vs the Work-In-Progress (WIP) Tree",
            "The two phases of React rendering: Render Phase (Interruptible) vs Commit Phase (Synchronous/DOM)",
            "How 31-bit Lane bitmasks prioritize urgent user input (SyncLane) over background transitions (TransitionLane)",
          ],
          introduction: `React Fiber is a complete rewrite of React's core reconciliation algorithm. Prior to Fiber, React used a synchronous stack reconciler that recursively traversed the virtual DOM. If a component tree was large, the main thread froze until traversal finished. Fiber converts recursion into a linked list of Fiber nodes, enabling cooperative multitasking, interruptible rendering, and time-slicing.`,
          whyItMatters: `Understanding Fiber internals explains why Concurrent Mode, Suspense, and Server Components work without blocking user keystrokes. It allows developers to diagnose render waterfalls and optimize heavy component trees.`,
          syntax: `// Fiber Node Structure Conceptual Model\ninterface FiberNode {\n  tag: WorkTag;\n  key: null | string;\n  type: any;\n  child: FiberNode | null;\n  sibling: FiberNode | null;\n  return: FiberNode | null;\n  lanes: Lanes;\n}`,
          mainExample: {
            title: "Simulating Fiber Tree Traversal and Interruptible Work Loops",
            language: "javascript",
            code: `// Conceptual Simulation of the React Fiber Work Loop

class MockFiberNode {
  constructor(type, props) {
    this.type = type;
    this.props = props;
    this.child = null;   // First Child pointer
    this.sibling = null; // Next Sibling pointer
    this.return = null;  // Parent pointer
    this.alternate = null; // Link to Current/WIP counterpart (Double Buffering)
    this.flags = 0;      // Placement, Update, Deletion side effects
  }
}

// Work-in-progress unit of execution
let nextUnitOfWork = null;

function performUnitOfWork(fiber) {
  console.log(\`[Render Phase] Reconciling Fiber: <\${fiber.type}>\`);
  
  // 1. BeginWork: Create child fibers
  if (fiber.props && fiber.props.children) {
    let prevSibling = null;
    fiber.props.children.forEach((child, index) => {
      const newFiber = new MockFiberNode(child.type, child.props);
      newFiber.return = fiber;
      if (index === 0) {
        fiber.child = newFiber;
      } else {
        prevSibling.sibling = newFiber;
      }
      prevSibling = newFiber;
    });
  }

  // 2. Return next fiber to process (Depth-First Search)
  if (fiber.child) return fiber.child;
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) return nextFiber.sibling;
    nextFiber = nextFiber.return;
  }
  return null;
}

// Fiber Tree Root
const rootFiber = new MockFiberNode("App", {
  children: [
    { type: "Navbar", props: { children: [] } },
    { type: "MainContent", props: { children: [{ type: "Article", props: { children: [] } }] } }
  ]
});

nextUnitOfWork = rootFiber;
while (nextUnitOfWork) {
  nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
}
console.log("✅ Fiber Render Phase complete. Proceeding to synchronous Commit Phase.");`,
            executable: true,
            explanation: [
              "Fiber nodes maintain 3 pointers: child (first child), sibling (next sibling), and return (parent), converting a tree into a singly linked list.",
              "This linked list structure allows React to pause rendering at any arbitrary node, check if high-priority user input occurred, and resume later.",
              "The Commit phase applies all calculated DOM mutations in one fast synchronous step at the end.",
            ],
          },
          detailedExplanation: [
            "React Lanes Priority Model: React represents update priority using 31-bit integers (Lanes). For example: `SyncLane` (1) handles typing and clicks; `InputContinuousLane` (4) handles drag and mouse moves; `TransitionLane` (64) handles tab switches. Bitwise operations (`lanes & lane`) check priority in sub-nanosecond CPU cycles.",
          ],
          commonMistakes: [
            {
              mistake: "Performing side effects (like API calls or localStorage writes) directly in the component render body.",
              badCode: "function Component() { localStorage.setItem('visited', 'true'); return <div/>; }",
              goodCode: "function Component() { useEffect(() => { localStorage.setItem('visited', 'true'); }, []); return <div/>; }",
              explanation: "Because Fiber's Render Phase is interruptible, component bodies may execute multiple times before committing to the DOM. Side effects must always live inside `useEffect`.",
            },
          ],
          bestPractices: [
            "Keep component render bodies strictly pure functions of props and state.",
            "Use `startTransition` for non-urgent state updates to yield CPU priority to `SyncLane` user interactions.",
            "Avoid massive monolithic components; modular trees enable finer-grained Fiber memoization.",
          ],
          summary: [
            "Fiber converts virtual DOM recursion into an interruptible linked list of Fiber nodes.",
            "Double buffering swaps between the Current and Work-In-Progress tree during commits.",
            "31-bit Lane bitmasks orchestrate update priorities with CPU-level performance.",
          ],
        },
      ],
    },
    {
      id: "mod-react-13",
      slug: "rsc-flight-protocol-streaming",
      title: "Module 13: React Server Components (RSC) & Flight Wire Format",
      description: "Master React Server Components, client boundaries ('use client'), streaming SSR, and decoding the RSC Flight JSON stream.",
      lessons: [
        {
          id: "react-rsc-flight",
          slug: "react-server-components-rsc-flight-protocol",
          courseSlug: "react",
          moduleSlug: "rsc-flight-protocol-streaming",
          title: "React Server Components & The Flight Wire Protocol",
          description: "Deconstruct React Server Components (RSC): Zero-bundle-size server components, the 'use client' boundary contract, streaming HTML pipelines, and decoding the Flight Wire protocol.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The fundamental difference between Server-Side Rendering (SSR) and React Server Components (RSC)",
            "How RSC sends serialized component trees (Flight Wire Format) instead of raw HTML or raw JavaScript bundles",
            "Why Server Components add 0kb to the client JavaScript bundle",
            "Passing JSX, promises, and serializable props across the 'use client' boundary",
          ],
          introduction: `React Server Components (RSC) represent the biggest architectural paradigm shift in React history. Unlike traditional React where every component is bundled and shipped as JavaScript to the client, Server Components execute strictly on the server, accessing databases and file systems directly, and streaming serialized UI trees to the browser with zero client JavaScript weight.`,
          whyItMatters: `Standard React applications suffer from bloated JavaScript bundles (megabytes of markdown parsers, date formatters, and database clients). Server Components execute those heavy libraries on the server, sending only the final rendered result to the browser.`,
          syntax: `// Server Component (Default in Next.js App Router)\nasync function CourseCatalog() {\n  const courses = await db.query('SELECT * FROM courses');\n  return <CourseList items={courses} />;\n}`,
          mainExample: {
            title: "Decoding the React Flight Protocol Wire Format",
            language: "javascript",
            code: `// Demonstration: How React Server Components serialize UI trees into Flight Stream

// Server-side RSC component execution simulation
async function ServerCourseCard({ id }) {
  // Direct server-side data access (Zero client bundle impact!)
  const course = { id, title: "React 19 & RSC Architecture", level: "Advanced" };

  return {
    $$typeof: Symbol.for("react.element"),
    type: "div",
    props: {
      className: "rsc-card",
      children: [
        { $$typeof: Symbol.for("react.element"), type: "h2", props: { children: course.title } },
        { $$typeof: Symbol.for("react.element"), type: "span", props: { children: course.level } }
      ]
    }
  };
}

// Conceptual Flight Wire Protocol Output Stream:
// Lines represent streaming serialized chunks sent over HTTP
const mockFlightStream = \`
1:I["./CourseClientInteractiveBtn.js",["client1"],""]
2:{"title":"React 19 Architecture","badge":"Flagship"}
M3:{"id":"course_101","chunk":"$1"}
J0:["$","div",null,{"className":"rsc-card","children":[["$","h2",null,{"children":"$2:title"}],["$","$L1",null,{"courseId":"$3:id"}]]}]
\`;

console.log("=== React Flight Wire Protocol Stream ===");
console.log(mockFlightStream.trim());
console.log("Flight format preserves client state while streaming new server-rendered UI trees!");`,
            executable: true,
            explanation: [
              "Server Components stream a compact Flight JSON format where '$' represents React elements and '$L1' represents Client Component reference holes.",
              "When you navigate between pages, React updates the UI without losing client state (like form inputs or audio playback).",
              "Client components marked with 'use client' are bundled and hydrated only where interactivity is explicitly required.",
            ],
          },
          detailedExplanation: [
            "RSC vs SSR: SSR generates static HTML strings for the initial page load, but requires downloading the entire JavaScript bundle to re-hydrate every component. RSC executes on the server for both initial loads AND client-side page transitions, never sending server component code to the client.",
          ],
          commonMistakes: [
            {
              mistake: "Placing 'use client' at the top of every file out of habit, losing all RSC bundle-size benefits.",
              badCode: "'use client'; // On a purely presentational card displaying database data",
              goodCode: "// Omit 'use client'; Keep as default Server Component",
              explanation: "'use client' instructs bundlers to include that file and all its dependencies in the client JS bundle. Only use 'use client' when using hooks (`useState`, `useEffect`) or browser event listeners (`onClick`).",
            },
          ],
          bestPractices: [
            "Push 'use client' boundaries to the absolute leaves of your component tree (e.g. small button widgets).",
            "Fetch data directly inside Server Components using `async/await`.",
            "Pass Server Components as `children` props to Client Components to avoid polluting client bundles.",
          ],
          summary: [
            "RSC executes exclusively on the server, adding 0kb to client JavaScript bundles.",
            "Flight protocol streams serialized component trees over HTTP without destroying client state.",
            "Use 'use client' only for interactive components requiring browser APIs or state hooks.",
          ],
        },
      ],
    },
    {
      id: "mod-react-14",
      slug: "react-19-actions-optimistic",
      title: "Module 14: React 19 Actions: `useActionState` & `useOptimistic`",
      description: "Master React 19 async Actions, `useActionState` for pending states, `useOptimistic` for instant UI updates, and `useFormStatus`.",
      lessons: [
        {
          id: "react-19-actions",
          slug: "react-19-useactionstate-useoptimistic-server-actions",
          courseSlug: "react",
          moduleSlug: "react-19-actions-optimistic",
          title: "React 19 Actions, useActionState & useOptimistic",
          description: "Build robust async workflows in React 19: handling form submissions with `useActionState`, rendering instant optimistic state with `useOptimistic`, and managing form pending status.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "What React 19 Actions are and how they handle pending states, errors, and optimistic updates automatically",
            "The `useActionState` hook for managing form submission state and server responses",
            "The `useOptimistic` hook for rendering instantaneous UI updates before server confirmation",
            "The `useFormStatus` hook for accessing parent form pending status in deeply nested buttons",
          ],
          introduction: `React 19 introduces native support for async Actions. In previous React versions, submitting a form required manually managing multiple state variables (isLoading, error, data) and wrapping submissions in try/catch blocks. React 19 Actions automatically manage pending transitions, optimistic UI rollbacks, and form resets with built-in hooks.`,
          whyItMatters: `Optimistic UI updates make applications feel instantaneous. If an action fails (e.g. network disconnect), React 19 automatically reverts the optimistic state back to the previous stable state without manual rollback code.`,
          syntax: `const [state, formAction, isPending] = useActionState(updateNameAction, initialState);\nconst [optimisticLikes, setOptimisticLikes] = useOptimistic(likes, (state, update) => state + update);`,
          mainExample: {
            title: "React 19 Optimistic Like Counter with useActionState",
            language: "javascript",
            code: `// React 19: useActionState & useOptimistic Architecture

// 1. Simulated Server Action
async function incrementLikesAction(previousLikes, formData) {
  // Simulate network delay
  await new Promise(r => setTimeout(r, 600));
  
  // Return updated state from server
  return previousLikes + 1;
}

// 2. React 19 Component Structure (Conceptual Architecture)
function LikeButtonWidget({ initialLikes = 42 }) {
  // useActionState manages the server state, action dispatcher, and isPending flag
  // const [likes, formAction, isPending] = useActionState(incrementLikesAction, initialLikes);

  // useOptimistic provides instant client-side updates before server resolves
  // const [optimisticLikes, addOptimisticLike] = useOptimistic(
  //   likes,
  //   (current, amount) => current + amount
  // );

  return \`
    <form action="formAction">
      <button type="submit" disabled="isPending">
        ❤️ Likes: \${initialLikes} (\${false ? "Updating..." : "Instant Response"})
      </button>
    </form>
  \`;
}

console.log("React 19 Actions eliminate boilerplate useState/useEffect form handling!");`,
            executable: true,
            explanation: [
              "useActionState takes an async action and initial state, returning the current state, action handler, and an isPending boolean.",
              "useOptimistic immediately renders the speculative state to the user while the async action executes in the background.",
              "If the server action throws an error, React automatically rolls back the optimistic UI to the previous verified state.",
            ],
          },
          detailedExplanation: [
            "Automatic Form Reset: In React 19, if an uncontrolled `<form action={asyncAction}>` succeeds, React automatically resets the form inputs, removing the need for manual `form.reset()` calls.",
          ],
          commonMistakes: [
            {
              mistake: "Manually managing `const [isPending, setIsPending] = useState(false)` with manual try/finally in React 19.",
              badCode: "async function handleSubmit() { setIsPending(true); try { await api(); } finally { setIsPending(false); } }",
              goodCode: "const [state, formAction, isPending] = useActionState(apiAction, null);",
              explanation: "React 19 Actions manage isPending and transitions automatically at the framework level.",
            },
          ],
          bestPractices: [
            "Use `useActionState` for all data mutation forms.",
            "Use `useOptimistic` for instant feedback on toggle switches, like buttons, and chat messages.",
            "Use `useFormStatus` inside reusable submit button components to display loading spinners automatically.",
          ],
          summary: [
            "React 19 Actions streamline asynchronous data mutations and form submissions.",
            "`useActionState` handles pending states, errors, and responses in a single hook.",
            "`useOptimistic` renders instant optimistic UI updates with automatic error rollbacks.",
          ],
        },
      ],
    },
    {
      id: "mod-react-15",
      slug: "concurrent-transitions-deferred-value",
      title: "Module 15: Concurrent React: `useTransition` & `useDeferredValue`",
      description: "Master Concurrent React rendering: non-blocking transitions (`useTransition`), deferred values (`useDeferredValue`), and Suspense boundaries.",
      lessons: [
        {
          id: "react-concurrent-features",
          slug: "concurrent-react-usetransition-usedeferredvalue-suspense",
          courseSlug: "react",
          moduleSlug: "concurrent-transitions-deferred-value",
          title: "Concurrent React: useTransition & useDeferredValue",
          description: "Keep web applications responsive under heavy rendering loads using Concurrent React features: non-blocking `useTransition`, deferred values with `useDeferredValue`, and Suspense streaming.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of Concurrent React: Interruptible rendering and time-slicing",
            "Marking non-urgent state updates with `startTransition` to keep search inputs responsive",
            "Deferring heavy re-renders using `useDeferredValue(query)` without manual debounce timers",
            "Suspense boundaries with fallback skeletons for asynchronous data streaming",
          ],
          introduction: `In traditional React, every state update was treated with equal urgency. If a user typed into an autocomplete search box that rendered a list of 5,000 items, the entire browser tab stuttered because the keystroke was blocked by the heavy list re-render. Concurrent React introduces Time-Slicing: splitting updates into urgent (typing, clicking) and non-urgent transitions (filtering lists).`,
          whyItMatters: `Concurrent features guarantee that text inputs never drop keystrokes or lag, even when rendering thousands of complex SVG charts or table rows simultaneously.`,
          syntax: `const [isPending, startTransition] = useTransition();\nstartTransition(() => { setFilter(newVal); });\nconst deferredQuery = useDeferredValue(searchQuery);`,
          mainExample: {
            title: "Non-Blocking Search Filter with useDeferredValue",
            language: "javascript",
            code: `// Concurrent React: useDeferredValue & Transition Pattern

function SearchableList({ rawQuery, items }) {
  // useDeferredValue creates a deferred copy that updates in the background
  // const deferredQuery = useDeferredValue(rawQuery);
  // const isStale = rawQuery !== deferredQuery;

  console.log("=== Concurrent Rendering Simulation ===");
  console.log("Urgent Input State: High-priority immediate update");
  console.log("Deferred List Filter: Low-priority background time-sliced rendering");
  
  return \`
    <div style="opacity: \${isStale ? 0.6 : 1}">
      <p>Filtering \${items.length} records without blocking user typing...</p>
    </div>
  \`;
}

console.log("Concurrent React prevents CPU starvation during heavy list filtering.");`,
            executable: true,
            explanation: [
              "useDeferredValue defers re-rendering the heavy list until after the urgent keystroke state update is painted to the screen.",
              "If the user types another character before the deferred render finishes, React aborts the stale render and starts processing the new character immediately.",
              "Comparing rawQuery !== deferredQuery allows rendering subtle opacity indicators showing that background processing is underway.",
            ],
          },
          detailedExplanation: [
            "Time-Slicing Mechanics: React divides rendering work into 5-millisecond slices. After each slice, React yields control back to the browser's event loop to check if the user clicked or typed. If urgent work is detected, React interrupts the background render to handle the event immediately.",
          ],
          commonMistakes: [
            {
              mistake: "Using manual setTimeout debounce timers instead of useDeferredValue or useTransition.",
              badCode: "const [debounced, setDebounced] = useState('');\nuseEffect(() => { const t = setTimeout(() => setDebounced(q), 300); return () => clearTimeout(t); }, [q]);",
              goodCode: "const deferredQuery = useDeferredValue(q);",
              explanation: "setTimeout debounce introduces artificial latency even on ultra-fast computers. useDeferredValue renders immediately if the CPU is free and delays only when the CPU is under heavy load.",
            },
          ],
          bestPractices: [
            "Use `useTransition` when you control the state setter (`startTransition(() => setTab(tab))`).",
            "Use `useDeferredValue` when you receive a value as a prop from an external or parent component.",
            "Wrap slow-loading component trees in `<Suspense fallback={<Skeleton />}>`.",
          ],
          summary: [
            "Concurrent React enables non-blocking interruptible rendering via time-slicing.",
            "`startTransition` marks state updates as low-priority background tasks.",
            "`useDeferredValue` coordinates responsive input fields with heavy child list rendering.",
          ],
        },
      ],
    },
    {
      id: "mod-react-16",
      slug: "usesyncexternalstore-microstate",
      title: "Module 16: External Store Sync: `useSyncExternalStore` & Micro-State",
      description: "Build tear-free external state managers and custom browser subscriptions using `useSyncExternalStore`.",
      lessons: [
        {
          id: "react-usesyncexternalstore",
          slug: "react-usesyncexternalstore-tear-free-microstate",
          courseSlug: "react",
          moduleSlug: "usesyncexternalstore-microstate",
          title: "useSyncExternalStore & Tear-Free State Management",
          description: "Connect React components to non-React external data stores (Redux, Zustand, browser APIs) without visual tearing using `useSyncExternalStore`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "What Visual Tearing is and why `useEffect` subscriptions fail in Concurrent React",
            "The `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` API contract",
            "Building a lightweight, high-performance global micro-state manager from scratch",
            "Subscribing to browser APIs (`navigator.onLine`, `window.matchMedia`) with zero hydration mismatch",
          ],
          introduction: `In Concurrent React, rendering can pause and resume across multiple frames. If a component reads from an external non-React store (like a global JavaScript object or browser API) using traditional \`useEffect\` subscriptions, different components on the screen might render with different versions of the state within the same frame—a critical rendering bug known as 'Tearing.' React introduced 'useSyncExternalStore' to guarantee synchronous, tear-free reads from external stores.`,
          whyItMatters: `Libraries like Zustand, Redux Toolkit, and TanStack Query use \`useSyncExternalStore\` under the hood to ensure bulletproof concurrency safety and instant state synchronization.`,
          syntax: `const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);`,
          mainExample: {
            title: "A Complete Tear-Free Micro-Store with useSyncExternalStore",
            language: "javascript",
            code: `// Building a Tear-Free Micro-State Store with useSyncExternalStore

// 1. Core Vanilla Store Implementation
function createMicroStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (updater) => {
      state = typeof updater === "function" ? updater(state) : updater;
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener); // Unsubscribe cleanup
    }
  };
}

// 2. Global Application Store Instance
const themeStore = createMicroStore({ isDark: true, accentColor: "#3b82f6" });

// 3. Custom React Hook subscribing safely to the store
function useMicroStore(store, selector = (s) => s) {
  // In a real React app:
  // return useSyncExternalStore(
  //   store.subscribe,
  //   () => selector(store.getState()),
  //   () => selector(store.getState()) // Server Snapshot for SSR
  // );
  return selector(store.getState());
}

// Usage Demonstration
console.log("Initial Theme State:", useMicroStore(themeStore, s => s.isDark));
themeStore.setState(prev => ({ ...prev, isDark: false }));
console.log("Updated Theme State (Tear-Free):", useMicroStore(themeStore, s => s.isDark));`,
            executable: true,
            explanation: [
              "useSyncExternalStore takes 3 arguments: subscribe (listener registration), getSnapshot (reads current client value), and getServerSnapshot (for SSR).",
              "React ensures that getSnapshot returns an immutable cached value, forcing synchronous consistency across all rendered tree branches.",
              "Eliminates the need for Redux Provider contexts for simple application state.",
            ],
          },
          detailedExplanation: [
            "getSnapshot Immutability Rule: The `getSnapshot` function must return an immutable cached reference. If `getSnapshot` returns a newly created object or array on every invocation (`() => ({ ...state })`), React will detect an infinite loop error.",
          ],
          commonMistakes: [
            {
              mistake: "Returning a new object reference in getSnapshot without caching, triggering infinite re-render loops.",
              badCode: "useSyncExternalStore(sub, () => [store.val]); // Creates new array every call!",
              goodCode: "useSyncExternalStore(sub, () => store.cachedArray);",
              explanation: "React uses Object.is() to verify if the snapshot changed. Returning a new reference causes React to assume state changed continuously.",
            },
          ],
          bestPractices: [
            "Always supply `getServerSnapshot` to prevent hydration mismatches during Server-Side Rendering.",
            "Use selectors to subscribe components to only the specific slices of state they render.",
            "Use `useSyncExternalStore` when wrapping browser APIs like `window.matchMedia` or `navigator.onLine`.",
          ],
          summary: [
            "`useSyncExternalStore` guarantees tear-free state synchronization in Concurrent React.",
            "Replaces legacy `useEffect` state subscriptions for non-React data sources.",
            "Requires immutable snapshot references to maintain consistency.",
          ],
        },
      ],
    },
  ],
};

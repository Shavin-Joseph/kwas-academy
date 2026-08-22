import { Course } from "@/types";

export const typescriptCourse: Course = {
  id: "course-typescript",
  slug: "typescript",
  title: "TypeScript Enterprise Architecture",
  tagline: "Type-safe JavaScript for scalable web development, interfaces, generics, and compiler options.",
  description: "Master TypeScript: static typing, primitive types, union & intersection types, interfaces, type aliases, generics, utility types (Partial, Omit, Pick), type narrowing, and strict tsconfig settings.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 24,
  icon: "Code2",
  badgeColor: "blue",
  prerequisites: ["JavaScript Fundamentals"],
  skillsGained: [
    "Static Type System & Type Inference Mechanics",
    "Interfaces, Type Aliases & Extending Contracts",
    "Generics (<T>) & Constrained Type Parameters",
    "Type Narrowing (typeof, instanceof, type guards, discriminated unions)",
    "Utility Types (Partial, Record, Readonly, ReturnType, Omit)",
  ],
  featured: true,
  modules: [
    {
      id: "mod-ts-1",
      slug: "intro",
      title: "Module 1: TypeScript Compiler & Configuration",
      description: "tsc CLI, tsconfig.json strict flags, and compile-time verification.",
      lessons: [
        {
          id: "ts-intro",
          slug: "typescript-introduction",
          courseSlug: "typescript",
          moduleSlug: "intro",
          title: "TypeScript Introduction & The Compiler (tsc)",
          description: "Discover why TypeScript is standard in modern software engineering, type annotations, and compiling to JavaScript.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Compile-time static type checking vs runtime JavaScript errors",
            "Configuring tsconfig.json with strict mode",
            "Basic type annotations (string, number, boolean, arrays, tuples)",
          ],
          introduction: `TypeScript is a typed superset of JavaScript developed by Microsoft. It adds static type checking to JavaScript, allowing developers to catch type bugs during development.`,
          whyItMatters: `Studies show that over 15% of all production JavaScript bugs are preventable with static typing.`,
          mainExample: {
            title: "Interface & Function Typing",
            language: "typescript",
            code: `interface Developer {\n  id: string;\n  name: string;\n  skills: string[];\n}\n\nfunction printDevSummary(dev: Developer): string {\n  return \`\${dev.name} specializes in: \${dev.skills.join(", ")}\`;\n}\n\nconst alex: Developer = { id: "usr_1", name: "Alex", skills: ["TypeScript", "Next.js"] };\nconsole.log(printDevSummary(alex));`,
            executable: true,
            explanation: ["interface defines an explicit shape contract enforced at compile time."],
          },
          detailedExplanation: ["TypeScript compiler strips away all type annotations, leaving clean, standard JavaScript code."],
          commonMistakes: [],
          bestPractices: ["Enable 'strict: true' in your tsconfig.json."],
          summary: ["TypeScript provides compile-time safety and world-class IDE autocompletion."],
        },
      ],
    },
    {
      id: "mod-ts-2",
      slug: "basic-types",
      title: "Module 2: Basic Types, Tuples & Enums",
      description: "Primitive types, any vs unknown, void vs never, fixed-length tuples, and enums.",
      lessons: [
        {
          id: "ts-types",
          slug: "primitives-tuples-and-enums",
          courseSlug: "typescript",
          moduleSlug: "basic-types",
          title: "Tuples, Enums & Unknown vs Any",
          description: "Master fixed-length array tuples, numeric/string enums, and the type-safe 'unknown' primitive.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Tuples with fixed length and explicit element types",
            "String literal unions vs TypeScript enums",
            "Why 'unknown' is 100% safer than 'any'",
          ],
          introduction: `TypeScript extends JavaScript primitives with strict types like Tuples (fixed-size array models) and the 'unknown' top type.`,
          whyItMatters: `Unlike 'any' which completely turns off type checking, 'unknown' forces developers to verify the type before accessing properties.`,
          mainExample: {
            title: "Type-Safe Unknown Handling",
            language: "typescript",
            code: `function handleData(input: unknown) {\n  if (typeof input === "string") {\n    console.log("String Length:", input.length); // Safe!\n  }\n}\n\nhandleData("KWAS Academy");`,
            executable: true,
            explanation: ["typeof check narrows unknown to string safely."],
          },
          detailedExplanation: ["Always prefer string literal unions ('admin' | 'user') over numeric enums in modern TypeScript."],
          commonMistakes: [],
          bestPractices: ["Never use 'any'; use 'unknown' when dealing with dynamic external API responses."],
          summary: ["Strict types eliminate unexpected runtime type errors."],
        },
      ],
    },
    {
      id: "mod-ts-3",
      slug: "interfaces-types",
      title: "Module 3: Interfaces & Type Aliases",
      description: "Defining object contracts, extending interfaces, intersection types, and declaration merging.",
      lessons: [
        {
          id: "ts-interfaces",
          slug: "interfaces-and-type-aliases",
          courseSlug: "typescript",
          moduleSlug: "interfaces-types",
          title: "Interfaces vs Type Aliases & Extending Contracts",
          description: "Learn when to use interface vs type, extending with 'extends' or '&', and readonly/optional properties.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Interface inheritance with the 'extends' keyword",
            "Type aliases for primitives, unions, and tuples",
            "Readonly and optional (?) property modifiers",
          ],
          introduction: `Interfaces and Type Aliases both define object shapes, but have distinct capabilities regarding declaration merging and union representations.`,
          whyItMatters: `Interfaces are ideal for open public API definitions, while type aliases excel at complex unions and mapped transformations.`,
          mainExample: {
            title: "Extended Interface Hierarchy",
            language: "typescript",
            code: `interface Identifiable {\n  readonly id: string;\n}\n\ninterface UserProfile extends Identifiable {\n  name: string;\n  email: string;\n  avatarUrl?: string;\n}\n\nconst user: UserProfile = {\n  id: "usr_101",\n  name: "Alex Dev",\n  email: "alex@kwas.dev"\n};\nconsole.log("User:", user.name);`,
            executable: true,
            explanation: ["readonly prevents property reassignment."],
          },
          detailedExplanation: ["Interfaces support declaration merging across multiple declaration files."],
          commonMistakes: [],
          bestPractices: ["Use interface for object models and type for unions/primitives."],
          summary: ["Interfaces and type aliases form the structural bedrock of TypeScript."],
        },
      ],
    },
    {
      id: "mod-ts-4",
      slug: "unions-intersections",
      title: "Module 4: Union, Intersection & Literal Types",
      description: "Combining types with | (OR) and & (AND), literal types, and template literal types.",
      lessons: [
        {
          id: "ts-unions",
          slug: "union-and-intersection-types",
          courseSlug: "typescript",
          moduleSlug: "unions-intersections",
          title: "Union (|) & Intersection (&) Types",
          description: "Model complex real-world data structures with union types and merge contracts with intersections.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Union types (|) for values that can be one of several types",
            "Intersection types (&) to combine multiple object shapes",
            "Template literal types (e.g. `on${Capitalize<string>}`)",
          ],
          introduction: `Union and intersection types allow you to compose existing types into sophisticated, expressive domain models.`,
          whyItMatters: `Unions model states like 'pending' | 'success' | 'error' without messy numeric flags.`,
          mainExample: {
            title: "Union State & Intersection Merge",
            language: "typescript",
            code: `type Status = "idle" | "loading" | "success" | "error";\n\ntype Timestamps = { createdAt: Date; updatedAt: Date };\ntype Article = { title: string; body: string };\ntype PersistedArticle = Article & Timestamps;\n\nconsole.log("Composed persistent entity types cleanly.");`,
            executable: true,
            explanation: ["PersistedArticle has all 4 properties from both types."],
          },
          detailedExplanation: ["Unions require type narrowing before accessing member-specific properties."],
          commonMistakes: [],
          bestPractices: ["Use literal unions for finite state machines."],
          summary: ["Unions and intersections provide flexible type composition."],
        },
      ],
    },
    {
      id: "mod-ts-5",
      slug: "functions",
      title: "Module 5: Functions, Signatures & Overloads",
      description: "Function parameter typing, return inference, optional parameters, and function overloads.",
      lessons: [
        {
          id: "ts-func-overloads",
          slug: "function-signatures-and-overloads",
          courseSlug: "typescript",
          moduleSlug: "functions",
          title: "Function Types, Callbacks & Overloads",
          description: "Write type-safe functions with explicit return types, callback signatures, and overload definitions.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Typing higher-order callback arguments ((item: T) => boolean)",
            "Declaring function overloads for multiple call signatures",
            "Return type annotations vs automatic type inference",
          ],
          introduction: `Functions in TypeScript can specify parameter types, return types, and multiple overload signatures for polymorphic behavior.`,
          whyItMatters: `Function overloads allow a single function to return different types based on the input argument type.`,
          mainExample: {
            title: "Function Overload Signatures",
            language: "typescript",
            code: `function format(value: string): string;\nfunction format(value: number): string;\nfunction format(value: string | number): string {\n  return typeof value === "number" ? \`$\${value.toFixed(2)}\` : value.trim();\n}\n\nconsole.log(format(129.5));\nconsole.log(format("  KWAS  "));`,
            executable: true,
            explanation: ["Overload signatures provide precise autocompletion for each argument type."],
          },
          detailedExplanation: ["The implementation signature at the bottom is not visible to callers."],
          commonMistakes: [],
          bestPractices: ["Always annotate return types on exported public API functions."],
          summary: ["Function typing ensures type safety across functional invocation boundaries."],
        },
      ],
    },
    {
      id: "mod-ts-6",
      slug: "generics",
      title: "Module 6: Generics & Constrained Type Parameters",
      description: "Generic functions, classes, interfaces, generic constraints (extends), and keyof operator.",
      lessons: [
        {
          id: "ts-generics",
          slug: "typescript-generics",
          courseSlug: "typescript",
          moduleSlug: "generics",
          title: "Generics (<T>) & Constrained Type Parameters",
          description: "Learn how to write reusable, type-safe functions, classes, and interfaces that work with multiple data types.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "What Generics are and why they avoid type duplication",
            "Type constraints using extends keyword (e.g. <T extends Identifiable>)",
            "Built-in Utility Types: Partial, Pick, Omit, and Record",
          ],
          introduction: `Generics allow you to write reusable code components that work with a variety of types rather than a single one.`,
          whyItMatters: `Generics power UI state hooks, database ORMs, state management stores, and type-safe HTTP clients.`,
          mainExample: {
            title: "Generic Stack Data Structure",
            language: "typescript",
            code: `class Stack<T> {\n  private items: T[] = [];\n  push(item: T): void { this.items.push(item); }\n  pop(): T | undefined { return this.items.pop(); }\n}\n\nconst nums = new Stack<number>();\nnums.push(42);\nconsole.log("Popped:", nums.pop());`,
            executable: true,
            explanation: ["Stack<T> guarantees type consistency across push and pop operations."],
          },
          detailedExplanation: ["Use keyof T to constrain generic parameters to existing object property names."],
          commonMistakes: [],
          bestPractices: ["Use descriptive generic names (e.g. <TResponse, TError>) when multiple exist."],
          summary: ["Generics enable maximum code reusability without sacrificing static type safety."],
        },
      ],
    },
    {
      id: "mod-ts-7",
      slug: "type-narrowing",
      title: "Module 7: Type Narrowing & Discriminated Unions",
      description: "Type guards (typeof, instanceof), user-defined type predicates (is), and discriminated unions.",
      lessons: [
        {
          id: "ts-narrowing",
          slug: "type-narrowing-and-predicates",
          courseSlug: "typescript",
          moduleSlug: "type-narrowing",
          title: "Discriminated Unions & Custom Type Predicates",
          description: "Eliminate impossible UI states using discriminated union tagged objects and custom 'x is Type' predicates.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Discriminated Unions with common literal tag properties",
            "Writing custom user-defined type guards (is fish)",
            "Exhaustiveness checking with the 'never' type",
          ],
          introduction: `Type narrowing is the process by which TypeScript refines a broad type (like string | number) into a specific type based on conditional checks.`,
          whyItMatters: `Discriminated unions make invalid application states mathematically impossible to represent.`,
          mainExample: {
            title: "Discriminated Union State Handler",
            language: "typescript",
            code: `type AsyncState<T> =\n  | { status: "loading" }\n  | { status: "success"; data: T }\n  | { status: "error"; error: string };\n\nfunction renderUI(state: AsyncState<string[]>) {\n  if (state.status === "success") {\n    console.log("Loaded items:", state.data.length);\n  }\n}\n\nrenderUI({ status: "success", data: ["HTML", "CSS"] });`,
            executable: true,
            explanation: ["TypeScript knows state.data exists only inside the 'success' branch."],
          },
          detailedExplanation: ["Exhaustive checks with 'never' ensure you handle every union branch in switch statements."],
          commonMistakes: [],
          bestPractices: ["Always tag state representations with a common 'status' or 'kind' property."],
          summary: ["Discriminated unions provide bulletproof state machine modeling in TypeScript."],
        },
      ],
    },
    {
      id: "mod-ts-8",
      slug: "utility-types",
      title: "Module 8: Built-in Utility Types & Mapped Types",
      description: "Partial, Required, Readonly, Record, Pick, Omit, ReturnType, and Parameters.",
      lessons: [
        {
          id: "ts-utilities",
          slug: "utility-and-mapped-types",
          courseSlug: "typescript",
          moduleSlug: "utility-types",
          title: "Built-in Utility Types (Partial, Omit, Pick, Record)",
          description: "Transform existing interfaces effortlessly with standard TypeScript utility types.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Partial<T> and Required<T> modifiers",
            "Filtering properties with Pick<T, K> and Omit<T, K>",
            "Key-value dictionaries with Record<Keys, Type>",
          ],
          introduction: `TypeScript includes standard global utility types that facilitate common type transformations without manual re-typing.`,
          whyItMatters: `Using Omit<User, 'id'> ensures updates never accidentally re-declare duplicate properties.`,
          mainExample: {
            title: "Utility Types in Action",
            language: "typescript",
            code: `interface User {\n  id: string;\n  name: string;\n  email: string;\n  role: string;\n}\n\n// Create payload without id\ntype CreateUserDto = Omit<User, "id">;\n\n// Patch payload with optional fields\ntype UpdateUserDto = Partial<CreateUserDto>;\n\nconsole.log("Utility types prevent schema drift.");`,
            executable: true,
            explanation: ["Omit removes specified keys; Partial marks all remaining fields optional."],
          },
          detailedExplanation: ["ReturnType<typeof fn> extracts the return value type of any function."],
          commonMistakes: [],
          bestPractices: ["Use Pick and Omit for API request/response transfer objects (DTOs)."],
          summary: ["Utility types supercharge type transformation and eliminate code duplication."],
        },
      ],
    },
    {
      id: "mod-ts-9",
      slug: "classes-decorators",
      title: "Module 9: Classes, Decorators & Object-Oriented TS",
      description: "Access modifiers (private, protected, public), parameter properties, and Stage 3 decorators.",
      lessons: [
        {
          id: "ts-oop",
          slug: "classes-and-access-modifiers",
          courseSlug: "typescript",
          moduleSlug: "classes-decorators",
          title: "Access Modifiers & Parameter Properties",
          description: "Encapsulate class internals with private, protected, readonly, and concise parameter property constructors.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Compile-time access modifiers (private, protected, public)",
            "ECMAScript native private fields (#field)",
            "Constructor parameter properties for instant field binding",
          ],
          introduction: `TypeScript extends JavaScript classes with visibility modifiers, abstract classes, and concise constructor parameter initialization.`,
          whyItMatters: `Parameter properties turn 5-line constructor boilerplate into a single elegant line.`,
          mainExample: {
            title: "Parameter Properties & Private State",
            language: "typescript",
            code: `class BankAccount {\n  // Parameter property initializes and assigns fields automatically\n  constructor(\n    public readonly accountId: string,\n    private balance: number\n  ) {}\n\n  getBalance(): number {\n    return this.balance;\n  }\n}\n\nconst acc = new BankAccount("ACC-1", 500);\nconsole.log("Account:", acc.accountId, "| Balance: $" + acc.getBalance());`,
            executable: true,
            explanation: ["public/private keywords in constructor create and assign class members automatically."],
          },
          detailedExplanation: ["Abstract classes define contracts with partial implementation for child subclasses."],
          commonMistakes: [],
          bestPractices: ["Use parameter properties to eliminate repetitive constructor assignments."],
          summary: ["Classes and access modifiers provide enterprise object-oriented encapsulation."],
        },
      ],
    },
    {
      id: "mod-ts-10",
      slug: "declarations",
      title: "Module 10: Module Declarations & Ambient Namespaces",
      description: ".d.ts type definition files, declare module, @types packages, and global augmentation.",
      lessons: [
        {
          id: "ts-declarations",
          slug: "type-declaration-files",
          courseSlug: "typescript",
          moduleSlug: "declarations",
          title: "Type Definition Files (.d.ts) & Ambient Types",
          description: "Author type definition files (.d.ts), augment third-party modules, and consume @types packages.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How .d.ts files describe JavaScript libraries to TypeScript",
            "Module augmentation to add custom properties to global Window or Express.Request",
            "The role of DefinitelyTyped and @types/* packages",
          ],
          introduction: `Type declaration files (.d.ts) contain only type metadata without executable runtime JavaScript code, bridging non-TypeScript libraries with the compiler.`,
          whyItMatters: `Module augmentation allows you to attach user authentication objects to Express Request types without compiler errors.`,
          mainExample: {
            title: "Express Request Type Augmentation",
            language: "typescript",
            code: `// types/express.d.ts\ndeclare global {\n  namespace Express {\n    interface Request {\n      user?: { id: string; role: string };\n    }\n  }\n}\nconsole.log("Ambient declaration files augment global types.");`,
            executable: true,
            explanation: ["declare global extends existing framework types with custom properties."],
          },
          detailedExplanation: [".d.ts files are automatically generated when tsconfig.json has 'declaration: true'."],
          commonMistakes: [],
          bestPractices: ["Store custom type declarations in a dedicated src/types/ folder."],
          summary: ["Declaration files enable seamless interoperability across the entire JavaScript ecosystem."],
        },
      ],
    },
    {
      id: "mod-ts-11",
      slug: "enterprise-ts",
      title: "Module 11: Strict tsconfig & Enterprise Best Practices",
      description: "strictNullChecks, noImplicitAny, monorepo project references, and linting rules.",
      lessons: [
        {
          id: "ts-enterprise",
          slug: "strict-tsconfig-and-best-practices",
          courseSlug: "typescript",
          moduleSlug: "enterprise-ts",
          title: "Production tsconfig.json & Monorepo Architecture",
          description: "Configure enterprise-grade TypeScript projects with strict compiler options and project references.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Strict compiler options (strictNullChecks, noImplicitAny, noUncheckedIndexedAccess)",
            "Configuring path aliases (@/*) for clean imports",
            "TypeScript Project References for blazing fast monorepo builds",
          ],
          introduction: `Configuring TypeScript with strict settings ensures maximum type safety and prevents developers from slipping untyped code into production.`,
          whyItMatters: `Enabling noUncheckedIndexedAccess catches out-of-bounds array lookups before they cause runtime undefined crashes.`,
          mainExample: {
            title: "Production tsconfig.json Preset",
            language: "json",
            code: `{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "strict": true,\n    "noImplicitAny": true,\n    "strictNullChecks": true,\n    "noUncheckedIndexedAccess": true,\n    "baseUrl": ".",\n    "paths": { "@/*": ["src/*"] }\n  }\n}`,
            executable: false,
            explanation: ["Strict flags enforce total compile-time verification across the codebase."],
          },
          detailedExplanation: ["Project references allow separate packages in a monorepo to compile independently in parallel."],
          commonMistakes: [],
          bestPractices: ["Always keep strict mode enabled from the very beginning of a project."],
          summary: ["A strict compiler configuration guarantees long-term codebase health and scalability."],
        },
      ],
    },
    {
      id: "mod-ts-12",
      slug: "type-level-metaprogramming",
      title: "Module 12: Type-Level Metaprogramming & Template Literal Types",
      description: "Perform Turing-complete type computation with recursive conditional types, distributive conditional types, and template literal type inference.",
      lessons: [
        {
          id: "ts-type-metaprogramming",
          slug: "typescript-type-level-metaprogramming-template-literals",
          courseSlug: "typescript",
          moduleSlug: "type-level-metaprogramming",
          title: "Type-Level Metaprogramming & Template Literal Inference",
          description: "Push TypeScript's type system to its limits: recursive conditional types, distributive conditional types, `infer` pattern matching, and building type-safe SQL query parsers at compile time.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why TypeScript's type system is Turing-complete and capable of arbitrary compile-time computation",
            "Distributive conditional types over naked type parameters and preventing distribution with tuples",
            "Deep pattern matching using the `infer` keyword inside recursive types",
            "Parsing string paths and dot-notation object paths (`DeepGet<T, 'user.address.city'>`)",
          ],
          introduction: `TypeScript's type system is a pure, functional, compile-time programming language. By combining Conditional Types ('T extends U ? X : Y'), Template Literal Types ('\`get\${Capitalize<string>}\`'), and the 'infer' keyword, developers can construct type-level parsers, compile-time state machines, and deeply validated API routers.`,
          whyItMatters: `Libraries like Prisma, TRPC, and Zod rely on advanced type-level programming to provide 100% end-to-end type safety between database schemas, backend routes, and frontend clients without manual type duplication.`,
          syntax: `type Flatten<T> = T extends Array<infer Item> ? Flatten<Item> : T;\ntype EventKey<T extends string> = \`on\${Capitalize<T>}\`;`,
          mainExample: {
            title: "Type-Safe Dot-Notation Property Path Resolver (DeepGet)",
            language: "typescript",
            code: `// Type-Level Metaprogramming: Deep Nested Path Resolver

// 1. Recursive String Splitter Type
type SplitPath<S extends string> =
  S extends \`\${infer Head}.\${infer Tail}\`
    ? [Head, ...SplitPath<Tail>]
    : [S];

// 2. Type-Level Object Path Navigation
type DeepGet<Obj, Path extends string> =
  Path extends \`\${infer Key}.\${infer Rest}\`
    ? Key extends keyof Obj
      ? DeepGet<Obj[Key], Rest>
      : never
    : Path extends keyof Obj
      ? Obj[Path]
      : never;

// Test Domain Structure
interface EnterpriseConfig {
  database: {
    cluster: {
      primaryHost: string;
      port: number;
      ssl: boolean;
    };
    maxConnections: number;
  };
  environment: "production" | "staging";
}

// 3. Strongly Typed Path Extractor Function
function getNestedConfig<
  T extends object,
  P extends "database.cluster.primaryHost" | "database.cluster.port" | "database.maxConnections"
>(obj: T, path: P): DeepGet<T, P> {
  const keys = path.split('.');
  let current: any = obj;
  for (const k of keys) {
    current = current[k];
  }
  return current;
}

const config: EnterpriseConfig = {
  database: {
    cluster: { primaryHost: "db-primary.kwas.internal", port: 5432, ssl: true },
    maxConnections: 100
  },
  environment: "production"
};

// Type is inferred strictly as string!
const host = getNestedConfig(config, "database.cluster.primaryHost");
console.log("Resolved Host at Compile-Time:", host.toUpperCase());`,
            executable: true,
            explanation: [
              "Template literal type `${infer Key}.${infer Rest}` parses dot-separated string keys recursively.",
              "DeepGet navigates object types at compile time, returning the precise scalar type at the end of the path.",
              "If an invalid string path is provided, the TypeScript compiler immediately rejects it with a red squiggly line.",
            ],
          },
          detailedExplanation: [
            "Preventing Distribution in Conditional Types: When a generic type `T` is a union (e.g. `string | number`), `T extends any` distributes across each member. Wrapping in a tuple `[T] extends [any]` disables distribution, evaluating the union as an atomic unit.",
          ],
          commonMistakes: [
            {
              mistake: "Exceeding TypeScript's recursion depth limit (1000 iterations) without base-case short-circuiting.",
              badCode: "type InfiniteTuple<T, Acc extends any[] = []> = InfiniteTuple<T, [T, ...Acc]>;",
              goodCode: "type BoundedTuple<T, N extends number, Acc extends any[] = []> = Acc['length'] extends N ? Acc : BoundedTuple<T, N, [T, ...Acc]>;",
              explanation: "Recursive type aliases must always include a terminating base case to avoid compiler stack overflow errors.",
            },
          ],
          bestPractices: [
            "Use template literal types to model event listeners (`on${Capitalize<Event>}`).",
            "Combine `infer` with tuple types for zero-cost array manipulation at compile time.",
            "Use `[T] extends [never]` to check for the `never` type accurately without false distribution.",
          ],
          summary: [
            "TypeScript's type system allows functional metaprogramming at compile time.",
            "`infer` enables pattern matching and extracting types from complex generic structures.",
            "Template literal types parse string DSLs and nested object paths with 100% type safety.",
          ],
        },
      ],
    },
    {
      id: "mod-ts-13",
      slug: "nominal-typing-type-narrowing",
      title: "Module 13: Branded Nominal Typing & Advanced Type Narrowing",
      description: "Enforce nominal type safety using Branded Types (`__brand`), custom type predicates (`is`), and assertion signatures.",
      lessons: [
        {
          id: "ts-nominal-branded",
          slug: "branded-nominal-typing-type-predicates-assertions",
          courseSlug: "typescript",
          moduleSlug: "nominal-typing-type-narrowing",
          title: "Branded Nominal Types, Type Predicates & Assertions",
          description: "Transform TypeScript's structural type system into nominal type safety using unique symbol branding, custom user-defined type predicates (`val is User`), and assertion functions (`asserts condition`).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Structural typing (Duck Typing) vs Nominal typing (Name-based identity)",
            "Creating zero-overhead Branded Types (e.g. `UserId`, `OrderId`, `EmailAddress`)",
            "User-defined type predicates (`function isUser(x: unknown): x is User`)",
            "Assertion signatures (`function assertAuthenticated(u: User | null): asserts u is User`)",
          ],
          introduction: `TypeScript uses a Structural Type System (Duck Typing): if two types have identical properties, they are considered compatible. While convenient, this allows catastrophic domain errors—such as accidentally passing a 'UserId' into a function expecting a 'ProductId' because both are underlying strings. Branded Types introduce Nominal Type Safety at compile time with zero runtime memory overhead.`,
          whyItMatters: `Financial transactions, cryptographic keys, and database IDs must never be mixed up. Branded types guarantee that raw unvalidated strings cannot be passed into sensitive domain functions.`,
          syntax: `type Brand<K, T> = K & { readonly __brand: T };\ntype UserId = Brand<string, 'UserId'>;\nfunction assertDefined<T>(val: T): asserts val is NonNullable<T> { ... }`,
          mainExample: {
            title: "Zero-Overhead Branded Types & Safe Assertion Signatures",
            language: "typescript",
            code: `// Nominal Branded Types & Assertion Signatures

declare const __brand: unique symbol;
type Branded<T, BrandName> = T & { readonly [__brand]: BrandName };

// Domain Types: Under the hood they are strings, but the compiler treats them as distinct nominal types!
type UserId = Branded<string, 'UserId'>;
type OrderId = Branded<string, 'OrderId'>;
type PositiveAmount = Branded<number, 'PositiveAmount'>;

// 1. Validation Constructor Functions (Smart Constructors)
function parseUserId(raw: string): UserId {
  if (!raw.startsWith("usr_")) {
    throw new Error(\`Invalid UserId format: '\${raw}'\`);
  }
  return raw as UserId;
}

function parseAmount(num: number): PositiveAmount {
  if (num <= 0) {
    throw new Error("Amount must be positive.");
  }
  return num as PositiveAmount;
}

// 2. Safe Domain Business Service
function transferBalance(sender: UserId, recipient: UserId, amount: PositiveAmount) {
  console.log(\`Transferred $\${amount} from \${sender} to \${recipient}.\`);
}

const userA = parseUserId("usr_alpha");
const userB = parseUserId("usr_beta");
const payment = parseAmount(250.00);

transferBalance(userA, userB, payment);

// The compiler PREVENTS passing raw unverified strings!
// transferBalance("usr_raw", "order_123", 50); // Compiler Error!`,
            executable: true,
            explanation: [
              "Branded<T, BrandName> attaches a phantom type tag via a unique symbol without altering the runtime value.",
              "UserId and OrderId are physically strings at runtime, but the TypeScript compiler forbids assigning one to the other.",
              "Smart constructors (parseUserId) ensure invalid strings are rejected before being cast into branded nominal types.",
            ],
          },
          detailedExplanation: [
            "Assertion Functions: Using `asserts val is T` allows validation functions to narrow types across the remainder of the calling scope without returning boolean values. If an assertion throws, the compiler knows the subsequent code is unreachable.",
          ],
          commonMistakes: [
            {
              mistake: "Using regular type aliases (`type UserId = string`) and expecting compiler isolation.",
              badCode: "type UserId = string;\ntype OrderId = string;\nlet u: UserId = '123'; let o: OrderId = u; // Allowed by structural typing!",
              goodCode: "type UserId = Branded<string, 'UserId'>;\ntype OrderId = Branded<string, 'OrderId'>;\n// let o: OrderId = u; // Compiler error!",
              explanation: "Plain type aliases are just nicknames for the same underlying structural type. Only branding enforces distinct nominal identity.",
            },
          ],
          bestPractices: [
            "Brand sensitive primitive identifiers (UserIds, BankAccountNumbers, EncryptedTokens).",
            "Use type predicates (`x is T`) in `.filter()` pipelines to narrow array element types cleanly.",
            "Combine branded types with Zod or Valibot runtime schema validation.",
          ],
          summary: [
            "Branded Types enforce nominal type safety on top of TypeScript's structural type system.",
            "Smart constructors guarantee domain invariants before casting to branded types.",
            "Assertion signatures (`asserts x is T`) narrow types cleanly after validation passes.",
          ],
        },
      ],
    },
    {
      id: "mod-ts-14",
      slug: "compiler-api-ast-plugins",
      title: "Module 14: TypeScript Compiler API & AST Metaprogramming",
      description: "Analyze and manipulate Abstract Syntax Trees (AST), write custom ts-patch compiler plugins, and generate type-safe code.",
      lessons: [
        {
          id: "ts-compiler-api",
          slug: "typescript-compiler-api-ast-transformations-plugins",
          courseSlug: "typescript",
          moduleSlug: "compiler-api-ast-plugins",
          title: "TypeScript Compiler API & AST Code Transformation",
          description: "Inspect, traverse, and transform TypeScript code programmatically using the official TypeScript Compiler API, ts.createSourceFile, AST Visitor patterns, and custom transformer plugins.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of the TypeScript Compiler: Scanner (Tokens), Parser (AST), Binder (Symbols), Checker (Types), and Emitter (JS)",
            "Creating and inspecting AST nodes using `ts.createSourceFile()` and AST Explorer",
            "Writing custom code transformers using `ts.visitNode()` and `ts.visitEachChild()`",
            "Injecting automatic logging, performance tracing, or schema validation via compiler transformers",
          ],
          introduction: `The TypeScript Compiler ('tsc') is not a black box; it is fully exposed as an open npm package ('typescript'). The TypeScript Compiler API allows developers to write custom linters, code generators, automated refactoring tools, and AST transformers (like ttypescript or ts-patch) that rewrite TypeScript syntax during the build phase.`,
          whyItMatters: `Frameworks like TypeORM, NestJS, and TS-to-Zod generators use the Compiler API to extract type metadata and generate validation schemas automatically, eliminating manual sync errors.`,
          syntax: `const sourceFile = ts.createSourceFile('file.ts', code, ts.ScriptTarget.Latest);\nts.forEachChild(sourceFile, node => { ... });`,
          mainExample: {
            title: "Traversing and Analyzing AST Nodes with TypeScript Compiler API",
            language: "typescript",
            code: `// TypeScript Compiler API: AST Inspection Demonstration
import ts from "typescript";

const sampleCode = \`
  interface CourseMetadata {
    id: string;
    title: string;
    modulesCount: number;
  }

  function launchCourse(track: CourseMetadata): boolean {
    console.log("Launching:", track.title);
    return true;
  }
\`;

// 1. Parse raw code into an Abstract Syntax Tree (AST) SourceFile
const sourceFile = ts.createSourceFile(
  "sample.ts",
  sampleCode,
  ts.ScriptTarget.ES2022,
  true /* setParentNodes */
);

console.log("=== TypeScript AST Traversal ===");

// 2. AST Visitor function
function inspectNode(node: ts.Node, depth: number = 0) {
  const indent = "  ".repeat(depth);
  const syntaxKindName = ts.SyntaxKind[node.kind];

  if (ts.isInterfaceDeclaration(node)) {
    console.log(\`\${indent}📦 Interface Declaration: \${node.name.text}\`);
  } else if (ts.isFunctionDeclaration(node)) {
    console.log(\`\${indent}⚡ Function Declaration: \${node.name?.text}()\`);
  } else if (ts.isPropertySignature(node)) {
    console.log(\`\${indent}  - Property: \${(node.name as ts.Identifier).text}\`);
  }

  ts.forEachChild(node, (child) => inspectNode(child, depth + 1));
}

inspectNode(sourceFile);`,
            executable: true,
            explanation: [
              "ts.createSourceFile parses source text into a complete TypeScript Abstract Syntax Tree.",
              "ts.isInterfaceDeclaration and ts.isFunctionDeclaration are type guards provided by the Compiler API.",
              "ts.forEachChild recursively traverses child nodes across the syntax tree.",
            ],
          },
          detailedExplanation: [
            "Custom Transformer Pipeline: A custom transformer (`ts.TransformerFactory<ts.SourceFile>`) intercepts AST nodes during the emit phase. You can rewrite syntax (e.g. converting decorators to wrapper functions or stripping private metadata) before emitting clean JavaScript code.",
          ],
          commonMistakes: [
            {
              mistake: "Mutating existing AST nodes directly in-place instead of creating updated clone nodes with `ts.factory`.",
              badCode: "node.name.text = 'renamed'; // Dangerous AST corruption",
              goodCode: "return ts.factory.updateFunctionDeclaration(node, ..., ts.factory.createIdentifier('renamed'), ...);",
              explanation: "TypeScript AST nodes are immutable structures. Always use `ts.factory.create*` or `ts.factory.update*` methods when transforming ASTs.",
            },
          ],
          bestPractices: [
            "Use AST Explorer (astexplorer.net) with the TypeScript parser to inspect node hierarchy interactively.",
            "Use `ts.factory` for creating new or modified AST nodes in transformers.",
            "Leverage the TypeChecker (`program.getTypeChecker()`) when symbol and type resolution is required.",
          ],
          summary: [
            "TypeScript Compiler API exposes Scanner, Parser, Binder, Checker, and Emitter.",
            "AST Visitor patterns analyze and inspect code syntax programmatically.",
            "Custom transformers modify and generate code during compilation builds.",
          ],
        },
      ],
    },
    {
      id: "mod-ts-15",
      slug: "monorepo-project-references",
      title: "Module 15: Monorepo Project References & Incremental Builds",
      description: "Scale large enterprise codebases with TypeScript Project References (`composite: true`), solution tsconfigs, and incremental caching.",
      lessons: [
        {
          id: "ts-project-references",
          slug: "typescript-monorepo-project-references-composite-builds",
          courseSlug: "typescript",
          moduleSlug: "monorepo-project-references",
          title: "Monorepo Project References & Incremental Caching",
          description: "Structure massive enterprise TypeScript monorepos using Project References, composite configurations (`composite: true`), `.tsbuildinfo` cache files, and `tsc --build` orchestration.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why monolithic `tsconfig.json` files slow down IDE performance and CI/CD build pipelines",
            "Configuring Project References using `composite: true` and `declaration: true`",
            "Orchestrating multi-package monorepos with `tsc --build --watch` (`tsc -b`)",
            "Speeding up CI/CD compilation with `.tsbuildinfo` incremental build caches",
          ],
          introduction: `In large engineering organizations with dozens of packages (e.g. '@app/core', '@app/api', '@app/web'), compiling the entire codebase with a single 'tsconfig.json' causes massive memory consumption and slow build times. TypeScript Project References allow a monorepo to be structured as a graph of modular, independent packages that compile in parallel and cache their '.d.ts' output.`,
          whyItMatters: `Project References reduce monorepo compilation times from minutes to seconds by building only the specific packages that changed and reading cached type declarations for untouched dependencies.`,
          syntax: `{\n  "compilerOptions": { "composite": true, "declaration": true },\n  "references": [{ "path": "../core" }]\n}`,
          mainExample: {
            title: "Monorepo Solution tsconfig and Package Reference Architecture",
            language: "json",
            code: `// Root Solution tsconfig.json (Orchestrator)
{
  "files": [],
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/ui-components" },
    { "path": "./services/backend-api" }
  ]
}

// packages/core/tsconfig.json (Composite Library)
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "rootDir": "src",
    "outDir": "dist",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true
  },
  "include": ["src"]
}

// services/backend-api/tsconfig.json (Consumer Package)
{
  "compilerOptions": {
    "composite": true,
    "target": "ES2022",
    "module": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true
  },
  "references": [
    { "path": "../../packages/core" }
  ],
  "include": ["src"]
}`,
            executable: false,
            explanation: [
              "Root tsconfig contains an empty 'files: []' array and references all child sub-projects.",
              "composite: true enforces that the package produces .d.ts declarations and tracks its dependencies explicitly.",
              "Running 'tsc -b' automatically determines the dependency graph topological order and compiles packages concurrently.",
            ],
          },
          detailedExplanation: [
            ".tsbuildinfo Caching: When `composite` or `incremental` is enabled, TypeScript generates a `.tsbuildinfo` file storing file hashes and dependency timestamps. On subsequent runs, `tsc -b` skips compilation for all untouched packages in O(1) time.",
          ],
          commonMistakes: [
            {
              mistake: "Importing source TypeScript files (`import '../../packages/core/src'`) directly instead of package dist entry points.",
              badCode: "import { User } from '../../packages/core/src/user';",
              goodCode: "import { User } from '@kwas/core';",
              explanation: "Importing from internal 'src' bypasses project references and forces TypeScript to re-check the entire dependency package repeatedly.",
            },
          ],
          bestPractices: [
            "Always include `declaration: true` and `declarationMap: true` in composite packages for instant IDE Jump-To-Definition.",
            "Use `tsc -b --clean` to clear build artifacts during CI cache resets.",
            "Keep root `tsconfig.json` strictly as a solution configuration referencing all sub-packages.",
          ],
          summary: [
            "Project References partition monorepos into modular, independently compiled packages.",
            "`tsc --build` computes dependency graphs and executes incremental builds.",
            "`.tsbuildinfo` caches build metadata for ultra-fast CI/CD pipeline runs.",
          ],
        },
      ],
    },
    {
      id: "mod-ts-16",
      slug: "variance-schema-validation",
      title: "Module 16: Variance Annotations (`in out`) & Type-Safe Schemas",
      description: "Master covariance, contravariance, explicit variance annotations (`in`, `out`), and build type-safe runtime schema validators.",
      lessons: [
        {
          id: "ts-variance-schemas",
          slug: "typescript-variance-annotations-type-safe-schema-validation",
          courseSlug: "typescript",
          moduleSlug: "variance-schema-validation",
          title: "Variance Annotations (in/out) & Schema Validation",
          description: "Master type variance: Covariance, Contravariance, Bivariance, and Invariance, explicit `in out` variance annotations in TypeScript 4.7+, and building a type-safe runtime schema engine.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 forms of Variance: Covariance (returns), Contravariance (arguments), Invariance, and Bivariance",
            "Explicit variance annotations: `type Getter<out T>` (Covariant) and `type Setter<in T>` (Contravariant)",
            "How variance annotations speed up TypeScript type-checking performance by up to 50%",
            "Building a lightweight, zero-dependency type-safe schema validator (like micro-Zod)",
          ],
          introduction: `Variance describes how subtyping between more complex types relates to subtyping between their components. For example, if 'Cat' is a subtype of 'Animal', is 'Getter<Cat>' a subtype of 'Getter<Animal>'? (Covariant). Is 'Setter<Cat>' a subtype of 'Setter<Animal>'? (Contravariant). TypeScript 4.7 introduced explicit 'in' and 'out' variance annotations, allowing developers to explicitly declare type relationships and dramatically accelerate compiler performance.`,
          whyItMatters: `Without explicit variance annotations, TypeScript must recursively compare the entire structural shape of deeply nested generic types. Explicit 'in out' annotations tell the compiler the variance contract immediately, cutting type-checking times in large codebases in half.`,
          syntax: `interface Producer<out T> { get(): T; }\ninterface Consumer<in T> { set(value: T): void; }\ninterface Invariant<in out T> { get(): T; set(val: T): void; }`,
          mainExample: {
            title: "Building a Type-Safe Runtime Schema Engine with Type Inference",
            language: "typescript",
            code: `// Type-Safe Runtime Schema Engine with Inferred Types

// 1. Abstract Schema with Covariant Output Type Parameter (out T)
abstract class Schema<out T> {
  abstract parse(input: unknown): T;
}

// 2. String Validator
class StringSchema extends Schema<string> {
  parse(input: unknown): string {
    if (typeof input !== "string") {
      throw new Error(\`Expected string, received \${typeof input}\`);
    }
    return input;
  }
}

// 3. Number Validator
class NumberSchema extends Schema<number> {
  parse(input: unknown): number {
    if (typeof input !== "number" || isNaN(input)) {
      throw new Error(\`Expected number, received \${typeof input}\`);
    }
    return input;
  }
}

// 4. Object Validator Inferring Shape at Compile-Time
type Infer<S> = S extends Schema<infer T> ? T : never;

class ObjectSchema<Shape extends Record<string, Schema<any>>> extends Schema<{
  [K in keyof Shape]: Infer<Shape[K]>
}> {
  constructor(private shape: Shape) {
    super();
  }

  parse(input: unknown): { [K in keyof Shape]: Infer<Shape[K]> } {
    if (typeof input !== "object" || input === null) {
      throw new Error("Expected object.");
    }
    const result: any = {};
    for (const key in this.shape) {
      result[key] = this.shape[key].parse((input as any)[key]);
    }
    return result;
  }
}

// Fluent API
const z = {
  string: () => new StringSchema(),
  number: () => new NumberSchema(),
  object: <S extends Record<string, Schema<any>>>(shape: S) => new ObjectSchema(shape)
};

// Define Schema
const UserSchema = z.object({
  id: z.string(),
  score: z.number()
});

// Inferred TypeScript Type: { id: string; score: number }
type User = Infer<typeof UserSchema>;

const validData = UserSchema.parse({ id: "usr_99", score: 98.5 });
console.log("✅ Verified Valid Object at Runtime:", validData);`,
            executable: true,
            explanation: [
              "abstract class Schema<out T> declares covariance: Schema<Cat> is a subtype of Schema<Animal> because T is only produced.",
              "type Infer<S> extracts the strongly typed output directly from the schema at compile time.",
              "ObjectSchema parses untrusted data at runtime and infers the exact TypeScript interface without writing duplicate types.",
            ],
          },
          detailedExplanation: [
            "Why Function Arguments are Contravariant: If a function expects a `Cat` handler, you can safely pass an `Animal` handler (it handles everything Cat does and more). But you cannot pass a `SiameseCat` handler (it might fail on other Cats). Thus, function parameter types invert the subtyping hierarchy (`in T`).",
          ],
          commonMistakes: [
            {
              mistake: "Marking a type parameter as `out T` when it appears in input/argument positions.",
              badCode: "interface Bad<out T> { consume(x: T): void; } // Compiler Error: Contravariant position",
              goodCode: "interface Good<in T> { consume(x: T): void; }",
              explanation: "`out` is only valid when T appears exclusively in return/output positions. `in` is required when T appears in parameter positions.",
            },
          ],
          bestPractices: [
            "Use explicit `out T` for read-only stores, promises, and collections.",
            "Use explicit `in T` for event listeners, serializers, and comparison functions.",
            "Build type-safe schema validators to eliminate `any` casts at network boundaries.",
          ],
          summary: [
            "Variance annotations (`in`, `out`) declare structural subtyping behavior explicitly.",
            "Covariant (`out T`) types produce values; Contravariant (`in T`) types consume values.",
            "Explicit variance annotations significantly improve compile-time type-checking speed.",
          ],
        },
      ],
    },
  ],
};

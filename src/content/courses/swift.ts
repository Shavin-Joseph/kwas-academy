import { Course } from "@/types";

export const swiftCourse: Course = {
  id: "course-swift",
  slug: "swift",
  title: "Swift 6 Modern Systems, Concurrency & iOS Architecture",
  tagline: "Compile-time memory safety, Protocol-Oriented Programming, Swift 6 actors, async/await, and SwiftUI architecture.",
  description: "Master modern Swift 6 programming: LLVM compiler internals, strict type safety, Optionals, value vs reference semantics, Protocol-Oriented Programming (POP), Automatic Reference Counting (ARC), structured concurrency (async/await, TaskGroups), data-race safety with Actors and Sendable types, generics with opaque 'some' and existential 'any' types, SwiftUI declarative architecture, and server-side Swift with Vapor.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 32,
  icon: "Zap",
  badgeColor: "orange",
  prerequisites: ["Familiarity with fundamental programming concepts."],
  skillsGained: [
    "Swift 6 Complete Data-Race Safety & Strict Concurrency",
    "Value Semantics with Structs, Enums & Copy-on-Write (COW)",
    "Protocol-Oriented Programming (POP) & Generics",
    "Automatic Reference Counting (ARC), Weak/Unowned & Memory Leak Elimination",
    "Structured Concurrency with async/await, Task, and TaskGroup",
    "Thread-Safe State Synchronization with Actors & Global Actors (@MainActor)",
    "Opaque Return Types (`some`) vs Existential Containers (`any`)",
    "Declarative UI Architecture with SwiftUI & Observation Framework (@Observable)",
    "Server-Side Swift High-Performance Microservices with Vapor",
    "Unit Testing, XCTest, and Performance Metric Benchmarking",
  ],
  featured: true,
  modules: [
    {
      id: "mod-sw-1",
      slug: "swift-philosophy-llvm",
      title: "Module 1: Swift Philosophy, LLVM Compiler & Swift 6 Safety",
      description: "Understand Swift's safety-first design, LLVM compilation pipeline, and Swift 6 compile-time data-race safety.",
      lessons: [
        {
          id: "sw-overview",
          slug: "swift-philosophy-llvm-compiler-safety",
          courseSlug: "swift",
          moduleSlug: "swift-philosophy-llvm",
          title: "Swift 6 Philosophy, LLVM Toolchain & Safety Architecture",
          description: "Discover how Swift combines systems-level performance with modern language safety, the LLVM compilation pipeline, and Swift 6's complete compile-time data-race safety.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The foundational goals of Swift: Safe, Fast, and Expressive",
            "The Swift compilation pipeline: Swift AST → SIL (Swift Intermediate Language) → LLVM IR → Native Binary",
            "How Swift 6 mathematically eliminates data races at compile time",
            "Writing modern top-level Swift programs with type inference",
          ],
          introduction: `Swift is a powerful, open-source programming language developed by Apple and the open-source community. Designed as a modern successor to C, C++, and Objective-C, Swift provides native systems-level performance without garbage collection overhead, while enforcing compile-time memory safety, type inference, and complete data-race elimination in Swift 6.`,
          whyItMatters: `Swift powers the entire Apple ecosystem (iOS, iPadOS, macOS, watchOS, visionOS) and is increasingly utilized in high-performance cloud backends. Its safety guarantees prevent entire classes of security vulnerabilities, including buffer overflows, uninitialized memory reads, and multithreaded race conditions.`,
          syntax: `let name: String = "KWAS Academy"\nvar activeUsers = 1000\nprint("Welcome to \\(name)")`,
          mainExample: {
            title: "A Modern Type-Safe Swift 6 Program",
            language: "swift",
            code: `// Swift 6: Safe, Fast, and Expressive
import Foundation

struct AcademyTrack: Identifiable, Sendable {
    let id: UUID
    let title: String
    let language: String
    let isZeroPaywall: Boolean
}

func generatePlatformSummary() -> String {
    let track = AcademyTrack(
        id: UUID(),
        title: "Swift 6 Systems & iOS Architecture",
        language: "Swift 6.0",
        isZeroPaywall: true
    )

    return """
    ========================================
    Course: \\(track.title)
    Compiler: Swift 6.0 (LLVM Native Backend)
    Access: \\(track.isZeroPaywall ? "100% Free Open Docs" : "Locked")
    Memory Management: Deterministic ARC (Zero GC Latency)
    ========================================
    """
}

print(generatePlatformSummary())`,
            executable: true,
            explanation: [
              "struct defines a value type with automatic memberwise initializers.",
              "let creates an immutable constant; var creates a mutable variable.",
              "String interpolation \\(variable) cleanly embeds values within multi-line string literals.",
              "Sendable protocol marks types that can be safely shared across concurrent execution contexts in Swift 6.",
            ],
          },
          detailedExplanation: [
            "SIL (Swift Intermediate Language): The Swift compiler produces SIL between the abstract syntax tree (AST) and LLVM IR. SIL performs definite initialization analysis, memory safety verification, devirtualization, and ARC optimizations before generating machine code.",
          ],
          commonMistakes: [
            {
              mistake: "Declaring variables with var when the value is never mutated.",
              badCode: "var apiKey = \"sk_live_12345\"",
              goodCode: "let apiKey = \"sk_live_12345\"",
              explanation: "Always use let for constants. The Swift compiler optimizes let bindings and prevents unintended mutation across threads.",
            },
          ],
          bestPractices: [
            "Default to `let` for all variable declarations; only use `var` when mutation is required.",
            "Rely on Swift's strong type inference to keep code clean without redundant type annotations.",
            "Adopt Swift 6 strict concurrency checking (`-strict-concurrency=complete`) to catch data races during compilation.",
          ],
          summary: [
            "Swift delivers C/C++ level execution speed with modern high-level safety syntax.",
            "SIL (Swift Intermediate Language) optimizes memory access before native machine code emission.",
            "Swift 6 enforces complete compile-time data-race safety across concurrent threads.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-2",
      slug: "type-system-optionals",
      title: "Module 2: Type System, Optionals & Optional Chaining",
      description: "Master Optionals (`Optional<Wrapped>`), `if let`, `guard let`, nil-coalescing (`??`), and safe unwrapping.",
      lessons: [
        {
          id: "sw-optionals",
          slug: "swift-optionals-guard-let-nil-coalescing",
          courseSlug: "swift",
          moduleSlug: "type-system-optionals",
          title: "Swift Optionals, Optional Chaining & guard let",
          description: "Eliminate null pointer crashes using Swift Optionals: Optional enum mechanics, safe unwrapping with guard let and if let, and nil-coalescing operators.",
          durationMinutes: 20,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "What an Optional (`T?`) is under the hood (an enum with `.some(Wrapped)` and `.none`)",
            "Safe unwrapping techniques: `if let`, `guard let`, and Optional Chaining (`?.`)",
            "The Nil-Coalescing operator (`??`) for supplying default values",
            "Why Force Unwrapping (`!`) causes runtime fatal crashes and how to avoid it",
          ],
          introduction: `In Swift, types cannot contain 'nil' (null) by default. To represent the possible absence of a value, Swift introduces Optionals. An Optional is an expressive wrapper that explicitly forces the developer to check and safely unwrap the value before accessing its properties, eliminating null reference bugs at compile time.`,
          whyItMatters: `Null dereference crashes are prevented by the compiler in Swift. Mastering guard statements and optional chaining allows engineers to write safe, readable code with clean early-exit guard rails.`,
          syntax: `var username: String? = nil\nguard let name = username else { return }\nlet display = username ?? "Guest"`,
          mainExample: {
            title: "Safe Optional Unwrapping and Guard Clauses in Swift",
            language: "swift",
            code: `// Optionals, Guard Let, and Optional Chaining
import Foundation

struct UserProfile {
    let id: String
    let username: String
    let bio: String?
    let websiteURL: URL?
}

func displayAccountDetails(profile: UserProfile?) {
    // 1. Early return with guard let
    guard let user = profile else {
        print("Guard Exit: Profile payload is nil.")
        return
    }

    // 2. Nil-coalescing operator for fallback string
    let userBio = user.bio ?? "No public biography provided."
    print("User: \\(user.username) | Bio: \\(userBio)")

    // 3. Optional chaining on nested optional properties
    if let host = user.websiteURL?.host {
        print("Verified Domain Host: \\(host)")
    } else {
        print("No verified website domain configured.")
    }
}

let activeUser = UserProfile(
    id: "usr_200",
    username: "KennethSwift",
    bio: "Systems Engineer & Swift Advocate",
    websiteURL: URL(string: "https://academy.kwas.tech")
)

displayAccountDetails(profile: activeUser)
displayAccountDetails(profile: nil)`,
            executable: true,
            explanation: [
              "UserProfile? indicates the argument may be nil.",
              "guard let user = profile else { return } unwraps profile into a non-optional 'user' constant for the rest of the function scope.",
              "user.bio ?? fallback provides a default string if bio is nil.",
              "user.websiteURL?.host safely chains calls: if websiteURL is nil, the entire expression evaluates to nil without crashing.",
            ],
          },
          detailedExplanation: [
            "The Optional Enum: Under the hood, Swift defines Optional as: `enum Optional<Wrapped> { case none, case some(Wrapped) }`. When you write `String?`, it is syntactic sugar for `Optional<String>`.",
          ],
          commonMistakes: [
            {
              mistake: "Force unwrapping optionals with the exclamation mark operator (!).",
              badCode: "let url = user.websiteURL!\nlet host = url.host!",
              goodCode: "guard let url = user.websiteURL, let host = url.host else { return }",
              explanation: "Force unwrapping (!) crashes the application with a fatal runtime error if the value is nil.",
            },
          ],
          bestPractices: [
            "Use `guard let` at the beginning of functions to validate preconditions and avoid deeply nested `if let` blocks (the 'Pyramid of Doom').",
            "Use the nil-coalescing operator (`??`) to supply sensible fallback defaults.",
            "Never use force unwrapping (`!`) in production application code.",
          ],
          summary: [
            "Swift variables are non-nil by default; Optionals (`T?`) explicitly model potential absence.",
            "`guard let` creates safe unwrapped constants available throughout the remaining function scope.",
            "Optional chaining (`?.`) short-circuits gracefully when encountering nil.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-3",
      slug: "value-vs-reference-semantics",
      title: "Module 3: Value Types vs Reference Types (Structs, Enums, Classes)",
      description: "Master value semantics, structs, enums with associated values, classes, and Copy-on-Write (COW).",
      lessons: [
        {
          id: "sw-value-reference",
          slug: "swift-value-types-reference-types-structs-classes",
          courseSlug: "swift",
          moduleSlug: "value-vs-reference-semantics",
          title: "Value Types vs Reference Types & Copy-on-Write (COW)",
          description: "Understand the core architectural difference between Value Types (Structs, Enums) and Reference Types (Classes), heap vs stack allocations, and Copy-on-Write optimization.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The difference between Value Semantics (copied on assignment) and Reference Semantics (shared pointers)",
            "Stack memory allocation (fast, automatic) vs Heap memory allocation (dynamic, ARC overhead)",
            "Enums with Associated Values for rich domain state modeling",
            "How Swift standard collections (Array, Dictionary) implement Copy-on-Write (COW) for high performance",
          ],
          introduction: `One of Swift's defining architectural characteristics is its strong preference for Value Types (Structs and Enums) over Reference Types (Classes). When you pass a value type to a function or assign it to a new variable, it is copied independently, ensuring that modifying one instance can never unexpectedly alter another instance.`,
          whyItMatters: `Unintended shared mutable state is the primary cause of bugs in multithreaded programming. By defaulting to structs and value semantics, Swift applications are inherently thread-safe and easier to reason about.`,
          syntax: `struct Point { var x: Double; var y: Double }\nclass Node { var value: Int; init(value: Int) { self.value = value } }`,
          mainExample: {
            title: "Demonstrating Value Semantics vs Reference Semantics",
            language: "swift",
            code: `// Value Types (Structs) vs Reference Types (Classes)
import Foundation

// 1. Value Type: Struct (Copied on assignment)
struct DocumentConfig {
    var title: String
    var wordCount: Int
}

// 2. Reference Type: Class (Shared pointer on heap)
class SharedSession {
    var sessionId: String
    init(sessionId: String) { self.sessionId = sessionId }
}

func demonstrateSemantics() {
    // Value Type Behavior:
    var doc1 = DocumentConfig(title: "Architecture Guide", wordCount: 1500)
    var doc2 = doc1 // Deep copy is made!
    doc2.title = "Updated Title"

    print("=== Value Types (Structs) ===")
    print("doc1.title: \\(doc1.title)") // Unchanged: "Architecture Guide"
    print("doc2.title: \\(doc2.title)") // Modified: "Updated Title"

    // Reference Type Behavior:
    let session1 = SharedSession(sessionId: "sess_original")
    let session2 = session1 // Copies the POINTER, not the instance!
    session2.sessionId = "sess_MUTATED"

    print("\\n=== Reference Types (Classes) ===")
    print("session1.sessionId: \\(session1.sessionId)") // Mutated: "sess_MUTATED"
    print("session2.sessionId: \\(session2.sessionId)") // Mutated: "sess_MUTATED"
}

demonstrateSemantics()`,
            executable: true,
            explanation: [
              "When doc2 is assigned doc1, a copy of the struct is created on the stack. Changing doc2 has zero effect on doc1.",
              "When session2 is assigned session1, both variables point to the exact same object in heap memory.",
              "Mutating session2 simultaneously mutates session1, illustrating the risks of shared mutable reference state.",
            ],
          },
          detailedExplanation: [
            "Copy-on-Write (COW): To avoid expensive memory copies when passing large arrays or dictionaries, Swift uses Copy-on-Write. The underlying memory buffer is shared read-only among copies until one of the copies attempts to mutate its contents—at which point Swift creates a private copy of the data buffer.",
          ],
          commonMistakes: [
            {
              mistake: "Using classes by default for simple domain models, introducing unnecessary heap allocations and reference sharing.",
              badCode: "class User { var name: String; init(name: String) { self.name = name } }",
              goodCode: "struct User { var name: String }",
              explanation: "Default to structs in Swift. Only use classes when reference identity (===) or inheritance is explicitly required.",
            },
          ],
          bestPractices: [
            "Default to `struct` for all data models, DTOs, and view configurations.",
            "Use `enum` with associated values to model finite state machines and network results.",
            "Reserve `class` for reference-identity requirements (e.g. shared state controllers or file handles).",
          ],
          summary: [
            "Structs and Enums are Value Types allocated on the stack with independent copy semantics.",
            "Classes are Reference Types allocated on the heap with shared pointer semantics.",
            "Copy-on-Write (COW) optimizes Swift collection copies for peak performance.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-4",
      slug: "protocol-oriented-programming",
      title: "Module 4: Protocols, Extensions & Protocol-Oriented Programming (POP)",
      description: "Master protocols, default implementations via extensions, protocol inheritance, and composition over inheritance.",
      lessons: [
        {
          id: "sw-pop",
          slug: "swift-protocols-extensions-protocol-oriented-programming",
          courseSlug: "swift",
          moduleSlug: "protocol-oriented-programming",
          title: "Protocol-Oriented Programming (POP) & Extensions",
          description: "Embrace Swift's architectural paradigm: Protocol-Oriented Programming (POP), protocol composition, default method implementations via extensions, and decoupling components.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why Swift is a Protocol-Oriented language ('Protocols are the blueprint')",
            "Defining protocols with properties, methods, and initializers",
            "Providing default implementations and mixin behavior using Protocol Extensions",
            "Protocol Composition (`Encodable & Decodable`, `Identifiable & Hashable`)",
          ],
          introduction: `At WWDC 2015, Apple introduced Swift as the world's first Protocol-Oriented Programming language. While traditional OOP relies on deep, rigid class inheritance hierarchies (which suffer from the fragile base class problem and tight coupling), Protocol-Oriented Programming builds systems by composing small, modular protocols and extending them with default implementations.`,
          whyItMatters: `Value types (structs and enums) cannot inherit from classes, but they can conform to any number of protocols. POP allows developers to share polymorphic behavior across value types without the baggage of class hierarchies.`,
          syntax: `protocol JSONSerializable {\n    func toJSON() -> String\n}\nextension JSONSerializable {\n    func toJSON() -> String { "{}" }\n}`,
          mainExample: {
            title: "Protocol Composition and Default Method Extensions",
            language: "swift",
            code: `// Protocol-Oriented Programming in Swift
import Foundation

// 1. Define modular capability protocols
protocol IdentifiableEntity {
    var id: String { get }
}

protocol Auditable {
    var createdAt: Date { get }
    func auditSummary() -> String
}

// 2. Provide default implementation via Protocol Extension
extension Auditable where Self: IdentifiableEntity {
    func auditSummary() -> String {
        return "Audit Record [ID: \\(self.id)] created at \\(self.createdAt)"
    }
}

// 3. Concrete Struct conforming to multiple composed protocols
struct DatabaseRecord: IdentifiableEntity, Auditable {
    let id: String
    let tableName: String
    let createdAt: Date
}

let record = DatabaseRecord(
    id: "rec_9981",
    tableName: "user_accounts",
    createdAt: Date()
)

print("Entity ID: \\(record.id)")
// Automatically inherits default implementation from protocol extension!
print(record.auditSummary())`,
            executable: true,
            explanation: [
              "IdentifiableEntity and Auditable define clear, decoupled interface contracts.",
              "extension Auditable where Self: IdentifiableEntity provides a default auditSummary() implementation for any type conforming to both protocols.",
              "DatabaseRecord gains the auditSummary() method automatically without writing any boilerplate code.",
            ],
          },
          detailedExplanation: [
            "Composition over Inheritance: Instead of creating a monolithic `BaseModel` superclass that handles persistence, serialization, logging, and validation, POP breaks these capabilities into independent protocols (`Persistable`, `Codable`, `Loggable`, `Validatable`) that any struct can mix and match.",
          ],
          commonMistakes: [
            {
              mistake: "Creating massive class inheritance hierarchies instead of composing protocols.",
              badCode: "class BaseViewController: UIViewController { ... }\nclass BaseFormViewController: BaseViewController { ... }",
              goodCode: "protocol FormValidating { ... }\nextension FormValidating where Self: UIViewController { ... }",
              explanation: "Deep class inheritance leads to brittle, tightly coupled code where changing a base class method breaks unrelated subclasses.",
            },
          ],
          bestPractices: [
            "Keep protocols focused and granular (Single Responsibility Principle).",
            "Use protocol extensions to provide sensible default behavior.",
            "Favor protocol composition (`protocol Named: Describable, Identifiable`) over monolithic interfaces.",
          ],
          summary: [
            "Swift favors Protocol-Oriented Programming over classical OOP inheritance.",
            "Protocol extensions supply default method implementations across all conforming types.",
            "Structs and enums achieve rich polymorphism by conforming to multiple protocols.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-5",
      slug: "arc-memory-management",
      title: "Module 5: Memory Management, ARC & Retain Cycle Elimination",
      description: "Master Automatic Reference Counting, strong vs weak vs unowned references, closures, and capturing `[weak self]`.",
      lessons: [
        {
          id: "sw-arc",
          slug: "swift-arc-memory-management-weak-unowned-retain-cycles",
          courseSlug: "swift",
          moduleSlug: "arc-memory-management",
          title: "Automatic Reference Counting (ARC) & Retain Cycles",
          description: "Learn how Swift manages heap memory with Automatic Reference Counting (ARC), diagnosing strong reference cycles, and breaking memory leaks with weak and unowned capture lists.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How Automatic Reference Counting (ARC) works at compile time vs runtime garbage collection",
            "How strong reference cycles occur between class instances and escaping closures",
            "Breaking retain cycles using `weak` (nullable) and `unowned` (non-nil) references",
            "Using closure capture lists: `[weak self]` in asynchronous callbacks",
          ],
          introduction: `Swift uses Automatic Reference Counting (ARC) to track and manage application memory. Unlike garbage-collected runtimes (like Java or Go) which pause application threads to scan heap memory, ARC inserts increment and decrement reference count instructions directly at compile time. Memory is deallocated immediately when an object's reference count drops to zero.`,
          whyItMatters: `If two class instances hold strong references to each other, their reference counts can never reach zero—creating a Retain Cycle (Memory Leak). Understanding '[weak self]' in closures is critical to prevent memory leaks in iOS and backend Swift applications.`,
          syntax: `weak var delegate: ServiceDelegate?\nnetworkCall { [weak self] result in\n    guard let self = self else { return }\n}`,
          mainExample: {
            title: "Diagnosing and Breaking a Retain Cycle with Weak References",
            language: "swift",
            code: `// ARC Memory Management & Retain Cycle Elimination
import Foundation

class NetworkClient {
    let name: String
    // Weak reference breaks strong reference cycle!
    weak var delegate: ClientDelegate?

    init(name: String) {
        self.name = name
        print("🟢 NetworkClient [\\(name)] allocated in memory.")
    }

    deinit {
        print("🔴 NetworkClient [\\(name)] DEALLOCATED from memory.")
    }
}

protocol ClientDelegate: AnyObject {
    func didCompleteTask()
}

class DashboardController: ClientDelegate {
    var client: NetworkClient?

    init() {
        print("🟢 DashboardController allocated.")
        self.client = NetworkClient(name: "API-Client-1")
        self.client?.delegate = self // Weak reference prevents cycle!
    }

    func didCompleteTask() {
        print("Task received by DashboardController.")
    }

    deinit {
        print("🔴 DashboardController DEALLOCATED from memory.")
    }
}

func simulateScope() {
    print("--- Entering Scope ---")
    var controller: DashboardController? = DashboardController()
    controller = nil // Both instances deallocate immediately!
    print("--- Exiting Scope ---")
}

simulateScope()`,
            executable: true,
            explanation: [
              "weak var delegate: ClientDelegate? tells ARC not to increment the reference count of the delegate object.",
              "When controller is set to nil, DashboardController's reference count drops to 0 and its deinit executes.",
              "This subsequently releases NetworkClient, allowing both objects to be cleanly deallocated with zero memory leaks.",
            ],
          },
          detailedExplanation: [
            "Weak vs Unowned: `weak` references are always optional (`weak var delegate: Delegate?`) and become `nil` automatically when the referenced object is deallocated. `unowned` references assume the target object will never be nil during its lifetime (similar to a non-optional pointer); accessing an unowned reference after deallocation results in a runtime crash.",
          ],
          commonMistakes: [
            {
              mistake: "Omitting [weak self] in escaping closures (like network callbacks or timers).",
              badCode: "fetchData { result in\n    self.updateUI(result) // Retains self strongly!\n}",
              goodCode: "fetchData { [weak self] result in\n    guard let self = self else { return }\n    self.updateUI(result)\n}",
              explanation: "Escaping closures retain 'self' strongly until the network request completes, keeping entire view controllers or services alive in memory.",
            },
          ],
          bestPractices: [
            "Always declare delegate protocols with `: AnyObject` and use `weak var delegate: Delegate?`.",
            "Use `[weak self]` in all asynchronous escaping closures and completion handlers.",
            "Use Xcode Memory Graph Debugger or Instruments (Leaks) to audit memory retention in production builds.",
          ],
          summary: [
            "ARC manages memory deterministically without garbage collection pauses.",
            "Strong reference cycles occur when objects reference each other strongly, preventing deallocation.",
            "Break retain cycles using `weak` references and closure capture lists (`[weak self]`).",
          ],
        },
      ],
    },
    {
      id: "mod-sw-6",
      slug: "structured-concurrency",
      title: "Module 6: Modern Swift Concurrency (async/await, Tasks & TaskGroups)",
      description: "Master async/await, Task, TaskGroup, withTaskGroup, cooperative cancellation, and AsyncSequence.",
      lessons: [
        {
          id: "sw-async-await",
          slug: "swift-concurrency-async-await-task-groups",
          courseSlug: "swift",
          moduleSlug: "structured-concurrency",
          title: "Modern Swift Concurrency: async/await & TaskGroups",
          description: "Write clean, non-blocking asynchronous code with Swift's modern structured concurrency model: async/await, Task, TaskGroup, and cooperative cancellation.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The evolution from Grand Central Dispatch (GCD / dispatch_async) to modern Swift Concurrency",
            "Writing asynchronous functions with `async` and suspending execution with `await`",
            "Spawning concurrent child operations in parallel using `withTaskGroup`",
            "Cooperative task cancellation with `Task.isCancelled` and `Task.checkCancellation()`",
          ],
          introduction: `Swift 5.5+ introduced modern Structured Concurrency directly into the language syntax and runtime. By replacing legacy completion handler closures and GCD queues with async/await and Task hierarchies, Swift ensures that concurrent code is linear to read, preserves error propagation with try/catch, and automatically cancels child tasks if a parent task fails.`,
          whyItMatters: `Completion handler closures suffer from callback hell, awkward memory capture, and silent error drops when developers forget to call the completion handler. Structured Concurrency guarantees that every asynchronous path returns a value or throws an error.`,
          syntax: `func fetchUser() async throws -> User\nlet user = try await fetchUser()\nawait withTaskGroup(of: String.self) { group in ... }`,
          mainExample: {
            title: "Parallel Asynchronous Data Processing with TaskGroup",
            language: "swift",
            code: `// Swift Modern Structured Concurrency
import Foundation

struct CourseMetric: Sendable {
    let courseName: String
    let studentCount: Int
}

// Asynchronous worker function
func fetchMetrics(for course: String) async -> CourseMetric {
    // Non-blocking asynchronous sleep
    try? await Task.sleep(for: .milliseconds(100))
    let count = Int.random(in: 1200...5000)
    return CourseMetric(courseName: course, studentCount: count)
}

func aggregateAllMetrics() async -> [CourseMetric] {
    let courses = ["Swift 6", "Kotlin Multiplatform", "Linux Architecture", "Rust Systems"]

    // Structured Concurrency TaskGroup: executes child tasks in parallel
    return await withTaskGroup(of: CourseMetric.self) { group in
        for course in courses {
            group.addTask {
                await fetchMetrics(for: course)
            }
        }

        var results: [CourseMetric] = []
        for await metric in group {
            results.append(metric)
        }
        return results
    }
}

// Top-level async execution simulation
Task {
    print("Fetching metrics concurrently via TaskGroup...")
    let startTime = Date()
    let metrics = await aggregateAllMetrics()
    let elapsed = Date().timeIntervalSince(startTime)

    print("--- Consolidated Metrics ---")
    for m in metrics {
        print("  - \\(m.courseName): \\(m.studentCount) active learners")
    }
    print(String(format: "Total Time: %.3f s (Executed in parallel!)", elapsed))
}`,
            executable: true,
            explanation: [
              "async marks a function that can suspend execution without blocking underlying threads.",
              "withTaskGroup spawns child tasks that execute concurrently across available CPU cores.",
              "for await consumes results from the TaskGroup asynchronously as each individual task finishes.",
              "Total execution time matches the single longest task (~100ms) rather than the sequential sum (400ms).",
            ],
          },
          detailedExplanation: [
            "Cooperative Cancellation: In Swift Concurrency, cancellation is cooperative. When a Task is cancelled, it does not abruptly abort. Instead, the task checks `Task.isCancelled` or calls `try Task.checkCancellation()`, allowing the task to clean up resources, close network sockets, and exit cleanly.",
          ],
          commonMistakes: [
            {
              mistake: "Using legacy Thread.sleep() inside async functions instead of Task.sleep().",
              badCode: "func wait() async { Thread.sleep(forTimeInterval: 1.0) }",
              goodCode: "func wait() async throws { try await Task.sleep(for: .seconds(1)) }",
              explanation: "Thread.sleep blocks the entire thread pool worker, preventing other tasks from executing. Task.sleep suspends only the current task non-blockingly.",
            },
          ],
          bestPractices: [
            "Use `async let` for fixed parallel calls and `withTaskGroup` for dynamic collections of concurrent tasks.",
            "Check `Task.isCancelled` periodically inside CPU-intensive asynchronous loops.",
            "Adopt `AsyncSequence` for real-time streaming data feeds (e.g. WebSockets or file streaming).",
          ],
          summary: [
            "Swift Structured Concurrency replaces callback closures with linear `async/await` syntax.",
            "`withTaskGroup` orchestrates parallel tasks with automatic cancellation propagation.",
            "`Task.sleep()` provides non-blocking cooperative pauses.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-7",
      slug: "actors-sendable-thread-safety",
      title: "Module 7: Thread Safety with Actors, Global Actors & Sendable",
      description: "Master actor isolation, reentrancy, @MainActor for UI synchronization, and Sendable type contracts.",
      lessons: [
        {
          id: "sw-actors",
          slug: "swift-actors-mainactor-sendable-data-races",
          courseSlug: "swift",
          moduleSlug: "actors-sendable-thread-safety",
          title: "Actors, @MainActor & Complete Data-Race Safety",
          description: "Protect shared mutable state from multithreaded data races using Swift Actors, @MainActor UI binding, and the Sendable compile-time protocol.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "What a Data Race is and why traditional locks/mutexes are prone to deadlocks",
            "How Swift `actor` types serialize access to their internal mutable state",
            "Using `@MainActor` to guarantee UI updates execute strictly on the main thread",
            "The `Sendable` protocol: Compile-time verification for thread-safe value passing",
          ],
          introduction: `A Data Race occurs when two concurrent threads access the same memory location simultaneously, and at least one access is a write. In Swift 6, data races are eliminated at compile time through the Actor model. An Actor is a reference type that isolates its state, guaranteeing that only one task can mutate its properties at any given moment.`,
          whyItMatters: `Traditional multithreaded locking mechanisms (NSLock, pthread_mutex) are notoriously difficult to maintain, leading to deadlocks, priority inversions, and unpredictable crashes. Swift Actors provide compiler-enforced synchronization with zero manual lock management.`,
          syntax: `actor BankAccount {\n    private var balance: Double = 0.0\n    func deposit(amount: Double) { balance += amount }\n}\n\n@MainActor\nclass UIViewModel { ... }`,
          mainExample: {
            title: "Thread-Safe State Synchronization with an Actor",
            language: "swift",
            code: `// Thread-Safe Actor State Synchronization
import Foundation

actor BankAccount {
    let accountNumber: String
    private(set) var balance: Double

    init(accountNumber: String, initialBalance: Double) {
        self.accountNumber = accountNumber
        self.balance = initialBalance
    }

    // Actor isolated method: Access is automatically serialized!
    func deposit(amount: Double) {
        balance += amount
        print("Account [\\(accountNumber)]: Deposited $\\(amount). New Balance: $\\(balance)")
    }

    func withdraw(amount: Double) -> Boolean {
        guard balance >= amount else {
            print("Account [\\(accountNumber)]: Insufficient funds for withdrawal of $\\(amount).")
            return false
        }
        balance -= amount
        print("Account [\\(accountNumber)]: Withdrew $\\(amount). Remaining: $\\(balance)")
        return true
    }
}

// Usage with async/await
Task {
    let account = BankAccount(accountNumber: "KWAS-9011", initialBalance: 500.0)

    // Calls across actor boundaries require 'await'
    await account.deposit(amount: 250.0)
    let success = await account.withdraw(amount: 100.0)
    let finalBalance = await account.balance

    print("Final Verified Account Balance: $\\(finalBalance)")
}`,
            executable: true,
            explanation: [
              "actor BankAccount ensures that multiple concurrent tasks calling deposit() or withdraw() are queued safely.",
              "External code must use 'await account.deposit(...)' because the calling task might suspend until the actor becomes available.",
              "Data races are physically impossible because the Swift compiler enforces actor isolation.",
            ],
          },
          detailedExplanation: [
            "@MainActor: The `@MainActor` global actor represents the main execution thread. Annotating ViewModels, SwiftUI views, or UI controllers with `@MainActor` guarantees that all state modifications and rendering operations execute on the main thread, eliminating background thread UI glitches.",
          ],
          commonMistakes: [
            {
              mistake: "Mutating UI state from a background Task without @MainActor synchronization.",
              badCode: "Task.detached { self.userList = fetchUsers() }",
              goodCode: "Task { @MainActor in self.userList = await fetchUsers() }",
              explanation: "Mutating UI state on background threads causes visual corruption and crashes in UIKit and SwiftUI.",
            },
          ],
          bestPractices: [
            "Use `actor` to encapsulate shared mutable state (e.g., caches, session managers, database pools).",
            "Annotate all SwiftUI ViewModels and UI controllers with `@MainActor`.",
            "Ensure types passed across actor boundaries conform to `Sendable` (value types, actors, or immutable classes).",
          ],
          summary: [
            "Actors serialize access to their internal state, preventing concurrent data races.",
            "Calling actor methods from outside requires `await`.",
            "`@MainActor` binds execution to the main UI thread with compile-time safety.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-8",
      slug: "generics-opaque-existential-types",
      title: "Module 8: Generics, Opaque Types (`some`) & Existential Containers (`any`)",
      description: "Master generics, associated types, opaque return types (`some View`), and existential containers (`any Protocol`).",
      lessons: [
        {
          id: "sw-generics-opaque",
          slug: "swift-generics-opaque-some-existential-any",
          courseSlug: "swift",
          moduleSlug: "generics-opaque-existential-types",
          title: "Generics, Opaque Types (some) & Existential Types (any)",
          description: "Master advanced Swift type mechanics: Generic constraints, Opaque Return Types (`some`), and Existential Box Containers (`any`).",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Generic functions and constraints using where clauses",
            "Opaque Return Types (`some Protocol`) and static compile-time type resolution",
            "Existential Types (`any Protocol`) and dynamic dispatch box containers",
            "Why SwiftUI utilizes `some View` to optimize view hierarchy compilation",
          ],
          introduction: `Swift's type system provides sophisticated tools for generic abstraction. In modern Swift, the distinction between Opaque Types ('some') and Existential Containers ('any') is fundamental. Understanding when to preserve concrete underlying types with 'some' versus when to box types heterogeneously with 'any' is essential for high-performance Swift development.`,
          whyItMatters: `SwiftUI's revolutionary body property ('var body: some View') is built entirely on Opaque Types. Using 'some' allows the compiler to know the exact concrete type while hiding the complex nested generic implementation details from public API surfaces.`,
          syntax: `func makeShape() -> some Shape\nvar shapes: [any Shape] = []`,
          mainExample: {
            title: "Comparing Opaque Types (some) vs Existential Types (any)",
            language: "swift",
            code: `// Generics, Opaque Types (some) and Existential Types (any)
import Foundation

protocol Renderable {
    func render() -> String
}

struct ButtonWidget: Renderable {
    let label: String
    func render() -> String { "🔘 Button: [\\(label)]" }
}

struct TextWidget: Renderable {
    let text: String
    func render() -> String { "📄 Text: \\(text)" }
}

// 1. Opaque Return Type ('some'): Returns ONE specific concrete type known to compiler
func createDefaultButton() -> some Renderable {
    return ButtonWidget(label: "Submit Application")
}

// 2. Existential Container ('any'): Holds a box containing ANY heterogeneous type conforming to protocol
func renderAllWidgets(widgets: [any Renderable]) {
    print("--- Rendering Heterogeneous Widget List ('any') ---")
    for widget in widgets {
        print("  \\(widget.render())")
    }
}

let primaryBtn = createDefaultButton()
print("Opaque Widget: \\(primaryBtn.render())")

let mixedWidgets: [any Renderable] = [
    ButtonWidget(label: "Cancel"),
    TextWidget(text: "Terms and Conditions apply."),
    ButtonWidget(label: "Confirm")
]

renderAllWidgets(widgets: mixedWidgets)`,
            executable: true,
            explanation: [
              "createDefaultButton() -> some Renderable guarantees the function returns one specific concrete type (ButtonWidget).",
              "The compiler optimizes 'some' with static dispatch and zero boxing overhead.",
              "[any Renderable] creates an existential container that can hold different types (Buttons and Texts) in the same array.",
            ],
          },
          detailedExplanation: [
            "`some` vs `any`: `some` (Opaque type) resolves to a single concrete type at compile time with static dispatch. `any` (Existential type) boxes values dynamically at runtime with dynamic dispatch. Default to `some` whenever possible, and use `any` only when you need heterogeneous collections.",
          ],
          commonMistakes: [
            {
              mistake: "Using `any` everywhere by default, introducing dynamic existential box allocation overhead.",
              badCode: "func process(item: any Renderable)",
              goodCode: "func process(item: some Renderable)",
              explanation: "Using `some Renderable` allows compiler inlining and static dispatch, outperforming existential boxes.",
            },
          ],
          bestPractices: [
            "Default to `some Protocol` for function parameters and return types.",
            "Use `any Protocol` only when storing heterogeneous elements in a collection (`[any Entity]`).",
            "Use generic `where` clauses to enforce complex constraints across associated types.",
          ],
          summary: [
            "`some` preserves concrete type identity at compile time with static dispatch.",
            "`any` boxes heterogeneous types dynamically at runtime.",
            "SwiftUI uses `some View` to optimize view tree rendering.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-9",
      slug: "functional-swift-result",
      title: "Module 9: Functional Swift: Map, FlatMap, CompactMap, Result & Error Handling",
      description: "Master higher-order collection functions, custom error types, do/catch blocks, and the Result<Success, Failure> enum.",
      lessons: [
        {
          id: "sw-functional-result",
          slug: "functional-swift-map-compactmap-result-type",
          courseSlug: "swift",
          moduleSlug: "functional-swift-result",
          title: "Functional Swift, CompactMap & Result Type",
          description: "Transform datasets cleanly using functional primitives: map, flatMap, compactMap, and model robust error outcomes with Swift's Result type and typed throws.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Functional collection transformations: map, flatMap, compactMap, and filter",
            "The difference between flatMap (flattening nested arrays) and compactMap (filtering out nil values)",
            "Modeling explicit asynchronous error outcomes with `Result<Success, Failure>`",
            "Typed throws in Swift 6 for compile-time verified error contracts",
          ],
          introduction: `Swift incorporates powerful functional programming paradigms into its standard library. Functional operations treat computations as mathematical transformations, avoiding mutable state. When combined with Swift's structured error handling (do/try/catch) and the Result enum, applications handle edge cases and data transformations with mathematical precision.`,
          whyItMatters: `Transforming API responses, sanitizing user input, and handling network errors are daily developer tasks. Using compactMap and Result types produces concise, bug-free data pipelines without messy imperative loops.`,
          syntax: `let validNumbers = strings.compactMap { Int($0) }\nlet result: Result<Data, NetworkError> = .success(payload)`,
          mainExample: {
            title: "Data Sanitization with compactMap and Result Type Modeling",
            language: "swift",
            code: `// Functional Swift & Result Type Modeling
import Foundation

enum ValidationError: Error, CustomStringConvertible {
    case emptyInput
    case outOfRange(Int)

    var description: String {
        switch self {
        case .emptyInput: return "Input dataset cannot be empty."
        case .outOfRange(let val): return "Value \\(val) is out of allowable range (0-100)."
        }
    }
}

func sanitizeAndValidateScores(rawInputs: [String]) -> Result<[Int], ValidationError> {
    guard !rawInputs.isEmpty else {
        return .failure(.emptyInput)
    }

    // compactMap automatically attempts parsing and discards nil entries
    let parsedScores = rawInputs.compactMap { Int($0.trimmingCharacters(in: .whitespaces)) }

    // Check boundary invariants
    for score in parsedScores {
        if score < 0 || score > 100 {
            return .failure(.outOfRange(score))
        }
    }

    return .success(parsedScores)
}

let inputBatch = ["95", "88", "invalid_string", "100", "  76  ", "92"]
let outcome = sanitizeAndValidateScores(rawInputs: inputBatch)

switch outcome {
case .success(let scores):
    let average = Double(scores.reduce(0, +)) / Double(scores.count)
    print("✅ Successfully Processed Scores: \\(scores)")
    print(String(format: "Average Score: %.2f", average))
case .failure(let error):
    print("❌ Processing Failed: \\(error)")
}`,
            executable: true,
            explanation: [
              "rawInputs.compactMap { Int($0) } parses each string to an integer, automatically filtering out non-numeric strings like 'invalid_string'.",
              "Result<[Int], ValidationError> explicitly encodes either a successful score list or a specific typed error.",
              "reduce(0, +) aggregates the array sum functionally in a single readable line.",
            ],
          },
          detailedExplanation: [
            "compactMap vs map: `map` transforms each element 1-to-1, returning an array of optionals `[Int?]` if the closure returns an optional. `compactMap` transforms and unwraps simultaneously, discarding all `nil` results to return a clean `[Int]` array.",
          ],
          commonMistakes: [
            {
              mistake: "Using map followed by manual nil filtering instead of compactMap.",
              badCode: "let numbers = strings.map { Int($0) }.filter { $0 != nil }.map { $0! }",
              goodCode: "let numbers = strings.compactMap { Int($0) }",
              explanation: "compactMap performs the transformation and unwrap in a single optimized pass without force unwrapping.",
            },
          ],
          bestPractices: [
            "Use `compactMap` whenever a transformation closure produces an Optional (`T?`).",
            "Use `flatMap` when flattening arrays of arrays (`[[T]]` -> `[T]`).",
            "Leverage the `Result` enum when storing or deferring asynchronous operations.",
          ],
          summary: [
            "`compactMap` filters out nil results during transformation pipelines.",
            "`Result<Success, Failure>` provides an explicit representation of success or error outcomes.",
            "Functional operators produce immutable, testable data transformations.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-10",
      slug: "swiftui-declarative-ui",
      title: "Module 10: SwiftUI Declarative UI & MVVM State Architecture",
      description: "Master declarative views, @Observable framework, @State, @Binding, and unidirectional data flow.",
      lessons: [
        {
          id: "sw-swiftui",
          slug: "swiftui-declarative-ui-mvvm-observable",
          courseSlug: "swift",
          moduleSlug: "swiftui-declarative-ui",
          title: "SwiftUI Declarative UI & @Observable State Management",
          description: "Build modern, reactive user interfaces with SwiftUI, the Swift 6 Observation framework (`@Observable`), View composition, and unidirectional state flow.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Declarative UI paradigm: Describing WHAT the interface should look like based on state",
            "The modern Swift Observation framework: `@Observable` classes",
            "State property wrappers: `@State` (local view state) and `@Binding` (two-way binding)",
            "Unidirectional Data Flow (UDF) in clean SwiftUI architectures",
          ],
          introduction: `SwiftUI is Apple's modern declarative UI framework across all Apple platforms. Unlike legacy imperative UIKit (where developers manually created, positioned, and updated view hierarchies in response to events), SwiftUI views are lightweight structs that declare what the UI should look like for a given state. When state changes, SwiftUI automatically recomputes only the affected UI components.`,
          whyItMatters: `Declarative UI development cuts UI codebases by 60% and eliminates state synchronization bugs. The modern '@Observable' macro in Swift 6 eliminates boilerplate Combine publishers ('@Published') and provides granular view invalidation.`,
          syntax: `@Observable class ViewModel { var count = 0 }\n\nstruct CounterView: View {\n    @State private var vm = ViewModel()\n    var body: some View { ... }\n}`,
          mainExample: {
            title: "SwiftUI View Architecture with the @Observable Macro",
            language: "swift",
            code: `// SwiftUI Declarative Architecture with @Observable
import Foundation

// 1. Modern Swift Observation ViewModel
class CourseListViewModel {
    var searchQuery: String = ""
    var courses: [String] = [
        "Swift 6 Systems Architecture",
        "Kotlin Multiplatform & Coroutines",
        "Linux Kernel & Ubuntu Shell",
        "Rust Systems & Concurrency"
    ]

    var filteredCourses: [String] {
        if searchQuery.isEmpty {
            return courses
        } else {
            return courses.filter { $0.localizedCaseInsensitiveContains(searchQuery) }
        }
    }
}

// Simulated SwiftUI View struct
struct CourseListView {
    var viewModel = CourseListViewModel()

    func renderUI() {
        print("=== SwiftUI View Rendered ===")
        print("Search Term: '\\(viewModel.searchQuery)'")
        print("Courses Displayed (\\(viewModel.filteredCourses.count)):")
        for course in viewModel.filteredCourses {
            print("  [Card] 📚 \\(course)")
        }
    }
}

var view = CourseListView()
view.renderUI()

print("\\n--- User Types 'Swift' into Search Field ---")
view.viewModel.searchQuery = "Swift"
view.renderUI()`,
            executable: true,
            explanation: [
              "In SwiftUI, views are lightweight structs conforming to the View protocol.",
              "Computed properties like filteredCourses automatically recompute whenever searchQuery changes.",
              "SwiftUI re-renders the UI reactively and deterministically in response to state updates.",
            ],
          },
          detailedExplanation: [
            "The @Observable Macro: Introduced in Swift 5.9 / Swift 6, `@Observable` uses Swift Macros to track property access at runtime. When a view accesses a property in its `body`, SwiftUI subscribes specifically to that property, avoiding unnecessary re-renders when unrelated properties change.",
          ],
          commonMistakes: [
            {
              mistake: "Performing heavy network or disk I/O directly inside the computed `var body: some View` property.",
              badCode: "var body: some View { let data = fetchFromNetwork(); Text(data) }",
              goodCode: "var body: some View { Text(viewModel.data).task { await viewModel.load() } }",
              explanation: "View bodies can be executed dozens of times per second during animations. Bodies must remain pure, lightweight functions of state.",
            },
          ],
          bestPractices: [
            "Keep View structs small, composable, and focused on presentation.",
            "Use `@Observable` classes for complex business logic and ViewModel state.",
            "Use the `.task` modifier for lifecycle-aware asynchronous data fetching in SwiftUI views.",
          ],
          summary: [
            "SwiftUI is a declarative framework where the UI is a function of state: `UI = f(State)`.",
            "The `@Observable` framework tracks state changes with fine-grained reactivity.",
            "Views are lightweight immutable structs that are recreated on state mutations with zero performance penalty.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-11",
      slug: "server-side-swift-vapor",
      title: "Module 11: Server-Side Swift (Vapor) & Production Benchmarking",
      description: "Build high-performance, non-blocking asynchronous REST APIs on Linux using the Vapor web framework.",
      lessons: [
        {
          id: "sw-vapor-backend",
          slug: "server-side-swift-vapor-microservices-linux",
          courseSlug: "swift",
          moduleSlug: "server-side-swift-vapor",
          title: "Server-Side Swift with Vapor & Linux Deployment",
          description: "Build non-blocking, type-safe REST APIs and cloud microservices on Linux using Server-Side Swift (Vapor), Fluent ORM, and async/await route handlers.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Running Swift natively on Linux servers and Docker containers",
            "The architecture of the Vapor web framework built on SwiftNIO (event-driven networking)",
            "Defining type-safe route handlers using Swift 6 async/await and Content protocols",
            "Deploying compiled Swift binaries in lightweight Alpine/Ubuntu Docker containers",
          ],
          introduction: `Swift is not limited to Apple client devices; it is a first-class language for high-performance cloud backends. With Server-Side Swift frameworks like Vapor (built on Apple's SwiftNIO non-blocking event-driven network engine), developers can build end-to-end full-stack architectures sharing models between iOS apps and cloud microservices.`,
          whyItMatters: `Swift on Linux delivers extraordinary throughput, minimal RAM footprints (often under 20MB per container), and near-instant sub-second cold starts, outperforming heavy interpreted runtimes like Python or Node.js while matching Go and Rust speed.`,
          syntax: `import Vapor\n\napp.get("api", "health") { req async -> String in\n    return "OK"\n}`,
          mainExample: {
            title: "Building a Type-Safe Vapor API Route Handler",
            language: "swift",
            code: `// Server-Side Swift (Vapor Framework Architecture)
import Foundation

// DTO conforming to Codable and Sendable for zero-boilerplate JSON
struct TechnologyTrackDTO: Codable, Sendable {
    let id: String
    let name: String
    let category: String
    let isLive: Boolean
}

// Simulated Vapor Route Controller
struct CourseAPIController: Sendable {
    func getTracks() async throws -> [TechnologyTrackDTO] {
        // Non-blocking asynchronous query simulation
        return [
            TechnologyTrackDTO(id: "sw-01", name: "Swift 6 Architecture", category: "Systems", isLive: true),
            TechnologyTrackDTO(id: "kt-01", name: "Kotlin Multiplatform", category: "Mobile/Cloud", isLive: true),
            TechnologyTrackDTO(id: "lx-01", name: "Linux & Ubuntu Systems", category: "DevOps", isLive: true)
        ]
    }
}

Task {
    let controller = CourseAPIController()
    let tracks = try await controller.getTracks()

    print("=== Server-Side Swift (Vapor Microservice) ===")
    print("Endpoint: GET /api/v1/tracks")
    print("Response Payload (JSON Formatted):")
    let jsonData = try JSONEncoder().encode(tracks)
    if let jsonString = String(data: jsonData, encoding: .utf8) {
        print(jsonString)
    }
}`,
            executable: true,
            explanation: [
              "TechnologyTrackDTO automatically serializes to JSON with zero reflection via the Codable protocol.",
              "Vapor route handlers are native Swift async functions that execute on SwiftNIO event loops.",
              "Compiled Swift server binaries run directly on Ubuntu Linux with minimal memory footprints.",
            ],
          },
          detailedExplanation: [
            "SwiftNIO Engine: Vapor is powered by SwiftNIO, Apple's high-performance asynchronous event-driven network application framework (modeled on Java's Netty). SwiftNIO handles thousands of concurrent socket connections per thread using non-blocking epoll/kqueue system calls.",
          ],
          commonMistakes: [
            {
              mistake: "Using blocking synchronous disk or network calls inside Vapor route handlers.",
              badCode: "app.get(\"data\") { req in let data = try Data(contentsOf: url); return data }",
              goodCode: "app.get(\"data\") { req async throws in let res = try await req.client.get(url); return res.body }",
              explanation: "Blocking an event loop thread in Vapor halts all other HTTP requests sharing that event loop. Always use async/await non-blocking APIs.",
            },
          ],
          bestPractices: [
            "Use multi-stage Docker builds to compile Swift on Ubuntu and produce minimal runtime container images.",
            "Share DTO structs directly between iOS client applications and Vapor backend codebases.",
            "Leverage Swift 6 strict concurrency checking to eliminate backend race conditions.",
          ],
          summary: [
            "Server-Side Swift with Vapor provides high-speed, non-blocking cloud backend microservices.",
            "Powered by Apple's SwiftNIO event loop for high concurrency and low RAM usage.",
            "Enables sharing 100% of data models between iOS frontends and cloud backends.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-12",
      slug: "sil-devirtualization-compiler-internals",
      title: "Module 12: Swift Intermediate Language (SIL) & Devirtualization",
      description: "Master the Swift compiler pipeline: Swift Intermediate Language (SIL), Witness Tables, dynamic dispatch devirtualization, and whole-module optimization (WMO).",
      lessons: [
        {
          id: "swift-sil-devirtualization",
          slug: "swift-intermediate-language-sil-devirtualization-vtable",
          courseSlug: "swift",
          moduleSlug: "sil-devirtualization-compiler-internals",
          title: "Swift Intermediate Language (SIL) & Devirtualization",
          description: "Explore the Swift compiler architecture: AST parsing, Raw vs Canonical Swift Intermediate Language (SIL), Virtual Method Tables (V-Tables) vs Protocol Witness Tables (PWT), and how the compiler devirtualizes dynamic method dispatches into direct function calls.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Swift compilation pipeline: Swift Source -> AST -> Raw SIL -> Canonical SIL -> LLVM IR -> Machine Code",
            "The 3 method dispatch mechanisms: Static (Direct), Dynamic V-Table, and Dynamic Witness Table",
            "How Whole Module Optimization (WMO) enables the SIL Optimizer to devirtualize generic calls into static inline assembly",
            "Using `swiftc -emit-sil` to inspect reference counting retain/release opcodes and memory allocations",
          ],
          introduction: `Between high-level Swift source code and low-level LLVM Intermediate Representation sits Swift Intermediate Language (SIL). SIL represents Swift-specific semantics (such as definite initialization, generic specialization, ARC reference counts, and protocol conformances) that LLVM IR cannot understand. Understanding SIL allows you to optimize performance-critical code by turning slow dynamic protocol lookups into zero-overhead static machine calls.`,
          whyItMatters: `Dynamic dispatch via Witness Tables incurs indirect pointer jumps and prevents inlining. SIL Devirtualization inlines method bodies directly into callers, achieving 10x-50x execution speedups in loops.`,
          syntax: `swiftc -O -emit-sil main.swift > main.sil\n@inlinable\npublic func fastCompute() { ... }`,
          mainExample: {
            title: "Inspecting Static Devirtualization vs Dynamic Witness Table Dispatch",
            language: "swift",
            code: `// Swift Intermediate Language (SIL) & Devirtualization Demonstration
import Foundation

protocol DataTransformer {
    func transform(_ input: Int) -> Int
}

struct FastIncrementer: DataTransformer {
    // Marked @inlinable: Compiler devirtualizes and inlines directly at call site!
    @inlinable
    func transform(_ input: Int) -> Int {
        return input + 100
    }
}

// 1. Dynamic Existential Container Dispatch (Uses Protocol Witness Table - Slower)
func processExistential(transformer: any DataTransformer, value: Int) -> Int {
    return transformer.transform(value) // Indirect witness table lookup
}

// 2. Generic Specialization with Compile-Time Static Devirtualization (Zero Overhead!)
func processGeneric<T: DataTransformer>(transformer: T, value: Int) -> Int {
    return transformer.transform(value) // SIL Optimizer converts this to direct static jump!
}

func main() {
    print("=== Swift Compiler SIL & Devirtualization ===")
    let incrementer = FastIncrementer()

    let res1 = processExistential(transformer: incrementer, value: 50)
    let res2 = processGeneric(transformer: incrementer, value: 50)

    print("Existential Result: \\(res1)")
    print("Generic Devirtualized Result: \\(res2)")
    print("✅ Generic version specialized into direct inline machine instructions via SIL!")
}
main()`,
            executable: true,
            explanation: [
              "Existential 'any DataTransformer' packages the struct into a 5-word existential container and performs dynamic Witness Table lookup.",
              "Generic 'T: DataTransformer' enables the SIL Optimizer to perform Generic Specialization, generating a dedicated function copy for FastIncrementer.",
              "In WMO mode, the compiler inlines the body of FastIncrementer.transform directly into processGeneric with 0 function call overhead.",
              "Inspecting SIL with 'swiftc -emit-sil' reveals the removal of strong_retain/strong_release pairs.",
            ],
          },
          detailedExplanation: [
            "Protocol Witness Tables (PWT): When a type conforms to a protocol, the compiler generates a static array of function pointers (Witness Table). Existential calls dereference this table at runtime. Devirtualization inspects call sites and replaces witness table lookups with direct static function jumps.",
          ],
          commonMistakes: [
            {
              mistake: "Using `any Protocol` (existential types) everywhere instead of `some Protocol` (opaque generics), forcing heap allocation and dynamic dispatch.",
              badCode: "func render(view: any View) { ... } // Slower existential container allocation",
              goodCode: "func render(view: some View) { ... } // Zero-overhead static opaque type",
              explanation: "`any Protocol` creates heap-allocated existential containers. `some Protocol` preserves concrete types for static compile-time devirtualization.",
            },
          ],
          bestPractices: [
            "Prefer `some Protocol` (opaque return types) over `any Protocol` to enable SIL devirtualization.",
            "Use `@inlinable` and `@usableFromInline` on public framework functions in hot paths.",
            "Enable Whole Module Optimization (`-whole-module-optimization`) in production release builds.",
          ],
          summary: [
            "SIL bridges high-level Swift ASTs with LLVM machine code generation.",
            "Devirtualization converts dynamic V-Table and Witness Table lookups into direct machine calls.",
            "Generics and `some Protocol` enable compile-time specialization and zero-cost inlining.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-13",
      slug: "distributed-actors-swift6-concurrency",
      title: "Module 13: Distributed Actors & Swift 6 Strict Concurrency",
      description: "Master Swift 6 concurrency: Sendable checking, data race safety, region-based isolation, and multi-node Distributed Actors.",
      lessons: [
        {
          id: "swift-distributed-actors",
          slug: "swift6-strict-concurrency-sendable-distributed-actors-cluster",
          courseSlug: "swift",
          moduleSlug: "distributed-actors-swift6-concurrency",
          title: "Swift 6 Concurrency: Data Race Safety & Distributed Actors",
          description: "Eliminate data races with Swift 6: complete concurrency checking, `Sendable` protocol enforcement, Region-Based Isolation, Actor reentrancy management, and scaling multi-node server clusters with Distributed Actors (`distributed actor`).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Swift 6 Concurrency Guarantees: compile-time data race elimination without runtime locks",
            "The `Sendable` protocol: marking thread-safe value types, immutable classes, and `@Sendable` closures",
            "Region-Based Isolation: how the compiler proves non-Sendable values never cross concurrency domains",
            "Building multi-node cluster services with `distributed actor` and custom `DistributedActorSystem`",
          ],
          introduction: `Swift 6 introduces complete compile-time Data Race Safety. The compiler mathematically proves that mutable memory is never accessed concurrently by two threads simultaneously without synchronization. Building upon local Actors, Swift's Distributed Actors feature allows actors to communicate transparently across multiple server nodes, process boundaries, or network sockets using automatic serialization.`,
          whyItMatters: `In multi-threaded server systems, data race bugs are notoriously hard to reproduce and cause catastrophic memory corruption. Swift 6 eliminates data races entirely at compile time.`,
          syntax: `distributed actor WorkerNode {\n    distributed func processTask(id: String) -> String { ... }\n}`,
          mainExample: {
            title: "Thread-Safe Actor State and Distributed Actor Messaging Pattern",
            language: "swift",
            code: `// Swift 6 Concurrency: Actor Isolation & Distributed Actor Pattern
import Foundation

// 1. Thread-Safe In-Memory Actor (Eliminates Race Conditions)
actor BankVault {
    private var balance: Double = 10000.00

    func deposit(amount: Double) {
        balance += amount
    }

    func withdraw(amount: Double) -> Bool {
        guard balance >= amount else { return false }
        balance -= amount
        return true
    }

    func getBalance() -> Double {
        return balance
    }
}

// 2. Struct conforming to Sendable for fearless concurrent transmission
struct TransactionPayload: Sendable {
    let transactionId: String
    let amount: Double
    let timestamp: Date
}

func main() async {
    print("=== Swift 6 Strict Concurrency & Actor Isolation ===")
    let vault = BankVault()

    // 3. Concurrent Task Group executing concurrent withdrawals
    await withTaskGroup(of: Bool.self) { group in
        for i in 1...5 {
            group.addTask {
                // Actor guarantees mutual exclusion with zero mutex lock overhead!
                return await vault.withdraw(amount: 1500.0)
            }
        }
    }

    let remaining = await vault.getBalance()
    print("Final Verified Vault Balance: $\\(remaining)")
    print("✅ All 5 concurrent operations synchronized cleanly with zero data races!")
}
await main()`,
            executable: true,
            explanation: [
              "actor BankVault isolates internal mutable state (balance) to its own private serial execution queue.",
              "All cross-actor invocations require 'await', allowing the runtime to coordinate access without blocking threads.",
              "TransactionPayload conforms to Sendable, ensuring it can safely cross concurrent task boundaries.",
              "Swift 6 compiler rejects non-Sendable mutable types passed across task boundaries with compile-time errors.",
            ],
          },
          detailedExplanation: [
            "Distributed Actors: Marked with `distributed actor`, these actors can execute on remote physical servers. Invocations like `try await remoteNode.process(data)` transparently serialize arguments, route them over TCP/gRPC, and deserialize the response, providing location transparency.",
          ],
          commonMistakes: [
            {
              mistake: "Assuming Actor methods are atomic across suspension points (Actor Reentrancy bug).",
              badCode: "if balance >= amount { await fetchAuth(); balance -= amount } // Bug: Balance can change during fetchAuth()!",
              goodCode: "let auth = await fetchAuth(); if balance >= amount { balance -= amount }",
              explanation: "When an actor awaits an async call, other tasks can execute on that actor. Never assume actor state remains unchanged across an `await` suspension.",
            },
          ],
          bestPractices: [
            "Enable `-strict-concurrency=complete` in Xcode / Swift Package Manager to prepare for Swift 6.",
            "Use value types (structs, enums) conforming to `Sendable` for inter-task communication.",
            "Guard against Actor Reentrancy by re-validating state conditions after every `await` call.",
          ],
          summary: [
            "Swift 6 guarantees compile-time data race freedom across all concurrency domains.",
            "Actors serialize access to their internal mutable state without locks.",
            "Distributed Actors enable location-transparent communication across clustered cloud nodes.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-14",
      slug: "swift-macros-swiftsyntax-metaprogramming",
      title: "Module 14: Swift Macro Metaprogramming with `SwiftSyntax`",
      description: "Build compile-time metaprogramming macros: Freestanding vs Attached macros, AST parsing with SwiftSyntax, and code generation.",
      lessons: [
        {
          id: "swift-macros-ast",
          slug: "swift-macro-system-swiftsyntax-attached-freestanding-macros",
          courseSlug: "swift",
          moduleSlug: "swift-macros-swiftsyntax-metaprogramming",
          title: "Swift Macros: Compile-Time Metaprogramming with SwiftSyntax",
          description: "Author type-safe compile-time code generators with the Swift Macro System: Freestanding macros (`#stringify`, `#URL`), Attached macros (`@Observable`, `@Model`), AST node traversal using Apple's `SwiftSyntax` library, and generating compile-time diagnostics.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of Swift Macros: Sandboxed out-of-process compiler plugins",
            "Freestanding macros (expression `#` and declaration) vs Attached macros (peer, member, accessor, extension)",
            "Parsing Swift code into strongly-typed Syntax trees using `SwiftSyntax`",
            "Validating compile-time invariants and generating custom Xcode diagnostics/fix-its",
          ],
          introduction: `Historically, iOS developers relied on external code generators (Sourcery, SwiftGen) or C preprocessor macros (which lacked type safety and syntax validation). Swift 5.9+ introduces native Swift Macros: sandboxed compiler plugins that parse incoming code as Abstract Syntax Trees (using SwiftSyntax), validate rules at build time, and expand into fully type-checked Swift code with live Xcode preview support.`,
          whyItMatters: `Apple's modern frameworks (SwiftData '@Model', Observation '@Observable') are powered entirely by Swift Macros, eliminating thousands of lines of boilerplate code at zero runtime cost.`,
          syntax: `@attached(member, names: named(init)) public macro AutoInit() = #externalMacro(module: "MyMacros", type: "AutoInitMacro")`,
          mainExample: {
            title: "Authoring a SwiftSyntax Attached Member Macro (Conceptual Plugin)",
            language: "swift",
            code: `// Swift Macro Plugin Implementation using SwiftSyntax (Package Plugin)
// In dedicated macro implementation module:

/*
import SwiftSyntax
import SwiftSyntaxMacros

public struct AutoInitMacro: MemberMacro {
    public static func expansion(
        of node: AttributeSyntax,
        providingMembersOf declaration: some DeclGroupSyntax,
        in context: some MacroExpansionContext
    ) throws -> [DeclSyntax] {
        // 1. Ensure target declaration is a struct
        guard let structDecl = declaration.as(StructDeclSyntax.self) else {
            throw MacroExpansionErrorMessage("@AutoInit can only be applied to structs!")
        }

        // 2. Extract stored property names and types from AST
        let members = structDecl.memberBlock.members
        let storedProperties = members.compactMap { member -> (String, String)? in
            guard let varDecl = member.decl.as(VariableDeclSyntax.self),
                  let binding = varDecl.bindings.first,
                  let pattern = binding.pattern.as(IdentifierPatternSyntax.self),
                  let type = binding.typeAnnotation?.type else { return nil }
            return (pattern.identifier.text, type.trimmedDescription)
        }

        // 3. Synthesize memberwise initializer initializer code
        let params = storedProperties.map { "\\($0.0): \\($0.1)" }.joined(separator: ", ")
        let assignments = storedProperties.map { "self.\\($0.0) = \\($0.0)" }.joined(separator: "\\n        ")

        let initDecl: DeclSyntax = """
        public init(\\(raw: params)) {
            \\(raw: assignments)
        }
        """

        return [initDecl]
    }
}
*/

// Consumer Code:
// @AutoInit
// struct AcademyStudent {
//     let name: String
//     let score: Double
// }
// Compiler synthesizes: public init(name: String, score: Double) { ... }

func main() {
    print("=== SwiftSyntax Macro Metaprogramming Engine ===")
    print("Macros run in isolated sandbox processes during compilation.")
    print("Validates AST nodes and expands synthesized code directly into compiler pipeline.")
    print("✅ Zero runtime reflection overhead; 100% type-checked at build time!")
}
main()`,
            executable: true,
            explanation: [
              "MemberMacro inspects struct declarations and generates new member properties or initializers.",
              "SwiftSyntax provides a pure Swift API for navigating and constructing Swift syntax trees.",
              "Macros run in an isolated sandbox during compilation, preventing file system mutation and ensuring reproducible builds.",
              "Xcode displays expanded macro code inline and provides step-through debugging inside generated code.",
            ],
          },
          detailedExplanation: [
            "Macro Roles: 1. `freestanding(expression)` produces values (e.g. `#URL(\"https://...\")` validates URLs at build time). 2. `attached(member)` adds new methods/fields. 3. `attached(extension)` generates protocol conformances. 4. `attached(accessor)` converts stored properties into computed getters/setters.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to perform network requests or write files inside a Swift Macro implementation.",
              badCode: "// Inside macro: URLSession.shared.dataTask(...) // Terminated by sandbox",
              goodCode: "// Macros are strictly deterministic AST transformations without external I/O",
              explanation: "The Swift compiler runs macros in a security sandbox without network or disk write permissions to guarantee build determinism.",
            },
          ],
          bestPractices: [
            "Write comprehensive unit tests for macros using `assertMacroExpansion` from `SwiftSyntaxMacrosTestSupport`.",
            "Emit clear compile-time errors and Fix-Its using `context.diagnose()`.",
            "Use `@freestanding(expression)` to validate string literals (Regex, SQL queries, URLs) at compile time.",
          ],
          summary: [
            "Swift Macros provide safe, sandboxed, compile-time AST code generation.",
            "`SwiftSyntax` parses, inspects, and synthesizes Swift syntax trees.",
            "Eliminates boilerplate for `@Observable`, `@Model`, and memberwise initializers.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-15",
      slug: "unsafe-memory-layout-c-interop",
      title: "Module 15: Memory Layout, `UnsafePointer` & C/C++ Interoperability",
      description: "Master low-level Swift memory: `MemoryLayout<T>` alignment, `UnsafeRawPointer`, manual allocation, and bidirectional C++ interop.",
      lessons: [
        {
          id: "swift-unsafe-c-interop",
          slug: "swift-memory-layout-unsafe-pointers-c-cpp-interop",
          courseSlug: "swift",
          moduleSlug: "unsafe-memory-layout-c-interop",
          title: "Memory Layout, Unsafe Pointers & C/C++ Interop",
          description: "Inspect physical memory representation in Swift: `MemoryLayout<T>` (`size`, `stride`, `alignment`), direct raw pointer manipulation (`UnsafeMutableRawBufferPointer`), manual off-heap allocation, and direct bidirectional C++ Interop.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 metrics of Swift Memory: `size` (active data bytes), `stride` (distance in arrays), `alignment` (byte boundary)",
            "The Unsafe Pointer family: `UnsafePointer<T>`, `UnsafeMutablePointer<T>`, `UnsafeRawBufferPointer`",
            "Allocating and deallocating manual off-heap memory with `UnsafeMutablePointer.allocate`",
            "Calling C++ std::vector and C++ classes directly in Swift with Swift-C++ Interoperability",
          ],
          introduction: `Swift is designed to be memory-safe by default, but provides full access to physical memory when interacting with low-level OS kernels, GPU buffers (Metal), or audio DSP pipelines. The Unsafe Pointer APIs give developers direct control over raw byte buffers, pointer arithmetic, and struct memory layout without Automatic Reference Counting overhead.`,
          whyItMatters: `Metal graphics pipelines, high-performance cryptography, and video processing engines pass raw pointer buffers directly to GPU hardware to achieve zero-copy throughput.`,
          syntax: `let ptr = UnsafeMutablePointer<Int>.allocate(capacity: 100)\nptr.initialize(repeating: 0, count: 100)\nptr.deallocate()`,
          mainExample: {
            title: "Inspecting Struct MemoryLayout and Allocating Raw Memory Pointers",
            language: "swift",
            code: `// Swift Low-Level MemoryLayout & Unsafe Pointer Manipulation
import Foundation

struct AudioSample {
    let channelId: UInt8 // 1 byte
    // 3 bytes of compiler padding inserted here!
    let amplitude: Float // 4 bytes
    let timestamp: UInt64 // 8 bytes
}

func main() {
    print("=== Swift MemoryLayout & UnsafePointer Engine ===")

    // 1. Inspect Physical Memory Representation
    print("AudioSample Size:      \\(MemoryLayout<AudioSample>.size) bytes (Active data + internal padding)")
    print("AudioSample Stride:    \\(MemoryLayout<AudioSample>.stride) bytes (Distance between elements in an array)")
    print("AudioSample Alignment: \\(MemoryLayout<AudioSample>.alignment) bytes (Aligned to 8-byte word boundaries)")

    // 2. Allocate Off-Heap Manual Memory Buffer (Outside ARC!)
    let count = 4
    let bufferPtr = UnsafeMutablePointer<AudioSample>.allocate(capacity: count)

    // Initialize memory in-place
    for i in 0..<count {
        bufferPtr.advanced(by: i).initialize(to: AudioSample(
            channelId: UInt8(i + 1),
            amplitude: Float(0.25 * Double(i + 1)),
            timestamp: 1700000000 + UInt64(i * 100)
        ))
    }

    // 3. Read back elements via raw pointer arithmetic
    for i in 0..<count {
        let sample = bufferPtr.advanced(by: i).pointee
        print("Sample #\\(i): Channel \\(sample.channelId), Amp \\(sample.amplitude), Time \\(sample.timestamp)")
    }

    // 4. Clean deinitialization and deallocation
    bufferPtr.deinitialize(count: count)
    bufferPtr.deallocate()

    print("✅ Off-heap raw memory deallocated safely with zero memory leaks!")
}
main()`,
            executable: true,
            explanation: [
              "MemoryLayout<AudioSample> reveals how the Swift compiler pads the struct to align fields on 8-byte boundaries.",
              "UnsafeMutablePointer.allocate allocates contiguous raw heap memory directly from the system allocator without ARC tracking.",
              "bufferPtr.advanced(by: i) calculates pointer offsets based on the type's stride.",
              "Must explicitly call deinitialize(count:) and deallocate() to avoid memory leaks.",
            ],
          },
          detailedExplanation: [
            "Swift-C++ Interoperability: In Swift 5.9+, setting `SWIFT_OBJC_INTEROP_MODE = cxx` enables direct calling of C++ templates, `std::vector`, `std::string`, and custom C++ classes without writing intermediate Objective-C++ bridging headers.",
          ],
          commonMistakes: [
            {
              mistake: "Escaping an unsafe pointer obtained via `withUnsafePointer` or `withUnsafeBytes` outside its closure scope.",
              badCode: "var ptr: UnsafePointer<Int>?; withUnsafePointer(to: &x) { ptr = $0 }; ptr!.pointee // Dangling pointer!",
              goodCode: "withUnsafePointer(to: &x) { ptr in use(ptr.pointee) }",
              explanation: "Pointers obtained in `withUnsafe...` blocks are only valid for the lifetime of that closure. Using them outside is undefined behavior.",
            },
          ],
          bestPractices: [
            "Use `MemoryLayout<T>.stride` when computing memory offsets for array buffers.",
            "Always match every `allocate()` call with a corresponding `deallocate()` in a `defer` block.",
            "Use `withUnsafeBytes` for zero-copy streaming of structs into network sockets.",
          ],
          summary: [
            "`MemoryLayout` describes size, stride, and hardware byte alignment of Swift types.",
            "Unsafe Pointer APIs allow direct manual memory allocation and pointer arithmetic.",
            "Direct C++ Interoperability allows seamless calling of C++ libraries from Swift.",
          ],
        },
      ],
    },
    {
      id: "mod-sw-16",
      slug: "swiftnio-eventloop-bytebuffer-networking",
      title: "Module 16: SwiftNIO Architecture: EventLoops & ByteBuffer",
      description: "Master Apple's high-performance networking engine: SwiftNIO `EventLoopGroup`, non-blocking channel pipelines, and zero-copy `ByteBuffer`.",
      lessons: [
        {
          id: "swift-swiftnio-networking",
          slug: "swiftnio-high-performance-networking-eventloop-bytebuffer",
          courseSlug: "swift",
          moduleSlug: "swiftnio-eventloop-bytebuffer-networking",
          title: "SwiftNIO: EventLoops, ChannelPipelines & ByteBuffer",
          description: "Engineer ultra-low-latency backend networking with Apple's SwiftNIO: `MultiThreadedEventLoopGroup` concurrency, non-blocking `ChannelHandler` pipelines, high-throughput `ByteBuffer` zero-copy memory management, and writing custom TCP/HTTP servers.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of SwiftNIO: non-blocking I/O event loops modeled after Netty",
            "Managing `EventLoopGroup` threads (1 event loop per CPU core)",
            "The `ChannelPipeline` chain: ChannelInboundHandler and ChannelOutboundHandler data transformations",
            "Zero-copy byte slicing, reading, and writing using SwiftNIO's `ByteBuffer` structure",
          ],
          introduction: `SwiftNIO is Apple's high-performance, asynchronous event-driven network application framework. It serves as the foundational infrastructure for Server-Side Swift frameworks (like Vapor), gRPC Swift, and async HTTP clients. SwiftNIO avoids the thread-per-connection anti-pattern by multiplexing thousands of active network sockets across a fixed pool of non-blocking OS threads using epoll and kqueue.`,
          whyItMatters: `High-concurrency microservices, real-time WebSocket game servers, and proxy gateways handle 100,000+ simultaneous connections with minimal CPU usage using SwiftNIO.`,
          syntax: `let group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)\nvar buffer = allocator.buffer(capacity: 1024)\nbuffer.writeString("HTTP/1.1 200 OK\\r\\n\\r\\n")`,
          mainExample: {
            title: "Zero-Copy ByteBuffer Manipulation and ChannelHandler in SwiftNIO",
            language: "swift",
            code: `// SwiftNIO Architecture: ByteBuffer Slicing & Channel Pipeline Simulation
import Foundation

// Simulating SwiftNIO's High-Performance ByteBuffer Architecture
struct NIOByteBufferDemo {
    private var storage: [UInt8]
    private(set) var readerIndex: Int = 0
    private(set) var writerIndex: Int = 0

    init(capacity: Int) {
        self.storage = [UInt8](repeating: 0, count: capacity)
    }

    mutating func writeString(_ string: String) {
        let utf8Bytes = Array(string.utf8)
        for byte in utf8Bytes {
            storage[writerIndex] = byte
            writerIndex += 1
        }
    }

    mutating func readString(length: Int) -> String? {
        guard (writerIndex - readerIndex) >= length else { return nil }
        let slice = storage[readerIndex..<(readerIndex + length)]
        readerIndex += length
        return String(decoding: slice, as: UTF8.self)
    }

    var readableBytes: Int {
        return writerIndex - readerIndex
    }
}

func main() {
    print("=== Apple SwiftNIO: EventLoop & ByteBuffer Engine ===")

    // 1. Initialize High-Performance ByteBuffer
    var buffer = NIOByteBufferDemo(capacity: 1024)

    // 2. High-speed write operation
    buffer.writeString("KWAS_ACADEMY_PROTOCOL_FRAME_v1")
    print("Buffer Written. Readable Bytes: \\(buffer.readableBytes)")

    // 3. Zero-Copy Read Operation
    if let message = buffer.readString(length: buffer.readableBytes) {
        print("Decoded Wire Protocol Packet: '\\(message)'")
    }

    print("Remaining Bytes in Buffer: \\(buffer.readableBytes)")
    print("✅ SwiftNIO ByteBuffer managed memory with zero allocation overhead!")
}
main()`,
            executable: true,
            explanation: [
              "SwiftNIO ByteBuffer uses readerIndex and writerIndex pointers to eliminate buffer reallocation.",
              "Reading slices advances the readerIndex without copying underlying memory (Zero-Copy slicing).",
              "MultiThreadedEventLoopGroup assigns connections to dedicated event loops, eliminating inter-thread mutex lock contention.",
              "ChannelHandlers form a chain where each handler processes or transforms bytes asynchronously.",
            ],
          },
          detailedExplanation: [
            "EventLoop Concurrency Contract: In SwiftNIO, a single `Channel` is bound to exactly one `EventLoop` for its entire lifetime. All inbound and outbound events for that connection execute sequentially on that event loop thread, eliminating the need for internal locking within ChannelHandlers.",
          ],
          commonMistakes: [
            {
              mistake: "Blocking a SwiftNIO EventLoop thread with synchronous file I/O or heavy mathematical computation.",
              badCode: "// Inside ChannelInboundHandler: Thread.sleep(forTimeInterval: 2) // Freezes all connections on event loop!",
              goodCode: "// Offload blocking tasks to NIOThreadPool or async Swift Concurrency tasks",
              explanation: "Blocking an event loop thread halts processing for hundreds of other active socket connections assigned to that thread.",
            },
          ],
          bestPractices: [
            "Always use `ByteBufferAllocator` to obtain pooled reusable memory buffers.",
            "Offload blocking database or filesystem calls to `NIOThreadPool`.",
            "Integrate SwiftNIO with Swift async/await using `EventLoopFuture.get()` or `AsyncSequence` bridges.",
          ],
          summary: [
            "SwiftNIO powers high-throughput Server-Side Swift via non-blocking event loops.",
            "`ByteBuffer` provides high-performance zero-copy network packet manipulation.",
            "EventLoop thread pinning provides lock-free concurrency for socket connections.",
          ],
        },
      ],
    },
  ],
};

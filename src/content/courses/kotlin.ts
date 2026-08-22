import { Course } from "@/types";

export const kotlinCourse: Course = {
  id: "course-kotlin",
  slug: "kotlin",
  title: "Kotlin Multiplatform, Coroutines & Modern Backend Architecture",
  tagline: "Null-safety, asynchronous Coroutines, reactive Flow, functional programming, and Kotlin Multiplatform (KMP).",
  description: "Master Kotlin for modern software engineering: JVM interoperability, compile-time null safety, smart casting, higher-order functions, sealed hierarchies, Coroutines and structured concurrency, Kotlin Flow reactive streams, generics with declaration-site variance, Ktor microservices, and Kotlin Multiplatform (KMP) architecture.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 30,
  icon: "Zap",
  badgeColor: "purple",
  prerequisites: ["Basic understanding of object-oriented programming concepts."],
  skillsGained: [
    "Compile-Time Null Safety & Smart Cast Mechanics",
    "Functional Programming & Higher-Order Functions with Inline Optimization",
    "Sealed Interfaces, Data Classes & Pattern Matching",
    "Generics with Declaration-Site Variance (in / out) & Reified Types",
    "Structured Concurrency with Kotlin Coroutines, Scopes & Dispatchers",
    "Reactive Asynchronous Streams with Kotlin Flow, StateFlow & SharedFlow",
    "Kotlin Multiplatform (KMP) Architecture for Android, iOS & Web",
    "High-Performance Microservices with Ktor & kotlinx.serialization",
    "Domain-Driven Design (DDD) & Clean Architecture in Kotlin",
    "Coroutines Unit Testing with TestScope and Turbine",
  ],
  featured: true,
  modules: [
    {
      id: "mod-kt-1",
      slug: "overview-jvm-toolchain",
      title: "Module 1: Kotlin Overview, JVM Toolchain & Interoperability",
      description: "Understand Kotlin bytecode compilation, 100% two-way Java interoperability, and Gradle build architecture.",
      lessons: [
        {
          id: "kt-overview-jvm",
          slug: "kotlin-overview-jvm-interop-toolchain",
          courseSlug: "kotlin",
          moduleSlug: "overview-jvm-toolchain",
          title: "Kotlin Overview, JVM Toolchain & Interoperability",
          description: "Discover why Kotlin modernizes JVM development, how the kotlinc compiler generates efficient bytecode, and how seamless 100% Java interoperability works.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Why JetBrains developed Kotlin to address Java verbosity and runtime nullability",
            "The Kotlin compiler architecture (JVM bytecode, Native LLVM, and JavaScript/Wasm)",
            "Seamless two-way interoperability between Kotlin and existing Java codebases",
            "Writing idiomatic top-level main functions and string templates",
          ],
          introduction: `Kotlin is a modern, statically typed, cross-platform programming language developed by JetBrains. Designed to run on the Java Virtual Machine (JVM), Kotlin provides concise syntax, compile-time null safety, functional idioms, and full binary compatibility with Java while eliminating billions of lines of boilerplate code.`,
          whyItMatters: `Kotlin is the officially preferred language for Android development by Google and is widely adopted across enterprise backend services at Amazon, Uber, Netflix, and JetBrains. Its expressive design and modern concurrency primitives allow teams to build robust systems with fewer defects.`,
          syntax: `fun main() {\n    println("Hello, KWAS Academy!")\n}`,
          mainExample: {
            title: "Idiomatic Kotlin Program with String Interpolation",
            language: "kotlin",
            code: `// Modern Kotlin: Clean, concise, and expressive
package com.kwasacademy.demo

data class PlatformMetrics(
    val platformName: String,
    val activeLanguages: Int,
    val isZeroPaywall: Boolean
)

fun main() {
    val academy = PlatformMetrics(
        platformName = "KWAS Academy",
        activeLanguages = 22,
        isZeroPaywall = true
    )

    // Multi-line raw string with string interpolation and logic expressions
    val report = """
        ========================================
        Platform: \${academy.platformName}
        Total Active Tech Tracks: \${academy.activeLanguages}
        Open Access Verified: \${if (academy.isZeroPaywall) "100% Free" else "Restricted"}
        Status: Operating on JVM with zero boilerplate!
        ========================================
    """.trimIndent()

    println(report)
}`,
            executable: true,
            explanation: [
              "data class automatically generates equals(), hashCode(), toString(), and copy() behind the scenes.",
              "val declares an immutable (read-only) reference, encouraging safe concurrency.",
              "String templates ($variable and ${expression}) simplify dynamic string formatting.",
              "trimIndent() cleanly formats multi-line raw strings without awkward leading whitespace.",
            ],
          },
          detailedExplanation: [
            "100% Java Interoperability: Kotlin code compiles directly into standard Java bytecode (.class files). You can call any existing Java library directly from Kotlin without wrappers, and Java code can seamlessly call Kotlin functions, properties, and companion objects.",
          ],
          commonMistakes: [
            {
              mistake: "Using var everywhere instead of preferring immutable val references.",
              badCode: "var platform = \"KWAS\"\nvar version = 2",
              goodCode: "val platform = \"KWAS\"\nval version = 2",
              explanation: "Defaulting to val ensures state cannot be accidentally mutated, preventing concurrency race conditions.",
            },
          ],
          bestPractices: [
            "Default to `val` for all variable declarations; only use `var` when mutation is explicitly necessary.",
            "Use `data class` for domain entities and DTOs to avoid writing manual boilerplate methods.",
            "Leverage trailing lambdas and named arguments for clear and self-documenting method calls.",
          ],
          summary: [
            "Kotlin compiles to standard JVM bytecode and provides 100% seamless interoperability with Java.",
            "`val` denotes immutable references, while `var` denotes mutable variables.",
            "Data classes eliminate boilerplate getter, setter, equals, and hashCode methods.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-2",
      slug: "null-safety-smart-casts",
      title: "Module 2: Type System, Compile-Time Null Safety & Smart Casts",
      description: "Master nullable types (T?), safe calls (?.), Elvis operator (?:), and automatic smart casting.",
      lessons: [
        {
          id: "kt-null-safety",
          slug: "kotlin-null-safety-elvis-smart-casts",
          courseSlug: "kotlin",
          moduleSlug: "null-safety-smart-casts",
          title: "Compile-Time Null Safety & Smart Casting",
          description: "Eliminate NullPointerExceptions forever using Kotlin's type system: nullable vs non-nullable types, safe call operators, Elvis fallback, and smart casting.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "How Kotlin distinguishes non-nullable types (String) from nullable types (String?) at compile time",
            "Safe call operator (`?.`) and safe chaining across object graphs",
            "The Elvis operator (`?:`) for clean default values and early returns",
            "Smart Casting (`is` checks) that automatically promote types without explicit casting",
          ],
          introduction: `Tony Hoare, inventor of the null reference, famously called it his 'billion-dollar mistake.' In traditional languages like Java, accessing a null reference causes a fatal NullPointerException (NPE) at runtime. Kotlin resolves this fundamentally at the compiler level by distinguishing types that can hold null from types that cannot.`,
          whyItMatters: `Null-related crashes are the single most common cause of mobile and server runtime failures. Kotlin's strict compile-time null verification guarantees that if your code compiles, unforeseen null dereferences are virtually impossible.`,
          syntax: `val name: String = "Alex" // Non-nullable\nval email: String? = null // Nullable\nval length = email?.length ?: 0`,
          mainExample: {
            title: "Safe Null Handling and Smart Casting in Action",
            language: "kotlin",
            code: `// Null Safety & Smart Casts in Kotlin
package com.kwasacademy.nullsafety

class UserAccount(
    val id: String,
    val username: String,
    val bio: String?,
    val creditScore: Int?
)

fun processAccount(account: UserAccount?) {
    // 1. Guard check with early return via Elvis operator
    val validAccount = account ?: run {
        println("Warning: Account payload is null.")
        return
    }

    // 2. Safe call with Elvis fallback value
    val bioSummary = validAccount.bio?.take(20) ?: "No biography provided."
    println("User: \${validAccount.username} | Bio: \$bioSummary")

    // 3. Smart casting after null check
    if (validAccount.creditScore != null) {
        // validAccount.creditScore is automatically smart-cast to non-nullable Int
        println("Credit Rating: \${validAccount.creditScore + 50} (Adjusted)")
    }
}

fun main() {
    val user = UserAccount("usr_1", "KennethDev", null, 780)
    processAccount(user)
    processAccount(null)
}`,
            executable: true,
            explanation: [
              "UserAccount? indicates the parameter might be null. The compiler prevents calling methods directly on account.",
              "account ?: run { ...; return } performs a clean guard clause, returning early if account is null.",
              "validAccount.bio?.take(20) ?: fallback safely accesses bio length without throwing NPE.",
              "After `validAccount.creditScore != null`, Kotlin automatically smart-casts creditScore to a non-nullable Int.",
            ],
          },
          detailedExplanation: [
            "The Not-Null Assertion Operator (`!!`): The `!!` operator converts any nullable reference to a non-nullable type, throwing an explicit NullPointerException if the value is null. In production code, `!!` is an anti-pattern and should be avoided in favor of safe calls (`?.`) or the Elvis operator (`?:`).",
          ],
          commonMistakes: [
            {
              mistake: "Using the not-null assertion operator (!!) in production code.",
              badCode: "val length = user.bio!!.length",
              goodCode: "val length = user.bio?.length ?: 0",
              explanation: "Using !! reintroduces runtime NullPointerExceptions that Kotlin's type system was designed to eliminate.",
            },
          ],
          bestPractices: [
            "Use safe calls (`?.`) combined with the Elvis operator (`?:`) for clean fallbacks.",
            "Use `requireNotNull()` or `checkNotNull()` when an invariant must be guaranteed with a descriptive error message.",
            "Leverage `let` blocks (`user?.let { sendEmail(it) }`) to execute code only when an object is non-null.",
          ],
          summary: [
            "Types without `?` are strictly guaranteed never to be null at compile time.",
            "The Elvis operator (`?:`) provides concise fallback default values.",
            "Smart casts automatically promote types once null checks or `is` checks succeed.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-3",
      slug: "functions-lambdas-inline",
      title: "Module 3: Functions, Lambdas, Higher-Order Functions & Inline",
      description: "Master first-class functions, trailing lambdas, extension functions, and inline/noinline optimization.",
      lessons: [
        {
          id: "kt-functions-lambdas",
          slug: "kotlin-functions-lambdas-extension-inline",
          courseSlug: "kotlin",
          moduleSlug: "functions-lambdas-inline",
          title: "Higher-Order Functions, Extension Functions & Inline",
          description: "Write expressive functional Kotlin code: higher-order functions, trailing lambda syntax, custom extension functions, and zero-allocation inline functions.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "First-class functions and higher-order functions accepting lambda parameters",
            "Extension functions that augment existing classes without inheritance",
            "The trailing lambda convention for building readable DSLs",
            "How the `inline` keyword eliminates JVM function object allocation overhead",
          ],
          introduction: `Kotlin treats functions as first-class citizens. Functions can be assigned to variables, passed as arguments to other functions, and returned from functions. Kotlin also introduces Extension Functions, allowing developers to extend any class (including third-party classes from Java or the standard library) with new methods without modifying the source code.`,
          whyItMatters: `Functional programming paradigms make business logic declarative and testable. Extension functions enable domain-specific languages (DSLs) and clean utility pipelines without cluttering codebases with static Util classes.`,
          syntax: `fun String.isEmail(): Boolean = this.contains("@")\ninline fun <T> measureTime(block: () -> T): T`,
          mainExample: {
            title: "Extension Functions and Zero-Overhead Inline Benchmarking",
            language: "kotlin",
            code: `// Extension Functions and Inline Higher-Order Functions
package com.kwasacademy.functions

// 1. Extension function on standard String class
fun String.toSlug(): String {
    return this.lowercase()
        .replace(Regex("[^a-z0-9\\\\s]"), "")
        .replace(Regex("\\\\s+"), "-")
}

// 2. Inline higher-order function: Inlines bytecode directly into call site
inline fun <T> benchmarkExecution(operationName: String, block: () -> T): T {
    val start = System.nanoTime()
    val result = block()
    val elapsedMs = (System.nanoTime() - start) / 1_000_000.0
    println("Benchmark [\$operationName]: \${String.format(\"%.3f\", elapsedMs)} ms")
    return result
}

fun main() {
    val title = "Learn Kotlin 2.0 & Coroutines Architecture!"
    println("Generated Slug: \${title.toSlug()}")

    val computationResult = benchmarkExecution("Sum of 1M Numbers") {
        (1..1_000_000).sumOf { it.toLong() }
    }
    println("Result: \$computationResult")
}`,
            executable: true,
            explanation: [
              "String.toSlug() defines an extension function on String using 'this' to reference the receiver object.",
              "inline fun instructs the kotlinc compiler to copy the function body and lambda directly into the call site.",
              "This avoids creating a temporary Function object on the JVM heap for every execution, achieving zero runtime overhead.",
            ],
          },
          detailedExplanation: [
            "Trailing Lambda Syntax: If the last parameter of a function is a lambda, you can place the lambda outside the parentheses. If the lambda is the only argument, the empty parentheses can be omitted entirely: `benchmarkExecution(\"Task\") { ... }`.",
          ],
          commonMistakes: [
            {
              mistake: "Inlining huge multi-page functions, causing generated bytecode size to bloat.",
              badCode: "inline fun hugeComplexFunction(block: () -> Unit) { /* 300 lines of code */ }",
              goodCode: "fun hugeComplexFunction(block: () -> Unit) { /* 300 lines of code */ }",
              explanation: "The inline keyword should be reserved for small functions taking lambda arguments. Inlining large functions duplicates bytecode across every call site.",
            },
          ],
          bestPractices: [
            "Use extension functions to encapsulate domain transformations cleanly on standard library types.",
            "Use `inline` for small utility functions that take lambda parameters.",
            "Take advantage of the trailing lambda convention to design elegant, readable APIs.",
          ],
          summary: [
            "Extension functions add new capabilities to existing classes without inheritance.",
            "Higher-order functions accept lambdas or return functions.",
            "The `inline` keyword eliminates JVM function object allocations for performance-critical blocks.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-4",
      slug: "oop-sealed-data-classes",
      title: "Module 4: OOP, Data Classes, Sealed Hierarchies & Pattern Matching",
      description: "Master sealed classes, sealed interfaces, exhaustive `when` expressions, and companion objects.",
      lessons: [
        {
          id: "kt-sealed-classes",
          slug: "kotlin-sealed-classes-interfaces-when-pattern-matching",
          courseSlug: "kotlin",
          moduleSlug: "oop-sealed-data-classes",
          title: "Sealed Hierarchies, Pattern Matching & Data Classes",
          description: "Model complex domain states with compile-time safety using Sealed Classes, Sealed Interfaces, and exhaustive when pattern matching.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why Sealed Classes and Sealed Interfaces represent Algebraic Data Types (Sum Types)",
            "Writing exhaustive `when` pattern matching expressions without fragile `else` branches",
            "Data classes with immutability, destructuring declarations, and `.copy()`",
            "Companion objects for factory methods and static-like access",
          ],
          introduction: `Modeling state accurately is one of the most critical aspects of robust software architecture. In Kotlin, Sealed Classes and Sealed Interfaces represent restricted class hierarchies where all direct subclasses are known at compile time. This allows the compiler to guarantee that every possible state is handled in 'when' expressions without needing fallback 'else' blocks.`,
          whyItMatters: `In UI architectures (MVI/MVVM) and backend domain models, states transition through distinct phases (Loading, Success, Error). Sealed hierarchies ensure that if a developer adds a new state, the compiler immediately flags every unhandled location across the entire project.`,
          syntax: `sealed interface NetworkResult<out T> {\n    data class Success<T>(val data: T) : NetworkResult<T>\n    data class Error(val message: String) : NetworkResult<Nothing>\n    object Loading : NetworkResult<Nothing>\n}`,
          mainExample: {
            title: "Modeling Domain State with Sealed Interfaces and Exhaustive When",
            language: "kotlin",
            code: `// Domain State Modeling with Sealed Interfaces
package com.kwasacademy.domain

sealed interface UIState<out T> {
    object Idle : UIState<Nothing>
    object Loading : UIState<Nothing>
    data class Success<T>(val data: T, val timestamp: Long) : UIState<T>
    data class Error(val code: Int, val message: String) : UIState<Nothing>
}

data class UserProfile(val id: String, val name: String, val role: String)

fun renderState(state: UIState<UserProfile>) {
    // Exhaustive pattern matching - compiler verifies every case is covered!
    val output = when (state) {
        is UIState.Idle -> "Status: Waiting for user action."
        is UIState.Loading -> "Status: Fetching secure data from backend..."
        is UIState.Success -> "Status: Profile loaded -> \${state.data.name} (\${state.data.role})"
        is UIState.Error -> "Status: Error \${state.code} -> \${state.message}"
    }
    println(output)
}

fun main() {
    val loadingState = UIState.Loading
    val successState = UIState.Success(
        data = UserProfile("usr_101", "Alex Developer", "Lead Architect"),
        timestamp = System.currentTimeMillis()
    )

    renderState(loadingState)
    renderState(successState)
}`,
            executable: true,
            explanation: [
              "sealed interface UIState restricts inheritance so no external subclasses can exist outside the module.",
              "when (state) evaluates every subclass without needing an 'else' fallback branch.",
              "If a new state (e.g. Empty) is added to UIState, the code will not compile until renderState handles it.",
              "UIState.Success uses generics (<out T>) and holds typed payload data immutably.",
            ],
          },
          detailedExplanation: [
            "Data Class Copy Method: Data classes provide a `.copy()` method for immutability-preserving state updates: `val updatedUser = user.copy(role = \"Senior Architect\")`. This creates a new instance with specified fields changed while keeping all other properties identical.",
          ],
          commonMistakes: [
            {
              mistake: "Adding a default 'else ->' branch to a when expression over a sealed hierarchy.",
              badCode: "when (state) {\n    is UIState.Success -> ...\n    else -> println(\"Other\")\n}",
              goodCode: "when (state) {\n    is UIState.Idle -> ...\n    is UIState.Loading -> ...\n    is UIState.Success -> ...\n    is UIState.Error -> ...\n}",
              explanation: "Using 'else ->' suppresses the compiler's exhaustiveness check. If a new state is added later, the compiler will not warn you that you forgot to implement it.",
            },
          ],
          bestPractices: [
            "Model UI and domain state transitions using `sealed interface`.",
            "Avoid `else` in `when` expressions on sealed types to preserve compile-time exhaustiveness guarantees.",
            "Use `.copy()` on data classes for safe, immutable state mutations.",
          ],
          summary: [
            "Sealed hierarchies restrict subclassing to the current package/module.",
            "`when` expressions over sealed classes are exhaustively verified at compile time.",
            "Data classes provide automatic structural equality and immutable `.copy()` capabilities.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-5",
      slug: "collections-sequences",
      title: "Module 5: Collections, Sequences & Functional Transformations",
      description: "Master List, Set, Map, lazy Sequences, map, filter, fold, flatMap, and memory optimization.",
      lessons: [
        {
          id: "kt-collections-sequences",
          slug: "kotlin-collections-sequences-functional-transformations",
          courseSlug: "kotlin",
          moduleSlug: "collections-sequences",
          title: "Collections, Sequences & Lazy Pipeline Evaluation",
          description: "Perform high-performance data processing using Kotlin standard collections (List, Set, Map) and lazy Sequences for large datasets.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The difference between read-only (List) and mutable (MutableList) collection interfaces",
            "Functional transformation operators: map, filter, flatMap, groupBy, fold, and reduce",
            "Eager evaluation on standard collections vs Lazy evaluation on Sequences (.asSequence())",
            "Optimizing memory allocations by avoiding intermediate collections in large pipelines",
          ],
          introduction: `Kotlin provides a rich collection library that explicitly separates read-only collection interfaces (List, Set, Map) from mutable collection interfaces (MutableList, MutableSet, MutableMap). For processing large volumes of data, Kotlin provides Sequences, which evaluate transformations lazily on an element-by-element basis.`,
          whyItMatters: `Chaining multiple transformation operators (filter, map, sorted) on standard collections creates intermediate collection copies in memory at every step. Using Sequences prevents unnecessary memory allocations when processing thousands of records.`,
          syntax: `val list = listOf(1, 2, 3)\nval seq = list.asSequence().filter { it % 2 == 0 }.map { it * 10 }.toList()`,
          mainExample: {
            title: "Comparing Eager Collections vs Lazy Sequences",
            language: "kotlin",
            code: `// Processing Datasets with Eager Collections and Lazy Sequences
package com.kwasacademy.collections

data class Transaction(val id: String, val amount: Double, val status: String)

fun main() {
    val transactions = listOf(
        Transaction("tx_1", 120.50, "COMPLETED"),
        Transaction("tx_2", 15.00, "PENDING"),
        Transaction("tx_3", 450.00, "COMPLETED"),
        Transaction("tx_4", 89.90, "FAILED"),
        Transaction("tx_5", 620.00, "COMPLETED"),
        Transaction("tx_6", 310.00, "COMPLETED")
    )

    // 1. Eager Collection Pipeline (Creates intermediate lists)
    val totalRevenue = transactions
        .filter { it.status == "COMPLETED" }
        .map { it.amount }
        .sum()

    println("Total Completed Revenue: $\${String.format(\"%.2f\", totalRevenue)}")

    // 2. Lazy Sequence Pipeline (Zero intermediate collections)
    val topHighValueTx = transactions
        .asSequence()
        .filter { it.status == "COMPLETED" }
        .filter { it.amount >= 200.0 }
        .map { "Verified High Value: \${it.id} ($\${it.amount})" }
        .take(2)
        .toList()

    println("\nTop High Value Transactions (Lazy Sequence):")
    topHighValueTx.forEach { println("  - \$it") }
}`,
            executable: true,
            explanation: [
              "listOf(...) returns an immutable read-only List.",
              ".filter { ... } and .map { ... } perform functional transformations cleanly.",
              ".asSequence() transforms the collection into a lazy evaluation stream.",
              "Sequences evaluate elements one by one through the pipeline, halting immediately once .take(2) is satisfied.",
            ],
          },
          detailedExplanation: [
            "When to use Sequences: Use Sequences when processing large collections (> 1,000 items) with multiple chained steps (e.g. filter -> map -> filter), or when using short-circuiting operations like `.take()` or `.first()`.",
          ],
          commonMistakes: [
            {
              mistake: "Using Sequences on tiny collections (e.g. 5 items), adding unnecessary iterator overhead.",
              badCode: "listOf(1, 2, 3).asSequence().map { it * 2 }.toList()",
              goodCode: "listOf(1, 2, 3).map { it * 2 }",
              explanation: "For small collections, standard eager operations are faster because creating sequence iterator wrappers carries slight overhead.",
            },
          ],
          bestPractices: [
            "Use read-only collection interfaces (`List`, `Set`, `Map`) by default across your domain model.",
            "Convert to `.asSequence()` when chaining 3+ operations on large datasets.",
            "Use `.groupBy()` and `.associateBy()` for fast, clean indexing operations.",
          ],
          summary: [
            "Kotlin distinguishes read-only interfaces from mutable collection variants.",
            "Standard collection operators are eager; Sequences are lazy and compute on demand.",
            "Use Sequences for large data streams to prevent intermediate heap allocations.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-6",
      slug: "generics-variance",
      title: "Module 6: Generics, Declaration-Site Variance (in/out) & Reified Types",
      description: "Master covariance (out), contravariance (in), invariance, type projections, and inline reified types.",
      lessons: [
        {
          id: "kt-generics-variance",
          slug: "kotlin-generics-variance-in-out-reified",
          courseSlug: "kotlin",
          moduleSlug: "generics-variance",
          title: "Generics, Variance (in/out) & Reified Type Parameters",
          description: "Master type safety in generic architectures: declaration-site variance (`out` for producers, `in` for consumers) and inline reified type parameters.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Declaration-site variance: Covariance (`out T`) and Contravariance (`in T`)",
            "Why Kotlin's declaration-site variance is superior to Java wildcard types (`? extends T`, `? super T`)",
            "Type erasure on the JVM and how `inline` + `reified` retains generic type information at runtime",
            "Building type-safe repositories and dependency injection locators",
          ],
          introduction: `Generics allow classes and functions to operate on parameterized types with complete compile-time type safety. Unlike Java which uses complex use-site wildcards (? extends T), Kotlin introduces Declaration-Site Variance: using 'out' for Producers (covariant) and 'in' for Consumers (contravariant). Furthermore, Kotlin solves JVM type erasure using 'inline reified' types.`,
          whyItMatters: `Understanding variance is essential when designing libraries, reactive architectures, and dependency injection frameworks. Reified types allow developers to inspect generic classes directly at runtime without passing awkward Class<T> parameters.`,
          syntax: `interface Producer<out T> { fun produce(): T }\ninterface Consumer<in T> { fun consume(item: T) }\ninline fun <reified T> printType()`,
          mainExample: {
            title: "Covariance, Contravariance, and Reified Runtime Type Checking",
            language: "kotlin",
            code: `// Generics Variance and Reified Type Parameters
package com.kwasacademy.generics

open class Shape(val name: String)
class Circle(val radius: Double) : Shape("Circle")

// 1. Covariant Producer (out T): Can only return T, never accept T
interface Source<out T> {
    fun fetch(): T
}

class CircleSource(private val circle: Circle) : Source<Circle> {
    override fun fetch(): Circle = circle
}

// 2. Reified Generic Function: Preserves type info at runtime!
inline fun <reified T> findByType(items: List<Any>): List<T> {
    val results = mutableListOf<T>()
    for (item in items) {
        if (item is T) { // 'is T' is legal ONLY because of 'reified'!
            results.add(item)
        }
    }
    return results
}

fun main() {
    // Covariance in action: Source<Circle> can be assigned to Source<Shape>!
    val circleSource: Source<Circle> = CircleSource(Circle(5.0))
    val shapeSource: Source<Shape> = circleSource // Valid because of 'out T'!

    println("Fetched Shape: \${shapeSource.fetch().name}")

    // Reified types in action
    val mixedList = listOf("Hello", 42, Circle(10.0), "KWAS Academy", 99.9)
    val stringsOnly: List<String> = findByType(mixedList)
    println("Extracted Strings: \$stringsOnly")
}`,
            executable: true,
            explanation: [
              "interface Source<out T> declares covariance. Since T is only produced, Source<Circle> is a valid subtype of Source<Shape>.",
              "inline fun <reified T> prevents type erasure by inlining the exact class check directly at the call site.",
              "This allows executing 'item is T' directly, which is normally impossible on the JVM due to runtime type erasure.",
            ],
          },
          detailedExplanation: [
            "PECS Rule (Producer-Extends, Consumer-Super): In Kotlin, if a generic class only *outputs* T, mark it `out T` (Covariant). If it only *consumes* T, mark it `in T` (Contravariant). If it both consumes and outputs T, leave it invariant.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to use `item is T` in a standard non-inlined generic function.",
              badCode: "fun <T> check(item: Any): Boolean = item is T // Compiler Error: Cannot check for erased type",
              goodCode: "inline fun <reified T> check(item: Any): Boolean = item is T",
              explanation: "Generic type arguments are erased at compile time on the JVM. Only inlined functions with the 'reified' keyword preserve type metadata at the bytecode level.",
            },
          ],
          bestPractices: [
            "Use `out` variance for read-only data sources, collections, and event producers.",
            "Use `in` variance for comparators, serializers, and event handlers.",
            "Use `inline fun <reified T>` to eliminate boilerplate `Class<T>` parameters in JSON parsers and dependency locators.",
          ],
          summary: [
            "`out T` declares covariance (producers); `in T` declares contravariance (consumers).",
            "Declaration-site variance avoids cumbersome Java use-site wildcard annotations.",
            "`reified` type parameters in inline functions bypass JVM type erasure.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-7",
      slug: "coroutines-structured-concurrency",
      title: "Module 7: Kotlin Coroutines & Structured Concurrency",
      description: "Master suspend functions, CoroutineScope, Dispatchers (IO, Default, Main), async/await, and Job lifecycles.",
      lessons: [
        {
          id: "kt-coroutines",
          slug: "kotlin-coroutines-structured-concurrency-dispatchers",
          courseSlug: "kotlin",
          moduleSlug: "coroutines-structured-concurrency",
          title: "Kotlin Coroutines & Structured Concurrency",
          description: "Write asynchronous, non-blocking concurrent code that reads sequentially using suspend functions, CoroutineScope, Dispatchers, and async/await.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Coroutines are lightweight virtual threads (thousands can run on a single thread)",
            "Suspend functions and continuation-passing style (CPS) compilation",
            "Coroutine Dispatchers: Dispatchers.Default (CPU), Dispatchers.IO (Disk/Network), Dispatchers.Main (UI)",
            "Structured Concurrency: CoroutineScope, Job hierarchy, and automatic cancellation propagation",
          ],
          introduction: `Coroutines are Kotlin's flagship concurrency framework. Unlike traditional OS threads which consume ~1MB of stack memory and require expensive kernel context switches, Coroutines are lightweight, cooperative execution contexts. You can launch hundreds of thousands of concurrent coroutines on a single JVM process without exhausting system memory.`,
          whyItMatters: `Asynchronous programming with callbacks or RxJava leads to callback hell and complex error management. Coroutines allow asynchronous network requests and database queries to be written sequentially with standard try/catch error handling, while remaining 100% non-blocking.`,
          syntax: `suspend fun fetchData(): String\nval deferred = async(Dispatchers.IO) { fetchApi() }\nval result = deferred.await()`,
          mainExample: {
            title: "Concurrent Asynchronous Data Fetching with Coroutines",
            language: "kotlin",
            code: `// Structured Concurrency with Kotlin Coroutines
package com.kwasacademy.coroutines

import kotlinx.coroutines.*

suspend fun fetchUserProfile(userId: String): String {
    delay(100) // Simulates non-blocking network I/O
    return "User: Alex Developer"
}

suspend fun fetchUserOrders(userId: String): List<String> {
    delay(120) // Simulates database query
    return listOf("Order #101 (Laptop)", "Order #102 (Monitor)")
}

fun main() = runBlocking {
    println("Starting concurrent data fetch on Dispatchers.Default...")

    val startTime = System.currentTimeMillis()

    // Launch both async tasks concurrently
    val profileDeferred = async(Dispatchers.IO) { fetchUserProfile("usr_1") }
    val ordersDeferred = async(Dispatchers.IO) { fetchUserOrders("usr_1") }

    // Await both results concurrently
    val profile = profileDeferred.await()
    val orders = ordersDeferred.await()

    val totalTime = System.currentTimeMillis() - startTime

    println("--- Aggregate Results ---")
    println(profile)
    println("Orders: \$orders")
    println("Total Elapsed Time: \$totalTime ms (Executed concurrently!)")
}`,
            executable: true,
            explanation: [
              "suspend fun marks functions that can pause execution without blocking the underlying OS thread.",
              "delay() is a non-blocking pause that frees the thread to execute other coroutines.",
              "async { ... } returns a Deferred<T> value representing a future computation.",
              "Both fetch operations run in parallel on Dispatchers.IO; total time equals the slowest operation (~120ms), not the sum (220ms).",
            ],
          },
          detailedExplanation: [
            "Structured Concurrency: Every coroutine must be launched inside a `CoroutineScope`. If a parent scope is cancelled, all child coroutines launched within it are automatically cancelled, preventing resource leaks and orphan background jobs.",
          ],
          commonMistakes: [
            {
              mistake: "Using Thread.sleep() inside a suspend function instead of non-blocking delay().",
              badCode: "suspend fun waitTask() { Thread.sleep(1000) }",
              goodCode: "suspend fun waitTask() { delay(1000) }",
              explanation: "Thread.sleep() freezes the entire underlying operating system thread, preventing all other coroutines on that thread from executing. delay() suspends only the current coroutine.",
            },
          ],
          bestPractices: [
            "Always use `Dispatchers.IO` for disk and network calls, and `Dispatchers.Default` for CPU-intensive algorithms.",
            "Never use `GlobalScope` in production; always bind coroutines to a lifecycle-aware `CoroutineScope`.",
            "Handle cancellation cooperatively by checking `isActive` or calling `yield()` inside long-running loops.",
          ],
          summary: [
            "Coroutines are lightweight, non-blocking units of execution managed in userspace.",
            "`suspend` functions pause execution without blocking underlying threads.",
            "Structured concurrency guarantees that child tasks are cancelled if the parent fails or finishes.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-8",
      slug: "kotlin-flow-reactive-streams",
      title: "Module 8: Asynchronous Reactive Streams with Kotlin Flow & StateFlow",
      description: "Master cold Flow, hot StateFlow, SharedFlow, backpressure, operators, and lifecycle-aware collection.",
      lessons: [
        {
          id: "kt-flow",
          slug: "kotlin-flow-stateflow-sharedflow-reactive",
          courseSlug: "kotlin",
          moduleSlug: "kotlin-flow-reactive-streams",
          title: "Reactive Streams with Kotlin Flow & StateFlow",
          description: "Build reactive asynchronous pipelines using Kotlin Flow (cold streams), StateFlow (observable state holders), and SharedFlow (event broadcasting).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The difference between Cold Streams (Flow) and Hot Streams (StateFlow/SharedFlow)",
            "Flow builder functions: `flow { emit(...) }`, `flowOf()`, and `.asFlow()`",
            "Intermediate flow operators: `filter`, `map`, `debounce`, `distinctUntilChanged`, `combine`",
            "StateFlow for modern MVI/MVVM reactive UI state management",
          ],
          introduction: `Kotlin Flow is a reactive stream library built natively on top of Coroutines. While a suspend function asynchronously returns a single value, a Flow asynchronously emits multiple sequentially calculated values over time. Flow adheres to the Reactive Streams specification with built-in backpressure and zero thread-blocking.`,
          whyItMatters: `Modern applications require real-time streaming updates: stock market tickers, chat messages, live geolocation tracking, and UI search bar autocomplete. Flow provides a clean, coroutine-native alternative to RxJava without complex reactive operators.`,
          syntax: `fun getNumbers(): Flow<Int> = flow {\n    for (i in 1..3) {\n        delay(100)\n        emit(i)\n    }\n}`,
          mainExample: {
            title: "Streaming Stock Price Ticker with Flow and Transformations",
            language: "kotlin",
            code: `// Reactive Stream Pipeline with Kotlin Flow
package com.kwasacademy.flow

import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

data class StockTick(val symbol: String, val price: Double)

// Cold Flow: Begins executing ONLY when a terminal operator (collect) is invoked
fun streamStockPrices(): Flow<StockTick> = flow {
    val prices = listOf(150.25, 151.80, 149.90, 153.40, 155.10)
    for (p in prices) {
        delay(50) // Simulates streaming interval
        emit(StockTick("KWAS", p))
    }
}

fun main() = runBlocking {
    println("Subscribing to real-time stock stream...")

    streamStockPrices()
        .filter { it.price > 150.0 }
        .map { "Ticker Update: \${it.symbol} -> $\${it.price}" }
        .collect { message ->
            println("  [Stream Event] \$message")
        }

    println("Stream completed cleanly.")
}`,
            executable: true,
            explanation: [
              "flow { emit(...) } constructs a cold asynchronous stream.",
              "delay(50) pauses emission without blocking the thread.",
              ".filter and .map transform stream items reactively as they are emitted.",
              ".collect { ... } is the terminal operator that triggers flow execution and consumes values.",
            ],
          },
          detailedExplanation: [
            "StateFlow vs SharedFlow: `StateFlow` is a hot observable state holder that always maintains and replays its current value (perfect for UI state). `SharedFlow` broadcasts events to multiple subscribers without storing state (perfect for one-off notifications or navigation events).",
          ],
          commonMistakes: [
            {
              mistake: "Performing heavy blocking operations directly inside flow operators without flowOn(Dispatchers.IO).",
              badCode: "flow.map { heavyDatabaseCall() }",
              goodCode: "flow.map { heavyDatabaseCall() }.flowOn(Dispatchers.IO)",
              explanation: "flowOn shifts the execution context of upstream operators to the specified Dispatcher, keeping the collector thread responsive.",
            },
          ],
          bestPractices: [
            "Use `StateFlow` in ViewModels and backend state managers to expose observable immutable state.",
            "Use `flowOn(Dispatchers.IO)` to designate where upstream stream processing takes place.",
            "Use `.debounce(300)` for search input text streams to eliminate redundant network calls.",
          ],
          summary: [
            "Flow emits multiple asynchronous values over time with built-in backpressure.",
            "Cold Flows execute only when `.collect()` is invoked.",
            "`StateFlow` acts as an observable state container for reactive UI and backend systems.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-9",
      slug: "kotlin-multiplatform-kmp",
      title: "Module 9: Kotlin Multiplatform (KMP) & Cross-Platform Architecture",
      description: "Share 100% of business logic across Android, iOS, Desktop, and Web using `expect`/`actual` declarations.",
      lessons: [
        {
          id: "kt-kmp",
          slug: "kotlin-multiplatform-kmp-shared-architecture",
          courseSlug: "kotlin",
          moduleSlug: "kotlin-multiplatform-kmp",
          title: "Kotlin Multiplatform (KMP) Shared Architecture",
          description: "Architect cross-platform applications by sharing data models, networking, database repositories, and business logic across Android, iOS, and Web with KMP.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The KMP philosophy: Share core business logic while keeping native UI (Jetpack Compose / SwiftUI)",
            "Common source sets (`commonMain`) vs Platform-specific source sets (`androidMain`, `iosMain`)",
            "The `expect` / `actual` declaration mechanism for platform-specific capabilities",
            "Multiplatform networking with Ktor Client and database persistence with SQLDelight",
          ],
          introduction: `Kotlin Multiplatform (KMP) is JetBrains' modern technology for sharing code across platforms without the limitations of traditional cross-platform frameworks. Unlike React Native or Flutter which abstract the UI layer and introduce heavy runtimes, KMP compiles directly to native binaries (JVM bytecode for Android, Objective-C/Swift frameworks via LLVM for iOS, WebAssembly for Web) while preserving 100% native UI performance.`,
          whyItMatters: `Engineering teams at Netflix, McDonald's, VMware, and Philips use KMP to write their data layers, networking, and validation logic once, cutting codebase duplication in half while maintaining fully native user experiences.`,
          syntax: `// commonMain\nexpect class PlatformUUID() {\n    fun generate(): String\n}\n\n// iosMain\nactual class PlatformUUID actual constructor() {\n    actual fun generate(): String = NSUUID().UUIDString\n}`,
          mainExample: {
            title: "Expect/Actual Declaration for Cross-Platform Platform Information",
            language: "kotlin",
            code: `// KMP: commonMain (Shared Business Logic)
package com.kwasacademy.kmp

// 1. Declare expected platform capability in commonMain
expect class PlatformInfo() {
    val platformName: String
}

// 2. Shared business logic utilizing the expect declaration
class WelcomeService(private val platformInfo: PlatformInfo) {
    fun getGreeting(): String {
        return "Welcome to KWAS Academy running natively on \${platformInfo.platformName}!"
    }
}

// Simulated JVM / Android actual implementation (in androidMain)
class JVMPlatformInfo : PlatformInfo {
    override val platformName: String = "JVM / Android 14"
}

fun main() {
    val service = WelcomeService(JVMPlatformInfo())
    println(service.getGreeting())
}`,
            executable: true,
            explanation: [
              "expect class declares an interface contract in commonMain that every platform must fulfill.",
              "actual class provides the platform-specific implementation using native iOS (UIKit/Foundation) or Android APIs.",
              "Shared business logic (networking, state, persistence) operates entirely in commonMain without knowing low-level OS details.",
            ],
          },
          detailedExplanation: [
            "Binary Output: For iOS targets, Kotlin/Native compiles the shared code into a native `.xcframework` that iOS developers import directly into Xcode and consume with standard Swift types.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to share platform-specific UI code in commonMain instead of keeping UI native.",
              badCode: "import android.widget.TextView // In commonMain",
              goodCode: "class SharedViewModel // Share logic only; render with Jetpack Compose on Android & SwiftUI on iOS",
              explanation: "KMP's primary strength is sharing business logic, networking, and data layers, leaving UI native for maximum responsiveness.",
            },
          ],
          bestPractices: [
            "Keep `commonMain` free of platform-specific SDK dependencies.",
            "Use Ktor Client for multiplatform HTTP networking and kotlinx.serialization for JSON parsing.",
            "Use `expect` / `actual` sparingly; prefer dependency injection interfaces when possible.",
          ],
          summary: [
            "KMP shares business logic while allowing 100% native UI rendering on iOS and Android.",
            "`commonMain` contains shared code; platform sets provide `actual` implementations.",
            "Compiles to native iOS frameworks without bridge overhead or virtual DOMs.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-10",
      slug: "ktor-microservices-backend",
      title: "Module 10: High-Performance Microservices with Ktor & kotlinx.serialization",
      description: "Build lightweight, asynchronous, high-concurrency microservices using the Ktor server framework and JSON serialization.",
      lessons: [
        {
          id: "kt-ktor-microservices",
          slug: "ktor-microservices-rest-api-kotlinx-serialization",
          courseSlug: "kotlin",
          moduleSlug: "ktor-microservices-backend",
          title: "Asynchronous Microservices with Ktor & Serialization",
          description: "Develop lightweight, high-throughput REST APIs and microservices using Ktor, Coroutines, content negotiation, and type-safe kotlinx.serialization.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of the Ktor asynchronous server engine built natively on Coroutines",
            "Configuring Ktor Plugins (ContentNegotiation, CORS, Routing, StatusPages)",
            "Automatic JSON serialization and deserialization with kotlinx.serialization",
            "Structuring RESTful API route hierarchies with type-safe parameters",
          ],
          introduction: `Ktor is an asynchronous framework for creating microservices, web applications, and HTTP clients in Kotlin. Unlike traditional heavy enterprise frameworks like Spring Boot, Ktor is modular, un-opinionated, and built from the ground up on Kotlin Coroutines. You install only the specific plugins (features) your service requires, resulting in ultra-fast boot times and minimal memory footprints.`,
          whyItMatters: `In cloud-native microservice architectures and serverless containers, memory efficiency and instant startup times are paramount. Ktor applications launch in milliseconds and handle massive concurrent traffic with negligible RAM consumption.`,
          syntax: `embeddedServer(Netty, port = 8080) {\n    install(ContentNegotiation) { json() }\n    routing {\n        get("/api/health") { call.respondText("OK") }\n    }\n}.start(wait = true)`,
          mainExample: {
            title: "Building a Type-Safe Ktor REST Microservice",
            language: "kotlin",
            code: `// Production Ktor Microservice Architecture
package com.kwasacademy.ktor

import kotlinx.serialization.Serializable

@Serializable
data class CourseResponse(
    val id: String,
    val title: String,
    val level: String,
    val isFree: Boolean
)

@Serializable
data class ErrorResponse(val error: String, val statusCode: Int)

// Simulated Ktor Route Handler
class CourseController {
    private val courses = listOf(
        CourseResponse("kt-101", "Kotlin Multiplatform Mastery", "Advanced", true),
        CourseResponse("linux-101", "Linux Kernel & Ubuntu Systems", "Beginner", true)
    )

    fun getAllCourses(): List<CourseResponse> = courses

    fun getCourseById(id: String): CourseResponse? {
        return courses.find { it.id == id }
    }
}

fun main() {
    val controller = CourseController()
    println("=== Ktor Microservice Endpoint Simulation ===")
    println("GET /api/courses -> \${controller.getAllCourses()}")
    println("GET /api/courses/kt-101 -> \${controller.getCourseById("kt-101")}")
}`,
            executable: true,
            explanation: [
              "@Serializable marks data classes for compile-time generated JSON serializers via kotlinx.serialization.",
              "Ktor uses ContentNegotiation plugin to automatically serialize data classes to JSON payloads.",
              "Ktor's lightweight pipeline handles thousands of requests per second per container instance.",
            ],
          },
          detailedExplanation: [
            "Ktor Plugin Pipeline: Everything in Ktor is a plugin installed into the application pipeline. You install plugins for Authentication (JWT), ContentNegotiation (JSON), CORS, CallLogging, and StatusPages (global error handling).",
          ],
          commonMistakes: [
            {
              mistake: "Blocking the Ktor request pipeline with synchronous blocking I/O calls.",
              badCode: "get(\"/data\") { val data = blockingHttpCall(); call.respond(data) }",
              goodCode: "get(\"/data\") { val data = withContext(Dispatchers.IO) { blockingHttpCall() }; call.respond(data) }",
              explanation: "Always wrap blocking third-party Java libraries in `withContext(Dispatchers.IO)` to prevent starving the Netty worker event loop.",
            },
          ],
          bestPractices: [
            "Use `kotlinx.serialization` for zero-reflection JSON encoding and decoding.",
            "Install the `StatusPages` plugin for centralized, consistent exception handling.",
            "Containerize Ktor services using Alpine-based JRE images or GraalVM Native Images for sub-second startup.",
          ],
          summary: [
            "Ktor is a lightweight, non-blocking asynchronous server framework built on Coroutines.",
            "`kotlinx.serialization` performs high-speed compile-time JSON encoding.",
            "Ktor's plugin architecture guarantees minimal memory overhead in cloud microservices.",
          ],
        },
      ],
    },
    {
      id: "mod-kt-11",
      slug: "testing-clean-architecture",
      title: "Module 11: Production Testing, Clean Architecture & Turbine",
      description: "Test Coroutines with TestScope, test Flow streams with Turbine, and structure Clean Architecture.",
      lessons: [
        {
          id: "kt-testing-clean-arch",
          slug: "kotlin-testing-coroutines-turbine-clean-architecture",
          courseSlug: "kotlin",
          moduleSlug: "testing-clean-architecture",
          title: "Coroutines Unit Testing, Turbine & Clean Architecture",
          description: "Write rock-solid unit tests for asynchronous Coroutines and Flow streams using kotlinx-coroutines-test, Turbine, and Clean Architecture principles.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Clean Architecture layers in Kotlin: Domain (Entities/UseCases), Data (Repository), Presentation",
            "Unit testing Coroutines with `runTest` and `StandardTestDispatcher`",
            "Testing reactive Kotlin Flow streams using the Turbine assertion library",
            "Mocking and dependency inversion using interfaces and constructor injection",
          ],
          introduction: `Writing reliable enterprise software requires clean separation of concerns and comprehensive automated testing. By structuring Kotlin codebases according to Clean Architecture (Domain, Data, and Presentation layers) and utilizing modern testing tools like kotlinx-coroutines-test and Turbine, teams can test asynchronous flows with deterministic control over virtual time.`,
          whyItMatters: `Testing asynchronous code with manual thread delays causes flaky, slow test suites. The 'runTest' framework advances virtual time instantly, allowing a 10-hour coroutine delay to be verified in less than 1 millisecond.`,
          syntax: `@Test\nfun testAsyncFlow() = runTest {\n    val result = useCase.execute()\n    assertEquals("Expected", result)\n}`,
          mainExample: {
            title: "Clean Architecture UseCase and Deterministic Coroutine Testing",
            language: "kotlin",
            code: `// Clean Architecture UseCase & Asynchronous Testing Pattern
package com.kwasacademy.testing

interface UserRepository {
    suspend fun getUserName(id: String): String
}

class GetUserGreetingUseCase(private val repository: UserRepository) {
    suspend fun execute(userId: String): String {
        val name = repository.getUserName(userId)
        return "Hello, \$name! Welcome to KWAS Academy."
    }
}

// Test Fake implementation
class FakeUserRepository : UserRepository {
    override suspend fun getUserName(id: String): String = "Alex Developer"
}

fun main() {
    val fakeRepo = FakeUserRepository()
    val useCase = GetUserGreetingUseCase(fakeRepo)

    // In a test suite, runTest controls virtual time
    println("Executing Unit Test for GetUserGreetingUseCase...")
    val result = kotlinx.coroutines.runBlocking {
        useCase.execute("usr_100")
    }

    println("Test Result: \$result")
    assert(result.contains("Alex Developer"))
    println("✅ Verification PASSED: Asynchronous domain logic verified successfully.")
}`,
            executable: true,
            explanation: [
              "Clean Architecture separates business logic (GetUserGreetingUseCase) from data sources (UserRepository).",
              "Dependency Inversion ensures use cases depend on abstract interfaces, making them 100% unit-testable with test fakes.",
              "runTest allows testing suspend functions with deterministic virtual time advancement.",
            ],
          },
          detailedExplanation: [
            "Turbine Stream Testing: Turbine is a testing library for Kotlin Flow. It allows testing flow emissions with clear assertion steps (`flow.test { assertEquals(expected, awaitItem()); awaitComplete() }`), catching unexpected emissions or unhandled errors instantly.",
          ],
          commonMistakes: [
            {
              mistake: "Using real Thread.sleep() or delay() inside unit tests, resulting in slow and flaky test suites.",
              badCode: "runBlocking { delay(5000); verify() }",
              goodCode: "runTest { advanceTimeBy(5000); verify() }",
              explanation: "runTest controls virtual time, advancing delays instantaneously without actually waiting real clock time.",
            },
          ],
          bestPractices: [
            "Use `runTest` from `kotlinx-coroutines-test` for all coroutine unit test suites.",
            "Use `Turbine` for testing reactive `Flow` and `StateFlow` streams.",
            "Isolate core business logic into framework-agnostic UseCases in the domain layer.",
          ],
          summary: [
            "Clean Architecture decouples core domain rules from database and UI frameworks.",
            "`runTest` executes asynchronous coroutines with instant virtual time control.",
            "Turbine verifies reactive Flow emissions step-by-step with zero flakiness.",
          ],
        },
      ],
    },
    {
      id: "mod-kotlin-12",
      slug: "kotlin-compiler-plugins-fir-ir",
      title: "Module 12: Kotlin Compiler Plugins: FIR Architecture & IR Lowerings",
      description: "Master Kotlin K2 compiler internals: Frontend Intermediate Representation (FIR), IR tree transformation, and building custom compiler plugins.",
      lessons: [
        {
          id: "kotlin-compiler-fir-ir",
          slug: "kotlin-compiler-plugins-k2-fir-backend-ir-lowering",
          courseSlug: "kotlin",
          moduleSlug: "kotlin-compiler-plugins-fir-ir",
          title: "Kotlin 2.0 K2 Compiler: FIR Architecture & IR Transformation",
          description: "Author custom Kotlin compiler extensions: the K2 compiler pipeline (Frontend Intermediate Representation FIR, type checking, and resolution), Backend IR lowerings (`IrElementTransformerVoid`), and generating bytecode metadata at compile-time.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The K2 Compiler architecture: Source Code -> Lexer/PSI -> FIR (Frontend) -> IR (Backend) -> JVM Bytecode / Native Binary",
            "How Jetpack Compose, Kotlin Serialization, and Arrow Meta use Kotlin Compiler Plugins to rewrite code",
            "Implementing a custom `IrGenerationExtension` to inject logging and telemetry instructions",
            "Inspecting FIR symbol tables and generating synthetic declarations",
          ],
          introduction: `With Kotlin 2.0, JetBrains introduced the K2 compiler with a completely redesigned Frontend Intermediate Representation (FIR). FIR brings 2x faster compilation speeds, unified multiplatform semantic analysis, and first-class APIs for compiler plugins. Unlike Java annotation processors that only generate new source files, Kotlin Compiler Plugins can intercept and rewrite existing Abstract Syntax Tree (AST) nodes during compilation.`,
          whyItMatters: `Frameworks like Jetpack Compose (@Composable function memoization), kotlinx.serialization (auto serializer synthesis), and AtomicFU compile down to high-performance bytecode via Kotlin IR compiler plugins.`,
          syntax: `class CustomIrGenerationExtension : IrGenerationExtension {\n    override fun generate(moduleFragment: IrModuleFragment, pluginContext: IrPluginContext) { ... }\n}`,
          mainExample: {
            title: "Building an IR Lowering Compiler Extension to Auto-Log Functions",
            language: "kotlin",
            code: `// Kotlin Compiler Plugin: Custom IR Backend Lowering (Conceptual Extension)
package com.kwasacademy.compiler.plugin

// 1. Compiler Extension Plugin Entry Point
// Implements JetBrains org.jetbrains.kotlin.backend.common.extensions.IrGenerationExtension
class PerformanceLoggingIrExtension : IrGenerationExtension {
    override fun generate(moduleFragment: IrModuleFragment, pluginContext: IrPluginContext) {
        // Traverse all classes and functions in the compiled module's IR tree
        moduleFragment.transformChildrenVoid(object : IrElementTransformerVoid() {
            override fun visitFunction(declaration: IrFunction): IrStatement {
                // Check if function is annotated with @TrackExecutionTime
                val hasAnnotation = declaration.annotations.any { 
                    it.type.asString() == "com.kwasacademy.TrackExecutionTime" 
                }

                if (hasAnnotation) {
                    println("Compiler Plugin: Injecting timing IR bytecode into \${declaration.name}")
                    // Compiler plugin injects System.currentTimeMillis() bytecode entry and exit points!
                }
                return super.visitFunction(declaration)
            }
        })
    }
}

// 2. User Application Code Consuming the Compiler Plugin:
annotation class TrackExecutionTime

class DatabaseRepository {
    @TrackExecutionTime
    fun fetchAllStudents(): List<String> {
        // Compiler plugin wraps body with timing telemetry automatically at compile time!
        return listOf("Alex", "Jordan", "Taylor")
    }
}

fun main() {
    println("=== Kotlin 2.0 K2 Compiler FIR / IR Architecture ===")
    val repo = DatabaseRepository()
    val students = repo.fetchAllStudents()
    println("Fetched students: \${students.joinToString()}")
    println("✅ Function executed with compiler-synthesized telemetry bytecode!")
}`,
            executable: true,
            explanation: [
              "FIR (Frontend IR) performs semantic analysis, resolving types and symbols with high parallelism.",
              "Backend IR (Intermediate Representation) represents the code as a tree of IrFunctions, IrClasses, and IrExpressions.",
              "IrElementTransformerVoid allows visiting and mutating IR nodes before code generation.",
              "Zero runtime reflection overhead is incurred because transformations occur entirely Ahead-Of-Time.",
            ],
          },
          detailedExplanation: [
            "FIR Symbol Resolution: In K2, FIR nodes are separated into FIR declarations (which store unresolved syntax) and FIR symbols (which store semantic types). This separation allows compiler plugins to query type information lazily without triggering whole-AST parsing locks.",
          ],
          commonMistakes: [
            {
              mistake: "Relying on KAPT (Kotlin Annotation Processing Tool) in Kotlin 2.0 projects instead of modern KSP2 or IR plugins.",
              badCode: "apply plugin: 'kotlin-kapt' // Slow Java stub generation slows down builds by 4x",
              goodCode: "apply plugin: 'com.google.devtools.ksp' // KSP2 runs directly on FIR AST",
              explanation: "KAPT generates intermediate Java stubs for Kotlin files, significantly degrading compile times. KSP2 operates directly on FIR trees.",
            },
          ],
          bestPractices: [
            "Migrate from KAPT to KSP2 (Kotlin Symbol Processing) for annotation processing.",
            "Use Kotlin IR plugins for code mutation and AST transformations.",
            "Test compiler plugins using `kotlin-compile-testing` library.",
          ],
          summary: [
            "Kotlin 2.0 K2 architecture splits compilation into FIR (Frontend) and IR (Backend).",
            "IR Lowerings rewrite syntax trees at compile time with zero runtime reflection overhead.",
            "KSP2 and IR plugins deliver 2x-4x faster build times across multiplatform projects.",
          ],
        },
      ],
    },
    {
      id: "mod-kotlin-13",
      slug: "coroutine-internals-cps-state-machines",
      title: "Module 13: Coroutine Machinery: CPS Transformation & State Machines",
      description: "Deconstruct Kotlin coroutines: Continuation-Passing Style (CPS), compiler-generated state machines, and Continuation frame allocation.",
      lessons: [
        {
          id: "kotlin-cps-internals",
          slug: "kotlin-coroutines-cps-transformation-state-machines-bytecode",
          courseSlug: "kotlin",
          moduleSlug: "coroutine-internals-cps-state-machines",
          title: "Coroutine Mechanics: CPS Transformation & Bytecode Internals",
          description: "Explore how the Kotlin compiler compiles `suspend` functions: Continuation-Passing Style (CPS) transformation, passing hidden `Continuation<T>` parameters, compiler-generated switch/case state machines, and label-based suspension resumes.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How `suspend fun calculate(): Int` is transformed into `fun calculate(continuation: Continuation<Int>): Any?`",
            "The compiler-generated `CoroutineImpl` anonymous subclass and its `label` counter state machine",
            "Why `COROUTINE_SUSPENDED` sentinel marker signals asynchronous suspension to the caller",
            "Memory lifecycle of continuation stack frames on the JVM heap",
          ],
          introduction: `Kotlin coroutines appear to execute sequential, non-blocking code without callbacks. However, the JVM has no built-in concept of Kotlin suspension. The Kotlin compiler performs Continuation-Passing Style (CPS) transformation at compile time: every \`suspend\` function is rewritten with an extra hidden parameter (\`Continuation\`), and its body is converted into a finite state machine with numerical labels.`,
          whyItMatters: `Understanding the CPS state machine allows you to debug coroutine stack traces, eliminate unnecessary suspension points in hot loops, and write low-level asynchronous integrations.`,
          syntax: `// Source code\nsuspend fun load(): Data = ...\n\n// Decompiled JVM Bytecode equivalent\nfun load(completion: Continuation<Data>): Any? { ... }`,
          mainExample: {
            title: "Simulating the Kotlin Compiler's CPS State Machine Decompilation",
            language: "kotlin",
            code: `// Simulation of Kotlin Compiler's CPS State Machine Decompilation
package com.kwasacademy.coroutines.internals

import kotlin.coroutines.Continuation
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED

// 1. Conceptual Decompiled State Machine for:
// suspend fun fetchUserWorkflow(id: String): String {
//     val profile = fetchProfile(id)   // Suspension Point 1 (label 0 -> 1)
//     val settings = fetchSettings(id) // Suspension Point 2 (label 1 -> 2)
//     return "\$profile with \$settings"
// }

class FetchUserWorkflowStateMachine(
    private val completion: Continuation<String>
) : Continuation<Any?> {
    override val context: CoroutineContext = EmptyCoroutineContext
    var label: Int = 0
    var result: Any? = null
    var savedProfile: String? = null

    override fun resumeWith(result: Result<Any?>) {
        this.result = result.getOrNull()
        executeStateMachine()
    }

    fun executeStateMachine(): Any? {
        when (label) {
            0 -> {
                println("[STATE MACHINE] Label 0: Initiating fetchProfile()")
                label = 1
                // Simulating suspend call returning COROUTINE_SUSPENDED
                return COROUTINE_SUSPENDED
            }
            1 -> {
                savedProfile = result as String
                println("[STATE MACHINE] Label 1: Profile received '\${savedProfile}', initiating fetchSettings()")
                label = 2
                return COROUTINE_SUSPENDED
            }
            2 -> {
                val settings = result as String
                val finalOutput = "\${savedProfile} + \${settings}"
                println("[STATE MACHINE] Label 2: Completed -> \${finalOutput}")
                completion.resumeWith(Result.success(finalOutput))
                return finalOutput
            }
            else -> throw IllegalStateException("Invalid coroutine state")
        }
    }
}

fun main() {
    println("=== Kotlin Coroutines: CPS State Machine Execution ===")
    val stateMachine = FetchUserWorkflowStateMachine(object : Continuation<String> {
        override val context: CoroutineContext = EmptyCoroutineContext
        override fun resumeWith(result: Result<String>) {
            println("✅ Final Coroutine Result Received: \${result.getOrNull()}")
        }
    })

    // Step 1: Initial call
    stateMachine.executeStateMachine()

    // Step 2: Background I/O completes profile fetch
    stateMachine.resumeWith(Result.success("UserProfile(Alex)"))

    // Step 3: Background I/O completes settings fetch
    stateMachine.resumeWith(Result.success("UserSettings(DarkMode)"))
}`,
            executable: true,
            explanation: [
              "Every suspend function creates an anonymous Continuation state machine class that tracks execution via an integer 'label'.",
              "Each suspension point (.await, delay, fetch) increments the label and returns COROUTINE_SUSPENDED.",
              "When async I/O finishes, resumeWith() is called, jumping directly to the corresponding label in the switch block.",
              "Local variables (savedProfile) are stored as instance fields on the state machine object.",
            ],
          },
          detailedExplanation: [
            "Continuation Frame Allocation: A single small state machine object is allocated on the heap when the coroutine begins. In sequential suspend chains, this single object is reused across all suspension points, minimizing heap allocations.",
          ],
          commonMistakes: [
            {
              mistake: "Marking functions as `suspend` when they do not actually call any suspending functions, creating useless state machine bytecode.",
              badCode: "suspend fun add(a: Int, b: Int): Int = a + b // Useless suspend modifier",
              goodCode: "fun add(a: Int, b: Int): Int = a + b",
              explanation: "The `suspend` keyword forces the compiler to generate state machine boilerplate. Only add `suspend` if the function actually suspends.",
            },
          ],
          bestPractices: [
            "Do not add `suspend` modifier to purely synchronous, non-suspending calculations.",
            "Use `inline` on higher-order suspending functions to eliminate lambda object allocations.",
            "Inspect compiled bytecode using IntelliJ's 'Show Kotlin Bytecode' -> 'Decompile' tool.",
          ],
          summary: [
            "Kotlin compiles coroutines into Continuation-Passing Style (CPS) state machines.",
            "The `label` field tracks execution progress across suspension points.",
            "`COROUTINE_SUSPENDED` signals non-blocking suspension to the calling thread.",
          ],
        },
      ],
    },
    {
      id: "mod-kotlin-14",
      slug: "kotlin-native-c-interop-memory-model",
      title: "Module 14: Kotlin/Native Runtime: C-Interop & LLVM Backend",
      description: "Master Kotlin/Native: new Garbage Collector memory model, C-Interop bindings with `cinterop`, POSIX APIs, and LLVM compilation.",
      lessons: [
        {
          id: "kotlin-native-internals",
          slug: "kotlin-native-c-interop-posix-llvm-memory-model",
          courseSlug: "kotlin",
          moduleSlug: "kotlin-native-c-interop-memory-model",
          title: "Kotlin/Native Architecture: C-Interop & LLVM Compilation",
          description: "Build standalone native binaries without a JVM using Kotlin/Native: Kotlin/Native memory model (concurrent non-blocking GC), generating C bindings with `cinterop`, calling native POSIX C functions, and compiling to native machine code via LLVM.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How the Kotlin/Native LLVM backend compiles Kotlin IR into standalone ELF/Mach-O/PE binaries",
            "The modern Kotlin/Native Memory Model (clean shared mutable state without legacy `freeze()`)",
            "Direct C-Interop with `cinterop` tool and `kotlinx.cinterop.*`",
            "Allocating native memory with `memScoped` and calling POSIX APIs (`malloc`, `free`, `getpid`)",
          ],
          introduction: `Kotlin/Native compiles Kotlin code directly into standalone native machine binaries (iOS, macOS, Linux, Windows, WebAssembly) using the LLVM compiler infrastructure. With the removal of the legacy frozen memory model in Kotlin 1.7+, Kotlin/Native features a modern multi-threaded garbage collector with seamless shared mutable state, matching JVM thread semantics.`,
          whyItMatters: `Kotlin Multiplatform (KMP) allows sharing identical business logic across Android (JVM) and iOS (Native). Kotlin/Native delivers direct C and Objective-C/Swift interop with zero JNI overhead.`,
          syntax: `import kotlinx.cinterop.*\nmemScoped {\n    val nativeBuffer = allocArray<ByteVar>(1024)\n    posix_function(nativeBuffer)\n}`,
          mainExample: {
            title: "Calling Native POSIX C APIs and Managing Native Memory in Kotlin/Native",
            language: "kotlin",
            code: `// Kotlin/Native: Low-Level C-Interop & Native Memory Management
package com.kwasacademy.nativeinterop

// In Kotlin/Native, standard POSIX APIs are available in platform.posix.*
import kotlinx.cinterop.*
import platform.posix.getpid
import platform.posix.printf
import platform.posix.time
import platform.posix.time_tVar

fun main() {
    println("=== Kotlin/Native LLVM & POSIX C-Interop Engine ===")

    // 1. Direct POSIX System Call: Query Process ID
    val pid = getpid()
    println("Active Native Process ID (getpid): \$pid")

    // 2. Native Off-Heap Memory Allocation using memScoped Arena
    memScoped {
        // Allocate native C 64-bit integer on the native stack frame
        val timeLocation = alloc<time_tVar>()

        // Pass native pointer (timeLocation.ptr) to native C function
        time(timeLocation.ptr)

        val currentTimeSeconds = timeLocation.value
        println("POSIX Epoch Timestamp from native C API: \$currentTimeSeconds seconds")

        // Allocate native C string
        val message = "Hello from Kotlin/Native LLVM compiler!\n"
        val cString = message.cstr.ptr

        // Direct C stdio call
        printf("Direct C printf output: %s", cString)
    } // memScoped ends: ALL native C stack memory is reclaimed instantly!

    println("✅ Native memory freed cleanly without GC overhead.")
}`,
            executable: false,
            explanation: [
              "platform.posix.* gives direct access to native OS C functions with zero overhead.",
              "memScoped { } creates an arena allocation scope where native pointers are allocated on the native stack.",
              "alloc<time_tVar>() allocates raw C struct/integer memory outside the Kotlin GC heap.",
              "When memScoped exits, all allocated native memory is deallocated in O(1) time.",
            ],
          },
          detailedExplanation: [
            "Kotlin/Native Memory Model: Modern Kotlin/Native uses a concurrent Mark-Sweep Garbage Collector that runs concurrently with native threads. Objects can be shared and mutated freely across threads without legacy `freeze()` restrictions.",
          ],
          commonMistakes: [
            {
              mistake: "Passing Kotlin objects to asynchronous C callbacks without pinning them, causing the GC to collect or move them.",
              badCode: "cFunction(kotlinObject.rawPtr) // GC might move or collect object!",
              goodCode: "val pinned = kotlinObject.pin(); try { cFunction(pinned.addressOf(0)) } finally { pinned.unpin() }",
              explanation: "When passing Kotlin memory to asynchronous C libraries, always Pin the memory to prevent the Kotlin GC from relocating it.",
            },
          ],
          bestPractices: [
            "Use `memScoped` for short-lived native memory allocations.",
            "Pin Kotlin byte arrays using `.pin()` before passing them to native C/C++ I/O buffers.",
            "Use Kotlin Multiplatform (KMP) to share business models across JVM and Native targets.",
          ],
          summary: [
            "Kotlin/Native uses LLVM to produce standalone native binaries.",
            "Modern concurrent GC enables fearless multi-threaded shared mutable state.",
            "`cinterop` and `memScoped` provide type-safe, zero-overhead native C interoperability.",
          ],
        },
      ],
    },
    {
      id: "mod-kotlin-15",
      slug: "high-performance-serialization-protobuf",
      title: "Module 15: High-Performance Serialization: Decoders & Protobuf",
      description: "Master `kotlinx.serialization` internals: custom `KSerializer`, zero-allocation streaming decoders, and Protocol Buffers.",
      lessons: [
        {
          id: "kotlin-custom-serialization",
          slug: "kotlinx-serialization-custom-serializers-protobuf-streaming",
          courseSlug: "kotlin",
          moduleSlug: "high-performance-serialization-protobuf",
          title: "kotlinx.serialization: Custom Serializers & Protobuf Streaming",
          description: "Author high-throughput binary and text encoders: the `KSerializer<T>` interface, `SerialDescriptor` metadata trees, implementing custom non-blocking streaming `CompositeDecoder`, and high-speed binary Protocol Buffers (`ProtoBuf`).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of `kotlinx.serialization`: Descriptors, Encoders, Decoders, and Serializers",
            "Why `kotlinx.serialization` uses compile-time code generation instead of slow JVM reflection (Jackson/Gson)",
            "Authoring custom `KSerializer<T>` implementations with fine-grained error handling",
            "Ultra-compact binary serialization with `ProtoBuf.encodeToByteArray`",
          ],
          introduction: `Traditional JVM serialization libraries (such as Jackson and Gson) rely heavily on runtime reflection to inspect fields and construct objects, consuming CPU and generating large amounts of temporary garbage. \`kotlinx.serialization\` uses a Kotlin Compiler Plugin to generate type-safe serializer implementations at compile time, enabling zero-reflection serialization for JSON, Protocol Buffers, and CBOR across all Kotlin platforms.`,
          whyItMatters: `High-frequency microservices and mobile network requests serialize millions of payloads per second. Compiled Protocol Buffers serialization is 10x faster and produces payloads 70% smaller than JSON.`,
          syntax: `@Serializable\ndata class Packet(val id: Int, val payload: ByteArray)\nval bytes = ProtoBuf.encodeToByteArray(Packet.serializer(), packet)`,
          mainExample: {
            title: "Custom KSerializer for Instant and Protocol Buffer Encoding",
            language: "kotlin",
            code: `// High-Performance Custom KSerializer & Binary Protocol Buffers
package com.kwasacademy.serialization

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ByteArraySerializer
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*
import kotlinx.serialization.protobuf.ProtoBuf
import java.time.Instant

// 1. Custom Serializer for java.time.Instant (Serializes as Epoch Milliseconds Long)
object InstantEpochSerializer : KSerializer<Instant> {
    override val descriptor: SerialDescriptor =
        PrimitiveSerialDescriptor("InstantEpoch", PrimitiveKind.LONG)

    override fun serialize(encoder: Encoder, value: Instant) {
        encoder.encodeLong(value.toEpochMilli())
    }

    override fun deserialize(decoder: Decoder): Instant {
        val epochMs = decoder.decodeLong()
        return Instant.ofEpochMilli(epochMs)
    }
}

// 2. High-Performance Telemetry Packet
@Serializable
data class TelemetryEvent(
    val eventId: Long,
    val sensorName: String,
    @Serializable(with = InstantEpochSerializer::class)
    val timestamp: Instant,
    val readings: List<Double>
)

fun main() {
    println("=== kotlinx.serialization: Custom Serializers & ProtoBuf ===")

    val event = TelemetryEvent(
        eventId = 90210L,
        sensorName = "GPU_TEMPERATURE_CORE_0",
        timestamp = Instant.now(),
        readings = listOf(68.5, 70.2, 69.8)
    )

    // 3. Ultra-compact Binary Protocol Buffers Serialization (Zero Reflection!)
    val protoBytes: ByteArray = ProtoBuf.encodeToByteArray(TelemetryEvent.serializer(), event)
    println("ProtoBuf Encoded Binary Size: \${protoBytes.size} bytes (Extremely compact!)")

    // 4. Binary Deserialization
    val decodedEvent = ProtoBuf.decodeFromByteArray(TelemetryEvent.serializer(), protoBytes)
    println("Decoded Event ID: \${decodedEvent.eventId} | Sensor: \${decodedEvent.sensorName}")
    println("Decoded Timestamp: \${decodedEvent.timestamp}")
    println("✅ Custom serializer and ProtoBuf executed with 100% compile-time type safety!")
}`,
            executable: true,
            explanation: [
              "InstantEpochSerializer transforms complex Instant objects into primitive 64-bit Longs.",
              "ProtoBuf.encodeToByteArray produces raw binary wire-format bytes without JSON string overhead.",
              "Zero JVM reflection was used: TelemetryEvent.serializer() was generated Ahead-Of-Time by the compiler.",
              "Cross-platform compatible across Android, iOS, JVM, and WebAssembly.",
            ],
          },
          detailedExplanation: [
            "CompositeDecoder Streaming: When deserializing complex objects, `decodeElementIndex(descriptor)` returns the index of the next field in the stream. This allows non-blocking parsing of fields that arrive out-of-order in JSON or ProtoBuf streams without buffering the entire payload in RAM.",
          ],
          commonMistakes: [
            {
              mistake: "Using reflection-based serializers (Gson/Jackson) in Kotlin Multiplatform, causing compilation failures on iOS and WebAssembly.",
              badCode: "Gson().toJson(model) // Fails on Kotlin/Native (no JVM reflection available)",
              goodCode: "Json.encodeToString(model) // Works universally across JVM, iOS, and JS",
              explanation: "Kotlin/Native has no JVM reflection engine. `kotlinx.serialization` is required for true multiplatform serialization.",
            },
          ],
          bestPractices: [
            "Use `ProtoBuf` format for internal microservice RPC and WebSocket telemetry.",
            "Use `@Serializable(with = CustomSerializer::class)` for third-party classes you do not own.",
            "Configure `Json { ignoreUnknownKeys = true; coerceInputValues = true }` for resilient APIs.",
          ],
          summary: [
            "`kotlinx.serialization` provides compile-time code-generated serializers with zero reflection.",
            "`KSerializer<T>` enables complete control over data encoding and schema descriptors.",
            "Protocol Buffers format produces ultra-compact binary streams for high-speed networks.",
          ],
        },
      ],
    },
    {
      id: "mod-kotlin-16",
      slug: "distributed-event-streams-kafka-coroutines",
      title: "Module 16: Distributed Event Streams with Kafka & Coroutine Workers",
      description: "Build reactive microservices: Apache Kafka consumers, backpressure handling with Coroutine Channels, and concurrent pipeline workers.",
      lessons: [
        {
          id: "kotlin-kafka-coroutines",
          slug: "distributed-event-streaming-kafka-coroutine-channels-workers",
          courseSlug: "kotlin",
          moduleSlug: "distributed-event-streams-kafka-coroutines",
          title: "Distributed Event Streaming with Kafka & Coroutine Channels",
          description: "Architect high-throughput event processing pipelines: integrating Apache Kafka consumers with Kotlin Coroutine `Channel` buffers, fan-out worker pools, manual commit offset tracking, and non-blocking backpressure management.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Bridging synchronous Apache Kafka Consumer poll loops with asynchronous Kotlin Coroutines",
            "Fan-out processing pipelines using bounded Coroutine `Channel<Record>(capacity = 500)`",
            "Handling backpressure and slow downstream services without crashing Kafka partition rebalances",
            "Atomic manual offset committing and Exactly-Once Processing (EOP) semantics",
          ],
          introduction: `High-scale streaming architectures use Apache Kafka to distribute millions of events per second across microservice clusters. In Kotlin, bridging Kafka's blocking poll API with Coroutine Channels allows you to spawn thousands of concurrent worker coroutines to process messages in parallel, while maintaining strict partition offset ordering and backpressure safety.`,
          whyItMatters: `Standard multi-threaded Kafka consumers risk blocking the poll thread during long-running tasks, triggering fatal Kafka consumer group rebalances. Coroutine worker channels decouple message fetching from processing.`,
          syntax: `val channel = Channel<ConsumerRecord<String, String>>(capacity = 100)\nval workerJob = launch(Dispatchers.Default) { for (msg in channel) process(msg) }`,
          mainExample: {
            title: "High-Throughput Kafka Coroutine Worker Pool with Backpressure Channel",
            language: "kotlin",
            code: `// High-Throughput Event Pipeline with Coroutine Channels
package com.kwasacademy.kafka.streaming

import kotlinx.coroutines.*
import kotlinx.coroutines.channels.Channel
import java.util.concurrent.atomic.AtomicInteger

data class OrderEvent(val orderId: String, val amount: Double)

class KafkaEventProcessor(private val scope: CoroutineScope) {
    // 1. Bounded Buffer Channel (Enforces strict Backpressure!)
    private val eventChannel = Channel<OrderEvent>(capacity = 100)
    private val processedCounter = AtomicInteger(0)

    fun startPipeline(numWorkers: Int) {
        // 2. Fan-Out: Spawn concurrent Coroutine Worker Pool
        repeat(numWorkers) { workerId ->
            scope.launch(Dispatchers.Default) {
                for (event in eventChannel) {
                    processEvent(workerId, event)
                }
            }
        }
    }

    private suspend fun processEvent(workerId: Int, event: OrderEvent) {
        // Simulate asynchronous database mutation or payment settlement
        delay(15)
        val count = processedCounter.incrementAndGet()
        if (count % 20 == 0) {
            println("[Worker #\${workerId}] Processed event: \${event.orderId} (Total: \${count})")
        }
    }

    suspend fun emitEvent(event: OrderEvent) {
        // Suspends if the 100-capacity buffer is full (Zero OOM risk!)
        eventChannel.send(event)
    }

    fun close() {
        eventChannel.close()
    }
}

fun main() = runBlocking {
    println("=== Distributed Event Streaming Pipeline with Coroutines ===")
    val processor = KafkaEventProcessor(this)
    processor.startPipeline(numWorkers = 4)

    // Simulate Kafka Poll Ingestion Loop
    val startTime = System.currentTimeMillis()
    for (i in 1..60) {
        processor.emitEvent(OrderEvent(orderId = "ORD_#\${i}", amount = 99.95))
    }

    delay(300) // Allow workers to complete processing
    processor.close()
    println("✅ Processed 60 streaming events concurrently across 4 workers in \${System.currentTimeMillis() - startTime}ms!")
}`,
            executable: true,
            explanation: [
              "Channel<OrderEvent>(capacity = 100) creates a bounded backpressure buffer between ingestion and processing.",
              "If downstream workers slow down, eventChannel.send() suspends the producer without dropping messages or exhausting RAM.",
              "Fan-out workers pull from the shared channel concurrently, maximizing multi-core CPU utilization.",
              "Decouples fast Kafka partition polling from long-running database writes, preventing rebalance timeouts.",
            ],
          },
          detailedExplanation: [
            "Manual Offset Management: In production Kafka consumers, offsets must be committed only after the worker coroutine confirms successful database persistence. Offsets should be committed synchronously during periodic poll intervals using `consumer.commitSync(offsetsMap)`.",
          ],
          commonMistakes: [
            {
              mistake: "Using an unbounded Coroutine Channel (`Channel.UNLIMITED`) for high-throughput streaming, causing Out-Of-Memory crashes during downstream outages.",
              badCode: "val channel = Channel<Event>(Channel.UNLIMITED) // Danger: Consumes all RAM if database slows",
              goodCode: "val channel = Channel<Event>(capacity = 500) // Bounded backpressure buffer",
              explanation: "An unbounded channel buffers infinite incoming events in RAM when workers are slow, eventually triggering an OOM JVM crash.",
            },
          ],
          bestPractices: [
            "Always use bounded channels (`capacity = N`) to provide deterministic backpressure.",
            "Use `Dispatchers.Default` for CPU-intensive data transformations and `Dispatchers.IO` for database persistence.",
            "Commit Kafka offsets only after batch worker confirmation to achieve at-least-once delivery guarantees.",
          ],
          summary: [
            "Coroutine Channels decouple high-speed event ingestion from asynchronous processing.",
            "Bounded buffers enforce natural backpressure, protecting systems from traffic surges.",
            "Fan-out coroutine worker pools maximize multi-core throughput for real-time streaming architectures.",
          ],
        },
      ],
    },
  ],
};

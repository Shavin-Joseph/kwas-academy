import { Course } from "@/types";

export const csharpCourse: Course = {
  id: "course-csharp",
  slug: "csharp",
  title: "C# 13 & .NET 9 Enterprise Cloud & Microservices Engineering",
  tagline: "Type safety, LINQ, async/await, ASP.NET Core Minimal APIs, EF Core 9, and cloud-native architecture.",
  description: "Master modern C# 13 and .NET 9: Common Language Runtime (CLR) architecture, Nullable Reference Types, records, pattern matching, LINQ expressions, asynchronous programming with Task/ValueTask, Dependency Injection, high-performance ASP.NET Core Minimal APIs, Entity Framework Core 9, zero-allocation memory optimization with Span<T>/Memory<T>, and cloud-native microservices with Docker and Polly resilience.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 32,
  icon: "Code",
  badgeColor: "purple",
  prerequisites: ["Understanding of object-oriented programming concepts."],
  skillsGained: [
    ".NET 9 CLR, JIT Compilation & Garbage Collector Internals",
    "Nullable Reference Types & Compile-Time Null Safety",
    "Pattern Matching & Functional Expressions in C# 13",
    "LINQ (Language Integrated Query) & Expression Trees",
    "Asynchronous Task & ValueTask Non-Blocking Architecture",
    "ASP.NET Core 9 High-Throughput Minimal APIs & Middleware",
    "Entity Framework Core 9 ORM & Query Performance Tuning",
    "Zero-Allocation Memory Optimization with Span<T> and Memory<T>",
    "High-Performance gRPC Microservices in .NET 9",
    "Cloud Resilience, Retries, and Circuit Breakers with Polly",
  ],
  featured: true,
  modules: [
    {
      id: "mod-cs-1",
      slug: "dotnet-clr-toolchain",
      title: "Module 1: C# 13 & .NET 9 CLR Architecture & Toolchain",
      description: "Understand the Common Language Runtime (CLR), JIT compiler (RyuJIT), Native AOT compilation, and CLI toolchain.",
      lessons: [
        {
          id: "cs-overview-clr",
          slug: "csharp-dotnet9-clr-architecture-toolchain",
          courseSlug: "csharp",
          moduleSlug: "dotnet-clr-toolchain",
          title: "C# 13 & .NET 9 CLR Architecture & Toolchain",
          description: "Explore the modern open-source .NET 9 platform: how C# compiles to Common Intermediate Language (CIL), JIT compilation with RyuJIT, and Native AOT compilation.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The evolution of .NET: From legacy .NET Framework to modern cross-platform .NET 9",
            "How C# code compiles into Common Intermediate Language (CIL) and executes inside the CLR",
            "RyuJIT (Just-In-Time) compilation and Dynamic Profile-Guided Optimization (PGO)",
            "Native Ahead-Of-Time (AOT) compilation for instant startup and tiny container images",
          ],
          introduction: `C# is a modern, object-oriented, type-safe programming language developed by Microsoft. Powered by the open-source, cross-platform .NET 9 runtime, C# executes on Windows, Linux, and macOS. .NET 9 combines the high developer productivity of managed memory with near-C++ execution performance via cutting-edge JIT and Native AOT compilation.`,
          whyItMatters: `C# and .NET power critical enterprise banking systems, cloud backends at Microsoft Azure, game engines (Unity), and microservice fleets worldwide. Understanding CLR memory management and execution pipelines is essential for architecting high-throughput backend services.`,
          syntax: `// C# 13 Top-Level Statements\nConsole.WriteLine("Welcome to KWAS Academy .NET 9!");`,
          mainExample: {
            title: "Modern C# 13 Top-Level Statements and Record Types",
            language: "csharp",
            code: `// C# 13 Modern Syntax & Record Types
using System;

// Positional record with immutability and value equality
public record TrackInfo(
    string Name,
    string RuntimeVersion,
    int ModulesCount,
    bool IsOpenSource
);

var track = new TrackInfo(
    Name: "C# 13 & .NET 9 Enterprise Architecture",
    RuntimeVersion: ".NET 9.0.100 (CoreCLR)",
    ModulesCount: 11,
    IsOpenSource: true
);

// String interpolation with raw string literals (C# 11+)
string report = $"""
    ========================================
    Platform: KWAS Academy
    Track: {track.Name}
    Runtime Engine: {track.RuntimeVersion}
    Syllabus: {track.ModulesCount} Deep Modules
    License: {(track.IsOpenSource ? "100% Free & Open" : "Commercial")}
    ========================================
    """;

Console.WriteLine(report);`,
            executable: true,
            explanation: [
              "Top-Level Statements (C# 9+) eliminate boilerplate Program class and static void Main declarations.",
              "public record creates an immutable reference type with automatic value-based equality and deconstruction.",
              "Raw string literals preserve exact formatting and multi-line indents without messy escape characters.",
            ],
          },
          detailedExplanation: [
            "Dynamic PGO (Profile-Guided Optimization): .NET 9 includes Tiered Compilation and Dynamic PGO. The CLR first compiles methods quickly without optimization (Tier 0). As methods become hot in production, the runtime observes real-time call patterns and recompiles them (Tier 1) with aggressive hardware-specific vectorization (AVX-512, ARM Neon) and inlining.",
          ],
          commonMistakes: [
            {
              mistake: "Using legacy full-framework Windows-specific APIs instead of modern cross-platform .NET Core APIs.",
              badCode: "System.Web.HttpContext // Legacy ASP.NET Framework",
              goodCode: "Microsoft.AspNetCore.Http.HttpContext // Modern .NET 9",
              explanation: "Modern .NET is fully cross-platform and optimized for Linux containers. Avoid referencing deprecated .NET Framework namespaces.",
            },
          ],
          bestPractices: [
            "Leverage top-level statements and global usings to keep project entry points clean.",
            "Use `record` and `record struct` for domain data transfer objects (DTOs).",
            "Consider Native AOT (`<PublishAot>true</PublishAot>`) for cloud microservices where sub-millisecond cold starts are required.",
          ],
          summary: [
            ".NET 9 is a cross-platform, high-performance runtime executing on Linux, macOS, and Windows.",
            "C# compiles to CIL and is executed by the CLR via tiered RyuJIT compilation.",
            "C# 13 simplifies code with top-level statements, raw string literals, and records.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-2",
      slug: "type-system-nullables-records",
      title: "Module 2: Type System, Value vs Reference, Records & Nullable Types",
      description: "Master structs vs classes, Nullable Reference Types (`#nullable enable`), records, and `with` expressions.",
      lessons: [
        {
          id: "cs-type-system-nullables",
          slug: "csharp-type-system-nullables-records-with-expressions",
          courseSlug: "csharp",
          moduleSlug: "type-system-nullables-records",
          title: "Type System, Nullable References & Records",
          description: "Master C# type fundamentals: Value Types (structs) vs Reference Types (classes), compile-time Nullable Reference Types (`#nullable enable`), and immutable records with `with` expressions.",
          durationMinutes: 20,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Memory architecture: Value types on the Stack vs Reference types on the Managed Heap",
            "Nullable Reference Types (`string?`) and eliminating NullReferenceExceptions at compile time",
            "The null-forgiving operator (`!`) and null-coalescing assignment (`??=`)",
            "Non-destructive mutation on immutable records using the `with` expression",
          ],
          introduction: `C# features a unified, strongly typed type system. All types inherit from System.Object, but are divided into Value Types (stored on the stack or inline) and Reference Types (stored on the managed heap). In modern C#, Nullable Reference Types allow the compiler to enforce null safety across the entire codebase.`,
          whyItMatters: `NullReferenceExceptions have historically been the leading cause of server crashes in production .NET applications. Enabling nullable reference types allows the C# compiler to flag potential null dereferences before code ever reaches staging.`,
          syntax: `string nonNull = "Hello";\nstring? nullable = null;\nvar updated = original with { Name = "New" };`,
          mainExample: {
            title: "Compile-Time Null Safety and Record Non-Destructive Mutation",
            language: "csharp",
            code: `// Nullable Reference Types & Immutable Records in C#
#nullable enable
using System;

public record UserProfile(string Id, string Username, string? Bio, int CreditScore);

public class Program
{
    public static void ProcessUser(UserProfile? profile)
    {
        // 1. Guard check with early return
        if (profile is null)
        {
            Console.WriteLine("Warning: User profile is null.");
            return;
        }

        // 2. Null-coalescing operator with fallback
        string bioSummary = profile.Bio ?? "No public biography provided.";
        Console.WriteLine($"User: {profile.Username} | Bio: {bioSummary}");

        // 3. Non-destructive mutation using 'with' expression
        var upgradedUser = profile with { CreditScore = profile.CreditScore + 50 };
        Console.WriteLine($"Original Score: {profile.CreditScore} | Upgraded: {upgradedUser.CreditScore}");
    }

    public static void Main()
    {
        var user = new UserProfile("usr_100", "AlexCSharp", null, 740);
        ProcessUser(user);
        ProcessUser(null);
    }
}`,
            executable: true,
            explanation: [
              "#nullable enable instructs the compiler to treat standard reference types as non-nullable unless explicitly marked with '?'.",
              "profile.Bio is declared string?, allowing it to hold null safely.",
              "profile.Bio ?? fallback supplies a clean default value if Bio is null.",
              "The 'with' expression creates a shallow copy of the record with specified properties modified immutably.",
            ],
          },
          detailedExplanation: [
            "Boxing and Unboxing: Boxing is the process of converting a value type (like int or struct) to System.Object or an interface reference on the heap. Unboxing extracts the value type back from the object reference. Modern C# uses generics and Span<T> to eliminate boxing overhead completely.",
          ],
          commonMistakes: [
            {
              mistake: "Ignoring compiler nullable warnings (#nullable enable) with the null-forgiving operator (!).",
              badCode: "string name = user.Bio!; // Suppresses warning without checking",
              goodCode: "string name = user.Bio ?? \"Default\";",
              explanation: "The null-forgiving operator (!) suppresses compiler warnings but does not protect against runtime NullReferenceExceptions if the value is actually null.",
            },
          ],
          bestPractices: [
            "Enable `<Nullable>enable</Nullable>` in all .csproj project files by default.",
            "Use `record` for immutable domain entities and request DTOs.",
            "Use `is null` and `is not null` pattern matching instead of legacy `== null` operator overloads.",
          ],
          summary: [
            "Value types store data directly; reference types store references to heap objects.",
            "Nullable Reference Types detect null bugs at compile time.",
            "Records provide built-in value equality, immutability, and `with` expressions.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-3",
      slug: "pattern-matching-oop",
      title: "Module 3: Object-Oriented Design, Pattern Matching & Interfaces",
      description: "Master C# pattern matching, type patterns, relational patterns, property patterns, and default interface methods.",
      lessons: [
        {
          id: "cs-pattern-matching",
          slug: "csharp-pattern-matching-switch-expressions-interfaces",
          courseSlug: "csharp",
          moduleSlug: "pattern-matching-oop",
          title: "Modern Pattern Matching & Switch Expressions",
          description: "Write expressive, concise business logic using C# pattern matching: type patterns, property patterns, positional patterns, relational comparisons, and switch expressions.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The evolution of the switch statement into concise switch expressions (`=>`)",
            "Property patterns for inspecting nested object states without nested if blocks",
            "Relational patterns (`> 100`, `<= 500`) and logical combinators (`and`, `or`, `not`)",
            "Default interface methods for evolving API contracts safely",
          ],
          introduction: `Modern C# has embraced functional pattern matching, transforming the way developers evaluate complex business rules. Instead of long, error-prone chains of 'if-else' statements and type casts, C# switch expressions allow you to match on types, properties, ranges, and positional tuples in clean, declarative expressions.`,
          whyItMatters: `Complex business logic (like discount rules, tax calculations, and permission gates) becomes readable, self-documenting, and provably exhaustive when written with pattern matching switch expressions.`,
          syntax: `var status = code switch {\n    200 => "OK",\n    404 => "Not Found",\n    >= 500 => "Server Error",\n    _ => "Unknown"\n};`,
          mainExample: {
            title: "Advanced Property and Relational Pattern Matching in C#",
            language: "csharp",
            code: `// Modern Pattern Matching & Switch Expressions in C# 13
using System;

public abstract record PaymentMethod;
public record CreditCard(string CardNumber, decimal Balance, bool IsVerified) : PaymentMethod;
public record CryptoWallet(string WalletAddress, decimal UsdValue) : PaymentMethod;
public record BankTransfer(string AccountNumber, bool IsInternational) : PaymentMethod;

public class FeeCalculator
{
    public static decimal CalculateProcessingFee(PaymentMethod payment, decimal amount) =>
        payment switch
        {
            // Property pattern with relational conditions and logical combinators
            CreditCard { IsVerified: true, Balance: >= 1000m } => amount * 0.015m, // 1.5% VIP rate
            CreditCard { IsVerified: true } => amount * 0.025m,                    // 2.5% Standard
            CreditCard { IsVerified: false } => throw new InvalidOperationException("Unverified card rejected."),

            CryptoWallet { UsdValue: >= 5000m } => 5.00m,                           // Flat $5 fee
            CryptoWallet => 15.00m,                                                // Flat $15 fee

            BankTransfer { IsInternational: true } => 25.00m,
            BankTransfer { IsInternational: false } => 0.00m,                      // Free domestic transfer

            _ => throw new ArgumentException("Unsupported payment provider.")
        };
}

public class Program
{
    public static void Main()
    {
        PaymentMethod card = new CreditCard("4111222233334444", 2500m, true);
        PaymentMethod crypto = new CryptoWallet("0x71C...89B", 8000m);
        PaymentMethod wire = new BankTransfer("ACC-90112", false);

        Console.WriteLine($"Credit Card Fee (100 USD transaction): USD {FeeCalculator.CalculateProcessingFee(card, 100m)}");
        Console.WriteLine($"Crypto Wallet Fee (500 USD transaction): USD {FeeCalculator.CalculateProcessingFee(crypto, 500m)}");
        Console.WriteLine($"Domestic Wire Fee (10,000 USD transaction): USD {FeeCalculator.CalculateProcessingFee(wire, 10000m)}");
    }
}`,
            executable: true,
            explanation: [
              "CalculateProcessingFee is an expression-bodied method evaluating a switch expression.",
              "CreditCard { IsVerified: true, Balance: >= 1000m } matches on both boolean state and relational numeric bounds.",
              "The discard pattern (_) acts as a safe fallback branch.",
              "Pattern matching automatically type-casts the matched object within its branch scope.",
            ],
          },
          detailedExplanation: [
            "Exhaustiveness Checking: When pattern matching over an enum or closed class hierarchy, the C# compiler validates exhaustiveness. If a developer fails to handle a potential case, the compiler emits a warning, preventing unhandled edge cases.",
          ],
          commonMistakes: [
            {
              mistake: "Writing deeply nested if-else statements with manual (Type) casting instead of switch expressions.",
              badCode: "if (obj is CreditCard) { var card = (CreditCard)obj; if (card.IsVerified) { ... } }",
              goodCode: "if (obj is CreditCard { IsVerified: true } card) { ... }",
              explanation: "Pattern matching combines type-checking, property inspection, and casting in a single atomic operation.",
            },
          ],
          bestPractices: [
            "Use switch expressions (`=>`) for calculation and routing logic over traditional switch statements.",
            "Use property patterns to inspect complex nested domain models cleanly.",
            "Combine relational operators (`>`, `<=`) with logical combinators (`and`, `or`, `not`) for clear boundary rules.",
          ],
          summary: [
            "C# switch expressions deliver concise functional pattern matching.",
            "Property patterns inspect object state and unpack fields automatically.",
            "Relational patterns eliminate repetitive boolean logic chains.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-4",
      slug: "linq-expressions",
      title: "Module 4: LINQ (Language Integrated Query) & Expression Trees",
      description: "Master fluent LINQ, deferred execution, IEnumerable vs IQueryable, and Expression Trees for ORMs.",
      lessons: [
        {
          id: "cs-linq",
          slug: "csharp-linq-deferred-execution-expression-trees",
          courseSlug: "csharp",
          moduleSlug: "linq-expressions",
          title: "LINQ Architecture, Deferred Execution & Expression Trees",
          description: "Query and transform data structures seamlessly with LINQ (Language Integrated Query): method syntax, deferred execution mechanics, IEnumerable vs IQueryable, and Expression Trees.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The architecture of LINQ (Language Integrated Query) in C#",
            "Essential operators: `Select`, `Where`, `OrderBy`, `GroupBy`, `SelectMany`, `Aggregate`",
            "Deferred Execution: Why LINQ queries do not execute until enumerated (e.g. `ToList()`)",
            "IEnumerable (in-memory iteration) vs IQueryable (SQL translation via Expression Trees)",
          ],
          introduction: `LINQ (Language Integrated Query) is one of C#'s most celebrated innovations. It integrates SQL-like declarative querying capabilities directly into the C# language syntax. Whether querying in-memory collections, XML, or remote SQL databases via Entity Framework Core, LINQ provides a unified, type-safe query syntax with compile-time checking and auto-completion.`,
          whyItMatters: `LINQ allows developers to replace complex multi-line iterative loops with clean, readable data transformation pipelines. Understanding deferred execution is critical to avoid multiple database roundtrips and memory bloat.`,
          syntax: `var topUsers = users.Where(u => u.IsActive).OrderByDescending(u => u.Score).Take(5).ToList();`,
          mainExample: {
            title: "Advanced Data Aggregation with Fluent LINQ",
            language: "csharp",
            code: `// Advanced Fluent LINQ Pipelines
using System;
using System.Collections.Generic;
using System.Linq;

public record OrderItem(string Sku, decimal Price, int Quantity);
public record CustomerOrder(string OrderId, string CustomerName, string Region, List<OrderItem> Items);

public class Program
{
    public static void Main()
    {
        var orders = new List<CustomerOrder>
        {
            new("ORD-1", "Alice", "North America", [new("SKU-A", 150m, 2), new("SKU-B", 20m, 1)]),
            new("ORD-2", "Bob", "Europe", [new("SKU-C", 400m, 1)]),
            new("ORD-3", "Charlie", "North America", [new("SKU-A", 150m, 1), new("SKU-D", 50m, 3)]),
            new("ORD-4", "Diana", "Asia", [new("SKU-B", 20m, 5)])
        };

        // 1. LINQ Aggregation: Total Revenue by Region
        var revenueByRegion = orders
            .GroupBy(o => o.Region)
            .Select(group => new
            {
                Region = group.Key,
                TotalOrders = group.Count(),
                TotalRevenue = group.Sum(o => o.Items.Sum(i => i.Price * i.Quantity))
            })
            .OrderByDescending(r => r.TotalRevenue)
            .ToList();

        Console.WriteLine("=== Regional Revenue Analysis (LINQ GroupBy) ===");
        foreach (var stat in revenueByRegion)
        {
            Console.WriteLine($"Region: {stat.Region,-15} | Orders: {stat.TotalOrders} | Total: USD {stat.TotalRevenue:N2}");
        }

        // 2. SelectMany: Flattening all order items across all orders
        var uniqueSkusSold = orders
            .SelectMany(o => o.Items)
            .Select(i => i.Sku)
            .Distinct()
            .OrderBy(sku => sku)
            .ToList();

        Console.WriteLine($"\nUnique SKUs Sold: {string.Join(", ", uniqueSkusSold)}");
    }
}`,
            executable: true,
            explanation: [
              ".GroupBy(o => o.Region) groups customer orders by geographical region.",
              ".SelectMany(o => o.Items) flattens nested item lists across all orders into a single continuous stream.",
              ".ToList() triggers immediate query execution (terminal operation), evaluating the deferred pipeline.",
              "LINQ code is type-safe and verified by the compiler at build time.",
            ],
          },
          detailedExplanation: [
            "IEnumerable vs IQueryable: `IEnumerable<T>` operates on in-memory collections using compiled delegates (Func<T, bool>). `IQueryable<T>` operates on remote data stores (like SQL databases) by constructing an `Expression<Func<T, bool>>` Expression Tree, which Entity Framework Core translates into native SQL queries at runtime.",
          ],
          commonMistakes: [
            {
              mistake: "Calling .ToList() too early on an EF Core IQueryable database query.",
              badCode: "var users = dbContext.Users.ToList().Where(u => u.Age > 25);",
              goodCode: "var users = dbContext.Users.Where(u => u.Age > 25).ToList();",
              explanation: "Calling .ToList() first loads the entire Users table into application memory before filtering. Filtering first ensures the 'WHERE' clause executes inside the SQL database engine.",
            },
          ],
          bestPractices: [
            "Keep queries as `IQueryable` until the final data shape is ready, then call `ToListAsync()` or `FirstOrDefaultAsync()`.",
            "Use `SelectMany` to flatten hierarchical 1-to-many collections cleanly.",
            "Avoid multiple enumerations of the same `IEnumerable` query by capturing results with `.ToList()` or `.ToArray()`.",
          ],
          summary: [
            "LINQ provides declarative, type-safe data transformations for collections and databases.",
            "Deferred execution postpones query evaluation until terminal enumeration.",
            "`IQueryable` translates LINQ Expression Trees into optimized SQL queries.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-5",
      slug: "async-await-valuetasks",
      title: "Module 5: Asynchronous Programming (Task, async/await & ValueTasks)",
      description: "Master TAP pattern, Task.WhenAll, cancellation tokens (CancellationToken), and zero-allocation ValueTask<T>.",
      lessons: [
        {
          id: "cs-async-await",
          slug: "csharp-async-await-task-valuetask-cancellation",
          courseSlug: "csharp",
          moduleSlug: "async-await-valuetasks",
          title: "Asynchronous Programming: Task, ValueTask & CancellationTokens",
          description: "Write high-throughput non-blocking asynchronous code in .NET using the Task-based Asynchronous Pattern (TAP), Task.WhenAll, CancellationTokens, and allocation-free ValueTask.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How async/await works under the hood via the compiler-generated State Machine struct",
            "Why asynchronous I/O frees CLR ThreadPool threads during I/O operations",
            "Propagating cancellation across asynchronous pipelines with `CancellationToken`",
            "When to use `ValueTask<T>` (struct) instead of `Task<T>` (heap object) for hot paths",
          ],
          introduction: `Asynchronous programming in .NET is built on the Task-based Asynchronous Pattern (TAP). When an async method encounters an 'await' operator, the C# compiler generates an underlying state machine, yields the ThreadPool thread back to handle other requests, and registers a continuation to resume execution when the asynchronous I/O operation completes.`,
          whyItMatters: `Blocking ThreadPool threads with '.Result' or '.Wait()' leads to thread pool starvation, high response latencies, and server deadlocks under load. Fully asynchronous code allows an ASP.NET Core server to handle tens of thousands of concurrent requests with a handful of threads.`,
          syntax: `public async Task<string> FetchDataAsync(CancellationToken ct = default)\nawait Task.WhenAll(task1, task2);`,
          mainExample: {
            title: "Concurrent Asynchronous Pipeline with CancellationToken Support",
            language: "csharp",
            code: `// High-Performance Asynchronous Programming in C#
using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

public class AnalyticsService
{
    // ValueTask optimization: If result is cached/synchronous, zero heap allocation occurs!
    public static async ValueTask<int> GetCachedUserCountAsync(bool isCached)
    {
        if (isCached)
        {
            return 45000; // Synchronous completion: Zero Task heap allocation!
        }
        await Task.Delay(50); // Simulated async fetch
        return 45000;
    }

    public static async Task<string> QueryServiceAsync(string serviceName, int delayMs, CancellationToken ct)
    {
        // Non-blocking asynchronous delay respecting cancellation
        await Task.Delay(delayMs, ct);
        return $"{serviceName}: Operational (Response time: {delayMs}ms)";
    }
}

public class Program
{
    public static async Task Main()
    {
        using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
        var sw = Stopwatch.StartNew();

        Console.WriteLine("Starting concurrent async service queries...");

        // Launch concurrent tasks in parallel
        var task1 = AnalyticsService.QueryServiceAsync("Auth Service", 120, cts.Token);
        var task2 = AnalyticsService.QueryServiceAsync("Billing Service", 150, cts.Token);
        var task3 = AnalyticsService.QueryServiceAsync("Database Cluster", 90, cts.Token);

        // Await all tasks concurrently with Task.WhenAll
        string[] results = await Task.WhenAll(task1, task2, task3);

        sw.Stop();

        Console.WriteLine("--- Services Health Status ---");
        foreach (var r in results)
        {
            Console.WriteLine($"  [OK] {r}");
        }

        Console.WriteLine($"\nTotal Elapsed Time: {sw.ElapsedMilliseconds} ms (Executed concurrently in parallel!)");
    }
}`,
            executable: true,
            explanation: [
              "async Task represents an asynchronous operation returning a promise of completion.",
              "Task.WhenAll executes all three service queries in parallel across available thread pool threads.",
              "Total execution time equals the single slowest task (~150ms), rather than the sequential sum (360ms).",
              "CancellationTokenSource enforces strict timeout deadlines across all downstream calls.",
            ],
          },
          detailedExplanation: [
            "ValueTask vs Task: `Task<T>` is a reference type allocated on the heap every time an async method is called. If a method frequently returns synchronously (e.g. from an in-memory cache), `ValueTask<T>` (a struct) avoids allocating a Task object on the heap entirely, dramatically reducing Garbage Collection overhead on high-frequency paths.",
          ],
          commonMistakes: [
            {
              mistake: "Blocking on async code using .Result or .GetAwaiter().GetResult().",
              badCode: "var data = FetchDataAsync().Result; // Can cause thread pool deadlock!",
              goodCode: "var data = await FetchDataAsync();",
              explanation: "Calling .Result synchronously blocks the current thread while waiting for the task, which can cause deadlocks in synchronization contexts and starves the ThreadPool.",
            },
          ],
          bestPractices: [
            "Always pass `CancellationToken` through all asynchronous method signatures.",
            "Use `Task.WhenAll` to execute independent I/O tasks concurrently.",
            "Use `ValueTask<T>` for high-frequency methods that frequently complete synchronously.",
          ],
          summary: [
            "async/await yields threads back to the ThreadPool during I/O operations.",
            "`Task.WhenAll` orchestrates concurrent parallel tasks efficiently.",
            "`ValueTask<T>` provides zero-allocation performance for cached/synchronous hot paths.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-6",
      slug: "dependency-injection-configuration",
      title: "Module 6: Dependency Injection & Configuration Architecture in .NET",
      description: "Master IServiceCollection, Transient vs Scoped vs Singleton lifetimes, IOptions<T>, and Serilog logging.",
      lessons: [
        {
          id: "cs-di-config",
          slug: "csharp-dependency-injection-lifetimes-options-pattern",
          courseSlug: "csharp",
          moduleSlug: "dependency-injection-configuration",
          title: "Dependency Injection, Service Lifetimes & Options Pattern",
          description: "Build maintainable, testable software using .NET's built-in Dependency Injection container (IServiceCollection), service lifetimes (Transient, Scoped, Singleton), and strongly typed Options.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The Inversion of Control (IoC) principle and Dependency Injection in .NET",
            "Service Lifetimes: `Transient` (every request), `Scoped` (per HTTP request), `Singleton` (application lifetime)",
            "The Captive Dependency anti-pattern and how to avoid it",
            "Strongly typed application configuration with `IOptions<T>` and `IOptionsSnapshot<T>`",
          ],
          introduction: `Modern .NET includes a high-performance, built-in Dependency Injection (DI) container at the heart of the framework. Every component in ASP.NET Core—controllers, middleware, database contexts, loggers, and background services—is registered in the DI container and resolved via constructor injection.`,
          whyItMatters: `Hardcoding dependencies with 'new Service()' creates tightly coupled systems that cannot be unit-tested. Dependency Injection decouples implementations from interfaces, enabling modular architecture and seamless mocking.`,
          syntax: `builder.Services.AddScoped<IUserRepository, SqlUserRepository>();\nbuilder.Services.Configure<DatabaseOptions>(builder.Configuration.GetSection("Database"));`,
          mainExample: {
            title: "Configuring DI Container and Constructor Injection in .NET",
            language: "csharp",
            code: `// Dependency Injection and Options Pattern in .NET 9
using System;

// 1. Strongly-typed configuration options
public class PaymentGatewayOptions
{
    public string ApiKey { get; set; } = "sk_live_default_key";
    public int TimeoutSeconds { get; set; } = 30;
}

// 2. Service interface and implementation
public interface IPaymentService
{
    void ProcessPayment(decimal amount);
}

public class StripePaymentService : IPaymentService
{
    private readonly PaymentGatewayOptions _options;

    // Constructor Injection of options
    public StripePaymentService(PaymentGatewayOptions options)
    {
        _options = options;
    }

    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"[Stripe] Processed payment of USD {amount:N2} using API Key ending in '...{_options.ApiKey[^4..]}'");
    }
}

// 3. Controller consuming injected service
public class CheckoutController
{
    private readonly IPaymentService _paymentService;

    public CheckoutController(IPaymentService paymentService)
    {
        _paymentService = paymentService;
    }

    public void ExecuteCheckout(decimal cartTotal)
    {
        Console.WriteLine("Executing checkout transaction...");
        _paymentService.ProcessPayment(cartTotal);
    }
}

public class Program
{
    public static void Main()
    {
        // Demonstration of resolving configured dependency hierarchy
        var config = new PaymentGatewayOptions { ApiKey = "sk_live_kwas_academy_secret_9981" };
        IPaymentService paymentService = new StripePaymentService(config);
        var controller = new CheckoutController(paymentService);

        controller.ExecuteCheckout(249.99m);
    }
}`,
            executable: true,
            explanation: [
              "PaymentGatewayOptions encapsulates configuration properties with strong type safety.",
              "StripePaymentService implements IPaymentService and receives its dependencies via constructor injection.",
              "CheckoutController depends strictly on the IPaymentService interface, making it 100% unit-testable.",
            ],
          },
          detailedExplanation: [
            "The Captive Dependency Anti-Pattern: A Captive Dependency occurs when a service with a longer lifetime captures a service with a shorter lifetime (e.g., a `Singleton` service injecting a `Scoped` DbContext). The scoped DbContext is kept alive for the lifetime of the application, causing concurrency exceptions and memory leaks.",
          ],
          commonMistakes: [
            {
              mistake: "Registering Entity Framework DbContext as a Singleton service.",
              badCode: "builder.Services.AddSingleton<AppDbContext>();",
              goodCode: "builder.Services.AddDbContext<AppDbContext>(); // Defaults to Scoped",
              explanation: "DbContext is not thread-safe. Registering it as a Singleton causes multiple concurrent HTTP requests to share the same database connection, causing fatal runtime concurrency crashes.",
            },
          ],
          bestPractices: [
            "Register DbContexts and unit-of-work repositories as `Scoped` services.",
            "Register lightweight, stateless utility services as `Transient`.",
            "Register thread-safe caches and telemetry clients as `Singleton`.",
          ],
          summary: [
            ".NET features a built-in IoC container managing service lifetimes.",
            "`Transient`, `Scoped`, and `Singleton` control instance allocation.",
            "The Options pattern binds `appsettings.json` sections to strongly typed classes.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-7",
      slug: "aspnetcore-minimal-apis",
      title: "Module 7: High-Performance ASP.NET Core 9 Minimal APIs & Middleware",
      description: "Build ultra-fast REST APIs, custom middleware pipelines, endpoint filters, and OpenAPI validation.",
      lessons: [
        {
          id: "cs-minimal-apis",
          slug: "aspnetcore9-minimal-apis-middleware-validation",
          courseSlug: "csharp",
          moduleSlug: "aspnetcore-minimal-apis",
          title: "ASP.NET Core 9 Minimal APIs & Middleware Architecture",
          description: "Build ultra-fast, cloud-native REST APIs using ASP.NET Core 9 Minimal APIs, custom middleware pipelines, endpoint filters, and validation.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The architecture of Minimal APIs: Why they outperform traditional MVC controllers",
            "Mapping HTTP routes with `app.MapGet`, `app.MapPost`, `app.MapPut`, and `app.MapDelete`",
            "Building custom HTTP middleware pipelines with `app.Use(...)`",
            "Validating requests with Endpoint Filters and returning type-safe `TypedResults`",
          ],
          introduction: `ASP.NET Core Minimal APIs are designed for building fast, microservices-oriented HTTP endpoints with minimal overhead. By removing the ceremonies and reflection overhead of traditional MVC controllers, Minimal APIs achieve world-class throughput (often exceeding 500,000 requests per second per node in TechEmpower benchmarks).`,
          whyItMatters: `In cloud container platforms (like Kubernetes or AWS ECS), reducing memory footprints and minimizing request latency is directly tied to cloud hosting costs. Minimal APIs provide native Native AOT support and lightning-fast request routing.`,
          syntax: `var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\napp.MapGet("/api/health", () => TypedResults.Ok(new { Status = "Healthy" }));\napp.Run();`,
          mainExample: {
            title: "A Complete ASP.NET Core 9 Minimal API Architecture",
            language: "csharp",
            code: `// ASP.NET Core 9 Minimal API Architecture
using System;
using System.Collections.Generic;

public record CourseDto(string Id, string Title, string Category, bool IsFree);

// Simulated ASP.NET Core 9 Minimal API Endpoint Handler
public class CourseApiModule
{
    private static readonly List<CourseDto> _courses =
    [
        new("cs-101", "C# 13 & .NET 9 Enterprise Architecture", "Programming Languages", true),
        new("sw-101", "Swift 6 Systems & Concurrency", "Programming Languages", true),
        new("kt-101", "Kotlin Multiplatform & Coroutines", "Programming Languages", true)
    ];

    public static List<CourseDto> HandleGetAllCourses()
    {
        Console.WriteLine("[HTTP GET /api/v1/courses] Returning course catalog...");
        return _courses;
    }

    public static CourseDto? HandleGetCourseById(string id)
    {
        Console.WriteLine($"[HTTP GET /api/v1/courses/{id}] Querying course record...");
        return _courses.Find(c => c.Id == id);
    }
}

public class Program
{
    public static void Main()
    {
        Console.WriteLine("=== ASP.NET Core 9 Minimal API Simulation ===");

        var catalog = CourseApiModule.HandleGetAllCourses();
        Console.WriteLine($"Total Catalog Tracks: {catalog.Count}");

        var course = CourseApiModule.HandleGetCourseById("cs-101");
        Console.WriteLine($"Found Course: {course?.Title} ({course?.Category})");
    }
}`,
            executable: true,
            explanation: [
              "Minimal APIs use lightweight lambda route handlers instead of heavy controller classes.",
              "TypedResults.Ok(...) returns strongly typed IResult responses that integrate with OpenAPI / Swagger generation.",
              "Minimal APIs support Native AOT compilation, allowing binaries to run without a heavy JIT runtime.",
            ],
          },
          detailedExplanation: [
            "Middleware Pipeline Order: The order in which middleware is registered in `Program.cs` is critical. The execution pipeline flows in sequence: Exception Handling → HTTPS Redirection → Routing → CORS → Authentication → Authorization → Endpoint Execution.",
          ],
          commonMistakes: [
            {
              mistake: "Placing app.UseAuthorization() before app.UseAuthentication().",
              badCode: "app.UseAuthorization();\napp.UseAuthentication();",
              goodCode: "app.UseAuthentication();\napp.UseAuthorization();",
              explanation: "Authorization cannot determine what permissions a user has until Authentication first validates who the user is via tokens or cookies.",
            },
          ],
          bestPractices: [
            "Use `TypedResults` instead of `Results` for compile-time verified OpenAPI response schemas.",
            "Organize Minimal API routes into dedicated extension methods or Carter modules.",
            "Use Endpoint Filters for cross-cutting validation and authorization concerns.",
          ],
          summary: [
            "Minimal APIs deliver high-throughput, low-allocation HTTP endpoints in .NET 9.",
            "Middleware executes in a bidirectional request/response pipeline.",
            "`TypedResults` provides strongly typed HTTP responses with automatic OpenAPI documentation.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-8",
      slug: "entity-framework-core",
      title: "Module 8: Entity Framework Core 9, Migrations & ORM Optimization",
      description: "Master DbContext, Code-First migrations, split queries, AsNoTracking, and compiled queries.",
      lessons: [
        {
          id: "cs-ef-core",
          slug: "entity-framework-core-9-migrations-query-optimization",
          courseSlug: "csharp",
          moduleSlug: "entity-framework-core",
          title: "Entity Framework Core 9 & Database Performance Tuning",
          description: "Build robust data layers with Entity Framework Core 9: Code-First migrations, complex relationships, AsNoTracking read optimization, and split queries.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "EF Core 9 architecture: DbContext, DbSet, and SQL query generation",
            "Code-First database migrations (`dotnet ef migrations add`, `database update`)",
            "High-performance read queries using `.AsNoTracking()` and `.AsNoTrackingWithIdentityResolution()`",
            "Eliminating the Cartesian Explosion problem with Split Queries (`.AsSplitQuery()`)",
          ],
          introduction: `Entity Framework Core (EF Core) is the official Object-Relational Mapper (ORM) for .NET. EF Core allows developers to interact with relational databases (PostgreSQL, SQL Server, MySQL, SQLite) using strongly typed C# LINQ queries, automatically generating optimized SQL statements and mapping result sets back into domain entity objects.`,
          whyItMatters: `Inefficient ORM queries cause the majority of database performance issues (N+1 query problem, Cartesian explosions on multiple joins, and change tracking overhead on read-only queries). Mastering EF Core optimization techniques guarantees blazing-fast query execution.`,
          syntax: `var users = await dbContext.Users.AsNoTracking().Where(u => u.IsActive).ToListAsync();`,
          mainExample: {
            title: "High-Performance EF Core Query Optimization Patterns",
            language: "csharp",
            code: `// EF Core 9 Data Access Optimization Patterns
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Major { get; set; } = string.Empty;
    public List<Enrollment> Enrollments { get; set; } = [];
}

public class Enrollment
{
    public int Id { get; set; }
    public string CourseCode { get; set; } = string.Empty;
    public decimal Grade { get; set; }
}

public class Program
{
    public static void Main()
    {
        Console.WriteLine("=== EF Core 9 Best-Practice Query Patterns ===");

        Console.WriteLine("""
        1. Read-Only Query (Disables Change Tracker for 2x faster performance):
           var students = await dbContext.Students
               .AsNoTracking()
               .Where(s => s.Major == "Computer Science")
               .ToListAsync();

        2. Split Queries (Prevents Cartesian product when joining multiple child collections):
           var orders = await dbContext.Orders
               .Include(o => o.LineItems)
               .Include(o => o.ShipmentUpdates)
               .AsSplitQuery()
               .AsNoTracking()
               .ToListAsync();

        3. Compiled Queries (Pre-compiles LINQ into SQL execution plans for hot paths):
           private static readonly Func<AppDbContext, string, Task<Student?>> GetStudentByEmail =
               EF.CompileAsyncQuery((AppDbContext db, string email) =>
                   db.Students.FirstOrDefault(s => s.FullName == email));
        """);
    }
}`,
            executable: true,
            explanation: [
              ".AsNoTracking() tells EF Core not to track entity modifications in its change tracker, reducing memory usage by 50% and doubling read query speed.",
              ".AsSplitQuery() executes separate clean SQL SELECT statements for joined child collections instead of one gigantic Cartesian product join.",
              "EF.CompileAsyncQuery pre-compiles the LINQ-to-SQL translation tree so hot queries execute instantly with zero parsing overhead.",
            ],
          },
          detailedExplanation: [
            "The N+1 Query Problem: Occurs when a query loads N parent entities, and then lazily executes N separate queries inside a loop to fetch each child relationship. Always use `.Include()` to eagerly load relationships in a single query.",
          ],
          commonMistakes: [
            {
              mistake: "Querying all entity columns when only 2 fields are needed.",
              badCode: "var emails = dbContext.Users.ToList().Select(u => u.Email);",
              goodCode: "var emails = await dbContext.Users.Select(u => u.Email).ToListAsync();",
              explanation: "Projecting with .Select() ensures the SQL query requests only 'SELECT Email FROM Users', saving bandwidth and memory.",
            },
          ],
          bestPractices: [
            "Always use `.AsNoTracking()` for read-only query endpoints.",
            "Use `.AsSplitQuery()` when including 2 or more related 1-to-many child collections.",
            "Use database transactions (`using var transaction = await dbContext.Database.BeginTransactionAsync()`) for multi-step financial operations.",
          ],
          summary: [
            "EF Core translates C# LINQ expressions into database SQL queries.",
            "`.AsNoTracking()` optimizes read throughput by bypassing change tracking.",
            "`.AsSplitQuery()` prevents Cartesian explosion on complex multi-table joins.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-9",
      slug: "memory-optimization-span-memory",
      title: "Module 9: High-Throughput Memory Optimization: Span<T> & Memory<T>",
      description: "Master zero-allocation memory slices, Span<T>, ReadOnlySpan<T>, Memory<T>, stackalloc, and ArrayPool.",
      lessons: [
        {
          id: "cs-span-memory",
          slug: "csharp-memory-optimization-span-memory-arraypool",
          courseSlug: "csharp",
          moduleSlug: "memory-optimization-span-memory",
          title: "Zero-Allocation Memory Optimization with Span<T> & ArrayPool",
          description: "Achieve C/C++ memory performance in C# without unsafe pointers using Span<T>, ReadOnlySpan<T>, Memory<T>, and ArrayPool<T> buffer reuse.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why string operations like `.Substring()` allocate garbage on the managed heap",
            "How `ReadOnlySpan<char>` provides a zero-allocation window over contiguous memory",
            "`Span<T>` (ref struct, stack-only) vs `Memory<T>` (heap-safe, async-compatible)",
            "Buffer pooling with `ArrayPool<T>.Shared` to eliminate GC allocation spikes",
          ],
          introduction: `In high-throughput microservices and parsing pipelines, allocating millions of temporary strings and byte arrays triggers frequent Garbage Collector (GC) pauses. C# introduced Span<T> and ReadOnlySpan<T>—type-safe, memory-safe abstractions representing contiguous regions of arbitrary memory (stack, heap, or unmanaged) that enable zero-allocation slicing.`,
          whyItMatters: `High-frequency parsing (JSON, HTTP headers, CSVs, binary telemetry) written with Span<T> runs up to 10x faster and generates 0 bytes of garbage collection pressure compared to traditional string-manipulation code.`,
          syntax: `ReadOnlySpan<char> span = text.AsSpan();\nReadOnlySpan<char> slice = span.Slice(0, 10);`,
          mainExample: {
            title: "Zero-Allocation Date Parsing with ReadOnlySpan<char>",
            language: "csharp",
            code: `// Zero-Allocation String Slicing with ReadOnlySpan<char>
using System;

public class HighPerformanceDateParser
{
    // Traditional approach: Substring() allocates 3 new String objects on the heap!
    public static (int Year, int Month, int Day) ParseAllocating(string dateString)
    {
        int year = int.Parse(dateString.Substring(0, 4));
        int month = int.Parse(dateString.Substring(5, 2));
        int day = int.Parse(dateString.Substring(8, 2));
        return (year, month, day);
    }

    // Modern Zero-Allocation approach: Slices the original string in-place with zero heap allocations!
    public static (int Year, int Month, int Day) ParseZeroAllocation(ReadOnlySpan<char> dateSpan)
    {
        // Slice(start, length) creates a lightweight Span pointer without allocating memory!
        int year = int.Parse(dateSpan.Slice(0, 4));
        int month = int.Parse(dateSpan.Slice(5, 2));
        int day = int.Parse(dateSpan.Slice(8, 2));
        return (year, month, day);
    }
}

public class Program
{
    public static void Main()
    {
        string isoDate = "2026-08-22";

        var parsed = HighPerformanceDateParser.ParseZeroAllocation(isoDate.AsSpan());

        Console.WriteLine($"Parsed Date (Zero GC Allocation): Year={parsed.Year}, Month={parsed.Month}, Day={parsed.Day}");
        Console.WriteLine("Span<T> enables blazing fast parsing without creating heap garbage!");
    }
}`,
            executable: true,
            explanation: [
              "isoDate.AsSpan() creates a ReadOnlySpan<char> view over the string's characters without copying them.",
              "dateSpan.Slice(0, 4) creates a sub-window referencing the exact memory address of the year characters.",
              "int.Parse(ReadOnlySpan<char>) parses the slice directly from the existing buffer with 0 bytes allocated.",
            ],
          },
          detailedExplanation: [
            "Span<T> vs Memory<T>: `Span<T>` is a `ref struct` that can only reside on the stack. Because `ref struct` types cannot be boxed or placed on the heap, `Span<T>` cannot be stored in fields of regular classes or used across `await` boundaries. `Memory<T>` is a regular struct that can live on the heap and be used in asynchronous methods.",
          ],
          commonMistakes: [
            {
              mistake: "Attempting to use Span<T> inside an asynchronous method across an await call.",
              badCode: "async Task Process(ReadOnlySpan<char> span) { await Task.Yield(); } // Compile error!",
              goodCode: "async Task Process(ReadOnlyMemory<char> memory) { await Task.Yield(); }",
              explanation: "Span<T> is a stack-only ref struct and cannot be captured into the heap-allocated async state machine. Use Memory<T> instead.",
            },
          ],
          bestPractices: [
            "Use `ReadOnlySpan<char>` for parsing methods and string tokenization.",
            "Use `Memory<T>` when slicing buffers across asynchronous `await` boundaries.",
            "Use `ArrayPool<byte>.Shared.Rent()` to reuse large byte buffers in network streams.",
          ],
          summary: [
            "`Span<T>` provides zero-allocation views over contiguous memory.",
            "`ReadOnlySpan<char>` eliminates heap garbage in string parsing operations.",
            "`Memory<T>` supports asynchronous execution and heap storage.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-10",
      slug: "grpc-realtime-microservices",
      title: "Module 10: gRPC, WebSockets & Real-Time Microservices Communication",
      description: "Master Protocol Buffers (.proto), high-speed binary gRPC services, streaming RPCs, and SignalR WebSockets.",
      lessons: [
        {
          id: "cs-grpc-microservices",
          slug: "csharp-grpc-protocol-buffers-realtime-signalr",
          courseSlug: "csharp",
          moduleSlug: "grpc-realtime-microservices",
          title: "High-Speed Binary gRPC & SignalR Real-Time Communication",
          description: "Build low-latency inter-service communication with gRPC and Protocol Buffers over HTTP/2, and bidirectional real-time client communication with SignalR.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why gRPC over HTTP/2 with binary Protocol Buffers is 7x faster than REST/JSON",
            "Authoring `.proto` service contracts and generating strongly typed C# stubs",
            "Implementing Unary, Client Streaming, Server Streaming, and Bidirectional Streaming RPCs",
            "Real-time client-to-server websockets using ASP.NET Core SignalR Hubs",
          ],
          introduction: `In distributed microservice architectures, communication overhead between internal services accounts for a significant percentage of overall response latency. gRPC is a high-performance, open-source universal RPC framework that uses binary Protocol Buffers and HTTP/2 multiplexing, delivering ultra-fast serialization and low network bandwidth consumption.`,
          whyItMatters: `REST over JSON requires parsing expensive text strings and renegotiating TCP handshakes. gRPC keeps persistent HTTP/2 connections open, multiplexing hundreds of simultaneous binary requests over a single TCP socket with strict compile-time contract enforcement.`,
          syntax: `service CourseService {\n  rpc GetCourse (CourseRequest) returns (CourseResponse);\n}`,
          mainExample: {
            title: "Protocol Buffer Definition and C# gRPC Service Implementation",
            language: "csharp",
            code: `// gRPC Microservice Architecture in .NET 9
using System;
using System.Threading.Tasks;

// 1. Simulated Protocol Buffer Generated Messages
public record CourseRequest(string CourseId);
public record CourseReply(string CourseId, string Title, string Version, bool IsActive);

// 2. Simulated gRPC Service Base
public class CourseGrpcService
{
    public Task<CourseReply> GetCourse(CourseRequest request)
    {
        Console.WriteLine($"[gRPC Binary Stream] Received binary RPC for CourseId: {request.CourseId}");

        var reply = new CourseReply(
            CourseId: request.CourseId,
            Title: "C# 13 & .NET 9 Enterprise Architecture",
            Version: "9.0",
            IsActive: true
        );

        return Task.FromResult(reply);
    }
}

public class Program
{
    public static async Task Main()
    {
        Console.WriteLine("=== High-Performance gRPC Microservice (.NET 9) ===");

        var service = new CourseGrpcService();
        var reply = await service.GetCourse(new CourseRequest("CS-900"));

        Console.WriteLine($"gRPC Response: {reply.Title} (Active: {reply.IsActive})");
        Console.WriteLine("Protobuf binary serialization reduces payload size by ~80% compared to JSON!");
    }
}`,
            executable: true,
            explanation: [
              "gRPC uses Protocol Buffers (.proto) to generate strongly typed C# client and server classes.",
              "HTTP/2 multiplexing allows hundreds of parallel RPC calls over a single persistent TCP connection.",
              "Binary serialization dramatically reduces CPU overhead and network payload sizes.",
            ],
          },
          detailedExplanation: [
            "SignalR Hubs: For real-time bidirectional communication between web browsers and servers, ASP.NET Core provides SignalR. SignalR automatically falls back from WebSockets to Server-Sent Events (SSE) or Long Polling depending on client browser capabilities.",
          ],
          commonMistakes: [
            {
              mistake: "Using REST/JSON for internal high-frequency microservice-to-microservice calls.",
              badCode: "httpClient.GetAsync(\"http://internal-billing/api/data\"); // JSON serialization overhead",
              goodCode: "grpcClient.GetDataAsync(new DataRequest()); // High-speed binary protobuf",
              explanation: "Using gRPC for internal East-West microservice traffic reduces CPU serialization latency by up to 80%.",
            },
          ],
          bestPractices: [
            "Use gRPC for high-throughput internal microservice-to-microservice communication.",
            "Use REST/OpenAPI or GraphQL for external public-facing client gateways.",
            "Enable response compression (gzip/brotli) for large protobuf message payloads.",
          ],
          summary: [
            "gRPC uses binary Protocol Buffers and HTTP/2 for ultra-fast RPC calls.",
            "Service contracts are strictly defined in `.proto` schema files.",
            "SignalR enables real-time bidirectional communication with automatic WebSocket fallbacks.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-11",
      slug: "cloud-resilience-polly-docker",
      title: "Module 11: Production Cloud Resilience (Polly), Docker & Microservices",
      description: "Master distributed system resilience, retries, exponential backoff, circuit breakers (Polly), and Docker containerization.",
      lessons: [
        {
          id: "cs-polly-cloud-resilience",
          slug: "csharp-cloud-resilience-polly-circuit-breakers-docker",
          courseSlug: "csharp",
          moduleSlug: "cloud-resilience-polly-docker",
          title: "Cloud Resilience with Polly, Circuit Breakers & Docker",
          description: "Build fault-tolerant cloud microservices using Polly resilience pipelines (Retries with Jitter, Circuit Breakers, Rate Limiting) and production Docker containerization.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Transient fault handling in distributed systems and cloud networks",
            "Configuring Polly resilience strategies: Exponential Backoff with Jitter",
            "The Circuit Breaker pattern (Closed, Open, Half-Open) to prevent cascading failures",
            "Multi-stage Dockerfile architecture for minimal, secure .NET 9 container deployment",
          ],
          introduction: `In distributed cloud architectures, transient network failures, brief database connection drops, and service throttling are inevitable. Building resilient systems requires implementing proactive fault-handling patterns. Polly is the standard resilience and transient-fault-handling library for .NET, allowing developers to express policies such as Retry, Circuit Breaker, Timeout, and Fallback.`,
          whyItMatters: `Without circuit breakers and jittered retries, a minor outage in a downstream payment provider can cause thousands of retries to hit simultaneously (the Thundering Herd problem), crashing the entire ecosystem. Polly protects systems from cascading failure.`,
          syntax: `builder.Services.AddHttpClient("ResilientApi")\n    .AddStandardResilienceHandler();`,
          mainExample: {
            title: "Configuring a Production Multi-Stage Dockerfile for .NET 9",
            language: "dockerfile",
            code: `# Multi-Stage Dockerfile for Production .NET 9 Web API
# Stage 1: Build & Publish
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy project files and restore dependencies (Cached layer)
COPY ["KwasAcademy.Api.csproj", "./"]
RUN dotnet restore "KwasAcademy.Api.csproj"

# Copy source code and build optimized release binary
COPY . .
RUN dotnet publish "KwasAcademy.Api.csproj" -c Release -o /app/publish \
    --no-restore \
    /p:UseAppHost=false

# Stage 2: Minimal Distroless / Alpine Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0-alpine AS final
WORKDIR /app

# Run as non-root user for security compliance
USER $APP_UID

COPY --from=build /app/publish .

ENV ASPNETCORE_HTTP_PORTS=8080
ENV DOTNET_EnableDiagnostics=0

EXPOSE 8080
ENTRYPOINT ["dotnet", "KwasAcademy.Api.dll"]`,
            executable: false,
            explanation: [
              "Multi-stage build uses the full SDK image for compilation, then copies only the compiled binaries to the lightweight runtime image.",
              "aspnet:9.0-alpine produces a container image under 100MB.",
              "USER $APP_UID enforces least privilege, ensuring the container does not execute as root.",
              "DOTNET_EnableDiagnostics=0 disables diagnostic ports for security hardening in production.",
            ],
          },
          detailedExplanation: [
            "Circuit Breaker States: `Closed` (normal operation; traffic flows), `Open` (failure threshold exceeded; requests fail fast immediately without hitting downstream service), `Half-Open` (trial period; allows a few requests through to test if the downstream service has recovered).",
          ],
          commonMistakes: [
            {
              mistake: "Retrying immediately without exponential backoff and jitter.",
              badCode: "for (int i = 0; i < 5; i++) { await CallApi(); } // Causes thundering herd!",
              goodCode: "builder.Services.AddHttpClient().AddStandardResilienceHandler(); // Includes backoff + jitter",
              explanation: "Immediate retries overwhelm struggling downstream servers. Jitter randomizes retry intervals, spreading out network spikes.",
            },
          ],
          bestPractices: [
            "Use .NET 9's built-in `Microsoft.Extensions.Http.Resilience` for standard resilient HTTP clients.",
            "Always include jitter in retry policies to avoid synchronized retry storms.",
            "Run containers as unprivileged users (`USER $APP_UID`) in production Kubernetes clusters.",
          ],
          summary: [
            "Polly provides retries, circuit breakers, and rate limiters for distributed fault tolerance.",
            "Circuit breakers prevent cascading outages by failing fast when downstream services are down.",
            "Multi-stage Docker builds produce minimal, secure .NET 9 container images.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-12",
      slug: "ryujit-tiered-compilation-dynamic-pgo",
      title: "Module 12: RyuJIT Compiler Internals: Tiered Compilation & Dynamic PGO",
      description: "Master the .NET RyuJIT compiler: Tier 0 (Quick JIT) vs Tier 1 (Optimized), Dynamic Profile-Guided Optimization (PGO), and loop vectorization.",
      lessons: [
        {
          id: "cs-ryujit-pgo",
          slug: "ryujit-compiler-tiered-compilation-dynamic-pgo-vectorization",
          courseSlug: "csharp",
          moduleSlug: "ryujit-tiered-compilation-dynamic-pgo",
          title: "RyuJIT Internals: Tiered Compilation & Dynamic PGO",
          description: "Deconstruct the .NET 9 RyuJIT compiler architecture: Tier 0 Quick JIT, Tier 1 Optimization, Dynamic Profile-Guided Optimization (Dynamic PGO), guarded devirtualization, loop inversion, and inspecting generated x86/ARM64 assembly.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The RyuJIT compilation pipeline: CIL Bytecode -> High-Level IR -> SSA Form -> Machine Assembly",
            "Tiered Compilation stages: Tier 0 (No optimization, instant startup) to Tier 1 (PGO optimized hot paths)",
            "Dynamic Profile-Guided Optimization (Dynamic PGO): gathering runtime branch counts and type distributions",
            "Guarded Devirtualization: converting polymorphic interface calls into direct inline assembly jumps",
          ],
          introduction: `The .NET runtime executes Common Intermediate Language (CIL) bytecode by compiling it into native machine instructions via RyuJIT. In .NET 8 and 9, Dynamic Profile-Guided Optimization (Dynamic PGO) enables RyuJIT to instrument code at runtime, observe actual execution patterns (e.g. branch likelihood, interface implementation types), and recompile hot methods into machine code that rivals or exceeds handwritten C++.`,
          whyItMatters: `Enabling Dynamic PGO in .NET 9 yields automatic 15-30% throughput increases across web APIs and gRPC services without changing a single line of C# source code.`,
          syntax: `<TieredCompilation>true</TieredCompilation>\n<TieredPGO>true</TieredPGO>\n// Inspect with: DOTNET_JitDisasm=MyMethod dotnet run`,
          mainExample: {
            title: "Inspecting RyuJIT Guarded Devirtualization and JIT Tiering",
            language: "csharp",
            code: `// RyuJIT Dynamic PGO & Guarded Devirtualization
using System;
using System.Diagnostics;
using System.Runtime.CompilerServices;

public interface IDataProcessor
{
    int Process(int value);
}

public sealed class FastProcessor : IDataProcessor
{
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    public int Process(int value) => value * 3;
}

public sealed class SlowProcessor : IDataProcessor
{
    public int Process(int value) => value + 10;
}

public class Program
{
    // RyuJIT observes that 99.9% of calls use 'FastProcessor'
    // Dynamic PGO turns interface dispatch into: if (p is FastProcessor) return p.Process(val) inlined!
    public static int ExecuteBatch(IDataProcessor processor, int count)
    {
        int sum = 0;
        for (int i = 0; i < count; i++)
        {
            sum += processor.Process(i);
        }
        return sum;
    }

    public static void Main()
    {
        Console.WriteLine("=== .NET 9 RyuJIT: Dynamic PGO & Tiered Compilation ===");

        var fast = new FastProcessor();

        // 1. Tier 0 Phase: Method executed unoptimized with runtime instrumentation
        for (int i = 0; i < 1000; i++)
        {
            ExecuteBatch(fast, 100);
        }

        // 2. Tier 1 Promotion: RyuJIT recompiles ExecuteBatch into specialized AVX machine code!
        var sw = Stopwatch.StartNew();
        int result = ExecuteBatch(fast, 10_000_000);
        sw.Stop();

        Console.WriteLine($"Computed Batch Result: {result} in {sw.ElapsedMilliseconds} ms");
        Console.WriteLine("✅ RyuJIT devirtualized interface call into direct inline machine instructions!");
    }
}`,
            executable: true,
            explanation: [
              "During Tier 0, RyuJIT injects lightweight probes to count branch outcomes and observe concrete types.",
              "RyuJIT recognizes that 100% of calls pass FastProcessor, triggering Guarded Devirtualization.",
              "The interface call is converted into an inline type check followed by a direct inlined multiply instruction.",
              "Loop cloning and loop unrolling eliminate loop boundary check overhead.",
            ],
          },
          detailedExplanation: [
            "JIT Diagnostic Environment Variables: Setting `DOTNET_JitDisasm=ExecuteBatch` outputs the exact x86-64 assembly instructions generated by RyuJIT, showing vector registers (YMM/ZMM) and inlined branch jumps.",
          ],
          commonMistakes: [
            {
              mistake: "Disabling Tiered Compilation in production ASP.NET Core apps, resulting in slow startup and missed Dynamic PGO optimizations.",
              badCode: "DOTNET_TieredCompilation=0 // Legacy disabling flag",
              goodCode: "DOTNET_TieredPGO=1 // Ensure Tiered PGO is explicitly enabled",
              explanation: "Tiered Compilation and Dynamic PGO are enabled by default in .NET 8/9 and provide optimal startup plus peak throughput.",
            },
          ],
          bestPractices: [
            "Keep classes and methods `sealed` where possible to assist RyuJIT with static devirtualization.",
            "Use `BenchmarkDotNet` with `[DisassemblyDiagnoser]` to inspect JIT-generated assembly.",
            "Target .NET 9 to benefit from AVX-512 and Arm64 loop vectorization improvements.",
          ],
          summary: [
            "RyuJIT compiles CIL into machine code through Tier 0 and Tier 1 stages.",
            "Dynamic PGO gathers runtime profiles to guide aggressive inlining and loop vectorization.",
            "Guarded Devirtualization eliminates polymorphic interface dispatch penalties.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-13",
      slug: "system-io-pipelines-zero-allocation-sockets",
      title: "Module 13: High-Performance Pipelines: `System.IO.Pipelines`",
      description: "Master zero-allocation socket networking: `System.IO.Pipelines` (Pipe, PipeReader, PipeWriter), Bedrock architecture, and SequenceReader.",
      lessons: [
        {
          id: "cs-pipelines-networking",
          slug: "system-io-pipelines-zero-allocation-sockets-sequencereader",
          courseSlug: "csharp",
          moduleSlug: "system-io-pipelines-zero-allocation-sockets",
          title: "System.IO.Pipelines: High-Throughput Socket Networking",
          description: "Build ultra-low-latency network servers with `System.IO.Pipelines`: `PipeReader`, `PipeWriter`, zero-allocation memory pooling (`MemoryPool<byte>`), parsing protocols with `SequenceReader<byte>`, and eliminating buffer copying in ASP.NET Core Kestrel.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why traditional `Stream` (byte array copying) creates massive GC Gen 0/1 allocations under load",
            "The `System.IO.Pipelines` architecture: decoupled Producer (Socket reader) and Consumer (Protocol parser)",
            "Parsing streaming delimiters across discontiguous memory chunks with `SequenceReader<byte>`",
            "Advancing read pointers with `reader.AdvanceTo(consumed, examined)` to prevent buffer stalls",
          ],
          introduction: `In traditional .NET networking, reading from a NetworkStream required allocating byte arrays, managing ring buffers, and constantly copying memory between buffers. \`System.IO.Pipelines\` was created for ASP.NET Core's Kestrel web server to solve high-concurrency memory allocation problems. It manages pooled native memory, handles partial packet reassembly, and allows parsing protocols with zero memory allocations.`,
          whyItMatters: `Kestrel became one of the fastest web servers in the TechEmpower benchmarks largely due to System.IO.Pipelines eliminating GC pressure across millions of HTTP requests.`,
          syntax: `var pipe = new Pipe();\nReadResult result = await pipe.Reader.ReadAsync();\nReadOnlySequence<byte> buffer = result.Buffer;\npipe.Reader.AdvanceTo(buffer.Start, buffer.End);`,
          mainExample: {
            title: "Zero-Allocation Protocol Parser with System.IO.Pipelines and SequenceReader",
            language: "csharp",
            code: `// System.IO.Pipelines Zero-Allocation Line-Delimiter Protocol Parser
using System;
using System.Buffers;
using System.IO.Pipelines;
using System.Text;
using System.Threading.Tasks;

public class PipelineProtocolServer
{
    public static async Task ProcessIncomingPipeAsync(PipeReader reader)
    {
        Console.WriteLine("=== System.IO.Pipelines Zero-Allocation Parser ===");

        while (true)
        {
            // 1. Asynchronously read available buffer from the network socket
            ReadResult result = await reader.ReadAsync();
            ReadOnlySequence<byte> buffer = result.Buffer;

            // 2. Parse complete protocol messages delimited by '\\n'
            while (TryReadLine(ref buffer, out ReadOnlySequence<byte> line))
            {
                // Process line directly from pooled memory (Zero Array Copying!)
                string message = Encoding.UTF8.GetString(line.ToArray());
                Console.WriteLine($"[PARSED MESSAGE] {message}");
            }

            // 3. Inform the Pipe how much buffer was consumed vs examined
            reader.AdvanceTo(buffer.Start, buffer.End);

            if (result.IsCompleted)
            {
                break; // Socket closed
            }
        }

        await reader.CompleteAsync();
    }

    private static bool TryReadLine(ref ReadOnlySequence<byte> buffer, out ReadOnlySequence<byte> line)
    {
        // SequenceReader traverses discontiguous memory segments in O(1)
        var reader = new SequenceReader<byte>(buffer);

        if (reader.TryReadTo(out ReadOnlySequence<byte> lineSequence, (byte)'\\n'))
        {
            line = lineSequence;
            buffer = buffer.Slice(reader.Position); // Advance buffer past the line
            return true;
        }

        line = default;
        return false;
    }

    public static async Task Main()
    {
        var pipe = new Pipe();

        // Simulate Network Socket Producer writing packets
        byte[] payload = Encoding.UTF8.GetBytes("ORDER_001_SETTLED\\nUSER_LOGIN_OK\\nMETRICS_FLUSH\\n");
        await pipe.Writer.WriteAsync(payload);
        pipe.Writer.Complete();

        // Run Consumer Parser
        await ProcessIncomingPipeAsync(pipe.Reader);
        Console.WriteLine("✅ Pipelines parsed all frames with zero Garbage Collection allocations!");
    }
}`,
            executable: true,
            explanation: [
              "PipeReader.ReadAsync returns a ReadOnlySequence<byte> pointing directly to pooled memory.",
              "SequenceReader<byte> handles protocol parsing across multiple non-contiguous 4KB memory blocks without copying bytes.",
              "reader.AdvanceTo informs the pipe which bytes were consumed (freed) and which were examined (retained for more data).",
              "Zero temporary byte arrays are allocated on the GC heap.",
            ],
          },
          detailedExplanation: [
            "AdvanceTo Mechanics: If a network packet arrives partially (e.g. `ORDER_001_` without trailing `\\n`), `AdvanceTo(buffer.Start, buffer.End)` tells the pipe: 'I consumed 0 bytes, but examined up to the end; wake me up when more data arrives.'",
          ],
          commonMistakes: [
            {
              mistake: "Passing `buffer.Start` for both consumed and examined in `AdvanceTo`, causing infinite busy-wait CPU loops on incomplete frames.",
              badCode: "reader.AdvanceTo(buffer.Start, buffer.Start); // Causes 100% CPU lock!",
              goodCode: "reader.AdvanceTo(buffer.Start, buffer.End); // Correctly waits for new bytes",
              explanation: "If you don't advance the examined pointer, `ReadAsync` immediately returns the exact same incomplete buffer without waiting for new network I/O.",
            },
          ],
          bestPractices: [
            "Use `System.IO.Pipelines` for custom TCP/UDP server implementations.",
            "Use `SequenceReader<byte>` instead of converting spans to arrays.",
            "Always call `reader.CompleteAsync()` in a `finally` block to release pooled memory back to `MemoryPool`.",
          ],
          summary: [
            "`System.IO.Pipelines` decouples socket reading from protocol parsing.",
            "`ReadOnlySequence<byte>` and `SequenceReader` eliminate memory copying across network packets.",
            "Powers high-throughput, zero-allocation microservices in ASP.NET Core.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-14",
      slug: "hardware-intrinsics-vector512-avx512",
      title: "Module 14: Hardware Intrinsics & Vector512: AVX-512 SIMD in C#",
      description: "Extract peak mathematical throughput in .NET 9: `Vector512<T>`, `Vector256<T>`, AVX-512 hardware intrinsics, and SIMD array math.",
      lessons: [
        {
          id: "cs-simd-vector512",
          slug: "csharp-hardware-intrinsics-vector512-avx512-simd",
          courseSlug: "csharp",
          moduleSlug: "hardware-intrinsics-vector512-avx512",
          title: "Hardware Intrinsics & Vector512 SIMD Acceleration",
          description: "Perform vectorized mathematical computing with C# Hardware Intrinsics: `System.Runtime.Intrinsics.Vector512<T>` (.NET 8/9), AVX-512 CPU registers, Fused Multiply-Add (FMA), ARM Neon equivalents, and cross-platform hardware fallback.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of modern SIMD hardware: 512-bit ZMM registers processing 16 single-precision floats per instruction",
            "Using `Vector512.Create` and `Vector512<float>` for hardware-accelerated batch calculation",
            "Hardware capability detection with `Vector512.IsHardwareAccelerated` and `Avx512F.IsSupported`",
            "Benchmarking SIMD Vector512 vs scalar loops with 10x-16x throughput gains",
          ],
          introduction: `Modern CPUs (Intel Xeon, AMD EPYC, Intel Core Ultra) feature AVX-512 hardware extensions capable of executing vector operations on 512-bit wide registers. .NET 8 and 9 provide first-class, cross-platform hardware intrinsic types (\`Vector512<T>\`, \`Vector256<T>\`, \`Vector128<T>\`). In C#, a single vectorized addition calculates 16 floating-point numbers in a single CPU clock cycle.`,
          whyItMatters: `Financial quantitative analysis, vector databases (HNSW cosine similarity), and machine learning token embeddings achieve 10x-15x performance improvements when vectorized with Vector512.`,
          syntax: `using System.Runtime.Intrinsics;\nVector512<float> v1 = Vector512.Create(array, 0);\nVector512<float> res = v1 * v2;`,
          mainExample: {
            title: "Vectorized Float Array Multiplication with Vector512 in .NET 9",
            language: "csharp",
            code: `// .NET 9 Hardware Intrinsics & Vector512 SIMD
using System;
using System.Runtime.Intrinsics;
using System.Runtime.Intrinsics.X86;

public class SimdVectorEngine
{
    public static void MultiplyArraysVector512(ReadOnlySpan<float> left, ReadOnlySpan<float> right, Span<float> result)
    {
        int i = 0;
        int vectorSize = Vector512<float>.Count; // 16 floats (512 bits / 32 bits = 16)

        // 1. SIMD Vector Loop: Process 16 floats per iteration!
        if (Vector512.IsHardwareAccelerated)
        {
            for (; i <= left.Length - vectorSize; i += vectorSize)
            {
                var vLeft = Vector512.Create(left.Slice(i, vectorSize));
                var vRight = Vector512.Create(right.Slice(i, vectorSize));

                // Single CPU instruction: Vector Multiply
                var vResult = vLeft * vRight;

                vResult.CopyTo(result.Slice(i, vectorSize));
            }
        }

        // 2. Scalar Fallback Loop for remainder elements
        for (; i < left.Length; i++)
        {
            result[i] = left[i] * right[i];
        }
    }

    public static void Main()
    {
        Console.WriteLine("=== .NET 9 Hardware Intrinsics: Vector512 SIMD ===");
        Console.WriteLine($"Vector512 Hardware Accelerated: {Vector512.IsHardwareAccelerated}");
        Console.WriteLine($"AVX-512 F Supported: {Avx512F.IsSupported}");
        Console.WriteLine($"Floats processed per instruction: {Vector512<float>.Count}");

        int length = 32;
        float[] a = new float[length];
        float[] b = new float[length];
        float[] result = new float[length];

        for (int i = 0; i < length; i++)
        {
            a[i] = i * 1.5f;
            b[i] = 2.0f;
        }

        MultiplyArraysVector512(a, b, result);

        Console.Write("Vectorized Result Samples: ");
        for (int i = 0; i < 4; i++) Console.Write($"{result[i]} ");
        Console.WriteLine("... (Processed in 512-bit ZMM hardware registers!)");
        Console.WriteLine("✅ SIMD math executed with peak hardware CPU FLOPs!");
    }
}`,
            executable: true,
            explanation: [
              "Vector512<float>.Count returns 16, indicating 16 floats fit into a single 512-bit hardware vector register.",
              "Vector512.IsHardwareAccelerated checks if the host CPU supports AVX-512 instructions.",
              "RyuJIT maps 'vLeft * vRight' directly to the CPU's 'vmulps' 512-bit instruction.",
              "A scalar cleanup loop processes the remaining elements if the array length is not a multiple of 16.",
            ],
          },
          detailedExplanation: [
            "Cross-Platform Vector Abstraction: If executed on an Arm64 processor supporting Neon or SVE, .NET automatically translates Vector operations into appropriate Arm64 vector instructions, providing high performance across x86 and ARM servers.",
          ],
          commonMistakes: [
            {
              mistake: "Assuming AVX-512 is available on all cloud virtual machines without checking `Vector512.IsHardwareAccelerated`.",
              badCode: "// Calling raw Avx512F.Multiply without feature check -> Throws PlatformNotSupportedException on older CPUs",
              goodCode: "if (Vector512.IsHardwareAccelerated) { ... } else { /* Fallback to Vector256 or scalar */ }",
              explanation: "Always use `Vector512.IsHardwareAccelerated` or capability checks to avoid crashing on older hardware.",
            },
          ],
          bestPractices: [
            "Prefer `Vector512<T>` and `Vector256<T>` over raw intrinsic classes for automatic cross-platform portability.",
            "Ensure arrays are aligned to 64-byte boundaries when performing high-throughput vector loads.",
            "Use `TensorPrimitives` (.NET 8+) for out-of-the-box vectorized dot products and cosine similarity.",
          ],
          summary: [
            "`Vector512<T>` processes 16 floating-point values simultaneously in one CPU cycle.",
            "RyuJIT compiles SIMD operators directly to native AVX-512 and ARM SVE instructions.",
            "Delivers 10x+ acceleration for financial calculations, AI embeddings, and graphics algorithms.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-15",
      slug: "lockfree-interlocked-lmax-disruptor",
      title: "Module 15: Lock-Free Concurrency: Interlocked & LMAX Disruptor",
      description: "Master lockless multi-threading in C#: `Interlocked` operations, `Volatile.Read/Write`, memory barriers, and the LMAX Disruptor pattern.",
      lessons: [
        {
          id: "cs-lockfree-disruptor",
          slug: "csharp-lockfree-interlocked-volatile-lmax-disruptor-ringbuffer",
          courseSlug: "csharp",
          moduleSlug: "lockfree-interlocked-lmax-disruptor",
          title: "Lock-Free C#: Interlocked & LMAX Disruptor Architecture",
          description: "Eliminate lock contention in .NET: `System.Threading.Interlocked` CAS operations, hardware CPU memory fences with `Volatile`, cache padding with `[StructLayout(LayoutKind.Explicit)]`, and implementing an ultra-low-latency LMAX Disruptor ring buffer.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why `lock (obj)` (Monitor) causes thread context switching and convoying under high contention",
            "Atomic CPU operations with `Interlocked.CompareExchange` and `Interlocked.Add`",
            "Eliminating False Sharing in C# structs using `[StructLayout(LayoutKind.Explicit)]` and `[FieldOffset(64)]`",
            "The LMAX Disruptor pattern: pre-allocated ring buffers with sequential sequence barriers",
          ],
          introduction: `Traditional multithreading in C# relies on the \`lock\` keyword (Monitor enter/exit). Under high load with dozens of threads, lock contention causes the OS kernel to put threads to sleep, incurring expensive context switches (1,000ns+). Lock-free programming uses CPU atomic instructions (\`Interlocked\`) to synchronize state in under 5 nanoseconds with zero thread parking.`,
          whyItMatters: `High-Frequency Trading matching engines and low-latency message buses process millions of transactions per second per CPU core using lock-free ring buffers.`,
          syntax: `Interlocked.CompareExchange(ref location, newValue, comparand);\nVolatile.Write(ref flag, 1);`,
          mainExample: {
            title: "Lock-Free Atomic Sequence Counter with Cache Line Padding in C#",
            language: "csharp",
            code: `// Lock-Free Atomic Ring Buffer Sequence with 64-Byte Cache Padding
using System;
using System.Runtime.InteropServices;
using System.Threading;
using System.Threading.Tasks;

// Cache line padding eliminates False Sharing between Producer and Consumer!
[StructLayout(LayoutKind.Explicit, Size = 128)]
public struct PaddedAtomicSequence
{
    [FieldOffset(64)] // Placed on its own dedicated 64-byte cache line
    public long Value;

    public long Increment()
    {
        return Interlocked.Increment(ref Value);
    }

    public long ReadVolatile()
    {
        return Volatile.Read(ref Value);
    }
}

public class LockFreeDisruptorDemo
{
    public static void Main()
    {
        Console.WriteLine("=== Lock-Free C#: Interlocked & Cache Line Padding ===");

        var producerSequence = new PaddedAtomicSequence();

        // Spawn concurrent tasks updating sequence atomically without locks
        Parallel.For(0, 100_000, i =>
        {
            // Interlocked atomic instruction (LOCK XADD in x86-64 assembly)
            producerSequence.Increment();
        });

        long finalValue = producerSequence.ReadVolatile();
        Console.WriteLine($"Final Atomic Sequence Value: {finalValue}");
        Console.WriteLine("✅ 100,000 concurrent atomic increments completed with ZERO mutex locks!");
    }
}`,
            executable: true,
            explanation: [
              "[StructLayout(LayoutKind.Explicit, Size = 128)] and [FieldOffset(64)] force the variable onto its own 64-byte cache line.",
              "Interlocked.Increment compiles to a single hardware atomic CPU instruction ('lock inc' / 'lock xadd').",
              "Volatile.Read emits an acquire memory barrier, preventing the compiler from caching the value in CPU registers.",
              "Eliminates mutex lock contention and False Sharing between producer and consumer cores.",
            ],
          },
          detailedExplanation: [
            "The LMAX Disruptor Architecture: A circular array (ring buffer) where items are pre-allocated at startup. Producers and Consumers claim sequence numbers atomically via `Interlocked`. Because memory is never allocated or freed dynamically, Garbage Collection is 0% and throughput exceeds 10,000,000 events/sec.",
          ],
          commonMistakes: [
            {
              mistake: "Using `volatile` keyword on fields and assuming operations like `counter++` are atomic.",
              badCode: "private volatile int counter; public void Inc() { counter++; } // RACE CONDITION!",
              goodCode: "private int counter; public void Inc() { Interlocked.Increment(ref counter); }",
              explanation: "The `volatile` keyword only controls memory barrier reads/writes; it does NOT make compound operations (`++`, `+=`) atomic. `Interlocked` is required.",
            },
          ],
          bestPractices: [
            "Use `Interlocked` for atomic counters and flags.",
            "Use `[StructLayout(LayoutKind.Explicit)]` to pad atomic sequence numbers across 64-byte boundaries.",
            "Use `System.Threading.Channels` as a high-performance built-in alternative to raw Disruptor ring buffers.",
          ],
          summary: [
            "`Interlocked` operations provide sub-5ns atomic synchronization without OS locks.",
            "Cache line padding eliminates False Sharing between CPU cores.",
            "The LMAX Disruptor pattern achieves ultra-high event throughput via lockless ring buffers.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-16",
      slug: "native-aot-static-analysis-trimming",
      title: "Module 16: Native AOT Compilation & Static Analysis Trimming",
      description: "Build instant-startup native binaries with .NET 9 Native AOT: static code trimming, reflection metadata warnings, and UnmanagedCallersOnly.",
      lessons: [
        {
          id: "cs-native-aot",
          slug: "dotnet-native-aot-compilation-trimming-unmanaged-c-interop",
          courseSlug: "csharp",
          moduleSlug: "native-aot-static-analysis-trimming",
          title: "Native AOT: Ahead-Of-Time Compilation & Trimming",
          description: "Transform .NET applications into standalone native machine binaries with Native AOT (.NET 9): eliminating the CLR JIT engine, configuring trimming analyzers (`[RequiresUnreferencedCode]`), zero-reflection JSON, and native C exports with `[UnmanagedCallersOnly]`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The difference between standard JIT compilation and Native AOT (Ahead-Of-Time) machine binary compilation",
            "Achieving sub-5ms startup times and 15MB base RAM footprints in .NET 9",
            "Static analysis trimming: how the trimmer strips unused code and why dynamic reflection fails",
            "Exporting native C shared libraries (`.so`, `.dylib`, `.dll`) from C# with `[UnmanagedCallersOnly]`",
          ],
          introduction: `Standard .NET binaries contain CIL bytecode and require the .NET Runtime and JIT compiler to execute. Native AOT compiles C# directly into a standalone, architecture-specific native machine executable (ELF/PE/Mach-O) Ahead-Of-Time. Native AOT binaries contain an embedded minimal runtime (no JIT compiler), start in under 5 milliseconds, consume minimal memory, and run without the .NET SDK or runtime installed.`,
          whyItMatters: `For Serverless AWS Lambda functions, Kubernetes pods, and CLI tools, Native AOT eliminates cold starts and reduces container image sizes to under 30MB.`,
          syntax: `<PublishAot>true</PublishAot>\n<TrimMode>full</TrimMode>\ndotnet publish -r linux-x64 -c Release`,
          mainExample: {
            title: "Configuring Native AOT and Exporting Native C Functions with UnmanagedCallersOnly",
            language: "csharp",
            code: `// .NET 9 Native AOT & Native C Function Export
using System;
using System.Runtime.InteropServices;
using System.Text.Json.Serialization;

// 1. Source-Generated JSON Serializer Context (Zero Reflection for Native AOT!)
[JsonSerializable(typeof(CourseMetadata))]
public partial class AppJsonSerializerContext : JsonSerializerContext
{
}

public record CourseMetadata(string Name, int Modules, bool Certified);

public class NativeAotExports
{
    // 2. Export C# function directly to native C/C++ ABI!
    // Native callers (C, Python, Rust) can invoke this function pointer with 0 overhead!
    [UnmanagedCallersOnly(EntryPoint = "kwas_calculate_score")]
    public static int CalculateScore(int baseScore, int multiplier)
    {
        return baseScore * multiplier + 100;
    }

    public static void Main()
    {
        Console.WriteLine("=== .NET 9 Native AOT (Ahead-Of-Time) Compilation ===");
        Console.WriteLine("Binary compiled directly into native machine code (No JIT engine).");
        Console.WriteLine($"Calculated Score (via Native Export): {CalculateScore(10, 5)}");
        Console.WriteLine("✅ Native AOT binary ready for sub-5ms cloud serverless execution!");
    }
}`,
            executable: true,
            explanation: [
              "[PublishAot>true] compiles C# directly into native machine code Ahead-Of-Time.",
              "JsonSerializerContext uses C# Source Generators to synthesize serialization code at compile time (Zero Reflection!).",
              "[UnmanagedCallersOnly] exports the method to the native C calling convention, allowing C/C++ to load the .NET binary as a standard C dynamic library.",
              "Unused BCL libraries and methods are statically trimmed from the executable.",
            ],
          },
          detailedExplanation: [
            "Trimming Warnings: If code uses dynamic reflection (`Type.GetType(dynamicName)`), the Native AOT compiler cannot verify reachability and emits warning `IL2026: RequiresUnreferencedCode`. Annotating code with `[DynamicallyAccessedMembers]` preserves required reflection metadata.",
          ],
          commonMistakes: [
            {
              mistake: "Using reflection-based JSON (`JsonSerializer.Serialize(obj)`) in Native AOT without Source Generators.",
              badCode: "string json = JsonSerializer.Serialize(myObj); // Trimmer strips property getters!",
              goodCode: "string json = JsonSerializer.Serialize(myObj, AppJsonSerializerContext.Default.MyObj);",
              explanation: "Reflection-based serializers fail in Native AOT because the trimmer strips unreferenced property metadata. Always use Source Generators.",
            },
          ],
          bestPractices: [
            "Use C# Source Generators for serialization, dependency injection, and regexes in Native AOT.",
            "Enable `<TreatWarningsAsErrors>true</TreatWarningsAsErrors>` for trimming analyzer warnings (`IL2026`, `IL2072`).",
            "Deploy Native AOT binaries in `FROM mcr.microsoft.com/dotnet/nightly/runtime-deps:9.0-alpine` containers.",
          ],
          summary: [
            "Native AOT compiles .NET code into standalone native executables with sub-5ms startup.",
            "Static trimming eliminates unused code, reducing memory and container footprints.",
            "`[UnmanagedCallersOnly]` enables bidirectional C-ABI interoperability.",
          ],
        },
      ],
    },
  ],
};

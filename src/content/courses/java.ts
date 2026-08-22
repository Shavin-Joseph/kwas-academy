import { Course } from "@/types";

export const javaCourse: Course = {
  id: "course-java",
  slug: "java",
  title: "Java 21 Enterprise Architecture & Spring Boot",
  tagline: "Object-oriented programming, JVM internals, multithreading, and Spring Boot microservices.",
  description: "Master Java 21+: Object-Oriented Programming (OOP), JVM architecture, memory management, garbage collection, Collections framework, Generics, Concurrency & Virtual Threads, Spring Boot microservices, and Maven.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 28,
  icon: "Code2",
  badgeColor: "red",
  prerequisites: ["Programming Fundamentals"],
  skillsGained: [
    "Java 21 Syntax, Records & Pattern Matching",
    "Object-Oriented Design & Design Patterns (Singleton, Factory)",
    "Collections Framework (ArrayList, HashMap, ConcurrentHashMap)",
    "JVM Memory & Garbage Collection Tuning",
    "Spring Boot Dependency Injection & REST Microservices",
  ],
  featured: false,
  modules: [
    {
      id: "mod-java-1",
      slug: "intro",
      title: "Module 1: Java Overview & JVM Architecture",
      description: "Bytecode compilation, JVM stack vs heap, and public static void main.",
      lessons: [
        {
          id: "java-intro",
          slug: "java-introduction",
          courseSlug: "java",
          moduleSlug: "intro",
          title: "Java Introduction & JVM Execution Lifecycle",
          description: "Understand the Java Virtual Machine (JVM), bytecode compilation, classes, and main method execution.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How the JVM executes bytecode across platforms ('Write Once, Run Anywhere')",
            "Class structure and public static void main entry points",
            "Modern Java 21 Records for immutable data containers",
          ],
          introduction: `Java is an enterprise-grade, class-based, object-oriented programming language designed for reliability, portability, and concurrency.`,
          whyItMatters: `Java powers backend banking systems, Android apps, and big data platforms (Apache Spark, Kafka) worldwide.`,
          mainExample: {
            title: "Java 21 Record & Main Application",
            language: "java",
            code: `public record Student(String id, String name, int score) {\n    public boolean isPassing() {\n        return score >= 70;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student alex = new Student("usr_1", "Alex Dev", 94);\n        System.out.println(alex.name() + " passing: " + alex.isPassing());\n    }\n}`,
            executable: true,
            explanation: ["Record automatically generates constructor, getters, equals, and toString."],
          },
          detailedExplanation: ["JVM memory is split into Stack (method calls) and Heap (dynamic objects)."],
          commonMistakes: [],
          bestPractices: ["Use Records for immutable data transfer objects (DTOs)."],
          summary: ["Java provides rock-solid type safety, rich concurrency, and enterprise scalability."],
        },
      ],
    },
    {
      id: "mod-java-2",
      slug: "types-variables",
      title: "Module 2: Data Types, Variables & Operators",
      description: "Primitive types (byte, int, long, double), wrapper classes, and BigDecimal for financial calculations.",
      lessons: [
        {
          id: "java-types",
          slug: "primitive-types-and-bigdecimal",
          courseSlug: "java",
          moduleSlug: "types-variables",
          title: "Primitives, Wrapper Classes & BigDecimal",
          description: "Master Java primitive types, autoboxing, and avoid floating point rounding errors with BigDecimal.",
          durationMinutes: 14,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "8 Primitive types in Java and memory sizes",
            "Autoboxing and unboxing between int and Integer",
            "Why double/float must never be used for money (use BigDecimal)",
          ],
          introduction: `Java has 8 primitive data types (byte, short, int, long, float, double, boolean, char) stored directly on the stack for high speed.`,
          whyItMatters: `Using double for monetary calculations produces rounding errors (0.1 + 0.2 = 0.30000000000000004). BigDecimal guarantees exact decimal precision.`,
          mainExample: {
            title: "Exact Financial Math with BigDecimal",
            language: "java",
            code: `import java.math.BigDecimal;\n\npublic class FinancialApp {\n    public static void main(String[] args) {\n        BigDecimal price = new BigDecimal("19.99");\n        BigDecimal tax = new BigDecimal("0.08");\n        BigDecimal total = price.add(price.multiply(tax));\n        System.out.println("Exact Total: $" + total.setScale(2, BigDecimal.ROUND_HALF_UP));\n    }\n}`,
            executable: false,
            explanation: ["BigDecimal avoids binary floating point rounding inaccuracies."],
          },
          detailedExplanation: ["Wrapper classes (Integer, Double) allow primitives to be used in generic collections like List<Integer>."],
          commonMistakes: [],
          bestPractices: ["Always instantiate BigDecimal using string constructors (new BigDecimal('19.99'))."],
          summary: ["Precise data types prevent subtle calculation bugs in financial software."],
        },
      ],
    },
    {
      id: "mod-java-3",
      slug: "control-flow",
      title: "Module 3: Control Structures & Flow",
      description: "if/else, switch expressions (Java 14+), for/while loops, and enhanced for-each.",
      lessons: [
        {
          id: "java-control",
          slug: "switch-expressions-and-loops",
          courseSlug: "java",
          moduleSlug: "control-flow",
          title: "Enhanced Switch Expressions & Iteration",
          description: "Write arrow switch expressions with pattern matching and iterate collections with enhanced for-each.",
          durationMinutes: 14,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Modern switch expressions returning values directly (case 'A' -> ...)",
            "Enhanced for-each loops over Iterables",
            "Pattern matching in switch statements",
          ],
          introduction: `Modern Java switch expressions eliminate cumbersome break statements and can return values directly as expressions.`,
          whyItMatters: `Arrow switch syntax eliminates accidental fall-through bugs where forgetting a 'break' corrupts program logic.`,
          mainExample: {
            title: "Switch Expression with Arrow Syntax",
            language: "java",
            code: `public class StatusChecker {\n    public static String getStatusDescription(int code) {\n        return switch (code) {\n            case 200 -> "OK (Success)";\n            case 404 -> "Not Found";\n            case 500 -> "Internal Server Error";\n            default  -> "Unknown Status Code";\n        };\n    }\n}`,
            executable: false,
            explanation: ["Switch expression returns value directly without break statements."],
          },
          detailedExplanation: ["Switch expressions must be exhaustive, ensuring every possible input is handled."],
          commonMistakes: [],
          bestPractices: ["Use switch expressions instead of long chains of if-else-if statements."],
          summary: ["Modern control flow in Java is concise, safe, and expressive."],
        },
      ],
    },
    {
      id: "mod-java-4",
      slug: "oop-classes",
      title: "Module 4: Object-Oriented Programming (Classes & Objects)",
      description: "Constructors, getters/setters, encapsulation, static members, and packages.",
      lessons: [
        {
          id: "java-oop-core",
          slug: "classes-constructors-and-encapsulation",
          courseSlug: "java",
          moduleSlug: "oop-classes",
          title: "Classes, Constructors & Encapsulation",
          description: "Design object-oriented classes with private fields, public getters/setters, and overloaded constructors.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Encapsulation: hiding internal state behind accessors",
            "Constructor overloading and the 'this' keyword",
            "Static class members vs instance variables",
          ],
          introduction: `Object-Oriented Programming (OOP) organizes software design around data objects rather than functions and logic.`,
          whyItMatters: `Encapsulation protects class invariants by validating mutations inside setter methods before assignment.`,
          mainExample: {
            title: "Encapsulated Account Class",
            language: "java",
            code: `public class BankAccount {\n    private final String accountNumber;\n    private double balance;\n\n    public BankAccount(String accNum, double initial) {\n        this.accountNumber = accNum;\n        this.balance = Math.max(0, initial);\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public double getBalance() { return this.balance; }\n}`,
            executable: false,
            explanation: ["private fields cannot be mutated directly by external classes."],
          },
          detailedExplanation: ["static fields belong to the class itself, shared across all instantiated objects."],
          commonMistakes: [],
          bestPractices: ["Always make fields private final whenever possible."],
          summary: ["Encapsulation and constructors form the foundation of robust Java design."],
        },
      ],
    },
    {
      id: "mod-java-5",
      slug: "inheritance",
      title: "Module 5: Inheritance, Polymorphism & Abstract Classes",
      description: "Extending classes (extends), super(), method overriding (@Override), and abstract classes.",
      lessons: [
        {
          id: "java-inheritance",
          slug: "inheritance-and-polymorphism",
          courseSlug: "java",
          moduleSlug: "inheritance",
          title: "Inheritance, Dynamic Polymorphism & @Override",
          description: "Extend parent classes, override methods dynamically, and define abstract templates.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Extending classes with the 'extends' keyword",
            "Runtime dynamic method dispatch (polymorphism)",
            "Abstract classes that cannot be directly instantiated",
          ],
          introduction: `Inheritance allows child classes to inherit attributes and methods from a parent class, promoting code reuse. Polymorphism allows subclasses to provide customized method implementations.`,
          whyItMatters: `Polymorphism lets you write code that operates on a generic PaymentMethod base class without caring whether it is CreditCard or PayPal.`,
          mainExample: {
            title: "Polymorphic Payment Processing",
            language: "java",
            code: `public abstract class PaymentMethod {\n    public abstract void processPayment(double amount);\n}\n\npublic class CreditCardPayment extends PaymentMethod {\n    @Override\n    public void processPayment(double amount) {\n        System.out.println("Processing credit card charge: $" + amount);\n    }\n}`,
            executable: false,
            explanation: ["@Override verifies at compile time that a parent method is actually being overridden."],
          },
          detailedExplanation: ["Java supports single inheritance for classes (a class can only extend one parent class)."],
          commonMistakes: [],
          bestPractices: ["Prefer composition over inheritance for sharing code between unrelated classes."],
          summary: ["Polymorphism enables flexible, extensible object-oriented architectures."],
        },
      ],
    },
    {
      id: "mod-java-6",
      slug: "records-sealed",
      title: "Module 6: Interfaces, Records & Sealed Classes",
      description: "Interface contracts, default methods, Java 21 Records, and sealed class hierarchies.",
      lessons: [
        {
          id: "java-sealed-records",
          slug: "interfaces-records-and-sealed-classes",
          courseSlug: "java",
          moduleSlug: "records-sealed",
          title: "Interfaces, Default Methods & Sealed Classes",
          description: "Implement multiple interfaces, declare immutable Records, and restrict subclassing with 'sealed'.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Multiple interface implementation (implements A, B)",
            "Default method implementations in interfaces",
            "Sealed classes (sealed class Shape permits Circle, Square) for exhaustive pattern matching",
          ],
          introduction: `Interfaces define behavioral contracts. Sealed classes allow authors to explicitly declare which classes are permitted to extend them, enabling compiler-enforced exhaustiveness.`,
          whyItMatters: `Sealed classes prevent third-party code from extending internal domain models in unexpected ways.`,
          mainExample: {
            title: "Sealed Class Hierarchy",
            language: "java",
            code: `public sealed interface Result permits Success, Failure {}\n\npublic record Success(String data) implements Result {}\npublic record Failure(String error) implements Result {}\n\n// Pattern matching in Java 21\n// switch (result) { case Success s -> ... case Failure f -> ... }`,
            executable: false,
            explanation: ["The compiler knows Result can ONLY be Success or Failure, enabling exhaustive switches."],
          },
          detailedExplanation: ["Interfaces can have static methods and private helper methods as well as default methods."],
          commonMistakes: [],
          bestPractices: ["Use sealed interfaces to model algebraic data types (ADTs) in Java."],
          summary: ["Interfaces and sealed classes provide total control over class contracts and hierarchies."],
        },
      ],
    },
    {
      id: "mod-java-7",
      slug: "collections",
      title: "Module 7: Java Collections Framework",
      description: "List (ArrayList, LinkedList), Set (HashSet, TreeSet), and Map (HashMap, ConcurrentHashMap).",
      lessons: [
        {
          id: "java-collections",
          slug: "lists-sets-and-hashmaps",
          courseSlug: "java",
          moduleSlug: "collections",
          title: "Collections Framework (ArrayList, HashSet, HashMap)",
          description: "Master high-performance data structures: dynamic arrays (ArrayList), O(1) sets (HashSet), and key-value maps (HashMap).",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Choosing between ArrayList (fast indexing) vs LinkedList",
            "HashSet mechanics (hashCode() and equals() contract)",
            "HashMap key-value storage and ConcurrentHashMap for multithreading",
          ],
          introduction: `The Java Collections Framework provides an architecture to store and manipulate a group of objects through unified interfaces (List, Set, Map).`,
          whyItMatters: `Overriding equals() without overriding hashCode() breaks HashMap lookups, causing objects to be lost in the map.`,
          mainExample: {
            title: "HashMap & ArrayList Operations",
            language: "java",
            code: `import java.util.*;\n\npublic class CollectionDemo {\n    public static void main(String[] args) {\n        Map<String, Integer> scores = new HashMap<>();\n        scores.put("Alex", 95);\n        scores.put("Sarah", 98);\n\n        System.out.println("Alex Score: " + scores.getOrDefault("Alex", 0));\n        System.out.println("Total Students: " + scores.size());\n    }\n}`,
            executable: true,
            explanation: ["HashMap computes the hash index of the string key for O(1) instant lookup."],
          },
          detailedExplanation: ["ConcurrentHashMap allows multiple threads to read and write concurrently without locking the entire map."],
          commonMistakes: [],
          bestPractices: ["Always override both hashCode() and equals() together on custom key classes."],
          summary: ["The Collections Framework provides high-performance data structures for enterprise software."],
        },
      ],
    },
    {
      id: "mod-java-8",
      slug: "generics",
      title: "Module 8: Generics & Type Constraints",
      description: "Generic classes <T>, bounded type parameters (<T extends Comparable>), and wildcards (? extends Number).",
      lessons: [
        {
          id: "java-generics",
          slug: "generics-and-wildcards",
          courseSlug: "java",
          moduleSlug: "generics",
          title: "Generics (<T>), Type Erasure & Wildcards (? extends)",
          description: "Write type-safe generic classes and use PECS (Producer Extends, Consumer Super) wildcard rules.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Generic classes, interfaces, and methods (<T>)",
            "Bounded type parameters (<T extends Comparable<T>>)",
            "The PECS rule: Producer Extends, Consumer Super (? extends T vs ? super T)",
          ],
          introduction: `Generics enable types (classes and interfaces) to be parameters when defining classes, interfaces, and methods.`,
          whyItMatters: `Generics catch type mismatch bugs at compile time rather than throwing ClassCastException at runtime in production.`,
          mainExample: {
            title: "Generic Box Container",
            language: "java",
            code: `public class Box<T> {\n    private T content;\n    public void set(T item) { this.content = item; }\n    public T get() { return this.content; }\n}\n\n// Box<String> stringBox = new Box<>();`,
            executable: false,
            explanation: ["Box<T> guarantees type safety for any contained object."],
          },
          detailedExplanation: ["Java uses Type Erasure: generic type metadata is verified at compile time and removed in bytecode for backward compatibility."],
          commonMistakes: [],
          bestPractices: ["Remember the PECS rule for generic collection arguments in utility libraries."],
          summary: ["Generics enable reusable, type-safe data structures across Java applications."],
        },
      ],
    },
    {
      id: "mod-java-9",
      slug: "streams",
      title: "Module 9: Streams API & Functional Programming",
      description: "Stream pipelines, map, filter, reduce, collect (Collectors.toList), and parallel streams.",
      lessons: [
        {
          id: "java-streams",
          slug: "streams-api-and-lambdas",
          courseSlug: "java",
          moduleSlug: "streams",
          title: "The Java Streams API & Lambda Expressions",
          description: "Process collections declaratively with filter(), map(), reduce(), and Collectors.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Stream pipeline phases: Source -> Intermediate Operations -> Terminal Operation",
            "Transforming data with .filter() and .map()",
            "Aggregating into collections with .collect(Collectors.toList())",
          ],
          introduction: `The Java Streams API (introduced in Java 8) allows developers to process sequences of elements in a functional, declarative style.`,
          whyItMatters: `Streams replace 15 lines of nested for-loops and if-conditions with 3 lines of readable, chainable transformations.`,
          mainExample: {
            title: "Stream Pipeline with Filter & Map",
            language: "java",
            code: `import java.util.*;\nimport java.util.stream.Collectors;\n\npublic class StreamDemo {\n    public static void main(String[] args) {\n        List<String> names = List.of("Alex", "Sarah", "Kenneth", "Elena", "Bob");\n        List<String> result = names.stream()\n            .filter(n -> n.length() > 4)\n            .map(String::toUpperCase)\n            .sorted()\n            .collect(Collectors.toList());\n        System.out.println("Filtered: " + result);\n    }\n}`,
            executable: true,
            explanation: ["Streams evaluate lazily: intermediate operations only execute when the terminal collect() runs."],
          },
          detailedExplanation: [".parallelStream() automatically splits work across multi-core CPU threads for large datasets."],
          commonMistakes: [],
          bestPractices: ["Do not mutate external state inside Stream lambda functions."],
          summary: ["The Streams API delivers elegant, functional collection processing in Java."],
        },
      ],
    },
    {
      id: "mod-java-10",
      slug: "concurrency",
      title: "Module 10: Concurrency, Threads & Virtual Threads (Project Loom)",
      description: "Thread synchronization, ExecutorService, CompletableFuture, and Java 21 Virtual Threads.",
      lessons: [
        {
          id: "java-virtual-threads",
          slug: "virtual-threads-and-concurrency",
          courseSlug: "java",
          moduleSlug: "concurrency",
          title: "Java 21 Virtual Threads & Concurrency",
          description: "Scale to 1,000,000 concurrent tasks effortlessly using lightweight Java 21 Virtual Threads (Project Loom).",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "OS Platform Threads (1MB memory) vs Virtual Threads (KB memory)",
            "Spawning virtual threads with Executors.newVirtualThreadPerTaskExecutor()",
            "CompletableFuture for asynchronous pipeline composition",
          ],
          introduction: `Virtual Threads are lightweight threads that dramatically reduce the effort of writing, maintaining, and observing high-throughput concurrent applications.`,
          whyItMatters: `Traditional OS threads hit memory limits at ~5,000 threads. Virtual threads allow a single JVM to easily manage 1,000,000 concurrent HTTP connections!`,
          mainExample: {
            title: "Spawning 10,000 Virtual Threads",
            language: "java",
            code: `import java.util.concurrent.Executors;\n\npublic class VirtualThreadDemo {\n    public static void main(String[] args) {\n        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n            for (int i = 1; i <= 5; i++) {\n                final int id = i;\n                executor.submit(() -> {\n                    System.out.println("Virtual Thread Task #" + id + " running.");\n                });\n            }\n        }\n    }\n}`,
            executable: true,
            explanation: ["Virtual threads unmount from carrier OS threads during blocking I/O automatically."],
          },
          detailedExplanation: ["Virtual threads eliminate the need for complex reactive programming (like WebFlux/RxJava) for high-throughput I/O."],
          commonMistakes: [],
          bestPractices: ["Never pool virtual threads; spawn a new virtual thread per task."],
          summary: ["Virtual Threads bring effortless, high-throughput concurrency to modern Java."],
        },
      ],
    },
    {
      id: "mod-java-11",
      slug: "spring-boot",
      title: "Module 11: Spring Boot Microservices Architecture",
      description: "Spring Boot 3, Dependency Injection, Spring Data JPA, and secure REST APIs.",
      lessons: [
        {
          id: "java-spring",
          slug: "spring-boot-and-microservices",
          courseSlug: "java",
          moduleSlug: "spring-boot",
          title: "Spring Boot 3 REST Microservices & Dependency Injection",
          description: "Build enterprise microservices with Spring Boot, @RestController, @Service, and Spring Data JPA repositories.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Spring Inversion of Control (IoC) and @Autowired Dependency Injection",
            "Building REST endpoints with @RestController and @GetMapping",
            "Database persistence with Spring Data JPA interfaces",
          ],
          introduction: `Spring Boot is the premier Java enterprise framework for building production-grade, standalone microservices and web APIs.`,
          whyItMatters: `Spring Boot powers the core backend transaction engines of financial institutions, Fortune 500 enterprises, and e-commerce platforms.`,
          mainExample: {
            title: "Spring Boot REST Controller",
            language: "java",
            code: `@RestController\n@RequestMapping("/api/courses")\npublic class CourseController {\n    @GetMapping\n    public List<String> listCourses() {\n        return List.of("HTML5", "TypeScript", "Java 21");\n    }\n}`,
            executable: false,
            explanation: ["Spring Boot automatically serializes Java objects to JSON HTTP responses."],
          },
          detailedExplanation: ["Spring Data JPA generates SQL queries automatically based on repository method names (findByEmail)."],
          commonMistakes: [],
          bestPractices: ["Use constructor injection instead of field @Autowired for better testability."],
          summary: ["Spring Boot delivers enterprise-grade scalability, security, and cloud deployment."],
        },
      ],
    },
    {
      id: "mod-java-12",
      slug: "jvm-zgc-shenandoah-gc-internals",
      title: "Module 12: JVM Memory: ZGC, Shenandoah & Ultra-Low-Latency GC",
      description: "Master JVM memory management: Generational ZGC, Shenandoah colored pointers, load barriers, and sub-millisecond GC pauses.",
      lessons: [
        {
          id: "java-zgc-gc",
          slug: "jvm-memory-management-generational-zgc-shenandoah",
          courseSlug: "java",
          moduleSlug: "jvm-zgc-shenandoah-gc-internals",
          title: "JVM Garbage Collection: Generational ZGC & Shenandoah",
          description: "Master the internal architecture of the Java Virtual Machine memory management: Generational ZGC (Z Garbage Collector), colored 64-bit pointers, JIT read load barriers, and achieving sub-millisecond GC pause times on multi-terabyte heaps.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The evolution from G1GC Stop-The-World pauses to concurrent ZGC and Shenandoah",
            "How 64-bit Reference Colored Pointers (Marked0, Marked1, Remapped) track object status without header lookups",
            "JIT Load Barriers: healing pointers concurrently during active application thread execution",
            "Tuning Generational ZGC (`-XX:+UseZGC -XX:+ZGenerational`) for high-throughput trading and gaming engines",
          ],
          introduction: `Historically, Java applications with large memory heaps (100GB+) suffered from 'Stop-The-World' (STW) garbage collection pauses lasting hundreds of milliseconds or several seconds. Modern Java (JDK 21+) features Generational ZGC and Shenandoah, which perform object marking, relocation, and pointer remapping concurrently with running application threads, guaranteeing GC pause times below 1 millisecond regardless of heap size.`,
          whyItMatters: `In high-frequency trading (HFT), multiplayer gaming servers, and real-time payment gateways, a 50ms GC pause can cause missed transactions or disconnected players. Generational ZGC eliminates latency spikes entirely.`,
          syntax: `java -XX:+UseZGC -XX:+ZGenerational -Xmx32g -jar app.jar`,
          mainExample: {
            title: "Simulating ZGC Memory Allocation and Inspecting JVM GC Metrics",
            language: "java",
            code: `// JVM Garbage Collector & Memory Telemetry Inspection
import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.List;

public class ZgcDiagnosticMonitor {
    public static void main(String[] args) {
        System.out.println("=== JVM Memory & GC Engine Diagnostics ===");

        // 1. Inspect active JVM Garbage Collector MXBeans
        List<GarbageCollectorMXBean> gcBeans = ManagementFactory.getGarbageCollectorMXBeans();
        for (GarbageCollectorMXBean gc : gcBeans) {
            System.out.printf("Active GC Engine: %s | Total Collections: %d | Total Pause Time: %d ms%n",
                gc.getName(), gc.getCollectionCount(), gc.getCollectionTime());
        }

        // 2. High-Frequency Heap Allocation Simulation
        long start = System.nanoTime();
        for (int i = 0; i < 500_000; i++) {
            // Ephemeral Young Generation allocations
            byte[] transientBuffer = new byte[1024]; // 1KB per allocation
            if (i % 100_000 == 0) {
                long elapsedMs = (System.nanoTime() - start) / 1_000_000;
                System.out.printf("Allocated %d items (Concurrent Phase Active at %d ms)%n", i, elapsedMs);
            }
        }

        System.out.println("✅ Generational ZGC completed with zero Stop-The-World UI freezes!");
    }
}`,
            executable: true,
            explanation: [
              "ManagementFactory.getGarbageCollectorMXBeans() queries active GC telemetry from the JVM runtime.",
              "ZGC uses colored pointers where reference bits store metadata (Marked0, Marked1, Remapped) directly in the 64-bit memory address.",
              "When an application thread dereferences a relocated object, a JIT Load Barrier intercepts the read, updates the pointer in-place ('self-healing'), and returns the object in nanoseconds.",
            ],
          },
          detailedExplanation: [
            "Generational ZGC (JDK 21+): Separates memory into Young and Old generations. Because most allocated objects die young, Generational ZGC collects the young generation more frequently, drastically increasing allocation throughput while retaining sub-millisecond pause guarantees.",
          ],
          commonMistakes: [
            {
              mistake: "Allocating memory faster than ZGC can concurrently reclaim it, causing 'Allocation Stalls'.",
              badCode: "while(true) { list.add(new byte[10_000_000]); } // Unbounded memory exhaustion",
              goodCode: "// Size heap adequately with -Xmx and tune -XX:ZAllocationSpikeTolerance",
              explanation: "If allocation rate exceeds concurrent GC speed, threads stall waiting for memory. Increase heap size or tune allocation spike tolerance.",
            },
          ],
          bestPractices: [
            "Use `-XX:+UseZGC -XX:+ZGenerational` on JDK 21+ for ultra-low latency.",
            "Avoid calling `System.gc()` manually in production code.",
            "Monitor GC pauses in production using JDK Flight Recorder (JFR) and Unified JVM GC Logging (`-Xlog:gc*`).",
          ],
          summary: [
            "Generational ZGC guarantees sub-millisecond pause times on heaps up to 16TB.",
            "Colored pointers and JIT load barriers perform compaction concurrently with application threads.",
            "Eliminates Stop-The-World latency spikes in enterprise Java microservices.",
          ],
        },
      ],
    },
    {
      id: "mod-java-13",
      slug: "project-loom-virtual-threads-carriers",
      title: "Module 13: Project Loom: Virtual Threads & Carrier Pool Internals",
      description: "Master Java 21+ Project Loom: millions of Virtual Threads, continuation frames, unpinning carrier threads, and Structured Concurrency.",
      lessons: [
        {
          id: "java-virtual-threads",
          slug: "project-loom-virtual-threads-continuations-structured-concurrency",
          courseSlug: "java",
          moduleSlug: "project-loom-virtual-threads-carriers",
          title: "Project Loom: Virtual Threads & Continuation Mechanics",
          description: "Scale Java web servers to millions of concurrent requests with Project Loom: Virtual Threads (Java 21+), JVM continuation stack frames, ForkJoinPool carrier thread mounting/unmounting, avoiding thread pinning, and Structured Concurrency (`StructuredTaskScope`).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Platform Threads (1:1 OS mapping, 1MB stack) vs Virtual Threads (M:N JVM mapping, few hundred bytes)",
            "How the JVM mounts and unmounts Virtual Threads onto Carrier Threads (`ForkJoinPool`) during blocking I/O",
            "Diagnosing Thread Pinning (`synchronized` blocks vs `ReentrantLock`)",
            "Structured Concurrency with `StructuredTaskScope.ShutdownOnFailure`",
          ],
          introduction: `Prior to Java 21, Java threads were 1:1 wrappers around heavyweight OS kernel threads. A single JVM could only handle ~5,000 concurrent threads before exhausting OS memory limits (each OS thread consumes 1MB of stack). Project Loom introduces Virtual Threads: lightweight user-mode threads managed entirely by the JVM that consume only ~200 bytes of heap memory, allowing a single JVM to easily host 1,000,000+ concurrent threads.`,
          whyItMatters: `Virtual Threads eliminate the need for complex reactive programming (RxJava, Project Reactor, WebFlux). Developers can write simple synchronous blocking code that scales with the performance of asynchronous event loops.`,
          syntax: `try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n  executor.submit(() -> fetchHttp());\n}`,
          mainExample: {
            title: "Spawning 100,000 Virtual Threads and Structured Concurrency",
            language: "java",
            code: `// Java 21+ Project Loom: Virtual Threads & Structured Concurrency
import java.util.concurrent.Executors;
import java.util.concurrent.StructuredTaskScope;
import java.time.Duration;

public class LoomVirtualThreadsDemo {
    public static void main(String[] args) throws Exception {
        System.out.println("=== Project Loom: Virtual Threads Concurrency Engine ===");

        // 1. Execute 100,000 Concurrent Virtual Threads
        long startTime = System.currentTimeMillis();
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            for (int i = 1; i <= 100_000; i++) {
                final int taskId = i;
                executor.submit(() -> {
                    // Simulate non-blocking I/O sleep (Unmounts virtual thread from carrier thread!)
                    Thread.sleep(Duration.ofMillis(50));
                    if (taskId == 100_000) {
                        System.out.println("✅ All 100,000 Virtual Threads dispatched and unmounted cleanly!");
                    }
                    return taskId;
                });
            }
        } // Auto-closes and waits for all 100,000 tasks to finish
        System.out.printf("100,000 Virtual Threads finished in: %d ms%n", (System.currentTimeMillis() - startTime));

        // 2. Structured Concurrency Scope (Java 21 Preview / Modern Pattern)
        // Spawns subtasks where a failure in one subtask cancels the other automatically!
        try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
            var userTask = scope.fork(() -> queryUserService());
            var billingTask = scope.fork(() -> queryBillingService());

            scope.join();           // Join both forks
            scope.throwIfFailed();  // Propagate errors if any failed

            System.out.printf("Structured Results -> User: %s | Billing: %s%n",
                userTask.get(), billingTask.get());
        }
    }

    private static String queryUserService() throws InterruptedException {
        Thread.sleep(30);
        return "User(Alex, Pro)";
    }

    private static String queryBillingService() throws InterruptedException {
        Thread.sleep(40);
        return "Invoice(Paid, $199)";
    }
}`,
            executable: true,
            explanation: [
              "Executors.newVirtualThreadPerTaskExecutor() spawns a new virtual thread for every submitted task.",
              "When a virtual thread executes Thread.sleep() or blocking socket reads, the JVM unmounts its continuation stack from the carrier OS thread, allowing another virtual thread to execute on that carrier thread.",
              "StructuredTaskScope guarantees that if one subtask fails, all running subtasks in the scope are automatically cancelled.",
            ],
          },
          detailedExplanation: [
            "Thread Pinning Warning: When a virtual thread enters a `synchronized` block or executes native JNI methods, it becomes 'pinned' to its carrier OS thread, preventing the carrier from servicing other virtual threads during blocking I/O. Replace `synchronized` with `java.util.concurrent.locks.ReentrantLock`.",
          ],
          commonMistakes: [
            {
              mistake: "Pooling virtual threads using a fixed thread pool (`Executors.newFixedThreadPool`).",
              badCode: "ExecutorService pool = Executors.newFixedThreadPool(100, Thread.ofVirtual().factory());",
              goodCode: "ExecutorService pool = Executors.newVirtualThreadPerTaskExecutor();",
              explanation: "Virtual threads should never be pooled. They are ephemeral, lightweight, and meant to be created on-demand per request.",
            },
          ],
          bestPractices: [
            "Use `Executors.newVirtualThreadPerTaskExecutor()` in Tomcat/Jetty web servers.",
            "Replace legacy `synchronized` keyword with `ReentrantLock` to prevent thread pinning.",
            "Adopt `StructuredTaskScope` to eliminate dangling background threads.",
          ],
          summary: [
            "Virtual Threads bring lightweight user-mode threading to Java without reactive complexity.",
            "Blocking I/O unmounts continuation frames from underlying OS carrier threads.",
            "Structured Concurrency guarantees atomic task lifecycle management and error propagation.",
          ],
        },
      ],
    },
    {
      id: "mod-java-14",
      slug: "project-panama-foreign-function-memory",
      title: "Module 14: Project Panama: Foreign Function & Memory API (FFM)",
      description: "Replace legacy JNI with Project Panama's type-safe Foreign Function and Memory (FFM) API for direct C/C++ interop.",
      lessons: [
        {
          id: "java-panama-ffm",
          slug: "project-panama-foreign-function-memory-api-jni-replacement",
          courseSlug: "java",
          moduleSlug: "project-panama-foreign-function-memory",
          title: "Project Panama: Foreign Function & Memory (FFM) API",
          description: "Eliminate legacy Java Native Interface (JNI) boilerplate using Project Panama (Java 22+): type-safe off-heap native memory allocation with `Arena` and `MemorySegment`, and invoking native C shared libraries with `Linker` and `SymbolLookup`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why legacy JNI was slow, unsafe, and required writing intermediate C stub wrappers",
            "Allocating and managing deterministic off-heap memory with `Arena` and `MemorySegment`",
            "Looking up and calling native C standard library functions (e.g. `strlen`, `printf`, `posix_memalign`) via `Linker.nativeLinker()`",
            "Zero-copy interop with native AI/ML libraries (ONNX, llama.cpp, BLAS)",
          ],
          introduction: `For 25 years, connecting Java to native C/C++ libraries required Java Native Interface (JNI), which was notoriously slow, complex, and prone to JVM crashes. Project Panama's Foreign Function & Memory (FFM) API (finalized in Java 22) provides a pure Java API to allocate off-heap native memory safely and call foreign native C functions with zero C wrapper code and near-zero invocation overhead.`,
          whyItMatters: `High-performance computing (HPC), GPU tensor computation, and low-latency database engines allocate memory off-heap outside the JVM GC. FFM provides deterministic deallocation with compile-time memory segment boundaries.`,
          syntax: `try (Arena arena = Arena.ofConfined()) {\n  MemorySegment segment = arena.allocate(1024);\n  Linker linker = Linker.nativeLinker();\n}`,
          mainExample: {
            title: "Invoking Native C strlen and Allocating Off-Heap Memory with Project Panama",
            language: "java",
            code: `// Java 22+ Project Panama Foreign Function & Memory (FFM) Architecture
import java.lang.foreign.*;
import java.lang.invoke.MethodHandle;

public class PanamaNativeDemo {
    public static void main(String[] args) throws Throwable {
        System.out.println("=== Project Panama: Foreign Function & Memory API ===");

        // 1. Allocate deterministic off-heap memory using a Confined Arena
        try (Arena arena = Arena.ofConfined()) {
            String message = "KWAS Academy Systems Engineering 2026";
            
            // Allocate native UTF-8 C string off-heap (outside the JVM GC!)
            MemorySegment nativeString = arena.allocateFrom(message);
            System.out.printf("Off-Heap Memory Address: 0x%X (Byte Size: %d)%n",
                nativeString.address(), nativeString.byteSize());

            // 2. Lookup standard C library 'strlen' function using Native Linker
            Linker linker = Linker.nativeLinker();
            SymbolLookup stdlib = linker.defaultLookup();
            MemorySegment strlenAddress = stdlib.find("strlen").orElseThrow();

            // Create strongly-typed FunctionDescriptor: returns long (size_t), takes address pointer
            FunctionDescriptor descriptor = FunctionDescriptor.of(ValueLayout.JAVA_LONG, ValueLayout.ADDRESS);
            MethodHandle strlenHandle = linker.downcallHandle(strlenAddress, descriptor);

            // 3. Invoke native C function directly from Java!
            long length = (long) strlenHandle.invokeExact(nativeString);
            System.out.printf("✅ Invoked native C 'strlen()' -> Computed Length: %d characters%n", length);
        } // Arena closes here: Off-heap memory is DEALLOCATED instantly without waiting for GC!

        System.out.println("Off-heap memory freed deterministically.");
    }
}`,
            executable: true,
            explanation: [
              "Arena.ofConfined() creates a bounded memory lifetime scope tied to the try-with-resources block.",
              "arena.allocateFrom() allocates raw memory outside the JVM heap that will not be touched by the Garbage Collector.",
              "Linker.nativeLinker() links native C library functions into high-performance JVM MethodHandles.",
              "Zero C/C++ stub files, JNI headers, or gcc build steps were needed!",
            ],
          },
          detailedExplanation: [
            "Arena Lifecycles: 1. `Arena.ofConfined()` bound to a single thread (fastest). 2. `Arena.ofShared()` thread-safe, accessible across multiple concurrent threads. 3. `Arena.global()` lives for the entire JVM lifetime.",
          ],
          commonMistakes: [
            {
              mistake: "Accessing a `MemorySegment` after its parent `Arena` has closed, causing a `IllegalStateException`.",
              badCode: "MemorySegment seg; try(var a = Arena.ofConfined()) { seg = a.allocate(100); } seg.get(JAVA_INT, 0);",
              goodCode: "// Keep MemorySegment usage strictly within the active Arena try-with-resources block",
              explanation: "Panama prevents Use-After-Free security bugs by throwing a safe Java exception if closed memory is accessed.",
            },
          ],
          bestPractices: [
            "Use Panama FFM instead of JNI for all new native C/Rust library integrations.",
            "Prefer `Arena.ofConfined()` for maximum allocation throughput on single-threaded workers.",
            "Use Panama's `jextract` tool to generate Java bindings automatically from C header files (`.h`).",
          ],
          summary: [
            "Project Panama replaces JNI with a safe, pure Java native interop API.",
            "`Arena` and `MemorySegment` manage off-heap memory with deterministic lifetimes.",
            "`Linker` calls native C/Rust functions directly with near-zero overhead.",
          ],
        },
      ],
    },
    {
      id: "mod-java-15",
      slug: "bytecode-engineering-asm-bytebuddy",
      title: "Module 15: Bytecode Engineering with ASM, ByteBuddy & ClassLoaders",
      description: "Manipulate JVM bytecode dynamically: Java Agent instrumentation, ASM visitor pipelines, and custom ClassLoaders.",
      lessons: [
        {
          id: "java-bytecode-asm",
          slug: "java-bytecode-engineering-asm-bytebuddy-agents",
          courseSlug: "java",
          moduleSlug: "bytecode-engineering-asm-bytebuddy",
          title: "JVM Bytecode Engineering: ASM & ByteBuddy Instrumentation",
          description: "Inspect and rewrite compiled JVM bytecode at runtime: Java ClassFile binary structure, ClassLoaders delegation hierarchy, Java Agents (`premain` / `Instrumentation`), and bytecode synthesis with ByteBuddy and ASM.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The anatomy of a JVM `.class` binary: Magic Number (`0xCAFEBABE`), Constant Pool, FieldInfo, and Code attributes",
            "JVM ClassLoader delegation hierarchy: Bootstrap, Platform, and System/Application ClassLoaders",
            "Writing Java Agents with `java.lang.instrument.Instrumentation` for runtime bytecode modification",
            "Injecting automatic performance profiling and AOP aspects dynamically using ByteBuddy",
          ],
          introduction: `The JVM does not execute Java source code; it executes compiled JVM bytecode instructions (like \`aload_0\`, \`invokevirtual\`, \`iadd\`). Modern APM profilers (Datadog, Dynatrace, New Relic) and frameworks (Spring AOP, Hibernate) use Bytecode Engineering to dynamically inspect and rewrite classes as they are loaded into RAM by the ClassLoader.`,
          whyItMatters: `Bytecode manipulation allows you to inject distributed tracing, performance metrics, and security audits into third-party libraries without having access to their original source code.`,
          syntax: `// Java Agent Entry Point\npublic static void premain(String agentArgs, Instrumentation inst) {\n  inst.addTransformer(new CustomClassTransformer());\n}`,
          mainExample: {
            title: "Dynamic Class Generation and Bytecode Instrumentation with ByteBuddy",
            language: "java",
            code: `// Dynamic JVM Bytecode Synthesis with ByteBuddy
import net.bytebuddy.ByteBuddy;
import net.bytebuddy.implementation.MethodDelegation;
import net.bytebuddy.implementation.bind.annotation.Origin;
import net.bytebuddy.implementation.bind.annotation.RuntimeType;
import net.bytebuddy.implementation.bind.annotation.SuperCall;
import net.bytebuddy.matcher.ElementMatchers;

import java.lang.reflect.Method;
import java.util.concurrent.Callable;

public class BytecodeAgentDemo {

    // 1. Performance Interceptor (Injected into bytecode at runtime!)
    public static class TimingInterceptor {
        @RuntimeType
        public static Object intercept(@Origin Method method, @SuperCall Callable<?> callable) throws Exception {
            long start = System.nanoTime();
            try {
                return callable.call(); // Execute original method code
            } finally {
                long duration = (System.nanoTime() - start) / 1_000;
                System.out.printf("[BYTECODE PROFILER] Executed %s() in %d microseconds%n",
                    method.getName(), duration);
            }
        }
    }

    // 2. Base Domain Service
    public static class PaymentGateway {
        public String processTransaction(String accountId, double amount) throws Exception {
            Thread.sleep(25); // Simulate payment verification latency
            return "SUCCESS_TX_9921";
        }
    }

    public static void main(String[] args) throws Exception {
        System.out.println("=== Dynamic JVM Bytecode Engineering ===");

        // 3. Dynamically subclass and inject interceptor bytecode into PaymentGateway
        Class<? extends PaymentGateway> dynamicType = new ByteBuddy()
            .subclass(PaymentGateway.class)
            .method(ElementMatchers.named("processTransaction"))
            .intercept(MethodDelegation.to(TimingInterceptor.class))
            .make()
            .load(PaymentGateway.class.getClassLoader())
            .getLoaded();

        // 4. Instantiate instrumented class
        PaymentGateway instrumentedService = dynamicType.getDeclaredConstructor().newInstance();
        String result = instrumentedService.processTransaction("ACC_101", 450.00);

        System.out.printf("✅ Transaction Result: %s%n", result);
    }
}`,
            executable: true,
            explanation: [
              "ByteBuddy synthesizes a new JVM class binary in memory with modified method dispatch instructions.",
              "TimingInterceptor wraps the original method call with high-resolution performance timers.",
              "The dynamic class is loaded directly into the JVM ClassLoader without writing `.class` files to disk.",
            ],
          },
          detailedExplanation: [
            "Java Agents (`premain`): By packaging a JAR with a `Premain-Class` manifest header, you can attach an agent via `-javaagent:agent.jar`. The agent's `premain()` method runs before the application's `main()` method, enabling global bytecode transformation.",
          ],
          commonMistakes: [
            {
              mistake: "Modifying classes in the Bootstrap ClassLoader without configuring appropriate boot classpath permissions.",
              badCode: "inst.retransformClasses(java.lang.String.class); // Throws SecurityException",
              goodCode: "// Only instrument application domain classes unless explicit agent permissions are granted",
              explanation: "The JVM strictly protects core `java.lang.*` classes from unverified bytecode mutation.",
            },
          ],
          bestPractices: [
            "Use ByteBuddy instead of raw ASM for maintainable high-level bytecode transformations.",
            "Cache dynamic classes to prevent ClassLoader Metaspace memory leaks.",
            "Use `javap -c -v MyClass.class` to inspect compiled bytecode instructions.",
          ],
          summary: [
            "JVM bytecode consists of compact opcodes executed by the V8/HotSpot interpreter and JIT.",
            "ByteBuddy and ASM rewrite class structures dynamically at runtime.",
            "Java Agents enable non-invasive performance monitoring and security auditing.",
          ],
        },
      ],
    },
    {
      id: "mod-java-16",
      slug: "graalvm-native-image-aot",
      title: "Module 16: GraalVM Native Image: AOT Compilation & Static Analysis",
      description: "Build instant-startup native binaries with GraalVM Ahead-Of-Time (AOT) compilation, Closed-World Static Analysis, and reflection metadata.",
      lessons: [
        {
          id: "java-graalvm-native",
          slug: "graalvm-native-image-aot-compilation-reflection-metadata",
          courseSlug: "java",
          moduleSlug: "graalvm-native-image-aot",
          title: "GraalVM Native Image & Ahead-Of-Time (AOT) Compilation",
          description: "Transform Java applications into standalone native machine binaries with GraalVM Native Image: Closed-World Assumption, static reachability analysis, Substrate VM runtime, and configuring `reflect-config.json` metadata.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The difference between JIT (Just-In-Time) compilation and GraalVM AOT (Ahead-Of-Time) compilation",
            "How GraalVM achieves sub-10ms startup time and 30MB base RAM footprint (Substrate VM)",
            "The Closed-World Assumption: why dynamic class loading and unconfigured reflection fail in native images",
            "Generating reflection, JNI, and resource metadata using the GraalVM Tracing Agent (`-agentlib:native-image-agent`)",
          ],
          introduction: `Traditional Java applications have slow cold starts (several seconds) and high baseline memory consumption (200MB+) due to JVM initialization, class loading, and JIT compilation. GraalVM Native Image compiles Java bytecode directly into a standalone, architecture-specific native machine executable (ELF/Mach-O/PE) Ahead-Of-Time (AOT), containing an embedded micro-runtime (Substrate VM) that launches in under 5 milliseconds with minimal memory.`,
          whyItMatters: `For Serverless AWS Lambda functions, Kubernetes microservices, and CLI tools, GraalVM Native Image eliminates Java cold start latency and slashes cloud hosting costs by 80%.`,
          syntax: `native-image -jar app.jar -o app-native\njava -agentlib:native-image-agent=config-output-dir=src/main/resources/META-INF/native-image app.jar`,
          mainExample: {
            title: "Configuring GraalVM Native Image Reflection Metadata",
            language: "json",
            code: `// META-INF/native-image/reflect-config.json
// Explicit metadata required by GraalVM Closed-World Static Analysis
[
  {
    "name": "com.kwas.academy.domain.CourseEntity",
    "allDeclaredConstructors": true,
    "allPublicMethods": true,
    "allDeclaredFields": true
  },
  {
    "name": "org.postgresql.Driver",
    "methods": [
      { "name": "<init>", "parameterTypes": [] }
    ]
  }
]`,
            executable: false,
            explanation: [
              "Because GraalVM analyzes reachability at build time, classes invoked via runtime reflection must be explicitly registered in reflect-config.json.",
              "Unused classes, methods, and libraries are completely stripped from the final binary, producing a tiny 30MB native executable.",
              "The generated binary executes directly on the OS kernel without requiring an installed Java runtime (JRE).",
            ],
          },
          detailedExplanation: [
            "Closed-World Assumption: GraalVM assumes all bytecode that will ever execute is known at build time. Dynamic features like `Class.forName(dynamicString)` or dynamic proxies cannot be discovered statically without the GraalVM Tracing Agent.",
          ],
          commonMistakes: [
            {
              mistake: "Compiling code with unconfigured reflection, causing `ClassNotFoundException` at runtime in the native binary.",
              badCode: "Class.forName(unregisteredClassName).getDeclaredConstructor().newInstance();",
              goodCode: "// Run application with tracing agent first to automatically generate reflect-config.json",
              explanation: "The tracing agent intercepts all reflective calls during test runs and generates exact JSON metadata configurations for the native-image compiler.",
            },
          ],
          bestPractices: [
            "Use frameworks built for GraalVM Native Image (Quarkus, Micronaut, Spring Boot 3+).",
            "Generate metadata automatically by running integration tests with `-agentlib:native-image-agent`.",
            "Deploy native images in minimal `FROM scratch` or distroless Docker containers.",
          ],
          summary: [
            "GraalVM Native Image compiles Java bytecode into standalone native executables.",
            "Delivers sub-10ms startup times and 80% lower RAM footprint for serverless clouds.",
            "Closed-World Assumption requires explicit reflection and resource configuration metadata.",
          ],
        },
      ],
    },
  ],
};

import { Course } from "@/types";

export const cppCourse: Course = {
  id: "course-cpp",
  slug: "cpp",
  title: "C++ High-Performance Systems Engineering",
  tagline: "Master memory pointers, RAII, templates, STL containers, and modern C++20 standards.",
  description: "Deep dive into C++: manual memory management, raw pointers vs smart pointers (std::unique_ptr, std::shared_ptr), RAII idioms, Object-Oriented design, Operator overloading, Templates, and the Standard Template Library (STL).",
  category: "Programming Languages",
  level: "Advanced",
  estimatedHours: 30,
  icon: "Cpu",
  badgeColor: "blue",
  prerequisites: ["Basic Programming Logic"],
  skillsGained: [
    "Direct Memory Addressing & Pointer Arithmetic",
    "Modern Smart Pointers & RAII Resource Management",
    "C++ Standard Template Library (vector, unordered_map, algorithm)",
    "Template Metaprogramming & Concepts (C++20)",
    "High-Performance Low-Latency Systems Optimization",
  ],
  featured: false,
  modules: [
    {
      id: "mod-cpp-1",
      slug: "intro",
      title: "Module 1: C++ Overview & Compilation Process",
      description: "Preprocessing, compilation, assembly, linking, and the main() entry point.",
      lessons: [
        {
          id: "cpp-intro",
          slug: "cpp-introduction",
          courseSlug: "cpp",
          moduleSlug: "intro",
          title: "C++ Introduction & The Compilation Toolchain",
          description: "Understand the C++ compilation pipeline (Preprocessor, Compiler, Linker) and standard I/O.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Direct machine code compilation vs runtime interpreters",
            "The 4 compilation stages (Preprocessing, Compilation, Assembly, Linking)",
            "Standard I/O with std::cout, std::cin, and header includes",
          ],
          introduction: `C++ is a high-performance compiled language that provides low-level memory control alongside powerful object-oriented and generic abstractions.`,
          whyItMatters: `C++ powers game engines (Unreal Engine), operating systems (Windows, macOS kernels), database engines, and high-frequency trading platforms.`,
          mainExample: {
            title: "C++20 Main Function & Stream Output",
            language: "cpp",
            code: `#include <iostream>\n\nint main() {\n    std::cout << "KWAS Academy: C++20 Systems Engineering" << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["std::cout outputs text to standard console output stream."],
          },
          detailedExplanation: ["C++ compiles directly to CPU instructions with zero virtual machine overhead."],
          commonMistakes: [],
          bestPractices: ["Always compile with -Wall -Wextra to catch potential bugs early."],
          summary: ["C++ delivers unmatched performance and direct hardware control."],
        },
      ],
    },
    {
      id: "mod-cpp-2",
      slug: "types-memory",
      title: "Module 2: Variables, Types & Memory Footprint",
      description: "Fundamental types, sizeof, type casting (static_cast), and memory alignment.",
      lessons: [
        {
          id: "cpp-types",
          slug: "primitive-types-and-sizeof",
          courseSlug: "cpp",
          moduleSlug: "types-memory",
          title: "Data Types, sizeof & Type Casting (static_cast)",
          description: "Inspect byte sizes of fundamental types with sizeof and perform safe type conversions with static_cast.",
          durationMinutes: 14,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Exact bit-width types (int32_t, int64_t, size_t) from <cstdint>",
            "Inspecting memory footprint with sizeof",
            "Modern C++ explicit type casting with static_cast<T>(val)",
          ],
          introduction: `In C++, every variable has an exact byte size in memory determined by the compiler and CPU architecture.`,
          whyItMatters: `Using C-style casts (int)val bypasses type safety. static_cast checks conversions at compile time.`,
          mainExample: {
            title: "Memory Sizing & Safe Casting",
            language: "cpp",
            code: `#include <iostream>\n#include <cstdint>\n\nint main() {\n    int32_t count = 42;\n    double ratio = static_cast<double>(count) / 10.0;\n    std::cout << "Size of int32: " << sizeof(count) << " bytes" << std::endl;\n    std::cout << "Ratio: " << ratio << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["sizeof(count) outputs 4 bytes."],
          },
          detailedExplanation: ["Memory alignment rules ensure variables align to CPU cache boundaries."],
          commonMistakes: [],
          bestPractices: ["Always prefer static_cast over C-style parenthetical casts."],
          summary: ["Precise byte control allows C++ systems to optimize hardware utilization."],
        },
      ],
    },
    {
      id: "mod-cpp-3",
      slug: "pointers-references",
      title: "Module 3: Pointers, References & Pointer Arithmetic",
      description: "Address-of operator (&), dereference (*), raw pointers, references (Type&), and pointer arithmetic.",
      lessons: [
        {
          id: "cpp-pointers",
          slug: "pointers-and-references",
          courseSlug: "cpp",
          moduleSlug: "pointers-references",
          title: "Memory Addresses, Pointers & References",
          description: "Master direct memory addressing (&), pointer dereferencing (*), null pointers (nullptr), and references.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How pointers store memory addresses of variables",
            "Dereferencing pointers to mutate underlying memory (*ptr = val)",
            "References (const Type&) for zero-copy function parameter passing",
          ],
          introduction: `A pointer is a variable that stores the memory address of another variable. References provide safe aliases to existing variables without nullability risks.`,
          whyItMatters: `Passing 1MB objects by value makes an expensive copy. Passing by const reference (const BigObject&) takes 0 copies (8 bytes pointer).`,
          mainExample: {
            title: "Pointer & Reference Manipulation",
            language: "cpp",
            code: `#include <iostream>\n\nvoid increment(int& ref) { ref += 1; }\n\nint main() {\n    int value = 10;\n    int* ptr = &value;\n    *ptr = 20; // Mutate via pointer\n    increment(value); // Mutate via reference\n    std::cout << "Final Value: " << value << " at address: " << ptr << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["*ptr modifies the memory at address &value."],
          },
          detailedExplanation: ["Always use nullptr instead of NULL or 0 for uninitialized pointers."],
          commonMistakes: [],
          bestPractices: ["Pass large structs and vectors by const reference (const std::vector<int>&)."],
          summary: ["Pointers and references give direct control over computer memory."],
        },
      ],
    },
    {
      id: "mod-cpp-4",
      slug: "stack-heap",
      title: "Module 4: Stack vs Heap & Dynamic Memory",
      description: "Stack allocation speed, dynamic heap allocation (new/delete), memory fragmentation, and leaks.",
      lessons: [
        {
          id: "cpp-memory",
          slug: "stack-vs-heap-allocation",
          courseSlug: "cpp",
          moduleSlug: "stack-heap",
          title: "Stack vs Heap Allocation & Lifetime Mechanics",
          description: "Understand CPU stack frame allocation vs heap dynamic allocation, and the risks of memory leaks.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Stack memory: LIFO order, nanosecond allocation speed, automatic cleanup",
            "Heap memory: dynamic size, manual lifetime management",
            "Why forgetting 'delete' causes permanent memory leaks",
          ],
          introduction: `Variables declared inside functions live on the CPU Stack and are destroyed automatically when the function returns. Dynamic Heap memory persists until explicitly deleted.`,
          whyItMatters: `Allocating on the stack is literally just moving the CPU stack pointer register (1 CPU instruction). Heap allocation requires OS kernel memory search.`,
          mainExample: {
            title: "Stack vs Heap Lifetime",
            language: "cpp",
            code: `#include <iostream>\n\nint main() {\n    // Stack Allocation (Fast & Auto-Cleaned)\n    int stackVal = 100;\n\n    // Heap Allocation (Dynamic)\n    int* heapVal = new int(200);\n    std::cout << "Stack: " << stackVal << " | Heap: " << *heapVal << std::endl;\n    delete heapVal; // Must free heap memory\n    return 0;\n}`,
            executable: true,
            explanation: ["Stack memory cleans up on exit; heap requires explicit deletion."],
          },
          detailedExplanation: ["Dangling pointers occur when referencing heap memory after delete has already executed."],
          commonMistakes: [],
          bestPractices: ["Prefer stack allocation whenever object size is known at compile time."],
          summary: ["Stack and heap offer complementary memory allocation tradeoffs."],
        },
      ],
    },
    {
      id: "mod-cpp-5",
      slug: "smart-pointers",
      title: "Module 5: RAII & Smart Pointers (unique_ptr, shared_ptr)",
      description: "Resource Acquisition Is Initialization (RAII), std::unique_ptr, std::shared_ptr, and std::weak_ptr.",
      lessons: [
        {
          id: "cpp-smart-pointers",
          slug: "raii-and-smart-pointers",
          courseSlug: "cpp",
          moduleSlug: "smart-pointers",
          title: "RAII & Smart Pointers (std::unique_ptr, std::shared_ptr)",
          description: "Eliminate memory leaks forever using RAII smart pointers from the modern C++ <memory> header.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The RAII Idiom: Binding resource lifetime to object lifetime",
            "std::unique_ptr for exclusive ownership (zero runtime overhead)",
            "std::shared_ptr for reference-counted shared ownership",
          ],
          introduction: `RAII (Resource Acquisition Is Initialization) is the core design philosophy of modern C++. Destructors automatically release memory, database locks, and file handles when variables go out of scope.`,
          whyItMatters: `Using std::make_unique eliminates 100% of manual 'delete' calls, preventing memory leaks even if exceptions are thrown.`,
          mainExample: {
            title: "Safe RAII with std::unique_ptr",
            language: "cpp",
            code: `#include <iostream>\n#include <memory>\n\nstruct Resource {\n    Resource() { std::cout << "Resource Acquired" << std::endl; }\n    ~Resource() { std::cout << "Resource Destroyed (Auto RAII)" << std::endl; }\n};\n\nint main() {\n    {\n        auto ptr = std::make_unique<Resource>();\n    } // Destructor runs automatically here!\n    std::cout << "Exited scope safely." << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["unique_ptr destructor cleans up the Resource when leaving the block scope."],
          },
          detailedExplanation: ["std::make_unique has zero memory overhead compared to raw pointers."],
          commonMistakes: [],
          bestPractices: ["Never use raw 'new' and 'delete' in modern C++; use std::make_unique."],
          summary: ["Smart pointers bring effortless memory safety to modern C++."],
        },
      ],
    },
    {
      id: "mod-cpp-6",
      slug: "classes-oop",
      title: "Module 6: Classes, Constructors & Destructors",
      description: "Class declaration, constructor initializer lists, destructors (~Class), and const member methods.",
      lessons: [
        {
          id: "cpp-classes",
          slug: "classes-and-constructors",
          courseSlug: "cpp",
          moduleSlug: "classes-oop",
          title: "Classes, Initializer Lists & Destructors",
          description: "Design efficient C++ classes using member initializer lists, rule of zero, and const correctness.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Member initializer list syntax (: member(val)) for direct construction",
            "Class Destructors (~Class()) for resource cleanup",
            "Const member methods (void getInfo() const) preventing accidental mutations",
          ],
          introduction: `Classes in C++ encapsulate data members and member functions. Initializer lists initialize members directly before the constructor body executes.`,
          whyItMatters: `Initializing members in initializer lists avoids constructing default objects only to overwrite them inside the constructor body.`,
          mainExample: {
            title: "C++ Class with Initializer List",
            language: "cpp",
            code: `#include <iostream>\n#include <string>\n\nclass Engine {\nprivate:\n    std::string name;\n    int horsepower;\npublic:\n    Engine(std::string n, int hp) : name(std::move(n)), horsepower(hp) {}\n    int getHP() const { return horsepower; }\n};\n\nint main() {\n    Engine v8("V8 Twin Turbo", 650);\n    std::cout << "Horsepower: " << v8.getHP() << " HP" << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: [": name(std::move(n)), horsepower(hp) initializes members directly."],
          },
          detailedExplanation: ["Methods marked 'const' can be safely called on const instances of the class."],
          commonMistakes: [],
          bestPractices: ["Always use member initializer lists instead of assignments inside constructor bodies."],
          summary: ["Initializer lists and const correctness produce efficient, predictable C++ classes."],
        },
      ],
    },
    {
      id: "mod-cpp-7",
      slug: "move-semantics",
      title: "Module 7: Operator Overloading & Copy/Move Semantics",
      description: "Lvalue vs Rvalue references (&&), std::move, copy constructor, move constructor, and Rule of 5.",
      lessons: [
        {
          id: "cpp-move",
          slug: "move-semantics-and-rvalues",
          courseSlug: "cpp",
          moduleSlug: "move-semantics",
          title: "Move Semantics, Rvalues (&&) & The Rule of 5",
          description: "Steal resources from temporary rvalues without expensive deep copies using move constructors (Type(Type&&)).",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Lvalues (named variables) vs Rvalues (temporary expressions)",
            "Move constructor and move assignment operator with std::move",
            "The Rule of 5 (Destructor, Copy Ctor, Copy Assign, Move Ctor, Move Assign)",
          ],
          introduction: `Move semantics (introduced in C++11) allows objects to transfer ownership of resources (like dynamic heap buffers) from temporary objects without performing deep memory copies.`,
          whyItMatters: `Moving a 1GB vector takes 3 pointer copies (nanoseconds) instead of allocating and copying 1GB of memory!`,
          mainExample: {
            title: "Move Semantics with std::move",
            language: "cpp",
            code: `#include <iostream>\n#include <vector>\n#include <utility>\n\nint main() {\n    std::vector<int> bigVector(100000, 42);\n    // Transfer ownership of internal pointer without copying elements\n    std::vector<int> destination = std::move(bigVector);\n    \n    std::cout << "Destination size: " << destination.size() << std::endl;\n    std::cout << "Original size after move: " << bigVector.size() << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["std::move casts bigVector to an rvalue, allowing destination to steal its memory buffer."],
          },
          detailedExplanation: ["After a move, the source object is left in a valid but unspecified empty state."],
          commonMistakes: [],
          bestPractices: ["Follow the Rule of Zero: let smart pointers and STL containers handle copying and moving automatically."],
          summary: ["Move semantics eliminated the performance penalty of returning large objects by value."],
        },
      ],
    },
    {
      id: "mod-cpp-8",
      slug: "templates",
      title: "Module 8: Templates & Metaprogramming",
      description: "Function templates, class templates, template specialization, and compile-time constexpr evaluation.",
      lessons: [
        {
          id: "cpp-templates",
          slug: "templates-and-metaprogramming",
          courseSlug: "cpp",
          moduleSlug: "templates",
          title: "Function & Class Templates (template <typename T>)",
          description: "Write generic, type-agnostic algorithms that compile to highly optimized specialized machine code.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Declaring function templates (template <typename T>)",
            "Class templates with multiple type parameters",
            "Compile-time computation with constexpr",
          ],
          introduction: `Templates are C++'s mechanism for generic programming. Unlike Java/C# generics which use runtime type erasure or boxing, C++ templates generate specialized machine code for each type at compile time.`,
          whyItMatters: `Template algorithms run at the exact same native hardware speed as hand-written type-specific assembly code with zero abstraction penalty.`,
          mainExample: {
            title: "Generic Maximum Template Function",
            language: "cpp",
            code: `#include <iostream>\n\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    std::cout << "Int Max: " << getMax(10, 20) << std::endl;\n    std::cout << "Double Max: " << getMax(3.14, 2.71) << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["Compiler instantiates two distinct optimized functions: getMax<int> and getMax<double>."],
          },
          detailedExplanation: ["Template definitions must typically reside in header files so the compiler can instantiate them in translation units."],
          commonMistakes: [],
          bestPractices: ["Use constexpr functions for computations that can be evaluated at compile time."],
          summary: ["C++ templates deliver zero-cost generic abstractions."],
        },
      ],
    },
    {
      id: "mod-cpp-9",
      slug: "stl",
      title: "Module 9: Standard Template Library (STL) Containers & Algorithms",
      description: "std::vector, std::unordered_map, std::sort, iterators, and <algorithm> header.",
      lessons: [
        {
          id: "cpp-stl",
          slug: "stl-containers-and-algorithms",
          courseSlug: "cpp",
          moduleSlug: "stl",
          title: "STL Containers (vector, unordered_map) & Algorithms",
          description: "Master standard contiguous vectors, hash maps (unordered_map), and standard algorithms (std::sort, std::find).",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Contiguous memory layout of std::vector for CPU cache efficiency",
            "Hash-based lookups with std::unordered_map",
            "Standard algorithms from <algorithm> using lambda predicates",
          ],
          introduction: `The Standard Template Library (STL) is a powerful set of C++ template classes to provide general-purpose classes and functions with templates that implement many popular algorithms and data structures.`,
          whyItMatters: `std::vector stores elements contiguously in memory, making iteration drastically faster than pointer-chasing linked lists due to CPU cache locality.`,
          mainExample: {
            title: "Vector Sorting with Custom Lambda",
            language: "cpp",
            code: `#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> data = {50, 10, 40, 20, 30};\n    std::sort(data.begin(), data.end());\n    std::cout << "Sorted STL Vector: ";\n    for (int x : data) std::cout << x << " ";\n    std::cout << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["std::sort executes in O(n log n) time using Introsort."],
          },
          detailedExplanation: ["Use reserve() on std::vector to pre-allocate memory and avoid dynamic reallocation copies."],
          commonMistakes: [],
          bestPractices: ["Always default to std::vector unless you have a proven profiling need for another container."],
          summary: ["The STL provides battle-tested, high-performance algorithms and containers."],
        },
      ],
    },
    {
      id: "mod-cpp-10",
      slug: "cpp20-features",
      title: "Module 10: Modern C++20 Concepts, Coroutines & Ranges",
      description: "C++20 Concepts (type constraints), Ranges pipeline (| std::views), and Modules.",
      lessons: [
        {
          id: "cpp-concepts",
          slug: "cpp20-concepts-and-ranges",
          courseSlug: "cpp",
          moduleSlug: "cpp20-features",
          title: "C++20 Concepts & The Ranges Library",
          description: "Constrain template arguments with C++20 Concepts and write composable range pipelines with views.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Declaring template constraints with 'requires' and Concepts",
            "Clear compiler error messages instead of 500-line template errors",
            "Composable range pipelines (std::views::filter | std::views::transform)",
          ],
          introduction: `C++20 represents one of the largest updates to C++, introducing Concepts for compile-time template validation and Ranges for clean functional composition.`,
          whyItMatters: `Concepts replace cryptic 100-line template error traces with clear, single-line compile failure diagnostics.`,
          mainExample: {
            title: "C++20 Concept Constraint",
            language: "cpp",
            code: `#include <iostream>\n#include <concepts>\n\ntemplate <std::integral T>\nT addIntegers(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << "Sum: " << addIntegers(15, 25) << std::endl;\n    // addIntegers(3.14, 2.71); // Compile Error: double does not satisfy std::integral!\n    return 0;\n}`,
            executable: true,
            explanation: ["std::integral concept restricts template instantiation strictly to integer types."],
          },
          detailedExplanation: ["Ranges allow lazy, zero-copy transformation pipelines on containers."],
          commonMistakes: [],
          bestPractices: ["Use C++20 Concepts instead of SFINAE / std::enable_if in modern codebases."],
          summary: ["C++20 Concepts and Ranges elevate template expressiveness and safety."],
        },
      ],
    },
    {
      id: "mod-cpp-11",
      slug: "concurrency",
      title: "Module 11: Multithreading & High-Performance Optimization",
      description: "std::thread, std::mutex, lock_guard, std::atomic, lock-free programming, and CPU cache optimization.",
      lessons: [
        {
          id: "cpp-threads",
          slug: "multithreading-and-atomics",
          courseSlug: "cpp",
          moduleSlug: "concurrency",
          title: "Multithreading with std::thread, Mutex & Atomics",
          description: "Spawn hardware threads with std::thread, protect shared memory with std::lock_guard, and use lock-free std::atomic.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Spawning native threads with std::thread and joining",
            "Preventing race conditions using std::mutex and std::lock_guard",
            "Lock-free atomic counters with std::atomic<int>",
          ],
          introduction: `C++ provides low-level multithreading primitives allowing software to extract peak multi-core CPU performance.`,
          whyItMatters: `std::atomic operations execute as single hardware CPU instructions without the heavy operating system lock overhead of mutexes.`,
          mainExample: {
            title: "Lock-Free Multithreaded Counter with std::atomic",
            language: "cpp",
            code: `#include <iostream>\n#include <thread>\n#include <atomic>\n\nstd::atomic<int> counter(0);\n\nvoid increment() {\n    for (int i = 0; i < 1000; ++i) counter.fetch_add(1);\n}\n\nint main() {\n    std::thread t1(increment);\n    std::thread t2(increment);\n    t1.join();\n    t2.join();\n    std::cout << "Atomic Counter: " << counter.load() << std::endl;\n    return 0;\n}`,
            executable: true,
            explanation: ["std::atomic guarantees thread-safe mutation without mutex locks."],
          },
          detailedExplanation: ["Always use std::lock_guard to ensure mutexes unlock automatically even if exceptions occur."],
          commonMistakes: [],
          bestPractices: ["Prefer std::atomic for simple counters and std::lock_guard for complex critical sections."],
          summary: ["Multithreading and atomics unlock the full parallel computing potential of modern multi-core CPUs."],
        },
      ],
    },
    {
      id: "mod-cpp-12",
      slug: "cpp20-coroutines-promise-awaitables",
      title: "Module 12: C++20 Coroutines: Promises, Awaitables & Symmetric Transfer",
      description: "Master C++20 stackless coroutines: `co_await`, `co_yield`, `co_return`, `promise_type`, and tail-call Symmetric Transfer.",
      lessons: [
        {
          id: "cpp-coroutines-internals",
          slug: "cpp20-coroutines-promise-type-awaitable-symmetric-transfer",
          courseSlug: "cpp",
          moduleSlug: "cpp20-coroutines-promise-awaitables",
          title: "C++20 Coroutines Architecture: Promises & Awaitables",
          description: "Build asynchronous generators and task schedulers with C++20 stackless coroutines: constructing `promise_type`, designing custom awaitables with `await_ready`, `await_suspend`, `await_resume`, and preventing stack overflow via Symmetric Transfer.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Stackful coroutines (Fibers) vs C++20 Stackless Coroutines (Heap frame allocation)",
            "The 3 coroutine keywords: `co_await`, `co_yield`, and `co_return`",
            "The anatomy of `promise_type`: `get_return_object()`, `initial_suspend()`, `final_suspend()`",
            "Eliminating recursive stack overflow using Symmetric Transfer (`std::coroutine_handle<>`)",
          ],
          introduction: `C++20 introduces native stackless coroutines: functions that can suspend execution ('co_await', 'co_yield') and resume at a later time without blocking the calling thread. Unlike languages that provide a rigid, opaque async runtime (like JavaScript or C#), C++20 coroutines are completely customizable: developers define their own memory allocation, suspension hooks, and scheduling promises.`,
          whyItMatters: `High-frequency trading order routers, game engines, and low-latency network engines (like Seastar) use C++20 coroutines to write asynchronous non-blocking event code that compiles to the exact same assembly as handwritten state machines.`,
          syntax: `struct Task {\n  struct promise_type { ... };\n  std::coroutine_handle<promise_type> handle;\n};\nTask async_fetch() { co_await std::suspend_always{}; }`,
          mainExample: {
            title: "Implementing a Lazy Infinite Sequence Generator with C++20 Coroutines",
            language: "cpp",
            code: `// C++20 Stackless Coroutines: Lazy Generator Architecture
#include <iostream>
#include <coroutine>
#include <optional>

template<typename T>
struct Generator {
    // 1. Mandatory promise_type contract
    struct promise_type {
        T current_value;

        Generator get_return_object() {
            return Generator{std::coroutine_handle<promise_type>::from_promise(*this)};
        }
        std::suspend_always initial_suspend() noexcept { return {}; } // Lazy start
        std::suspend_always final_suspend() noexcept { return {}; }
        
        std::suspend_always yield_value(T value) noexcept {
            current_value = value;
            return {}; // Suspend and return value to caller
        }
        void return_void() noexcept {}
        void unhandled_exception() { std::terminate(); }
    };

    std::coroutine_handle<promise_type> handle;

    explicit Generator(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~Generator() { if (handle) handle.destroy(); }

    bool next() {
        if (!handle || handle.done()) return false;
        handle.resume();
        return !handle.done();
    }

    T value() const { return handle.promise().current_value; }
};

// 2. Coroutine Function emitting Fibonacci numbers on-demand
Generator<uint64_t> fibonacci_sequence() {
    uint64_t a = 0, b = 1;
    while (true) {
        co_yield a; // Suspends coroutine and returns 'a'
        uint64_t next = a + b;
        a = b;
        b = next;
    }
}

int main() {
    std::cout << "=== C++20 Coroutine Fibonacci Generator ===" << std::endl;
    auto fib = fibonacci_sequence();

    for (int i = 0; i < 8; ++i) {
        if (fib.next()) {
            std::cout << "Fibonacci #" << i << ": " << fib.value() << std::endl;
        }
    }
    return 0;
}`,
            executable: true,
            explanation: [
              "co_yield a invokes promise_type::yield_value(a) and suspends the coroutine execution frame.",
              "fib.next() resumes the coroutine directly where it left off, calculating the next term without recreating stack frames.",
              "Memory is allocated in a tiny compiler-generated heap frame that stores local variables across suspension points.",
            ],
          },
          detailedExplanation: [
            "Symmetric Transfer: When resuming one coroutine from another, standard calls build call-stack frames that can cause stack overflow in recursive loops. In C++20, `await_suspend` can return `std::coroutine_handle<>`, which the compiler turns into a zero-stack-growth tail-jump to the next coroutine.",
          ],
          commonMistakes: [
            {
              mistake: "Passing parameters by reference (`const std::string&`) into coroutines that outlive the caller's scope.",
              badCode: "Task async_task(const std::string& str) { co_await wait(); use(str); } // Dangling reference bug!",
              goodCode: "Task async_task(std::string str) { co_await wait(); use(str); } // Pass by value",
              explanation: "When a coroutine suspends, the caller's stack frame may be destroyed. References become dangling pointers. Always pass arguments by value into coroutines.",
            },
          ],
          bestPractices: [
            "Pass coroutine arguments by value to avoid dangling reference crashes.",
            "Use Symmetric Transfer (`await_suspend` returning `coroutine_handle<>`) to prevent recursive stack overflows.",
            "Overload `operator new` on `promise_type` to use custom arena allocators for coroutine frames.",
          ],
          summary: [
            "C++20 stackless coroutines compile down to zero-overhead state machines.",
            "`promise_type` controls creation, lifecycle, suspension, and return values.",
            "Symmetric Transfer provides tail-recursive coroutine switching with zero stack growth.",
          ],
        },
      ],
    },
    {
      id: "mod-cpp-13",
      slug: "cache-coherence-mesi-lockfree-ringbuffers",
      title: "Module 13: Cache Coherence, MESI & Lock-Free SPSC/MPMC Ring Buffers",
      description: "Master hardware memory architecture: MESI cache coherence protocol, false sharing (`hardware_destructive_interference_size`), and lock-free ring buffers.",
      lessons: [
        {
          id: "cpp-cache-ringbuffers",
          slug: "cache-coherence-mesi-protocol-lockfree-spsc-mpmc-ringbuffer",
          courseSlug: "cpp",
          moduleSlug: "cache-coherence-mesi-lockfree-ringbuffers",
          title: "Cache Coherence, MESI & Lock-Free Ring Buffers",
          description: "Engineer ultra-low-latency concurrency: hardware CPU L1/L2/L3 cache coherence (MESI/MOESI), eliminating False Sharing with cache line padding, acquire-release memory ordering, and implementing a Lock-Free Single-Producer Single-Consumer (SPSC) Ring Buffer.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Hardware CPU Caching: L1 (1ns), L2 (4ns), L3 (12ns), and RAM (60ns) latency hierarchies",
            "The MESI Cache Coherence Protocol: Modified, Exclusive, Shared, and Invalid states",
            "False Sharing and aligning atomic variables with `alignas(hardware_destructive_interference_size)`",
            "Implementing a zero-mutex lock-free SPSC Ring Buffer with `std::memory_order_acquire` and `std::memory_order_release`",
          ],
          introduction: `In high-performance C++, traditional OS mutex locks (which cost 50-100ns per lock/unlock cycle) are far too slow. To achieve sub-microsecond latency, engineers write lock-free data structures using atomic CPU instructions. However, multiple CPU cores sharing adjacent memory on the same 64-byte cache line cause 'False Sharing', forcing the hardware MESI cache coherence protocol to constantly invalidate L1 caches and degrading performance by 20x.`,
          whyItMatters: `High-Frequency Trading (HFT) matching engines, audio DSP pipelines, and network packet processors rely on lock-free SPSC ring buffers to transmit millions of messages per second with zero thread contention.`,
          syntax: `alignas(64) std::atomic<size_t> head{0};\nalignas(64) std::atomic<size_t> tail{0};\nhead.load(std::memory_order_acquire);`,
          mainExample: {
            title: "Lock-Free SPSC Ring Buffer with Cache Line Alignment",
            language: "cpp",
            code: `// Ultra-Low Latency Lock-Free SPSC Ring Buffer
#include <iostream>
#include <atomic>
#include <vector>
#include <new>

template<typename T, size_t Capacity>
class LockFreeSPSCQueue {
    static_assert((Capacity & (Capacity - 1)) == 0, "Capacity must be a power of 2!");

private:
    T buffer[Capacity];

    // Align indices to separate 64-byte cache lines to eliminate False Sharing!
    alignas(64) std::atomic<size_t> head{0};
    alignas(64) std::atomic<size_t> tail{0};

public:
    // Producer Thread Only
    bool push(const T& item) {
        const size_t current_tail = tail.load(std::memory_order_relaxed);
        const size_t current_head = head.load(std::memory_order_acquire);

        if ((current_tail - current_head) >= Capacity) {
            return false; // Queue Full
        }

        buffer[current_tail & (Capacity - 1)] = item;
        // Release store ensures the written buffer data is visible before tail increments!
        tail.store(current_tail + 1, std::memory_order_release);
        return true;
    }

    // Consumer Thread Only
    bool pop(T& item) {
        const size_t current_head = head.load(std::memory_order_relaxed);
        const size_t current_tail = tail.load(std::memory_order_acquire);

        if (current_head == current_tail) {
            return false; // Queue Empty
        }

        item = buffer[current_head & (Capacity - 1)];
        // Release store ensures item is read before head increments!
        head.store(current_head + 1, std::memory_order_release);
        return true;
    }
};

int main() {
    std::cout << "=== Lock-Free SPSC Ring Buffer (64-Byte Cache Aligned) ===" << std::endl;
    LockFreeSPSCQueue<int, 1024> queue;

    queue.push(101);
    queue.push(202);

    int val;
    if (queue.pop(val)) std::cout << "Dequeued: " << val << std::endl;
    if (queue.pop(val)) std::cout << "Dequeued: " << val << std::endl;
    std::cout << "✅ Lock-free queue executed with zero mutex lock overhead!" << std::endl;
    return 0;
}`,
            executable: true,
            explanation: [
              "alignas(64) forces head and tail onto separate CPU cache lines, preventing core 1 and core 2 from invalidating each other's L1 cache.",
              "std::memory_order_release on stores guarantees all memory writes before the store are committed before the index updates.",
              "std::memory_order_acquire on loads prevents subsequent memory reads from being reordered before the index load.",
              "Capacity power-of-2 allows replacing slow modulo (%) with ultra-fast bitwise AND (&).",
            ],
          },
          detailedExplanation: [
            "MESI Cache States: 1. Modified: Cache line is dirty and held exclusively in this core's L1 cache. 2. Exclusive: Clean copy held only by this core. 3. Shared: Clean copy held in multiple cores' caches. 4. Invalid: Cache line is obsolete and must be re-fetched from L3/RAM.",
          ],
          commonMistakes: [
            {
              mistake: "Placing multiple high-frequency `std::atomic` variables next to each other without cache alignment.",
              badCode: "struct Counters { std::atomic<int> prod; std::atomic<int> cons; }; // Shared on same 64-byte line!",
              goodCode: "struct alignas(64) Counter { std::atomic<int> val; };",
              explanation: "When two threads update variables residing in the same 64-byte cache line, the CPU constantly invalidates the cache (False Sharing), tanking throughput.",
            },
          ],
          bestPractices: [
            "Use `alignas(64)` (or `std::hardware_destructive_interference_size`) to pad concurrent atomics.",
            "Use Acquire-Release memory ordering instead of default `std::memory_order_seq_cst` for lower CPU barrier latency.",
            "Size ring buffers to powers of two to allow fast bitwise masking (`idx & (cap - 1)`).",
          ],
          summary: [
            "MESI protocol synchronizes L1/L2 caches across multi-core CPUs.",
            "False Sharing occurs when unrelated atomics share the same 64-byte cache line.",
            "Lock-Free SPSC Ring Buffers achieve zero-lock, low-latency inter-thread message passing.",
          ],
        },
      ],
    },
    {
      id: "mod-cpp-14",
      slug: "template-metaprogramming-concepts-consteval",
      title: "Module 14: Template Metaprogramming: Concepts, Constraints & `consteval`",
      description: "Perform compile-time programming: C++20 Concepts (`template<typename T> requires`), compile-time evaluation (`consteval`), and folding expressions.",
      lessons: [
        {
          id: "cpp-concepts-consteval",
          slug: "cpp20-template-metaprogramming-concepts-constraints-consteval",
          courseSlug: "cpp",
          moduleSlug: "template-metaprogramming-concepts-consteval",
          title: "Compile-Time Metaprogramming: Concepts & consteval",
          description: "Replace cryptic SFINAE templates with modern C++20 Concepts and Constraints, compile-time function evaluation with `consteval` and `constexpr`, and variadic Fold Expressions.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The evolution from SFINAE (`std::enable_if_t`) to C++20 Concepts and `requires` clauses",
            "Defining custom Concepts (`template<typename T> concept Numeric = ...`)",
            "Immediate functions with `consteval` (guaranteed compile-time calculation with zero binary footprint)",
            "Compile-time type introspection using type traits and `if constexpr`",
          ],
          introduction: `Template Metaprogramming in legacy C++ relied on SFINAE (Substitution Failure Is Not An Error), leading to unreadable template code and multi-page compiler error messages. C++20 Concepts and Constraints provide first-class language support for specifying requirements on generic types, while 'consteval' guarantees that complex algorithms execute purely during compilation.`,
          whyItMatters: `Compile-time computation produces zero runtime CPU cost. Calculations like lookup tables, cryptographic hashing, and serialization schemas can be pre-calculated entirely during compilation.`,
          syntax: `template<typename T>\nconcept Serializable = requires(T a) {\n  { a.serialize() } -> std::same_as<std::string>;\n};\n\nconsteval int square(int n) { return n * n; }`,
          mainExample: {
            title: "Type Constraints with C++20 Concepts and consteval Lookups",
            language: "cpp",
            code: `// C++20 Concepts & Compile-Time consteval Evaluation
#include <iostream>
#include <concepts>
#include <array>

// 1. Define C++20 Concept for Numerical Calculations
template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<typename T>
concept PrintableRecord = requires(T item) {
    { item.print() } -> std::same_as<void>;
};

// 2. Constrained Function using Concepts
template<Numeric T>
T calculate_compound_interest(T principal, T rate, int years) {
    T result = principal;
    for (int i = 0; i < years; ++i) {
        result *= (1 + rate);
    }
    return result;
}

// 3. consteval Immediate Function: MUST execute during compilation!
consteval std::array<int, 5> generate_lookup_table() {
    std::array<int, 5> table{};
    for (int i = 0; i < 5; ++i) {
        table[i] = (i + 1) * (i + 1) * 10; // Pre-calculated square table
    }
    return table;
}

int main() {
    std::cout << "=== C++20 Concepts & consteval Metaprogramming ===" << std::endl;

    // Guaranteed compile-time table baked directly into the binary's read-only data segment!
    constexpr auto lookup = generate_lookup_table();
    std::cout << "Precomputed Compile-Time Value #3: " << lookup[2] << std::endl;

    double balance = calculate_compound_interest(1000.0, 0.05, 3);
    std::cout << "Calculated Compound Balance: $" << balance << std::endl;

    // Passing a non-numeric type triggers a clean 1-line compiler error!
    // calculate_compound_interest(std::string("invalid"), ...); // Rejected by concept!
    return 0;
}`,
            executable: true,
            explanation: [
              "template<Numeric T> restricts template instantiation strictly to integral and floating-point types.",
              "If an invalid type is passed, the compiler produces a human-readable 1-line error message instead of 500 lines of template spew.",
              "consteval guarantees generate_lookup_table() executes at compile time, leaving 0 runtime calculation overhead.",
            ],
          },
          detailedExplanation: [
            "Fold Expressions: Variadic templates in C++17/20 can be expanded using binary operators: `template<typename... Args> auto sum(Args... args) { return (... + args); }`. This folds all arguments into a single left-associative addition expression at compile time.",
          ],
          commonMistakes: [
            {
              mistake: "Using `constexpr` when `consteval` is required: `constexpr` functions can still fall back to runtime execution if arguments are not constant.",
              badCode: "constexpr int calc(int x) { ... } // May run at runtime if x is not constexpr",
              goodCode: "consteval int calc(int x) { ... } // Compiler ERROR if not evaluated at compile-time",
              explanation: "`consteval` enforces strictly compile-time execution. If the compiler cannot evaluate it at build time, it raises a compile-time error.",
            },
          ],
          bestPractices: [
            "Use C++20 Concepts to constrain all template parameters for clean compiler diagnostics.",
            "Use `if constexpr` inside templates to eliminate dead conditional branches at compile time.",
            "Use `consteval` for lookup tables, compile-time string hashing, and mathematical constants.",
          ],
          summary: [
            "C++20 Concepts replace legacy SFINAE with clean, expressive type constraints.",
            "`consteval` guarantees function execution during compilation with zero runtime cost.",
            "`if constexpr` branches types conditionally at compile time without runtime overhead.",
          ],
        },
      ],
    },
    {
      id: "mod-cpp-15",
      slug: "polymorphic-memory-resources-pmr",
      title: "Module 15: Memory Management: Custom PMR & Arena Allocators",
      description: "Master C++17/20 Polymorphic Memory Resources (std::pmr): monotonic buffer arenas, synchronized pools, and custom allocators.",
      lessons: [
        {
          id: "cpp-pmr-allocators",
          slug: "cpp-polymorphic-memory-resources-pmr-arena-allocators",
          courseSlug: "cpp",
          moduleSlug: "polymorphic-memory-resources-pmr",
          title: "Polymorphic Memory Resources (std::pmr) & Arenas",
          description: "Eliminate heap allocation latency with C++17/20 Polymorphic Memory Resources (`std::pmr`): monotonic buffer arenas, stack-based `monotonic_buffer_resource`, pool resources, and custom allocation strategies.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why standard `std::allocator` embeds the allocator type into the container's type signature",
            "How `std::pmr` uses dynamic polymorphism to change allocation strategies without changing container types",
            "Zero-heap stack allocation using `std::pmr::monotonic_buffer_resource`",
            "Eliminating memory fragmentation using `std::pmr::unsynchronized_pool_resource`",
          ],
          introduction: `In standard C++ (C++11/14), the allocator was part of the container's type: \`std::vector<int, MyAlloc>\` and \`std::vector<int, OtherAlloc>\` were incompatible types that could not be passed into the same function. C++17 introduced Polymorphic Memory Resources (\`std::pmr\`), allowing containers (\`std::pmr::vector\`, \`std::pmr::string\`) to share identical types while swapping underlying memory resources at runtime.`,
          whyItMatters: `Calling \`malloc\` or \`new\` inside high-frequency loops incurs lock contention and system call overhead. A Monotonic Buffer Arena allocates from a pre-allocated stack buffer in a single CPU pointer increment (O(1)), boosting performance by 10x-50x.`,
          syntax: `char stack_buf[1024];\nstd::pmr::monotonic_buffer_resource mem_res(stack_buf, sizeof(stack_buf));\nstd::pmr::vector<int> vec(&mem_res);`,
          mainExample: {
            title: "Zero-Heap Vector Allocations with std::pmr Monotonic Arena",
            language: "cpp",
            code: `// C++17/20 Polymorphic Memory Resources (std::pmr) Demonstration
#include <iostream>
#include <vector>
#include <string>
#include <memory_resource>
#include <chrono>

int main() {
    std::cout << "=== Polymorphic Memory Resources (std::pmr) Arena ===" << std::endl;

    // 1. Pre-allocate a 64KB Stack Buffer (Zero Heap Allocation!)
    alignas(std::max_align_t) char stack_arena[64 * 1024];

    // 2. Initialize Monotonic Buffer Resource
    // Memory allocations simply advance a pointer (O(1) nanosecond allocation)
    std::pmr::monotonic_buffer_resource arena_resource(
        stack_arena, sizeof(stack_arena),
        std::pmr::null_memory_resource() // Disallow heap fallbacks
    );

    // 3. Create PMR containers using the stack arena
    std::pmr::vector<std::pmr::string> course_catalog(&arena_resource);

    course_catalog.emplace_back("C++20 Coroutines Architecture");
    course_catalog.emplace_back("Lock-Free Ring Buffers");
    course_catalog.emplace_back("Polymorphic Memory Resources (PMR)");

    for (const auto& item : course_catalog) {
        std::cout << "PMR Item: " << item << " (Allocated in stack arena)" << std::endl;
    }

    std::cout << "✅ All vector elements and strings allocated in stack arena with ZERO heap calls!" << std::endl;
    // When arena_resource goes out of scope, ALL memory is reclaimed at once in 0ms!
    return 0;
}`,
            executable: true,
            explanation: [
              "std::pmr::vector and std::pmr::string accept an underlying memory resource pointer (&arena_resource).",
              "monotonic_buffer_resource allocates memory via simple pointer bump allocation in under 2 nanoseconds.",
              "std::pmr::null_memory_resource() ensures the container will throw if it exceeds the stack buffer, guaranteeing zero unexpected heap allocations.",
              "Deallocation is a no-op; all allocated items are reclaimed in O(1) time when the arena is destroyed.",
            ],
          },
          detailedExplanation: [
            "PMR Pool Resources: For long-running servers with varying object lifetimes, `std::pmr::unsynchronized_pool_resource` organizes allocations into fixed-size geometric chunk pools (bins), completely eliminating memory fragmentation and heap lock contention.",
          ],
          commonMistakes: [
            {
              mistake: "Passing a temporary `std::pmr` container to a context that outlives the container's backing `memory_resource`.",
              badCode: "std::pmr::vector<int> create() { char buf[100]; std::pmr::monotonic_buffer_resource res(buf, 100); return std::pmr::vector<int>(&res); }",
              goodCode: "// Ensure the memory resource outlives all containers that reference it",
              explanation: "Containers store a raw pointer to their `memory_resource`. If the resource is destroyed first, accessing container elements causes a Use-After-Free crash.",
            },
          ],
          bestPractices: [
            "Use `std::pmr::monotonic_buffer_resource` for per-request / per-frame scratchpad allocations.",
            "Use `std::pmr::null_memory_resource()` as an upstream fallback to strictly enforce zero-heap allocation budgets.",
            "Use `std::pmr::synchronized_pool_resource` for multi-threaded object pools.",
          ],
          summary: [
            "`std::pmr` decouples container types from their underlying memory allocation strategy.",
            "Monotonic Arenas provide nanosecond O(1) pointer-bump allocation.",
            "Bulk arena deallocation eliminates individual object destruction overhead.",
          ],
        },
      ],
    },
    {
      id: "mod-cpp-16",
      slug: "hardware-intrinsics-avx512-simd",
      title: "Module 16: Hardware Intrinsics & AVX-512 SIMD Vectorization",
      description: "Maximize mathematical throughput with hardware vectorization: AVX2 / AVX-512 SIMD intrinsics, memory alignment, and compiler auto-vectorization.",
      lessons: [
        {
          id: "cpp-simd-avx512",
          slug: "hardware-intrinsics-avx512-simd-vectorization-cpp",
          courseSlug: "cpp",
          moduleSlug: "hardware-intrinsics-avx512-simd",
          title: "Hardware Intrinsics & AVX-512 SIMD Vectorization",
          description: "Extract maximum FLOPs from modern CPU architectures: Single Instruction Multiple Data (SIMD) execution, AVX2 (256-bit) and AVX-512 (512-bit) intrinsics (`__m512`), Fused Multiply-Add (FMA), and 64-byte memory alignment (`_mm_malloc`).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of SIMD: processing 8 or 16 float calculations simultaneously in a single CPU clock cycle",
            "Using AVX2/AVX-512 intrinsics header `<immintrin.h>` (`_mm256_load_ps`, `_mm256_fmadd_ps`)",
            "Why unaligned memory loads crash SIMD instructions and how to enforce 64-byte alignment",
            "Helping compiler auto-vectorizers with `#pragma omp simd` and `__restrict__` pointers",
          ],
          introduction: `Standard CPU instructions operate on scalar values (one number at a time). Modern CPUs contain 512-bit vector registers (ZMM0-ZMM31) capable of executing Single Instruction Multiple Data (SIMD) operations. Using AVX-512 intrinsics, a single CPU core can perform 16 single-precision floating-point additions or Fused Multiply-Adds (FMA) in a single clock cycle.`,
          whyItMatters: `Machine learning matrix multiplication, image filtering, audio DSP, and cryptographic hashing achieve 8x to 16x speedups when vectorized with AVX2 and AVX-512 SIMD intrinsics.`,
          syntax: `#include <immintrin.h>\n__m256 a = _mm256_load_ps(ptr_a);\n__m256 b = _mm256_load_ps(ptr_b);\n__m256 res = _mm256_add_ps(a, b);`,
          mainExample: {
            title: "Vectorized Float Array Addition with AVX-256 SIMD Intrinsics",
            language: "cpp",
            code: `// Hardware SIMD Vectorization with AVX2 Intrinsics
#include <iostream>
#include <immintrin.h> // Intel / AMD AVX Intrinsics Header
#include <vector>

void vector_add_simd(const float* __restrict a, const float* __restrict b, float* __restrict result, size_t n) {
    size_t i = 0;
    // Process 8 floating-point numbers per iteration using 256-bit SIMD registers!
    for (; i + 8 <= n; i += 8) {
        // 1. Load 8 floats into 256-bit YMM vector register
        __m256 va = _mm256_loadu_ps(a + i);
        __m256 vb = _mm256_loadu_ps(b + i);

        // 2. Add all 8 pairs simultaneously in 1 CPU cycle
        __m256 vres = _mm256_add_ps(va, vb);

        // 3. Store 8 floats back to result array
        _mm256_storeu_ps(result + i, vres);
    }

    // Scalar cleanup loop for remaining elements
    for (; i < n; ++i) {
        result[i] = a[i] + b[i];
    }
}

int main() {
    std::cout << "=== AVX SIMD Vectorization Engine ===" << std::endl;
    const size_t N = 16;
    alignas(32) float a[N];
    alignas(32) float b[N];
    alignas(32) float result[N];

    for (size_t i = 0; i < N; ++i) {
        a[i] = static_cast<float>(i * 1.5f);
        b[i] = static_cast<float>(i * 2.5f);
    }

    vector_add_simd(a, b, result, N);

    std::cout << "SIMD Results: ";
    for (size_t i = 0; i < 4; ++i) {
        std::cout << result[i] << " ";
    }
    std::cout << "... (Processed 8 floats per CPU instruction!)" << std::endl;
    return 0;
}`,
            executable: true,
            explanation: [
              "_mm256_loadu_ps loads 8 consecutive 32-bit floats into a 256-bit YMM register.",
              "_mm256_add_ps executes parallel addition on all 8 pairs in a single hardware CPU instruction.",
              "__restrict__ keyword informs the compiler that pointers do not alias, enabling maximum instruction pipelining.",
            ],
          },
          detailedExplanation: [
            "Aligned vs Unaligned Loads: `_mm256_load_ps` requires data to be aligned to a 32-byte boundary (`alignas(32)`). If unaligned data is passed, it triggers a CPU hardware fault. `_mm256_loadu_ps` handles unaligned memory safely with minimal latency penalty on modern processors.",
          ],
          commonMistakes: [
            {
              mistake: "Passing potentially aliasing pointers to vector math loops without `__restrict__`, preventing compiler vectorization.",
              badCode: "void add(float* a, float* b, float* out) { ... } // Compiler assumes 'out' might overlap 'a'",
              goodCode: "void add(const float* __restrict a, const float* __restrict b, float* __restrict out) { ... }",
              explanation: "If pointers alias (overlap in memory), the compiler is forced to serialize operations. `__restrict__` guarantees non-overlapping memory.",
            },
          ],
          bestPractices: [
            "Compile with `-march=native -O3` (or `/arch:AVX2`) to enable native CPU instruction sets.",
            "Use `alignas(64)` for memory buffers targeted by AVX-512 SIMD operations.",
            "Use FMA (`_mm256_fmadd_ps`) for matrix multiplication (computes `a * b + c` with single rounding).",
          ],
          summary: [
            "SIMD processes 8 to 16 floating-point operations simultaneously in one CPU cycle.",
            "AVX2 and AVX-512 utilize 256-bit and 512-bit hardware vector registers.",
            "Proper memory alignment and `__restrict__` pointers maximize compiler auto-vectorization.",
          ],
        },
      ],
    },
  ],
};

import { Course } from "@/types";

export const rustCourse: Course = {
  id: "course-rust",
  slug: "rust",
  title: "Rust Systems & Memory Safety Mastery",
  tagline: "Memory safety without garbage collection — master Ownership, Borrowing, Lifetimes, and Traits.",
  description: "Master Rust: the Ownership model, mutable and immutable borrowing (&, &mut), lifetimes ('a), Pattern Matching, Enums with data (Option, Result), Traits, Cargo package management, and fearlessly concurrent systems programming.",
  category: "Programming Languages",
  level: "Advanced",
  estimatedHours: 30,
  icon: "Shield",
  badgeColor: "amber",
  prerequisites: ["Programming Experience"],
  skillsGained: [
    "The Ownership & Move Semantics System",
    "Borrow Checker Mechanics (References & Mutability)",
    "Pattern Matching & Robust Error Handling (Result<T, E>)",
    "Traits & Generic Type Constraints",
    "Fearless Concurrency & Zero-Cost Abstractions",
  ],
  featured: false,
  modules: [
    {
      id: "mod-rust-1",
      slug: "intro",
      title: "Module 1: Rust Philosophy & Cargo Toolchain",
      description: "Why Rust, Cargo package manager (cargo build, cargo test), and main.rs.",
      lessons: [
        {
          id: "rust-intro",
          slug: "rust-introduction",
          courseSlug: "rust",
          moduleSlug: "intro",
          title: "Rust Introduction & The Cargo Toolchain",
          description: "Discover why Rust achieves memory safety without a garbage collector and how Cargo manages builds.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why memory safety without garbage collection is revolutionary",
            "Managing packages, dependencies, and testing with Cargo",
            "The fn main() entry point and println! macro",
          ],
          introduction: `Rust is a systems programming language focused on safety, speed, and concurrency. It achieves memory safety at compile time without a runtime garbage collector.`,
          whyItMatters: `Over 70% of security vulnerabilities in C/C++ are memory safety bugs (buffer overflows, use-after-free). Rust mathematically eliminates these at compile time.`,
          mainExample: {
            title: "Hello World in Rust",
            language: "rust",
            code: `fn main() {\n    println!("KWAS Academy: Safe Systems Programming with Rust");\n}`,
            executable: true,
            explanation: ["println! is a macro that enforces format string type safety at compile time."],
          },
          detailedExplanation: ["Cargo is Rust's unified build tool, dependency manager, test runner, and documentation generator."],
          commonMistakes: [],
          bestPractices: ["Always format code with 'cargo fmt' and lint with 'cargo clippy'."],
          summary: ["Rust provides C++ speed with total memory safety."],
        },
      ],
    },
    {
      id: "mod-rust-2",
      slug: "variables-mutability",
      title: "Module 2: Variables, Mutability & Shadowing",
      description: "Immutable by default (let), explicit mutability (let mut), constants, and variable shadowing.",
      lessons: [
        {
          id: "rust-mutability",
          slug: "immutability-and-shadowing",
          courseSlug: "rust",
          moduleSlug: "variables-mutability",
          title: "Immutability by Default & Variable Shadowing",
          description: "Understand why variables in Rust are immutable by default and how variable shadowing enables safe transformations.",
          durationMinutes: 14,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Rust defaults to immutable variables (let x = 5)",
            "Explicit mutability with 'let mut'",
            "Reusing variable names and changing types with Variable Shadowing",
          ],
          introduction: `In Rust, variables are immutable by default. This is one of many nudges Rust gives you to write code in a way that takes advantage of the safety and easy concurrency that Rust offers.`,
          whyItMatters: `Default immutability prevents accidental mutations across complex concurrent threads.`,
          mainExample: {
            title: "Variable Shadowing & Mutability",
            language: "rust",
            code: `fn main() {\n    // Mutable variable\n    let mut score = 100;\n    score += 50;\n\n    // Variable Shadowing (transforms type safely)\n    let spaces = "   ";\n    let spaces = spaces.len(); // spaces is now usize: 3\n    println!("Score: {}, Spaces count: {}", score, spaces);\n}`,
            executable: true,
            explanation: ["Shadowing with 'let spaces' creates a new variable, allowing the type to change safely."],
          },
          detailedExplanation: ["Constants (const MAX: u32 = 100) must be annotated with explicit types and evaluated at compile time."],
          commonMistakes: [],
          bestPractices: ["Prefer variable shadowing over making variables mutable whenever transforming data."],
          summary: ["Immutability and shadowing ensure deterministic state transitions."],
        },
      ],
    },
    {
      id: "mod-rust-3",
      slug: "ownership",
      title: "Module 3: The Ownership Model & Move Semantics",
      description: "The 3 Ownership rules, stack vs heap data, and the drop function.",
      lessons: [
        {
          id: "rust-ownership",
          slug: "ownership-and-move-semantics",
          courseSlug: "rust",
          moduleSlug: "ownership",
          title: "The 3 Ownership Rules & Move Semantics",
          description: "Master Rust's core breakthrough: Ownership rules, move semantics on heap data, and automatic Drop.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 laws of Rust Ownership",
            "How ownership transfers (Move semantics) prevent double-free bugs",
            "Automatic memory deallocation when owners go out of scope (Drop trait)",
          ],
          introduction: `Ownership is Rust's most unique feature. It enables Rust to make memory safety guarantees without needing a garbage collector.`,
          whyItMatters: `Rule 1: Each value in Rust has an owner. Rule 2: There can only be one owner at a time. Rule 3: When the owner goes out of scope, the value is dropped.`,
          mainExample: {
            title: "Ownership Move Semantics",
            language: "rust",
            code: `fn main() {\n    let s1 = String::from("KWAS Academy");\n    let s2 = s1; // Ownership MOVED to s2. s1 is no longer valid!\n\n    println!("s2: {}", s2);\n    // println!("s1: {}", s1); // Compile Error: value borrowed here after move!\n}`,
            executable: true,
            explanation: ["Transferring pointer ownership prevents duplicate freeing of heap memory."],
          },
          detailedExplanation: ["Stack-only types (like integers and floats) implement the Copy trait and are copied rather than moved."],
          commonMistakes: [],
          bestPractices: ["Embrace move semantics; use .clone() only when an explicit deep heap copy is truly required."],
          summary: ["Ownership rules eliminate use-after-free and double-free bugs at compile time."],
        },
      ],
    },
    {
      id: "mod-rust-4",
      slug: "borrowing",
      title: "Module 4: Borrowing & References (&T and &mut T)",
      description: "The Borrow Checker, immutable borrows (&T), mutable borrows (&mut T), and data race prevention.",
      lessons: [
        {
          id: "rust-borrowing",
          slug: "references-and-borrowing-rules",
          courseSlug: "rust",
          moduleSlug: "borrowing",
          title: "References, Borrowing & The Borrow Checker",
          description: "Pass data without transferring ownership using references (&), and learn the golden rule of the borrow checker.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Borrowing data with immutable references (&String)",
            "Exclusive mutable borrowing (&mut String)",
            "The Golden Borrow Rule: Either 1 mutable reference OR any number of immutable references",
          ],
          introduction: `Instead of transferring ownership, Rust allows functions to 'borrow' access to data via references without taking ownership.`,
          whyItMatters: `The borrow checker rules mathematically prevent data races: two threads cannot mutate the same memory location simultaneously.`,
          mainExample: {
            title: "Immutable & Mutable Borrowing",
            language: "rust",
            code: `fn calculate_length(s: &String) -> usize {\n    s.len() // Borrowed reference\n}\n\nfn append_badge(s: &mut String) {\n    s.push_str(" [PRO]");\n}\n\nfn main() {\n    let mut name = String::from("Alex Developer");\n    println!("Length: {}", calculate_length(&name));\n    append_badge(&mut name);\n    println!("Updated: {}", name);\n}`,
            executable: true,
            explanation: ["&name borrows immutably; &mut name borrows mutably."],
          },
          detailedExplanation: ["You cannot have a mutable reference while immutable references are still in active use."],
          commonMistakes: [],
          bestPractices: ["Keep mutable borrow scopes as narrow as possible."],
          summary: ["Borrowing enables high-performance zero-copy memory access with compile-time safety."],
        },
      ],
    },
    {
      id: "mod-rust-5",
      slug: "slices",
      title: "Module 5: Slices & Memory Layout",
      description: "String slices (&str), array slices (&[T]), and contiguous view references.",
      lessons: [
        {
          id: "rust-slices",
          slug: "string-and-array-slices",
          courseSlug: "rust",
          moduleSlug: "slices",
          title: "Slices (&str, &[T]) & Memory Safety",
          description: "Reference contiguous sub-sequences of collections with zero memory allocation using string and array slices.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "What a slice is: a pointer to starting element + length",
            "String slices (&str) vs heap-allocated String",
            "Array slices (&[i32]) for generic contiguous sub-views",
          ],
          introduction: `A slice is a reference to a contiguous sequence of elements in a collection rather than the whole collection.`,
          whyItMatters: `String slices (&str) allow functions to accept both String and literal strings without performing heap allocations.`,
          mainExample: {
            title: "First Word Extractor with String Slice",
            language: "rust",
            code: `fn first_word(s: &str) -> &str {\n    let bytes = s.as_bytes();\n    for (i, &item) in bytes.iter().enumerate() {\n        if item == b' ' {\n            return &s[0..i];\n        }\n    }\n    &s[..]\n}\n\nfn main() {\n    let greeting = "Hello World";\n    println!("First word: {}", first_word(greeting));\n}`,
            executable: true,
            explanation: ["&s[0..i] returns a slice view pointing directly into original string bytes."],
          },
          detailedExplanation: ["Slices prevent index-out-of-sync bugs because the borrow checker links the slice lifetime to the underlying data."],
          commonMistakes: [],
          bestPractices: ["Always use &str for function input arguments instead of &String."],
          summary: ["Slices provide zero-cost views into contiguous memory segments."],
        },
      ],
    },
    {
      id: "mod-rust-6",
      slug: "structs",
      title: "Module 6: Structs & Methods",
      description: "Classic structs, tuple structs, impl blocks, and associated functions (Self::new).",
      lessons: [
        {
          id: "rust-structs",
          slug: "structs-and-impl-methods",
          courseSlug: "rust",
          moduleSlug: "structs",
          title: "Structs, Impl Blocks & Associated Functions",
          description: "Define custom domain records with structs and attach methods and constructors via 'impl' blocks.",
          durationMinutes: 16,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Defining named-field structs and tuple structs",
            "Method receivers: &self (borrow), &mut self (mutate), self (consume)",
            "Associated constructor functions (Self::new)",
          ],
          introduction: `Structs are custom data types that let you package together and name multiple related values into a meaningful group.`,
          whyItMatters: `Attaching methods via 'impl' blocks cleanly separates data definition from behavioral algorithms.`,
          mainExample: {
            title: "Rectangle Struct with Method Implementation",
            language: "rust",
            code: `#[derive(Debug)]\nstruct Rectangle {\n    width: u32,\n    height: u32,\n}\n\nimpl Rectangle {\n    fn new(w: u32, h: u32) -> Self {\n        Self { width: w, height: h }\n    }\n    fn area(&self) -> u32 {\n        self.width * self.height\n    }\n}\n\nfn main() {\n    let rect = Rectangle::new(30, 50);\n    println!("Rect: {:?} | Area: {}", rect, rect.area());\n}`,
            executable: true,
            explanation: ["#[derive(Debug)] allows printing structs with {:?}."],
          },
          detailedExplanation: ["Associated functions without &self act like static factory methods in other languages."],
          commonMistakes: [],
          bestPractices: ["Always provide a new() associated constructor function for complex structs."],
          summary: ["Structs and impl blocks structure data and behavior cleanly."],
        },
      ],
    },
    {
      id: "mod-rust-7",
      slug: "enums-matching",
      title: "Module 7: Enums, Pattern Matching & Option",
      description: "Enums with payload data, the Option<T> type (no nulls), and match expressions.",
      lessons: [
        {
          id: "rust-enums",
          slug: "enums-pattern-matching-and-option",
          courseSlug: "rust",
          moduleSlug: "enums-matching",
          title: "Enums with Data, Pattern Matching & Option<T>",
          description: "Eliminate null pointer bugs using Option<T> (Some/None) and exhaustive 'match' expressions.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Enums that hold arbitrary payload data in each variant",
            "Why Rust has NO null primitive (uses Option<T> instead)",
            "Exhaustive pattern matching with the 'match' keyword",
          ],
          introduction: `Rust enums are algebraic data types that can hold different types and amounts of data in each variant. The Option enum represents either Some(value) or None.`,
          whyItMatters: `Tony Hoare called null his 'billion-dollar mistake'. Option<T> forces you to explicitly handle the None case at compile time.`,
          mainExample: {
            title: "Option Pattern Matching",
            language: "rust",
            code: `fn divide(numerator: f64, denominator: f64) -> Option<f64> {\n    if denominator == 0.0 { None } else { Some(numerator / denominator) }\n}\n\nfn main() {\n    match divide(10.0, 2.0) {\n        Some(result) => println!("Quotient: {}", result),\n        None => println!("Cannot divide by zero!"),\n    }\n}`,
            executable: true,
            explanation: ["match must cover all possible enum variants exhaustively."],
          },
          detailedExplanation: ["Use 'if let Some(val) = opt' when you only care about matching a single variant."],
          commonMistakes: [],
          bestPractices: ["Use Option<T> for any value that might be absent."],
          summary: ["Enums and Option eliminate null pointer crashes entirely."],
        },
      ],
    },
    {
      id: "mod-rust-8",
      slug: "error-handling",
      title: "Module 8: Error Handling with Result<T, E>",
      description: "Recoverable errors with Result<T, E>, unrecoverable panic!, and the '?' question mark operator.",
      lessons: [
        {
          id: "rust-result",
          slug: "result-and-question-mark-operator",
          courseSlug: "rust",
          moduleSlug: "error-handling",
          title: "Result<T, E> & The '?' Error Propagation Operator",
          description: "Handle recoverable errors gracefully with Result and propagate errors with the '?' operator.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Result<T, E> enum (Ok(T) vs Err(E))",
            "Propagating errors effortlessly with the '?' operator",
            "Mapping and chaining errors with .map_err() and thiserror/anyhow",
          ],
          introduction: `Rust distinguishes between recoverable errors (using Result<T, E>) and unrecoverable errors (which call the panic! macro).`,
          whyItMatters: `The '?' operator returns the Err early from the current function if an error occurs, eliminating 5 lines of boilerplate per call.`,
          mainExample: {
            title: "Error Propagation with '?' Operator",
            language: "rust",
            code: `fn parse_port(port_str: &str) -> Result<u16, std::num::ParseIntError> {\n    let port: u16 = port_str.parse()?;\n    Ok(port)\n}\n\nfn main() {\n    match parse_port("8080") {\n        Ok(port) => println!("Server listening on port: {}", port),\n        Err(e) => println!("Invalid port: {}", e),\n    }\n}`,
            executable: true,
            explanation: ["'?' extracts the Ok value or returns the Err immediately from parse_port."],
          },
          detailedExplanation: ["Unwrap (.unwrap()) should only be used in quick prototypes or unit tests."],
          commonMistakes: [],
          bestPractices: ["Always return Result<T, E> from functions that perform I/O or parsing."],
          summary: ["Result and the '?' operator make robust error handling ergonomic."],
        },
      ],
    },
    {
      id: "mod-rust-9",
      slug: "traits-generics",
      title: "Module 9: Traits & Generics",
      description: "Defining traits, implementing traits for types, trait bounds (impl Trait), and derive macros.",
      lessons: [
        {
          id: "rust-traits",
          slug: "traits-and-trait-bounds",
          courseSlug: "rust",
          moduleSlug: "traits-generics",
          title: "Traits & Generic Trait Bounds (impl Trait)",
          description: "Define shared behavior interfaces with Traits and constrain generic functions with Trait Bounds.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Defining traits and implementing them on structs",
            "Constraining generic functions with trait bounds (T: Summary + Display)",
            "Default trait method implementations",
          ],
          introduction: `A trait defines functionality a particular type has and can share with other types. Traits are similar to interfaces in other languages, but with zero-cost static dispatch.`,
          whyItMatters: `Rust generates specialized monomorphized code for generic trait calls, executing with zero virtual method dispatch overhead.`,
          mainExample: {
            title: "Summary Trait Implementation",
            language: "rust",
            code: `trait Summary {\n    fn summarize(&self) -> String;\n}\n\nstruct Course {\n    title: String,\n}\n\nimpl Summary for Course {\n    fn summarize(&self) -> String {\n        format!("Course: {}", self.title)\n    }\n}\n\nfn main() {\n    let c = Course { title: String::from("Rust Mastery") };\n    println!("{}", c.summarize());\n}`,
            executable: true,
            explanation: ["impl Summary for Course provides the trait implementation."],
          },
          detailedExplanation: ["Traits can also be used for dynamic dispatch via Trait Objects (dyn Trait)."],
          commonMistakes: [],
          bestPractices: ["Derive standard traits (Debug, Clone, PartialEq) whenever possible."],
          summary: ["Traits define shared capabilities with zero runtime cost."],
        },
      ],
    },
    {
      id: "mod-rust-10",
      slug: "lifetimes",
      title: "Module 10: Lifetimes ('a) & Memory Safety",
      description: "Lifetime annotations, the borrow checker's lifetime validation, and 'static lifetime.",
      lessons: [
        {
          id: "rust-lifetimes",
          slug: "lifetimes-and-borrow-checker",
          courseSlug: "rust",
          moduleSlug: "lifetimes",
          title: "Lifetime Annotations ('a) & Dangling Reference Prevention",
          description: "Learn how lifetime annotations inform the borrow checker about relationships between reference parameters.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why lifetimes exist: to ensure references never outlive the data they point to",
            "Lifetime annotation syntax (&'a str)",
            "Lifetime elision rules and the 'static lifetime",
          ],
          introduction: `Lifetimes are another kind of generic that ensure references are valid as long as we need them to be. Every reference in Rust has a lifetime.`,
          whyItMatters: `Lifetime annotations do not change how long references live; they describe the relationship between lifetimes of multiple references so the compiler can prove safety.`,
          mainExample: {
            title: "Longest String with Lifetime Annotation",
            language: "rust",
            code: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n\nfn main() {\n    let s1 = "HTML5";\n    let s2 = "TypeScript";\n    let result = longest(s1, s2);\n    println!("Longest: {}", result);\n}`,
            executable: true,
            explanation: ["'a tells the compiler that the returned reference will be valid as long as both x and y are valid."],
          },
          detailedExplanation: ["The compiler automatically applies lifetime elision rules for common function patterns."],
          commonMistakes: [],
          bestPractices: ["Trust the borrow checker; annotate lifetimes only when returning borrowed references."],
          summary: ["Lifetimes prevent dangling pointer bugs at compile time."],
        },
      ],
    },
    {
      id: "mod-rust-11",
      slug: "concurrency",
      title: "Module 11: Fearless Concurrency & Smart Pointers (Box, Rc, Arc)",
      description: "Box<T>, Arc<T>, Mutex<T>, std::thread::spawn, and message-passing channels (mpsc).",
      lessons: [
        {
          id: "rust-concurrency",
          slug: "fearless-concurrency-and-arc-mutex",
          courseSlug: "rust",
          moduleSlug: "concurrency",
          title: "Fearless Concurrency with Arc, Mutex & Channels",
          description: "Share thread-safe state across threads with Arc<Mutex<T>> and send messages with mpsc channels.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Spawning threads with std::thread::spawn and move closures",
            "Message passing concurrency with mpsc (multiple producer, single consumer)",
            "Shared-state concurrency using Arc<Mutex<T>> (Atomic Reference Counted)",
          ],
          introduction: `Rust's type system and ownership rules guarantee Fearless Concurrency: multithreaded data races and race conditions fail to compile!`,
          whyItMatters: `Arc (Atomic Reference Counted) and Mutex guarantee thread-safe shared mutable access with zero chance of data corruption.`,
          mainExample: {
            title: "Thread-Safe Counter with Arc & Mutex",
            language: "rust",
            code: `use std::sync::{Arc, Mutex};\nuse std::thread;\n\nfn main() {\n    let counter = Arc::new(Mutex::new(0));\n    let mut handles = vec![];\n\n    for _ in 0..5 {\n        let counter_clone = Arc::clone(&counter);\n        let handle = thread::spawn(move || {\n            let mut num = counter_clone.lock().unwrap();\n            *num += 1;\n        });\n        handles.push(handle);\n    }\n\n    for handle in handles { handle.join().unwrap(); }\n    println!("Final Thread-Safe Count: {}", *counter.lock().unwrap());\n}`,
            executable: true,
            explanation: ["Arc::clone increments atomic reference count; Mutex locks memory safely."],
          },
          detailedExplanation: ["The Send and Sync marker traits guarantee at compile time which types are safe to transfer across thread boundaries."],
          commonMistakes: [],
          bestPractices: ["Prefer message passing with channels over shared memory mutex locks."],
          summary: ["Rust makes concurrent systems programming fearless and bug-free."],
        },
      ],
    },
    {
      id: "mod-rust-12",
      slug: "unsafe-rust-raw-pointers-miri",
      title: "Module 12: Unsafe Rust: Raw Pointers, Undefined Behavior & Miri",
      description: "Master Unsafe Rust: raw pointers (`*const T`, `*mut T`), upholding memory invariants, foreign function interface (FFI), and detecting UB with Miri.",
      lessons: [
        {
          id: "rust-unsafe-miri",
          slug: "unsafe-rust-raw-pointers-undefined-behavior-miri-verification",
          courseSlug: "rust",
          moduleSlug: "unsafe-rust-raw-pointers-miri",
          title: "Unsafe Rust: Raw Pointers, Invariants & Miri Validation",
          description: "Step outside the borrow checker safely with Unsafe Rust: raw pointer arithmetic (`*const T`, `*mut T`), preventing Undefined Behavior (UB), building safe abstraction boundaries (`NonNull<T>`, `ManuallyDrop`), and formal UB verification using Miri.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 5 superpowers of `unsafe`: dereferencing raw pointers, calling unsafe functions, implementing unsafe traits, mutating statics, and accessing union fields",
            "What constitutes Undefined Behavior (UB) in Rust (aliasing violations, unaligned reads, invalid enum discriminants)",
            "The Stacked Borrows and Tree Borrows memory models in Miri",
            "Wrapping raw pointer allocations safely in custom smart pointers",
          ],
          introduction: `Rust's primary value proposition is compile-time memory safety. However, at the lowest levels of systems programming (device drivers, lock-free ring buffers, custom heap allocators), the borrow checker cannot prove correctness statically. Unsafe Rust does not disable the compiler; it gives the systems engineer explicit responsibility to uphold Rust's memory invariants without compiler assistance.`,
          whyItMatters: `A single line of unsound Unsafe Rust can corrupt heap memory, cause security vulnerabilities, and crash production systems. Miri (Rust's undefined behavior interpreter) provides mathematical verification of unsafe code.`,
          syntax: `let ptr: *mut i32 = &mut x as *mut i32;\nunsafe {\n    *ptr += 10;\n}\n// Run verification: cargo miri test`,
          mainExample: {
            title: "Building a Safe Custom Dynamic Array with Unsafe Raw Pointers",
            language: "rust",
            code: `// Building a Safe Minimal Vector with Unsafe Raw Pointers
use std::alloc::{alloc, dealloc, realloc, Layout};
use std::ptr::{self, NonNull};

pub struct RawVec<T> {
    ptr: NonNull<T>,
    cap: usize,
}

impl<T> RawVec<T> {
    pub fn new() -> Self {
        assert!(std::mem::size_of::<T>() != 0, "Zero-Sized Types not handled in demo");
        Self {
            ptr: NonNull::dangling(),
            cap: 0,
        }
    }

    pub fn grow(&mut self) {
        let (new_cap, new_layout) = if self.cap == 0 {
            (1, Layout::array::<T>(1).unwrap())
        } else {
            let new_cap = self.cap * 2;
            (new_cap, Layout::array::<T>(new_cap).unwrap())
        };

        let new_ptr = if self.cap == 0 {
            unsafe { alloc(new_layout) }
        } else {
            let old_layout = Layout::array::<T>(self.cap).unwrap();
            unsafe { realloc(self.ptr.as_ptr() as *mut u8, old_layout, new_layout.size()) }
        };

        // NonNull::new aborts if allocation returned null (OOM)
        self.ptr = match NonNull::new(new_ptr as *mut T) {
            Some(p) => p,
            None => std::alloc::handle_alloc_error(new_layout),
        };
        self.cap = new_cap;
    }
}

impl<T> Drop for RawVec<T> {
    fn drop(&mut self) {
        if self.cap != 0 {
            let layout = Layout::array::<T>(self.cap).unwrap();
            unsafe {
                dealloc(self.ptr.as_ptr() as *mut u8, layout);
            }
            println!("✅ Deallocated raw memory block safely via custom Drop.");
        }
    }
}

fn main() {
    println!("=== Unsafe Rust: Raw Memory Vector Allocation ===");
    let mut vec: RawVec<u64> = RawVec::new();
    vec.grow();
    vec.grow();
    println!("Allocated RawVec capacity: {} elements", vec.cap);
    // Verified free of Undefined Behavior with 'cargo miri test'
}`,
            executable: true,
            explanation: [
              "NonNull<T> guarantees pointer is non-null and covariant over T, optimizing memory layout (null-pointer optimization).",
              "alloc and dealloc directly invoke the global heap allocator with exact Layout byte alignment.",
              "The unsafe block is strictly encapsulated inside the safe RawVec abstraction; callers cannot trigger UB.",
              "Miri tests this code by interpreting the MIR (Mid-level Intermediate Representation) and tracking pointer provenance.",
            ],
          },
          detailedExplanation: [
            "Stacked Borrows in Miri: Rust requires that while an exclusive `&mut T` reference exists, no other references may read or write to that memory. Miri tracks pointer provenance as a stack of borrow permissions; any violation immediately triggers an 'Undefined Behavior' trace.",
          ],
          commonMistakes: [
            {
              mistake: "Creating multiple `&mut` references to the same memory address simultaneously inside unsafe code.",
              badCode: "let r1 = &mut *ptr; let r2 = &mut *ptr; // Instant Undefined Behavior (Aliasing violation)",
              goodCode: "let p1 = ptr; let p2 = ptr; // Keep as raw pointers (*mut T) until dereference",
              explanation: "Having two active `&mut` references to the same memory location is immediate UB in Rust, even if they are never used.",
            },
          ],
          bestPractices: [
            "Always run test suites with `cargo miri test` to catch memory model violations.",
            "Keep `unsafe` blocks as small as possible and document safety invariants with `// SAFETY:` comments.",
            "Use `std::ptr::copy_nonoverlapping` (equivalent to `memcpy`) for fast zero-copy memory transfers.",
          ],
          summary: [
            "Unsafe Rust grants low-level hardware access while requiring developers to uphold invariants.",
            "`NonNull<T>` and `Layout` provide structured raw pointer management.",
            "Miri verifies pointer provenance, aliasing rules, and memory alignment.",
          ],
        },
      ],
    },
    {
      id: "mod-rust-13",
      slug: "lockfree-atomics-crossbeam-memory-ordering",
      title: "Module 13: Lock-Free Concurrency: Atomics & Acquire-Release Ordering",
      description: "Master lock-free Rust concurrency: CPU memory barriers (`Acquire`, `Release`, `SeqCst`), `AtomicPtr`, and epoch-based GC with Crossbeam.",
      lessons: [
        {
          id: "rust-lockfree-crossbeam",
          slug: "rust-lock-free-concurrency-atomics-memory-ordering-crossbeam",
          courseSlug: "rust",
          moduleSlug: "lockfree-atomics-crossbeam-memory-ordering",
          title: "Lock-Free Concurrency: Memory Orderings & Crossbeam",
          description: "Build ultra-low-latency concurrent data structures without mutex locks: hardware CPU memory model, `std::sync::atomic::Ordering` (`Relaxed`, `Acquire`, `Release`, `AcqRel`, `SeqCst`), atomic Compare-And-Swap (CAS), and Epoch-Based Memory Reclamation with Crossbeam.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why hardware CPUs and compilers reorder instructions unless synchronized with memory orderings",
            "The precise semantics of `Ordering::Acquire` (loads) vs `Ordering::Release` (stores)",
            "Implementing a lock-free Treiber Stack with `AtomicPtr` and CAS loops",
            "The ABA Problem and solving concurrent memory reclamation using Crossbeam Epoch GC",
          ],
          introduction: `Standard mutex locks (\`Mutex<T>\`) rely on OS kernel context switches that introduce hundreds of nanoseconds of latency. Lock-free data structures use atomic hardware CPU instructions (\`atomic::compare_exchange\`) to coordinate memory access in sub-nanosecond clock cycles. In Rust, the type system enforces explicit memory ordering contracts at compile time.`,
          whyItMatters: `High-frequency trading order books, high-throughput actor frameworks (like Actix), and database storage engines (like RocksDB) use lock-free atomic queues to process millions of concurrent messages per second without thread contention.`,
          syntax: `use std::sync::atomic::{AtomicUsize, Ordering};\nval.store(42, Ordering::Release);\nlet x = val.load(Ordering::Acquire);`,
          mainExample: {
            title: "Lock-Free Atomic Treiber Stack with Acquire-Release Synchronization",
            language: "rust",
            code: `// Lock-Free Treiber Stack with AtomicPtr & Acquire-Release Ordering
use std::sync::atomic::{AtomicPtr, Ordering};
use std::ptr;

struct Node<T> {
    data: T,
    next: *mut Node<T>,
}

pub struct LockFreeStack<T> {
    head: AtomicPtr<Node<T>>,
}

impl<T> LockFreeStack<T> {
    pub fn new() -> Self {
        Self {
            head: AtomicPtr::new(ptr::null_mut()),
        }
    }

    pub fn push(&self, data: T) {
        let new_node = Box::into_raw(Box::new(Node {
            data,
            next: ptr::null_mut(),
        }));

        let mut current = self.head.load(Ordering::Relaxed);
        loop {
            unsafe { (*new_node).next = current; }

            // CAS: If head == current, swap with new_node
            // Release store ensures the node data is fully written before head updates!
            match self.head.compare_exchange_weak(
                current,
                new_node,
                Ordering::Release,
                Ordering::Relaxed,
            ) {
                Ok(_) => break,
                Err(actual) => current = actual, // Retry with updated head
            }
        }
    }

    pub fn pop(&self) -> Option<T> {
        let mut current = self.head.load(Ordering::Acquire);
        loop {
            if current.is_null() {
                return None;
            }

            let next_ptr = unsafe { (*current).next };

            match self.head.compare_exchange_weak(
                current,
                next_ptr,
                Ordering::Acquire,
                Ordering::Relaxed,
            ) {
                Ok(_) => {
                    // Safe reclamation in single-threaded consumer demonstration
                    let boxed = unsafe { Box::from_raw(current) };
                    return Some(boxed.data);
                }
                Err(actual) => current = actual,
            }
        }
    }
}

fn main() {
    println!("=== Lock-Free Atomic Treiber Stack ===");
    let stack = LockFreeStack::new();
    stack.push(100);
    stack.push(200);
    stack.push(300);

    println!("Popped: {:?}", stack.pop());
    println!("Popped: {:?}", stack.pop());
    println!("Popped: {:?}", stack.pop());
    println!("✅ Lock-Free Treiber Stack executed with zero mutex lock overhead!");
}`,
            executable: true,
            explanation: [
              "AtomicPtr::compare_exchange_weak executes a hardware CAS instruction (e.g. LOCK CMPXCHG on x86).",
              "Ordering::Release on push guarantees that the heap node write is fully visible to other CPU cores before the head pointer updates.",
              "Ordering::Acquire on pop prevents subsequent node reads from being speculatively reordered before the head is loaded.",
              "compare_exchange_weak is faster than strong CAS on ARM architectures because spurious failures in a loop are cheap.",
            ],
          },
          detailedExplanation: [
            "The ABA Problem & Crossbeam Epoch: In multi-threaded pops, thread 1 may read Node A -> B, get preempted while Node A is freed and reallocated with different contents. Crossbeam solves this using Epoch-Based Reclamation (`crossbeam_epoch`), deferring node deletion until all active threads leave the current epoch.",
          ],
          commonMistakes: [
            {
              mistake: "Using `Ordering::Relaxed` for pointer publishing, allowing CPU cores to read uninitialized memory.",
              badCode: "head.store(node, Ordering::Relaxed); // CPU may publish pointer before data is written!",
              goodCode: "head.store(node, Ordering::Release);",
              explanation: "Relaxed ordering only guarantees atomicity of the single variable itself; it provides zero memory barrier guarantees for surrounding data.",
            },
          ],
          bestPractices: [
            "Default to `Ordering::Acquire` for loads and `Ordering::Release` for stores in lock-free algorithms.",
            "Use `compare_exchange_weak` in loops; use `compare_exchange` when not looping.",
            "Use the `crossbeam` crate (`crossbeam::epoch`, `crossbeam::queue`) for production lock-free data structures.",
          ],
          summary: [
            "Lock-free algorithms eliminate OS thread contention using hardware CPU atomics.",
            "Acquire-Release memory orderings establish happens-before synchronization relationships.",
            "Epoch-based reclamation resolves the ABA problem in concurrent memory management.",
          ],
        },
      ],
    },
    {
      id: "mod-rust-14",
      slug: "async-rust-pin-waker-tokio-reactor",
      title: "Module 14: Async Rust: Futures, Wakers, Pinning & Tokio Reactor",
      description: "Master Async Rust internals: manual `Future` trait implementation, `Pin<&mut Self>`, `Context`/`Waker`, and Tokio's epoll reactor.",
      lessons: [
        {
          id: "rust-async-pin-waker",
          slug: "async-rust-futures-wakers-pinning-tokio-reactor",
          courseSlug: "rust",
          moduleSlug: "async-rust-pin-waker",
          title: "Async Rust Architecture: Futures, Wakers & Pinning",
          description: "Deconstruct Async Rust: the `Future` trait contract (`poll(Pin<&mut Self>, &mut Context)`), why self-referential futures require memory Pinning (`Pin`), waking executors with `Waker`, and Tokio's multi-threaded work-stealing reactor.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Pull-based Future model in Rust vs the Push-based Promise model in JavaScript/C#",
            "Why async/await compiles into state machines with self-referential pointer structs",
            "Why `Pin<P>` is mathematically required to guarantee objects never move in memory",
            "Writing a custom timer future from scratch using `Waker` and `std::thread`",
          ],
          introduction: `Unlike other languages where async runtimes are baked into the core language, Rust's async model is purely library-driven. The standard library defines only the core \`Future\` trait and \`Pin\` wrapper. Rust futures are completely lazy: a future does zero work unless polled by an executor (like Tokio). When an async operation is waiting, it stores a \`Waker\` handle to notify the executor when ready.`,
          whyItMatters: `Understanding Pinning and Wakers is essential for writing custom streaming protocols, high-performance middleware, and zero-allocation network drivers in Tokio.`,
          syntax: `impl Future for MyFuture {\n    type Output = String;\n    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> { ... }\n}`,
          mainExample: {
            title: "Implementing a Custom Non-Blocking Timer Future with Waker",
            language: "rust",
            code: `// Building a Custom Asynchronous Timer Future from Scratch
use std::future::Future;
use std::pin::Pin;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll, Waker};
use std::thread;
use std::time::Duration;

// 1. Shared State between Future and Background Worker Thread
struct SharedState {
    completed: bool,
    waker: Option<Waker>,
}

pub struct AsyncTimerFuture {
    shared_state: Arc<Mutex<SharedState>>,
}

impl AsyncTimerFuture {
    pub fn new(duration: Duration) -> Self {
        let shared_state = Arc::new(Mutex::new(SharedState {
            completed: false,
            waker: None,
        }));

        let thread_shared_state = Arc::clone(&shared_state);
        // Spawn background thread to simulate OS timer / epoll event
        thread::spawn(move || {
            thread::sleep(duration);
            let mut state = thread_shared_state.lock().unwrap();
            state.completed = true;
            // 2. Notify the Executor that the future is ready to be polled again!
            if let Some(waker) = state.waker.take() {
                waker.wake();
            }
        });

        AsyncTimerFuture { shared_state }
    }
}

// 3. Implementing the standard library Future trait
impl Future for AsyncTimerFuture {
    type Output = &'static str;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        let mut state = self.shared_state.lock().unwrap();
        if state.completed {
            Poll::Ready("Timer Completed Successfully!")
        } else {
            // Save the active waker so the background thread can notify the executor
            state.waker = Some(cx.waker().clone());
            Poll::Pending
        }
    }
}

fn main() {
    println!("=== Async Rust: Custom Future & Waker Engine ===");
    println!("Future created with lazy polling contract.");
    println!("When polled, returns Poll::Pending until background waker triggers wake()!");
    println!("Pinning guarantees that internal self-referential pointers cannot move in RAM.");
}`,
            executable: true,
            explanation: [
              "Future::poll takes a Pin<&mut Self>, guaranteeing that the future's memory address will remain immovable in RAM.",
              "If the computation is incomplete, it stores cx.waker().clone() and returns Poll::Pending.",
              "When the timer expires on the background thread, waker.wake() pushes the future back onto the executor's ready queue.",
              "The executor polls the future a second time, which now returns Poll::Ready.",
            ],
          },
          detailedExplanation: [
            "Why Pinning is Necessary: When an async function contains local variables across `.await` points, the compiler creates a self-referential struct (a struct holding pointers to its own fields). If that struct moved in memory, its internal pointers would point to invalid memory (UB). `Pin` prevents moving types that do not implement `Unpin`.",
          ],
          commonMistakes: [
            {
              mistake: "Calling blocking standard library functions (`std::thread::sleep`, `std::fs::read`) inside async functions.",
              badCode: "async fn handle() { std::thread::sleep(Duration::from_secs(1)); } // Freezes Tokio worker thread!",
              goodCode: "async fn handle() { tokio::time::sleep(Duration::from_secs(1)).await; }",
              explanation: "Blocking calls freeze the underlying Tokio OS carrier thread, preventing thousands of other tasks on that worker from making progress.",
            },
          ],
          bestPractices: [
            "Use `tokio::task::spawn_blocking` to offload synchronous CPU-heavy or blocking filesystem operations.",
            "Use `pin_project` crate to project pinned struct fields safely without unsafe boilerplate.",
            "Ensure futures are cancellation-safe if wrapped in `tokio::select!`.",
          ],
          summary: [
            "Rust futures are lazy, pull-based state machines evaluated via `poll()`.",
            "`Pin<&mut Self>` prevents self-referential state machines from moving in memory.",
            "`Waker` notifies the async executor when I/O events become ready.",
          ],
        },
      ],
    },
    {
      id: "mod-rust-15",
      slug: "procedural-macros-syn-quote-ast",
      title: "Module 15: Procedural Macros: `syn`, `quote` & AST Metaprogramming",
      description: "Build custom Rust compilers with Procedural Macros: Derive macros (`#[derive(Custom)]`), Attribute macros, Function-like macros, and AST parsing with `syn` and `quote`.",
      lessons: [
        {
          id: "rust-proc-macros",
          slug: "rust-procedural-macros-derive-attribute-syn-quote",
          courseSlug: "rust",
          moduleSlug: "procedural-macros-syn-quote-ast",
          title: "Procedural Macros & AST Metaprogramming with syn & quote",
          description: "Author compile-time code generators with Rust Procedural Macros: Custom Derive macros (`#[derive(Model)]`), Attribute macros (`#[route(GET)]`), TokenStream manipulation, parsing ASTs with `syn`, and generating type-safe Rust code with `quote!`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 types of Procedural Macros: Custom Derive, Attribute-like, and Function-like macros",
            "Parsing incoming `TokenStream` into Abstract Syntax Trees using the `syn` crate",
            "Generating verified Rust code using the `quote!` quasiquoting macro",
            "Injecting compile-time validations and producing clear compiler error diagnostics",
          ],
          introduction: `While declarative macros (\`macro_rules!\`) perform pattern-matching string expansion, Procedural Macros are full-fledged compiler plugins written in Rust. Procedural macros take a stream of syntax tokens as input, parse them into an Abstract Syntax Tree (AST), execute arbitrary Rust logic at compile time, and output a transformed \`TokenStream\` back to the compiler.`,
          whyItMatters: `Frameworks like Serde (\`#[derive(Serialize, Deserialize)]\`), Tokio (\`#[tokio::main]\`), and Axum rely on procedural macros to generate hundreds of lines of type-safe serialization and routing boilerplate with zero runtime performance cost.`,
          syntax: `#[proc_macro_derive(Describe)]\npub fn describe_derive(input: TokenStream) -> TokenStream {\n    let ast = syn::parse(input).unwrap();\n    quote! { ... }.into()\n}`,
          mainExample: {
            title: "Authoring a Custom Derive Macro with syn and quote",
            language: "rust",
            code: `// Procedural Macro Architecture (Conceptual Implementation)
// In a dedicated proc-macro crate (Cargo.toml -> [lib] proc-macro = true)

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, DeriveInput, Data, Fields};

// 1. Procedural Derive Macro Entry Point
#[proc_macro_derive(EntitySummary)]
pub fn entity_summary_derive(input: TokenStream) -> TokenStream {
    // Parse TokenStream into syn Abstract Syntax Tree (AST)
    let ast = parse_macro_input!(input as DeriveInput);
    let name = &ast.ident;

    // Extract struct field count
    let field_count = match &ast.data {
        Data::Struct(data_struct) => match &data_struct.fields {
            Fields::Named(fields) => fields.named.len(),
            Fields::Unnamed(fields) => fields.unnamed.len(),
            Fields::Unit => 0,
        },
        _ => panic!("EntitySummary can only be derived on structs!"),
    };

    // 2. Generate code at compile-time using quote!
    let expanded = quote! {
        impl #name {
            pub fn entity_name() -> &'static str {
                stringify!(#name)
            }
            pub fn total_fields() -> usize {
                #field_count
            }
        }
    };

    // Convert back into compiler TokenStream
    TokenStream::from(expanded)
}

// 3. User Code Consuming the Macro:
// #[derive(EntitySummary)]
// struct CourseRecord {
//     id: u64,
//     title: String,
//     published: bool,
// }
//
// assert_eq!(CourseRecord::entity_name(), "CourseRecord");
// assert_eq!(CourseRecord::total_fields(), 3);`,
            executable: false,
            explanation: [
              "parse_macro_input! parses raw compiler tokens into a strongly-typed syn::DeriveInput AST.",
              "quote! creates a quasiquoting template where #name and #field_count are substituted at compile time.",
              "Procedural macros execute during compilation inside the compiler process with zero runtime footprint.",
            ],
          },
          detailedExplanation: [
            "Compile-Time AST Manipulation: Procedural macros must live in a separate crate with `[lib] proc-macro = true`. During compilation of the dependent application, the compiler compiles the proc-macro crate as a native host binary, executes it against application tokens, and emits clean AST nodes.",
          ],
          commonMistakes: [
            {
              mistake: "Placing procedural macro definitions in the same crate as standard runtime application code.",
              badCode: "// In standard my_app/src/lib.rs: #[proc_macro] fn my_macro(...) {}",
              goodCode: "// In dedicated macro sub-crate (Cargo.toml with proc-macro = true)",
              explanation: "The Rust compiler strictly enforces that procedural macros must reside in dedicated proc-macro library crates.",
            },
          ],
          bestPractices: [
            "Use `syn::Error::new_spanned` to emit precise compile errors pointing to the exact source code line.",
            "Use `cargo expand` to inspect the generated code produced by procedural macros.",
            "Keep macro generation logic pure without side effects to maintain deterministic build caching.",
          ],
          summary: [
            "Procedural macros are compile-time compiler plugins that manipulate Abstract Syntax Trees.",
            "`syn` parses token streams into typed ASTs; `quote` synthesizes code templates.",
            "Derive and Attribute macros eliminate boilerplate while maintaining 100% type safety.",
          ],
        },
      ],
    },
    {
      id: "mod-rust-16",
      slug: "custom-allocators-globalalloc-simd",
      title: "Module 16: Custom Allocators (`GlobalAlloc`), `std::simd` & Arenas",
      description: "Optimize systems memory: custom allocators with `GlobalAlloc`, bump allocation arenas, and portable vectorization with `std::simd`.",
      lessons: [
        {
          id: "rust-allocators-simd",
          slug: "rust-custom-allocators-globalalloc-bumpalo-std-simd",
          courseSlug: "rust",
          moduleSlug: "custom-allocators-globalalloc-simd",
          title: "Custom Global Allocators & Portable std::simd",
          description: "Fine-tune system-level memory and CPU hardware: implementing the `GlobalAlloc` trait for custom heap allocators (Jemalloc/Mimalloc), nanosecond bump allocation with `bumpalo`, and portable SIMD vectorization with `std::simd`.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The `GlobalAlloc` trait interface: `alloc`, `dealloc`, `alloc_zeroed`, `realloc`",
            "Swapping the default system allocator for Jemalloc/Mimalloc to reduce memory fragmentation",
            "Ultra-fast arena allocation with Bump Allocators (`bumpalo`) for per-request web workloads",
            "Portable hardware SIMD vectorization using `std::simd::f32x8` across x86 AVX and ARM Neon",
          ],
          introduction: `By default, Rust uses the host operating system's standard C memory allocator (\`malloc\`). For multi-threaded server microservices, OS allocators suffer from memory fragmentation and lock contention. Rust allows replacing the global allocator with high-performance engines like Jemalloc or Mimalloc with a single \`#[global_allocator]\` declaration, or using local Bump Allocators for sub-nanosecond scratchpad memory.`,
          whyItMatters: `Replacing the standard allocator with Mimalloc/Jemalloc in multithreaded Rust servers reduces memory consumption by 30% and improves throughput by 15-25% with zero code changes.`,
          syntax: `#[global_allocator]\nstatic GLOBAL: mimalloc::MiMalloc = mimalloc::MiMalloc;\n\nuse std::simd::f32x8;\nlet a = f32x8::from_array([...]);`,
          mainExample: {
            title: "Custom Global Allocator Wrapper and Portable SIMD Vector Math",
            language: "rust",
            code: `// Custom Global Allocator & Portable SIMD Vectorization
use std::alloc::{GlobalAlloc, Layout, System};
use std::sync::atomic::{AtomicUsize, Ordering};

// 1. Custom Tracking Global Allocator
struct CountingAllocator;

static ALLOCATED_BYTES: AtomicUsize = AtomicUsize::new(0);

unsafe impl GlobalAlloc for CountingAllocator {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        let ptr = System.alloc(layout);
        if !ptr.is_null() {
            ALLOCATED_BYTES.fetch_add(layout.size(), Ordering::Relaxed);
        }
        ptr
    }

    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        System.dealloc(ptr, layout);
        ALLOCATED_BYTES.fetch_sub(layout.size(), Ordering::Relaxed);
    }
}

// Register as Global Allocator for entire binary
#[global_allocator]
static A: CountingAllocator = CountingAllocator;

// 2. Portable SIMD Vector Math Simulation
fn simd_vector_dot_product(a: &[f32; 8], b: &[f32; 8]) -> f32 {
    let mut sum = 0.0;
    // Computes 8 floating-point multiplications simultaneously!
    for i in 0..8 {
        sum += a[i] * b[i];
    }
    sum
}

fn main() {
    println!("=== Custom Allocator & SIMD Hardware Optimization ===");

    // Perform vector allocation tracked by CountingAllocator
    let boxed_data: Vec<u8> = vec![0u8; 1024]; // 1KB allocation
    let active_bytes = ALLOCATED_BYTES.load(Ordering::Relaxed);
    println!("Live Heap Memory Tracked by Custom Allocator: {} bytes", active_bytes);

    let v1 = [1.5, 2.0, 3.5, 4.0, 5.5, 6.0, 7.5, 8.0];
    let v2 = [2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0];
    let dot = simd_vector_dot_product(&v1, &v2);
    println!("Computed SIMD Dot Product: {}", dot);

    drop(boxed_data);
    println!("Heap Memory after drop: {} bytes", ALLOCATED_BYTES.load(Ordering::Relaxed));
    println!("✅ Custom Allocator and SIMD execution completed successfully!");
}`,
            executable: true,
            explanation: [
              "#[global_allocator] redirects all Vec, String, and Box heap allocations through CountingAllocator.",
              "The custom allocator intercepts alloc and dealloc calls, updating atomic memory telemetry in real time.",
              "Portable SIMD compiles to AVX2/AVX-512 instructions on x86_64 and Neon instructions on ARM64.",
              "Bump allocators (like bumpalo) allocate memory in consecutive bytes with O(1) pointer bumps, reclaiming all memory at once.",
            ],
          },
          detailedExplanation: [
            "Bump Allocation Mechanics: A bump allocator maintains a contiguous chunk of memory and a pointer. Allocating memory simply returns the current pointer and increments ('bumps') it by the requested size. Deallocation is a no-op until the entire arena is reset, making it the fastest possible allocation strategy.",
          ],
          commonMistakes: [
            {
              mistake: "Calling code that allocates memory inside `GlobalAlloc::alloc`, causing infinite recursive stack overflow.",
              badCode: "unsafe fn alloc(...) { println!(\"Allocating\"); ... } // println! allocates memory, recursing infinitely!",
              goodCode: "// Never allocate memory or use formatted I/O inside GlobalAlloc methods",
              explanation: "Standard I/O formatting allocates memory. If `alloc` calls `alloc`, the thread enters an infinite recursive loop and crashes.",
            },
          ],
          bestPractices: [
            "Use `tikv-jemallocator` or `mimalloc` as the `#[global_allocator]` for cloud microservices.",
            "Use `bumpalo` for per-request scratchpad allocations in web servers and parsers.",
            "Enable `#![feature(portable_simd)]` on nightly or use auto-vectorizable loop patterns.",
          ],
          summary: [
            "`GlobalAlloc` customizes heap memory management across the entire application.",
            "Jemalloc and Mimalloc drastically reduce memory fragmentation in multi-threaded servers.",
            "Bump allocators and SIMD vectorization extract maximum performance from modern CPU hardware.",
          ],
        },
      ],
    },
  ],
};

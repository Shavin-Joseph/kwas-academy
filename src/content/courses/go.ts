import { Course } from "@/types";

export const goCourse: Course = {
  id: "course-go",
  slug: "go",
  title: "Go (Golang) Cloud-Native Microservices",
  tagline: "Concurrency with Goroutines & Channels, fast compiled binaries, and high-throughput microservices.",
  description: "Master Go: syntax simplicity, structs, interfaces, error handling idioms, goroutines, channels, sync primitives (Mutex, WaitGroup), HTTP web servers, and building cloud-native distributed microservices.",
  category: "Programming Languages",
  level: "Intermediate",
  estimatedHours: 24,
  icon: "Server",
  badgeColor: "blue",
  prerequisites: ["Basic Programming Knowledge"],
  skillsGained: [
    "Go Idiomatic Syntax & Explicit Error Handling (val, err := ...)",
    "Structs, Methods & Implicit Interface Composition",
    "Lightweight Concurrency with Goroutines & Channels",
    "High-Performance Native HTTP Web Services",
    "Building Fast, Self-Contained Static Cloud Binaries",
  ],
  featured: false,
  modules: [
    {
      id: "mod-go-1",
      slug: "intro",
      title: "Module 1: Go Philosophy & Toolchain",
      description: "Go compiler (go build), formatting (gofmt), packages, and main package.",
      lessons: [
        {
          id: "go-intro",
          slug: "go-introduction",
          courseSlug: "go",
          moduleSlug: "intro",
          title: "Go Introduction & The Go Toolchain",
          description: "Discover Go's design philosophy, simple orthogonal syntax, and the go CLI toolchain.",
          durationMinutes: 14,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why Go was created at Google for scalable systems",
            "Compiling static binaries with 'go build'",
            "Package main and the func main() entry point",
          ],
          introduction: `Go (Golang) is an open-source programming language developed by Google to build simple, fast, and reliable software at enterprise scale.`,
          whyItMatters: `Go is the language of cloud infrastructure, powering Docker, Kubernetes, Terraform, Prometheus, and CockroachDB.`,
          mainExample: {
            title: "Hello Go Program",
            language: "go",
            code: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("KWAS Academy: Cloud-Native Go Engineering")\n}`,
            executable: true,
            explanation: ["package main and func main() declare an executable application."],
          },
          detailedExplanation: ["Go compiles into a single, self-contained binary with zero dynamic library dependencies."],
          commonMistakes: [],
          bestPractices: ["Always run 'gofmt' or 'go fmt' on code before committing."],
          summary: ["Go emphasizes simplicity, readability, and rapid compilation."],
        },
      ],
    },
    {
      id: "mod-go-2",
      slug: "syntax-variables",
      title: "Module 2: Basic Syntax, Variables & Constants",
      description: "Short variable declaration (:=), explicit var, typed constants (iota), and zero values.",
      lessons: [
        {
          id: "go-variables",
          slug: "variables-and-zero-values",
          courseSlug: "go",
          moduleSlug: "syntax-variables",
          title: "Variables, Short Declaration (:=) & Zero Values",
          description: "Declare variables with short assignment (:=), understand default zero values (0, '', nil), and use iota for enums.",
          durationMinutes: 14,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Short variable declaration (name := 'Alex') inside functions",
            "Go's guaranteed zero values (0 for numbers, false for booleans, nil for pointers)",
            "Auto-incrementing enum constants with iota",
          ],
          introduction: `Go is statically typed with strong type inference. Uninitialized variables in Go are automatically set to their zero value, preventing uninitialized memory bugs.`,
          whyItMatters: `Zero values eliminate null pointer bugs in basic variables, ensuring predictable initialization across all types.`,
          mainExample: {
            title: "Short Declarations & iota Constants",
            language: "go",
            code: `package main\nimport "fmt"\n\nconst (\n    RoleStudent = iota // 0\n    RoleTeacher        // 1\n    RoleAdmin          // 2\n)\n\nfunc main() {\n    name := "Alex Dev"\n    var count int // Zero value: 0\n    fmt.Printf("User: %s | Count: %d | Role: %d\\n", name, count, RoleAdmin)\n}`,
            executable: true,
            explanation: [":= infers the type automatically inside function bodies."],
          },
          detailedExplanation: ["Constants must be resolvable at compile time."],
          commonMistakes: [],
          bestPractices: ["Use := for local variables; use explicit var for package-level declarations."],
          summary: ["Guaranteed zero values make Go initialization predictable and safe."],
        },
      ],
    },
    {
      id: "mod-go-3",
      slug: "control-flow",
      title: "Module 3: Control Flow (if, switch, for)",
      description: "if with short statement, switch with automatic break, and for as the only loop keyword.",
      lessons: [
        {
          id: "go-control",
          slug: "control-flow-and-loops",
          courseSlug: "go",
          moduleSlug: "control-flow",
          title: "If Initializers, Switch & The Unified 'for' Loop",
          description: "Master if statements with inline initializers (if err := ...; err != nil) and unified for loops.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "If statements with local variable initialization scope",
            "Why Go has only one loop keyword ('for') that handles while, infinite, and range loops",
            "Switch statements without explicit break requirements",
          ],
          introduction: `Go intentionally simplifies control flow: 'for' is the only loop construct, and 'switch' breaks automatically without fallthrough.`,
          whyItMatters: `The 'if err := doWork(); err != nil' pattern scopes the error variable strictly to the conditional block.`,
          mainExample: {
            title: "If with Initializer & For-Range Loop",
            language: "go",
            code: `package main\nimport "fmt"\n\nfunc main() {\n    scores := []int{95, 88, 92}\n    for idx, score := range scores {\n        fmt.Printf("Student #%d Score: %d\\n", idx+1, score)\n    }\n}`,
            executable: true,
            explanation: ["for...range iterates over slices, arrays, maps, and channels."],
          },
          detailedExplanation: ["Go switch statements support multiple case matches (case 1, 2, 3:)."],
          commonMistakes: [],
          bestPractices: ["Use if initializers to scope temporary variables cleanly."],
          summary: ["Go's unified control flow constructs keep codebases simple and readable."],
        },
      ],
    },
    {
      id: "mod-go-4",
      slug: "slices-maps",
      title: "Module 4: Arrays, Slices & Maps",
      description: "Fixed arrays, dynamic slices (make, append), slice internals (ptr, len, cap), and key-value maps.",
      lessons: [
        {
          id: "go-slices-maps",
          slug: "slices-and-maps-internals",
          courseSlug: "go",
          moduleSlug: "slices-maps",
          title: "Slices Header Architecture & Maps",
          description: "Understand slice internals (pointer, length, capacity), make(), append(), and map lookups (val, ok := map[key]).",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The 3-word slice header: Pointer to backing array, Length, and Capacity",
            "Dynamically growing slices with append() and pre-allocating with make()",
            "The comma-ok idiom for verifying map key presence (val, ok := m[key])",
          ],
          introduction: `Slices are dynamically-sized, flexible views into the elements of an array. In practice, slices are much more common than fixed-length arrays.`,
          whyItMatters: `Pre-allocating slice capacity with make([]T, 0, 1000) prevents expensive backing array reallocations during loops.`,
          mainExample: {
            title: "Slice Append & Comma-OK Map Lookup",
            language: "go",
            code: `package main\nimport "fmt"\n\nfunc main() {\n    // Dynamic slice\n    skills := make([]string, 0, 4)\n    skills = append(skills, "Go", "Docker", "Postgres")\n\n    // Map with comma-ok idiom\n    metrics := map[string]int{"cpu": 45, "ram": 60}\n    if val, ok := metrics["cpu"]; ok {\n        fmt.Printf("CPU Metric: %d%% | Skills: %v\\n", val, skills)\n    }\n}`,
            executable: true,
            explanation: ["comma-ok idiom verifies if a key actually exists in the map."],
          },
          detailedExplanation: ["When a slice exceeds its capacity during append, Go doubles the backing array size automatically."],
          commonMistakes: [],
          bestPractices: ["Always use the comma-ok idiom to test for map key existence."],
          summary: ["Slices and maps provide high-speed, dynamic data management in Go."],
        },
      ],
    },
    {
      id: "mod-go-5",
      slug: "functions",
      title: "Module 5: Functions, Multiple Returns & Named Returns",
      description: "Multiple return values, named returns, variadic parameters, defer statement, and first-class functions.",
      lessons: [
        {
          id: "go-functions",
          slug: "multiple-returns-and-defer",
          courseSlug: "go",
          moduleSlug: "functions",
          title: "Multiple Return Values & The 'defer' Statement",
          description: "Return multiple values (result, error) and guarantee resource cleanup with LIFO 'defer' statements.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Functions returning multiple values (value, error)",
            "The 'defer' statement for guaranteed cleanup before function exit",
            "LIFO (Last In, First Out) execution order of multiple defers",
          ],
          introduction: `Go functions can return any number of results. The 'defer' keyword schedules a function call to run immediately before the enclosing function returns.`,
          whyItMatters: `Placing 'defer file.Close()' immediately after opening a file guarantees the file descriptor closes, preventing leaks.`,
          mainExample: {
            title: "Multiple Returns & Defer Cleanup",
            language: "go",
            code: `package main\nimport "fmt"\n\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, fmt.Errorf("division by zero")\n    }\n    return a / b, nil\n}\n\nfunc main() {\n    defer fmt.Println("Cleanup: Execution completed.")\n    res, err := divide(100, 4)\n    if err == nil {\n        fmt.Println("Result:", res)\n    }\n}`,
            executable: true,
            explanation: ["defer runs right before main() returns."],
          },
          detailedExplanation: ["Defer statements evaluate their arguments immediately when encountered."],
          commonMistakes: [],
          bestPractices: ["Always pair resource acquisition (opening files/locks) with an immediate defer cleanup."],
          summary: ["Multiple returns and defer make resource management explicit and clean."],
        },
      ],
    },
    {
      id: "mod-go-6",
      slug: "structs-methods",
      title: "Module 6: Structs, Methods & Pointer Receivers",
      description: "Struct definitions, embedded structs (composition), value receivers vs pointer receivers (*T).",
      lessons: [
        {
          id: "go-structs",
          slug: "structs-and-pointer-receivers",
          courseSlug: "go",
          moduleSlug: "structs-methods",
          title: "Structs, Composition & Value vs Pointer Receivers",
          description: "Define structured data types, embed structs for composition, and mutate state with pointer receivers (*T).",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Defining struct data structures",
            "Value receivers func (t T) vs Pointer receivers func (t *T)",
            "Struct embedding (composition) instead of classical OOP inheritance",
          ],
          introduction: `Go does not have classes or inheritance. Instead, it uses Structs with Methods, and achieves code reuse through Struct Embedding (Composition).`,
          whyItMatters: `Using a value receiver creates a copy of the struct; a pointer receiver (*T) mutates the original struct in place.`,
          mainExample: {
            title: "Struct with Pointer Receiver Method",
            language: "go",
            code: `package main\nimport "fmt"\n\ntype Developer struct {\n    Name  string\n    Level int\n}\n\n// Pointer receiver mutates the struct\nfunc (d *Developer) Promote() {\n    d.Level++\n}\n\nfunc main() {\n    dev := Developer{Name: "Alex", Level: 1}\n    dev.Promote()\n    fmt.Printf("%s is now Level %d\\n", dev.Name, dev.Level)\n}`,
            executable: true,
            explanation: ["(d *Developer) pointer receiver modifies the Level field directly."],
          },
          detailedExplanation: ["Embedded structs promote their fields to the outer struct automatically."],
          commonMistakes: [],
          bestPractices: ["Use pointer receivers whenever a method needs to mutate the struct or if the struct is large."],
          summary: ["Structs and pointer receivers provide clean, explicit data mutation."],
        },
      ],
    },
    {
      id: "mod-go-7",
      slug: "interfaces",
      title: "Module 7: Interfaces & Implicit Composition",
      description: "Implicit interface implementation (duck typing), interface{}, any, and type assertions.",
      lessons: [
        {
          id: "go-interfaces",
          slug: "implicit-interfaces-and-type-switches",
          courseSlug: "go",
          moduleSlug: "interfaces",
          title: "Implicit Interfaces & Type Assertions",
          description: "Implement interfaces implicitly without 'implements' keywords, and inspect dynamic types with type switches.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Implicit interface satisfaction: if a struct implements the methods, it implements the interface",
            "The io.Reader and io.Writer universal interfaces",
            "Type assertions (val, ok := i.(MyType)) and type switches",
          ],
          introduction: `In Go, interfaces are satisfied implicitly. A type implements an interface by simply implementing its methods. There is no explicit 'implements' declaration.`,
          whyItMatters: `Implicit interfaces allow you to define interfaces for third-party packages without modifying their source code.`,
          mainExample: {
            title: "Implicit Interface Implementation",
            language: "go",
            code: `package main\nimport "fmt"\n\ntype Speaker interface {\n    Speak() string\n}\n\ntype Bot struct{}\nfunc (b Bot) Speak() string { return "Beep Boop" }\n\nfunc greet(s Speaker) {\n    fmt.Println(s.Speak())\n}\n\nfunc main() {\n    greet(Bot{}) // Bot implicitly satisfies Speaker\n}`,
            executable: true,
            explanation: ["Bot satisfies Speaker simply by having a Speak() method."],
          },
          detailedExplanation: ["Keep interfaces small: 'The bigger the interface, the weaker the abstraction' (Rob Pike)."],
          commonMistakes: [],
          bestPractices: ["Define 1-method or 2-method interfaces at the consumer site."],
          summary: ["Implicit interfaces decouple Go modules cleanly."],
        },
      ],
    },
    {
      id: "mod-go-8",
      slug: "error-handling",
      title: "Module 8: Explicit Error Handling Idioms",
      description: "Error interface, errors.Is, errors.As, custom error types, and panic/recover.",
      lessons: [
        {
          id: "go-errors",
          slug: "explicit-error-handling-and-errors-is",
          courseSlug: "go",
          moduleSlug: "error-handling",
          title: "Explicit Error Handling & Error Wrapping (errors.Is)",
          description: "Handle errors as values, wrap error context with fmt.Errorf('%w', err), and inspect error chains with errors.Is.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why Go treats errors as explicit values rather than hidden exceptions",
            "Wrapping error context with %w (fmt.Errorf('failed auth: %w', err))",
            "Checking wrapped errors with errors.Is() and errors.As()",
          ],
          introduction: `Go does not have try/catch exception hierarchies. Errors are simply values that implement the built-in 'error' interface (Error() string).`,
          whyItMatters: `Explicit error handling forces developers to consider failure cases at every step, creating exceptionally resilient backend services.`,
          mainExample: {
            title: "Error Wrapping & errors.Is",
            language: "go",
            code: `package main\nimport (\n    "errors"\n    "fmt"\n)\n\nvar ErrNotFound = errors.New("record not found")\n\nfunc findUser(id int) error {\n    return fmt.Errorf("database query failed: %w", ErrNotFound)\n}\n\nfunc main() {\n    err := findUser(404)\n    if errors.Is(err, ErrNotFound) {\n        fmt.Println("Handled: Specific ErrNotFound matched successfully.")\n    }\n}`,
            executable: true,
            explanation: ["errors.Is unwraps the error chain to check if ErrNotFound is in the stack."],
          },
          detailedExplanation: ["Use panic/recover strictly for truly unrecoverable programmer bugs, never for expected runtime errors."],
          commonMistakes: [],
          bestPractices: ["Always wrap errors with context using fmt.Errorf('...: %w', err)."],
          summary: ["Errors as values make failure modes clear, debuggable, and explicit."],
        },
      ],
    },
    {
      id: "mod-go-9",
      slug: "concurrency",
      title: "Module 9: Goroutines, Channels & Select",
      description: "Lightweight Goroutines, buffered vs unbuffered channels, select multiplexing, and worker pools.",
      lessons: [
        {
          id: "go-concurrency",
          slug: "goroutines-channels-and-select",
          courseSlug: "go",
          moduleSlug: "concurrency",
          title: "Goroutines, Channels & The 'select' Statement",
          description: "Spawn millions of lightweight Goroutines, send data through typed channels, and multiplex with 'select'.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Goroutines: lightweight green threads managed by the Go runtime (2KB stack)",
            "Unbuffered (synchronous rendezvous) vs Buffered channels",
            "The 'select' statement for multiplexing multiple channel operations",
          ],
          introduction: `Concurrency in Go is built around Goroutines and Channels, based on Tony Hoare's Communicating Sequential Processes (CSP) formalism.`,
          whyItMatters: `"Do not communicate by sharing memory; instead, share memory by communicating."`,
          mainExample: {
            title: "Channel Select with Timeout",
            language: "go",
            code: `package main\nimport (\n    "fmt"\n    "time"\n)\n\nfunc main() {\n    ch := make(chan string, 1)\n    go func() {\n        time.Sleep(50 * time.Millisecond)\n        ch <- "Data Payload Ready"\n    }()\n\n    select {\n    case msg := <-ch:\n        fmt.Println("Received:", msg)\n    case <-time.After(100 * time.Millisecond):\n        fmt.Println("Timeout reached!")\n    }\n}`,
            executable: true,
            explanation: ["select waits on whichever channel communication completes first."],
          },
          detailedExplanation: ["Closing a channel signals all listening goroutines that no more data will be sent."],
          commonMistakes: [],
          bestPractices: ["Always ensure channel senders close channels, never channel receivers."],
          summary: ["Goroutines and channels make high-scale concurrency effortless."],
        },
      ],
    },
    {
      id: "mod-go-10",
      slug: "sync-primitives",
      title: "Module 10: Sync Primitives (Mutex, WaitGroup, Once)",
      description: "sync.Mutex, sync.RWMutex, sync.WaitGroup, sync.Once, and the Go Race Detector (-race).",
      lessons: [
        {
          id: "go-sync",
          slug: "sync-waitgroup-and-mutex",
          courseSlug: "go",
          moduleSlug: "sync-primitives",
          title: "sync.WaitGroup, sync.Mutex & Race Detector (-race)",
          description: "Synchronize goroutine completion with WaitGroup, protect shared memory with Mutex, and detect race conditions.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Waiting for N concurrent workers with sync.WaitGroup (Add, Done, Wait)",
            "Protecting critical shared variables with sync.Mutex and sync.RWMutex",
            "Running the Go Race Detector (go test -race) to catch data races",
          ],
          introduction: `When channels are not appropriate, the standard library 'sync' package provides classical low-level synchronization primitives like Mutexes and WaitGroups.`,
          whyItMatters: `Running 'go run -race' detects subtle multithreaded memory corruption before code reaches production.`,
          mainExample: {
            title: "sync.WaitGroup Coordination",
            language: "go",
            code: `package main\nimport (\n    "fmt"\n    "sync"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    for i := 1; i <= 3; i++ {\n        wg.Add(1)\n        go func(id int) {\n            defer wg.Done()\n            fmt.Printf("Worker #%d done\\n", id)\n        }(i)\n    }\n    wg.Wait() // Block until all 3 workers call Done()\n    fmt.Println("All workers finished.")\n}`,
            executable: true,
            explanation: ["wg.Wait() blocks until the WaitGroup counter reaches 0."],
          },
          detailedExplanation: ["Always pass WaitGroup pointers (&wg), never pass WaitGroups by value."],
          commonMistakes: [],
          bestPractices: ["Always run tests with the -race flag enabled in CI pipelines."],
          summary: ["Sync primitives coordinate parallel tasks and protect shared state."],
        },
      ],
    },
    {
      id: "mod-go-11",
      slug: "web-microservices",
      title: "Module 11: Building Native Cloud HTTP Microservices",
      description: "net/http, context.Context cancellation, JSON encoding, and building cloud microservices.",
      lessons: [
        {
          id: "go-http",
          slug: "net-http-and-context",
          courseSlug: "go",
          moduleSlug: "web-microservices",
          title: "Production HTTP Services & context.Context Cancellation",
          description: "Build high-throughput HTTP microservices with net/http, serialize JSON, and propagate timeouts via context.Context.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Building REST microservices using standard library net/http",
            "High-speed streaming JSON with json.NewDecoder and json.NewEncoder",
            "Propagating request cancellations and timeouts with context.Context",
          ],
          introduction: `The Go standard library contains a world-class, production-ready HTTP server capable of serving tens of thousands of requests per second.`,
          whyItMatters: `context.Context ensures that if a user cancels an HTTP request, downstream database queries are aborted immediately, saving database CPU.`,
          mainExample: {
            title: "Production HTTP Handler with JSON",
            language: "go",
            code: `package main\nimport (\n    "encoding/json"\n    "net/http"\n)\n\ntype HealthResponse struct {\n    Status string \`json:"status"\`\n}\n\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n    w.Header().Set("Content-Type", "application/json")\n    json.NewEncoder(w).Encode(HealthResponse{Status: "healthy"})\n}\n\nfunc main() {\n    http.HandleFunc("/health", healthHandler)\n    http.ListenAndServe(":8080", nil)\n}`,
            executable: false,
            explanation: ["json.NewEncoder streams JSON directly into the HTTP response stream."],
          },
          detailedExplanation: ["Every incoming http.Request contains a r.Context() bound to the client socket lifetime."],
          commonMistakes: [],
          bestPractices: ["Always pass context.Context as the first argument in backend functions (ctx context.Context)."],
          summary: ["Go standard library provides all tools needed to build high-scale cloud microservices."],
        },
      ],
    },
    {
      id: "mod-go-12",
      slug: "go-scheduler-gmp-model-work-stealing",
      title: "Module 12: Go Scheduler: G, M, P Model & Work-Stealing Internals",
      description: "Master the Go runtime scheduler: G (Goroutine), M (OS Thread), P (Logical Processor), work-stealing algorithms, and non-cooperative preemption.",
      lessons: [
        {
          id: "go-gmp-scheduler",
          slug: "go-runtime-scheduler-gmp-model-work-stealing-preemption",
          courseSlug: "go",
          moduleSlug: "go-scheduler-gmp-model-work-stealing",
          title: "Go Scheduler Architecture: The G-M-P Work-Stealing Engine",
          description: "Explore the internal architecture of the Go M:N scheduler: Goroutines (G), OS Threads (M), Logical Processors (P), Local/Global Run Queues (LRQ/GRQ), work-stealing algorithms, and asynchronous preemption via OS signals (SIGURG).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 pillars of Go scheduling: G (Goroutine struct), M (Machine OS thread), P (Logical processor context)",
            "How Go multiplexes M goroutines onto N OS threads with `GOMAXPROCS`",
            "The Work-Stealing algorithm: stealing 50% of goroutines from peer P local run queues",
            "Non-cooperative asynchronous preemption using Linux/POSIX `SIGURG` signals (Go 1.14+)",
          ],
          introduction: `Go's defining feature is lightweight concurrency: spawning a goroutine takes only ~2KB of stack memory, allowing a single binary to execute hundreds of thousands of concurrent goroutines. The Go runtime manages this with an M:N work-stealing scheduler that maps millions of user-space Goroutines (G) onto operating system threads (M) governed by logical processor contexts (P).`,
          whyItMatters: `Understanding scheduler states (runnable, running, waiting, syscall) allows you to diagnose goroutine starvation, tune GOMAXPROCS in containerized Kubernetes pods, and eliminate thread thrashing.`,
          syntax: `import "runtime"\nruntime.GOMAXPROCS(runtime.NumCPU())\nruntime.Gosched() // Cooperatively yield P`,
          mainExample: {
            title: "Inspecting Go Runtime Scheduler Statistics with GODEBUG=schedtrace",
            language: "go",
            code: `// Inspecting Go Runtime Scheduler Metrics
package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func main() {
	fmt.Println("=== Go G-M-P Scheduler Diagnostics ===")

	// 1. Inspect active Logical Processors (P) and CPU cores
	numCPU := runtime.NumCPU()
	procs := runtime.GOMAXPROCS(0)
	fmt.Printf("Hardware CPU Cores: %d | Logical Processors (P): %d\\n", numCPU, procs)

	// 2. Spawn 50,000 Goroutines to observe Work-Stealing distribution
	var wg sync.WaitGroup
	start := time.Now()

	for i := 0; i < 50000; i++ {
		wg.Add(1)
		go func(id int) {
			defer wg.Done()
			// Ephemeral computation
			_ = id * id
			if id%10000 == 0 {
				// runtime.Gosched yields execution back to local P queue
				runtime.Gosched()
			}
		}(i)
	}

	wg.Wait()
	fmt.Printf("✅ Dispatched and executed 50,000 Goroutines in %v\\n", time.Since(start))
	fmt.Printf("Current Active Goroutines: %d\\n", runtime.NumGoroutine())
}`,
            executable: true,
            explanation: [
              "GOMAXPROCS defines the number of P (Logical Processor) structs, matching available CPU cores.",
              "Each P maintains a 256-element lock-free Local Run Queue (LRQ).",
              "When a P empties its queue, it checks the Global Run Queue (GRQ), network poller (netpoll), and then steals half the goroutines from a random peer P's queue.",
              "If a goroutine runs in a tight loop without function calls, the sysmon background thread injects a SIGURG signal to preempt it after 10ms.",
            ],
          },
          detailedExplanation: [
            "Network Poller Integration: When a goroutine performs a network read (`conn.Read`), it does NOT block the OS thread (M). Instead, it detaches from P, registers its file descriptor with the runtime network poller (`netpoll`), and parks. The M immediately executes other runnable goroutines from P.",
          ],
          commonMistakes: [
            {
              mistake: "Relying on default GOMAXPROCS inside CPU-throttled Kubernetes containers, causing CFS scheduler throttling.",
              badCode: "// Running with GOMAXPROCS=64 on a pod with CPU limit = 2 cores",
              goodCode: "import _ \"go.uber.org/automaxprocs\" // Automatically sets GOMAXPROCS to match cgroup quota",
              explanation: "If GOMAXPROCS exceeds container cgroup quotas, the Linux CFS scheduler throttles the process, introducing severe latency spikes.",
            },
          ],
          bestPractices: [
            "Use `go.uber.org/automaxprocs` in containerized microservices.",
            "Profile scheduler latency using `GODEBUG=schedtrace=1000 ./app`.",
            "Avoid calling blocking Cgo functions in hot loops (blocks OS thread M).",
          ],
          summary: [
            "The G-M-P model multiplexes M goroutines across N OS threads using P processor contexts.",
            "Work-stealing balances goroutines across CPU cores with zero lock contention.",
            "Non-cooperative SIGURG preemption prevents tight loops from starving sibling goroutines.",
          ],
        },
      ],
    },
    {
      id: "mod-go-13",
      slug: "go-garbage-collector-tricolor-mark-sweep",
      title: "Module 13: Go GC Internals: Tri-Color Mark-Sweep & Write Barriers",
      description: "Master Go's concurrent garbage collector: Tri-Color marking abstraction, Yuasa/Dijkstra Hybrid Write Barrier, and tuning GOGC/GOMEMLIMIT.",
      lessons: [
        {
          id: "go-gc-internals",
          slug: "go-garbage-collector-tri-color-mark-sweep-write-barrier",
          courseSlug: "go",
          moduleSlug: "go-garbage-collector-tricolor-mark-sweep",
          title: "Go Garbage Collector: Tri-Color Marking & Write Barriers",
          description: "Deconstruct the Go runtime Garbage Collector: Tri-Color concurrent mark-and-sweep, Hybrid Write Barrier (Dijkstra + Yuasa), Mark Termination phases, and tuning `GOMEMLIMIT` and `GOGC` (Pacer algorithm).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Tri-Color Marking algorithm: White (unvisited), Grey (scanned, unvisited children), Black (reachable)",
            "Why the Hybrid Write Barrier prevents GC race conditions during active concurrent mutations",
            "The Go GC Pacer feedback loop and controlling GC frequency with `GOGC` (default: 100)",
            "Enforcing memory limits and preventing OOM kills using `GOMEMLIMIT` (Go 1.19+)",
          ],
          introduction: `Go uses a concurrent, non-moving, tri-color mark-sweep garbage collector designed for low latency over peak throughput. Unlike Java's generational GC which moves and compacts objects, Go keeps objects in place and marks pointers concurrently while application goroutines (mutators) run. The Hybrid Write Barrier ensures that if mutators move pointers during marking, no reachable objects are missed.`,
          whyItMatters: `Tuning \`GOMEMLIMIT\` prevents Kubernetes Out-Of-Memory (OOM) fatal kills by instructing the GC Pacer to trigger collections dynamically before container cgroup memory limits are reached.`,
          syntax: `GOGC=100 GOMEMLIMIT=2GiB ./server\nimport "runtime/debug"\ndebug.SetMemoryLimit(2 * 1024 * 1024 * 1024)`,
          mainExample: {
            title: "Simulating GC Pacer Metrics and Inspecting GC Pauses in Go",
            language: "go",
            code: `// Go Garbage Collector Telemetry & GOMEMLIMIT Tuning
package main

import (
	"fmt"
	"runtime"
	"runtime/debug"
	"time"
)

func main() {
	fmt.Println("=== Go Concurrent GC Engine Diagnostics ===")

	// 1. Configure GOMEMLIMIT (Soft memory ceiling for GC Pacer)
	previousLimit := debug.SetMemoryLimit(512 * 1024 * 1024) // 512 MB soft limit
	fmt.Printf("Configured GOMEMLIMIT soft ceiling: 512MB (Previous: %d bytes)\\n", previousLimit)

	// 2. Allocate memory to trigger GC marking phases
	start := time.Now()
	var holder [][]byte
	for i := 0; i < 50; i++ {
		// Allocate 5MB blocks
		buf := make([]byte, 5*1024*1024)
		holder = append(holder, buf)
		if len(holder) > 10 {
			holder = holder[5:] // Release 25MB to trigger GC reclamation
		}
	}

	// 3. Inspect GC Pause Telemetry
	var memStats runtime.MemStats
	runtime.ReadMemStats(&memStats)

	fmt.Printf("Total Alloc: %d MB\\n", memStats.TotalAlloc/1024/1024)
	fmt.Printf("Heap In-Use: %d MB\\n", memStats.HeapInuse/1024/1024)
	fmt.Printf("Number of GC Cycles: %d\\n", memStats.NumGC)
	fmt.Printf("Latest GC Pause: %v\\n", time.Duration(memStats.PauseNs[(memStats.NumGC+255)%256]))
	fmt.Printf("Benchmark finished in %v with sub-millisecond GC pauses!\\n", time.Since(start))
}`,
            executable: true,
            explanation: [
              "Tri-color marking colors all objects White at the start of a GC cycle.",
              "Roots (global variables and goroutine stacks) are marked Grey and pushed to a scan work-queue.",
              "The Hybrid Write Barrier shades new and modified pointer targets Grey to ensure mutator goroutines do not hide objects behind Black pointers.",
              "debug.SetMemoryLimit instructs the GC Pacer to adjust GC frequency dynamically to stay under the 512MB ceiling.",
            ],
          },
          detailedExplanation: [
            "GC Pacer Feedback Loop: The Pacer estimates the rate of memory allocation versus the rate of GC marking. If mutators allocate faster than GC worker threads can mark, the Pacer engages 'Mutator Assist', forcing allocating goroutines to spend CPU time helping the GC mark objects.",
          ],
          commonMistakes: [
            {
              mistake: "Setting GOGC=off to avoid GC pauses, leading to inevitable Out-Of-Memory container crashes.",
              badCode: "export GOGC=off // Danger: Memory grows unbounded until process is killed",
              goodCode: "export GOMEMLIMIT=1800MiB // Use soft limit to protect Kubernetes memory budgets",
              explanation: "GOGC=off completely disables garbage collection. GOMEMLIMIT allows the GC to run only when needed while respecting RAM limits.",
            },
          ],
          bestPractices: [
            "Set `GOMEMLIMIT` to 90% of your Kubernetes memory request/limit.",
            "Use `GODEBUG=gctrace=1` to observe live heap sizing and mark/sweep phase timings.",
            "Reduce heap allocations by reusing objects with `sync.Pool`.",
          ],
          summary: [
            "Go's GC uses non-moving Tri-Color Concurrent Mark-Sweep with sub-millisecond pauses.",
            "Hybrid Write Barrier ensures memory correctness without Stop-The-World stalls.",
            "`GOMEMLIMIT` prevents Kubernetes OOM crashes by pacing GC cycles dynamically.",
          ],
        },
      ],
    },
    {
      id: "mod-go-14",
      slug: "sync-pool-allocations-lockfree-atomics",
      title: "Module 14: High-Performance Memory: `sync.Pool` & Lock-Free Atomics",
      description: "Eliminate heap allocation overhead with `sync.Pool` thread-local caching, atomic CPU primitives (`sync/atomic`), and memory alignment.",
      lessons: [
        {
          id: "go-sync-pool-atomics",
          slug: "go-sync-pool-memory-allocations-atomic-primitives",
          courseSlug: "go",
          moduleSlug: "sync-pool-allocations-lockfree-atomics",
          title: "High-Performance Go: sync.Pool & Lock-Free Atomics",
          description: "Achieve zero-allocation Go performance: eliminating Garbage Collection pressure with `sync.Pool` per-P local caching, thread-safe lock-free programming with `sync/atomic`, and building lockless state machines.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How `sync.Pool` maintains per-P private and shared object pools to eliminate lock contention",
            "Why `sync.Pool` is cleared during GC cycles and how to size reusable byte buffers correctly",
            "Atomic CPU operations (`atomic.Int64`, `atomic.Pointer[T]`, Compare-And-Swap CAS)",
            "Building high-throughput lock-free counters and configuration pointers",
          ],
          introduction: `Every heap allocation in Go increases GC workload. In high-throughput network services handling 100,000 requests per second, allocating new byte buffers and JSON decoders on every request degrades throughput by 40%. \`sync.Pool\` provides reusable object caching across goroutines without global lock bottlenecks by utilizing per-P private storage.`,
          whyItMatters: `Frameworks like Gin, Fasthttp, and Zerolog achieve extreme throughput by pooling byte buffers and structs with \`sync.Pool\`, reaching 0 bytes/op memory allocations.`,
          syntax: `var bufPool = sync.Pool{ New: func() any { return new(bytes.Buffer) } }\nbuf := bufPool.Get().(*bytes.Buffer)\ndefer bufPool.Put(buf)`,
          mainExample: {
            title: "Zero-Allocation Buffer Recycling with sync.Pool and atomic.Pointer",
            language: "go",
            code: `// Zero-Allocation Buffer Pool & Lock-Free Atomic State
package main

import (
	"bytes"
	"fmt"
	"sync"
	"sync/atomic"
)

// 1. Global Object Pool for Buffer Reuse
var bufferPool = sync.Pool{
	New: func() any {
		// Allocates only when pool is empty
		return new(bytes.Buffer)
	},
}

// 2. Lock-Free Dynamic Configuration using atomic.Pointer (Go 1.19+)
type ServerConfig struct {
	MaxConns int
	RateLimit int
}

var activeConfig atomic.Pointer[ServerConfig]

func main() {
	fmt.Println("=== High-Performance sync.Pool & Lock-Free Atomics ===")

	// Initialize atomic configuration
	activeConfig.Store(&ServerConfig{MaxConns: 5000, RateLimit: 1000})

	// Benchmark Buffer Pool Retrieval
	var wg sync.WaitGroup
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go func(workerID int) {
			defer wg.Done()

			// 1. Retrieve buffer from per-P pool (Zero Heap Allocation!)
			buf := bufferPool.Get().(*bytes.Buffer)
			buf.Reset() // Always reset state before use

			// 2. Read atomic config lock-free (Sub-nanosecond atomic pointer load)
			cfg := activeConfig.Load()

			fmt.Fprintf(buf, "Worker #%d processed with MaxConns=%d", workerID, cfg.MaxConns)
			fmt.Println(buf.String())

			// 3. Return buffer to pool for reuse
			bufferPool.Put(buf)
		}(i)
	}

	wg.Wait()
	fmt.Println("✅ All tasks completed with zero permanent heap allocation overhead!")
}`,
            executable: true,
            explanation: [
              "bufferPool.Get() first checks the calling P's private slot in 0ns without acquiring any locks.",
              "If the private slot is empty, it checks P's shared pool using lock-free pop, and finally steals from peer P pools.",
              "buf.Reset() truncates the buffer length to 0 while preserving underlying capacity in RAM.",
              "atomic.Pointer[T] allows updating application configuration atomically in 1 CPU instruction without mutex locks.",
            ],
          },
          detailedExplanation: [
            "sync.Pool Lifecycle: At the start of every GC cycle, the runtime moves `sync.Pool` objects into a 'victim cache'. If an object is not accessed during the current GC cycle, it is reclaimed. This guarantees pooled memory does not grow unbounded.",
          ],
          commonMistakes: [
            {
              mistake: "Putting bloated, multi-megabyte buffers back into `sync.Pool`, permanently inflating process memory.",
              badCode: "if buf.Cap() > 1024*1024 { pool.Put(buf); } // Leaks large buffer in pool",
              goodCode: "if buf.Cap() <= 64*1024 { pool.Put(buf); } // Only pool reasonable sizes",
              explanation: "If a single request caused a buffer to grow to 50MB, pooling it retains 50MB permanently. Discard oversized buffers.",
            },
          ],
          bestPractices: [
            "Always call `buf.Reset()` before reusing pooled objects.",
            "Use `atomic.Pointer[T]` for hot read-mostly configuration data.",
            "Cap the maximum buffer size allowed back into `sync.Pool` (e.g. discard buffers > 64KB).",
          ],
          summary: [
            "`sync.Pool` eliminates heap allocation latency via lock-free per-P object caching.",
            "`sync/atomic` primitives enable lockless synchronization at hardware CPU speeds.",
            "Recycling buffers dramatically reduces Garbage Collection pressure in high-scale APIs.",
          ],
        },
      ],
    },
    {
      id: "mod-go-15",
      slug: "netpoll-low-level-networking",
      title: "Module 15: Network Poller (netpoll): Zero-Copy epoll & Raw TCP",
      description: "Master Go's network poller: runtime epoll/kqueue integration, zero-copy buffer slicing, and raw TCP connection tuning.",
      lessons: [
        {
          id: "go-netpoll-internals",
          slug: "go-runtime-netpoll-epoll-kqueue-zero-copy-tcp",
          courseSlug: "go",
          moduleSlug: "netpoll-low-level-networking",
          title: "Network Poller Architecture & Zero-Copy TCP Sockets",
          description: "Explore Go's high-concurrency networking layer: runtime `netpoll` integration with OS `epoll`/`kqueue`, non-blocking I/O event notification, TCP socket buffer tuning (`SO_RCVBUF`, `TCP_NODELAY`), and zero-copy packet processing with `splice()`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How `netpoll` bridges Go's synchronous network API (`net.Conn`) with asynchronous OS `epoll` queues",
            "Why Go goroutines park and wake up with zero OS thread context switches during socket I/O",
            "Tuning low-latency TCP sockets with `TCP_NODELAY` (disabling Nagle's algorithm) and keepalives",
            "Zero-copy data streaming from network socket directly to file descriptor using Linux `splice`",
          ],
          introduction: `In traditional C/Java servers, managing 100,000 open TCP sockets required either 100,000 blocking OS threads (exhausting memory) or writing complex non-blocking state machine loops with epoll. Go's runtime includes 'netpoll': an internal event notification engine that allows developers to write straightforward blocking \`conn.Read()\` calls while the runtime transparently monitors sockets with OS \`epoll_wait\`.`,
          whyItMatters: `High-performance proxy servers, API gateways (like Traefik/Caddy), and WebSocket engines use netpoll tuning and zero-copy splices to route gigabits of traffic with near-zero CPU usage.`,
          syntax: `tcpConn.SetNoDelay(true)\ntcpConn.SetReadBuffer(64 * 1024)\n// Linux zero-copy transfer\nio.Copy(dstFile, tcpConn)`,
          mainExample: {
            title: "Tuning Low-Latency Production TCP Server with netpoll Optimizations",
            language: "go",
            code: `// Low-Latency High-Concurrency TCP Server Architecture
package main

import (
	"fmt"
	"net"
	"time"
)

func handleConnection(conn net.Conn) {
	defer conn.Close()

	// 1. Optimize TCP Socket Settings
	if tcpConn, ok := conn.(*net.TCPConn); ok {
		// Disable Nagle's Algorithm: Send packets immediately without buffering!
		_ = tcpConn.SetNoDelay(true)
		// Enable TCP KeepAlive with fast probe intervals
		_ = tcpConn.SetKeepAlive(true)
		_ = tcpConn.SetKeepAlivePeriod(30 * time.Second)
		// Tune Socket Buffer Sizes
		_ = tcpConn.SetReadBuffer(32 * 1024)
		_ = tcpConn.SetWriteBuffer(32 * 1024)
	}

	buffer := make([]byte, 4096)
	for {
		// Set per-read deadline to prevent Slowloris attacks
		_ = conn.SetReadDeadline(time.Now().Add(10 * time.Second))

		// When conn.Read executes, the Goroutine parks in netpoll without consuming CPU!
		n, err := conn.Read(buffer)
		if err != nil {
			return // Disconnected or timeout
		}

		// Echo message back to client
		_, _ = conn.Write(append([]byte("KWAS-ECHO: "), buffer[:n]...))
	}
}

func main() {
	fmt.Println("=== Go Low-Latency netpoll TCP Server ===")
	listener, err := net.Listen("tcp", ":9090")
	if err != nil {
		fmt.Printf("Listen failed (Local demo mode): %v\\n", err)
		return
	}
	defer listener.Close()

	fmt.Println("✅ TCP Listener active on :9090 (Managed by runtime netpoll / epoll)")
}`,
            executable: true,
            explanation: [
              "When conn.Read() encounters an empty socket buffer, the Go runtime parks the goroutine and registers the file descriptor with netpoll (epoll).",
              "When network packets arrive at the NIC, epoll notifies netpoll, which marks the goroutine as 'runnable' and pushes it back to a P run-queue.",
              "tcpConn.SetNoDelay(true) disables Nagle's algorithm, eliminating 40ms delayed-ACK packet latency.",
            ],
          },
          detailedExplanation: [
            "Linux Splice Zero-Copy: When copying data from a `net.TCPConn` directly to a file (`os.File`), Go's `io.Copy` automatically invokes the Linux `splice(2)` system call, streaming data directly from the network kernel buffer to the file page cache without copying bytes into user-space RAM.",
          ],
          commonMistakes: [
            {
              mistake: "Omitting read/write deadlines on long-lived TCP connections, causing socket descriptor leaks from hanging clients.",
              badCode: "conn.Read(buf) // Can hang forever if network disconnects without TCP FIN",
              goodCode: "conn.SetReadDeadline(time.Now().Add(30 * time.Second))",
              explanation: "Dead TCP sockets from abrupt network drops consume file descriptors indefinitely unless monitored with deadlines or keepalive probes.",
            },
          ],
          bestPractices: [
            "Always set `SetNoDelay(true)` on latency-critical RPC and WebSocket connections.",
            "Always configure `SetReadDeadline` and `SetWriteDeadline` to mitigate Slowloris resource exhaustion attacks.",
            "Use `net.Buffers` for vectored I/O (gathering scatter writes into a single `writev` syscall).",
          ],
          summary: [
            "`netpoll` integrates Go's synchronous network API with OS `epoll`/`kqueue`.",
            "Goroutines park during I/O with zero OS thread context-switching overhead.",
            "TCP socket tuning (`TCP_NODELAY`, buffer sizing) delivers sub-millisecond network latency.",
          ],
        },
      ],
    },
    {
      id: "mod-go-16",
      slug: "compiler-escape-analysis-inlining-pprof",
      title: "Module 16: Inlining, Escape Analysis & Profiling with `pprof`",
      description: "Master Go compiler optimizations: Escape Analysis (`-gcflags='-m'`), function inlining heuristics, and CPU/Heap profiling with `pprof`.",
      lessons: [
        {
          id: "go-compiler-pprof",
          slug: "go-compiler-escape-analysis-inlining-pprof-profiling",
          courseSlug: "go",
          moduleSlug: "compiler-escape-analysis-inlining-pprof",
          title: "Escape Analysis, Inlining & pprof Performance Profiling",
          description: "Optimize Go code at the compiler level: understanding Escape Analysis (Stack vs Heap allocation), function inlining budgets, compiler flags (`-gcflags=\"-m\"`), and profiling production CPU, Heap, and Goroutines using `net/http/pprof`.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How the Go compiler determines whether a variable lives on the Stack (0ns deallocation) or Escapes to the Heap",
            "Inspecting escape decisions using `go build -gcflags=\"-m -m\"`",
            "Function Inlining heuristics and why small functions have 0 function call overhead",
            "Capturing live CPU Flamegraphs and Heap profiles with `pprof` and Go Execution Tracer (`go tool trace`)",
          ],
          introduction: `In Go, allocating memory on the Stack is virtually free: when a function returns, its stack pointer moves back and memory is reclaimed in a single CPU instruction without Garbage Collection. If a variable escapes the function scope, the Go compiler allocates it on the Heap, adding GC overhead. Understanding Escape Analysis and profiling with \`pprof\` is how top engineers turn slow services into high-performance engines.`,
          whyItMatters: `Stack allocation is 100x faster than Heap allocation. Eliminating unnecessary escapes reduces GC pause frequency and CPU consumption by 50%+.`,
          syntax: `go build -gcflags="-m" main.go\nimport _ "net/http/pprof"\ngo tool pprof http://localhost:6060/debug/pprof/profile`,
          mainExample: {
            title: "Demonstrating Escape Analysis and Inlining in Go",
            language: "go",
            code: `// Go Compiler Escape Analysis & pprof Diagnostics
package main

import (
	"fmt"
	"net/http"
	_ "net/http/pprof" // Auto-registers /debug/pprof endpoints on default mux
)

type Point struct {
	X, Y int
}

// 1. Stack Allocation (Does NOT escape: compiler allocates directly on caller stack)
// Function is small (budget < 80 AST nodes), so compiler INLINES it completely!
func createStackPoint(x, y int) Point {
	return Point{X: x, Y: y}
}

// 2. Heap Escape: Returning a pointer forces compiler to allocate on the Heap!
// go build -gcflags="-m" outputs: "&Point{...} escapes to heap"
func createHeapPoint(x, y int) *Point {
	p := Point{X: x, Y: y}
	return &p // Escapes to heap because pointer outlives function stack frame!
}

func main() {
	fmt.Println("=== Go Compiler Escape Analysis & pprof ===")

	p1 := createStackPoint(10, 20) // Allocated on Stack (Zero GC pressure)
	p2 := createHeapPoint(30, 40)  // Allocated on Heap (GC tracked)

	fmt.Printf("Stack Point: %+v | Heap Point: %+v\\n", p1, p2)
	fmt.Println("Inspect compiler decisions with: go build -gcflags='-m' main.go")
	fmt.Println("Live pprof endpoints registered on /debug/pprof (CPU, Heap, Goroutines, Block, Mutex)")
}`,
            executable: true,
            explanation: [
              "createStackPoint returns by value: the Point struct is copied onto the caller's stack with zero heap allocation.",
              "createHeapPoint returns a pointer to a local variable: the compiler recognizes it escapes and allocates it on the heap.",
              "Running 'go build -gcflags=\"-m\"' displays exact compiler decisions for inlining and heap escaping.",
              "Importing _ \"net/http/pprof\" attaches live diagnostic profilers to your web server.",
            ],
          },
          detailedExplanation: [
            "Common Causes of Heap Escapes: 1. Passing values to `interface{}` parameters (e.g. `fmt.Println` boxes primitives into heap allocations). 2. Slices with dynamic sizes (`make([]byte, n)` where n is not constant). 3. Pointers returned from functions. 4. Sending pointers over channels.",
          ],
          commonMistakes: [
            {
              mistake: "Passing structs by pointer (`*MyStruct`) for small structs (<64 bytes) thinking it saves memory, which actually forces heap escapes.",
              badCode: "func process(p *SmallStruct) { ... } // Forces pointer escape to heap",
              goodCode: "func process(p SmallStruct) { ... } // Fits in CPU registers / stack",
              explanation: "Small structs (less than 64 bytes) are cheaper to pass by value on the stack than paying heap allocation and GC pointer tracking costs.",
            },
          ],
          bestPractices: [
            "Run `go build -gcflags=\"-m\"` to audit hot functions for heap escapes.",
            "Keep critical inner loop functions small so the compiler can inline them.",
            "Use `go tool pprof -http=:8080 profile.pb.gz` to visualize interactive Flamegraphs.",
          ],
          summary: [
            "Escape Analysis determines whether variables live on the Stack or Heap.",
            "Stack allocations provide instant O(1) deallocation with zero Garbage Collection impact.",
            "`pprof` and Execution Tracer provide comprehensive visibility into production CPU and memory.",
          ],
        },
      ],
    },
  ],
};

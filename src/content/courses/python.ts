import { Course } from "@/types";

export const pythonCourse: Course = {
  id: "course-python",
  slug: "python",
  title: "Python Software Engineering & Data Architecture",
  tagline: "From language fundamentals to object-oriented design, async I/O, data pipelines, and AI foundations.",
  description: "Learn Python 3 for modern engineering: syntax, data structures, list comprehensions, object-oriented programming, decorators, generators, context managers, type hints, package management, and backend/AI pipelines.",
  category: "Programming Languages",
  level: "Beginner",
  estimatedHours: 28,
  icon: "Terminal",
  badgeColor: "emerald",
  prerequisites: ["Basic computer fundamentals."],
  skillsGained: [
    "Python 3 Idiomatic Syntax & PEP 8 Standards",
    "Object-Oriented Programming & Dunder Methods",
    "List, Dict & Set Comprehensions",
    "Decorators, Generators & Context Managers",
    "Type Hinting & Static Typing with mypy",
  ],
  featured: true,
  modules: [
    {
      id: "mod-py-1",
      slug: "intro",
      title: "Module 1: Python Overview & The Zen of Python",
      description: "Python philosophy (import this), indentation rules, interpreter, and REPL.",
      lessons: [
        {
          id: "py-intro",
          slug: "python-introduction",
          courseSlug: "python",
          moduleSlug: "intro",
          title: "Python Introduction & Zen of Python",
          description: "Learn Python's philosophy, syntax simplicity, virtual environments, and interpreter architecture.",
          durationMinutes: 12,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Why Python leads automation, backend, and AI",
            "Indentation-based syntax rules",
            "Writing idiomatic, clean Python (PEP 8)",
          ],
          introduction: `Python is a high-level, interpreted programming language known for its clear syntax and readability. Designed by Guido van Rossum, it emphasizes code simplicity.`,
          whyItMatters: `Python is the undisputed standard language for Artificial Intelligence, Machine Learning, Data Engineering, and automation.`,
          mainExample: {
            title: "List Comprehension & Formatting",
            language: "python",
            code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\neven_squares = [n ** 2 for n in numbers if n % 2 == 0]\nprint(f"Even squares: {even_squares}")`,
            executable: true,
            explanation: ["List comprehensions provide concise filtering and mapping in a single line."],
          },
          detailedExplanation: ["Python uses 4 spaces for block indentation instead of curly braces."],
          commonMistakes: [],
          bestPractices: ["Follow PEP 8 styling conventions."],
          summary: ["Python combines simplicity with immense computational power."],
        },
      ],
    },
    {
      id: "mod-py-2",
      slug: "types-strings",
      title: "Module 2: Variables, Data Types & String Formatting",
      description: "int, float, bool, str, f-strings, string methods, and type casting.",
      lessons: [
        {
          id: "py-types",
          slug: "data-types-and-f-strings",
          courseSlug: "python",
          moduleSlug: "types-strings",
          title: "Python Data Types, Type Casting & f-Strings",
          description: "Master numeric types, boolean logic, string methods, and formatted f-strings (f'{var:.2f}').",
          durationMinutes: 14,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Dynamic typing in Python (int, float, str, bool)",
            "Explicit type casting (int('42'), float('3.14'))",
            "Modern f-string interpolation and decimal formatting",
          ],
          introduction: `Python is dynamically and strongly typed: variable types are determined at runtime, but invalid operations (like adding a string to an integer) raise explicit TypeErrors.`,
          whyItMatters: `f-strings (introduced in Python 3.6) provide the fastest and most readable string interpolation syntax in Python.`,
          mainExample: {
            title: "f-String Formatting",
            language: "python",
            code: `course = "KWAS Academy Python"\nprice = 0.00\nrating = 4.982\n\nprint(f"Course: {course} | Price: \${price:.2f} | Rating: {rating:.1f}/5.0")`,
            executable: true,
            explanation: ["f-strings support inline formatting specifiers like :.2f for decimals."],
          },
          detailedExplanation: ["Strings in Python are immutable; string methods return new modified copies."],
          commonMistakes: [],
          bestPractices: ["Always use f-strings instead of old % formatting or str.format()."],
          summary: ["f-strings and dynamic types provide expressive, concise data representation."],
        },
      ],
    },
    {
      id: "mod-py-3",
      slug: "control-flow",
      title: "Module 3: Control Flow, Loops & Conditionals",
      description: "if/elif/else, for loops, while loops, range(), break, continue, and match/case.",
      lessons: [
        {
          id: "py-control",
          slug: "loops-and-pattern-matching",
          courseSlug: "python",
          moduleSlug: "control-flow",
          title: "Loops, range(), and match/case Pattern Matching",
          description: "Iterate with for and while loops, generate sequences with range(), and use Python 3.10 match/case.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "for loops with range(start, stop, step)",
            "while loops and loop control (break, continue, else)",
            "Structural pattern matching with match/case (Python 3.10+)",
          ],
          introduction: `Control flow dictates the execution path of a program based on conditional evaluations and iterative loops.`,
          whyItMatters: `Structural pattern matching (match/case) allows elegant destructuring and matching on tuples, dicts, and objects.`,
          mainExample: {
            title: "match/case Pattern Matching",
            language: "python",
            code: `def handle_command(command):\n    match command.split():\n        case ["quit"]:\n            return "Exiting system..."\n        case ["load", filename]:\n            return f"Loading file: {filename}"\n        case _:\n            return "Unknown command"\n\nprint(handle_command("load dataset.csv"))`,
            executable: true,
            explanation: ["match/case matches pattern structures and unpacks variables in one step."],
          },
          detailedExplanation: ["The for...else construct in Python executes the else block only if the loop completes without hitting break."],
          commonMistakes: [],
          bestPractices: ["Use enumerate(list) when you need both the index and element in for loops."],
          summary: ["Pattern matching and idiomatic loops provide clean algorithmic control."],
        },
      ],
    },
    {
      id: "mod-py-4",
      slug: "collections",
      title: "Module 4: Collections: Lists, Tuples, Dicts & Sets",
      description: "Mutable lists, immutable tuples, hash-map dictionaries, and unique sets.",
      lessons: [
        {
          id: "py-collections",
          slug: "lists-tuples-dicts-and-sets",
          courseSlug: "python",
          moduleSlug: "collections",
          title: "Python Collections (Lists, Tuples, Dicts, Sets)",
          description: "Master Python's built-in collection types, dictionary lookups, and set operations (union, intersection).",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Lists (mutable ordered) vs Tuples (immutable ordered)",
            "Dictionaries (key-value hash maps) with dict.get(key, default)",
            "Sets for mathematical set operations (union |, intersection &)",
          ],
          introduction: `Python's built-in collection types are highly optimized C implementations designed for speed and flexibility.`,
          whyItMatters: `Dictionary key lookups in Python operate in O(1) average time, making them ideal for high-speed indexing.`,
          mainExample: {
            title: "Dictionary & Set Operations",
            language: "python",
            code: `student = {"id": "S101", "name": "Alex Dev", "gpa": 3.9}\n\n# Safe dictionary lookup with default\nmajor = student.get("major", "Undeclared")\nprint(f"Student: {student['name']} | Major: {major}")\n\nskills_a = {"Python", "SQL", "Docker"}\nskills_b = {"Docker", "Kubernetes", "AWS"}\ncommon = skills_a & skills_b # Set intersection\nprint("Common Skills:", common)`,
            executable: true,
            explanation: ["student.get avoids KeyErrors by returning the default value."],
          },
          detailedExplanation: ["Tuples are hashable and can be used as dictionary keys, whereas lists cannot."],
          commonMistakes: [],
          bestPractices: ["Use set for fast O(1) membership testing (if item in my_set)."],
          summary: ["Collections form the backbone of Python data manipulation."],
        },
      ],
    },
    {
      id: "mod-py-5",
      slug: "comprehensions",
      title: "Module 5: List, Dict & Set Comprehensions",
      description: "Declarative transformations, nested comprehensions, and conditional filtering.",
      lessons: [
        {
          id: "py-comprehensions",
          slug: "comprehensions-mastery",
          courseSlug: "python",
          moduleSlug: "comprehensions",
          title: "Comprehensions Mastery (List, Dict, Set)",
          description: "Write idiomatic Python transformations using list, dictionary, and set comprehensions.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "List comprehensions for inline map and filter operations",
            "Dictionary comprehensions ({k: v for ...}) for key re-mapping",
            "Set comprehensions for filtered unique sets",
          ],
          introduction: `Comprehensions provide a concise syntax to create new collections based on existing iterables.`,
          whyItMatters: `Comprehensions run in optimized C bytecode inside the Python interpreter, executing faster than manual for-loop appends.`,
          mainExample: {
            title: "Dictionary & List Comprehensions",
            language: "python",
            code: `names = ["alex", "sarah", "kenneth", "elena"]\nuppercase_names = [name.upper() for name in names if len(name) > 4]\nprint("Filtered List:", uppercase_names)\n\nname_lengths = {name: len(name) for name in names}\nprint("Dict Mapping:", name_lengths)`,
            executable: true,
            explanation: ["Dictionary comprehension creates key-value pairs in one declarative step."],
          },
          detailedExplanation: ["Avoid writing deeply nested multi-line comprehensions as they degrade code readability."],
          commonMistakes: [],
          bestPractices: ["Keep comprehensions to a single line; if complex logic is required, use a standard for loop."],
          summary: ["Comprehensions deliver fast, expressive collection transformations."],
        },
      ],
    },
    {
      id: "mod-py-6",
      slug: "functions",
      title: "Module 6: Functions, Args, Kwargs & Lambda",
      description: "Positional vs keyword arguments, *args, **kwargs, lambda functions, and type hints.",
      lessons: [
        {
          id: "py-functions",
          slug: "functions-args-kwargs-and-type-hints",
          courseSlug: "python",
          moduleSlug: "functions",
          title: "*args, **kwargs, Lambdas & Type Hints",
          description: "Build flexible functions with variable positional and keyword arguments, and add static type hints.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Variable positional arguments (*args) and keyword arguments (**kwargs)",
            "Anonymous lambda functions for sorting and mapping",
            "Type hints (def fn(x: int) -> str) and verification with mypy",
          ],
          introduction: `Functions in Python support flexible argument passing mechanisms and optional static type hints.`,
          whyItMatters: `Type hints in modern Python power frameworks like FastAPI and Pydantic for automatic data validation.`,
          mainExample: {
            title: "Type-Hinted Function with **kwargs",
            language: "python",
            code: `def build_profile(user_id: str, **metadata: str) -> dict[str, str]:\n    profile = {"id": user_id}\n    profile.update(metadata)\n    return profile\n\nuser = build_profile("usr_101", name="Alex", role="Engineer")\nprint("Profile:", user)`,
            executable: true,
            explanation: ["**metadata captures arbitrary keyword arguments into a dictionary."],
          },
          detailedExplanation: ["Type hints do not impact runtime performance; they are used by IDEs and linters."],
          commonMistakes: [],
          bestPractices: ["Always include type hints on public utility functions."],
          summary: ["Type hints and flexible arguments make Python codebases clean and scalable."],
        },
      ],
    },
    {
      id: "mod-py-7",
      slug: "oop-dunder",
      title: "Module 7: Object-Oriented Python & Dunder Methods",
      description: "Classes, inheritance, encapsulation, @property, and dunder methods (__str__, __repr__, __eq__).",
      lessons: [
        {
          id: "py-oop",
          slug: "oop-and-decorators",
          courseSlug: "python",
          moduleSlug: "oop-dunder",
          title: "OOP, Dunder Methods & Properties (@property)",
          description: "Master classes, __repr__, __eq__, getters/setters with @property, and method overriding.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Object-Oriented classes, constructors (__init__), and inheritance",
            "Special Dunder methods (__str__, __repr__, __len__, __eq__)",
            "Encapsulating getters/setters with the @property decorator",
          ],
          introduction: `In Python, everything is an object. Custom classes define encapsulated data and behavior. Special double-underscore ('dunder') methods allow classes to integrate with Python language features.`,
          whyItMatters: `Implementing __repr__ and __eq__ allows objects to be printed and compared naturally with ==.`,
          mainExample: {
            title: "Custom Class with Dunder Methods",
            language: "python",
            code: `class Developer:\n    def __init__(self, name: str, level: int):\n        self.name = name\n        self.level = level\n\n    def __repr__(self) -> str:\n        return f"Developer(name='{self.name}', level={self.level})"\n\n    def __eq__(self, other) -> bool:\n        return isinstance(other, Developer) and self.level == other.level\n\nd1 = Developer("Alex", 3)\nd2 = Developer("Sarah", 3)\nprint(d1)\nprint(f"Equal Experience Level: {d1 == d2}")`,
            executable: true,
            explanation: ["__repr__ defines the official string representation; __eq__ enables == comparison."],
          },
          detailedExplanation: ["@property allows method calls to look like standard attribute access without breaking public APIs."],
          commonMistakes: [],
          bestPractices: ["Always implement __repr__ on domain data model classes."],
          summary: ["Dunder methods allow custom classes to integrate seamlessly into Python's object model."],
        },
      ],
    },
    {
      id: "mod-py-8",
      slug: "decorators-generators",
      title: "Module 8: Custom Decorators & Generators",
      description: "Higher-order decorators (@decorator), yield keyword, and memory-efficient generator iterators.",
      lessons: [
        {
          id: "py-generators",
          slug: "custom-decorators-and-generators",
          courseSlug: "python",
          moduleSlug: "decorators-generators",
          title: "Custom Function Decorators & Memory Generators (yield)",
          description: "Write timing/caching decorators and stream infinite datasets with generators and the 'yield' keyword.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Writing custom decorators with functools.wraps",
            "Streaming data one item at a time with yield generators",
            "Memory differences: generator expressions vs list comprehensions",
          ],
          introduction: `Decorators modify function behavior without altering their source code. Generators produce items lazily on demand rather than allocating entire collections in memory.`,
          whyItMatters: `Streaming a 10,000,000 row CSV with a generator uses 5KB memory instead of 4GB RAM.`,
          mainExample: {
            title: "Timing Decorator & Generator Stream",
            language: "python",
            code: `import time\nfrom functools import wraps\n\ndef timing(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        t0 = time.time()\n        result = func(*args, **kwargs)\n        print(f"[{func.__name__}] finished in {(time.time() - t0)*1000:.2f}ms")\n        return result\n    return wrapper\n\ndef number_stream(n):\n    for i in range(n):\n        yield i * i\n\n@timing\ndef run():\n    stream = number_stream(5)\n    print("Generator Yields:", list(stream))\n\nrun()`,
            executable: true,
            explanation: ["yield pauses function execution and returns the next value lazily."],
          },
          detailedExplanation: ["Generator expressions (x for x in data) use parentheses instead of square brackets."],
          commonMistakes: [],
          bestPractices: ["Use functools.wraps inside decorators to preserve docstrings and function names."],
          summary: ["Decorators and generators enable clean, memory-efficient software architectures."],
        },
      ],
    },
    {
      id: "mod-py-9",
      slug: "file-io",
      title: "Module 9: File I/O, Context Managers & JSON",
      description: "Reading/writing files with 'with open(...)', custom context managers (__enter__/__exit__), and JSON parsing.",
      lessons: [
        {
          id: "py-files",
          slug: "context-managers-and-json",
          courseSlug: "python",
          moduleSlug: "file-io",
          title: "Context Managers (with) & JSON Serialization",
          description: "Manage file handles safely with context managers and serialize Python structures with the json module.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why the 'with' statement guarantees files close even on exceptions",
            "Writing custom context managers with contextlib.contextmanager",
            "Serializing and deserializing data with json.dumps and json.loads",
          ],
          introduction: `Context managers in Python handle resource allocation and cleanup automatically, ensuring files, database transactions, and thread locks are released safely.`,
          whyItMatters: `Leaving file handles open causes OS file descriptor exhaustion in production servers.`,
          mainExample: {
            title: "JSON Serialization with Context Manager",
            language: "python",
            code: `import json\n\ndata = {\n    "platform": "KWAS Academy",\n    "courses": 18,\n    "active": True\n}\n\n# Serialize to JSON string\njson_text = json.dumps(data, indent=2)\nprint("JSON Output:\\n", json_text)`,
            executable: true,
            explanation: ["json.dumps serializes dictionaries into formatted JSON strings."],
          },
          detailedExplanation: ["The 'with' statement calls __enter__() on entry and guarantees __exit__() on completion."],
          commonMistakes: [],
          bestPractices: ["Always access files and locks using the 'with' statement."],
          summary: ["Context managers guarantee deterministic resource cleanup."],
        },
      ],
    },
    {
      id: "mod-py-10",
      slug: "asyncio",
      title: "Module 10: Asynchronous Python with AsyncIO",
      description: "AsyncIO event loop, async/await, coroutines, tasks, and asyncio.gather().",
      lessons: [
        {
          id: "py-asyncio",
          slug: "asyncio-and-coroutines",
          courseSlug: "python",
          moduleSlug: "asyncio",
          title: "AsyncIO, Coroutines & Concurrency (async/await)",
          description: "Perform non-blocking I/O operations concurrently using Python's native asyncio library.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The AsyncIO single-threaded event loop model",
            "Defining coroutines with async def and calling with await",
            "Running tasks concurrently with asyncio.gather()",
          ],
          introduction: `AsyncIO is a library to write concurrent code using the async/await syntax. It powers high-speed modern Python web frameworks like FastAPI and aiohttp.`,
          whyItMatters: `Fetching 100 API endpoints concurrently with AsyncIO takes 2 seconds instead of 200 seconds sequentially.`,
          mainExample: {
            title: "Concurrent Tasks with asyncio.gather",
            language: "python",
            code: `import asyncio\n\nasync def fetch_service(name, delay):\n    await asyncio.sleep(delay) # Non-blocking async sleep\n    return f"Service {name} online"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch_service("Auth", 0.05),\n        fetch_service("Database", 0.08),\n        fetch_service("Cache", 0.02),\n    )\n    for r in results:\n        print(r)\n\nasyncio.run(main())`,
            executable: true,
            explanation: ["asyncio.gather executes all three coroutines concurrently."],
          },
          detailedExplanation: ["AsyncIO is ideal for I/O-bound network tasks; use multiprocessing for CPU-bound tasks."],
          commonMistakes: [],
          bestPractices: ["Never call synchronous blocking functions (like time.sleep) inside async coroutines."],
          summary: ["AsyncIO delivers high-throughput non-blocking concurrency in Python."],
        },
      ],
    },
    {
      id: "mod-py-11",
      slug: "packaging",
      title: "Module 11: Package Management with pip & Virtual Environments",
      description: "venv, pip, pyproject.toml, requirements.txt, and publishing packages to PyPI.",
      lessons: [
        {
          id: "py-packaging",
          slug: "virtual-environments-and-packaging",
          courseSlug: "python",
          moduleSlug: "packaging",
          title: "Virtual Environments (venv), pyproject.toml & pip",
          description: "Isolate project dependencies with venv, manage versions, and configure modern pyproject.toml package metadata.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Creating isolated environments with python -m venv .venv",
            "Locking dependencies with pip freeze > requirements.txt",
            "Modern packaging standards with pyproject.toml and hatch/poetry",
          ],
          introduction: `Python virtual environments create isolated folder environments with their own Python interpreter and site-packages, preventing dependency conflicts between projects.`,
          whyItMatters: `Virtual environments guarantee that installing package updates in one project never breaks other projects on your machine.`,
          mainExample: {
            title: "Virtual Environment Setup Commands",
            language: "bash",
            code: `# 1. Create virtual environment\npython -m venv .venv\n\n# 2. Activate environment\n# Windows: .venv\\Scripts\\activate\n# macOS/Linux: source .venv/bin/activate\n\n# 3. Install packages\npip install fastapi uvicorn pydantic`,
            executable: false,
            explanation: ["Virtual environment isolates installed binaries locally."],
          },
          detailedExplanation: ["Modern packaging uses pyproject.toml as defined in PEP 518/621."],
          commonMistakes: [],
          bestPractices: ["Never install packages globally into the system Python; always use a virtual environment."],
          summary: ["Virtual environments guarantee reproducible, conflict-free Python project dependencies."],
        },
      ],
    },
    {
      id: "mod-py-12",
      slug: "cpython-gil-free-threading-jit",
      title: "Module 12: CPython GIL Free-Threading (PEP 703) & Tier-2 JIT",
      description: "Explore the CPython interpreter: PEP 703 Free-Threaded Python without the GIL, Tier-2 Copy-and-Patch JIT compiler, and opcode specialization.",
      lessons: [
        {
          id: "py-gil-jit",
          slug: "cpython-gil-free-threading-pep-703-tier-2-jit",
          courseSlug: "python",
          moduleSlug: "cpython-gil-free-threading-jit",
          title: "CPython GIL Free-Threading & Tier-2 JIT Compiler",
          description: "Deconstruct the internal architecture of modern CPython 3.13+: removing the Global Interpreter Lock (PEP 703 Free-Threading), the Tier-2 Copy-and-Patch JIT compiler, and Adaptive Specializing Opcode evaluation (PEP 659).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why CPython historically relied on the Global Interpreter Lock (GIL) for memory safety",
            "How PEP 703 Free-Threading enables true multi-core parallel CPU execution using Mimalloc biased reference counting",
            "The Tier-2 Copy-and-Patch JIT compilation pipeline (Bytecode → Micro-ops → Native Machine Code)",
            "Specializing Adaptive Interpreter (PEP 659) opcodes (e.g. `LOAD_ATTR_MODULE`, `BINARY_OP_ADD_INT`)",
          ],
          introduction: `For over three decades, the Global Interpreter Lock (GIL) prevented standard Python threads from executing CPU-bound bytecode in parallel on multi-core processors. Python 3.13+ introduces experimental Free-Threading (PEP 703), replacing the global mutex with biased reference counting and thread-safe allocators (Mimalloc), alongside a Copy-and-Patch JIT compiler that converts hot micro-ops into native x86_64/ARM64 machine instructions.`,
          whyItMatters: `Free-threaded Python unlocks true CPU parallelism without multiprocessing IPC overhead, dramatically accelerating data science, machine learning inference, and high-frequency backend services.`,
          syntax: `# Run free-threaded Python 3.13+\nPYTHON_GIL=0 python -X gil=0 script.py\nimport sys\nprint(sys._is_gil_enabled())`,
          mainExample: {
            title: "Inspecting GIL Status and Specializing Bytecode in Python 3.13+",
            language: "python",
            code: `# CPython 3.13+ Free-Threading and Bytecode Inspection
import sys
import dis
import threading
import time

# 1. Verify GIL Free-Threading Status
gil_status = getattr(sys, "_is_gil_enabled", lambda: True)()
print(f"=== CPython Runtime Diagnostics ===")
print(f"Global Interpreter Lock (GIL) Active: {gil_status}")
if not gil_status:
    print("🚀 True multi-core parallel thread execution is ACTIVE!")

# 2. Inspecting Adaptive Specializing Bytecode (PEP 659)
def compute_vector_dot_product(a: int, b: int) -> int:
    return a * b + 42

print("\n--- Disassembled Specialized Bytecode ---")
dis.dis(compute_vector_dot_product)

# 3. Multi-Threaded Parallel Execution Benchmark
def cpu_heavy_task(thread_id: int):
    total = sum(i * i for i in range(1_000_000))
    # print(f"Thread {thread_id} completed calculation.")

threads = [threading.Thread(target=cpu_heavy_task, args=(i,)) for i in range(4)]
start = time.perf_counter()
for t in threads: t.start()
for t in threads: t.join()
print(f"Parallel Execution Finished in {time.perf_counter() - start:.3f}s")`,
            executable: true,
            explanation: [
                "sys._is_gil_enabled() returns False on free-threaded Python builds (python3.13t).",
                "dis.dis reveals how Python translates high-level functions into specialized opcodes (BINARY_OP_MULTIPLY_INT).",
                "In free-threaded Python, the 4 CPU threads execute simultaneously on 4 distinct physical CPU cores.",
            ],
          },
          detailedExplanation: [
            "Copy-and-Patch JIT Engine: CPython's Tier-2 optimizer collects execution traces from frequently called loops. It emits low-level micro-operations (uops), optimizes them, and stitches together pre-compiled machine code stubs ('copy-and-patch') with minimal JIT compilation latency.",
          ],
          commonMistakes: [
            {
              mistake: "Assuming all legacy C extensions (C-API) work automatically without changes on free-threaded Python.",
              badCode: "import legacy_c_extension # May crash if it assumes GIL protects internal globals",
              goodCode: "import PyMutex # Use thread-safe C-API mutexes in native extensions",
              explanation: "Native C extensions that relied on the GIL for synchronization must be updated with thread-safe locks.",
            },
          ],
          bestPractices: [
            "Benchmark multi-threaded code with `PYTHON_GIL=0` to verify linear CPU scaling.",
            "Use `threading.Thread` for CPU tasks on free-threaded Python instead of heavy `multiprocessing`.",
            "Profile hot code paths using `dis.dis` with `adaptive=True` to inspect specialization.",
          ],
          summary: [
            "PEP 703 enables GIL-free Python with true multi-core parallel threading.",
            "Tier-2 Copy-and-Patch JIT compiles hot micro-ops into native machine code.",
            "Adaptive opcodes specialize type-specific execution for significant speedups.",
          ],
        },
      ],
    },
    {
      id: "mod-py-13",
      slug: "advanced-asyncio-transports-protocols",
      title: "Module 13: Advanced asyncio: Custom Transports & TaskGroups",
      description: "Master low-level asyncio architecture: Transports, Protocols, TaskGroups (Python 3.11+), and uvloop event loops.",
      lessons: [
        {
          id: "py-asyncio-internals",
          slug: "python-asyncio-transports-protocols-taskgroups-uvloop",
          courseSlug: "python",
          moduleSlug: "advanced-asyncio-transports-protocols",
          title: "asyncio Architecture: Transports, Protocols & TaskGroups",
          description: "Dive deep into Python's asynchronous event loop: raw TCP socket streaming with Transports & Protocols, Structured Concurrency with `asyncio.TaskGroup`, and high-performance `uvloop` integration.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The architecture of asyncio: Futures, Tasks, Coroutines, and Event Loop selectors",
            "Low-level streaming with `asyncio.Transport` and `asyncio.Protocol` callbacks",
            "Structured Concurrency using `async with asyncio.TaskGroup()` for error propagation",
            "Replacing default selectors with `uvloop` (libuv-based event loop) for 2x-4x throughput",
          ],
          introduction: `While high-level asyncio functions like \`asyncio.gather()\` and \`asyncio.sleep()\` are common, enterprise network engines (like FastAPI and Uvicorn) operate at the lower Transport and Protocol layer. Transports represent the raw communication channel (TCP, UDP, SSL), while Protocols define the message parsing logic through deterministic event callbacks.`,
          whyItMatters: `Structured Concurrency with \`asyncio.TaskGroup\` ensures that if one concurrent task fails, all sibling tasks are automatically cancelled immediately, preventing dangling background tasks and resource leaks.`,
          syntax: `async with asyncio.TaskGroup() as tg:\n  task1 = tg.create_task(fetch_user())\n  task2 = tg.create_task(fetch_orders())`,
          mainExample: {
            title: "Structured Concurrency with TaskGroup and Low-Level Protocol",
            language: "python",
            code: `# Python 3.11+ Structured Concurrency with TaskGroup & Custom Protocol
import asyncio

# 1. Low-Level TCP Protocol Definition
class EchoServerProtocol(asyncio.Protocol):
    def connection_made(self, transport):
        self.transport = transport
        peername = transport.get_extra_info('peername')
        print(f"[Protocol] Connection established from {peername}")

    def data_received(self, data):
        message = data.decode()
        print(f"[Protocol] Received data: {message.strip()}")
        # Echo data back over transport
        self.transport.write(f"KWAS-ACK: {message}".encode())

    def connection_lost(self, exc):
        print("[Protocol] Client disconnected.")

# 2. Structured Concurrency Task Runner
async def query_microservice(service_name: str, delay: float) -> str:
    await asyncio.sleep(delay)
    return f"{service_name} operational"

async def main():
    print("=== Structured Concurrency with asyncio.TaskGroup ===")
    
    # TaskGroup guarantees that if any task crashes, all siblings are cancelled!
    async with asyncio.TaskGroup() as tg:
        task_auth = tg.create_task(query_microservice("AuthService", 0.05))
        task_billing = tg.create_task(query_microservice("BillingService", 0.08))
        task_analytics = tg.create_task(query_microservice("AnalyticsService", 0.03))

    # All tasks guaranteed to have completed here cleanly
    print(f"✅ Auth: {task_auth.result()}")
    print(f"✅ Billing: {task_billing.result()}")
    print(f"✅ Analytics: {task_analytics.result()}")

asyncio.run(main())`,
            executable: true,
            explanation: [
              "async with asyncio.TaskGroup() creates a structured concurrency scope.",
              "If any task inside the TaskGroup raises an unhandled exception, TaskGroup immediately cancels all remaining sibling tasks and raises an ExceptionGroup.",
              "EchoServerProtocol processes network packets with zero coroutine wrapping overhead.",
            ],
          },
          detailedExplanation: [
            "uvloop Integration: `uvloop` is a drop-in replacement for the default Python asyncio event loop written in Cython on top of libuv. Calling `uvloop.install()` boosts Python async HTTP socket throughput to speeds comparable to Go and Node.js.",
          ],
          commonMistakes: [
            {
              mistake: "Using `asyncio.gather()` without exception handlers, which allows failed tasks to leave sibling tasks running in the background indefinitely.",
              badCode: "results = await asyncio.gather(task1(), task2()) # Can leak tasks on error",
              goodCode: "async with asyncio.TaskGroup() as tg: t1 = tg.create_task(task1()); ...",
              explanation: "`asyncio.gather()` does not automatically cancel sibling tasks if one fails. `TaskGroup` guarantees deterministic structured cleanup.",
            },
          ],
          bestPractices: [
            "Prefer `asyncio.TaskGroup` over `asyncio.gather` for all new Python 3.11+ code.",
            "Use `uvloop.install()` at your application entry point for maximum network throughput.",
            "Always shield critical cleanup operations using `asyncio.shield()` when handling cancellations.",
          ],
          summary: [
            "asyncio separates byte transmission (Transports) from message parsing (Protocols).",
            "`TaskGroup` enforces Structured Concurrency with automatic sibling task cancellation.",
            "`uvloop` brings C-speed libuv event loop performance to Python applications.",
          ],
        },
      ],
    },
    {
      id: "mod-py-14",
      slug: "metaclasses-descriptor-protocol-mro",
      title: "Module 14: Metaclasses, Descriptor Protocol & MRO Resolution",
      description: "Master Python OOP metaprogramming: custom metaclasses (`type`), the 3-method Descriptor protocol, and C3 Linearization (MRO).",
      lessons: [
        {
          id: "py-metaclasses-descriptors",
          slug: "python-metaclasses-descriptor-protocol-c3-mro",
          courseSlug: "python",
          moduleSlug: "metaclasses-descriptor-protocol-mro",
          title: "Metaclasses, Descriptors & C3 Linearization (MRO)",
          description: "Master Python's deepest object model internals: intercepting class creation with Metaclasses (`__new__`, `__init__`), building validated fields with the Descriptor Protocol (`__get__`, `__set__`, `__set_name__`), and understanding C3 Linearization (Method Resolution Order).",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How classes are themselves instances of metaclasses (`type`)",
            "The Descriptor Protocol: `__get__`, `__set__`, `__delete__`, and `__set_name__`",
            "Building an ORM field validator using descriptors and `__init_subclass__`",
            "Method Resolution Order (MRO) calculation using the C3 Linearization algorithm",
          ],
          introduction: `In Python, everything is an object—including classes themselves. Metaclasses are the blueprints for classes. By overriding a metaclass's \`__new__\` method, frameworks like Django ORM, Pydantic, and SQLAlchemy inspect class attributes, validate types, and construct database mappings before the class is even instantiated into memory.`,
          whyItMatters: `Descriptors power Python's built-in \`@property\`, \`@classmethod\`, and \`@staticmethod\` decorators. Understanding descriptors allows you to write reusable attribute validation engines with zero boilerplate.`,
          syntax: `class TypedField:\n  def __set_name__(self, owner, name): self.name = name\n  def __set__(self, instance, value): ...\n\nclass Meta(type):\n  def __new__(mcs, name, bases, attrs): ...`,
          mainExample: {
            title: "Type-Safe Model Architecture with Descriptors and Metaclasses",
            language: "python",
            code: `# Metaprogramming with Descriptors and Metaclasses

# 1. Type-Enforcing Descriptor Protocol
class ValidatedString:
    def __init__(self, min_len: int = 1, max_len: int = 100):
        self.min_len = min_len
        self.max_len = max_len

    def __set_name__(self, owner, name):
        # Automatically captures the attribute name on the owner class
        self.storage_name = f"_{name}"

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.storage_name, "")

    def __set__(self, instance, value):
        if not isinstance(value, str):
            raise TypeError(f"Attribute must be a string, got {type(value).__name__}")
        if not (self.min_len <= len(value) <= self.max_len):
            raise ValueError(f"Length must be between {self.min_len} and {self.max_len} chars.")
        setattr(instance, self.storage_name, value)

# 2. Metaclass registering all managed domain entities
class ModelRegistryMeta(type):
    registry = {}

    def __new__(mcs, name, bases, attrs):
        cls = super().__new__(mcs, name, bases, attrs)
        if name != "BaseModel":
            mcs.registry[name] = cls
            print(f"[Metaclass] Registered Model: {name}")
        return cls

class BaseModel(metaclass=ModelRegistryMeta):
    pass

# 3. Clean Domain Class Definition
class CourseEntity(BaseModel):
    title = ValidatedString(min_len=3, max_len=50)
    slug = ValidatedString(min_len=2, max_len=30)

    def __init__(self, title: str, slug: str):
        self.title = title
        self.slug = slug

# Demonstration
course = CourseEntity("Distributed Systems", "distributed-systems")
print(f"✅ Created Course: {course.title} (Slug: {course.slug})")

# Validations fire automatically on assignment!
try:
    course.title = "" # Raises ValueError
except ValueError as e:
    print(f"Validation Caught: {e}")`,
            executable: true,
            explanation: [
              "__set_name__ automatically discovers the attribute variable name ('title', 'slug') without hardcoding strings.",
              "__set__ intercepts every assignment (course.title = '...'), executing validation before storing in private instance dict.",
              "ModelRegistryMeta intercepts the class definition at import time, registering it in the global entity catalog.",
            ],
          },
          detailedExplanation: [
            "C3 Linearization Algorithm: When a class inherits from multiple parents (`class D(B, C)`), Python computes its Method Resolution Order (`D.__mro__`) using C3 Linearization. It guarantees that child classes precede parent classes and preserves the local precedence order of base classes.",
          ],
          commonMistakes: [
            {
              mistake: "Storing descriptor values directly on the descriptor instance `self.val` instead of on the target object `instance`.",
              badCode: "def __set__(self, instance, value): self.val = value # Overwrites across ALL instances!",
              goodCode: "def __set__(self, instance, value): setattr(instance, self.storage_name, value)",
              explanation: "Descriptors are class attributes shared across all instances. Storing state on `self` shares data across every object.",
            },
          ],
          bestPractices: [
            "Use `__init_subclass__` for simple class initialization hooks instead of heavy metaclasses.",
            "Always implement `__set_name__` in custom descriptors for clean private attribute naming.",
            "Inspect `Class.__mro__` to debug complex diamond multiple inheritance hierarchies.",
          ],
          summary: [
            "Metaclasses customize the creation and registration of classes at import time.",
            "Descriptors intercept attribute get, set, and delete operations on instances.",
            "C3 Linearization guarantees deterministic multiple inheritance resolution.",
          ],
        },
      ],
    },
    {
      id: "mod-py-15",
      slug: "cython-cffi-buffer-protocol-strides",
      title: "Module 15: Cython, CFFI & NumPy Memory Strides (Buffer Protocol)",
      description: "Accelerate numerical code with Cython C-extensions, CFFI bindings, and zero-copy NumPy Buffer Protocol strides.",
      lessons: [
        {
          id: "py-c-extensions",
          slug: "python-cython-cffi-buffer-protocol-memory-strides",
          courseSlug: "python",
          moduleSlug: "cython-cffi-buffer-protocol-strides",
          title: "Cython, CFFI & The Python Buffer Protocol",
          description: "Bridge Python with native C speed: compile typed Cython `.pyx` files, invoke shared C libraries using `cffi`, and manipulate raw memory buffers with zero copies using the Python Buffer Protocol (`memoryview`).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How Cython compiles typed Python supersets into optimized C extension modules",
            "Interfacing with external C `.so`/`.dll` libraries dynamically using CFFI (C Foreign Function Interface)",
            "The CPython Buffer Protocol (PEP 3118): sharing raw binary memory across libraries without copying",
            "Understanding contiguous memory layouts, strides, and shapes in `memoryview` and NumPy",
          ],
          introduction: `Python's dynamic nature introduces boxing overhead: every integer is a full heap-allocated \`PyObject\` with type tags and reference counts. For high-performance matrix math, video decoding, or numerical simulation, developers use Cython and CFFI to execute raw C pointer arithmetic while exposing clean Python APIs.`,
          whyItMatters: `The Python Buffer Protocol is what makes NumPy, PyTorch, and TensorFlow fast. It allows gigabytes of raw binary tensor data to pass between C++, Rust, and Python without copying a single byte in memory.`,
          syntax: `# Cython syntax\ncdef int fast_sum(int[:] arr):\n  cdef int total = 0\n  return total\n\n# Python memoryview\nmv = memoryview(byte_array)`,
          mainExample: {
            title: "Zero-Copy Memory Manipulation with Python memoryview and Buffer Protocol",
            language: "python",
            code: `# Zero-Copy Memory Slicing with Python Buffer Protocol
import array

# 1. Allocate a contiguous block of 16-bit signed integers in RAM
raw_array = array.array('h', [10, 20, 30, 40, 50, 60, 70, 80])
print(f"Original Array: {raw_array.tolist()}")

# 2. Wrap array in a memoryview (Zero-Copy Buffer Protocol View)
mem_view = memoryview(raw_array)

print(f"Memory Buffer Address: {hex(mem_view.obj.buffer_info()[0])}")
print(f"Item Size in Bytes: {mem_view.itemsize} bytes per element")
print(f"Total Byte Length: {mem_view.nbytes} bytes")

# 3. Create a slice (Does NOT allocate new memory; shares the exact same pointer!)
slice_view = mem_view[2:6]
print(f"Slice View Content: {slice_view.tolist()}")

# 4. Mutating the slice directly modifies the underlying original array!
slice_view[0] = 999 # Modifies element at index 2 of original array

print(f"✅ Original Array AFTER Slice Mutation: {raw_array.tolist()}")
print("Zero memory copies occurred during slicing and mutation operations!");`,
            executable: true,
            explanation: [
              "memoryview exposes the underlying C-level Py_buffer structure without copying data.",
              "Slicing a memoryview (mem_view[2:6]) returns a new view pointer with adjusted memory offsets in O(1) time.",
              "Mutations through the slice are immediately visible in the underlying raw buffer because both share the exact same RAM address.",
            ],
          },
          detailedExplanation: [
            "CFFI (C Foreign Function Interface): CFFI provides an interactive way to load `.so` or `.dll` shared libraries directly from Python using standard C header declarations (`ffi.cdef('int add(int, int);')`), avoiding complex C-API boilerplate.",
          ],
          commonMistakes: [
            {
              mistake: "Converting large binary buffers to standard Python lists (`list(buffer)`), triggering millions of PyObject allocations.",
              badCode: "elements = list(large_byte_array) # Allocates millions of heap objects",
              goodCode: "view = memoryview(large_byte_array) # Zero-copy 0 bytes allocated",
              explanation: "Python lists store pointers to heap-allocated `PyObject` wrappers. `memoryview` reads raw binary data directly.",
            },
          ],
          bestPractices: [
            "Use `memoryview` when slicing network packets or large binary files.",
            "Use Cython with `cimport numpy as cnp` for multi-threaded C-speed array transformations.",
            "Use `cffi` for safe, dynamic bindings to external C and Rust libraries.",
          ],
          summary: [
            "Cython compiles typed Python code into ultra-fast C extension binaries.",
            "The Buffer Protocol enables zero-copy memory sharing between C, Rust, and Python.",
            "`memoryview` performs O(1) buffer slicing without heap memory duplication.",
          ],
        },
      ],
    },
    {
      id: "mod-py-16",
      slug: "memory-profiling-tracemalloc-slots",
      title: "Module 16: Memory Profiling: `tracemalloc`, GC Internals & `__slots__`",
      description: "Eliminate Python memory bloat: inspect heap allocations with `tracemalloc`, tune cyclical GC, and slash class memory by 60% with `__slots__`.",
      lessons: [
        {
          id: "py-memory-profiling",
          slug: "python-memory-profiling-tracemalloc-gc-slots",
          courseSlug: "python",
          moduleSlug: "memory-profiling-tracemalloc-slots",
          title: "Memory Profiling: tracemalloc, GC & __slots__",
          description: "Optimize Python memory consumption: tracing line-by-line allocations with `tracemalloc`, understanding Reference Counting and Cyclical GC generations, and slashing object memory footprint with `__slots__`.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Python's dual memory management: Immediate Reference Counting + Cyclical Garbage Collector (Generations 0, 1, 2)",
            "Pinpointing memory leaks and allocation spikes using the `tracemalloc` module",
            "Why standard Python classes use dynamic `__dict__` and how `__slots__` reduces memory by 60%+",
            "Detecting reference cycles using the `gc` module (`gc.get_referrers()`, `gc.collect()`)",
          ],
          introduction: `Python uses Reference Counting as its primary memory management mechanism: when an object's reference count drops to zero, it is deallocated immediately. To resolve circular references (e.g. A references B, and B references A), CPython runs a generational cyclical garbage collector that scans objects across Generations 0, 1, and 2.`,
          whyItMatters: `By default, every Python class instance maintains an internal \`__dict__\` dictionary for dynamic attribute storage, which consumes ~150 bytes per object. In applications holding millions of objects (such as graph nodes or cache records), declaring \`__slots__\` slashes memory consumption from gigabytes down to megabytes.`,
          syntax: `import tracemalloc\ntracemalloc.start()\n\nclass OptimizedNode:\n  __slots__ = ('id', 'value', 'parent')`,
          mainExample: {
            title: "Memory Profiling with tracemalloc and __slots__ Comparison",
            language: "python",
            code: `# Memory Optimization: tracemalloc & __slots__ Benchmark
import sys
import tracemalloc

# 1. Standard Class (Uses dynamic __dict__)
class StandardUser:
    def __init__(self, user_id: int, username: str):
        self.user_id = user_id
        self.username = username

# 2. Optimized Class with __slots__ (Eliminates __dict__ per instance!)
class SlottedUser:
    __slots__ = ('user_id', 'username')

    def __init__(self, user_id: int, username: str):
        self.user_id = user_id
        self.username = username

# Benchmark Memory Allocations with tracemalloc
tracemalloc.start()

# Allocate 50,000 Slotted instances
slotted_users = [SlottedUser(i, f"user_{i}") for i in range(50000)]
current, peak = tracemalloc.get_traced_memory()
tracemalloc.stop()

print("=== Python Memory Profiling Results ===")
print(f"Memory for 50,000 Slotted Users: {peak / 1024 / 1024:.2f} MB")

# Inspect instance memory size directly
standard_inst = StandardUser(1, "alex")
slotted_inst = SlottedUser(1, "alex")

std_size = sys.getsizeof(standard_inst) + sys.getsizeof(standard_inst.__dict__)
slot_size = sys.getsizeof(slotted_inst)

print(f"Standard Class Instance Size: {std_size} bytes (with __dict__)")
print(f"Slotted Class Instance Size:  {slot_size} bytes (Fixed descriptor array)")
print(f"✅ Memory Savings: {((std_size - slot_size) / std_size) * 100:.1f}% reduction per instance!");`,
            executable: true,
            explanation: [
              "Standard classes allocate a dynamic dictionary (__dict__) for every instance, allowing arbitrary runtime attribute assignment at the cost of high memory overhead.",
              "__slots__ reserves a fixed array of pointers for named attributes, eliminating the __dict__ and reducing memory per object by over 60%.",
              "tracemalloc tracks exact heap memory allocations with Python file and line number origin details.",
            ],
          },
          detailedExplanation: [
            "CPython Cyclical Garbage Collection Generations: New objects are allocated into Generation 0. If they survive a GC collection cycle, they are promoted to Generation 1, and eventually to Generation 2 (long-lived objects). The collector runs less frequently on older generations to minimize CPU overhead.",
          ],
          commonMistakes: [
            {
              mistake: "Creating circular references in classes with `__del__` methods in older Python versions, preventing garbage collection.",
              badCode: "class Node: def __del__(self): pass # Can create uncollectable cycles",
              goodCode: "# Use weakref.ref for parent pointers to prevent circular strong reference cycles",
              explanation: "Circular strong references cannot be collected by reference counting alone. Use `weakref` for back-pointers in trees and graphs.",
            },
          ],
          bestPractices: [
            "Add `__slots__` to data model classes instantiated millions of times.",
            "Use `tracemalloc.take_snapshot()` before and after operations to find memory leaks.",
            "Use `weakref.WeakValueDictionary` for in-memory caches to allow automatic garbage collection.",
          ],
          summary: [
            "CPython combines Reference Counting with a 3-Generation Cyclical Garbage Collector.",
            "`tracemalloc` tracks line-by-line memory allocation differences in production scripts.",
            "`__slots__` replaces `__dict__` with compact memory arrays, saving 60%+ RAM per instance.",
          ],
        },
      ],
    },
  ],
};

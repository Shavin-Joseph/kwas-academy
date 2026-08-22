import { Course } from "@/types";

export const systemDesignCourse: Course = {
  id: "course-system-design",
  slug: "system-design",
  title: "Large-Scale Distributed System Design",
  tagline: "Architect systems serving millions of users — load balancing, caching, sharding, and microservices.",
  description: "Learn to design highly available, fault-tolerant enterprise architectures: Horizontal vs Vertical scaling, Load Balancers (L4 vs L7), Caching strategies (Redis, CDN), Database replication and sharding, CAP Theorem, Message Queues (Kafka, RabbitMQ), Rate Limiting, and Microservices.",
  category: "System Design",
  level: "Advanced",
  estimatedHours: 28,
  icon: "Layers",
  badgeColor: "amber",
  prerequisites: ["Backend & Database Knowledge"],
  skillsGained: [
    "High Availability & Fault Tolerance Architecture Design",
    "Distributed Caching Strategies (Cache-Aside, Write-Through)",
    "Database Sharding, Partitioning & Master-Replica Topologies",
    "CAP Theorem & Distributed Consensus Analysis",
    "Asynchronous Event-Driven Architectures (Message Brokers)",
  ],
  featured: true,
  modules: [
    {
      id: "mod-sys-1",
      slug: "scalability-intro",
      title: "Module 1: System Design Principles & Scalability",
      description: "Vertical vs horizontal scaling, SLA/SLO/SLI metrics, latency vs throughput, and bottlenecks.",
      lessons: [
        {
          id: "sys-intro",
          slug: "system-design-introduction",
          courseSlug: "system-design",
          moduleSlug: "scalability-intro",
          title: "System Design Foundations & Scalability",
          description: "Understand the core building blocks of systems handling millions of requests per second.",
          durationMinutes: 18,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Vertical scaling (scale-up) vs Horizontal scaling (scale-out)",
            "Latency (p50, p95, p99) vs Throughput (RPS)",
            "Availability SLAs (99.9% vs 99.999% 'five nines')",
          ],
          introduction: `System Design is the process of defining architecture, components, modules, interfaces, and data for a system to satisfy specified requirements at scale.`,
          whyItMatters: `Designing distributed systems that remain fast and reliable under high concurrency is one of the most critical skills for senior software engineers.`,
          mainExample: {
            title: "Horizontal Scaling with Stateless Nodes",
            language: "text",
            code: `User Requests -> Anycast DNS -> Load Balancer (Round Robin) -> [Node 1, Node 2, Node 3] -> Shared Database Cluster`,
            takeaway: "Stateless nodes allow horizontal auto-scaling based on CPU load.",
          },
          detailedExplanation: ["Keep application servers stateless by storing session state in distributed caches like Redis."],
          commonMistakes: [],
          bestPractices: ["Always eliminate Single Points of Failure (SPOFs) across every tier."],
          summary: ["Horizontal scaling and stateless architectures enable limitless growth."],
        },
      ],
    },
    {
      id: "mod-sys-2",
      slug: "load-balancing",
      title: "Module 2: Load Balancing (L4 vs L7) & Reverse Proxies",
      description: "Layer 4 transport vs Layer 7 application load balancing, NGINX, HAProxy, and algorithms.",
      lessons: [
        {
          id: "sys-lb",
          slug: "load-balancing-algorithms",
          courseSlug: "system-design",
          moduleSlug: "load-balancing",
          title: "Load Balancers (L4 vs L7) & Consistent Hashing",
          description: "Distribute traffic across server pools using Round Robin, Least Connections, and Consistent Hashing.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Layer 4 (TCP/UDP IP hash) vs Layer 7 (HTTP path, headers, cookies)",
            "Load balancing algorithms: Weighted Round Robin, Least Connections",
            "Consistent Hashing rings to prevent cache stampedes during node scaling",
          ],
          introduction: `Load balancers distribute incoming network traffic across a group of backend servers to maximize throughput, minimize response time, and avoid overload on any single server.`,
          whyItMatters: `Consistent Hashing ensures that when a cache node crashes, only 1/N of keys are remapped rather than invalidating 100% of the cache.`,
          mainExample: {
            title: "Layer 7 HTTP Route Routing",
            language: "nginx",
            code: `upstream api_servers {\n    least_conn;\n    server 10.0.0.1:4000;\n    server 10.0.0.2:4000;\n}\nserver {\n    listen 80;\n    location /api/ {\n        proxy_pass http://api_servers;\n    }\n}`,
            executable: false,
            explanation: ["least_conn routes requests to the server with fewest active connections."],
          },
          detailedExplanation: ["Reverse proxies also provide SSL termination, gzip compression, and DDoS filtering."],
          commonMistakes: [],
          bestPractices: ["Deploy load balancers in active-passive pairs with Virtual IP (VRRP) to prevent LB SPOFs."],
          summary: ["Load balancing distributes concurrency and guarantees high availability."],
        },
      ],
    },
    {
      id: "mod-sys-3",
      slug: "caching",
      title: "Module 3: Distributed Caching (Redis, Memcached, CDN)",
      description: "Cache-aside, write-through, write-behind, eviction policies (LRU, LFU), and cache invalidation.",
      lessons: [
        {
          id: "sys-caching",
          slug: "caching-strategies-and-redis",
          courseSlug: "system-design",
          moduleSlug: "caching",
          title: "Distributed Caching Patterns (Cache-Aside, Write-Through)",
          description: "Accelerate reads to sub-milliseconds using Redis, CDN edge caching, and LRU eviction policies.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Cache-Aside (Lazy loading) vs Write-Through vs Write-Behind",
            "Cache stampede, cache penetration, and cache avalanche mitigation",
            "Eviction policies: Least Recently Used (LRU) vs Least Frequently Used (LFU)",
          ],
          introduction: `Caching stores copies of data in fast, in-memory hardware (like RAM) so that future requests for that data can be served faster.`,
          whyItMatters: `Redis handles 100,000+ operations/second with sub-millisecond latency, shielding primary databases from read overload.`,
          mainExample: {
            title: "Cache-Aside Implementation Pattern",
            language: "javascript",
            code: `async function getCourse(slug) {\n  const cached = await redis.get(\`course:\${slug}\`);\n  if (cached) return JSON.parse(cached);\n  \n  const course = await db.query("SELECT * FROM courses WHERE slug = $1", [slug]);\n  await redis.set(\`course:\${slug}\`, JSON.stringify(course), "EX", 3600);\n  return course;\n}`,
            executable: false,
            explanation: ["Database is queried only on cache miss; cache is populated with 1-hour TTL."],
          },
          detailedExplanation: ["Phil Karlton famously said: 'There are only two hard things in Computer Science: cache invalidation and naming things.'"],
          commonMistakes: [],
          bestPractices: ["Always set a Time-To-Live (TTL) on all cached keys to prevent stale data buildup."],
          summary: ["Caching provides massive read speedups and protects persistent databases."],
        },
      ],
    },
    {
      id: "mod-sys-4",
      slug: "database-scaling",
      title: "Module 4: Database Scaling: Replication, Partitioning & Sharding",
      description: "Master-replica topologies, read replicas, horizontal sharding, and shard key selection.",
      lessons: [
        {
          id: "sys-sharding",
          slug: "database-sharding-and-replication",
          courseSlug: "system-design",
          moduleSlug: "database-scaling",
          title: "Database Replication, Partitioning & Sharding",
          description: "Scale databases past single-machine disk and CPU limits using master-slave replication and horizontal sharding.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Primary-Replica (Master-Slave) replication for read scaling",
            "Horizontal Sharding across multiple database instances based on Shard Key",
            "Handling cross-shard joins and distributed transactions",
          ],
          introduction: `When a single database server runs out of disk space or CPU capacity to process queries, databases scale out horizontally through Replication and Sharding.`,
          whyItMatters: `Sharding splits a 100TB database across 10 database servers of 10TB each based on user_id hashing.`,
          mainExample: {
            title: "Shard Key Routing Logic",
            language: "javascript",
            code: `function getShardDatabase(userId) {\n  const shardCount = 4;\n  const hash = hashFunction(userId);\n  const shardIndex = hash % shardCount;\n  return \`db_shard_\${shardIndex}\`;\n}`,
            executable: false,
            explanation: ["Consistent hashing directs user requests directly to the responsible database shard."],
          },
          detailedExplanation: ["Choosing a poor shard key (like country) causes hotspotting where one shard receives 90% of traffic."],
          commonMistakes: [],
          bestPractices: ["Select high-cardinality, evenly distributed shard keys (like UUID user_id)."],
          summary: ["Replication and sharding scale databases to petabytes of data."],
        },
      ],
    },
    {
      id: "mod-sys-5",
      slug: "cap-theorem",
      title: "Module 5: CAP Theorem & Distributed Consistency",
      description: "Consistency, Availability, Partition Tolerance, PACELC theorem, and eventual consistency.",
      lessons: [
        {
          id: "sys-cap",
          slug: "cap-theorem-and-pacelc",
          courseSlug: "system-design",
          moduleSlug: "cap-theorem",
          title: "The CAP Theorem & Eventual Consistency",
          description: "Understand the fundamental tradeoffs of distributed systems: Consistency (CP) vs Availability (AP) during network partitions.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 pillars of CAP Theorem: Consistency, Availability, Partition Tolerance",
            "Why network partitions (P) are unavoidable in distributed systems",
            "Strong Consistency (PostgreSQL) vs Eventual Consistency (Cassandra, DynamoDB)",
          ],
          introduction: `Eric Brewer's CAP Theorem states that any distributed data store can simultaneously provide at most two out of three guarantees: Consistency, Availability, and Partition Tolerance.`,
          whyItMatters: `When network cables disconnect or routers fail between data centers, you MUST choose between returning an error (CP) or returning potentially stale data (AP).`,
          mainExample: {
            title: "CAP Tradeoff Spectrum",
            language: "text",
            code: `CP (Consistency + Partition Tolerance): Banking, Stock Exchanges (e.g. Spanner, CockroachDB)\nAP (Availability + Partition Tolerance): Social Feeds, DNS, Shopping Carts (e.g. DynamoDB, Cassandra)`,
            takeaway: "Choose CP for financial transactions and AP for high-uptime social streams.",
          },
          detailedExplanation: ["The PACELC theorem extends CAP by evaluating Latency vs Consistency during normal non-partitioned operations."],
          commonMistakes: [],
          bestPractices: ["Design systems with Eventual Consistency unless strict financial correctness is mandatory."],
          summary: ["The CAP theorem defines the fundamental physics of distributed data storage."],
        },
      ],
    },
    {
      id: "mod-sys-6",
      slug: "message-queues",
      title: "Module 6: Asynchronous Message Queues (Kafka, RabbitMQ)",
      description: "Pub/Sub architectures, message brokers, event-driven decoupling, and backpressure buffers.",
      lessons: [
        {
          id: "sys-queues",
          slug: "message-queues-kafka-and-rabbitmq",
          courseSlug: "system-design",
          moduleSlug: "message-queues",
          title: "Message Queues (Kafka, RabbitMQ) & Event-Driven Systems",
          description: "Decouple synchronous microservices using asynchronous message brokers, partition logs, and consumer groups.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Synchronous HTTP request chains vs Asynchronous Event-Driven messaging",
            "RabbitMQ (Smart Broker, Dumb Consumer) vs Apache Kafka (Distributed Commit Log)",
            "At-least-once, at-most-once, and idempotent message consumer processing",
          ],
          introduction: `Message queues enable asynchronous communication between microservices. Instead of Service A waiting for Service B to respond, Service A publishes an event to a queue and immediately returns success to the user.`,
          whyItMatters: `Message queues buffer sudden traffic surges during Black Friday sales, preventing backend database crashes.`,
          mainExample: {
            title: "Asynchronous Order Processing Flow",
            language: "text",
            code: `User Checkout -> Checkout Service -> [Kafka Topic: 'order.created'] \n                                           ├──> Payment Service\n                                           ├──> Email Notification Service\n                                           └──> Inventory Service`,
            takeaway: "Microservices consume events independently without blocking checkout response time.",
          },
          detailedExplanation: ["Idempotency keys guarantee that processing duplicate event deliveries does not charge customers twice."],
          commonMistakes: [],
          bestPractices: ["Always make message consumers idempotent."],
          summary: ["Message queues deliver loose coupling, resilience, and elasticity."],
        },
      ],
    },
    {
      id: "mod-sys-7",
      slug: "api-gateway",
      title: "Module 7: API Gateway & Rate Limiting Algorithms",
      description: "Token Bucket, Leaky Bucket, Sliding Window Log, and API Gateway routing.",
      lessons: [
        {
          id: "sys-rate-limiting",
          slug: "rate-limiting-algorithms-and-api-gateways",
          courseSlug: "system-design",
          moduleSlug: "api-gateway",
          title: "API Gateways & Rate Limiting Algorithms",
          description: "Protect downstream microservices using Token Bucket, Sliding Window Rate Limiters, and API Gateways.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 Rate Limiting Algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window",
            "Distributed rate limiting with Redis sliding logs and Lua scripts",
            "API Gateway responsibilities: Routing, Auth, Rate Limiting, SSL Termination",
          ],
          introduction: `A rate limiter controls the rate of traffic sent by a client or service. In the HTTP world, a rate limiter limits the number of client requests allowed within a specified time window.`,
          whyItMatters: `Rate limiting defends systems against Denial of Service (DoS) attacks, brute force attempts, and abusive scraping.`,
          mainExample: {
            title: "Token Bucket Algorithm Concept",
            language: "javascript",
            code: `// Token bucket refills at 10 tokens/sec up to capacity of 50 tokens\n// Each API request consumes 1 token; if bucket is empty, return HTTP 429 Too Many Requests\nconsole.log("Token Bucket allows short bursts while enforcing steady long-term limits.");`,
            executable: true,
            explanation: ["Token Bucket permits bursts of traffic while enforcing average rate limits."],
          },
          detailedExplanation: ["Return HTTP 429 Too Many Requests with Retry-After headers when limits are exceeded."],
          commonMistakes: [],
          bestPractices: ["Use Redis Lua scripts for atomic distributed rate limit token increments."],
          summary: ["API Gateways and rate limiting protect microservices from overload and abuse."],
        },
      ],
    },
    {
      id: "mod-sys-8",
      slug: "microservices",
      title: "Module 8: Microservices vs Monolithic Architecture",
      description: "Service boundaries, Domain-Driven Design (DDD), gRPC vs REST, and Saga pattern distributed transactions.",
      lessons: [
        {
          id: "sys-microservices",
          slug: "microservices-and-saga-pattern",
          courseSlug: "system-design",
          moduleSlug: "microservices",
          title: "Microservices Architecture & The Saga Pattern",
          description: "Design modular microservices, communicate via high-speed gRPC, and manage distributed transactions with Sagas.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Decomposing monoliths using Domain-Driven Design (Bounded Contexts)",
            "High-speed binary communication with gRPC and Protocol Buffers",
            "Distributed transactions using Choreography/Orchestration Sagas and compensating actions",
          ],
          introduction: `Microservices architecture structures an application as a collection of loosely coupled, independently deployable services organized around business domains.`,
          whyItMatters: `Saga patterns coordinate distributed transactions across independent microservice databases using compensating transactions if a step fails.`,
          mainExample: {
            title: "Compensating Saga Transaction",
            language: "text",
            code: `1. Reserve Inventory (Success)\n2. Authorize Payment (Failed!)\n3. [Compensating Action triggered] -> Release Reserved Inventory`,
            takeaway: "Sagas maintain data consistency across distributed databases without distributed 2PC locks.",
          },
          detailedExplanation: ["gRPC uses HTTP/2 multiplexing and Protocol Buffers binary serialization for 5x faster speed than REST/JSON."],
          commonMistakes: [],
          bestPractices: ["Start with a modular monolith; split into microservices only when organizational scaling demands it."],
          summary: ["Microservices enable independent team deployment and specialized service scaling."],
        },
      ],
    },
    {
      id: "mod-sys-9",
      slug: "storage-systems",
      title: "Module 9: Storage Systems: Object, Block & File",
      description: "Object storage (S3), block storage (EBS), file systems (NFS), and LSM-Trees vs B-Trees.",
      lessons: [
        {
          id: "sys-storage",
          slug: "object-block-and-lsm-trees",
          courseSlug: "system-design",
          moduleSlug: "storage-systems",
          title: "Storage Systems: Object (S3), Block (EBS) & LSM-Trees",
          description: "Understand object storage mechanics, block devices, and write-optimized Log-Structured Merge (LSM) trees.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Object Storage (AWS S3) for immutable blobs with 99.999999999% durability",
            "Block Storage (AWS EBS) for high-IOPS database volumes",
            "LSM-Trees (RocksDB, Cassandra) for ultra-fast write-heavy workloads",
          ],
          introduction: `Different workloads require different storage engines: Object Storage for media files, Block Storage for database disk partitions, and LSM-Trees for high-write logging.`,
          whyItMatters: `LSM-Trees append writes sequentially to disk (100x faster than random B-Tree in-place overwrites), making them ideal for time-series and write-heavy systems.`,
          mainExample: {
            title: "LSM-Tree Write Pipeline",
            language: "text",
            code: `Write -> Write-Ahead Log (WAL on disk) -> MemTable (in RAM) -> SSTables (immutable disk files) -> Background Compaction`,
            takeaway: "Sequential disk writes achieve peak write throughput.",
          },
          detailedExplanation: ["Object storage uses erasure coding across multiple availability zones to achieve 11 nines of durability."],
          commonMistakes: [],
          bestPractices: ["Store user uploads (images/videos) in object storage (S3), never inside relational database BLOBs."],
          summary: ["Choosing the right storage architecture determines system performance and durability."],
        },
      ],
    },
    {
      id: "mod-sys-10",
      slug: "observability",
      title: "Module 10: Observability, Metrics & Distributed Tracing",
      description: "The 3 Pillars of Observability (Metrics, Logs, Traces), OpenTelemetry, Prometheus, and Grafana.",
      lessons: [
        {
          id: "sys-observability",
          slug: "metrics-logs-and-distributed-tracing",
          courseSlug: "system-design",
          moduleSlug: "observability",
          title: "The 3 Pillars of Observability & OpenTelemetry",
          description: "Trace distributed microservice requests across 20+ servers using OpenTelemetry trace IDs and Prometheus metrics.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 Pillars: Metrics (Prometheus), Structured Logs, Distributed Traces (Jaeger/Zipkin)",
            "Propagating W3C Trace Context headers (traceparent) across microservice boundaries",
            "Alerting thresholds on p99 latency regressions and error budgets",
          ],
          introduction: `Observability is the ability to infer the internal states of a system based on its external outputs (Metrics, Logs, and Traces).`,
          whyItMatters: `When an API call takes 4 seconds, distributed tracing pinpoints the exact 3.8-second slow SQL query inside Service #14 instantly.`,
          mainExample: {
            title: "Distributed Trace Span Propagation",
            language: "text",
            code: `Client (TraceID: 4bf92f) -> API Gateway [10ms]\n                             └──> Auth Service [15ms]\n                             └──> Order Service [3800ms] <-- BOTTLENECK FOUND!\n                                   └──> Postgres Query [3750ms]`,
            takeaway: "Distributed spans pinpoint root-cause latency bottlenecks in complex architectures.",
          },
          detailedExplanation: ["OpenTelemetry is the vendor-neutral Cloud Native Computing Foundation (CNCF) standard for telemetry."],
          commonMistakes: [],
          bestPractices: ["Instrument automated alerting on p99 latency spikes before users notice."],
          summary: ["Observability provides visibility and rapid root-cause diagnosis in distributed architectures."],
        },
      ],
    },
    {
      id: "mod-sys-11",
      slug: "case-studies",
      title: "Module 11: Designing Large-Scale Systems (URL Shortener, Feed, Chat)",
      description: "Step-by-step system design blueprints: TinyURL, Twitter Newsfeed, WhatsApp Chat, and YouTube Video Streaming.",
      lessons: [
        {
          id: "sys-case-studies",
          slug: "system-design-interview-blueprints",
          courseSlug: "system-design",
          moduleSlug: "case-studies",
          title: "End-to-End System Design Blueprint (TinyURL & Feed)",
          description: "Master the 4-step framework for system design interviews: Requirements, Back-of-the-Envelope Math, High-Level Architecture, and Deep Dives.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4-step System Design Interview Framework",
            "Back-of-the-envelope calculations for storage, bandwidth, and QPS",
            "Designing a globally scalable URL Shortener (Base62 encoding, KGS, Redis cache)",
          ],
          introduction: `Putting all system design components together: using the standard framework to design scalable, production-grade systems from requirements to trade-offs.`,
          whyItMatters: `Mastering back-of-the-envelope calculations allows you to accurately size server memory, disk storage, and network bandwidth before writing code.`,
          mainExample: {
            title: "TinyURL Architecture Blueprint",
            language: "text",
            code: `User -> Route53 DNS -> CDN -> L7 Load Balancer -> Web Nodes -> Redis Cache -> MongoDB Cluster / Key Generation Service (KGS)`,
            takeaway: "Pre-generating Base62 keys in a Key Generation Service eliminates URL collision locking.",
          },
          detailedExplanation: ["Always address bottlenecks, single points of failure, and data replication trade-offs in design reviews."],
          commonMistakes: [],
          bestPractices: ["Always clarify functional vs non-functional requirements (Availability vs Consistency) first."],
          summary: ["System design blueprints turn complex real-world scaling challenges into structured, elegant architectures."],
        },
      ],
    },
    {
      id: "mod-sd-12",
      slug: "distributed-consensus-raft-paxos-zab",
      title: "Module 12: Distributed Consensus: Raft, Paxos & Zab Internals",
      description: "Master distributed consensus protocols: Raft leader elections and log replication, Multi-Paxos quorums, and ZooKeeper Atomic Broadcast (Zab).",
      lessons: [
        {
          id: "sd-raft-consensus",
          slug: "distributed-consensus-algorithms-raft-paxos-zab-etcd",
          courseSlug: "system-design",
          moduleSlug: "distributed-consensus-raft-paxos-zab",
          title: "Distributed Consensus: Raft, Multi-Paxos & Zab",
          description: "Architect distributed state machines that agree on truth across node failures: Leader Election, Log Replication, Heartbeat timeouts, Split-Vote prevention with randomized timers, Multi-Paxos quorums, and how etcd/Consul power Kubernetes high availability.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Distributed Consensus is required for Leader Election and Distributed Locks",
            "The 3 states of a Raft Node: Follower, Candidate, and Leader",
            "The Raft Log Replication consensus protocol: appending log entries, quorum matching (N/2 + 1), and Commit Index",
            "Handling network partitions (Split-Brain) and recovering with Term numbers",
          ],
          introduction: `In a distributed cluster of independent servers communicating over an unreliable network, nodes can crash and network packets can be lost or delayed. How can a cluster of 5 nodes agree on a single sequential ledger of events without a single point of failure? The Raft and Paxos consensus algorithms provide formal mathematical guarantees of linearizability and crash fault tolerance across distributed nodes.`,
          whyItMatters: `Kubernetes (etcd), Apache Kafka (KRaft), CockroachDB, and HashiCorp Consul rely on Raft consensus to coordinate cluster state, execute leader elections, and guarantee zero split-brain data corruption.`,
          syntax: `// Raft RequestVote RPC\nstruct RequestVoteArgs {\n  term: int, candidateId: string, lastLogIndex: int, lastLogTerm: int\n}`,
          mainExample: {
            title: "Simulating Raft Leader Election and Quorum Consensus in JavaScript",
            language: "javascript",
            code: `// Raft Consensus State Machine & Leader Election Simulation
class RaftNode {
    constructor(id, peers) {
        this.id = id;
        this.peers = peers; // Array of peer node IDs
        this.currentTerm = 0;
        this.votedFor = null;
        this.state = 'FOLLOWER'; // FOLLOWER, CANDIDATE, LEADER
        this.log = [];
        this.commitIndex = 0;
        this.votesReceived = 0;
    }

    startElection() {
        this.state = 'CANDIDATE';
        this.currentTerm += 1;
        this.votedFor = this.id;
        this.votesReceived = 1; // Vote for self

        console.log(\`[\${this.id}] Timed out! Starting Election for Term \${this.currentTerm}...\`);

        // Request votes from all peer nodes
        this.peers.forEach(peer => {
            peer.handleRequestVote(this.id, this.currentTerm, this.log.length - 1);
        });
    }

    handleRequestVote(candidateId, candidateTerm, candidateLastLog) {
        // Reject if candidate term is older
        if (candidateTerm > this.currentTerm) {
            this.currentTerm = candidateTerm;
            this.state = 'FOLLOWER';
            this.votedFor = null;
        }

        if (candidateTerm === this.currentTerm && (this.votedFor === null || this.votedFor === candidateId)) {
            this.votedFor = candidateId;
            console.log(\`[\${this.id}] Voted YES for Candidate \${candidateId} in Term \${candidateTerm}\`);
            return true;
        }
        return false;
    }

    receiveVote() {
        this.votesReceived++;
        // Quorum condition: strictly greater than N / 2 votes
        const majority = Math.floor((this.peers.length + 1) / 2) + 1;
        if (this.votesReceived >= majority && this.state === 'CANDIDATE') {
            this.state = 'LEADER';
            console.log(\`👑 [\${this.id}] Achieved Quorum (\${this.votesReceived} votes)! Promoted to CLUSTER LEADER for Term \${this.currentTerm}.\`);
        }
    }
}

// Instantiate 3-node Raft Cluster
const nodeA = new RaftNode("Node_A", []);
const nodeB = new RaftNode("Node_B", []);
const nodeC = new RaftNode("Node_C", []);

nodeA.peers = [nodeB, nodeC];
nodeB.peers = [nodeA, nodeC];
nodeC.peers = [nodeA, nodeB];

console.log("=== Distributed Raft Consensus Engine ===");
nodeA.startElection();
nodeA.receiveVote(); // From Node_B
nodeA.receiveVote(); // From Node_C
console.log("✅ Raft cluster achieved consensus with guaranteed quorum safety!");`,
            executable: true,
            explanation: [
              "Randomized election timeouts (150ms-300ms) prevent split-vote deadlocks by ensuring one candidate times out first.",
              "A candidate becomes Leader only after obtaining votes from a strict quorum majority (N/2 + 1 nodes).",
              "Terms act as logical clocks: any node receiving a message with a higher term immediately steps down to Follower.",
              "Log entries are committed only after the Leader successfully replicates them to a quorum majority of followers.",
            ],
          },
          detailedExplanation: [
            "Linearizability & Split-Brain Prevention: If a network partition cuts a 5-node cluster into 3 nodes and 2 nodes, only the 3-node partition can form a majority (3 > 5/2). The 2-node partition cannot achieve quorum and rejects all client writes, preventing conflicting split-brain data states.",
          ],
          commonMistakes: [
            {
              mistake: "Configuring an even number of consensus nodes (e.g. 4 nodes or 6 nodes) in production etcd/ZooKeeper clusters.",
              badCode: "cluster_nodes = 4 // Can tolerate only 1 failure (Quorum = 3), same as 3 nodes!",
              goodCode: "cluster_nodes = 3 or 5 // 3 nodes tolerate 1 failure; 5 nodes tolerate 2 failures",
              explanation: "Consensus requires majority `(N/2 + 1)`. A 4-node cluster requires 3 nodes for quorum (tolerating 1 failure). A 3-node cluster also requires 2 nodes for quorum (tolerating 1 failure). Always use odd cluster sizes (3, 5, 7).",
            },
          ],
          bestPractices: [
            "Deploy 3 or 5 nodes across independent availability zones (AZs) for etcd clusters.",
            "Use SSD/NVMe drives with low fsync latency for consensus write-ahead logs.",
            "Rely on managed consensus stores (etcd, Consul) rather than attempting to write custom Raft implementations.",
          ],
          summary: [
            "Distributed consensus guarantees linearizable truth across crashing network nodes.",
            "Raft uses Leader Election, Randomized Timers, and Quorum Log Replication.",
            "Odd-numbered node clusters (3, 5) prevent split-brain partition failures.",
          ],
        },
      ],
    },
    {
      id: "mod-sd-13",
      slug: "crdts-collaborative-architecture",
      title: "Module 13: Conflict-Free Replicated Data Types (CRDTs)",
      description: "Master local-first collaborative architecture: State-based (CvRDT) vs Operation-based (CmRDT) CRDTs, LWW-Element-Set, and text editing (Yjs/Automerge).",
      lessons: [
        {
          id: "sd-crdts-collaborative",
          slug: "crdts-conflict-free-replicated-data-types-local-first-realtime",
          courseSlug: "system-design",
          moduleSlug: "crdts-collaborative-architecture",
          title: "CRDTs & Real-Time Collaborative Architecture",
          description: "Build real-time multi-user collaborative systems (like Figma, Google Docs, Notion): Operation-based vs State-based Conflict-Free Replicated Data Types (CRDTs), PN-Counters, Last-Write-Wins Element Sets (LWW-Set), fractional indexing, and Local-First architecture.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why Operational Transformation (OT) requires a centralized server and how CRDTs enable peer-to-peer collaboration",
            "The mathematical properties of CRDTs: Commutativity (A + B = B + A), Associativity, and Idempotence (A + A = A)",
            "State-based CvRDTs (Lattice Join semi-lattices) vs Operation-based CmRDTs",
            "Designing a Conflict-Free Last-Write-Wins (LWW) Register with hybrid timestamps",
          ],
          introduction: `In traditional web architectures, all client mutations must pass through a single central database lock to resolve conflicts. In Local-First and real-time collaborative applications (Figma, Notion, Linear), users must be able to edit data offline on airplanes and merge changes seamlessly when reconnecting. Conflict-Free Replicated Data Types (CRDTs) are mathematically proven data structures that can be updated concurrently on multiple devices without coordination and guarantee eventual convergence to identical state.`,
          whyItMatters: `CRDTs allow applications to work 100% offline with zero latency, syncing peer-to-peer or via WebSockets with zero conflict resolution popups or data loss.`,
          syntax: `// CRDT Join Semi-Lattice\nmerge(stateA, stateB) = max(stateA.timestamp, stateB.timestamp)`,
          mainExample: {
            title: "Implementing a Conflict-Free Replicated LWW-Element-Set in JavaScript",
            language: "javascript",
            code: `// Conflict-Free Replicated Data Type (CRDT): LWW-Element-Set
class LWWElementSet {
    constructor() {
        // Maps element -> latest add timestamp
        this.addSet = new Map();
        // Maps element -> latest remove timestamp
        this.removeSet = new Map();
    }

    add(element, timestamp = Date.now()) {
        const existing = this.addSet.get(element) || 0;
        if (timestamp > existing) {
            this.addSet.set(element, timestamp);
        }
    }

    remove(element, timestamp = Date.now()) {
        const existing = this.removeSet.get(element) || 0;
        if (timestamp > existing) {
            this.removeSet.set(element, timestamp);
        }
    }

    has(element) {
        const addTime = this.addSet.get(element);
        if (!addTime) return false; // Never added

        const removeTime = this.removeSet.get(element) || 0;
        // Bias towards Add if timestamps are equal
        return addTime >= removeTime;
    }

    // Mathematical Semi-Lattice Merge (Commutative, Associative, Idempotent)
    merge(peerCRDT) {
        const merged = new LWWElementSet();

        // Merge Add Sets (Take maximum timestamp per element)
        const allAddKeys = new Set([...this.addSet.keys(), ...peerCRDT.addSet.keys()]);
        for (const key of allAddKeys) {
            const t1 = this.addSet.get(key) || 0;
            const t2 = peerCRDT.addSet.get(key) || 0;
            merged.addSet.set(key, Math.max(t1, t2));
        }

        // Merge Remove Sets
        const allRemoveKeys = new Set([...this.removeSet.keys(), ...peerCRDT.removeSet.keys()]);
        for (const key of allRemoveKeys) {
            const t1 = this.removeSet.get(key) || 0;
            const t2 = peerCRDT.removeSet.get(key) || 0;
            merged.removeSet.set(key, Math.max(t1, t2));
        }

        return merged;
    }
}

// Client 1 (Offline in Tokyo) & Client 2 (Offline in London)
const clientTokyo = new LWWElementSet();
const clientLondon = new LWWElementSet();

clientTokyo.add("Document_Design_Doc", 100);
clientLondon.add("Document_Design_Doc", 100);
clientLondon.remove("Document_Design_Doc", 150); // London deletes later

// Merge both sets across network
const reconciledState = clientTokyo.merge(clientLondon);

console.log("=== CRDT LWW-Element-Set Convergence Engine ===");
console.log("Document exists after concurrent merge:", reconciledState.has("Document_Design_Doc")); // False (London delete won)
console.log("✅ Replicas converged to identical state with zero central server coordination!");`,
            executable: true,
            explanation: [
              "The LWW-Element-Set tracks both Add and Remove timestamps for each element.",
              "merge() computes the union of timestamps using Math.max(), guaranteeing mathematical associativity and commutativity.",
              "Regardless of whether Tokyo merges London or London merges Tokyo, both replicas arrive at the exact same mathematical state.",
              "Enables peer-to-peer real-time document syncing over WebRTC or WebSockets.",
            ],
          },
          detailedExplanation: [
            "Text Editing CRDTs (Yjs & Automerge): Plain sets cannot model rich text because characters have positions. Text CRDTs use Fractional Indexing and unique item IDs (Client ID + Sequence Number) to insert characters between existing characters without shifting array indices.",
          ],
          commonMistakes: [
            {
              mistake: "Using wall-clock `Date.now()` across devices without clock synchronization, allowing client clock drift to overwrite valid updates.",
              badCode: "timestamp = new Date().getTime() // Fragile due to NTP clock skew",
              goodCode: "timestamp = hybridLogicalClock.now() // Use Hybrid Logical Clocks (HLC)",
              explanation: "Device system clocks drift by hundreds of milliseconds. Hybrid Logical Clocks (HLC) combine physical time with logical counters to prevent clock skew overwrites.",
            },
          ],
          bestPractices: [
            "Use production CRDT libraries (Yjs, Automerge, ElectricSQL) for text editing and real-time collaboration.",
            "Use Hybrid Logical Clocks (HLC) to maintain causal ordering across disconnected clients.",
            "Store CRDT state snapshots periodically to prevent tombstones from bloating memory.",
          ],
          summary: [
            "CRDTs enable offline, peer-to-peer real-time collaborative applications.",
            "Mathematical commutativity and idempotence guarantee deterministic conflict resolution.",
            "Powers modern local-first collaborative platforms like Figma, Notion, and Linear.",
          ],
        },
      ],
    },
    {
      id: "mod-sd-14",
      slug: "event-sourcing-cqrs-saga-pattern",
      title: "Module 14: Event Sourcing, CQRS & Saga Distributed Transactions",
      description: "Master event-driven architecture: Event Sourcing immutable logs, Command Query Responsibility Segregation (CQRS), and Saga orchestrations.",
      lessons: [
        {
          id: "sd-event-sourcing-cqrs",
          slug: "event-sourcing-cqrs-saga-distributed-transactions-microservices",
          courseSlug: "system-design",
          moduleSlug: "event-sourcing-cqrs-saga-pattern",
          title: "Event Sourcing, CQRS & Saga Distributed Transactions",
          description: "Architect mission-critical financial and e-commerce systems: Event Sourcing (immutable append-only event streams), Command Query Responsibility Segregation (CQRS with read models in Elasticsearch/PostgreSQL), and compensating Saga workflows across microservices.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The difference between CRUD state storage and Event Sourced immutable append-only ledgers",
            "Rebuilding aggregate state by replaying historical domain events",
            "Command Query Responsibility Segregation (CQRS): separating write models (EventStore) from read models (Read Projections)",
            "Orchestrating multi-microservice transactions with the Saga Pattern and Compensating Actions",
          ],
          introduction: `In traditional CRUD databases, updating a user's account balance from $1,000 to $800 overwrites the row, permanently destroying historical context of why the change occurred. Event Sourcing models state not as a mutable snapshot, but as an immutable append-only sequence of domain events (\`AccountCreated\`, \`FundsDeposited\`, \`PaymentProcessed\`). CQRS separates the write engine from the read engine, while the Saga pattern guarantees eventual consistency across distributed microservices.`,
          whyItMatters: `Financial banking platforms, blockchain ledgers, flight booking engines, and healthcare systems require 100% auditable event histories and zero data loss.`,
          syntax: `// Event Sourcing Replay\nstate = events.reduce((currentState, event) => apply(currentState, event), initialState);`,
          mainExample: {
            title: "Event-Sourced Banking Aggregate and Compensating Saga Workflow",
            language: "javascript",
            code: `// Event Sourcing Banking Aggregate & Saga Workflow
class BankAccountAggregate {
    constructor(accountId) {
        this.accountId = accountId;
        this.balance = 0;
        this.status = 'PENDING';
        this.changes = []; // Uncommitted events
    }

    // 1. Command Handlers (Validate business logic and emit events)
    openAccount(initialDeposit) {
        if (initialDeposit < 25) throw new Error("Minimum deposit is $25");
        this._applyChange({ type: 'ACCOUNT_OPENED', accountId: this.accountId, amount: initialDeposit });
    }

    withdraw(amount) {
        if (this.status !== 'ACTIVE') throw new Error("Account is not active");
        if (this.balance < amount) throw new Error("Insufficient funds");
        this._applyChange({ type: 'FUNDS_WITHDRAWN', amount });
    }

    // 2. Event Mutator (Pure state reconstruction)
    _applyChange(event) {
        this._mutate(event);
        this.changes.push(event);
    }

    _mutate(event) {
        switch (event.type) {
            case 'ACCOUNT_OPENED':
                this.balance = event.amount;
                this.status = 'ACTIVE';
                break;
            case 'FUNDS_WITHDRAWN':
                this.balance -= event.amount;
                break;
            case 'WITHDRAWAL_FAILED_COMPENSATED':
                this.balance += event.amount; // Compensating rollback event!
                break;
        }
    }

    // Replay historical events to reconstruct state in 0ms!
    static replay(events) {
        const account = new BankAccountAggregate(events[0].accountId);
        events.forEach(e => account._mutate(e));
        return account;
    }
}

// 3. Simulating Event Sourcing Replay
const historicalEvents = [
    { type: 'ACCOUNT_OPENED', accountId: 'ACC_9001', amount: 500 },
    { type: 'FUNDS_WITHDRAWN', amount: 150 },
    { type: 'FUNDS_WITHDRAWN', amount: 50 }
];

const restoredAccount = BankAccountAggregate.replay(historicalEvents);

console.log("=== Event Sourcing & CQRS Aggregate Engine ===");
console.log("Reconstructed Account Status:", restoredAccount.status);
console.log("Reconstructed Balance:       $", restoredAccount.balance); // $300
console.log("✅ State 100% reconstructed from immutable historical event stream!");`,
            executable: true,
            explanation: [
              "The database stores only domain events in an append-only table (Event Store).",
              "Replaying the event stream completely reconstructs the exact in-memory state of the aggregate at any point in history.",
              "CQRS event projectors stream events into optimized read-only databases (Elasticsearch for search, Redis for caching).",
              "If a downstream service fails during a multi-step Saga, the coordinator issues Compensating Events to rollback previous transactions cleanly.",
            ],
          },
          detailedExplanation: [
            "Snapshotting: When an aggregate accumulates thousands of events (e.g. high-volume trading accounts), replaying all events from the beginning becomes slow. Event Sourcing engines take periodic state snapshots every 100 events, loading the latest snapshot and replaying only subsequent events.",
          ],
          commonMistakes: [
            {
              mistake: "Mutating event structures in place or modifying historical event payloads in the Event Store.",
              badCode: "UPDATE events SET amount = 200 WHERE id = 12; // NEVER MUTATE EVENTS!",
              goodCode: "INSERT INTO events (type, amount) VALUES ('CORRECTION_APPLIED', 50);",
              explanation: "Events represent immutable facts that occurred in the past. Always append new compensating events rather than mutating historical records.",
            },
          ],
          bestPractices: [
            "Use Event Sourcing for financial ledgers, order management, and audit-sensitive domains.",
            "Use CQRS to decouple high-scale analytical read queries from write bottlenecks.",
            "Implement idempotent event consumers using message deduplication IDs (`eventId`).",
          ],
          summary: [
            "Event Sourcing stores all domain state mutations as an append-only event stream.",
            "CQRS segregates write aggregates from specialized read-side projection views.",
            "The Saga pattern coordinates distributed microservice transactions via compensating events.",
          ],
        },
      ],
    },
    {
      id: "mod-sd-15",
      slug: "global-distributed-storage-spanner-truetime",
      title: "Module 15: Global Distributed Storage: Spanner TrueTime & Clocks",
      description: "Master globally distributed databases: Google Spanner TrueTime (GPS + Atomic Clocks), Amazon DynamoDB, Vector Clocks, and external consistency.",
      lessons: [
        {
          id: "sd-spanner-truetime",
          slug: "global-distributed-databases-google-spanner-truetime-vector-clocks",
          courseSlug: "system-design",
          moduleSlug: "global-distributed-storage-spanner-truetime",
          title: "Globally Distributed Storage: Spanner TrueTime & Vector Clocks",
          description: "Scale databases across continents with strict ACID guarantees: Google Spanner architecture, TrueTime API with bounded clock uncertainty (GPS + Atomic Clocks), Lamport Timestamps, Vector Clocks, and achieving external consistency (Strict Serializability) globally.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why standard NTP (Network Time Protocol) clock drift breaks ACID transactions across datacenters",
            "The Google Spanner TrueTime API: representing time as an interval `[earliest, latest]` with bounded uncertainty (ε < 7ms)",
            "The Commit Wait rule: waiting out clock uncertainty to guarantee globally ordered serializability",
            "Vector Clocks: capturing causality in leaderless distributed databases (Dynamo, Cassandra)",
          ],
          introduction: `In single-datacenter databases, coordinating transaction commit ordering is straightforward. Across global datacenters (Tokyo, New York, Frankfurt), physical network latency and unsynchronized server clocks (NTP drifts by 100-250ms) make it mathematically impossible to determine which transaction occurred first. Google Spanner solved this by installing GPS receivers and Atomic Clocks in every datacenter, creating the TrueTime API to guarantee global Strict Serializability.`,
          whyItMatters: `Global payment networks (Google Pay, global banking) process millions of multi-continental transactions with zero transaction conflicts and zero stale reads using TrueTime.`,
          syntax: `// TrueTime API\nTTinterval tt = TrueTime.now();\n// Wait until tt.earliest > commit_timestamp (Commit Wait)`,
          mainExample: {
            title: "Simulating Spanner TrueTime Commit Wait and Vector Clock Causality",
            language: "javascript",
            code: `// Google Spanner TrueTime & Vector Clock Causality Simulation
class TrueTimeSimulator {
    constructor(uncertaintyMs = 4) {
        this.epsilon = uncertaintyMs; // Clock uncertainty bound (ε = 4ms)
    }

    now() {
        const physicalTime = Date.now();
        return {
            earliest: physicalTime - this.epsilon,
            latest: physicalTime + this.epsilon,
            uncertainty: this.epsilon
        };
    }

    // Spanner Commit Wait: Guarantees transaction timestamp is strictly in the absolute past
    async commitTransaction(txId) {
        const commitTime = this.now();
        const scheduledTimestamp = commitTime.latest;

        console.log(\`[TX \${txId}] Assigned Commit Timestamp: \${scheduledTimestamp} (Uncertainty: ±\${this.epsilon}ms)\`);

        // Wait until TrueTime.now().earliest > scheduledTimestamp
        const waitDuration = (scheduledTimestamp - this.now().earliest) + 1;
        await new Promise(r => setTimeout(r, waitDuration));

        console.log(\`[TX \${txId}] Commit Wait Completed! Transaction guaranteed to precede any future global transactions.\`);
        return scheduledTimestamp;
    }
}

// 2. Vector Clock Causality Tracker
class VectorClock {
    constructor(nodeId) {
        this.nodeId = nodeId;
        this.clock = { A: 0, B: 0, C: 0 };
    }

    tick() {
        this.clock[this.nodeId]++;
    }

    merge(remoteClock) {
        for (const node in remoteClock) {
            this.clock[node] = Math.max(this.clock[node] || 0, remoteClock[node]);
        }
        this.tick();
    }
}

async function run() {
    console.log("=== Globally Distributed Database Consistency Engine ===");
    const trueTime = new TrueTimeSimulator(5);

    // Execute Spanner Transaction with TrueTime Commit Wait
    await trueTime.commitTransaction("TX_GLOBAL_901");

    // Vector Clock Causality Check
    const nodeA = new VectorClock('A');
    nodeA.tick();
    const nodeB = new VectorClock('B');
    nodeB.merge(nodeA.clock);

    console.log("Node B Vector Clock after merging Node A:", nodeB.clock);
    console.log("✅ External consistency and causal ordering guaranteed across global nodes!");
}
run();`,
            executable: true,
            explanation: [
              "TrueTime represents time as an interval [earliest, latest] where the true absolute time is guaranteed to reside.",
              "Commit Wait Rule: The leader picks a commit timestamp equal to latest, and waits until TrueTime.now().earliest > commit_timestamp before releasing locks.",
              "Because the transaction waits out clock uncertainty (ε), any subsequent transaction across the globe is guaranteed to receive a strictly higher timestamp.",
              "Vector Clocks track causal relationships in peer-to-peer leaderless databases without synchronized hardware clocks.",
            ],
          },
          detailedExplanation: [
            "External Consistency (Strict Serializability): If a transaction T2 begins after transaction T1 commits in real physical time, T2's commit timestamp is mathematically guaranteed to be greater than T1's commit timestamp, eliminating stale read anomalies globally.",
          ],
          commonMistakes: [
            {
              mistake: "Relying on standard system clock `System.currentTimeMillis()` for ordering distributed database writes.",
              badCode: "record.timestamp = System.currentTimeMillis() // Fails due to NTP clock drift and Leap Seconds",
              goodCode: "// Use database-generated monotonic timestamps, TrueTime, or Spanner Commit Timestamps",
              explanation: "Server hardware clocks drift randomly and jump backwards during NTP synchronizations, causing newer writes to be overwritten by older writes.",
            },
          ],
          bestPractices: [
            "Use CockroachDB / Google Cloud Spanner for globally distributed SQL requiring strict multi-region ACID.",
            "Use DynamoDB / Cassandra with Vector Clocks for high-availability leaderless key-value storage.",
            "Always use database-managed commit timestamps rather than application server local timestamps.",
          ],
          summary: [
            "TrueTime uses GPS and Atomic Clocks to bound global clock uncertainty (ε < 7ms).",
            "Commit Wait guarantees global Strict Serializability across multi-region datacenters.",
            "Vector Clocks establish causal happen-before relationships in leaderless NoSQL clusters.",
          ],
        },
      ],
    },
    {
      id: "mod-sd-16",
      slug: "chaos-engineering-zero-downtime-dr",
      title: "Module 16: Chaos Engineering, Zero-Downtime & Disaster Recovery",
      description: "Master enterprise resilience: Chaos Engineering (Chaos Mesh/Litmus), Blue-Green/Canary deployments, and Multi-Region Active-Active DR.",
      lessons: [
        {
          id: "sd-chaos-disaster-recovery",
          slug: "chaos-engineering-zero-downtime-migrations-multi-region-active-active",
          courseSlug: "system-design",
          moduleSlug: "chaos-engineering-zero-downtime-dr",
          title: "Resilience Engineering: Chaos, Zero-Downtime & Active-Active DR",
          description: "Design fault-tolerant resilient architectures: Chaos Engineering experiments (Chaos Monkey, latency injection, packet loss), Blue-Green and Canary zero-downtime deployments, Expand-and-Contract database migrations, and Multi-Region Active-Active disaster recovery (RPO=0, RTO<1min).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The principles of Chaos Engineering: validating system steady state during simulated production outages",
            "Zero-downtime database schema migrations using the Expand-and-Contract (Parallel Run) pattern",
            "Canary traffic routing algorithms (1% -> 10% -> 50% -> 100%) with automated error rate rollbacks",
            "Multi-Region Active-Active vs Active-Passive Disaster Recovery architectures (RPO and RTO metrics)",
          ],
          introduction: `Complex distributed systems will inevitably fail: fiber cables are cut, cloud availability zones lose power, and software updates introduce unexpected memory leaks. Resilience Engineering moves away from hoping failures never happen to designing systems that withstand failure gracefully. Chaos Engineering proactively injects controlled failures into production to uncover vulnerabilities before they cause real-world outages.`,
          whyItMatters: `Mission-critical financial services and e-commerce platforms must achieve 99.999% ('five nines') availability—amounting to less than 5 minutes of total downtime per year.`,
          syntax: `// Expand and Contract DB Migration Steps\n1. Expand: Add nullable column\n2. Dual-Write: Write to both old & new\n3. Backfill: Migrate historical data\n4. Contract: Drop old column`,
          mainExample: {
            title: "Zero-Downtime Database Migration and Automated Canary Rollback Simulation",
            language: "javascript",
            code: `// Zero-Downtime Migration & Automated Canary Deployment Engine
class CanaryDeploymentController {
    constructor() {
        this.trafficSplit = { v1: 100, v2: 0 }; // Initial 100% v1
        this.errorThresholdPercent = 2.0;
    }

    promoteCanary(v2Percent) {
        this.trafficSplit.v2 = v2Percent;
        this.trafficSplit.v1 = 100 - v2Percent;
        console.log(\`[DEPLOYMENT] Shifted traffic: v1=\${this.trafficSplit.v1}% | Canary v2=\${this.trafficSplit.v2}%\`);
    }

    evaluateMetrics(v2ErrorRate) {
        console.log(\`[METRICS MONITOR] Canary v2 Error Rate: \${v2ErrorRate.toFixed(2)}%\`);

        if (v2ErrorRate > this.errorThresholdPercent) {
            console.log("🚨 [ALERT] Error threshold exceeded! Executing AUTOMATED ROLLBACK to v1 (0ms downtime)...");
            this.trafficSplit = { v1: 100, v2: 0 };
            return 'ROLLED_BACK';
        } else {
            console.log("✅ Canary healthy. Promoting to next traffic tier.");
            return 'HEALTHY';
        }
    }
}

// 2. Expand-and-Contract Database Schema Evolution
const migrationPhases = [
    "Phase 1 (Expand): Add new column 'full_name' as NULLABLE. Deploy code reading old OR new column.",
    "Phase 2 (Dual Write): Backend writes to BOTH 'first_name + last_name' and 'full_name'.",
    "Phase 3 (Backfill): Background worker backfills 10,000,000 historical rows with zero lock overhead.",
    "Phase 4 (Contract): Switch read path strictly to 'full_name'. Drop deprecated 'first_name' column."
];

console.log("=== Resilience Engineering & Zero-Downtime Architecture ===");
const canary = new CanaryDeploymentController();
canary.promoteCanary(10); // 10% canary test
canary.evaluateMetrics(0.2); // Healthy (0.2% errors)
canary.promoteCanary(50);
canary.evaluateMetrics(4.8); // Spike in errors (4.8% > 2.0% threshold)

console.log("\\n=== Zero-Downtime Database Migration Playbook ===");
migrationPhases.forEach((p, idx) => console.log(\`[\${idx + 1}] \${p}\`));
console.log("\\n✅ Multi-Region Active-Active DR and Canary pipelines verified!");`,
            executable: true,
            explanation: [
              "Canary deployments route a small fraction of real production traffic (e.g. 5%) to new versions, monitoring error rates before broad release.",
              "Automated rollbacks revert traffic split to v1 in seconds if SLO error budgets are breached.",
              "Expand-and-Contract (Parallel Run) allows database schema migrations without locking tables or breaking backward compatibility with running app instances.",
              "Multi-Region Active-Active serves traffic from two continents simultaneously, achieving RTO < 10 seconds during cloud outages.",
            ],
          },
          detailedExplanation: [
            "RTO vs RPO: Recovery Time Objective (RTO) is the maximum acceptable time to restore service after an outage (e.g. RTO < 1 min). Recovery Point Objective (RPO) is the maximum acceptable data loss measured in time (e.g. RPO = 0 means zero committed data lost).",
          ],
          commonMistakes: [
            {
              mistake: "Renaming a database column directly with `ALTER TABLE RENAME COLUMN` in production, causing instant crashes in running backend instances.",
              badCode: "ALTER TABLE users RENAME COLUMN name TO full_name; // Breaks active app nodes!",
              goodCode: "// Use 4-phase Expand and Contract migration over 2 deploy cycles",
              explanation: "Renaming a column directly breaks all running backend microservice instances that are still querying the old column name.",
            },
          ],
          bestPractices: [
            "Use Chaos Mesh or LitmusChaos to inject pod kills and network latency in staging/canary clusters.",
            "Enforce automated Canary rollbacks tied to Prometheus SLO error rate alerts.",
            "Conduct quarterly Disaster Recovery (DR) game-day simulations to verify multi-region failover.",
          ],
          summary: [
            "Resilience Engineering builds systems that survive inevitable hardware and network failures.",
            "Canary deployments and automated rollbacks prevent bad releases from causing widespread outages.",
            "Expand-and-Contract pattern enables zero-downtime database schema transformations.",
          ],
        },
      ],
    },
  ],
};

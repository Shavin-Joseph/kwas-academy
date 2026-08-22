import { Course } from "@/types";

export const devopsCourse: Course = {
  id: "course-devops",
  slug: "devops",
  title: "DevOps, Docker, Kubernetes & Cloud Engineering",
  tagline: "Containerization, automated CI/CD pipelines, Kubernetes orchestration, and cloud infrastructure.",
  description: "Master modern DevOps practices: Linux CLI, Docker container packaging, multi-stage Dockerfiles, Docker Compose, Kubernetes pods, deployments, services, ingress, CI/CD with GitHub Actions, Terraform Infrastructure as Code (IaC), and AWS/GCP cloud platforms.",
  category: "DevOps & Cloud",
  level: "Intermediate",
  estimatedHours: 30,
  icon: "Server",
  badgeColor: "blue",
  prerequisites: ["Linux basics or programming knowledge"],
  skillsGained: [
    "Docker Containerization & Image Optimization",
    "Kubernetes (K8s) Cluster Orchestration & Helm Charts",
    "Automated CI/CD Pipelines with GitHub Actions",
    "Terraform Declarative Infrastructure as Code (IaC)",
    "Cloud Security, Monitoring & Observability (Prometheus/Grafana)",
  ],
  featured: true,
  modules: [
    {
      id: "mod-devops-1",
      slug: "linux-shell",
      title: "Module 1: Linux Administration & Shell Scripting",
      description: "Linux file permissions (chmod, chown), process management (systemd, ps, top), SSH keys, and bash scripts.",
      lessons: [
        {
          id: "devops-linux",
          slug: "linux-administration-and-bash",
          courseSlug: "devops",
          moduleSlug: "linux-shell",
          title: "Linux Administration, Permissions & Bash Automation",
          description: "Master Linux CLI commands, manage systemd services, configure SSH keys, and write automated bash scripts.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Linux file permissions (rwx, octal chmod 755)",
            "Managing background system services with systemctl (systemd)",
            "Writing resilient bash deployment automation scripts with set -euo pipefail",
          ],
          introduction: `Linux powers over 90% of cloud servers and container runtimes. Mastering the Linux command line is the foundational prerequisite for all DevOps and cloud engineering.`,
          whyItMatters: `Bash scripts automate server provisioning, log rotation, and build pipelines with native operating system speed.`,
          mainExample: {
            title: "Safe Production Bash Script Template",
            language: "bash",
            code: `#!/usr/bin/env bash\nset -euo pipefail # Exit on error, undefined var, and pipeline failure\n\necho "=== Deploying KWAS Platform ==="\nCURRENT_USER=$(whoami)\necho "Executing deploy as user: \${CURRENT_USER}"\n\nmkdir -p /var/log/kwas\necho "Deployment initialized successfully."`,
            executable: false,
            explanation: ["set -euo pipefail ensures script aborts immediately if any command fails."],
          },
          detailedExplanation: ["SSH key authentication (ssh-keygen, authorized_keys) replaces insecure password logins."],
          commonMistakes: [],
          bestPractices: ["Always include 'set -euo pipefail' at the top of all production bash scripts."],
          summary: ["Linux is the universal operating foundation of cloud and containerized computing."],
        },
      ],
    },
    {
      id: "mod-devops-2",
      slug: "git-workflows",
      title: "Module 2: Git Version Control & Branching Workflows",
      description: "Git commit graphs, interactive rebasing, merge strategies, Trunk-Based Development, and GitOps.",
      lessons: [
        {
          id: "devops-git",
          slug: "git-branching-and-trunk-based-development",
          courseSlug: "devops",
          moduleSlug: "git-workflows",
          title: "Git Internals, Interactive Rebase & Trunk-Based Dev",
          description: "Master Git commits, resolve merge conflicts, squash commits with interactive rebase, and practice Trunk-Based Development.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How Git stores snapshots as directed acyclic graph (DAG) objects (blobs, trees, commits)",
            "Interactive rebasing (git rebase -i) to maintain clean commit history",
            "Trunk-Based Development vs GitFlow for rapid continuous integration",
          ],
          introduction: `Git is the distributed version control system that tracks changes in source code during software development.`,
          whyItMatters: `Trunk-Based Development (short-lived feature branches merged to main daily) enables 10x faster deployment frequencies than slow long-lived branch models.`,
          mainExample: {
            title: "Interactive Rebase Command",
            language: "bash",
            code: `# Rebase and squash the last 3 commits into 1 clean commit\ngit rebase -i HEAD~3`,
            executable: false,
            explanation: ["Interactive rebase squashes noisy wip commits into a clean descriptive change."],
          },
          detailedExplanation: ["git cherry-pick allows applying a specific commit from one branch to another."],
          commonMistakes: [],
          bestPractices: ["Keep feature branches small and merge into main within 24-48 hours."],
          summary: ["Disciplined Git workflows form the backbone of automated CI/CD release pipelines."],
        },
      ],
    },
    {
      id: "mod-devops-3",
      slug: "docker-containers",
      title: "Module 3: Docker Containerization & Images",
      description: "Containers vs VMs, Docker daemon, container lifecycle, Docker Hub, and port mapping.",
      lessons: [
        {
          id: "devops-docker-intro",
          slug: "docker-introduction",
          courseSlug: "devops",
          moduleSlug: "docker-containers",
          title: "Docker & Containerization Fundamentals",
          description: "Learn how Docker solves 'it works on my machine' by packaging code and dependencies into isolated container images.",
          durationMinutes: 15,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Containers vs Virtual Machines architecture",
            "Writing production Dockerfiles",
            "Docker networking and volume mounts for persistent data",
          ],
          introduction: `Docker is an open-source platform for building, shipping, and running applications inside lightweight, isolated containers.`,
          whyItMatters: `Docker guarantees that your code runs identically on your laptop, in CI tests, and across cloud clusters.`,
          mainExample: {
            title: "Basic Node.js Dockerfile",
            language: "dockerfile",
            code: `FROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]`,
            executable: false,
            explanation: ["FROM node:20-alpine uses a lightweight 40MB base OS image."],
          },
          detailedExplanation: ["Containers share the host Linux kernel while isolating processes with namespaces and cgroups."],
          commonMistakes: [],
          bestPractices: ["Always use specific image version tags (node:20-alpine) rather than 'latest'."],
          summary: ["Docker provides consistency, portability, and isolation across the software lifecycle."],
        },
      ],
    },
    {
      id: "mod-devops-4",
      slug: "dockerfile-opt",
      title: "Module 4: Multi-Stage Dockerfiles & Optimization",
      description: "Layer caching, multi-stage builds, non-root users, .dockerignore, and slimming image sizes.",
      lessons: [
        {
          id: "devops-docker-multistage",
          slug: "multi-stage-dockerfiles-and-security",
          courseSlug: "devops",
          moduleSlug: "dockerfile-opt",
          title: "Multi-Stage Builds & Container Image Hardening",
          description: "Shrink Docker image sizes by 90% and eliminate vulnerabilities using multi-stage builds and non-root users.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Multi-stage Docker builds: separating build environment from minimal runtime",
            "Docker layer caching order optimization",
            "Running containers as unprivileged non-root users (USER node)",
          ],
          introduction: `Multi-stage builds allow you to use multiple FROM statements in your Dockerfile. You can selectively copy artifacts from one stage to another, leaving behind everything you don't need in the final image.`,
          whyItMatters: `Multi-stage builds prevent compilers, build tools, and source code from bloating production images and creating security attack vectors.`,
          mainExample: {
            title: "Production Next.js Multi-Stage Dockerfile",
            language: "dockerfile",
            code: `# Stage 1: Build\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\n# Stage 2: Minimal Production Runner (Under 90MB)\nFROM node:20-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY --from=builder /app/.next ./.next\nCOPY --from=builder /app/package*.json ./\nRUN npm ci --only=production\nUSER node\nCMD ["npm", "start"]`,
            executable: false,
            explanation: ["Runner stage discards devDependencies, keeping only production bundles."],
          },
          detailedExplanation: ["Copying package.json before source files leverages Docker layer caching to prevent re-installing dependencies on code changes."],
          commonMistakes: [],
          bestPractices: ["Always include a .dockerignore file containing node_modules, .git, and .env."],
          summary: ["Multi-stage builds produce tiny, secure, and fast-starting container images."],
        },
      ],
    },
    {
      id: "mod-devops-5",
      slug: "docker-compose",
      title: "Module 5: Docker Compose Multi-Container Stacks",
      description: "docker-compose.yml, multi-container networking, persistent volumes, and environment variables.",
      lessons: [
        {
          id: "devops-compose",
          slug: "docker-compose-multi-service-stacks",
          courseSlug: "devops",
          moduleSlug: "docker-compose",
          title: "Docker Compose: Multi-Service Local Stacks",
          description: "Spin up full-stack local development environments (App + PostgreSQL + Redis) with a single command.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Defining multi-container services in docker-compose.yml",
            "Automatic bridge networking and service name DNS resolution",
            "Persisting database data using named volumes",
          ],
          introduction: `Docker Compose is a tool for defining and running multi-container Docker applications using a YAML configuration file.`,
          whyItMatters: `Instead of manually configuring and installing PostgreSQL, Redis, and Node, new developers run 'docker compose up' and have a full local stack ready in seconds.`,
          mainExample: {
            title: "Multi-Service docker-compose.yml",
            language: "yaml",
            code: `services:\n  web:\n    build: .\n    ports: ["3000:3000"]\n    environment:\n      - DATABASE_URL=postgres://user:pass@db:5432/app\n    depends_on:\n      - db\n  db:\n    image: postgres:16-alpine\n    environment:\n      - POSTGRES_PASSWORD=pass\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:`,
            executable: false,
            explanation: ["The web service reaches the database using the hostname 'db' automatically."],
          },
          detailedExplanation: ["depends_on ensures the database container starts before the web application."],
          commonMistakes: [],
          bestPractices: ["Always use named volumes for database containers to prevent data loss on container restarts."],
          summary: ["Docker Compose delivers instant, reproducible multi-container development environments."],
        },
      ],
    },
    {
      id: "mod-devops-6",
      slug: "kk8s-architecture",
      title: "Module 6: Kubernetes Architecture & Pods",
      description: "Control Plane (API Server, etcd, scheduler), Worker Nodes (kubelet, kube-proxy), and Pod lifecycle.",
      lessons: [
        {
          id: "devops-k8s-arch",
          slug: "kubernetes-architecture-and-pods",
          courseSlug: "devops",
          moduleSlug: "k8s-architecture",
          title: "Kubernetes (K8s) Architecture & Pod Fundamentals",
          description: "Understand the Kubernetes Control Plane, Worker Nodes, and the fundamental Pod compute primitive.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Kubernetes Control Plane components (kube-apiserver, etcd, kube-scheduler)",
            "Worker Node components (kubelet, container runtime, kube-proxy)",
            "What a Pod is: the smallest deployable compute unit in Kubernetes",
          ],
          introduction: `Kubernetes (K8s) is an open-source container orchestration system for automating application deployment, scaling, and management across fleets of servers.`,
          whyItMatters: `Kubernetes automatically restarts crashed containers, scales pods up during traffic spikes, and coordinates zero-downtime rolling updates.`,
          mainExample: {
            title: "Basic Kubernetes Pod Manifest",
            language: "yaml",
            code: `apiVersion: v1\nkind: Pod\nmetadata:\n  name: kwas-web-pod\n  labels:\n    app: kwas-web\nspec:\n  containers:\n    - name: web\n      image: kwasacademy/web:2.0.0\n      ports:\n        - containerPort: 3000`,
            executable: false,
            explanation: ["Declarative YAML describes the desired state to the Kubernetes API server."],
          },
          detailedExplanation: ["Pods group one or more containers that share network namespaces and storage volumes."],
          commonMistakes: [],
          bestPractices: ["Never deploy raw naked Pods in production; always manage Pods with Deployments."],
          summary: ["Kubernetes provides resilient container orchestration at cluster scale."],
        },
      ],
    },
    {
      id: "mod-devops-7",
      slug: "k8s-deployments",
      title: "Module 7: Kubernetes Deployments, Services & Ingress",
      description: "Deployments (replicas, rolling updates), ClusterIP/NodePort/LoadBalancer Services, and Ingress routing.",
      lessons: [
        {
          id: "devops-k8s-deploy",
          slug: "kubernetes-deployments-and-ingress",
          courseSlug: "devops",
          moduleSlug: "k8s-deployments",
          title: "Deployments, Services & Ingress Controllers",
          description: "Orchestrate zero-downtime rolling updates with Deployments and expose services to internet traffic via Ingress.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Deployments for managing replica sets and rolling zero-downtime updates",
            "Kubernetes Services (ClusterIP, NodePort, LoadBalancer) for stable internal DNS",
            "Ingress Controllers (NGINX/Traefik) for SSL termination and HTTP path routing",
          ],
          introduction: `Deployments maintain a specified number of Pod replicas, automatically replacing failed instances. Services provide stable virtual IPs and load balancing across dynamic pods.`,
          whyItMatters: `During a new version release, Kubernetes Deployments spin up new pods and health-check them before terminating old pods, achieving 0 downtime.`,
          mainExample: {
            title: "Kubernetes Deployment & Service Manifest",
            language: "yaml",
            code: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: kwas-web-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: kwas-web\n  template:\n    metadata:\n      labels:\n        app: kwas-web\n    spec:\n      containers:\n        - name: web\n          image: kwasacademy/web:2.0.0\n          ports:\n            - containerPort: 3000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: kwas-web-service\nspec:\n  type: ClusterIP\n  selector:\n    app: kwas-web\n  ports:\n    - port: 80\n      targetPort: 3000`,
            executable: false,
            explanation: ["Deployment ensures exactly 3 healthy replicas are running at all times."],
          },
          detailedExplanation: ["Readiness and Liveness probes prevent traffic from being sent to starting or unhealthy containers."],
          commonMistakes: [],
          bestPractices: ["Always configure livenessProbe and readinessProbe on container specs."],
          summary: ["Deployments and Services provide self-healing, zero-downtime container management."],
        },
      ],
    },
    {
      id: "mod-devops-8",
      slug: "cicd-actions",
      title: "Module 8: CI/CD Pipelines with GitHub Actions",
      description: "Continuous Integration, automated testing, continuous deployment workflows (.github/workflows), and secrets.",
      lessons: [
        {
          id: "devops-cicd",
          slug: "github-actions-cicd-pipelines",
          courseSlug: "devops",
          moduleSlug: "cicd-actions",
          title: "Automated CI/CD Pipelines with GitHub Actions",
          description: "Build automated testing, linting, Docker build, and cloud deployment pipelines triggered on git push.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "GitHub Actions workflow syntax (triggers, jobs, steps, runners)",
            "Automating test suites (npm test) on pull requests",
            "Securely deploying to production with GitHub Repository Secrets",
          ],
          introduction: `Continuous Integration (CI) and Continuous Deployment (CD) automate the building, testing, and shipping of software upon every git commit.`,
          whyItMatters: `Automated CI pipelines catch breaking changes and test failures before bad code is ever merged to main.`,
          mainExample: {
            title: "GitHub Actions CI Pipeline (.github/workflows/ci.yml)",
            language: "yaml",
            code: `name: Build & Test CI\non: [push, pull_request]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test\n      - run: npm run build`,
            executable: false,
            explanation: ["Workflow runs tests automatically on every push to verify code quality."],
          },
          detailedExplanation: ["Secrets (API tokens, AWS keys) are encrypted and masked in CI logs."],
          commonMistakes: [],
          bestPractices: ["Never hardcode credentials in workflow files; always use secrets.SECRET_NAME."],
          summary: ["CI/CD pipelines automate testing and deployment with absolute consistency."],
        },
      ],
    },
    {
      id: "mod-devops-9",
      slug: "terraform-iac",
      title: "Module 9: Infrastructure as Code (IaC) with Terraform",
      description: "HCL syntax, providers, state management (s3 backend), terraform plan, and apply.",
      lessons: [
        {
          id: "devops-terraform",
          slug: "terraform-infrastructure-as-code",
          courseSlug: "devops",
          moduleSlug: "terraform-iac",
          title: "Terraform & Declarative Infrastructure as Code",
          description: "Provision cloud infrastructure (AWS/GCP VPCs, databases, clusters) declaratively using HashiCorp Terraform.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "HashiCorp Configuration Language (HCL) syntax and providers",
            "The Terraform workflow: init, plan (dry-run preview), and apply",
            "Managing remote state files (terraform.tfstate) in S3 with DynamoDB state locking",
          ],
          introduction: `Infrastructure as Code (IaC) allows you to define, provision, and manage cloud servers, networks, and databases using human-readable configuration files.`,
          whyItMatters: `IaC eliminates manual console clicking errors, allows infrastructure changes to be reviewed in PRs, and enables rebuilding an entire cloud region in minutes.`,
          mainExample: {
            title: "Terraform AWS S3 Bucket Provisioning",
            language: "hcl",
            code: `terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 5.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "us-east-1"\n}\n\nresource "aws_s3_bucket" "kwas_assets" {\n  bucket = "kwas-academy-production-assets"\n}`,
            executable: false,
            explanation: ["terraform apply creates the S3 bucket exactly as declared in HCL."],
          },
          detailedExplanation: ["terraform plan computes the diff between real cloud state and desired configuration."],
          commonMistakes: [],
          bestPractices: ["Always run 'terraform plan' and verify the execution plan before running 'terraform apply'."],
          summary: ["Terraform turns cloud infrastructure into version-controlled, reproducible software."],
        },
      ],
    },
    {
      id: "mod-devops-10",
      slug: "cloud-fundamentals",
      title: "Module 10: Cloud Computing Fundamentals (AWS & GCP)",
      description: "Compute (EC2), Networking (VPC, Subnets, Security Groups), IAM roles, and CloudFront CDN.",
      lessons: [
        {
          id: "devops-cloud",
          slug: "cloud-networking-and-iam-security",
          courseSlug: "devops",
          moduleSlug: "cloud-fundamentals",
          title: "Cloud Architecture (AWS VPC, IAM & CDN)",
          description: "Design secure cloud networks with Virtual Private Clouds (VPCs), subnets, IAM least privilege roles, and CDNs.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "VPC architecture: Public subnets vs isolated Private database subnets",
            "Security Groups and Network Access Control Lists (NACLs)",
            "IAM (Identity and Access Management) Principle of Least Privilege",
          ],
          introduction: `Cloud platforms like AWS and Google Cloud provide scalable on-demand compute, storage, database, and networking services.`,
          whyItMatters: `Placing databases inside private subnets without public internet IPs prevents 99% of automated external scanning attacks.`,
          mainExample: {
            title: "Secure Cloud Subnet Architecture",
            language: "text",
            code: `Internet Gateway -> Public Subnet (Load Balancer & NAT Gateway) -> Private Subnet (App Servers) -> Isolated Subnet (PostgreSQL)`,
            takeaway: "Multi-tier VPC layout insulates sensitive databases from direct public internet exposure.",
          },
          detailedExplanation: ["IAM roles grant temporary credentials to EC2 and ECS instances without hardcoding secret keys."],
          commonMistakes: [],
          bestPractices: ["Never grant '*' admin access in IAM policies; adhere strictly to least privilege."],
          summary: ["Secure cloud architectures separate public ingress from private data layers."],
        },
      ],
    },
    {
      id: "mod-devops-11",
      slug: "observability",
      title: "Module 11: Monitoring & Logging with Prometheus & Grafana",
      description: "PromQL metrics, Prometheus scraping, Grafana dashboards, and Alertmanager notifications.",
      lessons: [
        {
          id: "devops-monitoring",
          slug: "prometheus-and-grafana-dashboards",
          courseSlug: "devops",
          moduleSlug: "observability",
          title: "Cloud Monitoring with Prometheus & Grafana",
          description: "Scrape application metrics with Prometheus, query with PromQL, and build visual dashboards with Grafana.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Pull-based metrics collection with Prometheus /metrics endpoints",
            "Writing PromQL queries (e.g. rate(http_requests_total[5m]))",
            "Building visual incident dashboards and Slack alerts with Grafana Alertmanager",
          ],
          introduction: `Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time series data. Grafana provides visualization dashboards.`,
          whyItMatters: `Visual dashboards display live CPU utilization, memory pressure, and HTTP 5xx error rate spikes in real time.`,
          mainExample: {
            title: "PromQL Error Rate Query",
            language: "promql",
            code: `# Calculate HTTP 5xx error percentage over the last 5 minutes\nsum(rate(http_requests_total{status=~"5.."}[5m])) \n/ \nsum(rate(http_requests_total[5m])) * 100`,
            executable: false,
            explanation: ["PromQL calculates error rate percentage for alerting rules."],
          },
          detailedExplanation: ["Grafana Alertmanager sends instant alerts to on-call engineers via Slack or PagerDuty when thresholds trigger."],
          commonMistakes: [],
          bestPractices: ["Define Service Level Objectives (SLOs) and alert on error budget consumption."],
          summary: ["Continuous monitoring and metrics ensure reliable, high-uptime operations."],
        },
      ],
    },
    {
      id: "mod-do-12",
      slug: "kubernetes-cri-cni-csi-operators",
      title: "Module 12: Kubernetes Internals: CRI, CNI, CSI & Operators",
      description: "Master low-level Kubernetes architecture: Container Runtime Interface (CRI/containerd), CNI network plugins (Calico/Cilium), CSI storage drivers, and Custom Resource Definitions (CRDs) with Operators.",
      lessons: [
        {
          id: "do-k8s-internals",
          slug: "kubernetes-internals-cri-cni-csi-custom-resource-operators",
          courseSlug: "devops",
          moduleSlug: "kubernetes-cri-cni-csi-operators",
          title: "Kubernetes Internals: CRI, CNI, CSI & Custom Operators",
          description: "Deconstruct the Kubernetes control plane and node architecture: Kubelet interaction with Container Runtime Interface (CRI/containerd), Container Network Interface (CNI IPAM routing), Container Storage Interface (CSI PersistentVolumes), and writing automated controllers with Kubebuilder / Operator SDK.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The lifecycle of a Pod from `kubectl apply` -> API Server -> etcd -> Kubelet -> containerd",
            "The 3 Kubernetes Plugin Interfaces: CRI (Execution), CNI (Networking), CSI (Storage)",
            "How CNI plugins (Cilium, Calico) implement Pod IPAM, BGP routing, and NetworkPolicies",
            "Building custom Kubernetes Operators using Custom Resource Definitions (CRDs) and reconciliation loops",
          ],
          introduction: `Kubernetes is not a monolithic container orchestrator; it is an extensible platform built on three standardized plugin interfaces: CRI (Container Runtime Interface), CNI (Container Network Interface), and CSI (Container Storage Interface). Understanding how these interfaces interact with the API Server, etcd, Kubelet, and the Linux kernel allows you to build enterprise-grade infrastructure and custom Kubernetes Operators that manage complex stateful applications automatically.`,
          whyItMatters: `High-scale cloud platforms (Netflix, OpenAI, Spotify) build custom Kubernetes Operators to automate database failovers, dynamic GPU provisioning, and multi-tenant isolation.`,
          syntax: `// Custom Resource Definition Schema\napiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: postgresclusters.db.example.com`,
          mainExample: {
            title: "Reconciliation Loop Pattern in a Custom Kubernetes Operator",
            language: "yaml",
            code: `# Custom Kubernetes Operator CRD & Go Controller Reconciliation Pattern
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databaseclusters.kwas.academy
spec:
  group: kwas.academy
  versions:
    - name: v1alpha1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                replicas:
                  type: integer
                  minimum: 1
                storageSize:
                  type: string
                engineVersion:
                  type: string
  scope: Namespaced
  names:
    plural: databaseclusters
    singular: databasecluster
    kind: DatabaseCluster
---
# Example Custom Resource Instance
apiVersion: kwas.academy/v1alpha1
kind: DatabaseCluster
metadata:
  name: prod-postgres-ha
  namespace: databases
spec:
  replicas: 3
  storageSize: "500Gi"
  engineVersion: "16.2"`,
            executable: false,
            explanation: [
              "Custom Resource Definitions (CRDs) extend the Kubernetes API with domain-specific declarative objects.",
              "A custom Go controller watches the API server for changes to DatabaseCluster objects.",
              "The Operator's Reconciliation Loop constantly compares Desired State (from CRD spec) against Observed State (running pods).",
              "If a node crashes, the Operator reconciles state by provisioning new PersistentVolumeClaims via CSI and configuring streaming replication.",
            ],
          },
          detailedExplanation: [
            "CNI vs Kube-Proxy: Traditional `kube-proxy` uses Linux iptables or IPVS to route Service ClusterIP traffic. Modern eBPF CNIs (like Cilium) bypass kube-proxy entirely, routing packets directly inside the Linux socket layer with zero iptables bottleneck across 10,000+ Services.",
          ],
          commonMistakes: [
            {
              mistake: "Writing Kubernetes Operators with non-idempotent reconciliation loops, causing infinite creation loops when retrying failed API calls.",
              badCode: "// In Reconcile(): createPod() without checking if pod already exists",
              goodCode: "// In Reconcile(): check if pod exists; if missing, create; if different, update",
              explanation: "Kubernetes controllers trigger the reconciliation loop continuously on any event. Every action must be completely idempotent.",
            },
          ],
          bestPractices: [
            "Use Operator SDK or Kubebuilder (Go) to scaffold production Kubernetes controllers.",
            "Adopt Cilium as your CNI for eBPF-powered network performance and WireGuard encryption.",
            "Use CSI storage plugins supporting dynamic volume expansion and snapshots.",
          ],
          summary: [
            "Kubernetes relies on CRI, CNI, and CSI interfaces for compute, networking, and storage.",
            "CRDs and Operators extend Kubernetes into an autonomic self-healing application platform.",
            "Reconciliation loops enforce declarative desired state continuously against live cluster state.",
          ],
        },
      ],
    },
    {
      id: "mod-do-13",
      slug: "service-mesh-istio-envoy-mtls",
      title: "Module 13: Service Mesh Architecture: Istio, Envoy & mTLS",
      description: "Master microservice networking: Istio control plane, Envoy sidecar proxy data plane, Mutual TLS (mTLS), and traffic shaping.",
      lessons: [
        {
          id: "do-service-mesh-istio",
          slug: "service-mesh-architecture-istio-envoy-proxy-mtls-traffic-shaping",
          courseSlug: "devops",
          moduleSlug: "service-mesh-istio-envoy-mtls",
          title: "Service Mesh: Istio, Envoy Proxy & Zero-Trust mTLS",
          description: "Architect cloud-native microservice service meshes: Istio control plane (Istiod), Envoy proxy sidecar injection, automatic Mutual TLS (mTLS) cryptographic encryption, VirtualServices, DestinationRules, and distributed circuit breaking.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Service Mesh architecture: Control Plane (Istiod) vs Data Plane (Envoy Proxies)",
            "Automatic sidecar injection and iptables packet interception (`PREROUTING` -> 15001)",
            "Enforcing zero-trust network encryption with automatic Strict Mutual TLS (mTLS)",
            "Advanced traffic shaping: percentage-based canary routing, header-based routing, and fault injection with Istio",
          ],
          introduction: `As microservice clusters scale to hundreds of independent services, managing network security, retries, rate limiting, and observability inside individual application codebases becomes unmaintainable. A Service Mesh injects an ultra-fast C++ proxy (Envoy) next to every application container as a sidecar. The proxies intercept all inbound and outbound TCP/HTTP/gRPC traffic, automatically encrypting connections with Mutual TLS and providing deep telemetry without changing a single line of application code.`,
          whyItMatters: `Financial institutions and compliance standards (HIPAA, PCI-DSS) require end-to-end encryption in transit (mTLS) between all microservices. Istio enforces strict mTLS automatically with SPIFFE-compliant identity certificates.`,
          syntax: `apiVersion: security.istio.io/v1beta1\nkind: PeerAuthentication\nmetadata:\n  name: default\nspec:\n  mtls:\n    mode: STRICT`,
          mainExample: {
            title: "Istio Strict mTLS Enforcement and Canary Traffic Routing",
            language: "yaml",
            code: `# 1. Enforce Strict Mutual TLS Across the Entire Kubernetes Namespace
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT # Rejects all non-mTLS plain HTTP traffic automatically
---
# 2. Istio VirtualService: Dynamic Canary Percentage Traffic Split
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: payment-service-route
  namespace: production
spec:
  hosts:
    - payment-service
  http:
    - route:
        - destination:
            host: payment-service
            subset: v1
          weight: 90
        - destination:
            host: payment-service
            subset: v2-canary
          weight: 10
      timeout: 3s
      retries:
        attempts: 3
        perTryTimeout: 500ms
        retryOn: "5xx,connect-failure,refused-stream"
---
# 3. DestinationRule: Subsets and Outlier Detection (Circuit Breaker)
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: payment-service-subsets
  namespace: production
spec:
  host: payment-service
  subsets:
    - name: v1
      labels:
        version: "1.12.0"
    - name: v2-canary
      labels:
        version: "2.0.0-rc1"
  trafficPolicy:
    outlierDetection: # Circuit Breaker: Eject unhealthy pods from load balancer
      consecutive5xxErrors: 3
      interval: 10s
      baseEjectionTime: 30s
      maxEjectionPercent: 50`,
            executable: false,
            explanation: [
              "PeerAuthentication with mode: STRICT forces all pods to communicate over encrypted mTLS tunnels with rotating X.509 certificates.",
              "VirtualService splits traffic: 90% to v1 and 10% to v2-canary with automatic retries and 3s timeout.",
              "DestinationRule defines pod subsets via Kubernetes labels.",
              "OutlierDetection acts as an automated Circuit Breaker, ejecting pods returning three consecutive 5xx errors from the proxy pool.",
            ],
          },
          detailedExplanation: [
            "Ambient Mesh vs Sidecars: Istio Ambient Mesh eliminates the sidecar proxy from application pods, using a shared node-level Layer 4 Zero-Trust Tunnel (ztunnel) and optional Layer 7 Waypoint proxies, reducing cluster RAM consumption by up to 80%.",
          ],
          commonMistakes: [
            {
              mistake: "Enabling Strict mTLS before all legacy services or external databases have Istio sidecars injected, causing connection dropouts.",
              badCode: "mode: STRICT # Applied immediately in heterogeneous legacy cluster",
              goodCode: "mode: PERMISSIVE # Test first; allows both plain text and mTLS until all pods are sidecar-injected",
              explanation: "Use PERMISSIVE mode during migration so non-mesh services can still connect while verifying mTLS metrics in Grafana.",
            },
          ],
          bestPractices: [
            "Use Istio `PeerAuthentication` in STRICT mode for zero-trust compliance.",
            "Configure OutlierDetection circuit breakers on all external API outbound routes.",
            "Consider Istio Ambient Mesh for large clusters to reduce sidecar CPU/RAM overhead.",
          ],
          summary: [
            "Service Meshes decouple networking, security, and telemetry from application code.",
            "Istio and Envoy provide automatic zero-trust mTLS encryption across all pods.",
            "VirtualServices and DestinationRules enable canary routing, retries, and circuit breaking.",
          ],
        },
      ],
    },
    {
      id: "mod-do-14",
      slug: "gitops-argocd-declarative-delivery",
      title: "Module 14: GitOps & Declarative Delivery: ArgoCD & Helm",
      description: "Master declarative GitOps workflows: ArgoCD application controller, Helm chart versioning, Kustomize overlays, and automated self-healing.",
      lessons: [
        {
          id: "do-gitops-argocd",
          slug: "gitops-declarative-delivery-argocd-helm-kustomize-self-healing",
          courseSlug: "devops",
          moduleSlug: "gitops-argocd-declarative-delivery",
          title: "GitOps Continuous Delivery: ArgoCD, Helm & Self-Healing",
          description: "Implement modern GitOps delivery pipelines: Git as the single source of truth, ArgoCD Application controller architecture, Kustomize environment overlays (dev/stage/prod), automated drift detection, and self-healing cluster synchronization.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 principles of OpenGitOps: Declarative, Versioned & Immutable, Pulled Automatically, Continuously Reconciled",
            "Why Push CI/CD pipelines (running `kubectl` from Jenkins/GitHub Actions) expose critical security credentials",
            "Configuring ArgoCD Applications with automated sync policies, prune, and selfHeal",
            "Managing multi-environment Kubernetes configurations using Kustomize overlays",
          ],
          introduction: `In traditional Push-based CI/CD pipelines, build runners in CI (GitHub Actions, Jenkins) require cluster-admin credentials to execute \`kubectl apply\` directly against production Kubernetes. In the GitOps paradigm, Git is the single source of truth for desired infrastructure state. An in-cluster Pull agent (ArgoCD) continuously monitors Git, detects configuration drifts, and reconciles the cluster to match Git automatically—with zero cluster credentials ever leaving the private network.`,
          whyItMatters: `GitOps provides instant rollbacks via \`git revert\`, prevents manual configuration drift (hotfixes overridden by CI), and provides a cryptographic audit log of every infrastructure change.`,
          syntax: `apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: payment-service\nspec:\n  syncPolicy:\n    automated:\n      prune: true\n      selfHeal: true`,
          mainExample: {
            title: "ArgoCD Declarative Application Manifest with Automated Self-Healing",
            language: "yaml",
            code: `# Declarative ArgoCD Application Manifest (GitOps Single Source of Truth)
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: kwas-core-platform
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  source:
    repoURL: 'https://github.com/kwas-academy/infrastructure-gitops.git'
    targetRevision: main # Git branch / commit SHA / Helm tag
    path: environments/production # Path to Kustomize overlays
  destination:
    server: 'https://kubernetes.default.svc' # Target In-Cluster API Server
    namespace: production
  syncPolicy:
    automated:
      prune: true # Deletes resources from K8s if removed from Git repo
      selfHeal: true # Automatically reverts any manual 'kubectl edit' changes!
    syncOptions:
      - CreateNamespace=true
      - ApplyOutOfSyncOnly=true
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m`,
            executable: false,
            explanation: [
              "repoURL and path point to the Git repository containing Kustomize manifests.",
              "automated.prune ensures that deleting a file in Git removes the corresponding resource from Kubernetes.",
              "automated.selfHeal detects manual ad-hoc kubectl modifications in the cluster and immediately reverts them to match Git.",
              "resources-finalizer ensures that deleting the ArgoCD application cleans up all managed resources cleanly.",
            ],
          },
          detailedExplanation: [
            "App of Apps Pattern: In enterprise setups, rather than managing 100 individual ArgoCD application YAMLs, teams deploy an 'App of Apps'—a single root ArgoCD Application that points to a folder containing other Application manifests, automating multi-cluster bootstrapping.",
          ],
          commonMistakes: [
            {
              mistake: "Storing plain-text database secrets in GitOps repositories without cryptographic encryption.",
              badCode: "apiVersion: v1\nkind: Secret\ndata:\n  DB_PASS: cGFzc3dvcmQxMjM= # Decodable base64 in Git!",
              goodCode: "# Use SealedSecrets (Bitnami) or External Secrets Operator with HashiCorp Vault / AWS Secrets Manager",
              explanation: "Base64 is encoding, not encryption. Always use SealedSecrets or External Secrets Operator so only encrypted ciphertexts are committed to Git.",
            },
          ],
          bestPractices: [
            "Enable `selfHeal: true` and `prune: true` in production ArgoCD applications.",
            "Use Kustomize overlays to share base YAML configurations across dev, staging, and prod.",
            "Deploy External Secrets Operator to securely inject secrets from AWS KMS or HashiCorp Vault.",
          ],
          summary: [
            "GitOps uses Git as the declarative, auditable single source of truth for infrastructure.",
            "ArgoCD pulls changes from Git, preventing cluster credential exposure in CI systems.",
            "Automated drift detection and self-healing prevent undocumented configuration drifts.",
          ],
        },
      ],
    },
    {
      id: "mod-do-15",
      slug: "zero-trust-cloud-security-spiffe-vault",
      title: "Module 15: Zero-Trust Cloud Security: SPIFFE/SPIRE & Vault",
      description: "Master zero-trust workload identity: SPIFFE IDs, SPIRE attestation, HashiCorp Vault dynamic secrets, and Cloud KMS encryption.",
      lessons: [
        {
          id: "do-zero-trust-security",
          slug: "zero-trust-workload-identity-spiffe-spire-hashicorp-vault-kms",
          courseSlug: "devops",
          moduleSlug: "zero-trust-cloud-security-spiffe-vault",
          title: "Zero-Trust Security: SPIFFE/SPIRE & HashiCorp Vault",
          description: "Establish zero-trust workload identities without static credentials: the SPIFFE standard (Secure Production Identity Framework for Everyone), SPIRE node and workload attestation, HashiCorp Vault dynamic ephemeral database credentials, and KMS envelope encryption.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why perimeter network security (IP whitelisting, firewalls) is obsolete in cloud-native environments",
            "The SPIFFE standard: SPIFFE IDs (`spiffe://domain/ns/prod/sa/payment`) and X.509 SVID tokens",
            "How SPIRE Agent performs cryptographic workload attestation on Linux cgroups and K8s namespaces",
            "Generating dynamic short-lived (15-minute) database credentials with HashiCorp Vault",
          ],
          introduction: `In legacy enterprise networks, security assumed everything inside the internal corporate network was trusted ('castle-and-moat'). In modern multi-cloud architectures, perimeter security is inadequate: if an attacker compromises one service, they move laterally across the entire network. Zero-Trust enforces: 'Never Trust, Always Verify'. Every single workload must cryptographically prove its identity via SPIFFE/SPIRE before accessing databases or APIs.`,
          whyItMatters: `Eliminates long-lived static API keys and passwords. If a server is breached, attackers find zero static passwords, and credentials expire automatically in minutes.`,
          syntax: `// SPIFFE ID URI format\nspiffe://kwas.academy/ns/production/sa/payment-service`,
          mainExample: {
            title: "HashiCorp Vault Dynamic PostgreSQL Credential Generation",
            language: "bash",
            code: `#!/usr/bin/env bash
# Zero-Trust Ephemeral Credential Provisioning via HashiCorp Vault

set -euo pipefail

echo "=== Zero-Trust Identity & Vault Dynamic Secret Engine ==="

# 1. Inspect Workload SPIFFE ID from SPIRE Agent
SPIFFE_ID="spiffe://kwas.academy/ns/production/sa/payment-processor"
echo "[1] Verified Workload Cryptographic SPIFFE ID: $SPIFFE_ID"

# 2. Workload requests short-lived dynamic PostgreSQL database credentials
echo -e "\\n[2] Requesting ephemeral dynamic credentials from HashiCorp Vault API..."

# Simulating Vault CLI response for dynamic DB credentials
# Vault creates a new PostgreSQL user on-the-fly with 1-hour TTL!
VAULT_RESPONSE='{
  "lease_id": "database/creds/readonly-role/h73b821a9c",
  "lease_duration": 3600,
  "renewable": true,
  "data": {
    "username": "v_db_user_kwas_982",
    "password": "v_tok_7a9f2bc8914e6b12a80c98f"
  }
}'

DB_USER=$(echo "$VAULT_RESPONSE" | grep '"username"' | cut -d '"' -f 4)
LEASE_ID=$(echo "$VAULT_RESPONSE" | grep '"lease_id"' | cut -d '"' -f 4)

echo "Vault Generated DB Username: $DB_USER"
echo "Credential Lease ID:        $LEASE_ID (Auto-revoked after 1 hour)"

# 3. Revoke lease immediately upon task completion (Zero Credential Leakage!)
echo -e "\\n[3] Revoking credential lease in Vault after batch completion..."
echo "Lease $LEASE_ID successfully revoked in PostgreSQL database."
echo -e "\\n✅ Zero static passwords stored in config files or environment variables!"`,
            executable: false,
            explanation: [
              "Workloads receive short-lived X.509 SVID certificates bound to their SPIFFE ID without static API keys.",
              "Vault generates unique PostgreSQL usernames and passwords dynamically with a strict Time-To-Live (TTL).",
              "When the lease expires, Vault automatically executes DROP ROLE in the database, invalidating the password.",
              "Eliminates hardcoded passwords from Git, environment variables, and Docker container images.",
            ],
          },
          detailedExplanation: [
            "Envelope Encryption with Cloud KMS: Application data is encrypted using a local Data Encryption Key (DEK). The DEK is encrypted using a Master Key (KEK) stored securely in Hardware Security Modules (HSM / AWS KMS / GCP Cloud KMS). The plaintext DEK is never written to disk.",
          ],
          commonMistakes: [
            {
              mistake: "Storing production cloud credentials or IAM access keys in long-lived environment variables.",
              badCode: "export AWS_SECRET_ACCESS_KEY=\"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\" # Permanent risk!",
              goodCode: "# Use IAM Roles for Service Accounts (IRSA) / SPIFFE workload identity federation",
              explanation: "Static cloud credentials dumped in process memory or logs lead to cloud compromise. Always use IAM Role federation.",
            },
          ],
          bestPractices: [
            "Use HashiCorp Vault Dynamic Secrets for all database and third-party API connections.",
            "Deploy SPIFFE/SPIRE for cross-cloud workload identity attestation.",
            "Enforce KMS Envelope Encryption for all sensitive data at rest.",
          ],
          summary: [
            "Zero-Trust enforces continuous cryptographic authentication between all services.",
            "SPIFFE/SPIRE issues tamper-proof X.509 workload identities to containers dynamically.",
            "HashiCorp Vault generates dynamic ephemeral database passwords that expire automatically.",
          ],
        },
      ],
    },
    {
      id: "mod-do-16",
      slug: "distributed-observability-opentelemetry-tempo",
      title: "Module 16: Distributed Observability: OpenTelemetry & Tempo",
      description: "Master enterprise telemetry: OpenTelemetry (OTel Collector, OTLP), distributed trace context propagation (W3C), and Grafana Tempo.",
      lessons: [
        {
          id: "do-opentelemetry-tempo",
          slug: "distributed-observability-opentelemetry-collector-w3c-tempo",
          courseSlug: "devops",
          moduleSlug: "distributed-observability-opentelemetry-tempo",
          title: "Distributed Observability: OpenTelemetry & Grafana Tempo",
          description: "Build unified observability pipelines across distributed microservices: the 3 Pillars of Observability (Metrics, Logs, Traces), OpenTelemetry (OTel) Collector architecture, W3C TraceContext distributed propagation (`traceparent`), and Grafana Tempo distributed tracing.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 3 Pillars of Observability and why OpenTelemetry (OTel) is the vendor-neutral industry standard",
            "Distributed Trace Context Propagation across HTTP/gRPC boundaries using W3C `traceparent` headers",
            "The OpenTelemetry Collector pipeline: Receivers, Processors (Batch, Tail-sampling), and Exporters",
            "Visualizing multi-service latency bottlenecks and database query spans in Grafana Tempo and Jaeger",
          ],
          introduction: `When an e-commerce checkout request takes 4.5 seconds and passes through 12 microservices (API Gateway, Auth, Inventory, Payment, Shipping, Notification), looking at isolated server logs is useless. Distributed Tracing assigns a unique \`TraceID\` to the user's initial click and propagates it across every HTTP header, RPC call, message queue, and database query, generating a unified visual Gantt chart of the exact latency contributed by every span.`,
          whyItMatters: `OpenTelemetry provides vendor neutrality: instrument your code once with OTel SDKs, and export traces, metrics, and logs interchangeably to Prometheus, Tempo, Datadog, or Honeycomb without vendor lock-in.`,
          syntax: `// W3C Trace Context Header\ntraceparent: 00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01`,
          mainExample: {
            title: "OpenTelemetry Distributed Trace Context Propagation in JavaScript / Node.js",
            language: "javascript",
            code: `// OpenTelemetry Distributed Trace Context Propagation Engine
class DistributedTraceContext {
    constructor() {
        this.traceId = this._generateHex(16); // 128-bit Trace ID (Shared across all microservices!)
        this.spanId = this._generateHex(8);   // 64-bit Current Span ID
    }

    _generateHex(bytes) {
        let result = '';
        for (let i = 0; i < bytes; i++) {
            result += Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        }
        return result;
    }

    // Format into standard W3C 'traceparent' header (RFC 00-traceId-spanId-flags)
    toW3CHeader() {
        return \`00-\${this.traceId}-\${this.spanId}-01\`;
    }

    // Create child span for downstream RPC call
    createChildSpan() {
        const child = new DistributedTraceContext();
        child.traceId = this.traceId; // Retains global trace ID!
        child.parentSpanId = this.spanId;
        return child;
    }
}

// 1. Inbound Request at API Gateway
const gatewaySpan = new DistributedTraceContext();
console.log("=== OpenTelemetry Distributed Tracing Engine ===");
console.log("[API GATEWAY] Generated Trace ID:  ", gatewaySpan.traceId);
console.log("[API GATEWAY] Outgoing W3C Header: ", gatewaySpan.toW3CHeader());

// 2. Downstream Payment Microservice receives header & continues trace
const paymentSpan = gatewaySpan.createChildSpan();
console.log("\\n[PAYMENT SERVICE] Ingested Trace ID: ", paymentSpan.traceId);
console.log("[PAYMENT SERVICE] New Child Span ID:  ", paymentSpan.spanId);
console.log("[PAYMENT SERVICE] Parent Span ID:     ", paymentSpan.parentSpanId);

console.log("\\n✅ Distributed context propagated seamlessly across network boundaries!");`,
            executable: true,
            explanation: [
              "W3C TraceContext standardizes the 'traceparent' header format across all languages and frameworks.",
              "All downstream microservices and async worker jobs inherit the exact same Trace ID.",
              "Parent-Child span relationships allow Grafana Tempo to assemble the complete end-to-end execution tree.",
              "OpenTelemetry Collector batches and tail-samples traces, sending 100% of errors and 1% of successful spans to storage.",
            ],
          },
          detailedExplanation: [
            "Tail-Based Sampling: Traditional head-sampling decides whether to drop a trace at the start before knowing if it will fail. The OTel Collector with Tail-Based Sampling buffers complete traces in memory, guaranteeing that any trace containing an HTTP 500 error or latency > 2000ms is preserved and exported.",
          ],
          commonMistakes: [
            {
              mistake: "Using proprietary vendor SDKs (Datadog, New Relic) directly throughout business logic, creating permanent vendor lock-in.",
              badCode: "import datadog from 'dd-trace'; // Tight coupling to proprietary SDK",
              goodCode: "import { trace } from '@opentelemetry/api'; // Vendor-neutral OpenTelemetry standard",
              explanation: "Use OpenTelemetry API/SDKs in application code. You can switch backend observability platforms in minutes via the OTel Collector configuration.",
            },
          ],
          bestPractices: [
            "Instrument code with vendor-neutral OpenTelemetry APIs (`@opentelemetry/api`).",
            "Deploy OpenTelemetry Collector as a DaemonSet to receive OTLP telemetry from all pods.",
            "Use Grafana Tempo for cost-effective distributed trace storage on object storage (S3/GCS).",
          ],
          summary: [
            "Distributed tracing solves microservice latency debugging by connecting multi-service spans.",
            "OpenTelemetry (OTel) is the industry standard for metrics, logs, and traces.",
            "W3C TraceContext header (`traceparent`) propagates causal context across distributed systems.",
          ],
        },
      ],
    },
  ],
};

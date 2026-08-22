import { Course } from "@/types";

export const linuxCourse: Course = {
  id: "course-linux",
  slug: "linux",
  title: "Linux & Ubuntu Systems Architecture & Shell Engineering",
  tagline: "Master the Linux operating system, kernel mechanics, bash automation, networking, systemd, and server administration.",
  description: "Comprehensive Linux & Ubuntu curriculum: kernel vs userspace architecture, File System Hierarchy Standard (FHS), permissions and access control, process lifecycle and signal handling, systemd unit management, bash shell scripting, networking, storage/LVM, log analysis, kernel sysctl tuning, and enterprise production server hardening.",
  category: "DevOps & Cloud",
  level: "Beginner",
  estimatedHours: 32,
  icon: "Terminal",
  badgeColor: "orange",
  prerequisites: ["Basic computer literacy and terminal familiarity."],
  skillsGained: [
    "Linux Kernel & Userspace Subsystem Architecture",
    "File System Hierarchy (FHS) & Inode Mechanics",
    "POSIX Permissions, SUID/SGID, Sticky Bits & Access Control",
    "Process Management, Signals, systemd Services & Timers",
    "APT & DPKG Package Management on Ubuntu Server",
    "Advanced Bash Scripting, Streams, Redirection & Automation",
    "Linux Networking, SSH Key Hardening, IP Routing & UFW Firewalls",
    "Storage Management, Ext4/XFS, Partitioning & LVM (Logical Volume Manager)",
    "Kernel Performance Tuning with sysctl, cgroups & eBPF",
    "Production Linux Server Security & CIS Benchmark Hardening",
  ],
  featured: true,
  modules: [
    {
      id: "mod-linux-1",
      slug: "kernel-architecture",
      title: "Module 1: Linux Kernel Architecture & Ubuntu Foundations",
      description: "Understand monolithic kernel design, system calls, rings of privilege, and the Ubuntu LTS release cycle.",
      lessons: [
        {
          id: "linux-kernel-intro",
          slug: "linux-kernel-architecture-ubuntu-intro",
          courseSlug: "linux",
          moduleSlug: "kernel-architecture",
          title: "Linux Kernel Architecture & Ubuntu Foundations",
          description: "Discover how the Linux kernel coordinates hardware, CPU scheduling, memory management, and userspace interactions through system calls.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The separation between Kernel Space (Ring 0) and User Space (Ring 3)",
            "How POSIX System Calls (syscalls) bridge user applications with the kernel",
            "The architecture of the Ubuntu Linux distribution (Debian base, systemd, APT)",
            "Inspecting system hardware, kernel release, and CPU architecture using uname and lscpu",
          ],
          introduction: `Linux is a Unix-like monolithic kernel created by Linus Torvalds in 1991. The kernel is the core program that controls all hardware resources—CPU, RAM, storage, network interfaces, and peripheral buses. Operating systems like Ubuntu bundle the Linux kernel with the GNU toolchain, system libraries, package managers, and system daemons to deliver a complete server and desktop environment.`,
          whyItMatters: `Over 90% of the world's cloud servers, Kubernetes worker nodes, supercomputers, Android devices, and internet backbones run Linux. Understanding operating system internals, memory pages, process isolation, and system call overhead is fundamental for backend software engineers, site reliability engineers (SREs), and DevOps architects.`,
          syntax: `uname -a\nhostnamectl\nlscpu\nfree -h\ndmesg | head -n 20`,
          mainExample: {
            title: "Inspecting Linux Kernel and System Architecture",
            language: "bash",
            code: `#!/usr/bin/env bash
# Inspecting Linux OS and Kernel Architecture

echo "=== Operating System Information ==="
cat /etc/os-release | grep -E "^(NAME|VERSION)="

echo -e "\n=== Kernel Version & Hardware Architecture ==="
uname -s -r -m -o

echo -e "\n=== CPU Architecture & Core Topology ==="
lscpu | grep -E "(Architecture|Model name|CPU\(s\):|Thread\(s\) per core)"

echo -e "\n=== Physical Memory & Swap Metrics ==="
free -h

echo -e "\n=== System Uptime & Average Load (1, 5, 15 min) ==="
uptime`,
            executable: true,
            explanation: [
              "/etc/os-release provides standardized key-value pairs defining the Linux distribution name and version.",
              "uname -s -r -m -o outputs the kernel name (Linux), kernel release version, machine hardware architecture (x86_64 or aarch64), and operating system.",
              "lscpu queries sysfs and the CPUID instruction to output physical sockets, cores per socket, and virtual threads.",
              "free -h reads /proc/meminfo to report total, used, free, shared, buffer/cache, and available RAM.",
              "uptime reports current time, system up duration, active user sessions, and 1-minute, 5-minute, and 15-minute load averages.",
            ],
          },
          detailedExplanation: [
            "Ring 0 vs Ring 3 Protection: Modern x86-64 and ARM processors provide privilege rings. The Linux kernel executes in Ring 0 with unrestricted hardware access, while user applications execute in Ring 3. When an application needs to read a file or open a network socket, it executes a system call trap (such as sys_read or sys_socket), causing the CPU to switch into kernel mode to safely execute the request.",
            "Ubuntu Long Term Support (LTS): Ubuntu LTS releases occur every two years in April (e.g., 22.04 LTS, 24.04 LTS) and receive 5 to 10 years of enterprise security maintenance, making them the industry standard for enterprise cloud infrastructure.",
          ],
          commonMistakes: [
            {
              mistake: "Running user applications or web servers as the root superuser.",
              badCode: "sudo python3 app.py",
              goodCode: "useradd -m -s /bin/bash appuser\nsudo -u appuser python3 app.py",
              explanation: "Never run application processes as root. If an attacker exploits a code vulnerability (e.g., Remote Code Execution), they obtain complete kernel-level control over the host.",
            },
          ],
          bestPractices: [
            "Always pin production environments to LTS (Long Term Support) releases for maximum package stability and security updates.",
            "Use unprivileged service accounts with minimal necessary group memberships.",
            "Monitor kernel ring buffer warnings using dmesg --level=err,warn to detect hardware or driver failures early.",
          ],
          realWorldExample: {
            title: "Automated Host Health Verification Script",
            scenario: "An automated bootstrap script running inside a CI/CD pipeline verifies that the host environment satisfies minimum compute and kernel requirements before deploying Kubernetes clusters.",
            language: "bash",
            code: `#!/usr/bin/env bash
set -euo pipefail

REQUIRED_MIN_RAM_MB=2048
TOTAL_RAM_KB=$(grep MemTotal /proc/meminfo | awk '{print $2}')
TOTAL_RAM_MB=$((TOTAL_RAM_KB / 1024))

echo "Host Total RAM: \${TOTAL_RAM_MB} MB"
if [ "\${TOTAL_RAM_MB}" -lt "\${REQUIRED_MIN_RAM_MB}" ]; then
  echo "CRITICAL ERROR: Host RAM (\${TOTAL_RAM_MB} MB) is below minimum (\${REQUIRED_MIN_RAM_MB} MB)" >&2
  exit 1
fi

echo "Host satisfies resource constraints. Proceeding with deployment."`,
            takeaway: "Directly reading synthetic filesystems like /proc/meminfo allows bash scripts to verify system specifications with zero external dependencies.",
          },
          summary: [
            "The Linux kernel executes in Ring 0 and manages CPU scheduling, virtual memory, and device drivers.",
            "Userspace applications communicate with the kernel safely through POSIX system calls.",
            "Ubuntu LTS distributions deliver battle-tested enterprise stability with 5+ years of security maintenance.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-2",
      slug: "file-system-hierarchy",
      title: "Module 2: File System Hierarchy (FHS) & Inode Mechanics",
      description: "Master /etc, /var, /proc, /sys, /dev, hard links, soft symlinks, and inode index structures.",
      lessons: [
        {
          id: "linux-fhs-inodes",
          slug: "file-system-hierarchy-inodes-links",
          courseSlug: "linux",
          moduleSlug: "file-system-hierarchy",
          title: "File System Hierarchy Standard (FHS) & Inodes",
          description: "Explore the single root directory tree, virtual filesystems, inode metadata structures, and the difference between hard links and symbolic links.",
          durationMinutes: 20,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The purpose of essential top-level FHS directories (/bin, /etc, /var, /tmp, /opt, /home)",
            "Virtual memory filesystems: /proc (process data) and /sys (hardware device tree)",
            "What an Inode is and how files are indexed on disk",
            "Creating and managing Hard Links vs Symbolic (Soft) Links with ln",
          ],
          introduction: `Unlike Windows which mounts distinct drives on separate drive letters (C:, D:), Linux organizes everything into a single inverted hierarchical tree starting at the root directory (/)\. Devices, configuration files, network sockets, named pipes, and running processes all appear as files in this unified directory hierarchy—adhering to the Unix philosophy that 'Everything is a file.'`,
          whyItMatters: `Knowing where system logs (/var/log), service configurations (/etc), temporary files (/tmp), and kernel parameters (/proc/sys) reside is essential for debugging server outages, managing disk storage, and preventing disk exhaustion incidents.`,
          syntax: `ls -lai\nln -s target_file symlink_name\nln target_file hardlink_name\ndf -h\ndf -i`,
          mainExample: {
            title: "Exploring Inodes, Hard Links, and Soft Links",
            language: "bash",
            code: `#!/usr/bin/env bash
# Inode and Link Mechanics Demonstration

mkdir -p /tmp/linux_lab && cd /tmp/linux_lab

# Create original source file
echo "Production Database Secret" > original.txt

# 1. Create a Hard Link (Shares the exact same Inode)
ln original.txt hardlink.txt

# 2. Create a Symbolic Soft Link (Contains a pointer path, new Inode)
ln -s original.txt symlink.txt

# Display Inode numbers (Column 1) and link counts (Column 3)
ls -lai original.txt hardlink.txt symlink.txt

echo -e "\n=== Modifying original.txt updates both ==="
echo "Appended Secret Line" >> original.txt
cat hardlink.txt

echo -e "\n=== Inode Consumption Verification ==="
df -i /tmp | awk 'NR==1 || NR==2'`,
            executable: true,
            explanation: [
              "ls -i reveals the unique numeric Inode allocated by the filesystem for each file.",
              "A hard link points directly to the underlying inode. The inode's link count increments from 1 to 2.",
              "A soft (symbolic) link creates a brand new file with its own inode containing a string path to the target file.",
              "If original.txt is deleted, hardlink.txt remains intact with all data; symlink.txt becomes a broken link (dangling pointer).",
              "df -i reports filesystem inode utilization—running out of inodes prevents creating files even if free disk space remains.",
            ],
          },
          detailedExplanation: [
            "FHS Core Directory Roles: /etc stores static system configuration files (e.g., /etc/hosts, /etc/fstab). /var stores variable data that changes during operation (e.g., /var/log, /var/lib/docker). /proc and /sys are synthetic in-memory virtual filesystems generated on the fly by the Linux kernel.",
            "Inode Architecture: An Inode (Index Node) stores file metadata including file type, size, owner UID, group GID, permission bits, timestamps (ctime, mtime, atime), and pointers to data blocks on disk. Noticeably, the file name is stored inside directory entry data blocks, not within the inode itself.",
          ],
          commonMistakes: [
            {
              mistake: "Creating a hard link to a directory or across different mounted disk partitions.",
              badCode: "ln /mnt/storage/data.csv /home/user/data.csv",
              goodCode: "ln -s /mnt/storage/data.csv /home/user/data.csv",
              explanation: "Hard links cannot cross filesystem boundaries or point to directories because inode numbers are unique only within a single filesystem partition.",
            },
          ],
          bestPractices: [
            "Use symbolic links (ln -s) for cross-filesystem aliases and configuration switching.",
            "Monitor both disk space (df -h) and inode capacity (df -i) on logging and upload servers.",
            "Store third-party applications in /opt and machine-local static configurations in /etc.",
          ],
          summary: [
            "Linux structures all storage, devices, and virtual tables under a single unified root (/).",
            "Inodes store file metadata and disk block pointers, while directory records link filenames to inodes.",
            "Hard links share inode numbers within a partition; soft symlinks store path references.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-3",
      slug: "permissions-access-control",
      title: "Module 3: Permissions, Ownership & Access Control (POSIX & ACLs)",
      description: "Master chmod, chown, umask, numeric octal modes, SUID, SGID, and Sticky Bits.",
      lessons: [
        {
          id: "linux-permissions",
          slug: "linux-permissions-chmod-chown-suid",
          courseSlug: "linux",
          moduleSlug: "permissions-access-control",
          title: "File Permissions, Ownership & Special Bits (SUID/SGID)",
          description: "Understand read/write/execute permissions for User, Group, and Others, umask calculations, SUID executables, and the Sticky Bit on shared directories.",
          durationMinutes: 22,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "The 3x3 POSIX permission matrix (User, Group, Others with r, w, x)",
            "Calculating octal numeric permission modes (e.g. 755, 644, 600, 700)",
            "Changing ownership and group affiliation with chown and chgrp",
            "Special permission bits: SetUID (4000), SetGID (2000), and Sticky Bit (1000)",
          ],
          introduction: `Linux is a multi-user operating system with robust POSIX access control. Every file and directory is owned by a User (UID) and a Group (GID), with permissions governing Read (r=4), Write (w=2), and Execute (x=1) access for the Owner, the owning Group, and all Other users on the system.`,
          whyItMatters: `Improper permissions are a primary cause of security vulnerabilities (e.g., world-writable private SSH keys or database credentials) and deployment failures. Mastering permission masks and special bits guarantees system integrity.`,
          syntax: `chmod 755 script.sh\nchmod 600 id_rsa\nchown deploy:www-data /var/www/html\nchmod +t /shared_directory`,
          mainExample: {
            title: "Configuring Secure File and Directory Permissions",
            language: "bash",
            code: `#!/usr/bin/env bash
# POSIX Permission Hardening Demonstration

mkdir -p /tmp/secure_app && cd /tmp/secure_app

# Create sensitive credential file and executable script
touch db_credentials.env deploy.sh

# 1. Restrict sensitive secret to Owner ONLY (Read/Write = 600)
chmod 600 db_credentials.env

# 2. Grant Owner Read/Write/Exec (7), Group & Others Read/Exec (5) = 755
chmod 755 deploy.sh

# 3. Create a shared temporary directory with Sticky Bit (+t / 1777)
mkdir -p shared_uploads
chmod 1777 shared_uploads

# Inspect permissions format
ls -ld db_credentials.env deploy.sh shared_uploads`,
            executable: true,
            explanation: [
              "chmod 600 sets rw-------: only the owner can read and write the secret file.",
              "chmod 755 sets rwxr-xr-x: owner can read/write/execute; group and others can read/execute.",
              "chmod 1777 sets rwxrwxrwt: anyone can write files into the directory, but only the file owner or root can delete their own files (Sticky Bit).",
              "/tmp on all Linux distributions uses mode 1777 to prevent users from deleting each other's temporary files.",
            ],
          },
          detailedExplanation: [
            "Octal Math: Read = 4, Write = 2, Execute = 1. Add them together for each triad: rwx = 4+2+1 = 7, rw- = 4+2+0 = 6, r-x = 4+0+1 = 5, r-- = 4+0+0 = 4.",
            "Special Bits: SUID (4xxx) executes a binary with the permissions of the file owner (e.g., /usr/bin/passwd). SGID (2xxx) on directories forces newly created files to inherit the parent directory's group. Sticky Bit (1xxx) restricts file deletion in shared directories.",
          ],
          commonMistakes: [
            {
              mistake: "Using chmod 777 as a quick fix to resolve application permission errors.",
              badCode: "chmod -R 777 /var/www/app",
              goodCode: "chown -R www-data:www-data /var/www/app\nfind /var/www/app -type d -exec chmod 755 {} +\nfind /var/www/app -type f -exec chmod 644 {} +",
              explanation: "chmod 777 makes every file readable, writable, and executable by every user and process on the system, creating severe security holes.",
            },
          ],
          bestPractices: [
            "Private keys (~/.ssh/id_rsa) must always be set to chmod 600 (or chmod 400).",
            "Set default directory permissions to 755 and file permissions to 644.",
            "Configure umask 027 in production environments to prevent newly created files from being readable by unauthenticated users.",
          ],
          summary: [
            "Permissions are evaluated in strict order: Owner → Group → Others.",
            "Numeric modes use octal sums: Read (4) + Write (2) + Execute (1).",
            "The Sticky bit (1777) protects shared multi-user folders from unauthorized deletion.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-4",
      slug: "process-management-systemd",
      title: "Module 4: Process Lifecycle, Signals & systemd Services",
      description: "Master PID, PPID, SIGTERM/SIGKILL, top/htop, systemctl service creation, and journalctl.",
      lessons: [
        {
          id: "linux-process-systemd",
          slug: "process-lifecycle-signals-systemd-services",
          courseSlug: "linux",
          moduleSlug: "process-management-systemd",
          title: "Process Lifecycle, POSIX Signals & systemd Services",
          description: "Learn how the Linux kernel schedules processes, fork/exec mechanics, terminating processes gracefully with signals, and writing custom systemd service units.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Process identifiers: PID, Parent PID (PPID), and the Init process (PID 1)",
            "Linux process states: Running (R), Sleeping (S/D), Zombie (Z), Stopped (T)",
            "POSIX Signals: SIGTERM (15), SIGKILL (9), SIGHUP (1), and SIGINT (2)",
            "Writing a production-ready systemd .service unit file with automatic restart policies",
          ],
          introduction: `Every executing program in Linux is a Process represented by a unique Process ID (PID). When Linux boots, the kernel mounts the root filesystem and starts the Init system—systemd (PID 1). All other processes, daemons, background workers, and shell sessions are descendants spawned via fork() and execve() system calls.`,
          whyItMatters: `Software engineers must understand how to manage application lifecycles, handle graceful shutdowns on SIGTERM, prevent zombie processes, and daemonize services with systemd so applications recover automatically after crashes or host reboots.`,
          syntax: `ps aux | grep node\nkill -15 <PID>\nkill -9 <PID>\nsystemctl status nginx\nsystemctl enable --now myapp.service`,
          mainExample: {
            title: "Authoring and Managing a Custom systemd Service Unit",
            language: "ini",
            code: `[Unit]
Description=KWAS Academy Backend Microservice
After=network.target postgresql.service
Wants=postgresql.service

[Service]
Type=simple
User=appuser
Group=appuser
WorkingDirectory=/var/www/kwas-api
ExecStart=/usr/bin/node /var/www/kwas-api/server.js
Restart=always
RestartSec=5s
Environment=NODE_ENV=production PORT=8080
StandardOutput=journal
StandardError=journal
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target`,
            executable: false,
            explanation: [
              "[Unit] defines dependencies: After=network.target ensures the service starts only after network sockets are up.",
              "[Service] User=appuser enforces least privilege, avoiding running as root.",
              "Restart=always and RestartSec=5s automatically resurrects the process if it crashes.",
              "LimitNOFILE=65536 raises the maximum open file descriptors for high-concurrency connections.",
              "[Install] WantedBy=multi-user.target enables the service to start automatically during standard system boot.",
            ],
          },
          detailedExplanation: [
            "Signals: SIGTERM (15) requests a graceful shutdown, giving the process time to close open database connections and flush buffers. SIGKILL (9) cannot be caught or ignored; the kernel immediately terminates the process and reclaims its memory pages.",
            "Zombie Processes (Z State): A zombie process has finished execution but remains in the process table because its parent has not yet read its exit status code via wait() or waitpid().",
          ],
          commonMistakes: [
            {
              mistake: "Immediately sending kill -9 to a running database or stateful application server.",
              badCode: "kill -9 $(pgrep postgres)",
              goodCode: "kill -15 $(pgrep postgres)",
              explanation: "SIGKILL abruptly aborts execution without letting the database flush dirty buffers to disk, risking data corruption and lengthy crash-recovery cycles.",
            },
          ],
          bestPractices: [
            "Always try graceful termination (kill -15 / SIGTERM) first before resorting to SIGKILL (kill -9).",
            "Use systemd unit files with standard log forwarding (StandardOutput=journal) instead of ad-hoc screen/nohup sessions.",
            "Configure LimitNOFILE in systemd service units for high-throughput network services.",
          ],
          summary: [
            "systemd is PID 1, the parent of all userspace daemons and background tasks.",
            "Use SIGTERM (15) for safe graceful termination and SIGKILL (9) only when a process is unresponsive.",
            "systemd unit files provide centralized process supervision, logging, and crash auto-recovery.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-5",
      slug: "package-management",
      title: "Module 5: Package Management with APT, DPKG & Snap on Ubuntu",
      description: "Manage repositories, PPA sources, package caching, security updates, and deb inspection.",
      lessons: [
        {
          id: "linux-apt-dpkg",
          slug: "ubuntu-package-management-apt-dpkg",
          courseSlug: "linux",
          moduleSlug: "package-management",
          title: "Ubuntu Package Management with APT & DPKG",
          description: "Master software installation, repository configuration (/etc/apt/sources.list.d/), security patches, package dependencies, and unattended upgrades.",
          durationMinutes: 18,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "How APT (Advanced Package Tool) resolves dependencies and coordinates with DPKG",
            "Updating package indices (apt update) vs upgrading binaries (apt upgrade)",
            "Configuring GPG keys and third-party repository lists in /etc/apt/sources.list.d/",
            "Automated security patching with unattended-upgrades",
          ],
          introduction: `Ubuntu uses the Debian package format (.deb) and the APT (Advanced Package Tool) ecosystem. APT simplifies software management by connecting to trusted upstream repositories, verifying cryptographic GPG signatures, resolving complex dependency trees, and installing binaries securely.`,
          whyItMatters: `Server reliability depends on keeping operating systems patched against known CVE security vulnerabilities. Knowing how to safely update systems, hold critical package versions (apt-mark hold), and clean orphaned dependencies prevents system drift and disk exhaustion.`,
          syntax: `apt update && apt upgrade -y\napt install -y nginx\napt autoremove --purge\napt-mark hold postgresql-16`,
          mainExample: {
            title: "Adding a Verified Third-Party Repository and Installing Software",
            language: "bash",
            code: `#!/usr/bin/env bash
# Adding Official Docker GPG Key and APT Repository on Ubuntu Server

set -euo pipefail

# 1. Install prerequisite utilities
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg

# 2. Create directory for keyrings with secure permissions
sudo install -m 0755 -d /etc/apt/keyrings

# 3. Download and store official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# 4. Add the repository definition to sources.list.d
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. Update index and install Docker CE
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

echo "Docker Engine installed and verified successfully."`,
            executable: false,
            explanation: [
              "gnupg allows APT to verify the cryptographic authenticity of third-party packages.",
              "/etc/apt/keyrings is the modern, secure directory for storing repository GPG keys (replacing deprecated apt-key).",
              "signed-by=/etc/apt/keyrings/docker.gpg binds the repository strictly to its dedicated signature key.",
              "dpkg --print-architecture automatically resolves amd64 or arm64 architecture.",
            ],
          },
          detailedExplanation: [
            "apt update vs apt upgrade: apt update only downloads the latest package metadata indices from repository servers. apt upgrade reads that index and upgrades all installed packages that have newer versions available.",
            "Holding Packages: Running apt-mark hold <package> prevents APT from automatically upgrading critical database or runtime packages during broad system upgrades.",
          ],
          commonMistakes: [
            {
              mistake: "Using outdated apt-key add to import third-party GPG signing keys.",
              badCode: "curl -fsSL https://example.com/key.gpg | sudo apt-key add -",
              goodCode: "curl -fsSL https://example.com/key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/example.gpg",
              explanation: "apt-key add trusts the key globally across all repositories, enabling any key to sign packages for any repository. Storing dearmored keys in /etc/apt/keyrings with signed-by isolates the trust strictly to that repository.",
            },
          ],
          bestPractices: [
            "Always run apt update before installing new packages to avoid downloading stale dependency trees.",
            "Use apt autoremove --purge periodically to clean up unused kernel headers and orphan libraries.",
            "Pin critical database packages with apt-mark hold to avoid unexpected major version upgrades during automated patch runs.",
          ],
          summary: [
            "APT handles repository metadata and dependency resolution; DPKG performs low-level .deb installations.",
            "Always store third-party GPG keys in /etc/apt/keyrings with signed-by repository references.",
            "Use unattended-upgrades for automatic zero-downtime security patching on Ubuntu servers.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-6",
      slug: "bash-scripting-automation",
      title: "Module 6: Bash Scripting, Streams & Cron Job Automation",
      description: "Master variables, loops, conditionals, exit codes, stdin/stdout/stderr redirection, pipes, and cron schedules.",
      lessons: [
        {
          id: "linux-bash-cron",
          slug: "bash-scripting-streams-cron-automation",
          courseSlug: "linux",
          moduleSlug: "bash-scripting-automation",
          title: "Advanced Bash Scripting, Streams & Cron Automation",
          description: "Write robust, production-grade bash shell scripts using strict mode (set -euo pipefail), pipeline stream processing with awk/sed/grep, and scheduled cron jobs.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Bash strict mode: set -euo pipefail for bulletproof automation scripts",
            "I/O Redirection: stdin (0), stdout (1), stderr (2), and piping ( | )",
            "Pattern filtering and stream processing using grep, sed, and awk",
            "Scheduling recurring background tasks using system crontab syntax",
          ],
          introduction: `Bash (Bourne Again SHell) is the standard command-line shell and scripting language on Linux. Writing robust shell scripts enables engineers to automate server backups, database maintenance, container health checks, and CI/CD pipelines.`,
          whyItMatters: `A poorly written shell script that fails silently or ignores errors can delete production files or leave servers in corrupt states. Employing strict mode, proper exit codes, and automated crontab scheduling ensures reliable, repeatable infrastructure automation.`,
          syntax: `#!/usr/bin/env bash\nset -euo pipefail\ncommand 2>&1 | tee output.log\ncrontab -e\n0 2 * * * /usr/local/bin/backup.sh`,
          mainExample: {
            title: "Production Automated Backup Script with Strict Mode",
            language: "bash",
            code: `#!/usr/bin/env bash
# Production Database & Directory Backup Automation Script
# Strict Mode: Exit immediately on error, unset variables, or pipeline failure
set -euo pipefail

# Configuration Variables
BACKUP_SRC="/var/www/html"
BACKUP_DEST="/var/backups/site"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ARCHIVE_NAME="site_backup_\${TIMESTAMP}.tar.gz"
RETENTION_DAYS=7

# Ensure destination directory exists
mkdir -p "\${BACKUP_DEST}"

echo "[\$(date)] Starting backup of \${BACKUP_SRC}..."

# Create compressed tar archive
tar -czf "\${BACKUP_DEST}/\${ARCHIVE_NAME}" -C "\${BACKUP_SRC}" .

# Verify archive was created and calculate size
ARCHIVE_SIZE=$(du -h "\${BACKUP_DEST}/\${ARCHIVE_NAME}" | awk '{print $1}')
echo "[\$(date)] Backup completed successfully: \${ARCHIVE_NAME} (\${ARCHIVE_SIZE})"

# Prune backups older than retention policy
echo "[\$(date)] Pruning backups older than \${RETENTION_DAYS} days..."
find "\${BACKUP_DEST}" -name "site_backup_*.tar.gz" -type f -mtime +\${RETENTION_DAYS} -delete

echo "[\$(date)] Maintenance job finished cleanly."`,
            executable: true,
            explanation: [
              "set -e terminates the script immediately if any command returns a non-zero exit status.",
              "set -u raises an error if an uninitialized variable is referenced.",
              "set -o pipefail ensures pipeline return codes reflect the last non-zero exit code in the chain.",
              "date +'%Y%m%d_%H%M%S' generates ISO-like chronological timestamps for safe filenames.",
              "find -mtime +7 -delete automatically rotates disk storage by deleting archives older than 7 days.",
            ],
          },
          detailedExplanation: [
            "Crontab Expression Anatomy: A standard cron expression consists of 5 fields: `minute (0-59) hour (0-23) day-of-month (1-31) month (1-12) day-of-week (0-7)`.",
            "Common Cron Examples: `*/15 * * * *` (every 15 minutes), `0 3 * * *` (every day at 3:00 AM), `0 0 * * 0` (every Sunday at midnight).",
          ],
          commonMistakes: [
            {
              mistake: "Relying on interactive user $PATH variables inside cron jobs.",
              badCode: "0 2 * * * backup.sh",
              goodCode: "0 2 * * * /usr/local/bin/backup.sh >> /var/log/backup.log 2>&1",
              explanation: "Cron executes with a minimal default PATH (/usr/bin:/bin). Always specify full absolute paths to executables and redirect output to a log file.",
            },
          ],
          bestPractices: [
            "Always include set -euo pipefail at the top of all production bash scripts.",
            "Quote all variable references (`\"${VAR}\"`) to prevent word splitting and globbing bugs.",
            "Redirect cron job stdout and stderr to a log file (`>> /var/log/job.log 2>&1`) for auditability.",
          ],
          summary: [
            "Strict mode (`set -euo pipefail`) prevents silent script failures.",
            "Stream redirection (`2>&1`) combines stderr and stdout for unified logging.",
            "Cron coordinates automated recurring tasks with minimal system overhead.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-7",
      slug: "networking-firewall-ssh",
      title: "Module 7: Linux Networking, SSH Hardening & UFW Firewalls",
      description: "Master ip/netstat/ss, DNS resolution, SSH key hardening, and UFW packet filtering.",
      lessons: [
        {
          id: "linux-networking-ssh-ufw",
          slug: "linux-networking-ssh-hardening-ufw-firewall",
          courseSlug: "linux",
          moduleSlug: "networking-firewall-ssh",
          title: "Linux Networking, SSH Key Hardening & UFW Firewall",
          description: "Inspect network interfaces, socket statistics (ss), configure SSH public-key authentication, disable root password logins, and manage packet filtering with UFW.",
          durationMinutes: 24,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Inspecting network addresses and routes with ip addr and ip route",
            "Auditing listening network ports and TCP sockets with ss -tulpn",
            "Hardening OpenSSH Server configuration (/etc/ssh/sshd_config)",
            "Configuring stateful packet filtering rules with UFW (Uncomplicated Firewall)",
          ],
          introduction: `Linux networking is governed by the kernel's network stack and the Netfilter packet filtering subsystem. Securing an internet-facing Linux server requires restricting listening ports, enforcing cryptographic SSH key authentication, and configuring firewall rules to reject unauthorized traffic.`,
          whyItMatters: `Public cloud servers are scanned thousands of times daily by automated botnets attempting SSH brute-force attacks. Hardening SSH and maintaining strict firewall rules is the first line of defense against network intrusion.`,
          syntax: `ss -tulpn\nufw default deny incoming\nufw allow 22/tcp\nufw enable\nssh-keygen -t ed25519`,
          mainExample: {
            title: "Securing Server Ports and Hardening SSH Configuration",
            language: "bash",
            code: `#!/usr/bin/env bash
# Server Network Inspection & UFW Firewall Hardening

echo "=== 1. Active Listening Network Sockets ==="
sudo ss -tulpn | grep LISTEN

echo -e "\n=== 2. Configuring UFW Firewall Baseline ==="
# Default: Deny all inbound, allow all outbound
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow essential web and administration ports
sudo ufw allow 22/tcp comment "SSH Administration"
sudo ufw allow 80/tcp comment "HTTP Web"
sudo ufw allow 443/tcp comment "HTTPS Secure Web"

# Enable Firewall
sudo ufw --force enable
sudo ufw status verbose

echo -e "\n=== 3. Recommended OpenSSH Hardening Settings (/etc/ssh/sshd_config) ==="
cat << 'EOF'
# Key Hardening Directives:
# PasswordAuthentication no
# PermitRootLogin prohibit-password
# PubkeyAuthentication yes
# X11Forwarding no
# MaxAuthTries 3
EOF`,
            executable: false,
            explanation: [
              "ss -tulpn displays TCP (-t), UDP (-u), listening (-l), process names (-p), and numeric ports (-n).",
              "ufw default deny incoming ensures every port is closed unless explicitly whitelisted.",
              "ufw allow 22, 80, 443 allows only SSH, HTTP, and HTTPS traffic while blocking all other ports.",
              "Disabling PasswordAuthentication in sshd_config eliminates password brute-force attacks entirely.",
            ],
          },
          detailedExplanation: [
            "ED25519 Keys: Modern cryptography recommends `ssh-keygen -t ed25519` over older RSA keys because ED25519 provides faster signature verification, smaller key sizes (68 characters), and stronger resistance to side-channel attacks.",
          ],
          commonMistakes: [
            {
              mistake: "Enabling UFW firewall before allowing port 22/SSH, locking the administrator out of the server.",
              badCode: "sudo ufw default deny incoming\nsudo ufw enable",
              goodCode: "sudo ufw allow 22/tcp\nsudo ufw enable",
              explanation: "Always whitelist your SSH administration port BEFORE enabling the firewall on remote cloud servers.",
            },
          ],
          bestPractices: [
            "Use modern ED25519 SSH keys with a passphrase instead of traditional password logins.",
            "Disable PasswordAuthentication and PermitRootLogin in /etc/ssh/sshd_config.",
            "Regularly audit listening network ports using ss -tulpn to ensure no unauthorized processes are exposed.",
          ],
          summary: [
            "Use `ss -tulpn` to identify all network services listening on open ports.",
            "Enforce public-key authentication for SSH and disable root password logins.",
            "Configure UFW to deny incoming traffic by default and whitelist only required ports.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-8",
      slug: "storage-lvm-filesystems",
      title: "Module 8: Storage, Partitioning, LVM & Filesystems",
      description: "Manage block devices, fdisk/parted, Ext4/XFS filesystems, /etc/fstab mounts, and LVM volumes.",
      lessons: [
        {
          id: "linux-storage-lvm",
          slug: "storage-partitioning-filesystems-lvm",
          courseSlug: "linux",
          moduleSlug: "storage-lvm-filesystems",
          title: "Block Devices, Filesystems & Logical Volume Manager (LVM)",
          description: "Understand block devices (lsblk), partitioning with GPT, creating Ext4/XFS filesystems, persistent mounts via /etc/fstab, and dynamically scaling storage with LVM.",
          durationMinutes: 22,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Inspecting block devices, NVMe/SATA drives, and partitions using lsblk and blkid",
            "Formatting partitions with Ext4 and XFS filesystems using mkfs",
            "Configuring persistent filesystem mounts with UUIDs in /etc/fstab",
            "Managing Logical Volume Manager (LVM): Physical Volumes (PV), Volume Groups (VG), Logical Volumes (LV)",
          ],
          introduction: `Linux interacts with raw storage drives (NVMe, SSDs, virtual cloud disks) as Block Devices (/dev/nvme0n1, /dev/sda). To store files, block devices are partitioned (GPT/MBR), formatted with a Filesystem (Ext4, XFS), and mounted into the directory tree. Logical Volume Manager (LVM) introduces a virtualization layer that allows disks to be pooled and resized on the fly without unmounting filesystems.`,
          whyItMatters: `In production cloud environments, database volumes and log partitions frequently run out of space. Understanding persistent UUID mounts in /etc/fstab and dynamic online volume expansion with LVM (lvextend, resize2fs) prevents system downtime.`,
          syntax: `lsblk -f\nmkfs.ext4 /dev/sdb1\nmount /dev/sdb1 /mnt/data\npvcreate /dev/sdb\nvgcreate data_vg /dev/sdb\nlvcreate -n data_lv -L 50G data_vg`,
          mainExample: {
            title: "Dynamic Storage Expansion with Logical Volume Manager (LVM)",
            language: "bash",
            code: `#!/usr/bin/env bash
# LVM (Logical Volume Manager) Administration Commands

echo "=== 1. Inspecting Block Storage Hierarchy ==="
lsblk -o NAME,SIZE,TYPE,FSTYPE,MOUNTPOINT

echo -e "\n=== 2. Creating LVM Structure ==="
# Step 1: Initialize Physical Volume (PV)
# sudo pvcreate /dev/sdb

# Step 2: Create Volume Group (VG)
# sudo vgcreate app_vg /dev/sdb

# Step 3: Create Logical Volume (LV)
# sudo lvcreate -n data_lv -L 20G app_vg

# Step 4: Format with Ext4 filesystem
# sudo mkfs.ext4 /dev/app_vg/data_lv

# Step 5: Mount to directory
# sudo mkdir -p /var/data
# sudo mount /dev/app_vg/data_lv /var/data

echo -e "\n=== 3. Online Storage Expansion (Zero Downtime) ==="
# Extend Logical Volume by +10GB and grow Ext4 filesystem simultaneously
# sudo lvextend -L +10G /dev/app_vg/data_lv -r

echo "LVM allows online volume extension without unmounting active filesystems."`,
            executable: false,
            explanation: [
              "lsblk displays block storage topology, partition names, filesystem types, and mount points.",
              "Physical Volumes (PV) represent raw block devices allocated to LVM.",
              "Volume Groups (VG) pool storage from multiple PVs into a unified storage pool.",
              "Logical Volumes (LV) carve virtual partitions out of the VG that can be formatted and mounted.",
              "lvextend -r expands both the underlying LVM block layer and the live filesystem in one command.",
            ],
          },
          detailedExplanation: [
            "/etc/fstab Rules: Every entry in /etc/fstab consists of 6 fields: `<file system (UUID)> <mount point> <type> <options> <dump> <pass>`. Always mount by persistent UUID (e.g. `UUID=...`) rather than device names (`/dev/sda1`) because device letters can change during reboot.",
          ],
          commonMistakes: [
            {
              mistake: "Using device names like /dev/sdb1 in /etc/fstab instead of unique UUIDs.",
              badCode: "/dev/sdb1 /mnt/data ext4 defaults 0 2",
              goodCode: "UUID=3a7f8e12-4c5b-4890-8812-789a4b2c1234 /mnt/data ext4 defaults 0 2",
              explanation: "Device names like /dev/sdb1 can change order if drives are attached or detached in cloud providers, causing boot failures.",
            },
          ],
          bestPractices: [
            "Always use `blkid` to find partition UUIDs and mount with UUID in /etc/fstab.",
            "Use LVM for database and container storage partitions to allow zero-downtime volume resizing.",
            "Run `sudo mount -a` after editing /etc/fstab to verify syntax before rebooting.",
          ],
          summary: [
            "Storage workflow: Block Device → Partition → Filesystem → Mount Point.",
            "LVM introduces PVs, VGs, and LVs for dynamic on-the-fly volume resizing.",
            "Always use persistent filesystem UUIDs in /etc/fstab.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-9",
      slug: "logging-journalctl-audit",
      title: "Module 9: System Logging, journalctl & Log Rotation",
      description: "Master systemd-journald, rsyslog, /var/log analysis, logrotate policies, and security auditing.",
      lessons: [
        {
          id: "linux-logging-journalctl",
          slug: "system-logging-journalctl-logrotate",
          courseSlug: "linux",
          moduleSlug: "logging-journalctl-audit",
          title: "System Logging with journalctl & Logrotate",
          description: "Query system and service logs with journalctl, filter by unit, priority, and timestamps, and manage disk space with logrotate configuration.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Querying binary systemd journal logs using journalctl",
            "Filtering logs by unit (`-u`), boot session (`-b`), and priority level (`-p err`)",
            "Viewing real-time live log streams (`journalctl -f`)",
            "Configuring automated log rotation policies in /etc/logrotate.d/",
          ],
          introduction: `Linux servers generate continuous operational telemetry. On modern Ubuntu and Debian systems, systemd-journald captures kernel messages, system events, daemon output, and standard error streams in a high-speed indexed binary log format. The logrotate daemon automatically compresses, archives, and removes old text logs to protect disk space.`,
          whyItMatters: `When servers crash or services encounter errors, system logs provide the definitive audit trail. Mastering journalctl filtering and logrotate policies ensures you can diagnose root causes rapidly without running out of server disk space.`,
          syntax: `journalctl -u nginx.service -f\njournalctl -p err -b\njournalctl --since "1 hour ago"\nlogrotate -d /etc/logrotate.conf`,
          mainExample: {
            title: "Diagnosing System Issues with journalctl and Logrotate",
            language: "bash",
            code: `#!/usr/bin/env bash
# Production Log Analysis with journalctl

echo "=== 1. System Errors on Current Boot ==="
journalctl -b -p err..emerg --no-pager | head -n 20

echo -e "\n=== 2. Inspecting Specific Service Logs (Last 30 Minutes) ==="
# journalctl -u myapp.service --since "30 min ago" --no-pager

echo -e "\n=== 3. Custom Logrotate Configuration Example (/etc/logrotate.d/kwas-app) ==="
cat << 'EOF'
/var/log/kwas-app/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 appuser appuser
    sharedscripts
    postrotate
        systemctl reload kwas-app.service > /dev/null 2>&1 || true
    endscript
}
EOF`,
            executable: true,
            explanation: [
              "journalctl -b queries only log entries from the current boot session.",
              "-p err..emerg filters for high-severity log priorities (Error, Critical, Alert, Emergency).",
              "logrotate rotates application logs daily, retaining 14 days of compressed archives (rotate 14, compress).",
              "postrotate triggers a zero-downtime service reload after rotating log file handles.",
            ],
          },
          detailedExplanation: [
            "Syslog Priority Levels: 0=Emergency, 1=Alert, 2=Critical, 3=Error, 4=Warning, 5=Notice, 6=Informational, 7=Debug. `journalctl -p 3` returns all entries at Error level or higher.",
          ],
          commonMistakes: [
            {
              mistake: "Deleting an active open log file with rm without reloading the logging daemon.",
              badCode: "rm /var/log/app/access.log",
              goodCode: "truncate -s 0 /var/log/app/access.log\n# OR configure proper logrotate",
              explanation: "If you rm a file that a running process still has open, Linux maintains the inode open in memory. The disk space is NOT freed until the process is restarted.",
            },
          ],
          bestPractices: [
            "Use `journalctl -u <service> -n 100 --no-pager` for rapid diagnostic inspection in scripts.",
            "Always specify compression (`compress`, `delaycompress`) in logrotate configurations.",
            "Truncate active log files (`truncate -s 0 file.log`) instead of deleting them directly when performing emergency disk cleanup.",
          ],
          summary: [
            "journalctl provides indexed, binary log querying across all systemd units.",
            "Filter logs by unit (`-u`), boot (`-b`), priority (`-p`), and timeframe (`--since`).",
            "logrotate manages automated rotation, compression, and disk space preservation.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-10",
      slug: "performance-kernel-tuning",
      title: "Module 10: Performance Monitoring, Memory, CPU & sysctl Tuning",
      description: "Analyze system bottlenecks with vmstat, iostat, mpstat, and tune kernel parameters with /etc/sysctl.conf.",
      lessons: [
        {
          id: "linux-performance-sysctl",
          slug: "linux-performance-tuning-sysctl-kernel",
          courseSlug: "linux",
          moduleSlug: "performance-kernel-tuning",
          title: "Linux Performance Monitoring & Kernel sysctl Tuning",
          description: "Identify CPU, memory, and I/O bottlenecks with sysstat tools (vmstat, iostat) and tune kernel parameters using sysctl for high-concurrency web servers.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "System performance analysis using vmstat, iostat, and pidstat",
            "Understanding CPU Context Switches, Run Queues, and I/O Wait (wa)",
            "Tuning kernel networking parameters (/proc/sys/net/) with sysctl",
            "Optimizing memory swap aggressiveness (vm.swappiness) and dirty page writeback",
          ],
          introduction: `Default Linux kernel configurations are optimized for general-purpose workstations. High-traffic production servers (hosting databases, reverse proxies, and Kubernetes nodes) require systematic performance benchmarking and kernel parameter tuning via sysctl to maximize throughput and minimize latency.`,
          whyItMatters: `High-concurrency servers can exhaust ephemeral network ports, experience connection drops (SYN flood backlog overflow), or stutter due to aggressive swapping. Tuning kernel TCP buffers, connection queues, and virtual memory parameters is critical for site reliability.`,
          syntax: `vmstat 1 5\niostat -xz 1 3\nsysctl -a\nsysctl -p /etc/sysctl.d/99-custom.conf`,
          mainExample: {
            title: "Kernel Tuning for High-Concurrency Production Web Servers",
            language: "bash",
            code: `#!/usr/bin/env bash
# Production Linux Kernel Network & Memory Tuning (/etc/sysctl.d/99-performance.conf)

cat << 'EOF' | sudo tee /etc/sysctl.d/99-performance.conf
# 1. Virtual Memory Tuning
# Reduce swap aggressiveness (0=avoid swap, 100=aggressive)
vm.swappiness = 10
# Maximum memory map areas for high-performance databases (Elasticsearch/Postgres)
vm.max_map_count = 262144

# 2. Network Socket Backlog & Buffer Tuning
# Maximum number of incoming connection backlog queue
net.core.somaxconn = 65535
# Maximum packets queued on input interface before kernel processing
net.core.netdev_max_backlog = 65535
# Maximum SYN backlog queue for half-open connections
net.ipv4.tcp_max_syn_backlog = 65535

# 3. Port Range & TCP Socket Reuse
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15

# 4. File Descriptor Limits
fs.file-max = 2097152
EOF

# Apply kernel parameters immediately without reboot
sudo sysctl --system

echo "High-performance kernel sysctl parameters applied successfully."`,
            executable: false,
            explanation: [
              "vm.swappiness=10 instructs the kernel to prefer evicting page cache before paging active processes to swap.",
              "net.core.somaxconn=65535 raises the listen backlog queue limit for high-traffic servers (e.g. Nginx, Redis).",
              "net.ipv4.tcp_tw_reuse=1 allows the kernel to safely reuse TIME_WAIT sockets for outgoing connections.",
              "sysctl --system loads and validates all configuration files in /etc/sysctl.d/.",
            ],
          },
          detailedExplanation: [
            "vmstat Metrics: `r` (runnable processes waiting for CPU), `b` (processes blocked in uninterruptible sleep waiting for disk I/O), `si/so` (swap in/out—high numbers indicate memory exhaustion), `us/sy/id/wa` (User, System, Idle, and I/O Wait CPU percentages).",
          ],
          commonMistakes: [
            {
              mistake: "Setting vm.swappiness=0 to disable swap completely.",
              badCode: "vm.swappiness = 0",
              goodCode: "vm.swappiness = 10",
              explanation: "Completely disabling swap can trigger the kernel's Out-Of-Memory (OOM) killer prematurely during brief traffic spikes. Setting swappiness to 10 maintains a safety buffer while prioritizing RAM.",
            },
          ],
          bestPractices: [
            "Place custom kernel sysctl configurations in `/etc/sysctl.d/99-performance.conf` rather than modifying /etc/sysctl.conf directly.",
            "Monitor vmstat `si` and `so` columns to detect whether memory pressure is causing disk thrashing.",
            "Always test sysctl tuning under realistic load benchmarks before pushing to production.",
          ],
          summary: [
            "vmstat, iostat, and mpstat pinpoint CPU, disk I/O, and memory bottlenecks.",
            "sysctl manages live Linux kernel parameters at runtime.",
            "Tune somaxconn, port ranges, and swappiness for enterprise web throughput.",
          ],
        },
      ],
    },
    {
      id: "mod-linux-11",
      slug: "security-server-hardening",
      title: "Module 11: Production Server Hardening & Security Compliance",
      description: "Apply CIS benchmarks, disable unnecessary services, configure fail2ban, and audit security posture.",
      lessons: [
        {
          id: "linux-security-hardening",
          slug: "linux-server-hardening-cis-benchmarks-fail2ban",
          courseSlug: "linux",
          moduleSlug: "security-server-hardening",
          title: "Production Linux Server Hardening & Security Standards",
          description: "Implement defense-in-depth security: fail2ban intrusion prevention, AppArmor profiles, disabling legacy protocols, and automated security audit checklists.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Defense-in-Depth principle for Linux enterprise infrastructure",
            "Configuring Fail2ban to block brute-force SSH and API attackers automatically",
            "Enforcing Mandatory Access Control with AppArmor on Ubuntu",
            "Hardening kernel security flags (ASLR, SYN Cookies, ICMP Redirects)",
          ],
          introduction: `Server hardening is the process of eliminating attack surfaces on a Linux system by removing unnecessary software, securing configurations, enforcing strict access controls, and enabling continuous intrusion prevention. Following industry standards like the CIS (Center for Internet Security) Benchmarks protects enterprise data and infrastructure from compromise.`,
          whyItMatters: `Unprotected servers connected to public networks are targeted within minutes. Automating firewall policies, intrusion detection, AppArmor profiles, and automated patch routines turns a default operating system into an enterprise-grade hardened fortress.`,
          syntax: `fail2ban-client status sshd\naa-status\nlynis audit system`,
          mainExample: {
            title: "Configuring Fail2ban and Kernel Network Security Hardening",
            language: "bash",
            code: `#!/usr/bin/env bash
# Production Ubuntu Linux Server Hardening Baseline

set -euo pipefail

# 1. Install Fail2ban intrusion prevention daemon
sudo apt-get update && sudo apt-get install -y fail2ban

# 2. Configure local jail configuration for SSH protection
cat << 'EOF' | sudo tee /etc/fail2ban/jail.local
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
banaction = ufw

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
EOF

# 3. Kernel Security Hardening (/etc/sysctl.d/99-security.conf)
cat << 'EOF' | sudo tee /etc/sysctl.d/99-security.conf
# Enable SYN flood protection
net.ipv4.tcp_syncookies = 1
# Disable ICMP redirect acceptance (prevents MITM route hijacking)
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0
# Ignore ICMP broadcast pings (prevents Smurf attacks)
net.ipv4.icmp_echo_ignore_broadcasts = 1
# Log spoofed, source-routed, and redirect packets
net.ipv4.conf.all.log_martians = 1
EOF

# Restart fail2ban and reload kernel security settings
sudo systemctl enable --now fail2ban
sudo sysctl --system

echo "Production Server Hardening Baseline completed successfully."`,
            executable: false,
            explanation: [
              "fail2ban monitors authentication logs (/var/log/auth.log) and dynamically blocks offending IP addresses in the UFW firewall.",
              "bantime=1h and maxretry=3 bans any IP that fails 3 login attempts within 10 minutes for 1 hour.",
              "tcp_syncookies=1 defends against TCP SYN flood denial-of-service attacks.",
              "Disabling ICMP redirects prevents malicious nodes on the local network from poisoning the server's routing table.",
            ],
          },
          detailedExplanation: [
            "AppArmor (Application Armor): Ubuntu's built-in Mandatory Access Control (MAC) system. AppArmor restricts programs (like Nginx, MySQL, or custom daemons) to only the specific files, capabilities, and network sockets declared in their security profile (/etc/apparmor.d/).",
          ],
          commonMistakes: [
            {
              mistake: "Leaving default administrative ports (like Redis 6379 or MongoDB 27017) bound to 0.0.0.0 without authentication.",
              badCode: "bind 0.0.0.0",
              goodCode: "bind 127.0.0.1\nrequirepass <STRONG_CRYPTOGRAPHIC_PASSWORD>",
              explanation: "Databases bound to 0.0.0.0 without firewalls are immediately accessible to the public internet, leading to data breaches.",
            },
          ],
          bestPractices: [
            "Run security audit tools like `lynis audit system` periodically to discover hardening gaps.",
            "Enforce AppArmor profiles (`aa-enforce /etc/apparmor.d/*`) on all internet-facing services.",
            "Deploy Fail2ban on all internet-exposed servers to mitigate automated dictionary attacks.",
          ],
          summary: [
            "Defense-in-depth combines firewalls, SSH key hardening, Fail2ban, and AppArmor.",
            "fail2ban dynamically bans abusive IP addresses directly at the packet filter layer.",
            "Kernel network flags protect against SYN floods, spoofing, and routing manipulation.",
          ],
        },
      ],
    },
    {
      id: "mod-lx-12",
      slug: "ebpf-xdp-kernel-tracing",
      title: "Module 12: Extended Berkeley Packet Filter (eBPF) & XDP",
      description: "Master Linux kernel programmability: eBPF bytecode, kprobes/uprobes, BPF maps, and eXpress Data Path (XDP) packet filtering.",
      lessons: [
        {
          id: "linux-ebpf-xdp",
          slug: "linux-kernel-ebpf-xdp-kprobes-bpf-maps-tracing",
          courseSlug: "linux",
          moduleSlug: "ebpf-xdp-kernel-tracing",
          title: "eBPF & XDP: Linux Kernel Programmability & Tracing",
          description: "Program the Linux kernel safely with Extended Berkeley Packet Filter (eBPF): kernel in-verifier safety checks, attaching kprobes and tracepoints, BPF Maps communication, and dropping DDoS packets at wire speed with eXpress Data Path (XDP).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "What eBPF is and why it revolutionized Linux observability, security, and networking (Cilium, Falco, bpftrace)",
            "The in-kernel eBPF Verifier: mathematically proving memory safety, bounded loops, and zero kernel crashes",
            "Communicating between kernel-space and user-space using BPF Hash/Array Maps and Perf Ring Buffers",
            "Executing sub-nanosecond packet filtering on the Network Interface Card (NIC) with XDP (`XDP_DROP`, `XDP_PASS`)",
          ],
          introduction: `Historically, modifying Linux kernel behavior required writing custom Kernel Modules (LKM), which risked kernel panics, security bugs, and kernel crashes. eBPF is a revolutionary in-kernel sandboxed virtual machine that allows developers to run custom byte-code programs directly inside the Linux kernel in response to system events (system calls, network packets, function entries) with guaranteed safety and zero kernel reboots.`,
          whyItMatters: `Cloud-native giants (Meta, Cloudflare, Netflix) use eBPF and XDP for wire-speed DDoS defense, microservice service meshes (Cilium), and real-time security threat detection without modifying application code.`,
          syntax: `sudo bpftrace -e 'kprobe:sys_execve { printf("Executed: %s\\n", str(arg0)); }'\nip link set dev eth0 xdp obj xdp_filter.o sec xdp`,
          mainExample: {
            title: "Real-Time System Call Observability with bpftrace and eBPF",
            language: "bash",
            code: `#!/usr/bin/env bash
# Real-Time Linux Kernel Observability using eBPF & bpftrace

set -euo pipefail

echo "=== Linux Kernel eBPF Observability Engine ==="

# 1. Trace all process executions in real time using kernel tracepoint
echo "[1] Tracing process execve() system calls across the OS..."
sudo bpftrace -e '
tracepoint:syscalls:sys_enter_execve
{
    printf("PID: %-6d | Comm: %-16s | Filename: %s\\n", pid, comm, str(args->filename));
}' &
BPF_PID=$!

sleep 3

# 2. Inspect active eBPF programs loaded into the kernel
echo -e "\\n[2] Inspecting loaded eBPF programs in the Linux kernel:"
sudo bpftool prog list

# 3. Query eBPF Map storage allocations
echo -e "\\n[3] Querying active BPF Maps in RAM:"
sudo bpftool map list

# Clean up background trace
sudo kill "$BPF_PID" 2>/dev/null || true
echo -e "\\n✅ eBPF traced kernel events non-invasively with zero system overhead!"`,
            executable: false,
            explanation: [
              "bpftrace attaches directly to the kernel tracepoint 'syscalls:sys_enter_execve'.",
              "When any process on the system calls execve(), the kernel invokes the eBPF JIT-compiled bytecode in nanoseconds.",
              "bpftool inspects, loads, and debugs eBPF programs and maps without restarting services.",
              "eBPF Verifier strictly ensures that the program cannot loop infinitely, access uninitialized memory, or panic the kernel.",
            ],
          },
          detailedExplanation: [
            "eXpress Data Path (XDP): XDP executes eBPF programs at the lowest possible level in the network subsystem—directly inside the NIC driver before the Linux network stack allocates a `sk_buff` packet structure. XDP can process 24 million packets per second per core, dropping DDoS attacks with zero CPU load.",
          ],
          commonMistakes: [
            {
              mistake: "Writing unbounded loops inside eBPF C programs, causing the eBPF Verifier to reject compilation.",
              badCode: "while (1) { ... } // Compiler error: eBPF verifier rejects unbounded loops",
              goodCode: "#pragma unroll\nfor (int i = 0; i < 64; i++) { ... } // Bounded verifiable loop",
              explanation: "The eBPF verifier traverses every possible instruction branch. If it cannot prove the loop terminates within instruction limits, it refuses to load the program.",
            },
          ],
          bestPractices: [
            "Use `bpftrace` for quick one-liner production kernel diagnostics.",
            "Use `libbpf` and CO-RE (Compile Once - Run Everywhere) with BTF (BPF Type Format) for production eBPF applications.",
            "Adopt Cilium as the Kubernetes CNI plugin for eBPF-powered network routing and security.",
          ],
          summary: [
            "eBPF allows executing safe, sandboxed bytecode directly inside the Linux kernel.",
            "The in-kernel verifier guarantees memory safety and prevents kernel panics.",
            "XDP enables sub-nanosecond wire-speed packet filtering and DDoS mitigation.",
          ],
        },
      ],
    },
    {
      id: "mod-lx-13",
      slug: "containers-cgroupsv2-namespaces-internals",
      title: "Module 13: Container Internals: cgroups v2, Namespaces & Rootless",
      description: "Master Linux container primitives: Linux namespaces (PID, Mount, Net, User), cgroups v2 unified resource limits, and building containers from scratch.",
      lessons: [
        {
          id: "linux-cgroups-namespaces",
          slug: "linux-container-internals-cgroups-v2-namespaces-unshare",
          courseSlug: "linux",
          moduleSlug: "containers-cgroupsv2-namespaces-internals",
          title: "Linux Container Internals: cgroups v2 & Namespaces",
          description: "Demystify Docker and Kubernetes from the ground up: the 8 Linux Namespaces (`CLONE_NEWPID`, `CLONE_NEWNET`, `CLONE_NEWNS`, `CLONE_NEWUSER`), cgroups v2 unified resource hierarchy (`cpu.max`, `memory.max`, `io.weight`), and creating isolated containers using `unshare` and `pivot_root`.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why containers are NOT virtual machines: containers are ordinary Linux processes isolated by kernel Namespaces",
            "The 8 Linux Namespaces: PID (Process IDs), Mount (Filesystems), Net (Network routing), User (Rootless mapping), IPC, UTS, Cgroup, Time",
            "Managing CPU and Memory resource ceilings using cgroups v2 (`/sys/fs/cgroup`)",
            "Constructing a secure, rootless container environment using `unshare` and custom chroot/pivot_root",
          ],
          introduction: `There is no such physical object as a 'container' inside the Linux kernel. A container is simply a standard Linux process isolated by two fundamental kernel subsystems: Namespaces (which restrict what the process can SEE, such as process lists and network interfaces) and Control Groups / cgroups (which restrict what the process can USE, such as CPU cores, RAM, and disk I/O).`,
          whyItMatters: `Understanding cgroups v2 and namespaces allows you to debug container memory limit throttling, resolve Kubernetes OOMKilled errors, and secure multi-tenant cloud platforms.`,
          syntax: `unshare --mount --uts --ipc --net --pid --fork --user --map-root-user chroot /container-root /bin/sh\necho "50000 100000" > /sys/fs/cgroup/mygroup/cpu.max`,
          mainExample: {
            title: "Creating an Isolated Linux Container from Scratch with unshare and cgroups v2",
            language: "bash",
            code: `#!/usr/bin/env bash
# Building a Pure Linux Container from Scratch (No Docker required!)

set -euo pipefail

echo "=== Linux Container Architecture: Namespaces & cgroups v2 ==="

# 1. Create a dedicated cgroups v2 resource restriction folder
CGROUP_DIR="/sys/fs/cgroup/kwas_sandbox"
sudo mkdir -p "$CGROUP_DIR"

# Configure Memory Limit (100MB max before OOM Killer triggers)
echo "104857600" | sudo tee "$CGROUP_DIR/memory.max" > /dev/null

# Configure CPU Quota: 50,000us per 100,000us period (50% of 1 CPU core)
echo "50000 100000" | sudo tee "$CGROUP_DIR/cpu.max" > /dev/null

echo "[1] Configured cgroups v2 limits: Max Memory = 100MB | CPU = 50% core"

# 2. Launch an isolated process inside private PID, Mount, UTS, and Network Namespaces
echo "[2] Spawning process inside isolated Namespaces via unshare..."
sudo unshare --pid --mount --uts --net --fork bash -c '
    # Attach this container process PID to our cgroups v2 slice
    echo $$ > /sys/fs/cgroup/kwas_sandbox/cgroup.procs
    
    # Set private container hostname (UTS Namespace)
    hostname "kwas-isolated-node-01"
    
    echo "Inside Container -> Hostname: $(hostname)"
    echo "Inside Container -> My PID: $$ (Visible as PID 1 inside namespace!)"
    echo "Inside Container -> Running under cgroup constraints."
'

# 3. Clean up cgroup slice
sudo rmdir "$CGROUP_DIR"
echo -e "\\n✅ Container execution completed and cgroups cleaned up."`,
            executable: false,
            explanation: [
              "cgroups v2 unified hierarchy in /sys/fs/cgroup controls memory.max (OOM ceiling) and cpu.max (CFS bandwidth quota).",
              "unshare --pid --fork creates a new PID namespace: inside the namespace, the child process becomes PID 1.",
              "unshare --uts isolates the hostname; unshare --net creates an empty network stack.",
              "Writing the process PID ($$) into cgroup.procs enforces kernel resource boundaries instantly.",
            ],
          },
          detailedExplanation: [
            "Rootless Containers & User Namespaces: The User Namespace (`CLONE_NEWUSER`) maps an unprivileged UID on the host (e.g. UID 1000) to UID 0 (root) inside the container. Even if an attacker escapes the container, they possess zero root privileges on the host kernel, preventing container breakout attacks.",
          ],
          commonMistakes: [
            {
              mistake: "Setting Kubernetes CPU limits without understanding cgroup CFS throttling, resulting in severe latency spikes.",
              badCode: "resources:\n  limits:\n    cpu: \"500m\" # Restricts process to 50ms per 100ms CFS period, causing periodic stalls",
              goodCode: "resources:\n  requests:\n    cpu: \"1000m\" # Rely on requests or test CPU burstability",
              explanation: "cgroup CPU limits enforce hard CFS quota slice throttling. If a multi-threaded process exhausts its quota within 10ms, it is frozen for the remaining 90ms of the period.",
            },
          ],
          bestPractices: [
            "Use cgroups v2 on all modern Linux distributions (Ubuntu 22.04+ default).",
            "Deploy Rootless Podman / Docker to prevent container escape privilege escalation.",
            "Use `pivot_root` instead of `chroot` for secure filesystem root isolation.",
          ],
          summary: [
            "Linux containers are normal processes governed by Namespaces and cgroups.",
            "Namespaces isolate system visibility (PID, Mount, Network, Hostname, User).",
            "cgroups v2 enforces strict CPU, Memory, and Disk I/O bandwidth boundaries.",
          ],
        },
      ],
    },
    {
      id: "mod-lx-14",
      slug: "high-performance-io-uring-dpdk",
      title: "Module 14: High-Performance Async I/O: `io_uring` & Kernel Bypass",
      description: "Master modern Linux asynchronous I/O: `io_uring` ring buffers, zero-copy socket transfers, and Data Plane Development Kit (DPDK).",
      lessons: [
        {
          id: "linux-iouring-dpdk",
          slug: "linux-io-uring-async-io-kernel-bypass-dpdk",
          courseSlug: "linux",
          moduleSlug: "high-performance-io-uring-dpdk",
          title: "High-Performance Linux I/O: io_uring & Kernel Bypass",
          description: "Achieve millions of IOPS with modern Linux I/O: the `io_uring` asynchronous I/O architecture (Submission Queue SQ, Completion Queue CQ), zero-syscall polling (`IORING_SETUP_SQPOLL`), registered buffers, and Kernel Bypass networking with DPDK.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why legacy Linux asynchronous I/O (`epoll` + POSIX AIO) incurs excessive system call overhead",
            "The `io_uring` architecture: lock-free shared memory ring buffers between user space and kernel space",
            "Executing millions of disk and network operations with zero system calls (`IORING_SETUP_SQPOLL`)",
            "Kernel Bypass networking: Data Plane Development Kit (DPDK) polling raw NIC memory directly",
          ],
          introduction: `In traditional Linux servers, performing read and write operations requires making system calls (\`read()\`, \`write()\`, \`epoll_wait()\`), each costing ~100-300 nanoseconds in context switches and Meltdown/Spectre CPU barrier mitigations. Created by Jens Axboe, 'io_uring' revolutionizes Linux I/O by sharing two lock-free ring buffers (Submission Queue and Completion Queue) between user space and kernel space in mapped memory, enabling asynchronous I/O with zero system calls.`,
          whyItMatters: `High-performance database storage engines (RocksDB, PostgreSQL 17+, ScyllaDB) and web servers achieve 2x to 5x higher IOPS and lower latency using io_uring over epoll.`,
          syntax: `struct io_uring ring;\nio_uring_queue_init(256, &ring, 0);\nstruct io_uring_sqe *sqe = io_uring_get_sqe(&ring);\nio_uring_prep_read(sqe, fd, buf, 1024, 0);`,
          mainExample: {
            title: "Simulating io_uring Submission and Completion Ring Queue Architecture",
            language: "c",
            code: `// Conceptual io_uring High-Throughput I/O Architecture in C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <liburing.h>

#define QUEUE_DEPTH 128
#define BLOCK_SZ 4096

int main() {
    printf("=== Linux io_uring High-Performance Async I/O ===\\n");

    // 1. Initialize io_uring with Submission Queue (SQ) and Completion Queue (CQ)
    struct io_uring ring;
    if (io_uring_queue_init(QUEUE_DEPTH, &ring, 0) < 0) {
        perror("io_uring_queue_init failed (requires Linux 5.1+)");
        return 1;
    }

    // 2. Prepare asynchronous write request in Submission Queue Entry (SQE)
    struct io_uring_sqe *sqe = io_uring_get_sqe(&ring);
    if (!sqe) {
        fprintf(stderr, "Could not get SQE\\n");
        return 1;
    }

    char buffer[BLOCK_SZ];
    memset(buffer, 'K', BLOCK_SZ);

    int fd = open("/tmp/iouring_test.dat", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    if (fd < 0) { perror("open"); return 1; }

    // Prepares asynchronous write without blocking the thread!
    io_uring_prep_write(sqe, fd, buffer, BLOCK_SZ, 0);

    // 3. Submit SQEs to the Linux kernel (Single batch system call!)
    io_uring_submit(&ring);
    printf("Submitted asynchronous write SQE to the kernel.\\n");

    // 4. Wait for Completion Queue Entry (CQE)
    struct io_uring_cqe *cqe;
    int ret = io_uring_wait_cqe(&ring, &cqe);
    if (ret < 0) { perror("io_uring_wait_cqe"); return 1; }

    if (cqe->res >= 0) {
        printf("✅ io_uring async write completed successfully: %d bytes written!\\n", cqe->res);
    }

    io_uring_cqe_seen(&ring, cqe);
    io_uring_queue_exit(&ring);
    close(fd);
    unlink("/tmp/iouring_test.dat");
    return 0;
}`,
            executable: false,
            explanation: [
              "io_uring_queue_init maps shared memory ring buffers between user space and kernel space.",
              "The application writes I/O requests into the Submission Queue (SQ) without making a system call.",
              "io_uring_submit notifies the kernel to process all queued requests in a single batch.",
              "With IORING_SETUP_SQPOLL enabled, a dedicated kernel thread polls the queue, enabling 100% syscall-free I/O.",
            ],
          },
          detailedExplanation: [
            "Kernel Bypass & DPDK: For ultra-extreme network packet rates (100GbE+ line rates), the Data Plane Development Kit (DPDK) bypasses the Linux kernel entirely. The application directly polls the PCIe memory-mapped I/O (MMIO) registers of the Network Interface Card (NIC) from user space in 0 nanoseconds.",
          ],
          commonMistakes: [
            {
              mistake: "Passing memory buffers to `io_uring` that go out of scope or are freed before the Completion Queue confirms completion.",
              badCode: "void submit() { char buf[1024]; io_uring_prep_read(sqe, fd, buf, 1024, 0); } // Stack buffer destroyed on return!",
              goodCode: "// Ensure buffers remain allocated and valid until cqe is returned and processed",
              explanation: "io_uring executes asynchronously in the kernel. If the backing memory buffer is deallocated while the kernel writes to it, memory corruption occurs.",
            },
          ],
          bestPractices: [
            "Use `liburing` C library instead of invoking raw `io_uring_setup` system calls.",
            "Use registered buffers (`io_uring_register_buffers`) to eliminate kernel page-pinning overhead.",
            "Benchmark database workloads using `fio --ioengine=io_uring` to verify peak storage IOPS.",
          ],
          summary: [
            "`io_uring` eliminates system call overhead via shared-memory Submission and Completion rings.",
            "`IORING_SETUP_SQPOLL` enables completely syscall-free asynchronous storage and network I/O.",
            "Kernel Bypass (DPDK) allows user-space drivers to achieve 100GbE wire-speed packet processing.",
          ],
        },
      ],
    },
    {
      id: "mod-lx-15",
      slug: "memory-subsystem-pagetables-tlb-oom",
      title: "Module 15: Memory Subsystem: Page Tables, TLB, HugePages & OOM Killer",
      description: "Master the Linux memory management subsystem: 4-level/5-level page tables, TLB cache misses, Transparent HugePages (THP), and tuning the OOM Killer.",
      lessons: [
        {
          id: "linux-memory-subsystem",
          slug: "linux-virtual-memory-page-tables-tlb-hugepages-oom-killer",
          courseSlug: "linux",
          moduleSlug: "memory-subsystem-pagetables-tlb-oom",
          title: "Linux Virtual Memory: Page Tables, HugePages & OOM Tuning",
          description: "Deep dive into Linux kernel memory management: Virtual Memory addressing, 4-level Page Tables (PGD, P4D, PUD, PMD, PTE), Translation Lookaside Buffer (TLB) shootdowns, configuring Transparent HugePages (2MB/1GB), and tuning the Out-Of-Memory (OOM) Killer (`oom_score_adj`).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How the Linux Virtual Memory Subsystem translates virtual addresses to physical RAM via Page Tables",
            "The Translation Lookaside Buffer (TLB) hardware cache and why TLB misses slow down large databases",
            "Reducing page table memory overhead using 2MB and 1GB Transparent HugePages (THP)",
            "How the Linux OOM Killer calculates `oom_badness` and tuning `oom_score_adj` to protect mission-critical databases",
          ],
          introduction: `Every process on Linux operates inside a virtual address space (up to 128TB on 64-bit x86). The CPU's Memory Management Unit (MMU) and the Linux kernel maintain multi-level Page Tables to translate virtual addresses into physical RAM pages (default: 4KB). Understanding how page tables, TLB hardware caches, and memory overcommit interact allows you to optimize multi-terabyte database servers.`,
          whyItMatters: `For a 500GB PostgreSQL or Redis instance, 4KB page tables consume ~10GB of RAM just for address mappings. Switching to 2MB HugePages slashes page table overhead to 20MB and speeds up database lookups by 20%.`,
          syntax: `echo 1024 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages\necho -1000 > /proc/$PID/oom_score_adj`,
          mainExample: {
            title: "Configuring HugePages and Protecting Critical Processes from OOM Killer",
            language: "bash",
            code: `#!/usr/bin/env bash
# Linux Kernel Memory Tuning: HugePages & OOM Killer Protection

set -euo pipefail

echo "=== Linux Virtual Memory Subsystem & OOM Hardening ==="

# 1. Inspect Virtual Memory & Page Table Allocation
echo "[1] System Virtual Memory Metrics:"
grep -E "MemTotal|PageTables|HugePages_Total|Hugepagesize" /proc/meminfo

# 2. Configure 2MB HugePages for Database Optimization
# Allocates 512 x 2MB HugePages (1GB contiguous physical RAM)
echo -e "\\n[2] Allocating 1GB of 2MB HugePages..."
echo 512 | sudo tee /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages > /dev/null
grep "HugePages_" /proc/meminfo

# 3. Protect Critical Database Process from the Linux OOM Killer
# oom_score_adj ranges from -1000 (Never Kill) to +1000 (Kill First)
DB_PID=$$ # Simulating with current process PID
echo -e "\\n[3] Adjusting OOM Score Adjustment for Process (PID: $DB_PID):"
echo -1000 | sudo tee "/proc/$DB_PID/oom_score_adj" > /dev/null

echo "Verified Process OOM Score: $(cat /proc/$DB_PID/oom_score)"
echo "Verified Process OOM Score Adjustment: $(cat /proc/$DB_PID/oom_score_adj)"
echo -e "\\n✅ Process protected from emergency kernel OOM kill sweeps!"`,
            executable: false,
            explanation: [
              "PageTables in /proc/meminfo indicates total RAM dedicated exclusively to translating 4KB memory pages.",
              "HugePages bypass standard 4KB translation, reducing TLB cache misses by 99% for large in-memory databases.",
              "When RAM is exhausted, the Linux OOM Killer evaluates process RSS memory and oom_score_adj to select the highest score victim.",
              "Setting oom_score_adj = -1000 completely immunizes the process from being killed during emergency memory reclamation.",
            ],
          },
          detailedExplanation: [
            "Memory Overcommit & vm.overcommit_memory: Linux allows processes to allocate more virtual memory than physical RAM available (overcommit). `vm.overcommit_memory = 2` disables overcommit, strictly preventing memory allocations from exceeding `Swap + (RAM * overcommit_ratio)`, guaranteeing OOM crashes never occur.",
          ],
          commonMistakes: [
            {
              mistake: "Enabling Transparent HugePages (`THP=always`) on Redis and MongoDB databases, causing severe latency spikes during page allocation compaction.",
              badCode: "echo always > /sys/kernel/mm/transparent_hugepage/enabled # Bad for Redis!",
              goodCode: "echo madvise > /sys/kernel/mm/transparent_hugepage/enabled # Good: Explicit allocation only",
              explanation: "THP background defragmentation locks memory pages, introducing 100ms latency spikes in low-latency in-memory databases.",
            },
          ],
          bestPractices: [
            "Set `echo -1000 > /proc/$PID/oom_score_adj` for primary database processes (PostgreSQL, MySQL).",
            "Use Explicit HugePages (`hugetlbfs`) for Oracle/PostgreSQL instead of Transparent HugePages.",
            "Monitor memory commit limits using `vm.overcommit_memory` and `/proc/meminfo`.",
          ],
          summary: [
            "Page Tables translate virtual addresses to physical memory; TLBs cache translations.",
            "HugePages (2MB/1GB) drastically reduce page table overhead for massive databases.",
            "`oom_score_adj` controls process kill priority during system memory exhaustion.",
          ],
        },
      ],
    },
    {
      id: "mod-lx-16",
      slug: "kernel-security-selinux-seccomp-capabilities",
      title: "Module 16: Kernel Security: SELinux, Seccomp BPF & Capabilities",
      description: "Master Linux kernel security hardening: Linux Capabilities (`capsh`), Seccomp BPF system call filtering, and SELinux MAC policy enforcement.",
      lessons: [
        {
          id: "linux-selinux-seccomp",
          slug: "linux-kernel-security-selinux-seccomp-bpf-capabilities",
          courseSlug: "linux",
          moduleSlug: "kernel-security-selinux-seccomp-capabilities",
          title: "Kernel Security: SELinux, Seccomp BPF & Capabilities",
          description: "Harden Linux systems at the kernel boundary: dropping privileges with Linux Capabilities (`setpriv`, `capsh`), restricting system calls with Seccomp BPF filter profiles, and Mandatory Access Control (MAC) with SELinux and AppArmor.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The breakdown of root privileges into 40+ granular Linux Capabilities (`CAP_NET_BIND_SERVICE`, `CAP_SYS_ADMIN`)",
            "Restricting process privileges with `setpriv --drop-capabilities`",
            "Blocking dangerous system calls (`ptrace`, `reboot`, `mount`) using Seccomp BPF filter profiles",
            "SELinux security contexts (User, Role, Type, Level) and resolving AVC denial logs (`audit2allow`)",
          ],
          introduction: `In traditional Unix security, access was binary: a process was either unprivileged user (UID > 0) or all-powerful superuser root (UID 0). Modern Linux divides superuser privileges into distinct units called Linux Capabilities. Combined with Seccomp BPF (which intercepts and blocks unauthorized system calls) and Mandatory Access Control (SELinux/AppArmor), Linux can confine even root processes within strict security envelopes.`,
          whyItMatters: `Docker, Kubernetes, and systemd use Seccomp and Linux Capabilities to ensure that even if a web application is compromised, the attacker cannot mount filesystems, load kernel modules, or sniff network traffic.`,
          syntax: `setpriv --reuid=1000 --regid=1000 --init-groups --reset-env --inh-caps=-all myapp\nausearch -m avc -ts recent | audit2allow -m mypolicy`,
          mainExample: {
            title: "Dropping Linux Capabilities and Applying Seccomp System Call Filters",
            language: "bash",
            code: `#!/usr/bin/env bash
# Linux Kernel Security Hardening: Capabilities & Seccomp

set -euo pipefail

echo "=== Linux Kernel Security: Capabilities & Seccomp BPF ==="

# 1. Inspect active Linux Capabilities of the current process
echo "[1] Current Process Capabilities:"
capsh --print | grep "Current:"

# 2. Granting a specific binary the ability to bind to privileged port 80/443 WITHOUT running as root!
# Target binary gets ONLY CAP_NET_BIND_SERVICE
echo -e "\\n[2] Setting granular capability (CAP_NET_BIND_SERVICE) on network binary:"
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/nc.openbsd 2>/dev/null || true
getcap /usr/bin/nc.openbsd 2>/dev/null || echo "Capability configured (Demo verification)"

# 3. Dropping all capabilities and preventing privilege escalation with setpriv
echo -e "\\n[3] Executing command with NO_NEW_PRIVS and all capabilities dropped:"
setpriv --no-new-privs --drop-caps=all --inh-caps=none whoami

# 4. Inspecting SELinux Security Context
echo -e "\\n[4] Inspecting SELinux / AppArmor Security State:"
if command -v getenforce &>/dev/null; then
    echo "SELinux Mode: $(getenforce)"
elif command -v aa-status &>/dev/null; then
    sudo aa-status --enabled && echo "AppArmor: Enabled and Enforcing" || echo "AppArmor: Disabled"
fi

echo -e "\\n✅ Process hardened at the Linux kernel boundary!"`,
            executable: false,
            explanation: [
              "Linux Capabilities divide root power: CAP_NET_BIND_SERVICE allows binding to port 80/443 without root permissions.",
              "setcap sets capabilities on binary files in filesystem extended attributes (xattrs).",
              "setpriv --no-new-privs sets the PR_SET_NO_NEW_PRIVS kernel bit, preventing SUID binaries from gaining privileges.",
              "Seccomp BPF intercepts system calls before kernel execution, terminating rogue processes with SIGSYS.",
            ],
          },
          detailedExplanation: [
            "SELinux Type Enforcement: SELinux labels all files and processes with a context: `user:role:type:level` (e.g. `system_u:system_r:httpd_t:s0`). Even if the Apache web server runs as root, SELinux policy strictly forbids `httpd_t` from accessing `/etc/shadow` or `/home/*`, preventing data exfiltration.",
          ],
          commonMistakes: [
            {
              mistake: "Running Docker containers with `--privileged` in production, which grants all Linux Capabilities and disables Seccomp filters.",
              badCode: "docker run --privileged myapp # Disables all kernel security boundaries!",
              goodCode: "docker run --cap-drop=ALL --cap-add=NET_BIND_SERVICE myapp",
              explanation: "`--privileged` disables all namespace boundaries, capabilities, and seccomp filters, allowing any container compromise to take over the host.",
            },
          ],
          bestPractices: [
            "Always drop all capabilities by default (`--cap-drop=ALL`) and add back only required ones.",
            "Enable Seccomp default profiles in all production Kubernetes clusters (`RuntimeDefault`).",
            "Keep SELinux in `Enforcing` mode; use `audit2allow` to generate clean policy modules rather than disabling it.",
          ],
          summary: [
            "Linux Capabilities divide superuser power into isolated privilege units.",
            "Seccomp BPF blocks unauthorized system calls at the kernel boundary.",
            "SELinux and AppArmor enforce Mandatory Access Control to confine compromised processes.",
          ],
        },
      ],
    },
  ],
};

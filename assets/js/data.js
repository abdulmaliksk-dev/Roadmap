window.ROADMAP_DATA = {
  "name": "AI Software Engineer — 2027 Battle Plan by Malik",
  "tagline": "Become a production-ready AI Software Engineer through Software Engineering + Backend + Cloud + AI.",
  "weeklyHours": 20,
  "holidayHours": 25,
  "dsa": "2 problems/day",
  "phases": [
    {
      "id": 1,
      "title": "Software Foundations",
      "short": "Python, Git, SQL & APIs",
      "weeks": [
        [
          "01",
          "Python fundamentals",
          [
            "Variables, numbers, strings, input/output",
            "Control flow, lists, tuples, dictionaries and sets",
            "Functions, arguments and return values",
            "Read and debug error messages"
          ],
          "Command-line quiz or unit converter pushed to GitHub"
        ],
        [
          "02",
          "Python for real work",
          [
            "Files, JSON and CSV",
            "Exceptions and error handling",
            "Modules, packages, pip/uv",
            "Classes, objects and dataclasses",
            "Comprehensions, f-strings and type hints",
            "Small tests with pytest"
          ],
          "Expense tracker CLI that saves to JSON with tests"
        ],
        [
          "03",
          "Git, terminal & SQL",
          [
            "Terminal navigation, pipes and environment variables",
            "Git: commit, branch, merge and conflict resolution",
            "GitHub: pull requests, issues and .gitignore",
            "SQL SELECT, WHERE, GROUP BY and JOIN",
            "SQLite/Postgres basics"
          ],
          "SQL analysis of a real dataset, merged through a pull request"
        ],
        [
          "04",
          "APIs & a tiny backend",
          [
            "HTTP methods, status codes and headers",
            "Call REST APIs with requests/httpx",
            "Environment variables and API-key hygiene",
            "async/await basics",
            "FastAPI routes, Pydantic models and docs"
          ],
          "FastAPI service that wraps a public API, with tests"
        ]
      ],
      "color": "#4f8cff",
      "goal": "Build the practical programming foundation every AI software system depends on.",
      "outcome": "Write useful Python without tutorials, use Git confidently, query relational data, and build/test a small API."
    },
    {
      "id": 2,
      "title": "DSA & Problem Solving",
      "short": "Interview-grade computer science",
      "weeks": [
        [
          "05",
          "Arrays & hashing",
          [
            "Big-O analysis",
            "Arrays and strings",
            "Hash maps and sets",
            "Two pointers",
            "Sliding window"
          ],
          "Pattern notebook + 10 representative problems"
        ],
        [
          "06",
          "Linked lists, stacks & queues",
          [
            "Singly/doubly linked lists",
            "Fast/slow pointers",
            "Stack patterns",
            "Queue/deque",
            "LRU cache"
          ],
          "Implement an LRU cache and explain its complexity"
        ],
        [
          "07",
          "Binary search & trees",
          [
            "Binary search variants",
            "Tree traversals",
            "BST operations",
            "Recursion patterns",
            "Heap basics"
          ],
          "Search/tree utility library with tests"
        ],
        [
          "08",
          "Graphs",
          [
            "Graph representations",
            "BFS and DFS",
            "Connected components",
            "Topological sorting",
            "Shortest-path intuition"
          ],
          "Graph toolkit + visualized traversal"
        ],
        [
          "09",
          "Backtracking & recursion",
          [
            "State-space thinking",
            "Subsets/permutations",
            "Combination patterns",
            "Constraint pruning"
          ],
          "Sudoku/combination solver with complexity notes"
        ],
        [
          "10",
          "Dynamic programming",
          [
            "1D DP",
            "2D/grid DP",
            "Knapsack patterns",
            "Memoization vs tabulation"
          ],
          "DP pattern sheet + selected problems"
        ],
        [
          "11",
          "Advanced patterns",
          [
            "Intervals",
            "Greedy",
            "Monotonic stack",
            "Prefix sums",
            "Union-find"
          ],
          "Pattern-based problem set"
        ],
        [
          "12",
          "Interview consolidation",
          [
            "Mixed timed practice",
            "Explain solutions aloud",
            "Complexity review",
            "Mock coding interview"
          ],
          "Two full mock coding interviews"
        ]
      ],
      "color": "#8b5cf6",
      "goal": "Build durable problem-solving ability for software-engineering interviews.",
      "outcome": "Recognize common patterns, reason about complexity, and solve medium-level problems independently."
    },
    {
      "id": 3,
      "title": "Backend Engineering",
      "short": "FastAPI, databases & services",
      "weeks": [
        [
          "13",
          "FastAPI core",
          [
            "REST architecture",
            "Pydantic validation",
            "Dependency injection",
            "Middleware",
            "OpenAPI/docs",
            "Project structure"
          ],
          "Production-shaped FastAPI service"
        ],
        [
          "14",
          "FastAPI production patterns",
          [
            "Async endpoints",
            "Background tasks",
            "WebSockets",
            "File uploads",
            "Testing",
            "JWT authentication",
            "Rate limiting"
          ],
          "Authenticated API with tests and rate limits"
        ],
        [
          "15",
          "SQL engineering",
          [
            "Schema design",
            "Normalization",
            "Indexes",
            "Transactions",
            "Query plans",
            "Query optimization"
          ],
          "Indexed schema + measured query improvements"
        ],
        [
          "16",
          "NoSQL & caching",
          [
            "Document modeling",
            "MongoDB fundamentals",
            "Redis fundamentals",
            "Caching patterns",
            "When SQL vs NoSQL"
          ],
          "API with database + Redis cache"
        ]
      ],
      "color": "#06b6d4",
      "goal": "Build reliable backend services that can become the foundation of AI applications.",
      "outcome": "Design, test and secure a production-style API with relational and NoSQL storage."
    },
    {
      "id": 4,
      "title": "System Design",
      "short": "Architecture & distributed systems",
      "weeks": [
        [
          "17",
          "HLD fundamentals",
          [
            "Requirements and constraints",
            "Load balancing",
            "Caching",
            "CDNs",
            "Databases",
            "Horizontal scaling"
          ],
          "URL shortener design"
        ],
        [
          "18",
          "Distributed systems",
          [
            "CAP theorem",
            "Consistency models",
            "Consistent hashing",
            "Message queues",
            "Replication",
            "Partitioning"
          ],
          "Feed/timeline architecture"
        ],
        [
          "19",
          "LLD & design patterns",
          [
            "OOP design",
            "SOLID",
            "Composition",
            "Common design patterns",
            "Testable design"
          ],
          "Parking-lot system with tests"
        ],
        [
          "20",
          "System-design practice",
          [
            "Capacity estimation",
            "API design",
            "Data modeling",
            "Failure modes",
            "Trade-off communication"
          ],
          "Two timed system-design mocks"
        ]
      ],
      "color": "#f59e0b",
      "goal": "Learn to reason about scalable systems before writing implementation code.",
      "outcome": "Explain trade-offs around availability, consistency, queues, caching, data and service boundaries."
    },
    {
      "id": 5,
      "title": "Cloud & Production Engineering",
      "short": "Docker, CI/CD, AWS & observability",
      "weeks": [
        [
          "21",
          "AWS core",
          [
            "EC2",
            "S3",
            "IAM",
            "VPC fundamentals",
            "Route 53"
          ],
          "Deploy a small service on AWS"
        ],
        [
          "22",
          "AWS application services",
          [
            "Lambda",
            "API Gateway",
            "RDS",
            "CloudWatch",
            "CloudFront"
          ],
          "Serverless/API deployment exercise"
        ],
        [
          "23",
          "Docker",
          [
            "Images and containers",
            "Dockerfiles",
            "Volumes",
            "Networks",
            "Multi-stage builds"
          ],
          "Containerize backend + database"
        ],
        [
          "24",
          "Compose & CI/CD",
          [
            "Docker Compose",
            "GitHub Actions",
            "Secrets",
            "Build/test pipelines",
            "Deployment workflow"
          ],
          "Automated test + deploy pipeline"
        ],
        [
          "25",
          "Kubernetes foundations",
          [
            "Pods",
            "Deployments",
            "Services",
            "ConfigMaps/Secrets",
            "Basic networking"
          ],
          "Run backend locally on Kubernetes"
        ],
        [
          "26",
          "Kubernetes production concepts",
          [
            "Ingress",
            "Helm",
            "Stateful workloads",
            "Persistent volumes",
            "Networking"
          ],
          "Document a production K8s architecture"
        ],
        [
          "27",
          "Observability",
          [
            "Metrics",
            "Logs",
            "Traces",
            "Prometheus",
            "Grafana",
            "ELK concepts"
          ],
          "Instrument a deployed service"
        ],
        [
          "28",
          "Cloud consolidation",
          [
            "Cost awareness",
            "Security basics",
            "Health checks",
            "Backups",
            "Disaster-recovery concepts"
          ],
          "Cloud architecture review + cost notes"
        ]
      ],
      "color": "#22c55e",
      "goal": "Take software from a laptop to a monitored cloud deployment.",
      "outcome": "Containerize, deploy, automate and observe a backend service."
    },
    {
      "id": 6,
      "title": "AI & ML Foundations",
      "short": "Just-enough ML literacy",
      "weeks": [
        [
          "29",
          "Data & NumPy/pandas",
          [
            "Arrays and vectorized operations",
            "DataFrames",
            "Cleaning and transformations",
            "Train/validation/test thinking"
          ],
          "Small data-analysis notebook"
        ],
        [
          "30",
          "ML fundamentals",
          [
            "Supervised vs unsupervised learning",
            "Features and labels",
            "Loss functions",
            "Overfitting",
            "Cross-validation"
          ],
          "Small scikit-learn model with error analysis"
        ],
        [
          "31",
          "Metrics & model behavior",
          [
            "Precision/recall/F1",
            "ROC-AUC intuition",
            "Class imbalance",
            "Baseline models",
            "Error analysis"
          ],
          "Model evaluation report"
        ],
        [
          "32",
          "Deep-learning essentials",
          [
            "Tensors",
            "Neurons/layers",
            "Activations",
            "Forward pass",
            "Loss",
            "Gradient descent concept",
            "Backpropagation concept"
          ],
          "Tiny neural network walkthrough"
        ],
        [
          "33",
          "PyTorch literacy",
          [
            "Tensors/autograd",
            "Datasets/dataloaders",
            "Training loop",
            "Validation",
            "Checkpoints"
          ],
          "Train a small model end-to-end"
        ],
        [
          "34",
          "AI math, just in time",
          [
            "Vectors and dot products",
            "Cosine similarity",
            "Matrix intuition",
            "Probability intuition",
            "Gradients as optimization signals"
          ],
          "Explain embeddings and similarity without notes"
        ]
      ],
      "color": "#ec4899",
      "goal": "Understand the ML concepts needed to engineer AI systems without turning the roadmap into a math degree.",
      "outcome": "Understand data, evaluation, embeddings, neural networks and model behavior at an engineering level."
    },
    {
      "id": 7,
      "title": "LLM Engineering",
      "short": "Transformers, APIs & structured output",
      "weeks": [
        [
          "35",
          "Transformer fundamentals",
          [
            "Tokens and BPE",
            "Embeddings",
            "Self-attention",
            "Multi-head attention",
            "Context windows",
            "Transformer blocks"
          ],
          "Attention/transformer explainer"
        ],
        [
          "36",
          "LLM APIs",
          [
            "Chat/completions",
            "Streaming",
            "Temperature/sampling",
            "Token usage",
            "Model selection",
            "Latency/cost"
          ],
          "Streaming LLM API service"
        ],
        [
          "37",
          "Structured LLM apps",
          [
            "JSON/schema outputs",
            "Pydantic validation",
            "Prompt contracts",
            "Retries/timeouts",
            "Fallbacks",
            "Prompt test sets"
          ],
          "Structured extraction API with tests"
        ],
        [
          "38",
          "Tool calling",
          [
            "Function/tool schemas",
            "Tool execution loop",
            "Validation",
            "Tool errors",
            "Permissions",
            "Human approval"
          ],
          "Tool-using assistant"
        ],
        [
          "39",
          "Multimodal & local models",
          [
            "Image/PDF inputs",
            "Local model concepts",
            "Ollama/Hugging Face awareness",
            "When local inference makes sense"
          ],
          "Multimodal document assistant prototype"
        ]
      ],
      "color": "#ef4444",
      "goal": "Understand and build reliable applications around modern language models.",
      "outcome": "Use model APIs intelligently, understand transformer fundamentals, and build structured LLM workflows."
    },
    {
      "id": 8,
      "title": "RAG Engineering",
      "short": "Retrieval, vector search & production RAG",
      "weeks": [
        [
          "40",
          "Embeddings & vector search",
          [
            "Embedding models",
            "Similarity search",
            "Vector indexes",
            "Metadata filters",
            "Top-k"
          ],
          "Semantic search service"
        ],
        [
          "41",
          "RAG architecture",
          [
            "Ingestion",
            "Chunking",
            "Document parsing",
            "Retrieval",
            "Context assembly",
            "Citations"
          ],
          "Baseline RAG application"
        ],
        [
          "42",
          "Advanced retrieval",
          [
            "BM25",
            "Hybrid search",
            "Reranking",
            "Query rewriting",
            "Multi-query",
            "Fusion"
          ],
          "Hybrid RAG upgrade"
        ],
        [
          "43",
          "Production RAG",
          [
            "Caching",
            "Rate limiting",
            "Auth",
            "Async ingestion",
            "Load testing",
            "Failure handling"
          ],
          "Production-shaped RAG API"
        ],
        [
          "44",
          "RAG evaluation",
          [
            "Retrieval metrics",
            "Faithfulness",
            "Answer relevance",
            "Golden datasets",
            "Human review"
          ],
          "RAG evaluation harness"
        ]
      ],
      "color": "#14b8a6",
      "goal": "Build retrieval-augmented systems that are measurable and production-minded.",
      "outcome": "Design ingestion, retrieval, reranking, citation and evaluation pipelines."
    },
    {
      "id": 9,
      "title": "Agents & MCP",
      "short": "Tools, workflows, memory & protocols",
      "weeks": [
        [
          "45",
          "Agent foundations",
          [
            "Workflow vs agent",
            "Agent loop",
            "ReAct",
            "Planning",
            "State",
            "Tool selection"
          ],
          "Single-agent tool workflow"
        ],
        [
          "46",
          "Memory & orchestration",
          [
            "Short-term state",
            "Long-term memory concepts",
            "LangGraph-style graphs",
            "Human-in-the-loop",
            "Failure recovery"
          ],
          "Stateful agent workflow"
        ],
        [
          "47",
          "MCP & tool ecosystems",
          [
            "MCP concepts",
            "Servers and clients",
            "Tool/resource boundaries",
            "Permissions",
            "Approval flows"
          ],
          "Connect an agent to an MCP server"
        ],
        [
          "48",
          "Agent evaluation",
          [
            "Task success",
            "Trajectory evaluation",
            "Step limits",
            "Cost limits",
            "Regression tests"
          ],
          "Agent eval suite"
        ]
      ],
      "color": "#6366f1",
      "goal": "Build controlled agentic systems instead of fragile prompt loops.",
      "outcome": "Design tool-using workflows with state, memory, permissions, limits and evaluation."
    },
    {
      "id": 10,
      "title": "AI Production",
      "short": "Evaluation, security, performance & fine-tuning",
      "weeks": [
        [
          "49",
          "LLM evaluation",
          [
            "LLM-as-judge",
            "Judge validation",
            "Golden sets",
            "A/B testing",
            "Failure taxonomy"
          ],
          "Evaluation dashboard"
        ],
        [
          "50",
          "AI observability",
          [
            "Tracing",
            "Prompt/version tracking",
            "Latency",
            "Token/cost telemetry",
            "Error monitoring"
          ],
          "Instrumented AI service"
        ],
        [
          "51",
          "AI security",
          [
            "Prompt injection",
            "Jailbreak awareness",
            "Data leakage",
            "PII handling",
            "Output filtering",
            "OWASP LLM risks"
          ],
          "Security test suite"
        ],
        [
          "52",
          "Guardrails & reliability",
          [
            "Input/output validation",
            "Retries",
            "Circuit breakers",
            "Graceful degradation",
            "Health checks"
          ],
          "Hardened AI API"
        ],
        [
          "53",
          "Performance",
          [
            "Batching",
            "Caching",
            "Concurrency",
            "Quantization concepts",
            "Inference latency"
          ],
          "Latency/cost optimization report"
        ],
        [
          "54",
          "Fine-tuning foundations",
          [
            "Prompting vs RAG vs fine-tuning",
            "Dataset quality",
            "LoRA",
            "QLoRA",
            "PEFT",
            "Evaluation before/after"
          ],
          "Small fine-tuning experiment"
        ],
        [
          "55",
          "Open-source contribution",
          [
            "Find a useful issue",
            "Read unfamiliar code",
            "Write tests",
            "Submit a PR",
            "Respond to review"
          ],
          "First meaningful OSS PR"
        ],
        [
          "56",
          "Production capstone",
          [
            "Architecture",
            "Deployment",
            "Evaluation",
            "Security",
            "Observability",
            "Documentation"
          ],
          "Deploy a complete AI application"
        ]
      ],
      "color": "#f97316",
      "goal": "Make AI systems observable, secure, cost-aware and reliable.",
      "outcome": "Operate AI applications with measurable quality and controlled failure modes."
    },
    {
      "id": 11,
      "title": "Career & Interview Launch",
      "short": "Portfolio, interviews & job search",
      "weeks": [
        [
          "57",
          "Portfolio architecture",
          [
            "Choose 2 flagship projects",
            "Architecture diagrams",
            "README quality",
            "Demo flow",
            "Trade-off writeups"
          ],
          "Publish flagship project #1"
        ],
        [
          "58",
          "AI project polish",
          [
            "Evaluation evidence",
            "Latency/cost metrics",
            "Security notes",
            "Failure cases",
            "Demo video"
          ],
          "Publish flagship project #2"
        ],
        [
          "59",
          "Resume & profile",
          [
            "Impact-focused bullets",
            "AI SWE positioning",
            "GitHub cleanup",
            "LinkedIn profile",
            "Project evidence"
          ],
          "Application-ready profile"
        ],
        [
          "60",
          "DSA interview sprint",
          [
            "Timed mixed sets",
            "Pattern recall",
            "Weak-area drills",
            "Mock interview"
          ],
          "Two coding mocks"
        ],
        [
          "61",
          "System-design interview sprint",
          [
            "Capacity estimation",
            "Architecture communication",
            "AI system design",
            "Trade-offs",
            "Failure modes"
          ],
          "Two design mocks"
        ],
        [
          "62",
          "Behavioral & project interviews",
          [
            "STAR stories",
            "Project deep dives",
            "Technical communication",
            "Conflict/ownership examples"
          ],
          "Project interview script"
        ],
        [
          "63",
          "Applications & networking",
          [
            "Target companies",
            "Application tracker",
            "Referrals",
            "Networking",
            "Follow-ups"
          ],
          "First disciplined application batch"
        ],
        [
          "64",
          "Final launch",
          [
            "Mock loop",
            "Gap review",
            "Portfolio audit",
            "Offer preparation",
            "Learning plan for next 90 days"
          ],
          "Complete interview loop simulation"
        ]
      ],
      "color": "#a855f7",
      "goal": "Turn the skills into demonstrable evidence and interview readiness.",
      "outcome": "Present strong projects, solve coding/system-design interviews, and run a disciplined job search."
    }
  ]
};

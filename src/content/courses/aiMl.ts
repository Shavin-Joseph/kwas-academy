import { Course } from "@/types";

export const aiMlCourse: Course = {
  id: "course-ai-ml",
  slug: "ai-ml",
  title: "Artificial Intelligence & Machine Learning Engineering",
  tagline: "Neural networks, PyTorch, Large Language Models (LLMs), Embeddings, and RAG Architecture.",
  description: "From Python data foundations to cutting-edge GenAI: NumPy & Pandas dataframes, Supervised/Unsupervised Learning with Scikit-learn, Neural Networks & Deep Learning with PyTorch, LLM APIs, Vector Embeddings, Vector Databases (pgvector, Pinecone), and Retrieval-Augmented Generation (RAG).",
  category: "AI & Machine Learning",
  level: "Intermediate",
  estimatedHours: 32,
  icon: "Brain",
  badgeColor: "amber",
  prerequisites: ["Python Fundamentals", "Basic Linear Algebra"],
  skillsGained: [
    "NumPy Vectorized Computing & Pandas Data Wrangling",
    "Deep Learning Architectures & PyTorch Tensors",
    "Large Language Models (LLM) Prompt Engineering & APIs",
    "Vector Embeddings & Semantic Cosine Similarity Search",
    "Production Retrieval-Augmented Generation (RAG) Systems",
  ],
  featured: true,
  modules: [
    {
      id: "mod-ai-1",
      slug: "intro",
      title: "Module 1: AI & Machine Learning Foundations",
      description: "AI vs ML vs Deep Learning vs GenAI, datasets, training/test splits, and loss functions.",
      lessons: [
        {
          id: "ai-intro",
          slug: "ai-and-machine-learning-fundamentals",
          courseSlug: "ai-ml",
          moduleSlug: "intro",
          title: "AI & Machine Learning Foundations",
          description: "Understand the AI spectrum: Artificial Intelligence -> Machine Learning -> Deep Learning -> Generative AI.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The distinction between Classical AI, Machine Learning, Deep Learning, and Generative AI",
            "Supervised (labeled data) vs Unsupervised (clustering) vs Reinforcement Learning",
            "Training, Validation, and Test dataset splitting (80/10/10 split)",
          ],
          introduction: `Machine Learning is a subset of Artificial Intelligence that focuses on building algorithms that learn from data and improve their performance over time without being explicitly programmed with hardcoded rules.`,
          whyItMatters: `Instead of writing 10,000 brittle if-else rules to recognize faces or detect fraud, ML models learn the underlying mathematical distributions directly from training datasets.`,
          mainExample: {
            title: "Supervised Learning Pipeline Flow",
            language: "text",
            code: `Raw Data -> Feature Extraction -> Train/Test Split (80/20) -> Model Training (Loss Optimization) -> Evaluation Metrics (Accuracy/F1) -> Inference Deployment`,
            takeaway: "Machine learning replaces procedural rules with data-driven statistical models.",
          },
          detailedExplanation: ["Overfitting occurs when a model memorizes training noise rather than generalizing to unseen test data."],
          commonMistakes: [],
          bestPractices: ["Always evaluate models on a strictly held-out test set that was never seen during training."],
          summary: ["Machine Learning turns data patterns into predictive algorithms."],
        },
      ],
    },
    {
      id: "mod-ai-2",
      slug: "numpy-pandas",
      title: "Module 2: Python Data Science Stack (NumPy & Pandas)",
      description: "NumPy vectorized n-dimensional arrays, matrix math, Pandas DataFrames, filtering, and aggregation.",
      lessons: [
        {
          id: "ai-numpy-pandas",
          slug: "numpy-and-pandas-data-wrangling",
          courseSlug: "ai-ml",
          moduleSlug: "numpy-pandas",
          title: "Vectorized Computing with NumPy & Pandas DataFrames",
          description: "Manipulate multi-dimensional numerical tensors with NumPy and clean tabular datasets with Pandas.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "NumPy ndarray vectorized math operations (100x faster than Python loops)",
            "Broadcasting rules and matrix multiplication (np.dot / @ operator)",
            "Pandas DataFrame filtering, grouping, and handling missing data (dropna, fillna)",
          ],
          introduction: `NumPy provides fast C-implemented contiguous arrays for numerical computing. Pandas builds on NumPy to provide labeled two-dimensional DataFrames for tabular data analysis.`,
          whyItMatters: `NumPy vectorized operations execute using SIMD CPU instructions, running 50x to 100x faster than standard Python for-loops.`,
          mainExample: {
            title: "NumPy Vectorization & Pandas DataFrame",
            language: "python",
            code: `import numpy as np\n\n# Vectorized matrix math\na = np.array([1.0, 2.0, 3.0])\nb = np.array([4.0, 5.0, 6.0])\n\ndot_product = np.dot(a, b)\nprint("Dot Product:", dot_product)\nprint(f"Vector Mean: {a.mean():.2f} | Standard Deviation: {a.std():.2f}")`,
            executable: true,
            explanation: ["np.dot calculates matrix inner product in hardware-optimized C routines."],
          },
          detailedExplanation: ["Pandas DataFrames provide SQL-like groupby(), join(), and pivot() transformations in Python."],
          commonMistakes: [],
          bestPractices: ["Avoid iterating over Pandas rows with for loops; always use vectorized expressions or .apply()."],
          summary: ["NumPy and Pandas are the foundational computing engine of data science and AI."],
        },
      ],
    },
    {
      id: "mod-ai-3",
      slug: "data-viz",
      title: "Module 3: Data Visualization & Exploratory Analysis",
      description: "Matplotlib plotting, Seaborn statistical heatmaps, feature correlations, and outlier detection.",
      lessons: [
        {
          id: "ai-visualization",
          slug: "exploratory-data-analysis-and-visualization",
          courseSlug: "ai-ml",
          moduleSlug: "data-viz",
          title: "Exploratory Data Analysis (EDA) & Visualization",
          description: "Discover hidden patterns, correlations, and data skew using Matplotlib and Seaborn statistical plots.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Scatter plots, histograms, and box plots for outlier detection",
            "Correlation heatmaps to identify multicollinear features",
            "Feature scaling: Min-Max Normalization vs Standard Z-Score Standardization",
          ],
          introduction: `Exploratory Data Analysis (EDA) is an approach to analyzing datasets to summarize their main characteristics, often with visual methods, before applying complex machine learning algorithms.`,
          whyItMatters: `Garbage in, garbage out: no machine learning algorithm can overcome uncleaned, biased, or highly skewed input data.`,
          mainExample: {
            title: "Z-Score Standardization Formula",
            language: "python",
            code: `import numpy as np\n\ndef standardize(data):\n    mean = np.mean(data)\n    std = np.std(data)\n    return (data - mean) / std\n\nraw_features = np.array([100.0, 200.0, 300.0, 400.0, 500.0])\nz_scaled = standardize(raw_features)\nprint("Standardized Features (Mean=0, Std=1):", np.round(z_scaled, 2))`,
            executable: true,
            explanation: ["Standardization scales features to have mean=0 and variance=1 for optimal gradient descent."],
          },
          detailedExplanation: ["Box plots visually identify outliers beyond 1.5x the Interquartile Range (IQR)."],
          commonMistakes: [],
          bestPractices: ["Always visualize the distribution of target variables before training."],
          summary: ["EDA and visualization uncover feature relationships and data anomalies."],
        },
      ],
    },
    {
      id: "mod-ai-4",
      slug: "supervised-learning",
      title: "Module 4: Supervised Learning (Regression & Classification)",
      description: "Linear Regression, Logistic Regression, Decision Trees, Random Forests, and Scikit-learn.",
      lessons: [
        {
          id: "ai-supervised",
          slug: "supervised-learning-with-scikit-learn",
          courseSlug: "ai-ml",
          moduleSlug: "supervised-learning",
          title: "Supervised Learning: Regression, Classification & Random Forests",
          description: "Train predictive models using Linear Regression, Logistic Regression, and Random Forest ensembles with Scikit-learn.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Linear Regression for continuous numerical predictions (housing prices)",
            "Logistic Regression for binary classification probabilities (fraud detection)",
            "Decision Trees and Random Forest ensembles for tabular data dominance",
          ],
          introduction: `Supervised Learning algorithms learn a mapping function from input features (X) to output labels (y) based on example pairs of inputs and outputs.`,
          whyItMatters: `Random Forests combine hundreds of randomized decision trees to produce robust predictions that resist individual tree overfitting.`,
          mainExample: {
            title: "Linear Regression Prediction Model",
            language: "python",
            code: `import numpy as np\n\n# Linear Model: y = weight * x + bias\nx = np.array([1.0, 2.0, 3.0, 4.0, 5.0])\ny = np.array([2.1, 3.9, 6.2, 8.0, 10.1])\n\n# Fit slope via ordinary least squares\nweight, bias = np.polyfit(x, y, 1)\nprint(f"Trained Model: y = {weight:.2f}x + {bias:.2f}")\n\n# Predict for x = 6\npredicted = weight * 6 + bias\nprint(f"Predicted value for x=6: {predicted:.2f}")`,
            executable: true,
            explanation: ["Calculates optimal weight and bias to minimize Mean Squared Error."],
          },
          detailedExplanation: ["Evaluation metrics: Use RMSE/MAE for regression and Precision/Recall/F1-Score for imbalanced classification."],
          commonMistakes: [],
          bestPractices: ["Never evaluate classification accuracy alone on imbalanced datasets (e.g. 99% non-fraud vs 1% fraud)."],
          summary: ["Supervised learning maps historical features to future numerical and categorical predictions."],
        },
      ],
    },
    {
      id: "mod-ai-5",
      slug: "unsupervised-learning",
      title: "Module 5: Unsupervised Learning & Clustering",
      description: "K-Means clustering, Principal Component Analysis (PCA) dimensionality reduction, and anomaly detection.",
      lessons: [
        {
          id: "ai-unsupervised",
          slug: "kmeans-and-pca-dimensionality-reduction",
          courseSlug: "ai-ml",
          moduleSlug: "unsupervised-learning",
          title: "K-Means Clustering & Dimensionality Reduction (PCA)",
          description: "Discover hidden customer segments with K-Means and compress high-dimensional feature spaces with PCA.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "K-Means clustering: centroid convergence algorithm and the Elbow Method for optimal K",
            "Principal Component Analysis (PCA) for reducing 100 features to 2D/3D visual embeddings",
            "Anomaly and fraud detection with Isolation Forests",
          ],
          introduction: `Unsupervised learning finds hidden patterns, groupings, and clusters in unlabeled data without predefined ground-truth target labels.`,
          whyItMatters: `K-Means clustering segments e-commerce users into behavioral cohorts (e.g. VIP shoppers vs bargain hunters) automatically.`,
          mainExample: {
            title: "Euclidean Distance Metric in Clustering",
            language: "python",
            code: `import numpy as np\n\ndef euclidean_dist(p1, p2):\n    return np.sqrt(np.sum((p1 - p2) ** 2))\n\nuser_point = np.array([25.0, 50000.0]) # Age, Income\ncluster_center = np.array([28.0, 52000.0])\n\nprint("Distance to Cluster Center:", euclidean_dist(user_point, cluster_center))`,
            executable: true,
            explanation: ["K-Means iteratively assigns points to the nearest centroid using Euclidean distance."],
          },
          detailedExplanation: ["PCA calculates eigenvectors of the covariance matrix to project data onto axes of maximum variance."],
          commonMistakes: [],
          bestPractices: ["Always standardize features before running K-Means or PCA so high-magnitude numbers don't dominate distance."],
          summary: ["Unsupervised learning discovers natural groupings and structures in unlabeled datasets."],
        },
      ],
    },
    {
      id: "mod-ai-6",
      slug: "neural-networks",
      title: "Module 6: Neural Networks & Deep Learning Basics",
      description: "Artificial neurons, Perceptrons, activation functions (ReLU, Sigmoid), forward pass, and backpropagation.",
      lessons: [
        {
          id: "ai-neural-nets",
          slug: "artificial-neurons-and-backpropagation",
          courseSlug: "ai-ml",
          moduleSlug: "neural-networks",
          title: "Artificial Neurons, Activation Functions & Backpropagation",
          description: "Understand the mathematical mechanics of deep learning: weights, biases, ReLU, and Gradient Descent backpropagation.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Mathematical model of an artificial neuron (y = σ(W·X + b))",
            "Why non-linear activation functions (ReLU, GELU, Softmax) are mandatory for deep networks",
            "Gradient Descent and Backpropagation using the calculus Chain Rule",
          ],
          introduction: `Deep Learning is a branch of machine learning based on Artificial Neural Networks with representation learning. The adjective 'deep' refers to the use of multiple layers in the network.`,
          whyItMatters: `Without non-linear activation functions like ReLU (max(0, x)), a 100-layer neural network collapses into a simple 1-layer linear regression model.`,
          mainExample: {
            title: "Single Artificial Neuron Computation",
            language: "python",
            code: `import numpy as np\n\ndef relu(z):\n    return np.maximum(0, z)\n\n# Inputs, Weights, Bias\nx = np.array([0.5, -0.2, 0.8])\nw = np.array([0.4, 0.9, -0.3])\nbias = 0.1\n\nz = np.dot(w, x) + bias\nactivation = relu(z)\n\nprint(f"Linear z: {z:.3f} | ReLU Output: {activation:.3f}")`,
            executable: true,
            explanation: ["Calculates dot product of weights and inputs, adds bias, and passes through ReLU."],
          },
          detailedExplanation: ["Backpropagation computes the gradient of the loss function with respect to every weight using the chain rule."],
          commonMistakes: [],
          bestPractices: ["Use ReLU for hidden layers and Softmax for multi-class classification output layers."],
          summary: ["Neural networks learn non-linear hierarchical representations through backpropagation."],
        },
      ],
    },
    {
      id: "mod-ai-7",
      slug: "pytorch",
      title: "Module 7: Deep Learning with PyTorch",
      description: "PyTorch Tensors, GPU acceleration (CUDA), torch.nn.Module, loss functions, and Adam optimizer.",
      lessons: [
        {
          id: "ai-pytorch",
          slug: "pytorch-tensors-and-nn-module",
          courseSlug: "ai-ml",
          moduleSlug: "pytorch",
          title: "PyTorch Tensors, Autograd & Building nn.Module Networks",
          description: "Construct deep neural networks using PyTorch, perform automatic differentiation (autograd), and train models on GPUs.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "PyTorch Tensors and transferring to GPU (tensor.to('cuda'))",
            "Automatic differentiation with loss.backward()",
            "Building modular architectures with torch.nn.Module and torch.optim.Adam",
          ],
          introduction: `PyTorch is the premier open-source machine learning framework used by Meta, OpenAI, Tesla, and top AI research institutions worldwide.`,
          whyItMatters: `PyTorch's dynamic computational graph (imperative execution) allows debugging neural networks line-by-line just like standard Python.`,
          mainExample: {
            title: "PyTorch Neural Network Class Definition",
            language: "python",
            code: `# Conceptual PyTorch Architecture Blueprint\nimport numpy as np\n\nclass MultiLayerPerceptron:\n    def __init__(self, input_dim, hidden_dim, output_dim):\n        self.w1 = np.random.randn(input_dim, hidden_dim) * 0.01\n        self.w2 = np.random.randn(hidden_dim, output_dim) * 0.01\n        \n    def forward(self, x):\n        h = np.maximum(0, np.dot(x, self.w1)) # Layer 1 + ReLU\n        out = np.dot(h, self.w2)               # Layer 2\n        return out\n\nmlp = MultiLayerPerceptron(4, 16, 2)\nprint("MultiLayerPerceptron Initialized.")`,
            executable: true,
            explanation: ["Forward pass propagates input through hidden layers to produce logits."],
          },
          detailedExplanation: ["The training loop iterates: Zero Gradients -> Forward Pass -> Compute Loss -> Backward Pass -> Optimizer Step."],
          commonMistakes: [],
          bestPractices: ["Always call optimizer.zero_grad() before loss.backward() in PyTorch."],
          summary: ["PyTorch provides high-performance tensor computing and automatic differentiation."],
        },
      ],
    },
    {
      id: "mod-ai-8",
      slug: "nlp-transformers",
      title: "Module 8: Natural Language Processing & Transformers",
      description: "Tokenization, self-attention mechanism, transformer architecture (Encoder/Decoder), and BERT vs GPT.",
      lessons: [
        {
          id: "ai-transformers",
          slug: "transformers-and-self-attention",
          courseSlug: "ai-ml",
          moduleSlug: "nlp-transformers",
          title: "The Transformer Architecture & Self-Attention Mechanism",
          description: "Understand the 'Attention Is All You Need' paper: Query, Key, Value matrices, Multi-Head Self-Attention, and positional encodings.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why recurrent networks (RNNs/LSTMs) were replaced by parallelizable Transformers",
            "Scaled Dot-Product Attention: Attention(Q, K, V) = softmax(QKᵀ / √dₖ) V",
            "Encoder-only (BERT), Decoder-only (GPT), and Encoder-Decoder (T5) models",
          ],
          introduction: `The Transformer architecture (Vaswani et al., 2017) revolutionized AI by allowing models to attend to all words in a sentence simultaneously in parallel rather than processing sequentially.`,
          whyItMatters: `Self-attention enables models to understand that in 'The animal didn't cross the street because it was too tired', the word 'it' refers to 'animal'.`,
          mainExample: {
            title: "Scaled Dot-Product Attention Formula",
            language: "python",
            code: `import numpy as np\n\ndef softmax(x):\n    e_x = np.exp(x - np.max(x))\n    return e_x / e_x.sum(axis=-1, keepdims=True)\n\ndef self_attention(Q, K, V):\n    d_k = Q.shape[-1]\n    scores = np.dot(Q, K.T) / np.sqrt(d_k)\n    attention_weights = softmax(scores)\n    return np.dot(attention_weights, V)\n\nprint("Self-Attention calculates contextual importance weights across all tokens.")`,
            executable: true,
            explanation: ["Calculates similarity between Query and Key matrices, scaled by square root of dimension."],
          },
          detailedExplanation: ["Positional encodings inject token sequence order information since self-attention is permutation-invariant."],
          commonMistakes: [],
          bestPractices: ["Understand the distinction between encoder models (embeddings) and decoder models (text generation)."],
          summary: ["Transformers and self-attention are the foundational architecture behind all modern Large Language Models."],
        },
      ],
    },
    {
      id: "mod-ai-9",
      slug: "llms-prompts",
      title: "Module 9: Large Language Models (LLMs) & Prompt Engineering",
      description: "Autoregressive text generation, temperature, top-p sampling, Few-Shot prompting, and Chain-of-Thought (CoT).",
      lessons: [
        {
          id: "ai-llms",
          slug: "llm-apis-and-prompt-engineering",
          courseSlug: "ai-ml",
          moduleSlug: "llms-prompts",
          title: "LLM APIs, Sampling Parameters & Prompt Engineering",
          description: "Master modern LLM APIs, sampling parameters (temperature, top_p), System prompts, and Few-Shot Chain-of-Thought reasoning.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How Autoregressive LLMs predict the next token probability distribution",
            "Controlling randomness: Temperature (0.0 = deterministic, 1.0 = creative) and top_p",
            "Advanced prompt techniques: Few-Shot In-Context Learning and Chain-of-Thought (CoT)",
          ],
          introduction: `Large Language Models (LLMs) are deep neural networks trained on vast corpora of internet text to generate human-quality text, write code, and perform multi-step reasoning.`,
          whyItMatters: `Prompt engineering (adding structured instructions and few-shot examples) can boost model reasoning accuracy on complex tasks from 40% to over 85%.`,
          mainExample: {
            title: "Structured LLM Prompt Template",
            language: "text",
            code: `System: You are an expert code reviewer specializing in high-performance TypeScript.\n\nUser: Analyze this function for potential memory leaks.\nProvide recommendations in valid JSON schema format:\n{\n  "hasLeak": boolean,\n  "explanation": string,\n  "fix": string\n}\n\nAssistant:`,
            takeaway: "Providing explicit JSON schema templates forces structured, parseable LLM outputs.",
          },
          detailedExplanation: ["Temperature 0.0 selects the argmax most probable token, ideal for deterministic code generation and SQL extraction."],
          commonMistakes: [],
          bestPractices: ["Use system messages to establish role boundaries and enforce structured JSON output."],
          summary: ["Disciplined prompt engineering and parameter tuning extract peak capability from LLMs."],
        },
      ],
    },
    {
      id: "mod-ai-10",
      slug: "vector-databases",
      title: "Module 10: Vector Embeddings & Vector Databases (pgvector, Pinecone)",
      description: "Dense vector representations, cosine distance vs dot product, pgvector PostgreSQL extension, and HNSW indexes.",
      lessons: [
        {
          id: "ai-embeddings",
          slug: "vector-embeddings-and-pgvector",
          courseSlug: "ai-ml",
          moduleSlug: "vector-databases",
          title: "Vector Embeddings & Vector Databases (pgvector)",
          description: "Convert unstructured text into mathematical vector embeddings and execute nearest neighbor searches with pgvector.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Dense vector embeddings (e.g. 1536-dimensional float arrays)",
            "Distance metrics: Cosine Similarity, Euclidean Distance (L2), Dot Product",
            "Storing and indexing vectors in PostgreSQL using the pgvector HNSW index",
          ],
          introduction: `Vector embeddings transform words, sentences, and documents into high-dimensional numerical vectors where semantically similar texts are placed close together in vector space.`,
          whyItMatters: `Vector search finds relevant answers even when the user uses completely different vocabulary ('car' matches 'automobile' and 'vehicle').`,
          mainExample: {
            title: "Semantic Cosine Similarity Calculation",
            language: "python",
            code: `import numpy as np\n\ndef cosine_similarity(v1, v2):\n    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))\n\nv_html = np.array([0.90, 0.15, 0.05])\nv_css = np.array([0.88, 0.18, 0.04])\nv_quantum = np.array([0.05, 0.85, 0.70])\n\nprint("HTML vs CSS Similarity:", cosine_similarity(v_html, v_css))\nprint("HTML vs Quantum Similarity:", cosine_similarity(v_html, v_quantum))`,
            executable: true,
            explanation: ["Calculates angle cosine: 1.0 means identical semantic meaning; 0.0 means unrelated."],
          },
          detailedExplanation: ["HNSW (Hierarchical Navigable Small World) indexes perform Approximate Nearest Neighbor (ANN) search in O(log n) time."],
          commonMistakes: [],
          bestPractices: ["Normalize vectors to unit length to make Dot Product equivalent to Cosine Similarity for 3x faster GPU searches."],
          summary: ["Vector embeddings and vector databases enable semantic AI search across billions of documents."],
        },
      ],
    },
    {
      id: "mod-ai-11",
      slug: "rag-architecture",
      title: "Module 11: Retrieval-Augmented Generation (RAG) Architecture",
      description: "Document ingestion pipelines, chunking strategies, semantic retrieval, context re-ranking, and hallucination reduction.",
      lessons: [
        {
          id: "ai-rag-intro",
          slug: "ai-and-rag-introduction",
          courseSlug: "ai-ml",
          moduleSlug: "rag-architecture",
          title: "Production Retrieval-Augmented Generation (RAG) Systems",
          description: "Build enterprise RAG pipelines that ground LLM answers in private documentation with zero hallucinations.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 5-step RAG pipeline: Ingestion -> Chunking -> Embedding -> Retrieval -> Generation",
            "Chunking strategies: Recursive character splitters with 10% overlap",
            "Context injection and citing factual source references",
          ],
          introduction: `Retrieval-Augmented Generation (RAG) is the process of optimizing the output of an LLM by referencing an authoritative knowledge base outside of its training data sources before generating a response.`,
          whyItMatters: `RAG allows AI applications to answer questions on proprietary company docs, private codebase repos, and live real-time news with citations without expensive fine-tuning.`,
          mainExample: {
            title: "Production RAG Query Flow",
            language: "python",
            code: `def rag_query(user_question):\n    # 1. Embed query\n    # 2. Vector DB search top 3 chunks\n    # 3. Augment prompt with context\n    context = "KWAS Academy provides 20+ free comprehensive software engineering courses."\n    prompt = f"Context:\\n{context}\\n\\nQuestion: {user_question}\\nAnswer based strictly on context:"\n    return f"[LLM Response generated from grounded context: {prompt}]"\n\nprint(rag_query("What does KWAS Academy provide?"))`,
            executable: true,
            explanation: ["Grounding the prompt on retrieved context eliminates hallucinations."],
          },
          detailedExplanation: ["Hybrid search combines traditional BM25 keyword search with dense vector semantic search for peak retrieval accuracy."],
          commonMistakes: [],
          bestPractices: ["Always include document metadata (filename, page number, url) with chunk embeddings for automated citations."],
          summary: ["RAG architecture delivers reliable, factual, and hallucination-free generative AI applications."],
        },
      ],
    },
    {
      id: "mod-ai-12",
      slug: "transformer-architecture-flashattention-rope",
      title: "Module 12: Transformer Architecture: FlashAttention, RoPE & MQA",
      description: "Master cutting-edge Transformer architecture: FlashAttention-2 IO-awareness, Rotary Position Embeddings (RoPE), and Grouped-Query Attention (GQA).",
      lessons: [
        {
          id: "ai-flashattention-rope",
          slug: "transformer-architecture-flashattention-rope-grouped-query-attention",
          courseSlug: "ai-ml",
          moduleSlug: "transformer-architecture-flashattention-rope",
          title: "Transformer Architecture: FlashAttention & RoPE",
          description: "Deconstruct the core mathematical engines of modern frontier LLMs (Llama 3, GPT-4, Mistral): standard Attention O(N²) memory bottlenecks, FlashAttention-2 tiled GPU SRAM computation, Rotary Position Embeddings (RoPE), and Multi-Query / Grouped-Query Attention (GQA) for reducing KV-Cache memory footprints.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why standard Multi-Head Attention (MHA) creates an O(N²) memory bottleneck across High Bandwidth Memory (HBM)",
            "The FlashAttention tiling algorithm: computing exact softmax attention in fast on-chip GPU SRAM",
            "Rotary Position Embeddings (RoPE): encoding token distance geometrically through complex 2D vector rotations",
            "Grouped-Query Attention (GQA): sharing Key-Value heads to reduce KV cache memory by up to 8x during inference",
          ],
          introduction: `Standard self-attention computes an N x N attention matrix (\`Softmax(Q * K^T / sqrt(d)) * V\`), which requires storing billions of intermediate activations in slow GPU High Bandwidth Memory (HBM), choking memory bandwidth on long contexts. FlashAttention (Tri Dao et al.) reorganizes the attention computation into tiles that fit entirely inside fast on-chip GPU SRAM (19 TB/s bandwidth), calculating mathematically exact attention with zero memory materialization and 3x-5x speedups.`,
          whyItMatters: `Scaling context windows from 4K to 128K and 1M tokens in modern LLMs (Llama 3, Claude 3.5, Gemini 1.5) was made possible by FlashAttention, RoPE, and Grouped-Query Attention.`,
          syntax: `// FlashAttention Concept\nTile Q, K, V into SRAM blocks -> compute online softmax accumulator -> write Output directly to HBM`,
          mainExample: {
            title: "Simulating Rotary Position Embedding (RoPE) 2D Complex Vector Rotation in Python",
            language: "python",
            code: `# Rotary Position Embedding (RoPE) Geometric Formulation
import numpy as np

def apply_rotary_pos_emb(x, position, dim):
    """
    Applies RoPE to a token embedding vector at a specific sequence position.
    Rotates pairs of features [x0, x1] by angle theta * position in complex plane.
    """
    # 1. Compute inverse frequency bands (theta_i = 10000^(-2(i-1)/dim))
    inv_freq = 1.0 / (10000 ** (np.arange(0, dim, 2) / dim))
    
    # 2. Compute position rotation angles
    sinusoid_inp = position * inv_freq
    sin = np.sin(sinusoid_inp)
    cos = np.cos(sinusoid_inp)
    
    # 3. Rotate 2D vector coordinates: [x0, x1] -> [x0*cos - x1*sin, x0*sin + x1*cos]
    x_rotated = np.zeros_like(x)
    for i in range(0, dim, 2):
        x0, x1 = x[i], x[i + 1]
        c, s = cos[i // 2], sin[i // 2]
        x_rotated[i]     = x0 * c - x1 * s
        x_rotated[i + 1] = x0 * s + x1 * c
        
    return x_rotated

# Token 1 at Position 0 vs Token 2 at Position 5
dim = 8
token_vec_a = np.array([1.0, 0.0, 0.5, 0.2, 0.1, 0.9, 0.4, 0.3])
token_vec_b = np.array([0.8, 0.2, 0.4, 0.1, 0.2, 0.7, 0.3, 0.5])

pos_a = apply_rotary_pos_emb(token_vec_a, position=0, dim=dim)
pos_b = apply_rotary_pos_emb(token_vec_b, position=5, dim=dim)

print("=== Rotary Position Embedding (RoPE) Engine ===")
print("Original Vector A: ", token_vec_a[:4])
print("RoPE Rotated Pos 0:", pos_a[:4])
print("RoPE Rotated Pos 5:", pos_b[:4])
print("✅ RoPE encodes relative token distances purely via dot product rotations!")`,
            executable: true,
            explanation: [
              "RoPE encodes position by rotating pairs of embedding dimensions in 2D planes.",
              "The dot product of two RoPE-rotated vectors depends strictly on their relative distance (pos_b - pos_a), not absolute positions.",
              "Enables seamless extrapolation to longer context windows via RoPE frequency scaling (YaRN, NTK-aware scaling).",
              "Grouped-Query Attention (GQA) assigns 8 Query heads to 1 shared Key/Value head, slashing KV-cache RAM by 87.5%.",
            ],
          },
          detailedExplanation: [
            "Online Softmax Trick: FlashAttention avoids materializing the full N x N attention matrix by maintaining running max and normalization sums across SRAM tiles, computing the exact mathematical softmax incrementally in O(1) extra memory.",
          ],
          commonMistakes: [
            {
              mistake: "Using standard PyTorch `torch.matmul(Q, K.T)` on long sequences (32K+ tokens), causing CUDA Out-of-Memory (OOM) crashes.",
              badCode: "attn = torch.softmax(q @ k.T / math.sqrt(d), dim=-1) @ v # Allocates huge N x N matrix in HBM!",
              goodCode: "out = torch.nn.functional.scaled_dot_product_attention(q, k, v) # Uses FlashAttention-2 backend automatically",
              explanation: "PyTorch's built-in `scaled_dot_product_attention` automatically invokes FlashAttention C++/CUDA kernels, saving gigabytes of GPU VRAM.",
            },
          ],
          bestPractices: [
            "Use `torch.nn.functional.scaled_dot_product_attention` (SDPA) for hardware-accelerated FlashAttention.",
            "Adopt Grouped-Query Attention (GQA) when training custom LLMs for high inference throughput.",
            "Apply YaRN (Yet another RoPE extensioN) when extending pretrained LLM context lengths.",
          ],
          summary: [
            "FlashAttention calculates exact attention in GPU SRAM, bypassing HBM memory bandwidth limits.",
            "RoPE encodes positional information geometrically through 2D coordinate rotations.",
            "Grouped-Query Attention (GQA) dramatically reduces KV-cache memory footprints for long-context generation.",
          ],
        },
      ],
    },
    {
      id: "mod-ai-13",
      slug: "llm-quantization-peft-qlora",
      title: "Module 13: LLM Quantization & Parameter-Efficient Fine-Tuning",
      description: "Master LLM compression and fine-tuning: GPTQ, AWQ, 4-bit NormalFloat (NF4), LoRA (Low-Rank Adaptation), and QLoRA.",
      lessons: [
        {
          id: "ai-quantization-qlora",
          slug: "llm-quantization-gptq-awq-peft-lora-qlora-bitsandbytes",
          courseSlug: "ai-ml",
          moduleSlug: "llm-quantization-peft-qlora",
          title: "LLM Compression: Quantization (GPTQ, AWQ) & QLoRA",
          description: "Run and fine-tune 70B parameter models on consumer GPUs: Weight-Only Quantization (INT8, INT4, AWQ, GPTQ), Post-Training Quantization (PTQ), Low-Rank Adaptation (LoRA rank r matrices: W = W0 + B*A), and QLoRA with 4-bit NormalFloat (NF4) and Double Quantization.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The memory requirements of LLMs: FP16 (2 bytes/param) vs INT4 (0.5 bytes/param)",
            "Activation-aware Weight Quantization (AWQ) vs One-Shot GPTQ second-order Hessian optimization",
            "The mathematical decomposition of LoRA: freezing base weights W0 and training low-rank adapter matrices B (d x r) and A (r x k)",
            "Fine-tuning a 70-Billion parameter model on a single 48GB GPU using QLoRA and `bitsandbytes`",
          ],
          introduction: `A 70-Billion parameter LLM in FP16 precision requires 140GB of GPU VRAM just to load weights, plus an additional 400GB for optimizer states during full fine-tuning. Parameter-Efficient Fine-Tuning (PEFT) via LoRA freezes the original weights and injects small trainable rank decomposition matrices (training only 0.1% of parameters). QLoRA quantizes the base model down to 4-bit NormalFloat (NF4), enabling fine-tuning of 70B models on a single workstation GPU with zero performance degradation.`,
          whyItMatters: `QLoRA reduces enterprise LLM fine-tuning cloud costs by over 90%, allowing specialized domain models to be trained for medical, legal, and engineering tasks on modest hardware.`,
          syntax: `// LoRA Forward Pass\nh = W0 * x + (alpha / r) * (B * A * x)`,
          mainExample: {
            title: "Configuring 4-bit QLoRA Parameter-Efficient Fine-Tuning in Python",
            language: "python",
            code: `# 4-Bit QLoRA Fine-Tuning Pipeline with HuggingFace PEFT & BitsAndBytes
import torch

# Conceptual LoRA Matrix Layer Implementation
class LoRALinearLayer(torch.nn.Module):
    def __init__(self, in_features, out_features, rank=16, alpha=32):
        super().__init__()
        # 1. Base Pretrained Weight (Frozen in 4-bit precision!)
        self.base_weight = torch.nn.Parameter(
            torch.randn(out_features, in_features), requires_grad=False
        )
        # 2. Low-Rank Adapter Matrices: A (r x k) and B (d x r)
        self.lora_A = torch.nn.Parameter(torch.randn(rank, in_features) * 0.01) # Small Gaussian
        self.lora_B = torch.nn.Parameter(torch.zeros(out_features, rank))       # Initialized to ZERO!
        self.scaling = alpha / rank

    def forward(self, x):
        # Base forward pass (Frozen)
        base_out = torch.matmul(x, self.base_weight.t())
        # LoRA Delta forward pass: delta_W = (B * A) * x * scaling
        lora_out = torch.matmul(x, self.lora_A.t())
        lora_out = torch.matmul(lora_out, self.lora_B.t()) * self.scaling
        return base_out + lora_out

# Test LoRA Layer
in_dim, out_dim, r = 4096, 4096, 16
lora_layer = LoRALinearLayer(in_dim, out_dim, rank=r)

# Count Trainable Parameters
trainable = sum(p.numel() for p in lora_layer.parameters() if p.requires_grad)
frozen = sum(p.numel() for p in lora_layer.parameters() if not p.requires_grad)

print("=== QLoRA Parameter-Efficient Fine-Tuning Engine ===")
print(f"Frozen Base Parameters:    {frozen:,} (Kept in 4-bit INT4 VRAM)")
print(f"Trainable LoRA Parameters: {trainable:,} (Only {trainable/frozen*100:.2f}% of model!)")
print("✅ Gradients computed strictly for tiny low-rank adapter matrices!")`,
            executable: true,
            explanation: [
              "LoRA freezes the billion-parameter base weight W0 and trains only low-rank matrices A and B.",
              "Matrix B is initialized to all zeros: at step 0, delta_W is exactly zero, perfectly preserving the base model's pretrained capabilities.",
              "Because rank r=16 is tiny compared to hidden dimension d=4096, trainable parameters drop by 99.8%.",
              "At inference time, adapter weights B*A can be mathematically merged directly into W0 with zero latency overhead.",
            ],
          },
          detailedExplanation: [
            "AWQ vs GPTQ Quantization: GPTQ calibrates weights by inverting second-order Hessian error matrices. AWQ (Activation-aware Weight Quantization) observes that preserving the top 1% of 'salient weights' (weights that multiply with high-magnitude activation channels) retains 99.9% of model reasoning accuracy in 4-bit precision.",
          ],
          commonMistakes: [
            {
              mistake: "Performing full fine-tuning (updating all 70B weights) without gradient checkpointing, causing instant CUDA out-of-memory errors.",
              badCode: "model.train() # Updating all weights requires 16 bytes per param for AdamW optimizer states!",
              goodCode: "model = get_peft_model(model, LoraConfig(r=16, lora_alpha=32, target_modules=['q_proj', 'v_proj']))",
              explanation: "Full fine-tuning requires 16 bytes per parameter just for Adam optimizer states (momentum + variance). LoRA requires optimizer states only for tiny adapter matrices.",
            },
          ],
          bestPractices: [
            "Use AWQ (`AutoAWQ`) or GPTQ (`AutoGPTQ`) for 4-bit production inference deployment.",
            "Apply QLoRA with `bitsandbytes` 4-bit NormalFloat (NF4) for parameter-efficient domain fine-tuning.",
            "Merge LoRA adapter weights (`model.merge_and_unload()`) before deploying to production inference servers.",
          ],
          summary: [
            "Quantization compresses weights from FP16 (16-bit) to INT4 (4-bit), slashing VRAM by 75%.",
            "LoRA freezes base weights and trains rank decomposition matrices A and B.",
            "QLoRA enables enterprise-scale model fine-tuning on accessible commodity GPUs.",
          ],
        },
      ],
    },
    {
      id: "mod-ai-14",
      slug: "vector-databases-hnsw-ivf-pq",
      title: "Module 14: Vector Databases: HNSW & IVF-PQ Indexing",
      description: "Master vector search engine internals: Hierarchical Navigable Small World (HNSW), Inverted File Product Quantization (IVF-PQ), and cosine similarity.",
      lessons: [
        {
          id: "ai-vector-hnsw",
          slug: "vector-databases-hnsw-hierarchical-navigable-small-world-ivf-pq",
          courseSlug: "ai-ml",
          moduleSlug: "vector-databases-hnsw-ivf-pq",
          title: "Vector Database Internals: HNSW & IVF-PQ Indexing",
          description: "Deconstruct production Vector Databases (Milvus, Pinecone, Qdrant, pgvector): Approximate Nearest Neighbor (ANN) search, Hierarchical Navigable Small World (HNSW multi-layer graphs), Product Quantization (PQ sub-vector compression), and SIMD-accelerated distance metrics.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why brute-force Exact Nearest Neighbor (kNN) search O(N * D) fails on millions of high-dimensional embeddings",
            "The Hierarchical Navigable Small World (HNSW) graph: multi-layer skip-list inspired graph navigation in O(log N)",
            "Inverted File Index with Product Quantization (IVF-PQ): compressing 1536-dimensional vectors by 95%",
            "Filtering with vector payload metadata: Pre-filtering vs Post-filtering vs Single-Stage HNSW Filter Graphs",
          ],
          introduction: `Generating 1536-dimensional OpenAI embeddings is only the first step. When a database contains 10,000,000 document vectors, calculating exact Euclidean distance or Cosine Similarity across every vector takes several seconds per query. Vector databases achieve sub-millisecond retrieval across billions of vectors using Approximate Nearest Neighbor (ANN) data structures, primarily Hierarchical Navigable Small World (HNSW) graphs.`,
          whyItMatters: `High-scale RAG systems, visual search engines, and recommendation systems (Spotify, Pinterest) serve real-time semantic queries in under 5ms using HNSW and IVF-PQ indexing.`,
          syntax: `// pgvector HNSW Index Creation\nCREATE INDEX ON document_embeddings \nUSING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);`,
          mainExample: {
            title: "Simulating HNSW Multi-Layer Graph Skip-Navigation in Python",
            language: "python",
            code: `# Hierarchical Navigable Small World (HNSW) Conceptual Graph Navigation
import numpy as np

class HNSWLayerNode:
    def __init__(self, vector_id, vector):
        self.id = vector_id
        self.vector = vector
        self.neighbors = [] # Connected edge pointers

def cosine_similarity(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2) + 1e-9)

class SimpleHNSW:
    def __init__(self):
        # Layer 1 (Top sparse layer: long skips) and Layer 0 (Bottom dense layer: exact local search)
        self.layer1_nodes = []
        self.layer0_nodes = []

    def search_layer(self, query_vec, entry_node, candidate_pool_size=4):
        """Greedy graph search on a single layer: Move to closest neighbor until local minima."""
        current = entry_node
        best_sim = cosine_similarity(query_vec, current.vector)

        while True:
            improved = False
            for neighbor in current.neighbors:
                sim = cosine_similarity(query_vec, neighbor.vector)
                if sim > best_sim:
                    best_sim = sim
                    current = neighbor
                    improved = True
            if not improved:
                break # Local maximum similarity reached on this layer!
        return current, best_sim

# Create simulated nodes
node_a = HNSWLayerNode("Doc_Tech", np.array([0.9, 0.1, 0.2]))
node_b = HNSWLayerNode("Doc_Science", np.array([0.8, 0.3, 0.1]))
node_c = HNSWLayerNode("Doc_Cooking", np.array([0.1, 0.9, 0.8]))

node_a.neighbors = [node_b]
node_b.neighbors = [node_a, node_c]
node_c.neighbors = [node_b]

hnsw = SimpleHNSW()
query = np.array([0.95, 0.05, 0.15]) # Search query close to Tech

best_match, score = hnsw.search_layer(query, entry_node=node_c) # Start from distant entry node

print("=== HNSW Vector Database Search Engine ===")
print(f"Top Semantic Match: {best_match.id} (Cosine Similarity: {score:.4f})")
print("✅ Graph navigated via Small-World links to target in logarithmic O(log N) hops!")`,
            executable: true,
            explanation: [
              "HNSW creates a hierarchy of proximity graphs similar to a probabilistic Skip List.",
              "Top layers contain sparse nodes with long-distance links for rapid coarse-grained exploration.",
              "Bottom layer (Layer 0) contains all vectors with short-distance links for fine-grained local convergence.",
              "Search descends from top to bottom, finding nearest neighbors in O(log N) steps instead of O(N).",
            ],
          },
          detailedExplanation: [
            "Product Quantization (PQ): A 1536-dimension float32 vector consumes 6,144 bytes of RAM. Product Quantization splits the vector into 64 sub-vectors of 24 dimensions, clusters each sub-vector into 256 centroids (1 byte codebook index), compressing the vector from 6KB down to 64 bytes (99% RAM savings) with hardware AVX SIMD asymmetric distance lookup.",
          ],
          commonMistakes: [
            {
              mistake: "Filtering vector search queries using naive post-filtering (fetching top 10 vectors then filtering by user ID), returning 0 results if all 10 belong to other users.",
              badCode: "// Step 1: kNN search top 10 -> Step 2: filter(user_id == '123') -> Empty list!",
              goodCode: "// Use Single-Stage Iterative HNSW Filtering (Qdrant / Milvus) to traverse filtered graph edges",
              explanation: "Post-filtering suffers from severe recall collapse. Always use vector databases that support single-stage filtered graph traversal.",
            },
          ],
          bestPractices: [
            "Tune HNSW parameters: `M = 16-32` (connections per node) and `ef_construction = 64-128` (build index accuracy).",
            "Use Product Quantization (IVF-PQ) when indexing datasets exceeding 50,000,000 vectors on limited RAM.",
            "Normalize vectors to unit length during ingestion to turn Dot Product into fast Cosine Similarity.",
          ],
          summary: [
            "HNSW constructs multi-layer proximity graphs for sub-millisecond O(log N) vector retrieval.",
            "Product Quantization (PQ) compresses multi-dimensional vectors by up to 95%.",
            "Single-stage filtered traversal prevents recall degradation in multi-tenant RAG applications.",
          ],
        },
      ],
    },
    {
      id: "mod-ai-15",
      slug: "agentic-ai-tool-calling-react-swarms",
      title: "Module 15: Agentic AI Systems: Tool Calling, ReAct & Multi-Agent Swarms",
      description: "Master autonomous Agentic AI: JSON Schema Tool Calling, ReAct (Reason + Act) loops, Plan-and-Solve, and Multi-Agent collaborative swarms.",
      lessons: [
        {
          id: "ai-agentic-systems",
          slug: "agentic-ai-tool-calling-react-multi-agent-swarms-langgraph",
          courseSlug: "ai-ml",
          moduleSlug: "agentic-ai-tool-calling-react-swarms",
          title: "Agentic AI: Tool Calling, ReAct & Multi-Agent Swarms",
          description: "Build production autonomous AI agents: Function / Tool Calling with strict JSON schema validation, ReAct cognitive loops (Thought -> Action -> Observation), Plan-and-Solve architectures, handling tool errors and retries, and multi-agent delegation swarms.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The shift from static chatbot generation to autonomous Agentic loops with environment feedback",
            "The ReAct Pattern: structured Thought (Reasoning), Action (Tool Invocation), and Observation (Tool Output)",
            "Enforcing deterministic structured tool calling with JSON Schema specifications",
            "Multi-Agent architectures: Orchestrator-Workers, Hierarchical Supervisor, and Peer Collaboration",
          ],
          introduction: `Traditional LLMs are passive text generators: given a prompt, they output a single response based solely on static training weights. Agentic AI transforms LLMs into autonomous decision-makers capable of interacting with external tools (SQL databases, web browsers, bash terminals, APIs), evaluating observation results, recovering from runtime errors, and executing multi-step workflows until a complex goal is completed.`,
          whyItMatters: `Autonomous software engineering agents, automated financial research analysts, and customer support copilots rely on ReAct tool loops and multi-agent coordination.`,
          syntax: `// OpenAI Tool Definition\n{\n  type: "function",\n  function: { name: "query_database", parameters: { ... } }\n}`,
          mainExample: {
            title: "Simulating an Autonomous ReAct Agent Loop with Dynamic Tool Execution",
            language: "python",
            code: `# Autonomous ReAct (Reason + Act + Observe) Agent Engine in Python
import json

# 1. Registered External Tools
def execute_sql_query(query: str) -> str:
    print(f"  [TOOL RUN] Executing SQL: {query}")
    if "users" in query.lower():
        return json.dumps([{"id": 101, "name": "Alice", "plan": "Enterprise"}])
    return json.dumps([])

def calculate_discount(plan: str) -> str:
    print(f"  [TOOL RUN] Calculating discount for: {plan}")
    if plan == "Enterprise": return "30% off annual billing"
    return "10% standard discount"

TOOLS = {
    "execute_sql_query": execute_sql_query,
    "calculate_discount": calculate_discount
}

# 2. Autonomous Agent Execution Loop
class AutonomousReActAgent:
    def __init__(self):
        self.memory = []

    def step(self, user_goal):
        print(f"=== Autonomous Agent Goal: '{user_goal}' ===")
        
        # Step 1: Reasoning & Tool Decision
        print("🤔 [THOUGHT] User needs Alice's plan details first. I must query the SQL database.")
        action = {"tool": "execute_sql_query", "args": {"query": "SELECT plan FROM users WHERE name = 'Alice'"}}
        print(f"🛠️ [ACTION] Invoking tool '{action['tool']}'...")
        
        # Step 2: Tool Execution & Observation
        obs_1 = TOOLS[action["tool"]](**action["args"])
        print(f"👁️ [OBSERVATION] Result: {obs_1}")
        
        # Step 3: Second Cognitive Loop
        user_data = json.loads(obs_1)[0]
        print(f"🤔 [THOUGHT] Alice is on '{user_data['plan']}' plan. Now I will calculate her eligible discount.")
        action_2 = {"tool": "calculate_discount", "args": {"plan": user_data["plan"]}}
        print(f"🛠️ [ACTION] Invoking tool '{action_2['tool']}'...")
        
        obs_2 = TOOLS[action_2["tool"]](**action_2["args"])
        print(f"👁️ [OBSERVATION] Result: {obs_2}")
        
        # Step 4: Final Synthesized Answer
        final_answer = f"Alice (User ID: {user_data['id']}) is on the {user_data['plan']} plan and is entitled to {obs_2}."
        print(f"\\n🎯 [FINAL ANSWER]: {final_answer}")
        return final_answer

agent = AutonomousReActAgent()
agent.step("Find Alice's subscription plan and calculate her discount.")
print("✅ Agent loop autonomously solved multi-step goal with tool orchestration!")`,
            executable: true,
            explanation: [
              "The ReAct loop iterates through Thought -> Action -> Observation cycles until the task is complete.",
              "Tools are defined with JSON Schemas, allowing the LLM to output structured arguments.",
              "Observations from tool executions are fed back into the LLM's context as environment feedback.",
              "If a tool errors (e.g. invalid SQL syntax), the agent observes the stack trace and self-corrects the query.",
            ],
          },
          detailedExplanation: [
            "Multi-Agent Swarms & LangGraph: In complex multi-agent workflows, a Supervisor agent acts as a project manager, delegating tasks to specialized subagents (e.g. Coder Agent, Security Reviewer Agent, QA Test Runner Agent), aggregating outputs into a unified final pull request.",
          ],
          commonMistakes: [
            {
              mistake: "Allowing agents to run recursive tool loops without a maximum iteration ceiling (`max_iterations = 10`), causing infinite API cost loops on ambiguous tasks.",
              badCode: "while True: agent.step() // Infinite loop risk!",
              goodCode: "for i in range(MAX_STEPS): if agent.is_done(): break",
              explanation: "Always enforce strict `max_steps` and timeout budgets on autonomous agent loops.",
            },
          ],
          bestPractices: [
            "Enforce strict JSON schema validation on all tool parameter outputs.",
            "Implement human-in-the-loop (HITL) checkpoints before executing destructive actions (e.g. DB writes, sending emails).",
            "Use LangGraph or AutoGen for stateful cyclic multi-agent graph workflows.",
          ],
          summary: [
            "Agentic AI empowers LLMs to execute external tools and adapt to environment feedback.",
            "ReAct cognitive loops alternate between Reasoning, Action, and Observation.",
            "Multi-Agent swarms divide complex engineering problems among specialized autonomous agents.",
          ],
        },
      ],
    },
    {
      id: "mod-ai-16",
      slug: "llm-serving-vllm-pagedattention-speculative",
      title: "Module 16: High-Throughput LLM Serving: vLLM & PagedAttention",
      description: "Master high-throughput LLM deployment: vLLM inference engine, PagedAttention virtual memory, Continuous Batching, and Speculative Decoding.",
      lessons: [
        {
          id: "ai-vllm-serving",
          slug: "high-throughput-llm-serving-vllm-pagedattention-speculative-decoding",
          courseSlug: "ai-ml",
          moduleSlug: "llm-serving-vllm-pagedattention-speculative",
          title: "LLM Serving: vLLM, PagedAttention & Speculative Decoding",
          description: "Deploy large language models at scale with peak hardware utilization: the vLLM engine, PagedAttention virtual memory management for Key-Value caches (eliminating 96% memory fragmentation), Continuous / Iteration-Level Batching, and Speculative Decoding with draft models.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The memory crisis of LLM inference: Why the KV-Cache grows dynamically and exhausts GPU VRAM",
            "PagedAttention: Managing KV-Cache memory like operating system Virtual Memory pages",
            "Continuous Batching (Orca / vLLM): Dynamically inserting new requests into running iteration batches",
            "Speculative Decoding: Using a tiny draft model (e.g. 1B) to generate tokens verified in parallel by a 70B model for 2x-3x speedups",
          ],
          introduction: `During LLM generation, storing the Key and Value vectors (KV-Cache) for each token consumes massive amounts of GPU memory. Traditional inference frameworks allocate contiguous memory blocks based on the maximum possible context length (e.g. 8192 tokens), wasting 60-80% of GPU RAM due to internal fragmentation. PagedAttention (vLLM) manages the KV-Cache using non-contiguous virtual memory pages, enabling near-zero memory waste and 2x-4x higher request throughput.`,
          whyItMatters: `Serving models like Llama 3 or DeepSeek at scale with vLLM, TensorRT-LLM, and Speculative Decoding slashes cloud GPU hosting bills by 70% while halving user response latency.`,
          syntax: `// Starting vLLM Production Server\nvllm serve meta-llama/Meta-Llama-3-70B-Instruct --tensor-parallel-size 4 --enable-prefix-caching`,
          mainExample: {
            title: "Simulating Speculative Decoding with Draft and Target Models in Python",
            language: "python",
            code: `# Speculative Decoding Acceleration Engine Simulation
import numpy as np

def simulate_speculative_decoding(prompt_tokens, draft_k=4):
    """
    Speculative Decoding:
    1. A fast, small Draft Model (1B) generates K candidate tokens cheaply.
    2. The large Target Model (70B) evaluates all K tokens in a single parallel forward pass!
    3. Accept matching tokens and reject from the first mismatch.
    """
    print(f"=== Speculative Decoding Acceleration (Draft Window K={draft_k}) ===")
    
    # Simulated true target token distribution probabilities vs draft predictions
    # 70B Model target: [101, 204, 305, 408]
    target_tokens = [101, 204, 305, 408]
    # 1B Draft model guesses: [101, 204, 999, 408] (Mismatch at index 2)
    draft_tokens  = [101, 204, 999, 408]
    
    accepted_tokens = []
    print(f"1. Draft Model (1B) guessed {draft_k} tokens in 4ms: {draft_tokens}")
    print("2. Target Model (70B) verifies all tokens in a SINGLE parallel forward pass (15ms)...")
    
    for i in range(draft_k):
        if draft_tokens[i] == target_tokens[i]:
            accepted_tokens.append(draft_tokens[i])
            print(f"   Token {i+1} ({draft_tokens[i]}): ✅ ACCEPTED")
        else:
            # First mismatch: Reject remaining draft tokens and emit correct target token
            accepted_tokens.append(target_tokens[i])
            print(f"   Token {i+1} ({draft_tokens[i]}): ❌ REJECTED -> Corrected to {target_tokens[i]}")
            break
            
    speedup = len(accepted_tokens) / 1.0 # Generated N tokens in time of 1 target step!
    print(f"\\n🎯 Emitted {len(accepted_tokens)} tokens in 1 target model step! Effective Speedup: {speedup:.2f}x")
    return accepted_tokens

simulate_speculative_decoding("def quicksort(arr):", draft_k=4)
print("✅ Speculative Decoding accelerated generation with zero quality loss!")`,
            executable: true,
            explanation: [
              "Autoregressive generation is memory-bandwidth bound: running a 70B model to generate 1 token takes ~15ms.",
              "Speculative Decoding uses a small 1B draft model to speculate K tokens in 4ms.",
              "The 70B target model verifies all K tokens in a single parallel forward pass, emitting multiple tokens per step.",
              "Because the target model mathematically approves every token, the final text output is 100% identical to the target model.",
            ],
          },
          detailedExplanation: [
            "PagedAttention & Prefix Caching: PagedAttention partitions KV-caches into 16-token physical blocks. Multiple requests sharing common system prompts or documents reference the exact same physical memory pages (Prefix Caching), reducing prompt ingestion latency to near zero.",
          ],
          commonMistakes: [
            {
              mistake: "Deploying raw PyTorch / HuggingFace `generate()` in production web servers, locking the entire GPU on sequential token generation.",
              badCode: "output = model.generate(input_ids) # Single request locks GPU, 0 continuous batching!",
              goodCode: "// Deploy with vLLM / TensorRT-LLM / TGI with Continuous Batching enabled",
              explanation: "HuggingFace `generate()` processes requests sequentially. Production engines (vLLM) use Continuous Batching to interleave hundreds of concurrent requests dynamically.",
            },
          ],
          bestPractices: [
            "Use vLLM (`vllm serve`) or TensorRT-LLM for high-concurrency production deployments.",
            "Enable `--enable-prefix-caching` in vLLM for multi-turn conversational agents and RAG.",
            "Deploy Speculative Decoding with aligned draft models for low-latency interactive generation.",
          ],
          summary: [
            "PagedAttention manages KV-cache memory as virtual pages, eliminating memory fragmentation.",
            "Continuous Batching interleaves concurrent requests dynamically at the token iteration level.",
            "Speculative Decoding achieves 2x-3x faster token generation with zero accuracy loss.",
          ],
        },
      ],
    },
  ],
};

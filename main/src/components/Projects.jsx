import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Project data — fill with your real projects ── */
const projectsData = [
  {
    id: 1,
    title: 'RAG-based Digital Twin Portfolio Chatbot',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/RAG-based-twin',
    bullets: [
      'Developed a production-grade personal portfolio RAG chatbot acting as my digital twin, using FastAPI, LangChain (LCEL), FAISS vector store, Streamlit, and the Hugging Face Serverless Inference API. The data ingestion layer (`ingest.py`) parses local Markdown files from a `data/` directory using a recursive splitter, chunking text into 600-character segments with 100-character overlaps for comprehensive retrieval coverage, serializing and saving the generated index onto disk in a `vectorstore/` FAISS binary payload.',
      'Hosted dense embeddings via sentence-transformers/all-MiniLM-L6-v2 and text generation using Qwen2.5-7B-Instruct through serverless endpoints to keep the pipeline lightweight (saving local weights cache) and fast. Solved API task incompatibilities by routing generation through ChatHuggingFace chat completions, circumventing the text-generation limitation of the Serverless API and delivering rapid cloud embeddings without local GPU compute runtime dependencies.',
      'Configured a semantic search retriever utilizing similarity search (top_k=10) rather than MMR to ensure multiple relevant experience entries from the same file aren\'t suppressed, using metadata tags in markdown files to bridge query vocabulary. This prevents MMR from filtering out secondary chunks, guaranteeing that all active internships are retrieved simultaneously, mitigating search failure modes where similar roles or sequential timelines were omitted due to high document similarity scores.',
      'Engineered a strict 9-rule system prompt for Qwen to speak in natural conversational first-person prose without lists, headers, or bold text, forcing grounding in retrieved facts and maintaining tense consistency for active roles. The prompt forces the LLM to yield friendly, humanized fallback responses when information is missing rather than generating hallucinations, ensuring active roles ending in "Present" are described in the active present tense while historical roles are kept in the past.',
      'Integrated multi-turn conversational chat history using LangChain\'s MessagesPlaceholder ("chat_history") and Streamlit session states for context-aware dialogs. The configuration dynamically tracks user messages and LLM responses across turns, allowing the chatbot to resolve relative queries and follow-up topics natively by feeding memory directly to the transformer model as a sliding window chat history buffer.',
      'Exposed REST API endpoints (POST /chat, GET /health) via FastAPI with Pydantic validation and CORS support, paired with an interactive Streamlit chat interface featuring a raw chunk viewer and retrieval settings. The frontend permits adjusting search threshold scores and top_k parameters in real-time, providing immediate visual analytics on matching source chunks while the backend CORS configurations permit secure cross-origin HTTP requests.',
    ],
    technologies: ['LangChain', 'FastAPI', 'FAISS', 'Streamlit', 'Hugging Face API', 'Qwen'],
  },
  {
    id: 2,
    title: 'AI Humanize GUI',
    liveUrl: 'https://ai-humanizer-1n0f.onrender.com/',
    githubUrl: 'https://github.com/ayush1k/ai-humanize-gui',
    bullets: [
      'Developed a local GUI and web application designed to rewrite AI-generated text into natural, human-like writing, deployed as a live web service on Render. The system evaluates input text against a massive dictionary of standard generative signatures, identifying patterns that mark text as machine-written and using pattern-matching rules and sentence-splitting logic to break down complex, wordy structures.',
      'Engineered a hybrid dual-engine architecture combining a fast local rule-based pattern library (for instant, private offline processing using sentence-splitting logic to erase robotic phrasing signatures) with an external AI Pro Mode (for deep semantic rewriting). This hybrid setup preserves absolute user privacy by default while offering deep semantic reconstruction when higher rewrite strength is requested, routing text to external APIs.',
      'Designed a retro-futuristic Terminal GUI interface featuring dark/light theme support, a dynamic live byte/character counter, and three selectable rewriting styles: balanced, casual, and formal. The layout mimics vintage Command Line Interfaces (CLIs) using custom CSS animations, complete with a clipboard helper and real-time layout scaling, creating a responsive and engaging user experience.',
      'Exposed local REST backend endpoints (GET /health, POST /api/humanize) for programmatic integration with custom text processing scripts, CLI tools, and IDE extensions. The API validates payloads via custom Express middleware, allowing developer setups to pipeline document humanization securely, supporting multiple input formats and generating rapid responses.',
      'Containerized the application using a multi-stage Docker configuration optimized for production deployment, resolving dynamic port binding automatically on Render web servers. The lightweight Docker container isolates dependencies and packages dependencies securely, dropping image sizes and boot times significantly to ensure robust scaling.',
    ],
    technologies: ['Node.js', 'Docker', 'Render', 'JavaScript', 'CSS3'],
  },
  {
    id: 3,
    title: 'Financial Management Dashboard',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Financial-Management-Dashboard',
    bullets: [
      'Architected a personal finance portal and tax filing assistant integrating a React.js client SPA with Python Flask microservices and Firebase Firestore database sync. The authentication flow is guarded by Firebase Client SDK on the frontend and validated via Firebase Admin SDK on the Flask microservice endpoints, enabling secure access rules.',
      'Developed an automated transaction logger with client-side localStorage caching, cloud Firestore synchronization, and interactive budget guardrails that trigger warning alerts at 80% and 100% threshold utilization. The logging table supports multi-field transaction filtering, bulk deletions, and categorization tags to streamline user budget auditing.',
      'Designed dynamic data visualizations (pie and bar charts) powered by Chart.js to display expense distributions and monthly income vs. expense profiles. The charts render fluid transitions and custom tooltips, adapting color tokens automatically to light/dark themes via centralized context listeners that monitor global system theme configurations.',
      'Built a live stock market dashboard fetching real-time equity quotes for major stocks using the Finnhub REST API, alongside a flat-rate tax estimation engine. The stock component caches ticker fetches inside state hooks to prevent API rate-limit exhaustion while displaying live price spreads and calculating tax liabilities.',
      'Integrated predictive forecasting using Scikit-Learn linear regression models to project future net income trends, and built a conversational chatbot using microsoft/DialoGPT-medium for context-aware financial advisory. The ML pipeline handles data preprocessing and offline serialization of models into model.pkl via automated Scikit-Learn training runs.',
    ],
    technologies: ['React.js', 'Flask', 'Firebase', 'Scikit-learn', 'PyTorch', 'Chart.js', 'Finnhub API'],
  },
  {
    id: 4,
    title: 'Eye Disease Classification using EfficientNetB3',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Eye-Disease-Classification-EfficientNetB3',
    bullets: [
      'Developed a deep learning medical image classification pipeline using Transfer Learning with the EfficientNetB3 architecture to identify eye diseases (Cataract, Diabetic Retinopathy, Glaucoma, and Normal/Healthy eyes) from retinal scans. The model is trained on pre-trained ImageNet weights, saving computational resources and utilizing fine-tuned neural network paths.',
      'Formulated image preprocessing workflows including data augmentation, image resizing, and normalization using OpenCV and NumPy, coupled with training optimization callbacks (EarlyStopping, ReduceLROnPlateau, ModelCheckpoint) to save the best model weights. EarlyStopping halts training if validation loss plateaus for 5 consecutive epochs, preventing overfitting.',
      'Implemented a custom classification head on top of the pre-trained ImageNet feature extractor, utilizing GlobalAveragePooling2D, Dropout (0.5) to mitigate overfitting, and a dense output layer with Softmax activation. The model resolves multi-class logits into disease probability vectors for clinical review and ophthalmological audit.',
      'Performed detailed model evaluation using Scikit-Learn metrics, confusion matrices, and Matplotlib accuracy/loss plotting, documenting critical pipeline gotchas such as RAM scalability/OOM risks and loss-function compatibility. Outlined solutions for standardizing BGR color channels from cv2.imread into RGB for pre-trained CNN backbones.',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn'],
  },
  {
    id: 5,
    title: 'Leaf Detection using Detection Transformers (DETR)',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/leaf-detection-detr',
    bullets: [
      'Fine-tuned a pre-trained Detection Transformer (DETR) model (facebook/detr-resnet-50) using PyTorch and Hugging Face Transformers for end-to-end object detection and leaf localization. The DETR architecture uses an attention-based encoder-decoder design to map input pixels to class logits and bounding boxes in a single pass, eliminating anchors.',
      'Designed a custom dataset pipeline (RealLeafDataset) parsing CSV manifests to handle image resizing, normalization, and coordinate conversion into normalized center-based bounding box formats ([x_center, y_center, width, height]). The loader parses stringified annotations with ast.literal_eval and filters out invalid bounding boxes dynamically.',
      'Configured model training using AdamW optimization, PyTorch Automatic Mixed Precision (AMP), and GradScaler to optimize memory efficiency and enable high-speed GPU training on DataParallel multi-GPU clusters. The implementation mitigates GPU Out-of-Memory (OOM) risks by introducing dynamic batch sizing and scaling gradients.',
      'Developed visualization utility modules with Matplotlib to draw predicted bounding boxes with custom confidence score thresholds and labels, including robustness alerts to filter out invalid bounding box annotations. The visualizer overlays predicted boxes with relative confidence scores for visual audit of leaf counts in botanical samples.',
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Matplotlib'],
  },
  {
    id: 6,
    title: 'Python Parallel Text Handling Processor',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Python-Parallel-Text-Handling-Processor',
    bullets: [
      'Developed a high-performance, multi-threaded text processing system in Python utilizing ThreadPoolExecutor to ingest, chunk, and score 10,000+ text records in parallel at 100+ chunks/second. The concurrency manager schedules workers dynamically based on CPU core availability and processing queue lengths to maximize data throughput.',
      'Engineered a robust rule engine with 7+ pre-configured evaluation types (keyword, regex, character length, boundary checks) paired with SQLite database storage and SHA-256 hash-based deduplication. The storage manager creates unique index keys to accelerate full-text searches and avoid record duplicates, reducing database storage sizes.',
      'Integrated a "Storage Improver" module that automatically suggests new rules by detecting high-frequency patterns and outputting JSON suggestions to optimize pipeline categorization. The suggestion pipeline parses frequent terms and calculates probability indicators to recommend high-impact rules based on current corpus trends.',
      'Built an interactive Streamlit analytics dashboard featuring dynamic rule editing with automated backups, full-text regex searching, Matplotlib/Plotly score distribution plots, and ReportLab PDF report generation. The report builder compiles charts, summaries, and word clouds into print-ready PDF structures for business compliance reviews.',
      'Implemented SMTP integration for sending automated email notifications containing pipeline execution metrics, average scores, and priority alerts. The notification layer queries the SQLite database for high-scoring items and generates HTML email summaries with embedded statistics tables sent directly via Gmail server integrations.',
    ],
    technologies: ['Python', 'SQLite3', 'Streamlit', 'ThreadPoolExecutor', 'Plotly', 'Matplotlib', 'ReportLab'],
  },
];


/* ── Expandable project card (accordion) ── */
const ProjectCard = ({ project, onOpenChatbot }) => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const cardBg      = theme === 'dark' ? 'bg-gradient-to-br from-[#2a2418] via-[#272318] to-[#242016]' : 'bg-orange-50';
  const cardBorder  = theme === 'dark' ? 'border-[#5c4a1e]'  : 'border-orange-200';
  const titleColor  = theme === 'dark' ? 'text-[#5b9bd5]'    : 'text-black';
  const chevronColor= theme === 'dark' ? 'text-[#857f72]'    : 'text-black';
  const bulletText  = theme === 'dark' ? 'text-[#857f72]'    : 'text-black';
  const dotColor    = theme === 'dark' ? 'bg-[#5b9bd5]'      : 'bg-[#179cf0]';
  const techBadge   = theme === 'dark' ? 'bg-[#242420] border-[#3e3416] text-[#857f72]' : 'bg-white border-orange-200/60 text-black';
  const hoverRow    = theme === 'dark' ? 'hover:bg-[#2d271a]' : 'hover:bg-orange-100/40';

  return (
    <div className={`border rounded-lg overflow-hidden transition-all hover:shadow-sm ${cardBg} ${cardBorder}`}>
      {/* Header row — always visible */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center text-left p-3 cursor-pointer transition-colors ${hoverRow}`}
      >
        <div className="flex items-center gap-2 min-w-0">
          {/* Dot avatar */}
          <span className={`w-4 h-4 rounded-full flex-shrink-0 ${theme === 'dark' ? 'bg-[#3e3416]' : 'bg-orange-200'}`} />
          <h3 className={`font-medium text-xs truncate ${titleColor}`}>{project.title}</h3>
          
          {project.id === 1 ? (
            <button
              onClick={e => {
                e.stopPropagation();
                if (onOpenChatbot) onOpenChatbot();
              }}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-orange-500 border border-orange-300 bg-orange-50 hover:bg-orange-100 transition-colors leading-none flex-shrink-0 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Live
            </button>
          ) : (
            project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== '' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-orange-500 border border-orange-300 bg-orange-50 hover:bg-orange-100 transition-colors leading-none flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Live
              </a>
            )
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {project.githubUrl && project.githubUrl !== '#' && project.githubUrl !== '' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className={`text-xs font-medium border cursor-pointer px-2 py-0.5 rounded transition-colors ${
                theme === 'dark'
                  ? 'text-[#5b9bd5] border-[#3a4f6a] hover:bg-[#1a2535]'
                  : 'text-[#179cf0] border-[#2fa7ff] hover:bg-blue-50'
              }`}
            >
              GitHub
            </a>
          )}
          <svg
            stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
            strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-200 ${chevronColor} ${open ? 'rotate-180' : ''}`}
            height="14" width="14"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expandable body */}
      {open && (
        <div className="px-4 pb-4">
          {/* Bullets */}
          <ul className="space-y-1.5 mb-3">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                <span className={`text-xs leading-relaxed ${bulletText}`}>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border font-medium ${techBadge}`}
                >
                  {tech
}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ── Projects section (right column) ── */
const Projects = ({ onOpenChatbot }) => {
  const { theme } = useContext(ThemeContext);

  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-800';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]': 'border-gray-200';

  return (
    <section id="projects" className="scroll-mt-20 space-y-2">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 mb-3 ${headingColor} ${divider}`}>
        Projects
      </h2>
      <div className="space-y-2">
        {projectsData.map((p) => (
          <ProjectCard key={p.id} project={p} onOpenChatbot={onOpenChatbot} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

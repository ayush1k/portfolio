import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Project data — Technical Case Studies ── */
const projectsData = [
  {
    id: 1,
    title: 'Real-Time Market Sentiment Analysis',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/market-sentiment-analysis',
    problem: 'Traditional financial sentiment engines fail to process streaming SEC filings (10-K/10-Q) and news feeds in real time, introducing latency into market volatility signal detection.',
    architecture: 'Engineered a high-throughput streaming sentiment analysis pipeline utilizing fine-tuned Transformer models (FinBERT & DeBERTa) on financial disclosures, integrated with FastAPI microservices and Redis buffers for real-time disclosure ingestion.',
    outcome: 'Achieved an 88% F1-score on financial disclosure sentiment classification with a 45% reduction in signal processing latency for market volatility predictions.',
    technologies: ['PyTorch', 'Transformers', 'FinBERT', 'FastAPI', 'Redis', 'Python', 'Scikit-learn'],
  },
  {
    id: 2,
    title: 'Autonomous Driving Framework',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/autonomous-driving-framework',
    problem: '3D spatial perception in self-driving systems requires fusing multi-camera 2D perspective images with sparse 3D LiDAR point clouds without causing computational bottlenecks on edge hardware.',
    architecture: 'Architected a multi-modal perception framework implementing Bird\'s-Eye View (BEV) spatial feature transformations and 3D LiDAR data mapping architectures, fusing voxel grids with camera perspective features using PyTorch and custom CUDA accelerators.',
    outcome: 'Improved 3D bounding box tracking precision by 18% while sustaining a real-time 35 FPS inference throughput on resource-constrained hardware.',
    technologies: ['PyTorch', 'CUDA', 'BEV Transformation', '3D LiDAR Mapping', 'OpenCV', 'Python', 'C++'],
  },
  {
    id: 3,
    title: 'Computer Vision Leaf Detection',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/leaf-detection-detr',
    problem: 'Legacy botanical object detection workflows relied heavily on proprietary MATLAB scripts, limiting cloud execution scaling, GPU parallelization, and open-source model deployment.',
    architecture: 'Translated core computer vision and feature extraction components from MATLAB to a modern Python & PyTorch pipeline, executing an end-to-end Detection Transformer (DETR) object detection pipeline within Google Colab cloud environments.',
    outcome: 'Achieved an 89% mAP score on multi-class botanical leaf datasets, cutting training execution times by 60% through cloud GPU acceleration and open-source toolchain migration.',
    technologies: ['PyTorch', 'Hugging Face DETR', 'OpenCV', 'Google Colab', 'Python', 'MATLAB to Python'],
  },
  {
    id: 4,
    title: 'OrbitDesk Local-First Support Agent Network',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/local-first-support-agent',
    problem: 'Standard customer support systems rely on costly cloud LLM APIs, exposing sensitive user data to cloud privacy risks and high operational latency for repetitive queries.',
    architecture: 'Built an autonomous, 100% local support network using LangGraph, Pydantic, and local open-weights models (Qwen2.5-0.5B & sentence-transformers), featuring an Intent Triage & Router module and deterministic vector store.',
    outcome: 'Eliminated cloud API costs and data exposure entirely while delivering zero-latency local query resolution with automated PyTest coverage verifying source citation accuracy.',
    technologies: ['LangGraph', 'Hugging Face', 'Qwen2.5', 'PyTorch', 'Pydantic', 'Python', 'Pytest'],
  },
  {
    id: 5,
    title: 'Speech Emotion Recognition with RAVDESS',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Speech-Emotion-Recognition-RAVDESS',
    problem: 'Identifying subtle human emotional states from raw acoustic speech signals requires resilient spectral feature representation across variable vocal timbres and background noise.',
    architecture: 'Formulated a multi-descriptor audio feature extraction framework in Python using Librosa to compute MFCCs, Chroma features, and Mel Spectrograms, benchmarked across SVM, Random Forest, and MLP neural networks.',
    outcome: 'Built an accurate acoustic classifier predicting 8 distinct emotional categories with an instant single-sample inference engine for arbitrary unseen audio files.',
    technologies: ['Python', 'Librosa', 'Scikit-learn', 'NumPy', 'Matplotlib', 'SoundFile'],
  },
  {
    id: 6,
    title: 'AI-Powered Customer Complaint Management System',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/AI-powered-Customer-Complaint-Management-System',
    problem: 'Manual pharmaceutical product defect processing is time-consuming, error-prone, and lacks real-time risk assessment and automated audit logging.',
    architecture: 'Designed an enterprise complaint platform with a dual-panel React 18 / Redux Toolkit UI and stateful LangGraph agent workflow powered by dual Groq LLMs (Llama-3.3-70b & Llama-3.1-8b) with FastAPI and SQLAlchemy.',
    outcome: 'Streamlined intake with 100% state-preserved natural language field editing, automated CAPA generation, and a 19-suite integration test harness.',
    technologies: ['FastAPI', 'LangGraph', 'Groq API', 'React', 'Redux Toolkit', 'TypeScript', 'SQLAlchemy', 'Python'],
  },
  {
    id: 7,
    title: 'Plain Language Agent',
    liveUrl: 'https://plain-language-agent.onrender.com/',
    githubUrl: 'https://github.com/ayush1k/plain-language-agent',
    videoUrl: 'https://youtu.be/17fMWKVvcSg',
    problem: 'Complex legal, medical, and public sector document phrasing hinders reader comprehension and compliance with target readability grade standards.',
    architecture: 'Engineered an Agentic LangGraph StateGraph (Profiler, Paraphraser, Critic) combining Google Gemini for structural evaluation and Llama-3 for rewriting, with a stdio-based Node.js MCP server providing grade-specific rules.',
    outcome: 'Automatically transforms complex input text to meet target readability grades with real-time Flesch-Kincaid delta tracking and Docker containerization on Render.',
    technologies: ['LangGraph', 'Node.js', 'Google Gemini', 'Llama-3', 'MCP', 'Docker', 'Render'],
  },
  {
    id: 8,
    title: 'RAG-based Digital Twin Portfolio Chatbot',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/RAG-based-twin',
    problem: 'Static portfolio websites cannot dynamically answer recruiter questions regarding specific project methodologies and timeline details in real-time.',
    architecture: 'Developed a RAG chatbot using FastAPI, LangChain (LCEL), FAISS vector store, sentence-transformers, and Qwen2.5-7B-Instruct via Hugging Face Serverless API with similarity retrieval (top_k=10) and sliding window memory.',
    outcome: 'Delivered a conversational AI twin that accurately answers recruiter queries grounded strictly in portfolio documents with zero hallucinated active role tenses.',
    technologies: ['LangChain', 'FastAPI', 'FAISS', 'Streamlit', 'Hugging Face API', 'Qwen'],
  },
  {
    id: 9,
    title: 'AI Humanize GUI',
    liveUrl: 'https://ai-humanizer-1n0f.onrender.com/',
    githubUrl: 'https://github.com/ayush1k/ai-humanize-gui',
    problem: 'Machine-generated text often exhibits robotic phrasing signatures and repetitive structures that flag AI content detectors.',
    architecture: 'Engineered a hybrid dual-engine architecture in Node.js combining a fast local rule-based pattern library with an external AI Pro Mode, served through a retro-terminal GUI and containerized Docker image on Render.',
    outcome: 'Enabled instant offline pattern stripping with optional deep semantic reconstruction, offering customizable writing styles while maintaining user data privacy.',
    technologies: ['Node.js', 'Docker', 'Render', 'JavaScript', 'CSS3'],
  },
  {
    id: 10,
    title: 'Financial Management Dashboard',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Financial-Management-Dashboard',
    problem: 'Individuals struggle to track fragmented income streams, real-time stock volatility, and tax liabilities across multiple accounts.',
    architecture: 'Built a full-stack portal integrating React.js, Python Flask microservices, Firebase Firestore, Chart.js visualizations, Finnhub REST API, and Scikit-Learn linear regression models alongside a DialoGPT chatbot.',
    outcome: 'Delivered dynamic budget guardrails (80%/100% threshold alerts), real-time stock price tracking, and net income forecasting with serialized ML models.',
    technologies: ['React.js', 'Flask', 'Firebase', 'Scikit-learn', 'PyTorch', 'Chart.js', 'Finnhub API'],
  },
  {
    id: 11,
    title: 'Eye Disease Classification using EfficientNetB3',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Eye-Disease-Classification-EfficientNetB3',
    problem: 'Manual ophthalmological examination of retinal fundus scans for conditions like Cataract and Glaucoma requires specialized expertise and incurs diagnostic delays.',
    architecture: 'Applied Transfer Learning with EfficientNetB3 in TensorFlow/Keras, implementing custom data augmentation, GlobalAveragePooling2D, Dropout (0.5), and EarlyStopping callbacks.',
    outcome: 'Achieved 94% classification accuracy across 4 eye pathology classes, standardizing BGR-to-RGB color channel conversion and reducing memory overhead.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn'],
  },
  {
    id: 12,
    title: 'Python Parallel Text Handling Processor',
    liveUrl: '',
    githubUrl: 'https://github.com/ayush1k/Python-Parallel-Text-Handling-Processor',
    problem: 'Sequential ingestion and rule scoring of large-scale text records (10,000+ entries) create severe execution bottlenecks in data processing pipelines.',
    architecture: 'Built a multi-threaded Python engine using ThreadPoolExecutor paired with an SQLite engine featuring SHA-256 deduplication, a rule generator ("Storage Improver"), Streamlit analytics, and SMTP alerts.',
    outcome: 'Scaled processing speed to 100+ chunks/second, reducing text inference time by 60% with automated PDF reporting via ReportLab.',
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
  const bodyText    = theme === 'dark' ? 'text-[#857f72]'    : 'text-gray-700';
  const techBadge   = theme === 'dark' ? 'bg-[#242420] border-[#3e3416] text-[#857f72]' : 'bg-white border-orange-200/60 text-black';
  const hoverRow    = theme === 'dark' ? 'hover:bg-[#2d271a]' : 'hover:bg-orange-100/40';
  const divider     = theme === 'dark' ? 'border-[#3e3416]'  : 'border-orange-200/60';

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

          {project.title === 'RAG-based Digital Twin Portfolio Chatbot' ? (
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

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium text-red-500 border border-red-300 bg-red-50 hover:bg-red-100 transition-colors leading-none flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              Demo
            </a>
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
        <div className="px-4 pb-4 pt-1">
          {/* Architecture / Tech Stack section - separated from case study body */}
          {project.technologies && project.technologies.length > 0 && (
            <div className={`pb-3 mb-3 border-b ${divider}`}>
              <div className="text-[10px] font-bold uppercase tracking-wider text-orange-500 dark:text-orange-400 mb-1.5">
                Architecture / Tech Stack
              </div>
              <div className="flex flex-wrap items-center gap-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border font-medium ${techBadge}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technical Case Study Points */}
          <div className="space-y-2 text-xs leading-relaxed">
            {project.problem && (
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 shrink-0 mt-0.5">
                  Problem
                </span>
                <p className={bodyText}>{project.problem}</p>
              </div>
            )}

            {project.architecture && (
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0 mt-0.5">
                  Architecture
                </span>
                <p className={bodyText}>{project.architecture}</p>
              </div>
            )}

            {project.outcome && (
              <div className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                  Outcome
                </span>
                <p className={bodyText}>{project.outcome}</p>
              </div>
            )}

            {/* Fallback to bullets if present */}
            {project.bullets && project.bullets.length > 0 && !project.problem && (
              <ul className="space-y-1.5">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${theme === 'dark' ? 'bg-[#5b9bd5]' : 'bg-[#179cf0]'}`} />
                    <span className={`text-xs leading-relaxed ${bodyText}`}>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Projects section ── */
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


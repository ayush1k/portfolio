# Portfolio Monorepo Architecture & Development Memory

## 1. Project Overview
This repository is a full-stack AI engineer portfolio monorepo. It features a modern, interactive single-page React frontend showcasing projects, skills, education, and experience, coupled with an autonomous **RAG-based AI Twin Chatbot** backend. The AI Twin allows recruiters and developers to converse in real time with an agentic clone of Ayush Kumar, grounded strictly in his portfolio knowledge base.

---

## 2. Tech Stack

### Frontend (`/main`)
- **Framework & Build Tool**: React 19, Vite 7
- **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/vite`), Vanilla CSS
- **Animations & Micro-Interactions**: Framer Motion 12, CSS Transitions (`transition-all duration-300`)
- **State & Theme Management**: React Context API (`ThemeContext.jsx`), React State & Hooks (`useRef`, `useEffect`)
- **Typography**: Google Fonts — **Inter** (Primary Reading), **JetBrains Mono** (`.font-mono` for technical badges, code, & architecture tags)

### Backend (`/chatbot`)
- **Web Framework**: FastAPI, Uvicorn
- **AI / RAG Orchestration**: LangChain, LangChain Hugging Face, LangChain Core
- **Vector Database**: FAISS (Facebook AI Similarity Search)
- **Embeddings & Inference Models**:
  - Embedding Model: `sentence-transformers/all-MiniLM-L6-v2` via `HuggingFaceEndpointEmbeddings`
  - LLM Generation: `Qwen/Qwen2.5-7B-Instruct` via Hugging Face Serverless API / Router (`HuggingFaceEndpoint` / `ChatHuggingFace`)

### Infrastructure & Deployment
- **Containerization**: Docker
- **Cloud Hosting / Deployment**: Render

---

## 3. Repository Structure

```
portfolio/
├── main/                           # Frontend React Application
│   ├── public/                     # Static assets (favicon, images)
│   ├── src/
│   │   ├── assets/                 # Company logos, media assets
│   │   ├── components/             # React UI Components
│   │   │   ├── About.jsx           # Asymmetrical Bento Box grid layout & domain highlights
│   │   │   ├── Certificates.jsx    # Certification grid & verification links
│   │   │   ├── ChatbotPage.jsx     # Interactive RAG chatbot view with dynamic follow-up suggestion pills
│   │   │   ├── ChatbotWidget.jsx   # Floating Action Button (FAB) with blur halo & glowing drop-shadow
│   │   │   ├── Contact.jsx         # Contact form & social links
│   │   │   ├── Education.jsx       # Interactive Connected Timeline with node logos
│   │   │   ├── Experience.jsx      # Interactive Connected Timeline with node logos & TA details
│   │   │   ├── GithubStats.jsx     # GitHub statistics, activity bar chart & calendar with animate-pulse skeleton loaders
│   │   │   ├── Header.jsx          # Profile avatar, title, & social badges
│   │   │   ├── Navbar.jsx          # Glassmorphic top navigation with dynamic scroll-spy active pills
│   │   │   ├── Projects.jsx        # Expandable project cards with hover scale & font-mono tech badges
│   │   │   └── Skills.jsx          # Categorized tech stack badges with font-mono & hover physics
│   │   ├── context/
│   │   │   └── ThemeContext.jsx    # Dark/light theme provider & persistence
│   │   ├── App.jsx                 # Main layout, scroll-spy observer, & Framer Motion entrance animation
│   │   ├── index.css               # Design system tokens, font imports, & .font-mono utility
│   │   └── main.jsx                # React DOM entry point
│   ├── index.html                  # HTML template with Google Fonts (Inter + JetBrains Mono)
│   ├── package.json                # Frontend dependencies & Vite scripts
│   └── vite.config.js              # Vite configuration with Tailwind CSS plugin
│
├── chatbot/                        # Backend RAG AI Twin Microservice
│   ├── data/                       # Portfolio Knowledge Base (Markdown & JSON files)
│   │   ├── experience.md           # Work, TA, and internship history
│   │   ├── faq.md                  # Frequently asked technical & personal questions
│   │   └── knowledge_base.json     # Structured QA database
│   ├── vectorstore/                # Persisted FAISS index & metadata store
│   ├── Dockerfile                  # Container definition for Render deployment
│   ├── ingest.py                   # Knowledge base ingestion & FAISS index builder
│   ├── llm_engine.py               # Hugging Face LLM integration, delimiter parsing, & prompt template
│   ├── main.py                     # FastAPI web server, CORS middleware, ChatResponse schema & REST endpoints
│   ├── retriever.py                # Vector similarity search & context retrieval logic
│   └── requirements.txt            # Python dependencies
│
├── memory.md                       # Core architectural reference & development context
└── codebase_context.txt            # Complete serialized codebase reference
```

---

## 4. Styling & UI Conventions

### Theme System (`ThemeContext.jsx`)
- Supports **dark mode** (default) and **light mode**, managed via React Context.
- Dark Theme Color Palette: Rich dark charcoal background (`#0f0f0e`), deep card container (`#1a1a18`), subtle warm borders (`#2a2a28`), golden accent highlights (`#c4b07a`), and crisp text (`#e8e6e1`).
- Light Theme Color Palette: Soft neutral light background (`bg-gray-100`), clean white cards (`bg-white`), crisp gray borders (`border-gray-200`), and vibrant blue/orange accents.

### Glassmorphism
- Top navbar (`Navbar.jsx`) uses high-density backdrop blur (`backdrop-blur-lg backdrop-saturate-[180%]`), combined with inner inset highlights (`shadow-inner`, `inset_0_1.5px_0_rgba(...)`) to float gracefully above scrolling page content.
- Floating Action Button (`ChatbotWidget.jsx`) features a glowing blur halo backdrop and soft drop-shadow (`shadow-xl shadow-orange-500/20`).

### Asymmetrical Bento Box Layouts
- `About.jsx` uses a responsive asymmetrical CSS grid layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`).
- Key domain selling points span distinct grid columns (`md:col-span-2`, `lg:col-span-3`) to create dynamic visual hierarchy without plain text bullet lists.

### Interactive Connected Timeline Layouts
- `Experience.jsx` and `Education.jsx` feature a connected timeline layout:
  - Absolute vertical connector line (`w-[2px] bg-[#2a2a28]` / `bg-gray-200`) down the left side.
  - Institution/Company logos positioned directly on top of the line as chronological nodes (`absolute -left-6 sm:-left-7 top-1 z-10`).
  - Hovering a timeline item (`group`) translates the main card (`group-hover:translate-x-1.5`) and illuminates the logo node (`group-hover:ring-2 group-hover:ring-orange-500/50 group-hover:scale-110`).

### Typography Rules
- **Primary Reading Font**: `Inter`, system UI stack.
- **Code & Tech Badges**: `JetBrains Mono` applied via custom utility class `.font-mono` defined in `src/index.css`.

### Skeleton Loaders
- `GithubStats.jsx` replaces spinners with modern Tailwind `animate-pulse` skeleton loaders matching top stats cards (`h-36 w-full sm:w-[310px]`), a 30-bar recent activity chart, and a 364-square annual calendar grid.

### Micro-Interactions & Motion
- Interactive elements (Bento cards, project accordions, skill badges) incorporate smooth hover physics (`hover:-translate-y-0.5`, `hover:-translate-y-1`, `hover:scale-[1.01]`, `hover:shadow-md`) with fluid timing (`transition-all duration-300`).
- Page entrance uses Framer Motion staggered entrance animations (`containerVariants` with `staggerChildren: 0.15` and `itemVariants` with `y: 20` to `y: 0`).

---

## 5. State Management & Navigation

- **Theme State**: Handled globally via `ThemeContext.jsx`. The active theme (`dark` or `light`) is saved to `localStorage` and toggled across all components.
- **Scroll-Spy Section Tracking**: `App.jsx` implements an `IntersectionObserver` listening to section IDs (`#home`, `#about`, `#experience`, `#projects`, `#skills`, `#education`, `#certificates`, `#contact`). As the user scrolls, `currentPage` updates dynamically, automatically highlighting the corresponding active pill in `Navbar.jsx`.
- **Manual Navigation Lock**: When clicking a navbar link, `scrollToSection` sets a 900ms lock (`isManualScrollingRef.current = true`) to suppress observer intermediate triggers while smooth scrolling.
- **Chatbot Conversational History & Suggestions**: Handled inside `ChatbotPage.jsx`. The assistant response payload includes follow-up suggestions (`data.suggestions: list[str]`), rendered as clickable pill buttons below the latest AI message.

---

## 6. Backend RAG Architecture

```
[Markdown Knowledge Base (chatbot/data/*.md)]
                 │
                 ▼ (ingest.py)
 [Text Splitting & Chunking (RecursiveCharacterTextSplitter)]
                 │
                 ▼
 [Embeddings (sentence-transformers/all-MiniLM-L6-v2)]
                 │
                 ▼
      [FAISS Vector Store (vectorstore/)]
                 │
                 ▼ (retriever.py similarity search top_k=10)
  [Retrieved Context Chunks] ───┐
                                │
 [User Query & Chat History] ───┼──► [Prompt Template (llm_engine.py)]
                                │                 │
                                │                 ▼
                                └──► [Qwen2.5-7B-Instruct (HF Serverless API)]
                                                  │
                                                  ▼
                                 [Response + ||| + Suggestions]
                                                  │
                                                  ▼
                               [Parsed Dict: {answer, suggestions}]
```

### Ingestion Pipeline (`ingest.py`)
- Reads Markdown files from `chatbot/data/`.
- Splits text into optimal chunks (`CHUNK_SIZE = 600`, `CHUNK_OVERLAP = 100`) to preserve complete contextual units.
- Encodes chunks into dense 384-dimensional vectors using `sentence-transformers/all-MiniLM-L6-v2`.
- Persists vector index to `chatbot/vectorstore/`.

### Retrieval & Generation Pipeline (`retriever.py` -> `llm_engine.py` -> `main.py`)
1. **Retrieval**: `retriever.py` loads the FAISS vectorstore and executes similarity search (`similarity_search(query, k=10)`).
2. **LLM Engine & Prompting**: `llm_engine.py` constructs a ChatPromptTemplate with strict system constraints.
3. **First-Person Persona & Delimiter Logic**:
   - **First-Person Identity**: Speaks strictly as Ayush Kumar ("I", "my", "me").
   - **Zero Hallucination**: Relies exclusively on retrieved context.
   - **Ongoing vs Completed Role Tense**: Active roles ending with "Present" are spoken about in the present tense ("I am currently working on...").
   - **Follow-up Suggestions**: Appends 2-3 short, relevant follow-up questions at the end of response delimited by `|||`. `llm_engine.py` / `main.py` parses `|||` and returns `ChatResponse(query=..., answer=..., num_chunks_retrieved=..., suggestions=list[str])`.

---

## 7. Environment Variables & Development Scripts

### Environment Variables (`/chatbot/.env`)
```env
HF_ACCESS_TOKEN=your_huggingface_access_token_here
```

### Local Development Commands

#### 1. Frontend (`/main`)
```bash
cd main
npm install         # Install dependencies
npm run dev         # Start Vite development server (http://localhost:5173)
npm run build       # Build production bundle to dist/
```

#### 2. Backend (`/chatbot`)
```bash
cd chatbot
pip install -r requirements.txt   # Install Python dependencies
python ingest.py                  # Ingest data & build FAISS vector index
python main.py                    # Start FastAPI server on port 8000 (or uvicorn main:app --reload)
```

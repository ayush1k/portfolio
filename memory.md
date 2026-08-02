# Portfolio Monorepo Architecture & Development Memory

## 1. Project Overview
This repository is a full-stack AI engineer portfolio monorepo. It features a modern, interactive single-page React frontend showcasing projects, skills, education, and experience, coupled with an autonomous **RAG-based AI Twin Chatbot** backend. The AI Twin allows recruiters and developers to converse in real time with an agentic clone of Ayush Kumar, grounded strictly in his portfolio knowledge base.

---

## 2. Tech Stack

### Frontend (`/main`)
- **Framework & Build Tool**: React 19, Vite 7
- **Styling & Design System**: Tailwind CSS v4 (`@tailwindcss/vite`), Vanilla CSS
- **Animations & Micro-Interactions**: Framer Motion 12, CSS Transitions
- **State & Theme Management**: React Context API (`ThemeContext.jsx`)
- **Typography**: Google Fonts — **Inter** (Primary Reading), **JetBrains Mono** (`.font-mono` for technical badges & code)

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
│   │   │   ├── About.jsx           # Bento Box bio layout & domain highlights
│   │   │   ├── Certificates.jsx    # Certification grid & verification links
│   │   │   ├── ChatbotPage.jsx     # Interactive full-screen RAG chatbot view
│   │   │   ├── ChatbotWidget.jsx   # Floating Action Button (FAB) widget with glow & blur
│   │   │   ├── Contact.jsx         # Contact form & social links
│   │   │   ├── Education.jsx       # Academic background & degrees
│   │   │   ├── Experience.jsx      # Work history, TA roles, & internships
│   │   │   ├── GithubStats.jsx     # GitHub statistics & contribution metrics
│   │   │   ├── Header.jsx          # Profile avatar, title, & social badges
│   │   │   ├── Navbar.jsx          # Glassmorphic top navigation & theme toggle
│   │   │   ├── Projects.jsx        # Expandable project accordion & architecture tags
│   │   │   └── Skills.jsx          # Categorized tech stack badges with font-mono
│   │   ├── context/
│   │   │   └── ThemeContext.jsx    # Dark/light theme provider & persistence
│   │   ├── App.jsx                 # Main application layout container & page router
│   │   ├── index.css               # Design tokens, font imports, & custom utilities
│   │   └── main.jsx                # React DOM entry point
│   ├── index.html                  # HTML template with Google Fonts (Inter + JetBrains Mono)
│   ├── package.json                # Frontend dependencies & Vite scripts
│   └── vite.config.js              # Vite configuration with Tailwind CSS plugin
│
├── chatbot/                        # Backend RAG AI Twin Microservice
│   ├── data/                       # Portfolio Knowledge Base (Markdown & JSON files)
│   │   ├── experience.md           # Work, TA, and internship history
│   │   ├── faq.md                  # Frequently asked technical & personal questions
│   │   ├── knowledge_base.json     # Structured QA database
│   │   ├── personal_info.md        # Bio, education, contact details
│   │   ├── projects.md             # Detailed project technical case studies
│   │   └── skills.md               # Complete technical skill breakdown
│   ├── vectorstore/                # Persisted FAISS index & metadata store
│   ├── Dockerfile                  # Container definition for Render deployment
│   ├── ingest.py                   # Knowledge base ingestion & FAISS index builder
│   ├── llm_engine.py               # Hugging Face LLM integration & prompt template
│   ├── main.py                     # FastAPI web server, CORS middleware, & REST endpoints
│   ├── retriever.py                # Vector similarity search & context retrieval logic
│   └── requirements.txt            # Python dependencies
│
└── memory.md                       # Core architectural reference & development context
```

---

## 4. Styling & UI Conventions

### Theme System (`ThemeContext.jsx`)
- Supports **dark mode** (default) and **light mode**, managed via React Context.
- Dark Theme Color Palette: Rich dark charcoal background (`#0f0f0e`), deep card container (`#1a1a18`), subtle warm borders (`#2a2a28`), golden accent highlights (`#c4b07a`), and crisp text (`#e8e6e1`).
- Light Theme Color Palette: Soft neutral light background (`bg-gray-100`), clean white cards (`bg-white`), crisp gray borders (`border-gray-200`), and vibrant blue/orange accents.

### Glassmorphism
- Top navbar (`Navbar.jsx`) uses high-density backdrop blur (`backdrop-blur-lg backdrop-saturate-[180%]`), combined with inner inset shadows (`shadow-inner`, `inset_0_1.5px_0_rgba(...)`) to float gracefully above scrolling page content.
- Floating Action Button (`ChatbotWidget.jsx`) features a glowing blur halo and soft drop-shadow (`shadow-xl shadow-orange-500/20`).

### Bento Box Layouts
- `About.jsx` uses a responsive asymmetrical CSS grid layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`).
- Key domain selling points span distinct grid columns (`md:col-span-2`, `lg:col-span-3`) to create dynamic visual hierarchy without plain text bullet lists.

### Typography Rules
- **Primary Reading Font**: `Inter`, system UI stack.
- **Code & Tech Badges**: `JetBrains Mono` applied via custom utility class `.font-mono` defined in `src/index.css`.

### Micro-Interactions
- Interactive elements (Bento cards, project accordions, skill badges) incorporate smooth hover physics (`hover:-translate-y-0.5`, `hover:-translate-y-1`, `hover:scale-[1.01]`, `hover:shadow-md`, `hover:border-orange-500/40`) with fluid timing (`transition-all duration-300`).

---

## 5. State Management

- **Theme State**: Handled globally via `ThemeContext.jsx`. The active theme (`dark` or `light`) is saved to `localStorage` and toggled across all components.
- **Page Navigation**: Controlled in `App.jsx` using `currentPage` local state (`'home'` vs `'chatbot'`). Section scrolling uses smooth native `scrollIntoView`.
- **Chatbot Conversational History**: Handled inside `ChatbotPage.jsx`. Messages are stored in a state array (`messages`) containing human queries and AI responses. The backend (`llm_engine.py`) accepts multi-turn chat history via LangChain `MessagesPlaceholder(variable_name="chat_history")`.

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
                                       [First-Person RAG Response]
```

### Ingestion Pipeline (`ingest.py`)
- Reads all Markdown files from `chatbot/data/`.
- Splits text into optimal chunks (`CHUNK_SIZE = 600`, `CHUNK_OVERLAP = 100`) to preserve complete contextual units (e.g., individual internships or project case studies).
- Encodes chunks into dense 384-dimensional vectors using `sentence-transformers/all-MiniLM-L6-v2`.
- Persists the vector index to `chatbot/vectorstore/`.

### Retrieval & Generation Pipeline (`retriever.py` -> `llm_engine.py`)
1. **Retrieval**: `retriever.py` loads the persisted FAISS vectorstore and executes similarity search (`similarity_search(query, k=10)`).
2. **LLM Engine**: `llm_engine.py` constructs a ChatPromptTemplate with strict system constraints.
3. **First-Person Persona & Factuality Constraints**:
   - **First-Person Identity**: Speaks strictly as Ayush Kumar ("I", "my", "me").
   - **Zero Hallucination**: Relies exclusively on retrieved context. If information is absent, returns: `"I haven't added that detail to my portfolio documents yet, but you can reach out to the real Ayush directly!"`.
   - **Ongoing vs Completed Role Tense**: Active roles ending with "Present" are spoken about strictly in the present tense ("I am currently working on...").
   - **Formatting Constraints**: Paragraph format only — strictly forbids bullet points, markdown headers, or raw list dumping.

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

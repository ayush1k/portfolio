# Ayush Kumar — Developer Portfolio & RAG AI Twin

Welcome to my personal developer portfolio and interactive AI Twin chatbot space! This project is structured as a monorepo containing a modern React frontend and a production-grade RAG (Retrieval-Augmented Generation) chatbot backend.

### 🌐 Live Demo
* **Live Website:** [https://ayush-portfolio-i8ua.onrender.com/](https://ayush-portfolio-i8ua.onrender.com/)
* **AI Twin Chatbot:** Accessible directly via the floating action button on the bottom right of the portfolio.

---

## 🚀 Key Features

* **Glassmorphic Resume Portfolio:** A highly optimized, single-page application (SPA) styled with custom dark/light theme options, a sticky navigation dock, two-column layouts, and accordion project views.
* **First-Person AI Twin:** A full-page, dedicated conversational workspace where visitors can chat with my digital twin, grounded strictly in my resume data (experiences, education, skills, and projects).
* **Live GitHub Stats Tracker:** Built-in SVG-based contribution calendar rendering real-time developer statistics.
* **Production-Grade RAG Backend:** Leverages Hugging Face's serverless API for embeddings (`sentence-transformers/all-MiniLM-L6-v2`) and text generation (`Qwen/Qwen2.5-7B-Instruct`) coupled with a FAISS vector database.

---

## 📁 Repository Structure

```text
portfolio/
├── main/                       # Frontend Application (React + Vite)
│   ├── src/
│   │   ├── components/         # Portfolio sections (Header, Experience, Projects, etc.)
│   │   │   ├── ChatbotPage.jsx # Full-page chatbot screen
│   │   │   └── ChatbotWidget.jsx # Floating Action Button launcher
│   │   ├── context/            # Global theme context (Light / Dark)
│   │   ├── App.jsx             # Main router and controller
│   │   └── index.css           # Tailwind CSS v4 styling entrypoint
│   └── package.json
│
└── chatbot/                    # Backend AI Twin Service (FastAPI + LangChain)
    ├── data/                   # Knowledge Base source Markdown (.md) documents
    ├── vectorstore/            # Persisted local FAISS index (built by ingest.py)
    ├── Dockerfile              # Docker container configuration
    ├── ingest.py               # Document chunking & embedding pipeline
    ├── retriever.py            # Vector database query search engine
    ├── llm_engine.py           # RAG chain wrapper (Qwen 7B + System Persona)
    ├── main.py                 # FastAPI application router
    └── requirements.txt        # Python library dependencies
```

---

## 🛠️ Local Development & Setup

### 1. Prerequisite Settings
Make sure you have [Node.js](https://nodejs.org/) (v18+) and [Python 3.10+](https://www.python.org/) installed.

### 2. Configure Backend API Keys
Create a `.env` file inside the `chatbot/` folder:
```env
HF_ACCESS_TOKEN=your_huggingface_access_token_here
```

### 3. Run the Backend API Server
Navigate to the `chatbot/` directory, set up your Python virtual environment, build the FAISS index, and start FastAPI:
```bash
cd chatbot

# Setup Virtual Environment
python3 -m venv .venv
source .venv/bin/activate

# Install Dependencies
pip install -r requirements.txt

# Chunk & Embed Markdown Data
python ingest.py

# Run FastAPI Server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
* The API will start on `http://localhost:8000`. You can visit interactive docs at `http://localhost:8000/docs`.

### 4. Run the Frontend App
Open a separate terminal, navigate to the `main/` directory, install packages, and start Vite:
```bash
cd main
npm install
npm run dev
```
* Open your browser to `http://localhost:5173`. The site will dynamically map connection requests to your local FastAPI server.

---

## 🐳 Docker Support (Backend)

The backend is fully dockerized for easy, reproducible deployments. To run the backend container locally:

```bash
cd chatbot

# Build the Docker image
docker build -t portfolio-chatbot .

# Run the Docker container
docker run -p 8000:8000 -e HF_ACCESS_TOKEN="your_token" portfolio-chatbot
```

---

## ☁️ Production Deployment (Render)

This repository is optimized for deployment on **Render**:

1. **FastAPI Backend (Docker Web Service)**
   - Create a Web Service connected to this repository.
   - Set **Root Directory** to `chatbot`.
   - Set **Runtime** to `Docker` (it will auto-detect the Dockerfile).
   - Set **Environment Variable** `HF_ACCESS_TOKEN` in the advanced tab.
   
2. **React Frontend (Static Site)**
   - Create a Static Site connected to this repository.
   - Set **Root Directory** to `main`.
   - Set **Build Command** to `npm run build`.
   - Set **Publish Directory** to `dist`.
   - Set **Environment Variable** `VITE_API_URL` to your live Backend URL.

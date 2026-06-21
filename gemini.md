# gemini.md — Portfolio System Context

> **Purpose:** This file is the authoritative "System Context" for AI-assisted sessions on this project.
> Load it at the start of every session to restore full architectural and design awareness.
> Last updated: 2026-06-21

---

## 1. Project Overview & Tech Stack

### Purpose
Personal developer portfolio for **Ayush Kumar** — an ML Engineer & Python Expert. Built as a single-page application (SPA) styled to closely mirror the design of [princesinghai.com](https://www.princesinghai.com/): a dense, resume-style dark/light card layout with a glassmorphism navbar, two-column content grid, and accordion-style project entries.

### Core Technologies

| Technology | Version | Role |
|---|---|---|
| **React** | ^19.1.0 | UI framework (functional components + hooks) |
| **Vite** | ^7.0.4 | Build tool & dev server (`npm run dev`) |
| **Tailwind CSS** | ^4.1.11 | Utility-first styling (v4, via `@tailwindcss/vite` plugin) |
| **@tailwindcss/vite** | ^4.1.11 | Tailwind v4 Vite integration (no `tailwind.config.js` needed) |
| **ESLint** | ^9.30.1 | Linting |
| **Inter** | Google Fonts | Typography — loaded via `<link>` in `index.html` |

> **Critical — Tailwind v4:** Imported via `@import "tailwindcss"` in `index.css`. No `tailwind.config.js`. Arbitrary values work inline. **NEVER** use the `dark:` variant — all theming is done via JS ternary on the `theme` string from `ThemeContext`.

### Not yet integrated (placeholders only)
- **Contact form submission** — currently a simulated `setTimeout`. No real HTTP call or email service wired up yet.

---

## 2. Architecture & Component Structure

### SPA Architecture & Scroll Navigation
No React Router. All sections render sequentially in one scrollable page, identified by HTML `id` attributes. Navigation is:

```js
// App.jsx
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  setCurrentPage(sectionId);
};
```

`scrollToSection` is passed to `<Navbar>` as `setCurrentPage`. Every nav link calls it with a section `id` string.

### File Structure

```
portfolio/
├── gemini.md                       ← This file (session context)
└── main/                           ← Vite app root
    ├── index.html                  ← SEO meta, Inter font link
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx                ← Entry point; renders <App> in StrictMode
        ├── App.jsx                 ← Root; owns currentPage state; renders two-column layout
        ├── index.css               ← @import "tailwindcss" + Inter font-family + no-scrollbar util
        ├── context/
        │   └── ThemeContext.jsx    ← Global light/dark theme state (unchanged)
        └── components/
            ├── Navbar.jsx          ← Glassmorphism pill navbar, 8 nav links, mobile hamburger
            ├── Header.jsx          ← Full-width resume header (name, badges, tagline, socials)
            ├── About.jsx           ← Left col: orange banner + blue-dot bullet bio
            ├── Experience.jsx      ← Left col: company + role + date + bullet points
            ├── Projects.jsx        ← Right col: accordion expand/collapse cards
            ├── Skills.jsx          ← Right col: category labels + flex-wrap badge pills
            ├── Education.jsx       ← Right col: institution + degree + highlights
            ├── Certificates.jsx    ← Right col: certificate cards with skill tags
            ├── Contact.jsx         ← Right col: quick links + compact 3-field form
            └── Home.jsx            ← Legacy file (kept but unused; Header.jsx replaced it)
```

### Page Layout (CRITICAL — matches princesinghai.com exactly)

```
Fixed Glassmorphism Navbar
└── div.min-h-screen (page background: bg-gray-100 / bg-[#0f0f0e])
    └── div.max-w-6xl (centered card: bg-white / bg-[#1a1a18], rounded-2xl, border)
        ├── div.p-4 (full-width)
        │   └── <Header id="home"> — name, title, status badges, tagline, email, socials
        └── div.px-4.pb-4
             ├── main.grid.grid-cols-1.lg:grid-cols-3.gap-8
             │    ├── div.lg:col-span-2 (LEFT — 2/3 width)
             │    │   ├── <About id="about">
             │    │   └── <Experience id="experience">
             │    └── div (RIGHT — 1/3 width)
             │        ├── <Video Showcase (visual placeholder)>
             │        ├── <Skills id="skills">
             │        ├── <Education id="education">
             │        ├── <Certificates id="certificates">
             │        └── <Contact id="contact">
             └── <Projects id="projects"> (Full Width)
```

### Component Responsibilities

| Component | Section ID | Column | Responsibility |
|---|---|---|---|
| **App** | — | — | Root wrapper. Owns `currentPage`. Wraps in `<ThemeProvider>`. Renders `<Header>` + `<main>` two-column grid. |
| **Navbar** | — | — | Fixed glassmorphism pill. 8 nav links. Desktop: logo \| divider \| links \| divider \| theme toggle + status badge. Mobile: hamburger dropdown. |
| **Header** | `home` | Full-width | Name + "ML Engineer" title, animated "Open to Work" + "Interview Ready" badges (pulse dot), headline tagline, email, phone number, social icons (LinkedIn, GitHub, X, Instagram). |
| **About** | `about` | Left | Dashed `<h2>` heading. Orange highlight banner with left accent bar. 6 blue-dot bullet points about Ayush's ML background. |
| **Experience** | `experience` | Left | Company logo + name, role title (blue), date + location (gray), blue-dot bullet points. Contains real work history (IIT Roorkee, IET, Infosys Springboard, REC Kannauj, CDAC, Oasis Infobyte). |
| **Projects** | `projects` | Full-Width | Dashed heading. Accordion cards: collapsed = title + Live badge + GitHub button + chevron; expanded = bullet list + tech tag pills. Located below the main columns. |
| **Video Showcase** | — | Right | Responsive aspect-video container with dashed border and icon acting as a placeholder for a future video showcase. |
| **Skills** | `skills` | Right | Dashed heading "Tech Stack". 6 categories (Languages, ML, Deep Learning & CV, Generative AI & NLP, Frameworks, Tools & MLOps), with each category enclosed in a separate visual box card container. |
| **Education** | `education` | Right | Institution logo + name, degree (blue), date + location + grade, bullet highlights. Updated with real academic history (IET, REC Kannauj, St. Xavier's). |
| **Certificates** | `certificates` | Right | Cards with title (blue), issuer + date, "View ↗" link, skill tag pills. Placeholder ready. |
| **Contact** | `contact` | Right | Quick links (Email, LinkedIn, GitHub), then compact 3-field form (Name, Email, Message) with submit button. Submission simulated. |

---

## 3. State Management

### Global State — `ThemeContext` (UNCHANGED from original)

Located at `src/context/ThemeContext.jsx`. Wraps the app via `<ThemeProvider>` in `App.jsx`.

| Value | Type | Description |
|---|---|---|
| `theme` | `'light' \| 'dark'` | Current active theme string |
| `toggleTheme` | `() => void` | Switches light ↔ dark |
| `setTheme` | `(t) => void` | Explicitly sets theme; `'system'` reads `prefers-color-scheme` |

**Initialization priority:** localStorage → system `prefers-color-scheme` → `'light'`

**Consumption pattern (EVERY component uses this):**
```jsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // or '../../context/ThemeContext'

const { theme } = useContext(ThemeContext);
const color = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-900';
```

### Key Local States

| Component | State | Purpose |
|---|---|---|
| `App` | `currentPage` (string) | Tracks active section ID; passed to Navbar for active link highlighting |
| `Navbar` | `menuOpen` (boolean) | Controls mobile hamburger dropdown visibility |
| `Projects` | `open` per card (boolean) | Controls accordion expand/collapse per `ProjectCard` |
| `Contact` | `formData` `{ name, email, message }` | Controlled form inputs |
| `Contact` | `status` (string) | Displays submit feedback |

---

## 4. Design System & Styling (CRITICAL)

### Theme Color Tokens

| Token | Light Mode | Dark Mode |
|---|---|---|
| **Page background** | `bg-gray-100` | `bg-[#0f0f0e]` |
| **Card background** | `bg-white` | `bg-[#1a1a18]` |
| **Inner card / badge bg** | `bg-gray-50` | `bg-[#242420]` |
| **Border** | `border-gray-200` | `border-[#2a2a28]` |
| **Primary heading** | `text-gray-900` | `text-[#e8e6e1]` |
| **Section heading** | `text-gray-800` | `text-[#e8e6e1]` |
| **Body / meta text** | `text-gray-600` | `text-[#857f72]` |
| **Badge text** | `text-gray-700` | `text-[#c8c4bc]` |
| **Blue accent** | `text-[#179cf0]` | `text-[#5b9bd5]` |
| **Orange accent** | `text-orange-500` | `text-orange-400` |
| **Bullet dot** | `bg-[#179cf0]` | `bg-[#5b9bd5]` |
| **Orange banner bg** | `bg-orange-50 border-orange-200` | `bg-gradient-to-br from-[#2a2418] via-[#272318] to-[#242016] border-[#5c4a1e]` |
| **Orange banner text** | `text-gray-700` | `text-[#c4b07a]/90` |
| **Orange banner bar** | `bg-gradient-to-b from-orange-400/60 via-orange-300/30 to-transparent` | `bg-gradient-to-b from-[#d4bc7a]/60 via-[#d4bc7a]/30 to-transparent` |
| **Submit button** | `bg-[#179cf0] hover:bg-[#0f7fd4]` | `bg-orange-500 hover:bg-orange-600` |
| **Status ping dot** | `bg-[#179cf0]` | `bg-orange-500` |

### Navbar Glass Tokens

| State | Light | Dark |
|---|---|---|
| Background | `bg-white/70` | `bg-[#1a1a18]/80` |
| Border | `border-white/50` | `border-[#2a2a28]` |
| Shadow | `shadow-[inset_0_1.5px_0_rgba(255,255,255,0.75),0_1px_14px_rgba(0,0,0,0.05)]` | `shadow-[inset_0_1.5px_0_rgba(255,255,255,0.06),0_1px_18px_rgba(0,0,0,0.48)]` |
| Logo gradient | `from-[#179cf0] to-[#0f7fd4]` | `from-orange-500 to-amber-600` |
| Active nav link | `bg-blue-50 text-blue-600 border-blue-300` | `bg-[#2a2a28] text-[#e8e6e1] border-orange-500/40` |

### Section Heading Pattern (every section uses this)
```jsx
<h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 mb-3
  ${theme === 'dark' ? 'text-[#e8e6e1] border-[#2a2a28]' : 'text-gray-800 border-gray-200'}`}>
  Section Name
</h2>
```

### Bullet Point Pattern (About, Experience, Education use this)
```jsx
<li className="flex items-start gap-2">
  <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5
    ${theme === 'dark' ? 'bg-[#5b9bd5]' : 'bg-[#179cf0]'}`} />
  <span className={`text-xs leading-relaxed
    ${theme === 'dark' ? 'text-[#857f72]' : 'text-gray-600'}`}>
    Bullet text here
  </span>
</li>
```

### Accordion Card Pattern (Projects uses this)
- Collapsed: `border rounded-lg` card, header row with title + Live badge + GitHub button + chevron SVG
- Expanded: reveals `<ul>` bullet list + flex-wrap tech tag `<span>` pills
- Toggle: `useState(false)` per card, chevron rotates `rotate-180` when open.

### Orange Highlight Banner Pattern (About uses this)
```jsx
<div className={`text-xs p-4 rounded-xl border relative overflow-hidden ${bannerBg}`}>
  <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full ${accentBar}`} />
  <div className="space-y-2.5 pl-2">
    <p className={`leading-relaxed ${bannerText}`}>Content with <strong className={strongColor}>bold terms</strong></p>
  </div>
</div>
```

---

## 5. Skill Data (Ayush's Real Skills)

```js
const skillCategories = [
  { label: 'Languages',             skills: ['Python', 'JavaScript', 'C', 'SQL'] },
  { label: 'Machine Learning',      skills: ['Linear Regression','Logistic Regression','Decision Trees','Random Forest','SVM','Naive Bayes','KNN','K-Means','DBSCAN','PCA','XGBoost','AdaBoost','Gradient Boosting'] },
  { label: 'Deep Learning & CV',    skills: ['CNNs','EfficientNet','ResNet','Transformers','DETR','ViT','Transfer Learning','Fine-tuning'] },
  { label: 'Generative AI & NLP',   skills: ['RAG','LLMs','LangChain','LangGraph','Generative AI'] },
  { label: 'Frameworks & Libraries',skills: ['PyTorch','TensorFlow','Keras','Scikit-learn','OpenCV','NumPy','Pandas','Matplotlib','Seaborn','Flask','FastAPI','React.js'] },
  { label: 'Tools & MLOps',         skills: ['Git','Jupyter','Docker','Vector Databases','K-Fold CV','Grid Search','Random Search','Optuna'] },
];
```

---

## 6. Current Development State

### ✅ Done & Working

| Feature | Notes |
|---|---|
| **Design overhaul** | Full visual migration to princesinghai.com aesthetic: glassmorphism navbar, card layout, orange/blue token system, dashed dividers, compact typography |
| **Two-column grid layout** | `grid-cols-1 lg:grid-cols-3` — left col-span-2 (About + Experience + Projects), right col (Video Showcase, Skills, Education, Certificates, Contact) |
| **Video Showcase** | Responsive aspect-video placeholder container, styled for dark and light modes, indicating where the user will embed video. |
| **Navbar** | Glassmorphism pill, 8 nav links with colored dots, "Open to Work" pulse badge, Sun/Moon theme toggle, mobile hamburger dropdown with outside-click close |
| **Header** | Resume-style full-width header: name, title, animated badges (Open to Work + Interview Ready), tagline, email, phone number, LinkedIn/GitHub/X/Instagram socials |
| **About** | Orange highlight banner with left accent bar + 6 blue-dot bullet points (real Ayush content) |
| **Experience** | Left-column section, updated with real professional experiences & internships (IIT Roorkee, IET, Infosys Springboard, REC Kannauj, CDAC, Oasis Infobyte) |
| **Skills** | 6 categories, 46 real skills, no emojis, flex-wrap pills, colored dot category labels |
| **Projects** | Accordion expand/collapse cards with Live badge, GitHub button, bullets, tech tags. Relocated to left column below Experience. |
| **Education** | Right-column section, updated with real academic history (IET, REC Kannauj, St. Xavier's) |
| **Certificates** | Right-column section, updated with real credentials (OCI, Google Cloud Skills Boost, IIT Guwahati, LinkedIn Python assessment) |
| **Contact** | Right-column, compact form + quick links |
| **Inter font** | Loaded via Google Fonts `<link>` in `index.html` |
| **SEO** | `<title>`, `<meta name="description">` updated in `index.html` |
| **ThemeContext** | Unchanged from original — localStorage persistence, system preference, toggleTheme |
| **Video Showcase** | Beautiful visual placeholder box for future video embedding (responsive aspect-video, dashed borders, icon, light/dark themes). |

### 🚧 Placeholder / Needs Real Content

| Section | What's Missing |
|---|---|
| **Projects** | Real project entries (title, liveUrl, githubUrl, bullet descriptions, tech tags) |
| **Contact form** | Real email service (EmailJS / Formspree) — currently simulated with `setTimeout` |

---

## 7. Section IDs & Nav Links

| Section | `id` | Column | Navbar Label |
|---|---|---|---|
| Header / Home | `home` | Full-width | Home |
| About | `about` | Left | About |
| Experience | `experience` | Left | Experience |
| Projects | `projects` | Left | Projects |
| Skills | `skills` | Right | Skills |
| Education | `education` | Right | Education |
| Certificates | `certificates` | Right | Certificates |
| Contact | `contact` | Right | Contact |

---

## 8. Key File Paths

| File | Path |
|---|---|
| Entry point | `main/src/main.jsx` |
| Root component | `main/src/App.jsx` |
| Theme context | `main/src/context/ThemeContext.jsx` |
| Navbar | `main/src/components/Navbar.jsx` |
| Header (resume header) | `main/src/components/Header.jsx` |
| About | `main/src/components/About.jsx` |
| Experience | `main/src/components/Experience.jsx` |
| Projects | `main/src/components/Projects.jsx` |
| Skills | `main/src/components/Skills.jsx` |
| Education | `main/src/components/Education.jsx` |
| Certificates | `main/src/components/Certificates.jsx` |
| Contact | `main/src/components/Contact.jsx` |
| Global CSS | `main/src/index.css` |
| HTML entry | `main/index.html` |
| Vite config | `main/vite.config.js` |
| Package config | `main/package.json` |
| Favicon | `main/public/favicon.png` |
| Context file | `main/src/context/ThemeContext.jsx` |

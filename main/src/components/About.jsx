import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Reusable section heading ─────────────────────────────── */
const SectionHeading = ({ children, theme }) => {
  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-800';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  return (
    <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 mb-3 ${headingColor} ${divider}`}>
      {children}
    </h2>
  );
};

/* ── About section ────────────────────────────────────────── */
const About = () => {
  const { theme } = useContext(ThemeContext);

  const strongColor = theme === 'dark' ? 'text-[#c4b07a]' : 'text-gray-800';
  const bannerText  = theme === 'dark' ? 'text-[#c4b07a]/90' : 'text-gray-700';
  const bannerBg    = theme === 'dark'
    ? 'bg-gradient-to-br from-[#2a2418] via-[#272318] to-[#242016] border-[#5c4a1e] shadow-[inset_0_1px_0_rgba(212,188,122,0.06),0_1px_3px_rgba(0,0,0,0.3)]'
    : 'bg-orange-50 border-orange-200';
  const accentBar   = theme === 'dark'
    ? 'bg-gradient-to-b from-[#d4bc7a]/60 via-[#d4bc7a]/30 to-transparent'
    : 'bg-gradient-to-b from-orange-400/60 via-orange-300/30 to-transparent';

  const bentoCardBg = theme === 'dark'
    ? 'bg-[#242420]/30 border-[#2a2a28] hover:border-orange-500/40 hover:shadow-md hover:shadow-black/20'
    : 'bg-white/50 border-gray-200 hover:border-blue-300 hover:shadow-md hover:shadow-gray-200/50';

  const cardTitle     = theme === 'dark' ? 'text-[#e8e6e1]' : 'text-gray-800';
  const cardBody      = theme === 'dark' ? 'text-[#857f72]' : 'text-gray-600';
  const cardHighlight = theme === 'dark' ? 'text-[#c4b07a]' : 'text-gray-900';

  return (
    <section id="about" className="scroll-mt-20 space-y-4">
      <SectionHeading theme={theme}>About</SectionHeading>

      {/* Highlight banner */}
      <div className={`text-xs p-4 rounded-xl border relative overflow-hidden ${bannerBg}`}>
        <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full ${accentBar}`} />
        <div className="space-y-2.5 pl-2">
          <p className={`leading-relaxed ${bannerText}`}>
            I'm an <strong className={strongColor}>ML Engineer &amp; Python Expert</strong> with dual capability in <strong className={strongColor}>data engineering</strong> and <strong className={strongColor}>full-stack AI development</strong>, with hands-on experience building <strong className={strongColor}>end-to-end AI/ML systems</strong> — from classical machine learning to production-grade{' '}
            <strong className={strongColor}>Deep Learning pipelines</strong>,{' '}
            <strong className={strongColor}>Computer Vision</strong> applications, and{' '}
            <strong className={strongColor}>Generative AI</strong> solutions.
          </p>
          <p className={`leading-relaxed ${bannerText}`}>
            I specialize in <strong className={strongColor}>CNNs</strong> (EfficientNet, ResNet),
            {' '}<strong className={strongColor}>Transformers</strong> (DETR, ViT), and{' '}
            <strong className={strongColor}>RAG pipelines</strong> using LangChain, LangGraph, and
            Vector Databases. I take projects from research ideation all the way to{' '}
            <strong className={strongColor}>production deployment</strong>.
          </p>
          <p className={`leading-relaxed ${bannerText}`}>
            Beyond core ML, I build <strong className={strongColor}>FastAPI &amp; Flask</strong> backends
            and <strong className={strongColor}>React.js</strong> frontends, applying best practices in
            {' '}<strong className={strongColor}>MLOps</strong>: K-Fold CV, Optuna hyperparameter tuning,
            Docker, and Git-based workflows. I am also actively working toward becoming a <strong className={strongColor}>Kaggle Notebook Expert</strong>.
          </p>
        </div>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Card 1: Python & Core ML Frameworks (Spans 2 cols) */}
        <div className={`md:col-span-2 lg:col-span-2 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>Python Expert &amp; ML Core</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            Deep mastery of Python and leading ML/DL frameworks — <strong className={cardHighlight}>PyTorch</strong>, <strong className={cardHighlight}>TensorFlow</strong>, <strong className={cardHighlight}>Keras</strong>, <strong className={cardHighlight}>Scikit-learn</strong>, <strong className={cardHighlight}>OpenCV</strong>, <strong className={cardHighlight}>NumPy</strong>, and <strong className={cardHighlight}>Pandas</strong>.
          </p>
        </div>

        {/* Card 2: Deep Learning & Computer Vision */}
        <div className={`md:col-span-1 lg:col-span-1 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>Deep Learning &amp; CV</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            Built and fine-tuned <strong className={cardHighlight}>CNNs</strong> (EfficientNet, ResNet) and <strong className={cardHighlight}>Transformers</strong> (DETR, ViT) for object detection and image classification.
          </p>
        </div>

        {/* Card 3: RAG & Agentic Systems */}
        <div className={`md:col-span-1 lg:col-span-1 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>RAG &amp; Agentic AI</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            Designed production <strong className={cardHighlight}>RAG pipelines</strong> using LangChain, LangGraph, and Vector DBs for intelligent document retrieval and semantic search.
          </p>
        </div>

        {/* Card 4: Classical Machine Learning */}
        <div className={`md:col-span-1 lg:col-span-1 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>Classical ML Engineering</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            End-to-end implementation of regression, decision trees, ensembles (<strong className={cardHighlight}>XGBoost</strong>, AdaBoost), SVMs, clustering, and PCA.
          </p>
        </div>

        {/* Card 5: MLOps Practices */}
        <div className={`md:col-span-1 lg:col-span-1 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>MLOps &amp; Engineering</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            Strong MLOps standards — K-Fold CV, Optuna hyperparameter tuning, <strong className={cardHighlight}>Docker</strong> containerization, and Git workflows.
          </p>
        </div>

        {/* Card 6: Full-Stack AI & Data Engineering */}
        <div className={`md:col-span-2 lg:col-span-3 p-3.5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm ${bentoCardBg}`}>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <h3 className={`text-xs font-semibold ${cardTitle}`}>Full-Stack AI &amp; Data Engineering</h3>
          </div>
          <p className={`text-xs leading-relaxed ${cardBody}`}>
            Dual capability bridging <strong className={cardHighlight}>FastAPI &amp; Flask</strong> backends with <strong className={cardHighlight}>React.js</strong> frontends and automated data pipelines for scalable AI product development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

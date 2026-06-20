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

/* ── Bullet point item ────────────────────────────────────── */
const BulletItem = ({ children, theme }) => {
  const dotColor  = theme === 'dark' ? 'bg-[#5b9bd5]' : 'bg-[#179cf0]';
  const textColor = theme === 'dark' ? 'text-[#857f72]' : 'text-gray-600';
  return (
    <li className="flex items-start gap-2">
      <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
      <span className={`text-xs leading-relaxed ${textColor}`}>{children}</span>
    </li>
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

  return (
    <section id="about" className="scroll-mt-20 space-y-3">
      <SectionHeading theme={theme}>About</SectionHeading>

      {/* Highlight banner */}
      <div className={`text-xs p-4 rounded-xl border relative overflow-hidden ${bannerBg}`}>
        <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full ${accentBar}`} />
        <div className="space-y-2.5 pl-2">
          <p className={`leading-relaxed ${bannerText}`}>
            I'm an <strong className={strongColor}>ML Engineer &amp; Python Expert</strong> with
            hands-on experience building <strong className={strongColor}>end-to-end AI/ML systems</strong> —
            from classical machine learning to production-grade{' '}
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
            Docker, and Git-based workflows.
          </p>
        </div>
      </div>

      {/* Detailed bio bullets */}
      <ul className="space-y-1.5">
        <BulletItem theme={theme}>
          <strong>Python Expert</strong> with deep knowledge of ML/DL frameworks — PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, NumPy, Pandas.
        </BulletItem>
        <BulletItem theme={theme}>
          Built and fine-tuned <strong>CNN architectures</strong> (EfficientNet, ResNet) and <strong>Transformer models</strong> (DETR, ViT) for real-world Computer Vision tasks including object detection and image classification.
        </BulletItem>
        <BulletItem theme={theme}>
          Designed <strong>RAG pipelines</strong> using LangChain, LangGraph, and Vector Databases for intelligent document retrieval, semantic search, and context-aware QA systems.
        </BulletItem>
        <BulletItem theme={theme}>
          Applied classical ML algorithms end-to-end: Linear/Logistic Regression, Decision Trees, Random Forest, XGBoost, AdaBoost, Gradient Boosting, SVM, K-Means, DBSCAN, PCA.
        </BulletItem>
        <BulletItem theme={theme}>
          Strong MLOps practices — K-Fold CV, Grid/Random Search, Optuna hyperparameter tuning, Docker containerization, Git workflows, and experiment tracking.
        </BulletItem>
        <BulletItem theme={theme}>
          Full-stack capable: <strong>FastAPI &amp; Flask</strong> backends paired with <strong>React.js</strong> frontends for end-to-end AI-powered product development.
        </BulletItem>
      </ul>
    </section>
  );
};

export default About;

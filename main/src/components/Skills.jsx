import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const skillCategories = [
  { label: 'Languages',    color: 'text-blue-500',   skills: ['Python', 'JavaScript', 'C', 'SQL'] },
  { label: 'Machine Learning', color: 'text-violet-500',
    skills: ['Linear Regression','Logistic Regression','Decision Trees','Random Forest','SVM','Naive Bayes','KNN','K-Means','DBSCAN','PCA','XGBoost','AdaBoost','Gradient Boosting'] },
  { label: 'Deep Learning & CV', color: 'text-orange-500',
    skills: ['CNNs','EfficientNet','ResNet','Transformers','DETR','ViT','Transfer Learning','Fine-tuning'] },
  { label: 'Generative AI & NLP', color: 'text-emerald-500',
    skills: ['RAG','LLMs','LangChain','LangGraph','Generative AI'] },
  { label: 'Frameworks & Libraries', color: 'text-rose-500',
    skills: ['PyTorch','TensorFlow','Keras','Scikit-learn','OpenCV','NumPy','Pandas','Matplotlib','Seaborn','Flask','FastAPI','React.js'] },
  { label: 'Tools & MLOps', color: 'text-cyan-500',
    skills: ['Git','Jupyter','Docker','Vector Databases','K-Fold CV','Grid Search','Random Search','Optuna'] },
];

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor  = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const divider       = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  const catLabelColor = theme === 'dark' ? 'text-[#857f72]'   : 'text-gray-500';
  const badgeBg       = theme === 'dark'
    ? 'bg-[#1a1a18] border-[#2a2a28] text-[#c8c4bc] hover:border-orange-500/40 hover:text-[#e8e6e1]'
    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:text-gray-900';
  const boxBgBorder   = theme === 'dark'
    ? 'bg-[#242420]/30 border-[#2a2a28]'
    : 'bg-gray-50/50 border-gray-200';

  const getIcon = (label, colorClass) => {
    switch (label) {
      case 'Languages':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        );
      case 'Machine Learning':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="5" cy="12" r="2.5" />
            <circle cx="19" cy="12" r="2.5" />
            <circle cx="12" cy="19" r="2.5" />
            <line x1="12" y1="7.5" x2="12" y2="16.5" />
            <line x1="7" y1="10.5" x2="10" y2="7.5" />
            <line x1="17" y1="10.5" x2="14" y2="7.5" />
            <line x1="7" y1="13.5" x2="10" y2="16.5" />
            <line x1="17" y1="13.5" x2="14" y2="16.5" />
          </svg>
        );
      case 'Deep Learning & CV':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'Generative AI & NLP':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15.087 8.187 14.27 9 9l.813 5.27 5.096.817-5.096.817zM19.071 4.929l-.429 2.686-2.687.43 2.687.43.429 2.686.43-2.686 2.686-.43-2.686-.43-.43-2.686zM6.5 1.5l-.25 1.563-1.562.25 1.562.25.25 1.563.25-1.563 1.563-.25-1.563-.25-.25-1.563z" />
          </svg>
        );
      case 'Frameworks & Libraries':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        );
      case 'Tools & MLOps':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return <span className={`text-[8px] ${colorClass}`}>&#9679;</span>;
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 space-y-4">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Tech Stack
      </h2>

      <div className="flex flex-col gap-3">
        {skillCategories.map((cat) => (
          <div key={cat.label} className={`border rounded-xl p-3.5 transition-all ${boxBgBorder}`}>
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-1.5 ${catLabelColor}`}>
              {getIcon(cat.label, cat.color)}
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[11px] font-medium transition-all duration-150 cursor-default ${badgeBg}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

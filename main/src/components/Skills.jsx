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
  const catLabelColor = theme === 'dark' ? 'text-[#857f72]'   : 'text-gray-400';
  const badgeBg       = theme === 'dark'
    ? 'bg-[#242420] border-[#2a2a28] text-[#c8c4bc] hover:border-orange-500/40 hover:text-[#e8e6e1]'
    : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-gray-900';

  return (
    <section id="skills" className="scroll-mt-20 space-y-4">
      <h2 className={`text-base font-semibold border-b-2 border-dashed pb-2 ${headingColor} ${divider}`}>
        Tech Stack
      </h2>

      <div className="flex flex-col gap-4">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <p className={`text-[10px] font-semibold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 ${catLabelColor}`}>
              <span className={`text-[8px] ${cat.color}`}>&#9679;</span>
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

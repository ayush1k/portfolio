import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const skillCategories = [
  {
    label: 'Core AI & Deep Learning',
    color: 'text-blue-500',
    skills: [
      'PyTorch',
      'TensorFlow',
      'CNNs',
      'Transformers',
      'Transfer Learning',
      'k-Nearest Neighbor',
      'Random Forest',
      'Logistic Regression',
      'Decision Trees',
      'Support Vector Machines',
    ],
  },
  {
    label: 'GenAI & LLMs',
    color: 'text-emerald-500',
    skills: [
      'RAG Pipelines',
      'LangGraph',
      'GLM 4.7 (Nvidia NIM API)',
      'Gemini CLI',
      'Vector Databases',
    ],
  },
  {
    label: 'Web & Full-Stack',
    color: 'text-violet-500',
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'React JS',
      'Next JS',
      'Node JS',
      'Express JS',
      'Framer Motion',
    ],
  },
  {
    label: 'Engineering & Tools',
    color: 'text-orange-500',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Notion',
      'Figma',
      'Google Colab',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor  = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-800';
  const divider       = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  const catLabelColor = theme === 'dark' ? 'text-[#857f72]'   : 'text-gray-500';
  const badgeBg       = theme === 'dark'
    ? 'bg-[#1a1a18] border-[#2a2a28] text-[#c8c4bc] font-mono hover:border-orange-500/50 hover:text-[#e8e6e1] hover:-translate-y-0.5 hover:shadow-sm hover:shadow-orange-500/10'
    : 'bg-white border-gray-200 text-gray-700 font-mono hover:border-blue-400 hover:text-gray-900 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-blue-500/10';
  const boxBgBorder   = theme === 'dark'
    ? 'bg-[#242420]/30 border-[#2a2a28] hover:border-orange-500/30 hover:shadow-md hover:shadow-black/20 hover:scale-[1.01]'
    : 'bg-gray-50/50 border-gray-200 hover:border-blue-300/60 hover:shadow-md hover:shadow-gray-200/50 hover:scale-[1.01]';

  const getIcon = (label, colorClass) => {
    switch (label) {
      case 'Core AI & Deep Learning':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'GenAI & LLMs':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3.096 15.087 8.187 14.27 9 9l.813 5.27 5.096.817-5.096.817zM19.071 4.929l-.429 2.686-2.687.43 2.687.43.429 2.686.43-2.686 2.686-.43-2.686-.43-.43-2.686zM6.5 1.5l-.25 1.563-1.562.25 1.562.25.25 1.563.25-1.563 1.563-.25-1.563-.25-.25-1.563z" />
          </svg>
        );
      case 'Web & Full-Stack':
        return (
          <svg className={`w-3.5 h-3.5 ${colorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        );
      case 'Engineering & Tools':
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

      <motion.div
        className="flex flex-col gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={cardVariants}
            className={`border rounded-xl p-3.5 transition-all duration-300 ${boxBgBorder}`}
          >
            <p className={`text-[10px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-1.5 ${catLabelColor}`}>
              {getIcon(cat.label, cat.color)}
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[11px] font-medium transition-all duration-300 cursor-default ${badgeBg}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;


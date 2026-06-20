import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

/* ── Project data — fill with your real projects ── */
const projectsData = [
  {
    id: 1,
    title: '[Project Name]',
    liveUrl: '#',
    githubUrl: '#',
    bullets: [
      'Describe what this project does and the problem it solves.',
      'Mention the core architecture, models, or algorithms used.',
      'Include measurable results (accuracy, latency, users, etc.).',
    ],
    technologies: ['Python', 'PyTorch', 'FastAPI'],
  },
  {
    id: 2,
    title: '[Project Name]',
    liveUrl: '',
    githubUrl: '#',
    bullets: [
      'Describe what this project does and the problem it solves.',
      'Mention the core architecture, models, or algorithms used.',
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
  },
  {
    id: 3,
    title: '[Project Name]',
    liveUrl: '',
    githubUrl: '#',
    bullets: [
      'Describe what this project does and the problem it solves.',
      'Mention the core architecture, models, or algorithms used.',
    ],
    technologies: ['LangChain', 'RAG', 'FastAPI', 'React.js'],
  },
];

/* ── Expandable project card (accordion) ── */
const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const cardBorder  = theme === 'dark' ? 'border-[#2a2a28]'  : 'border-gray-200';
  const titleColor  = theme === 'dark' ? 'text-[#5b9bd5]'    : 'text-[#179cf0]';
  const chevronColor= theme === 'dark' ? 'text-[#857f72]'    : 'text-gray-500';
  const bulletText  = theme === 'dark' ? 'text-[#857f72]'    : 'text-gray-600';
  const dotColor    = theme === 'dark' ? 'bg-[#5b9bd5]'      : 'bg-[#179cf0]';
  const techBadge   = theme === 'dark' ? 'bg-[#242420] border-[#2a2a28] text-[#857f72]' : 'bg-gray-50 border-gray-200 text-gray-600';
  const hoverRow    = theme === 'dark' ? 'hover:bg-[#1f1f1c]' : 'hover:bg-gray-50';

  return (
    <div className={`border rounded-lg overflow-hidden transition-all hover:shadow-sm ${cardBorder}`}>
      {/* Header row — always visible */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full flex justify-between items-center text-left p-3 cursor-pointer transition-colors ${hoverRow}`}
      >
        <div className="flex items-center gap-2 min-w-0">
          {/* Dot avatar */}
          <span className={`w-4 h-4 rounded-full flex-shrink-0 ${theme === 'dark' ? 'bg-[#2a2a28]' : 'bg-gray-200'}`} />
          <h3 className={`font-medium text-xs truncate ${titleColor}`}>{project.title}</h3>
          {project.liveUrl && project.liveUrl !== '#' && project.liveUrl !== '' && (
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
        <div className="px-4 pb-4">
          {/* Bullets */}
          <ul className="space-y-1.5 mb-3">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`w-1 h-1 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                <span className={`text-xs leading-relaxed ${bulletText}`}>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] border font-medium ${techBadge}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ── Projects section (right column) ── */
const Projects = () => {
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
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

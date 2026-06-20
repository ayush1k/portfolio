import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor   = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-900';
  const subColor       = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';
  const bodyColor      = theme === 'dark' ? 'text-[#a09880]'  : 'text-gray-600';
  const accentColor    = theme === 'dark' ? 'text-orange-400' : 'text-[#179cf0]';
  const divider        = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  const badgeBlueBg    = theme === 'dark' ? 'bg-orange-500/10 border-orange-500/40 text-orange-400' : 'bg-blue-50 border-blue-200 text-[#179cf0]';
  const badgeGreenBg   = theme === 'dark' ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700';
  const linkColor      = theme === 'dark' ? 'text-[#857f72] hover:text-[#e8e6e1]' : 'text-gray-500 hover:text-gray-800';

  return (
    <section id="home" className="mb-6">
      {/* Header: name + badges + subtitle */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        {/* Left: name, title, badges, bio */}
        <div className="space-y-2 flex-1">
          {/* Name + title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <h1 className={`text-xl font-bold flex items-center gap-1.5 ${headingColor}`}>
              Ayush Kumar
              <span className={accentColor}>| ML Engineer</span>
            </h1>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap gap-1.5">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${badgeBlueBg}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme === 'dark' ? 'bg-orange-400' : 'bg-[#179cf0]'}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'dark' ? 'bg-orange-500' : 'bg-[#179cf0]'}`} />
              </span>
              Open to Work
            </div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${badgeGreenBg}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Interview Ready
            </div>
          </div>

          {/* Subtitle */}
          <p className={`text-xs leading-relaxed max-w-2xl ${bodyColor}`}>
            Python Expert · Machine Learning · Deep Learning · Computer Vision · Generative AI & NLP ·
            RAG Pipelines · LLMs · LangChain · PyTorch · TensorFlow · FastAPI · React.js
          </p>

          {/* Blue highlight line */}
          <p className={`text-xs font-bold leading-relaxed ${accentColor}`}>
            AI/ML Engineer · Full-Stack Development · Python Expert · Research-to-Production
          </p>
        </div>

        {/* Right: contact info + social icons */}
        <div className={`flex flex-col space-y-2 text-xs shrink-0 ${subColor}`}>
          <a
            href="mailto:ayushkumar47834@gmail.com"
            className={`flex items-center gap-2 transition-colors ${linkColor}`}
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ayushkumar47834@gmail.com
          </a>

          {/* Social icons row */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="https://www.linkedin.com/in/ayushhhhhh/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2] transition-colors duration-200" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/ayush1k" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className={`transition-colors duration-200 ${theme === 'dark' ? 'text-[#e8e6e1]' : 'text-[#334155]'}`} height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://x.com/http_ayush" target="_blank" rel="noopener noreferrer" title="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill={theme === 'dark' ? '#e8e6e1' : '#000000'} xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2H21.552L14.328 10.276L22.824 22H16.18L11.036 14.964L4.884 22H1.576L9.3 13.164L1.176 2H7.984L12.624 8.364L18.244 2Z" />
              </svg>
            </a>
            <a href="https://instagram.com/http_ayush" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C] transition-colors duration-200" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Dashed divider */}
      <div className={`border-b-2 border-dashed ${divider}`} />
    </section>
  );
};

export default Home;

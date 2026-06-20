import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headingColor = theme === 'dark' ? 'text-[#e8e6e1]'  : 'text-gray-900';
  const subColor     = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-500';
  const bodyColor    = theme === 'dark' ? 'text-[#857f72]'  : 'text-gray-600';
  const accentBlue   = theme === 'dark' ? 'text-[#5b9bd5]'  : 'text-[#179cf0]';
  const accentBold   = theme === 'dark' ? 'text-orange-400' : 'text-[#179cf0]';
  const divider      = theme === 'dark' ? 'border-[#2a2a28]' : 'border-gray-200';
  const linkHover    = theme === 'dark' ? 'hover:text-[#e8e6e1]' : 'hover:text-gray-800';

  const badgeBlue    = theme === 'dark'
    ? 'bg-orange-500/10 border-orange-500/40 text-orange-400'
    : 'bg-blue-50 border-blue-200 text-[#179cf0]';
  const badgeGreen   = theme === 'dark'
    ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-400'
    : 'bg-emerald-50 border-emerald-200 text-emerald-700';

  const pingBlue  = theme === 'dark' ? 'bg-orange-500' : 'bg-[#179cf0]';
  const pingGreen = 'bg-emerald-500';

  return (
    <header id="home" className={`border-b pb-4 mb-0 ${divider}`}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">

        {/* ── LEFT: name, title, badges, subtitles ── */}
        <div className="space-y-2 flex-1 min-w-0">

          {/* Name + title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 flex-wrap">
            <h1 className={`text-xl font-bold flex items-center gap-1.5 flex-wrap ${headingColor}`}>
              <span>Ayush Kumar</span>
              <span className={accentBold}>| ML Engineer</span>
            </h1>
          </div>

          {/* Status badges */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${badgeBlue}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingBlue}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${pingBlue}`} />
              </span>
              Open to Work
            </div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium ${badgeGreen}`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pingGreen}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${pingGreen}`} />
              </span>
              Interview Ready
            </div>
          </div>

          {/* Headline / tagline */}
          <h2 className={`text-xs leading-relaxed max-w-2xl mt-1 ${subColor}`}>
            ML Engineer &amp; Python Expert | Deep Learning · Computer Vision · Generative AI &amp; NLP |
            RAG Pipelines · LLMs · LangChain · LangGraph | PyTorch · TensorFlow · Scikit-learn |
            FastAPI · React.js | Open to Research &amp; Production Roles
          </h2>

          {/* Blue accent line */}
          <p className={`text-xs font-bold leading-relaxed ${accentBlue}`}>
            Python · ML · Deep Learning · Computer Vision · Generative AI · Full-Stack
          </p>
        </div>

        {/* ── RIGHT: contact info + socials ── */}
        <div className={`flex flex-col space-y-2 text-xs shrink-0 ${bodyColor}`}>
          <a href="mailto:ayushkumar47834@gmail.com"
            className={`flex items-center gap-2 transition-colors ${linkHover}`}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
              strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0" height="14" width="14">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ayushkumar47834@gmail.com
          </a>

          <a href="tel:+918318530390"
            className={`flex items-center gap-2 transition-colors ${linkHover}`}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
              strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0" height="14" width="14">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91-8318530390
          </a>

          {/* Social icons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="https://www.linkedin.com/in/ayushhhhhh/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2]" height="16" width="16">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://github.com/ayush1k" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                strokeLinecap="round" strokeLinejoin="round"
                className={theme === 'dark' ? 'text-[#e8e6e1]' : 'text-[#334155]'} height="16" width="16">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="https://x.com/http_ayush" target="_blank" rel="noopener noreferrer" title="X">
              <svg width="16" height="16" viewBox="0 0 24 24"
                fill={theme === 'dark' ? '#e8e6e1' : '#000000'}>
                <path d="M18.244 2H21.552L14.328 10.276L22.824 22H16.18L11.036 14.964L4.884 22H1.576L9.3 13.164L1.176 2H7.984L12.624 8.364L18.244 2Z" />
              </svg>
            </a>
            <a href="https://instagram.com/http_ayush" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
                strokeLinecap="round" strokeLinejoin="round" className="text-[#E1306C]" height="16" width="16">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;

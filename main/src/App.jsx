import React, { useState, useContext } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

const AppInner = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(sectionId);
  };

  const pageBg  = theme === 'dark' ? 'bg-[#0f0f0e]'  : 'bg-gray-100';
  const cardBg  = theme === 'dark' ? 'bg-[#1a1a18] border-[#2a2a28]' : 'bg-white border-gray-200';

  return (
    <div className={`min-h-screen antialiased ${pageBg}`}>
      <Navbar setCurrentPage={scrollToSection} currentPage={currentPage} />

      {/* Outer page centering */}
      <div className="flex justify-center min-h-screen py-4 px-2 lg:py-10">
        <div className={`w-full max-w-6xl border rounded-2xl mt-14 lg:mt-16 ${cardBg}`}>

          {/* ── Header (full-width) ── */}
          <div className="p-4 md:p-5 lg:p-5">
            <Header />
          </div>

          {/* ── Two-column main layout ── */}
          <div className="px-4 pb-4 md:px-5 md:pb-5 lg:px-5 lg:pb-5 space-y-6">
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

              {/* LEFT col — 2/3 */}
              <div className="space-y-6 lg:col-span-2">
                <About />
                <Experience />
              </div>

              {/* RIGHT col — 1/3 */}
              <div className="space-y-6">
                {/* Visual placeholder for future video element */}
                <div 
                  className={`aspect-video rounded-xl border-2 border-dashed flex flex-col items-center justify-center p-4 text-center transition-colors ${
                    theme === 'dark' 
                      ? 'border-[#2a2a28] bg-[#1a1a18]/40 text-[#857f72]' 
                      : 'border-gray-300 bg-gray-50/50 text-gray-500'
                  }`}
                >
                  <svg 
                    className="w-8 h-8 mb-2 opacity-60" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs font-medium font-sans">Video Showcase</span>
                  <span className="text-[10px] opacity-75 mt-1 font-sans">Ready to embed your video here</span>
                </div>
                <Skills />
                <Education />
                <Certificates />
                <Contact />
              </div>

            </main>

            <Projects />
            <GithubStats />
          </div>

        </div>
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppInner />
  </ThemeProvider>
);

export default App;
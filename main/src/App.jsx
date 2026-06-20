import React, { useState, useContext } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
          <div className="px-4 pb-4 md:px-5 md:pb-5 lg:px-5 lg:pb-5">
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

              {/* LEFT col — 2/3 */}
              <div className="space-y-6 lg:col-span-2">
                <About />
                <Experience />
              </div>

              {/* RIGHT col — 1/3 */}
              <div className="space-y-6">
                <Projects />
                <Skills />
                <Education />
                <Certificates />
                <Contact />
              </div>

            </main>
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
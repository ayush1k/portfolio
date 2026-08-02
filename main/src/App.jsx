import React, { useState, useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
import ChatbotWidget from './components/ChatbotWidget';
import ChatbotPage, { getBackendUrl } from './components/ChatbotPage';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const AppInner = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState('home');
  const isManualScrollingRef = useRef(false);
  const manualScrollTimerRef = useRef(null);

  useEffect(() => {
    // Non-blocking wake up call to the backend on initial load
    const wakeUpBackend = async () => {
      try {
        const url = getBackendUrl();
        await fetch(`${url}/health`, { method: 'GET', mode: 'cors' });
      } catch (err) {
        console.log('Pre-warming backend ping:', err.message);
      }
    };
    wakeUpBackend();
  }, []);

  // IntersectionObserver scrollSpy to track active section dynamically
  useEffect(() => {
    if (currentPage === 'chatbot') return;

    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certificates', 'contact'];
    
    // Small timeout ensures DOM elements are rendered before attaching observer
    const timer = setTimeout(() => {
      const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      if (elements.length === 0) return;

      const observerCallback = (entries) => {
        if (isManualScrollingRef.current) return;

        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topVisible = visibleEntries[0];
          if (topVisible && topVisible.target.id) {
            setCurrentPage(topVisible.target.id);
          }
        }
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '-15% 0px -45% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7],
      });

      elements.forEach(el => observer.observe(el));

      return () => {
        elements.forEach(el => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage === 'chatbot']);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'chatbot') {
      setCurrentPage('chatbot');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(sectionId);

    // Suppress scrollSpy during smooth scroll navigation
    isManualScrollingRef.current = true;
    if (manualScrollTimerRef.current) {
      clearTimeout(manualScrollTimerRef.current);
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);

    manualScrollTimerRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 900);
  };

  const pageBg  = theme === 'dark' ? 'bg-[#0f0f0e]'  : 'bg-gray-100';
  const cardBg  = theme === 'dark'
    ? 'bg-[#1a1a18] border-[#2a2a28]/40 shadow-2xl shadow-black/50 shadow-inner'
    : 'bg-white border-gray-200/60 shadow-2xl shadow-black/5 shadow-inner';

  return (
    <div className={`min-h-screen antialiased ${pageBg}`}>
      <Navbar setCurrentPage={scrollToSection} currentPage={currentPage} />

      {currentPage === 'chatbot' ? (
        <ChatbotPage onBackToPortfolio={() => scrollToSection('home')} />
      ) : (
        /* Outer page centering */
        <div className="flex justify-center min-h-screen py-4 px-2 lg:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`w-full max-w-6xl border rounded-2xl mt-14 lg:mt-16 overflow-hidden ${cardBg}`}
          >

            {/* ── Header (full-width) ── */}
            <motion.div variants={itemVariants} className="p-4 md:p-5 lg:p-5">
              <Header />
            </motion.div>

            {/* ── Two-column main layout ── */}
            <div className="px-4 pb-4 md:px-5 md:pb-5 lg:px-5 lg:pb-5 space-y-6">
              <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* LEFT col — 2/3 */}
                <motion.div variants={itemVariants} className="space-y-6 lg:col-span-2">
                  <About />
                  <Experience />
                </motion.div>

                {/* RIGHT col — 1/3 */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Embedded video showcase */}
                  <div 
                    className={`aspect-video rounded-xl overflow-hidden border flex items-center justify-center transition-colors ${
                      theme === 'dark' 
                        ? 'border-[#2a2a28] bg-[#1a1a18]/40' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/17fMWKVvcSg?autoplay=1&mute=1&loop=1&playlist=17fMWKVvcSg"
                      title="Project Showcase Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full border-0"
                    />
                  </div>
                  <Skills />
                  <Education />
                  <Certificates />
                  <Contact />
                </motion.div>

              </main>

              <motion.div variants={itemVariants}>
                <Projects onOpenChatbot={() => scrollToSection('chatbot')} />
              </motion.div>

              <motion.div variants={itemVariants}>
                <GithubStats />
              </motion.div>
            </div>

          </motion.div>
        </div>
      )}

      {/* Floating chatbot widget */}
      <ChatbotWidget 
        onClick={() => scrollToSection('chatbot')} 
        isChatActive={currentPage === 'chatbot'} 
      />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppInner />
  </ThemeProvider>
);

export default App;
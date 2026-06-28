import React, { useState, useContext, useEffect } from 'react';
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
import ragBasedAiTwinVideo from './assets/rag-based-ai-twin.mp4';
import ChatbotWidget from './components/ChatbotWidget';
import ChatbotPage, { getBackendUrl } from './components/ChatbotPage';

const AppInner = () => {
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState('home');

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

  const scrollToSection = (sectionId) => {
    if (sectionId === 'chatbot') {
      setCurrentPage('chatbot');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(sectionId);
    
    // Delay slightly if navigating away from chatbot page to allow DOM to render sections
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const pageBg  = theme === 'dark' ? 'bg-[#0f0f0e]'  : 'bg-gray-100';
  const cardBg  = theme === 'dark' ? 'bg-[#1a1a18] border-[#2a2a28]' : 'bg-white border-gray-200';

  return (
    <div className={`min-h-screen antialiased ${pageBg}`}>
      <Navbar setCurrentPage={scrollToSection} currentPage={currentPage} />

      {currentPage === 'chatbot' ? (
        <ChatbotPage onBackToPortfolio={() => scrollToSection('home')} />
      ) : (
        /* Outer page centering */
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
                  {/* Embedded video showcase */}
                  <div 
                    className={`aspect-video rounded-xl overflow-hidden border flex items-center justify-center transition-colors ${
                      theme === 'dark' 
                        ? 'border-[#2a2a28] bg-[#1a1a18]/40' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <video 
                      src={ragBasedAiTwinVideo} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Skills />
                  <Education />
                  <Certificates />
                  <Contact />
                </div>

              </main>

              <Projects onOpenChatbot={() => scrollToSection('chatbot')} />
              <GithubStats />
            </div>

          </div>
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
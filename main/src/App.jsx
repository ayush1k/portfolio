import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'; // Import Skills component
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentPage(sectionId); // Update current page state
  };

  return (
    <ThemeProvider>
      <div className="font-inter antialiased">
        <Navbar setCurrentPage={scrollToSection} />
        <main>
          <Home />
          <About />
          <Skills /> {/* Render Skills component here, after About */}
          {/* Placeholder for other pages */}
          {currentPage === 'projects' && <div className="min-h-screen pt-24 flex items-center justify-center">Projects Section Content</div>}
          {currentPage === 'contact' && <div className="min-h-screen pt-24 flex items-center justify-center">Contact Section Content</div>}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

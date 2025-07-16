    import React, { useState } from 'react';
    import Navbar from './components/Navbar';
    import Home from './components/Home';
    import About from './components/About';
    import Skills from './components/Skills';
    import Projects from './components/Projects'; // Import Projects component
    import Contact from './components/Contact';   // Import Contact component
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
            {/* Pass scrollToSection to Navbar */}
            <Navbar setCurrentPage={scrollToSection} />
            <main>
              <Home />
              <About />
              <Skills />
              <Projects /> {/* Render Projects component here */}
              <Contact /> {/* Render Contact component here */}
            </main>
          </div>
        </ThemeProvider>
      );
    };

    export default App;
    
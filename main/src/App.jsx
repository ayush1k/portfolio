import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ThemeProvider } from './context/ThemeContext'; // Import ThemeProvider

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <ThemeProvider>
      <div className="font-inter antialiased">
        <Navbar setCurrentPage={setCurrentPage} />
        <main>
          {/* Only Home component is rendered for now */}
          {currentPage === 'home' && <Home />}
          {/* Placeholder for other pages, not rendered in this step */}
          {currentPage === 'about' && <div className="min-h-screen pt-24 flex items-center justify-center">About Section Content</div>}
          {currentPage === 'projects' && <div className="min-h-screen pt-24 flex items-center justify-center">Projects Section Content</div>}
          {currentPage === 'contact' && <div className="min-h-screen pt-24 flex items-center justify-center">Contact Section Content</div>}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

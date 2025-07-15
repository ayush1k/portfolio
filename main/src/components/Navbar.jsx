import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Updated import path

// Reusable Button Component (moved here for simplicity in Step 1)
const Button = ({ children, onClick, className = '' }) => {
  const { theme } = useContext(ThemeContext);
  const buttonClasses = theme === 'dark'
    ? 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105'
    : 'bg-[#007bff] hover:bg-[#0056b3] text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105'; // Adjusted for light theme

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </button>
  );
};

const Navbar = ({ setCurrentPage }) => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use useContext to access theme and toggleTheme

  // Classes based on theme, adjusted for the light theme in the image
  const navClasses = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-gray-800 shadow-sm';
  const linkClasses = theme === 'dark'
    ? 'hover:text-blue-400 transition duration-300'
    : 'text-gray-700 hover:text-blue-600 transition duration-300 px-4 py-2 rounded-full';

  return (
    <nav className={`p-4 ${navClasses} fixed w-full z-10 top-0`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo/Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-bold">A</div> {/* Changed to A for Ayush */}
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>Ayush Kumar</h1> {/* Changed name */}
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-2">
          <li><a href="#" onClick={() => setCurrentPage('home')} className={linkClasses}>Home</a></li>
          <li><a href="#" onClick={() => setCurrentPage('about')} className={linkClasses}>About</a></li>
          <li><a href="#" onClick={() => setCurrentPage('projects')} className={linkClasses}>Projects</a></li>
        </ul>

        {/* Right: System (Theme Toggle) & Contact Button */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button onClick={toggleTheme} className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white text-gray-800 shadow-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z" clipRule="evenodd" />
              </svg>
              <span>System</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Button>
          </div>
          <Button onClick={() => setCurrentPage('contact')} className="px-6 py-2 rounded-full">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

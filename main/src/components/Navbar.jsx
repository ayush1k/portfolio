import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Reusable Button Component (adjusted for new styles)
const Button = ({ children, onClick, className = '' }) => {
  const { theme } = useContext(ThemeContext);
  const buttonClasses = theme === 'dark'
    ? 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm'
    : 'bg-[#E0E0E0] hover:bg-[#D0D0D0] text-gray-800 font-bold py-1 px-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm';

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
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext); // Destructure setTheme
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Classes for the main nav container (the rounded rectangle)
  const outerNavContainerClasses = theme === 'dark'
    ? 'bg-transparent border border-black'
    : 'bg-transparent border border-black';

  // Classes for navigation links (now styled as buttons)
  const navLinkButtonClasses = theme === 'dark'
    ? 'bg-gray-700 hover:bg-gray-600 text-white'
    : 'bg-[#E0E0E0] hover:bg-[#D0D0D0] text-gray-800';

  // Specific class for the Contact button
  const contactButtonClasses = theme === 'dark'
    ? 'bg-blue-700 hover:bg-blue-800 text-white'
    : 'bg-[#34495E] hover:bg-[#2C3E50] text-white';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownItemClick = (selectedTheme) => {
    setTheme(selectedTheme);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="fixed w-full z-10 top-0 p-2"> {/* Reverted overall padding to p-2 */}
      {/* Outer rounded container for the entire navbar */}
      {/* Added max-w-3xl to reduce horizontal length by approx 50% */}
      <div className={`container mx-auto p-2 rounded-full flex justify-between items-center ${outerNavContainerClasses} max-w-3xl`}> {/* Reverted inner padding to p-2 */}
        {/* Left: Logo/Name */}
        <div className="flex items-center space-x-2"> {/* Reverted space-x */}
          {/* Changed logo background to be visible on transparent nav */}
          <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold">A</div> {/* Reverted size of circular logo */}
          <h1 className="text-lg font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>Ayush Kumar</h1> {/* Reverted font size to text-lg */}
        </div>

        {/* Center: Navigation Links (now styled as buttons) */}
        <ul className="flex space-x-1"> {/* Reverted space between links */}
          <li>
            <Button onClick={() => setCurrentPage('home')} className="px-3 py-1"> {/* Reverted padding for nav links */}
              Home
            </Button>
          </li>
          <li>
            <Button onClick={() => setCurrentPage('about')} className="px-3 py-1"> {/* Reverted padding for nav links */}
              About
            </Button>
          </li>
          <li>
            <Button onClick={() => setCurrentPage('projects')} className="px-3 py-1"> {/* Reverted padding for nav links */}
              Projects
            </Button>
          </li>
        </ul>

        {/* Right: Theme Button with Dropdown & Contact Button */}
        <div className="flex items-center space-x-2" ref={dropdownRef}>
          <div className="relative">
            <div className={`flex items-center rounded-full ${navLinkButtonClasses} cursor-pointer`}>
              {/* Main "Theme" button part - toggles dark mode */}
              <button
                onClick={toggleTheme} // This toggles between light/dark
                className="flex items-center space-x-0.5 px-3 py-1 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Theme</span> {/* Changed text to Theme */}
              </button>
              {/* Dropdown arrow part - opens dropdown */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-1 py-1 focus:outline-none rounded-r-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-36 rounded-md shadow-lg z-20
                ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                <div className="py-1">
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handleDropdownItemClick('light')}
                  >
                    Light
                  </a>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handleDropdownItemClick('dark')}
                  >
                    Dark
                  </a>
                  <a
                    href="#"
                    className={`block px-4 py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handleDropdownItemClick('system')}
                  >
                    System Default
                  </a>
                </div>
              </div>
            )}
          </div>
          <Button onClick={() => setCurrentPage('contact')} className="px-4 py-1">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

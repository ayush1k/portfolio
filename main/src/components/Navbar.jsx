import React, { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button'; // Import Button from its new location

const Navbar = ({ setCurrentPage }) => { // setCurrentPage now expects a section ID
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Classes for the main nav container (the rounded rectangle)
  const outerNavContainerClasses = theme === 'dark'
    ? 'bg-gray-800/80 border border-black' // Translucent dark background
    : 'bg-[#DFEAF6]/80 border border-black'; // Changed to page background color with 80% opacity

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
    <nav className="fixed w-full z-10 top-0 p-2 sm:p-4"> {/* Adjusted overall padding for responsiveness */}
      {/* Outer rounded container for the entire navbar */}
      <div className={`container mx-auto p-1 sm:p-2 rounded-full flex justify-between items-center ${outerNavContainerClasses} max-w-full sm:max-w-xl md:max-w-3xl`}> {/* Adjusted inner padding and max-width for responsiveness */}
        {/* Left: Logo/Name */}
        <div className="flex items-center space-x-1 sm:space-x-2"> {/* Adjusted space-x for responsiveness */}
          <img
            src="/favicon.png"
            alt="Ayush Kumar Logo"
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" // Adjusted size for responsiveness
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/28x28/000000/FFFFFF?text=A'; }}
          />
          <h1 className="text-base sm:text-lg font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>Ayush Kumar</h1> {/* Adjusted font size for responsiveness */}
        </div>

        {/* Center: Navigation Links (now styled as buttons) */}
        <ul className="hidden sm:flex space-x-1 sm:space-x-2"> {/* Hidden on small, flex on sm+ */}
          <li>
            <Button onClick={() => setCurrentPage('home')} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm"> {/* Adjusted padding and text size */}
              Home
            </Button>
          </li>
          <li>
            <Button onClick={() => setCurrentPage('about')} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm"> {/* Adjusted padding and text size */}
              About
            </Button>
          </li>
          <li>
            <Button onClick={() => setCurrentPage('skills')} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm"> {/* Added Skills link */}
              Skills
            </Button>
          </li>
          <li>
            <Button onClick={() => setCurrentPage('projects')} className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm">
              Projects
            </Button>
          </li>
        </ul>

        {/* Right: Theme Button with Dropdown & Contact Button */}
        <div className="flex items-center space-x-1 sm:space-x-2" ref={dropdownRef}> {/* Adjusted space-x for responsiveness */}
          <div className="relative">
            <div className={`flex items-center rounded-full ${navLinkButtonClasses} cursor-pointer`}>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-0.5 px-2 py-0.5 sm:px-3 sm:py-1 focus:outline-none" // Adjusted padding for responsiveness
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor"> {/* Adjusted icon size */}
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">Theme</span> {/* Adjusted text size */}
              </button>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-0.5 py-0.5 sm:px-1 sm:py-1 focus:outline-none rounded-r-full" // Adjusted padding for responsiveness
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3 ml-0.5" viewBox="0 0 20 20" fill="currentColor"> {/* Adjusted icon size */}
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {isDropdownOpen && (
              <div className={`absolute right-0 mt-2 w-32 sm:w-36 rounded-md shadow-lg z-20
                ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} ring-1 ring-black ring-opacity-5 focus:outline-none`}> {/* Adjusted width for responsiveness */}
                <div className="py-1">
                  <a
                    href="#"
                    className={`block px-3 py-1.5 text-xs sm:px-4 sm:py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`} // Adjusted padding and text size
                    onClick={() => handleDropdownItemClick('light')}
                  >
                    Light
                  </a>
                  <a
                    href="#"
                    className={`block px-3 py-1.5 text-xs sm:px-4 sm:py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`} // Adjusted padding and text size
                    onClick={() => handleDropdownItemClick('dark')}
                  >
                    Dark
                  </a>
                  <a
                    href="#"
                    className={`block px-3 py-1.5 text-xs sm:px-4 sm:py-2 text-sm ${theme === 'dark' ? 'text-gray-100 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`} // Adjusted padding and text size
                    onClick={() => handleDropdownItemClick('system')}
                  >
                    System Default
                  </a>
                </div>
              </div>
            )}
          </div>
          <Button onClick={() => setCurrentPage('contact')} className="px-3 py-1 sm:px-4 sm:py-1 text-xs sm:text-sm">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

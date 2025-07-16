import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Button = ({ children, onClick, className = '', href, target = '_self', rel = '' }) => {
  const { theme } = useContext(ThemeContext);
  const buttonClasses = theme === 'dark'
    ? 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm'
    : 'bg-[#E0E0E0] hover:bg-[#D0D0D0] text-gray-800 font-bold py-1 px-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-sm';

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${buttonClasses} ${className} inline-flex items-center justify-center`} // Added inline-flex and justify-center for consistent button appearance
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${buttonClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

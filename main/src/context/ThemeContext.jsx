    import React, { createContext, useState, useEffect } from 'react';

    // Create and export ThemeContext
    export const ThemeContext = createContext();

    // ThemeProvider component to manage theme state
    export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light'); // Default to light mode for the image replication

      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };

      useEffect(() => {
        // Apply theme class to body for global styling
        document.body.className = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#e0f2f7] text-gray-800';
      }, [theme]);

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };
    
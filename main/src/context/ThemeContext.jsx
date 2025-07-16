import React, { createContext, useState, useEffect, useMemo } from 'react';

// Create and export ThemeContext
export const ThemeContext = createContext(null); // Added null as a default value for context

// ThemeProvider component to manage theme state
export const ThemeProvider = ({ children }) => {
  // Initialize theme from local storage or system preference
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') { // Ensure window is defined for SSR compatibility
      if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light'; // Default to light if no preference or not in browser environment
  });

  const setTheme = (newTheme) => {
    if (newTheme === 'system') {
      const systemPrefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(systemPrefersDark ? 'dark' : 'light');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('theme'); // Remove specific theme preference
      }
    } else {
      setThemeState(newTheme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // Apply theme class to body for global styling
    if (typeof window !== 'undefined') { // Ensure window is defined
      document.body.className = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[#DFEAF6] text-gray-800';
    }
  }, [theme]);

  // Listen for system theme changes if current theme is 'system'
  useEffect(() => {
    if (typeof window !== 'undefined') { // Ensure window is defined
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        // Only react if no explicit theme is set (i.e., 'system' was implicitly chosen or localStorage is empty)
        if (!localStorage.getItem('theme')) {
          setThemeState(mediaQuery.matches ? 'dark' : 'light');
        }
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Memoize the context value to ensure stability across renders, which can help HMR
  const contextValue = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.displayName = 'ThemeProvider'; // Added display name for better debugging in React DevTools

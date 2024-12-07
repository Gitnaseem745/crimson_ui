// ThemeContext.tsx (or wherever you're managing the theme)
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme, blueTheme, themes } from './themes'; // Import your themes

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0); // Start with lightTheme

  const toggleTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length); // Cycle through themes
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

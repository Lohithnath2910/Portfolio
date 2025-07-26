import React, { createContext, useContext, useEffect, useState } from 'react';

// Theme context type definition
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Set dark mode palette as CSS variables for easy use in Tailwind or custom CSS
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--dm-bg-primary', '#222831');
      document.documentElement.style.setProperty('--dm-bg-secondary', '#393E46');
      document.documentElement.style.setProperty('--dm-accent', '#948979');
      document.documentElement.style.setProperty('--dm-text', '#DFD0B8');
    } else {
      // Optionally reset to default or light mode palette
      document.documentElement.style.removeProperty('--dm-bg-primary');
      document.documentElement.style.removeProperty('--dm-bg-secondary');
      document.documentElement.style.removeProperty('--dm-accent');
      document.documentElement.style.removeProperty('--dm-text');
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

// Theme toggle button component
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-black dark:border-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white" />
      ) : (
        <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white" />
      )}
    </Button>
  );
};
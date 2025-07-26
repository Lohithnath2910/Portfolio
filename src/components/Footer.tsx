import React from 'react';
import { Link } from 'react-router-dom';

// Footer component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-white dark:text-foreground py-6 sm:py-8 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="flex items-center mb-4">
          <span className="text-lg font-bold text-white dark:text-foreground mb-1 text-center w-full">My Space</span>
          </Link>
          <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 text-center w-full">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
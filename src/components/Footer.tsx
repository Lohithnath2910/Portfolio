import React from 'react';
import { Link } from 'react-router-dom';

// Footer component
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 dark:bg-gray-950 text-white dark:text-foreground py-6 sm:py-8 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="flex items-center mb-4">
          <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight relative px-2 py-0.5 rounded-md bg-white/10 text-white">
  ./dev/<span className="text-blue-500 dark:text-purple-400">lohithnath</span>
</span>



          </Link>
          <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 text-center w-full">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
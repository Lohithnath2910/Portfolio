import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '../content';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-border dark:border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-lg sm:text-xl font-bold text-foreground dark:text-foreground">
              My Space
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-foreground/80 dark:hover:text-foreground/80 ${
                  location.pathname === item.href
                    ? 'text-foreground dark:text-foreground border-b-2 border-black dark:border-white pb-1'
                    : 'text-foreground/80 dark:text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <ThemeToggle />
            <a href="/Anti_CV.pdf" download className="contents">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-sm lg:text-base px-4 lg:px-6">
                <span>Resume</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center focus:outline-none"
            >
              <span className="sr-only">Toggle menu</span>
              <span
                className={`block absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out rounded ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out rounded ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-6 bg-foreground transition-all duration-300 ease-in-out rounded ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu (only on mobile) */}
      {/* Mobile menu with slide-in/out animation and max width to avoid logo overlap */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 dark:bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 z-50 h-full w-[80vw] max-w-[320px] bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-800 flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Slide-in Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
            <ThemeToggle />
            <button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-foreground dark:text-white focus:outline-none hover:scale-110 transition-transform"
            >
              &times;
            </button>
          </div>
          {/* Navigation */}
          <nav className="flex flex-col gap-4 px-6 py-6">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-semibold py-3 px-4 rounded-xl shadow-md border transition-all
                  ${
                    location.pathname === item.href
                      ? 'bg-white text-black dark:bg-gray-900 dark:text-white'
                      : 'bg-white/90 text-black dark:bg-gray-800/90 dark:text-white'
                  }
                  hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {item.label}
              </Link>
            ))}
            <a href="/Anti_CV.pdf" download className="contents">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 w-full mt-2 text-base">
                <span>Resume</span>
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

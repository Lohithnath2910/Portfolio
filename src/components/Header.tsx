import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { siteConfig } from '../content';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <header className="fixed top-0 left-0 w-full z-40 bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-border dark:border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-foreground dark:text-foreground">
                My Space
              </span>
            </Link>

            {/* Desktop Nav */}
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
              <a href="/Resume.pdf" download className="contents">
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
      </header>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[320px] z-50 flex flex-col transition-transform duration-300 md:hidden
          ${isMobileMenuOpen ? 'translate-x-0 animate-fade-glow' : 'translate-x-full'}
          bg-white/10 dark:bg-white/5 backdrop-blur-md border-l border-border dark:border-white/20 shadow-xl
        `}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border dark:border-white/20">
          <Link
            to="/"
            className="text-lg font-bold text-foreground dark:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Space
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-foreground dark:text-white focus:outline-none hover:scale-110 transition-transform"
          >
            &times;
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col gap-4 px-6 py-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-base font-medium text-foreground dark:text-white
                px-5 py-2 rounded-full border border-border dark:border-white/20 shadow-sm
                bg-white/70 dark:bg-white/20 backdrop-blur-sm
                hover:bg-white/90 dark:hover:bg-white/40 hover:shadow-md
                transition-all duration-200
              `}
            >
              {item.label}
            </Link>
          ))}

          <a href="/Resume.pdf" download>
            <Button className="w-full mt-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 text-base shadow-md">
              Resume
            </Button>
          </a>
        </nav>
      </div>
    </>
  );
};

import React from 'react';
const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
    <img src={icon} alt={name} className="w-10 h-10 mb-2" loading="lazy" />
    <span className="text-xs sm:text-sm font-medium text-foreground dark:text-foreground text-center">{name}</span>
  </div>
);

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteConfig } from '../content';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-foreground dark:text-foreground">
      <style>{`
        @keyframes smoothPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.10); opacity: 0.9; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 max-w-7xl pt-12 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-8 order-2 lg:order-1 pt-4">
            <div className="space-y-2 sm:space-y-4">
              <hr className="block sm:hidden my-6 border-t-2 border-gray-300 dark:border-gray-700" />
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="font-normal text-foreground dark:text-foreground">Hello I'm</span>
                <span className="font-extrabold text-foreground dark:text-foreground">{siteConfig.name}.</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="font-extrabold text-foreground dark:text-foreground">Software</span>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:1px_white]">Developer</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="font-normal text-foreground dark:text-foreground">Based In</span>
                <span className="font-extrabold text-foreground dark:text-foreground">{siteConfig.location}.</span>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 dark:text-foreground/80 max-w-2xl leading-relaxed">
              {siteConfig.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/portfolio">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
                  View About Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-black dark:border-white text-foreground dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Frame */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-10 sm:mb-0">
            <div className="relative pt-24 sm:pt-28 mt-4 mb-2 sm:mt-4 sm:mb-0 lg:-translate-y-24 flex flex-col items-center">
              <img
                src="/profilePhoto.jpg"
                alt="My Photo"
                className="mx-auto rounded-full w-44 h-44 sm:w-64 sm:h-64 lg:w-[22rem] lg:h-[22rem] object-cover object-center transition-transform duration-700 hover:scale-102 hover:-translate-y-2 cursor-pointer"
              />

{/* Big Pulse (1st) */}
<div
  className="absolute top-0 right-0 sm:top-4 sm:right-4 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
  style={{ animationDelay: '0s', animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
></div>

{/* Medium Pulse (2nd) */}
<div
  className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
  style={{ animationDelay: '1s', animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
></div>

{/* Small Pulse (mobile only) */}
<div
  className="absolute bottom-[12rem] left-[-2rem] block sm:hidden w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
  style={{ animationDelay: '2s', animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
></div>

{/* Small Pulse (desktop only) */}
<div
  className="absolute bottom-[22rem] left-[-1.5rem] hidden sm:block w-4 h-4 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
  style={{ animationDelay: '2s', animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
></div>


        

              {/* Social Links */}
              <div className="flex gap-4 pt-4 justify-center">
                <a href="https://www.linkedin.com/in/yaganti-lohithnath-reddy-40a36728b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/LOHITHNATH2910" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform dark:invert" />
                </a>
                <a href="https://leetcode.com/u/Lohithnath2910/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <img src="/leetcode (1).svg" alt="LeetCode" className="w-8 h-8 hover:scale-110 transition-transform"/>
                </a>
                <a href="https://instagram.com/lohith_2910" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src="/instagram (1).svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground dark:text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/80 max-w-2xl mx-auto">
              A selection of tools and technologies I use to bring ideas to life
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'Python', icon: '/python-svgrepo-com.svg' },
              { name: 'C++', icon: '/cpp3-svgrepo-com.svg' },
              { name: 'React.js', icon: '/react-svgrepo-com.svg' },
              { name: 'Next.js', icon: '/next-js-svgrepo-com.svg' },
              { name: 'Node.js', icon: '/node-js-svgrepo-com.svg' },
              { name: 'Tailwind CSS', icon: '/tailwind-css-svgrepo-com.svg' },
              { name: 'Git', icon: '/git-svgrepo-com.svg' },
              { name: 'VS Code', icon: '/vscode-svgrepo-com.svg' },
            ].map((skill) => (
              <SkillItem key={skill.name} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

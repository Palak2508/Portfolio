import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-transparent py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Copyright with Squiggle Underneath - exactly matching screenshot image_258ecc8d.png */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-sm text-slate-300 font-medium">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            {/* Subtle squiggle wave underneath copyright */}
            <div className="mt-1 text-slate-600">
              <svg width="44" height="10" viewBox="0 0 48 14" fill="none">
                <path
                  d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7C42 12 46 12 48 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right: Circular Outline Icon Buttons for LinkedIn and GitHub - matching screenshot image_258ecc8d.png */}
          <div className="flex items-center gap-3">
            {/* LinkedIn Circular Icon Button */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-400 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* GitHub Circular Icon Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-slate-700 hover:border-slate-400 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

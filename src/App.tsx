/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to the stylish dark aesthetic shown in the screenshots
    }
    return true;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const triggerSparkleBurst = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090516] dark:bg-[#090516] text-white bg-dot-pattern relative overflow-x-hidden font-sans selection:bg-[#84cc16] selection:text-slate-950">
      
      {/* Interactive mouse parallax floating background stars, orbits and ambient light */}
      <InteractiveBackground />

      {/* Floating Sparkle Burst Notification */}
      {confettiActive && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#84cc16] text-slate-950 px-5 py-2.5 rounded-full font-black text-xs shadow-2xl animate-bounce flex items-center gap-2 border-2 border-slate-950">
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>✨ Interactive Mode Active!</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Sections matching exact layout from user screenshots */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button at Bottom-Right matching screenshots */}
      <button
        onClick={triggerSparkleBurst}
        title="Interactive Sparkle"
        aria-label="Interactive Sparkle"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white text-slate-900 border-2 border-slate-950 shadow-[4px_4px_0px_#000] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-slate-950 group-hover:rotate-45 transition-transform"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      </button>

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

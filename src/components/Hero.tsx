import React, { useState, useEffect } from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Responsive mouse parallax offsets
  const stickerOffset1 = {
    x: mousePos.x * -16,
    y: mousePos.y * -16,
  };

  const stickerOffset2 = {
    x: mousePos.x * 20,
    y: mousePos.y * 20,
  };

  const stickerOffset3 = {
    x: mousePos.x * -24,
    y: mousePos.y * -24,
  };

  return (
    <section id="home" className="relative pt-4 pb-16 md:pt-8 md:pb-24 lg:pt-12 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive 2-Column Grid starting from md: so photo is ALWAYS in the right-side space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Playful Hero Typography & Buttons */}
          <div className="w-full flex flex-col items-start space-y-5 text-left relative z-10">
            
            {/* Hey, I'm pill with squiggly line and green orbit */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#1a1433]/90 text-slate-200 border border-slate-700/80 shadow-sm backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Hey, I'm</span>
              </div>

              {/* Decorative purple squiggle & green orbit ring */}
              <div
                className="flex items-center gap-2.5 transition-transform duration-300 ease-out"
                style={{ transform: `translate(${stickerOffset1.x * 0.4}px, ${stickerOffset1.y * 0.4}px)` }}
              >
                {/* Purple Squiggle */}
                <svg width="42" height="12" viewBox="0 0 48 14" fill="none" className="text-slate-500">
                  <path
                    d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7C42 12 46 12 48 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Green concentric circle with center dot */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#84cc16] flex items-center justify-center animate-pulse-ring">
                  <div className="w-2 h-2 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
                </div>
              </div>
            </div>

            {/* Giant Title: PALAK with hand-drawn lime green wavy underline */}
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none font-display">
                PALAK
              </h1>

              {/* Hand-drawn lime wavy underline SVG */}
              <div className="mt-2 w-full max-w-[320px] sm:max-w-[400px]">
                <svg viewBox="0 0 320 28" fill="none" className="w-full h-auto">
                  <path
                    d="M4 14 C 40 4, 80 24, 120 14 C 160 4, 200 24, 240 14 C 280 4, 305 20, 316 12"
                    stroke="#84cc16"
                    strokeWidth="7"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_8px_rgba(132,204,22,0.5)]"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle with orange sparkle: Software Developer · Full-Stack · AI Tools */}
            <div className="flex items-center gap-2 pt-1 text-slate-200 text-base sm:text-lg lg:text-xl font-bold tracking-tight">
              <span className="text-orange-400 text-lg sm:text-xl animate-float">✦</span>
              <p>Software Developer · Full-Stack · AI Tools</p>
            </div>

            {/* CTA Buttons: Lime Green 'Experience' + Outlined 'View Projects' */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#experience"
                className="px-6 py-3 rounded-full text-sm font-extrabold text-slate-950 bg-[#84cc16] hover:bg-[#9fe429] transition-all hover:scale-105 active:scale-95 shadow-[0_6px_20px_rgba(132,204,22,0.4)] inline-flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-slate-950" />
                <span>Experience</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-sm font-extrabold text-white bg-[#160f2e]/90 hover:bg-[#211745] border border-slate-700 transition-all hover:scale-105 active:scale-95 shadow-md"
              >
                View Projects
              </a>
            </div>

            {/* Cyan dot grid matrix decoration at bottom left matching screenshot */}
            <div className="pt-3 grid grid-cols-5 gap-2 opacity-50">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Right Column: Photo Frame ALWAYS positioned in right side space */}
          <div className="w-full flex justify-center md:justify-end relative mt-6 md:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]">
              
              {/* Photo Frame Container - White/Light background with rounded border and black offset shadow */}
              <div className="relative rounded-[38px] p-2 bg-white dark:bg-white border-4 border-slate-900 shadow-[8px_8px_0px_#090514] overflow-hidden group">
                <div className="relative aspect-[4/5] rounded-[30px] overflow-hidden bg-slate-100">
                  <img
                    src={personalInfo.photo}
                    alt="Palak Pandey"
                    loading="eager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* STICKER 1: Tilted Cyan Pill Badge (Top-Right): Open to SDE & intern roles! */}
              <div
                className="absolute -top-4 -right-3 sm:-right-5 z-20 transition-transform duration-200 ease-out animate-float"
                style={{
                  transform: `translate(${stickerOffset1.x}px, ${stickerOffset1.y}px) rotate(-6deg)`,
                }}
              >
                <div className="px-4 py-2 rounded-2xl bg-[#06b6d4] text-slate-950 font-black text-xs sm:text-sm border-2 border-slate-950 shadow-[4px_4px_0px_#000000] tracking-tight leading-tight whitespace-nowrap">
                  Open to SDE<br />&amp; intern roles!
                </div>
              </div>

              {/* STICKER 2: Yellow Star Sticker (Left-Middle) */}
              <div
                className="absolute top-1/4 -left-4 sm:-left-5 z-20 transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(${stickerOffset2.x}px, ${stickerOffset2.y}px)`,
                }}
              >
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="drop-shadow-[2px_2px_0px_#000]">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#facc15"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* STICKER 3: Red/Coral Starburst with </> inside (Bottom-Left) */}
              <div
                className="absolute -bottom-4 -left-4 sm:-left-5 z-20 transition-transform duration-250 ease-out"
                style={{
                  transform: `translate(${stickerOffset3.x}px, ${stickerOffset3.y}px) rotate(-8deg)`,
                }}
              >
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0px_#000]">
                    <path
                      d="M50 0 L60 22 L83 12 L80 37 L100 50 L80 63 L83 88 L60 78 L50 100 L40 78 L17 88 L20 63 L0 50 L20 37 L17 12 L40 22 Z"
                      fill="#f87171"
                      stroke="#000"
                      strokeWidth="3"
                    />
                  </svg>
                  <span className="absolute font-mono font-black text-xs text-slate-950">
                    &lt;/&gt;
                  </span>
                </div>
              </div>

              {/* STICKER 4: Green 4-point sparkle (Bottom-Right) */}
              <div
                className="absolute -bottom-5 -right-3 z-10 transition-transform duration-300 ease-out animate-pulse-ring"
                style={{
                  transform: `translate(${stickerOffset1.x * 0.8}px, ${stickerOffset1.y * 0.8}px)`,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                    fill="#84cc16"
                    stroke="#000"
                    strokeWidth="1.5"
                    className="drop-shadow-[0_0_10px_#84cc16]"
                  />
                </svg>
              </div>

              {/* STICKER 5: Golden Sparkle (Top-Center) */}
              <div
                className="absolute -top-10 left-1/3 z-10 transition-transform duration-400 ease-out animate-float-delayed"
                style={{
                  transform: `translate(${stickerOffset2.x * 0.7}px, ${stickerOffset2.y * 0.7}px)`,
                }}
              >
                <span className="text-amber-400 text-3xl font-bold drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                  ✦
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

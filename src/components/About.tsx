import React, { useState } from 'react';
import { Mail, ChevronDown, ChevronUp, Linkedin, Github, GraduationCap, Award, Brain, Database, Users } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export const About: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Replicating screenshot image_f179e08a.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Photo Card with "That's me!" badge and stickers (col-span-5) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer dark backdrop card */}
              <div className="relative rounded-[36px] p-3 bg-[#120c29] border-2 border-slate-800 shadow-[8px_8px_0px_#090514]">
                
                {/* Red diagonal washi tape at top-left */}
                <div className="absolute -top-3.5 left-6 w-20 h-5 tape-red rounded-sm shadow-md -rotate-3" />

                {/* Inner white frame with formal photo */}
                <div className="relative rounded-[28px] overflow-hidden bg-white border-2 border-slate-900 aspect-[4/5]">
                  <img
                    src={personalInfo.photo}
                    alt="Palak Pandey"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* STICKER: That's me! coral badge on right edge */}
              <div className="absolute top-1/3 -right-4 sm:-right-6 z-20 animate-float">
                <div className="px-3.5 py-1.5 rounded-xl bg-[#f87171] text-slate-950 font-black text-xs border-2 border-slate-950 shadow-[3px_3px_0px_#000] rotate-6 whitespace-nowrap">
                  That's me!
                </div>
              </div>

              {/* STICKER: Green sparkle star at top-right */}
              <div className="absolute -top-4 -right-2 z-10 animate-pulse-ring">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                    fill="#84cc16"
                  />
                </svg>
              </div>

              {/* STICKER: Yellow star at bottom-left */}
              <div className="absolute -bottom-3 -left-3 z-10 animate-float-delayed">
                <span className="text-amber-400 text-2xl font-bold">★</span>
              </div>

              {/* Squiggle below photo card */}
              <div className="mt-4 flex justify-center text-slate-600">
                <svg width="60" height="14" viewBox="0 0 48 14" fill="none">
                  <path
                    d="M2 7C6 2 10 2 14 7C18 12 22 12 26 7C30 2 34 2 38 7C42 12 46 12 48 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Metrics & CTAs matching image_f179e08a.png (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Green eyebrow */}
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
              <span>ABOUT ME</span>
            </div>

            {/* Headline with purple curved underline */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display leading-[1.15]">
                Hi, I'm Palak — I build full-stack and AI-powered apps.
              </h2>
              {/* Hand-drawn purple curve underline SVG */}
              <div className="mt-2 w-full max-w-[260px] sm:max-w-[320px]">
                <svg viewBox="0 0 320 20" fill="none" className="w-full h-auto">
                  <path
                    d="M4 12 C 80 4, 160 18, 240 10 C 280 6, 305 14, 316 10"
                    stroke="#a855f7"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_6px_rgba(168,85,247,0.5)]"
                  />
                </svg>
              </div>
            </div>

            {/* Paragraph text */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              I’m a final-year B.Tech IT student (AI/ML focus) at <strong>Pillai College of Engineering</strong>, with a strong foundation in C, C++, Java and Python and hands-on experience with React, Next.js, TypeScript, Flask and PHP/MySQL. I love problem solving and care about writing efficient, maintainable code.
            </p>

            {/* 3 Metrics: 8.6, 3,900+ (with pulsing green orbit), 200+ */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-2 w-full max-w-lg">
              {/* Metric 1 */}
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                  8.6
                </span>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">CGPA / 10</p>
              </div>

              {/* Metric 2 with green concentric ring */}
              <div className="relative">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums relative z-10">
                  3,900+
                </span>
                {/* Floating green concentric circle around 3,900+ matching screenshot */}
                <div className="absolute -top-2 left-6 w-9 h-9 rounded-full border-2 border-[#84cc16] flex items-center justify-center animate-pulse-ring pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
                </div>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Records analysed</p>
              </div>

              {/* Metric 3 */}
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums">
                  200+
                </span>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">CSI chapter members</p>
              </div>
            </div>

            {/* CTA Button Row: Lime Green 'More About Me ∨' + Circular LinkedIn & GitHub */}
            <div className="flex items-center gap-3.5 pt-3">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-slate-950 bg-[#84cc16] hover:bg-[#9fe429] transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(132,204,22,0.4)] inline-flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-950" />
                <span>More About Me</span>
                {expanded ? (
                  <ChevronUp className="w-4 h-4 text-slate-950" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-950" />
                )}
              </button>

              {/* LinkedIn Circular Outline Button */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-slate-700 hover:border-slate-400 bg-slate-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub Circular Outline Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-slate-700 hover:border-slate-400 bg-slate-900/80 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Expandable Detailed Bio & Achievements Drawer */}
        {expanded && (
          <div className="mt-12 p-8 rounded-[28px] border border-dashed border-slate-700 bg-[#120c29]/95 backdrop-blur-md animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Academic Highlights */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#84cc16] font-bold text-sm">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Grounding</span>
                </div>
                <h4 className="text-white font-bold text-sm">{education.institution}</h4>
                <p className="text-xs text-slate-400">{education.degree} — {education.field}</p>
                <p className="text-xs text-slate-300">August 2023 – July 2027 · CGPA 8.6/10</p>
              </div>

              {/* Data & ML Philosophy */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#facc15] font-bold text-sm">
                  <Brain className="w-4 h-4" />
                  <span>Data &amp; ML Architecture</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Trained models across multimodal feature fusion (MobileNetV2 CNNs + TF-IDF), vector databases (ChromaDB), and RAG pipelines for contextual inference.
                </p>
              </div>

              {/* Leadership */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#c084fc] font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Leadership &amp; Community</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  As Joint PR Head of CSI (200+ members), spearheaded inter-departmental communications, hackathons, and technical bootcamps.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

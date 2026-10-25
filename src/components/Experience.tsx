import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16] mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
            <span>EXPERIENCE &amp; EDUCATION</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
            Where I've worked and learned
          </h2>
        </div>

        {/* 2-Card Layout matching Screenshot image_cd6a0941.png */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Data Analyst Intern at HappieLoop */}
          <div className="relative group rounded-[28px] border border-dashed border-slate-700/80 bg-[#120c29]/90 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:-translate-y-1">
            
            {/* Red Diagonal Washi Tape at Top */}
            <div className="absolute -top-3.5 left-10 w-24 h-6 tape-red rounded-sm shadow-md -rotate-2 group-hover:rotate-0 transition-transform" />

            {/* Circular Orange/Red Icon */}
            <div className="w-14 h-14 rounded-full bg-[#f97316] text-white flex items-center justify-center mb-6 shadow-md">
              <Briefcase className="w-6 h-6" />
            </div>

            {/* Role & Company */}
            <h3 className="text-2xl font-black text-white tracking-tight">
              Data Analyst Intern
            </h3>

            <div className="mt-1 mb-6">
              <p className="text-base font-bold text-[#84cc16]">HappieLoop</p>
              <p className="text-xs text-slate-400 font-medium">July 2026 – August 2026</p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  Cleaned and preprocessed <strong>3,900+ customer records</strong> with Python, Pandas and SQL, producing analysis-ready datasets.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  Wrote SQL queries and ran exploratory analysis on subscription status, age groups, product categories and retention patterns.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  Built a Power BI KPI dashboard that made customer segments and purchasing trends easy for the business to interpret.
                </span>
              </li>
            </ul>
          </div>

          {/* Center Floating Green Orbit Ring - exactly like in image_cd6a0941.png */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-12 h-12 rounded-full border-2 border-[#84cc16] flex items-center justify-center animate-pulse-ring bg-[#0c071e]/80">
              <div className="w-3 h-3 rounded-full bg-[#84cc16] shadow-[0_0_12px_#84cc16]" />
            </div>
          </div>

          {/* Card 2: B.Tech Information Technology at Pillai College of Engineering */}
          <div className="relative group rounded-[28px] border border-dashed border-slate-700/80 bg-[#120c29]/90 backdrop-blur-md p-8 sm:p-10 transition-all duration-300 hover:border-slate-500 hover:shadow-xl hover:-translate-y-1">
            
            {/* Cyan/Blue Diagonal Washi Tape at Top */}
            <div className="absolute -top-3.5 left-10 w-24 h-6 tape-blue rounded-sm shadow-md rotate-2 group-hover:rotate-0 transition-transform" />

            {/* Circular Cyan Icon */}
            <div className="w-14 h-14 rounded-full bg-[#06b6d4] text-slate-950 flex items-center justify-center mb-6 shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>

            {/* Degree & College */}
            <h3 className="text-2xl font-black text-white tracking-tight">
              B.Tech, Information Technology
            </h3>

            <div className="mt-1 mb-6">
              <p className="text-base font-bold text-[#84cc16]">Pillai College of Engineering</p>
              <p className="text-xs text-slate-400 font-medium">August 2023 – July 2027</p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  <strong>AI/ML focus</strong>, CGPA <strong>8.6 / 10</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  <strong>Joint PR Head</strong>, CSI chapter (200+ members).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400 font-black mt-1.5 text-xs">•</span>
                <span>
                  Data structures, algorithms and competitive programming.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

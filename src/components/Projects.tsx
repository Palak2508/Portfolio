import React, { useState } from 'react';
import { TrendingUp, Sparkles, Database, Building2, Truck, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Styling attributes for the playful card headers
  const projectVisuals = [
    {
      tapeClass: 'tape-yellow',
      hasNewBadge: true,
      bgBlock: 'bg-[#f59e0b]',
      textColor: 'text-slate-950',
      icon: (
        <div className="flex items-center gap-4">
          <TrendingUp className="w-16 h-16 text-slate-950 stroke-[2.5]" />
          <div className="w-8 h-8 rounded-full border-2 border-slate-950 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#84cc16]" />
          </div>
        </div>
      ),
      categoryPill: 'Multimodal AI',
      pillBg: 'bg-[#fef08a] text-slate-900',
    },
    {
      tapeClass: 'tape-purple',
      hasNewBadge: false,
      bgBlock: 'bg-[#9333ea]',
      textColor: 'text-white',
      icon: (
        <Sparkles className="w-16 h-16 text-slate-950 stroke-[2.5]" />
      ),
      categoryPill: 'Gen AI',
      pillBg: 'bg-[#c084fc] text-slate-950 font-bold',
    },
    {
      tapeClass: 'tape-blue',
      hasNewBadge: false,
      bgBlock: 'bg-[#059669]',
      textColor: 'text-white',
      icon: (
        <Database className="w-16 h-16 text-slate-950 stroke-[2.5]" />
      ),
      categoryPill: 'RAG & Vector AI',
      pillBg: 'bg-[#6ee7b7] text-slate-950 font-bold',
    },
    {
      tapeClass: 'tape-red',
      hasNewBadge: false,
      bgBlock: 'bg-[#2563eb]',
      textColor: 'text-white',
      icon: (
        <Building2 className="w-16 h-16 text-slate-950 stroke-[2.5]" />
      ),
      categoryPill: 'Full-Stack Banking',
      pillBg: 'bg-[#93c5fd] text-slate-950 font-bold',
    },
    {
      tapeClass: 'tape-purple',
      hasNewBadge: false,
      bgBlock: 'bg-[#f97316]',
      textColor: 'text-white',
      icon: (
        <Truck className="w-16 h-16 text-slate-950 stroke-[2.5]" />
      ),
      categoryPill: 'Logistics Flow',
      pillBg: 'bg-[#fed7aa] text-slate-950 font-bold',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching image_9a244984.png */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
              <span>FEATURED WORK</span>
            </div>

            <div className="relative">
              {/* Cyan sparkle star */}
              <span className="absolute -top-4 -left-6 text-cyan-400 text-2xl font-bold animate-float" aria-hidden="true">
                ✦
              </span>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
                Things I've built
              </h2>

              {/* Hand-drawn coral/orange curved underline */}
              <div className="mt-2 w-full max-w-[280px]">
                <svg viewBox="0 0 280 20" fill="none" className="w-full h-auto">
                  <path
                    d="M4 12 C 70 3, 140 18, 210 10 C 240 7, 265 14, 276 10"
                    stroke="#f87171"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_6px_rgba(248,113,113,0.5)]"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Top-Right: View All Projects link */}
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#84cc16]" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, idx) => {
            const visual = projectVisuals[idx % projectVisuals.length];

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer rounded-[28px] border border-dashed border-slate-700/80 bg-[#120c29]/90 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-slate-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Washi Tape Strip at top */}
                <div
                  className={`absolute -top-3.5 left-10 w-24 h-6 ${visual.tapeClass} rounded-sm shadow-md -rotate-2 group-hover:rotate-0 transition-transform z-10`}
                />

                {/* NEW Starburst Badge if applicable */}
                {visual.hasNewBadge && (
                  <div className="absolute -top-6 left-12 z-20">
                    <div className="relative w-12 h-12 flex items-center justify-center animate-pulse-ring">
                      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[2px_2px_0px_#000]">
                        <path
                          d="M50 0 L60 22 L83 12 L80 37 L100 50 L80 63 L83 88 L60 78 L50 100 L40 78 L17 88 L20 63 L0 50 L20 37 L17 12 L40 22 Z"
                          fill="#84cc16"
                          stroke="#000"
                          strokeWidth="3"
                        />
                      </svg>
                      <span className="absolute font-black text-[10px] text-slate-950 uppercase tracking-tighter">
                        NEW
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Large Colorful Graphic Block matching screenshot */}
                  <div
                    className={`w-full aspect-[4/3] rounded-2xl ${visual.bgBlock} flex items-center justify-center p-6 shadow-inner transition-transform duration-300 group-hover:scale-[1.01]`}
                  >
                    {visual.icon}
                  </div>

                  {/* Category Pill Tag */}
                  <div className="mt-5 mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-black tracking-tight ${visual.pillBg}`}
                    >
                      {visual.categoryPill}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#84cc16] transition-colors">
                    {project.title}
                  </h3>

                  {/* Subtitle / Tech Tags */}
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 font-mono">
                    {project.tags.join(' · ')}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#84cc16]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Terminal, Code2, Globe, Coffee, Database, Palette, GitBranch, 
  BarChart3, Brain, Cpu, Layers, Pin
} from 'lucide-react';
import { allSkills, SkillBadge } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const getSkillIcon = (iconType: SkillBadge['iconType']) => {
    switch (iconType) {
      case 'terminal':
        return <Terminal className="w-4 h-4" />;
      case 'coffee':
        return <Coffee className="w-4 h-4" />;
      case 'globe':
        return <Globe className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'palette':
        return <Palette className="w-4 h-4" />;
      case 'git':
        return <GitBranch className="w-4 h-4" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4" />;
      case 'brain':
        return <Brain className="w-4 h-4" />;
      case 'cpu':
        return <Cpu className="w-4 h-4" />;
      case 'layers':
        return <Layers className="w-4 h-4" />;
      case 'code':
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  // Subtle tilt rotation angles to match screenshot image_472cc302.png
  const tilts = [
    '-rotate-2',
    'rotate-1',
    '-rotate-1',
    'rotate-2',
    '-rotate-3',
    'rotate-1',
    '-rotate-2',
    'rotate-2',
    '-rotate-1',
    'rotate-1.5',
    '-rotate-2',
    'rotate-1',
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'pinned', label: '★ Top 3 Pins' },
    { id: 'core', label: 'Languages' },
    { id: 'web', label: 'Full-Stack & Web' },
    { id: 'ai', label: 'AI, ML & Data' },
    { id: 'cs', label: 'CS Fundamentals' },
  ];

  const filteredSkills = allSkills.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'pinned') return s.pinned;
    if (filter === 'core') return ['Core'].includes(s.category);
    if (filter === 'web') return ['Frontend', 'Backend', 'Database'].includes(s.category);
    if (filter === 'ai') return ['AI & Data'].includes(s.category);
    if (filter === 'cs') return ['Fundamentals', 'Systems', 'Engineering'].includes(s.category);
    return true;
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching image_472cc302.png */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#84cc16] mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84cc16] shadow-[0_0_8px_#84cc16]" />
            <span>SKILLS</span>
          </div>

          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-display">
              Tools I build with
            </h2>

            {/* Hand-drawn lime green wavy underline SVG */}
            <div className="mt-2 w-full max-w-[280px]">
              <svg viewBox="0 0 280 20" fill="none" className="w-full h-auto">
                <path
                  d="M4 12 C 60 4, 120 20, 180 10 C 220 5, 255 16, 276 10"
                  stroke="#84cc16"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="drop-shadow-[0_2px_6px_rgba(132,204,22,0.5)]"
                />
              </svg>
            </div>

            {/* Hand-drawn dashed arrow pointing to badges */}
            <div className="mt-2 text-slate-500 font-mono text-xs flex items-center gap-1.5 opacity-60">
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                <path
                  d="M2 4 C 12 14, 25 16, 36 16 M30 10 L36 16 L28 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter categories tabs for easy exploration */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#84cc16] text-slate-950 shadow-[2px_2px_0px_#000]'
                  : 'bg-[#150f2e] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tilted Floating Badges Container matching screenshot image_472cc302.png */}
        <div className="relative flex flex-wrap items-center justify-start gap-3.5 sm:gap-4 lg:gap-5 py-4">
          
          {filteredSkills.map((skill, idx) => {
            const tilt = tilts[idx % tilts.length];

            return (
              <div
                key={skill.name}
                className={`relative group rounded-2xl border border-dashed border-slate-700/80 bg-[#150f2e]/95 backdrop-blur-md px-4 py-3 shadow-lg transition-all duration-300 hover:border-slate-400 hover:scale-105 hover:z-20 hover:rotate-0 ${tilt} flex items-center gap-3 cursor-default`}
              >
                {/* Pinned star badge if it's in top 3 */}
                {skill.pinned && (
                  <div className="absolute -top-2.5 -right-2 z-10">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-md">
                      ★
                    </span>
                  </div>
                )}

                {/* Colorful circular icon badge */}
                <div
                  className={`w-8 h-8 rounded-full ${skill.color} flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110`}
                >
                  {getSkillIcon(skill.iconType)}
                </div>

                {/* Skill Name */}
                <span className="text-sm font-bold text-white tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}

          {/* Floating Green Concentric Circle ◎ matching screenshot image_472cc302.png */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#84cc16] animate-pulse-ring ml-4 pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-[#84cc16] shadow-[0_0_10px_#84cc16]" />
          </div>
        </div>

        {/* Bottom Dotted/Wavy Teal Separator Line matching image_472cc302.png */}
        <div className="mt-16 text-cyan-400/40 w-full overflow-hidden">
          <svg viewBox="0 0 1200 16" fill="none" className="w-full h-4">
            <path
              d="M0 8 Q 150 0, 300 8 T 600 8 T 900 8 T 1200 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 6"
              fill="none"
            />
          </svg>
        </div>

      </div>
    </section>
  );
};

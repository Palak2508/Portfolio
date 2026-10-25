import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-video sm:aspect-[21/9] bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Summary */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
              Key Capabilities &amp; Engineering Decisions
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture note if available */}
          {project.architecture && (
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Architecture &amp; Pipeline</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Impact note if available */}
          {project.impact && (
            <div className="p-4 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Impact &amp; Results</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.impact}
              </p>
            </div>
          )}

          {/* Tech stack tags */}
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="font-mono text-slate-700 dark:text-slate-200 font-medium">
                    {tag}
                  </span>
                  {idx < project.tags.length - 1 && (
                    <span className="text-slate-400" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal footer */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Designed &amp; built by Palak Pandey
          </span>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/Palak2508"
              target="_blank"
              rel="noreferrer noopener"
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:border-slate-400 rounded-lg inline-flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                const contactEl = document.querySelector('#contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

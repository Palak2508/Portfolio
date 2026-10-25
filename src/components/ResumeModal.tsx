import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, education, experiences } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                Palak Pandey — Resume &amp; Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                B.Tech IT (AI/ML Focus) · Pillai College of Engineering · CGPA 8.6
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePdf}
              download="Palak_Pandey_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noreferrer noopener"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* PDF Viewer Embed (col-span-8) */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden h-[500px] sm:h-[620px] flex flex-col">
              <object
                data={personalInfo.resumePdf}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="p-8 flex flex-col items-center justify-center text-center h-full space-y-4">
                  <FileText className="w-12 h-12 text-slate-400" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    PDF preview is supported in your browser or can be downloaded directly.
                  </p>
                  <a
                    href={personalInfo.resumePdf}
                    download="Palak_Pandey_Resume.pdf"
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
                  >
                    Download Resume PDF
                  </a>
                </div>
              </object>
            </div>

            {/* Resume Fast Summary Breakdown (col-span-4) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 block">
                  Quick Resume Snapshot
                </span>

                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Pillai College of Engineering</p>
                      <p className="text-slate-500">B.Tech IT (2023 - 2027) · CGPA 8.6/10</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Happieloop (Internship)</p>
                      <p className="text-slate-500">Data Analyst · 3,900+ Records Analyzed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Smart India Hackathon 2026</p>
                      <p className="text-slate-500">3rd Place Internal Round · Gen AI Workflows</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">CSI Student Chapter</p>
                      <p className="text-slate-500">Joint PR Head (200+ members)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wider">
                    Core Technical Strengths
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono leading-relaxed">
                    C · C++ · Java · Python · React · Next.js · TypeScript · SQL · MySQL · Flask · Power BI
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-2">
                <p className="font-bold text-blue-900 dark:text-blue-200">
                  Interested in interviewing?
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Palak is currently reviewing SDE and Full-Stack internship and graduate opportunities.
                </p>
                <a
                  href="#contact"
                  onClick={() => {
                    onClose();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                >
                  Schedule an interview &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

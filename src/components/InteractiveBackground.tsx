import React, { useEffect, useState } from 'react';

export const InteractiveBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Multiplier offsets for parallax layers
  const p1X = mousePos.x * 25;
  const p1Y = mousePos.y * 25;

  const p2X = mousePos.x * -35;
  const p2Y = mousePos.y * -35;

  const p3X = mousePos.x * 15;
  const p3Y = mousePos.y * 15;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dynamic ambient spotlight following mouse */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-25 dark:opacity-40 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, rgba(59, 130, 246, 0.25) 45%, transparent 70%)',
          left: `calc(50% + ${mousePos.x * 200}px - 350px)`,
          top: `calc(40% + ${mousePos.y * 200}px - 350px)`,
        }}
      />

      {/* Layer 1: Floating sparkle stars (Gold / Yellow) */}
      <div
        className="absolute top-[12%] left-[8%] transition-transform duration-300 ease-out animate-float"
        style={{ transform: `translate(${p1X}px, ${p1Y}px)` }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
            fill="#eab308"
            className="drop-shadow-[0_0_8px_rgba(234,179,8,0.7)]"
          />
        </svg>
      </div>

      <div
        className="absolute top-[18%] right-[14%] transition-transform duration-500 ease-out animate-float-delayed"
        style={{ transform: `translate(${p2X}px, ${p2Y}px)` }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
            fill="#fbbf24"
            className="drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
          />
        </svg>
      </div>

      <div
        className="absolute top-[55%] left-[5%] transition-transform duration-500 ease-out animate-float"
        style={{ transform: `translate(${p3X}px, ${p3Y}px)` }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
            fill="#f97316"
            className="drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
          />
        </svg>
      </div>

      {/* Layer 2: Floating Cyan 4-point Sparkles */}
      <div
        className="absolute top-[38%] left-[2%] transition-transform duration-300 ease-out animate-float-delayed"
        style={{ transform: `translate(${p2X * 0.7}px, ${p2Y * 0.7}px)` }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
            fill="#06b6d4"
            className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          />
        </svg>
      </div>

      <div
        className="absolute top-[68%] right-[8%] transition-transform duration-500 ease-out animate-float"
        style={{ transform: `translate(${p1X * 1.2}px, ${p1Y * 1.2}px)` }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z"
            fill="#a855f7"
            className="drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
          />
        </svg>
      </div>

      {/* Layer 3: Concentric Circles with Lime Dot (the exact design from screenshot) */}
      <div
        className="absolute top-[28%] right-[4%] transition-transform duration-400 ease-out animate-pulse-ring"
        style={{ transform: `translate(${p2X * 0.9}px, ${p2Y * 0.9}px)` }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-lime-400/60 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />
        </div>
      </div>

      <div
        className="absolute bottom-[20%] left-[10%] transition-transform duration-400 ease-out animate-float"
        style={{ transform: `translate(${p3X * 1.3}px, ${p3Y * 1.3}px)` }}
      >
        <div className="w-8 h-8 rounded-full border border-lime-400/50 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
        </div>
      </div>

      {/* Layer 4: Floating Starbursts & Plus icons */}
      <div
        className="absolute top-[75%] left-[45%] text-slate-500/40 dark:text-slate-400/30 text-lg font-mono font-bold animate-float"
        style={{ transform: `translate(${p1X * 0.5}px, ${p1Y * 0.5}px)` }}
      >
        +
      </div>
      <div
        className="absolute top-[48%] right-[32%] text-slate-500/40 dark:text-slate-400/30 text-sm font-mono font-bold animate-float-delayed"
        style={{ transform: `translate(${p2X * 0.6}px, ${p2Y * 0.6}px)` }}
      >
        +
      </div>
    </div>
  );
};

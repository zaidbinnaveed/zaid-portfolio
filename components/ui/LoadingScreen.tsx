"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "INITIALIZING NEURAL INTERFACE...",
  "LOADING AI SUBSYSTEMS...",
  "ESTABLISHING QUANTUM LINK...",
  "CALIBRATING HOLOGRAPHIC DISPLAY...",
  "SYNCING CONSCIOUSNESS...",
  "WELCOME, ZAID BIN NAVEED",
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex(i => {
        if (i >= bootLines.length - 1) { clearInterval(lineTimer); return i; }
        return i + 1;
      });
    }, 350);

    const progressTimer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setLoading(false), 600);
          return 100;
        }
        return Math.min(p + Math.random() * 12, 100);
      });
    }, 150);

    return () => { clearInterval(lineTimer); clearInterval(progressTimer); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#020408] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Corner decorations */}
          {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8`}>
              <div className={`absolute w-full h-px bg-violet-500/60 ${i < 2 ? "top-0" : "bottom-0"}`} />
              <div className={`absolute h-full w-px bg-violet-500/60 ${i % 2 === 0 ? "left-0" : "right-0"}`} />
            </div>
          ))}

          <div className="text-center z-10 px-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-20 h-20 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 pulse-ring" />
              <div className="absolute inset-0 rounded-full border border-violet-500/40 animate-spin" style={{ animationDuration: "4s" }} />
              <div className="absolute inset-2 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-orbitron font-black text-3xl gradient-text text-glow-violet">Z</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-orbitron font-black text-2xl md:text-3xl gradient-text mb-1 tracking-wider"
            >
              ZAID BIN NAVEED
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-mono-custom text-[10px] text-violet-400/70 tracking-[0.4em] mb-8"
            >
              AI/ML ENGINEER · CREATIVE TECHNOLOGIST
            </motion.p>

            {/* Boot lines */}
            <div className="w-80 mx-auto mb-6 text-left space-y-1 h-32 overflow-hidden">
              {bootLines.slice(0, lineIndex + 1).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`font-mono-custom text-[10px] tracking-wider ${
                    i === lineIndex ? "text-cyan-400" : "text-slate-600"
                  }`}
                >
                  {i === lineIndex ? "▶ " : "✓ "}{line}
                  {i === lineIndex && <span className="blink ml-1">_</span>}
                </motion.p>
              ))}
            </div>

            {/* Progress bar */}
            <div className="w-80 mx-auto">
              <div className="flex justify-between mb-1">
                <span className="font-mono-custom text-[9px] text-slate-600 tracking-widest">LOADING</span>
                <span className="font-mono-custom text-[9px] text-violet-400">{Math.round(progress)}%</span>
              </div>
              <div className="h-px bg-slate-800 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #7c3aed, #06b6d4, #d946ef)",
                    boxShadow: "0 0 8px rgba(124,58,237,0.8)",
                    transition: "width 0.1s ease"
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
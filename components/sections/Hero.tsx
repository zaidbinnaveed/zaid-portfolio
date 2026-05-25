"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 10,
  opacity: Math.random() * 0.5 + 0.1,
}));

const roles = ["AI/ML Engineer", "Creative Technologist", "Automation Enthusiast", "Problem Solver"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  const [roleIdx, setRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayText.length < target.length) {
        const t = setTimeout(() => setDisplayText(target.slice(0, displayText.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayText, typing, roleIdx]);

  // Mouse parallax
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      rotateY.set(x * 8);
      rotateX.set(-y * 8);
    };
    el.addEventListener("mousemove", handleMouse);
    el.addEventListener("mouseleave", () => { rotateX.set(0); rotateY.set(0); });
    return () => el.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Floating particles */}
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0 ? "#7c3aed" : p.id % 3 === 1 ? "#06b6d4" : "#d946ef",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Big glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px] opacity-08"
        style={{ background: "radial-gradient(circle, #d946ef, transparent)" }} />

      {/* Main content */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1200px" }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-bright px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono-custom text-[10px] tracking-[0.3em] text-slate-300">FINAL YEAR · FAST NUCES KARACHI</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="font-orbitron font-black leading-none mb-4">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white text-glow-violet mb-2">
              ZAID BIN
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text">
              NAVEED
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="font-space text-lg md:text-xl text-slate-400 mb-4 font-light tracking-wide"
        >
          Engineering Intelligence Beyond the Interface.
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="h-10 flex items-center justify-center mb-10"
        >
          <span className="font-mono-custom text-sm md:text-base text-cyan-400 tracking-widest text-glow-cyan">
            {displayText}<span className="blink text-violet-400">|</span>
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative px-8 py-3.5 rounded font-mono-custom text-sm tracking-widest font-bold text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              boxShadow: "0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.1)"
            }}
          >
            <span className="relative z-10">VIEW PROJECTS →</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </motion.button>

          <motion.a
            href="/cv.pdf" download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded font-mono-custom text-sm tracking-widest border text-slate-300 hover:text-white transition-all relative overflow-hidden group"
            style={{
              borderColor: "rgba(124,58,237,0.5)",
              background: "rgba(124,58,237,0.05)"
            }}
          >
            <span className="relative z-10">DOWNLOAD CV ↓</span>
            <div className="absolute inset-0 bg-violet-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex items-center justify-center gap-8 md:gap-16"
        >
          {[["20+", "Projects"], ["15+", "Technologies"], ["10+", "AI Tools"], ["3+", "Years Learning"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="font-orbitron font-black text-xl md:text-2xl gradient-text">{num}</p>
              <p className="font-mono-custom text-[9px] text-slate-500 tracking-widest mt-0.5">{label.toUpperCase()}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono-custom text-[9px] text-slate-600 tracking-[0.4em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-violet-500/80 to-transparent" />
      </motion.div>
    </section>
  );
}
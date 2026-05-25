"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 800, damping: 40, mass: 0.3 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const trailConfig = { stiffness: 200, damping: 25, mass: 0.5 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  const outerConfig = { stiffness: 80, damping: 20, mass: 0.8 };
  const outerX = useSpring(cursorX, outerConfig);
  const outerY = useSpring(cursorY, outerConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer ring - slowest */}
      <motion.div
        style={{ x: outerX, y: outerY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-10 h-10 rounded-full border border-violet-500/30 relative">
          <div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-110" />
        </div>
      </motion.div>

      {/* Middle ring */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-5 h-5 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent)",
            border: "1px solid rgba(124,58,237,0.6)",
            boxShadow: "0 0 10px rgba(124,58,237,0.4)"
          }}
        />
      </motion.div>

      {/* Core dot - fastest */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="w-2 h-2 rounded-full bg-cyan-400"
          style={{ boxShadow: "0 0 6px #06b6d4, 0 0 12px #06b6d4, 0 0 20px rgba(6,182,212,0.5)" }}
        />
      </motion.div>
    </>
  );
}
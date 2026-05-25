"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  { year: "2023", title: "Joined FAST NUCES", desc: "Started B.S. Artificial Intelligence at one of Pakistan's top CS universities.", color: "#7c3aed" },
  { year: "2024", title: "First ML Models", desc: "Built classifiers, regression models, and data pipelines. Fell in love with AI.", color: "#06b6d4" },
  { year: "2025", title: "AI-Assisted Dev Workflow", desc: "Adopted Cursor, GitHub Copilot & Claude. 10x productivity unlocked.", color: "#d946ef" },
  { year: "2025", title: "Automation Engineering", desc: "Built multi-step automation pipelines and GitHub Actions workflows.", color: "#f59e0b" },
  { year: "2026", title: "Creative Development Era", desc: "Merged Three.js, GSAP, and AI to build immersive web experiences.", color: "#10b981" },
  { year: "2027", title: "Final Year & Beyond", desc: "Senior AI/ML projects, capstone, and launching into the industry.", color: "#f43f5e" },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <p className="font-mono text-xs tracking-[0.4em] text-violet-400 mb-4 uppercase">// 04. Journey</p>
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-white">The <span className="gradient-text">Timeline</span></h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-400/30 to-transparent" />
        {events.map((e, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-center mb-12 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className={`w-5/12 ${i % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <div className="glass rounded-xl p-5">
                <span className="font-mono text-xs" style={{ color: e.color }}>{e.year}</span>
                <h3 className="font-bold text-white mt-1 mb-2">{e.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{e.desc}</p>
              </div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
              style={{ background: e.color, borderColor: e.color, boxShadow: `0 0 12px ${e.color}` }} />
            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
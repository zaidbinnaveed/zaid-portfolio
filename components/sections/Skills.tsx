"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", color: "#3b82f6", level: 90 },
  { name: "Machine Learning", color: "#8b5cf6", level: 85 },
  { name: "Deep Learning", color: "#a78bfa", level: 80 },
  { name: "JavaScript / TypeScript", color: "#f59e0b", level: 82 },
  { name: "React / Next.js", color: "#06b6d4", level: 85 },
  { name: "C++", color: "#10b981", level: 75 },
  { name: "Three.js", color: "#d946ef", level: 70 },
  { name: "Data Structures & Algorithms", color: "#f43f5e", level: 88 },
  { name: "Tailwind CSS", color: "#38bdf8", level: 90 },
  { name: "Git / GitHub", color: "#fb923c", level: 85 },
  { name: "Prompt Engineering", color: "#c084fc", level: 92 },
  { name: "Automation", color: "#34d399", level: 80 },
];

const aiStack = [
  { name: "Cursor", desc: "AI-powered IDE", icon: "⚡" },
  { name: "GitHub Copilot", desc: "Code intelligence", icon: "🤖" },
  { name: "Claude", desc: "AI reasoning", icon: "🧠" },
  { name: "Trae", desc: "AI dev assistant", icon: "🔮" },
  { name: "Lovable", desc: "AI app builder", icon: "💜" },
  { name: "Vercel", desc: "Edge deployment", icon: "▲" },
  { name: "GitHub Actions", desc: "CI/CD automation", icon: "⚙️" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="font-mono-custom text-[10px] tracking-[0.5em] text-violet-400 mb-3">// 02. EXPERTISE</p>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white">
            TECHNICAL <span className="gradient-text">ARSENAL</span>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-3 mb-24">
          {skills.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${s.color}08, transparent)` }} />
              <div className="flex justify-between items-center mb-3">
                <span className="font-space text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{s.name}</span>
                <span className="font-mono-custom text-xs font-bold" style={{ color: s.color }}>{s.level}%</span>
              </div>
              <div className="skill-bar relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.level}%` } : {}}
                  transition={{ delay: 0.4 + i * 0.04, duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full relative"
                  style={{
                    background: `linear-gradient(90deg, ${s.color}60, ${s.color})`,
                    boxShadow: `0 0 10px ${s.color}60`,
                    height: "2px"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stack */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/30" />
            <p className="font-mono-custom text-[10px] tracking-[0.4em] text-cyan-400">⚡ AI-POWERED DEV STACK</p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/30" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {aiStack.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.07 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass rounded-xl p-4 text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 holo opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-2xl mb-2">{t.icon}</div>
                <p className="font-space text-xs font-semibold text-white mb-1">{t.name}</p>
                <p className="font-mono-custom text-[9px] text-slate-500">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
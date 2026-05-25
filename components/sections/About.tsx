"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "20+", label: "Projects Built", color: "#7c3aed" },
  { num: "15+", label: "Technologies", color: "#06b6d4" },
  { num: "10+", label: "AI Tools Used", color: "#d946ef" },
  { num: "5+", label: "Automation Flows", color: "#f59e0b" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="font-mono-custom text-[10px] tracking-[0.5em] text-violet-400 mb-3">// 01. ABOUT ME</p>
          <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white">
            ARCHITECTING THE<br />
            <span className="gradient-text">INTELLIGENT FUTURE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: "15s" }} />
              <div className="absolute inset-3 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: "10s", animationDirection: "reverse" }} />
              <div className="absolute inset-6 rounded-full border border-violet-500/30 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 neon-border rounded-2xl overflow-hidden">
                <div className="w-full h-full glass flex items-center justify-center flex-col gap-3">
                  <div className="text-6xl">🧠</div>
                  <p className="font-mono-custom text-[9px] text-slate-500 tracking-widest">YOUR PHOTO HERE</p>
                </div>
              </div>
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 rounded-full bg-violet-500 animate-pulse`}
                  style={{ animationDelay: `${i * 0.5}s`, boxShadow: "0 0 8px #7c3aed" }} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-space text-lg text-slate-300 leading-relaxed">
              I&apos;m a final-year{" "}
              <span className="text-violet-400 font-semibold">AI &amp; ML student at FAST NUCES Karachi</span>,
              obsessed with building intelligent systems that merge automation, creativity, and cutting-edge engineering.
            </p>
            <p className="font-space text-slate-400 leading-relaxed">
              I live at the bleeding edge combining{" "}
              <span className="text-cyan-400 font-medium">artificial intelligence</span>,{" "}
              <span className="text-pink-400 font-medium">creative development</span>, and{" "}
              <span className="text-amber-400 font-medium">automation engineering</span>{" "}
              to build systems that feel like they belong in the future.
            </p>
            <div className="glass rounded-xl p-4 font-mono-custom text-xs space-y-2">
              <p className="text-slate-600 text-[10px]">// current_status.json</p>
              <p><span className="text-violet-400">status</span><span className="text-slate-500">:</span> <span className="text-green-400">&quot;Building the future&quot;</span></p>
              <p><span className="text-violet-400">location</span><span className="text-slate-500">:</span> <span className="text-cyan-400">&quot;Karachi, Pakistan&quot;</span></p>
              <p><span className="text-violet-400">focus</span><span className="text-slate-500">:</span> <span className="text-pink-400">&quot;AI/ML + Creative Dev&quot;</span></p>
              <p><span className="text-violet-400">available</span><span className="text-slate-500">:</span> <span className="text-green-400">true</span></p>
            </div>
          </motion.div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at center, ${s.color}15, transparent)` }} />
              <p className="font-orbitron font-black text-3xl mb-2" style={{ color: s.color, textShadow: `0 0 20px ${s.color}` }}>
                {s.num}
              </p>
              <p className="font-mono-custom text-[10px] text-slate-500 tracking-widest">{s.label.toUpperCase()}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
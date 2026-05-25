"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  { title: "NeuralFlow Dashboard", desc: "AI-powered analytics dashboard with real-time predictions built with Next.js and ML inference APIs.", tags: ["Python", "React", "TensorFlow", "FastAPI"], color: "#7c3aed", emoji: "🧠", github: "#", demo: "#" },
  { title: "AutoMind Workflow Engine", desc: "Intelligent automation platform that orchestrates multi-step AI workflows using LLMs and custom agents.", tags: ["Python", "LangChain", "Automation", "APIs"], color: "#06b6d4", emoji: "⚡", github: "#", demo: "#" },
  { title: "Synthwave Portfolio", desc: "Immersive 3D portfolio experience with WebGL shaders, particle systems, and cinematic scroll animations.", tags: ["Three.js", "GSAP", "Next.js", "Shaders"], color: "#d946ef", emoji: "🎮", github: "#", demo: "#" },
  { title: "AI Code Reviewer", desc: "GitHub-integrated bot that analyzes PRs using Claude API and posts intelligent code review comments.", tags: ["Node.js", "Claude API", "GitHub Actions"], color: "#f59e0b", emoji: "🤖", github: "#", demo: "#" },
  { title: "SmartCV Builder", desc: "AI-assisted resume builder that rewrites and tailors CVs for specific job descriptions automatically.", tags: ["React", "OpenAI", "PDF Gen", "TypeScript"], color: "#10b981", emoji: "📄", github: "#", demo: "#" },
  { title: "DeepLens Vision App", desc: "Real-time computer vision app for object detection, segmentation, and scene understanding.", tags: ["Python", "PyTorch", "OpenCV", "FastAPI"], color: "#f43f5e", emoji: "👁️", github: "#", demo: "#" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <p className="font-mono text-xs tracking-[0.4em] text-violet-400 mb-4 uppercase">// 03. Featured Projects</p>
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">What I&apos;ve <span className="gradient-text">Built</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-2xl p-6 group relative overflow-hidden"
            style={{ borderColor: `${p.color}30` }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl"
              style={{ background: p.color, transform: "translate(30%,-30%)" }} />
            <div className="text-4xl mb-4">{p.emoji}</div>
            <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(t => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded" style={{ background: `${p.color}20`, color: p.color }}>{t}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-3 border-t border-white/5">
              <a href={p.github} className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors"><GitBranch size={14} /> Code</a>
              <a href={p.demo} className="flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 transition-colors"><ExternalLink size={14} /> Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
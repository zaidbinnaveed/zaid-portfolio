"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const quotes = [
  { text: "Zaid combines deep technical knowledge with rare creative instincts. His AI-powered workflows are next level.", name: "Classmate @ FAST NUCES", role: "Fellow AI Student" },
  { text: "His ability to rapidly prototype and deploy intelligent systems in days is genuinely impressive.", name: "Lab Partner", role: "Software Engineering Project" },
  { text: "One of the most automation-obsessed developers I've worked with — in the best possible way.", name: "Project Collaborator", role: "Hackathon Team" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <p className="font-mono text-xs tracking-[0.4em] text-violet-400 mb-4 uppercase">// 05. Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">What They <span className="gradient-text">Say</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-8"
          >
            <div className="text-5xl text-violet-500/30 font-serif mb-4">&quot;</div>
            <p className="text-slate-300 leading-relaxed mb-6 text-sm">{q.text}</p>
            <p className="font-semibold text-white text-sm">{q.name}</p>
            <p className="text-xs text-slate-500 font-mono">{q.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
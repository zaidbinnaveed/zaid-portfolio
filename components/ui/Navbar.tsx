"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Timeline", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-violet-500/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-violet-500/40 animate-spin" style={{ animationDuration: "8s" }} />
            {/* Inner diamond */}
            <div className="absolute inset-1 rounded-sm border border-cyan-400/60 rotate-45 group-hover:border-cyan-400 transition-colors" />
            {/* Center letter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-orbitron font-black text-sm gradient-text">Z</span>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2), transparent)", filter: "blur(4px)" }} />
          </div>
          <div className="hidden sm:block">
            <p className="font-orbitron text-xs font-bold text-white tracking-wider leading-none">ZAID</p>
            <p className="font-mono-custom text-[9px] text-violet-400 tracking-[0.2em] leading-none mt-0.5">AI/ML ENGINEER</p>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className={`px-4 py-2 text-xs font-mono-custom tracking-widest transition-all relative group ${
                active === l ? "text-white" : "text-slate-500 hover:text-slate-200"
              }`}
            >
              {active === l && (
                <motion.span layoutId="activeTab"
                  className="absolute inset-0 rounded"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)" }}
                />
              )}
              <span className="relative z-10">{l.toUpperCase()}</span>
            </button>
          ))}
          <a href="/cv.pdf" download
            className="ml-4 px-5 py-2 text-xs font-mono-custom tracking-widest border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 transition-all rounded relative overflow-hidden group"
          >
            <span className="relative z-10">CV ↓</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-violet-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 hover:text-white p-2">
          <div className="w-5 space-y-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-violet-500/20 px-6 py-6 flex flex-col gap-4"
          >
            {links.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="text-left text-xs font-mono-custom tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {l.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
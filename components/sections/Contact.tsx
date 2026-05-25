"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
        <p className="font-mono-custom text-[10px] tracking-[0.5em] text-violet-400 mb-3">// 06. CONTACT</p>
        <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-4">
          LET&apos;S BUILD SOMETHING <span className="gradient-text">EXTRAORDINARY</span>
        </h2>
        <p className="text-slate-400 mb-12 text-lg font-space">Open for collaborations, internships, and next-gen projects.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <p className="gradient-text font-orbitron font-bold text-xl">MESSAGE SENT!</p>
              <p className="text-slate-400 text-sm mt-2 font-space">I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {[
                ["Name", "text", "Your name"],
                ["Email", "email", "your@email.com"],
                ["Subject", "text", "Project collaboration"]
              ].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="text-[10px] font-mono-custom text-slate-500 tracking-widest mb-1 block">{label.toUpperCase()}</label>
                  <input type={type} placeholder={ph}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 transition-colors font-space"
                  />
                </div>
              ))}
              <div>
                <label className="text-[10px] font-mono-custom text-slate-500 tracking-widest mb-1 block">MESSAGE</label>
                <textarea rows={4} placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-violet-500/50 transition-colors resize-none font-space"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSent(true)}
                className="w-full py-3 rounded-lg font-mono-custom text-sm tracking-widest font-bold text-white transition-all relative overflow-hidden group"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
              >
                <span className="relative z-10">SEND MESSAGE →</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
          className="space-y-4 flex flex-col justify-center"
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
              label: "Email",
              value: "zaidbinnaveed04@gmail.com",
              href: "mailto:zaidbinnaveed04@gmail.com",
              color: "#7c3aed"
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              ),
              label: "GitHub",
              value: "https://github.com/zaidbinnaveed",
              href: "https://github.com/zaidbinnaveed",
              color: "#06b6d4"
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ),
              label: "LinkedIn",
              value: "https://www.linkedin.com/in/zaid-bin-naveed-b34559293/",
              href: "https://www.linkedin.com/in/zaid-bin-naveed-b34559293/",
              color: "#d946ef"
            },
          ].map((link, i) => (
            <motion.a key={i} href={link.href} target="_blank" rel="noreferrer"
              whileHover={{ x: 8, scale: 1.02 }}
              className="flex items-center gap-4 glass rounded-xl p-5 group transition-all"
              style={{ borderColor: `${link.color}20` }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: `${link.color}20`, color: link.color, boxShadow: `0 0 12px ${link.color}30` }}>
                {link.icon}
              </div>
              <div>
                <p className="text-[10px] font-mono-custom text-slate-500 tracking-widest">{link.label.toUpperCase()}</p>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors font-space">{link.value}</p>
              </div>
              <div className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">↗</div>
            </motion.a>
          ))}

          {/* CV Download */}
          <motion.a
            href="/cv.pdf" download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 justify-center py-4 rounded-xl font-mono-custom text-sm tracking-widest border text-violet-300 hover:text-white transition-all relative overflow-hidden group"
            style={{ borderColor: "rgba(124,58,237,0.4)", background: "rgba(124,58,237,0.05)" }}
          >
            <Download size={16} />
            <span>DOWNLOAD CV</span>
            <div className="absolute inset-0 bg-violet-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
          </motion.a>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center">
        <p className="font-mono-custom text-[10px] text-slate-600 tracking-widest">
          DESIGNED & BUILT BY <span className="gradient-text">ZAID BIN NAVEED</span> · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
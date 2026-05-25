"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function FloatingCV() {
  return (
    <motion.a
      href="/cv.pdf" download
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
        boxShadow: "0 0 20px rgba(124,58,237,0.6)",
      }}
    >
      <Download size={20} className="text-white" />
    </motion.a>
  );
}
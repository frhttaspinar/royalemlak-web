"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ContactActions() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Instagram — hover'da Instagram'ın orijinal gradient renklerine döner */}
      <motion.a
        href="https://www.instagram.com/royalemlak05/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Hesabımız"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="group w-14 h-14 rounded-full flex items-center justify-center border border-white/15 bg-white/5 text-slate-200 transition-colors duration-300 hover:border-transparent hover:text-white hover:bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </motion.a>

      {/* Google Değerlendirme — hover'da parlayan gold CTA */}
      <motion.a
        href="https://g.page/r/Cbv2GZsHw7-8EBM/review"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="group relative flex items-center gap-2 overflow-hidden px-6 py-4 rounded-full font-semibold text-slate-900 bg-gradient-to-r from-[#E4C77E] to-[#C5A253] shadow-lg shadow-[#C5A253]/30 hover:shadow-xl hover:shadow-[#C5A253]/50 transition-shadow"
      >
        {/* Üzerine gelince soldan sağa kayan parlama (shine) efekti */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
        <Star className="relative h-5 w-5 fill-slate-900/80" />
        <span className="relative">Google&apos;da Bizi Değerlendirin</span>
      </motion.a>
    </div>
  );
}

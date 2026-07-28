"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Star, Phone } from "lucide-react";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 min-h-[100px]">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Image
                src="/royallogo.png"
                alt="Royal Emlak ve Gayrimenkul Amasya"
                width={320}
                height={120}
                className="h-20 md:h-24 lg:h-28 w-auto object-contain rounded-3xl"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <NavLinks />
          </div>
          
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Link href="https://share.google/bEYhtgSnrT8vqj5Te" target="_blank" className="group flex items-center gap-2 px-4 py-2 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm">
              <Star className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              <span>Google'da Bizi Değerlendirin</span>
            </Link>
            <Link href="https://instagram.com/royalemlak05" target="_blank" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient-header)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform duration-300">
                <defs>
                  <linearGradient id="ig-gradient-header" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            
            <motion.a
              href="tel:+905443440520"
              className="group relative flex items-center gap-2 bg-white text-slate-800 px-5 py-2 h-10 rounded-full font-semibold border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ml-1 lg:ml-2"
            >
              <motion.div
                animate={{ rotate: [0, -15, 15, -15, 15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
                className="bg-green-50 text-green-600 p-1.5 rounded-full group-hover:bg-green-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span className="text-sm lg:text-base">0544 344 05 20</span>
            </motion.a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-slate-900 hover:text-slate-600 focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              <span className="sr-only">Menüyü aç/kapat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-lg flex flex-col">
              <Link href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Hakkımızda</Link>
              <Link href="#hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Hizmetlerimiz</Link>
              <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">Blog</Link>
              <Link
                href="https://wa.me/905443440520"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full block text-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium shadow-sm"
              >
                Hemen İletişime Geçin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

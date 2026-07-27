"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-slate-100">
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
                width={280}
                height={100}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <NavLinks />
          </div>
          
          <div className="hidden md:flex">
            <Link
              href="https://wa.me/905443440520"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-sm"
            >
              Hemen İletişime Geçin
            </Link>
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
              <Link href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md">İletişim</Link>
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

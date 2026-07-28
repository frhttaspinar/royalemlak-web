"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedAboutImage() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative h-[400px] md:h-[500px] order-2 md:order-1 cursor-pointer flex justify-center items-center"
      style={{
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 95%)',
        maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 95%)'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/5 z-10 hover:bg-transparent transition-colors duration-500 rounded-3xl"></div>
      <Image
        src="/2.png"
        alt="Amasya Satılık Çiçekli Bahçeli Ev"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105 rounded-3xl"
      />
    </motion.div>
  );
}

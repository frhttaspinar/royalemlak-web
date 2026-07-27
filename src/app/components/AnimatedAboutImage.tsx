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
      className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1 bg-slate-50 border border-slate-100 p-12 cursor-pointer"
    >
      <Image
        src="/royallogo.png"
        alt="Royal Emlak ve Gayrimenkul Amasya"
        fill
        className="object-contain p-8 md:p-16"
      />
    </motion.div>
  );
}

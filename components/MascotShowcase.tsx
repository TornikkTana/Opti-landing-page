"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MascotShowcase() {
  return (
    <section className="relative py-20 px-6 lg:px-12 w-full max-w-5xl mx-auto z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Glow effect behind mascot */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-emerald/10 blur-[130px] rounded-full -z-10 pointer-events-none" />

      {/* Left Text details */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-left flex flex-col gap-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
          <span className="text-[10px] font-mono font-bold text-brand-emerald uppercase tracking-wider">
            Brand Identity
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
          The Soul of our <br />
          <span className="text-brand-emerald">Infrastructure.</span>
        </h2>
        <p className="text-slate-300 text-base leading-relaxed max-w-md">
          Say hello to the Opti mascot—representing reliability, intelligence, and lightning-fast logistics. Designed to bring a friendly interface to Georgia's complex food supply chains.
        </p>
      </motion.div>

      {/* Right big image showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center relative"
      >
        {/* Floating/Hovering card containing mascot */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl border border-white/10 bg-bg-card/30 backdrop-blur-md flex items-center justify-center p-8 shadow-2xl hover:border-brand-emerald/30 hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src="/mascot.png"
              alt="Big Opti Mascot"
              fill
              className="object-contain"
              style={{ filter: "url(#remove-white-bg)" }}
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* SVG Filter to mathematically key out white backgrounds from mascot image */}
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="remove-white-bg">
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              -3 -3 -3 8.5 0
            " />
          </filter>
        </defs>
      </svg>
    </section>
  );
}

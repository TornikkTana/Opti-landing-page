"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 px-6 lg:px-12 w-full max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
      {/* Background glow behind Hero */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-emerald/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white max-w-5xl">
          Let's Build the <br />
          <span className="text-brand-emerald drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]">
            B2B Operating System.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-2xl tracking-wide max-w-2xl font-light mt-4">
          One bold vision for Georgia's supply chain.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <a
            href="#connect"
            className="px-6 py-3 rounded-xl bg-brand-emerald hover:bg-brand-emerald/90 text-bg-deep font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] text-sm"
          >
            Connect With Us
          </a>
          <a
            href="#timeline"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold transition-all text-sm hover:bg-white/10"
          >
            View Roadmap
          </a>
        </div>
      </motion.div>
    </section>
  );
}

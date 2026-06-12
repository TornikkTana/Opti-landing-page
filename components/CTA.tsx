"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="connect" className="relative py-24 px-6 lg:px-12 w-full max-w-4xl mx-auto text-center z-10">
      {/* Background glow effects */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-emerald/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Header text */}
      <div className="mb-10 max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Scan to Connect
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-light">
          Direct route to our founding team.
        </p>
      </div>

      {/* Terminal Card Outer Container */}
      <div className="relative w-full max-w-[240px] mx-auto mt-6">
        {/* The Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-bg-card border border-white/10 p-5 shadow-2xl flex flex-col items-center justify-center text-center relative z-10 rounded-2xl hover:shadow-[0_0_30px_rgba(124,229,186,0.15)] hover:border-brand-emerald/30 transition-all duration-300"
        >
          {/* QR Code Container */}
          <div className="bg-white rounded-xl p-2 w-32 h-32 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(124,229,186,0.25)] border border-brand-emerald/20">
            <Image
              src="/optistartup.svg"
              alt="Opti Contact QR Code"
              width={112}
              height={112}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          <h4 className="text-xs font-bold text-white tracking-wide">Scan to Connect</h4>
          <a
            href="mailto:optistartup@gmail.com"
            className="text-[9px] text-slate-500 font-mono mt-1 hover:text-brand-emerald transition-colors"
          >
            optistartup@gmail.com
          </a>
        </motion.div>

        {/* Mascot Layer with entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
          className="absolute -right-12 -bottom-10 z-20"
        >
          <div className="relative w-24 h-24">
            <Image
              src="/mascot.png"
              alt="Opti Mascot"
              fill
              className="object-contain animate-pulse"
              style={{ filter: "url(#remove-white-bg)" }}
            />
          </div>
        </motion.div>
      </div>

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

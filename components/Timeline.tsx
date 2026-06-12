"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 px-6 lg:px-12 w-full max-w-5xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Next 6 Months & Beyond
        </h2>
      </div>

      {/* Timeline Grid Container */}
      <div className="relative">
        {/* Horizontal connecting line on large screens */}
        <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-emerald via-indigo-500 to-transparent z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Node 1: Next 6 Months */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-brand-emerald/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col gap-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-emerald/10 border border-brand-emerald flex items-center justify-center font-mono text-sm font-bold text-brand-emerald shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                01
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-emerald uppercase tracking-wider block">
                  Next 6 Months
                </span>
                <h3 className="text-lg font-black text-white group-hover:text-brand-emerald transition-colors duration-300">
                  MVP Launch
                </h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-brand-emerald transition-colors duration-300">
              Funding our first 50 Beta Restaurants and activating RS.ge automation.
            </p>
          </motion.div>

          {/* Node 2: Beyond 6 Months */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col gap-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500 flex items-center justify-center font-mono text-sm font-bold text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                02
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider block">
                  Beyond 6 Months
                </span>
                <h3 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors duration-300">
                  Bank Integration
                </h3>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-indigo-400 transition-colors duration-300">
              Deploying the factoring layer and establishing direct corporate banking API connections.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

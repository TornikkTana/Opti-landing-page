"use client";

import React from "react";
import { motion } from "framer-motion";

// TypeScript interface for Core Ask Cards
interface AskCardItem {
  number: string;
  title: string;
  description: string;
  badgeText: string;
  badgeType: "cu" | "phase2" | "safe";
  icon: React.ReactNode;
}

const cardsData: AskCardItem[] = [
  {
    number: "01",
    title: "The MVP Launch 🏆",
    description:
      "CUnicorn Prize to fund our first 50 Beta Restaurants & live RS.ge automation.",
    badgeText: "[CU]",
    badgeType: "cu",
    icon: (
      <svg
        className="w-5 h-5 text-brand-emerald"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 21l8.904-4.473L21 21l-1.813-5.096m-11-5h11m-11 4h11m-11-8h11M3 3h1.813M3 7h1.813M3 11h1.813"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "The Bank Partnership 🏦",
    description:
      "Direct intros to Bank Open API & Corporate Banking teams for our Phase 2 factoring layer.",
    badgeText: "PHASE 2",
    badgeType: "phase2",
    icon: (
      <svg
        className="w-5 h-5 text-amber-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5M3 21h18M12 9h.008v.008H12V9zm0 3h.008v.008H12V12z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "The Seed Round 🚀",
    description:
      "Pre-Seed syndication with Axel Angels. SAFE note, MFN clause, pro-rata rights.",
    badgeText: "SAFE",
    badgeType: "safe",
    icon: (
      <svg
        className="w-5 h-5 text-indigo-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.64 3a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0014.36 21c.54 0 1.08-.07 1.6-.2a14.96 14.96 0 00-1.6-4.63l-.77-1.8z"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="asks" className="relative py-20 px-6 lg:px-12 w-full max-w-7xl mx-auto z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-widest block mb-3">
          Our Roadmap Asks
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Strategic Milestones
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-xl">
          We are executing in phases. Here are the core objectives that will drive the expansion of our B2B BSF ecosystem.
        </p>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, idx) => (
          <motion.div
            key={card.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="group relative flex flex-col justify-between bg-bg-card/45 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Top Row: Number & Icon */}
            <div className="flex justify-between items-center mb-6">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-sans font-black text-sm transition-colors duration-300 ${
                  card.badgeType === "cu"
                    ? "bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald group-hover:bg-brand-emerald/25"
                    : card.badgeType === "phase2"
                    ? "bg-amber-500/10 border border-amber-500/20 text-amber-500 group-hover:bg-amber-500/25"
                    : "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/25"
                }`}
              >
                {card.number}
              </div>
              <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                {card.icon}
              </div>
            </div>

            {/* Mid Row: Title & Subtitle */}
            <div className="flex-1 flex flex-col gap-2 mb-8">
              <h3 className="text-lg font-bold text-white group-hover:text-brand-emerald transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom Row: Badge Pill */}
            <div className="flex justify-end pt-4 border-t border-white/5">
              {card.badgeType === "cu" ? (
                <div className="px-3 py-1 bg-white/10 rounded text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {card.badgeText}
                </div>
              ) : card.badgeType === "phase2" ? (
                <span className="text-[9px] font-mono font-bold text-amber-500 border border-amber-500/20 bg-amber-500/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {card.badgeText}
                </span>
              ) : (
                <span className="text-[9px] font-mono font-bold text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {card.badgeText}
                </span>
              )}
            </div>

            {/* Overlay border hover glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-brand-emerald/10 rounded-2xl pointer-events-none transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

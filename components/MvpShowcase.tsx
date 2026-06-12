"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MvpShowcase() {
  return (
    <section id="mvp" className="relative py-20 px-6 lg:px-12 w-full max-w-7xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Header */}
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-widest block mb-3">
          MVP Preview
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          The Ordering & Financing MVP
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-xl">
          Chefs order instantly syncing compliant invoices to suppliers with 3% cash-out options.
        </p>
      </div>

      {/* Three Column Grid - Symmetrical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
        {/* Column 1: Global Product Catalog (lg:col-span-3) */}
        <div className="lg:col-span-3 flex justify-center w-full order-2 lg:order-1">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-brand-emerald/40 rounded-2xl p-4 shadow-2xl transition-all duration-300 flex flex-col gap-3 text-left w-full max-w-[260px] mx-auto"
          >
            <div>
              <h4 className="text-white font-bold text-sm leading-tight group-hover:text-brand-emerald transition-colors duration-300">
                Global Product Catalog
              </h4>
              <p className="text-slate-500 text-[9px] mt-0.5">
                Browse food and supplies from all verified vendors.
              </p>
            </div>

            {/* Search Input Mockup */}
            <div className="border border-white/10 rounded-lg p-2 bg-white/5 flex items-center gap-1.5 mb-1 select-none">
              <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[9px] text-slate-400 truncate">Search SKU or supplier...</span>
            </div>

            {/* Categories Mockup */}
            <div className="flex flex-wrap gap-1.5 mb-1.5 select-none">
              <span className="px-2.5 py-0.5 bg-brand-emerald text-bg-deep text-[8px] rounded-full font-bold">All</span>
              <span className="px-2.5 py-0.5 bg-white/5 text-slate-300 border border-white/10 text-[8px] rounded-full font-medium">Dairy</span>
              <span className="px-2.5 py-0.5 bg-white/5 text-slate-300 border border-white/10 text-[8px] rounded-full font-medium">Dry Goods</span>
            </div>

            {/* Product Items Mini Grid */}
            <div className="grid grid-cols-2 gap-2">
              {/* Item 1 */}
              <div className="border border-white/5 bg-white/[0.01] rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="h-16 bg-red-500/10 relative flex items-center justify-center text-xl font-bold">
                  🍅
                  <span className="absolute top-1 left-1 bg-white/10 text-brand-emerald text-[7px] px-1 py-0.2 rounded font-mono border border-white/5">
                    Produce
                  </span>
                </div>
                <div className="p-1.5 flex flex-col gap-1">
                  <div className="font-bold text-[9px] text-white truncate">Tomato</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-bold text-[9px] text-brand-emerald">$3.00</span>
                    <span className="bg-brand-emerald text-bg-deep text-[8px] px-1.5 py-0.5 rounded font-black cursor-pointer">+</span>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="border border-white/5 bg-white/[0.01] rounded-lg overflow-hidden flex flex-col justify-between">
                <div className="h-16 bg-yellow-500/10 relative flex items-center justify-center text-xl font-bold">
                  🌾
                  <span className="absolute top-1 left-1 bg-white/10 text-orange-400 text-[7px] px-1 py-0.2 rounded font-mono border border-white/5">
                    Dry
                  </span>
                </div>
                <div className="p-1.5 flex flex-col gap-1">
                  <div className="font-bold text-[9px] text-white truncate">Flour</div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-bold text-[9px] text-brand-emerald">$9.00</span>
                    <span className="bg-brand-emerald text-bg-deep text-[8px] px-1.5 py-0.5 rounded font-black cursor-pointer">+</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 2: Dashboard Screenshot Window (lg:col-span-6) */}
        <div className="lg:col-span-6 flex items-center justify-center relative w-full order-1 lg:order-2">
          <motion.div
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-bg-card/25 backdrop-blur-md hover:border-brand-emerald/30 transition-all duration-300"
          >
            {/* Window Titlebar */}
            <div className="bg-bg-card2/80 border-b border-white/5 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-brand-emerald/80" />
              <span className="text-[11px] text-slate-500 font-mono ml-2">optichat_preview</span>
            </div>

            <Image
              src="/MVP-Screenshot.png"
              alt="Ordering Interface Screenshot"
              width={2286}
              height={1456}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>
        </div>

        {/* Column 3: Supplier Wallet widget (lg:col-span-3) */}
        <div className="lg:col-span-3 flex justify-center w-full order-3 lg:order-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 hover:border-brand-emerald/40 rounded-2xl p-6 w-full max-w-[260px] shadow-2xl transition-all duration-300 flex flex-col gap-4 text-left mx-auto"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <div className="bg-brand-emerald/10 rounded-full p-1.5 border border-brand-emerald/20 text-brand-emerald shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider font-mono font-bold">
                  Supplier Wallet
                </span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-white/5">
                NET-30
              </span>
            </div>

            <div>
              <div className="text-[10px] text-slate-400 mb-1 font-mono tracking-wide">
                Unpaid Invoice #4AE9E126
              </div>
              <div className="font-black text-2xl text-white group-hover:text-brand-emerald transition-colors duration-300">
                $120.00
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-brand-emerald to-[#059669] hover:from-brand-emerald/90 hover:to-[#059669]/90 text-bg-deep rounded-xl py-2.5 flex items-center justify-center gap-1.5 font-bold text-xs shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Get Paid Now (3%)
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoWindow() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="relative py-16 px-6 lg:px-12 w-full max-w-5xl mx-auto z-10 flex flex-col items-center">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Opti in Action
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-md">
          Watch how our integrated ecosystem coordinates delivery and financial flow in real time.
        </p>
      </div>

      {/* Mock OS Window Container */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        onClick={toggleFullscreen}
        className="w-full max-w-3xl bg-bg-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group hover:border-brand-emerald/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300"
      >
        {/* OS Titlebar */}
        <div className="bg-bg-card2/80 border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-brand-emerald/80" />
          </div>
          <div className="text-[10px] text-slate-500 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5 flex items-center gap-1 group-hover:text-brand-emerald transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
            <span>Click to Expand</span>
          </div>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-black/40 flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/Mascot_syncs_delivery_truck_energy_202606101335.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Subtle Hover Play Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-brand-emerald/90 text-bg-deep flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal Theater View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleFullscreen}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-colors border border-white/10"
              aria-label="Close Fullscreen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Glowing effect inside fullscreen modal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/10 blur-[160px] rounded-full pointer-events-none" />

            {/* Video frame inside modal */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-bg-card border border-white/15 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Top info bar */}
              <div className="bg-bg-card2/80 border-b border-white/5 px-4 py-2.5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="text-brand-emerald font-bold">LIVE PLATFORM ENVIRONMENT</span>
                <span>ESC to Exit</span>
              </div>
              <div className="relative aspect-video bg-black">
                <video
                  ref={fullscreenVideoRef}
                  src="/Mascot_syncs_delivery_truck_energy_202606101335.mp4"
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  loop
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

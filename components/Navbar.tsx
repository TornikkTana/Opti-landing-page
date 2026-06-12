"use client";

import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-b border-white/5 bg-black/10 backdrop-blur-md fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between"
    >
      <a href="#" className="focus:outline-none">
        <Logo />
      </a>
      
      <nav className="hidden md:flex items-center gap-20 text-sm font-medium text-slate-400">
        <a href="#mvp" className="hover:text-brand-emerald transition-colors">MVP</a>
        <a href="#team" className="hover:text-brand-emerald transition-colors">Team</a>
        <a href="#connect" className="hover:text-brand-emerald transition-colors">Connect</a>
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="#connect"
          className="px-4 py-1.5 rounded-lg bg-brand-emerald hover:bg-brand-emerald/90 text-bg-deep text-xs font-bold transition-all shadow-[0_0_15px_rgba(124,229,186,0.3)] hover:shadow-[0_0_25px_rgba(124,229,186,0.5)]"
        >
          Get Started
        </a>
      </div>
    </motion.header>
  );
}

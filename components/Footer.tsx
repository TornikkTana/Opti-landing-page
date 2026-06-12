"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-white/[0.01] backdrop-blur-xl py-8 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-sans text-base font-black tracking-tight text-white">
              Opti<span className="text-brand-emerald">.</span>
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            © 2026 Opti. All rights reserved.
          </span>
          <a
            href="mailto:optistartup@gmail.com"
            className="text-xs text-brand-emerald/80 hover:text-brand-emerald transition-colors font-mono mt-1"
          >
            optistartup@gmail.com
          </a>
        </div>

        {/* Right: LinkedIn Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-slate-400">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">Connect:</span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/torniketananashvili/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all text-xs font-medium text-white flex items-center gap-1.5 shadow-md hover:shadow-[0_0_15px_rgba(124,229,186,0.1)]"
            >
              <svg className="w-3.5 h-3.5 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Tornike Tananashvili
            </a>
            <a
              href="https://www.linkedin.com/in/datopapashvili/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:border-brand-emerald/30 hover:bg-brand-emerald/5 transition-all text-xs font-medium text-white flex items-center gap-1.5 shadow-md hover:shadow-[0_0_15px_rgba(124,229,186,0.1)]"
            >
              <svg className="w-3.5 h-3.5 text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Dato Papashvili
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

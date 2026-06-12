import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-10 h-10 rounded-full border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.4)] bg-emerald-500/5 flex items-center justify-center">
        <Image
          src="/mascot.png"
          alt="Mascot Logo"
          fill
          className="object-contain scale-110"
          style={{ filter: "url(#remove-white-bg)" }}
        />
      </div>
      <span className="font-sans text-xl md:text-2xl font-black tracking-tight text-white">
        Opti<span className="text-brand-emerald">.</span>
      </span>

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
    </div>
  );
}

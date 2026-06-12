import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-14 h-14 select-none">
      <Image
        src="/mascot.png"
        alt="Mascot Logo"
        fill
        className="object-contain"
        style={{ filter: "url(#remove-white-bg)" }}
        priority
      />

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

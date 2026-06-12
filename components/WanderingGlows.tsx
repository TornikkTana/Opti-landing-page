"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WanderingGlows() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Glow Circle 1 (Emerald) */}
      <motion.div
        animate={{
          x: ["-10vw", "25vw", "-5vw", "-10vw"],
          y: ["-10vh", "35vh", "10vh", "-10vh"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-brand-emerald/8 blur-[100px] sm:blur-[130px] top-20 left-10"
      />

      {/* Glow Circle 2 (Indigo) */}
      <motion.div
        animate={{
          x: ["10vw", "-20vw", "5vw", "10vw"],
          y: ["10vh", "-25vh", "20vh", "10vh"],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-indigo-500/5 blur-[100px] sm:blur-[130px] bottom-40 right-10"
      />

      {/* Glow Circle 3 (Emerald) */}
      <motion.div
        animate={{
          x: ["-15vw", "15vw", "-25vw", "-15vw"],
          y: ["20vh", "-15vh", "-5vh", "20vh"],
          scale: [1, 1.1, 0.8, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-brand-emerald/6 blur-[90px] sm:blur-[120px] top-1/2 left-1/4"
      />
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Tornike Tananashvili",
    role: "Co-Founder & CEO",
    image: "/co-ceo-tech.png",
    description:
      "3+ Years of experience in Operations and Tech",
    skills: ["Web Developer", "UI/UX Designer", "Operations Manager"],
  },
  {
    name: "Davit Papashvili",
    role: "Co-Founder & CFO",
    image: "/co-ceo-finance.png",
    description:
      "3+ Years of experience in Finance and Management",
    skills: ["Financial Analyst", "Investor", "Trader"],
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 px-6 lg:px-12 w-full max-w-5xl mx-auto z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Layout Columns */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-stretch max-w-4xl mx-auto">
        {/* Vertical Separator Line for md and larger */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-emerald/20 to-transparent -translate-x-1/2" />

        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex flex-col items-center justify-between text-center px-4 md:px-8 py-4"
          >
            <div className="flex flex-col items-center">
              {/* Profile Image with Ring Glow */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-brand-emerald shadow-[0_0_25px_rgba(124,229,186,0.3)] bg-emerald-500/5 transition-transform duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.role}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-extrabold text-white mt-6">
                {member.name}
              </h3>
              <span className="text-brand-emerald text-xs font-mono font-bold tracking-widest uppercase mt-1">
                {member.role}
              </span>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4 max-w-sm">
                {member.description}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {member.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 bg-white/5 border border-white/10 hover:border-brand-emerald/30 hover:bg-brand-emerald/5 rounded-full text-[9px] font-mono font-bold text-brand-emerald tracking-wider uppercase transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

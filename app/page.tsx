import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoWindow from "@/components/VideoWindow";
import MvpShowcase from "@/components/MvpShowcase";
import MascotShowcase from "@/components/MascotShowcase";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WanderingGlows from "@/components/WanderingGlows";

export default function Home() {
  return (
    <>
      <WanderingGlows />
      <Navbar />
      <main className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <VideoWindow />
        <MvpShowcase />
        <MascotShowcase />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

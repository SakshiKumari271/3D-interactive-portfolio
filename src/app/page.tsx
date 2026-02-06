"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <SmoothScroll>
      <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        {/* Modern AI Grid Background */}
        <div className="h-screen w-full dark:bg-[#000319] bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="max-w-7xl w-full z-10">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
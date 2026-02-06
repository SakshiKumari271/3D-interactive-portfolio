"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider, // Added this import
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
      <TooltipProvider> {/* Wrap your tooltips in a Provider */}
        <div className="grid md:grid-cols-2">
          <div
            className={cn(
              "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
              "col-span-1",
              "flex flex-col justify-start md:justify-center items-center md:items-start",
              "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
            )}
          >
            {!isLoading && (
              <>
                <div className="">
                  <BlurIn delay={0.7}>
                    <div className="md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text">
                      Hi, I am
                      <br className="md:hidden" />
                    </div>
                  </BlurIn>
                  <BlurIn delay={1}>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <h1 className="font-thin text-6xl text-transparent text-slate-800 dark:text-white ml-1 text-left cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl">
                          {config.author.split(" ")[0]}
                          <br className="md:block hidden" />
                          {config.author.split(" ")[1]}
                        </h1>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        className="dark:bg-white dark:text-black"
                      >
                        Check the console for a surprise!
                      </TooltipContent>
                    </Tooltip>
                  </BlurIn>
                  <BlurIn delay={1.2}>
                    <p className="md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3 cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text">
                      Python Developer | AI & Logic Enthusiast
                    </p>
                  </BlurIn>
                </div>

                <div className="mt-8 md:ml-2 flex flex-col gap-3 w-full max-w-sm">
                  <BoxReveal delay={2} width="100%">
                    <a
                      href="sakshi-resume.pdf"
                      download="Sakshi_Kumari_Resume.pdf"
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all w-full"
                    >
                      <File size={20} />
                      Download Resume
                    </a>
                  </BoxReveal>

                  <div className="md:self-start flex gap-3">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <Link href={"#contact"} className="flex-1">
                          <Button
                            variant={"outline"}
                            className="w-full overflow-hidden"
                          >
                            Hire Me
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{`Let's collaborate! 🥹`}</p>
                      </TooltipContent>
                    </Tooltip>
                    
                    <Link href={config.social.github} target="_blank">
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link href={config.social.linkedin} target="_blank">
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </TooltipProvider>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
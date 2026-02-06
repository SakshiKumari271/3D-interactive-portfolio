"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";

// Define the structure so the computer knows what a 'project' is
interface Project {
  id: number;
  title: string;
  category: string;
  src: string;
  live: string;
  description: string;
  skills: {
    frontend: any[];
    backend?: any[];
  };
  content: React.ReactNode;
}

const ProjectsSection = () => {
  return (
    // Added relative z-20 to ensure clicks aren't blocked by background particles
    <section id="projects" className="relative z-20 max-w-7xl mx-auto py-20">
      <h2 className="text-center text-4xl md:text-7xl mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project) => (
          <Modall key={project.id} project={project as Project} />
        ))}
      </div>
    </section>
  );
};

const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex justify-center">
      <Modal>
        {/* ModalTrigger wraps the card to make the whole card clickable */}
        <ModalTrigger className="bg-transparent group/modal-btn p-0 border-none">
          <div className="relative w-[350px] aspect-[3/2] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              src={project.src} 
              alt={project.title} 
              fill 
              sizes="350px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
              <p className="text-xl font-bold text-white mb-1">{project.title}</p>
              <p className="text-xs text-blue-400 uppercase tracking-widest font-semibold">{project.category}</p>
            </div>
          </div>
        </ModalTrigger>

        {/* ModalBody handles the popup content */}
        <ModalBody className="bg-[#000319] border border-white/10 max-w-4xl">
          <ModalContent>
            <div className="p-2 md:p-4">
              <h4 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                {project.title}
              </h4>
              
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {project.skills.frontend && project.skills.frontend.length > 0 && (
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase text-zinc-500">Core Logic</span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend && project.skills.backend.length > 0 && (
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase text-zinc-500">Tools & ML</span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </div>

              {/* Detailed Project Content from data/projects.ts */}
              <div className="mt-4 prose prose-invert max-w-none">
                {project.content}
              </div>
            </div>
          </ModalContent>
          
          <ModalFooter className="bg-black/50">
            <Link href={project.live} target="_blank" className="w-full">
              <button className="w-full py-3 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                View GitHub Source
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;
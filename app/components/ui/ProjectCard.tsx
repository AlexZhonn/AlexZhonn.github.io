// app/components/ui/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/Project";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
  isReversed: boolean; // To handle the alternating layout
}

export const ProjectCard = ({ project, isReversed }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 md:gap-20 items-center py-16 border-b border-white/5 last:border-0`}
    >
      {/* --- Image Section --- */}
      <div className="w-full md:w-3/5 relative group">
        {/* subtle glow effect behind image on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className=" rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video relative z-10">
          {/* IMPORTANT: For local images, use: src={project.imageUrl}
             You also need to configure next.config.mjs if using external images like placehold.co
           */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* --- Text Section --- */}
      <div className="w-full md:w-2/5 space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          {project.title}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech: any, index: any) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-blue-200 bg-blue-900/30 rounded-full border border-blue-800/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-6">
          {/* Demo Button (White style like hero) */}
          <Link
            href={project.demoLink}
            target="_blank"
            className="group relative h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Code Button (Outline style) */}
          <Link
            href={project.codeLink}
            target="_blank"
            className="h-12 px-6 rounded-full border border-gray-700 text-white font-medium hover:bg-gray-900 hover:border-gray-500 transition-colors flex items-center gap-2"
          >
            View Code
            <CodeBracketIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

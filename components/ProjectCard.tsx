import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/profile";

export default function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-8 sm:flex-row ${
        reverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-64 sm:w-1/2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="w-full sm:w-1/2">
        <span className="text-xs font-medium uppercase tracking-wide text-primary-cyan">
          {project.tag}
        </span>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-body-2 text-white/70">{project.description}</p>
        <div className="mt-4 flex gap-4 text-white/60">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le dépôt GitHub"
              className="transition-colors hover:text-primary-cyan"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Voir le projet en ligne"
              className="transition-colors hover:text-primary-cyan"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

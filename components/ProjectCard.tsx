"use client";

import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/data/profile";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Animation d'apparition au scroll (ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Déclenche l'animation quand le haut du composant atteint 85% du viewport
          toggleActions: "play none none reverse",
        },
      });

      // Décalage selon le sens (reverse ou non)
      const xImage = reverse ? 50 : -50;
      const xContent = reverse ? -50 : 50;

      tl.from(imageRef.current, {
        x: xImage,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        contentRef.current,
        {
          x: xContent,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6", // Chevauchement des animations
      );
    },
    { scope: cardRef },
  );

  // 2. Effet Hover fluide sur l'image
  const handleMouseEnter = () => {
    const img = imageRef.current?.querySelector("img");
    if (img) {
      gsap.to(img, { scale: 1.08, duration: 0.4, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    const img = imageRef.current?.querySelector("img");
    if (img) {
      gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col items-center gap-8 sm:flex-row ${
        reverse ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Conteneur d'image */}
      <div
        ref={imageRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-52 w-full overflow-hidden rounded-2xl border border-white/10 sm:h-64 sm:w-1/2 cursor-pointer"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-none"
        />
      </div>

      {/* Contenu textuel */}
      <div ref={contentRef} className="w-full sm:w-1/2">
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

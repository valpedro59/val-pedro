"use client";

import { useRef } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { profile } from "@/data/profile";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: -20,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          "-=0.5",
        )
        .from(
          roleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          "-=0.6",
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 20,
          },
          "-=0.6",
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
          },
          "-=0.6",
        )
        .from(
          signatureRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="
        relative isolate min-h-[780px] overflow-hidden
        bg-primary-dark
        sm:min-h-[820px]
        lg:min-h-screen
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Overlay global */}
      <div className="absolute inset-0 -z-10 bg-primary-dark/10" />

      {/* Dégradé sombre à gauche */}
      <div
        className="
          absolute inset-0 -z-10
          bg-linear-to-r
          from-primary-dark/95
          via-primary-dark/65
          to-transparent
        "
      />

      {/* Dégradé inférieur */}
      <div
        className="
          absolute inset-x-0 bottom-0 -z-10 h-72
          bg-linear-to-t
          from-primary-dark
          via-primary-dark/70
          to-transparent
        "
      />

      {/* GLOW / LIGHT EFFECTS */}
      <div
        className="
          pointer-events-none absolute
          -left-40 top-1/4
          h-[30rem] w-[30rem]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-40 top-0
          h-[35rem] w-[35rem]
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative mx-auto flex min-h-[780px]
          max-w-7xl items-end
          px-6 pb-20 pt-32
          sm:min-h-[820px]
          sm:px-10
          md:px-16
          lg:min-h-screen
          lg:items-center
          lg:pb-0
        "
      >
        <div
          className="
            relative z-10
            max-w-xl
            text-left
          "
        >
          {/* Petit label */}
          <div ref={badgeRef} className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-violet-500" />
            <span
              className="
                font-mono text-xs font-medium
                uppercase tracking-[0.25em]
                text-blue-300
              "
            >
              Full Stack Engineer
            </span>
          </div>

          {/* Heading */}
          <h1
            ref={titleRef}
            className="
              font-heading
              text-4xl font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-white via-blue-200 to-violet-400 bg-clip-text text-transparent">
              {profile.name.split(" ")[0]}
            </span>
          </h1>

          {/* Role */}
          <p
            ref={roleRef}
            className="
              mt-4
              font-heading
              text-2xl font-semibold
              text-white
              sm:text-3xl
            "
          >
            {profile.role}
            <span className="text-blue-400">.</span>
          </p>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="
              mt-6 max-w-lg
              text-base leading-7
              text-white/65
              sm:text-lg
            "
          >
            {profile.tagline}
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="#contact">
              {profile.ctaLabel}
            </Button>

            <a
              href="#projects"
              className="
                inline-flex items-center
                gap-2 rounded-full
                border border-white/15
                bg-white/5
                px-6 py-3
                text-sm font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-blue-400/40
                hover:bg-white/10
              "
            >
              Voir mes projets
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Tech signature */}
          <div
            ref={signatureRef}
            className="mt-10 flex items-center gap-3 text-xs text-white/40"
          >
            <span className="font-mono">{"<code>"}</span>
            <span className="h-px w-8 bg-white/15" />
            <span>Build · Deploy · Repeat</span>
            <span className="font-mono">{"</code>"}</span>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
    </section>
  );
}

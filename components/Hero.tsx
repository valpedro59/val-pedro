import Image from "next/image";
import Button from "./ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center gap-10 overflow-hidden px-6 pb-20 pt-16 sm:flex-row sm:justify-between sm:pt-24 md:px-16"
    >
      {/* Halo de fond, décoratif */}
      <div className="orbit-glow pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-xl text-center sm:text-left">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-h1">
          Hi, I&apos;m {profile.name.split(" ")[0]}
        </h1>
        <p className="mt-2 bg-gradient-primary bg-clip-text font-heading text-2xl font-semibold text-transparent sm:text-3xl">
          {profile.role}.
        </p>
        <p className="mt-6 text-body-2 text-white/70">{profile.tagline}</p>
        <div className="mt-8">
          <Button as="a" href="#contact">
            {profile.ctaLabel}
          </Button>
        </div>
      </div>

      <div className="relative z-10 h-64 w-56 shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:h-80 sm:w-72">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          sizes="320px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

"use client";

import { skillIcons } from "./icon-map";

export default function TechOrbit({ skills }: { skills: string[] }) {
  const count = skills.length;

  return (
    <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
      <div className="orbit-glow absolute inset-0 rounded-full blur-2xl" />

      {/* Anneaux */}
      <div className="absolute h-full w-full rounded-full border border-white/10" />
      <div className="absolute h-[75%] w-[75%] rounded-full border border-white/10" />

      {/* Centre : logo/monogramme */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-lg font-bold text-white shadow-lg shadow-primary-magenta/30">
        VP
      </div>

      {/* Icônes en orbite, réparties régulièrement sur le cercle */}
      {skills.map((iconName, i) => {
        const Icon = skillIcons[iconName];
        const angle = (360 / count) * i;
        return (
          <div
            key={iconName}
            className="absolute h-full w-full"
            style={{
              // @ts-expect-error -- propriété CSS personnalisée
              "--start": `${angle}deg`,
              animation: "orbit-rotate 32s linear infinite",
            }}
          >
            <div
              className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-primary-dark text-primary-cyan"
              style={{ animation: "orbit-counter 32s linear infinite" }}
            >
              {Icon ? <Icon size={18} /> : null}
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes orbit-rotate {
          from { transform: rotate(var(--start)); }
          to { transform: rotate(calc(var(--start) + 360deg)); }
        }
        @keyframes orbit-counter {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="orbit-rotate"], [style*="orbit-counter"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

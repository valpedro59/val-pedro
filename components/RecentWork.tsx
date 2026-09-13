import ProjectCard from "./ProjectCard";
import { projects } from "@/data/profile";

export default function RecentWork() {
  return (
    <section id="work" className="px-6 py-24 md:px-16">
      <div className="text-center">
        <h2 className="bg-gradient-primary bg-clip-text font-heading text-3xl font-semibold text-transparent sm:text-h2">
          Recent Work
        </h2>
        <p className="mt-3 text-body-2 text-white/60">
          Une sélection de projets sur lesquels j&apos;ai travaillé.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-16">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

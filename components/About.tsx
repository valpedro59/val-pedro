import TechOrbit from "./TechOrbit";
import { about } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 text-center md:px-16">
      <h2 className="bg-gradient-primary bg-clip-text font-heading text-3xl font-semibold text-transparent sm:text-h2">
        {about.title}
      </h2>
      <p className="mx-auto mt-8 max-w-3xl text-body-2 text-white/70">
        {about.paragraph}
      </p>

      <div className="mt-16">
        <TechOrbit skills={about.skills} />
      </div>
    </section>
  );
}

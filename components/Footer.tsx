import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { footer, socials } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-white/5 px-6 py-8 text-sm text-white/50 sm:flex-row sm:justify-between md:px-16">
      <span>
        {footer.year} · {footer.name}, All rights reserved
      </span>
      <div className="flex gap-4">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
            <FaGithub size={18} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" className="hover:text-white">
            <FaXTwitter size={18} />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin size={18} />
          </a>
        )}
      </div>
    </footer>
  );
}

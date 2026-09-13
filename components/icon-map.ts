import { Code2, Terminal, Database, Braces, Palette, GitBranch } from "lucide-react";
import { FaFigma, FaGithub } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

// lucide-react n'a plus les logos de marque (Figma, Github, Twitter, LinkedIn…) :
// ils passent par react-icons à la place, en plus des icônes génériques lucide.
export const skillIcons: Record<string, LucideIcon | IconType> = {
  Code2,
  Terminal,
  Database,
  Braces,
  Palette,
  GitBranch,
  Figma: FaFigma,
  Github: FaGithub,
};

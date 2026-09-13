// ─────────────────────────────────────────────────────────────
// 🖊️  MODIFIE UNIQUEMENT CE FICHIER POUR PERSONNALISER TON SITE
// Tous les composants lisent leurs textes/images depuis cet objet.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Val Clancy Pedro",
  role: "Fullstack Developer",
  tagline:
    "Developpeur Fullstack MERN sur des projets web pensés pour le contexte congolais. Je conçois des interfaces propres et des architectures solides, du frontend au backend.",
  ctaLabel: "Me contacter",
  avatar: "/images/valpedro-profile.webp",
};

export const about = {
  title: "About",
  paragraph:
    "Développeur fullstack cumulant 4 ans d'experience au Maroc apres l'obtention de mon diplome universitaire, basé dans l'architecture de Javascript avec ses framework comme React/Nextjs pour le frontEnd, Nodejs avec Express pour le Backend et pour les bases de donnees MongoDB ou Postgre avec Prisma. Je suis aussi habile dans la gestion des rôles en equipe, des dépôts GitHub et prends les décisions d'architecture front comme back. Je construis des applications concrètes et utilisables : coopératives agricoles, gestion de tontine, pharmacies de garde. En dehors du code, j'aime explorer des outils numériques pensés pour le Congo.",
  // Icônes de compétences (noms lucide-react)
  skills: [
    "Code2",
    "Figma",
    "Github",
    "Terminal",
    "Database",
    "Braces",
    "Palette",
    "GitBranch",
  ],
};

export type Project = {
  tag: string;
  title: string;
  description: string;
  image: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    tag: "Featured Project",
    title: "AgriCoop Connect",
    description:
      "Dashboard de digitalisation pour la coopérative agricole COMAKI (Kintélé). Suivi des ventes, animations CSS, refonte mobile-first et backend Python.",
    image: "/images/project-agricoop.jpg",
    repoUrl: "https://github.com/valpedro59",
  },
  {
    tag: "Featured Project",
    title: "BudgetFast",
    description:
      "Gestionnaire de budget en JavaScript vanilla. Persistance localStorage, audit de conformité et documentation complète.",
    image: "/images/project-budgetfast.jpg",
    repoUrl: "https://github.com/valpedro59/budget-manager",
  },
  {
    tag: "Featured Project",
    title: "Festival Sapé & Lumière",
    description:
      "Site événementiel pour un festival culturel fictif à Brazzaville. Hero éditorial, mobile-first en 100svh et compte à rebours JS.",
    image: "/images/project-festival.jpg",
    repoUrl: "https://github.com/valpedro59/budget-manager",
  },
  {
    tag: "Featured Project",
    title: "Inventory Logistics API",
    description:
      "API RESTful de gestion de stock (RBAC, audit, logistique) construite en Node.js, Express, TypeScript et MongoDB.",
    image: "/images/project-inventory.jpg",
    repoUrl: "https://github.com/valpedro59/budget-manager",
    liveUrl: "",
  },
];

export const contact = {
  title: "Contact",
  subtitle: "Envoyez-moi un message",
  intro:
    "Une idée de projet, une opportunité ou juste envie d'échanger ? Écrivez-moi.",
  phone: "+242 06 986 18 03",
  email: "valpedro59@gmail.com.com",
  location: "Pointe-Noire, Congo",
  submitLabel: "Envoyer le message",
};

export const socials = {
  github: "https://github.com/valpedro59",
  twitter: "",
  linkedin: "https://www.linkedin.com/in/val-pedro/",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const footer = {
  year: new Date().getFullYear(),
  name: "Val Clancy Pedro",
};

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
    tag: "Fullstack",
    title: "Pharma Garde",
    description:
      "Application web permettantn aux utilisateurs de rechercher des pharmacies de garde de jour ou de nuit. Frontend en React avec tailwindcss mobile-first et backend Node Express Postgre SQL Supabase Prisma.",
    image: "/images/project-pharma.png",
    repoUrl: "https://github.com/valpedro59/pharmagarde",
    liveUrl: "https://valpedro59.github.io/budget-manager/",
  },
  {
    tag: "Frontend",
    title: "BudgetFast",
    description:
      "Gestionnaire de budget en JavaScript vanilla. Persistance localStorage, audit de conformité et documentation complète.",
    image: "/images/project-budgetfast.png",
    repoUrl: "https://github.com/valpedro59/budget-manager",
    liveUrl: "https://valpedro59.github.io/budget-manager/",
  },
  {
    tag: "Frontend",
    title: "Anita Orchidee Group",
    description:
      "Site vitrine de l'agence Anita Orchidee Group , qui presente ses services et donne l'acces a l'utilisateur de laisser un message grace au formulaire de contact.",
    image: "/images/project-aog.png",
    repoUrl: "https://github.com/valpedro59/budget-manager",
    liveUrl: "https://anitaorchideegroupe.fr/",
  },
  {
    tag: "Backend",
    title: "Subscription Tracker API",
    description:
      "API RESTful de gestion d'abonnements (Websocket, notifications, reabonnement) construite en Node.js, Express, et MongoDB.",
    image: "/images/project-subscription.png",
    repoUrl: "https://github.com/valpedro59/subscription-tracker",
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

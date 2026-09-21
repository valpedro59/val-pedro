// ─────────────────────────────────────────────────────────────
// 🖊️  MODIFIE UNIQUEMENT CE FICHIER POUR PERSONNALISER TON SITE
// Tous les composants lisent leurs textes/images depuis cet objet.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Val Clancy Pedro",
  role: "Fullstack Developer",
  tagline:
    "Développeur Fullstack MERN | Concepteur d'interfaces fluides et d'architectures web solides, du front au back.",
  ctaLabel: "Me contacter",
  avatar: "/images/valpedro-profile.webp",
};

export const about = {
  title: "About",
  paragraph:
    "Développeur Fullstack React/Next.js & Node.js avec 4 ans d'expérience. Spécialisé dans l'architecture web et les bases de données (MongoDB, PostgreSQL), je conçois des applications concrètes et utiles (coopératives, santé, finance locale) en me concentrant sur le développement de solutions numériques adaptées aux réalités africaines.",
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

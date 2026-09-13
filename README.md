# Portfolio — Next.js

Généré à partir de ton "Design System" (couleurs, typographie, boutons, champs)
et de la maquette fournie.

## Installation

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Où modifier tes informations

Tout est centralisé dans **`data/profile.ts`** :
- `profile` → nom, rôle, phrase d'accroche, photo
- `about` → texte de présentation + liste d'icônes de compétences (noms lucide-react)
- `projects` → tes projets (titre, description, image, liens GitHub/démo)
- `contact` → téléphone, email, localisation
- `socials` → liens GitHub/Twitter/LinkedIn
- `nav` → liens du menu

Tu n'as **aucun composant à toucher** pour changer le contenu — seulement ce fichier.

## Images

Remplace les fichiers dans `public/images/` (actuellement des placeholders générés)
par tes vraies photos/captures, en gardant les mêmes noms, ou change les chemins
dans `data/profile.ts`.

## Design system appliqué

Le projet utilise **Tailwind CSS v4** : il n'y a plus de `tailwind.config.ts`,
toute la configuration (couleurs, tailles de texte, dégradé, radius) vit dans
le bloc `@theme` en haut de `app/globals.css`.

- Couleurs : magenta `#DC00D3`, cyan `#0CFFFF`, fond `#100425`
- Typographie : Josefin Sans (titres) + Inter (texte courant), chargées via `next/font` puis reliées au thème via `--font-heading` / `--font-body`
- Bouton primaire : dégradé cyan → magenta, forme pill (`components/ui/Button.tsx`)
- Champs de formulaire : états Normal / Active (focus) / Error (`components/ui/TextField.tsx`)

Pour ajuster une couleur ou une taille de police, modifie directement les
variables dans le `@theme` de `app/globals.css` — pas besoin d'un autre fichier.

## Structure

```
app/            → layout, page, styles globaux (+ tokens Tailwind v4 en @theme)
components/     → Navbar, Hero, About, TechOrbit, RecentWork, ProjectCard, Contact, Footer
components/ui/  → Button, TextField (design system)
data/profile.ts → toutes tes infos personnelles
public/images/  → tes visuels
```

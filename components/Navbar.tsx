import { nav } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm">
        <a href="#home" className="font-heading text-lg text-white">
          VP
        </a>
        <ul className="hidden gap-10 text-white/70 sm:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

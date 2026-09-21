import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/revealOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-primary-dark">
      <Navbar />
      <Hero />

      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <RecentWork />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>

      <Footer />
    </main>
  );
}

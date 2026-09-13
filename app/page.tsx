import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-primary-dark">
      <Navbar />
      <Hero />
      <About />
      <RecentWork />
      <Contact />
      <Footer />
    </main>
  );
}

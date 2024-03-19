import About from "@/components/About";
import Bannerp from "@/components/Bannerp";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Skill } from "@/components/Skill";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto">
        <Bannerp />
        <About />
        <Experience />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

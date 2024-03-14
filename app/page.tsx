import About from "@/components/About";
import Bannerp from "@/components/Bannerp";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto">
        <Bannerp />

        <About />
        <Experience />
      </div>
    </main>
  );
}

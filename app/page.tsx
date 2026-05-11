import { Autopel } from "@/components/Autopel";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LinkedIn } from "@/components/LinkedIn";
import { Linux } from "@/components/Linux";
import { Nav } from "@/components/Nav";
import { Seguranca } from "@/components/Seguranca";
import { SlideRail } from "@/components/SlideRail";
import { Sobre } from "@/components/Sobre";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <div className="fixed inset-0 z-0 flex flex-col overflow-hidden bg-[var(--bg-primary)]">
      <SlideRail />
      <main className="home-deck relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain">
        <Nav />
        <Hero />
        <Sobre />
        <Autopel />
        <Seguranca />
        <Linux />
        <Stack />
        <LinkedIn />
        <Footer />
      </main>
    </div>
  );
}

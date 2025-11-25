import Header from "@/components/Header";
import { EmailStrip, SocialsStrip } from "@/app/_components/Strips";
import Hero from "@/app/_components/Hero";
import Skills from "@/app/_components/Skills";
import Projects from "@/app/_components/Projects";
import Footer from "@/app/_components/Footer";
import SkipToContentBtn from "./_components/SkipToContentBtn";
import { SectionsProvider } from "./_contexts/SectionsContext";

export default function Home() {
  return (
    <SectionsProvider>
      <div className="bg-background">
        <SkipToContentBtn />
        <Header />
        <SocialsStrip />
        <EmailStrip />

        <main>
          <Hero />
          <Skills />
          <Projects />
        </main>

        <Footer />
      </div>
    </SectionsProvider>
  );
}

import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { CertificatesSection } from "@/components/portfolio/CertificatesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </>
  );
}

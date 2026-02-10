import { Header } from "@/components/header";
import { JourneySection } from "@/components/sections/journey-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { LearningLabSection } from "@/components/sections/learning-lab-section";
import { ProjectShowcaseSection } from "@/components/sections/project-showcase-section";
import { GameSection } from "@/components/sections/game-section";
import { ContactSection } from "@/components/sections/contact-section";
import { TelemetryPanel } from "@/components/telemetry-panel";
import { CyberLabSection } from "@/components/sections/cyber-lab-section";
import { Footer } from "@/components/footer";
import { HeroIntroSection } from "@/components/sections/hero-intro-section";
import ObservedSection from "@/components/observed-section";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header />
      <TelemetryPanel />
      <main className="flex-grow container mx-auto px-4 py-16 sm:py-24 space-y-24 md:space-y-32">
        
        <ObservedSection>
          <div id="intro" className="scroll-mt-24">
            <HeroIntroSection />
          </div>
        </ObservedSection>

        <ObservedSection>
          <div id="journey" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary tracking-wider">
              <span className="text-neon-green">&gt; </span>My Journey
            </h2>
            <JourneySection />
          </div>
        </ObservedSection>
        
        <ObservedSection>
          <div id="skills" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary tracking-wider">
               <span className="text-neon-green">&gt; </span>Skills Stack
            </h2>
            <SkillsSection />
          </div>
        </ObservedSection>

        <ObservedSection>
          <div id="learning" className="scroll-mt-24">
             <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary tracking-wider">
               <span className="text-neon-green">&gt; </span>Learning Lab
            </h2>
            <LearningLabSection />
          </div>
        </ObservedSection>
        
        <div id="projects" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-neon-purple tracking-wider">
              <span className="text-neon-green">&gt; </span>C++ Project Showcase
          </h2>
          <ProjectShowcaseSection />
        </div>

        <ObservedSection>
          <div id="cyber-lab" className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-primary tracking-wider">
               <span className="text-neon-green">&gt; </span>Cyber Lab
            </h2>
            <CyberLabSection />
          </div>
        </ObservedSection>

        <ObservedSection>
          <div id="game" className="scroll-mt-24">
             <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 text-neon-red tracking-wider">
               <span className="text-neon-green">&gt; </span>Cyber Intrusion Simulator
            </h2>
            <GameSection />
          </div>
        </ObservedSection>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

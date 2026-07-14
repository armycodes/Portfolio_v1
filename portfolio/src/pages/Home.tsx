import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { EngineeringMindset } from "@/components/engineering/EngineeringMindset";
import { PortfolioArchitecture } from "@/components/architecture/PortfolioArchitecture";
import { Writing } from "@/components/writing/Writing";
import { TechStack } from "@/components/techstack/TechStack";
import { Resume } from "@/components/resume/Resume";
import { Contact } from "@/components/contact/Contact";
import { Statement } from "@/components/statement/Statement";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Statement />
      <EngineeringMindset />
      <PortfolioArchitecture />
      <Writing />
      <TechStack />
      <Resume />
      <Contact />
    </>
  );
}

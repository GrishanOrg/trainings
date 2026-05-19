import { AboutOne } from "@/components/sections/about-one";
import { AboutTools } from "@/components/sections/about-tools";
import { AboutTwo } from "@/components/sections/about-two";
import { BrandOne } from "@/components/sections/brand-one";
import { CounterOne } from "@/components/sections/counter-one";
import { FooterOne } from "@/components/sections/footer-one";
import { HeaderBottom } from "@/components/sections/header-bottom";
import { Hero } from "@/components/sections/hero";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceOne } from "@/components/sections/service-one";
import { SkillOne } from "@/components/sections/skill-one";

export default function Home() {
  return (
    <div className="page-wrapper">
      <main>
        <HeaderBottom />
        <Hero />
        <AboutOne />
        <BrandOne />
        <SkillOne />
        <AboutTools />
        <CounterOne />
        <AboutTwo />
        <ServiceOne />
        <LeadForm />
        <FooterOne />
      </main>
    </div>
  );
}

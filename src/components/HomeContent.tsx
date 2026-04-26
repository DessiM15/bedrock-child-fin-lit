"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import DotNavigation from "@/components/layout/DotNavigation";
import Hero from "@/components/sections/Hero";
import ProgramOverview from "@/components/sections/ProgramOverview";
import Benefits from "@/components/sections/Benefits";
import Curriculum from "@/components/sections/Curriculum";
import Mission from "@/components/sections/Mission";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import LatestArticles from "@/components/blog/LatestArticles";
import type { Article } from "@/types";

interface HomeContentProps {
  latestArticles: Article[];
}

export default function HomeContent({ latestArticles }: HomeContentProps) {
  return (
    <>
      <Header />
      <DotNavigation />
      <main>
        <Hero />
        <ProgramOverview />
        <Benefits />
        <Curriculum />
        <Mission />
        <Team />
        <Testimonials />
        <FAQ />
        <LatestArticles articles={latestArticles} />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

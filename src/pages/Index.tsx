
import React from "react";
import { LandingHero } from "@/components/landing/LandingHero";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-[rgba(51,51,51,1)] h-screen relative overflow-hidden text-[rgba(253,252,247,1)]">
      <LandingHero />
      <Footer />
    </main>
  );
};

export default Index;

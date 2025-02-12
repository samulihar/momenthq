import React from "react";
import { LandingHero } from "@/components/landing/LandingHero";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-[rgba(51,51,51,1)] min-h-screen overflow-hidden text-[rgba(253,252,247,1)]">
      <LandingHero />
      <WaitlistForm />
      <Footer />
    </main>
  );
};

export default Index;

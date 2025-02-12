
import React from "react";
import { LandingHero } from "@/components/landing/LandingHero";
import { WaitlistForm } from "@/components/landing/WaitlistForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="bg-[rgba(51,51,51,1)] h-screen relative overflow-hidden text-[rgba(253,252,247,1)]">
      <LandingHero />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-8 w-full sm:translate-y-4">
        <WaitlistForm />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

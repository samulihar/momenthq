
import React from "react";

export const LandingHero: React.FC = () => {
  return (
    <header className="relative w-full h-screen">
      <img
        loading="lazy"
        src="/lovable-uploads/b3a7e649-e5da-4f86-a1b0-6c06c6ffc465.png"
        className="absolute h-full w-full object-cover scale-150 brightness-[0.8] sm:scale-100 sm:rotate-0"
        alt="Background"
      />
      <div className="relative bg-[rgba(0,0,0,0.6)] h-screen flex flex-col items-center px-4">
        <div className="flex flex-col items-center absolute top-[35%] left-1/2 -translate-x-1/2 sm:top-[25%]">
          <img
            loading="lazy"
            src="/lovable-uploads/8744c727-68ca-4a9b-99ed-aa11497612a4.png"
            className="w-[715px] max-w-full aspect-[1.81] object-contain md:w-[450px] sm:w-[600px]"
            alt="Focus App Logo"
          />
          <h1 className="text-base text-[rgba(253,252,247,1)] text-center mt-8 leading-relaxed max-w-[280px] sm:text-[2.5rem] sm:mt-6 sm:leading-normal sm:max-w-none">
            Focus is a choice.
            <br />
            Choose to make it effortless.
          </h1>
        </div>
      </div>
    </header>
  );
};

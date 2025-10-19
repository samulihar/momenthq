
import React from "react";

export const LandingHero: React.FC = () => {
  return (
    <header className="relative w-full h-screen">
      <img
        loading="lazy"
        src="/lovable-uploads/chalk2.jpg"
        className="absolute h-full w-full object-cover scale-125 brightness-[0.7] sm:scale-110 sm:rotate-1"
        alt="Background"
      />
      <div className="relative bg-[rgba(0,0,0,0.2)] h-screen flex flex-col items-center px-4">
        <div className="flex flex-col items-center absolute top-[30%] left-1/2 -translate-x-1/2 sm:top-[20%]">
          <img
            loading="lazy"
            src="/lovable-uploads/new formula.svg"
            className="w-[600px] max-w-full aspect-[1.81] object-contain md:w-[400px] sm:w-[500px]"
            alt="Physics Formula"
          />
          <h1 className="text-lg text-[rgba(253,252,247,1)] text-center mt-20 leading-relaxed max-w-[320px] sm:text-2xl sm:mt-16 sm:leading-normal sm:max-w-none font-inter">
            Focus is a choice.
            <br />
            Choose to make it effortless.
          </h1>
          <p className="text-sm text-[rgba(253,252,247,0.8)] text-center mt-6 font-inter">
            Launch 1.12.
          </p>
        </div>
      </div>
    </header>
  );
};

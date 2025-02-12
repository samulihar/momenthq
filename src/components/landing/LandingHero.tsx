
import React from "react";

export const LandingHero: React.FC = () => {
  return (
    <header className="relative w-full h-screen">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/32b8081fd3b04102aef409f750d1ddcbc17e636b2879201364890fb0378233ea?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative bg-[rgba(0,0,0,0.55)] h-screen flex flex-col items-center px-4">
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/273bb3e657114d9782e9ed4ee29ff07b/f03da01c258c15b8dbffdd8d65faac9b60816e7edf0bc15c2b3d92d29e2c2a92?placeholderIfAbsent=true"
            className="w-[400px] max-w-full aspect-[1.81] object-contain md:w-[300px] sm:w-[250px]"
            alt="Focus App Logo"
          />
          <h1 className="text-lg text-[rgba(253,252,247,1)] text-center mt-6 sm:text-base sm:mt-4">
            Focus is a choice.
            <br />
            Choose to make it effortless.
          </h1>
        </div>
      </div>
    </header>
  );
};

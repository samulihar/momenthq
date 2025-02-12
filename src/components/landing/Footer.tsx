
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-[rgba(253,252,247,1)] text-center absolute bottom-4 w-full z-10">
      <p className="text-xs mb-2">
        Built with{" "}
        <span className="text-[rgba(0,122,255,1)]">❤</span> by{" "}
        <a
          href="https://x.com/artkisart"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Arty
        </a>{" "}
        and{" "}
        <a
          href="https://x.com/proactivepath"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Sam
        </a>
      </p>
      <p className="text-xs absolute bottom-0 left-4 font-['Crayon_Libre'] text-white">:)</p>
    </footer>
  );
};

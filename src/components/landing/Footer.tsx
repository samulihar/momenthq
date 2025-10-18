
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-[rgba(253,252,247,1)] text-center absolute bottom-4 w-full z-10">
      <p className="text-xs mb-2">
        Built with{" "}
        <span className="text-[#007AFF] font-['Crayon_Libre'] text-lg" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>❤</span> by{" "}
        <a
          href="https://deuslabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          deuslabs.ai
        </a>
      </p>
      <p className="text-xs absolute bottom-0 right-4 font-inter text-white">:)</p>
    </footer>
  );
};

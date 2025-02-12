
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-[rgba(253,252,247,1)] text-center mt-12">
      <p className="text-sm">
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
      <p className="text-xs absolute bottom-4 right-4">:)</p>
    </footer>
  );
};

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="text-[rgba(253,252,247,1)] text-center mt-40 mb-4">
      <p className="text-3xl">
        Built with{" "}
        <span className="font-['Crayon_Libre',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-[40px] text-[rgba(0,122,255,1)]">
          ❤
        </span>{" "}
        by Sam and Arty{" "}
      </p>
      <p className="text-[21px] leading-[0.5] mt-4">:)</p>
    </footer>
  );
};

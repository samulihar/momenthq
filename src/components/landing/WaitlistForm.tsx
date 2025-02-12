import React, { useState } from "react";

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement waitlist submission
    console.log("Submitted email:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-6 mt-20"
    >
      <label htmlFor="email" className="text-xl text-[rgba(253,252,247,1)]">
        Enter your email
      </label>
      <button
        type="submit"
        className="bg-[rgba(63,63,63,1)] border w-[359px] max-w-full text-xl text-center px-[70px] py-[18px] rounded-[10px] border-[rgba(253,252,247,1)] border-solid hover:bg-[rgba(73,73,73,1)] transition-colors"
      >
        Join the waitlist
      </button>
    </form>
  );
};

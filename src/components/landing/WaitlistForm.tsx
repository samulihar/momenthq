
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 mt-12"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-[359px] max-w-full text-white bg-transparent border-white/80 placeholder:text-white/80"
        required
      />
      <button
        type="submit"
        className="bg-[rgba(63,63,63,1)] border w-[359px] max-w-full text-lg text-center px-[70px] py-[18px] rounded-[10px] border-[rgba(253,252,247,1)] border-solid hover:bg-[rgba(73,73,73,1)] transition-colors"
      >
        Join the waitlist
      </button>
    </form>
  );
};

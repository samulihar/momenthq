import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://usebasin.com/f/3c6626aca9e9", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }).toString(),
      });

      if (response.ok) {
        setMessage("Thank you for joining the waitlist!");
        setEmail(""); // Clear input field
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please check your connection.");
    }
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
        className="w-[280px] max-w-full h-10 text-white bg-transparent border-white/80 placeholder:text-white/80"
        required
      />
      <button
        type="submit"
        className="bg-[rgba(63,63,63,1)] border w-[280px] max-w-full text-base text-center px-4 h-10 rounded-[10px] border-[rgba(253,252,247,1)] border-solid hover:bg-[rgba(73,73,73,1)] transition-colors font-['Crayon_Libre']"
      >
        Join the waitlist
      </button>
      {message && <p className="text-white mt-2">{message}</p>}
    </form>
  );
};


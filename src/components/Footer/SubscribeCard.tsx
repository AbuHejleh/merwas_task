"use client";
import React, { useState } from "react";

const SubscribeCard = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the subscription logic here
    console.log("Subscribed with email:", email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          className="p-2 rounded-full border-none outline-none w-1/4"
        />
        <button
          type="submit"
          className="z-10 ml-[-6rem] p-2 m-1 rounded-full bg-gray-600 text-white cursor-pointer "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeCard;

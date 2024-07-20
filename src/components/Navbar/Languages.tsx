"use client";
import Image from "next/image";
import React, { useState } from "react";
import { world } from "../../../public/svg/export";

type Language =
  | "English"
  | "Spanish"
  | "French"
  | "German"
  | "Chinese"
  | "Arabic";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("English"); // Initial selection

  const languages: Language[] = [
    "Arabic",
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value as Language);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <Image src={world} alt="World Image" className="h-2 md:h-3 lg:h-5" />
      <select
        value={selectedLanguage}
        onChange={handleChange}
        color="text-black"
        className="bg-transparent rounded-md focus:outline-none text-white"
      >
        {languages.map((language) => (
          <option
            key={language}
            value={language}
            className="text-black font-alef"
          >
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;

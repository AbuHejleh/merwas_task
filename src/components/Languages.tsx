"use client";
import Image from "next/image";
import React, { useState } from "react";
import { dropdown, world } from "../../public/svg/export";

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
    <div className="flex flex-row gap-3 w-full">
      <Image src={world} alt="World Image" height={20} width={20} />
      <select
        value={selectedLanguage}
        onChange={handleChange}
        color="text-black"
        className="w-full bg-transparent rounded-md focus:outline-none text-white"
      >
        {languages.map((language) => (
          <option key={language} value={language} className="text-black">
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;

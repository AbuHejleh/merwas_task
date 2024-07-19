"use client";
import React, { useState } from "react";

const CopyrightWithLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="bg-primaryColor text-white py-[41px] px-8 flex justify-between items-center w-1/2 border-t-[1px] border-white boarder-opacity-15">
      <div className="text-sm">
        Copyright © 2024 OurWebsite. All Right Reserved.
      </div>
      <div className="relative">
        <button
          className="bg-gray-600 text-white py-2 px-4 rounded flex items-center"
          onClick={toggleDropdown}
        >
          <span>{selectedLanguage}</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={`M19 ${isOpen ? "9" : "15"}l-7-7-7 7`}
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 bottom-full mb-2 w-40 bg-gray-600 rounded shadow-lg z-10">
            <div
              className="py-2 px-4 hover:bg-primaryColor cursor-pointer"
              onClick={() => selectLanguage("English")}
            >
              English
            </div>
            <div
              className="py-2 px-4 hover:bg-primaryColor cursor-pointer"
              onClick={() => selectLanguage("Spanish")}
            >
              Spanish
            </div>
            <div
              className="py-2 px-4 hover:bg-primaryColor cursor-pointer"
              onClick={() => selectLanguage("French")}
            >
              French
            </div>
            <div
              className="py-2 px-4 hover:bg-primaryColor cursor-pointer"
              onClick={() => selectLanguage("German")}
            >
              German
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CopyrightWithLanguage;

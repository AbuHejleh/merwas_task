import React from "react";
import { logo } from "../../../public/svg/export";
import Image from "next/image";
import { NavigationList, LanguageDropdown } from "./export";
const Navbar = () => {
  return (
    <div className="h-[90px] bg-primaryBackgroundColor w-full flex flex-row justify-between items-center lg:px-[30px] px-[15px]">
      <Image src={logo} alt="Logo" className="w-[7rem] md:w-[12rem]" />
      <NavigationList />

      <div className="flex flex-row gap-3 w-[25%]">
        <LanguageDropdown />

        <button className="  bg-white rounded-full ml-5 w-[75%] text-[75%] font-alef">
          Login
        </button>

        <button className=" h-10 rounded-full bg-transparent border border-white text-white w-[75%] text-[75%] font-alef">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

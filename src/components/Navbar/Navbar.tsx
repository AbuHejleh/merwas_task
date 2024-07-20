import React from "react";
import { logo } from "../../../public/svg/export";
import Image from "next/image";
import { NavigationList, LanguageDropdown } from "./export";
const Navbar = () => {
  return (
    <div className="h-[80px] bg-primaryColor w-full flex flex-row justify-between items-center lg:px-[30px] px-[15px]">
      <Image
        src={logo}
        alt="Logo"
        className="w-[6rem] md:w-[10rem] lg:w-[14rem]"
      />
      <NavigationList />

      <div className="flex flex-row gap-3 h-auto text-xs md:text-sm lg:text-xl">
        <LanguageDropdown />

        <button className="bg-white rounded-full w-14 md:w-28 lg:w-44 font-alef text-wrap lg:py-4 md:py-2 py-1 text-darkBlueColor font-bold">
          Register
        </button>

        <button className="rounded-full bg-transparent border border-white text-white  w-14 md:w-28 lg:w-44 font-alef">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

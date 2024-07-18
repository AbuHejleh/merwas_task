import React from "react";
import { logo } from "../../public/svg/export";
import Image from "next/image";
import LanguageDropdown from "./Languages";
import { styles } from "@/styles";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-primaryBackgroundColor w-full flex flex-row justify-between items-center lg:px-[50px] px-[25px]">
      <Image src={logo} alt="Logo" className="w-[7rem] md:w-[12rem]" />
      <div
        className={`${styles.navText} flex flex-row gap-x-2 lg:text-[14px] sm:text-[14px] xs:text-[9px] text-[14px] items-center w-[30%]`}
      >
        <p>Home</p>
        <p>About Us </p>
        <p>Services</p>
        <p>Partners</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-row gap-3  w-[25%]">
        <LanguageDropdown />

        <button className="  bg-white rounded-full ml-5 w-[75%] text-[75%]">
          Login
        </button>

        <button className=" h-10 rounded-full bg-transparent border border-white text-white w-[75%] text-[75%]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

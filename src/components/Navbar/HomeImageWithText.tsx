import Image from "next/image";
import React from "react";
import { surface } from "../../../public/images/exports";

const HomeImageWithText = () => {
  return (
    <div className="relative ">
      <p className="text-white absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-10 font-nobile text-[40px] font-[700] text-start leading-[76px]">
        Welcome To The<span className="text-orangeColor"> OurWebsite </span>
        Your <br />
        Platform For Launching Towards
        <br /> Technological Success!
      </p>
      <div className="flex justify-center">
        <Image src={surface} alt="surface image" className="w-full" />
      </div>
    </div>
  );
};

export default HomeImageWithText;

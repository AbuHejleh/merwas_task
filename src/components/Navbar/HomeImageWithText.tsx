import Image from "next/image";
import React from "react";
import { surface } from "../../../public/images/exports";

const HomeImageWithText = () => {
  return (
    <div className="relative ">
      <p
        className="text-white absolute top-1/2 left-1/4 z-10 font-nobile text-[12px] md:text-[20px] lg:text-[40px] font-[700] text-start
       leading-[20px] md:leading-[40px] lg:leading-[76px]"
      >
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

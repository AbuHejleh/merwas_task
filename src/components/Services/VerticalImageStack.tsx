// components/VerticalImageStack.tsx
import React from "react";
import Image from "next/image";
import { picOne, picTwo, picThree } from "../../../public/images/exports";

const VerticalImageStack = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center mb-[150px]">
      <div className=" h-[150px] w-[100px] lg:h-[250px] lg:w-[200px] rounded-lg mr-[-50px] z-20">
        <Image src={picOne} alt="Image 1" className="rounded-3xl" />
      </div>
      <div className="h-[150px] w-[100px] lg:h-[250px] lg:w-[200px]  rounded-lg mb-[-250px] z-10">
        <Image src={picTwo} alt="Image 2" className="rounded-3xl" />
      </div>
      <div className="h-[150px] w-[100px] lg:h-[250px] lg:w-[200px]  rounded-lg  ml-[-50px]">
        <Image src={picThree} alt="Image 3" className="rounded-3xl" />
      </div>
    </div>
  );
};

export default VerticalImageStack;

import React from "react";
import { partners } from "@/../public/images/exports";
import Image from "next/image";

const PartnersCard = () => {
  return (
    <div className=" flex flex-col items-center bg-white rounded-3xl justify-center ">
      <div className="flex flex-col items-center py-20">
        <Image
          src={partners}
          alt="Just a partner pic"
          className="border-b-[1px] border-black border-opacity-30"
          height={150}
          width={150}
        />
        <p className="p-4">Agreement between xyz and our website</p>
      </div>
      <div className=" bg-orangeColor w-[80%]  self-center h-2 rounded-3xl bg-opacity-50 "></div>
    </div>
  );
};

export default PartnersCard;

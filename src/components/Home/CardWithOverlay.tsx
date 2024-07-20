"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { rightArrow } from "../../../public/svg/export";

type CardProps = {
  imgSrc: StaticImport;
  alt: string;
  headerText: string;
  subText: string;
};

const CardWithOverlay: React.FC<CardProps> = ({
  imgSrc,
  headerText,
  subText,
  alt,
}) => {
  return (
    <div className="relative rounded-lg text-[5px] md:text-[13px] lg:text-[28px]">
      <Image
        className="object-cover object-center w-full h-full rounded-xl"
        src={imgSrc}
        alt={alt}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3F485E] opacity-80 rounded-3xl"></div>

      <div className="absolute inset-0 flex flex-col justify-end pb-4 md:pb-6 lg:pb-10  text-white px-6 md:px-12 lg:px-16 gap-2 md:gap-8 lg:gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-[500] font-nobile ">{headerText}</h2>
          <p className="text-white  font-[400]font-dm">{subText}</p>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <p className="font-dm">Learn more</p>
          <Image
            src={rightArrow}
            alt="Right Arrow"
            className="h-3 md:h-4 lg:h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default CardWithOverlay;

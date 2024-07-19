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
    <div className="relative rounded-lg sm:w-auto sm:h-auto">
      <Image
        className="object-cover object-center w-full h-full rounded-xl"
        src={imgSrc}
        alt={alt}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3F485E] opacity-80 rounded-3xl"></div>

      <div className="absolute inset-0 flex flex-col justify-end py-4 text-white px-16">
        <div className="mb-4">
          <h2 className="text-white text-[28px] font-[500] font-nobile leading-[38px]">
            {headerText}
          </h2>

          <p className="text-white text-[18px] font-[400] leading-[30px] font-dm">
            {subText}
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center py-10">
          <p className="text-[18px] font-dm  font-[700] leading-[18px]">
            Learn more
          </p>
          <Image src={rightArrow} alt="Right Arrow" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default CardWithOverlay;

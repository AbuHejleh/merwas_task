import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const IconHeaderSub = ({
  src,
  alt,
  header,
  subTitle,
}: {
  src: StaticImport;
  alt: string;
  header: string;
  subTitle: string;
}) => {
  return (
    <div className="flex flex-row gap-7 items-start text-wrap">
      <Image
        alt={alt}
        src={src}
        className="w-[18px] h-[18px] lg:w-[40px] lg:h-[40px]  "
      />
      <div className="flex flex-col gap-y-5">
        <p className="text-primary font-nobile text-[12px] md:text-[14px] lg:text-[24px] font-[400]">
          {header}
        </p>
        <p className="text-primary font-nobile text-[8px] md:text-[12px] lg:text-[18px] font-[400] text-wrap ">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default IconHeaderSub;

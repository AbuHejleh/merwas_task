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
        className=" sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]"
      />
      <div className="flex flex-col gap-y-5">
        <p className="text-primary font-nobile text-[1.3vw] font-[400]">
          {header}
        </p>
        <p className="text-primary font-nobile text-[0.89vw] font-[400] text-wrap ">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default IconHeaderSub;

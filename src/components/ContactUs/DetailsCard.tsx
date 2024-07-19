import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import {
  facebook,
  instgram,
  linkedin,
  skype,
  twitter,
} from "../../../public/svg/export";

const DetailsCard = ({
  src,
  alt,
  header,
  subTitle,
  showIcons = false,
}: {
  src: StaticImport;
  alt: string;
  header: string;
  subTitle: string;
  showIcons?: boolean;
}) => {
  return (
    <div className="flex flex-row gap-7 items-start text-wrap">
      <Image
        alt={alt}
        src={src}
        className=" sm:w-[30px] sm:h-[30px] w-[20px] h-[20px]"
      />
      <div className="flex flex-col gap-y-5">
        <p className="text-primary font-jost text-[1.1vw] font-[500] leading-[26.01px]">
          {header}
        </p>
        {showIcons ? (
          <div className="h-12 flex justify-start items-center space-x-4">
            <Image
              src={facebook}
              alt="Facebook Logo"
              width={8}
              height={15.57}
            />
            <Image
              src={instgram}
              alt="Instagram Logo"
              width={14}
              height={15.57}
            />
            <Image src={linkedin} alt="LinkedIn Logo" width={13} height={16} />
            <Image src={skype} alt="skype Logo" width={13} height={15.57} />
            <Image src={twitter} alt="twitter Logo" width={14} height={15.57} />
          </div>
        ) : (
          <p className="text-secondaryColor font-jost text-[0.8vw] font-[400] leading-[24px] text-wrap whitespace-pre-line">
            {subTitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;

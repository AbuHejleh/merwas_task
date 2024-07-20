import React from "react";

const ServicesHeader = ({
  header,
  subText,
  isColored,
}: {
  header: string;
  subText: string;
  isColored: boolean;
}) => {
  const customStyle = "font-nobile  font-[700] pr-[10px]";
  return (
    <div className="flex flex-col gap-10 h-full justify-center">
      <span
        className={`text-[18px] md:text-[24px] lg:text-[32px] ${
          isColored ? "text-orangeColor" : "text-primaryColor"
        } ${customStyle}`}
      >
        {header}
      </span>
      <span
        className={`text-[12px] md:text-[14px] lg:text-[18px] ${
          isColored ? "text-white" : "text-darkBlueColor"
        } ${customStyle} pr-14`}
      >
        {subText}
      </span>
    </div>
  );
};

export default ServicesHeader;

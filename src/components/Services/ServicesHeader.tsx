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
  const customStyle = "font-nobile text-[1vw] font-[700] pr-[10px]";
  return (
    <div className="flex flex-col gap-7 h-full justify-center">
      <span
        className={`${
          isColored ? "text-orangeColor" : "text-primaryColor"
        } ${customStyle}`}
      >
        {header}
      </span>
      <span
        className={`${
          isColored ? "text-white" : "text-darkBlueColor"
        } ${customStyle} pr-14`}
      >
        {subText}
      </span>
    </div>
  );
};

export default ServicesHeader;

import React from "react";

const Sections = ({
  title,
  subTitle,
  id,
  isColored,
  isWhite,
  padding,
}: {
  title: string;
  subTitle: string;
  id: string;
  isColored?: boolean;
  isWhite?: boolean;
  padding?: number;
}) => {
  return (
    <div
      id={id}
      className={`flex flex-col items-center py-[${
        padding ? padding : 10
      }rem] gap-14`}
    >
      <p
        className={`${
          isColored
            ? "text-orangeColor"
            : isWhite
            ? "text-white"
            : "text-primaryColor"
        } font-nobile text-[48px] leading-[54.12px] font-[700] text-center`}
      >
        {title}
      </p>
      <p
        className={`${
          isColored
            ? "text-white"
            : isWhite
            ? "text-white"
            : "text-secondaryColor"
        } font-Montserrat font-[400] text-[19px] text-center leading-[30px]`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Sections;

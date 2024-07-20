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
      className={`flex flex-col gap-14 py-[5rem] md:[7rem] lg:[10rem]`}
      style={{ padding: padding ? `${padding}rem` : `` }}
    >
      <p
        className={`${
          isColored
            ? "text-orangeColor"
            : isWhite
            ? "text-white"
            : "text-primaryColor"
        } font-nobile text-[18px] md:text-[24px] lg:text-[32px]  lg:leading-[54.12px] font-[700] text-center`}
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
        } font-Montserrat font-[400] text-[12px] md:text-[14px] lg:text-[19px] text-center lg:leading-[30px]`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Sections;

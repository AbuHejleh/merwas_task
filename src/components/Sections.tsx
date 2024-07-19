import React from "react";

const Sections = ({
  title,
  subTitle,
  id,
  isColored,
}: {
  title: string;
  subTitle: string;
  id: string;
  isColored?: boolean;
}) => {
  return (
    <div id={id} className="flex flex-col items-center py-[10rem] gap-14">
      <p
        className={`${
          isColored ? "text-orangeColor" : "text-primaryColor"
        } font-nobile text-[48px] leading-[54.12px] font-[700] text-center`}
      >
        {title}
      </p>
      <p
        className={`${
          isColored ? "text-white" : "text-secondaryColor"
        } font-Montserrat font-[400] text-[19px] text-center leading-[30px]`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Sections;

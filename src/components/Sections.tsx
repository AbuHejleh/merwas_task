import React from "react";

const Sections = ({
  title,
  subTitle,
  id,
}: {
  title: string;
  subTitle: string;
  id: string;
}) => {
  return (
    <div id={id} className="flex flex-col items-center py-[15rem] gap-14">
      <p className="text-primaryColor font-nobile text-[48px] leading-[54.12px] font-[700] text-center">
        {title}
      </p>
      <p className="text-secondaryColor font-Montserrat font-[400] text-[19px] text-center leading-[30px]">
        {subTitle}
      </p>
    </div>
  );
};

export default Sections;

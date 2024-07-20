import React from "react";
import ServicesHeader from "./ServicesHeader";
import VerticalImageStack from "./VerticalImageStack";

const ServicesCard = ({
  header,
  subTitle,
  bgColor,
  roundedSide,
  flip = false,
}: {
  header: string;
  subTitle: string;
  bgColor: boolean;
  roundedSide: string;
  flip?: boolean;
}) => {
  return (
    <div
      className={`w-11/12 ${
        bgColor ? "bg-primaryColor" : "bg-white"
      } ${roundedSide}  h-[65vh]`}
    >
      <div className="flex flex-row w-full h-full items-center gap-10">
        {flip ? (
          <>
            <ServicesHeader
              header={header}
              subText={subTitle}
              isColored={bgColor}
            />
            <VerticalImageStack />
          </>
        ) : (
          <>
            <VerticalImageStack />
            <ServicesHeader
              header={header}
              subText={subTitle}
              isColored={bgColor}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesCard;

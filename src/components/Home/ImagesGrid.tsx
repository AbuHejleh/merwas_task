import React from "react";
import { CardWithOverlay } from "./export";

import { cardsData } from "@/utils/constants";

const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-10 md:gap-8 lg:gap-12 px-[14vw]">
      {cardsData.map(({ alt, headerText, imgSrc, subText }, index) => (
        <CardWithOverlay
          key={index}
          imgSrc={imgSrc}
          alt={alt}
          headerText={headerText}
          subText={subText}
        />
      ))}
    </div>
  );
};

export default ImagesGrid;

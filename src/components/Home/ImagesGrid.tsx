import React from "react";
import { CardWithOverlay } from "./export";

import { cardsData } from "@/utils/constants";

const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-12 lg:px-[20rem]">
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

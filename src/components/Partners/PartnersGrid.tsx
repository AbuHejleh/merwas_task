import React from "react";
import PartnersCard from "./PartnersCard";

const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-3 px-[20rem] pb-[8rem] gap-10 w-full h-full">
      <PartnersCard />
      <PartnersCard />
      <PartnersCard />
    </div>
  );
};

export default PartnersGrid;

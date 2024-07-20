import React from "react";
import PartnersCard from "./PartnersCard";

const PartnersGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-28 mx-auto pb-32">
      <PartnersCard />
      <PartnersCard />
      <PartnersCard />
    </div>
  );
};

export default PartnersGrid;

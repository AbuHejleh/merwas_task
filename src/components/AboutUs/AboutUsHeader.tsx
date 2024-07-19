import React from "react";

const AboutUsHeader = () => {
  const customStyle = "font-nobile text-[2.5vw] font-[700]";
  return (
    <div className="flex flex-col gap-7">
      <span className={`text-orangeColor ${customStyle}`}>OurWebsite</span>
      <span className={`${customStyle}`}>
        We offer more than just a workspace
      </span>
    </div>
  );
};

export default AboutUsHeader;

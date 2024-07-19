import React from "react";
import AboutUsHeader from "./AboutUsHeader";
import Image from "next/image";
import { aboutUsImage } from "../../../public/images/exports";

const AboutUs = () => {
  return (
    <div className="flex grid-cols-2 px-[50px] justify-around">
      <AboutUsHeader />
      <div className="w-[30%]">
        <Image src={aboutUsImage} alt={"about Us Image"} />
      </div>
    </div>
  );
};

export default AboutUs;

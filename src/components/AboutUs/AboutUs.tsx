import React from "react";
import AboutUsHeader from "./AboutUsHeader";
import Image from "next/image";
import { aboutUsImage } from "../../../public/images/exports";
import IconHeaderSub from "./IconHeaderSub";
import { aboutUsList } from "@/utils/constants";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-2 justify-around w-[85vw] h-full gap-10">
      <div>
        <AboutUsHeader />
        <div className="grid grid-cols-2 lg:gap-10 lg:py-20 pt-10">
          {aboutUsList.map(({ src, alt, header, subTitle }, index) => (
            <IconHeaderSub
              key={index}
              src={src}
              alt={alt}
              header={header}
              subTitle={subTitle}
            />
          ))}
        </div>
      </div>

      <div className="w-auto h-auto ">
        <Image
          src={aboutUsImage}
          alt={"about Us Image"}
          className="w-full h-full bg-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;

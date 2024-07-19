import React from "react";
import { HomeImageWithText } from "@/components/Navbar/export";
import { DoubleText, ImagesGrid, VideoCard } from "@/components/Home/export";
import Sections from "@/components/Sections";
import AboutUs from "@/components/AboutUs/AboutUs";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center">
      <HomeImageWithText />
      <DoubleText />
      <div className="py-[100px]">
        <ImagesGrid />
      </div>

      <VideoCard />
      <Sections
        subTitle="With lots of unique blocks, you can easily build a page easily without any coding."
        title="about us"
        id="about"
      />
      <AboutUs />

      <div className="h-[90vh] w-[50%]"> hhh</div>
    </div>
  );
};

export default Welcome;

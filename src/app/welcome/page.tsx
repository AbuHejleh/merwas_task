import React from "react";
import { HomeImageWithText } from "@/components/Navbar/export";
import { DoubleText, ImagesGrid, VideoCard } from "@/components/Home/export";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center">
      <HomeImageWithText />
      <DoubleText />
      <div className="py-[100px]">
        <ImagesGrid />
      </div>

      <VideoCard />
    </div>
  );
};

export default Welcome;

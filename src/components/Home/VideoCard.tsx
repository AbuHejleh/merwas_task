"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { playButton } from "../../../public/svg/export";

const VideoCard = () => {
  const videoSrc = "/videos/business.mp4";
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-row justify-evenly bg-primaryColor rounded-3xl  items-center gap-x-10 w-3/5 py-9">
      <div
        onClick={handleVideoClick}
        className="relative cursor-pointer w-4/12  h-[100%]"
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="relative inset-0 object-cover rounded-xl w-full"
          controls={false}
        ></video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center h-full w-auto rounded-xl">
            <Image
              src={playButton}
              alt="Play Button"
              className="w-1/6 md:w-1/4 lg:w-auto"
            />
          </div>
        )}
      </div>

      <p className="text-white text-[12px] md:text-[14px] lg:text-[24px] font-[400] lg:leading-[30px]">
        <span className="text-orangeColor ">OurWebsite</span> Your Gateway to
        <br />
        Technological Excellence
        <br />
        Get a quick glimpse into the dynamic
        <br />
        environment at The OurWebsite and
        <br /> the benefits that await you
      </p>
    </div>
  );
};

export default VideoCard;

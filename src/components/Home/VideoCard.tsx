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
    <div className="flex flex-row justify-center bg-primaryColor p-4 rounded-lg  w-[85vw] h-[49vh] items-center gap-28 ">
      <div
        onClick={handleVideoClick}
        className="relative cursor-pointer bg-black  rounded-3xl w-auto h-auto "
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="relative inset-0 object-cover rounded-3xl w-full h-full "
          controls={false}
        ></video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center w-auto h-auto  rounded-3xl">
            <Image src={playButton} alt="Play Button" />
          </div>
        )}
      </div>

      <p className="text-white font-[400] text-[36px] leading-[46px]">
        <span className="text-orangeColor ">OurWebsite</span> Your Gateway to{" "}
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

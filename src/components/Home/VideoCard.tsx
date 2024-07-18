"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { playButton } from "../../../public/svg/export";

type VideoCardProps = {
  videoSrc?: string;
  alt?: string;
  headerText?: string;
  description?: string;
};

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc = "/videos/business.mp4",
  headerText = "Sample Video Header",
  description = "This is a description of the video content.",
  alt = "Video description",
}) => {
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
    <div className="flex  justify-center bg-primaryColor p-4 rounded-lg shadow-lg w-[80vw] h-[40vh]">
      {/* Video Poster */}
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

      {/* Text Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{headerText}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;

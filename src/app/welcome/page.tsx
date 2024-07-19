import React from "react";
import { HomeImageWithText } from "@/components/Navbar/export";
import { DoubleText, ImagesGrid, VideoCard } from "@/components/Home/export";
import Sections from "@/components/Sections";
import AboutUs from "@/components/AboutUs/AboutUs";
import ServicesCard from "@/components/Services/ServicesCard";
import { servicesList } from "@/utils/constants";

const Welcome = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <HomeImageWithText />
        <DoubleText />
        <div className="py-[100px]">
          <ImagesGrid />
        </div>

        <VideoCard />
        <Sections
          subTitle="With lots of unique blocks, you can easily build a page easily without any coding."
          title="About Us"
          id="about"
        />
        <AboutUs />

        <Sections
          subTitle="With lots of unique blocks, you can easily build a page easily without any coding."
          title="Services"
          id="services"
        />
      </div>
      {servicesList.map((items, index) => (
        <ServicesCard {...items} key={index} />
      ))}

      <div className="h-[90vh] w-[50%]"> hhh</div>
    </div>
  );
};

export default Welcome;

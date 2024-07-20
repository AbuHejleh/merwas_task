import AboutUs from "@/components/AboutUs/AboutUs";
import ContactBox from "@/components/ContactUs/ContactBox";
import Footer from "@/components/Footer/Footer";
import DoubleText from "@/components/Home/DoubleText";
import ImagesGrid from "@/components/Home/ImagesGrid";
import VideoCard from "@/components/Home/VideoCard";
import HomeImageWithText from "@/components/Navbar/HomeImageWithText";
import PartnersGrid from "@/components/Partners/PartnersGrid";
import Sections from "@/components/Sections";
import ServicesCard from "@/components/Services/ServicesCard";
import { servicesList } from "@/utils/constants";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <HomeImageWithText />
        <DoubleText />
        <div className="pb-[7rem]">
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

      <div className="bg-primaryColor w-full  flex flex-col">
        <Sections
          subTitle="With lots of unique blocks, you can easily build a page easily without any coding. "
          title="Partners"
          id="partners"
          isColored={true}
        />
        <PartnersGrid />
      </div>

      <Sections
        subTitle="With lots of unique blocks, you can easily build a page easily without any coding."
        title="Contact Us"
        id="contact"
      />
      <ContactBox />

      <Footer />
    </div>
  );
};

export default Home;

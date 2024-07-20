import React from "react";
import Sections from "../Sections";
import SubscribeCard from "./SubscribeCard";
import {
  facebook,
  instgram,
  linkedin,
  skype,
  twitter,
} from "../../../public/svg/export";
import Image from "next/image";
import CopyrightWithLanguage from "./CopyrightWithLanguage";

const Footer = () => {
  return (
    <div className="bg-primaryColor h-1/2 w-full bottom-0 flex flex-col">
      <Sections
        title="Subscribe our newsletter"
        subTitle="Your download should start automatically, if not Click here. Should I give up, huh?."
        id=""
        isColored={false}
        isWhite
        padding={5}
      />
      <div>
        <SubscribeCard />

        <div className="h-12 flex justify-center items-center space-x-4">
          <Image src={facebook} alt="Facebook Logo" width={8} height={15.57} />
          <Image
            src={instgram}
            alt="Instagram Logo"
            width={14}
            height={15.57}
          />
          <Image src={linkedin} alt="LinkedIn Logo" width={13} height={16} />
          <Image src={skype} alt="skype Logo" width={13} height={15.57} />
          <Image src={twitter} alt="twitter Logo" width={14} height={15.57} />
        </div>
      </div>

      <div className="flex justify-center items-center pt-10">
        <CopyrightWithLanguage />
      </div>
    </div>
  );
};

export default Footer;

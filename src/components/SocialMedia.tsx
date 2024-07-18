import React from "react";
import Image from "next/image";
import {
  facebook,
  instgram,
  linkedin,
  skype,
  twitter,
} from "../../public/svg/export";

const SocialMedia = () => {
  return (
    <div className="w-full h-12 bg-white flex justify-end items-center space-x-4 px-[4rem]">
      <Image src={facebook} alt="Facebook Logo" width={8} height={15.57} />
      <Image src={instgram} alt="Instagram Logo" width={14} height={15.57} />
      <Image src={linkedin} alt="LinkedIn Logo" width={13} height={16} />
      <Image src={skype} alt="skype Logo" width={13} height={15.57} />
      <Image src={twitter} alt="twitter Logo" width={14} height={15.57} />
    </div>
  );
};

export default SocialMedia;

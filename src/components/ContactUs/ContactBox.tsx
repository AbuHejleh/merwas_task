import React from "react";
import ContactDetails from "./ContactDetails";
import ContactQuestion from "./ContactQuestion";
import CompanyLocation from "./CompanyLocation";

const ContactBox = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-primaryColor text-[40px] font-[600] leading-[57.8px] pb-32 ">
        Get in touch today!
      </p>
      <div className="flex flex-row gap-36">
        <ContactDetails />
        <ContactQuestion />
      </div>
      <CompanyLocation />
    </div>
  );
};

export default ContactBox;

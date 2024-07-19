import { contactUsList } from "@/utils/constants";
import React from "react";
import DetailsCard from "./DetailsCard";

const ContactDetails = () => {
  return (
    <div className="flex flex-col items-start gap-10">
      <p className="text-[35px] text-primaryColor font-[500] leading-[50.58px] font-jost">
        Contact Details
      </p>
      <div className="grid grid-cols-2 gap-10">
        {contactUsList.map((item, index) => (
          <DetailsCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;

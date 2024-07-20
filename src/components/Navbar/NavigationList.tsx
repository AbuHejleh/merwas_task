"use client";
import { styles } from "@/styles";
import Link from "next/link";
import React, { useState } from "react";

const NavigationList = () => {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PARTNERS", href: "#partners" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const [active, setActive] = useState(navItems[0].href);

  const handleSetActive = (id: string) => {
    setActive(id);
  };

  return (
    <div
      className={`${styles.navText} flex flex-row lg:gap-x-8 md:gap-x-4 gap-x-2  items-center justify-center `}
    >
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} scroll={true} legacyBehavior>
          <a
            className={`${
              active === item.href ? styles.active : styles.navText
            } cursor-pointer text-[8px] md:text-[12px] lg:text-[14px]`}
            onClick={() => handleSetActive(item.href)}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavigationList;

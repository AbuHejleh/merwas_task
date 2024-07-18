"use client";
import { styles } from "@/styles";
import Link from "next/link";
import React, { useState } from "react";

const NavigationList = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partners", href: "#partners" },
    { name: "Contact Us", href: "#contact" },
  ];

  const [active, setActive] = useState(navItems[0].href);

  const handleSetActive = (id: string) => {
    setActive(id);
  };

  return (
    <div
      className={`${styles.navText} flex flex-row gap-x-5 items-center justify-center`}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          scroll={true}
          legacyBehavior // Add this prop to use legacy behavior
        >
          <a
            className={`${
              active === item.href ? styles.active : styles.navText
            } cursor-pointer`}
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

import {
  coworking,
  funding,
  mentoring,
  opportunities,
} from "../../public/images/exports";
import {
  zoom,
  lamp,
  arrowBoard,
  rocket,
  findUs,
  phone,
  alarm,
  writeUs,
  follow,
} from "../../public/svg/export";

const cardsData = [
  {
    imgSrc: coworking,
    alt: "Coworking Spaces",
    headerText: "Coworking Spaces",
    subText:
      "Inspiring Work Environments Designed for Technological Innovation",
  },
  {
    imgSrc: mentoring,
    alt: "Mentoring and Training",
    headerText: "Mentoring and Training",
    subText: "Gain Insights from Industry Experts to Boost Your Success",
  },
  {
    imgSrc: funding,
    alt: "Access to Funding and Markets",
    headerText: "Access to Funding and Markets",
    subText: "Unlock Financing Opportunities and Expand Your Impact",
  },
  {
    imgSrc: opportunities,
    alt: "Networking Opportunities",
    headerText: "Networking Opportunities",
    subText:
      "Connect with like-minded technology enthusiasts and industry leaders",
  },
];

const aboutUsList = [
  {
    src: rocket,
    alt: "rocket",
    header: "Fostering Collaboration",
    subTitle: `Encouraging synergy among different
     entities in the technology ecosystem,
     including startups, freelancers, compaes,
    academia, and government`,
  },
  {
    src: lamp,
    alt: "lamp",
    header: "Promoting Innovation",
    subTitle: `By providing support and guidance/training,
      the center aims to cultivate an environment
      where new ideas and innovative solutions
      can thrive`,
  },
  {
    src: arrowBoard,
    alt: "arrowBoard",
    header: " Mission Statement",
    subTitle: `A technological revolution in East Amman
      through fostering innovation, collaboration,
      education, and community growth`,
  },
  {
    src: zoom,
    alt: "Zoom",
    header: "Vision Statement",
    subTitle: `Establishing a leading technological hub as
      a catalyst for technological advancement
      and social development in East Amman`,
  },
];

const servicesList = [
  {
    header: "Coworking Spaces",
    subTitle:
      "Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity",
    bgColor: true,
    roundedSide: "rounded-bl-[6rem] self-end",
  },
  {
    header: "Mentoring and Training",
    subTitle:
      "Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project",
    bgColor: false,
    roundedSide: "rounded-bl-[6rem] self-end",
    flip: true,
  },
  {
    header: "Coworking Spaces",
    subTitle:
      "Increase Your Productivity in Inspirational Workspaces. Our coworking spaces are more than just workplaces - they are hubs for innovation and collaboration. Choose from diverse options, including open workspaces, private offices, and fully-equipped meeting rooms. Immerse yourself in a dynamic environment designed to stimulate creativity and enhance productivity",
    bgColor: true,
    roundedSide: "rounded-tr-[6rem] self-start",
  },
  {
    header: "Mentoring and Training",
    subTitle:
      "Grow with Expert Guidance. Our mentoring and training programs are your gateway to professional development. Gain insights and guidance from industry experts. Learn how to effectively apply your knowledge, navigate challenges, and expand your technological project",
    bgColor: false,
    roundedSide: "rounded-bl-[6rem] self-center",
    flip: true,
  },
];

const contactUsList = [
  {
    src: findUs,
    alt: "Find Us",
    header: "Find Us",
    subTitle: `2301 AMMAN . JORDAN`,
  },
  {
    src: phone,
    alt: "phone",
    header: "Phone",
    subTitle: `+ (06) 111-1111
    + (06) 111-1111`,
  },
  {
    src: alarm,
    alt: "Working Hours",
    header: "Working Hours",
    subTitle: `Mon-Fri: 8 AM - 5 PM
    Sat-Sun: 8 AM - 2 PM`,
  },
  {
    src: writeUs,
    alt: "Write to Us",
    header: "Write to Us",
    subTitle: `info@ourwebsite.com
courses@ourwebsite.com`,
  },
  {
    src: follow,
    alt: "follow",
    header: "Follow Us",
    subTitle: ``,
    showIcons: true,
  },
];

export { cardsData, aboutUsList, servicesList, contactUsList };

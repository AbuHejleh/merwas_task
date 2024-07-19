import {
  coworking,
  funding,
  mentoring,
  opportunities,
} from "../../public/images/exports";
import { zoom, lamp, arrowBoard, rocket } from "../../public/svg/export";

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
export { cardsData, aboutUsList };

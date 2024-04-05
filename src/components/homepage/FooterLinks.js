import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const FooterLinks = [
  {
    title: "Home",
    links: [
      { text: "Categories", link: "./" },
      { text: "Devices", link: "./" },
      { text: "Pricing", link: "./" },
      { text: "FAQ", link: "./" },
    ],
  },
  {
    title: "Movies",
    links: [
      { text: "Genres", link: "./" },
      { text: "Trending", link: "./" },
      { text: "New Release", link: "./" },
      { text: "Popular", link: "./" },
    ],
  },
  {
    title: "Shows",
    links: [
      { text: "Genres", link: "./" },
      { text: "Trending", link: "./" },
      { text: "New Release", link: "./" },
      { text: "Popular", link: "./" },
    ],
  },
  {
    title: "Support",
    links: [{ text: "Contact Us", link: "./" }],
  },
  {
    title: "Subscription",
    links: [
      { text: "Plans", link: "./" },
      { text: "Features", link: "./" },
    ],
  },
  {
    title: "Connect With Us",
    links: [
      {
        icon: FaFacebook,
        style: "text-[1.8rem]",
        link: "https://web.facebook.com/joyce.okafor.58",
      },
      {
        icon: FaSquareXTwitter,
        style: "text-[1.8rem]",
        link: "https://twitter.com/girle_45",
      },
      {
        icon: FaLinkedin,
        style: "text-[1.8rem]",
        link: "https://www.linkedin.com/in/ctokafor/",
      },
    ],
  },
];

"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/dhereprathamesh" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dhere23" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item ? item.path : console.log("not get url")}
            className={iconStyles}
            onClick={(e) => handleClick(e)}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

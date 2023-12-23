import React from "react";
import { SocialIcon } from "react-social-icons";


const SocialIcons = ({
  socialLinks,
  iconColor = "#ffffff",
  bgColor = "transparent",
}) => {
  return (
    <ul className="flex gap-2 p-1">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <SocialIcon
            url={link}
            // bgColor={bgColor}
            className="bg-slate-800 rounded-xl cursor-pointer"
            target="_blank"
            style={{ backgroundColor: bgColor, fill: iconColor }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;

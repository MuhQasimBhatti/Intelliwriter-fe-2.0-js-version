import React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMMUNITYCARD_DATA } from "@/constants";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import CommunityImg from "../../public/CommunityImg.jpg";
import LinkIcon from "../../public/LinkIcon.jpg";

const Community = () => {
  const getIconComponent = (icon) => {
    const IconComponent = icon;
    return <IconComponent />;
  };

  return (
    <div
      id="communitySection"
      className="container px-3 lg:px-12 mx-auto gap-12 py-8 flex lg:flex-nowrap flex-wrap flex-col-reverse lg:flex-row justify-between"
    >
      <div className="w-full lg:max-w-[50%]">
        {COMMUNITYCARD_DATA.map((card) => (
          <div
            key={card.id}
            className="flex bg-primary-two justify-between rounded-lg shadow-md mb-4 p-6 md:px-4 items-center"
          >
            <div className="text-4xl mr-6 md:mr-4 text-white w-[10%] flex items-center justify-center">
              {getIconComponent(card.icon)}
            </div>
            <div className="w-[70%] md:w-[80%]">
              <h3 className="text-[20px] text-white font-[700]">
                {card.title}
              </h3>
              <p className="text-[whitesmoke] text-[16px] font-[400]">
                {card.content}
              </p>
            </div>
            <div className="w-[15%] md:w-[10%] flex items-end justify-end">
              <Link
                href={card.link}
                target="_blank"
                className="text-blue-500 text-2xl hover:underline "
              >
                <Image
                  src={LinkIcon}
                  width={100}
                  height={100}
                  alt="Link Image"
                  className="w-[50px] lg:w-[50px] "
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:w-[50%]">
        <h2 className="text-white mb-3 lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
          Meet Our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
            Community
          </span>
        </h2>
        <p className="text-white text-[16px] lg:text-[16px] text-white-700">
          Welcome to our vibrant communities of content creators and innovators!
          Here, creativity thrives, ideas flourish, and support is abundant.
          Join us in shaping the future of content generation together.
        </p>
        <div className=" max-w-[554px] lg:flex hidden items-center justify-center">
          <Image
            src={CommunityImg}
            alt="Community"
            className="mt-4 w-[80%]"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;

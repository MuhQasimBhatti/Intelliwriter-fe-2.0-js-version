import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_FEATURES, SOCIAL_LINKS } from "@/constants";
import SocialIcons from "./SocailIcons";
import { Logo } from "../../public";

const Footer = () => {
  return (
    <div className="md:pt-0 text-[16px] text-white w-full">
      <div className="rounded-xl bg-primary-two pb-2 pt-8 px-5 xl:px-10 xl:pt-14">
        <div className="md:flex-row flex-col gap-10 flex justify-between">
          <div className="flex flex-col gap-2 md:w-1/2">
            <div className="w-36">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={200}
                  height={18}
                  className="object-contain w-36 xl:w-44"
                />
              </Link>
            </div>
            <div className="py-2 md:mr-20 max-w-md">
              <p className="text-[16px] font-[400]">
                At IntelliWriter, we are passionate about the power of
                technology to revolutionize the way we create content.
              </p>
            </div>
            <div>
              <SocialIcons socialLinks={SOCIAL_LINKS} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 gap-10">
            <div className="flex flex-col md:w-1/2">
              <span className="bg-gradient-to-r from-[#F70FFF] to-[#1754fc] text-transparent bg-clip-text text-2xl font-semibold">
                Menu
              </span>
              <ul className="flex-col py-1">
                {FOOTER_LINKS.map((item, index) => (
                  <li key={index} className="py-1 text-[16px]">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 pb-7 md:w-1/2 xl:mr-4">
              <span className="bg-gradient-to-r from-[#F70FFF] to-[#1754fc] text-transparent bg-clip-text text-2xl font-semibold">
                Features
              </span>
              <ul className="flex-col py-1">
                {FOOTER_FEATURES.map((item, index) => (
                  <li key={index} className="py-1 text-[16px]">
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#ffffff37] my-2"></div>
        <div className="md:flex justify-between text-[16px]">
          <p>Intelliwriter &copy; All rights reserved.</p>
          <div>
            <ul className="md:flex md:gap-7 mt-2">
              <li className="pb-1">
                <Link href="/termsandcondition">Terms and conditions</Link>
              </li>
              <li>
                <Link href="/privacypolicy">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

"use client";

import React from "react";
import Image from "next/image";
import { features } from "../constants";

const Features = () => {
  return (
    <div className="container mx-auto pt-5 pb-5">
      <div className="w-full lg:px-10 md:px-8 px-6 py-3 overflow-hidden" id="features">
        <div className="w-full flex items-center justify-center flex-col">
          <div className="w-full text-white flex-col flex gap-2 items-center justify-center mb-2">
            <p className="text-center lg:text-xl md:text-lg sm:text-lg text-lg font-medium"></p>
            <h2 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-semibold">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
                Features
              </span>
            </h2>
            <p className="text-[16px] text-white text-center lg:w-[40%]">
              Our team of professionals has deep experience in AI development
              and an unwavering commitment to your security and privacy
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center rounded-lg py-4 px-6 bg-[rgba(32,45,72,0.41)] text-white gap-2 overflow-hidden border border-[#FFFFFF14] text-center"
            >
              <div className="h-[50%] flex items-center justify-center">
                <Image src={item.icon} alt="Features" width={150} height={150} />
              </div>
              <div className="h-[50%] pt-2 md:pt-3">
                <h2 className="text-[22px] md:text-[20px] xl:text-[22px] font-semibold">
                  {item.title}
                </h2>
                <p className="text-[16px] md:text-[15px] xl:text-[16px] font-normal text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

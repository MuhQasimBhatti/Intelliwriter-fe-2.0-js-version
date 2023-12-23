import React from "react";
import Image from "next/image";
import { ABOUTUS_CONTENT } from "../constants";

const AboutUs = () => {
  const content = ABOUTUS_CONTENT[0];
  return (
    <div
      className="container mx-auto pt-8 text-white text-center w-full py-1 overflow-hidden"
      id="about"
    >
      <div className="w-full flex items-center justify-center flex-col">
        <div className="w-full text-white flex-col flex gap-2 items-center justify-center">
          <h2 className="text-center lg:text-[36px] md:text-3xl sm:text-2xl text-2xl font-semibold">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ec44ff] to-[#2d46ff]">
              Us
            </span>
          </h2>
          <div className="w-full flex items-center justify-center text-center gap-8 max-w-4xl">
            <p className="md:w-[85%] w-full px-2 md:px-0 text-center pb-10 lg:pb-10 pt-3 leading-8 lg:text-[16px] md:text-[16px] text-[16px] font-[500]">
              {content.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center sm:gap-10 pt-0 pb-4 px-8 md:px-36 contentSec">
        {content.steps.map((step, index) => (
          <div key={index} className="mb-5">
            <div className="rounded-3xl shadow metaBorder">
              <Image
                src={step.image}
                width={1000}
                height={500}
                alt={`Step ${index + 1}`}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

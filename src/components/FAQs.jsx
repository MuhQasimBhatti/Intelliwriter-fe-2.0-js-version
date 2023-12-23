"use client";

import React from "react";
import Accordion from "./Accordion";

const FAQs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full container lg:px-10 px-3 pb-5 md:px-8 overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-white flex flex-col gap-2 mb-2">
            <h2 className="text-center lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
                Questions
              </span>
            </h2>

            <p className="text-center text-white text-[16px] lg:text-[16px] text-white-700">
              We're dedicated to assisting individuals interested in generating AI-driven content and images
            </p>
          </div>

          <div className="pt-4 flex items-center justify-center">
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

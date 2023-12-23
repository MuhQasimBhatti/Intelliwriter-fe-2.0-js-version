"use client";

import React, { useEffect, FC } from "react";
import { RocketImg } from "../../public";
import Image from "next/image";


const CircleContainer = ({ heading, text }) => {
  return (
    <div className="w-36 h-36 bg-[#FFFFFF05] border border-gray-600 rounded-full mx-4 text-white text-center flex flex-col items-center justify-center m-1">
      <h2 className="mb-2 text-xl font-bold">{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

const ContentContainer = ({ heading, text }) => {
  return (
    <div className="md:w-72 w-full h-50 xl:w-96 xl:h-42 bg-[#FFFFFF05] border border-gray-600 rounded-lg  py-5 px-3 text-white text-left m-1">
      <h2 className="mb-2 text-xl font-semibold">{heading}</h2>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};

const OurRoadmap = () => {
  return (
    <>
      <div>
        <div className="container mx-auto py-5 lg:px-10 px-4">
          <div className="w-full lg:px-14 md:px-8 px-6 py-3 overflow-hidden">
            <div className="w-full text-white flex-col flex gap-2">
              <p className="lg:text-lg md:text-[16px] sm:text-[16px] text-md font-medium">
                OUR ROADMAP
              </p>
              <h2 className="lg:text-4xl md:text-2xl sm:text-1xl text-2xl font-bold">
                Our Strategy <br className="md:hidden inline" /> &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DE1DF5] to-[#011DFD]">
                  Project Plan
                </span>
              </h2>
              <p className="text-lg text-white-700 max-w-3xl">
                Our Mission: AI-Powered Content and Image Creation Serving
                People
              </p>
            </div>
          </div>

          {/* Q1 Section */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center md:px-3 lg:px-0">
            <div className="items-end lg:flex hidden justify-end -mt-10 lg:-mt-36 mr-10">
              <Image
                src={RocketImg}
                alt="Rocket.png"
                width={500}
                height={500}
              />
            </div>

            <div className="w-full flex items-center justify-center lg:ml-10 lg:mr-10 pb-10 lg:mt-0">
              <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center">
                <div className="bg-[#FFFFFF05] flex-col shadow-inner shadow-[#2C63FF] text-white flex items-center justify-center w-40 h-40 rounded-full">
                  <span className="text-[#2C63FF] text-lg">Q1</span>
                  <p className="text-[16px] pt-1">answer</p>
                  <div className="bg-[#2C63FF] w-[130px] h-[130px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[70px]"></div>
                </div>

                <div className="w-full mt-7 lg:w-1/2 md:w-5/12 lg:ml-2 flex items-center justify-center">
                  <div className="w-full bg-[#FFFFFF05] shadow sm:px-5 px-2 py-5 rounded-lg text-xl border border-[#FFFFFF14] text-white text-start font-bold ml-2">
                    <p>Algorithmic Enhancement</p>
                    <p className="text-base font-medium pt-2">
                      We're committed to delivering top-notch services by
                      perpetually refining AI algorithms, guaranteeing superior
                      content and image generation with improved quality,
                      coherence, and diversity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Q2 & Q3 Section */}
          <div className="w-full flex lg:flex-row flex-col -mt-5 items-center justify-center md:p-8 mb-8">
            <div className="flex lg:flex-row flex-col md:flex-row items-center justify-center">
              <div className="bg-[#FFFFFF05] flex-col shadow-inner shadow-[#2C63FF] text-white flex items-center justify-center w-40 h-40 rounded-full">
                <span className="text-[#2C63FF] text-lg">Q2</span>
                <p className="text-[16px] pt-1">answer</p>
                <div className="bg-[#2C63FF] w-[130px] h-[130px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[70px]"></div>
              </div>

              <div className="w-full md:w-[430px] text-white p-5">
                <div className="w-full bg-[#FFFFFF05] shadow sm:px-5 px-1 py-5 rounded-lg text-xl font-bold sm:mt-0 border border-[#FFFFFF14]">
                  Personalized Content Delivery
                  <p className="text-base font-medium pt-2">
                    Tailor content based on user preferences and behavior,
                    offering a unique and engaging experience for every visitor.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col items-center md:flex-row justify-center">
              <div className="bg-[#FFFFFF05] flex-col shadow-inner shadow-[#2C63FF] text-white flex items-center justify-center w-40 h-40 rounded-full">
                <span className="text-[#2C63FF] text-lg">Q3</span>
                <p className="text-[16px] pt-1">answer</p>
                <div className="bg-[#2C63FF] w-[130px] h-[130px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[70px]"></div>
              </div>

              <div className="w-full md:w-[430px]  text-white  p-5">
                <div className="w-full bg-[#FFFFFF05] shadow sm:px-5 px-1 py-5 rounded-lg text-xl font-bold sm:mt-0 border border-[#FFFFFF14]">
                  Quality Control Measures
                  <p className="text-base font-medium pt-2">
                    Implement stringent checks and human-in-the-loop validation
                    processes to ensure high-quality, accurate content output.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Q4 Section */}
          <div className="flex lg:flex-row -mt-9 lg:-mt-0 md:flex-row flex-col items-center sm:-mt-10 justify-center">
            <div className="bg-[#FFFFFF05] flex-col shadow-inner shadow-[#2C63FF] text-white flex items-center justify-center w-40 h-40 rounded-full">
              <span className="text-[#2C63FF] text-lg">Q4</span>
              <p className="text-[16px] pt-1">answer</p>
              <div className="bg-[#2C63FF] w-[130px] h-[130px] absolute rounded-full -translate-y-4/5 translate-x-1/2 md:translate-x-2/3 lg:translate-x-full blur-[70px]"></div>
            </div>

            <div className="w-full lg:w-1/3 md:w-5/12 text-white p-3 ml-2">
              <div className="w-full bg-[#FFFFFF05] shadow sm:px-5 px-2 py-5 rounded-lg text-xl font-bold border border-[#FFFFFF14]">
                <p>Multimedia Expansion</p>
                <p className="text-base font-medium pt-2">
                  Diversifying our offerings, we're expanding content generation
                  to include images, videos, audio, and interactive formats,
                  aiming to elevate user engagement across various multimedia
                  channels.
                </p>
              </div>
            </div>
          </div>

          {/* Second section */}
          <div className="mt-10 mx-auto  items-center justify-center mb-14">
            <div className="lg:flex items-center justify-around">
              <div className="flex flex-col md:flex-row items-center justify-center my-2 lg:my-6">
                <CircleContainer heading="Q5" text="answer" />
                <ContentContainer
                  heading="Ethical Compliance Frameworks"
                  text="Prioritize adherence to ethical and legal standards, ensuring generated content aligns with copyright laws and ethical guidelines."
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center my-2 lg:my-6">
                <CircleContainer heading="Q6" text="answer" />
                <ContentContainer
                  heading="Community-Centric Iteration"
                  text="Promote engagement from users to continually enhance content creation, nurturing a cycle of community-driven improvement through iterative refinements."
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center my-2 lg:my-6">
              <CircleContainer heading="Q7" text="answer" />
              <ContentContainer
                heading="AI-Driven Ethics"
                text="Embed ethical considerations into AI models, safeguarding against the creation of misleading or harmful content and respecting user privacy."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRoadmap;

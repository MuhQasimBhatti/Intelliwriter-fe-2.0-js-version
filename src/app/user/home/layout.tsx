"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Image from "next/image";
import Link from "next/link";
import { ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { BasicCardData, templateData } from "@/constants/dashboard";
import { AiOutlineRight } from "react-icons/ai";
import { ImageGeneration } from "../../../../public";
import getWordCount from "@/utils/getWordCount"
Chart.register(ArcElement, Tooltip, Legend);

type Props = {
  children: ReactNode;
};

interface DoughnutChartProps {
  data: number[];
  labels: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#c75270", "#213856"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Doughnut
      data={chartData}
      options={chartOptions}
      width={400}
      height={400}
    />
  );
};

const Layout = ({ children }: Props) => {
  const [wordCount, setWordCount] = useState<number | null>(0);

  const fetchWordCount = async () => {
    try {
      const result = await getWordCount();
      console.log(result)
      if (result.success) {
        setWordCount(result.words_left);
      }
      else {
        console.error("Error fetching word count:", result.message);
      }
    }
    catch (error: any) {
      console.error("Error fetching word count:", error.message);
    }
  }

  useEffect(() => {
    fetchWordCount();
  }, []);

  const chartData = [3000, 5000];
  const chartLabels = ["Remaining Words", "Total words"];
  const iconColors = ["text-red-500", "text-blue-500", "text-green-500"];

  return (
    <div className="layout">
      <main>{children}</main>
      <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
        {/* Toggle Button 
        <IoMdMenu
          className="lg:hidden block"
          onClick={() => setToggle(!toggle)}
        />*/}
        {/* <h2 className="text-2xl font-semibold p-2">Overview</h2> */}
        <div className="gap-4 w-full flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-between items-center mx-auto p-5 pt-2">
          <div className="p-2 w-full lg:w-[400px] bg-[rgba(32,45,72,0.41)] h-[330px] rounded-[12px] justify-evenly flex items-center flex-col">
            <h2 className="text-white text-[18px] font-[600]">
              Create new Images
            </h2>
            <Image
              src={ImageGeneration}
              alt="Image generation"
              width={200}
              height={200}
            />
            <Link
              href="/user/image-generator"
              className="rounded-lg bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] px-3 py-1 md:px-4 md:py-2 hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full min-h-[300px] rounded-[12px] py-6 bg-[rgba(32,45,72,0.41)] p-6 ">
            <div className="flex justify-between items-center pb-4">
              <h2 className="text-white text-[18px] font-[600]">Overview</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Cards */}
              {BasicCardData.map((basic, index) => (
                <div key={basic.id}>
                  <div className="text-white p-5 basis-1/3 bg-[rgba(32,45,72,0.41)] overflow-hidden relative backdrop-blur-md shadow rounded-[20px]">
                    <div className="absolute -bottom-4 -right-4 bg-blue-500 w-28 h-28 blur-[80px]"></div>
                    <div className="absolute -bottom-4 -right-4 bg-cyan-400 w-16 h-16 blur-[50px]"></div>
                    {/* Rest of the content */}
                    <div className="flex flex-col items-center gap-4 justify-center h-[200px]">
                      <span className={`iconColors[index] text-[28px] bg-gradient-to-r from-[#F871FF] to-[#2C63FF] rounded-full p-2`} >
                        <basic.icon />
                      </span>

                      <span className={`capitalize font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]`}>
                        {basic.id === 1 ? basic.plan : basic.id === 2 ? wordCount : basic.remaining}
                      </span>

                      <p className="text-[16px] opacity-60">{basic.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview section */}
        <div className="flex w mx-auto flex-col gap-5 my-8">
          <div className="font-semibold text-2xl">Statistics</div>

          <div className="flex flex-col lg:flex-row justify-evenly gap-5 ">
            <div className="w-full py-5 bg-[rgba(32,45,72,0.41)] shadow rounded-[12px] ">
              <div className="font-semibold px-5 pb-3 metaText border-b">
                Words Usage
              </div>
              {/* <Doughnut data={words} className="mx-auto pt-2" /> */}
              <div className="w-3/4 mx-auto pt-2 ">
                <DoughnutChart data={[wordCount || 0, 3000 - (wordCount || 0)]} labels={chartLabels} />
              </div>
            </div>

            <div className="w-full py-5 bg-[rgba(32,45,72,0.41)]  shadow rounded-md ">
              <div className="font-semibold px-5 pb-3 metaText border-b">
                Chat Usage
              </div>
              {/* <Doughnut  className="mx-auto pt-2" /> */}
              <div className="w-3/4 mx-auto pt-2">
                <DoughnutChart data={chartData} labels={chartLabels} />
              </div>
            </div>
          </div>
        </div>

        {/* Templates section */}
        <h2 className="text-2xl font-semibold p-2">Templates</h2>
        <div className="grid grid-cols-1 gap-5 py-3 md:grid-cols-2 lg:grid-cols-3">
          {templateData.map((item) => (
            <div key={item.id}>
              <div className="text-white basis-1/3 h-[70px] bg-[rgba(32,45,72,0.41)] overflow-hidden relative backdrop-blur-md shadow rounded-md">
                <Link
                  href={item.url}
                  className="flex items-center p-5 bg-cardcolor text-white text-opacity-60 shadow rounded-md"
                >
                  <span
                    className="items-center justify-center block w-9 h-9 rounded-md text-xl mr-3 p-2"
                    style={{ backgroundColor: item.bgcolor, color: item.color }}
                  >
                    {React.createElement(item.icon)}
                  </span>
                  <div className="text-base">{item.title}</div>
                  <AiOutlineRight size={15} className="ms-auto" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;

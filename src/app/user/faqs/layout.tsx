"use client";

import React, { ReactNode } from "react";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <main>
        {children}
        <div className="absolute top-14 right-0 md:px-10 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full container lg:px-10 px-3 pb-5 md:px-8 overflow-hidden ">
              <div className="w-full flex flex-col items-start justify-center">
                <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
                  <Link href="/user/home">Home</Link>
                  <FaChevronRight className="text-sm" />
                  <Link href="/user/social-media">FAQs & Help</Link>
                </div>
                <h2 className="text-3xl font-semibold p-2 pb-3">FAQs & Help</h2>
                <div className="pt-4 flex items-start justify-center w-full md:w-4/5 lg:w-11/12">
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default layout;

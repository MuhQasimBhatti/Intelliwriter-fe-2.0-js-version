import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA_Shape1 from "../../public/CTA_Shape1.jpg";
import CTA_Shape3 from "../../public/CTA_Shape3.jpg";
import CTA_Graph from "../../public/CTA_Graph.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto w-full p-5 md:px-10 lg:px-24 pb-16 relative">
      <div className="bg-[#54157eec] text-white md:flex items-center justify-center px-2 py-4 md:p-10 rounded-2xl relative">
        <div>
          <Image
            src={CTA_Shape3}
            className="absolute top-0 left-0"
            alt=""
            width={800}
            height={300}
          />
        </div>
        <div className="md:w-1/2 p-5">
          <Image src={CTA_Graph} alt="cta" width={500} height={300} />
        </div>

        <div className="md:w-1/2 py-3 px-5 md:p-5 relative z-10">
          <h2 className="font-vietnam font-semibold text-lg md:text-3xl lg:text-4xl md:my-6 relative">
            More than 13000 teams use our platform
          </h2>
          <p className="text-base my-4 md:my-8">
            Experience the difference and elevate your content creation with our
            cutting-edge tools and support.
          </p>
          <button>
            <Link
              href="/auth/register"
              className=" rounded-lg bg-gradient-to-r to-[#61C6FF] from-[#283DFC] px-3 py-2 md:px-7 md:py-3 hover:opacity-90"
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 md:block hidden md:mr-8 mt-10 z-0">
        <Image src={CTA_Shape1} alt="cta-shape" width={300} height={100} />
      </div>
    </div>
  );
};

export default Banner;

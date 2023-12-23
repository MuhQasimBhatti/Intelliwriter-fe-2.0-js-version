import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const AboutUs = dynamic(() => import("../components/AboutUs"));
const Hero = dynamic(() => import("../components/Hero"));
const FAQs = dynamic(() => import("../components/FAQs.jsx"));
const Features = dynamic(() => import("../components/Features"));
const Banner = dynamic(() => import("../components/Banner"));
const OurRoadmap = dynamic(() => import("../components/OurRoadmap"));
const PricingPlan = dynamic(() => import("../components/PricingPlan"));
const Community = dynamic(() => import("../components/Community"));
const Footer = dynamic(() => import("../components/Footer"));
const CookiePopup = dynamic(() => import("../components/CookiePopup"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <AboutUs />
        <Features />
        <PricingPlan />
        <Community />
        <Banner />
        <OurRoadmap />
        <FAQs />
      </main>
      <CookiePopup />
      <Footer />
    </>
  );
}

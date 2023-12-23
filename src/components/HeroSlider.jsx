"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([EffectCards]);

const HeroSlider = () => {
  const images = [SliderActive, SliderActive, SliderActive, SliderActive];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      className="mySwiper"
      initialSlide={2}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={image}
            fill
            className="image-slider"
            alt={`Slide ${index + 1}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

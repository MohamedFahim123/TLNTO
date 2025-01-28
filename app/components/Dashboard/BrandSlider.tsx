"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function BrandSlider() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={10}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/microsoft.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/sony.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/acer.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/nokia.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/asus.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/casio.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/dell.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/panasonic.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/vaio.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/sony.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/microsoft.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/sony.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/acer.svg"
            alt="jobBox"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={100}
            height={50}
            src="/assets/imgs/page/dashboard/nokia.svg"
            alt="jobBox"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default React.memo(BrandSlider);

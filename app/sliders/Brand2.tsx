"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider2 = () => {
  return (
    <>
      <div className="swiper-container swiper-group-7 swiper">
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          className="swiper-wrapper"
        >
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/microsoft.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/sony.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/acer.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/nokia.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/casio.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#">
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage3/dell.svg"
                alt="jobBox"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BrandSlider2;

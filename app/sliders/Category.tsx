"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/grid";
import { useCategoriesStore } from "../store/MainCategories";
import { useCitiesInsideCurrRegionStore } from "../store/CurrCitiesInsideCurrRegion";

const CategorySlider = () => {
  const { categories } = useCategoriesStore();
  const { currRegion } = useCitiesInsideCurrRegionStore();

  return (
    <>
      <div className="swiper-container swiper-group-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            575: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide hover-up">
                <Link href={`/${currRegion}/jobs/find-job?category=${item.id}`}>
                  <div className="item-logo">
                    {/* <div className="image-left">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src={`/assets/imgs/page/homepage1/${item.icon}`}
                        />
                      </div> */}
                    <div className="text-info-right text-center">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </>
  );
};

export default CategorySlider;

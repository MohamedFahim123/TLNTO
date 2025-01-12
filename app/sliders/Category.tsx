'use client'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/grid";
import { Navigation } from "swiper/modules";

const data = [
    {
        icon: "marketing.svg",
        title: "Marketing & Sale",
        count: 1526
    },
    {
        icon: "customer.svg",
        title: "Customer Help",
        count: 185
    },
    {
        icon: "finance.svg",
        title: "Finance",
        count: 168
    },
    {
        icon: "lightning.svg",
        title: "Software",
        count: 1856
    },
    {
        icon: "human.svg",
        title: "Human Resource",
        count: 165
    },
    {
        icon: "management.svg",
        title: "Management",
        count: 965
    },
    {
        icon: "retail.svg",
        title: "Retail & Products",
        count: 563
    },
    {
        icon: "security.svg",
        title: "Security Analyst",
        count: 254
    },
    {
        icon: "content.svg",
        title: "Content Writer",
        count: 142
    },
    {
        icon: "research.svg",
        title: "Market Research",
        count: 532
    }
];

const CategorySlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-5">
                <Swiper
                    modules={Navigation}
                    slidesPerView={5}
                    spaceBetween={30}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        575: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        991: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1199: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    className="swiper-wrapper pb-70 pt-5 swiper-grid-jobobx"
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide hover-up">
                                <Link legacyBehavior href="/jobs-list">
                                    <a>
                                        <div className="item-logo">
                                            <div className="image-left">
                                                <img alt="jobBox" src={`/assets/imgs/page/homepage1/${item.icon}`} />
                                            </div>
                                            <div className="text-info-right">
                                                <h4>{item.title}</h4>
                                                <p className="font-xs">
                                                    {item.count}
                                                    <span> Jobs Available</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
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

'use client'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const BrandSlider2 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-7 swiper">
                <Swiper
                    modules={Navigation}
                    slidesPerView={7}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/microsoft.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/sony.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/acer.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/nokia.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/casio.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="/assets/imgs/page/homepage3/dell.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider2;

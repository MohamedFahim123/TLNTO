import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const BrandSlider = () => {
    return (
        <>
            <div className="swiper-container swiper-group-9 swiper">
                <Swiper
                    slidesPerView={9}
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
                            <img src="assets/imgs/slider/logo/microsoft.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/sony.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/acer.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/nokia.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/assus.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/casio.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/dell.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/panasonic.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/vaio.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#">
                            <img src="assets/imgs/slider/logo/sharp.svg" alt="jobBox" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default BrandSlider;

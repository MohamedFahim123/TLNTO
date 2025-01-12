import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const TestimonialSlider2 = () => {
    return (
        <>
            <div className="swiper-container swiper-group-4-border swiper">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    }}
                    className="swiper-wrapper  pb-70 pt-5"
                >
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Ellis Kim</h5>
                                    <span className="font-xs">Digital Artist</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user2.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>John Smith</h5>
                                    <span className="font-xs">Product designer</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user3.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Sayen Ahmod</h5>
                                    <span className="font-xs">Developer</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user4.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Tayla Swef</h5>
                                    <span className="font-xs">Graphic designer</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide hover-up">
                        <div className="card-review-1">
                            <div className="image-review">
                                {" "}
                                <img src="assets/imgs/page/homepage4/user.png" alt="jobBox" />
                            </div>
                            <div className="review-info">
                                <div className="review-name">
                                    <h5>Ellis Kim</h5>
                                    <span className="font-xs">Digital Artist</span>
                                </div>
                                <div className="review-rating">
                                    {" "}
                                    <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" /> <img src="assets/imgs/template/icons/star.svg" alt="jobBox" />
                                </div>
                                <div className="review-comment">Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt. Labore et dolore nostrud temp exercitation.</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default TestimonialSlider2;

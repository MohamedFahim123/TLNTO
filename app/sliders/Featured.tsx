import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const FeaturedSlider = ({ products }) => {
    return (
        <>
            <div className="swiper-container swiper-group-4">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        prevEl: ".swiper-button-prev-4",
                        nextEl: ".swiper-button-next-4"
                    }}
                    className="swiper-wrapper pb-10 pt-5"
                >
                    <SwiperSlide>
                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                            <div className="card-grid-2-image-left">
                                <span className="flash" />
                                <div className="image-box">
                                    <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                </div>
                                <div className="right-info">
                                    <Link legacyBehavior href="/company-details">
                                        <a className="name-job">Quora JSC</a>
                                    </Link>
                                    <span className="location-small">New York, US</span>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h6>
                                    <Link legacyBehavior href="/job-details">
                                        <a>Senior System Engineer</a>
                                    </Link>
                                </h6>
                                <div className="mt-5">
                                    <span className="card-briefcase">Part time</span>
                                    <span className="card-time">
                                        5<span> minutes ago</span>
                                    </span>
                                </div>
                                <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                <div className="mt-30">
                                    <Link legacyBehavior href="/job-details">
                                        <a className="btn btn-grey-small mr-5">PHP</a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                        <a className="btn btn-grey-small mr-5">Android </a>
                                    </Link>
                                </div>
                                <div className="card-2-bottom mt-30">
                                    <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <span className="card-text-price">$800</span>
                                            <span className="text-muted">/Hour</span>
                                        </div>
                                        <div className="col-lg-5 col-5 text-end">
                                            <Link legacyBehavior href="/job-details">
                                                <a className="btn btn-apply-now">Apply now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                            <div className="card-grid-2-image-left">
                                <span className="flash" />
                                <div className="image-box">
                                    <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                </div>
                                <div className="right-info">
                                    <Link legacyBehavior href="/company-details">
                                        <a className="name-job">Dailymotion</a>
                                    </Link>
                                    <span className="location-small">New York, US</span>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h6>
                                    <Link legacyBehavior href="/job-details">
                                        <a>Frontend Developer</a>
                                    </Link>
                                </h6>
                                <div className="mt-5">
                                    <span className="card-briefcase">Full time</span>
                                    <span className="card-time">
                                        6<span> minutes ago</span>
                                    </span>
                                </div>
                                <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                <div className="mt-30">
                                    <Link legacyBehavior href="/jobs-grid">
                                        <a className="btn btn-grey-small mr-5">Typescript</a>
                                    </Link>

                                    <Link legacyBehavior href="/jobs-grid">
                                        <a className="btn btn-grey-small mr-5">Java</a>
                                    </Link>
                                </div>
                                <div className="card-2-bottom mt-30">
                                    <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <span className="card-text-price">$250</span>
                                            <span className="text-muted">/Hour</span>
                                        </div>
                                        <div className="col-lg-5 col-5 text-end">
                                            <Link legacyBehavior href="/job-details">
                                                <a className="btn btn-apply-now">Apply now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                            <div className="card-grid-2-image-left">
                                <span className="flash" />
                                <div className="image-box">
                                    <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                </div>
                                <div className="right-info">
                                    <Link legacyBehavior href="/company-details">
                                        <a className="name-job">Periscope</a>
                                    </Link>
                                    <span className="location-small">New York, US</span>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h6>
                                    <Link legacyBehavior href="/job-details">
                                        <a>Lead Quality Control QA</a>
                                    </Link>
                                </h6>
                                <div className="mt-5">
                                    <span className="card-briefcase">Full time</span>
                                    <span className="card-time">
                                        6<span> minutes ago</span>
                                    </span>
                                </div>
                                <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                <div className="mt-30">
                                    <Link legacyBehavior href="/job-details">
                                        <a className="btn btn-grey-small mr-5">iOS</a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                        <a className="btn btn-grey-small mr-5">Laravel</a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                        <a className="btn btn-grey-small mr-5">Golang</a>
                                    </Link>
                                </div>
                                <div className="card-2-bottom mt-30">
                                    <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <span className="card-text-price">$250</span>
                                            <span className="text-muted">/Hour</span>
                                        </div>
                                        <div className="col-lg-5 col-5 text-end">
                                            <Link legacyBehavior href="/job-details">
                                                <a className="btn btn-apply-now">Apply now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                            <div className="card-grid-2-image-left">
                                <span className="flash" />
                                <div className="image-box">
                                    <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                </div>
                                <div className="right-info">
                                    <Link legacyBehavior href="/company-details">
                                        <a className="name-job">Dailymotion</a>
                                    </Link>
                                    <span className="location-small">New York, US</span>
                                </div>
                            </div>
                            <div className="card-block-info">
                                <h6>
                                    <Link legacyBehavior href="/job-details">
                                        <a>Frontend Developer</a>
                                    </Link>
                                </h6>
                                <div className="mt-5">
                                    <span className="card-briefcase">Full time</span>
                                    <span className="card-time">
                                        6<span> minutes ago</span>
                                    </span>
                                </div>
                                <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                <div className="mt-30">
                                    <Link legacyBehavior href="/jobs-grid">
                                        <a className="btn btn-grey-small mr-5">Typescript</a>
                                    </Link>

                                    <Link legacyBehavior href="/jobs-grid">
                                        <a className="btn btn-grey-small mr-5">Java</a>
                                    </Link>
                                </div>
                                <div className="card-2-bottom mt-30">
                                    <div className="row">
                                        <div className="col-lg-7 col-7">
                                            <span className="card-text-price">$250</span>
                                            <span className="text-muted">/Hour</span>
                                        </div>
                                        <div className="col-lg-5 col-5 text-end">
                                            <Link legacyBehavior href="/job-details">
                                                <a className="btn btn-apply-now">Apply now</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="swiper-button-next swiper-button-next-4" />
                <div className="swiper-button-prev swiper-button-prev-4" />
            </div>
        </>
    );
};

export default FeaturedSlider;

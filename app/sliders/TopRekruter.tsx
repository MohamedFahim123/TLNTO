"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Swiper } from "swiper/react";
import { TopRecruiter } from "../components/Home/TopRecruiters";

const TopRekruterSlider = ({
  topRecruiters,
  region,
}: {
  topRecruiters: TopRecruiter[];
  region: string;
}) => {
  return (
    <>
      <div className="swiper-container swiper-group-1 swiper-style-2">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev-1",
            nextEl: ".swiper-button-next-1",
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
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1199: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="swiper-wrapper pt-5"
        >
          {topRecruiters.map((recruiter) => (
            <Fragment key={recruiter.id}>
              <div className="swiper-slide">
                <div className="item-5 hover-up wow animate__animated animate__fadeIn">
                  <Link href={`/${region}/jobs/recruiters/${recruiter.id}`}>
                    <div className="item-logo">
                      <div className="image-left">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src={recruiter.companyLogo}
                        />
                      </div>
                      <div className="text-info-right">
                        <h4>{recruiter.name}</h4>
                        <span className="font-xs color-text-mutted ml-10">
                          <span>(</span>
                          <span>68</span>
                          <span>)</span>
                        </span>
                      </div>
                      <div className="text-info-bottom mt-5">
                        <span className="font-xs color-text-mutted icon-location">
                          {recruiter.city}, {recruiter.country}
                        </span>
                        <span className="font-xs color-text-mutted float-end mt-5">
                          {recruiter.jobs_count}
                          <span> Open Jobs</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Fragment>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-next swiper-button-next-1" />
      <div className="swiper-button-prev swiper-button-prev-1" />
    </>
  );
};

export default TopRekruterSlider;

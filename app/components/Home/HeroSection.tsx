"use client";

import { useCitiesInsideCurrRegionStore } from "@/app/store/CurrCitiesInsideCurrRegion";
import { useIndustriesStore } from "@/app/store/Industries";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface searchValues {
  title: string;
  city: string;
  industry: string;
}

function HeroSection() {
  const { industries } = useIndustriesStore();
  const { citiesInsideCurrRegion, currRegion } =
    useCitiesInsideCurrRegionStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [values, setvalues] = useState<searchValues>({
    title: "",
    city: "",
    industry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (values.title || values.city || values.industry) {
      const newParams = new URLSearchParams(searchParams);
      if (values.title) newParams.set("title", values.title);
      if (values.city) newParams.set("city", values.city);
      if (values.industry) newParams.set("industry", values.industry);
      router.push(`/${currRegion}/jobs/find-job?${newParams.toString()}`);
    }
  };

  return (
    <section className="section-box">
      <div className="banner-hero hero-1">
        <div className="banner-inner">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="block-banner">
                <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                  The <span className="text-white">Easiest Way</span>
                  <br className="d-none d-lg-block" />
                  to Get Your New Job
                </h1>
                <div
                  className="banner-description mt-20 wow animate__animated animate__fadeInUp text-white"
                  data-wow-delay=".1s"
                >
                  Each month, more than 3 million job seekers turn to{" "}
                  <br className="d-none d-lg-block" />
                  website in their search for work, making over 140,000{" "}
                  <br className="d-none d-lg-block" />
                  applications every single day
                </div>
                <div
                  className="form-find mt-40 wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="box-industry">
                      <select
                        title="Industry"
                        id="industrySelect"
                        name="industry"
                        onChange={handleChange}
                        className="form-input ps-2 select-active"
                      >
                        <option value="">Industry</option>
                        {industries.map((industry) => (
                          <option key={industry.id} value={industry.id}>
                            {industry.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="box-industry">
                      <select
                        title="City"
                        id="CitySelect"
                        name="city"
                        onChange={handleChange}
                        className="form-input ps-2 select-active"
                      >
                        <option value="">City</option>
                        {citiesInsideCurrRegion.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      className="form-input input-keysearch mr-10"
                      type="text"
                      name="title"
                      onChange={handleChange}
                      placeholder="Job title"
                    />
                    <button
                      type="button"
                      title="search"
                      onClick={handleSubmit}
                      className="btn btn-default btn-find font-sm"
                    >
                      Search
                    </button>
                  </form>
                </div>
                <div
                  className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <strong className="text-light me-2">Popular Searches:</strong>
                  <Link legacyBehavior href="#">
                    <a className="text-light">Designer, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">Web, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">IOS, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">Developer, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">PHP, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">Senior, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a className="text-light">Engineer, </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
              <div className="banner-imgs">
                <div className="block-1 shape-1">
                  <Image
                    width={350}
                    height={300}
                    className="img-responsive"
                    alt="jobBox"
                    src="/assets/imgs/page/homepage1/banner1.png"
                  />
                </div>
                <div className="block-2 shape-2">
                  <Image
                    width={350}
                    height={200}
                    className="img-responsive"
                    alt="jobBox"
                    src="/assets/imgs/page/homepage1/banner2.png"
                  />
                </div>
                <div className="block-3 shape-3">
                  <Image
                    width={100}
                    height={70}
                    className="img-responsive"
                    alt="jobBox"
                    src="/assets/imgs/page/homepage1/icon-top-banner.png"
                  />
                </div>
                <div className="block-4 shape-3">
                  <Image
                    width={100}
                    height={70}
                    className="img-responsive"
                    alt="jobBox"
                    src="/assets/imgs/page/homepage1/icon-bottom-banner.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(HeroSection);

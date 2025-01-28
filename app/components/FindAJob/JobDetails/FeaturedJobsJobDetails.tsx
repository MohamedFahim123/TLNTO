import FeaturedSlider from "@/app/sliders/Featured";
import React from "react";

export default function FeaturedJobsJobDetails() {
  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="text-left">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Featured Jobs
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Get the latest news, updates and tips
          </p>
        </div>
        <div className="mt-50">
          <div className="box-swiper style-nav-top">
            <FeaturedSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

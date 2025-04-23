"use client";

import TopRekruterSlider from "@/app/sliders/TopRekruter";
import React from "react";
import { useTopRecruiterStore } from "@/app/store/TopRecruiters";

function TopRecruiters() {
  const { topRecruiters } = useTopRecruiterStore();
  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Top Recruiters
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Discover your next career move, freelance gig, or internship
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box-swiper mt-50">
          <TopRekruterSlider topRecruiters={topRecruiters} />
        </div>
      </div>
    </section>
  );
}
export default React.memo(TopRecruiters);

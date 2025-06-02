import { fetchApi } from "@/app/Actions/FetchApi";
import TopRekruterSlider from "@/app/sliders/TopRekruter";
import { MainRegion } from "@/app/utils/mainData";
import { cookies } from "next/headers";
import React from "react";

export interface TopRecruiter {
  id: number;
  name: string;
  email: string;
  phone: string;
  country_id: number;
  country: string;
  city_id: number;
  city: string;
  industry_id: number;
  industry: string;
  commercial_certification: string;
  official_registeration: string;
  companyLogo: string;
  status: string;
  jobs_count: number;
  active_jobs_count: number;
}

async function TopRecruiters() {
  const cookiesData = await cookies();
  const region: string = cookiesData.get("region")?.value || MainRegion;
  const topRecuritersRes = await fetchApi<{ data: TopRecruiter[] }>(
    `top-recuiters`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        code: region,
      },
    }
  );
  const topRecruiters: TopRecruiter[] = topRecuritersRes?.data || [];
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
          <TopRekruterSlider topRecruiters={topRecruiters} region={region} />
        </div>
      </div>
    </section>
  );
}
export default React.memo(TopRecruiters);

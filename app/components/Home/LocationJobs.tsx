import { fetchApi } from "@/app/Actions/FetchApi";
import { MainRegion } from "@/app/utils/mainData";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

export interface Company {
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

export interface CountryJobs {
  id: number;
  name: string;
  country_id: number;
  country: string;
  code: string;
  image: string;
  companies: Company[];
  companies_count: number;
  jobs_count: number;
}

async function LocationJobs() {
  const cookiesData = await cookies();
  const currRegion: string = cookiesData.get("region")?.value || MainRegion;
  const countryJobsRes = await fetchApi<{ data: CountryJobs[] }>(
    `country-jobs`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        code: currRegion,
      },
    }
  );

  const countryJobs: CountryJobs[] = countryJobsRes?.data || [];

  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
            Jobs by Location
          </h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
            Find your favourite jobs and get the benefits of yourself
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-50">
          {countryJobs?.length > 0 &&
            countryJobs?.slice(0, 6)?.map((job) => (
              <div
                key={job.id}
                className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12"
              >
                <div className="card-image-top hover-up">
                  <Link href={`/${currRegion}/jobs/find-job?city=${job.id}`}>
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${job?.image})`,
                      }}
                    >
                      <span className="lbl-hot">Hot</span>
                    </div>
                  </Link>
                  <div className="informations">
                    <Link href={`/${currRegion}/jobs/find-job?city=${job.id}`}>
                      <h5>{job?.name}</h5>
                    </Link>
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <span className="text-14 color-text-paragraph-2">
                          {job?.jobs_count} Vacancy
                        </span>
                      </div>
                      <div className="col-lg-6 col-6 text-end">
                        <span className="color-text-paragraph-2 text-14">
                          {job?.companies_count} companies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
export default React.memo(LocationJobs);

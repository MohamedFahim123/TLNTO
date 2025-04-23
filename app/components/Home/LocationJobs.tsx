"use client";

import { useCountryJobsStore } from "@/app/store/CountryJobs";
import Link from "next/link";
import React from "react";

function LocationJobs() {
  const { countryJobs } = useCountryJobsStore();

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
                  <Link legacyBehavior href="#">
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
                    <Link legacyBehavior href="/jobs-grid">
                      <a>
                        <h5>{job?.name}</h5>
                      </a>
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

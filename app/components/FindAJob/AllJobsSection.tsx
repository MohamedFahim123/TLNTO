"use client";

import Image from "next/image";
import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import FilterationPart from "./FilterationPart";
import { DefaultValues } from "./FindAJobMainPage";
import { Job } from "@/app/store/GetAllJobsCompanyDashboard";
const Region: string = Cookies.get("region") || MainRegion;

export default function AllJobsSection({
  defaultValues,
  handleChange,
  allJobs,
  currCategory,
  selectedSubCategory,
  currSubCategory,
}: {
  defaultValues: DefaultValues;
  allJobs: Job[];
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  currCategory: string;
  selectedSubCategory: string;
  currSubCategory: { id: number; name: string }[];
}) {
  return (
    <section className="section-box mt-30">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
            <div className="content-page">
              <div className="row">
                {allJobs?.map((job) => (
                  <div
                    key={job.id}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                  >
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left">
                        <span className="flash" />
                        <div className="image-box">
                          <Image
                            width={50}
                            height={50}
                            src={
                              job?.company?.companyLogo !== "N/A"
                                ? job?.company?.companyLogo
                                : "/assets/imgs/page/company/company.png"
                            }
                            alt="jobBox"
                          />
                        </div>
                        <div className="right-info">
                          <Link
                            legacyBehavior
                            href={`/${Region}/jobs/find-job/slug`}
                          >
                            <a className="name-job">{job?.company?.name}</a>
                          </Link>
                          <span className="location-small">
                            {job?.country_name} - {job?.city_name}
                          </span>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h6>
                          <Link
                            legacyBehavior
                            href={`/${Region}/jobs/find-job/slug`}
                          >
                            <a>{job?.title}</a>
                          </Link>
                        </h6>
                        <div className="mt-5">
                          <span className="card-briefcase">
                            {job?.employment_type_name}
                          </span>
                          <span className="card-time">{job?.created_at}</span>
                        </div>
                        <div>
                          <span className="card-briefcase">
                            {job?.work_place_type_name}
                          </span>
                          {job?.years_exp !== "N/A" && (
                            <span className="card-time">{job?.years_exp}</span>
                          )}
                        </div>
                        <p className="font-sm color-text-paragraph mt-15">
                          {job?.description?.length > 50
                            ? job?.description?.slice(0, 50) + "..."
                            : job?.description}
                        </p>
                        <div className="mt-30">
                          <span className="btn btn-grey-small mr-5">
                            {job?.tags[0]?.sub_category_name}
                          </span>
                          -{" "}
                          <span className="btn btn-grey-small mr-5">
                            {job?.tags[0]?.name}
                          </span>
                          {job?.tags[1] && (
                            <span className="btn btn-grey-small mr-5">
                              {job?.tags[1]?.name}
                            </span>
                          )}
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7">
                              <span className="card-text-price">
                                {job?.currency}
                                {job?.salary}
                              </span>
                            </div>
                            <div className="col-lg-5 col-5 text-end">
                              <div
                                className="btn btn-apply-now"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalApplyJobForm"
                              >
                                Apply now
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="paginations">
              <ul className="pager">
                <li>
                  <a
                    className="pager-prev"
                    href={`/${Region}/jobs/find-job/slug`}
                  />
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">1</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">2</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">3</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">4</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">5</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number active">6</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                    <a className="pager-number">7</a>
                  </Link>
                </li>
                <li>
                  <a
                    className="pager-next"
                    href={`/${Region}/jobs/find-job/slug`}
                  />
                </li>
              </ul>
            </div> */}
          </div>
          <FilterationPart
            currCategory={currCategory}
            selectedSubCategory={selectedSubCategory}
            currSubCategory={currSubCategory}
            defaultValues={defaultValues}
            handleChange={handleChange}
            Region={Region}
          />
        </div>
      </div>
    </section>
  );
}

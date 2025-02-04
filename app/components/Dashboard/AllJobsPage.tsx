"use client";

import { useJobsCompanyDashboardStore } from "@/app/store/GetAllJobsCompanyDashboard";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BrandSlider from "./BrandSlider";
import GridView from "./GridView";
import ListView from "./ListView";

export default function AllJobsPage() {
  const { companyDashboardJobs } = useJobsCompanyDashboardStore();
  const region: string = Cookies.get("region") || MainRegion;
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const next = () => {
  //   setCurrentPage((page) => page + 1);
  // };

  // const prev = () => {
  //   setCurrentPage((page) => page - 1);
  // };

  // const handleActive = (item: number) => {
  //   setCurrentPage(item);
  // };

  const [activeTab, setActiveTab] = useState<number>(1);
  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="head d-flex align-items-center justify-content-between ">
          <h4 className=" my-4">My Jobs</h4>
          <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50 ">
            <span className="d-flex align-items-center justify-content-center">
              <Image
                className="me-1 lh-2"
                width={14}
                height={14}
                src="/assets/imgs/page/dashboard/home.svg"
                alt="jobBox"
              />
              <Link
                className="d-flex align-items-center"
                href={`/${region}/dashboard`}
              >
                Admin{" "}
                <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
              </Link>
              My Jobs
            </span>
          </div>
        </div>
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className="panel-white mb-30">
              <div className="box-padding">
                <div className="box-filters-job">
                  <div className="row mb-30">
                    <div className="col-xl-6 col-lg-5 py-4">
                      {companyDashboardJobs.length <= 0 ? null : (
                        <span className="font-sm text-showing text-black-50">
                          Showing {1} of {1} Pages
                        </span>
                      )}
                    </div>

                    <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15 py-4">
                      <div className="d-flex justify-content-end align-items-center w-100">
                        <div className="mr-10 d-inline-block d-flex justify-content-center align-items-center w-25">
                          <span className="text-sortby me-3">Show:</span>
                        </div>
                        <div className="box2 d-inline-block d-flex justify-content-center align-items-center ">
                          <span className="text-sortby me-3 w-75">
                            Sort by:
                          </span>
                        </div>
                        <div className="box-view-type">
                          <a className="view-type" onClick={() => handleTab(2)}>
                            <Image
                              width={40}
                              height={40}
                              src="/assets/imgs/template/icons/icon-list.svg"
                              alt="jobBox"
                            />
                          </a>
                          <a className="view-type" onClick={() => handleTab(1)}>
                            <Image
                              width={40}
                              height={40}
                              src="/assets/imgs/template/icons/icon-grid-hover.svg"
                              alt="jobBox"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {activeTab === 1 && (
                    <div className="row">
                      {companyDashboardJobs?.map((job, i) => (
                        <div
                          className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                          key={i}
                        >
                          <GridView job={job} />
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="row display-list">
                      {companyDashboardJobs?.map((job, i) => (
                        <div className="col-lg-6" key={i}>
                          <ListView job={job} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="paginations">
                  {/* <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="section-box bg-white border border-black border-opacity-10 border-1 rounded-4">
          <div className="container ">
            <div className="panel-white pt-30 pb-30 pl-15 pr-15">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-10">
                  <BrandSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

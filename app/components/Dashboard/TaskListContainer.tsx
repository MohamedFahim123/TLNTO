"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import BrandSlider from "./BrandSlider";
import MyTask from "./MyTask";
import Pagination from "./Pagination";
import { tasks } from "./task";
import Cookies from "js-cookie";
import { MainRegion } from "@/app/utils/mainData";

export default function TaskListContainer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const showLimit: number = 12;
  const showPagination: number = 4;
  const region: string = Cookies.get("region") || MainRegion;

  const [pagination, setPagination] = useState<number[] | []>([]);
  const limit: number = showLimit;
  const [pages, setPages] = useState(Math.ceil(tasks.length / limit));

  const cratePagination = useCallback(() => {
    const arr = new Array(Math.ceil(tasks.length / limit))
      .fill(null)
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(tasks.length / limit));
  }, [limit]);

  useEffect(() => {
    cratePagination();
  }, [cratePagination, limit, pages]);

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;

  const getPaginatedProducts = tasks.slice(startIndex, endIndex);

  const start = Math.floor((currentPage - 1) / showPagination) * showPagination;
  const end = start + showPagination;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item: number) => {
    setCurrentPage(item);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="head d-flex align-items-center justify-content-between ">
          <h4 className=" my-4">My Task</h4>
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
              My Task
            </span>
          </div>
        </div>
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className="panel-white mb-30">
              <div className="box-padding">
                <div className="row display-list">
                  {getPaginatedProducts.length === 0 && (
                    <span>No Products Found </span>
                  )}
                  <div className="row">
                    {getPaginatedProducts.map((task, i) => (
                      <div className="col-xl-3 col-lg-4 col-md-6" key={i}>
                        <MyTask task={task} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="paginations">
                  <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="section-box bg-white border border-black border-opacity-10 border-1 rounded-4">
          <div className="container">
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

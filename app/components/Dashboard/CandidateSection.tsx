"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Candidate from "./Candidate";
import { CandidateElement, candidates } from "./candidates";
import Pagination from "./Pagination";
import ShowSelect from "./ShowSelect";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";

export default function CandidateSection() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const [filteredData, setFilteredData] =
    useState<CandidateElement[]>(candidates);
  const [active, setActive] = useState<string>("");
  const region: string = Cookies.get("region") || MainRegion;

  function handleClick(constter: string) {
    const newData: CandidateElement[] = candidates.filter((item) =>
      item.title.toLowerCase().startsWith(constter)
    );
    setFilteredData(newData);
    setActive(constter);
  }
  const [currentPage, setCurrentPage] = useState<number>(1);
  const showLimit: number = 8,
    showPagination: number = 3;

  const [pagination, setPagination] = useState<number[] | []>([]);
  const [limit, setLimit] = useState(showLimit);
  const [pages, setPages] = useState(Math.ceil(filteredData.length / limit));

  const cratePagination = useCallback(() => {
    const arr: number[] = new Array(Math.ceil(filteredData.length / limit))
      .fill(null)
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(filteredData.length / limit));
  }, [filteredData.length, limit]);

  useEffect(() => {
    if (pages > 1 && filteredData.length > 0) {
      cratePagination();
    }
  }, [limit, pages, filteredData.length, cratePagination]);

  const startIndex: number = currentPage * limit - limit;
  const endIndex: number = startIndex + limit;

  const getPaginatedProducts: CandidateElement[] = filteredData.slice(
    startIndex,
    endIndex
  );

  const start: number =
    Math.floor((currentPage - 1) / showPagination) * showPagination;
  const end: number = start + showPagination;
  const getPaginationGroup: number[] = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item: number) => {
    setCurrentPage(item);
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setPages(Math.ceil(filteredData.length / Number(e.target.value)));
  };

  function reset() {
    setFilteredData(candidates);
    setActive("");
  }
  return (
    <>
      <div className="col-12">
        <div className="head d-flex align-items-center justify-content-between">
          <h4 className=" my-4">Candidates</h4>
          <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50 ">
            <span className="d-flex align-items-center justify-content-center">
              <Image
                className="me-1 lh-2"
                width={14}
                height={14}
                src="/assets/imgs/page/dashboard/home.svg"
                alt="jobBox"
              />
              <Link className="d-flex align-items-center" href={`/${region}/dashboard`}>
                Admin
                <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
              </Link>
              Candidates
            </span>
          </div>
        </div>
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className={``}>
              <div className="box-padding">
                <div className="row mb-30">
                  <div className="col-12">
                    <div className="box-list-character mb-15">
                      <ul>
                        {alphabet.map((letter) => (
                          <li key={letter} onClick={() => handleClick(letter)}>
                            <a className={active === letter ? "active" : ""}>
                              {letter}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-3">
                      <button
                        className="btn btn-default hover-up"
                        onClick={reset}
                      >
                        Reset
                      </button>
                      <div className="select-box">
                        <ShowSelect
                          selectChange={selectChange}
                          showLimit={showLimit}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {getPaginatedProducts.length === 0 && (
                  <span>No Products Found </span>
                )}
                <div className="row">
                  {getPaginatedProducts.map((item, i) => (
                    <div
                      className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12"
                      key={i}
                    >
                      <Candidate item={item} />
                    </div>
                  ))}
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
    </>
  );
}

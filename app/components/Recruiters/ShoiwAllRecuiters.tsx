"use client";

import Link from "next/link";

import { RecuiterInterface } from "@/app/[region]/jobs/recruiters/page";
import { useIndustriesStore } from "@/app/store/Industries";
import { MainRegion } from "@/app/utils/mainData";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ShoiwAllRecuiters({
  params,
  currRegion,
  recruiters,
}: {
  recruiters: RecuiterInterface[];
  params: { [key: string]: string };
  currRegion: string;
}) {
  const { industries } = useIndustriesStore();
  const Region = currRegion ? currRegion : MainRegion;
  const router = useRouter();

  return (
    <section className="section-box mt-30">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
            <div className="content-page">
              <div className="row">
                {recruiters.map((recruiter) => (
                  <div
                    key={recruiter.id}
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                  >
                    <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                      <div className="image-box">
                        <Link
                          href={`/${Region}/jobs/recruiters/${recruiter.id}`}
                        >
                          <Image
                            width={120}
                            height={120}
                            src={recruiter?.companyLogo}
                            alt={`${recruiter?.name} logo`}
                            className="rounded-circle bg-white"
                            style={{
                              objectFit: "contain",
                            }}
                          />
                        </Link>
                      </div>
                      <div className="info-text mt-10">
                        <h5 className="font-bold">
                          <Link
                            href={`/${Region}/jobs/recruiters/${recruiter.id}`}
                          >
                            {recruiter?.name}
                          </Link>
                        </h5>
                        <span className="card-location">
                          {recruiter?.city}, {recruiter?.country}
                        </span>
                        <div className="mt-30">
                          <Link
                            legacyBehavior
                            href={`/${Region}/jobs/recruiters/${recruiter.id}`}
                          >
                            <a className="btn btn-grey-big">
                              <span>{recruiter?.active_jobs_count}</span>
                              <span> Jobs Open</span>
                            </a>
                          </Link>
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
                    href={`/${Region}/jobs/recruiters/slug`}
                  />
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">1</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">2</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">3</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">4</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">5</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number active">6</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href={`/${Region}/jobs/recruiters/slug`}>
                    <a className="pager-number">7</a>
                  </Link>
                </li>
                <li>
                  <a
                    className="pager-next"
                    href={`/${Region}/jobs/recruiters/slug`}
                  />
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="sidebar-shadow none-shadow mb-30">
              <div className="sidebar-filters">
                <div className="filter-block head-border mb-30">
                  <h5>
                    Advance Filter
                    <Link legacyBehavior href={`/${Region}/jobs/recruiters`}>
                      <a className="link-reset">Reset</a>
                    </Link>
                  </h5>
                </div>
                <div className="filter-block mb-20">
                  <div className="form-group mt-5">
                    <h5 className="form-label">Industry</h5>
                    <select
                      value={params.industry || ""}
                      id="Industry_id"
                      className="form-control"
                      onChange={(e) => {
                        router.replace(
                          `/${Region}/jobs/recruiters?industry=${e.target.value}`
                        );
                      }}
                    >
                      <option value="" disabled>
                        Select Industry
                      </option>
                      {industries.map((industry) => (
                        <option key={industry.id} value={industry.id}>
                          {industry.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

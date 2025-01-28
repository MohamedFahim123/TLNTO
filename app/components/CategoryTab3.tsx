"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CategoryTab3 = () => {
  const [active, setActive] = useState<number>(1);

  const handleOnClick = (index: number) => {
    setActive(index);
  };
  return (
    <>
      <div className="list-tabs mt-40  text-center">
        <ul className="nav nav-tabs" role="tablist">
          <li>
            <a
              className={active === 1 ? "active" : ""}
              onClick={() => handleOnClick(1)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/management.svg"
                alt="jobBox"
              />{" "}
              Management
            </a>
          </li>
          <li>
            <a
              className={active === 2 ? "active" : ""}
              onClick={() => handleOnClick(2)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/marketing.svg"
                alt="jobBox"
              />{" "}
              Marketing &amp; Sale
            </a>
          </li>
          <li>
            <a
              className={active === 3 ? "active" : ""}
              onClick={() => handleOnClick(3)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/finance.svg"
                alt="jobBox"
              />{" "}
              Finance
            </a>
          </li>
          <li>
            <a
              className={active === 4 ? "active" : ""}
              onClick={() => handleOnClick(4)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/human.svg"
                alt="jobBox"
              />{" "}
              Human Resource
            </a>
          </li>
          <li>
            <a
              className={active === 5 ? "active" : ""}
              onClick={() => handleOnClick(5)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/retail.svg"
                alt="jobBox"
              />{" "}
              Retail &amp; Products
            </a>
          </li>
          <li>
            <a
              className={active === 6 ? "active" : ""}
              onClick={() => handleOnClick(6)}
            >
              <Image
                width={100}
                height={100}
                src="/assets/imgs/page/homepage1/content.svg"
                alt="jobBox"
              />{" "}
              Content Writer
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content mt-50" id="myTabContent-1">
        <div className={`tab-pane fade ${active == 1 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${active == 2 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${active == 3 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${active == 4 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${active == 5 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`tab-pane fade ${active == 6 && "show active"}`}>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher remote</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Lead Quality Control QA</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-9.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">Java</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">C++</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Swift
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UI / UX Designer fulltime</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">PHP</a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Python
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        JavaScript
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-3.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$350</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Full Stack Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-4.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$100</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Java Software Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-5.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$50</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Frontend Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-6.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$120</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-7.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$150</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-8.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$160</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>UX Designer &amp; Researcher</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-10.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>React Native Web Developer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-1.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card-grid-2 grid-bd-16 hover-up">
                <div className="card-block-info pt-25">
                  <h6>
                    <Link legacyBehavior href="/job-details">
                      <a>Senior System Engineer</a>
                    </Link>
                  </h6>
                  <div className="mt-5">
                    <span className="card-briefcase mr-15">Remote</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                  <div className="mt-20 border-bottom pb-20">
                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Illustrator
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Adobe XD
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Figma
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Sketch
                      </a>
                    </Link>

                    <Link legacyBehavior href="/jobs-grid">
                      <a className="btn btn-grey-small bg-14 mb-5 mr-5">
                        Lunacy
                      </a>
                    </Link>
                  </div>
                  <div className="card-2-bottom mt-20">
                    <div className="row">
                      <div className="col-lg-7 col-md-7">
                        <div className="d-flex">
                          <Image
                            width={100}
                            height={100}
                            className="img-rounded"
                            src="/assets/imgs/brands/brand-2.png"
                            alt="jobBox"
                          />
                          <div className="info-right-img">
                            <h6 className="color-brand-1 lh-14">Linkedin</h6>
                            <span className="card-location font-xxs pl-15 color-text-paragraph-2">
                              New York, US
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 text-end">
                        <span className="card-text-price">$200</span>
                        <span className="text-muted">/Hour</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTab3;

import Image from "next/image";
import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;

export default function AllJobsSection() {
  return (
    <section className="section-box mt-30">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
            <div className="content-page">
              <div className="box-filters-job">
                <div className="row">
                  <div className="col-xl-6 col-lg-5">
                    <span className="text-small text-showing">
                      Showing <strong>41-60 </strong>of <strong>944 </strong>
                      jobs
                    </span>
                  </div>
                  <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                    <div className="display-flex2">
                      <div className="box-border mr-10">
                        <span className="text-sortby">Show:</span>
                        <div className="dropdown dropdown-sort">
                          <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                            <span>12</span>
                            <i className="fi-rr-angle-small-down" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item active">10</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item">12</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item">20</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-border">
                        <span className="text-sortby">Sort by:</span>
                        <div className="dropdown dropdown-sort">
                          <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                            <span>Newest Post</span>
                            <i className="fi-rr-angle-small-down" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item active">Newest Post</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item">Oldest Post</a>
                              </Link>
                            </li>
                            <li>
                              <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                                <a className="dropdown-item">Rating Post</a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="box-view-type">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="view-type">
                            <Image width={50} height={50} src="/assets/imgs/template/icons/icon-list.svg" alt="jobBox" />
                          </a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="view-type">
                            <Image width={50} height={50} src="/assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">LinkedIn</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>UI / UX Designer fulltime</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Adobe XD</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Figma</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Photoshop</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Adobe Ilustrator</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Full Stack Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">React</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">NodeJS</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Bing Search</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Java Software Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Python</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">AWS</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Photoshop</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Dailymotion</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Frontend Developer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Typescript</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Java</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Linkedin</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>React Native Web Developer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Angular</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Quora JSC</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Senior System Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">PHP</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Android</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Nintendo</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Products Manager</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">ASP .Net</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Figma</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Periscope</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Lead Quality Control QA</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">iOS</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Laravel</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Golang</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">LinkedIn</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>UI / UX Designer fulltime</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Adobe XD</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Figma</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Photoshop</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Adobe Ilustrator</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Full Stack Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">React</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">NodeJS</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Bing Search</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Java Software Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Python</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">AWS</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Photoshop</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Dailymotion</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Frontend Developer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Typescript</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Java</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Linkedin</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>React Native Web Developer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Angular</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Quora JSC</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Senior System Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">PHP</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Android</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Nintendo</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Products Manager</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">ASP .Net</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Figma</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Periscope</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Lead Quality Control QA</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          6<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">iOS</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Laravel</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Golang</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">LinkedIn</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>UI / UX Designer fulltime</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Fulltime</span>
                        <span className="card-time">
                          4<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Adobe XD</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Figma</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">Photoshop</a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$500</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <div className="card-grid-2-image-left">
                      <span className="flash" />
                      <div className="image-box">
                        <Image width={50} height={50} src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                      </div>
                      <div className="right-info">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="name-job">Adobe Ilustrator</a>
                        </Link>
                        <span className="location-small">New York, US</span>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h6>
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a>Full Stack Engineer</a>
                        </Link>
                      </h6>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          5<span> minutes ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                      <div className="mt-30">
                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">React</a>
                        </Link>

                        <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                          <a className="btn btn-grey-small mr-5">NodeJS </a>
                        </Link>
                      </div>
                      <div className="card-2-bottom mt-30">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                              Apply now
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginations">
              <ul className="pager">
                <li>
                  <a className="pager-prev" href={`/${Region}/jobs/find-job/slug`} />
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
                  <a className="pager-next" href={`/${Region}/jobs/find-job/slug`} />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="sidebar-shadow none-shadow mb-30">
              <div className="sidebar-filters">
                <div className="filter-block head-border mb-30">
                  <h5>
                    Advance Filter
                    <Link legacyBehavior href={`/${Region}/jobs/find-job/slug`}>
                      <a className="link-reset">Reset</a>
                    </Link>
                  </h5>
                </div>
                <div className="filter-block mb-30">
                  <div className="form-group select-style select-style-icon">
                    <select className="form-control form-icons select-active">
                      <option>New York, US</option>
                      <option>London</option>
                      <option>Paris</option>
                      <option>Berlin</option>
                    </select>
                    <i className="fi-rr-marker" />
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-15">Industry</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">180</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Software</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Finance</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">23</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Recruting</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">43</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Management</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Advertising</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">76</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-25">Salary Range</h5>
                  <div className="list-checkbox pb-20">
                    <div className="row position-relative mt-10 mb-20">
                      <div className="col-sm-12 box-slider-range">
                        <div id="slider-range" />
                      </div>
                      <div className="box-input-money">
                        <input className="input-disabled form-control min-value-money" type="text" name="min-value-money" disabled={true} defaultValue={""} />
                        <input className="form-control min-value" type="hidden" name="min-value" defaultValue={""} />
                      </div>
                    </div>
                    <div className="box-number-money">
                      <div className="row mt-30">
                        <div className="col-sm-6 col-6">
                          <span className="font-sm color-brand-1">$0</span>
                        </div>
                        <div className="col-sm-6 col-6 text-end">
                          <span className="font-sm color-brand-1">$500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-20">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">145</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$0k - $20k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$20k - $40k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">37</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$40k - $60k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">75</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$60k - $80k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">98</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$80k - $100k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">14</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">$100k - $200k</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">25</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Popular Keyword</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">Software</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Developer</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">45</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Web</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">57</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Position</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Senior</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">Junior</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">35</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Fresher</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Experience Level</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Internship</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Entry Level</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">87</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">Associate</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Mid Level</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">45</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Director</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">76</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Executive</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">89</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">On-site</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">12</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">Remote</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Hybrid</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">58</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-30">
                  <h5 className="medium-heading mb-10">Job Posted</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">All</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">1 day</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">65</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">7 days</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">24</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">30 days</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">56</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-block mb-20">
                  <h5 className="medium-heading mb-15">Job type</h5>
                  <div className="form-group">
                    <ul className="list-checkbox">
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Full Time</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">25</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked={true} />
                          <span className="text-small">Part Time</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">64</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Remote Jobs</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">78</span>
                      </li>
                      <li>
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">Freelancer</span>
                          <span className="checkmark" />
                        </label>
                        <span className="number-item">97</span>
                      </li>
                    </ul>
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

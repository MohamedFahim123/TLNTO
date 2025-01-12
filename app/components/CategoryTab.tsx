'use client';

import React, { useState } from "react";
import Link from "next/link";

const CategoryTab = () => {
    const [active, setActive] = useState<number>(1);

    const handleOnClick = (index : number) => {
        setActive(index);
    };

    return (
        <>
            <div className="list-tabs mt-40  text-center">
                <ul className="nav nav-tabs" role="list">
                    <li>
                        <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1)}>
                            <img src="/assets/imgs/page/homepage1/management.svg" alt="jobBox" /> Management
                        </a>
                    </li>
                    <li>
                        <a className={active === 2 ? "active" : ""} onClick={() => handleOnClick(2)}>
                            <img src="/assets/imgs/page/homepage1/marketing.svg" alt="jobBox" /> Marketing &amp; Sale
                        </a>
                    </li>
                    <li>
                        <a className={active === 3 ? "active" : ""} onClick={() => handleOnClick(3)}>
                            <img src="/assets/imgs/page/homepage1/finance.svg" alt="jobBox" /> Finance
                        </a>
                    </li>
                    <li>
                        <a className={active === 4 ? "active" : ""} onClick={() => handleOnClick(4)}>
                            <img src="/assets/imgs/page/homepage1/human.svg" alt="jobBox" /> Human Resource
                        </a>
                    </li>
                    <li>
                        <a className={active === 5 ? "active" : ""} onClick={() => handleOnClick(5)}>
                            <img src="/assets/imgs/page/homepage1/retail.svg" alt="jobBox" /> Retail &amp; Products
                        </a>
                    </li>
                    <li>
                        <a className={active === 6 ? "active" : ""} onClick={() => handleOnClick(6)}>
                            <img src="/assets/imgs/page/homepage1/content.svg" alt="jobBox" /> Content Writer
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-content mt-70" id="myTabContent-1">
                <div className={`tab-pane fade ${active == 1 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 2 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 3 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 4 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 5 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                    </div>
                </div>
                <div className={`tab-pane fade ${active == 6 && "show active"}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-8.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Periscope</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">iOS</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">Laravel</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-1.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">LinkedIn</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Figma</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-2.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Adobe Ilustrator</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">React</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-3.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Bing Search</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Python</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">AWS</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-4.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Dailymotion</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
                                            <a className="btn btn-grey-small mr-5">Typescript</a>
                                        </Link>

                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-5.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Linkedin</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/jobs-grid">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-6.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Quora JSC</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">PHP</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                    <span className="flash" />
                                    <div className="image-box">
                                        <img src="/assets/imgs/brands/brand-7.png" alt="jobBox" />
                                    </div>
                                    <div className="right-info">
                                        <Link legacyBehavior href="company-details">
                                            <a className="name-job">Nintendo</a>
                                        </Link>
                                        <span className="location-small">New York, US</span>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h6>
                                        <Link legacyBehavior href="/job-details">
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
                                        <Link legacyBehavior href="/job-details">
                                            <a className="btn btn-grey-small mr-5">ASP .Net</a>
                                        </Link>

                                        <Link legacyBehavior href="/job-details">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryTab;

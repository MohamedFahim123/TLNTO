import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutCandidateDetails({
  activeIndex,
}: {
  activeIndex: number;
}) {
  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="content-single">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeIndex === 1 && "show active"
                  }`}
                >
                  <h4>About Me</h4>
                  <p>
                    Hello there! My name is Alan Walker. I am a graphic
                    designer, and I’m very passionate and dedicated to my work.
                    With 20 years experience as a professional a graphic
                    designer, I have acquired the skills and knowledge necessary
                    to make your project a success.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis illum fuga eveniet. Deleniti asperiores, commodi
                    quae ipsum quas est itaque, ipsa, dolore beatae voluptates
                    nemo blanditiis iste eius officia minus. Id nisi,
                    consequuntur sunt impedit quidem, vitae mollitia!
                  </p>
                  <h4>Professional Skills</h4>
                  <div className="row mb-40">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                      <h6 className="color-text-paragraph-2">Programming</h6>
                      <div className="box-progress-bar mt-20">
                        <p className="font-xs color-text-paragraph-2 mb-10">
                          HTML &amp; CSS
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "78%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>78%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          Javascript
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-brand-2"
                            role="progressbar"
                            style={{ width: "88%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>88%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          Database
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>62%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          React JS
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "92%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>92%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                      <h6 className="color-text-paragraph-2">Design</h6>
                      <div className="box-progress-bar mt-20">
                        <p className="font-xs color-text-paragraph-2 mb-10">
                          Photoshop
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "29%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>29%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          Figma
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>20%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          Illustrator
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>65%</span>
                          </div>
                        </div>
                        <p className="font-xs color-text-paragraph-2 mb-10 mt-30">
                          Sketch
                        </p>
                        <div className="progress">
                          <div
                            className="progress-bar bg-paragraph-2"
                            role="progressbar"
                            style={{ width: "82%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span>82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>Work Experience</h4>
                  <ul>
                    <li>
                      A portfolio demonstrating well thought through and
                      polished end to end customer journeys
                    </li>
                    <li>
                      5+ years of industry experience in interactive design and
                      / or visual design
                    </li>
                    <li>Excellent interpersonal skills</li>
                    <li>
                      Aware of trends in mobile, communications, and
                      collaboration
                    </li>
                    <li>
                      Ability to create highly polished design prototypes,
                      mockups, and other communication artifacts
                    </li>
                    <li>
                      The ability to scope and estimate efforts accurately and
                      prioritize tasks and goals independently
                    </li>
                    <li>
                      History of impacting shipping products with your work
                    </li>
                    <li>
                      A Bachelor’s Degree in Design (or related field) or
                      equivalent professional experience
                    </li>
                    <li>
                      Proficiency in a variety of design tools such as Figma,
                      Photoshop, Illustrator, and Sketch
                    </li>
                  </ul>
                  <h4>Education</h4>
                  <ul>
                    <li>Necessitatibus quibusdam facilis</li>
                    <li>
                      Velit unde aliquam et voluptas reiciendis non sapiente
                      labore
                    </li>
                    <li>Commodi quae ipsum quas est itaque</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </li>
                    <li>
                      Deleniti asperiores blanditiis nihil quia officiis dolor
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeIndex === 2 && "show active"
                  }`}
                >
                  <h4>Skills</h4>

                  <p>
                    Hello there! My name is Alan Walker. I am a graphic
                    designer, and I’m very passionate and dedicated to my work.
                    With 20 years experience as a professional a graphic
                    designer, I have acquired the skills and knowledge necessary
                    to make your project a success.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis illum fuga eveniet. Deleniti asperiores, commodi
                    quae ipsum quas est itaque, ipsa, dolore beatae voluptates
                    nemo blanditiis iste eius officia minus. Id nisi,
                    consequuntur sunt impedit quidem, vitae mollitia!
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeIndex === 3 && "show active"
                  }`}
                >
                  <h4>Work Experiences</h4>
                  <p>
                    Hello there! My name is Alan Walker. I am a graphic
                    designer, and I’m very passionate and dedicated to my work.
                    With 20 years experience as a professional a graphic
                    designer, I have acquired the skills and knowledge necessary
                    to make your project a success.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis illum fuga eveniet. Deleniti asperiores, commodi
                    quae ipsum quas est itaque, ipsa, dolore beatae voluptates
                    nemo blanditiis iste eius officia minus. Id nisi,
                    consequuntur sunt impedit quidem, vitae mollitia!
                  </p>
                </div>
              </div>
            </div>
            <div className="box-related-job content-page">
              <h3 className="mb-30">Work History</h3>
              <div className="box-list-jobs display-list">
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                    <span className="flash"></span>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link className="name-job" legacyBehavior href="#">
                              Quora JSC
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </Link>

                          <Link className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link href="/job-details">Senior System Engineer</Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          <span>5</span>
                          <span> days ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">
                              Status:<span className="text-success">Done</span>
                            </span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <Link
                              className="btn btn-apply-now"
                              href="job-details"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                    <span className="flash"></span>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-7.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link className="name-job" href="#">
                              Nintendo
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </Link>

                          <Link className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link href="job-details">Products Manager</Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> days ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">
                              Status:<span className="text-success">Done</span>
                            </span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <Link
                              className="btn btn-apply-now"
                              href="job-details"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn">
                    <span className="flash"></span>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-8.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link className="name-job" legacyBehavior href="#">
                              Periscope
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link className="btn btn-grey-small mr-5" href="#">
                            Adobe XD
                          </Link>

                          <Link className="btn btn-grey-small mr-5" href="#">
                            Figma
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link href="job-details">Lead Quality Control QA</Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> days ago</span>
                        </span>
                      </div>
                      <p className="font-sm color-text-paragraph mt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Recusandae architecto eveniet, dolor quo
                        repellendus pariatur.
                      </p>
                      <div className="card-2-bottom mt-20">
                        <div className="row">
                          <div className="col-lg-7 col-7">
                            <span className="card-text-price">
                              Status:<span className="text-success">Done</span>
                            </span>
                          </div>
                          <div className="col-lg-5 col-5 text-end">
                            <Link
                              className="btn btn-apply-now"
                              href="job-details"
                            >
                              View Details
                            </Link>
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
                    <Link className="pager-prev" href="#">
                      Previous
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      5
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number active" href="#">
                      6
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-number" href="#">
                      7
                    </Link>
                  </li>
                  <li>
                    <Link className="pager-next" href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
            <div className="sidebar-border">
              <h5 className="f-18">Overview</h5>
              <div className="sidebar-list-job">
                <ul>
                  <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-briefcase" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Experience</span>
                      <strong className="small-heading">12 years</strong>
                    </div>
                  </li>
                  <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-dollar"></i>
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Expected Salary</span>
                      <strong className="small-heading">$26k - $30k</strong>
                    </div>
                  </li>
                  <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-marker"></i>
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Language</span>
                      <strong className="small-heading">English, German</strong>
                    </div>
                  </li>
                  <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-time-fast"></i>
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Education Level</span>
                      <strong className="small-heading">Master Degree</strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-list-job">
                <ul className="ul-disc">
                  <li>
                    205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                  </li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: contact@Evara.com</li>
                </ul>
                <div className="mt-30">
                  <Link className="btn btn-send-message" href="page-contact">
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
            <div className="sidebar-border-bg bg-right">
              <span className="text-grey">WE ARE</span>
              <span className="text-hiring">HIRING</span>
              <p className="font-xxs color-text-paragraph mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae architecto
              </p>
              <div className="mt-15">
                <Link className="btn btn-paragraph-2" href="#">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

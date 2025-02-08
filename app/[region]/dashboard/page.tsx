// "use client";
// import { Menu } from "@headlessui/react";
// import Image from "next/image";
// import Link from "next/link";
// import BrandSlider from "@/app/components/Dashboard/BrandSlider";
// import { Metadata } from "next";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Tlnto",
//   description: "Your Favourite Job Portal.",
// };

export const metadata: Metadata = {
  title: "Tlnto - Dashboard",
  description: "Your Dashboard.",
};

function DashboardPage() {
  return (
    <>
      <h1>Dashboard</h1>
      {/* <div className="col-xxl-8 col-xl-7 col-lg-7">
        <div className="section-box">
          <div className="row">
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/computer.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      1568
                      <span className="font-sm status up">
                        25<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Interview Schedules</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/bank.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      284
                      <span className="font-sm status up">
                        5<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Applied Jobs</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/lamp.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      136
                      <span className="font-sm status up">
                        12<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Task Bids Won</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/headphone.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      985
                      <span className="font-sm status up">
                        5<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Application Sent</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/look.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      165
                      <span className="font-sm status up">
                        15<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Profile Viewed</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/open-file.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      2356<span className="font-sm status down">- 2%</span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">New Messages</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/doc.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      254
                      <span className="font-sm status up">
                        2<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">Articles Added</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
              <div className="card-style-1 hover-up">
                <div className="card-image">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/imgs/page/dashboard/man.svg"
                    alt="jobBox"
                  />
                </div>
                <div className="card-info">
                  <div className="card-title">
                    <h3>
                      548
                      <span className="font-sm status up">
                        48<span>%</span>
                      </span>
                    </h3>
                  </div>
                  <p className="color-text-paragraph-2">CV Added</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Vacancy Stats</h5>
                <Menu as="div">
                  <Menu.Button as="a" className="menudrop" />
                  <Menu.Items
                    as="ul"
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end show"
                    style={{ right: "0", left: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item active" href="#">
                        Add new
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Actions
                      </Link>
                    </li>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Latest Jobs</h5>
                <Menu as="div">
                  <Menu.Button as="a" className="menudrop" />
                  <Menu.Items
                    as="ul"
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end show"
                    style={{ right: "0", left: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item active" href="#">
                        Add new
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Actions
                      </Link>
                    </li>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="panel-body">
                <div className="card-style-2 hover-up">
                  <div className="card-head">
                    <div className="card-image">
                      <Image
                        width={200}
                        height={200}
                        src="/assets/imgs/page/dashboard/img1.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Senior Full Stack Engineer, Creator Success</h6>
                      <span className="job-type">Full time</span>
                      <span className="time-post">3mins ago</span>
                      <span className="location">New York, US</span>
                    </div>
                  </div>
                  <div className="card-tags">
                    <a className="btn btn-tag">Figma</a>
                    <a className="btn btn-tag">Adobe XD</a>
                  </div>
                  <div className="card-price">
                    <strong>$300</strong>
                    <span className="hour">/Hour</span>
                  </div>
                </div>
                <div className="card-style-2 hover-up">
                  <div className="card-head">
                    <div className="card-image">
                      <Image
                        width={200}
                        height={200}
                        src="/assets/imgs/page/dashboard/img2.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Senior Full Stack Engineer, Creator Success</h6>
                      <span className="job-type">Full time</span>
                      <span className="time-post">3mins ago</span>
                      <span className="location">Chicago, US</span>
                    </div>
                  </div>
                  <div className="card-tags">
                    <a className="btn btn-tag">Figma</a>
                    <a className="btn btn-tag">Adobe XD</a>
                    <a className="btn btn-tag">PSD</a>
                  </div>
                  <div className="card-price">
                    <strong>$650</strong>
                    <span className="hour">/Hour</span>
                  </div>
                </div>
                <div className="card-style-2 hover-up">
                  <div className="card-head">
                    <div className="card-image">
                      <Image
                        width={200}
                        height={200}
                        src="/assets/imgs/page/dashboard/img3.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Lead Product/UX/UI Designer Role</h6>
                      <span className="job-type">Full time</span>
                      <span className="time-post">3mins ago</span>
                      <span className="location">Paris, France</span>
                    </div>
                  </div>
                  <div className="card-tags">
                    <a className="btn btn-tag">Figma</a>
                    <a className="btn btn-tag">Adobe XD</a>
                    <a className="btn btn-tag">PSD</a>
                  </div>
                  <div className="card-price">
                    <strong>$1200</strong>
                    <span className="hour">/Hour</span>
                  </div>
                </div>
                <div className="card-style-2 hover-up">
                  <div className="card-head">
                    <div className="card-image">
                      <Image
                        width={200}
                        height={200}
                        src="/assets/imgs/page/dashboard/img4.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Marketing Graphic Designer</h6>
                      <span className="job-type">Full time</span>
                      <span className="time-post">3mins ago</span>
                      <span className="location">Tokyto, Japan</span>
                    </div>
                  </div>
                  <div className="card-tags">
                    <a className="btn btn-tag">Figma</a>
                    <a className="btn btn-tag">Adobe XD</a>
                    <a className="btn btn-tag">PSD</a>
                  </div>
                  <div className="card-price">
                    <strong>$580</strong>
                    <span className="hour">/Hour</span>
                  </div>
                </div>
                <div className="card-style-2 hover-up">
                  <div className="card-head">
                    <div className="card-image">
                      <Image
                        width={200}
                        height={200}
                        src="/assets/imgs/page/dashboard/img5.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Director, Product Design - Creator</h6>
                      <span className="job-type">Full time</span>
                      <span className="time-post">3mins ago</span>
                      <span className="location">Ha Noi, Vietnam</span>
                    </div>
                  </div>
                  <div className="card-tags">
                    <a className="btn btn-tag">Figma</a>
                    <a className="btn btn-tag">Adobe XD</a>
                    <a className="btn btn-tag">PSD</a>
                  </div>
                  <div className="card-price">
                    <strong>$1500</strong>
                    <span className="hour">/Hour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-xl-5 col-lg-5">
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Top Candidates</h5>
                <Menu as="div">
                  <Menu.Button as="a" className="menudrop" />
                  <Menu.Items
                    as="ul"
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end show"
                    style={{ right: "0", left: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item active" href="#">
                        Add new
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Actions
                      </Link>
                    </li>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="panel-body">
                <div className="card-style-3 hover-up">
                  <div className="card-image online">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/avata1.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-title">
                    <h6>Robert Fox</h6>
                    <span className="job-position">UI/UX Designer</span>
                  </div>
                  <div className="card-location">
                    <span className="location">Chicago, US</span>
                  </div>
                  <div className="card-rating">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <span className="font-xs color-text-mutted">(65)</span>
                  </div>
                </div>
                <div className="card-style-3 hover-up">
                  <div className="card-image online">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/avata2.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-title">
                    <h6>Cody Fisher</h6>
                    <span className="job-position">Network Engineer</span>
                  </div>
                  <div className="card-location">
                    <span className="location">New York, US</span>
                  </div>
                  <div className="card-rating">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <span className="font-xs color-text-mutted">(65)</span>
                  </div>
                </div>
                <div className="card-style-3 hover-up">
                  <div className="card-image online">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/avata3.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-title">
                    <h6>Jane Cooper</h6>
                    <span className="job-position">Content Manager</span>
                  </div>
                  <div className="card-location">
                    <span className="location">Chicago, US</span>
                  </div>
                  <div className="card-rating">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <span className="font-xs color-text-mutted">(65)</span>
                  </div>
                </div>
                <div className="card-style-3 hover-up">
                  <div className="card-image online">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/avata4.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-title">
                    <h6>Jerome Bell</h6>
                    <span className="job-position">Frontend Developer</span>
                  </div>
                  <div className="card-location">
                    <span className="location">Chicago, US</span>
                  </div>
                  <div className="card-rating">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <span className="font-xs color-text-mutted">(65)</span>
                  </div>
                </div>
                <div className="card-style-3 hover-up">
                  <div className="card-image online">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/avata5.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-title">
                    <h6>Floyd Miles</h6>
                    <span className="job-position">NodeJS Dev</span>
                  </div>
                  <div className="card-location">
                    <span className="location">Chicago, US</span>
                  </div>
                  <div className="card-rating">
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <Image
                      width={200}
                      height={200}
                      src="/assets/imgs/page/dashboard/star.svg"
                      alt="jobBox"
                    />
                    <span className="font-xs color-text-mutted">(65)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Top Recruiters</h5>
                <Menu as="div">
                  <Menu.Button as="a" className="menudrop" />
                  <Menu.Items
                    as="ul"
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end show"
                    style={{ right: "0", left: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item active" href="#">
                        Add new
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Actions
                      </Link>
                    </li>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata1.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Robert Fox</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Red, CA</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata2.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Cody Fisher</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Chicago, US</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata3.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Jane Cooper</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Austin, TX</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata4.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Jerome Bell</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Remote</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata5.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Floyd Miles</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Boston, US</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 pr-5 pl-5">
                    <div className="card-style-4 hover-up">
                      <div className="d-flex">
                        <div className="card-image">
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/avata1.png"
                            alt="jobBox"
                          />
                        </div>
                        <div className="card-title">
                          <h6>Devon Lane</h6>
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <Image
                            width={200}
                            height={200}
                            src="/assets/imgs/page/dashboard/star-none.svg"
                            alt="jobBox"
                          />
                          <span className="font-xs color-text-mutted">
                            (65)
                          </span>
                        </div>
                      </div>
                      <div className="card-location d-flex">
                        <span className="location">Chicago, US</span>
                        <span className="jobs-number">25 Open Jobs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Queries by search</h5>
                <Menu as="div">
                  <Menu.Button as="a" className="menudrop" />
                  <Menu.Items
                    as="ul"
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end show"
                    style={{ right: "0", left: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item active" href="#">
                        Add new
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Actions
                      </Link>
                    </li>
                  </Menu.Items>
                </Menu>
              </div>
              <div className="panel-body">
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Developer</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">2635</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">UI/Ux Designer</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">1658</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "90%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Marketing</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">1452</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Content manager</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">1325</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "70%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Ruby on rain</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">985</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "60%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Human hunter</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">920</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "50%" }} />
                    </div>
                  </div>
                </div>
                <div className="card-style-5 hover-up">
                  <div className="card-title">
                    <h6 className="font-sm">Finance</h6>
                  </div>
                  <div className="card-progress">
                    <div className="number font-sm">853</div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="section-box">
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
      </div> */}
    </>
  );
}
export default DashboardPage;

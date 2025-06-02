import { RecuiterInterface } from "@/app/[region]/jobs/recruiters/page";
import Image from "next/image";
import Link from "next/link";

export default function RecruiterDetailsContent({
  recruiterDetailsData,
  activeIndex,
}: {
  recruiterDetailsData: RecuiterInterface;
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
                  <h4>Welcome to AliStudio Team</h4>
                  <p>
                    The AliStudio Design team has a vision to establish a
                    trusted platform that enables productive and healthy
                    enterprises in a world of digital and remote everything,
                    constantly changing work patterns and norms, and the need
                    for organizational resiliency.
                  </p>
                  <p>
                    The ideal candidate will have strong creative skills and a
                    portfolio of work which demonstrates their passion for
                    illustrative design and typography. This candidate will have
                    experiences in working with numerous different design
                    platforms such as digital and print forms.
                  </p>
                  <h4>Essential Knowledge, Skills, and Experience</h4>
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
                      Aware of trends in mobile, communications, and
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
                      A Bachelor s Degree in Design (or related field) or
                      equivalent professional experience
                    </li>
                    <li>
                      Proficiency in a variety of design tools such as Figma,
                      Photoshop, Illustrator, and Sketch
                    </li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeIndex === 2 && "show active"
                  }`}
                >
                  <h4>Recruitments</h4>
                  <p>
                    The AliStudio Design team has a vision to establish a
                    trusted platform that enables productive and healthy
                    enterprises in a world of digital and remote everything,
                    constantly changing work patterns and norms, and the need
                    for organizational resiliency.
                  </p>
                  <p>
                    The ideal candidate will have strong creative skills and a
                    portfolio of work which demonstrates their passion for
                    illustrative design and typography. This candidate will have
                    experiences in working with numerous different design
                    platforms such as digital and print forms.
                  </p>
                </div>
                <div
                  className={`tab-pane fade ${
                    activeIndex === 3 && "show active"
                  }`}
                >
                  <h4>People</h4>
                  <p>
                    The AliStudio Design team has a vision to establish a
                    trusted platform that enables productive and healthy
                    enterprises in a world of digital and remote everything,
                    constantly changing work patterns and norms, and the need
                    for organizational resiliency.
                  </p>
                  <p>
                    The ideal candidate will have strong creative skills and a
                    portfolio of work which demonstrates their passion for
                    illustrative design and typography. This candidate will have
                    experiences in working with numerous different design
                    platforms such as digital and print forms.
                  </p>
                </div>
              </div>
            </div>
            <div className="box-related-job content-page">
              <h5 className="mb-30">Latest Jobs</h5>
              <div className="box-list-jobs display-list">
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={100}
                              height={100}
                              src="/assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link legacyBehavior href="#">
                              <a className="name-job">Quora JSC</a>
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                          </Link>

                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Figma</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link legacyBehavior href="job-details">
                          <a>Senior System Engineer</a>
                        </Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Part time</span>
                        <span className="card-time">
                          <span>5</span>
                          <span> mins ago</span>
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
                            <span className="card-text-price">$800</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={100}
                              height={100}
                              src="/assets/imgs/brands/brand-7.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link legacyBehavior href="#">
                              <a className="name-job">Nintendo</a>
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                          </Link>

                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Figma</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link legacyBehavior href="job-details">
                          <a>Products Manager</a>
                        </Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
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
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
                <div className="col-xl-12 col-12">
                  <div className="card-grid-2 hover-up">
                    <span className="flash" />
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-grid-2-image-left">
                          <div className="image-box">
                            <Image
                              width={100}
                              height={100}
                              src="/assets/imgs/brands/brand-8.png"
                              alt="jobBox"
                            />
                          </div>
                          <div className="right-info">
                            <Link legacyBehavior href="#">
                              <a className="name-job">Periscope</a>
                            </Link>
                            <span className="location-small">New York, US</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                        <div className="pl-15 mb-15 mt-30">
                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Adobe XD</a>
                          </Link>

                          <Link legacyBehavior href="#">
                            <a className="btn btn-grey-small mr-5">Figma</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-block-info">
                      <h4>
                        <Link legacyBehavior href="job-details">
                          <a>Lead Quality Control QA</a>
                        </Link>
                      </h4>
                      <div className="mt-5">
                        <span className="card-briefcase">Full time</span>
                        <span className="card-time">
                          <span>6</span>
                          <span> mins ago</span>
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
                            <span className="card-text-price">$250</span>
                            <span className="text-muted">/Hour</span>
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
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
            <div className="sidebar-border">
              <div className="sidebar-heading">
                <div className="avatar-sidebar">
                  <div className="sidebar-info pl-0">
                    <span className="sidebar-company">
                      {recruiterDetailsData.name}
                    </span>
                    <span className="card-location">
                      {recruiterDetailsData.city},{" "}
                      {recruiterDetailsData.country}
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="sidebar-list-job">
                <div className="box-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div> */}
              <div className="sidebar-list-job">
                <ul>
                  <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-briefcase" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Company field</span>
                      <strong className="small-heading">
                        {recruiterDetailsData.industry}
                      </strong>
                    </div>
                  </li>
                  {/* <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-marker" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Location</span>
                      <strong className="small-heading">
                        Chicago, US Remote Friendly
                      </strong>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-dollar" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Salary</span>
                      <strong className="small-heading">$35k - $45k</strong>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-clock" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Member since</span>
                      <strong className="small-heading">Jul 2012</strong>
                    </div>
                  </li> */}
                  {/* <li>
                    <div className="sidebar-icon-item">
                      <i className="fi-rr-time-fast" />
                    </div>
                    <div className="sidebar-text-info">
                      <span className="text-description">Last Jobs Posted</span>
                      <strong className="small-heading">4 days</strong>
                    </div>
                  </li> */}
                </ul>
              </div>
              <div className="sidebar-list-job">
                <ul className="ul-disc">
                  <li>
                    Phone:{" "}
                    <Link href={`tel:${recruiterDetailsData.phone}`}>
                      {recruiterDetailsData.phone}
                    </Link>
                  </li>
                  <li>
                    Email:{" "}
                    <Link href={`mailto:${recruiterDetailsData.email}`}>
                      {recruiterDetailsData.email}
                    </Link>
                  </li>
                </ul>
                <div className="mt-30">
                  <Link legacyBehavior href={`https://wa.me/${recruiterDetailsData.phone}`}>
                    <a className="btn btn-send-message">Send Message</a>
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
                <Link legacyBehavior href="page-contact">
                  <a className="btn btn-paragraph-2">Know More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function HeroSectionJobDetails() {
  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="box-border-single">
              <div className="row mt-10">
                <div className="col-lg-8 col-md-12">
                  <h3>Senior Full Stack Engineer, Creator Success Full Time</h3>
                  <div className="mt-0 mb-15">
                    <span className="card-briefcase">Fulltime</span>
                    <span className="card-time">3 mins ago</span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 text-lg-end">
                  <div
                    className="btn btn-apply-icon btn-apply btn-apply-big hover-up"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalApplyJobForm"
                  >
                    Apply now
                  </div>
                </div>
              </div>
              <div className="border-bottom pt-10 pb-10" />
              <div className="banner-hero banner-image-single mt-10 mb-20">
                <Image
                  width={800}
                  height={300}
                  src="/assets/imgs/page/job-single-2/img.png"
                  alt="jobBox"
                />
              </div>
              <div className="job-overview">
                <h5 className="border-bottom pb-15 mb-30">Overview</h5>
                <div className="row">
                  <div className="col-md-6 d-flex">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/industry.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description industry-icon mb-10">
                        Industry
                      </span>
                      <strong className="small-heading">
                        Mechanical / Auto / Automotive, Civil / Construction
                      </strong>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/job-level.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description joblevel-icon mb-10">
                        Job level
                      </span>
                      <strong className="small-heading">
                        Experienced (Non - Manager)
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="row mt-25">
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/salary.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description salary-icon mb-10">
                        Salary
                      </span>
                      <strong className="small-heading">$800 - $1000</strong>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/experience.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description experience-icon mb-10">
                        Experience
                      </span>
                      <strong className="small-heading">1 - 2 years</strong>
                    </div>
                  </div>
                </div>
                <div className="row mt-25">
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/job-type.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description jobtype-icon mb-10">
                        Job type
                      </span>
                      <strong className="small-heading">Permanent</strong>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/deadline.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description mb-10">Deadline</span>
                      <strong className="small-heading">10/08/2022</strong>
                    </div>
                  </div>
                </div>
                <div className="row mt-25">
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/updated.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description jobtype-icon mb-10">
                        Updated
                      </span>
                      <strong className="small-heading">10/07/2022</strong>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex mt-sm-15">
                    <div className="sidebar-icon-item">
                      <Image
                        width={20}
                        height={20}
                        src="/assets/imgs/page/job-single/location.svg"
                        alt="jobBox"
                      />
                    </div>
                    <div className="sidebar-text-info ml-10">
                      <span className="text-description mb-10">Location</span>
                      <strong className="small-heading">
                        Dallas, Texas Remote Friendly
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-single">
                <h4>Welcome to AliStudio Team</h4>
                <p>
                  The AliStudio Design team has a vision to establish a trusted
                  platform that enables productive and healthy enterprises in a
                  world of digital and remote everything, constantly changing
                  work patterns and norms, and the need for organizational
                  resiliency.
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
                    A portfolio demonstrating well thought through and polished
                    end to end customer journeys
                  </li>
                  <li>
                    5+ years of industry experience in interactive design and /
                    or visual design
                  </li>
                  <li>Excellent interpersonal skills</li>
                  <li>
                    Aware of trends inmobile, communications, and collaboration
                  </li>
                  <li>
                    Ability to create highly polished design prototypes,
                    mockups, and other communication artifacts
                  </li>
                  <li>
                    The ability to scope and estimate efforts accurately and
                    prioritize tasks and goals independently
                  </li>
                  <li>History of impacting shipping products with your work</li>
                  <li>
                    A Bachelor{"'"}s Degree in Design (or related field) or
                    equivalent professional experience
                  </li>
                  <li>
                    Proficiency in a variety of design tools such as Figma,
                    Photoshop, Illustrator, and Sketch
                  </li>
                </ul>
                <h4>Preferred Experience</h4>
                <ul>
                  <li>
                    Designing user experiences for enterprise software /
                    services
                  </li>
                  <li>
                    Creating and applying established design principles and
                    interaction patterns
                  </li>
                  <li>
                    Aligning or influencing design thinking with teams working
                    in other geographies
                  </li>
                </ul>
                <h4>Product Designer</h4>
                <p>
                  <strong>Product knowledge:</strong> Deeply understand the
                  technology and features of the product area to which you are
                  assigned.
                </p>
                <p>
                  <strong>Research:</strong> Provide human and business impact
                  and insights for products.
                </p>
                <p>
                  <strong>Deliverables:</strong> Create deliverables for your
                  product area (for example competitive analyses, user flows,
                  low fidelity wireframes, high fidelity mockups, prototypes,
                  etc.) that solve real user problems through the user
                  experience.
                </p>
                <p>
                  <strong>Communication:</strong> Communicate the results of UX
                  activities within your product area to the design team
                  department, cross-functional partners within your product
                  area, and other interested Superformula team members using
                  clear language that simplifies complexity.
                </p>
              </div>
              <div className="author-single">
                <span>AliThemes</span>
              </div>
              <div className="single-apply-jobs">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <Link legacyBehavior href="#">
                      <a className="btn btn-default mr-15">Apply now</a>
                    </Link>

                    <Link legacyBehavior href="#">
                      <a className="btn btn-border">Save job</a>
                    </Link>
                  </div>
                  <div className="col-md-7 text-lg-end social-share">
                    <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">
                      Share this
                    </h6>
                    <Link legacyBehavior href="#">
                      <a className="mr-5 d-inline-block d-middle">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src="/assets/imgs/template/icons/share-fb.svg"
                        />
                      </a>
                    </Link>

                    <Link legacyBehavior href="#">
                      <a className="mr-5 d-inline-block d-middle">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src="/assets/imgs/template/icons/share-tw.svg"
                        />
                      </a>
                    </Link>

                    <Link legacyBehavior href="#">
                      <a className="mr-5 d-inline-block d-middle">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src="/assets/imgs/template/icons/share-red.svg"
                        />
                      </a>
                    </Link>

                    <Link legacyBehavior href="#">
                      <a className="d-inline-block d-middle">
                        <Image
                          width={50}
                          height={50}
                          alt="jobBox"
                          src="/assets/imgs/template/icons/share-whatsapp.svg"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
            <div className="sidebar-border">
              <div className="sidebar-heading">
                <div className="avatar-sidebar">
                  <figure>
                    <Image
                      width={50}
                      height={50}
                      alt="jobBox"
                      src="/assets/imgs/page/job-single/avatar.png"
                    />
                  </figure>
                  <div className="sidebar-info">
                    <span className="sidebar-company">AliThemes</span>
                    <span className="card-location">New York, US</span>
                    <Link legacyBehavior href="#">
                      <a className="link-underline mt-15">02 Open Jobs</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar-list-job">
                <div className="box-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3150609575905!2d-87.6235655!3d41.886080899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1658551322537!5m2!1svi!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <ul className="ul-disc">
                  <li>
                    205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                  </li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Email: contact@Evara.com</li>
                </ul>
              </div>
            </div>
            <div className="sidebar-border">
              <h6 className="f-18">Similar jobs</h6>
              <div className="sidebar-list-job">
                <ul>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-1.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>UI / UX Designer fulltime</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>3</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $250<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                New York, US
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-2.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>Java Software Engineer</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>5</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $500<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                Tokyo, Japan
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-3.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>Frontend Developer</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>8</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $650<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                Hanoi, Vietnam
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-4.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>Cloud Engineer</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>12</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $380<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                Losangl, Au
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-5.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>DevOps Engineer</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>34</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $140<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                Paris, France
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-6.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>Figma design UI/UX</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>45</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $290<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                New York, US
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-7.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>Product Manage</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>50</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $650<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                New York, US
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-list-4 wow animate__animated animate__fadeIn hover-up">
                      <div className="image">
                        <Link legacyBehavior href="/job-details">
                          <a>
                            <Image
                              width={50}
                              height={50}
                              src="/assets/imgs/brands/brand-8.png"
                              alt="jobBox"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="info-text">
                        <h5 className="font-md font-bold color-brand-1">
                          <Link legacyBehavior href="/job-details">
                            <a>UI / UX Designer</a>
                          </Link>
                        </h5>
                        <div className="mt-0">
                          <span className="card-briefcase">Fulltime</span>
                          <span className="card-time">
                            <span>58</span>
                            <span> mins ago</span>
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="card-price">
                                $270<span>/Hour</span>
                              </h6>
                            </div>
                            <div className="col-6 text-end">
                              <span className="card-briefcase">
                                New York, US
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-border">
              <h6 className="f-18">Tags</h6>
              <div className="sidebar-list-job">
                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">App</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">Digital</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">
                    Marketing
                  </a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">
                    Conten Writer
                  </a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">Sketch</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">PSD</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">Laravel</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">
                    React JS
                  </a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">HTML</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">Finance</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">Manager</a>
                </Link>

                <Link legacyBehavior href="/jobs-grid">
                  <a className="btn btn-grey-small bg-14 mb-10 mr-5">
                    Business
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

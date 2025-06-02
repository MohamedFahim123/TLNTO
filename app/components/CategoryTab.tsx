import Image from "next/image";
import Link from "next/link";
import { Job } from "../store/GetAllJobsCompanyDashboard";

const CategoryTab = ({ recentJobs }: { recentJobs: Job[] }) => {
  return (
    <div className="tab-content mt-70" id="myTabContent-1">
      <div className={`tab-pane fade`}>
        <div className="row">
          {recentJobs?.map((job) => (
            <div
              key={job.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
            >
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <span className="flash" />
                  <div className="image-box">
                    <Image
                      width={50}
                      height={50}
                      src="/assets/imgs/brands/brand-1.png"
                      alt="jobBox"
                    />
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
                  <p className="font-sm color-text-paragraph mt-15">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae architecto eveniet, dolor quo repellendus
                    pariatur
                  </p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;

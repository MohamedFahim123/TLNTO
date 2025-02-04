import { Job } from "@/app/store/GetAllJobsCompanyDashboard";
import Link from "next/link";
import Modal from "../Modal";

export default function GridView({ job }: { job: Job }) {
  return (
    <>
      <div className="card-grid-2 hover-up">
        <div className="card-grid-2-image-left">
          <span className="flash" />
          <div className="image-box">
            {/* <Image
              width={50}
              height={50}
              src={`/assets/imgs/brands/${job.img}`}
              alt="jobBox"
            /> */}
          </div>
          <div className="right-info">
            {/* <Link className="name-job" href="/company-details">
              {job.company}
            </Link> */}
            <span className="location-small">New York, US</span>
          </div>
        </div>
        <div className="card-block-info">
          <h6>
            <Link href="/job-details">{job.title}</Link>
          </h6>
          <div className="mt-5">
            <span className="card-briefcase">{job.work_place_type_name} </span>
            <span className="card-time">
              {job.salary}
              <span> minutes ago</span>
            </span>
          </div>
          <p className="font-sm color-text-paragraph mt-15">
            {job.description}
          </p>
          <div className="mt-30">
            {job.tags.map((item, i) => (
              <Link className="btn btn-grey-small mr-5" href="#" key={i}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="card-2-bottom mt-30">
            <div className="row">
              <div className="col-lg-7 col-7">
                <span className="card-text-price">${job.salary}</span>
                {/* <span className="text-muted">/Hour</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}

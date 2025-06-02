import { RecuiterInterface } from "@/app/[region]/jobs/recruiters/page";
import Image from "next/image";
import Link from "next/link";
export default function HeroSectionRecruiterDetails({
  activeIndex,
  handleOnClick,
  recruiterDetailsData,
}: {
  activeIndex: number;
  handleOnClick: (index: number) => void;
  recruiterDetailsData: RecuiterInterface;
}) {
  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-image-single">
          <Image
            width={1100}
            height={350}
            src="/assets/imgs/page/company/img.png"
            alt="jobBox"
          />
        </div>
        <div className="box-company-profile">
          <div className="image-compay">
            <Image
              width={100}
              height={100}
              src={recruiterDetailsData.companyLogo}
              alt={`${recruiterDetailsData.name} logo`}
            />
          </div>
          <div className="row mt-10">
            <div className="col-lg-8 col-md-12">
              <h5 className="f-18">
                {recruiterDetailsData.name}
                <span className="card-location font-regular ml-20">
                  {recruiterDetailsData.city}, {recruiterDetailsData.country}
                </span>
              </h5>
            </div>
            <div className="col-lg-4 col-md-12 text-lg-end">
              <Link legacyBehavior href={`tel:${recruiterDetailsData.phone}`}>
                <a className="btn btn-call-icon btn-apply btn-apply-big">
                  Contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="box-nav-tabs mt-40 mb-5">
          <ul className="nav" role="tablist">
            <li>
              <a
                className={`btn btn-border aboutus-icon mr-15 mb-5 ${
                  activeIndex === 1 ? "active" : ""
                }`}
                onClick={() => handleOnClick(1)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                className={`btn btn-border recruitment-icon mr-15 mb-5 ${
                  activeIndex === 2 ? "active" : ""
                } `}
                onClick={() => handleOnClick(2)}
              >
                Recruitments
              </a>
            </li>
            <li>
              <a
                className={`btn btn-border people-icon mb-5 ${
                  activeIndex === 3 ? "active" : ""
                }`}
                onClick={() => handleOnClick(3)}
              >
                People
              </a>
            </li>
          </ul>
        </div>
        <div className="border-bottom pt-10 pb-10" />
      </div>
    </section>
  );
}

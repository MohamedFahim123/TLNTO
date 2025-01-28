import Image from "next/image";
import Link from "next/link";

export default function CandidateDetailsHero({
  handleOnClick,
}: {
  handleOnClick: (index: number) => void;
}) {
  return (
    <section className="section-box-2">
      <div className="container">
        <div className="banner-hero banner-image-single">
          <Image
            width={1100}
            height={350}
            src="/assets/imgs/page/candidates/img.png"
            alt="jobbox"
          />
        </div>
        <div className="box-company-profile">
          <div className="image-compay">
            <Image
              width={100}
              height={100}
              src="/assets/imgs/page/candidates/candidate-profile.png"
              alt="jobbox"
            />
          </div>
          <div className="row mt-10">
            <div className="col-lg-8 col-md-12">
              <h5 className="f-18">
                Steven Jobs{" "}
                <span className="card-location font-regular ml-20">
                  New York, US
                </span>
              </h5>
              <p className="mt-0 font-md color-text-paragraph-2 mb-15">
                UI/UX Designer. Front end Developer
              </p>
            </div>
            <div className="col-lg-4 col-md-12 text-lg-end">
              <Link legacyBehavior href="page-contact">
                <a className="btn btn-download-icon btn-apply btn-apply-big">
                  Download CV
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="box-nav-tabs mt-40 mb-5">
          <ul className="nav" role="tablist">
            <li>
              <a
                className="btn btn-border aboutus-icon mr-15 mb-5 active"
                onClick={() => handleOnClick(1)}
              >
                Short Bio
              </a>
            </li>
            <li>
              <a
                className="btn btn-border recruitment-icon mr-15 mb-5"
                onClick={() => handleOnClick(2)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="btn btn-border people-icon mb-5"
                onClick={() => handleOnClick(3)}
              >
                Working Experience
              </a>
            </li>
          </ul>
        </div>
        <div className="border-bottom pt-10 pb-10" />
      </div>
    </section>
  );
}

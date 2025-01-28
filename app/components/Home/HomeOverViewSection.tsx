import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeOverViewSection() {
  return (
    <section className="section-box overflow-visible mt-100 mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="box-image-job">
              <Image
                className="img-job-1"
                width={300}
                height={300}
                alt="jobBox"
                src="/assets/imgs/page/homepage1/img-chart.png"
              />
              <Image
                className="img-job-2"
                width={300}
                height={300}
                alt="jobBox"
                src="/assets/imgs/page/homepage1/controlcard.png"
              />
              <figure className="wow animate__animated animate__fadeIn">
                <Image
                  alt="jobBox"
                  width={400}
                  height={400}
                  src="/assets/imgs/page/homepage1/img1.png"
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="content-job-inner">
              <span className="color-text-mutted text-32">
                Millions Of Jobs.{" "}
              </span>
              <h2 className="text-52 wow animate__animated animate__fadeInUp">
                Find The One That’s <span className="color-brand-2">Right</span>{" "}
                For You
              </h2>
              <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </div>
              <div className="mt-40">
                <div className="wow animate__animated animate__fadeInUp">
                  <Link legacyBehavior href="/jobs-grid">
                    <a className="btn btn-default">Search Jobs</a>
                  </Link>
                  <Link legacyBehavior href="/page-about">
                    <a className="btn btn-link">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(HomeOverViewSection);

import Image from "next/image";
import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;

export default function MainBlogsSection() {
  return (
    <section className="section-box mt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card-grid-5">
              <div
                className="card-grid-5 hover-up"
                style={{
                  backgroundImage: 'url("../../../public/assets/imgs/page/blog/img-big1.png")',
                }}
              >
                <Link legacyBehavior href={`/${Region}/jobs/blogs/slug`}>
                  <a>
                    <div className="box-cover-img">
                      <div className="content-bottom">
                        <h3 className="color-white mb-20">11 Tips to Help You Get New Clients</h3>
                        <div className="author d-flex align-items-center mr-20">
                          <Image width={40} height={40} className="mr-10" alt="jobBox" src="/assets/imgs/page/candidates/user3.png" />
                          <span className="color-white font-sm mr-25">Azumi Rose</span>
                          <span className="color-white font-sm">25 April 2022</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div
              className="card-grid-5 hover-up"
              style={{
                backgroundImage: 'url("/assets/imgs/page/blog/img-big2.png")',
              }}
            >
              <Link legacyBehavior href={`/${Region}/jobs/blogs/slug`}>
                <a>
                  <div className="box-cover-img">
                    <div className="content-bottom">
                      <h3 className="color-white mb-20">Recruiter and Land Your Dream Job</h3>
                      <div className="author d-flex align-items-center mr-20">
                        <Image width={40} height={40} className="mr-10" alt="jobBox" src="/assets/imgs/page/candidates/user1.png" />
                        <span className="color-white font-sm mr-25">Thompson</span>
                        <span className="color-white font-sm">28 April 2022</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div
              className="card-grid-5 hover-up"
              style={{
                backgroundImage: 'url("/assets/imgs/page/blog/img-big3.png")',
              }}
            >
              <Link legacyBehavior href={`/${Region}/jobs/blogs/slug`}>
                <a>
                  <div className="box-cover-img">
                    <div className="content-bottom">
                      <h3 className="color-white mb-20">Work-From-Home Jobs That Pay Well</h3>
                      <div className="author d-flex align-items-center mr-20">
                        <Image width={40} height={40} className="mr-10" alt="jobBox" src="/assets/imgs/page/blog/ava_1.png" />
                        <span className="color-white font-sm mr-25">Alice Json</span>
                        <span className="color-white font-sm">29 April 2022</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

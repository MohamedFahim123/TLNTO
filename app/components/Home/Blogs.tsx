import BlogSlider from "@/app/sliders/Blog";
import Link from "next/link";
import React from "react";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;
function Blogs() {
  return (
    <section className="section-box mt-50 mb-50">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
          <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
        </div>
      </div>
      <div className="container">
        <div className="mt-50">
          <div className="box-swiper style-nav-top">
            <BlogSlider />
          </div>

          <div className="text-center">
            <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
              <a className="btn btn-brand-1 btn-icon-load mt--30 hover-up">Load More Posts</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default React.memo(Blogs);

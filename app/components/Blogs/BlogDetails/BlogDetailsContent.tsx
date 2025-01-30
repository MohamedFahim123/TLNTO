import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsContent() {
  return (
    <section className="section-box">
      <div className="archive-header pt-50 text-center">
        <div className="container">
          <div className="box-white">
            <div className="max-width-single">
              <Link legacyBehavior href="#">
                <a className="btn btn-tag">Job Tips</a>
              </Link>

              <h2 className="mb-30 mt-20 text-center">11 Tips to Help You Get New Clients Through Cold Calling</h2>
              <div className="post-meta text-muted d-flex align-items-center mx-auto justify-content-center">
                <div className="author d-flex align-items-center mr-30">
                  <Image width={30} height={30} alt="jobBox" src="/assets/imgs/page/homepage1/user3.png" />
                  <span>Sarah Harding</span>
                </div>
                <div className="date">
                  <span className="font-xs color-text-paragraph-2 mr-20 d-inline-block">
                    <Image width={20} height={20} alt="jobBox" className="img-middle mr-5" src="/assets/imgs/page/blog/calendar.svg" />
                    06 Sep 2022
                  </span>
                  <span className="font-xs color-text-paragraph-2 d-inline-block">
                    <Image width={20} height={20} alt="jobBox" className="img-middle mr-5" src="/assets/imgs/template/icons/time.svg" />8 mins to read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

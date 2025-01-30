import Image from "next/image";

export default function AboutUsMainSection() {
  return (
    <section className="section-box mt-50">
      <div className="post-loop-grid">
        <div className="container">
          <div className="text-center">
            <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">About Our Company</h2>
            <p className="font-sm color-text-paragraph wow animate__animated animate__fadeInUp w-lg-50 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.
            </p>
          </div>
          <div className="row mt-70">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Image width={500} height={400} src="/assets/imgs/page/about/img-about2.png" alt="joxBox" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="mt-15">What we can do?</h3>
              <div className="mt-20">
                <p className="font-md color-text-paragraph mt-20">
                  Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.
                </p>
                <p className="font-md color-text-paragraph mt-20">
                  Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.
                </p>
                <p className="font-md color-text-paragraph mt-20">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p>
                <p className="font-md color-text-paragraph mt-20">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p>
              </div>
              <div className="mt-30">
                <a className="btn btn-brand-1" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import React from "react";

const NewsletterSection = () => {
  return (
    <section className="section-box mt-50 mb-20">
      <div className="container">
        <div className="box-newsletter">
          <div className="row">
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <Image width={200} height={300} src="/assets/imgs/template/newsletter-left.png" alt="joxBox" />
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <h2 className="text-md-newsletter text-center">
                New Things Will Always
                <br /> Update Regularly
              </h2>
              <div className="box-form-newsletter mt-40">
                <form className="form-newsletter">
                  <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                  <button type="button" title="Subscripe" className="btn btn-default font-heading icon-send-letter">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-12 text-center d-none d-xl-block">
              <Image width={200} height={200} src="/assets/imgs/template/newsletter-right.png" alt="joxBox" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(NewsletterSection);

import Image from "next/image";

export default function ContactCorPoration() {
  return (
    <section className="section-box mt-80">
      <div className="container">
        <div className="box-info-contact">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <a href="#">
                <Image
                  width={188}
                  height={36}
                  src="/assets/imgs/page/contact/logo.svg"
                  alt="joxBox"
                />
              </a>
              <div className="font-sm color-text-paragraph">
                205 North Michigan Avenue, Suite 810 Chicago, 60601, USA
                <br /> Phone: (123) 456-7890
                <br /> Email: contact@jobbox.com
              </div>
              <a className="text-uppercase color-brand-2 link-map" href="#">
                View map
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <h6>London</h6>
              <p className="font-sm color-text-paragraph mb-20">
                2118 Thornridge Cir. Syracuse,
                <br className="d-none d-lg-block" /> Connecticut 35624
              </p>
              <h6>New York</h6>
              <p className="font-sm color-text-paragraph mb-20">
                4517 Washington Ave.
                <br className="d-none d-lg-block" /> Manchester, Kentucky 39495
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <h6>Chicago</h6>
              <p className="font-sm color-text-paragraph mb-20">
                3891 Ranchview Dr. Richardson,
                <br className="d-none d-lg-block" /> California 62639
              </p>
              <h6>San Francisco</h6>
              <p className="font-sm color-text-paragraph mb-20">
                4140 Parker Rd. Allentown,
                <br className="d-none d-lg-block" /> New Mexico 31134
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
              <h6>Sysney</h6>
              <p className="font-sm color-text-paragraph mb-20">
                3891 Ranchview Dr. Richardson,
                <br className="d-none d-lg-block" /> California 62639
              </p>
              <h6>Singapore</h6>
              <p className="font-sm color-text-paragraph mb-20">
                4140 Parker Rd. Allentown,
                <br className="d-none d-lg-block" /> New Mexico 31134
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

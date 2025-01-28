import Image from "next/image";

export default function GetInTouch() {
  return (
    <>
      <section className="section-box mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-40">
              <span className="font-md color-brand-2 mt-20 d-inline-block">
                Contact us
              </span>
              <h2 className="mt-5 mb-10">Get in touch</h2>
              <p className="font-md color-text-paragraph-2">
                The right move at the right time saves your investment. live
                <br className="d-none d-lg-block" /> the dream of expanding your
                business.
              </p>
              <form
                className="contact-form-style mt-30"
                id="contact-form"
                action="#"
                method="post"
              >
                <div
                  className="row wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input
                        className="font-sm color-text-paragraph-2"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input
                        className="font-sm color-text-paragraph-2"
                        name="company"
                        placeholder="Comapy (optioanl)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input
                        className="font-sm color-text-paragraph-2"
                        name="email"
                        placeholder="Your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input
                        className="font-sm color-text-paragraph-2"
                        name="phone"
                        placeholder="Phone number"
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="textarea-style mb-30">
                      <textarea
                        className="font-sm color-text-paragraph-2"
                        name="message"
                        placeholder="Tell us about yourself"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      className="submit btn btn-send-message"
                      type="submit"
                    >
                      Send message
                    </button>
                    <label className="ml-20">
                      <input
                        className="float-start mr-5 mt-6"
                        type="checkbox"
                      />{" "}
                      By clicking contact us button, you agree our terms and
                      policy,
                    </label>
                  </div>
                </div>
              </form>
              <p className="form-messege" />
            </div>
            <div className="col-lg-4 text-center d-none d-lg-block">
              <Image
                width={374}
                height={506}
                src="/assets/imgs/page/contact/img.png"
                alt="joxBox"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

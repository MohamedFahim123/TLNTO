import TestimonialSlider1 from "@/app/sliders/Testimonial1";

export default function Customers() {
  return (
    <section className="section-box mt-30 mb-40">
      <div className="container">
        <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">
          Our Happy Customer
        </h2>
        <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">
          When it comes to choosing the right web hosting provider, we know how
          easy it
          <br className="d-none d-lg-block" /> is to get overwhelmed with the
          number.
        </div>
        <div className="row mt-50">
          <div className="box-swiper">
            <TestimonialSlider1 />
          </div>
        </div>
      </div>
    </section>
  );
}

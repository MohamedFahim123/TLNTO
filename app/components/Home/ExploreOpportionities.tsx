import React from "react";

function ExploreOpportionities() {
  return (
    <div className="section-box mb-30">
      <div className="container">
        <div className="box-we-hiring">
          <div className="text-1">
            <span className="text-we-are">We are</span>
            <span className="text-hiring">Hiring</span>
          </div>
          <div className="text-2">
            Let’s <span className="color-brand-1">Work</span> Together
            <br /> &amp; <span className="color-brand-1">Explore</span>{" "}
            Opportunities
          </div>
          <div className="text-3">
            <div
              className="btn btn-apply btn-apply-icon"
              data-bs-toggle="modal"
              data-bs-target="#ModalApplyJobForm"
            >
              Apply now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(ExploreOpportionities);

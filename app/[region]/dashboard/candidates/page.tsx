import BrandSlider from "@/app/components/Dashboard/BrandSlider";
import CandidateSection from "@/app/components/Dashboard/CandidateSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Candidates",
  description: "Your Favourite Job Portal.",
};

export default function CandidatesPage() {
  return (
    <>
      <CandidateSection />
      <div className="mt-10">
        <div className="section-box">
          <div className="container">
            <div className="panel-white pt-30 pb-30 pl-15 pr-15">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-10">
                  <BrandSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

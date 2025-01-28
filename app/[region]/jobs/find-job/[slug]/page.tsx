import FeaturedJobsJobDetails from "@/app/components/FindAJob/JobDetails/FeaturedJobsJobDetails";
import HeroSectionJobDetails from "@/app/components/FindAJob/JobDetails/HeroSectionJobDetails";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Explore Job Details",
  description: "Explore Job Details on Tlnto, our Job Portal",
};

export default function page() {
  return (
    <>
      <HeroSectionJobDetails />
      <FeaturedJobsJobDetails />
      <NewsletterSection />
    </>
  );
}

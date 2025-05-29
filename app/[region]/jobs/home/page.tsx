import CategoriesSection from "@/app/components/Home/CategoriesSection";
import HeroSection from "@/app/components/Home/HeroSection";
import JobOfTheDaySection from "@/app/components/Home/JobOfTheDaySection";
import LocationJobs from "@/app/components/Home/LocationJobs";
import OurNums from "@/app/components/Home/OurNums";
import TopRecruiters from "@/app/components/Home/TopRecruiters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto Jobs",
  description: "Your Favourite Job Portal.",
};

export default async function HomePage() {
  return (
    <>
      <div className="bg-homepage1" />
      <HeroSection />
      <div className="mt-100" />
      <CategoriesSection />
      {/* <ExploreOpportionities /> */}
      <JobOfTheDaySection />
      {/* <HomeOverViewSection /> */}
      <OurNums />
      <TopRecruiters />
      <LocationJobs />
      {/* <Blogs /> */}
      {/* <NewsletterSection /> */}
    </>
  );
}

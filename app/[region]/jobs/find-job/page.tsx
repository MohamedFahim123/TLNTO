import AllJobsSection from "@/app/components/FindAJob/AllJobsSection";
import FindAJobHeroSection from "@/app/components/FindAJob/FindAJobHeroSection";
import Blogs from "@/app/components/Home/Blogs";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Find A Job",
  description: "Find A Job Tlnto, our Job Portal",
};

export default function FindAJobPage() {
  return (
    <>
      <FindAJobHeroSection />
      <AllJobsSection />
      <Blogs />
      <NewsletterSection />
    </>
  );
}

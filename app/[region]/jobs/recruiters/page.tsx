import Blogs from "@/app/components/Home/Blogs";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import RecruitersHeroSection from "@/app/components/Recruiters/RecruitersHeroSection";
import ShoiwAllRecuiters from "@/app/components/Recruiters/ShoiwAllRecuiters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Recruiters",
  description: "Recruiters on Tlnto, our Job Portal",
};

export default function RecruitersPage() {
  return (
    <>
      <RecruitersHeroSection />
      <ShoiwAllRecuiters />
      <Blogs />
      <NewsletterSection />
    </>
  );
}

import AllCandidates from "@/app/components/Candidates/AllCandidates";
import HeroSectionCandidates from "@/app/components/Candidates/HeroSectionCandidates";
import Blogs from "@/app/components/Home/Blogs";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Candidates",
  description: "Your Favourite Job Portal.",
};

export default function CandidatesPage() {
  return (
    <>
      <HeroSectionCandidates />
      <AllCandidates />
      <Blogs />
      <NewsletterSection />
    </>
  );
}

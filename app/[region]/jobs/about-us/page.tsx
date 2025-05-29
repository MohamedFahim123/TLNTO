import AboutUsHeroSection from "@/app/components/AboutUs/AboutUsHeroSection";
import AboutUsMainSection from "@/app/components/AboutUs/AboutUsMainSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - About Us",
  description: "Your Favourite Job Portal.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutUsHeroSection />
      <AboutUsMainSection />
      {/* <OurTeam /> */}
      {/* <Blogs /> */}
      {/* <Customers /> */}
      {/* <NewsletterSection /> */}
    </>
  );
}

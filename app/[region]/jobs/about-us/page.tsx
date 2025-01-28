import AboutUsHeroSection from "@/app/components/AboutUs/AboutUsHeroSection";
import AboutUsMainSection from "@/app/components/AboutUs/AboutUsMainSection";
import Customers from "@/app/components/ContactUs/Customers";
import OurTeam from "@/app/components/ContactUs/OurTeam";
import Blogs from "@/app/components/Home/Blogs";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
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
      <OurTeam />
      <Blogs />
      <Customers />
      <NewsletterSection />
    </>
  );
}

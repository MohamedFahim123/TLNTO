import ContactCorPoration from "@/app/components/ContactUs/ContactCorPoration";
import ContactHero from "@/app/components/ContactUs/ContactHero";
import GetInTouch from "@/app/components/ContactUs/GetInTouch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Your Favourite Job Portal.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactCorPoration />
      <GetInTouch />
      {/* <OurTeam /> */}
      {/* <Blogs /> */}
      {/* <Customers /> */}
      {/* <NewsletterSection /> */}
    </>
  );
}

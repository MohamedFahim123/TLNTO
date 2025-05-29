import PricingHero from "@/app/components/PricingPage/PricingHero";
import { Metadata } from "next";
import MainQuestions from "./MainQuestions";
import PrincingPackages from "./PrincingPackages";

export const metadata: Metadata = {
  title: "Pricing Plan",
  description: "Your Favourite Job Portal.",
};
export default function PricingPlan() {
  return (
    <div>
      <PricingHero />
      <PrincingPackages />
      <MainQuestions />
      {/* <Customers /> */}
      {/* <NewsletterSection /> */}
    </div>
  );
}

import RecuritersDetailsPageContainer from "@/app/components/Recruiters/Details/RecuritersDetailsPageContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Recruiters Details",
  description: "Recruiters Details on Tlnto, our Job Portal",
};

export default function CompanyDetailsPage() {
  return <RecuritersDetailsPageContainer />;
}

import ContentProtectedMainSection from "@/app/components/ContentProtectedSection/ContentProtectedMainSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Protected",
  description: "Your Favourite Job Portal.",
};

export default function ContentProtectedPage() {
  return <ContentProtectedMainSection />;
}

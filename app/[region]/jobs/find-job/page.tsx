import FindAJobMainPage from "@/app/components/FindAJob/FindAJobMainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Find A Job",
  description: "Find A Job Tlnto, our Job Portal",
};

export default function FindAJobPage() {
  return <FindAJobMainPage />;
}

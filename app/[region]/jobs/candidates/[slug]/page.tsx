import CandidateDetailsContainer from "@/app/components/Candidates/Details/CandidateDetailsContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Candidate Details",
  description: "Candidate Details on Tlnto, our Job Portal",
};

export default function CadidateDetailsPage() {
  return <CandidateDetailsContainer />;
}

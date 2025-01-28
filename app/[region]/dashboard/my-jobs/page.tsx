import AllJobsPage from "@/app/components/Dashboard/AllJobsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - My Jobs",
  description: "Your Posted Jobs.",
};

export default function MyJobsPage() {
  return <AllJobsPage />;
}

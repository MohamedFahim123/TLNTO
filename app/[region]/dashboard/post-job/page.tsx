import PostJobSection from "@/app/components/Dashboard/PostJobSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post a Job",
  description: "Post Your Job On Tlnto",
};

export default async function PostJobPage() {
  return <PostJobSection />;
}

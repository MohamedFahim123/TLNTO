import PostJobSection from "@/app/components/Dashboard/PostJobSection";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Post a Job",
  description: "Post Your Job On Tlnto",
};

export default async function PostJobPage() {
  const cookiesData = await cookies();
  const cookieToken: string = cookiesData.get("TLNTO_TOKEN")?.value || "";

  return <PostJobSection cookieToken={cookieToken} />;
}

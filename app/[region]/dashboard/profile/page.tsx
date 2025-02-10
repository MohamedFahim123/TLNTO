import ProfileContainer from "@/app/components/Dashboard/ProfileContainer";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Tlnto - Profile",
  description: "Your Account Profile",
};

export default async function ProfilePage() {
  const cookiesData = await cookies();
  const cookieToken: string = cookiesData.get("TLNTO_TOKEN")?.value || "";
  
  return <ProfileContainer cookieToken={cookieToken} />;
}

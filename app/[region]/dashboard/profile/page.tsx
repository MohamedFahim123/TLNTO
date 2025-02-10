import ProfileContainer from "@/app/components/Dashboard/ProfileContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Profile",
  description: "Your Account Profile",
};

export default async function ProfilePage() {
  
  return <ProfileContainer />;
}

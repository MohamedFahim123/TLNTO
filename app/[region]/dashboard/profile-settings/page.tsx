import SettingsSection from "@/app/components/Dashboard/SettingsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Your Account Settings",
};
export default function SettingsPage() {
  return <SettingsSection />;
}

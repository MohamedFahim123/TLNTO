import LoginPage from "@/app/components/Login/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Login",
  description: "Login to Tlnto",
};

export default async function page() {
  return <LoginPage />;
}

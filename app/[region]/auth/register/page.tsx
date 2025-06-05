import RegisterPage from "@/app/components/Register/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - Register",
  description: "Create a new account on Tlnto.",
};

export default function Register() {
  return <RegisterPage />;
}

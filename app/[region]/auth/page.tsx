import { MainRegion } from "@/app/utils/mainData";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sign In or Sign Up to Tlnto",
};

export default async function AuthPage() {
  const cookiesdata = await cookies();
  const region: string = cookiesdata.get("region")?.value || MainRegion;
  return redirect(`/${region}/auth/login`);
}

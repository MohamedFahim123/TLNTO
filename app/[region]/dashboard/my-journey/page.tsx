import MyCVSection from "@/app/components/Dashboard/MyCVSection";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Tlnto - My Journey",
  description: "Your Journey section.",
};

export default async function MyCvPage() {
  const cookiesData = await cookies();
  const cookieToken: string = cookiesData.get("TLNTO_TOKEN")?.value || "";
  return (
    <>
      <MyCVSection cookieToken={cookieToken} />
    </>
  );
}

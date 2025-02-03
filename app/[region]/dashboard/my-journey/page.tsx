import MyCVSection from "@/app/components/Dashboard/MyCVSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - My Journey",
  description: "Your Journey section.",
};

export default function MyCvPage() {
  return (
    <>
      <MyCVSection />
    </>
  );
}

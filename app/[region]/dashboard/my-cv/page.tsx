import MyCVSection from "@/app/components/Dashboard/MyCVSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tlnto - My CV",
  description: "Your CV section.",
};

export default function MyCvPage() {
  return (
    <>
      <MyCVSection />
    </>
  );
}

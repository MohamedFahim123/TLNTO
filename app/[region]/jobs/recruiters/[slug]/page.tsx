import { fetchApi } from "@/app/Actions/FetchApi";
import RecuritersDetailsPageContainer from "@/app/components/Recruiters/Details/RecuritersDetailsPageContainer";
import { MainRegion } from "@/app/utils/mainData";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { RecuiterInterface } from "../page";

export const metadata: Metadata = {
  title: "Tlnto - Recruiters Details",
  description: "Recruiters Details on Tlnto, our Job Portal",
};

export default async function CompanyDetailsPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const cookiesData = await cookies();
  const currRegion: string = cookiesData.get("region")?.value || MainRegion;
  const region = currRegion ? currRegion : MainRegion;
  const recruiterDetailsDataRes = await fetchApi<{ data: RecuiterInterface }>(
    `show-recuiter/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        code: region,
      },
    }
  );
  const recruiterDetailsData: RecuiterInterface =
    recruiterDetailsDataRes?.data || {};

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecuritersDetailsPageContainer
        recruiterDetailsData={recruiterDetailsData}
      />
    </Suspense>
  );
}

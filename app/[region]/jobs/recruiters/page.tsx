import { fetchApi } from "@/app/Actions/FetchApi";
import RecruitersHeroSection from "@/app/components/Recruiters/RecruitersHeroSection";
import ShoiwAllRecuiters from "@/app/components/Recruiters/ShoiwAllRecuiters";
import { MainRegion } from "@/app/utils/mainData";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tlnto - Recruiters",
  description: "Recruiters on Tlnto, our Job Portal",
};

export interface RecuiterInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  jobs_count: string;
  active_jobs_count: string;
  status: string;
  industry: string;
  industry_id: string;
  city_id: string;
  country_id: string;
  companyLogo: string;
  official_registeration: string;
  commercial_certification: string;
}

export default async function RecruitersPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  const cookiesData = await cookies();
  const currRegion: string = cookiesData.get("region")?.value || MainRegion;

  const fetchedData = await fetchApi<{ data: RecuiterInterface[] }>(
    `search-recuiter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        code: currRegion || MainRegion,
      },
      body: JSON.stringify(params),
    }
  );
  const recruiters: RecuiterInterface[] = fetchedData?.data || [];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecruitersHeroSection />
      <ShoiwAllRecuiters
        recruiters={recruiters}
        params={params}
        currRegion={currRegion}
      />
      {/* <Blogs /> */}
      {/* <NewsletterSection /> */}
    </Suspense>
  );
}

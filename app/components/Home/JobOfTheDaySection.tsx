import { fetchApi } from "@/app/Actions/FetchApi";
import { Job } from "@/app/store/GetAllJobsCompanyDashboard";
import { MainRegion } from "@/app/utils/mainData";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import CategoryTab from "../CategoryTab";

async function JobOfTheDaySection() {
  const cookiesData = await cookies();
  const currRegion: string = cookiesData.get("region")?.value || MainRegion;
  const jobsOfTheDayRes = await fetchApi<{ data: Job[] }>(`recent-jobs?t=${new Date().getTime()}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      code: currRegion || MainRegion,
    },
  });
  const recentJobs: Job[] = jobsOfTheDayRes?.data || [];

  console.log(jobsOfTheDayRes)

  return (
    <>
      {recentJobs?.length > 0 && (
        <Suspense fallback={<div>Loading...</div>}>
          <section className="section-box mt-50">
            <div className="container">
              <div className="text-center">
                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                  Jobs of the day
                </h2>
                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                  Search and connect with the right candidates faster.{" "}
                </p>
              </div>
              <div className="mt-70">
                <CategoryTab recentJobs={recentJobs} />
              </div>
            </div>
          </section>
        </Suspense>
      )}
    </>
  );
}
export default React.memo(JobOfTheDaySection);

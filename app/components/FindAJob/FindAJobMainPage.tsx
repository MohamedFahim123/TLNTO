"use client";

import { SearchData, useAllJobsStore } from "@/app/store/WebSiteAllJobs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AllJobsSection from "./AllJobsSection";
import FindAJobHeroSection from "./FindAJobHeroSection";

export interface DefaultValues {
  work_place_type: string;
  employment_type: string;
  industry: string;
  year_exp: string;
  title: string;
  tags: string[];
  job_posted: string;
  city: string;
}

const debounce = (func: (...args: SearchData[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: SearchData[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const FindAJobMainPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { allJobs } = useAllJobsStore();

  const [defaultValues, setDefaultValues] = useState<DefaultValues>({
    work_place_type: "",
    employment_type: "",
    industry: "",
    year_exp: "",
    title: "",
    tags: [],
    job_posted: "",
    city: "",
  });

  const fetchJobs = debounce((params: SearchData) => {
    useAllJobsStore.getState().getAllJobs(params);
  }, 500);

  useEffect(() => {
    const work_place_type = searchParams.get("work_place_type");
    const employment_type = searchParams.get("employment_type");
    const industry = searchParams.get("industry");
    const year_exp = searchParams.get("year_exp");
    const title = searchParams.get("title");
    const job_posted = searchParams.get("job_posted");
    const city = searchParams.get("city");

    setDefaultValues({
      work_place_type: work_place_type || "",
      employment_type: employment_type || "",
      industry: industry || "",
      year_exp: year_exp || "",
      title: title || "",
      job_posted: job_posted || "",
      city: city || "",
      tags: [],
    });

    fetchJobs({
      work_place_type: work_place_type || undefined,
      employment_type: employment_type || undefined,
      industry: industry || undefined,
      year_exp: year_exp || undefined,
      title: title || undefined,
      job_posted: job_posted || undefined,
      city: city || undefined,
      tags: undefined,
    });
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setDefaultValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(name, value);
    } else {
      newParams.delete(name);
    }

    router.replace(`${pathname}?${newParams.toString()}`);
  };

  return (
    <>
      <FindAJobHeroSection
        defaultValues={defaultValues}
        handleChange={handleChange}
      />
      <AllJobsSection
        defaultValues={defaultValues}
        allJobs={allJobs}
        handleChange={handleChange}
      />
      {/* <NewsletterSection /> */}
    </>
  );
};

export default FindAJobMainPage;

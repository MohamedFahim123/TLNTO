"use client";

import { SearchData, useAllJobsStore } from "@/app/store/WebSiteAllJobs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import AllJobsSection from "./AllJobsSection";
import FindAJobHeroSection from "./FindAJobHeroSection";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "@/app/utils/mainData";

export interface DefaultValues {
  work_place_type: string;
  employment_type: string;
  industry: string;
  year_exp: string;
  title: string;
  category: string;
  sub_category: string;
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

  const [currCategory, setCurrCategory] = useState<string>("");
  const [currSubCategory, setCurrSubCategory] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const getCurrSubCategInsideMainCategories = useCallback(async () => {
    if (currCategory) {
      const toastId = toast.loading("Loading...");
      const data: { category_id: string } = {
        category_id: currCategory,
      };
      setSelectedSubCategory("");
      try {
        const res = await axios.post(
          `${baseUrl}/sub-categories?t=${new Date().getTime()}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCurrSubCategory(res?.data?.data);
        toast.update(toastId, {
          render: res?.data?.message || "Success! Sub-Categories loaded.",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.update(toastId, {
            render:
              error.response?.data?.message || "Error loading Sub-Categories!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    }
  }, [currCategory]);

  useEffect(() => {
    if (currCategory) {
      getCurrSubCategInsideMainCategories();
    }
  }, [currCategory]);

  const [defaultValues, setDefaultValues] = useState<DefaultValues>({
    work_place_type: "",
    employment_type: "",
    industry: "",
    year_exp: "",
    title: "",
    job_posted: "",
    category: "",
    sub_category: "",
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
    const category = searchParams.get("category");
    const sub_category = searchParams.get("sub_category");

    setDefaultValues({
      work_place_type: work_place_type || "",
      employment_type: employment_type || "",
      industry: industry || "",
      year_exp: year_exp || "",
      title: title || "",
      job_posted: job_posted || "",
      city: city || "",
      category: category || "",
      sub_category: sub_category || "",
    });

    fetchJobs({
      work_place_type: work_place_type || undefined,
      employment_type: employment_type || undefined,
      industry: industry || undefined,
      year_exp: year_exp || undefined,
      title: title || undefined,
      job_posted: job_posted || undefined,
      city: city || undefined,
      category: category || undefined,
      sub_category: sub_category || undefined,
    });
    if (category) {
      setCurrCategory(category);
    }
    if(sub_category){
      setSelectedSubCategory(sub_category);
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setDefaultValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "category") {
      setCurrCategory(value);
    }

    if (name === "sub_category") {
      setSelectedSubCategory(value);
    }

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
        currCategory={currCategory}
        selectedSubCategory={selectedSubCategory}
        currSubCategory={currSubCategory}
        defaultValues={defaultValues}
        allJobs={allJobs}
        handleChange={handleChange}
      />
      {/* <NewsletterSection /> */}
    </>
  );
};

export default FindAJobMainPage;

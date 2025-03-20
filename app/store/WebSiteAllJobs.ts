import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl, MainRegion } from "../utils/mainData";
import { Job } from "./GetAllJobsCompanyDashboard";
import { useCitiesInsideCurrRegionStore } from "./CurrCitiesInsideCurrRegion";

export interface SearchData {
  work_place_type?: string;
  employment_type?: string;
  industry?: string;
  year_exp?: string;
  title?: string;
  category?: string;
  sub_category?: string;
  job_posted?: string;
  city?: string;
}

export interface UseAllJobsStoreIterface {
  allJobs: Job[];
  allJobsError: unknown;
  allJobsLoading: boolean;

  getAllJobs: (data: SearchData) => Promise<void>;
}

export const useAllJobsStore = create<UseAllJobsStoreIterface>((set) => ({
  allJobs: [],
  allJobsError: null,
  allJobsLoading: false,
  getAllJobs: async (data) => {
    const currentTime: number = new Date().getTime();


    const region = useCitiesInsideCurrRegionStore.getState().currRegion;

    set({ allJobsLoading: true });
    try {
      const res = await axios.post(
        `${baseUrl}/jobs?t=${currentTime}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            code: region || MainRegion,
          },
        }
      );

      const allJobs = res?.data?.data?.jobs || [];

      set({
        allJobs,
        allJobsError: null,
        allJobsLoading: false,
      });
    } catch (err) {
      set({
        allJobs: [],
        allJobsError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching allJobs"
          : "Unexpected error occurred!",
        allJobsLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

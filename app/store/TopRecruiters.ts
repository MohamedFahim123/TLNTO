import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl, MainRegion } from "../utils/mainData";

export interface TopRecruiter {
  id: number;
  name: string;
  email: string;
  phone: string;
  country_id: number;
  country: string;
  city_id: number;
  city: string;
  industry_id: number;
  industry: string;
  commercial_certification: string;
  official_registeration: string;
  companyLogo: string;
  status: string;
  jobs_count: number;
  active_jobs_count: number;
}

export interface UseTopRecruiterStoreIterface {
  topRecruiters: TopRecruiter[];
  topRecruitersError: unknown;
  topRecruitersLoading: boolean;
  getTopRecruiters: (Region: string) => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useTopRecruiterStore = create<UseTopRecruiterStoreIterface>(
  (set) => ({
    topRecruiters: [],
    topRecruitersError: null,
    topRecruitersLoading: false,
    getTopRecruiters: async (Region: string) => {
      const currentTime: number = new Date().getTime();
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ topRecruitersLoading: true });

      try {
        const res = await axios.get(
          `${baseUrl}/top-recuiters?t=${currentTime}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Code: Region ? Region : MainRegion,
            },
          }
        );

        const topRecruiters = res?.data?.data || [];
        lastFetchedTime = currentTime;

        set({
          topRecruiters,
          topRecruitersError: null,
          topRecruitersLoading: false,
        });
      } catch (err) {
        set({
          topRecruiters: [],
          topRecruitersError: axios.isAxiosError(err)
            ? err?.response?.data?.message || "Error fetching topRecruiters"
            : "Unexpected error occurred!",
          topRecruitersLoading: false,
        });

        if (!axios.isAxiosError(err)) {
          toast.error("Unexpected error occurred!");
        }
      }
    },
  })
);

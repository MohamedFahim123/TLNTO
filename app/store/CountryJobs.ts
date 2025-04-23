import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl, MainRegion } from "../utils/mainData";

export interface Company {
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
export interface CountryJobs {
  id: number;
  name: string;
  country_id: number;
  country: string;
  code: string;
  image: string;
  companies: Company[];
  companies_count: number;
  jobs_count: number;
}

export interface UseCountryJobsStoreIterface {
  countryJobs: CountryJobs[];
  countryJobsError: unknown;
  countryJobsLoading: boolean;
  getCountryJobs: (Region: string) => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useCountryJobsStore = create<UseCountryJobsStoreIterface>(
  (set) => ({
    countryJobs: [],
    countryJobsError: null,
    countryJobsLoading: false,
    getCountryJobs: async (Region: string) => {
      const currentTime: number = new Date().getTime();
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ countryJobsLoading: true });

      try {
        const res = await axios.get(
          `${baseUrl}/country-jobs?t=${currentTime}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Code: Region ? Region : MainRegion,
            },
          }
        );

        const countryJobs = res?.data?.data || [];
        lastFetchedTime = currentTime;

        set({
          countryJobs,
          countryJobsError: null,
          countryJobsLoading: false,
        });
      } catch (err) {
        set({
          countryJobs: [],
          countryJobsError: axios.isAxiosError(err)
            ? err?.response?.data?.message || "Error fetching countryJobs"
            : "Unexpected error occurred!",
          countryJobsLoading: false,
        });

        if (!axios.isAxiosError(err)) {
          toast.error("Unexpected error occurred!");
        }
      }
    },
  })
);

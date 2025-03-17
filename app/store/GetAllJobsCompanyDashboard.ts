import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";
import { useTokenStore } from "./Token";

export interface JobTag {
  id: number;
  name: string;
  sub_category_id: number;
  sub_category_name: string;
}

export interface Job {
  id: number;
  name: string;
  description: string;
  employment_type_id: number;
  employment_type_name: string;
  location: string;
  status: string;
  salary: string;
  tags: JobTag[];
  currency: string;
  country_name: string;
  city_name: string;
  created_at: string;
  title: string;
  work_place_type_id: number;
  years_exp: string;
  company: {
    id: number;
    name: string;
    companyLogo: string;
  }
  work_place_type_name: string;
}

export interface UseJobsCompanyDashboardStoreIterface {
  companyDashboardJobs: Job[];
  companyDashboardJobsError: unknown;
  companyDashboardJobsLoading: boolean;
  cacheToken: () => Promise<void>;
  token: string | null;
  getCompanyDashboardJobs: () => Promise<void>;
  clearCache: () => void;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useJobsCompanyDashboardStore =
  create<UseJobsCompanyDashboardStoreIterface>((set) => ({
    companyDashboardJobs: [],
    companyDashboardJobsError: null,
    companyDashboardJobsLoading: false,
    token: null,
    cacheToken: async () => {
      try {
        const tokenResponse = await axios.get("/api/get-token");
        const token = tokenResponse?.data?.token;
        set({ token });
      } catch (err) {
        if (axios.isAxiosError(err)) {
          set({
            companyDashboardJobsError: "Error fetching token or login type",
          });
          toast.error("Error fetching token or login type");
          return;
        }
      }
    },

    clearCache: () => set({ token: null }),

    getCompanyDashboardJobs: async () => {
      const currentTime: number = new Date().getTime();

      const { token } = useTokenStore.getState();

      if (!token) {
        return;
      }

      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ companyDashboardJobsLoading: true });

      try {
        const res = await axios.get(`${baseUrl}/company/all-jobs?t=${currentTime}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const companyDashboardJobs = res?.data?.data?.jobs || [];
        lastFetchedTime = currentTime;

        set({
          companyDashboardJobs,
          companyDashboardJobsError: null,
          companyDashboardJobsLoading: false,
        });
      } catch (err) {
        set({
          companyDashboardJobs: [],
          companyDashboardJobsError: axios.isAxiosError(err)
            ? err?.response?.data?.message ||
              "Error fetching companyDashboardJobs"
            : "Unexpected error occurred!",
          companyDashboardJobsLoading: false,
        });

        if (!axios.isAxiosError(err)) {
          toast.error("Unexpected error occurred!");
        }
      }
    },
  }));

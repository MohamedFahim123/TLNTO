import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

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
  title: string;
  work_place_type_id: number;
  work_place_type_name: string;
}

export interface UseJobsCompanyDashboardStoreIterface {
  companyDashboardJobs: Job[];
  companyDashboardJobsError: unknown;
  companyDashboardJobsLoading: boolean;
  getCompanyDashboardJobs: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useJobsCompanyDashboardStore =
  create<UseJobsCompanyDashboardStoreIterface>((set) => ({
    companyDashboardJobs: [],
    companyDashboardJobsError: null,
    companyDashboardJobsLoading: false,
    getCompanyDashboardJobs: async () => {
      const currentTime: number = new Date().getTime();
      const tokenResponse = await axios.get("/api/get-token");
      const token: string = tokenResponse?.data?.token;
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ companyDashboardJobsLoading: true });

      try {
        const res = await axios.get(
          `${baseUrl}/company/all-jobs?t=${currentTime}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

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

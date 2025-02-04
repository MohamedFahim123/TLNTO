import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface EmploymentType {
  id: number;
  name: string;
}

export interface UseEmploymentTypeStoreIterface {
  employmentTypes: EmploymentType[];
  employmentTypesError: unknown;
  employmentTypesLoading: boolean;
  getEmploymentTypes: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useEmploymentTypesStore = create<UseEmploymentTypeStoreIterface>(
  (set) => ({
    employmentTypes: [],
    employmentTypesError: null,
    employmentTypesLoading: false,
    getEmploymentTypes: async () => {
      const currentTime: number = new Date().getTime();
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ employmentTypesLoading: true });

      try {
        const res = await axios.get(
          `${baseUrl}/employment-types?t=${currentTime}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const employmentTypes = res?.data?.data || [];
        lastFetchedTime = currentTime;

        set({
          employmentTypes,
          employmentTypesError: null,
          employmentTypesLoading: false,
        });
      } catch (err) {
        set({
          employmentTypes: [],
          employmentTypesError: axios.isAxiosError(err)
            ? err?.response?.data?.message || "Error fetching employmentTypes"
            : "Unexpected error occurred!",
          employmentTypesLoading: false,
        });

        if (!axios.isAxiosError(err)) {
          toast.error("Unexpected error occurred!");
        }
      }
    },
  })
);

import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface YearEXP {
  id: number;
  name: string;
}

export interface UseYearEXPStoreIterface {
  yearEXPs: YearEXP[];
  yearEXPsError: unknown;
  yearEXPsLoading: boolean;
  getYearEXPs: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useYearEXPStore = create<UseYearEXPStoreIterface>((set) => ({
  yearEXPs: [],
  yearEXPsError: null,
  yearEXPsLoading: false,
  getYearEXPs: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    set({ yearEXPsLoading: true });

    try {
      const res = await axios.get(`${baseUrl}/exp-years?t=${currentTime}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const yearEXPs = res?.data?.data || [];
      lastFetchedTime = currentTime;

      set({
        yearEXPs,
        yearEXPsError: null,
        yearEXPsLoading: false,
      });
    } catch (err) {
      set({
        yearEXPs: [],
        yearEXPsError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching yearEXPs"
          : "Unexpected error occurred!",
        yearEXPsLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

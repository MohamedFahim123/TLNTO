import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface Industry {
  id: number;
  name: string;
}

export interface UseIndustryStoreIterface {
  industries: Industry[];
  industriesError: unknown;
  industriesLoading: boolean;
  getIndustries: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useIndustriesStore = create<UseIndustryStoreIterface>((set) => ({
  industries: [],
  industriesError: null,
  industriesLoading: false,
  getIndustries: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    set({ industriesLoading: true });

    try {
      const res = await axios.get(`${baseUrl}/industries?t=${currentTime}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const industries = res?.data?.data || [];
      lastFetchedTime = currentTime;

      set({
        industries,
        industriesError: null,
        industriesLoading: false,
      });
    } catch (err) {
      set({
        industries: [],
        industriesError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching industries"
          : "Unexpected error occurred!",
        industriesLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

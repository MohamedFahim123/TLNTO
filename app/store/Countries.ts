import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface Country {
  id: number;
  name: string;
  code: string;
  phone_code: string;
  flag: string;
}

export interface UseCountryStoreIterface {
  countries: Country[];
  countriesError: unknown;
  countriesLoading: boolean;
  getCountries: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useCountriesStore = create<UseCountryStoreIterface>((set) => ({
  countries: [],
  countriesError: null,
  countriesLoading: false,
  getCountries: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    set({ countriesLoading: true });

    try {
      const res = await axios.get(`${baseUrl}/countries?t=${currentTime}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const countries = res?.data?.data || [];
      lastFetchedTime = currentTime;

      set({
        countries,
        countriesError: null,
        countriesLoading: false,
      });
    } catch (err) {
      set({
        countries: [],
        countriesError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching Countries"
          : "Unexpected error occurred!",
        countriesLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

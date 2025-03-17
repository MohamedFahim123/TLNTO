import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl, MainRegion } from "../utils/mainData";
import Cookies from "js-cookie";
import { useCountriesStore } from "./Countries";

export interface CitiesInsideCurrRegion {
  id: number;
  name: string;
  code: string;
}

export interface UseCitiesInsideCurrRegionStoreIterface {
  citiesInsideCurrRegion: CitiesInsideCurrRegion[];
  citiesInsideCurrRegionError: unknown;
  citiesInsideCurrRegionLoading: boolean;
  currRegion: string;
  setCurrRegion: (currRegion: string) => void;
  getCitiesInsideCurrRegion: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useCitiesInsideCurrRegionStore =
  create<UseCitiesInsideCurrRegionStoreIterface>((set, get) => ({
    citiesInsideCurrRegion: [],
    citiesInsideCurrRegionError: null,
    citiesInsideCurrRegionLoading: false,
    currRegion: Cookies.get("region") || MainRegion,
    setCurrRegion: (currRegion: string) => {
      Cookies.set("region", currRegion);
      set({ currRegion });
    },
    getCitiesInsideCurrRegion: async () => {
      const currentTime: number = new Date().getTime();
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      const region = get().currRegion;
      const countries = useCountriesStore.getState().countries;
      const currCountry = countries.find((country) => country?.code === region);

      if (currCountry) {
        set({ citiesInsideCurrRegionLoading: true });
        try {
          const res = await axios.post(
            `${baseUrl}/cities?t=${currentTime}`,
            {
              country_id: currCountry?.id,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );

          const citiesInsideCurrRegion = res?.data?.data || [];
          lastFetchedTime = currentTime;

          set({
            citiesInsideCurrRegion,
            citiesInsideCurrRegionError: null,
            citiesInsideCurrRegionLoading: false,
          });
        } catch (err) {
          set({
            citiesInsideCurrRegion: [],
            citiesInsideCurrRegionError: axios.isAxiosError(err)
              ? err?.response?.data?.message ||
                "Error fetching CitiesInsideCurrRegion"
              : "Unexpected error occurred!",
            citiesInsideCurrRegionLoading: false,
          });

          if (!axios.isAxiosError(err)) {
            toast.error("Unexpected error occurred!");
          }
        }
      }
    },
  }));

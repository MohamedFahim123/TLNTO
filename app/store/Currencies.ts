import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface Currency {
  currencyId: number;
  currencyCode: string;
  currencySymbol: string;
  currencySymbolNative: string;
}

export interface UseCurrencyStoreIterface {
  currency: Currency[];
  currencyError: unknown;
  currencyLoading: boolean;
  getCurrency: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useCurrencyStore = create<UseCurrencyStoreIterface>((set) => ({
  currency: [],
  currencyError: null,
  currencyLoading: false,
  getCurrency: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    set({ currencyLoading: true });

    try {
      const res = await axios.get(`${baseUrl}/currencies?t=${currentTime}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const currency = res?.data?.data?.currencis || [];
      lastFetchedTime = currentTime;

      set({
        currency,
        currencyError: null,
        currencyLoading: false,
      });
    } catch (err) {
      set({
        currency: [],
        currencyError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching currency"
          : "Unexpected error occurred!",
        currencyLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface Category {
  id: number;
  name: string;
}

export interface UseCategoryStoreIterface {
  categories: Category[];
  categoriesError: unknown;
  categoriesLoading: boolean;
  getCategories: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useCategoriesStore = create<UseCategoryStoreIterface>((set) => ({
  categories: [],
  categoriesError: null,
  categoriesLoading: false,
  getCategories: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    set({ categoriesLoading: true });

    try {
      const res = await axios.get(`${baseUrl}/categories?t=${currentTime}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const categories = res?.data?.data || [];
      lastFetchedTime = currentTime;

      set({
        categories,
        categoriesError: null,
        categoriesLoading: false,
      });
    } catch (err) {
      set({
        categories: [],
        categoriesError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching categories"
          : "Unexpected error occurred!",
        categoriesLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

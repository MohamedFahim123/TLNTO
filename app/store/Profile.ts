import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface Profile {
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
}

export interface UseProfileStoreIterface {
  profile: Profile | null;
  profileError: unknown;
  profileLoading: boolean;
  getProfile: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useProfileStore = create<UseProfileStoreIterface>((set) => ({
  profile: null,
  profileError: null,
  profileLoading: false,
  getProfile: async () => {
    const currentTime: number = new Date().getTime();
    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      return;
    }

    const tokenRes = await axios.get("/api/get-token");
    const token: string = tokenRes?.data?.token;
    const loginTypeRes = await axios.get("/api/get-login-type");
    const loginType: string = loginTypeRes?.data?.loginType?.toLowerCase();

    set({ profileLoading: true });

    try {
      const res = await axios.get(
        `${baseUrl}/${loginType}/profile?t=${currentTime}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const profile = res?.data?.data?.company || null;
      lastFetchedTime = currentTime;

      set({
        profile,
        profileError: null,
        profileLoading: false,
      });
    } catch (err) {
      set({
        profile: null,
        profileError: axios.isAxiosError(err)
          ? err?.response?.data?.message || "Error fetching profile"
          : "Unexpected error occurred!",
        profileLoading: false,
      });

      if (!axios.isAxiosError(err)) {
        toast.error("Unexpected error occurred!");
      }
    }
  },
}));

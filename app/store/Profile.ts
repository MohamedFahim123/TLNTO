import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";
import { baseUrl } from "../utils/mainData";
import { useTokenStore } from "./Token";

export interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  country_id: number;
  first_name: string;
  last_name: string;
  exp: string;
  bio: string;
  image: string;
  video: string;
  country: string;
  city_id: number | string;
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
    const { token, loginType } = useTokenStore.getState();

    if (!token && !loginType) {
      return;
    }

    if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
      set({ profileLoading: false });
      return;
    }

    set({ profileLoading: true });

    try {
      const res = await axios.get(
        `${baseUrl}/${loginType?.toLowerCase()}/profile?t=${currentTime}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const profile = res?.data?.data[loginType?.toLowerCase()] || null;
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

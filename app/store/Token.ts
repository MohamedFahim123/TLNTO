import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";

export interface UseTokenStoreInterface {
  token: string | null;
  loginType: string | null;
  tokenLoading: boolean;
  tokenError: string | null;
  getToken: () => Promise<void>;
  clearToken: () => void;
}

export const useTokenStore = create<UseTokenStoreInterface>((set) => ({
  token: null,
  loginType: null,
  tokenLoading: false,
  tokenError: null,

  getToken: async () => {
    set({ tokenLoading: true });

    try {
      const tokenResponse = await axios.get("/api/get-token");
      const token = tokenResponse?.data?.token;
      const loginType = tokenResponse?.data?.loginType;

      set({
        token,
        loginType,
        tokenLoading: false,
        tokenError: null,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        set({
          token: null,
          loginType: null,
          tokenLoading: false,
          tokenError: "Error fetching token or login type",
        });
        toast.error("Error fetching token or login type");
      }
    }
  },

  clearToken: () => set({ token: null, loginType: null }),
}));

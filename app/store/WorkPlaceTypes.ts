import axios from "axios";
import { create } from "zustand";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/mainData";

export interface WorkPlace {
  id: number;
  name: string;
}

export interface UseWorkPlaceStoreIterface {
  workPlaceTypes: WorkPlace[];
  workPlaceTypesError: unknown;
  workPlaceTypesLoading: boolean;
  getWorkPlaceTypes: () => Promise<void>;
}

let lastFetchedTime: number = 0;
const CACHE_EXPIRATION_TIME: number = 15 * 60 * 1000;

export const useWorkPlaceTypesStore = create<UseWorkPlaceStoreIterface>(
  (set) => ({
    workPlaceTypes: [],
    workPlaceTypesError: null,
    workPlaceTypesLoading: false,
    getWorkPlaceTypes: async () => {
      const currentTime: number = new Date().getTime();
      if (currentTime - lastFetchedTime < CACHE_EXPIRATION_TIME) {
        return;
      }

      set({ workPlaceTypesLoading: true });

      try {
        const res = await axios.get(
          `${baseUrl}/work-place-types?t=${currentTime}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const workPlaceTypes = res?.data?.data || [];
        lastFetchedTime = currentTime;

        set({
          workPlaceTypes,
          workPlaceTypesError: null,
          workPlaceTypesLoading: false,
        });
      } catch (err) {
        set({
          workPlaceTypes: [],
          workPlaceTypesError: axios.isAxiosError(err)
            ? err?.response?.data?.message || "Error fetching work Place Types"
            : "Unexpected error occurred!",
          workPlaceTypesLoading: false,
        });

        if (!axios.isAxiosError(err)) {
          toast.error("Unexpected error occurred!");
        }
      }
    },
  })
);

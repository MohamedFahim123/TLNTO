"use server";

import { baseUrl } from "../utils/mainData";

interface FetchServerDataOptions extends RequestInit {
  next?: {
    revalidate?: number;
    tags?: string[];
  };
}

export async function fetchApi<T = unknown>(
  endpoint: string,
  options: FetchServerDataOptions = {},
  tags: string[] = []
): Promise<T> {
  const URL = `${baseUrl}/${endpoint}`;

  const apiOptions: FetchServerDataOptions = {
    cache: "force-cache",
    next: {
      revalidate: 1,
      tags: tags,
    },
    ...options,
  };

  try {
    const res = await fetch(URL, apiOptions);

    const data: T = await res.json();
    return data;
  } catch (error) {
    console.error("fetchApi error:", error);
    throw error;
  }
}

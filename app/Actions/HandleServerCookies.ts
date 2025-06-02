"use server";

import { cookies } from "next/headers";

export const getServerCookies = async (name: string) => {
  const cookiesData = await cookies();
  const cookieToken: string = cookiesData.get(name)?.value || "";
  return cookieToken;
};
export const setServerCookies = async (name: string, value: string) => {
  const cookiesData = await cookies();
  cookiesData.set({
    value: value,
    name: name,
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 86400 * 30,
  });
};

export const removeServerCookies = async (name: string) => {
  const cookiesData = await cookies();
  cookiesData.delete(name);
};

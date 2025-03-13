"use client";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export default function Jobs() {
  const region: string = Cookies.get("region") || MainRegion;
  return redirect(`/${region}/jobs/home`);
}

"use client";

import Cookies from "js-cookie";
import { MainRegion } from "../utils/mainData";
import { redirect } from "next/navigation";

export default function RegionPage() {
  const Region = Cookies.get("region") || MainRegion;

  return redirect(`/${Region}/jobs/home`);
}

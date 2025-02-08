"use client";
import { MainRegion } from "@/app/utils/mainData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Jobs() {
  const region: string = Cookies.get("region") || MainRegion;
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (region) {
        router.push(`/${region}/jobs/home`);
      } else {
        router.push(`/${MainRegion}/jobs/home`);
      }
    })();
  }, [region, router]);
}

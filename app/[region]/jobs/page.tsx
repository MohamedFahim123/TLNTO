"use client";
import { MainRegion } from "@/app/utils/mainData";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Jobs({
  params,
}: {
  params: Promise<{ region?: string }>;
}) {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const resolvedParams = await params;
      if (resolvedParams.region) {
        router.push(`/${resolvedParams.region}/jobs/home`);
      } else {
        router.push(`/${MainRegion}/jobs/home`);
      }
    })();
  }, [params, router]);
}

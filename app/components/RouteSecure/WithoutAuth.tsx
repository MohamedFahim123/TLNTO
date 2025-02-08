"use client";

import { MainRegion } from "@/app/utils/mainData";
import { useRouter } from "next/navigation";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";

export default function WithoutAuth<T extends Record<string, unknown>>(
  WrappedComponent: ComponentType<T>
) {
  return function GuestComponent(props: T) {
    const [isChecking, setIsChecking] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
      async function checkAuth() {
        try {
          const response = await fetch("/api/check", {
            credentials: "include",
          });

          if (response.ok) {
            const Region: string = MainRegion;
            router.push(`/${Region}/dashboard`);
          } else {
            setIsChecking(false);
          }
        } catch (error) {
          console.error("Auth Check Failed:", error);
          setIsChecking(false);
        }
      }

      checkAuth();
    }, [router]);

    if (isChecking) {
      return;
    }

    return <WrappedComponent {...props} />;
  };
}

"use client";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";

const Region: string = Cookies.get("region") || MainRegion;

const companyRoutes = [
  `/${Region}/dashboard`,
  `/${Region}/dashboard/candidates`,
  `/${Region}/dashboard/my-jobs`,
  `/${Region}/dashboard/settings`,
  `/${Region}/dashboard/post-job`,
];

const userRoutes = [
  `/${Region}/dashboard/profile`,
  `/${Region}/dashboard/task-list`,
  `/${Region}/dashboard/my-journey`,
];

export default function WithAuth<T extends Record<string, unknown>>(
  WrappedComponent: ComponentType<T>
) {
  return function ProtectedComponent(props: T) {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      async function checkAuth() {
        try {
          const response = await fetch("/api/get-login-type", {
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();

            if (
              (data.loginType === "Company" && userRoutes.includes(pathname)) ||
              (data.loginType === "User" && companyRoutes.includes(pathname))
            ) {
              router.push(
                data.loginType === "Company"
                  ? `/${Region}/dashboard`
                  : `/${Region}/dashboard/profile`
              );
            } else {
              setIsAuthorized(true);
            }
          } else {
            setIsAuthorized(false);
            router.push(`/${Region}/auth/login`);
          }
        } catch (error) {
          console.error("Auth Check Failed:", error);
          setIsAuthorized(false);
          router.push(`/${Region}/auth/login`);
        }
      }

      checkAuth();
    }, [pathname, router]);

    if (isAuthorized === null) {
      return;
    }

    return <WrappedComponent {...props} />;
  };
}

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
  `/${Region}/dashboard/profile-settings`,
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
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
      async function checkAuth() {
        try {
          const response = await fetch("/api/get-token", {
            credentials: "include",
          });

          if (response.ok) {
            const { loginType } = await response.json();

            if (
              (loginType === "Company" && userRoutes.includes(pathname)) ||
              (loginType === "User" && companyRoutes.includes(pathname))
            ) {
              const newPath =
                loginType === "Company"
                  ? `/${Region}/dashboard`
                  : `/${Region}/dashboard/profile`;
              router.push(newPath);
              return;
            }

            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
            router.push(`/${Region}/auth/login`);
            return;
          }
        } catch (error) {
          console.error("Auth Check Failed:", error);
          setIsAuthorized(false);
          router.push(`/${Region}/auth/login`);
          return;
        } finally {
          setIsLoading(false);
        }
      }

      checkAuth();
    }, [pathname, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isAuthorized === false) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

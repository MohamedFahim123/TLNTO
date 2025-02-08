'use client'
import WithoutAuth from "@/app/components/RouteSecure/WithoutAuth";
import { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
export default WithoutAuth(AuthLayout);

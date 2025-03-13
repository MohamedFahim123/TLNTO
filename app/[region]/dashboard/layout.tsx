"use client";

import BurgerIcon from "@/app/components/Dashboard/BurgerIcon";
import Header from "@/app/components/Dashboard/Header";
import MobileMenu from "@/app/components/Dashboard/MobileMenu";
import PageHead from "@/app/components/Dashboard/PageHead";
import Sidebar from "@/app/components/Dashboard/Sidebar";
import WithAuth from "@/app/components/RouteSecure/WithAuth";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import styles from "./dashboardStyles.module.css";

function DashboardLayout({ children }: PropsWithChildren) {
  const pathName = usePathname();
  const [isToggled, setToggled] = useState<boolean>(false);

  const handleToggle = () => {
    setToggled(!isToggled);
    if (!isToggled) {
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.classList.remove("mobile-menu-active");
    }
  };

  return (
    <>
      <PageHead headTitle={pathName.toLowerCase()} />
      <div className="body-overlay-1" onClick={handleToggle} />
      <Header />
      <BurgerIcon handleToggle={handleToggle} isToggled={isToggled} />
      <MobileMenu isToggled={isToggled} />
      <main className="container-fluid">
        <div className="row">
          <Sidebar />
          <div
            className={`col-lg-10 col-md-9 d-flex flex-column justify-content-between ${styles.backgroundGray} py-3`}
          >
            <div className="container">
              <div className="row">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default WithAuth(DashboardLayout);

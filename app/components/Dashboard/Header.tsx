"use client";

import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./dashboardStyles.module.css";
import { MainRegion } from "@/app/utils/mainData";

function Header() {
  const [scroll, setScroll] = useState<boolean | 0>(0);
  const region: string = Cookies.get("region") || MainRegion;
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`header sticky-bar ${scroll ? "stick" : ""} ${
          styles.myHeader
        }`}
      >
        <div className="container-fluid">
          <div className="main-header d-flex justify-content-between align-items-center h-100">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <Image
                    width={100}
                    height={30}
                    alt="jobBox"
                    src="/assets/imgs/template/logo.svg"
                  />
                </Link>
              </div>
              <span className="btn btn-grey-small ml-10">
                Company Dashboard
              </span>
            </div>
            <div className="header-menu d-none d-md-block">
              <ul
                className={`${styles.navLinks} d-flex justify-content-between align-items-center`}
              >
                <li>
                  <Link href={`/${region}/home`}>Home </Link>
                </li>
                <li>
                  <Link href="/">About us </Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="block-signin d-flex justify-content-between align-items-center gap-4">
                <Link
                  className="btn btn-default icon-edit hover-up"
                  href={`/${region}/dashboard/post-job`}
                >
                  Post Job
                </Link>

                <div className="member-login d-flex justify-content-between align-items-center gap-2">
                  <Image
                    width={50}
                    height={50}
                    alt="jobImg"
                    src="/assets/imgs/page/dashboard/profile.png"
                  />
                  <div className="info-member">
                    <strong className="color-brand-1">Steven Jobs</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

"use client";

import { useCountriesStore } from "@/app/store/Countries";
import { useEmploymentTypesStore } from "@/app/store/EmployMentTypes";
import { useJobsCompanyDashboardStore } from "@/app/store/GetAllJobsCompanyDashboard";
import { useIndustriesStore } from "@/app/store/Industries";
import { useCategoriesStore } from "@/app/store/MainCategories";
import { useProfileStore } from "@/app/store/Profile";
import { useWorkPlaceTypesStore } from "@/app/store/WorkPlaceTypes";
import { MainRegion } from "@/app/utils/mainData";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./dashboardStyles.module.css";

function Header() {
  const [scroll, setScroll] = useState<boolean | 0>(0);
  const region: string = Cookies.get("region") || MainRegion;
  const [loginTypeState, setLoginTypeState] = useState<string>("");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const { countries, getCountries, countriesLoading } = useCountriesStore();
  const { profile, getProfile, profileLoading } = useProfileStore();
  const { industries, getIndustries, industriesLoading } = useIndustriesStore();
  const {
    companyDashboardJobs,
    getCompanyDashboardJobs,
    companyDashboardJobsLoading,
  } = useJobsCompanyDashboardStore();
  const { employmentTypesLoading, getEmploymentTypes, employmentTypes } =
    useEmploymentTypesStore();
  const { workPlaceTypes, getWorkPlaceTypes, workPlaceTypesLoading } =
    useWorkPlaceTypesStore();
  const { categories, getCategories, categoriesLoading } = useCategoriesStore();

  const getAllCountries = useCallback(() => {
    if (countries.length === 0 && !countriesLoading) {
      getCountries();
    }
  }, [getCountries, countriesLoading, countries.length]);

  const getAllIndustries = useCallback(() => {
    if (industries.length === 0 && !industriesLoading) {
      getIndustries();
    }
  }, [getIndustries, industriesLoading, industries.length]);

  const getAllemploymentTypes = useCallback(() => {
    if (employmentTypes.length === 0 && !employmentTypesLoading) {
      getEmploymentTypes();
    }
  }, [getEmploymentTypes, employmentTypesLoading, employmentTypes.length]);

  const getAllWorkPlaceTypes = useCallback(() => {
    if (workPlaceTypes.length === 0 && !workPlaceTypesLoading) {
      getWorkPlaceTypes();
    }
  }, [getWorkPlaceTypes, workPlaceTypesLoading, workPlaceTypes.length]);

  const getAllCategories = useCallback(() => {
    if (categories.length === 0 && !categoriesLoading) {
      getCategories();
    }
  }, [getCategories, categoriesLoading, categories.length]);

  const getAllCompanyDashboardJobs = useCallback(() => {
    if (companyDashboardJobs.length === 0 && !companyDashboardJobsLoading) {
      getCompanyDashboardJobs();
    }
  }, [
    getCompanyDashboardJobs,
    companyDashboardJobsLoading,
    companyDashboardJobs.length,
  ]);

  const getProfileData = useCallback(() => {
    if (!profileLoading) {
      getProfile();
    }
  }, [getProfile, profileLoading]);

  useEffect(() => {
    (async () => {
      const loginType = await axios.get("/api/get-login-type");
      setLoginTypeState(loginType?.data?.loginType);
    })();
  }, []);

  useEffect(() => {
    getAllCountries();
    getAllIndustries();
    getAllemploymentTypes();
    getAllWorkPlaceTypes();
    getAllCategories();
    getProfileData();
    if (loginTypeState === "Company") {
      getAllCompanyDashboardJobs();
    }
  }, [
    getAllCountries,
    getProfileData,
    getAllCategories,
    getAllIndustries,
    getAllWorkPlaceTypes,
    getAllemploymentTypes,
    getAllCompanyDashboardJobs,
    loginTypeState,
  ]);

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
                {loginTypeState} Dashboard
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
                {!(loginTypeState === "User") && (
                  <Link
                    className="btn btn-default icon-edit hover-up"
                    href={`/${region}/dashboard/post-job`}
                  >
                    Post Job
                  </Link>
                )}

                <div className="member-login d-flex justify-content-between align-items-center gap-2">
                  <Image
                    width={50}
                    height={50}
                    alt="jobImg"
                    className="rounded-circle"
                    style={{ objectFit: "contain" }}
                    src={
                      loginTypeState === "Company"
                        ? profile?.companyLogo !== "N/A"
                          ? profile?.companyLogo ||
                            "/assets/imgs/page/homepage1/user1.png"
                          : "/assets/imgs/page/homepage1/user1.png"
                        : profile?.image !== "N/A"
                        ? profile?.image ||
                          "/assets/imgs/page/homepage1/user1.png"
                        : "/assets/imgs/page/homepage1/user1.png"
                    }
                  />
                  <div className="info-member">
                    <strong className="color-brand-1">
                      {loginTypeState === "Company"
                        ? profile?.name
                          ? profile?.name
                          : "Company Name"
                        : profile?.first_name
                        ? profile?.first_name + " " + profile?.last_name
                        : "User Name"}
                    </strong>
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

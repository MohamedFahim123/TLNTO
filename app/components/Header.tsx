﻿"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { Country, useCountriesStore } from "../store/Countries";
import { useEmploymentTypesStore } from "../store/EmployMentTypes";
import { useIndustriesStore } from "../store/Industries";
import { useCategoriesStore } from "../store/MainCategories";
import { useTokenStore } from "../store/Token";
import { useWorkPlaceTypesStore } from "../store/WorkPlaceTypes";
import { MainRegion } from "../utils/mainData";
import axios from "axios";
import { toast } from "react-toastify";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  openClass: string;
}

const Header = ({ handleOpen, handleRemove, openClass }: HeaderProps) => {
  const [scroll, setScroll] = useState<number | boolean>(0);
  const router = useRouter();
  const Region: string = Cookies.get("region") || MainRegion;
  const [userLoginned, setUserLoginned] = useState<boolean>(false);
  const pathname = usePathname();
  const { countries, getCountries, countriesLoading } = useCountriesStore();
  const { industries, getIndustries, industriesLoading } = useIndustriesStore();
  const { employmentTypesLoading, getEmploymentTypes, employmentTypes } =
    useEmploymentTypesStore();
  const { workPlaceTypes, getWorkPlaceTypes, workPlaceTypesLoading } =
    useWorkPlaceTypesStore();
  const { getToken, tokenLoading, token } = useTokenStore();
  const { categories, getCategories, categoriesLoading } = useCategoriesStore();
  const [activeRegion, setActiveRegion] = useState<Country>({
    name: Region,
    code: Region,
    logo: "",
    id: Math.random(),
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getCurrMainValues = useCallback(() => {
    if (!token && !tokenLoading) {
      getToken();
    }
  }, [getToken, tokenLoading, token]);

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

  useEffect(() => {
    getAllCountries();
    getAllIndustries();
    getAllemploymentTypes();
    getAllWorkPlaceTypes();
    getAllCategories();
    getCurrMainValues();
  }, [
    getAllCountries,
    getAllIndustries,
    getAllWorkPlaceTypes,
    getAllemploymentTypes,
    getAllCategories,
    getCurrMainValues,
  ]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  useEffect(() => {
    if (token) {
      setUserLoginned(true);
    } else {
      setUserLoginned(false);
    }
  }, [token]);

  const handleLogout = async () => {
    const loader = toast.loading("Logging out...");
    try {
      const res = await axios.post("/api/logout");
      toast.dismiss(loader);
      toast.success(res?.data?.message);
      window.location.reload();
    } catch (error) {
      toast.dismiss(loader);
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  const handleRegionChange = (el: Country) => {
    setActiveRegion(el);
    setIsOpen(false);
    router.replace(`/${el.code}/jobs/home`);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const region = document.getElementById("region");
    const regionDropdown = document.getElementById("regionDropdown");
    if (
      regionDropdown &&
      !regionDropdown.contains(e.target as Node) &&
      region &&
      !region.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={scroll ? "header sticky-top" : "header"}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="header-logo">
                <Link legacyBehavior href={`/${Region}/jobs/home`}>
                  <a className="d-flex">
                    <Image
                      width={80}
                      height={30}
                      alt="jobBox"
                      src="/assets/imgs/template/logo.svg"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <nav className="nav-main-menu">
                <ul className="d-flex list-unstyled mb-0">
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/find-job` ? "active" : ""
                      }
                      href={`/${Region}/jobs/find-job`}
                    >
                      Find a Job
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/recruiters`
                          ? "active"
                          : ""
                      }
                      href={`/${Region}/jobs/recruiters`}
                    >
                      Recruiters
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/advicev` ? "active" : ""
                      }
                      href={`/${Region}/advicev`}
                    >
                      Advicev
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/about-us` ? "active" : ""
                      }
                      href={`/${Region}/jobs/about-us`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link legacyBehavior href={`/${Region}/jobs/pricing-plan`}>
                      <a
                        className={
                          pathname === `/${Region}/jobs/pricing-plan`
                            ? "active"
                            : ""
                        }
                      >
                        Pricing Plan
                      </a>
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/blogs` ? "active" : ""
                      }
                      href={`/${Region}/jobs/blogs`}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className={
                        pathname === `/${Region}/jobs/contact-us`
                          ? "active"
                          : ""
                      }
                      href={`/${Region}/jobs/contact-us`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon ${openClass && "burger-close"}`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="d-flex align-items-center position-relative">
              <button
                type="button"
                id="regionDropdown"
                onClick={() => setIsOpen(!isOpen)}
                className="d-flex align-items-center btn btn-light"
              >
                <Image
                  src={activeRegion.logo}
                  alt={activeRegion.name}
                  width={15}
                  height={15}
                  className="me-1"
                />
              </button>
              {isOpen && (
                <ul
                  className="bg-white shadow-lg rounded position-absolute top-100 end-0 mt-2 p-2"
                  id="region"
                  style={{
                    maxHeight: "500px",
                    overflow: "auto",
                    zIndex: "100",
                  }}
                >
                  {countries?.length &&
                    countries.map((country) => (
                      <li
                        key={country.id}
                        onClick={() => handleRegionChange(country)}
                        className="py-2 cursor-pointer"
                      >
                        {country.logo && (
                          <Image
                            src={country.logo}
                            alt={country.name}
                            width={15}
                            height={15}
                            className="me-2"
                          />
                        )}
                        {country.name}
                      </li>
                    ))}
                </ul>
              )}
              <div className="block-signin">
                {!userLoginned ? (
                  <>
                    <Link legacyBehavior href={`/${Region}/auth/login`}>
                      <a className="btn btn-default btn-shadow ml-40 hover-up">
                        Sign in
                      </a>
                    </Link>
                  </>
                ) : (
                  <>
                    <BiLogOut
                      size={40}
                      onClick={handleLogout}
                      className="logout-btn curosor-pointer me-3"
                    />

                    <Link href={`/${Region}/dashboard`}>
                      <RxAvatar size={35} className="cursor-pointer" />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);

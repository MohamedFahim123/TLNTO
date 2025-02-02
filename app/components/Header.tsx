"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { MainRegion } from "../utils/mainData";
import { useCountriesStore } from "../store/Countries";
import { useIndustriesStore } from "../store/Industries";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  openClass: string;
}

const Header = ({ handleOpen, handleRemove, openClass }: HeaderProps) => {
  const [scroll, setScroll] = useState<number | boolean>(0);
  const Region: string = Cookies.get("region") || MainRegion;
  const pathname = usePathname();
  const { countries, getCountries, countriesLoading } = useCountriesStore();
  const { industries, getIndustries, industriesLoading } = useIndustriesStore();

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

  useEffect(() => {
    getAllCountries();
    getAllIndustries();
  }, [getAllCountries, getAllIndustries]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <>
      <header
        className={scroll ? "header sticky-bar stick" : "header sticky-bar"}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link legacyBehavior href={`/${Region}/jobs/home`}>
                  <a className="d-flex">
                    {pathname.includes("/auth") ? (
                      <Image
                        width={80}
                        height={30}
                        alt="jobBox"
                        src="/assets/imgs/template/logo.svg"
                      />
                    ) : (
                      <Image
                        width={80}
                        height={30}
                        alt="jobBox"
                        src="/assets/imgs/template/logo.svg"
                      />
                    )}
                  </a>
                </Link>
              </div>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu">
                <ul className="main-menu">
                  <li>
                    <Link
                      legacyBehavior
                      href={`/${Region}/jobs/home`}
                      className={"active"}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/find-job`}>
                      Find a Job
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/recruiters`}>
                      Recruiters
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/candidates`}>
                      Candidates
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link legacyBehavior href={`/${Region}/jobs/about-us`}>
                      Pages
                    </Link>

                    <ul className="sub-menu">
                      <li>
                        <Link legacyBehavior href={`/${Region}/jobs/about-us`}>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href={`/${Region}/jobs/pricing-plan`}
                        >
                          <a>Pricing Plan</a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          legacyBehavior
                          href={`/${Region}/jobs/content-protected`}
                        >
                          Content Protected
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/blogs`}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/contact-us`}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
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
            <div className="header-right">
              <div className="block-signin">
                <Link legacyBehavior href={`/${Region}/auth/register`}>
                  <a className="text-link-bd-btom hover-up">Register</a>
                </Link>
                <Link legacyBehavior href={`/${Region}/auth/login`}>
                  <a className="btn btn-default btn-shadow ml-40 hover-up">
                    Sign in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);

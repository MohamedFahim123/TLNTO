import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MainRegion } from "../utils/mainData";
import { usePathname } from "next/navigation";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  openClass: string;
}

const Header = ({ handleOpen, handleRemove, openClass }: HeaderProps) => {
  const [scroll, setScroll] = useState<number | boolean>(0);
  const Region: string = Cookies.get("region") || MainRegion;
  const pathname = usePathname();

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
                  <li>
                    <Link legacyBehavior href="/">
                      Pages
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href={`/${Region}/jobs/blogs`}>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      Contact
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
                <Link legacyBehavior href="/">
                  <a className="text-link-bd-btom hover-up">Register</a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="btn btn-default btn-shadow ml-40 hover-up">
                    Sign in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link
                        legacyBehavior
                        href={`/${Region}/jobs/home`}
                        className="active"
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
                    <li>
                      <Link legacyBehavior href="/">
                        Pages
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/blogs`}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Work Preferences</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Account Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Go Pro</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Sign Out</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="site-copyright">
                Copyright 2022 © JobBox. <br />
                Designed by AliThemes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-search mobile-header-border mb-30">
                <form action="#">
                  <input type="text" placeholder="Search…" />
                  <i className="fi-rr-search" />
                </form>
              </div>
              <div className="mobile-menu-wrap mobile-header-border">
                {/* mobile menu start*/}
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link
                        legacyBehavior
                        href={`/${Region}/jobs/home`}
                        className="active"
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
                    <li>
                      <Link legacyBehavior href="/">
                        Pages
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/blogs`}>
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Profile</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Work Preferences</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Account Settings</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="">
                      <a>Go Pro</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Sign Out</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="site-copyright">
                Copyright 2022 © JobBox. <br />
                Designed by AliThemes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);

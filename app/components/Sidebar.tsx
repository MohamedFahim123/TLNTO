import Cookies from "js-cookie";
import Link from "next/link";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MainRegion } from "../utils/mainData";

const Sidebar = ({ openClass }: { openClass: string }) => {
  const Region: string = Cookies.get("region") || MainRegion;

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/home`}>
                        <a className="active">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/find-job`}>
                        <a>Find a Job</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/recruiters`}>
                        <a>Recruiters</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/about-us`}>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/contact-us`}>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href={`/${Region}/jobs/contact-us`}>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
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
      </div>
    </>
  );
};

export default React.memo(Sidebar);

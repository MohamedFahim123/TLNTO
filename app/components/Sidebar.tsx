import Cookies from "js-cookie";
import Link from "next/link";
import React, { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MainRegion } from "../utils/mainData";

const Sidebar = ({ openClass }: { openClass: string }) => {
  const [isActive, setIsActive] = useState<{
    status: boolean;
    key?: string | number;
  }>({
    status: false,
    key: "",
  });
  const Region: string = Cookies.get("region") || MainRegion;

  const handleToggle = (key: string | number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                      <Link legacyBehavior href={`/${Region}/jobs/home`}>
                        <a className="active">Home</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                      <Link legacyBehavior href={`/${Region}/jobs/find-job`}>
                        <a>Find a Job</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                      <Link legacyBehavior href={`/${Region}/jobs/recruiters`}>
                        <a>Recruiters</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                      <Link legacyBehavior href={`/${Region}/jobs/candidates`}>
                        <a>Candidates</a>
                      </Link>
                    </li>
                    <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                      <span onClick={() => handleToggle(4)} className="menu-expand">
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link legacyBehavior href={`/${Region}/jobs/about-us`}>
                        <a>Pages</a>
                      </Link>
                      <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/about-us`}>
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/pricing-plan`}>
                            <a>Pricing Plan</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/content-protected`}>
                            Content Protected
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={isActive.key == 6 ? "has-children active" : "has-children"}>
                      <Link legacyBehavior href={`/${Region}/jobs/blogs`}>
                        <a>Blogs</a>
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
                {/* <ul className="mobile-menu font-heading"> */}
                <Link legacyBehavior href={`/${Region}/auth/register`}>
                  <a className="text-link-bd-btom hover-up">Register</a>
                </Link>
                <Link legacyBehavior href={`/${Region}/auth/login`}>
                  <a className="btn btn-default btn-shadow ml-40 hover-up">Sign in</a>
                </Link>
                {/* </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar);

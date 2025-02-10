"use client";

import { useTokenStore } from "@/app/store/Token";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu({ isToggled }: { isToggled: boolean }) {
  const pathName = usePathname();
  const region: string = Cookies.get("region") || MainRegion;
  const { loginType } = useTokenStore();

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${
          isToggled ? "sidebar-visible" : ""
        }`}
      >
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
                <nav>
                  <ul className="main-menu">
                    <li>
                      <Link
                        className={
                          pathName === `/${region}/dashboard`
                            ? "dashboard2 active"
                            : "dashboard2"
                        }
                        href={`/${region}/dashboard`}
                      >
                        <Image
                          width={200}
                          height={200}
                          src="/assets/imgs/page/dashboard/dashboard.svg"
                          alt="jobBox"
                        />
                        <span className="name">Dashboard</span>
                      </Link>
                    </li>

                    {loginType === "Compnay" && (
                      <>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/candidates`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/candidates`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/candidates.svg"
                              alt="jobBox"
                            />
                            <span className="name">Candidates</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/recruiters`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/recruiters`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/recruiters.svg"
                              alt="jobBox"
                            />
                            <span className="name">Recruiters</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/my-jobs`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/my-jobs`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/jobs.svg"
                              alt="jobBox"
                            />
                            <span className="name">My Jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/settings`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/settings`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/settings.svg"
                              alt="jobBox"
                            />
                            <span className="name">Setting</span>
                          </Link>
                        </li>
                      </>
                    )}

                    {loginType === "User" && (
                      <>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/profile`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/profile`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/profiles.svg"
                              alt="jobBox"
                            />
                            <span className="name">My Profiles</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/my-Journey`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/my-Journey`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/cv-manage.svg"
                              alt="jobBox"
                            />
                            <span className="name">My Journey</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              pathName === `/${region}/my-tasks`
                                ? "dashboard2 active"
                                : "dashboard2"
                            }
                            href={`/${region}/my-tasks`}
                          >
                            <Image
                              width={200}
                              height={200}
                              src="/assets/imgs/page/dashboard/tasks.svg"
                              alt="jobBox"
                            />
                            <span className="name">Tasks List</span>
                          </Link>
                        </li>
                      </>
                    )}

                    <li>
                      <Link
                        className={
                          pathName == "/authentication"
                            ? "dashboard2 active"
                            : "dashboard2"
                        }
                        href="/authentication"
                      >
                        <Image
                          width={200}
                          height={200}
                          src="/assets/imgs/page/dashboard/authentication.svg"
                          alt="jobBox"
                        />
                        <span className="name">Authentication</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <Link href="/#">Profile</Link>
                  </li>
                  <li>
                    <Link href="/#">Work Preferences</Link>
                  </li>
                  <li>
                    <Link href="/#">Account Settings</Link>
                  </li>
                  <li>
                    <Link href="/#">Go Pro</Link>
                  </li>
                  <li>
                    <Link href="/page-signin">Sign Out</Link>
                  </li>
                </ul>
                <div className="mb-15 mt-15">
                  <Link
                    className="btn btn-default icon-edit hover-up"
                    href="/post-job"
                  >
                    Post Job
                  </Link>
                </div>
              </div> */}
              <div className="site-copyright">
                Copyright {new Date().getFullYear()} © JobBox. <br />
                Designed by AliThemes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;

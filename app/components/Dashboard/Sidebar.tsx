"use client";

import { useTokenStore } from "@/app/store/Token";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./dashboardStyles.module.css";

function Sidebar() {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const pathName = usePathname();
  const currRegion: string = Cookies.get("region") || MainRegion;
  const { loginType } = useTokenStore();

  return (
    <>
      <div
        className={`nav p-3 col-lg-2 col-md-3 ${isToggled ? "close-nav" : ""}`}
      >
        <button
          type="button"
          title="collapse button"
          className={`btn btn-expanded position-absolute ${
            isToggled ? "btn-collapsed" : ""
          }`}
          onClick={toggleTrueFalse}
        />
        <nav className="nav-main-menu w-100">
          <ul className="main-menu">
            {loginType === "Company" && (
              <>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/dashboard.svg"
                      alt="jobBox"
                    />
                    <span className="name">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/candidates`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/candidates`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/candidates.svg"
                      alt="jobBox"
                    />
                    <span className="name">Candidates</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/my-jobs`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/my-jobs`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/jobs.svg"
                      alt="jobBox"
                    />
                    <span className="name">My Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/profile-settings`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/profile-settings`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/settings.svg"
                      alt="jobBox"
                    />
                    <span className="name">Profile Settings</span>
                  </Link>
                </li>
              </>
            )}

            {loginType === "User" && (
              <>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/profile`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/profile`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/profiles.svg"
                      alt="jobBox"
                    />
                    <span className="name">My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/my-journey`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/my-journey`}
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/assets/imgs/page/dashboard/cv-manage.svg"
                      alt="jobBox"
                    />
                    <span className="name">My Journey</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                      pathName === `/${currRegion}/dashboard/task-list`
                        ? `${styles.active}`
                        : ""
                    }`}
                    href={`/${currRegion}/dashboard/task-list`}
                  >
                    <Image
                      width={23}
                      height={23}
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
                className={`px-3 py-3 d-flex justify-content-start fs-6 fw-bold align-items-center gap-2 ${
                  pathName === `/${currRegion}/dashboard/authentication`
                    ? `${styles.active}`
                    : ""
                }`}
                href={`/${currRegion}/dashboard/authentication`}
              >
                <Image
                  width={23}
                  height={23}
                  src="/assets/imgs/page/dashboard/authentication.svg"
                  alt="jobBox"
                />
                <span className="name">Authentication</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

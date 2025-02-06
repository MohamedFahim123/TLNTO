"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CompanyRegisterForm from "./CompanyRegisterForm";
import styles from "./registerPage.module.css";
import UserRegisterForm from "./UserRegisterForm";
import axios from "axios";

export default function RegisterPage() {
  const [userLoginType, setUserLoginType] = useState<"User" | "Company">(
    "Company"
  );

  const handleUpdateUserLoginType = async (
    userLoginType: "User" | "Company"
  ) => {
    setUserLoginType(userLoginType);
  };

  useEffect(() => {
    (async () => {
      await axios.post(`/api/login-type`, { loginType: userLoginType });
    })();
  }, [userLoginType]);

  return (
    <section className="pt-100 login-register">
      <div className="container">
        <div className="row login-register-cover">
          <div className="col-lg-9 col-md-12 mx-auto border border-1 border-radius-20 shadow p-4">
            <ul className="d-flex align-items-center gap-3 fw-bold border-bottom mb-4">
              <li
                onClick={() => handleUpdateUserLoginType("User")}
                className={`${userLoginType === "User" ? styles.active : ""} ${
                  styles.cursorPointer
                }`}
              >
                User
              </li>
              <li
                onClick={() => handleUpdateUserLoginType("Company")}
                className={`${
                  userLoginType === "Company" ? styles.active : ""
                } ${styles.cursorPointer}`}
              >
                Company
              </li>
              <li></li>
            </ul>
            <p className="fs-4 fw-bold text-brand-2">Register </p>
            <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
            {userLoginType === "User" && (
              <UserRegisterForm userLoginType={userLoginType} />
            )}
            {userLoginType === "Company" && (
              <CompanyRegisterForm userLoginType={userLoginType} />
            )}
            {userLoginType === "User" && (
              <div className="text-center">
                <div className="divider-text-center my-3">
                  <span>Or continue with</span>
                </div>
                <button className="btn border-1 border border-radius-20 social-login hover-up mb-20">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/imgs/template/icons/icon-google.svg"
                    alt="jobbox"
                  />
                  <strong>Sign up with Google</strong>
                </button>
              </div>
            )}
          </div>
          <div className="img-1 d-none d-lg-block">
            <Image
              className="shape-1"
              src="/assets/imgs/page/login-register/img-1.svg"
              alt="JobBox"
              width={200}
              height={200}
            />
          </div>
          <div className="img-2">
            <Image
              src="/assets/imgs/page/login-register/img-2.svg"
              alt="JobBox"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

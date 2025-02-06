"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import styles from "./loginPage.module.css";
import axios from "axios";

export default function LoginPage() {
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
    <section className="pt-50 login-register">
      <div className="container">
        <div className="row login-register-cover">
          <div className="col-lg-5 col-md-6 mx-auto border border-1 border-radius-20 shadow p-4">
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
            <p className="font-sm text-brand-2">Welcome back!</p>
            <h2 className="mt-10 mb-5 text-brand-1">{userLoginType} Login</h2>
            <LoginForm userLoginType={userLoginType} />
            {userLoginType === "User" && (
              <div className="text-center">
                <div className="divider-text-center my-3">
                  <span>Or continue with</span>
                </div>
                <button className="btn social-login border-1 border border-radius-20 hover-up mb-20">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/imgs/template/icons/icon-google.svg"
                    alt="jobbox"
                  />
                  <strong>Sign in with Google</strong>
                </button>
              </div>
            )}
          </div>
          <div className="img-1 d-none d-lg-block">
            <Image
              width={200}
              height={200}
              className="shape-1"
              src="/assets/imgs/page/login-register/img-4.svg"
              alt="JobBox"
            />
          </div>
          <div className="img-2">
            <Image
              width={200}
              height={200}
              src="/assets/imgs/page/login-register/img-3.svg"
              alt="JobBox"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

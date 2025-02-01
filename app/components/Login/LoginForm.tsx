"use client";

import { CompanyAndUserLoginForm } from "@/app/[region]/auth/utils/interface";
import { AuthUrls } from "@/app/[region]/auth/utils/URLS";
import { MainRegion } from "@/app/utils/mainData";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm({
  userLoginType,
}: {
  userLoginType: "User" | "Company";
}) {
  const Region: string = Cookies.get("region") || MainRegion;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompanyAndUserLoginForm>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<CompanyAndUserLoginForm> = async (
    data: CompanyAndUserLoginForm
  ) => {
    const URL: string =
      userLoginType === "User" ? AuthUrls.userLogin : AuthUrls.companyLogin;
    try {
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="login-register text-start mt-20"
    >
      <div className="form-group">
        <label className="form-label" htmlFor="CompanyLoginEmail">
          Email *
        </label>
        <input
          className="form-control"
          {...register("email", { required: true })}
          id="CompanyLoginEmail"
          type="email"
          placeholder="Company@email.com"
        />
        {errors.email && (
          <div className="text-danger text-small">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="CompanyLoginpassword">
          Password *
        </label>
        <input
          className="form-control"
          {...register("password", { required: true })}
          id="CompanyLoginpassword"
          type={showPassword ? "text" : "password"}
          placeholder="**********"
        />
        {errors.password && (
          <div className="text-danger text-small">
            {errors.password.message}
          </div>
        )}
        {showPassword ? (
          <FaEyeSlash
            className="eye-icon login-eye"
            size={20}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            className="eye-icon login-eye"
            size={20}
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
      <div className="login_footer form-group d-flex justify-content-between">
        <label className="cb-container">
          <input type="checkbox" />
          <span className="text-small">Remenber me</span>
          <span className="checkmark" />
        </label>
        <Link legacyBehavior href="/page-contact">
          <a className="text-muted">Forgot Password</a>
        </Link>
      </div>
      <div className="form-group">
        <button
          className="btn btn-brand-1 hover-up w-100"
          type="submit"
          name="login"
          title={"login"}
          disabled={isSubmitting}
        >
          Login
        </button>
      </div>
      <div className="text-muted text-center">
        Don{"'"}t have an Account?
        <Link legacyBehavior href={`/${Region}/auth/register`}>
          <a>Sign up</a>
        </Link>
      </div>
    </form>
  );
}

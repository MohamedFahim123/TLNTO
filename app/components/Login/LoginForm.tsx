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
import { toast } from "react-toastify";

export default function LoginForm({
  userLoginType,
}: {
  userLoginType: "User" | "Company";
}) {
  const Region: string = Cookies.get("region") || MainRegion;
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyAndUserLoginForm>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit: SubmitHandler<CompanyAndUserLoginForm> = async (
    data: CompanyAndUserLoginForm
  ) => {
    const toastId = toast.loading("Submitting...");
    const URL: string =
      userLoginType === "User" ? AuthUrls.userLogin : AuthUrls.companyLogin;

    try {
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      toast.dismiss(toastId);
      toast.success(response?.data?.message || "Login Successful!", {
        autoClose: 1500,
      });

      const token: string = response?.data?.data?.token;
      if (token) {
        reset();
        await axios.post("/api/token", { token });
        window.location.pathname = `/${Region}/dashboard`
      }
    } catch (error) {
      toast.dismiss(toastId);

      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;

        if (errorResponse?.errors) {
          let firstErrorMessage = "";

          Object.keys(errorResponse.errors).forEach((field, index) => {
            const message = errorResponse.errors[field][0];

            if (index === 0) {
              firstErrorMessage = message;
            }

            setError(field as keyof CompanyAndUserLoginForm, {
              type: "server",
              message,
            });
          });

          toast.error(firstErrorMessage || "Login failed!", {
            autoClose: 1500,
          });
        } else {
          toast.error(errorResponse?.message || "Login Failed!", {
            autoClose: 1500,
          });
        }
      } else {
        toast.error("An unexpected error occurred!", { autoClose: 1500 });
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
          className={`form-control ${errors.email && "InputError"}`}
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
          className={`form-control ${errors.email && "InputError"}`}
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

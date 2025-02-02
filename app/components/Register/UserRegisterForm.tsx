"use client";
import Link from "next/link";
import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
import { UserRegisterFormInputs } from "@/app/[region]/auth/utils/interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthUrls } from "@/app/[region]/auth/utils/URLS";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function UserRegisterForm({
  userLoginType,
}: {
  userLoginType: string;
}) {
  const Region: string = Cookies.get("region") || MainRegion;
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterFormInputs>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<UserRegisterFormInputs> = async (
    data: UserRegisterFormInputs
  ) => {
    const toastId = toast.loading("Submitting...");

    const URL: string =
      userLoginType === "User"
        ? AuthUrls.userRegister
        : AuthUrls.companyRegister;

    try {
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      toast.update(toastId, {
        render: response?.data?.message || "Registration Successful!",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });

      const token: string = response?.data?.data?.token;
      if (token) {
        Cookies.set("TLNTO_TOKEN", token, {
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
          expires: 1,
        });
        window.location.href = `/${Region}/dashboard`;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;
        if (errorResponse?.errors) {
          Object.keys(errorResponse.errors).forEach((field) => {
            setError(field as keyof UserRegisterFormInputs, {
              type: "server",
              message: errorResponse.errors[field][0],
            });
            toast.update(toastId, {
              render: errorResponse.errors[field][0],
              type: "error",
              isLoading: false,
              autoClose: 1500,
            });
          });
        }
      } else {
        toast.update(toastId, {
          render: "An unexpected error occurred!",
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      }
    }
  };

  useEffect(() => {
    if (watch("password") !== watch("password_confirmation")) {
      setError("password_confirmation", { message: "Passwords doesn't match" });
    } else if (watch("password_confirmation") === watch("password")) {
      clearErrors("password_confirmation");
    }
  }, [watch("password_confirmation")]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="login-register text-start mt-20 row"
    >
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="UserRegisterFirstName">
          First Name *
        </label>
        <input
          className={`form-control ${errors.first_name && "InputError"}`}
          {...register("first_name", { required: true })}
          id="UserRegisterFirstName"
          type="text"
          placeholder="First Name"
        />
        {errors.first_name && (
          <div className="text-danger text-small">
            {errors.first_name.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="UserRegisterlastName">
          Last Name *
        </label>
        <input
          className={`form-control ${errors.last_name && "InputError"}`}
          {...register("last_name", { required: true })}
          id="UserRegisterlastName"
          type="text"
          placeholder="last Name"
        />
        {errors.last_name && (
          <div className="text-danger text-small">
            {errors.last_name.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="UserRegisterEmail">
          Email *
        </label>
        <input
          className={`form-control ${errors.email && "InputError"}`}
          {...register("email", { required: true })}
          id="UserRegisterEmail"
          type="email"
          placeholder="User@email.com"
        />
        {errors.email && (
          <div className="text-danger text-small">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="UserRegisterPhone">
          Phone Number *
        </label>
        <input
          className={`form-control ${errors.phone && "InputError"}`}
          {...register("phone", { required: true })}
          id="UserRegisterPhone"
          type="text"
          placeholder="Phone Number"
        />
        {errors.phone && (
          <div className="text-danger text-small">{errors.phone.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="UserRegisterpassword">
          Password *
        </label>
        <input
          className={`form-control ${errors.password && "InputError"}`}
          {...register("password", { required: true })}
          id="UserRegisterpassword"
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
            className="eye-icon"
            size={20}
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            className="eye-icon"
            size={20}
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
      <div className="form-group col-lg-6">
        <label
          className="form-label"
          htmlFor="UserRegisterpassword_confirmation"
        >
          password_confirmation *
        </label>
        <input
          className={`form-control ${
            errors.password_confirmation && "InputError"
          }`}
          {...register("password_confirmation", { required: true })}
          id="UserRegisterpassword_confirmation"
          type={showPasswordConfirm ? "text" : "password"}
          placeholder="**********"
        />
        {errors.password_confirmation && (
          <div className="text-danger text-small">
            {errors.password_confirmation.message}
          </div>
        )}
        {showPasswordConfirm ? (
          <FaEyeSlash
            className="eye-icon"
            size={20}
            onClick={() => setShowPasswordConfirm(false)}
          />
        ) : (
          <FaEye
            className="eye-icon"
            size={20}
            onClick={() => setShowPasswordConfirm(true)}
          />
        )}
      </div>
      <div className="form-group col-12 mt-4 text-center">
        <button
          className="btn btn-brand-1 hover-up px-5"
          type="submit"
          title="Submit &amp; Register"
          disabled={isSubmitting}
          name="User register button"
        >
          Submit &amp; Register
        </button>
      </div>
      <div className="text-muted text-center">
        Already have an account?
        <Link legacyBehavior href={`/${Region}/auth/login`}>
          <a>Sign in</a>
        </Link>
      </div>
    </form>
  );
}

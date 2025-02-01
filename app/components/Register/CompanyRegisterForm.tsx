"use client";
import { CompanyRegisterFrom } from "@/app/[region]/auth/utils/interface";
import { AuthUrls } from "@/app/[region]/auth/utils/URLS";
import { MainRegion } from "@/app/utils/mainData";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function CompanyRegisterForm({
  userLoginType,
}: {
  userLoginType: "User" | "Company";
}) {
  const Region: string = Cookies.get("region") || MainRegion;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompanyRegisterFrom>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);

  const onSubmit: SubmitHandler<CompanyRegisterFrom> = async (
    data: CompanyRegisterFrom
  ) => {
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
      className="login-register text-start mt-20 row"
    >
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterName">
          Company Name *
        </label>
        <input
          className="form-control"
          {...register("name", { required: true })}
          id="CompanyRegisterName"
          type="text"
          placeholder="Company Name"
        />
        {errors.name && (
          <div className="text-danger text-small">{errors.name.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterEmail">
          Email *
        </label>
        <input
          className="form-control"
          {...register("email", { required: true })}
          id="CompanyRegisterEmail"
          type="email"
          placeholder="Company@email.com"
        />
        {errors.email && (
          <div className="text-danger text-small">{errors.email.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterPhone">
          Phone Number *
        </label>
        <input
          className="form-control"
          {...register("phone", { required: true })}
          id="CompanyRegisterPhone"
          type="text"
          placeholder="Phone Number"
        />
        {errors.phone && (
          <div className="text-danger text-small">{errors.phone.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterCountry_Id">
          Country *
        </label>
        <select
          className="form-control form-select"
          {...register("country_id", { required: true })}
          id="CompanyRegisterCountry_Id"
          defaultValue={""}
        >
          <option value="">Choose Your Country</option>
          <option value="1">Country 1</option>
          <option value="2">Country 2</option>
          <option value="3">Country 3</option>
          <option value="4">Country 4</option>
          <option value="5">Country 5</option>
        </select>
        {errors.country_id && (
          <div className="text-danger text-small">
            {errors.country_id.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegistercity_id">
          City *
        </label>
        <select
          className="form-control form-select"
          {...register("city_id", { required: true })}
          id="CompanyRegistercity_id"
          defaultValue={""}
        >
          <option value="">Choose Your City</option>
          <option value="1">City 1</option>
          <option value="2">City 2</option>
          <option value="3">City 3</option>
          <option value="4">City 4</option>
          <option value="5">City 5</option>
        </select>
        {errors.city_id && (
          <div className="text-danger text-small">{errors.city_id.message}</div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterindustry_id">
          Industry *
        </label>
        <select
          className="form-control form-select"
          {...register("industry_id", { required: true })}
          id="CompanyRegisterindustry_id"
          defaultValue={""}
        >
          <option value="">Choose Your Industry</option>
          <option value="1">Industry 1</option>
          <option value="2">Industry 2</option>
          <option value="3">Industry 3</option>
          <option value="4">Industry 4</option>
          <option value="5">Industry 5</option>
        </select>
        {errors.industry_id && (
          <div className="text-danger text-small">
            {errors.industry_id.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label
          className="form-label"
          htmlFor="CompanyRegistercommercial_certification"
        >
          Commercial Certification *
        </label>
        <input
          className="form-control"
          {...register("commercial_certification", { required: true })}
          id="CompanyRegistercommercial_certification"
          type="file"
        />
        {errors.commercial_certification && (
          <div className="text-danger text-small">
            {errors.commercial_certification.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label
          className="form-label"
          htmlFor="CompanyRegisterofficial_registeration"
        >
          Official Registeration *
        </label>
        <input
          className="form-control"
          {...register("official_registeration", { required: true })}
          id="CompanyRegisterofficial_registeration"
          type="file"
        />
        {errors.official_registeration && (
          <div className="text-danger text-small">
            {errors.official_registeration.message}
          </div>
        )}
      </div>
      <div className="form-group col-lg-6">
        <label className="form-label" htmlFor="CompanyRegisterpassword">
          Password *
        </label>
        <input
          className="form-control"
          {...register("password", { required: true })}
          id="CompanyRegisterpassword"
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
          htmlFor="CompanyRegisterpassword_confirmation"
        >
          password_confirmation *
        </label>
        <input
          className="form-control"
          {...register("password_confirmation", { required: true })}
          id="CompanyRegisterpassword_confirmation"
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
          name="company register button"
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

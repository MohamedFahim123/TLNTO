"use client";

import { CompanyRegisterFrom } from "@/app/[region]/auth/utils/interface";
import { AuthUrls } from "@/app/[region]/auth/utils/URLS";
import { Country, useCountriesStore } from "@/app/store/Countries";
import { Industry, useIndustriesStore } from "@/app/store/Industries";
import { baseUrl, MainRegion } from "@/app/utils/mainData";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

interface CITY {
  id: string;
  name: string;
}

export default function CompanyRegisterForm({
  userLoginType,
}: {
  userLoginType: "User" | "Company";
}) {
  const Region: string = Cookies.get("region") || MainRegion;
  const {
    register,
    watch,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyRegisterFrom>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);
  const { countries } = useCountriesStore();
  const { industries } = useIndustriesStore();
  const router = useRouter();

  const [currCities, setCurrCities] = useState<CITY[]>([]);
  const getCurrCitiesInsideChosenCountry = async () => {
    if (watch("country_id")) {
      const toastId = toast.loading("Loading...");
      const data: { country_id: string } = {
        country_id: watch("country_id"),
      };
      try {
        const res = await axios.post(
          `${baseUrl}/cities?t=${new Date().getTime()}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCurrCities(res?.data?.data);
        toast.update(toastId, {
          render: res?.data?.message || "Success! Cities loaded.",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.update(toastId, {
            render: error.response?.data?.message || "Error loading Cities!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    }
  };

  useEffect(() => {
    if (watch("country_id")) {
      getCurrCitiesInsideChosenCountry();
    }
  }, [watch("country_id")]);

  const onSubmit: SubmitHandler<CompanyRegisterFrom> = async (
    data: CompanyRegisterFrom
  ) => {
    const toastId = toast.loading("Submitting...");

    const URL: string =
      userLoginType === "User"
        ? AuthUrls.userRegister
        : AuthUrls.companyRegister;

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      const value = data[key as keyof CompanyRegisterFrom];

      if (value instanceof FileList && value.length > 0) {
        formData.append(key, value[0]);
      } else if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    });

    try {
      const response = await axios.post(URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });

      toast.dismiss(toastId);

      toast.success(response?.data?.message || "Registration Successful!", {
        autoClose: 1500,
      });
      reset();
      const token: string = response?.data?.data?.token;
      if (token) {
        reset();
        await axios.post("/api/token", { token });
        router.push(`/${Region}/dashboard`);
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

            setError(field as keyof CompanyRegisterFrom, {
              type: "server",
              message,
            });
          });

          toast.error(firstErrorMessage || "Registration failed!", {
            autoClose: 1500,
          });
        } else {
          toast.error(errorResponse?.message || "Registration Failed!", {
            autoClose: 1500,
          });
        }
      } else {
        toast.error("An unexpected error occurred!", { autoClose: 1500 });
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
        <label className="form-label" htmlFor="CompanyRegisterName">
          Company Name *
        </label>
        <input
          className={`form-control ${errors.name && "InputError"}`}
          {...register("name", { required: "Required" })}
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
          className={`form-control ${errors.email && "InputError"}`}
          {...register("email", { required: "Required" })}
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
          className={`form-control ${errors.phone && "InputError"}`}
          {...register("phone", { required: "Required" })}
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
          className={`form-control form-select ${
            errors.country_id && "InputError"
          }`}
          {...register("country_id", { required: "Required" })}
          id="CompanyRegisterCountry_Id"
          defaultValue={""}
        >
          <option value="">Choose Your Country</option>
          {countries?.map((country: Country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
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
          className={`form-control form-select ${
            errors.city_id && "InputError"
          }`}
          {...register("city_id", { required: "Required" })}
          id="CompanyRegistercity_id"
          defaultValue={""}
        >
          <option value="">Choose Your City</option>
          {currCities?.map((city: CITY) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
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
          className={`form-control form-select ${
            errors.industry_id && "InputError"
          }`}
          {...register("industry_id", { required: "Required" })}
          id="CompanyRegisterindustry_id"
          defaultValue={""}
        >
          <option value="">Choose Your Industry</option>
          {industries?.map((industry: Industry) => (
            <option key={industry.id} value={industry.id}>
              {industry.name}
            </option>
          ))}
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
          className={`form-control ${
            errors.commercial_certification && "InputError"
          }`}
          {...register("commercial_certification", { required: "Required" })}
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
          className={`form-control ${
            errors.official_registeration && "InputError"
          }`}
          {...register("official_registeration", { required: "Required" })}
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
          className={`form-control ${errors.password && "InputError"}`}
          {...register("password", { required: "Required" })}
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
          className={`form-control ${
            errors.password_confirmation && "InputError"
          }`}
          {...register("password_confirmation", { required: "Required" })}
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

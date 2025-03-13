"use client";
import Image from "next/image";
import styles from "./dashboardStyles.module.css";
import Link from "next/link";
import Cookies from "js-cookie";
import { baseUrl, MainRegion } from "@/app/utils/mainData";
import { useCallback, useEffect, useState } from "react";
import { useProfileStore } from "@/app/store/Profile";
import { useTokenStore } from "@/app/store/Token";
import { Country, useCountriesStore } from "@/app/store/Countries";
import { toast } from "react-toastify";
import axios from "axios";
import { CompanyProfileSettingsForm } from "@/app/[region]/dashboard/utils/interfaces";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidEdit } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { Industry, useIndustriesStore } from "@/app/store/Industries";

interface CITY {
  id: string;
  name: string;
}

export default function SettingsSection() {
  const region: string = Cookies.get("region") || MainRegion;
  const [underUpdating, setUnderUpdating] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { profile } = useProfileStore();
  const { industries } = useIndustriesStore();
  const { token, loginType } = useTokenStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
    setValue,
    reset,
  } = useForm<CompanyProfileSettingsForm>();
  const { countries } = useCountriesStore();

  const [currCities, setCurrCities] = useState<CITY[]>([]);
  const getCurrCitiesInsideChosenCountry = async () => {
    if (watch("country_id")) {
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
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message || "Error loading Cities!");
        }
      }
    }
  };

  useEffect(() => {
    if (watch("country_id")) {
      getCurrCitiesInsideChosenCountry();
    }
  }, [watch("country_id")]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue("logo", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setValue("logo", "" as unknown as File);
  };

  const handleChangeUpdatingeStatus = useCallback(() => {
    setUnderUpdating(!underUpdating);
    if (profile?.country_id && profile?.country !== "N/A") {
      setValue("country_id", `${profile?.country_id}`);
    }
  }, [profile?.country, profile?.country_id, setValue, underUpdating]);

  const onSubmit: SubmitHandler<CompanyProfileSettingsForm> = async (
    data: CompanyProfileSettingsForm
  ) => {
    const toastId = toast.loading("Submitting...");
    try {
      const formData = new FormData();
      if (data.logo) {
        formData.append("logo", data.logo);
      }
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("industry_id", data.industry_id);
      formData.append("country_id", data.country_id);
      formData.append("city_id", data.city_id);

      const res = await axios.post(
        `${baseUrl}/${loginType.toLowerCase()}/update-profile?t=${new Date().getTime()}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.update(toastId, {
        render: res?.data?.message || "Success! Profile updated.",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      reset();
      window.location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverErrors = error.response?.data?.errors;
        if (serverErrors) {
          Object.keys(serverErrors).forEach((key) => {
            setError(key as keyof CompanyProfileSettingsForm, {
              type: "manual",
              message: serverErrors[key].message || "This field is invalid",
            });
          });
        }
        toast.update(toastId, {
          render: error.response?.data?.message || "Error updating Profile!",
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      } else {
        toast.update(toastId, {
          render: "Unexpected error occurred!",
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      }
    }
  };

  useEffect(() => {
    if (profile) {
      setValue("name", profile?.name);
      setValue("email", profile?.email);
      setValue("phone", profile?.phone);
      setValue("industry_id", `${profile?.industry_id}`);
      setValue(
        "country_id",
        profile?.country === "N/A" ? "" : `${profile?.country_id}`
      );
      setValue("city_id", profile?.city !== "N/A" ? `${profile?.city_id}` : "");
    }
  }, [profile, setValue]);

  return (
    <div className="container">
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className=" my-4">Profile Settings</h4>
        <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50 ">
          <span className="d-flex align-items-center justify-content-center">
            <Image
              className="me-1 lh-2"
              width={14}
              height={14}
              src="/assets/imgs/page/dashboard/home.svg"
              alt="jobBox"
            />
            <Link
              className="d-flex align-items-center"
              href={`/${region}/dashboard`}
            >
              Admin <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
            </Link>
            Profile Settings
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-8">
          <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="container position-relative"
            >
              <div
                className="position-absolute top-0"
                style={{ right: "20px" }}
              >
                {underUpdating ? (
                  <span
                    className="text-danger cursor-pointer"
                    onClick={handleChangeUpdatingeStatus}
                  >
                    <MdCancel size={45} className="me-2" />
                  </span>
                ) : (
                  <button
                    type="button"
                    className="btn btn-default btn-brand cursor-pointer icon-tick"
                    onClick={handleChangeUpdatingeStatus}
                  >
                    <BiSolidEdit size={25} />
                  </button>
                )}
              </div>
              <div className="panel-white mb-30">
                <div className="box-padding ">
                  <h6 className="color-text-paragraph-2 mb-4">
                    Update your profile
                  </h6>
                  <div className="box-profile-image d-flex align-items-center mb-4">
                    <div className="img-profile">
                      <Image
                        width={100}
                        height={100}
                        src={
                          imagePreview
                            ? imagePreview
                            : profile?.companyLogo === "N/A"
                            ? "/assets/imgs/page/homepage1/user1.png"
                            : profile?.companyLogo ||
                              "/assets/imgs/page/homepage1/user1.png"
                        }
                        alt="Profile Image"
                        className="rounded-circle"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="info-profile ms-4">
                      {underUpdating && (
                        <div className="profile-image-actions">
                          <div className={styles["file-input-wrapper"]}>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className={styles["file-input"]}
                            />
                            <button
                              type="button"
                              className={styles["file-input-button"]}
                            >
                              Upload Image
                            </button>
                          </div>
                          <span className={styles["file-input-filename"]}>
                            {imagePreview ? "Image selected" : "No file chosen"}
                          </span>
                          <button
                            type="button"
                            onClick={handleImageRemove}
                            className="btn btn-link"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          htmlFor="CompanySettingsname"
                          className="font-sm color-text-mutted mb-10"
                        >
                          Company Name *
                        </label>
                        <input
                          disabled={!underUpdating}
                          id="CompanySettingsname"
                          className={`form-control ${
                            errors.name && "InputError"
                          }`}
                          type="text"
                          placeholder="First Name"
                          {...register("name", { required: "Required" })}
                        />
                        {errors.name && (
                          <div className="text-danger text-sm">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          htmlFor="CompanySettingsEmail"
                          className="font-sm color-text-mutted mb-10"
                        >
                          Email *
                        </label>
                        <input
                          placeholder="Example@Email.com"
                          disabled={!underUpdating}
                          id="CompanySettingsEmail"
                          className={`form-control ${
                            errors.email && "InputError"
                          }`}
                          {...register("email", { required: "Required" })}
                          type="email"
                        />
                        {errors.email && (
                          <div className="text-danger text-sm">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          id="CompanySettingsPhone"
                          className="font-sm color-text-mutted mb-10"
                        >
                          Phone number *
                        </label>
                        <input
                          id="CompanySettingsPhone"
                          {...register("phone", { required: "Required" })}
                          disabled={!underUpdating}
                          placeholder="Phone Number"
                          className={`form-control ${
                            errors.phone && "InputError"
                          }`}
                          type="text"
                        />
                        {errors.phone && (
                          <div className="text-danger text-sm">
                            {errors.phone.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          className="form-label"
                          htmlFor="CompanyRegisterindustry_id"
                        >
                          Industry *
                        </label>
                        <select
                          className={`form-control form-select ${
                            errors.industry_id && "InputError"
                          }`}
                          {...register("industry_id", { required: "Required" })}
                          id="CompanyRegisterindustry_id"
                          defaultValue={""}
                          disabled={!underUpdating}
                        >
                          <option value="" disabled>
                            Choose Your Industry
                          </option>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-white mb-30">
                <div className="box-padding">
                  <h6 className="color-text-paragraph-2">
                    Location Information
                  </h6>
                  <div className="row mt-30">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          className="form-label"
                          htmlFor="CompanyRegisterCountry_Id"
                        >
                          Country *
                        </label>
                        <select
                          className={`form-control form-select ${
                            errors.country_id && "InputError"
                          }`}
                          {...register("country_id", { required: "Required" })}
                          id="CompanyRegisterCountry_Id"
                          defaultValue={""}
                          disabled={!underUpdating}
                        >
                          <option value="" disabled>
                            Choose Your Country
                          </option>
                          {countries?.map((country: Country) => (
                            <option key={country.id} value={country.id}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                        {errors.country_id && (
                          <div className="text-danger text-sm">
                            {errors.country_id.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group mb-30">
                        <label
                          className="form-label"
                          htmlFor="CompanyRegistercity_id"
                        >
                          City *
                        </label>
                        <select
                          disabled={!underUpdating}
                          className={`form-control form-select ${
                            errors.city_id && "InputError"
                          }`}
                          value={watch("city_id")}
                          onChange={(e) => {
                            setValue("city_id", e.target.value);
                          }}
                          id="CompanyRegistercity_id"
                        >
                          <option value="" disabled>
                            Choose Your City
                          </option>
                          {currCities?.map((city: CITY) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                        {errors.city_id && (
                          <div className="text-danger text-sm">
                            {errors.city_id.message}
                          </div>
                        )}
                      </div>
                    </div>
                    {underUpdating && (
                      <div className="col-lg-12">
                        <div className="form-group mt-0">
                          <button
                            title="Submit Changes"
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-default btn-brand icon-tick"
                          >
                            Submit Changes
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div
            className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white`}
          >
            <div className={"container py-4"}>
              <h5 className={styles.subtitle}>Social Network</h5>
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Facebook</label>
                    <input
                      className={styles.formControl}
                      type="url"
                      placeholder="https://facebook.com"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Twitter</label>
                    <input
                      className={styles.formControl}
                      type="url"
                      placeholder="https://twitter.com"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Instagram</label>
                    <input
                      className={styles.formControl}
                      type="url"
                      placeholder="https://instagram.com"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className={styles.submitButton}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { UserProfileForm } from "@/app/[region]/dashboard/utils/interfaces";
import { Country, useCountriesStore } from "@/app/store/Countries";
import { useProfileStore } from "@/app/store/Profile";
import { baseUrl } from "@/app/utils/mainData";
import axios from "axios";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidEdit } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
import styles from "./dashboardStyles.module.css";
import ProfleSideContent from "./ProfleSideContent";
import { useTokenStore } from "@/app/store/Token";

interface CITY {
  id: string;
  name: string;
}

export default function ProfileContainer() {
  const [underUpdating, setUnderUpdating] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { profile } = useProfileStore();
  const { token, loginType } = useTokenStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
    setValue,
    reset,
  } = useForm<UserProfileForm>();
  const { countries } = useCountriesStore();

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    setValue("image", "" as unknown as File);
  };

  const handleChangeUpdatingeStatus = useCallback(() => {
    setUnderUpdating(!underUpdating);
    if (profile?.country_id && profile?.country !== "N/A") {
      setValue("country_id", `${profile?.country_id}`);
    }
  }, [profile?.country, profile?.country_id, setValue, underUpdating]);

  const onSubmit: SubmitHandler<UserProfileForm> = async (
    data: UserProfileForm
  ) => {
    const toastId = toast.loading("Submitting...");
    try {
      const formData = new FormData();
      if (data.image) {
        formData.append("image", data.image);
      }
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("bio", data.bio);
      formData.append("exp", data.exp);
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
            setError(key as keyof UserProfileForm, {
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
      setValue("first_name", profile?.first_name);
      setValue("last_name", profile?.last_name);
      setValue("email", profile?.email);
      setValue("phone", profile?.phone);
      setValue("bio", profile?.bio);
      setValue("exp", profile?.exp);
      setValue(
        "country_id",
        profile?.country === "N/A" ? "" : `${profile?.country_id}`
      );
      setValue("city_id", profile?.city !== "N/A" ? `${profile?.city_id}` : "");
    }
  }, [profile, setValue]);

  return (
    <>
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className="my-4">My Profile</h4>
        <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50 ">
          <span className="d-flex align-items-center justify-content-center">
            <Image
              className="me-1 lh-2"
              width={14}
              height={14}
              src={"/assets/imgs/page/dashboard/home.svg"}
              alt="jobBox"
            />
            <p className="d-flex align-items-center">
              Admin <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
            </p>
            My Profile
          </span>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-8 col-lg-8 ">
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container position-relative"
          >
            <div className="position-absolute top-0" style={{ right: "20px" }}>
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
                          : profile?.image === "N/A"
                          ? "/assets/imgs/page/homepage1/user1.png"
                          : profile?.image ||
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
                        htmlFor="userProfileFirstName"
                        className="font-sm color-text-mutted mb-10"
                      >
                        First Name *
                      </label>
                      <input
                        disabled={!underUpdating}
                        id="userProfileFirstName"
                        className={`form-control ${
                          errors.first_name && "InputError"
                        }`}
                        type="text"
                        placeholder="First Name"
                        {...register("first_name", { required: "Required" })}
                      />
                      {errors.first_name && (
                        <div className="text-danger text-sm">
                          {errors.first_name.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label
                        htmlFor="userProfileLastName"
                        className="font-sm color-text-mutted mb-10"
                      >
                        Last Name *
                      </label>
                      <input
                        disabled={!underUpdating}
                        className={`form-control ${
                          errors.last_name && "InputError"
                        }`}
                        id="userProfileLastName"
                        {...register("last_name", { required: "Required" })}
                        type="text"
                        placeholder="Last Name"
                      />
                      {errors.last_name && (
                        <div className="text-danger text-sm">
                          {errors.last_name.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label
                        htmlFor="userProfileEmail"
                        className="font-sm color-text-mutted mb-10"
                      >
                        Email *
                      </label>
                      <input
                        placeholder="Example@Email.com"
                        disabled={!underUpdating}
                        id="userProfileEmail"
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
                        id="userProfilePhone"
                        className="font-sm color-text-mutted mb-10"
                      >
                        Phone number *
                      </label>
                      <input
                        id="userProfilePhone"
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
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label
                        id="userProfileBio"
                        className="font-sm color-text-mutted mb-10"
                      >
                        Bio *
                      </label>
                      <textarea
                        placeholder="Bio"
                        className={`form-control ${errors.bio && "InputError"}`}
                        id="userProfileBio"
                        disabled={!underUpdating}
                        {...register("bio", { required: "Required" })}
                        rows={5}
                        style={{ height: "120px" }}
                        spellCheck="false"
                      />
                      {errors.bio && (
                        <div className="text-danger text-sm">
                          {errors.bio.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label
                        htmlFor="userProfileExperience"
                        className="font-sm color-text-mutted mb-10"
                      >
                        Experience *
                      </label>
                      <input
                        {...register("exp", { required: "Required" })}
                        id="userProfileExperience"
                        placeholder="Experience"
                        disabled={!underUpdating}
                        className={`form-control ${errors.exp && "InputError"}`}
                        type="text"
                      />
                      {errors.exp && (
                        <div className="text-danger text-sm">
                          {errors.exp.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-white mb-30">
              <div className="box-padding">
                <h6 className="color-text-paragraph-2">Location Information</h6>
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
                        {...register("city_id", { required: "Required" })}
                        id="CompanyRegistercity_id"
                        defaultValue={""}
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
      <ProfleSideContent />
    </>
  );
}

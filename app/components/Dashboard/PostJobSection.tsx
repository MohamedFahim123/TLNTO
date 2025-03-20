"use client";

import { PostAJobForm } from "@/app/[region]/dashboard/utils/interfaces";
import { DashboardUrls } from "@/app/[region]/dashboard/utils/URLS";
import { useEmploymentTypesStore } from "@/app/store/EmployMentTypes";
import { useCategoriesStore } from "@/app/store/MainCategories";
import { useWorkPlaceTypesStore } from "@/app/store/WorkPlaceTypes";
import { baseUrl, MainRegion } from "@/app/utils/mainData";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import styles from "./dashboardStyles.module.css";
import { useTokenStore } from "@/app/store/Token";
import { Country, useCountriesStore } from "@/app/store/Countries";
import { useCurrencyStore } from "@/app/store/Currencies";
import { useYearEXPStore } from "@/app/store/yearExps";

interface CITY {
  id: string;
  name: string;
}

export default function PostJobSection() {
  const region: string = Cookies.get("region") || MainRegion;
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const { countries } = useCountriesStore();
  const [inputValue, setInputValue] = useState<string>("");
  const { token } = useTokenStore();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    watch,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<PostAJobForm>();
  const { employmentTypes } = useEmploymentTypesStore();
  const { workPlaceTypes } = useWorkPlaceTypesStore();
  const { categories } = useCategoriesStore();
  const { currency } = useCurrencyStore();
  const { yearEXPs } = useYearEXPStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currSubCategory, setCurrSubCategory] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  const getCurrSubCategInsideMainCategories = useCallback(async () => {
    if (selectedCategory) {
      const toastId = toast.loading("Loading...");
      const data: { category_id: string } = {
        category_id: selectedCategory,
      };
      setSelectedSubCategory("");
      try {
        const res = await axios.post(
          `${baseUrl}/sub-categories?t=${new Date().getTime()}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCurrSubCategory(res?.data?.data);
        toast.update(toastId, {
          render: res?.data?.message || "Success! Sub-Categories loaded.",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.update(toastId, {
            render:
              error.response?.data?.message || "Error loading Sub-Categories!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory) {
      getCurrSubCategInsideMainCategories();
    }
  }, [selectedCategory]);

  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [currTags, setCurrTags] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);
  const getCurrTagsInsideSubCateg = useCallback(async () => {
    if (selectedSubCategory) {
      const toastId = toast.loading("Loading...");
      const data: { sub_category_id: string } = {
        sub_category_id: selectedSubCategory,
      };
      try {
        const res = await axios.post(
          `${baseUrl}/tags?t=${new Date().getTime()}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setCurrTags(res?.data?.data);
        toast.update(toastId, {
          render: res?.data?.message || "Success! Tags loaded.",
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.update(toastId, {
            render: error.response?.data?.message || "Error loading Tags!",
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        }
      }
    }
  }, [selectedSubCategory]);

  useEffect(() => {
    if (selectedSubCategory) {
      getCurrTagsInsideSubCateg();
      clearErrors();
    }
  }, [selectedSubCategory]);

  const addTag = () => {
    const chosenTag = currTags.find((el) => +el.id === +inputValue);
    if (
      chosenTag?.name?.trim() &&
      !tags.find((el) => el.name === chosenTag.name.trim())
    ) {
      const newTags = [...tags, chosenTag];
      setTags(newTags);
      setValue(
        "tags",
        newTags.map((el) => `${el.id}`)
      );
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    setValue(
      "tags",
      newTags?.map((el) => `${el.id}`)
    );
  };

  const [currCities, setCurrCities] = useState<CITY[]>([]);
  const getCurrCitiesInsideChosenCountry = async () => {
    if (watch("country_id")) {
      setValue("city_id", "");
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

  const onSubmit: SubmitHandler<PostAJobForm> = async (data: PostAJobForm) => {
    const toastId = toast.loading("Submitting...");
    data.category_id = selectedCategory;
    data.sub_category_id = selectedSubCategory;
    try {
      const response = await axios.post(DashboardUrls.postJob, data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.dismiss(toastId);
      toast.success(response?.data?.message || "Job Added Successful!", {
        autoClose: 1500,
      });
      reset();
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

            setError(field as keyof PostAJobForm, {
              type: "server",
              message,
            });
          });

          toast.error(firstErrorMessage || "Failed to Add a Job!", {
            autoClose: 1500,
          });
        } else {
          toast.error(errorResponse?.message || "Failed! to Add a Job", {
            autoClose: 1500,
          });
        }
      } else {
        toast.error("An unexpected error occurred!", { autoClose: 1500 });
      }
    }
  };

  return (
    <div className={`col-12`}>
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className=" my-4">Post a Job</h4>
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
              className="d-flex align-items-center "
              href={`/${region}/dashboard`}
            >
              Admin <span className="mb-1 mx-1 text-black-50 fs-5">&gt; </span>
            </Link>
            Post a Job
          </span>
        </div>
      </div>
      <div
        className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white`}
      >
        <div className={"container py-4"}>
          <h5 className={styles.subtitle}>Tell us about your role</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-30 row">
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label className={styles.formLabel} htmlFor="postAJobTitle">
                Job title *
              </label>
              <input
                className={styles.formControl}
                type="text"
                id="postAJobTitle"
                {...register("title", { required: "Required" })}
                placeholder="e.g. Senior Product Designer"
              />
              {errors.title && (
                <span className="text-danger text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label htmlFor="postAJobLocation" className={styles.formLabel}>
                Location *
              </label>
              <input
                className={styles.formControl}
                type="text"
                id="postAJobLocation"
                {...register("location", { required: "Required" })}
                placeholder="city - Country"
              />
              {errors.location && (
                <span className="text-danger">{errors.location.message}</span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label className={styles.formLabel} htmlFor="PostAJobCountry_Id">
                Country *
              </label>
              <select
                className={`${styles.formControl} form-select ${
                  errors.country_id && "InputError"
                }`}
                {...register("country_id", { required: "Required" })}
                id="PostAJobCountry_Id"
                defaultValue={""}
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
                <div className="text-danger text-small">
                  {errors.country_id.message}
                </div>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label className={styles.formLabel} htmlFor="PostAJobcity_id">
                City *
              </label>
              <select
                className={`${styles.formControl} form-select ${
                  errors.city_id && "InputError"
                }`}
                {...register("city_id", { required: "Required" })}
                id="PostAJobcity_id"
                defaultValue={""}
              >
                <option value="" disabled>
                  Choose Your Country
                </option>
                {currCities?.map((city: CITY) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              {errors.city_id && (
                <div className="text-danger text-small">
                  {errors.city_id.message}
                </div>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label
                htmlFor="postAJobwork_place_type_id"
                className={styles.formLabel}
              >
                Work Place *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="Work Place"
                defaultValue={""}
                id="postAJobwork_place_type_id"
                {...register("work_place_type_id", { required: "Required" })}
              >
                <option disabled value="">
                  Select Work Place
                </option>
                {workPlaceTypes &&
                  workPlaceTypes?.map((workPlaceType) => (
                    <option key={workPlaceType.id} value={workPlaceType.id}>
                      {workPlaceType.name}
                    </option>
                  ))}
              </select>
              {errors.work_place_type_id && (
                <span className="text-danger">
                  {errors.work_place_type_id.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label
                htmlFor="postAJobemployment_type_id"
                className={styles.formLabel}
              >
                Employment Type *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="Employment Type"
                defaultValue={""}
                id="postAJobemployment_type_id"
                {...register("employment_type_id", { required: "Required" })}
              >
                <option disabled value="">
                  Select Employment Type
                </option>
                {employmentTypes &&
                  employmentTypes?.map((employmentType) => (
                    <option key={employmentType.id} value={employmentType.id}>
                      {employmentType.name}
                    </option>
                  ))}
              </select>
              {errors.employment_type_id && (
                <span className="text-danger">
                  {errors.employment_type_id.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label htmlFor="postAJobsalary" className={styles.formLabel}>
                salary
              </label>
              <input
                className={styles.formControl}
                type="text"
                id="postAJobsalary"
                {...register("salary")}
                placeholder="5000"
              />
              {errors.salary && (
                <span className="text-danger">{errors.salary.message}</span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label htmlFor="postAJobcurrency_id" className={styles.formLabel}>
                Currency
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="Currency"
                defaultValue={""}
                id="postAJobcurrency_id"
                {...register("currency_id")}
              >
                <option disabled value="">
                  Select Currency
                </option>
                {currency?.map((currency) => (
                  <option key={currency.currencyId} value={currency.currencyId}>
                    {currency.currencyCode}
                  </option>
                ))}
              </select>
              {errors.currency_id && (
                <span className="text-danger">
                  {errors.currency_id.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label
                htmlFor="postAJobexp_level_id"
                className={styles.formLabel}
              >
                Experience Level *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="Experience Level"
                defaultValue={""}
                id="postAJobexp_level_id"
                {...register("year_exp_id", { required: "Required" })}
              >
                <option disabled value="">
                  Select Experience Level
                </option>
                {yearEXPs?.map((yearEXP) => (
                  <option key={yearEXP.id} value={yearEXP.id}>
                    {yearEXP.name}
                  </option>
                ))}
              </select>
              {errors.year_exp_id && (
                <span className="text-danger">
                  {errors.year_exp_id.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label htmlFor="postAJobDescription" className={styles.formLabel}>
                Description *
              </label>
              <textarea
                style={{ minHeight: "100px" }}
                className={`${styles.formControl}`}
                id="postAJobDescription"
                {...register("description", { required: "Required" })}
                placeholder="5000$"
              ></textarea>
              {errors.description && (
                <span className="text-danger">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label
                htmlFor="postAJobMain_Category"
                className={styles.formLabel}
              >
                Main Category *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="Main Category"
                value={selectedCategory}
                id="postAJobMain_Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option disabled value="">
                  Select Main Category
                </option>
                {categories &&
                  categories?.map((categ) => (
                    <option key={categ.id} value={categ.id}>
                      {categ.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label
                htmlFor="postAJobsub_Category"
                className={styles.formLabel}
              >
                Sub Category *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                title="sub Category"
                value={selectedSubCategory}
                id="postAJobsub_Category"
                onChange={(e) => setSelectedSubCategory(e.target.value)}
              >
                <option disabled value="">
                  Select sub Category
                </option>
                {currSubCategory &&
                  currSubCategory?.map((categ) => (
                    <option key={categ.id} value={categ.id}>
                      {categ.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6 text-center`}>
              <label className={`${styles.formLabel} text-start`}>Tags *</label>
              <div className={`${styles.tagContainer} text-start`}>
                <select
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  className={`${styles.formControl} form-select`}
                >
                  <option value="" disabled>
                    Select a Tag
                  </option>
                  {currTags &&
                    currTags?.map((tag) => (
                      <option key={tag.id} value={tag.id}>
                        {tag.name}
                      </option>
                    ))}
                </select>
                {tags?.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag.name}
                    <button type="button" onClick={() => removeTag(index)}>
                      <MdDelete />
                    </button>
                  </span>
                ))}
                {errors["tags"] && (
                  <p className={styles.error}>
                    {errors["tags"]?.message as string}
                  </p>
                )}
              </div>
              <button
                type="button"
                title="add tag"
                name={"add tag"}
                className={`${styles["add-tag-button"]}`}
                onClick={addTag}
              >
                Add Tag
              </button>
            </div>
            <div className="col-lg-12 text-center">
              <button
                name="Post New Job"
                className={`w-auto px-5 ${styles.submitButton}`}
                title="Post New Job"
                type="submit"
                disabled={isSubmitting}
              >
                Post New Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

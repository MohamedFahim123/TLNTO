"use client";
import { PostAJobForm } from "@/app/[region]/dashboard/utils/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./dashboardStyles.module.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { DashboardUrls } from "@/app/[region]/dashboard/utils/URLS";

export default function PostJobSection() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PostAJobForm>();

  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue)) {
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      setValue("tags", newTags);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    setValue("tags", newTags);
  };

  const onSubmit: SubmitHandler<PostAJobForm> = async (data: PostAJobForm) => {
    try {
      const response = await axios.post(DashboardUrls.postJob, data, {
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
            <Link className="d-flex align-items-center " href="/dashboard">
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
                {...register("title", { required: true })}
                placeholder="e.g. Senior Product Designer"
              />
              {errors.title && (
                <span className="text-danger">{errors.title.message}</span>
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
                {...register("location", { required: true })}
                placeholder="city - Country"
              />
              {errors.location && (
                <span className="text-danger">{errors.location.message}</span>
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
                id="postAJobwork_place_type_id"
                {...register("work_place_type_id", { required: true })}
              >
                <option disabled value="">
                  Select Work Place
                </option>
                <option value="1">Remote</option>
                <option value="2">Onsite</option>
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
                id="postAJobemployment_type_id"
                {...register("employment_type_id", { required: true })}
              >
                <option disabled value="">
                  Select Employment Type
                </option>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
                <option value="3">Contract</option>
                <option value="4">Internship</option>
              </select>
              {errors.employment_type_id && (
                <span className="text-danger">
                  {errors.employment_type_id.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6`}>
              <label htmlFor="postAJobsalary" className={styles.formLabel}>
                salary *
              </label>
              <input
                className={styles.formControl}
                type="text"
                id="postAJobsalary"
                {...register("salary", { required: true })}
                placeholder="5000$"
              />
              {errors.salary && (
                <span className="text-danger">{errors.salary.message}</span>
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
                {...register("description", { required: true })}
                placeholder="5000$"
              ></textarea>
              {errors.description && (
                <span className="text-danger">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className={`${styles.formGroup} mb-30 col-md-6 text-center`}>
              <label className={`${styles.formLabel} text-start`}>Tags *</label>
              <div className={`${styles.tagContainer} text-start`}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  placeholder="Add a tag and press Enter"
                  className={styles["tag-input"]}
                />
                {tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
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

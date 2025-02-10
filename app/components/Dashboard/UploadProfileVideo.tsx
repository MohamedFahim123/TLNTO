"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import styles from "./dashboardStyles.module.css";
import { toast } from "react-toastify";
import { baseUrl } from "@/app/utils/mainData";

export default function UploadProfileVideo({
  cookieToken,
}: {
  cookieToken: string;
}) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const {
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<{ video: File }>();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  const onSubmit: SubmitHandler<{ video: File }> = async () => {
    if (!uploadedFile) {
      toast.error("Please upload a video.");
      return;
    }

    const toastId = toast.loading("Uploading video...");

    try {
      const formData = new FormData();
      formData.append("video", uploadedFile);

      const response = await axios.post(
        `${baseUrl}/user/user-video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
            Authorization: `Bearer ${cookieToken}`,
          },
        }
      );

      toast.update(toastId, {
        render: response?.data?.message || "Video uploaded successfully!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });

      reset();
      setUploadedFile(null);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.update(toastId, {
          render: error?.response?.data?.message || "Error uploading video!",
          type: "error",
          isLoading: false,
          autoClose: 1500,
        });
      }
    }
  };

  return (
    <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4">
      <div className="container py-4">
        <h5 className={styles.subtitle}>Upload a video</h5>
        <form onSubmit={handleSubmit(onSubmit)} className="row mt-30">
          <div className="col-lg-6 mb-3 col-md-6">
            <div className={styles.formGroup}>
              <div className={styles.boxUpload}>
                <label
                  htmlFor="videoUpload"
                  className={styles.uploadButton}
                  style={{ cursor: "pointer" }}
                >
                  {uploadedFile ? "Replace File" : "Upload File"}
                </label>
                <input
                  id="videoUpload"
                  className="fileupload"
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                {errors.video && (
                  <span className="text-danger">{errors.video.message}</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 col-md-6">
            {uploadedFile ? (
              <div
                className={`${styles.formGroup} d-flex align-items-center ${styles.fileDisplay}`}
              >
                <span className={styles.fileName}>{uploadedFile.name}</span>
                <button className={styles.btnDelete} onClick={handleFileRemove}>
                  Delete
                </button>
              </div>
            ) : (
              <div
                className={`${styles.formGroup} d-flex align-items-center ${styles.fileDisplay}`}
              >
                <span className={styles.fileName}>No file uploaded</span>
              </div>
            )}
          </div>
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
        </form>
      </div>
    </div>
  );
}

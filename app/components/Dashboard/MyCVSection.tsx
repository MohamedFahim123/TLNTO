"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./dashboardStyles.module.css";

export default function MyCVSection() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileRemove = () => {
    setUploadedFile(null);
  };

  return (
    <div className="col-12">
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className=" my-4">My CV</h4>
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
            My CV
          </span>
        </div>
      </div>
      <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4">
        <div className="container py-4">
          <h5 className={styles.subtitle}>Update your CV</h5>
          <div className="row mt-30">
            <div className="col-lg-6 col-md-6">
              <div className={styles.formGroup}>
                <div className={styles.boxUpload}>
                  <div>
                    <label
                      htmlFor="cvUpload"
                      className={styles.uploadButton}
                      style={{ cursor: "pointer" }}
                    >
                      {uploadedFile ? "Replace File" : "Upload File"}
                    </label>
                    <input
                      id="cvUpload"
                      className="fileupload"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {uploadedFile ? (
                <div
                  className={`${styles.formGroup} d-flex align-items-center ${styles.fileDisplay}`}
                >
                  <span className={styles.fileName}>{uploadedFile.name}</span>
                  <button
                    className={styles.btnDelete}
                    onClick={handleFileRemove}
                  >
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
          </div>
        </div>
      </div>

      <div
        className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4`}
      >
        <div className="container py-4">
          <h5 className={styles.title}>Education</h5>
          <div className="row mt-3">
            <div className="col-lg-6">
              <label className={styles.formLabel}>From</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-6">
              <label className={styles.formLabel}>To</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label className={styles.formLabel}>Description</label>
              <textarea
                className={styles.formControl}
                rows={5}
                defaultValue={
                  "Product Designer - Spotify Inc\nLorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="col-lg-12 mt-3">
              <button className={styles.submitButton}>Add Timeline</button>
            </div>
          </div>
          <div className="box-timeline mt-4">
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2008 - 2012</div>
              <div className={styles.timelineInfo}>
                <h5>National Design Academy</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2012 - 2014</div>
              <div className={styles.timelineInfo}>
                <h5>University of Oxford</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2014 - 2016</div>
              <div className={styles.timelineInfo}>
                <h5>California Institute of Technology</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4"}>
        <div className={'container py-4'}>
          <h5 className={styles.title}>Work & Experience</h5>
          <div className="row mt-3">
            <div className="col-lg-6">
              <label className={styles.formLabel}>From</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-6">
              <label className={styles.formLabel}>To</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label className={styles.formLabel}>Description</label>
              <textarea
                className={styles.formControl}
                rows={5}
                defaultValue={
                  "Product Designer - Spotify Inc\nLorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              />
            </div>
            <div className="col-lg-12 mt-3">
              <button className={styles.submitButton}>Add Timeline</button>
            </div>
          </div>
          <div className="box-timeline mt-4">
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2008 - 2012</div>
              <div className={styles.timelineInfo}>
                <h5>Samoo Architects & Engineers</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2012 - 2014</div>
              <div className={styles.timelineInfo}>
                <h5>Foster & Partners</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="item-timeline my-3">
              <div className={styles.timelineYear}>2014 - 2016</div>
              <div className={styles.timelineInfo}>
                <h5>Skidmore Owings & Merrill</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

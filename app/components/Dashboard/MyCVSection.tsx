"use client";
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
      <div className={styles.container}>
        <h2 className="mb-30">CV - Manage</h2>
        <div className={`${styles.panelWhite} mb-4`}>
          <div className={styles.boxPadding}>
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

        <div className={`${styles.panelWhite} mb-4`}>
          <div className={styles.boxPadding}>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="item-timeline my-3">
                <div className={styles.timelineYear}>2012 - 2014</div>
                <div className={styles.timelineInfo}>
                  <h5>University of Oxford</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="item-timeline my-3">
                <div className={styles.timelineYear}>2014 - 2016</div>
                <div className={styles.timelineInfo}>
                  <h5>California Institute of Technology</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.panelWhite} mb-4`}>
          <div className={styles.boxPadding}>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="item-timeline my-3">
                <div className={styles.timelineYear}>2012 - 2014</div>
                <div className={styles.timelineInfo}>
                  <h5>Foster & Partners</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="item-timeline my-3">
                <div className={styles.timelineYear}>2014 - 2016</div>
                <div className={styles.timelineInfo}>
                  <h5>Skidmore Owings & Merrill</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

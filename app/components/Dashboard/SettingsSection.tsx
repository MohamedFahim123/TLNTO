import Image from "next/image";
import styles from "./dashboardStyles.module.css";
import Link from "next/link";

export default function SettingsSection() {
  return (
    <div className="container">
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className=" my-4">Settings</h4>
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
            Settings
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <div
            className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white`}
          >
            <div className={"container py-4"}>
              <h5 className={styles.title}>Update your profile</h5>
              <div className="d-flex align-items-center mb-4">
                <div className={styles.imgProfile}>
                  <Image
                    src="/assets/imgs/page/dashboard/img3.png"
                    alt="Company Logo"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="ms-3">
                  <button className={styles.uploadButton}>
                    Company Logo / Brand
                  </button>
                  <button className={`${styles.btnDelete} ms-3`}>Delete</button>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Company Name *</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="WillowTree"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email *</label>
                    <input
                      className={styles.formControl}
                      type="email"
                      placeholder="willowtree@gmail.com"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Contact number</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="01-23456789"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Website</label>
                    <input
                      className={styles.formControl}
                      type="url"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Bio</label>
                    <textarea
                      className={styles.formControl}
                      rows={4}
                      placeholder="Describe your company here"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Experience</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="1 - 5 Years"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Number of employees
                    </label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="1-50 employees"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Languages</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="English, French"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Categories</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="UI/UX, Web Design, Brand identity"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Working time</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="Full time"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Average wage</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="$3500"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className={styles.submitButton}>Save Changes</button>
              </div>
            </div>
          </div>

          <div
            className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white`}
          >
            <div className={"container py-4"}>
              <h5 className={styles.subtitle}>Contact Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Country</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="United States of America"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>City</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="Chicago"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Complete Address</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="205 North Michigan Avenue, Suite 810, Chicago"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Find on Map</label>
                    <input
                      className={styles.formControl}
                      type="text"
                      placeholder="Search address here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white`}
          >
            <div className={"container py-4"}>
              <h5 className={styles.subtitle}>Google Map</h5>
              <div className="mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18..."
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-4">
                <button className={styles.submitButton}>Save Changes</button>
              </div>
            </div>
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

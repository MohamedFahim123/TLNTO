import styles from "./dashboardStyles.module.css";

export default function PostJobSection() {
  return (
    <div className={`col-12 ${styles.container}`}>
      <div className={styles.sectionBox}>
        <div className={styles.container}>
          <h2 className={`my-2 ${styles.title}`}>Post Job</h2>
          <div className={`${styles.panelWhite} mb-30`}>
            <div className={styles.boxPadding}>
              <h5 className={styles.subtitle}>Tell us about your role</h5>
              <div className="row mt-30">
                <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>Job title *</label>
                        <input
                          className={styles.formControl}
                          type="text"
                          placeholder="e.g. Senior Product Designer"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>
                          Add your job description *
                        </label>
                        <textarea
                          className={styles.formControl}
                          name="message"
                          rows={8}
                          placeholder="lorem ipsum dolor , dolor sit amet dolor"
                          defaultValue={""}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>Job location</label>
                        <input
                          className={styles.formControl}
                          type="text"
                          placeholder='e.g. "New York City" or "San Francisco”'
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>
                          Workplace type *
                        </label>
                        <select className={styles.formControl}>
                          <option value={1}>Remote</option>
                          <option value={2}>Office</option>
                        </select>
                      </div>
                    </div>

                    {/* Salary */}
                    <div className="col-lg-6 col-md-6">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>Salary</label>
                        <input
                          className={styles.formControl}
                          type="text"
                          placeholder="$2200 - $2500"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className={`${styles.formGroup} mb-30`}>
                        <label className={styles.formLabel}>
                          Tags (optional)
                        </label>
                        <input
                          className={styles.formControl}
                          type="text"
                          placeholder="Figma, UI/UX, Sketch..."
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <button className={styles.submitButton}>
                        Post New Job
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

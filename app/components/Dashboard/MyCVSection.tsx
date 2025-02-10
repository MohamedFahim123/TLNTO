"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./dashboardStyles.module.css";
import { MdDelete } from "react-icons/md";
import Cookies from "js-cookie";
import { MainRegion } from "@/app/utils/mainData";
import UploadProfileVideo from "./UploadProfileVideo";

export default function MyCVSection({cookieToken}: {cookieToken: string}) {
  const region: string = Cookies.get("region") || MainRegion;

  return (
    <div className="col-12">
      <div className="head d-flex align-items-center justify-content-between">
        <h4 className=" my-4">My Journey</h4>
        <div className="links bg-white border border-black border-opacity-10 border-1 rounded-3 py-2 px-4 text-black-50">
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
            My Journey
          </span>
        </div>
      </div>

      <UploadProfileVideo cookieToken={cookieToken} />

      <div
        className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4`}
      >
        <div className="container py-4">
          <h5 className={styles.title}>Education</h5>
          <div className="row mt-3">
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="institutionCv"
              >
                Institution *
              </label>
              <input
                className={styles.formControl}
                type="text"
                name="institutionCv"
                id="institutionCv"
                placeholder="National Design Academy"
              />
            </div>
            <div className="col-lg-6 mb-3 d-md-none d-lg-block"></div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>From</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>To</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label className={`${styles.formLabel} mb-2`}>Description</label>
              <textarea
                className={styles.formControl}
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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

      <div
        className={
          "section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4"
        }
      >
        <div className={"container py-4"}>
          <h5 className={styles.title}>Work Experience</h5>
          <div className="row mt-3">
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`} htmlFor="CVCompany">
                Company *
              </label>
              <input
                className={styles.formControl}
                id="CVCompany"
                type="text"
                placeholder="compnay Name"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CVJobTitle"
              >
                Job Title
              </label>
              <input
                className={styles.formControl}
                id="CVJobTitle"
                type="text"
                placeholder="Product Designer"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CVIndustry"
              >
                Industry
              </label>
              <select
                className={`${styles.formControl} form-select`}
                id="CVIndustry"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Industry
                </option>
                <option value="1">Software</option>
                <option value="2">Finance</option>
                <option value="3">Recruting</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3 d-md-none d-lg-block"></div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>From</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>To</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label className={`${styles.formLabel} mb-2`}>Description</label>
              <textarea
                className={styles.formControl}
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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

      <div
        className={
          "section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4"
        }
      >
        <div className={"container py-4"}>
          <h5 className={styles.title}>Skills</h5>
          <div className="row mt-3">
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CvCategory"
              >
                Category *
              </label>
              <select
                className={`form-select ${styles.formControl}`}
                id="CvCategory"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="1">Software</option>
                <option value="2">Finance</option>
                <option value="3">Recruting</option>
                <option value="4">Management</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CvSubCategory"
              >
                Sub-Category *
              </label>
              <select
                className={`form-select ${styles.formControl}`}
                id="CvSubCategory"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Sub-Category
                </option>
                <option value="1">Software</option>
                <option value="2">Finance</option>
                <option value="3">Recruting</option>
                <option value="4">Management</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label htmlFor="cvSkill" className={`${styles.formLabel} mb-2`}>
                Skill
              </label>
              <select
                className={`${styles.formControl} form-select`}
                id="cvSkill"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select A Skill
                </option>
                <option value="1">Software</option>
                <option value="2">Finance</option>
                <option value="3">Recruting</option>
                <option value="4">Management</option>
              </select>
            </div>
            <div className="col-lg-12 mt-3">
              <button className={styles.submitButton}>Add Skills</button>
            </div>
          </div>
          <div className="my-3">
            <h4 className="mb-3">Added Skills</h4>
            <div
              className={
                "d-inline-block me-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Skill 1
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
            <div
              className={
                "d-inline-block mx-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Skill 2
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
            <div
              className={
                "d-inline-block mx-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Skill 3
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4`}
      >
        <div className="container py-4">
          <h5 className={styles.title}>Courses</h5>
          <div className="row mt-3">
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CvCoursesTitle"
              >
                Course Title *
              </label>
              <input
                className={styles.formControl}
                type="text"
                name="CvCoursesTitle"
                id="CvCoursesTitle"
                placeholder="Course Title"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="institutionCvCourses"
              >
                Course Provider Institution *
              </label>
              <input
                className={styles.formControl}
                type="text"
                name="institutionCvCourses"
                id="institutionCvCourses"
                placeholder="Course Provider Institution"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="CertificationAvalable"
              >
                Certification Available? (Yes / No) *
              </label>
              <select
                className={`${styles.formControl} form-select`}
                name="CertificationAvalable"
                id="CertificationAvalable"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Availablity
                </option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </select>
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="institutionCvCertificationIssuer"
              >
                Certification Issuer *
              </label>
              <input
                className={styles.formControl}
                type="text"
                name="institutionCvCertificationIssuer"
                id="institutionCvCertificationIssuer"
                placeholder="Certification Issuer"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label
                className={`${styles.formLabel} mb-2`}
                htmlFor="institutionCvCertificationId"
              >
                Certification Id
              </label>
              <input
                className={styles.formControl}
                type="text"
                name="institutionCvCertificationId"
                id="institutionCvCertificationId"
                placeholder="Certification Id"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>From</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-6 mb-3">
              <label className={`${styles.formLabel} mb-2`}>To</label>
              <input
                className={styles.formControl}
                type="date"
                defaultValue="2022-09-20"
              />
            </div>
            <div className="col-lg-12 mt-3">
              <label className={`${styles.formLabel} mb-2`}>Description</label>
              <textarea
                className={styles.formControl}
                rows={5}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="col-lg-12 mt-3">
              <button className={styles.submitButton}>Add Course</button>
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

      <div
        className={
          "section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white mb-4"
        }
      >
        <div className={"container py-4"}>
          <h5 className={styles.title}>Languages</h5>
          <div className="row mt-3">
            <div className="col-lg-6 mb-3">
              <label
                htmlFor="cvLanguage"
                className={`${styles.formLabel} mb-2`}
              >
                Language
              </label>
              <select
                className={`${styles.formControl} form-select`}
                id="cvLanguage"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select Language
                </option>
                <option value="1">English</option>
                <option value="2">Spanish</option>
                <option value="3">French</option>
                <option value="4">German</option>
              </select>
            </div>
            <div className="col-lg-12 mt-3">
              <button className={styles.submitButton}>Add Language</button>
            </div>
          </div>
          <div className="my-3">
            <h4 className="mb-3">Added Languages</h4>
            <div
              className={
                "d-inline-block me-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Language 1
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
            <div
              className={
                "d-inline-block mx-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Language 2
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
            <div
              className={
                "d-inline-block mx-2 bg-gray text-center px-2 py-1 border border-1 border-black border-opacity-10 rounded-4"
              }
            >
              Language 3
              <MdDelete size={20} className="text-danger ms-2 mb-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

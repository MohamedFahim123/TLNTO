import Image from "next/image";
import Link from "next/link";
import styles from "./dashboardStyles.module.css";
import { CandidateInterface } from "./CandidateSection";

export default function Candidate({ item }: { item: CandidateInterface }) {
  return (
    <>
      <div
        className={`${styles.candidateCard} card-grid-2 hover-up d-flex flex-column justify-content-between`}
      >
        <div className="card-grid-2-image-left">
          <div className="card-grid-2-image-rd online">
            <figure>
              <Link href="/">
                <Image
                  width={110}
                  height={110}
                  src={`/assets/imgs/page/candidates/${item.img}`}
                  alt="jobBox"
                />
              </Link>
            </figure>
          </div>
          <div className="card-profile pt-10">
            <a href="#">
              <h5>{item.title}</h5>
            </a>
            <span className="font-xs color-text-mutted">{item.job}</span>
            <div className="rate-reviews-small pt-5">
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="jobBox"
                />
              </span>
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="jobBox"
                />
              </span>
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="jobBox"
                />
              </span>
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="jobBox"
                />
              </span>
              <span>
                <Image
                  width={10}
                  height={10}
                  src="/assets/imgs/template/icons/star.svg"
                  alt="jobBox"
                />
              </span>
              <span className="ml-10 color-text-mutted font-xs">
                ({item.rating})
              </span>
            </div>
          </div>
        </div>
        <div className="card-block-info">
          <p className="font-xs color-text-paragraph-2">{item.des}</p>
          <div className="card-2-bottom card-2-bottom-candidate mt-30">
            <div className="text-start">
              {item.skills.map((skill) => (
                <a className="btn btn-tags-sm mb-10 mr-5" key={skill} href="#">
                  {skill}
                </a>
              ))}
            </div>
          </div>
          <div className="employers-info align-items-center justify-content-center mt-15">
            <div className="row">
              <div className="col-6">
                <span className="d-flex align-items-center">
                  <i className="fi-rr-marker mr-5 ml-0" />
                  <span className="font-sm color-text-mutted">
                    {item.location}
                  </span>
                </span>
              </div>
              <div className="col-6">
                <span className="d-flex justify-content-end align-items-center">
                  <i className="fi-rr-clock mr-5" />
                  <span className="font-sm color-brand-1">
                    ${item.salary} / hour
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

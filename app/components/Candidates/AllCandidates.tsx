import Image from "next/image";
import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;
export default function AllCandidates() {
  return (
    <section className="section-box mt-30">
      <div className="container">
        <div className="content-page">
          <div className="box-filters-job">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <span className="text-small text-showing">
                  Showing <strong>41-60 </strong>of <strong>944 </strong>jobs
                </span>
              </div>
              <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                <div className="display-flex2">
                  <div className="box-border mr-10">
                    <span className="text-sortby">Show:</span>
                    <div className="dropdown dropdown-sort">
                      <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                        <span>12</span>
                        <i className="fi-rr-angle-small-down" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item active">10</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item">12</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item">20</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-border">
                    <span className="text-sortby">Sort by:</span>
                    <div className="dropdown dropdown-sort">
                      <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                        <span>Newest Post</span>
                        <i className="fi-rr-angle-small-down" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item active">Newest Post</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item">Oldest Post</a>
                          </Link>
                        </li>
                        <li>
                          <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                            <a className="dropdown-item">Rating Post</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user1.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Robert Fox</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user2.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Cody Fisher</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">Python developer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user3.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Jerome Bell</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">Content Manager</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user4.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Jane Cooper</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">Network</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user5.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Floyd Miles</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">Photo Editing</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user6.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Devon Lane</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">Online Marketing</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user7.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Jerome Bell</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user8.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Eleanor</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user9.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Theresa</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user10.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Robert Fox</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user11.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Cameron</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user12.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Jacob Jones</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user13.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Court Henry</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user14.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Hawkins</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user15.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5>Howard</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="card-grid-2 hover-up">
                <div className="card-grid-2-image-left">
                  <div className="card-grid-2-image-rd online">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <figure>
                          <Image width={100} height={100} alt="jobBox" src="/assets/imgs/page/candidates/user1.png" />
                        </figure>
                      </a>
                    </Link>
                  </div>
                  <div className="card-profile pt-10">
                    <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                      <a>
                        <h5> Alexander</h5>
                      </a>
                    </Link>
                    <span className="font-xs color-text-mutted">UI/UX Designer</span>
                    <div className="rate-reviews-small pt-5">
                      <span className="ml-10 color-text-mutted font-xs">(65)</span>
                    </div>
                  </div>
                </div>
                <div className="card-block-info">
                  <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                  <div className="card-2-bottom card-2-bottom-candidate mt-30">
                    <div className="text-start">
                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Figma</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Adobe XD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">PSD</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">App</a>
                      </Link>

                      <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                        <a className="btn btn-tags-sm mb-10 mr-5">Digital</a>
                      </Link>
                    </div>
                  </div>
                  <div className="employers-info align-items-center justify-content-center mt-15">
                    <div className="row">
                      <div className="col-6">
                        <span className="d-flex align-items-center">
                          <i className="fi-rr-marker mr-5 ml-0" />
                          <span className="font-sm color-text-mutted">Chicago, US</span>
                        </span>
                      </div>
                      <div className="col-6">
                        <span className="d-flex justify-content-end align-items-center">
                          <i className="fi-rr-clock mr-5" />
                          <span className="font-sm color-brand-1">$45 / hour</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paginations">
          <ul className="pager">
            <li>
              <a className="pager-prev" href={`/${Region}/jobs/candidates/slug`} />
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">1</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">2</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">3</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">4</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">5</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number active">6</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/${Region}/jobs/candidates/slug`}>
                <a className="pager-number">7</a>
              </Link>
            </li>
            <li>
              <a className="pager-next" href={`/${Region}/jobs/candidates/slug`} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

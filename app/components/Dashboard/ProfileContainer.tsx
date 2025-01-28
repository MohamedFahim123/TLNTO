import Image from "next/image";
import Link from "next/link";

export default function ProfileContainer() {
  return (
    <>
      <div className="head d-flex align-items-center justify-content-between ">
        <h4 className=" my-4">My Profile</h4>
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
            My Profile
          </span>
        </div>
      </div>
      <div className="col-xxl-9 col-xl-8 col-lg-8 ">
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className="panel-white mb-30 ">
              <div className="box-padding ">
                <h6 className="color-text-paragraph-2 mb-4">
                  Update your profile
                </h6>
                <div className="box-profile-image d-flex align-items-center mb-4">
                  <div className="img-profile">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/imgs/page/profile/img-profile.png"
                      alt="jobBox"
                    />
                  </div>
                  <div className="info-profile ms-4">
                    <a className="btn btn-default">Upload Avatar</a>
                    <a className="btn btn-link">Delete</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Full Name *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Steven Job"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Email *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="stevenjob@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Contact number
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="01 - 234 567 89"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Personal website
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="https://alithemes.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        style={{ height: "130px" }}
                        spellCheck="false"
                        defaultValue={
                          "We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Experience
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="1 - 5 Years"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Education Levels
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Certificate"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Languages
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="English, French"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Categories
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="UI/UX designer"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Current Salary($)
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="$2500"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Expected Salary($)
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="$3500"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-10">
                      <button className="btn btn-default btn-brand icon-tick">
                        Save Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-white mb-30">
              <div className="box-padding">
                <h6 className="color-text-paragraph-2">Contact Information</h6>
                <div className="row mt-30">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Country
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="United States of America"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        City
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Chicago"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Complete Address
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Find On Map
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Latitude
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="41.881832"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Longitude
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder=" -87.623177"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Google Map
                      </label>
                      <div className="box-map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4860084541583!2d-87.62575418429162!3d41.88608087922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e1!3m2!1svi!2s!4v1663165156864!5m2!1svi!2s"
                          style={{ border: 0 }}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          width="100%"
                          height={400}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-0">
                      <button className="btn btn-default btn-brand icon-tick">
                        Save Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-3 col-xl-4 col-lg-4 mt-sm-4 mt-lg-0">
        <div className="section-box py-3 mb-4 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>Social Network</h5>
                <a
                  className="menudrop"
                  id="dropdownMenu3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-display="static"
                />
                <ul
                  className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                  aria-labelledby="dropdownMenu3"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Add new
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Actions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="panel-body pt-20">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Facebook
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="https://www.facebook.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Twitter
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="https://twitter.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <label className="font-sm color-text-mutted mb-10">
                        Instagram
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="https://www.instagram.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-0">
                      <button className="btn btn-default btn-brand icon-tick">
                        Save Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <h5>My Skill</h5>
                <a
                  className="menudrop"
                  id="dropdownMenu3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-display="static"
                />
                <ul
                  className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                  aria-labelledby="dropdownMenu3"
                >
                  <li>
                    <a className="dropdown-item active" href="#">
                      Add new
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Actions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="panel-body pt-20">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <input
                        className="form-control icon-search-right"
                        type="text"
                        placeholder="E.g. Angular, Laravel..."
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-20">
                      <a className="btn btn-tag tags-link">
                        Figma
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        Adobe XD
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        NextJS
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        React
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        App
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        Digital
                        <span />
                      </a>
                      <a className="btn btn-tag tags-link">
                        NodeJS
                        <span />
                      </a>
                    </div>
                    <div className="mt-30 mb-40">
                      <span className="info-icon font-sm color-text-paragraph-2">
                        You can add up to 15 skills
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-0">
                      <button className="btn btn-default btn-brand icon-tick">
                        Save Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

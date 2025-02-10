export default function ProfleSideContent() {
  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4 mt-sm-4 mt-lg-0">
      {/* <div className="section-box py-3 mb-4 border border-black border-opacity-10 border-1 rounded-4 bg-white">
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
  </div> */}
      <div className="section-box py-3 border border-black border-opacity-10 border-1 rounded-4 bg-white">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <h5>Familiar With...</h5>
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
                    <select
                      className="form-control form-select icon-search-right"
                      defaultValue={""}
                    >
                      <option value="" disabled>
                        Familiar With
                      </option>
                      <option value="1">HTML</option>
                      <option value="2">CSS</option>
                      <option value="3">Javascript</option>
                      <option value="4">PHP</option>
                    </select>
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
  );
}

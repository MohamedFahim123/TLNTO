import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer mt-20">
        <div className="container">
          <div className="box-footer">
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-25 text-center text-md-start">
                <p className="font-sm color-text-paragraph-2">
                  © {new Date().getFullYear()} -{" "}
                  <Link
                    className="color-brand-2"
                    href="https://themeforest.net/item/jobbox-job-portal-html-bootstrap-5-template/39217891"
                    target="_blank"
                  >
                    JobBox{" "}
                  </Link>
                  Dashboard <span> Made by </span>
                  <Link
                    className="color-brand-2"
                    href="http://alithemes.com"
                    target="_blank"
                  >
                    AliThemes
                  </Link>
                </p>
              </div>
              <div className="col-md-6 col-sm-12 text-center text-md-end mb-25">
                <ul className="d-flex justify-content-end align-items-center gap-3">
                  <li>
                    <Link href="#">About</Link>
                  </li>
                  <li>
                    <Link href="#">Careers</Link>
                  </li>
                  <li>
                    <Link href="#">Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

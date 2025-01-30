import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;
export default function UserRegisterForm() {
  return (
    <form className="login-register text-start mt-20" action="#">
      <div className="form-group">
        <label className="form-label" htmlFor="input-1">
          Full Name *
        </label>
        <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-2">
          Email *
        </label>
        <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="stevenjob@gmail.com" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-3">
          Username *
        </label>
        <input className="form-control" id="input-3" type="text" required name="username" placeholder="stevenjob" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-4">
          Password *
        </label>
        <input className="form-control" id="input-4" type="password" required name="password" placeholder="************" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-5">
          Re-Password *
        </label>
        <input className="form-control" id="input-5" type="password" required name="re-password" placeholder="************" />
      </div>
      <div className="login_footer form-group d-flex justify-content-between">
        <label className="cb-container">
          <input type="checkbox" />
          <span className="text-small">Agree our terms and policy</span>
          <span className="checkmark" />
        </label>
        <Link legacyBehavior href="/page-contact">
          <a className="text-muted">Lean more</a>
        </Link>
      </div>
      <div className="form-group">
        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
          Submit &amp; Register
        </button>
      </div>
      <div className="text-muted text-center">
        Already have an account?
        <Link legacyBehavior href={`/${Region}/auth/login`}>
          <a>Sign in</a>
        </Link>
      </div>
    </form>
  );
}

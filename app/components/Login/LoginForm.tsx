import Link from "next/link";

import { MainRegion } from "@/app/utils/mainData";
import Cookies from "js-cookie";
const Region: string = Cookies.get("region") || MainRegion;
export default function LoginForm() {
  return (
    <form className="login-register text-start mt-20" action="#">
      <div className="form-group">
        <label className="form-label" htmlFor="input-1">
          Email address *
        </label>
        <input className="form-control" id="input-1" type="email" required name="fullname" placeholder="Steven Job" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="input-4">
          Password *
        </label>
        <input className="form-control" id="input-4" type="password" required name="password" placeholder="************" />
      </div>
      <div className="login_footer form-group d-flex justify-content-between">
        <label className="cb-container">
          <input type="checkbox" />
          <span className="text-small">Remenber me</span>
          <span className="checkmark" />
        </label>
        <Link legacyBehavior href="/page-contact">
          <a className="text-muted">Forgot Password</a>
        </Link>
      </div>
      <div className="form-group">
        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">
          Login
        </button>
      </div>
      <div className="text-muted text-center">
        Don{"'"}t have an Account?
        <Link legacyBehavior href={`/${Region}/auth/register`}>
          <a>Sign up</a>
        </Link>
      </div>
    </form>
  );
}

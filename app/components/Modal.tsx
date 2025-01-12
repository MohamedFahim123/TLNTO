import React from 'react';
import Link from "next/link";

const Modal = () => {
    return (
        <>
            <div className="modal fade" id="ModalApplyJobForm" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content apply-job-form">
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="modal-body pl-30 pr-30 pt-50">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Job Application </p>
                                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                                <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer.</p>
                            </div>
                            <form className="login-register text-start mt-20 pb-30" action="#">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-1">Full Name *</label>
                                    <input className="form-control" id="input-1" type="text" required name="fullname" placeholder="Steven Job" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="input-2">Email *</label>
                                    <input className="form-control" id="input-2" type="email" required name="emailaddress" placeholder="stevenjob@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="number">Contact Number *</label>
                                    <input className="form-control" id="number" type="text" required name="phone" placeholder="(+01) 234 567 89" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="des">Description</label>
                                    <input className="form-control" id="des" type="text" required name="Description" placeholder="Your description..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="file">Upload Resume</label>
                                    <input className="form-control" id="file" name="resume" type="file" />
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark" />
                                    </label>

                                    <Link legacyBehavior href="/page-contact"><a className="text-muted">Lean more</a></Link>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default hover-up w-100" type="submit" name="login">Apply Job</button>
                                </div>
                                <div className="text-muted text-center">Do you need support?
                                <Link legacyBehavior href="/page-contact"><a>Contact Us</a></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;
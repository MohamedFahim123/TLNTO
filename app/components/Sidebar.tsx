import Link from "next/link";
import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useState } from "react";
import Cookies from 'js-cookie';

const Sidebar = ({ openClass }: { openClass: string }) => {
    const [isActive, setIsActive] = useState<{ status: boolean, key?: string | number }>({
        status: false,
        key: "",
    });
    const Region : string = Cookies.get('region') || 'riyadh';

    const handleToggle = (key: string | number) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        };
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…" /><i className="fi-rr-search" />
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>
                                            <Link legacyBehavior href={`/${Region}/jobs/home`}><a className="active">Home</a></Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href={`/${Region}/jobs/our-jobs`}><a>Find a Job</a></Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>
                                            <Link legacyBehavior href="/"><a>Recruiters</a></Link>
                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/"><a>Candidates</a></Link>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link legacyBehavior href="/"><a>Pages</a></Link>
                                        </li>
                                        <li className={isActive.key == 6 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(6)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>
                                            <Link legacyBehavior href="/"><a>Blog</a></Link>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="/"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link legacyBehavior href="/"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright">Copyright 2022 © JobBox. <br />Designed by AliThemes.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(Sidebar);
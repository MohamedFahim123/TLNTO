'use client';
import { useState } from 'react';
import { PropsChildren } from '../utils/interfaces';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function RegionLayout({ children }: PropsChildren) {
    const [openClass, setOpenClass] = useState<string>('');

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    };

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        };
    };
    return (
        <>
            <div className="body-overlay-1" onClick={handleRemove} />
            <Header handleOpen={handleOpen} handleRemove={handleRemove} openClass={openClass} />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
};
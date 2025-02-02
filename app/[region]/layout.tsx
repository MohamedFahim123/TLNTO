"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { PropsChildren } from "../utils/interfaces";
import { ToastContainer } from "react-toastify";

export default function RegionLayout({ children }: PropsChildren) {
  const [openClass, setOpenClass] = useState<string>("");
  const pathName = usePathname();

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };

  return (
    <>
      {!pathName.includes("/dashboard") ? (
        <>
          <div className="body-overlay-1" onClick={handleRemove} />
          <ToastContainer position="top-right" />
          <Header
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            openClass={openClass}
          />
          <Sidebar openClass={openClass} />
          <main className="main">{children}</main>
          <Footer />
          <BackToTop />
        </>
      ) : (
        <>
          <ToastContainer position="top-right" />
          {children}
        </>
      )}
    </>
  );
}

import React, { useEffect } from "react";
import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import ScrollToTop from "../components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

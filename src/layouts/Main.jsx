import React from "react";
import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

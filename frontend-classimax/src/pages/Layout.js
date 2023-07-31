import { Outlet } from "react-router-dom";

import React from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbarheader/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;

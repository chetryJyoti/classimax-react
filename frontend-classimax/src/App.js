import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";
import Unauthorized from "./pages/Unauthorized";
import Package from "./pages/Package";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdPostingForm from "./pages/forms/AdPostingForm";
import Listing from "./pages/Listing";
import Layout from "./pages/Layout";
import RequireAuth from "./pages/auth/RequireAuth";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* protected routes */}
          <Route element={<RequireAuth allowedRoles={["normal", "admin"]} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addListing" element={<AdPostingForm />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/package" element={<Package />} />
          </Route>
          <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

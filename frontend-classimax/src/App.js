import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Package from "./pages/Package";
import SinglePage from "./pages/SinglePage";
import SinglePost from "./pages/SinglePost";
import StoreSingle from "./pages/StoreSingle";
import Blog from "./pages/Blog";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdPostingForm from "./pages/forms/AdPostingForm";
const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/package" element={<Package />} />
          <Route path="/singlePost" element={<SinglePost />} />
          <Route path="/singlePage" element={<SinglePage />} />
          <Route path="/storeSingle" element={<StoreSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addListing" element={<AdPostingForm />} />
        </Routes>
    </>
  );
};

export default App;

import React from "react";
import Navbar from "../components/Navbarheader.js";
import { Container, Typography } from "@mui/material";
import HeroArea from "../components/HeroArea.js";
import TrendingAds from "../components/TrendingAds.js";
import CategorySection from "../components/CategorySection.js";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroArea/>
      <TrendingAds/>
      <CategorySection/>
    </div>
  );
};

export default Home;

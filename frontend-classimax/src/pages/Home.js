import React from "react";
import Navbarheader from "../components/Navbar/Navbarheader.js";
import HeroArea from "../components/SearchArea/HeroArea.js";
import TrendingAds from "../components/TrendingArea/TrendingAds.js";
import CategorySection from "../components/CategoryArea/CategorySection.js";
import AddBrowseListing from "../components/AddBrowseListing.js";
import Footer from "../components/Footer.js";
const Home = () => {
  return (
    <div>
      <Navbarheader />
      <HeroArea/>
      <TrendingAds/>
      <CategorySection/>
      <AddBrowseListing/>
      <Footer/>
    </div>
  );
};

export default Home;

import React from "react";
import HeroArea from "../components/SearchArea/HeroArea.js";
import TrendingAds from "../components/TrendingArea/TrendingAds.js";
import CategorySection from "../components/CategoryArea/CategorySection.js";
import AddBrowseListing from "../components/AddBrowseListing.js";

const Home = () => {
  return (
    <div>

      <HeroArea/>
      <TrendingAds/>
      <CategorySection/>
      <AddBrowseListing/>

    </div>
  );
};

export default Home;

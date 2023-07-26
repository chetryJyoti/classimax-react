import React from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import UserAdsCard from "../components/DashComp/UserAdsCard";
import UserCard from "../components/DashComp/UserCard";
import { Typography, Grid } from "@mui/material";
import Footer from "../components/Footer";
const Dashboard = () => {
  const productInfo = {
    productTitle: "realme phone",
    productId: "328687238326478263kdjshaf",
    postedOn: "28 june 23",
    status: "active",
    location: "mettupulayam,Tamil Nadu",
    category: "electronics",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10PeOtYSjFv6g3fy9UXE4olHwPAG6s7abSw&usqp=CAU",
  };
  const useDetails= {
    username:'Jyoti chetry',
    email:"chetry@gmail.com",
    
  }
  return (
    <>
      <Navbarheader />
      <div style={{padding:'40px'}}>
      <Typography textAlign="center" variant="h4" marginBottom={1}>
        Your Ads
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <UserCard useDetails={useDetails}/>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <UserAdsCard productInfo={productInfo}/>
            <UserAdsCard  productInfo={productInfo}/>
          </div>
        </Grid>
      </Grid>
      ;
      </div>
      
      <Footer />
    </>
  );
};

export default Dashboard;

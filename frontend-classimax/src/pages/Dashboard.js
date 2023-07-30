import React, { useEffect, useState } from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import UserAdsCard from "../components/DashComp/UserAdsCard";
import UserCard from "../components/DashComp/UserCard";
import { Typography, Grid } from "@mui/material";
import Footer from "../components/Footer";
import axios from "axios";
import showNotification from "../functions/notification";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const [userlistings, setUserListings] = useState([]);
  // sample data from the api
  const productInfo = {
    _id: "64c0ec20ac15b994338fb514",
    user: {
      _id: "64be3ca2f5a97df29e2b90c0",
      username: "jyoti1@gmail.com",
      roles: ["admin"],
      active: true,
      __v: 1,
    },
    seller: {
      _id: "64bf61acda3e7d4046523c3c",
      name: "John Doe",
      email: "johndoe@example.com",
      number: 1234567890,
      address: "123 Main Street",
      __v: 0,
    },
    title: "iphone on sale4",
    category: "Electronics",
    type: "business",
    price: 5000,
    negotiable: false,
    desc: "This is a sample ad listing4.",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    payment_option: "regular",
    createdAt: "2023-07-26T09:49:20.364Z",
    updatedAt: "2023-07-26T09:49:20.364Z",
    __v: 0,
  };
  //
  // 64be3ca2f5a97df29e2b90c0
  const userId = "64be3ca2f5a97df29e2b90c0";
  // Fetch user details and listings by user ID
  const handleProductDlt = async (productId) => {
    try {
      // Call the API to delete the product
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/adListing/${productId}`
      );
      console.log("response", response);
      if ((response.status = "200")) {
        console.log("response", response.status);
        // Remove the deleted product from the userlistings state
        setUserListings((prevListings) =>
          prevListings.filter((listing) => listing._id !== productId)
        );
        showNotification("Product Deleted successfully!", "success");
      }
      console.log("response", response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/adListing/user/${userId}`
        );
        setUserListings(listingsResponse.data);
        console.log("listingByUser:", listingsResponse.data);
      } catch (error) {
        console.error("Error fetching user listings:", error);
      }
    };
    fetchListings();
  }, [userId]);

  return (
    <>
      <Navbarheader />
      <div style={{ padding: "40px" }}>
        <Typography textAlign="center" variant="h4" marginBottom={1}>
          Your Ads
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <UserCard userDetails={userlistings[0]?.user} />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {userlistings.map((productInfo) => (
                <UserAdsCard
                  key={productInfo._id}
                  productInfo={productInfo}
                  onProductDlt={() => handleProductDlt(productInfo._id)}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;

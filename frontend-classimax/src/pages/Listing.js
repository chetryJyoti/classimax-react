import React, { useState, useEffect } from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import SearchBar from "../components/SearchArea/SearchBar";
import Card from "../components/Card";
import CategoryItem from "../components/CategoryArea/CategoryItem";
import Footer from "../components/Footer";
import axios from "axios";
import showNotification from "../functions/notification";
import ClipLoader from "react-spinners/ClipLoader";

import { Grid, Pagination, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";

const Listing = () => {
  const [listings, setListings] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  //for category iteams available listing
  const [categoryItems, setCategoryItems] = useState();

  //get all category items
  const getCategoryItems = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/adListing/categoryCounts`
      );
      // console.log("categoryItems", response.data);
      if (response.data) {
        setCategoryItems(response.data);
      }
      return response.data;
    } catch (error) {
      // console.error("Error fetching listings:", error);
      showNotification("some error occured while fetching categories", "error");
      return null;
    }
  };
  useEffect(() => {
    const fetchListings = async () => {
      const data = await getAllListings(pageNumber);
      if (data) {
        // console.log("data:", data.adListings);
        setListings(data.adListings);
        setTotalPages(data.totalPages);
        setTotalCount(data.totalCount);
      }
    };

    fetchListings();
  }, [pageNumber]);

  useEffect(() => {
    getCategoryItems();
  }, []);

  // console.log("listings:", listings);
  const getAllListings = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/adListing`,
        {
          params: {
            page: pageNumber,
          },
        }
      );
      // console.log(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error("Error fetching listings:", error);
      showNotification("some error occured", "error");
      return null;
    }
  };

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage);
  };

  // Handler function to handle the search
  const handleSearch = (searchQuery, sortOrder, location) => {
    const filteredListings = listings.filter((listing) => {
      const isMatchingSearchQuery =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.desc.toLowerCase().includes(searchQuery.toLowerCase());

      const isMatchingLocation =
        location === "" || listing.location === location;

      return isMatchingSearchQuery &&  isMatchingLocation;
    });

    // Sort the filtered listings based on the sortOrder
    if (sortOrder === "lowestToHighest") {
      filteredListings.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highestToLowest") {
      filteredListings.sort((a, b) => b.price - a.price);
    }

    // Update the state with filtered and sorted listings
    setListings(filteredListings);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ToastContainer />
      <Grid container spacing={2} padding={4} marginTop={6}>
        <Grid item md={3} style={{ width: "100%" }}>
          <CategoryItem
            style={{ padding: "0" }}
            iconClass=" "
            title="All Categories"
            items={categoryItems}
            background="white"
            boxShadow=""
          />
        </Grid>
        <Grid item xs={12} md={9}>
          {!loading && listings.length == 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "120px",
                marginBottom: "120px",
              }}
            >
              <Typography variant="h6"> No Products found!!!</Typography>
            </div>
          )}
          {loading && (
            <div
              style={{
                textAlign: "center",
                marginTop: "120px",
                marginBottom: "120px",
              }}
            >
              <ClipLoader
                color="blue"
                loading={loading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
          {!loading && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {listings?.map((option, index) => (
                <Card
                  key={listings._id}
                  value={
                    option?.images[0] ||
                    "https://i.pinimg.com/originals/70/84/f4/7084f4182630ae4bd2bcc9cbaa831d6e.png"
                  }
                  name={option?.title || "N/A"}
                  category={option?.category || "N/A"}
                  date={
                    new Date(option?.createdAt)?.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }) || "N/A"
                  }
                  desc={option?.desc || "N/A"}
                  price={option?.price || "N/A"}
                  rating="4"
                />
              ))}
            </div>
          )}
          <div style={{ marginTop: "6px" }}>
            <Pagination
              count={totalPages}
              page={pageNumber}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
            <Typography variant="h6" marginTop={4}>
              Available Listings: {totalCount}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Listing;

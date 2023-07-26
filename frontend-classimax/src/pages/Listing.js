import React from "react";
import Navbarheader from "../components/Navbar/Navbarheader";
import SearchBar from "../components/SearchArea/SearchBar";
import Card from "../components/Card";
import about from "../assets/about/about.jpg";
import CategoryItem from "../components/CategoryArea/CategoryItem";
import Footer from "../components/Footer"
import { Box, Grid, Pagination, Slider, Typography,MenuItem,Select,InputLabel,FormControl } from "@mui/material";
const cardData = [
  {
    value: about,
    name: "11inch Macbook Air",
    category: "Electronics",
    date: "26th December",
    rating: "3",
  },
  {
    value: about,
    name: "Full Study Table Combo",
    category: "Furnitures",
    date: "28th December",
    rating: "5",
  },
  {
    value: about,
    name: "Gaming Mouse",
    category: "Electronics",
    date: "29th December",
    rating: "3",
  },
  {
    value: about,
    name: "Leather Sofa Set",
    category: "Furnitures",
    date: "30th December",
    rating: "4",
  },
];
const categoryItems = [
  {
    iconClass: "",
    title: "Category 1",
    items: [
      { name: "Item 1", count: 10 },
      { name: "Item 2", count: 5 },
    ],
    background: "#FF5733",
  },
  {
    iconClass: "",
    title: "Category 2",
    items: [
      { name: "Item 3", count: 15 },
      { name: "Item 4", count: 20 },
    ],
  },
];
const Listing = () => {
  return (
    <div>
      <Navbarheader />
      <SearchBar />
      <Grid container spacing={2} padding={4} marginTop={6}>
        <Grid item md={3} style={{ width: "100%" }}>
          {categoryItems.map((category, index) => (
            <div>
              <CategoryItem
                style={{ padding: "0" }}
                key={index}
                iconClass={category?.iconClass}
                title={category.title}
                items={category.items}
                background={category?.background}
                boxShadow={category?.boxShadow}
              />
            </div>
          ))}
          {/* for price */}
          <Box>
            <Typography variant="h6">Price Range</Typography>
            <Slider
              getAriaLabel={() => "Price"}
              defaultValue={500}
              // value={}
              // onChange={}
              valueLabelDisplay="auto"
              // getAriaValueText={}
              disableSwap
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box paddingBottom={1} paddingRight={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Most Popular</MenuItem>
                <MenuItem value={20}>Highest Price</MenuItem>
                <MenuItem value={30}>Lowest Price</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {cardData.map((option, index) => (
              <Card option={option} />
            ))}
          </div>
          <Pagination count={6} variant="outlined" shape="rounded" />
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
};

export default Listing;

import React, { useState } from "react";
import useStyles from "./SearchStyles";
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
const SearchBar = ({ onSearch }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  // const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch function with the search query, category, and location
    onSearch(searchQuery, sortOrder, location);
  };
  return (
    <div className={classes.advanceSearch}>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="What are you looking for"
            placeholder="What are you looking for"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={sortOrder}
              onChange={handleSortOrderChange}
            >
              <MenuItem value="">Sort By</MenuItem>
              <MenuItem value="lowestToHighest">Lowest Price</MenuItem>
              <MenuItem value="highestToLowest">Highest Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Location"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{
              padding: "12px",
            }}
            className={classes.searchButton}
            onClick={handleSearch}
          >
            Search Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;

import React from "react";
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
const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.advanceSearch} >
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="What are you looking for"
            placeholder="What are you looking for"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select label="Category" >
              <MenuItem value="1">Top rated</MenuItem>
              <MenuItem value="2">Lowest Price</MenuItem>
              <MenuItem value="3">Highest Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            variant="outlined"
            label="Location"
            placeholder="Location"
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
          >
            Search Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;

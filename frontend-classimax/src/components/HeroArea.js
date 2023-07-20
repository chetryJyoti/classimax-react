import React from "react";
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/home/hero.jpg";
import {
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  Hotel,
  FitnessCenter,
  DriveEta,
  Restaurant,
  LocalCafe,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  heroArea: {
    background: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    color: "white",
    padding:"20px",
    paddingBottom:"0"
  },
  contentBlock: {
    marginTop: "60px",
    marginBttom: "50px",
  },
  h1header: {
  },
  popularCategoryList: {
    marginTop: "18px",
    marginBottom: "40px",
    "& ul": {
      listStyle: "none",
      padding: "14px",
      display: "flex",
      justifyContent: "center",
      "& li": {
        color: "gray",
        padding: "3px",
        marginRight: "4px",
        border: "1px solid gray",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      },
    },
  },
  advanceSearch: {
    marginTop: "10px",
    background: "#fff",
    padding: "40px 15px 25px 15px",
    borderRadius: "3px",
    marginBottom: "-50px",
    boxShadow: "-1px 3px 6px rgba(0, 0, 0, 0.12)",
  },
  //   searchButton: {
  //     marginTop: "2px",
  //     padding:"12px"
  //   },
}));

const HeroArea = () => {
  const classes = useStyles();

  return (
    <section className={classes.heroArea}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.contentBlock}>
              <Typography variant="h2" className={classes.h1header}>
                Buy & Sell Near You
              </Typography>
              <Typography variant="body1">
                Join the millions who buy and sell from each other <br />{" "}
                everyday in local communities around the world
              </Typography>
              <div className={classes.popularCategoryList}>
                <Typography variant="h6">Popular Category</Typography>
                <ul>
                  <li>
                    <Hotel fontSize="small" /> Hotel
                  </li>
                  <li>
                    <FitnessCenter fontSize="small" /> Fitness
                  </li>
                  <li>
                    <DriveEta fontSize="small" /> Cars
                  </li>
                  <li>
                    <Restaurant fontSize="small" /> Restaurants
                  </li>
                  <li>
                    <LocalCafe fontSize="small" /> Cafe
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.advanceSearch}>
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
                    <Select label="Category">
                      <MenuItem value="1">Top rated</MenuItem>
                      <MenuItem value="2">Lowest Price</MenuItem>
                      <MenuItem value="4">Highest Price</MenuItem>
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
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroArea;

import React from "react";
import useStyles from "./SearchStyles";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  Hotel,
  FitnessCenter,
  DriveEta,
  Restaurant,
  LocalCafe,
} from "@mui/icons-material";
import SearchBar from "./SearchBar";



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
            <SearchBar/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroArea;

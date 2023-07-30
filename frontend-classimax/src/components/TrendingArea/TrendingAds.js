import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TrendingData } from "../Data";
import Card from "../Card";
const useStyles = makeStyles({
  popularDeals: {
    background: "#f0f0f0",
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "64px",
  },
  sectionTitle: {
    marginBottom: "32px",
  },
  carouselContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const TrendingAds = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isSmallScreen);
  const trendingData = TrendingData;

  return (
    <section className={classes.popularDeals}>
      <Container>
        <div className={classes.sectionTitle}>
          <Typography variant="h4">Trending Adds</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
            magnam.
          </Typography>
        </div>

        {isSmallScreen ? (
          <Carousel
            autoPlay={false}
            animation="slide"
            swipe
            navButtonsAlwaysVisible
          >
            {trendingData.map((option) => (
              <Grid container spacing={3} key={option.value}>
                <Card
                  key={option.date}
                  value={option.value}
                  name={option?.name || "N/A"}
                  category={option?.category || "N/A"}
                  date={option?.date}
                  desc={option?.desc || "N/A"}
                  rating={option?.rating}
                />
              </Grid>
            ))}
          </Carousel>
        ) : (
          <Carousel
            autoPlay={false}
            animation={isSmallScreen ? "slide" : "fade"}
            swipe={isSmallScreen}
            navButtonsAlwaysVisible={isSmallScreen}
          >
            <div className={classes.carouselContainer}>
              <Grid container spacing={3}>
                {trendingData.slice(0, 3).map((option) => (
                  <Card
                    key={option.date}
                    value={option.value}
                    name={option?.name || "N/A"}
                    category={option?.category || "N/A"}
                    date={option?.date}
                    desc={option?.desc || "N/A"}
                    rating={option?.rating}
                  />
                ))}
              </Grid>
            </div>
            <div className={classes.carouselContainer}>
              <Grid container spacing={3}>
                {trendingData.slice(3, 6).map((option) => (
                  <Card
                    key={option.date}
                    value={option.value}
                    name={option?.name || "N/A"}
                    category={option?.category || "N/A"}
                    date={option?.date}
                    desc={option?.desc || "N/A"}
                    rating={option?.rating}
                  />
                ))}
              </Grid>
            </div>
          </Carousel>
        )}
      </Container>
    </section>
  );
};

export default TrendingAds;

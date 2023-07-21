import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import heroImage from "../assets/home/hero.jpg"
const useStyles = makeStyles(() => ({
    header: {
        background: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        color: "white",
        padding:"70px 0",
      }
}))
const AddBrowseListing = () => {
 const classes = useStyles();
  return (
    <section className={classes.header}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={8}>
            <div className="content-holder">
              <Typography variant="h4" align="center" gutterBottom>
                Start today to get more exposure and grow your business
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    href="ad-listing.html"
                    size='large'
                  >
                    Add Listing
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    sx={{ color: 'black',background:'white' }}
                    href="category.html"
                    size='large'
                  >
                    Browse Listing
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

export default AddBrowseListing;

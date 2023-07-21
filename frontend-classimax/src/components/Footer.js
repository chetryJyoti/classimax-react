import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import appStoreImg from "../assets/apps/apple-app-store.png";
import googleStoreImg from "../assets/apps/google-play-store.png";
import phoneIconImg from "../assets/footer/phone-icon.png";
import logofooter from "../assets/logo-footer.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  footer: {
    background: "#333",
    color: "#fff",
    padding: "50px 30px",
  },
  about: {
    "& img": {
      width: "100%",
      marginBottom: "2px",
    },
  },
  linkList: {
    "& ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    "& li": {
      marginBottom: "6px",
      color: "gray",
      fontSize: "14px",
      fontWeight: "400",

    },
    "& a": {
      color: "gray",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "400",
      marginBottom: "2px",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  appPromotion: {
    padding: "18px 10px",
    background: "#46484A",
    borderRadius: "2px",
  },
  downloadLinks: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  img_fluid: {
    width: "90%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={3} md={7} xs={12}>
            <div className={`${classes.about} block`}>
              <img src={logofooter} alt="footer-logo" />
              <Typography variant="body1" fontSize={12} color="#c7c7c7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </div>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <div className={`${classes.linkList} block`}>
              <Typography variant="h6">Site Pages</Typography>
              <ul>
                <li>
                  <Link href="#">Boston</Link>
                </li>
                <li>
                  <Link href="#">How It works</Link>
                </li>
                <li>
                  <Link href="#">Deals & Coupons</Link>
                </li>
                <li>
                  <Link href="#">Articles & Tips</Link>
                </li>
                <li>
                  <Link href="terms-condition.html">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={2} md={3} xs={6}>
            <div className={`${classes.linkList} block`}>
              <Typography variant="h6">Admin Pages</Typography>
              <ul>
                <li>
                  <Link href="category.html">Category</Link>
                </li>
                <li>
                  <Link href="single.html">Single Page</Link>
                </li>
                <li>
                  <Link href="store.html">Store Single</Link>
                </li>
                <li>
                  <Link href="single-blog.html">Single Post</Link>
                </li>
                <li>
                  <Link href="blog.html">Blog</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={4} md={7} xs={12}>
            <div className={classes.appPromotion}>
              <Box>
                <img src={phoneIconImg} alt="mobile-icon" />
                <Typography variant="body1">
                  Get the Dealsy Mobile App and Save more
                </Typography>
              </Box>
              <Box className={classes.downloadLinks}>
                <Link href="#">
                  <img
                    src={googleStoreImg}
                    className={classes.img_fluid}
                    alt=""
                  />
                </Link>
                <Link href="#">
                  <img src={appStoreImg} className={classes.img_fluid} alt="" />
                </Link>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

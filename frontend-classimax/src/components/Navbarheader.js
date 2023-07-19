import React, { useState } from "react";
import { AppBar, Toolbar, Box, Button, Grid } from "@mui/material";
import logo from "../assets/logo.png";
import useStyles from "./NavStyles";
import MenuOptions from "./MenuOptions";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuItem from "@mui/icons-material/Menu";
const Navbar = () => {
  const classes = useStyles();
  const dashboardOptions = [
    { value: 1, name: "Dashboard" },
    { value: 2, name: "Dashboard My Ads" },
    { value: 3, name: "Dashboard Favourite Ads" },
    { value: 4, name: "Dashboard Archived Ads" },
    { value: 5, name: "Dashboard Pending Ads" },
  ];
  const pagesOptions = [
    { value: 6, name: "Pages" },
    { value: 7, name: "About Us" },
    { value: 8, name: "Contact Us" },
    { value: 9, name: "User Profile" },
    { value: 10, name: "404 Page" },
    { value: 11, name: "Package " },
    { value: 12, name: "Single Page" },
    { value: 13, name: "Store Single" },
    { value: 14, name: "Single Post" },
    { value: 15, name: "Blog" },
  ];

  const listingOptions = [
    { value: 16, name: "Listing" },
    { value: 17, name: "Add Grid View" },
    { value: 18, name: "Add List View" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <AppBar position="relative">
        <Toolbar color="transparent" className={classes.toolbar}>
          <Grid container spacing={1} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              sx={{
                display: { xs: "flex", sm: "flex" },
                alignItems: { xs: "center", sm: "center" },
                justifyContent: { xs: "space-between", sm: "space-between" },
              }}
            >
              <Box sx={{ mt: { xs: 2, sm: 2 } }}>
                <img src={logo} alt="Logo" />
              </Box>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <Button variant="contained" onClick={handleMenuClick}>
                  <MenuItem />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <MenuOptions options={dashboardOptions} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <MenuOptions options={pagesOptions} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <MenuOptions options={listingOptions} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <Button variant="outlined">Login</Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <Button variant="contained">
                  <AddCircleIcon />
                  Add Listing
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

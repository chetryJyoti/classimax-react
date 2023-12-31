import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Button, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import useStyles from "./NavStyles";
import MenuOptions from "./MenuOptions";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuItem from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import showNotification from "../../functions/notification";
import { ToastContainer } from "react-toastify";
const Navbarheader = () => {
  const classes = useStyles();
  const { auth } = useAuth();
  // const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const logout = useLogout();

  // useEffect(() => {
  //   if (auth.userName != null) {
  //     navigate("/dashboard");
  //   }
  // }, [auth, navigate]);

  const signOut = async () => {
    await logout();
    // setLoginStatus(false);
    navigate("/login");
    console.log("logout:", auth);
    showNotification("Logged Out!", "success");
  };
  const dashboardOptions = [
    { value: 1, name: "Dashboard", loc: "/dashboard" },
    { value: 2, name: "Dashboard My Ads", loc: "/dashboard" },
    { value: 3, name: "Dashboard Favourite Ads", loc: "/dashboard" },
    { value: 4, name: "Dashboard Archived Ads", loc: "/dashboard" },
    { value: 5, name: "Dashboard Pending Ads", loc: "/dashboard" },
    { value: 19, name: "AdminDashboard", loc: "/adminDashboard" },
  ];
  const pagesOptions = [
    { value: 6, name: "Pages" },
    { value: 7, name: "About Us", loc: "/aboutus" },
    { value: 8, name: "Contact Us", loc: "/contactus" },
    { value: 9, name: "User Profile", loc: "/userProfile" },
    { value: 10, name: "Unauthorized", loc: "/unauthorized" },
    { value: 11, name: "Package ", loc: "/package" },
    { value: 15, name: "Blog", loc: "/blog" },
  ];

  const listingOptions = [
    { value: 16, name: "Listing" },
    { value: 17, name: "Add Grid View", loc: "/listing" },
    { value: 18, name: "Add List View", loc: "/listing" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <ToastContainer />
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
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </Box>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                <Button variant="text" onClick={handleMenuClick}>
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
            <Grid item xs={6} sm={6} md={2} marginBottom={1}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                {!auth.userName ? (
                  <Button variant="outlined">
                    <Link to="/login" className={classes.link}>
                      Login
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={signOut} color="error">
                    SignOut
                  </Button>
                )}
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={2} marginBottom={1}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 0, md: 2 },
                  display: { xs: menuOpen ? "block" : "none", md: "block" },
                }}
              >
                <Button variant="contained" size="large">
                  <AddCircleIcon />
                  <Link to="/addListing" className={classes.link}>
                    Add Listing
                  </Link>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbarheader;

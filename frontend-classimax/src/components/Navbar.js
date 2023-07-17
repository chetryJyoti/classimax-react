import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
const Navbar = () => {
  return (
     <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Navigation className="navbar navbar-expand-lg navbar-light navigation">
              <NavbarBrand className="navbar-brand" href="index.html">
                <img src={logo} alt=""/>
              </NavbarBrand>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <NavbarCollapse className="collapse navbar-collapse mr-0" id="navbarSupportedContent">
                <ul className="navbar-nav  main-nav ">
                  <NavItem className="nav-item active">
                    <NavLink className="nav-link" href="#">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item dropdown dropdown-slide">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      Dashboard
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </NavLink>

                    <div className="dropdown-menu">
                      <NavLink className="dropdown-item" href="dashboard.html">
                        Dashboard
                      </NavLink>
                      <NavLink className="dropdown-item" href="dashboard-my-ads.html">
                        Dashboard My Ads
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        href="dashboard-favourite-ads.html"
                      >
                        Dashboard Favourite Ads
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        href="dashboard-archived-ads.html"
                      >
                        Dashboard Archived Ads
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        href="dashboard-pending-ads.html"
                      >
                        Dashboard Pending Ads
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem className="nav-item dropdown dropdown-slide">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </NavLink>

                    <div className="dropdown-menu">
                      <NavLink className="dropdown-item" href="about-us.html">
                        About Us
                      </NavLink>
                      <NavLink className="dropdown-item" href="contact-us.html">
                        Contact Us
                      </NavLink>
                      <NavLink className="dropdown-item" href="user-profile.html">
                        User Profile
                      </NavLink>
                      <NavLink className="dropdown-item" href="404.html">
                        404 Page
                      </NavLink>
                      <NavLink className="dropdown-item" href="package.html">
                        Package
                      </NavLink>
                      <NavLink className="dropdown-item" href="single.html">
                        Single Page
                      </NavLink>
                      <NavLink className="dropdown-item" href="store.html">
                        Store Single
                      </NavLink>
                      <NavLink className="dropdown-item" href="single-blog.html">
                        Single Post
                      </NavLink>
                      <NavLink className="dropdown-item" href="blog.html">
                        Blog
                      </NavLink>
                    </div>
                  </NavItem>
                  <NavItem className="nav-item dropdown dropdown-slide">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Listing{" "}
                      <span>
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </NavLink>

                    <div className="dropdown-menu">
                      <NavLink className="dropdown-item" href="category.html">
                        Ad-Gird View
                      </NavLink>
                      <NavLink className="dropdown-item" href="ad-listing-list.html">
                        Ad-List View
                      </NavLink>
                    </div>
                  </NavItem>
                </ul>
                <ul className="navbar-nav ml-auto mt-10">
                  <NavItem className="nav-item">
                    <NavLink className="nav-link login-button" href="login.html">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem className="nav-item">
                    <AddButton className="nav-link text-white add-button" href="ad-listing.html">
                      <i className="fa fa-plus-circle"></i> Add Listing
                    </AddButton>
                  </NavItem>
                </ul>
              </NavbarCollapse>
            </Navigation>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;

const Navigation = styled.nav`
  /* Add your styling here */
`;

const NavbarBrand = styled.a`
  /* Add your styling here */
`;

const NavbarCollapse = styled.div`
  /* Add your styling here */
`;

const NavItem = styled.li`
  /* Add your styling here */
`;

const NavLink = styled.a`
  /* Add your styling here */
`;

const AddButton = styled.a`
  /* Add your styling here */
`;

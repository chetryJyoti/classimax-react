import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbarheader.css";
import Dropdown  from "./Dropdown";
import { FaAngleDown } from "react-icons/fa";
const Navbarheader = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      console.log("enter");
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      console.log("left");
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={logo} />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
            Dashboard 
            <FaAngleDown/>
          </Link>
          {dropdown || <Dropdown />}
        </li>
        <li className="nav-item">
          <Link className="nav-links" onClick={closeMobileMenu}>
            Pages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-links login" onClick={closeMobileMenu}>Login</Link>
        </li>
        <li className="nav-item">
          <Link
            to="/addListing"
            className="nav-links addlisting"
            onClick={closeMobileMenu}
          >
           
            AddListing
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbarheader;

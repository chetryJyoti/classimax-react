import React, { useEffect, useState } from "react";

import Navbarheader from "../components/Navbar/Navbarheader";
import Footer from "../components/Footer";
import UserCard from "../components/DashComp/UserCard";
import useAuth from "../hooks/useAuth";

import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { Button } from "@mui/material";

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  const { auth } = useAuth();
  console.log("auth", auth);
  useEffect(() => {
    setUserDetails(auth);
  }, [auth]);
  // useEffect(() => {
  //   console.log("userDetails:", userDetails);
  // }, [userDetails]);

  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
    console.log("logout:", auth);
  };

  return (
    <div>
      <div style={{ padding: "40px", width: "100%" }}>
        <UserCard {...userDetails} />
      </div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Button variant="outlined" onClick={signOut} color="error">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;

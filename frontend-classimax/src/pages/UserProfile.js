import React from "react";

import Navbarheader from "../components/Navbar/Navbarheader";
import Footer from "../components/Footer";
import UserCard from "../components/DashComp/UserCard";
const UserProfile = () => {
  const useDetails = {
    username: "Jyoti chetry",
    email: "chetry@gmail.com",
  };
  return (
    <div>
      <Navbarheader />
      <div style={{ padding: "40px", width: "100%" }}>
        <UserCard useDetails={useDetails} />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;

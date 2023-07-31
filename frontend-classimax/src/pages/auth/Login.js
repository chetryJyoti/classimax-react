import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import useStyles from "./AuthStyles";
import Navbarheader from "../../components/Navbar/Navbarheader";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showNotification from "../../functions/notification";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
const LOGIN_URL = "/auth";

const Login = () => {
  const classes = useStyles();
  const { setAuth } = useAuth();
  // handling user navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = formData;
    if (!username || !password) {
      console.log("test");
      showNotification("All fields are required", "error");
      return;
    }

    try {
      const userData = {
        username,
        password,
      };
      const response = await axios.post(LOGIN_URL, userData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const userId = response?.data?.userId;
      console.log("userId:",userId);
      const userName = response?.data?.userName;
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.userRoles;
      // console.log('accessToken:',accessToken);
      // console.log('roles:',roles);
      // Handle successful login here
      // console.log('userName:',userName);
      setAuth({userId, userName, roles, accessToken });
      showNotification("Login success", "success");
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 600);
    } catch (error) {
      if (error.response) {
        // Handle server response errors
        console.error(
          "Login failed:",
          error.response.data.message || error.message
        );

        showNotification(error.response.data.message, "error");
      } else if (error.request) {
        // Handle network errors
        console.error("Network error:", error.request);
        showNotification(
          "Network error. Please check your internet connection.",
          "error"
        );
      } else {
        // Handle other errors
        console.error("Error:", error.message);
        showNotification("An error occured.Please try agin later", "error");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <div className={classes.formField}>
          <h3 className={classes.header}>Login</h3>
          <TextField
            variant="outlined"
            fullWidth
            label="username*"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formField}>
          <TextField
            type="password"
            variant="outlined"
            label="password*"
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          color="primary"
          className={classes.submitButton}
        >
          Login
        </Button>
      </form>
      <div className={classes.down}>
        <Link to="/register" className={classes.link}>
          Register Now
        </Link>
        <Link to="/resetPassword" className={classes.link}>
          Forgot password
        </Link>
      </div>
    </>
  );
};

export default Login;

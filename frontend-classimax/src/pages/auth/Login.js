import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import useStyles from "./AuthStyles";
import Navbarheader from "../../components/Navbar/Navbarheader";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
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
    try {
      const userData = {
        username,
        password,
      };
      const response = await axios.post("http://localhost:3500/auth", userData);

      // Handle successful login here
      console.log("Login successful:", response.data);
      toast.success("Successful login", {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setInterval(() => {
        navigate("/");
      }, 600);
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Navbarheader />
      <ToastContainer />
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <div className={classes.formField}>
          <h3 className={classes.header}>Login</h3>
          <TextField
            label="Username*"
            variant="outlined"
            fullWidth
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formField}>
          <TextField
            type="password"
            label="Password*"
            variant="outlined"
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

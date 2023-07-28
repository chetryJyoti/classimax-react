import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import Navbarheader from "../../components/Navbar/Navbarheader";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "./AuthStyles";
import { ToastContainer } from "react-toastify";
import showNotification from "../../functions/notification";

const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "acceptTerms") {
      setAcceptTerms(checked);
    }
  };
  const isPasswordMatch = () => {
    return formData.password === formData.confirmPassword;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptTerms) {
      return;
    }
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      // console.log("test");
      showNotification("All fields are required", "error");
      return;
    }
    if (!isPasswordMatch()) {
      showNotification("Passwords do't match!", "error");
      return;
    }
    const { email, password } = formData;
    console.log("username:", email);
    console.log("pass:", password);
    try {
      const { email, password } = formData;
      const userData = {
        username: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3500/users",
        userData
      );
      // console.log("Registration successful:", response.data);
      showNotification(response.data.message, "success");
      setTimeout(() => {
        navigate("/login");
      }, 600);
    } catch (error) {
      // console.error("Registration failed:", error.response.data.message);
      showNotification(error.response.data.message, "error");
    }
  };

  return (
    <>
      <Navbarheader />
      <ToastContainer />
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <div className={classes.formField}>
          <h3
            style={{
              background: "#F5F5F5",
              textAlign: "center",
              padding: "18px",
              marginBottom: "18px",
            }}
          >
            Register Now
          </h3>
          <TextField
            label="Email*"
            variant="outlined"
            fullWidth
            name="email"
            value={formData.email}
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
        <div className={classes.formField}>
          <TextField
            type="password"
            label="Confirm Password*"
            variant="outlined"
            fullWidth
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="acceptTerms"
              checked={acceptTerms}
              onChange={handleChange}
            />
          }
          label="By registering, you accept our Terms & Conditions"
          className={classes.formField}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
          disabled={!acceptTerms}
        >
          Register
        </Button>
      </form>
      <div className={classes.down}>
        <p>Already have an account? </p>
        <Link to="/login" className={classes.link}>
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;

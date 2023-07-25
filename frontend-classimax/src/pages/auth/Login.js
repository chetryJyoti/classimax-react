import React from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import useStyles from "./AuthStyles";
import Navbarheader from "../../components/Navbar/Navbarheader";
import { Link } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Navbarheader />
      <form className={classes.formContainer}>
        <div className={classes.formField}>
          <h3 className={classes.header}>Login</h3>
          <TextField label="Email*" variant="outlined" fullWidth />
        </div>
        <div className={classes.formField}>
          <TextField
            type="password"
            label="Password*"
            variant="outlined"
            fullWidth
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

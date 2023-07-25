import React from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import Navbarheader from "../../components/Navbar/Navbarheader";
import { Link } from "react-router-dom";
import useStyles from "./AuthStyles";

const Register = () => {
  const classes = useStyles();
  return (
    <>
      <Navbarheader />
      <form className={classes.formContainer}>
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
        <div className={classes.formField}>
          <TextField
            type="password"
            label="Confirm Password*"
            variant="outlined"
            fullWidth
          />
        </div>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="By registering, you accept our Terms & Conditions"
          className={classes.formField}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submitButton}
        >
          Register Now
        </Button>
      </form>
      <div className={classes.down}>
        <p>Already have a account? </p>
        <Link to="/login" className={classes.link}>
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;

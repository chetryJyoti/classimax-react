//

import React, { useState } from "react";
import useStyles from "./FormStyles";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  InputLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const AdForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    adType: "personal",
    price: "",
    negotiable: false,
    description: "",
    // seller info
    contactName: "",
    contactNumber: "",
    contactEmail: "",
    contactAddress: "",
    premiumAdOption: "regular",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };
  // Handle form submission
  const submitAdListing = async (event) => {
    event.preventDefault();

    // Perform basic form validation
    // if (
    //   !formData.title ||
    //   !formData.category ||
    //   !formData.price ||
    //   !formData.contactName ||
    //   !formData.contactNumber
    // ) {
    //   alert("Please fill in all required fields.");
    //   return;
    // }

    try {
      console.log(formData);
      // Replace the following URL with your actual ad listing endpoint
      // const response = await axios.post(
      //   "http://localhost:3500/adlisting",
      //   formData
      // );

      // Handle successful ad posting here
      // console.log("Ad posted successfully:", response.data);
      // Show a success message to the user
      // alert("Ad posted successfully!");

      // Optionally, redirect the user to a success page or reset the form fields
      // Example: history.push("/success");
      // Example: setFormData({ title: "", category: "", ... });
    } catch (error) {
      // Handle ad posting error here
      console.error("Failed to post ad:", error);
      // Show an error message to the user
      alert("Failed to post ad. Please try again later.");
    }
  };
  return (
    <form className={classes.formContainer} onSubmit={submitAdListing}>
      <Typography variant="h6">Post Your ad</Typography>
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Title Of Ad:</Typography>
          <TextField
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
            className={classes.formField}
            fullWidth
            placeholder="Ad title"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Select Ad Category:</Typography>
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="inputGroupSelect">Select category</InputLabel>
            <Select
              id="inputGroupSelect"
              labelId="inputGroupSelect"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <MenuItem value={"default"}>Select category</MenuItem>
              <MenuItem value={"Laptop"}>Laptops</MenuItem>
              <MenuItem value={"Iphone"}>Iphones</MenuItem>
              <MenuItem value={"Monitors"}>Monitors</MenuItem>
              <MenuItem value={"Tv"}>Tv</MenuItem>
              <MenuItem value={"Electronics"}>Electronics</MenuItem>
              <MenuItem value={"Android"}>Android</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Ad type:</Typography>
          <FormControl component="fieldset" className={classes.formField}>
            <RadioGroup
              name="adType"
              value={formData.adType} // Link the value to the formData state
              onChange={handleChange} // Link the handleChange function
            >
              <FormControlLabel
                value="personal"
                control={<Radio color="primary" />}
                label="Personal"
              />
              <FormControlLabel
                value="business"
                control={<Radio color="primary" />}
                label="Business"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Item Price ($ USD):</Typography>
          <div className={classes.priceRow}>
            <TextField
              name="price"
              variant="outlined"
              placeholder="Price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className={classes.price}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ margin: "0 4px" }}
                  name="negotiable"
                  value={formData.negotiable}
                  onChange={handleChange}
                />
              }
              label="Negotiable"
              className={classes.price}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Description:</Typography>
          <TextField
            name="description"
            multiline
            rows={7}
            variant="outlined"
            className={classes.formField}
            value={formData.description}
            onChange={handleChange}
            fullWidth
            placeholder="Write details about your product"
          />
        </Grid>
        {/* images upload section  */}
        <Grid item xs={12} md={6}>
          <div className={classes.uploadContainer}>
            <span className="d-block font-weight-bold text-dark">
              Drop files anywhere to upload
            </span>
            <span className="d-block">or</span>
            <span className="d-block">Maximum upload file size: 500 KB</span>
            <input
              type="file"
              className="form-control-file d-none"
              name="file"
            />
          </div>
        </Grid>
      </Grid>
      {/* seller info */}
      <Typography variant="h6">Seller Informantion</Typography>
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Name:</Typography>
          <TextField
            variant="outlined"
            name="contactName"
            className={classes.formField}
            fullWidth
            value={formData.contactName}
            onChange={handleChange}
            placeholder="Contact name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Number:</Typography>
          <TextField
            variant="outlined"
            name="contactNumber"
            className={classes.formField}
            fullWidth
            placeholder="Contact number"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact email:</Typography>
          <TextField
            variant="outlined"
            name="contactEmail"
            className={classes.formField}
            fullWidth
            value={formData.contactEmail}
            onChange={handleChange}
            placeholder="name@youremail.com"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Address:</Typography>
          <TextField
            variant="outlined"
            name="contactAddress"
            className={classes.formField}
            fullWidth
            placeholder="your address"
            value={formData.contactAddress}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      {/* payment section */}
      <Typography variant="h6">Make your Ad Featured</Typography>
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Preminum Ad Options:</Typography>
          <FormControl component="fieldset" className={classes.formField}>
            <RadioGroup
              name="premiumAdOption"
              value={formData.premiumAdOption}
              onChange={handleChange}
            >
              <FormControlLabel
                value="regular"
                control={<Radio color="primary" />}
                label="Regular Ad $00.00"
              />
              <FormControlLabel
                value="top_featured"
                control={<Radio color="primary" />}
                label="Top Featured Ads $59.00"
              />
              <FormControlLabel
                value="urgent"
                control={<Radio color="primary" />}
                label="Urgent Ads $59.00"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained">
        Post your Ad
      </Button>
    </form>
  );
};

export default AdForm;

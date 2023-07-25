import React from "react";
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
  return (
    <form className={classes.formContainer}>
      <Typography variant="h6">Post Your ad</Typography>
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Title Of Ad:</Typography>
          <TextField
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
            <Select id="inputGroupSelect">
              <MenuItem value={1}>Select category</MenuItem>
              <MenuItem value={2}>Laptops</MenuItem>
              <MenuItem value={3}>iphone</MenuItem>
              <MenuItem value={4}>microsoft</MenuItem>
              <MenuItem value={5}>monitors</MenuItem>
              <MenuItem value={6}>11inch Macbook Air</MenuItem>
              <MenuItem value={7}>Study Table Combo</MenuItem>
              <MenuItem value={8}>11inch Macbook Air</MenuItem>
              <MenuItem value={9}>Study Table Combo</MenuItem>
              <MenuItem value={10}>11inch Macbook Air</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Ad type:</Typography>
          <FormControl component="fieldset" className={classes.formField}>
            <RadioGroup name="itemName">
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
              className={classes.price}
            />
            <FormControlLabel
              control={<Checkbox style={{ margin: "0 4px" }} />}
              label="Negotiable"
              className={classes.price}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Description:</Typography>
          <TextField
            multiline
            rows={7}
            variant="outlined"
            className={classes.formField}
            fullWidth
            placeholder="Write details about your product"
          />
        </Grid>

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
            className={classes.formField}
            fullWidth
            placeholder="Contact name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Number:</Typography>
          <TextField
            variant="outlined"
            className={classes.formField}
            fullWidth
            placeholder="Contact number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact email:</Typography>
          <TextField
            variant="outlined"
            className={classes.formField}
            fullWidth
            placeholder="name@youremail.com"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Address:</Typography>
          <TextField
            variant="outlined"
            className={classes.formField}
            fullWidth
            placeholder="your address"
          />
        </Grid>
      </Grid>
      {/* payment section */}
      <Typography variant="h6">Make your Ad Featured</Typography>
      <Grid container spacing={2} marginBottom={4}>
      <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Preminum Ad Options:</Typography>
          <FormControl component="fieldset" className={classes.formField}>
            <RadioGroup name="itemName">
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
      <Button type="submit" variant="contained">Post your Ad</Button>
    </form>
  );
};

export default AdForm;

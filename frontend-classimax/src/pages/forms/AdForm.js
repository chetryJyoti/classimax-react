import React from "react";
import { makeStyles } from "@mui/styles";

import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  InputLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  formContainer: {
    border: "1px solid #ccc",
    padding: "3rem",
    marginBottom: "1rem",
  },
  formField: {
    marginBottom: "1rem",
    background: "white",
  },

  priceRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
  },
  uploadContainer: {
    border: "1px dashed #ccc",
    padding: "1rem",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "28px",
    height: "200px",
  },
});
const AdForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.formContainer}>
      <Typography variant="h6">Post Your ad</Typography>
      <Grid container spacing={2}>
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

        <Grid  item xs={12} md={6}>
        {/* <fieldset class="border p-4 my-5 seller-information bg-gray">
                <div class="row">
                    <div class="col-lg-12">
                        <h3>Seller Information</h3>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                        <input type="text" placeholder="Contact name" class="border w-100 p-2">
                        <h6 class="font-weight-bold pt-4 pb-1">Contact Number:</h6>
                        <input type="text" placeholder="Contact Number" class="border w-100 p-2">
                    </div>
                    <div class="col-lg-6">
                        <h6 class="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                        <input type="email" placeholder="name@yourmail.com" class="border w-100 p-2">
                        <h6 class="font-weight-bold pt-4 pb-1">Contact Name:</h6>
                        <input type="text" placeholder="Your address" class="border w-100 p-2">
                    </div>
                </div>
            </fieldset> */}
            <Typography variant="subtitle1">Seller Information</Typography>
            <div>
                <div></div>
                <div></div>
            </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdForm;

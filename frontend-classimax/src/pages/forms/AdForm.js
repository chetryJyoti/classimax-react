import React, { useState, useEffect } from "react";
import useStyles from "./FormStyles";
import uploadImageToS3 from "../../functions/uploadImg";
import { ToastContainer } from "react-toastify";
import showNotification from "../../functions/notification";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
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
  Checkbox,
  Typography,
} from "@mui/material";

const AdForm = () => {
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLinks, setImageLinks] = useState([]);
  //for removing images before uploading if selected
  const [hoverIndex, setHoverIndex] = useState(null);

  const initialFormData = {
    // userid
    //need to get this from the user information page----change this----note
    user: "64be3ca2f5a97df29e2b90c0",
    title: "",
    category: "",
    type: "personal",
    price: "",
    negotiable: false,
    desc: "",
    images: imageLinks,
    // seller info
    seller: "",
    name: "",
    number: "",
    email: "",
    address: "",
    payment_option: "regular",
  };
  useEffect(() => {
    console.log("Updated image links:", imageLinks);
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: imageLinks,
    }));
  }, [imageLinks]);

  const [formData, setFormData] = useState(initialFormData);

  //serverless images upload to s3 bucket
  const handleImgFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleRemoveImage = (event, index) => {
    event.preventDefault();
    setImageLinks((prevImageLinks) => {
      const updatedLinks = [...prevImageLinks];
      updatedLinks.splice(index, 1);
      return updatedLinks;
    });
  };
  const uploadImage = async () => {
    if (selectedImage) {
      try {
        if (imageLinks.length >= 6) {
          // console.error("You can only upload up to 6 files.");
          showNotification("max 6 files can only be uploaded", "error");
        } else {
          const imageUrl = await uploadImageToS3(selectedImage);
          setImageLinks((prevImageLinks) => [...prevImageLinks, imageUrl]);
        }
      } catch (error) {
        // console.error("Image upload failed:", error);
        showNotification("Image upload failed", "error");
      }
    } else {
      showNotification("Please select an image file.", "error");
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue =
      name === "price" || name === "number"
        ? parseInt(value)
        : type === "checkbox"
        ? checked
        : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };
  // Handle form submission
  const submitAdListing = async (event) => {
    event.preventDefault();

    try {
      // console.log(formData);
      if (imageLinks.length <= 0) {
        showNotification("please select atlease one image", "error");
        return null;
      } else {
        const response = await axios.post(
          process.env.REACT_APP_BASE_URL + "/adListing",
          formData
        );
        console.log("response adListing", response.data);
        showNotification(response.data.message, "success");
        setFormData(initialFormData);
        setImageLinks([]);
      }
    } catch (error) {
      if (error.response) {
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
    <form className={classes.formContainer} onSubmit={submitAdListing}>
      <Typography variant="h6">Post Your ad</Typography>
      <ToastContainer />
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
            {/* <InputLabel id="inputGroupSelect">Select category</InputLabel> */}
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
              name="type"
              value={formData.type} // Link the value to the formData state
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
              type="number"
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
            name="desc"
            multiline
            rows={7}
            variant="outlined"
            className={classes.formField}
            value={formData.desc}
            onChange={handleChange}
            fullWidth
            placeholder="Write details about your product"
          />
        </Grid>
        {/* images upload section  */}
        <Grid item xs={12} md={6}>
          <div className={classes.uploadContainer}>
            <div>
              <input type="file" name="file" onChange={handleImgFileChange} />
              <Button
                variant="outlined"
                onClick={uploadImage}
                style={{ marginTop: "4px" }}
              >
                Upload Image
              </Button>
            </div>
            <div>
              {imageLinks.length > 0 && (
                <div>
                  <div>
                    <Typography variant="subtitle2" marginTop={1}>
                      Uploaded Images:
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    {imageLinks.map((imageUrl, index) => (
                      <div
                        key={index}
                        style={{
                          position: "relative",
                          margin: "6px",
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        <img
                          src={imageUrl}
                          alt={`Uploaded ${index + 1}`}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "6px",
                          }}
                        />
                        {hoverIndex === index && (
                          <Button
                            onClick={(event) => handleRemoveImage(event,index)}
                            variant="outlined"
                            color="error"
                            size="small"
                            style={{
                              position: "absolute",
                              textAlign:'center',
                              cursor:'pointer',
                              top: '16px',
                              right: 0,
                              // backgroundColor: "gray",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <DeleteIcon color="error" fontSize="large"/>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            name="name"
            className={classes.formField}
            fullWidth
            value={formData.name}
            onChange={handleChange}
            placeholder="Contact name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Number:</Typography>
          <TextField
            variant="outlined"
            name="number"
            className={classes.formField}
            fullWidth
            type="number"
            placeholder="Contact number"
            value={formData.number}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact email:</Typography>
          <TextField
            variant="outlined"
            name="email"
            type="email"
            className={classes.formField}
            fullWidth
            value={formData.email}
            onChange={handleChange}
            placeholder="name@youremail.com"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1">Contact Address:</Typography>
          <TextField
            variant="outlined"
            name="address"
            className={classes.formField}
            fullWidth
            placeholder="your address"
            value={formData.address}
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
              name="payment_option"
              value={formData.payment_option}
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

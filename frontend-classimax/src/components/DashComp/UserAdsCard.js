import React, { useState } from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const useStyles = makeStyles(() => ({
  cardStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

const formatedDate = (data) => {
  const formatedData = new Date(data)?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return formatedData;
};

const UserAdsCard = ({ productInfo, onProductDlt }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDeleteBtn = () => {
    setOpen(true);
  };
  const handleProductDlt = async (productId) => {
    // try {
    //   // Call the API to delete the product
    //   const response = await axios.delete(
    //     `${process.env.REACT_APP_BASE_URL}/adListing/${productId}`
    //   );
    //   console.log("response", response);
    // } catch (error) {
    //   console.log(error.message);
    // }
    // onProductDlt;
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ marginBottom: "16px" }}>
      <Card variant="outlined" className={classes.cardStyle}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <img
                src={productInfo?.images[0]}
                alt="Product"
                style={{ maxWidth: "100%", width: "60%", height: "80%" }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                <span>{productInfo?.title}</span>
              </Typography>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                Category:
                <span>{productInfo?.category}</span>
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Product id:<span>{productInfo._id}</span> <br />
                Posted On:
                <span>{formatedDate(productInfo.createdAt) || "N/A"}</span>{" "}
                <br />
                Price:<span>{productInfo.price}</span> <br />
                Last Updated:
                <span>{formatedDate(productInfo.createdAt) || "N/A"}</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <CardActions>
                <Button size="small" variant="outlined">
                  <EditIcon />
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteBtn}
                >
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {/* alert box */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete product  "}
          {productInfo.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your cannot undo this action!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">
            Back
          </Button>
          <Button onClick={onProductDlt} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserAdsCard;
